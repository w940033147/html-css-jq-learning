createjs.Sound.registerSound("js/3.mp3", "myID", 3);
createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
createjs.Sound.on("fileload", handleLoad);
var myInstance;
function handleLoad() {
  myInstance = createjs.Sound.play("myID", {loop:-1});
  myInstance.volume = 1;
}
function audioFadeOut() {
    var count = 50;
    var interval = setInterval(function() {
      if(count < 0) {
        myInstance.paused = true;
        clearInterval(interval);
      } else {
        myInstance.volume = count/50;
      }
    }, 70);
  }
  
