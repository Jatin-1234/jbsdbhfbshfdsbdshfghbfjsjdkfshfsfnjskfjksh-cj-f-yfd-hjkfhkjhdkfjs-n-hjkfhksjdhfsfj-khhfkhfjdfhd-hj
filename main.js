console.log(ml5.version);

Webcam.set({
width : 350 ,
hieght : 300 ,
img_format  : "png",
png_quality : 90 
});

camera = document.getElementById("Camera");

Webcam.attach("#Camera");

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("Result").innerHTML = "<img id='Capimg' src='"+ data_uri+"'>"
    });
};

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CLXxBSkn1/model.json",modelLoded);
function modelLoded(){
    console.log("modelLoded")
}

function Check(){
img = document.getElementById("Capimg");
classifier.classify(img,getResult);
}

function getResult(error,Result){
 if(error){
     console.log(error);
 }
else{
    console.log(Result);
    document.getElementById("Result_object_Name").innerHTML = Result[0].label;
    document.getElementById("result_accuracy").innerHTML = (Result[0].confidence*100).toFixed(2)+" %";

}
}
