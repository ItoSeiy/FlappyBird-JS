function draw() {
    let canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        drawBg(ctx);
    }
}

function drawBg(ctx) {
    let img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 1250, 750);
        drawFg(ctx);
    };
    img.src = './images/bg.png';
}

function drawFg(ctx) {
    let img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 600, 1250, 125);
    };
    img.src = './images/fg.png';
}

