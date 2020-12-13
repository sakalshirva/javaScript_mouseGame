const AREA = document.body;
const CIRCLE1 = document.querySelector('.circle1');
const CIRCLE2 = document.querySelector('.circle2');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition1 = windowWidth - e.clientX - 40;
    var verticalPosition1= windowHeight - e.clientY - 40;

    // Set horizontal and vertical position.
    CIRCLE1.style.left = horizontalPosition1 + 'px';
    CIRCLE1.style.top = verticalPosition1 + 'px';


}

function mouse2(e){
    
    var horizontalPosition2 = windowWidth - e.clientX - 20;
    var verticalPosition2 = windowHeight - e.clientY - 20;
    CIRCLE2.style.right = horizontalPosition2 + 'px';
    CIRCLE2.style.top = verticalPosition2 + 'px';
}


function changeColorOnTouch1() {
    CIRCLE1.style.backgroundColor = "green";
    CIRCLE1.style.borderColor = "green";
}
function changeColorOnTouch2() {
    CIRCLE2.style.backgroundColor = "red";
    CIRCLE2.style.borderColor = "red";
    
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
AREA.addEventListener('mousemove', mouse2, false)

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE1.addEventListener('mouseenter', changeColorOnTouch1, false);
CIRCLE2.addEventListener('mouseenter', changeColorOnTouch2, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE1.addEventListener('mouseleave', function(){CIRCLE1.removeAttribute("style");}, false);
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);