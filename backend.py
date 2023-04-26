from flask import Flask, render_template, request, jsonify, json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/add')
def add():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    return jsonify({"result": a + b})


@app.route('/subtract', methods=["POST"])
def subtract():
    if request.method == "POST":
        data = request.get_json()
        return jsonify({"result": data["a"] - data["b"]})

if __name__ == '__main__':
    app.run(debug=True, port=3000)
