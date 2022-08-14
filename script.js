const input1 = document.querySelector('.input');
const input2 = document.querySelector('.input2');
const counter = document.querySelector('.counter');
const link = document.querySelector('.link');
const history = document.querySelector('.history');
const reset = document.querySelector('.reset');
const mode1 = document.querySelector('.plus-text');
const mode2 = document.querySelector('.subtraction-text');
const mode3 = document.querySelector('.multiply-text');
const mode4 = document.querySelector('.divide-text');
const mode5 =  document.querySelector('.divide2-text');
const settings_icon = document.querySelector('.calculator-settings');
const settings = document.querySelector('.settings');
const settings_close = document.querySelector('.settings-close');
const option1 = document.querySelector('.setting1-option1');
const option2 = document.querySelector('.setting1-option2');
const option3 = document.querySelector('.setting1-option3');
const option4 = document.querySelector('.setting1-option4');
const option5 =  document.querySelector('.image1');
const option6 =  document.querySelector('.image2');
const option7 =  document.querySelector('.image3');
const option8 =  document.querySelector('.image4');
const option9 =  document.querySelector('.image5');
const option10 =  document.querySelector('.image6');
const option11 =  document.querySelector('.image7');
const setting2_option1 = document.querySelector('.setting2-option1');
const setting2_option2 = document.querySelector('.setting2-option2');
const setting2_option3 = document.querySelector('.setting2-option3');
const body = document.querySelector('body');
const modal =  document.querySelector('.modal-window');
const store_link =  document.querySelector('.store-link');
const back_link =  document.querySelector('.back-link');
const range =  document.querySelector('.range-size');
const range2 =  document.querySelector('.range-size2');
const range3 =  document.querySelector('.range-height');
const range4 =  document.querySelector('.range-height2');
const range5 =  document.querySelector('.range-font');
const range6 =  document.querySelector('.range-font2');
const dark_button =  document.querySelector('.dark-theme_area');
const dark_circle =  document.querySelector('.dark-theme_circle');
const save_button =  document.querySelector('.save-button');

link.addEventListener('click', function (e) {
    if (mode1.classList.contains('active-mode')) {
        const number1 = input1.value;
        const number2 = input2.value;
        const n1 = Number(number1);
        const n2 = Number(number2);
        const numbers = n1 + n2;
        counter.innerHTML = ` Result: ${numbers}`;
        // const stringNumbers = numbers.toString();
        // localStorage.setItem('numbers', stringNumbers);
    }
});

link.addEventListener('click', function (e) {
    if (mode2.classList.contains('active-mode')) {
        const number1 = input1.value;
        const number2 = input2.value;
        const n1 = Number(number1);
        const n2 = Number(number2);
        const numbers = n1 - n2;
        counter.innerHTML = ` Result: ${numbers}`;
        // const stringNumbers = numbers.toString();
        // localStorage.setItem('numbers', stringNumbers);
    }
});

link.addEventListener('click', function (e) {
    if (mode3.classList.contains('active-mode')) {
        const number1 = input1.value;
        const number2 = input2.value;
        const n1 = Number(number1);
        const n2 = Number(number2);
        const numbers = n1 * n2;
        counter.innerHTML = ` Result: ${numbers}`;
        // const stringNumbers = numbers.toString();
        // localStorage.setItem('numbers', stringNumbers);
    }
});

link.addEventListener('click', function (e) {
    if (mode4.classList.contains('active-mode')) {
        const number1 = input1.value;
        const number2 = input2.value;
        const n1 = Number(number1);
        const n2 = Number(number2);
        const numbers = n1 / n2;
        counter.innerHTML = ` Result: ${numbers}`;
        // const stringNumbers = numbers.toString();
        // localStorage.setItem('numbers', stringNumbers);
    }
});

link.addEventListener('click', function (e) {
    if (mode5.classList.contains('active-mode')) {
        const number1 = input1.value;
        const number2 = input2.value.replace('%','');
        const n1 = Number(number1);
        const n2 = Number(number2);
        const finalNumber2  =  n2 / 100;
        const numbers = n1 * finalNumber2;
        counter.innerHTML = ` Result: ${numbers}`;
        // const stringNumbers = numbers.toString();
        // localStorage.setItem('numbers', stringNumbers);
    }
});


// } else {
//     counter.innerHTML = ``;
// }



