const Octokit = require("@octokit/rest");
const token = "e01eb99bee3c8d512d185cc647a9b8f330233a85"

const octokit = new Octokit({
  auth: `token ${token}`
});

octokit.issues.createComment({
owner: "redshoga",
repo: "site-cat-action",
issue_number: 1,
body: "![site-cat](https://user-images.githubusercontent.com/33852683/70984291-8a759d80-20fd-11ea-9e0d-35b559adde8b.jpeg)"
})
