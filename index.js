const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    core.setOutput("Hello, World!");
    console.log("Hello, World! on console.log()")
    console.log(process.env);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
