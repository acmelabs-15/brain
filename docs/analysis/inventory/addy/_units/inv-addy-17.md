---
unit: inv-addy-17
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-17

## Files assigned
- [x] `skills/security-and-hardening/SKILL.md` (24,192 bytes)
- [x] `skills/deprecation-and-migration/SKILL.md` (12,516 bytes)
- [x] `skills/observability-and-instrumentation/SKILL.md` (11,053 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md` (19,974 bytes)
- `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md` (11,868 bytes)
- `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md` (15,037 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-17.md` (5,251 bytes)

## Scripts executed
- None shipped in assigned skills.
- Repository validation and test suites executed:
  - `bun scripts/synthesis/coverage.ts` — Exit code: `1` (Output: `Unchecked manifest rows: 1223\nEmpty required inventory fields: 0` — 1223 rows remaining across repository)
  - `bun scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: `Glossary lint: clean`)
  - `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`)
  - `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s) — PASSED`)
  - `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: `9 commands checked — 0 error(s) — PASSED`)
  - `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: `7 files checked — 0 error(s) — PASSED`)
  - Unit test suite — `cd sources/addy && bun test ./scripts/*-test.js` — Exit code: `0` (Output: `35 pass, 0 fail across 5 test files`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Lifecycle Phase Allocations:**
  - `security-and-hardening` belongs canonically to `addy:Review` (`CLAUDE.md:25`, `README.md:369`, `skills/using-agent-skills/SKILL.md:185`, `sources/addy-external/security-and-hardening.md:5`). Note the documented philosophical tension at `SKILL.md:10` ("Security isn't a phase — it's a constraint on every line of code...").
  - `deprecation-and-migration` belongs canonically to `addy:Ship` (`CLAUDE.md:26`, `README.md:373`, `skills/using-agent-skills/SKILL.md:189`, `sources/addy-external/deprecation-and-migration.md:5`).
  - `observability-and-instrumentation` belongs canonically to `addy:Ship` (`CLAUDE.md:26`, `README.md:375`, `skills/using-agent-skills/SKILL.md:191`, `sources/addy-external/observability-and-instrumentation.md:5`).
- **Command Discrepancies and Orphans:**
  - `security-and-hardening` is directly embedded in composite command `/review` (`commands/review.toml:11`, `.claude/commands/review.md:12`) as axis 4, but lacks a dedicated standalone slash command (e.g. `/security`).
  - `deprecation-and-migration` is not invoked by any command or slash tool in the repository. Although `sources/addy-external/deprecation-and-migration.md:12` claims `Command: /ship`, `/ship` (`commands/ship.toml:1-72`) invokes only `shipping-and-launch` and multi-agent reviewer personas.
  - `observability-and-instrumentation` is likewise omitted from `/ship` and all other commands, despite `sources/addy-external/observability-and-instrumentation.md:12` asserting `Command: /ship`.
  - `sources/addy/AGENTS.md:44-45` omits all three skills from its `Lifecycle Mapping (Implicit Commands)`, listing only `code-review-and-quality` for REVIEW and `shipping-and-launch` for SHIP.
- **Cross-Skill Interconnections:**
  - `security-and-hardening` and `observability-and-instrumentation` form a bidirectional policy link on telemetry PII leaks (`security-and-hardening/SKILL.md:369` cites observability; `observability-and-instrumentation/SKILL.md:91` cites security as a hard rule).
  - `deprecation-and-migration` cites `incremental-implementation` (`SKILL.md:183`) for vertical slicing additive migration steps.
  - Both `security-and-hardening` and `observability-and-instrumentation` have standalone checklist companions in `sources/addy/references/`: `security-checklist.md` (11,881 bytes) and `observability-checklist.md` (4,931 bytes), verified on disk.
- **SSRF TOCTOU Gap:**
  - `security-and-hardening/SKILL.md:220` documents an inherent TOCTOU risk with DNS re-resolution in HTTP fetch clients, requiring socket IP-pinning or reverse proxy agents for production hardening.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~11,940 tokens (47,761 bytes across 3 source files).
- Tokens of output written: ~13,030 tokens across 3 inventory entries (46,879 bytes) and 1 unit report (5,251 bytes).
