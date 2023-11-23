
var to = 'Bé Huyền!';
var gift_url = '';
var gift_image_url = 'hihi.jpg';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.toggle('card-show');
    playPauseMedia();
  }, false);
  

  nametag.innerText = to;

  var vAudio = document.getElementById("divAudio");
  const controls = document.querySelector(".controls");
  vAudio.removeAttribute("controls");
  function playPauseMedia() {
    console.log('run');
    vAudio.play();
  }
}

init();

document.getElementById('card').addEventListener('click',function(){
  document.getElementById('card').classList.toggle('card-show');
  present.classList.toggle("open");
})