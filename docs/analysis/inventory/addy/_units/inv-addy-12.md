---
unit: inv-addy-12
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-12

## Files assigned
- [x] sources/addy/evals/fixtures/test-driven-development/README.md (787 bytes, 29 lines)
- [x] sources/addy/evals/fixtures/test-driven-development/src/split.js (181 bytes, 9 lines)
- [x] sources/addy/evals/fixtures/test-driven-development/test/split.test.js (398 bytes, 14 lines)
- [x] sources/addy/evals/fixtures/using-agent-skills/incident.md (321 bytes, 7 lines)
- [x] sources/addy/evals/README.md (8114 bytes, 87 lines)
- [x] sources/addy-external/api-and-interface-design.md (26413 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-readme-md.md (2814 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-src-split-js.md (2060 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-test-split-test-js.md (2170 bytes)
- docs/analysis/inventory/addy/evals-fixtures-using-agent-skills-incident-md.md (2314 bytes)
- docs/analysis/inventory/addy/evals-readme-md.md (3222 bytes)
- docs/analysis/inventory/addy/external-api-and-interface-design-md.md (3658 bytes)

## Scripts executed
- sources/addy/evals/fixtures/test-driven-development/test/split.test.js: `node --test sources/addy/evals/fixtures/test-driven-development/test/split.test.js`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `evals/fixtures/test-driven-development/` fixture files (`README.md`, `src/split.js`, `test/split.test.js`) are referenced by the test case in `evals/cases/test-driven-development.json` (inv-addy-11) and demonstrated as the example in `evals/README.md`. `src/split.js` contains an intentional remainder-dropping bug that violates the `README.md` invariants, which the `test-driven-development` eval requires the agent to reproduce with a test before fixing.
- `evals/fixtures/using-agent-skills/incident.md` is an incident description fixture that aligns with the eval prompt in `evals/cases/using-agent-skills.json:31`, but `using-agent-skills.json` does not explicitly name the fixture path in its `files` field.
- `external/api-and-interface-design.md` is an external doc snapshot corresponding to manifest path `external/api-and-interface-design.md`. It exhibits doc-drift relative to `skills/api-and-interface-design/SKILL.md` (summary wording and anatomy sections) and associates the skill with `/build`, whereas `commands/build.toml` does not invoke it.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,050 tokens (36,214 bytes)
Approximate tokens of output written: ~4,060 tokens (16,238 bytes)
