# inscreen-third-party-javascript
Inscreen Third Party Player

## Include the sdk 
<script type="text/javascript"  src="inscreenSdk.js"></script>

## Init function
inscreen.initPlayer(iframeID);

## Play function 
inscreen.play();

## Pause function
inscreen.pause();

## Mute function
inscreen.mute();

## Unmute function
inscreen.unmute();

## next function
inscreen.next();

## prev function
inscreen.prev();

## program function
inscreen.program();

## live function
inscreen.live();

## in video change , start or end result will be hold in object called res

## get Current time 
inscreen.CurrentTime(function(data){
	console.log(data)
});

## get Duration 
inscreen.Duration(function(data){
	console.log(data)
});

## get Video Title 
inscreen.VideoTitle(function(data){
	console.log(data)
});

## get Video ID 
inscreen.VideoId(function(data){
	console.log(data)
});
 
## get Provider (the returned value will be stocked in object called res)
inscreen.Provider(function(data){
	console.log(data)
});
