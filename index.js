const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    core.setOutput("Hello, World!");
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
