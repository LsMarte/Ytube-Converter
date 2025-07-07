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

document.getElementById('download-btn').addEventListener('click', () => {
    const format = document.querySelector('input[name="format"]:checked').value;
    downloadMusic(format);
});
document.getElementById('music-url').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const format = document.querySelector('input[name="format"]:checked').value;
        downloadMusic(format);
    }
});
document.getElementById('music-url').addEventListener('input', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('focus', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('blur', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});

document.getElementById('music-url').addEventListener('paste', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('change', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
}
);
document.getElementById('music-url').addEventListener('keyup', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
}
);
document.getElementById('music-url').addEventListener('keydown', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
}
);
document.getElementById('music-url').addEventListener('select', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('cut', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('copy', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('input', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('focusout', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
}
);
document.getElementById('music-url').addEventListener('focusin', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('compositionstart', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('compositionend', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
}
);
document.getElementById('music-url').addEventListener('input', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
});
document.getElementById('music-url').addEventListener('change', () => {
    const status = document.getElementById('status');
    if (document.getElementById('music-url').value.trim() === '') {
        status.textContent = "Enter a song name or keyword.";
        status.style.color = "red";
    } else {
        status.textContent = "";
    }
}
);
