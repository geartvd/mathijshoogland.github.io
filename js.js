var random_images_array = new Array(20);

var timeleft = 5;
var downloadTimer = setInterval(function(){
timeleft--;
document.getElementById("countdowntimer").textContent = timeleft;
if(timeleft <= 0) {
    document.getElementById('image-block').style.visibility = 'visible';
    document.getElementById('countdowntimer').style.visibility = 'hidden';
    clearInterval(downloadTimer);
}
},1000);

function getRandomImage(imgAr, path) {
    path = path || ''; // default path here
    var num = Math.floor( Math.random() * imgAr.length ) + 1;
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + num + '.jpg' + '" alt = "" width="100%">';
    document.write(imgStr); document.close();
    <!--}-->
}
