var iframe ;
var src;
var res = {};
var result;
var inscreen = {
    initPlayer: function(ifrmaeId) {
    iframe = document.getElementById(ifrmaeId).contentWindow;
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {
    	console.log(e.data);
        if(e.data.duration){
          res.duration = e.data.duration;
        }
        else if(e.data.CurrentTime){
          res.CurrentTime = e.data.CurrentTime;
        }
        else if(e.data.Provider){
          res.Provider = e.data.Provider;
        }
        else if(e.data.VideoId){
          res.VideoId = e.data.VideoId;
        }
        else if(e.data.VideoTitle){
          res.VideoTitle = e.data.VideoTitle;
        }
        else if(e.data.DirectUrl){
          res.DirectUrl = e.data.DirectUrl;
        }
        else if(e.data.EmbedUrl){
          res.EmbedUrl = e.data.EmbedUrl;
        }
        $('#res').val(res);
    },false);
      	src = document.getElementById(ifrmaeId).src;
    },
    play: function(){
    	console.log(iframe)
    	var message = {};
      	message.type = "Play";
      	iframe.postMessage(message,src);
    },
    pause: function(){
    	var message = {};
      	message.type = "Pause";
      	iframe.postMessage(message,src);
    },
    mute: function(address){
    	var message = {};
      	message.type = "Mute";
      	iframe.postMessage(message,src);
    },
    unmute: function(address){
    	var message = {};
      	message.type = "Unmute";
      	iframe.postMessage(message,src);
    },
    next: function(address){
      var message = {};
        message.type = "Next";
        iframe.postMessage(message,src);
    },
    prev: function(address){
      var message = {};
        message.type = "Prev";
        iframe.postMessage(message,src);
    },
    program: function(address){
      var message = {};
        message.type = "Program";
        iframe.postMessage(message,src);
    },
    live: function(address){
      var message = {};
        message.type = "Live";
        iframe.postMessage(message,src);
    },
    Duration: function(){
    	var message = {};
      	message.type = "Duration";
      	iframe.postMessage(message,src);
    },
    CurrentTime: function(){
    	var message = {};
      	message.type = "CurrentTime";
      	iframe.postMessage(message,src);
    },
    Provider: function(){
    	var message = {};
      	message.type = "Provider";
      	iframe.postMessage(message,src);
    },
    EmbedUrl: function(){
    	var message = {};
      	message.type = "EmbedUrl";
      	iframe.postMessage(message,src);
    },
    DirectUrl: function(){
    	var message = {};
      	message.type = "Duration";
      	iframe.postMessage(message,src);
    },
    VideoId: function(){
    	var message = {};
      	message.type = "VideoId";
      	iframe.postMessage(message,src);
    },
    VideoTitle: function(){
    	var message = {};
      	message.type = "VideoTitle";
      	iframe.postMessage(message,src);
    },
}