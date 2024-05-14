class Blob {
    constructor(x, y, size, noiseMax, phaseSpeed, zoffSpeed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.noiseMax = noiseMax;
        this.phase = random(TWO_PI);
        this.zoff = random(80, 100);
        this.phaseSpeed = phaseSpeed;
        this.zoffSpeed = zoffSpeed;
    }

    update() {
        this.phase += 0.003;
        this.zoff += 0.01;
    }

    show() {
        push();

        translate(this.x, this.y);
        stroke(255)
        strokeWeight(3);
        fill(20, 130, 125);

        beginShape();
        for (let a = 0; a < TWO_PI; a += radians(5)) {
            let xoff = map(cos(a + this.phase), -1, 1, 0.9, this.noiseMax);
            let yoff = map(sin(a + this.phase), -1, 1, 0.9, this.noiseMax);
            let r = map(noise(xoff, yoff, this.zoff), 0, 1, 100, this.size);
            let x = r * cos(a)
            let y = r * sin(a)
            vertex(x, y);
        }
        endShape(CLOSE);

        pop();
    }
}

function createBlob(x, y, size, phaseSpeed, zoffSpeed) {
    let noiseMax = size / 25;

    let newBlob = new Blob(x, y, size, noiseMax, phaseSpeed, zoffSpeed);
    blobs.push(newBlob);
}
