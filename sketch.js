let blobs = [];
let xOffSet = 0;
let yOffSet = 0;

let fonts = [];
let font = 1;

let lineText = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvas-container");

    textSize(height / 5);

    randomVelocity = random(0.3, 1.5);
    lineText[1] = new LineText("lucaspop", 1, height / 3, -0.5, 15, randomVelocity);

    for (let i = 0.5; i < 6; i++) {
        for (let j = 0.5; j < 6; j++) {
            let x = j * width / 3 - xOffSet
            let y = i * height / 3 - yOffSet

            if (floor(random(0, 3))) {
                let size = random(1, 70);
                let phaseSpeed = random(0.01, 0.02);
                let zoffSpeed = random(0.01, 0.05);
                createBlob(x, y, size, phaseSpeed, zoffSpeed);
            }
        }
        xOffSet += 200
        yOffSet += 80
    }
}

function draw() {
    background(30, 130, 130);

    lineText[1].update();
    lineText[1].display();

    for (let blob of blobs) {
        blob.update();
        blob.show();
    }
}

function preload() {
    fonts[1] = loadFont('FONTS/Amatic_SC/p.ttf');
    fonts[2] = loadFont('FONTS/Creepster/p.ttf');
    fonts[3] = loadFont('FONTS/Fugaz_One/p.ttf');
    fonts[4] = loadFont('FONTS/Gluten/p.ttf');
    fonts[5] = loadFont('FONTS/Great_Vibes/p.ttf');
    fonts[6] = loadFont('FONTS/Irish_Grover/p.ttf');
    fonts[7] = loadFont('FONTS/Jacquarda/p.ttf');
    fonts[8] = loadFont('FONTS/Limelight/p.ttf');
    fonts[9] = loadFont('FONTS/Marker/p.ttf');
    fonts[10] = loadFont('FONTS/Orbitron/p.ttf');
    fonts[11] = loadFont('FONTS/Oswald/p.ttf');
    fonts[12] = loadFont('FONTS/Pacifico/p.ttf');
    fonts[13] = loadFont('FONTS/Rubik_Bubbles/p.ttf');
    fonts[14] = loadFont('FONTS/Rubik_Puddles/p.ttf');
    fonts[15] = loadFont('FONTS/Rubik_Scribble/p.ttf');
    fonts[16] = loadFont('FONTS/Rye/p.ttf');
    fonts[17] = loadFont('FONTS/Shadows/p.ttf');
    fonts[18] = loadFont('FONTS/Silkscreen/p.ttf');
    fonts[19] = loadFont('FONTS/Sixtyfour/p.ttf');
    fonts[20] = loadFont('FONTS/Stick/p.ttf');
    fonts[21] = loadFont('FONTS/Tac_One/p.ttf');
    fonts[22] = loadFont('FONTS/Unifraktur/p.ttf');
    fonts[23] = loadFont('FONTS/Varela_Round/p.ttf');
    fonts[24] = loadFont('FONTS/Whisper/p.ttf');
    fonts[25] = loadFont('FONTS/Zilla_Slab/p.ttf');
}