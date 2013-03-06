function refreshMarkupDisplay(sampleElement, sampleElement2) {
    var markupElement = document.getElementById("markup");
    if (markupElement) {
        var styleString = sampleElement.getAttribute("style");

        if (sampleElement2 && sampleElement2.getAttribute("style"))
            styleString += sampleElement2.getAttribute("style");
        
        markupElement.innerHTML = makePresentable(styleString);
    }
}

//  this function does a little bit of clean-up and sorts the lines so there's some consistency of display between browers
function makePresentable(s) {
    if (!s)
        return "";

    var lines = s.toString()/*.toLowerCase()*/.replace(/\s*;\s*$/, "").replace(/(\.[0-9]{2})[0-9]*/g, "$1").split(/\s*;\s*/);
    lines = lines.sort();

    var newLines = new Array();

    for (var i = 0; i < lines.length; ++i) {
        var nextLine = lines[i];

        newLines[newLines.length] = nextLine;
    }

    return "<p>" + newLines.join(";</p><p>") + ";</p>";
}

function GrayOutControlTables() {
    var controlTables = document.querySelectorAll("#controls>table");
    for (var i = 0; i < controlTables.length; ++i)
        controlTables[i].setAttribute("class", "grayout");
}

function AppendFeatureNote(s) {
    var notes = document.getElementById("featureNotes");

    var p = document.createElement("p");
    notes.appendChild(p);
    p.appendChild(document.createTextNode(s));

    notes.style.display = "block";

    var maxWidth = 0;
    var controlTables = document.querySelectorAll("#controls>table");
    for (var i = 0; i < controlTables.length; ++i)
        maxWidth = Math.max(controlTables[i].offsetWidth, maxWidth);

    notes.style.maxWidth = maxWidth + "px";
}

function FirstSupportedPropertyName(prefixedPropertyNames) {
    var tempDiv = document.createElement("div");
    for (var i = 0; i < prefixedPropertyNames.length; ++i) {
        if (typeof tempDiv.style[prefixedPropertyNames[i]] != 'undefined')
            return prefixedPropertyNames[i];
    }

    return null;
}

var controlsMaxWidth = 0;
var lastDemoContentWidth = 0;

function AdjustLayout() {

    //  adjust for floating point internal widths reported as rounded integers
    var controlsWidth = Math.ceil(document.getElementById("controls").offsetWidth + 0.5);
    var demoContentWidth = Math.floor(document.getElementById("DemoContent").offsetWidth - 0.5);

    if (controlsWidth > controlsMaxWidth || demoContentWidth != lastDemoContentWidth) {
        controlsMaxWidth = controlsWidth;
        lastDemoContentWidth = demoContentWidth;

        var exampleElement = document.getElementById("example");
        var exampleStyle = window.getComputedStyle(exampleElement);
        var exampleHorizontalPadding = parseFloat(exampleStyle.paddingLeft) + parseFloat(exampleStyle.paddingRight);
        
        exampleElement.style.width = (lastDemoContentWidth - controlsMaxWidth - exampleHorizontalPadding).toString() + "px";
    }
}

// window.addEventListener("load", AdjustLayout, false);
// window.addEventListener("resize", AdjustLayout, false);

//  kill the annoying word select on tap
try
{
    document.body.addEventListener("selectstart", function(e) { e.preventDefault(); }, false);

    var allowSelection = document.querySelectorAll("#markup, #atKeyframesMarkup, textarea");
    for (var i = 0; i < allowSelection.length; ++i) {
        allowSelection[i].addEventListener("selectstart", function (e) { e.stopPropagation(); }, false);
    } 
}
catch (exp)
{
}

if (location.search.match(/\bbg=none\b/i))
    document.body.parentNode.className = "nobackground";
