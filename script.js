console.log("Welcome to BSF Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/Mp3-p/s5.mp3');
masterPlay = document.getElementById('masterPlay');
myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {filepath: "/Mp3-p/s5.mp3"},
    {filepath: "/Mp3-p/s2.mp3"},
    {filepath: "/Mp3-p/s6.mp3"},
    {filepath: "/Mp3-p/s7.mp3"},
    {filepath: "/Mp3-p/s8.mp3"},

];

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-play');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

});

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;


});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = '/Mp3-P/s9.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });

});

