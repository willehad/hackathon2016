var fbBlob = {x:250, y:200, rad:40, color:"#4E59D4", name:"FB"};
var twitterBlob = {x:770, y:200, rad:40, color:"#1da1f2", name:"TWTR"};
var googleBlob = {x:250, y:400, rad:40, color:"#ea4335", name:"GOOG"};
var linkedinBlob = {x:770, y:400, rad:40, color:"#0077b5", name:"LNKD"};


function drawMainNode(blob)
{
	var c = document.getElementById("graphCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(blob.x,blob.y,blob.rad,0,2*Math.PI);
	ctx.fillStyle = blob.color;
	ctx.fill();
	ctx.beginPath();
	ctx.font = "25px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = 'center';
	ctx.fillText(blob.name,blob.x, blob.y+10);
	ctx.fill();
	ctx.stroke();
}

drawMainNode(fbBlob);
drawMainNode(twitterBlob);
drawMainNode(googleBlob);
drawMainNode(linkedinBlob);
//drawMainNode(250,200,40,"#4E59D4", "FB");
//drawMainNode(770,200,40,"#1da1f2", "TWTR");
//drawMainNode(250,400,40,"#ea4335", "GOOG");
//drawMainNode(770,400,40,"#0077b5", "LNKD");
