let buton1 = ['1281', '9', 'konya', 'kubernets', 'KTÜ'];
let buton2 = ['100', '99', 'sivas', 'java', 'ODTÜ'];
let buton3 = ['578', '15', 'ankara', '.net', 'YILDIZ TEKNİK'];
let buton4 = ['1283', '1', 'istanbul', 'docker', 'Cumhuriyet Üniversitesi'];
let buton5 = ['', '', '', '', 'Selçuk üniversitesi'];

let soruResimleri = [
    'Images/enhızlıaraba.jpg',
    'Images/soru1.jpg',
    'Images/harita.jpg',
    'Images/docker.jpg',
    'Images/üni.jpg',
];
let sorular = [
    "Dünanın En hızlı Arabası Kaç yapmıştır ? ",
    "Resimdeki İşlem Kaç eder ?",
    "Resimde Gösterilen İl Adı?",
    "Bu Sanallaştırma Teknolojisinin Adı Nedir ??",
    "Resimde gösterilen üniversitenin adı nedir?",
];
let dogruCevaplar = [
    "578",
    "9",
    "sivas",
    "docker",
    "Cumhuriyet Üniversitesi",
];
let strBtn = document.getElementById('button1');
let baslangicImg = document.getElementById('baslangicImg');
let rules = document.getElementById('rules');
let questions = document.getElementById('questions');
let soruResimDiv = document.getElementById('soruResimDiv');
let answer = document.getElementById('answer');
let stopwatch = document.getElementById('stopwatch');
let point = document.getElementById('point');
let replyu = document.getElementById('reply');
let oyunBitti_style = document.getElementById('oyunBitti_style');

let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');

let soru = document.createElement('p');
let ımg = document.createElement('img');
let sorusayisi = 0;
let buton_degeri = '';
let buton_sirasi;
let dogruSayisi = 0;
let zaman;
let saniye = 10;

strBtn.addEventListener('click', function() {
    Init();
});

button2.addEventListener('click', function() {
    buton_degeri = button2.getAttribute('value');
    buton_sirasi = 1;
    sorular_gecis();
    cevap_kontrol(buton_degeri, buton_sirasi);
});

button3.addEventListener('click', function() {
    buton_degeri = button3.getAttribute('value');
    buton_sirasi = 2;
    sorular_gecis();
    cevap_kontrol(buton_degeri, buton_sirasi);
});

button4.addEventListener('click', function() {
    buton_degeri = button4.getAttribute('value');
    buton_sirasi = 3;
    sorular_gecis();
    cevap_kontrol(buton_degeri, buton_sirasi);
});

button5.addEventListener('click', function() {
    buton_degeri = button5.getAttribute('value');
    buton_sirasi = 4;
    sorular_gecis();
    cevap_kontrol(buton_degeri, buton_sirasi);
});

button6.addEventListener('click', function() {
    buton_degeri = button6.getAttribute('value');
    buton_sirasi = 5;
    sorular_gecis();
    cevap_kontrol(buton_degeri, buton_sirasi);
});

replyu.addEventListener('click', function() {

    button2.style.display = 'inline';
    button3.style.display = 'inline';
    button4.style.display = 'inline';
    button5.style.display = 'inline';
    button6.style.display = 'none';
    oyunBitti_style.style.display = 'none';
    replyu.style.display = 'none';
    dogruSayisi = 0;
    sorusayisi = 0;
    Init();


});

function Init() {

    baslangicImg.remove();
    strBtn.remove();
    rules.remove();
    clearInterval(zaman);
    saniye = 10;
    sayac();
    sorular_gorsel();
    sorular_yazi();
    butonlar();

    let bes = sorusayisi + 1;
    point.innerHTML = dogruSayisi + " / " + bes;

    button2.style.visibility = 'unset';
    button3.style.visibility = 'unset';
    button4.style.visibility = 'unset';
    button5.style.visibility = 'unset';
    questions.style.display = 'block';

    if (sorusayisi > 3) {
        button6.style.display = 'block'
    }
}

function sorular_gorsel() {
    ımg.setAttribute('src', soruResimleri[sorusayisi]);
    ımg.setAttribute('class', 'resim')
    soruResimDiv.appendChild(ımg);

}

