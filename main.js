function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(700, 420);
    canvas.position(590, 168);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    background("#055e35");
}

function modelLoaded() {
    console.log("PoseNet is Initialised");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}