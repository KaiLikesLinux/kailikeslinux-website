// time
function time(){
    var dateTimeWithSeconds = false;
    var d = new Date()
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    function checkTime(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
    }

    if (dateTimeWithSeconds){
        document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    } else {
        document.getElementById("time").innerHTML = h + ":" + m
    }

    var t = setTimeout(time, 500);
}

// Init
function initScripts(){
    time();
}

// Application Management
function enableFFWeb(){
    document.getElementById("flameflox-wb").style.display = "block"
}

function closeFFWeb(){
    document.getElementById("flameflox-wb").style.display = "none"
}

function enableTerminalEmulator(){
    document.getElementById("quikterm-te").style.display = "block"
}

function closeTerminalEmulator(){
    document.getElementById("quikterm-te").style.display = "none"
}

function enableFileManager(){
    document.getElementById("wigglr-fm").style.display = "block"
}

function closeFileManager(){
    document.getElementById("wigglr-fm").style.display = "none"
}
