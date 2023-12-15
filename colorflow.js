function schriftfarbeAendern() {
  var textElement = document.getElementById("TargetID");
  var zufallsfarbe = '#' + Math.floor(Math.random()*16777215).toString(16); // Zufällige Hex-Farbe generieren
  textElement.style.color = zufallsfarbe;
}

var flag = "XMAS{ce490093a795db98ba4bcffe50a90db2}";
// Die Funktion periodisch aufrufen (in diesem Beispiel alle 2 Sekunden)

document.getElementById("TargetID").style.transition = "color 0.5";
setInterval(schriftfarbeAendern, 1000);
