const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

async function generateLogo() {
    const userInput = await inquirer.prompt([
        { type: "input", name: "text", message: "Enter up to three characters:" },
        { type: "input", name: "textColor", message: "Enter text color:" },
        { type: "list", name: "shapeType", message: "Choose a shape:", choices: ["circle", "triangle", "square"] },
        { type: "input", name: "shapeColor", message: "Enter shape color:" },
    ]);

    let shape;

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

    shape.setColor(userInput.shapeColor);

    const svgContent = `<svg width="300" height="200">${shape.render()}</svg>`;
    const fileName = "logo.svg";

    fs.writeFileSync(fileName, svgContent);
    console.log(`Generated ${fileName}`);
}

generateLogo();
