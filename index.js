const core = require('@actions/core');
const fs = require('fs');
const Octokit = require("@octokit/rest");

// most @actions toolkit packages have async methods
async function run() {
  try {
    // action info
    const repoOwner = process.env.GITHUB_REPOSITORY.split("/")[0]
    const repoName = process.env.GITHUB_REPOSITORY.split("/")[1]
    if (!["issue_comment"].includes(process.env.GITHUB_EVENT_NAME)) return;

    // issue info
    const issueInfo = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8'));
    if (issueInfo.comment.body !== "LGTM") return

    // github client
    const token = core.getInput('token');
    const octokit = new Octokit({
      auth: `token ${token}`
    });

    // comment site-cat
    octokit.issues.createComment({
      owner: repoOwner,
      repo: repoName,
      issue_number: issueInfo.issue.number,
      body: "![site-cat](https://user-images.githubusercontent.com/33852683/70984291-8a759d80-20fd-11ea-9e0d-35b559adde8b.jpeg)"
    })
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
