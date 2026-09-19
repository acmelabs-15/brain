# Changesets

A visible change to brain gets a changeset: `bunx changeset`, then answer the two
prompts. `bun run version` applies pending changesets to `package.json` and the
changelog, then runs `version:sync` so every host manifest carries the same version.
The release workflow tags `v<version>`, moves `latest`, and adds `brain--v<version>`.
