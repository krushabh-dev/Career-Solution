/* */
var btxt = document.getElementById('btxt');
var word = btxt.getElementsByTagName('span');
var i=0;
function rotator() {
    word[i].style.display = 'none';
    i = (i + 1)% word.length;
    word[i].style.display = 'initial';
}
setInterval(rotator , 1200);