from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory storage for current PIN; you can modify this to use a database if needed
current_pin_index = 0
pins = []  # This will hold the uploaded PINs

@app.route('/pins', methods=['POST'])
def receive_pins():
    global pins
    data = request.get_json()
    if not data or 'pins' not in data:
        return jsonify({'error': 'No pins provided'}), 400

    pins = data['pins']
    print("Received PINs:", pins)

    return jsonify({'message': 'Pins received successfully', 'pins': pins}), 200

@app.route('/current_pin', methods=['GET'])
def get_current_pin():
    global current_pin_index
    if not pins or current_pin_index >= len(pins):
        return jsonify({'error': 'No more pins to process'}), 404
    current_pin = pins[current_pin_index]
    return jsonify({'pin': current_pin}), 200

@app.route('/advance_pin', methods=['POST'])
def advance_pin():
    global current_pin_index
    if current_pin_index < len(pins):
        current_pin_index += 1
    return jsonify({'current_index': current_pin_index}), 200

if __name__ == '__main__':
    app.run(debug=True)
