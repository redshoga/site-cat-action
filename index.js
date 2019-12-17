const core = require('@actions/core');
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run() {
  try {
    core.setOutput("Hello, World!");
    console.log("Hello, World! on console.log()")
    console.log(process.env);
    console.log("process.env.GITHUB_EVENT_PATH", process.env.GITHUB_EVENT_PATH)
    const jsonObject = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
    console.log(jsonObject);
    console.log("END")
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
