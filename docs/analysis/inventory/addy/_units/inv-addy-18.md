---
unit: inv-addy-18
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-18

## Files assigned
- [x] `sources/addy/skills/interview-me/SKILL.md` (14,359 bytes)
- [x] `sources/addy/skills/code-simplification/SKILL.md` (13,545 bytes)
- [x] `sources/addy/skills/doubt-driven-development/SKILL.md` (16,499 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-interview-me-skill-md.md` (15,226 bytes)
- `docs/analysis/inventory/addy/skills-code-simplification-skill-md.md` (11,261 bytes)
- `docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md` (13,175 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-18.md` (4,834 bytes)

## Scripts executed
- `bun scripts/synthesis/coverage.ts` — `bun scripts/synthesis/coverage.ts` — Exit code: `1` (baseline pre-manifest update: 1226 unchecked manifest rows, 0 empty required inventory fields)
- `bun scripts/synthesis/glossary-lint.ts` — `bun scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: `Glossary lint: clean`)
- `bun sources/addy/scripts/validate-skills.js` — `bun sources/addy/scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED)
- `bun sources/addy/scripts/validate-reference-links.js` — `bun sources/addy/scripts/validate-reference-links.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s) — PASSED)
- `bun sources/addy/scripts/validate-commands.js` — `bun sources/addy/scripts/validate-commands.js` — Exit code: `0` (Output: 9 commands checked — 0 error(s) — PASSED)
- `bun sources/addy/scripts/validate-artifact-paths.js` — `bun sources/addy/scripts/validate-artifact-paths.js` — Exit code: `0` (Output: 7 files checked — 0 error(s) — PASSED)
- `bun test ./sources/addy/scripts/run-evals-test.js` — `bun test ./sources/addy/scripts/run-evals-test.js` — Exit code: `0` (Output: 15 pass, 0 fail across 1 file)
- `bash sources/addy/hooks/simplify-ignore-test.sh` — Direct execution from repo root: Exit code: `127` (Output: `sed: hooks/simplify-ignore.sh: No such file or directory; filter_file: command not found` due to unanchored relative path on line 34); Execution with `Cwd: sources/addy`: Exit code: `0` (Output: `Results: 21 passed, 0 failed`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after: `addy:Define`, `addy:Review`, `addy:Build`)

## Cross-unit notes
- **Phase classification contradiction across units**:
  - `skills/interview-me/SKILL.md:14` claims `doubt-driven-development` is an "other Define-phase" skill alongside `idea-refine` and `spec-driven-development`.
  - However, `skills/doubt-driven-development/SKILL.md` (lines 12–28), `CLAUDE.md:23`, `README.md:361`, `skills/using-agent-skills/SKILL.md:176`, `.claude/commands/build.md:39`, `commands/build.toml:38`, and `sources/addy-external/doubt-driven-development.md:5` unanimously classify `doubt-driven-development` under `addy:Build` as an in-flight implementation posture for non-trivial coding decisions.
- **Phase classification divergence for code-simplification**:
  - Earlier command inventory entries `commands-code-simplify-toml.md:18` and `claude-commands-code-simplify-md.md:18` classified `/code-simplify` as `addy:Build`.
  - However, `CLAUDE.md:25`, `README.md:368`, `skills/using-agent-skills/SKILL.md:184`, and `sources/addy-external/code-simplification.md:5` classify `code-simplification` under `addy:Review`.
- **Companion script execution defect**:
  - `sources/addy/hooks/simplify-ignore-test.sh:34` extracts `filter_file()` via `sed -n '/^filter_file()/,/^}/p' hooks/simplify-ignore.sh`. Because the script path is relative, executing from repository root fails with exit code 127 unless invoked from `sources/addy/`.
- **Architectural constraint on personas**:
  - `doubt-driven-development` enforces an explicit restriction forbidding addition to persona frontmatter `skills:`, directly adhering to `references/orchestration-patterns.md` Anti-Pattern B ("personas do not invoke other personas").
- **Intent artifact omission in path validation**:
  - `interview-me/SKILL.md:138` defines optional intent persistence to `docs/intent/[topic].md`, but `sources/addy/scripts/validate-artifact-paths.js` restricts valid paths to spec and tasks directories.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~11,100 tokens (44,403 bytes across 3 assigned files).
- Tokens of output written: ~12,500 tokens across 3 inventory entries and 1 unit report.
