from flask import Flask, render_template
import pandas as pd
import numpy as np
from flask_bootstrap import Bootstrap

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


@app.route('/slider')
def slider():
    return render_template("slider.html")

if __name__ == '__main__':
    app.run(debug=True)
