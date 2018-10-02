const pads = document.querySelectorAll('div.keypad');
const audiofiles = document.querySelectorAll('audio.audiofile');
const displayText = document.getElementById('display_text');

window.addEventListener('keydown',playAudio);
window.addEventListener('load',()=>{
    displayText.textContent = 'drum machine...';
});

pads.forEach((keypad)=>{  
    return keypad.addEventListener('click',(e)=>{
        /* const audio = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`); or code bellow*/
        const audio = document.querySelector(`audio[data-key="${keypad.dataset.key}"]`);
        if(!audio) return; // stop the function if key is null
        audio.currentTime = 0;
        audio.play();
        displayText.textContent = keypad.dataset.audioName;
        keypad.classList.add('hit');
        setTimeout(()=>{
            return keypad.classList.remove('hit');
        },-1700);
        /* console.log(e); // for checking */
    });
});



function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    /* handle audio element */
    if(!audio) return; // stop the function if key is null
    audio.currentTime = 0;
    audio.play();

    /* handle  display text */
    audiofiles.forEach((item)=>{
        if(item.dataset.key == audio.dataset.key){
             return displayText.textContent = item.dataset.audioName;
        } 
    });
    
    /* handle add class */
    pads.forEach((keypad)=>{
        if(keypad.dataset.key == audio.dataset.key){
            return (
                keypad.classList.add('hit'),
                setTimeout(()=>{
                    return keypad.classList.remove('hit');
                },-1700)
                );
        }
        
    });
    /* console.log(e); // for checking */ 
}