reset.addEventListener('click', function (e) {
    const number = input1.value = '';
    const number3 = input2.value = '';
});

mode1.addEventListener('click', function (e) {
    if (mode2.classList.contains('active-mode') || mode3.classList.contains('active-mode') || mode4.classList.contains('active-mode') || mode5.classList.contains('active-mode')) {
        mode2.classList.remove('active-mode');
        mode3.classList.remove('active-mode');
        mode4.classList.remove('active-mode');
        mode5.classList.remove('active-mode');
    }
    mode1.classList.add('active-mode');
});

mode2.addEventListener('click', function (e) {
    if (mode1.classList.contains('active-mode') || mode3.classList.contains('active-mode') || mode4.classList.contains('active-mode') || mode5.classList.contains('active-mode')) {
        mode1.classList.remove('active-mode');
        mode3.classList.remove('active-mode');
        mode4.classList.remove('active-mode');
        mode5.classList.remove('active-mode');
    }
    mode2.classList.add('active-mode');
});

mode3.addEventListener('click', function (e) {
    if (mode2.classList.contains('active-mode') || mode4.classList.contains('active-mode') || mode1.classList.contains('active-mode') || mode5.classList.contains('active-mode')) {
        mode2.classList.remove('active-mode');
        mode4.classList.remove('active-mode');
        mode1.classList.remove('active-mode');
        mode5.classList.remove('active-mode');
    }
    mode3.classList.add('active-mode');
});

mode4.addEventListener('click', function (e) {
    if (mode1.classList.contains('active-mode') || mode3.classList.contains('active-mode') || mode2.classList.contains('active-mode') || mode5.classList.contains('active-mode')) {
        mode1.classList.remove('active-mode');
        mode2.classList.remove('active-mode');
        mode3.classList.remove('active-mode');
        mode5.classList.remove('active-mode');
    }
    mode4.classList.add('active-mode');
});

mode5.addEventListener('click', function (e) {
    if (mode1.classList.contains('active-mode') || mode3.classList.contains('active-mode') || mode2.classList.contains('active-mode') || mode4.classList.contains('active-mode')) {
        mode1.classList.remove('active-mode');
        mode2.classList.remove('active-mode');
        mode3.classList.remove('active-mode');
        mode4.classList.remove('active-mode');
    }
    mode5.classList.add('active-mode');
});

settings_icon.addEventListener('click', function (e) {
    settings_icon.classList.add('active');
    settings.classList.add('active');
});

settings_close.addEventListener('click', function (e) {
    settings.classList.remove('active');
    settings_icon.classList.remove('active');
});

option1.addEventListener('click', function (e) {
    if (body.classList.contains('bg2') || body.classList.contains('bg3') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg1');
});

option2.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') ||body.classList.contains('bg3') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg1');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg2');
});

option3.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg1');
        body.classList.remove('bg4');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg3');
});

option4.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg1');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg4');
});

option5.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg1');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg5');
});

option6.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg1');
        body.classList.remove('bg5');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg6');
});

option7.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg1');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg7');
});

option8.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg1');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg8');
});

option9.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg1');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg10');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg9');
});

option10.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg11') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg1');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg11');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg10');
});

option11.addEventListener('click', function (e) {
    if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('darkTheme')) {
        body.classList.remove('bg2');
        body.classList.remove('bg3');
        body.classList.remove('bg4');
        body.classList.remove('bg1');
        body.classList.remove('bg5');
        body.classList.remove('bg6');
        body.classList.remove('bg7');
        body.classList.remove('bg8');
        body.classList.remove('bg9');
        body.classList.remove('bg10');
        body.classList.remove('darkTheme');
    }
    body.classList.add('bg11');
});

setting2_option1.addEventListener('click', function (e) {
    if (body.classList.contains('main-font3') || body.classList.contains('main-font2')) {
        body.classList.remove('main-font3');
        body.classList.remove('main-font2');
    }
    body.classList.add('main-font1');
});

setting2_option2.addEventListener('click', function (e) {
    if (body.classList.contains('main-font1') || body.classList.contains('main-font3')) {
        body.classList.remove('main-font1');
        body.classList.remove('main-font3');
    }
    body.classList.add('main-font2');
});

setting2_option3.addEventListener('click', function (e) {
    if (body.classList.contains('main-font1') || body.classList.contains('main-font2')) {
        body.classList.remove('main-font1');
        body.classList.remove('main-font2');
    }
    body.classList.add('main-font3');
});

