noseX=0;
noseY=0;
difference=0;
rightwristX=0
leftwristX=0;




function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550,550);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}

function modelLoaded(){
    console.log("poseNet has been initialized");

}

function gotPoses(results){
    if(results.length>0){

        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.y;
        difference=Math.floor(leftwristX-rightwristX);
        console.log("right wrist="+rightwristX+"left wrist="+leftwristX+"difference="+difference);
    }
}

function draw(){
    document.getElementById("output").innerHTML="the width and height of the square will be:"+difference+"px";
    background("#7832C2");
    fill("#7BAD87");
    stroke("#7BAD87");
    textSize(difference)
    text("nameer",50,400);
}
