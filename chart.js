//select our chart element
const chart = document.querySelector(".chart");

//create canvas element
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

//append canvas to chart
chart.appendChild(canvas);

//lets draw with canvas
const ctx = canvas.getContext("2d");



//change canvas line width
ctx.lineWidth = 8;

//circle canvas
const R = 20;

function drawCircle(color, ratio, anticlockwise) {
    ctx.strokeStyle = color;
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart(imcome, outcome) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income + outcome);

    drawCircle("white", -ratio, true);
    drawCircle("#f0624d", -ratio, false);
}