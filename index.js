const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

// generate logo from input
async function generateLogo() {

    // prompt for input
    const userInput = await inquirer.prompt([
        { type: "input", name: "text", message: "Enter up to three characters:" },
        { type: "input", name: "textColor", message: "Enter text color:" },
        { type: "list", name: "shapeType", message: "Choose a shape:", choices: ["circle", "triangle", "square"] },
        { type: "input", name: "shapeColor", message: "Enter shape color:" },
    ]);

    // variable for shape
    let shape;

    // select shape from input
    switch (userInput.shapeType) {
        case "circle":
            shape = new shapes.Circle();
            break;
        case "triangle":
            shape = new shapes.Triangle();
            break;
        case "square":
            shape = new shapes.Square();
            break;
        default:
            console.log("Invalid shape type. Exiting.");
            return;
    }

    // select color for shape
    shape.setColor(userInput.shapeColor);

    // Include text in the SVG content
    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="100" fill="${userInput.textColor}" text-anchor="middle" alignment-baseline="middle" font-size="20">${userInput.text}</text>
    </svg>`;

    const fileName = "logo.svg";

    fs.writeFileSync(fileName, svgContent);
    console.log(`Generated ${fileName}`);
}

generateLogo();

