//d3.select(h1).ytest("hi")

function makeStage(w, h) {
	var stage = d3.select(".container") //select goes thropugh the dong tree, going to try to match tag type. with the dot it is going to look for the first class of the element. If want to select by ID, then use #. If just put container, will not find. there is not html thst is container
	.insert("center") // made pointer to container
	.insert("svg")
	.attr("width", w)
	.attr("height",h);
	return stage;
}

function clearStimulus(stage) {
	stage.selectAll("circle").remove(); // selectAll going to select only the one circle in this svg object
}
function drawStimulus(stage, cx, cy, radius, fillcolor) {
	console.log("I call my function"); // can put multiple commands here
	/* d3.select(".container") //select goes thropugh the dong tree, going to try to match tag type. with the dot it is going to look for the first class of the element. If want to select by ID, then use #. If just put container, will not find. there is not html thst is container
	*/
	stage.insert("circle")
	.attr("cx", cx)
	.attr("cy", cy)
	.attr("r", radius)
//	.attr("class","mycirclesstim")
	.style("fill",fillcolor)
	.style("stroke","steelblue")
	.style("stroke-width", "5px"); // these events are chained
} 

function clearButton() {
	d3.select(".container")
	.selectAll("button")
	.remove();
}

function makeButton(text, callback) {
	d3.select(".container")
	.insert("button")
	.attr("type", "button")
	.attr("class", "btn btn-primary btn-lg")
	.text(text)
	.on("click", function(d) { console.log("clicked"); callback(); } );	// callback will do whatever
}

var trials = [ {"color":"lightblue", "radius":20 },
	{"color":"yellow", "radius":20 },
	{"color":"red", "radius":50 },
	{"color":"blue", "radius":20 }
 ];

console.log("I'm here"); // way to debug program. Go check console form here.
var mystage = makeStage(500,400);

function doTrial(stage, stim_array) {
	if (stim_array.length > 0 ) {
		var stim = stim_array.shift(); //shift takes first thing off of list of array, and move everything over
		clearStimulus(stage);
		clearButton();
		drawStimulus(stage, 500/2., 400/2., stim["radius"], stim["color"]);
		makeButton("Next Trial", function() { doTrial(stage, stim_array); })// ananonymous function prevents executuion until button gets clicked
	} else {
		alert("I'm done with experiment");
	}
}

doTrial(mystage, trials); 

//clearStimulus(mystage);
//clearButton();
//drawStimulus(mystage, 500/2., 400/2., 10, "lightblue");
//makeButton("Next Trial"); 