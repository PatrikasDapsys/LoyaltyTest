function arNidasLoyal(status) {j
    if (status === "taip") {
        document.querySelector(".answer").innerHTML = "Nemeluok! Nidas Jankauskas niekada nėra loyal.";
    }
    else if (status === "ne") {
        document.querySelector(".answer").innerHTML = "Teisingai! Nidas Jankauskas nėra loyal.";
    }
}
