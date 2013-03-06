function Init3D() {
    if (!backfaceVisibilityName) {
        document.getElementById("backfaceVisibilityRow").setAttribute("class", "grayout");

        var toDisable = document.querySelectorAll("*.grayout input");
        for (var i = 0; i < toDisable.length; ++i)
            toDisable[i].disabled = "disabled";

        var d3options = document.querySelectorAll("option.d3");
        for (i = 0; i < d3options.length; ++i)
            d3options[i].parentNode.removeChild(d3options[i]);

        AppendFeatureNote("Your browser does not support 3D Transforms. The 2D features are left enabled.");
    }
    else {
        AppendTransformFunction('perspective');
        AppendTransformFunction('rotateY');
    }
}

var sliderTemplate = '<span class="sliderControl" slideroptions="min:{min};max:{max};step={step};value={value};units={units};setter=UpdateSample"></span>';
var delUpDownTemplate = '<a class="xIcon" href="javascript:DeleteTransformRow(\'_xf{counter}\');"></a> <a class="upIcon" href="javascript:TransformRowUp(\'_xf{counter}\')"></a> <a class="downIcon" href="javascript:TransformRowDown(\'_xf{counter}\')"></a>';

var template1 = '<tr id="_xf{counter}" class="transformRow" xformfunction="{func}" nargs="1">\
							<td>{func}, {label1}:</td>\
							<td>' + sliderTemplate + '</td>\
							<td>' + delUpDownTemplate + '</td>\
						</tr>';

var template2 = '<tr id="_xf{counter}" class="transformRow" xformfunction="{func}" nargs="2">\
							<td>{func}, {label1}:<br />{label2}:</td>\
							<td>' + sliderTemplate + '<br />' + sliderTemplate + '</td>\
							<td>' + delUpDownTemplate + '</td>\
						</tr>';

var template3 = '<tr id="_xf{counter}" class="transformRow" xformfunction="{func}" nargs="3">\
							<td>{func}, {label1}:<br />{label2}:<br />{label3}:</td>\
							<td>' + sliderTemplate + '<br />' + sliderTemplate + '<br />' + sliderTemplate + '</td>\
							<td>' + delUpDownTemplate + '</td>\
						</tr>';

var templateRotate3d = '<tr id="_xf{counter}" class="transformRow" xformfunction="{func}" nargs="4">\
							<td>{func}, {label1}:<br />{label2}:<br />{label3}:<br />{label4}:</td>\
							<td>' + sliderTemplate + '<br />' + sliderTemplate + '<br />' + sliderTemplate + '<br />\
                                <span class="sliderControl" slideroptions="min:{min4};max:{max4};step={step4};value={value4};units={units4};setter=UpdateSample"></span></td>\
							<td>' + delUpDownTemplate + '</td>\
						</tr>';

var transformArgs = {
    translateX: {
        template: template1,
        func: "translateX",
        min: -200,
        max: 200,
        step: 1,
        value: 0,
        units: "px",
        label1: "Δx"
    },

    translateY: {
        template: template1,
        func: "translateY",
        min: -200,
        max: 200,
        step: 1,
        value: 0,
        units: "px",
        label1: "Δy"
    },

    translateZ: {
        template: template1,
        func: "translateZ",
        min: -200,
        max: 200,
        step: 1,
        value: 0,
        units: "px",
        label1: "Δz"
    },

    translate2: {
        template: template2,
        func: "translate",
        min: -200,
        max: 200,
        step: 1,
        value: 0,
        units: "px",
        label1: "Δx",
        label2: "Δy"
    },

    translate3d: {
        template: template3,
        func: "translate3d",
        min: -200,
        max: 200,
        step: 1,
        value: 0,
        units: "px",
        label1: "Δx",
        label2: "Δy",
        label3: "Δz"
    },

    scale1: {
        template: template1,
        func: "scale",
        min: -1,
        max: 4,
        step: 0.05,
        value: 1,
        units: "",
        label1: "sxy"
    },

    scale2: {
        template: template2,
        func: "scale",
        min: -1,
        max: 4,
        step: 0.05,
        value: 1,
        units: "",
        label1: "sx",
        label2: "sy"
    },

    scale3d: {
        template: template3,
        func: "scale3d",
        min: -1,
        max: 4,
        step: 0.05,
        value: 1,
        units: "",
        label1: "sx",
        label2: "sy",
        label3: "sz"
    },

    scaleX: {
        template: template1,
        func: "scaleX",
        min: -1,
        max: 4,
        step: 0.05,
        value: 1,
        units: "",
        label1: "sx"
    },

    scaleY: {
        template: template1,
        func: "scaleY",
        min: -1,
        max: 4,
        step: 0.05,
        value: 1,
        units: "",
        label1: "sy"
    },

    scaleZ: {
        template: template1,
        func: "scaleZ",
        min: -1,
        max: 4,
        step: 0.05,
        value: 1,
        units: "",
        label1: "sz"
    },

    rotate1: {
        template: template1,
        func: "rotate",
        min: -180,
        max: 180,
        step: 1,
        value: 0,
        units: "deg",
        label1: "θ"
    },

    rotateX: {
        template: template1,
        func: "rotateX",
        min: -180,
        max: 180,
        step: 1,
        value: 0,
        units: "deg",
        label1: "θx"
    },

    rotateY: {
        template: template1,
        func: "rotateY",
        min: -180,
        max: 180,
        step: 1,
        value: 0,
        units: "deg",
        label1: "θy"
    },

    rotateZ: {
        template: template1,
        func: "rotateZ",
        min: -180,
        max: 180,
        step: 1,
        value: 0,
        units: "deg",
        label1: "θz"
    },

    rotate3d: {
        template: templateRotate3d,
        func: "rotate3d",
        min: 0,
        max: 1,
        step: 0.01,
        value: 1,
        units: "",
        label1: "x",
        label2: "y",
        label3: "z",
        // special row four
        min4: -180,
        max4: 180,
        step4: 1,
        value4: 0,
        units4: "deg",
        label4: "θ"
    },

    skew2: {
        template: template2,
        func: "skew",
        min: -90,
        max: 90,
        step: 1,
        value: 0,
        units: "deg",
        label1: "θx",
        label2: "θy"
    },

    skewX: {
        template: template1,
        func: "skewx",
        min: -90,
        max: 90,
        step: 1,
        value: 0,
        units: "deg",
        label1: "θx"
    },

    skewY: {
        template: template1,
        func: "skewy",
        min: -90,
        max: 90,
        step: 1,
        value: 0,
        units: "deg",
        label1: "θy"
    },

    perspective: {
        template: template1,
        func: "perspective",
        min: 50,
        max: 1050,
        step: 5,
        value: 500,
        units: "px",
        label1: "depth"
    }
};

