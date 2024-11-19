# from flask import Flask, request, jsonify
# from flask_cors import CORS 

# import mysql.connector

# app = Flask(__name__)
# CORS(app) 
# # MySQL connection configuration
# db_config = {
#     'host': '127.0.0.1',
#     'user': 'root',
#     'password': '',
#     'database': 'giftcard'
# }

# def connect_db():
#     return mysql.connector.connect(**db_config)

# @app.route('/update_balance', methods=['POST'])
# def update_balance():
#     data = request.get_json()
#     pin = data.get('pin')
#     balance = data.get('balance')

#     print("12312", data)
#     if not pin or not balance:
#         return jsonify({"error": "Invalid data"}), 400

#     conn = connect_db()
#     cursor = conn.cursor()

#     # Check if the PIN already exists
#     cursor.execute("SELECT balance FROM gift_cards WHERE card_number = %s", (pin,))
#     result = cursor.fetchone()

#     if result:
#         # Update the existing balance
#         cursor.execute("UPDATE gift_cards SET balance = %s WHERE card_number = %s", (balance, pin))
#         message = "Balance updated"
#     else:
#         # Insert the new PIN and balance
#         cursor.execute("INSERT INTO gift_cards (card_number, balance) VALUES (%s, %s)", (pin, balance))
#         message = "New card added"

#     conn.commit()
#     cursor.close()
#     conn.close()

#     return jsonify({"message": message})

# if __name__ == '__main__':
#     app.run(debug=True)



from flask import Flask, request, jsonify
from flask_cors import CORS 
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL connection configuration
db_config = {
    'host': '127.0.0.1',
    'user': 'root',
    'password': '',
    'database': 'giftcard'
}

def connect_db():
    return mysql.connector.connect(**db_config)

@app.route('/update_balance', methods=['POST'])
def update_balance():
    data = request.get_json()
    pin = data.get('pin')
    balance = data.get('balance')

    if not pin or not balance:
        return jsonify({"error": "Invalid data"}), 400

    conn = connect_db()
    cursor = conn.cursor()

    # Check if the PIN already exists
    cursor.execute("SELECT balance FROM gift_cards WHERE card_number = %s", (pin,))
    result = cursor.fetchone()

    if result:
        # Update the existing balance
        cursor.execute("UPDATE gift_cards SET balance = %s WHERE card_number = %s", (balance, pin))
        message = "Balance updated"
    else:
        # Insert the new PIN and balance
        cursor.execute("INSERT INTO gift_cards (card_number, balance) VALUES (%s, %s)", (pin, balance))
        message = "New card added"

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": message})

# New route to fetch all gift card data from MySQL
@app.route('/get_cards', methods=['GET'])
def get_cards():
    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute("SELECT card_number, balance FROM gift_cards")
    result = cursor.fetchall()

    # Convert the result into a list of dictionaries
    cards = [{"card_number": row[0], "balance": row[1]} for row in result]

    cursor.close()
    conn.close()

    return jsonify(cards)

if __name__ == '__main__':
    app.run(debug=True)
