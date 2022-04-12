import * as PIXI from 'pixi.js';

document.body.style.cssText = 'margin: 0; overflow: hidden;';

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
});

document.body.appendChild(app.view);
app.renderer.resize(window.innerWidth, window.innerHeight);

app.loader
    .add("samurai", '../assets/sprites/samurai/Attack1.png')
    .load(setup);

function setup() {
    createPlayer();
}

function createAnimationSheet(path: string, frameCount: number) {
    const spriteSheet = PIXI.BaseTexture.from(path);
    const w = spriteSheet.width / frameCount;
    const h = spriteSheet.height;

    const textures = [];
    for (let i = 0; i < frameCount; i++) {
        textures.push(new PIXI.Texture(spriteSheet, new PIXI.Rectangle(i * w, 0, w, h)));
    }
    return textures;
}


function createPlayer() {
    const playerSheet: any = {}
    playerSheet['walk'] = createAnimationSheet(app.loader.resources['samurai'].url, 6);
    
    const player = new PIXI.AnimatedSprite(playerSheet['walk']);
    player.x = app.screen.width / 2;
    player.y = app.screen.height / 2;
    

    player.anchor.set(0.5);
    player.animationSpeed = .18
    player.play();
    app.stage.addChild(player);
}
