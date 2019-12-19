function myChristmasTree() {
    let height = prompt("Write number", 3) // Quantity of lines
    let width = (2 * height) // Max width of our Christmas tree
    let spaces = width
    for (let i = height; i > 0; i--) { // From top to bottom
        let str = "";
        for (let j = i; j <= width; j++) { //From left branch to right branch
            if (j === width || j === spaces) { //Draw stars only along the contour
                str += "&#9733"
            } else {
                str += "&nbsp&nbsp"; //Double non-breaking space
            }
        }
        spaces -= 2 // Our Christmas tree gets wider
        document.write(str + "<br/>") // And draw
    }
}