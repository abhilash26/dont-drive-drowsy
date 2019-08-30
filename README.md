# Don't drive drowsy.

## Idea and Inspiration

This webapp is inspired from [Driver Drowsiness Detection with OpenCV](https://www.youtube.com/watch?v=Q23K7G1gJgY).

## Tools used

[JeelizWeboji](https://github.com/jeeliz/jeelizWeboji) is an excellent tool to build this. 
It has face detection as well as eye closing detection which is perfect for this app.

## Application and use

We are humans, we get tired and sleepy. There is one most important time that needs our undivided attention is the time when we are driving.
This application will detect if you are sleepy/drowsey and play an alarm sound to wake you up, simply and effectively.

## Configuration

In the assets/js/main.js assign `eyesClosedThreshold` to a fractional value ranging from 0.5 to 1. 
In the same file change `timeThreshold` in miliseconds value after which you need the alarm to ring after. 
Currently the algo waits for 500 miliseconds and then rings the alarm but you can change this setting.


## Warnings 

1. This webapp needs camera to run. It will obviously need camera permission as well.
2. The alarm sound is for waking you up so it quite loud.
3. The tracker needs proper even lighting on your face to work.

