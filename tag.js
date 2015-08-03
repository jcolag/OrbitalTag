var svgNS = "http://www.w3.org/2000/svg";
var xlinkNS = "http://www.w3.org/1999/xlink";
window.addEventListener("keypress", keypressHandler, false);

function keypressHandler(e) {
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

function placeDot(count) {
  var svg = document.getElementById("game");
  var svgDoc = svg.contentDocument;
  var g = svgDoc.getElementById("group");
  var back = svgDoc.getElementById("back");
  var radius = parseInt(back.getAttribute("r")) - 5;

  for (var i = 0; i < count; i++) {
    var r = Math.floor(Math.random() * radius);
    var theta = Math.floor(Math.random() * 360);
    var x = Math.floor(Math.sin(theta) * r);
    var y = Math.floor(Math.cos(theta) * r);

    var dot = document.createElementNS(svgNS, "circle");
    dot.setAttributeNS(null, "id", "dot" + i);
    dot.setAttributeNS(null, "cx", x + 200);
    dot.setAttributeNS(null, "cy", y + 200);
    dot.setAttributeNS(null, "r", 5);
    dot.setAttributeNS(null, "fill", "orange");

    g.appendChild(dot);
  }
}

