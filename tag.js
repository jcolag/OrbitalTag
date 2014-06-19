window.addEventListener("keypress", keypressHandler, false);

function keypressHandler(e) {
placeDot(10, 10);
  var svg = document.getElementById("game");
  var svgDoc = svg.contentDocument;
  var hand = svgDoc.getElementById("hand");
  var length = parseInt(hand.getAttribute("height"));
  if (e.keyCode == 40) {
    // Down
    -- length;
  } else if (e.keyCode == 38) {
    // Up
    ++ length;
  } else {
    return;
  }
  if (length < 2) {
    length = 2;
  }

  var back = svgDoc.getElementById("back");
  var radius = parseInt(back.getAttribute("r"));
  var buffer = parseInt(back.getAttribute("stroke-width"));
  if (length > radius - 6) {
    length = radius - 6;
  }

  var rotate = svgDoc.getElementById("hand-rotate");
  hand.setAttributeNS(null, "height", length);
  var dur = Math.floor(Math.sqrt(length * length * length) / 10);
  if (dur < 1) {
    dur = 1;
  }
  rotate.setAttributeNS(null, "dur", dur + 's');
}

function placeDot(distance, theta) {
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.getElementById("game");
  var svgDoc = svg.contentDocument;
  var dot = svgDoc.createElementNS(NS, "circle");
  dot.setAttributeNS(null, "id", "dot0");
  dot.setAttributeNS(null, "cx", 20);
  dot.setAttributeNS(null, "cy", 20);
  dot.setAttributeNS(null, "r", 5);
  dot.setAttributeNS(null, "fill", "red");
}

