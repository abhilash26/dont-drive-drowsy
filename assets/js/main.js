"use strict";

// Change Eyes closed threshold value for future use.

let eyesClosedThreshold = 0.65; // For 65% open eyes.
let timeThreshold = 500; // For 0.5 seconds;



let lastClosedTime, continuous = false;
let alarm = document.getElementById("alarm");
let body = document.querySelector("body");

//entry point :
function main() {
  JEEFACETRANSFERAPI.init({
    canvasId: "canvas",
    NNCpath: "assets/model/",
    callbackReady: function(errCode) {
      if (errCode) {
        console.log(
          "ERROR - cannot init JEEFACETRANSFERAPI. errCode =",
          errCode
        );
        errorCallback(errCode);
        return;
      }
      console.log("INFO : JEEFACETRANSFERAPI is ready !!!");
      successCallback();
    } //end callbackReady()
  });
} //end main()

function successCallback() {
  // Call next frame
  nextFrame();
  // Add code after API is ready.
}

function errorCallback(errorCode) {
  // Add code to handle the error
  alert("Cannot work without camera. Check if the camera is attached.");
}

function nextFrame() {
  let deltaTime = Date.now() - lastClosedTime;
  if (deltaTime > timeThreshold && continuous) {
    alarm.play();
    // console.log("Alarm Called");
    body.style.background = "#f00";
  } else {
    alarm.pause();
    body.style.background = "#fff";
  }

  if (JEEFACETRANSFERAPI.is_detected()) {
    // Do something awesome with animation values
    let expressions = JEEFACETRANSFERAPI.get_morphTargetInfluences();
    //**************************************************************************** */
    if (
      expressions[8] >= eyesClosedThreshold &&  // For left and right eye
      expressions[9] >= eyesClosedThreshold
    ) {
      if (lastClosedTime === undefined || !continuous)
        lastClosedTime = Date.now(); // Now is the new time
      continuous = true;
    } else {
      continuous = false;
    }

    // The API is detected
    // console.log("Detected");
  } else {
    // Tell the user that detection is off.
    continuous = false;
    // console.log("Not Detected");
  }
  // Replay frame
  requestAnimationFrame(nextFrame);
}



