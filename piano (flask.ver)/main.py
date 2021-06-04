from flask import Flask, render_template

app = Flask(__name__) 

@app.route('/') 
def index():
    return render_template('index.html')

@app.route('/menuSelect')
def menuSelect():
    return render_template('menuSelect.html')

@app.route('/drum')
def drum():
    return render_template('drum.html')

@app.route('/piano')
def piano():
    return render_template('piano.html')

if __name__ == '__main__': 
    app.run(host='0.0.0.0', debug=False)