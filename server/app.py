import json
from flask import Flask, request, jsonify
from transformers import pipeline
import os
from dotenv import load_dotenv

app = Flask(__name__)

# Load environment variables
load_dotenv()
huggingface_token = os.getenv("HUGGINGFACE_API_KEY")

# Initialize the pipeline with FLAN-T5
pipe = pipeline("text2text-generation", model="google/flan-t5-base")

# Load data from JSON
with open('../client/src/pages/data.json', 'r') as f:
    data = json.load(f)

@app.route('/ask', methods=['POST'])
def ask_question():
    question = request.json.get('question', None)

    try:
        # Prepare the prompt
        prompt = (
            f"The following is a dataset:\n{json.dumps(data)}\n\n"
            f"Based on the dataset, answer the following question in complete sentences:\n{question}\n\n"
        )

        # Generate the response
        generated_text = pipe(prompt, max_length=200, num_return_sequences=1)
        answer = generated_text[0]["generated_text"].strip()

        return jsonify({"question": question, "answer": answer})

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)