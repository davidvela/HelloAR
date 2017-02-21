import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-webcam',
  templateUrl: './app-webcam.component.html',
  styleUrls: ['./app-webcam.component.css']
})
export class AppWebcamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        var video = document.querySelector("#videoElement");
          navigator.getUserMedia = navigator.getUserMedia ;//|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      
          if (navigator.getUserMedia) {       
              navigator.getUserMedia({video: true}, handleVideo, videoError);
          }
      
          function handleVideo(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.setAttribute("src", window.URL.createObjectURL(stream))
          }
          
          function videoError(e) {
              // do something
          }
  }


  takePicture(): void {  
    console.log("hello");
  }

}
