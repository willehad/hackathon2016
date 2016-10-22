
function drawMainNode(x, y, r, color, symbol)
{
	var c = document.getElementById("graphCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = 'center';
	ctx.fillText(symbol,x, y+10);
	ctx.fill();
	ctx.stroke();
}
drawMainNode(250,200,40,"#4E59D4", "FB");
drawMainNode(770,200,40,"#1da1f2", "TWTR");
drawMainNode(250,400,40,"#ea4335", "GOOG");
drawMainNode(770,400,40,"#0077b5", "LNKD");