function sorular_yazi() {
    let soru = document.createElement('p');
    soru.setAttribute('class', 'soru-style')
    soru.innerHTML = sorular[sorusayisi];
    questions.appendChild(soru);
    questions.firstChild.remove();
}

function sorular_gecis() {
    ımg.setAttribute('src', soruResimleri[sorusayisi]);
    ımg.setAttribute('class', 'resim');
    soruResimDiv.appendChild(ımg);
    if (sorusayisi < 4) {
        setTimeout(function() {
            sorusayisi++;
            Init();
        }, 1500);
    } else {
        oyunBitti();
    }
}

function butonlar() {
    button2.setAttribute('value', buton1[sorusayisi]);
    button3.setAttribute('value', buton2[sorusayisi]);
    button4.setAttribute('value', buton3[sorusayisi]);
    button5.setAttribute('value', buton4[sorusayisi]);
    button6.setAttribute('value', buton5[sorusayisi]);
}

function cevap_kontrol(buton_degeri, buton_sirasi) {

    if (dogruCevaplar[sorusayisi] == buton_degeri) {
        dogruSayisi++;
        switch (buton_sirasi) {
            case 1:
                button2.style.background = 'green';
                setTimeout(function() {
                    button2.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 2:
                button3.style.background = 'green';
                setTimeout(function() {
                    button3.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 3:
                button4.style.background = 'green';
                setTimeout(function() {
                    button4.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 4:
                button5.style.background = 'green';
                setTimeout(function() {
                    button5.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 5:
                button6.style.background = 'green';
                setTimeout(function() {
                    button6.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            default:

        }
    } else {
        switch (buton_sirasi) {
            case 1:
                button2.style.background = 'red';
                setTimeout(function() {
                    button2.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 2:
                button3.style.background = 'red';
                setTimeout(function() {
                    button3.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 3:
                button4.style.background = 'red';
                setTimeout(function() {
                    button4.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 4:
                button5.style.background = 'red';
                setTimeout(function() {
                    button5.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            case 5:
                button6.style.background = 'red';
                setTimeout(function() {
                    button6.style.background = 'rgb(199,231,241)';
                }, 1500);
                break;
            default:
        }
        dogruYol();
    }
}

function dogruYol() {
    if (sorusayisi == 0) {
        button4.style.background = 'green';
        setTimeout(function() {
            button4.style.background = 'rgb(199,231,241)';
        }, 1500);
    }
    if (sorusayisi == 1) {
        button2.style.background = 'green';
        setTimeout(function() {
            button2.style.background = 'rgb(199,231,241)';
        }, 1500);
    }
    if (sorusayisi == 2) {
        button3.style.background = 'green';
        setTimeout(function() {
            button3.style.background = 'rgb(199,231,241)';
        }, 1500);
    }
    if (sorusayisi == 3) {
        button5.style.background = 'green';
        setTimeout(function() {
            button5.style.background = 'rgb(199,231,241)';
        }, 1500);
    }

    if (sorusayisi == 4) {
        button5.style.background = 'green';
        setTimeout(function() {
            button5.style.background = 'rgb(199,231,241)';
        }, 1500);
    }
}

function oyunBitti() {

    setTimeout(function() {
        questions.firstChild.remove();
        soru.setAttribute('class', 'soru-style');
        soru.innerHTML = dogruSayisi + " / " + " 5";
        questions.appendChild(soru);
        replyu.style.display = 'inline';
        soruResimDiv.lastChild.remove();
        oyunBitti_style.style.display = 'inline';

        button2.style.display = 'none';
        button3.style.display = 'none';
        button4.style.display = 'none';
        button5.style.display = 'none';
        button6.style.display = 'none';

    }, 1500);

}

function sayac() {
    zaman = setInterval(() => {
        stopwatch.innerHTML = saniye;
        saniye = saniye - 1;
        zamanBukucu();
    }, 1000);
}

function zamanBukucu() {
    if (saniye < 0) {
        clearInterval(zaman);
        sorular_gecis();
        dogruYol();
    }
}