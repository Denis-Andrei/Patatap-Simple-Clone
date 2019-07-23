
var circles=[];

function onKeyDown(event) {
    if(keyData[event.key]){
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500);

        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();

        circles.push(newCircle);


        

    }
    
    
}

function onFrame(event){
    for(var i = 0; i< circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
    
    
}



var keyData = {
    q : {
        color: "#FB3B12",
        sound:  new Howl({
            src: ['sounds/bubbles.mp3']
            })
    },
    w :{
        color: "#81F200",
        sound:  new Howl({
            src: ['sounds/clay.mp3']
            })
    },
    e :{
        color: "#F20043",
        sound:  new Howl({
            src: ['sounds/confetti.mp3']
            })
    },
    r :{
        color: "#F2D800",
        sound:  new Howl({
            src: ['sounds/corona.mp3']
            })
    },
    t : {
        color: "#00F2E7",
        sound:  new Howl({
            src: ['sounds/dotted-spiral.mp3']
            })
    },
    y :{
        color: "#F200D3",
        sound:  new Howl({
            src: ['sounds/flash-1.mp3']
            })
    },
    u :{
        color: "#006DF2",
        sound:  new Howl({
            src: ['sounds/flash-2.mp3']
            })
    },
    i :{
        color: "#8100F2",
        sound:  new Howl({
            src: ['sounds/glimmer-3.mp3']
            })
    },
    o : {
        color: "purple",
        sound:  new Howl({
            src: ['sounds/moon.mp3']
            })
    },
    p :{
        color: "red",
        sound:  new Howl({
            src: ['sounds/pinwheel.mp3']
            })
    },
    a :{
        color: "green",
        sound:  new Howl({
            src: ['sounds/piston-1.mp3']
            })
    },
    s :{
        color: "red",
        sound:  new Howl({
            src: ['sounds/piston-2.mp3']
            })
    },
    d : {
        color: "yellow",
        sound:  new Howl({
            src: ['sounds/piston-3.mp3']
            })
    },
    f :{
        color: "Chocolate",
        sound:  new Howl({
            src: ['sounds/prism-1.mp3']
            })
    },
    g :{
        color: "Crimson",
        sound:  new Howl({
            src: ['sounds/prism-2.mp3']
            })
    },
    h :{
        color: "cyan",
        sound:  new Howl({
            src: ['sounds/prism-3.mp3']
            })
    },
    j :{
        color: "Darkorange",
        sound:  new Howl({
            src: ['sounds/splits.mp3']
            })
    },
    k :{
        color: "deepPink",
        sound:  new Howl({
            src: ['sounds/squiggle.mp3']
            })
    },
    l :{
        color: "Fuchsia",
        sound:  new Howl({
            src: ['sounds/strike.mp3']
            })
    },
    z : {
        color: "gold",
        sound:  new Howl({
            src: ['sounds/suspension.mp3']
            })
    },
    x :{
        color: "LawnGreen",
        sound:  new Howl({
            src: ['sounds/timer.mp3']
            })
    },
    c :{
        color: "Orangered",
        sound:  new Howl({
            src: ['sounds/ufo.mp3']
            })
    },
    v :{
        color: "PaleGoldenRod ",
        sound:  new Howl({
            src: ['sounds/veil.mp3']
            })
    },
    b : {
        color: "Tomato",
        sound:  new Howl({
            src: ['sounds/wipe.mp3']
            })
    },
    n :{
        color: "white",
        sound:  new Howl({
            src: ['sounds/zig-zag.mp3']
            })
    },
    m :{
        color: "yellowgreen",
        sound:  new Howl({
            src: ['sounds/piston-2.mp3']
            })
    },
    space :{
        color: "purple",
        sound:  new Howl({
            src: ['sounds/squiggle.mp3']
            })
    },
    enter : {
        color: "red",
        sound:  new Howl({
            src: ['sounds/flash-1.mp3']
            })
    },
    1 :{
        color: "blue",
        sound:  new Howl({
            src: ['sounds/splits.mp3']
            })
    },
    2 :{
        color: "green",
        sound:  new Howl({
            src: ['sounds/confetti.mp3']
            })
    },
    3 :{
        color: "purple",
        sound:  new Howl({
            src: ['sounds/corona.mp3']
            })
    },
    4 :{
        color: "red",
        sound:  new Howl({
            src: ['sounds/clay.mp3']
            })
    },
    5 :{
        color: "paleturqoise",
        sound:  new Howl({
            src: ['sounds/zig-zag.mp3']
            })
    },
    6 :{
        color: "pink",
        sound:  new Howl({
            src: ['sounds/bubbles.mp3']
            })
    },

    7 :{
        color: "rebeccapurple",
        sound:  new Howl({
            src: ['sounds/glimmer.mp3']
            })
    },
    8 :{
        color: "goldenrod",
        sound:  new Howl({
            src: ['sounds/prism-2.mp3']
            })
    },
    9 :{
        color: "honeydew",
        sound:  new Howl({
            src: ['sounds/corona.mp3']
            })
    }

};





