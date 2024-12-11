import json
from flask import Flask, request, jsonify
import pandas as pd
from openai import OpenAI
import os
from dotenv import load_dotenv

app = Flask(__name__)

with open('../client/src/pages/data.json', 'r') as f:
    data = json.load(f)

load_dotenv()
openai_api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=openai_api_key)

@app.route('/ask', methods=['POST'])
def ask_question():
    question = request.json.get('question', None)
    if not question:
        return jsonify({"error": "No question provided."}), 400
    try:
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "user", 
                "content": f"Answer the following question based on this data:\n{json.dumps(data)}\n\nQuestion: {question}"
            }]
        )
        answer = completion['choices'][0]['message']['content'].strip()
        return jsonify({"question": question, "answer": answer})
    
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)