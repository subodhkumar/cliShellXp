// Import the necessary modules
const yargs = require('yargs');
const api = require('../api');

// Define your commands and options using Yargs
yargs
  .command('greet', 'Greet the user', (yargs) => {
    // Add any command-specific options here
  }, (argv) => {
    // Command execution logic
    api.greetUser(argv.name);
  })
  .option('name', {
    alias: 'n',
    description: 'Specify the name to greet',
    type: 'string',
    demandOption: true, // Required option
  })
  .help(); // Enable the --help flag

// Parse the provided arguments
yargs.parse();
