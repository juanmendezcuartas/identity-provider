from flask import Flask, jsonify, request
import mysql.connector as mariadb
from flask_cors import CORS, cross_origin

mariadb_conection = mariadb.connect(
  host='0.0.0.0',
  user='root',
  password='root',
  database='providerAdmin',
  port='3306'
)

app = Flask(__name__)

CORS(app)

# HOME
@cross_origin
@app.route('/', methods=['GET'])
def saludo():
  return jsonify({"message": "Bienvenido"})

# GET ALL
@cross_origin
@app.route('/users', methods=['GET'])
def getUsers():
  cursor = mariadb_conection.cursor()
  cursor.execute('SELECT * FROM users')
  result = cursor.fetchall()
  return jsonify(result)

# GET ONE
@cross_origin
@app.route('/users/<int:user_id>', methods=['GET'])
def getUser(user_id):
  cursor = mariadb_conection.cursor()
  cursor.execute('SELECT * FROM users WHERE id= {}'.format(user_id))
  result = cursor.fetchall()
  return jsonify({"user":result, "message": "User"})

# ADD USER
@cross_origin
@app.route('/users/', methods=['POST'])
def addUser():

  if request.method == 'POST':
    data = request.get_json()
    name = data['name']
    email = data['email']
    phone = data['phone']
    role = data['role']
    cursor = mariadb_conection.cursor()
    cursor.execute('INSERT INTO users (name, email, phone, role) VALUES (%s, %s, %s, %s)', (name, email, phone, role))
    mariadb_conection.commit()
    return jsonify({"message": "User created"})

#UPDATE USER
@cross_origin
@app.route('/users/<int:user_id>', methods=['PUT'])
def updateUser(user_id):

  if request.method == 'PUT':
    data = request.get_json()
    name = data['name']
    email = data['email']
    phone = data['phone']
    role = data['role']
    cursor = mariadb_conection.cursor()
    cursor.execute('UPDATE users SET name=%s, email=%s, phone=%s, role=%s WHERE id=%s', (name, email, phone, role, user_id))
    mariadb_conection.commit()
    return jsonify({"message": "User Modified"})

# DELETE ONE
@cross_origin
@app.route('/users/<int:user_id>', methods=['DELETE'])
def deleteUser(user_id):
  cursor = mariadb_conection.cursor()
  cursor.execute('DELETE FROM users WHERE id= {}'.format(user_id))
  mariadb_conection.commit()
  return jsonify({"message": "User eliminated"})

if __name__ == '__main__':
  app.run(host="0.0.0.0", debug=True, port=3006)