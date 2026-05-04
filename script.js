var allElems = document.querySelectorAll('.elem')
var allFullElems = document.querySelectorAll('.fullElem')

allElems.forEach(function(elem) {
    elem.addEventListener('click', function() {
        var index = parseInt(elem.id);
        allFullElems[index].style.display = 'block'
    })
})