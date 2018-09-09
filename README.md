# The White Line

Learn because you want to.

## Requirements

This project uses the following tools that need to be installed on your system.

- [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [Firebase CLI](https://npmjs.org/package/firebase-tools) - Firebase helps mobile app teams succeed.

## Development

To setup this project for development, simply run the following commands.

```bash
# Install all dependencies
$ npm install
```

Next.js provides a development server which watches your files and reloads the webpage.

```bash
# Start the development server
$ npm run start:dev
```

Firebase provides an emulator which emulates its services locally. This is useful when wanting to test out production features but deployment is not an option.

```bash
# Build the production files
$ npm run build:prod

# Start the emulator
$ npm run start:prod
```

To deploy the current code to Firebase, simply run the deployment script.

```bash
# Deploy to Firebase
$ npm run deploy:prod
```

Sometimes, errors might occur due to caching or old deployment files. A script is provided to clean these files.

```bash
# Clean production files
$ npm run clean
```
