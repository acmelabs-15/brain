---
unit: inv-addy-19
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-19

## Files assigned
- [x] `sources/addy/skills/source-driven-development/SKILL.md` (9,949 bytes)
- [x] `sources/addy/skills/performance-optimization/SKILL.md` (21,717 bytes)
- [x] `sources/addy/skills/browser-testing-with-devtools/SKILL.md` (14,539 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-source-driven-development-skill-md.md` (11,876 bytes)
- `docs/analysis/inventory/addy/skills-performance-optimization-skill-md.md` (25,309 bytes)
- `docs/analysis/inventory/addy/skills-browser-testing-with-devtools-skill-md.md` (18,086 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-19.md` (6,586 bytes)

## Scripts executed
- `sources/addy/scripts/validate-skills.js` — `bun sources/addy/scripts/validate-skills.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`)
- `sources/addy/scripts/validate-reference-links.js` — `bun sources/addy/scripts/validate-reference-links.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-artifact-paths.js` — `bun sources/addy/scripts/validate-artifact-paths.js` — Exit code: `0` (Output: `7 files checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-commands.js` — `bun sources/addy/scripts/validate-commands.js` — Exit code: `0` (Output: `9 commands checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: `All plugin manifests use version 0.6.8.`)
- `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (Output: `136 checks passed — 0 error(s), 0 warning(s) — PASSED`)
- `sources/addy/scripts/run-evals.js` (dry-run behavioral):
  - `cd sources/addy && bun scripts/run-evals.js --behavioral source-driven-development --dry-run` — Exit code: `0`
  - `cd sources/addy && bun scripts/run-evals.js --behavioral performance-optimization --dry-run` — Exit code: `0`
  - `cd sources/addy && bun scripts/run-evals.js --behavioral browser-testing-with-devtools --dry-run` — Exit code: `0`
- `sources/addy/evals/fixtures/performance-optimization/benchmark.js`:
  - `bun sources/addy/evals/fixtures/performance-optimization/benchmark.js` — Exit code: `0` (Output: `{"products":1000,"bytes":41678,"elapsedMs":...}`)
  - `node sources/addy/evals/fixtures/performance-optimization/benchmark.js` — Exit code: `1` (`ReferenceError: require is not defined in ES module scope` due to parent ESM package)
- `sources/addy/evals/fixtures/browser-testing-with-devtools/server.js`:
  - `bun sources/addy/evals/fixtures/browser-testing-with-devtools/server.js` — Exit code: `0` (Output: `listening on http://127.0.0.1:4173`; probed GET `/` -> HTTP 200 OK, POST `/api/signup` -> HTTP 500 Internal Server Error)
  - `node sources/addy/evals/fixtures/browser-testing-with-devtools/server.js` — Exit code: `1` (`ReferenceError: require is not defined in ES module scope` due to parent ESM package)
- `sources/addy/hooks/sdd-cache-*`:
  - `sdd-cache-post.sh` with simulated tool response payload — Exit code: `0` (cached response in `.claude/sdd-cache/`)
  - `sdd-cache-pre.sh` with simulated tool input payload — Exit code: `2` (served from cache on HTTP 304 revalidation)
- Synthesis checks:
  - `bun scripts/synthesis/coverage.ts` — Exit code: `1` (Unchecked manifest rows: 1226; Empty required inventory fields: 0)
  - `bun scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: `Glossary lint: clean`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Lifecycle Phase Allocations:**
  - `source-driven-development` belongs to `addy:Build` (`CLAUDE.md:23`, `README.md:252, 360`, `skills/using-agent-skills/SKILL.md:175`, `sources/addy-external/source-driven-development.md:5`). Omitted from `AGENTS.md:26, 42`.
  - `performance-optimization` belongs to `addy:Review` (`CLAUDE.md:25`, `README.md:271, 370`, `skills/using-agent-skills/SKILL.md:186`, `commands/review.toml:12`, `sources/addy-external/performance-optimization.md:5`).
  - `browser-testing-with-devtools` belongs to `addy:Verify` (`CLAUDE.md:24`, `README.md:261, 365`, `skills/using-agent-skills/SKILL.md:181`, `sources/addy-external/browser-testing-with-devtools.md:5`). Omitted from `AGENTS.md:43`.
- **Architectural & Security Patterns:**
  - *Prompt Injection Boundaries:* Both `source-driven-development` (lines 97-115) and `browser-testing-with-devtools` (lines 72-108) explicitly address untrusted external data boundaries. SDD treats fetched documentation as data rather than instructions (OWASP LLM01) and forbids hardcoding outbound endpoints from doc examples; DevTools treats live DOM, console, and network streams as `UNTRUSTED` data and enforces read-only JS inspection with isolated profiles.
  - *"Neutral is a Revert":* `performance-optimization:387` establishes an empirical discipline: code changes that fail to exceed baseline performance beyond statistical variance must be discarded rather than merged as benign, preventing codebase complexity accretion.
  - *Historical Optimization Ledger:* `performance-optimization:391-402` prescribes `PERF.md` / PR descriptions to preserve institutional memory of discarded experiments.
- **Identified Defects Across Scope:**
  - `hooks/SDD-CACHE.md:51` prescribes `/source-driven-development`, but no slash command exists in `.claude/commands/` or `commands/`.
  - `AGENTS.md` exhibits documentation drift by omitting both `source-driven-development` (Build) and `browser-testing-with-devtools` (Verify) from its lifecycle mapping.
  - `PERF.md` and `bundlesize.config.json` are referenced in `performance-optimization` but do not exist in the repository.
  - CommonJS test fixtures (`benchmark.js`, `products.js`, `server.js`) fail under native Node.js when run from an ESM root workspace (`package.json` with `"type": "module"`).

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~11,550 tokens (46,205 bytes across 3 files).
- Tokens of output written: ~14,500 tokens across 3 inventory entries and 1 unit report.
