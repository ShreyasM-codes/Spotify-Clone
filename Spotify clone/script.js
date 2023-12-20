console.log("Welcome to Spotify");

//initials the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Belivers-Imagine Dragon", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "Belivers-Imagine Dragon", filePath: "songs/2.mp3", coverPath: "cover1.jpg"},
    {songName: "Belivers-Imagine Dragon", filePath: "songs/3.mp3", coverPath: "cover1.jpg"},
    {songName: "Belivers-Imagine Dragon", filePath: "songs/4.mp3", coverPath: "cover1.jpg"},
    {songName: "Belivers-Imagine Dragon", filePath: "songs/5.mp3", coverPath: "cover1.jpg"},
    {songName: "Belivers-Imagine Dragon", filePath: "songs/6.mp3", coverPath: "cover1.jpg"},
    {songName: "Belivers-Imagine Dragon", filePath: "songs/7.mp3", coverPath: "cover1.jpg"},

]
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
audioElement.addEventListener("timeupdate",()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});