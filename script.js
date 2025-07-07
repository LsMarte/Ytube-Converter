function downloadMusic(format) {
    const urlInput = document.getElementById('music-url');
    const status = document.getElementById('status');
    const query = urlInput.value.trim();

    if (!query.startsWith("http")) {
        status.textContent = "Please enter a valid YouTube URL.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Processing download...";
    status.style.color = "black";

    const downloadUrl = `http://localhost:5000/download?url=${encodeURIComponent(query)}&format=${format}`;

    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = "";
    anchor.click();

    status.textContent = "Download started.";
}

document.getElementById('music-url').addEventListener('input', () => {
    const status = document.getElementById('status');
    const value = document.getElementById('music-url').value.trim();
    if (value === '') {
        status.textContent = "Enter a valid YouTube URL.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
status.textContent = "Processing download...";
document.getElementById('spinner').classList.remove("hidden");

anchor.click();

setTimeout(() => {
  document.getElementById('spinner').classList.add("hidden");
  status.textContent = "Download started.";
}, 2000);
