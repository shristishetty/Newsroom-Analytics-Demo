import json
from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["https://newsroom-analytics-demo.vercel.app", "http://localhost:5173"]}})

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(BASE_DIR, '../client/src/pages/data.json')

with open(data_path, 'r') as f:
    data = f.read()

load_dotenv()
os.getenv('OPENAI_API_KEY')
client = OpenAI()

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
        answer = completion.choices[0].message.content
        return jsonify({"question": question, "answer": answer})

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)