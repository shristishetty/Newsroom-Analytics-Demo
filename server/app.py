import json
from flask import Flask, request, jsonify
from transformers import pipeline
import pandas as pd

app = Flask(__name__)

# Load your JSON data (ensure it's loaded in the correct format)
data = pd.read_json('../client/src/pages/data.json')
data = data.to_dict(orient='records')

# Initialize Hugging Face's question-answering pipeline
qa_pipeline = pipeline('question-answering')

def query_huggingface(question, context):
    result = qa_pipeline(question=question, context=context)
    return result['answer']

@app.route('/ask', methods=['POST'])
def ask_question():
    user_question = request.json.get('question', None)

    if not user_question:
        return jsonify({"error": "No question provided."}), 400

    # Prepare context for the question from the data
    # You can adjust this to select relevant parts of your JSON data
    context = json.dumps(data)  # Or adjust to get a relevant context from your data

    answer = query_huggingface(user_question, context)
    
    return jsonify({"question": user_question, "answer": answer})

if __name__ == "__main__":
    app.run(debug=True)