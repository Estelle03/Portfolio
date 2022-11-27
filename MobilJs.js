//Incitation a continuer vers Projet mmi
document.querySelector('.mmi').addEventListener('click', function (clic) {
    console.log('click');
    document.querySelector('.mmi').animate({ backgroundcolor:'pink', duration: 200 });
    setTimeout(function () {
        document.querySelector('.mmi').setAttribute('class', 'ClickOnIt');
    }, 200);
});
document.querySelector('.mmi').addEventListener('click', function (clic) {
    console.log('click');
    document.querySelector('.Click').animate({ backgroundcolor:'pink', duration: 200 });
    setTimeout(function () {
        document.querySelector('.Click').setAttribute('class', 'ClickOnIt');
    }, 200);
});

//Incitation a continuer vers a propos
document.querySelector('.contact').addEventListener('click', function (clic) {
    console.log('click');
    document.querySelector('.contact').animate({ backgroundcolor:'lightgreen', duration: 200 });
    setTimeout(function () {
        document.querySelector('.contact').setAttribute('class', 'ClickOnIt2');
    }, 200);
});
document.querySelector('.contact').addEventListener('click', function (clic) {
    console.log('click');
    document.querySelector('.Click2').animate({ backgroundcolor:'lightgreen', duration: 200 });
    setTimeout(function () {
        document.querySelector('.Click2').setAttribute('class', 'ClickOnIt2');
    }, 200);
});

//Incitation a continuer  vers projets perso
document.querySelector('.perso').addEventListener('click', function (clic) {
    console.log('click');
    document.querySelector('.perso').animate({ backgroundcolor:'blue', duration: 200 });
    setTimeout(function () {
        document.querySelector('.perso').setAttribute('class', 'ClickOnIt3');
    }, 200);
});
document.querySelector('.perso').addEventListener('click', function (clic) {
    console.log('click');
    document.querySelector('.Click3').animate({ backgroundcolor:'blue', duration: 200 });
    setTimeout(function () {
        document.querySelector('.Click3').setAttribute('class', 'ClickOnIt3');
    }, 200);
});
