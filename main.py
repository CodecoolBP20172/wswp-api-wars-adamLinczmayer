from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def route_index():
    return render_template("index.html")


if __name__ == "__main__":
    app.secret_key = "magic"  # Change the content of this string
    app.run(
        debug=True,
        port=5000
    )
