function schriftfarbeAendern() {
  var textElement = document.getElementById("TargetID");
  var zufallsfarbe = '#' + Math.floor(Math.random()*16777215).toString(16); // Zufällige Hex-Farbe generieren
  textElement.style.color = zufallsfarbe;
}

// Geheime Information gelöscht!!! TODO: Bitte auch aus der Commit-History entfernen!!!
// Die Funktion periodisch aufrufen (in diesem Beispiel alle 2 Sekunden)

document.getElementById("TargetID").style.transition = "color 0.5";
setInterval(schriftfarbeAendern, 1000);
