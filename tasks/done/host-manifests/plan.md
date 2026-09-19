# Plan: host-manifests

Spec: `spec/SPEC-host-manifests.md` (approved 2026-09-19). Depends on nothing; the vendored tree from upstream-sync is present.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | The four host manifests plus the two marketplace files, hand-written from the spec's table | — | Codex and Antigravity both read a root `plugin.json`; the Codex one goes in `.codex-plugin/`, as addy does |
| 2 | `scripts/version/version-sync.ts` and its test: write `package.json`'s version into every manifest; `--check` | 1 | the two marketplace files nest the version under `plugins[0]` |
| 3 | `claude plugin validate . --strict` and `agy plugin validate .` wired as `bun run validate` | 1 | `agy` may be absent on CI; the script skips it with a note when the binary is missing |
| 4 | Changesets: config, an empty first changeset, the `version` script that calls `version:sync` | 2 | none |
| 5 | Install pages, one per host, each with install, verify, update, remove, and a "last run" line | 1 | the Gemini and Antigravity install of this exact repo is untested until the branch is pushed |
| 6 | CI: `version:sync -- --check` and `bun run validate` | 2, 3 | none |

Sequential from 1 to 6, except 4 and 5 which can run in either order after 2.

## Verification checkpoints

- After 1: `claude plugin validate . --strict` exits 0 on the tree.
- After 2: the version test passes with no network; `--check` exits 0 on the tree.
- After 6: CI green on the branch.

## Not in this plan

Pushing the branch, adding brain to the ACMElabs marketplace repo, and the manual install runs on Codex, Gemini and Antigravity. Those need a public branch and are asked for at the first release.
