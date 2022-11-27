document.querySelector('.flip-box').addEventListener('click', function (clic) {
    console.log('click');
    document.querySelector('.mmi').remove({ animate});
    setTimeout(function () {
        document.querySelector('.mmi').setAttribute('class', 'mmi');
    }, 200);
});