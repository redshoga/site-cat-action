# site-cat-action

Site-cat appears on issue when someone posts `lgtm`

# Screenshot

<img width="754" alt="Screen Shot 2019-12-17 at 19 26 02" src="https://user-images.githubusercontent.com/33852683/70987367-150ccb80-2103-11ea-9a08-7bb1a934942f.png">

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
