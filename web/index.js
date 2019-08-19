window.onload = function() {
        const greeter = require('./nodejs/appjs.js');
        var da = document.getElementsByTagName("input");
        console.log(da + greeter.hhe)
        da.onclick = greeter.hhe();

    }
    //愚蠢了