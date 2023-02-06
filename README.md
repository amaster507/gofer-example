# gofer ENGINE

![gofer Engine Logo](https://raw.githubusercontent.com/amaster507/gofer/main/images/gofer-logo.png)

This is an example repo for the gofer engine. It is the newest and easier HL7
interface Engine!

## Instalation

1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server

## Customization

1. Clone or Fork this repo.
2. Add your own channels in the `channels` folder and add them to the
   `channels/index.js` file
3. Add your own reusable filters in the `filters` folder and use them in your
   channels where needed.
4. Add your own reusable transforms in the `transforms` folder and use them in
   your channels where needed.
5. Build for production using the `npm run build` command.
6. Start the production server using the `npm run start` command.

For more information on Developing Channels for gofer Engine, please see the
gofer [README](https://github.com/amaster507/gofer)
