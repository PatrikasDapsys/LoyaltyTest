function arNidasLoyal(status) {
    if (status === "taip") {
        document.querySelector(".answer").innerHTML = "Nemeluok! Nidas Jankauskas nėra loyal.";
    }
    else if (status === "ne") {
        document.querySelector(".answer").innerHTML = "Teisingai! Nidas Jankauskas nėra loyal.";
    }
}
