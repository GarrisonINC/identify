var previous_results="";
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("mobilenet",modelLoaded);
}

function modelLoaded(){
  console.log("model has loaded");
}

function draw() {
  image (video,0,0,300,300);
classifier.classify(video,gotResult);
}


function gotResult(error,results) {
if (error) {
console.log(error);
}
else{
  if ((results[0].confidence>0.5)&&(previous_results!=results[0].label)){
  console.log(results);
  previous_results=results[0].label;
  document.getElementById("result_object_name").innerHTML=results[0].label;
  document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
}
}
}