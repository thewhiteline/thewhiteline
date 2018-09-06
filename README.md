# The White Line

Learning couldn't be easier.

## Requirements

This project uses the following tools that need to be installed on your system.

- [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager

## Development

To properly set up the project on your system, simply clone the project and follow the following instructions.

```bash
# Install all dependencies
$ pnpm recursive install
```

Next, open up two terminal instances and run the following _in order_ _(Currently, this only runs the API. This should be updated in the future when the web package is set up)_.

```bash
# Terminal 1
# Run webpack to bundle
$ cd api && pnpm run webpack

# Terminal 2
# Start the development server
$ cd api && pnpm run start:dev
```
