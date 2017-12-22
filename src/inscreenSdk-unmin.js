var iframe ;
var src;
var res = {};
var result;
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
var inscreen = {
    initPlayer: function(ifrmaeId,callback) {
    iframe = document.getElementById(ifrmaeId).contentWindow;


    // Listen to message from child window
    eventer(messageEvent,function(e) {
        if(e.data.duration){
          res.duration = e.data.duration;
        }
        else if(e.data.VideoTitle){
          res.VideoTitle =  e.data.VideoTitle;
        }
        else if(e.data.Provider){
          res.Provider = e.data.Provider;
        }
        else if(e.data.VideoId){
          res.VideoId = e.data.VideoId;
        }
        else if(e.data.DirectUrl){
          res.DirectUrl = e.data.DirectUrl;
        }
        else if(e.data.EmbedUrl){
          res.EmbedUrl = e.data.EmbedUrl;
        }
        else if(e.data.Action){
         // $('#res').val(JSON.stringify((e.data.Action)));
        }
        callback(res);
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
    mute: function(){
    	var message = {};
      	message.type = "Mute";
      	iframe.postMessage(message,src);
    },
    unmute: function(){
    	var message = {};
      	message.type = "Unmute";
      	iframe.postMessage(message,src);
    },
    next: function(){
      var message = {};
        message.type = "Next";
        iframe.postMessage(message,src);
    },
    prev: function(){
      var message = {};
        message.type = "Prev";
        iframe.postMessage(message,src);
    },
    program: function(){
      var message = {};
        message.type = "Program";
        iframe.postMessage(message,src);
    },
    live: function(){
      var message = {};
        message.type = "Live";
        iframe.postMessage(message,src);
    },
    Duration: function(callback){
    	var res = {};
      var message = {};
      	message.type = "Duration";
      	iframe.postMessage(message,src);
        eventer(messageEvent,function(e) {
        if(e.data.duration){
          callback(e.data.duration);
        }
    },false);
    },
    CurrentTime: function(callback){
    	var res = {};
      var message = {};
      	message.type = "CurrentTime";
      	iframe.postMessage(message,src);
        eventer(messageEvent,function(e) {
        if(e.data.CurrentTime){
          callback(e.data.CurrentTime);
        }
    },false);
    },
    Provider: function(callback){
    	var res = {};
      var message = {};
      	message.type = "Provider";
      	iframe.postMessage(message,src);
        eventer(messageEvent,function(e) {
        if(e.data.Provider){
          callback(e.data.Provider);
        }
    },false);
    },
    EmbedUrl: function(callback){
    	var res = {};
      var message = {};
      	message.type = "EmbedUrl";
      	iframe.postMessage(message,src);
        eventer(messageEvent,function(e) {
        if(e.data.EmbedUrl){
          callback(e.data.EmbedUrl);
        }
    },false);
    },
    DirectUrl: function(){
    	var message = {};
      	message.type = "Duration";
      	iframe.postMessage(message,src);
    },
    VideoId: function(callback){
    	var res = {};
      var message = {};
      	message.type = "VideoId";
      	iframe.postMessage(message,src);
         eventer(messageEvent,function(e) {
        if(e.data.VideoId){
          callback(e.data.VideoId);
        }
    },false);
    },
    VideoTitle: function(callback){
    	var res = {};
      var message = {};
      	message.type = "VideoTitle";
      	iframe.postMessage(message,src);
        eventer(messageEvent,function(e) {
        if(e.data.VideoTitle){
          callback(e.data.VideoTitle);
        }
    },false);
    },
}