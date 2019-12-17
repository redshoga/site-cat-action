# site-cat-action

Site-cat appears on issue when someone posts `lgtm`

# Screenshot

WIP

# Settings

Save the following .yml file to `.github/workflows` in your repository.

```site-cat.yml
name: Site Cat LGTM
on:
  issue_comment:
    types: [created]
  pull_request_review:
    types: [submitted]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: redshoga/site-cat-action@1.0
        with:
          token: ${{ secrets.LGTM_TOKEN }}
```
