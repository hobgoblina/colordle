# Colordle

A colorful spin on the popular word guessing game. Made with React, Typescript, and Tailwind CSS.

### [Try it out!](https://colordle.lina.garden/)

## Build and run 

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd colordle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t game:dev .
$> docker run -d -p 3000:3000 game:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t game:prod .
$> docker run -d -p 80:80 game:prod
```

Open [http://localhost](http://localhost) in browser.

