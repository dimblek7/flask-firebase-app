from flask import Flask, render_template, make_response
import os
import time

app = Flask(__name__)

def format_server_time():
    server_time = time.localtime()
    return time.strftime("%Y-%m-%d %H:%M", server_time)

@app.route('/')
def index():
    context = { "server_time": format_server_time() }
    template = render_template("index.html", context=context)
    response = make_response(template)
    response.headers['Cache-Control'] = 'public, max-age=300, s-maxage=600'
    return response

@app.route('/api/html')
def index1():
    return "HTml"

@app.route('/api/userdata')
def index2():
    return { "hi": "I am kiran" }

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))