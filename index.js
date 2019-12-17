const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    core.setOutput("Hello, World!");
    console.log("Hello, World! on console.log()")
    console.log(process.env);
    const a = require(process.env.GITHUB_EVENT_PATH)
    console.log("process.env.GITHUB_EVENT_PATH", process.env.GITHUB_EVENT_PATH)
    console.log(a)
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
