document.querySelector('.fullscreen').addEventListener('click' , fullscr);
const piano = document.querySelector('.piano');
const pi = document.querySelector('.btn-container');
const p = document.querySelectorAll('.btn');
const pianoКeys = document.querySelectorAll('.piano-key');
function fullscr(){
    if(document.fullscreenElement === null ){
        document.documentElement.requestFullscreen();}
        else {
        document.exitFullscreen();
    }}

window.addEventListener('keydown', (event) => {
        playAudio(url[event.code]);
        console.log(event.code[3]);
        pianoКeys.forEach((el) => {
          if(el.dataset.letter === event.code[3]) {
            el.classList.add('piano-key-active');
            setTimeout(() => el.classList.remove('piano-key-active'), 300);
            }    
        });     
      });
function playAudio(src) {
        const audio = new Audio();
        audio.src = src;
        audio.currentTime = 0;
        audio.play();
      }
piano.addEventListener('mousedown', (event) => {
  clicking = true;
  if(event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.letter;
    playAudio(url['Key'+note]);        
    event.target.classList.add('piano-key-active');
    setTimeout(() => event.target.classList.remove('piano-key-active'), 300);
  } });
  window.addEventListener('mouseup', (event) => {clicking = false;}) 
    piano.addEventListener('mousemove', (event) => {
      if(clicking == false) return;
                  if(event.target.classList.contains('piano-key')) {
                const note = event.target.dataset.letter;
                playAudio(url['Key'+note]);        
                event.target.classList.add('piano-key-active');
                setTimeout(() => event.target.classList.remove('piano-key-active'), 300);
              }  
              
            }); 
         
    
    
    const url = {
        'KeyD': 'assets/audio/c.mp3',
        'KeyF': 'assets/audio/d.mp3',
        'KeyG': 'assets/audio/e.mp3',
        'KeyH': 'assets/audio/f.mp3',
        'KeyJ': 'assets/audio/g.mp3',
        'KeyK': 'assets/audio/a.mp3',
        'KeyL': 'assets/audio/b.mp3',
        'KeyR': 'assets/audio/c♯.mp3',
        'KeyT': 'assets/audio/d♯.mp3',
        'KeyU': 'assets/audio/f♯.mp3',
        'KeyI': 'assets/audio/g♯.mp3',
        'KeyO': 'assets/audio/a♯.mp3'
    };   
    pi.addEventListener('click', (event) => {
      p.forEach((el) => {
        if(el.classList.contains('btn-active')){
          el.classList.remove('btn-active');}
          else{
          el.classList.add('btn-active');
          pianoКeys.forEach((el) => {
                 setTimeout(() => el.classList.remove('piano-key-active'), 300);
              el.classList.toggle('letter');    
          }); 
            }  
      }); 
    });