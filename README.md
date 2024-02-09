
# Generate A Logo



### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

### Instalation & Usage

```md
In your local terminal you will need to run 'npm install' to down load Inquirer and Jest.  Once that is complete run 'node index', 
then follow the prompts answering all the questions an a logo will be generated with the given information.
```

### Note to Grading Team

When checking my commits you'll notice that they are lacking, and one says "large see README".  I had an issue with my gitignore file that I could not figure out, and knew if I pushed I would send all my node-modules and package-lock.json to Github. So i carried on with the rest of the challenge until I could address it Monday. Turns out I was simply missing the "dot" for the file (rolling my eyes at myself). By that time the bulk of the work was done hense the one rather large commit.

### Links

![Alt text](<examples/logo copy 4.svg>)

https://drive.google.com/file/d/1gfWH6NzcM2fryrD7aewOUZDE0fP5sHYV/view