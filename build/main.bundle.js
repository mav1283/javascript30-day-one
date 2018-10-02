'use strict';

var pads = document.querySelectorAll('div.keypad');
var audiofiles = document.querySelectorAll('audio.audiofile');
var displayText = document.getElementById('display_text');

window.addEventListener('keydown', playAudio);
window.addEventListener('load', function () {
    displayText.textContent = 'drum machine...';
});

pads.forEach(function (keypad) {
    return keypad.addEventListener('click', function (e) {
        /* const audio = document.querySelector(`audio[data-key="${e.path[1].dataset.key}"]`); or code bellow*/
        var audio = document.querySelector('audio[data-key="' + keypad.dataset.key + '"]');
        if (!audio) return; // stop the function if key is null
        audio.currentTime = 0;
        audio.play();
        displayText.textContent = keypad.dataset.audioName;
        keypad.classList.add('hit');
        setTimeout(function () {
            return keypad.classList.remove('hit');
        }, -1700);
        /* console.log(e); // for checking */
    });
});

function playAudio(e) {
    var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    /* handle audio element */
    if (!audio) return; // stop the function if key is null
    audio.currentTime = 0;
    audio.play();

    /* handle  display text */
    audiofiles.forEach(function (item) {
        if (item.dataset.key == audio.dataset.key) {
            return displayText.textContent = item.dataset.audioName;
        }
    });

    /* handle add class */
    pads.forEach(function (keypad) {
        if (keypad.dataset.key == audio.dataset.key) {
            return keypad.classList.add('hit'), setTimeout(function () {
                return keypad.classList.remove('hit');
            }, -1700);
        }
    });
    /* console.log(e); // for checking */
}
