function oblicz() {
    let imie = document.getElementById('imie').value;
    let nazwisko = document.getElementById('nazwisko').value;
    let wiek = document.getElementById('wiek').value;

    let waga = parseFloat(document.getElementById('waga').value);
    let wzrost = parseFloat(document.getElementById('wzrost').value) / 100;

    let bmi = waga / (wzrost * wzrost);
    bmi = bmi.toFixed(2);

    document.getElementById('bmi').innerHTML = "BMI = " + bmi;

    let opis = "";
    let img = "";

    if (bmi <= 15) {
        opis = "jest wygłodzony";
        img = "niedowaga.png";
    } else if (bmi <= 17.4) {
        opis = "jest wychudzony";
        img = "niedowaga.png";
    } else if (bmi <= 18.5) {
        opis = "ma niedowagę";
        img = "niedowaga.png";
    } else if (bmi <= 24.9) {
        opis = "ma prawidłowy wskaźnik masy ciała";
        img = "prawidlowa.png";
    } else if (bmi <= 29.9) {
        opis = "ma nadwagę";
        img = "nadwaga.png";
    } else if (bmi <= 34.9) {
        opis = "ma 1 stopień otyłości";
        img = "otylosc.png";
    } else if (bmi <= 39.9) {
        opis = "ma 2 stopień otyłości";
        img = "otylosc.png";
    } else {
        opis = "ma 3 stopień otyłości";
        img = "otylosc_skrajna.png";
    }

    // opis pacjenta
    document.getElementById('opis').innerHTML =
        imie + " " + nazwisko + " w wieku " + wiek +
        " lat, wzroście " + (wzrost * 100) + " cm i wadze " +
        waga + " kg " + opis;

    // obraz figury
    document.getElementById('figura').src = img;

    rotateArrow(bmi);
}

function rotateArrow(bmi) {
    let rotacja = bmi * 3 - 90; // dopasowanie do skali
    document.getElementById('strzalka').style.transform =
        "rotate(" + rotacja + "deg)";
}
