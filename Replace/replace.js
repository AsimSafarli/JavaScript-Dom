function replace() {
    // Select first child element:
    const element = document.getElementById("replace").children[0];
    const newNode = document.createTextNode("Water");
    element.replaceChild(newNode, element.childNodes[0]);
    }