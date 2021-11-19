class Ball {
    trackColor;
    history;
    threshold;

    constructor(trackColor, threshold) {
        this.trackColor = trackColor;
        this.history = [];
        this.threshold = threshold;
    }



    findColor = () => {
        let avgX = 0;
        let avgY = 0;

        let count = 0;

        let r2 = getRed(this.trackColor);
        let g2 = getGreen(this.trackColor);
        let b2 = getBlue(this.trackColor);

        //Begin loop to walk through every pixel
        for (let x = 0; x < video.width; x++) {
            for (let y = 0; y < video.height; y++) {
                const loc = (x + y * video.width) * 4;
                // What is current color
                const currentColor = video.pixels[loc];
                const p = video.pixels;

                const r1 = p[loc];
                const g1 = p[loc + 1];
                const b1 = p[loc + 2];


                const d = (r2 - r1) * (r2 - r1) + (g2 - g1) * (g2 - g1) + (b2 - b1) * (b2 - b1);

                if (d < this.threshold * this.threshold) {
                    avgX += x;
                    avgY += y;
                    count++;
                }


            }
        }

        if (count > 0) {
            avgX = avgX / count;
            avgY = avgY / count;
            console.log(avgX, avgY);
            this.history.push([avgX, avgY]);
        }
        else {
            this.history.push([-1, -1]);
        }

    }

    showTrail = (trailColor, type, fall) => {
        const size = this.history.length - 1;
        const constant = 20;
        strokeWeight(8);
        strokeCap(ROUND);
        const r = getRed(trailColor);
        const g = getGreen(trailColor);
        const b = getBlue(trailColor);


        for (let i = size - 1; i > size - constant && i >= 0; i--) {
            const coords = this.history[i];
            if (coords[0] < 0 && coords[1] < 0) {
                continue;
            }

            if (fall) {
                coords[1] += 4;
                history[i] = coords;
            }

            stroke(trailColor, (constant - (size - i * 1.0)) * 255 / constant);
            const prev = this.history[i + 1];
            if (type === "Line") {
                trailColor = color(b + 1, r, g);
                if (i % 2 == 0)
                    strokeCap(SQUARE);
                else
                    strokeCap(ROUND);

                
                if (prev[0] > 0 && prev[1] > 0)
                    line(coords[0], coords[1], prev[0], prev[1]);
            }
            else if (type === "Dots") {
                point(coords[0], coords[1]);
            }
            else if (type === "Dashes") {
                if (i % 2 == 0) {
                    trailColor = color(b + 1, r, g);
                    if (i % 4 == 0)
                        strokeCap(SQUARE);
                    else
                        strokeCap(ROUND);
                    if (prev[0] > 0 && prev[1] > 0)
                        line(coords[0], coords[1], prev[0], prev[1]);
                }
            }

        }
    }





}

const getRed = (color) => {
    return color.levels[0];
}
const getGreen = (color) => {
    return color.levels[1];
}
const getBlue = (color) => {
    return color.levels[2];
}

