function initializeHome() {
  //   var audio = $(".audio audio");
  //   audio.muted = true;
  //   audio.get(0).play();
  console.log("init");
}

//initializeHome();

function muteMusic() {
  var bool = $(".audio audio").prop("muted");
  $(".audio audio").prop("muted", !bool);
}
