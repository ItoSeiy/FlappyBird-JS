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
    };
    img.src = './images/bg.png';
}