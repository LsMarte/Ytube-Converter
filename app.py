from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import yt_dlp
import os
import uuid

app = Flask(__name__)
CORS(app)

DOWNLOAD_DIR = os.path.join(os.getcwd(), "downloads")
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

@app.route("/")
def index():
    return jsonify({"message": "YouTube Downloader API Backend"})

@app.route("/download", methods=["GET"])
def download():
    url = request.args.get("url")
    format_type = request.args.get("format", "mp3")  # mp3 or mp4

    if not url:
        return jsonify({"error": "Missing URL"}), 400

    # Generate unique filename
    file_id = str(uuid.uuid4())
    outtmpl = os.path.join(DOWNLOAD_DIR, f"{file_id}.%(ext)s")

    ydl_opts = {
        "outtmpl": outtmpl,
        "quiet": True,
    }

    if format_type == "mp3":
        ydl_opts.update({
            "format": "bestaudio/best",
            "postprocessors": [{
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3",
                "preferredquality": "192",
            }],
        })
        ext = "mp3"
    elif format_type == "mp4":
        ydl_opts.update({"format": "best"})
        ext = "mp4"
    else:
        return jsonify({"error": "Invalid format type"}), 400

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        file_path = os.path.join(DOWNLOAD_DIR, f"{file_id}.{ext}")
        return send_file(file_path, as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
    from flask import after_this_request

...

@app.route("/download", methods=["GET"])
def download():
    ...
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        file_path = os.path.join(DOWNLOAD_DIR, f"{file_id}.{ext}")

        @after_this_request
        def remove_file(response):
            try:
                os.remove(file_path)
            except Exception as e:

                CORS(app, resources={r"/download": {"origins": "https://lsmarte.github.io/Ytube-Converter/"}})
                print(f"Error deleting file: {e}")
            return response

        return send_file(file_path, as_attachment=True)
