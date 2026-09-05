---
unit: inv-addy-32
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-32

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/test-driven-development.md (26483 bytes, 20 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/using-agent-skills.md (21955 bytes, 20 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/hooks/hooks.json (364 bytes, 15 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/external-test-driven-development-md.md (8433 bytes)
- docs/analysis/inventory/addy/external-using-agent-skills-md.md (5323 bytes)
- docs/analysis/inventory/addy/hooks-hooks-json.md (4060 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-32.md (5488 bytes)

## Scripts executed
- sources/addy/hooks/hooks.json: `CLAUDE_PLUGIN_ROOT="sources/addy" bash -c 'SCRIPT="${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh"; [ -f "$SCRIPT" ] || SCRIPT="${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh"; [ -f "$SCRIPT" ]&& bash "$SCRIPT" || true'` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/test-driven-development.md` is the public web documentation snapshot for Addy's `test-driven-development` skill (`skills/test-driven-development/SKILL.md` in repository, covered in `inv-addy-19`).
- The catalog page places `test-driven-development` in the `addy:Build` phase alongside commands `/test` and `/build`, and related build skills `incremental-implementation`, `context-engineering`, and `source-driven-development`.
- Four documentation drift defects (`doc-drift`) are documented for `external/test-driven-development.md`:
  1. The page claims a standardized 6-section schema ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification") across all skills, but repository file `skills/test-driven-development/SKILL.md` lacks a "Process" section (using "Discover the Stack First", "The TDD Cycle", "The Prove-It Pattern (Bug Fixes)", "The Testing Pyramid", "Testing Guidelines", and "Browser Testing with Chrome DevTools MCP"), titles rationalizations "Common Rationalizations (And Why They're Wrong)", and appends a "See Also" section not listed on the web anatomy.
  2. Description expansion: web page description injects testing methodology ("Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought.") that does not exist in `skills/test-driven-development/SKILL.md:3`.
  3. Trigger collapse: page condenses triggers to "Implementing logic, fixing bugs, or changing behavior.", omitting negative triggers ("When NOT to use: Pure configuration changes, documentation updates, or static content changes...").
  4. Command badge drift: page header displays command badge `/test` while sidebar classifies under `/build`.
- Identifies orphan status (`orphan`): `external/test-driven-development.md` is an external documentation page snapshot not referenced or linked by any in-scope repository file in `sources/addy/`.
- `external/using-agent-skills.md` is the public web documentation snapshot for Addy's central routing meta-skill `using-agent-skills` (`skills/using-agent-skills/SKILL.md` in repository, covered in `inv-addy-20`).
- The catalog page places `using-agent-skills` in the `addy:Meta` phase.
- Two documentation drift defects (`doc-drift`) are documented for `external/using-agent-skills.md`:
  1. The page claims the standardized 6-section anatomy, but `skills/using-agent-skills/SKILL.md` diverges completely, containing only "Overview", "Skill Discovery", "Core Operating Behaviors", and "Skill Index", with none of the other 5 sections from the web anatomy.
  2. Description expansion: adds "load it first and it routes each task to the right workflow." to the skill description.
- Identifies orphan status (`orphan`): `external/using-agent-skills.md` is an external documentation page snapshot not referenced or linked by any in-scope repository file in `sources/addy/`.
- `hooks/hooks.json` is the Claude Code plugin hook configuration that registers the `SessionStart` lifecycle event hook for the `agent-skills` plugin.
- Invocations and cross-file dependencies: executes inline bash command resolving and running `hooks/session-start.sh` (covered in `inv-addy-42`), which injects the `using-agent-skills` meta-skill into agent context at session startup.
- Identifies two defects in `hooks/hooks.json`:
  1. `unfailable-gate`: Appends `|| true` to the inline command, suppressing all errors and guaranteeing exit code 0 even if bash fails or the script is missing or corrupted.
  2. `missing-path`: References fallback path `${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh` where `.claude/hooks/` does not exist in the repository clone.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,200 tokens (48,802 bytes across 3 files)
- Approximate tokens of output written: ~5,210 tokens (cards: 17,816 bytes across 3 inventory cards; unit report: ~5,488 bytes)
