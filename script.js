// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "90%";
canvas.style.height = "90%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function paintSquare() {
  // Blå kvadrat
  const s = 400; // Kvadratens sidlängd
  c.fillStyle = "blue";
  c.fillRect(midX - s / 2, midY - s / 2, s, s);

  // Textinställningar
  c.font = "48px Arial";
  c.fillStyle = "Yellow";
  c.textAlign = "center";
  c.fillText("Canvas Rect", midX, midY);
}

function paintCircle() {
  // Gul cirkel
  const r = 150; // Cirkelns radie
  c.fillStyle = "yellow";
  c.beginPath();
  // c.arc(x, y, radie, startvinkel, slutvinkel)
  c.arc(midX, midY, r, 0, 2 * Math.PI); // En cirkel är en "arc" som går mellan 0 och 2pi
  c.closePath();
  c.fill();
}

function paintRing() {
  // Funktionen ritar en ring som består av 12 jämnt fördelade prickar
  const circleRadius = 200;
  const dotRadius = 15;
  c.fillStyle = "red";
  let x; // Kommer att lagra respektive pricks läge i x-led
  let y; // Kommer att lagra respektive pricks läge i y-led
  for (let i = 1; i <= 12; i++) {
    // Beräknar läget på resp. prick
    x = midX + circleRadius * Math.cos((((Math.PI * 360) / 12) * i) / 180);
    y = midY + circleRadius * Math.sin((((Math.PI * 360) / 12) * i) / 180);

    // Ritar prickarna
    c.beginPath();
    c.arc(x, y, dotRadius, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
  }
}

function paintSimpleSquarePattern() {
  const s = 40; // Kvadratens sida
  const space = 3 * s;
  const numRows = 6;
  const numCols = 10;
  let color = ["blue", "red"];
  for (let i = 0; i <= numCols; i++) {
    for (let j = 0; j <= numRows; j++) {
      c.fillStyle = color[(i + 1) % 2];
      if (j % 2 === 1) {
        c.fillStyle = color[i % 2];
      }
      c.fillRect(i * space, j * space, s, s);
    }
  }
}

paintSquare();
// paintCircle();
// paintSimpleSquarePattern();
// paintRing();
