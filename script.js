function getSeconds() {
    return new Date().getSeconds();
}

function getMinutes () {
    return new Date().getMinutes();
}

function getHours () {
    return new Date().getHours();
}



setInterval( function() {      
    var rotationSeconds = getSeconds()*6 + 180;
    var rotationMinutes = getMinutes() * 6 + 180;
    var rotationHours = getHours() * 30 + 180;
    document.getElementById('seconds').style.transform = 'rotate(' + rotationSeconds + 'deg)';
    document.getElementById('minutes').style.transform = 'rotate(' + rotationMinutes + 'deg)';
    document.getElementById('hours').style.transform = 'rotate(' + rotationHours + 'deg)';
}, 1000)

