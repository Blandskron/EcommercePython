from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend funcionando 🚀"

@app.route("/productos")
def productos():
    return jsonify([
        {"nombre": "Smartphone Pro Max", "precio": 599990},
        {"nombre": "Audífonos Noise Cancel", "precio": 129900}
    ])

if __name__ == "__main__":
    app.run(debug=True)