// const option5 =  document.querySelector('.image1');
// const option6 =  document.querySelector('.image2');
// const option7 =  document.querySelector('.image3');
// const option8 =  document.querySelector('.image4');
// const option9 =  document.querySelector('.image5');
// const option10 =  document.querySelector('.image6');
// const option11 =  document.querySelector('.image7');
//
// option5.addEventListener('click', function (e) {
//     if (body.classList.contains('bg2') || body.classList.contains('bg3') || body.classList.contains('bg4') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11') || body.classList.contains('bg1')) {
//         body.classList.remove('bg2');
//         body.classList.remove('bg3');
//         body.classList.remove('bg4');
//         body.classList.remove('bg6');
//         body.classList.remove('bg7');
//         body.classList.remove('bg8');
//         body.classList.remove('bg9');
//         body.classList.remove('bg10');
//         body.classList.remove('bg11');
//         body.classList.remove('bg1');
//     }
//     body.classList.add('bg5');
// });

store_link.addEventListener('click', function (e) {
    modal.classList.add('opened');
});

back_link.addEventListener('click', function (e) {
    modal.classList.remove('opened');
});

range.addEventListener('click', function (e) {
    input1.style.width = `${range.value}px`;
    // input1.style.height = `${range.value}px`;
});

range2.addEventListener('click', function (e) {
    input2.style.width = `${range2.value}px`;
    // input2.style.height = `${range2.value}px`;
});

range3.addEventListener('click', function (e) {
    input1.style.height = `${range3.value}px`;
    // input1.style.height = `${range.value}px`;
});

range4.addEventListener('click', function (e) {
    input2.style.height = `${range4.value}px`;
    // input2.style.height = `${range2.value}px`;
});

range5.addEventListener('click', function (e) {
    input1.style.fontSize = `${range5.value}px`;
    // input1.style.height = `${range.value}px`;
});

range6.addEventListener('click', function (e) {
    input2.style.fontSize = `${range6.value}px`;
    // input2.style.height = `${range2.value}px`;
});

// dark_button.addEventListener('click', function (e) {
//     if (body.classList.contains('bg1') || body.classList.contains('bg3') || body.classList.contains('bg2') || body.classList.contains('bg4') || body.classList.contains('bg5') || body.classList.contains('bg6') || body.classList.contains('bg7') || body.classList.contains('bg8') || body.classList.contains('bg9') || body.classList.contains('bg10') || body.classList.contains('bg11')) {
//         body.classList.remove('bg2');
//         body.classList.remove('bg3');
//         body.classList.remove('bg4');
//         body.classList.remove('bg1');
//         body.classList.remove('bg5');
//         body.classList.remove('bg6');
//         body.classList.remove('bg7');
//         body.classList.remove('bg8');
//         body.classList.remove('bg9');
//         body.classList.remove('bg10');
//         body.classList.remove('bg11');
//     }
//     dark_circle.classList.toggle('darkTheme');
//     settings.classList.toggle('darkTheme');
//     body.classList.toggle('darkTheme');
// });
//
// let pageBg;
// save_button.addEventListener('click', function (e) {
//     if(body.classList.contains('bg1')) {
//         pageBg = 'bg1';
//     }
//     if(body.classList.contains('bg2')) {
//         pageBg = 'bg2';
//     }
//     if(body.classList.contains('bg3')) {
//         pageBg = 'bg3';
//     }
//     if(body.classList.contains('bg4')) {
//         pageBg = 'bg4';
//     }
//     if(body.classList.contains('bg5')) {
//         pageBg = 'bg5';
//     }
//     if(body.classList.contains('bg6')) {
//         pageBg = 'bg6';
//     }
//     if(body.classList.contains('bg7')) {
//         pageBg = 'bg7';
//     }
//     if(body.classList.contains('bg8')) {
//         pageBg = 'bg8';
//     }
//     if(body.classList.contains('bg9')) {
//         pageBg = 'bg9';
//     }
//     if(body.classList.contains('bg10')) {
//         pageBg = 'bg10';
//     }
//     if(body.classList.contains('bg11')) {
//         pageBg = 'bg11';
//     }
//     localStorage.setItem('BG', pageBg);
// });
// window.addEventListener('load', function (e) {
//     localStorage.getItem('BG');
//     if(pageBg === 'bg1') {
//         body.classList.add('bg1');
//     }
// });
//
