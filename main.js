line_c = "red"
line_w = 3

function preload(){
    doodleNet = ml5.imageClassifier("DoodleNet")
}

function setup(){
    canvas = createCanvas(300,250)
    canvas.position(535)
    background("white")
    canvas.mouseReleased(classifyCanvas)
    line_c = ""
    line_w = 0
}

function draw(){
    strokeWeight(line_w)
    stroke(line_c)
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    } 
}

function classifyCanvas(){
    console.log("I am sketch Identifier")
    doodleNet.classify(canvas,gotResult)
}

function gotResult(error,result){
    if(error){
        console.log(error)
    }

    else{
        console.log(result)
        document.getElementById("label").innerHTML = "Label -"+result[0].label;
        document.getElementById("confidence").innerHTML = "Confidence -"+(result[0].confidence*100).toFixed(2)+"%"
    }
}

function clearCanvas(){
    background("white");
    document.getElementById("label").innerHTML = "Label -"
    document.getElementById("confidence").innerHTML = "Confidence -"
}

function apply(){
    line_c = document.getElementById("color_l").value;
    line_w = document.getElementById("width_l").value;
}

