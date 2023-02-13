console.log("Hey this is javascript");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songLists = document.getElementsByClassName("songItem");

let songs = [
    {songName: "Love Me Like You Do", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Hello Its Me And You", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Let Her Go", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tomar Khola hawa", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ami Cheye Cheye Dekhi Sharadin", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Amaro Porano Jaha Chay", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tomar Amar Prem Ami Age Bujhini", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Lokkhi Shona", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dukkho Bilash", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Utshober Utshahe", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
]
console.log(songLists[0]);
for(let i=0; i<songLists.length; i++){
    songLists[i].children[0].src = songs[i].coverPath;
    songLists[i].children[1].innerHTML = songs[i].songName;
    let ad = new Audio("songs/1.mp3");
    console.log(ad.duration);
}
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        gif.style.opacity = 1;
        audioElement.play();
        masterPlay.innerHTML = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>`
    }

    else{
        gif.style.opacity = 0;
        audioElement.pause();
        masterPlay.innerHTML = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>`
    }
    
})

audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    //console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener("click", ()=>{
    console.log(myProgressBar.value);
    audioElement.currentTime = (audioElement.duration / 100) * myProgressBar.value;
})


