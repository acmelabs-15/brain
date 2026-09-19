# Plan: upstream-sync

Spec: `SPEC-upstream-sync.md` (approved 2026-09-19). Toolchain: Bun 1.4.0, `bun:test`.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | Repo scaffold: package.json, tsconfig, bunfig, .gitignore, CI skeleton | — | none |
| 2 | `lib/config.ts`: load and validate `upstream.json` | 1 | a bad take path found late; validate early |
| 3 | `lib/fetch.ts`: tarball by SHA to a temp dir, extract with `tar` | 1 | GitHub tarball root folder is `<repo>-<sha>`; strip it |
| 4 | `lib/lock.ts` + `lib/plan.ts`: take-list to file list, ownership and collision check | 2 | the unit rule (dir vs file) must match the spec |
| 5 | `lib/apply.ts`: write, delete dropped, hash, write lock | 3, 4 | deleting a brain-owned file by mistake; guarded by the lock |
| 6 | `lib/check.ts`: tree against lock, three drift kinds | 4 | unlisted-file scan must stay inside vendored directories |
| 7 | `sync.ts` CLI: `--check`, `--only`, exit codes | 5, 6 | none |
| 8 | Seeds: `--seed`, `--report` (diff between seed SHA and pin) | 3, 7 | report needs a second tarball; keep it lazy |
| 9 | First real sync and seed, committed vendored tree | 7, 8 | network; one run, then the tree is data |
| 10 | CI: `sync -- --check`; env-guarded network smoke test | 9 | none |

Parallel: 2 and 3 after 1; 4 beside 3. Sequential from 5 on.

## Verification checkpoints

- After 4: unit tests for config, plan and lock pass with no network.
- After 7: a fixture upstream syncs, checks clean, and drifts on an edit.
- After 9: spec success criteria 1, 2, 4 and 7 hold on the real tree.
- After 10: CI green on the branch.

## What is not in this plan

Version sync and manifests (`host-manifests`), the plain-talk renderer, and any edit
to a seeded command (`lifecycle`).
