//move slider to see changes!
//sliders control the first 6 parameters of camera()



let number_shape = 25
let dim = 0 ;
let margin = 10 ; 
let c = 5  
let canvas_width = 720 ; 
let canvas_hight = 720 ; 
let f  
let frq = 5 ; 
let x , y 

P5Capture.setDefaultOptions({
    format: "webm",
    framerate: 30,
    quality: 0.98,
    verbose: true,
    disableScaling: true,
  });

function setup() {
  createCanvas(canvas_width,canvas_hight);
  
    dim = (canvas_width-2*margin)/number_shape ;
    angleMode(DEGREES)
  
 
}

function draw() {
// orbitControl();
  background(0);
    stroke(255);
    
    fill(0);
    rectMode(CENTER)
for (let j = 1; j < c; j++) {
    number_shape = map(mouseX ,0, canvas_width, 0, 50)
    for (let index = 0; index < number_shape; index++) {
       
     
        for (let i = 0; i <number_shape; i++) {
            x =margin + dim/2+i*dim,
            y =dim/2+index*dim 
           

            f = cos(frq * frameCount + dist(canvas_width/2,canvas_hight/2,x,y) );

            // circle(margin + dim/2+i*dim,margin + dim/2+index*dim,dim-2*j)
            circle(x,y,f * dim-5*j)
            // rect(x,y,f * dim-3*j,f * dim)
            // box(x,y,f * dim-3*j,f * dim-3*j)
            
            
        }
        
      }
    
}
 


 
 
 
}