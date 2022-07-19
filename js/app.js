// キャンバスを描画
draw = () => {
    let canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        drawBg(ctx);
    };
};

// 背景を描画
drawBg = (ctx) => {
    let img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 1024, 576);
        drawFg(ctx);
    };
    img.src = './images/bg.png';
};

// 前景を描画
drawFg = (ctx) => {
    let img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0,480, 1024, 120);
        drawPipe(ctx);
    };
    img.src = './images/fg.png';
};

// パイプ(障害物)を描画
drawPipe = (ctx) => {
    let img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 500, 400);
    };
    img.src = './images/pipeUp.png';
};