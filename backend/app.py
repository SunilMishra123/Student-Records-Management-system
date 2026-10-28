from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3, os

app = Flask(__name__)
CORS(app)

DB = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'students.db')

def init_db():
    conn = sqlite3.connect(DB)
    c = conn.cursor()
    c.execute('DROP TABLE IF EXISTS students')
    c.execute('''CREATE TABLE students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        roll_no TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        branch TEXT,
        semester TEXT,
        cgpa TEXT,
        skills TEXT,
        github TEXT,
        linkedin TEXT,
        photo TEXT
    )''')
    conn.commit()
    conn.close()

@app.route('/api/students', methods=['GET'])
def get():
    conn = sqlite3.connect(DB)
    conn.row_factory = sqlite3.Row
    rows = [dict(r) for r in conn.execute('SELECT * FROM students').fetchall()]
    conn.close()
    return jsonify(rows)

@app.route('/api/students', methods=['POST'])
def add():
    d = request.json
    conn = sqlite3.connect(DB)
    conn.execute('INSERT INTO students (name,roll_no,email,phone,branch,semester,cgpa,skills,github,linkedin,photo) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    (d['name'],d['roll_no'],d['email'],d.get('phone'),d.get('branch'),d.get('semester'),d.get('cgpa'),d.get('skills'),d.get('github'),d.get('linkedin'),d.get('photo','')))
    conn.commit()
    conn.close()
    return jsonify({"msg":"added"}),201

@app.route('/api/students/<int:id>', methods=['DELETE'])
def delete(id):
    conn = sqlite3.connect(DB)
    conn.execute('DELETE FROM students WHERE id=?',(id,))
    conn.commit()
    conn.close()
    return jsonify({"msg":"deleted"})

if __name__=='__main__':
    init_db()
    app.run(debug=True, port=5000)