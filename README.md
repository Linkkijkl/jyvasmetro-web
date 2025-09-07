# Jyväsmetro web pages

Sources for <https://jyvasmetro.fi>.
Make sure you have [git lfs](https://git-lfs.com/) installed before cloning.

## Development in Linux
1. Using Linux, install [Hugo](https://gohugo.io/) and [Yarn](https://yarnpkg.com/).
2. In project root, run `yarn` and then `hugo server`

## Development with Devcontainers (any OS which runs Docker)
1. Open this project with your [tool with Devcontainers support](https://containers.dev/supporting)
2. Run `hugo server` from terminal inside the container

## Tips
Most of the content is marked with `draft = true`, which means that it will not get into production builds. Running hugo with `--buildDrafts` will override that behaviour.