var transformFunctionsAdded = 0;

function DeleteTransformRow(rowID) {
    var tr = document.getElementById(rowID);
    tr.parentNode.removeChild(tr);

    UpdateSample();
}

function TransformRowUp(rowID) {
    var tr = document.getElementById(rowID);
    var p = tr.parentNode;
    if (p.firstChild != tr) {
        p.insertBefore(tr, tr.previousSibling);
    }

    UpdateSample();
}

function TransformRowDown(rowID) {
    var tr = document.getElementById(rowID);
    var p = tr.parentNode;
    if (p.lastChild != tr) {
        p.insertBefore(tr.nextSibling, tr);
    }

    UpdateSample();
}

function AppendTransformFunction(appendWhat) {

    function insertFunction(theArgs) {
        var template = theArgs.template.replace(/{counter}/g, transformFunctionsAdded++);
        for (var key in theArgs) {
            template = template.replace(new RegExp("{" + key + "}", "g"), theArgs[key]);
        }

        var d = document.createElement("div");
        d.innerHTML = "<table><tbody>" + template + "</tbody></table>";
        var tr = d.firstChild.firstChild.firstChild;
        document.getElementById("transformList").appendChild(tr);
        _Slider.initUnder("#" + tr.id);
    }

    insertFunction(transformArgs[appendWhat]);

    AdjustLayout();     // account for possibly wider controls
    UpdateSample();
}

var transformName = FirstSupportedPropertyName(["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform"]);
var perspectiveName = FirstSupportedPropertyName(["perspective", "msPerspective", "MozPerspective", "WebkitPerspective", "OPerspective"]);
var backfaceVisibilityName = FirstSupportedPropertyName(["backfaceVisibility", "msBackfaceVisibility", "MozBackfaceVisibility", "WebkitBackfaceVisibility", "OBackfaceVisibility"]);

function UpdateSample() {
    var sampleElement = document.getElementById("sample");

    var transformOrigin = document.getElementById("originX").getAttribute("value") + " " + document.getElementById("originY").getAttribute("value");

    var transforms = document.querySelectorAll("tr.transformRow");
    var transformValues = document.querySelectorAll("tr.transformRow .sliderControl");
    var transformList = "";

    for (var t = 0, v = 0; t < transforms.length; ++t) {
        if (t > 0) {
            var ghost = document.getElementById("ghost" + t);
            if (!ghost) {
                ghost = document.createElement("div");
                ghost.id = "ghost" + t;
                ghost.className = "ghost";
                ghost.appendChild(document.createTextNode(t.toString()));
                sampleElement.parentNode.insertBefore(ghost, sampleElement);
            }
            ghost.style[transformName + "Origin"] = transformOrigin;
            ghost.style[transformName] = transformList;
            ghost.style.display = "block";
        }

        var xform = transforms[t];

        var args = [];
        var nArgs = parseInt(xform.getAttribute("nArgs"));
        for (var n = 0; n < nArgs; ++n)
            args.push(transformValues[v++].getAttribute("value"));

        transformList += xform.getAttribute("xformFunction") + "(" + args.join(", ") + ") ";
    }

    var g = Math.max(transforms.length, 1);
    for (var ge = document.getElementById("ghost" + g); ge != null; ge = document.getElementById("ghost" + ++g)) {
        ge.style.display = "none";
    }

    var preserve3d = document.getElementById("transformStylePreserve3d");
    if (preserve3d && !preserve3d.disabled)
        sampleElement.style[transformName + "Style"] = preserve3d.checked ? "preserve-3d" : "flat";

    //sampleElement.style[transformName + "Origin"] = transformOrigin;
    //sampleElement.style[transformName] = transformList;


    
    if (backfaceVisibilityName) {
        var backfaceHidden = document.getElementById("backfaceVisibilityHidden");
        if (backfaceHidden && !backfaceHidden.disabled)
            sampleElement.style[backfaceVisibilityName] = backfaceHidden.checked ? "hidden" : "visible";
    }

    refreshMarkupDisplay(sampleElement);
}

function UpdateExample() {
    var exampleElement = document.getElementById("example");

    if (perspectiveName) {
        var perspective = document.getElementById("perspective");
        if (perspective) {
            exampleElement.style[perspectiveName] = perspective.getAttribute("value");
            exampleElement.style[perspectiveName + "Origin"] = document.getElementById("perspectiveOriginX").getAttribute("value") + " " + document.getElementById("perspectiveOriginY").getAttribute("value");
        }
    }
}