

var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

/*for background color chnge*/

var bgchange = document.getElementById('bgchanged');
bgchange.onclick = function () {
    var divElement = document.getElementById('body');
    divElement.style.backgroundColor = '#990099';
    var divElementf = document.getElementById('f');
    divElementf.style.backgroundColor = 'black';
};
/*for background color chnge*/

var bgchange = document.getElementById('bgchangen');
bgchange.onclick = function () {
    var divElement = document.getElementById('body');
    divElement.style.backgroundColor = 'black';
    var divElementf = document.getElementById('f');
    divElementf.style.backgroundColor = 'blue';
};

/*for timing*/

function demo() {
    var time = document.getElementById('time');
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var myWatch = hours + ' : ' + minutes + ' : ' + seconds;
    time.innerHTML = myWatch;
}

setInterval(demo, 1000);