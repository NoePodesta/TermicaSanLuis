var installationOn; 
var videoOn;
var videoOff;
var button;


function setup() {
    // specify multiple formats for different browsers
    videoOn = createVideo(['../sound/on.mp4']);
    videoOff = createVideo(['../sound/off.mp4']);

    installationOn = false;

    if(installationOn){
        button = createButton('ON');  
    } else{
        button = createButton('OFF');  
    }

    button.mousePressed(toggleVid); // attach button listener
    
    //only show the video that is active from the start
    if(installationOn){
        videoOff.hide();
        videoOn.loop();

    } else {
        videoOn.hide();
        videoOff.loop();
    }
    //get rid of defaultCanvas created by p5.js
    document.getElementById("defaultCanvas").style.display = "none";
}

// plays or pauses the video depending on current state
function toggleVid() {
    if (!installationOn) {
        videoOff.pause();
        videoOff.hide();
        videoOn.show();
        videoOn.loop();
        button.html('ON');
    } 

    if (installationOn) {
        videoOn.pause();
        videoOn.hide();
        videoOff.show();
        videoOff.loop();
        button.html('OFF');
    }

    installationOn = !installationOn;
}

