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
        let r2 = red(trackColor);
        let g2 = green(trackColor);
        let b2 = blue(trackColor);
      
         //Begin loop to walk through every pixel
        for (let x = 0; x < video.width; x++ ) {
          for (let y = 0; y < video.height; y++ ) {
            const loc = x + y * video.width;
            // What is current color
            const currentColor = video.pixels[loc];
            const r1 = red(currentColor);
            const g1 = green(currentColor);
            const b1 = blue(currentColor);
    
      
            const d = distSq(r1, g1, b1, r2, g2, b2); 
      
            if (d < threshold*threshold) {
              avgX += x;
              avgY += y;
              count++;
            }
            
            
          }
        }

        if (count > 0) { 
            avgX = avgX / count;
            avgY = avgY / count;
           
            history.add([avgX, avgY]);
          }
          else {
            history.add([-1, -1]);
          }
        
        }


}

