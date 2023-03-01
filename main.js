    function changeColor() {
        let color = '#';
        color += random = Math.random().toString(16).slice(2,8);
        console.log(color);
        document.querySelector('.shape').style.backgroundColor = color;
    }