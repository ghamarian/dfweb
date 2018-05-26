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
    x = pd.DataFrame(np.random.randn(20, 5))
    return render_template("analysis.html", name='amir', data=x)


if __name__ == '__main__':
    app.run(debug=True)
