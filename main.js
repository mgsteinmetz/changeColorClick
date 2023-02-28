var el_up = document.getElementById("");
var el_down = document.getElementById("");

    function changeColor(color) {
        document.body.style.background = color;
    }

    function gfg_Run() {
        changeColor('');
        el_down.innerHTML = "Background Color changed!";
    }