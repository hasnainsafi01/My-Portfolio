function checkInternet() {
    if (navigator.onLine) {
        // Internet Working
        document.getElementById("loader").style.display = "none";
        document.getElementById("offline").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        // No Internet
        document.getElementById("loader").style.display = "block";
        document.getElementById("content").style.display = "none";
        document.getElementById("offline").style.display = "block";
    }
}

// Check at start
checkInternet();

// Auto check every 1 second
setInterval(checkInternet, 1000);
