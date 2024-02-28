import inquirer from 'inquirer';
import { writeFile } from 'fs/promises'; // Use promise-based writeFile
import { Circle, Square, Triangle } from './lib/shapes.js';

async function run() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 || 'Text must be up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal number):',
            default: 'white' // Provide a default value or validate input format if needed
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape\'s color (color keyword or hexadecimal number):',
            default: 'black' // Provide a default value or validate input format if needed
        }
    ]);

    let shapeSvg;
    switch (answers.shape) {
        case 'circle':
            shapeSvg = new Circle(answers.shapeColor).render();
            break;
        case 'triangle':
            shapeSvg = new Triangle(answers.shapeColor).render();
            break;
        case 'square':
            shapeSvg = new Square(answers.shapeColor).render();
            break;
    }

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">
        ${answers.text}
    </text>
</svg>
    `;

    try {
        await writeFile('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

run().catch(console.error);

