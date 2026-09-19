# Tasks: upstream-sync

Phase 1: scaffold and pure logic

- [x] Task 1: repo scaffold
  - Acceptance: `bun install`, `bun run typecheck`, `bun test` run and pass on an empty test
  - Verify: the three commands exit 0
  - Files: package.json, tsconfig.json, bunfig.toml, .gitignore, .github/workflows/ci.yml
- [x] Task 2: config loader
  - Acceptance: `upstream.json` parses into a typed object; a missing `sha`, a non-40-hex `sha`, or a `to` outside `skills/`, `references/`, `agents/`, `hooks/`, `.claude/commands/`, `commands/`, `licenses/` is an error naming the path
  - Verify: `bun test scripts/sync`
  - Files: upstream.json, scripts/sync/lib/config.ts, scripts/sync/__tests__/config.test.ts
- [x] Task 3: fetch
  - Acceptance: given a tarball path or URL and a SHA, returns a temp directory holding the repo tree with the `<repo>-<sha>` root stripped; a non-200 response is an error naming the URL
  - Verify: test with a fixture tarball built in the test; no network
  - Files: scripts/sync/lib/fetch.ts, scripts/sync/__tests__/fetch.test.ts
- [x] Task 4: lock and plan
  - Acceptance: a take of a directory of skills yields one unit per child directory; a take of a flat folder yields one unit per file; a unit whose target exists and is not in the lock is a collision error listing every collision before any write
  - Verify: `bun test scripts/sync`
  - Files: scripts/sync/lib/lock.ts, scripts/sync/lib/plan.ts, scripts/sync/__tests__/plan.test.ts

Phase 2: apply and check

- [x] Task 5: apply
  - Acceptance: writes every planned file, deletes a vendored file the new tree lacks, copies the licence, writes `upstream.lock.json` with a sha256 per file, and touches no brain-owned path
  - Verify: fixture sync then a second fixture with one file removed
  - Files: scripts/sync/lib/apply.ts, scripts/sync/__tests__/apply.test.ts
- [x] Task 6: check
  - Acceptance: reports `changed`, `missing` and `unlisted` drift; `unlisted` only inside vendored directories; exit 0 when clean
  - Verify: fixture with one edit, one deletion, one extra file
  - Files: scripts/sync/lib/check.ts, scripts/sync/__tests__/check.test.ts
- [x] Task 7: CLI
  - Acceptance: `bun run sync`, `-- --check`, `-- --only <name>`; exit 1 on drift or error with one line per finding; unknown flag is an error
  - Verify: subprocess tests against the fixture
  - Files: scripts/sync/sync.ts, scripts/sync/__tests__/sync.test.ts, package.json

Phase 3: seeds and the real tree

- [ ] Task 8: seed and report
  - Acceptance: `--seed <name>` copies seeded paths once and records `seededAt`; a second run refuses and changes nothing; `--report` lists each seeded file that differs between `seededAt` and the pin, with a unified diff
  - Verify: fixture with two tarballs
  - Files: scripts/sync/lib/seed.ts, scripts/sync/__tests__/seed.test.ts, scripts/sync/sync.ts
- [ ] Task 9: first real sync
  - Acceptance: the three pins sync; `--check` exits 0; 25 addy skills, 3 matt skills, ask-user-question, 7 references, 4 agents, 8 hook files, 2 licences on disk; 18 seeded command files; every `../../references/*.md` link in a vendored skill resolves
  - Verify: `bun run sync && bun run sync -- --check`; a link check one-liner
  - Files: upstream.lock.json and the vendored tree
- [ ] Task 10: CI and smoke test
  - Acceptance: CI runs typecheck, tests and `sync -- --check`; a network smoke test runs only with `SYNC_NETWORK=1`
  - Verify: CI green on the `wrap` branch
  - Files: .github/workflows/ci.yml, scripts/sync/__tests__/network.test.ts
