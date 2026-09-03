---
unit: inv-addy-8
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-8

## Files assigned
- [x] `README.md` (25,223 bytes)
- [x] `CONTRIBUTING.md` (7,179 bytes)
- [x] `hooks/SIMPLIFY-IGNORE.md` (3,863 bytes)
- [x] `hooks/simplify-ignore.sh` (12,173 bytes)
- [x] `hooks/session-start-test.sh` (1,224 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/readme-md.md` (16,829 bytes)
- `docs/analysis/inventory/addy/contributing-md.md` (9,915 bytes)
- `docs/analysis/inventory/addy/hooks-simplify-ignore-md.md` (6,014 bytes)
- `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md` (9,459 bytes)
- `docs/analysis/inventory/addy/hooks-session-start-test-sh.md` (6,468 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-8.md` (this report)

## Scripts executed
- `sources/addy/hooks/simplify-ignore.sh` — `echo '{}' | bash hooks/simplify-ignore.sh` — Exit code: `0` (clean exit, no stdout/stderr)
- `sources/addy/hooks/simplify-ignore-test.sh` — `bash hooks/simplify-ignore-test.sh` — Exit code: `0` (21 passed, 0 failed across all 10 test cases)
- `sources/addy/hooks/session-start-test.sh` — `bash hooks/session-start-test.sh` — Exit code: `1` (`Error: expected IMPORTANT priority, got undefined` at line 25)
- `sources/addy/hooks/session-start.sh` — `bash hooks/session-start.sh` — Exit code: `0` (emitted `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"..."}}`)
- `sources/addy/scripts/validate-skills.js` — `bun scripts/validate-skills.js` — Exit code: `0` (25 skills checked — 0 error(s), 0 warning(s) — PASSED)
- `sources/addy/scripts/validate-commands.js` — `bun scripts/validate-commands.js` — Exit code: `0` (9 commands checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-reference-links.js` — `bun scripts/validate-reference-links.js` — Exit code: `0` (25 skills checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-artifact-paths.js` — `bun scripts/validate-artifact-paths.js` — Exit code: `0` (7 files checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-versions.js` — `bun scripts/validate-versions.js` — Exit code: `0` (All plugin manifests use version 0.6.8)
- `sources/addy/scripts/validate-artifact-paths-test.js` etc. — `bun test ./scripts/validate-artifact-paths-test.js ./scripts/validate-commands-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-versions-test.js ./scripts/lib/skill-lint-test.js ./scripts/run-evals-test.js` — Exit code: `0` (43 pass, 0 fail)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Always-Failing Gate in `hooks/session-start-test.sh`:** The session-start regression test fails unconditionally with exit code 1 (`Error: expected IMPORTANT priority, got undefined`). In an earlier refactor, `hooks/session-start.sh` was updated to comply with Claude Code and Codex CLI standards by emitting `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`. However, `hooks/session-start-test.sh:24-43` and `CONTRIBUTING.md:86-105` were never updated to match this new schema, asserting deprecated top-level fields `payload.priority` and `payload.message`. This is an `always-failing-gate` / `script-bug` / `doc-drift` defect.
- **Command Count & Tree Diagram Drift:** `README.md:24` documents "9 slash commands that map to the development lifecycle" and tabulates 9 commands in lines 26-37 (`/spec`, `/plan`, `/build`, `/test`, `/constraints`, `/review`, `/webperf`, `/code-simplify`, `/ship`). However, the project structure tree diagram in `README.md:381-383` labels `.claude/commands/`, `.gemini/commands/`, and `commands/` as each holding "8 slash commands", whereas all three directories on disk contain 9 commands.
- **Skill Count Discrepancy:** `README.md:220` heading is `## All 24 Skills`, whereas line 222 clarifies "The pack includes 25 skills total — 24 lifecycle skills plus the `using-agent-skills` meta-skill", and `README.md:352` notes `25 skills (24 lifecycle + 1 meta)`.
- **Cross-File Review Severity Divergence:** `README.md:268` states review severity labels as `Nit/Optional/FYI`. In contrast, `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md:275-288` adopt a 4-tier scale (`Critical`, `Required`, `Optional`, `Nit`), while `.claude/commands/review.md:15` adopts a 3-tier scale (`Critical`, `Important`, `Suggestion`).
- **Orphan Status of `SIMPLIFY-IGNORE.md` & `simplify-ignore.sh`:** Neither file is linked from `README.md`, `CONTRIBUTING.md`, `plugin.json`, or `hooks/hooks.json`. They constitute an opt-in hook subsystem that requires manual entry in `.claude/settings.json`.
- **Per-Skill Installation Portability Gap (Issue #361):** Both `README.md:61-66` and `CONTRIBUTING.md:61` address issue #361, explaining that `npx skills add <repo> --skill <name>` copies only `skills/<name>/` and leaves out shared root `references/`, causing missing reference paths unless users install the entire repository pack or manually copy reference checklists.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,415 tokens (49,662 bytes across 5 files).
- Approximate tokens of output written: ~12,200 tokens across 5 inventory entries and 1 unit report.
