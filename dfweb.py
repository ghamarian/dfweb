from flask import Flask, render_template, request, jsonify
import pandas as pd
import numpy as np
from flask_bootstrap import Bootstrap
import json

app = Flask(__name__)
Bootstrap(app)


# @app.route('/')
def hello_world():
    return render_template("main.html")


@app.route('/')
def analysis():
    # x = pd.DataFrame(np.random.randn(20, 5))
    x = pd.read_csv('/Users/amir/projects/dfweb/data/iris.csv')
    col_number =  x.columns.shape[0]
    cat = assign_category(col_number)
    data=(x.iloc[:6, :]).T
    data.reset_index()
    data.insert(0, 'category', cat)
    return render_template("analysis.html", name='amir', data=data)


def assign_category(col_numbers):
    cat = np.random.choice(['numerical', 'categorical'], col_numbers)
    return cat

@app.route('/cat_col', methods=['GET', 'POST'])
def cat_col():
    category_list = json.loads(request.form['cat_column'])
    print(category_list, type(category_list))
    return jsonify({'category_list': 2})

@app.route('/slider')
def slider():
    return render_template("slider.html")

if __name__ == '__main__':
    app.run(debug=True)
