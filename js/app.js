let bgSrc = "./images/bg.png";
let fgSrc = "./images/fg.png";
let pipeUp = "./images/pipeUp.png";
let pipeDown = "./images/pipeDown.png";

let pipeInitialDx = 500;
let pipeYAxisMax = 400;
let pipeYAxisMin = 230;
let pipeSpace = 400;

// キャンバスを描画
draw = () => {
    let canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        drawBg(ctx);
    }
}

// 背景を描画
drawBg = (ctx) => {
    let img = new Image();
    img.src = bgSrc;
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 1024, 576);
        drawFg(ctx);
    }
}

// 前景を描画
drawFg = (ctx) => {
    let img = new Image();
    img.src = fgSrc;
    img.onload = () => {
        ctx.drawImage(img, 0,480, 1024, 120);
        drawPipeRandom(ctx);
    }
}

// パイプ(障害物)をランダムに描画
drawPipeRandom = (ctx) => {
    let pipes = [];
    pipes.push(new Image(), new Image());
    pipes[0].src = pipeUp;
    pipes[1].src = pipeDown;
    let yAxis = getRandomYAxes();
    console.log(yAxis[0], yAxis[1]);
    pipes[0].onload = () => {
        ctx.drawImage(pipes[0], pipeInitialDx, yAxis[0]);
    };

    pipes[1].onload = () => {
        ctx.drawImage(pipes[1], pipeInitialDx, yAxis[1]);
    }
}

getRandomYAxes = () =>{
    let yAxis = Math.floor(Math.random() * (pipeYAxisMax - pipeYAxisMin) + pipeYAxisMin);
    return [yAxis, (yAxis - pipeSpace)];
}