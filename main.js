    function preload() {

}
    function setup() {
video = createCapture(VIDEO);
video.size(500,500);
canvas = createCanvas(500,500);
canvas.position(550,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotResults);
}
    function draw() {

}
    function modelLoaded() {
    console.log("Hiiiiii!");
    }
    function gotResults(results) {
        if(results.length>0) {
            console.log(results);
        }
    }