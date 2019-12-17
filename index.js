const core = require('@actions/core');
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run() {
  try {
    core.setOutput("Hello, World!");
    console.log("Hello, World! on console.log()")
    console.log(process.env);
    console.log("process.env.GITHUB_EVENT_PATH", process.env.GITHUB_EVENT_PATH)
    let text = fs.readFileSync(process.env.GITHUB_EVENT_PATH);
    console.log(text);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
