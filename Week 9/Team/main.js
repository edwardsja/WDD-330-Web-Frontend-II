const audio = document.querySelectorAll('audio');

document.addEventListener('keydown', buttonPress);
//step 3
audio.forEach(item => {
    item.addEventListener('play', classHandler(item));
});

function buttonPress(e) {
    let selected_sound = document.querySelector('audio[data-key="' + e.which + '"]');

    //step 2
    if (selected_sound.currentTime != "0") {
        selected_sound.currentTime = "0";
    }

    selected_sound.play();
    // stretch 1 and 2
    styleHandler(e);
}

function classHandler(item) {
    return function () {
        let selected_button = document.querySelector('div[data-key="' + item.dataset.key + '"]');
      
        selected_button.classList.add('playing');
        
        setTimeout(function () {selected_button.classList.remove('playing')}, item.duration * 1000);
    }
}

function styleHandler(e) {
    let selected_button = document.querySelector('div[data-key="' + e.which + '"]');
    selected_button.style.position = 'relative';
    top_num = parseInt(selected_button.style.top.substring(0, selected_button.style.top.length - 2));
    if (selected_button.style.top == "") {
        top_num = 10;
        selected_button.style.top = top_num + 'px';
    } else {
        selected_button.style.top = (top_num + 10) + 'px';
    }
    if (top_num >= 100) {
        selected_button.style.top = '0px';
    }
}