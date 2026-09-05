---
unit: inv-addy-11
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-11

## Files assigned
- [x] sources/addy/evals/fixtures/security-and-hardening/webhook.js
- [x] sources/addy/evals/fixtures/security-and-hardening/webhook.test.js
- [x] sources/addy/evals/fixtures/shipping-and-launch/authority-pressure.md
- [x] sources/addy/evals/fixtures/shipping-and-launch/launch-status.md
- [x] sources/addy/evals/fixtures/source-driven-development/framework-task.md
- [x] sources/addy/evals/fixtures/spec-driven-development-decomposition/portal-brief.md
- [x] sources/addy/evals/fixtures/spec-driven-development/billing-brief.md
- [x] sources/addy/evals/fixtures/test-driven-development-ecosystem/ledger.py
- [x] sources/addy/evals/fixtures/test-driven-development-ecosystem/README.md
- [x] sources/addy/evals/fixtures/test-driven-development-ecosystem/test_ledger.py
- [x] sources/addy/evals/fixtures/test-driven-development/BUG.md
- [x] sources/addy/evals/fixtures/test-driven-development/package.json

## Outputs produced
- docs/analysis/inventory/addy/evals-fixtures-security-and-hardening-webhook-js.md (2653 bytes)
- docs/analysis/inventory/addy/evals-fixtures-security-and-hardening-webhook-test-js.md (2905 bytes)
- docs/analysis/inventory/addy/evals-fixtures-shipping-and-launch-authority-pressure-md.md (2303 bytes)
- docs/analysis/inventory/addy/evals-fixtures-shipping-and-launch-launch-status-md.md (2583 bytes)
- docs/analysis/inventory/addy/evals-fixtures-source-driven-development-framework-task-md.md (2259 bytes)
- docs/analysis/inventory/addy/evals-fixtures-spec-driven-development-decomposition-portal-brief-md.md (2556 bytes)
- docs/analysis/inventory/addy/evals-fixtures-spec-driven-development-billing-brief-md.md (2237 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-ledger-py.md (2178 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-readme-md.md (2200 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-test-ledger-py.md (2932 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-bug-md.md (1927 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-package-json.md (2378 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-11.md

## Scripts executed
- evals/fixtures/security-and-hardening/webhook.test.js, `bun test evals/fixtures/security-and-hardening/webhook.test.js`, exit code 0
- evals/fixtures/test-driven-development-ecosystem/README.md, `python3 -m unittest`, exit code 0
- evals/fixtures/test-driven-development-ecosystem/test_ledger.py, `python3 -m unittest test_ledger.py`, exit code 0
- evals/fixtures/test-driven-development/package.json, `npm test`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
All 12 files assigned to unit inv-addy-11 are evaluation fixtures under `sources/addy/evals/fixtures/`. They correspond to eval cases in `sources/addy/evals/cases/` (specifically `security-and-hardening.json`, `shipping-and-launch.json`, `source-driven-development.json`, `spec-driven-development.json`, and `test-driven-development.json`). These test fixtures are loaded by `scripts/run-evals.js` into temporary workspaces during behavioral evaluations of the respective agent skills.

## Blocked or uncertain
none

## Time and size
Source read: 12 files, 5,522 bytes (~1,200 tokens).
Output written: 12 cards + 1 report, ~31,000 bytes (~7,000 tokens).
