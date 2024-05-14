class LineText {
    constructor(text, index, y, speed, font, rnd) {
        this.text = text;
        this.y = y + index * 140;
        this.x = -(width / 20);
        this.speed = speed;
        this.textWidth = textWidth(this.text);  // Calculate width of the text
        this.font = font;
        this.rnd = rnd;

        // Ensure the text covers the whole width of the canvas by repeating it
        while (this.textWidth < width) {
            this.text += "  " + this.text;
            this.textWidth = textWidth(this.text);  // Update text width
        }
    }

    update() {
        this.x += (this.speed * this.rnd);

        // Reset position to loop the text seamlessly
        if (this.speed > 0 && this.x > this.textWidth - 2200) {
            this.speed *= -1;
        } else if (this.speed < 0 && this.x < -this.textWidth + 770) {
            this.speed = abs(this.speed);
        }
    }

    display() {
        fill('rgba(250, 255, 250, 0.35)');
        noStroke();
        textFont(fonts[this.font]);
        text(this.text, this.x, this.y);
    }
}
