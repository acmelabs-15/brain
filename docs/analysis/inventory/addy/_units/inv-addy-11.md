---
unit: inv-addy-11
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-11

## Files assigned
- [x] `sources/addy/evals/fixtures/security-and-hardening/webhook.js` (271 bytes, 12 lines)
- [x] `sources/addy/evals/fixtures/security-and-hardening/webhook.test.js` (414 bytes, 14 lines)
- [x] `sources/addy/evals/fixtures/shipping-and-launch/authority-pressure.md` (288 bytes, 7 lines)
- [x] `sources/addy/evals/fixtures/shipping-and-launch/launch-status.md` (554 bytes, 12 lines)
- [x] `sources/addy/evals/fixtures/source-driven-development/framework-task.md` (535 bytes, 11 lines)
- [x] `sources/addy/evals/fixtures/spec-driven-development-decomposition/portal-brief.md` (1067 bytes, 23 lines)
- [x] `sources/addy/evals/fixtures/spec-driven-development/billing-brief.md` (689 bytes, 17 lines)
- [x] `sources/addy/evals/fixtures/test-driven-development-ecosystem/ledger.py` (457 bytes, 16 lines)
- [x] `sources/addy/evals/fixtures/test-driven-development-ecosystem/README.md` (131 bytes, 10 lines)
- [x] `sources/addy/evals/fixtures/test-driven-development-ecosystem/test_ledger.py` (533 bytes, 20 lines)
- [x] `sources/addy/evals/fixtures/test-driven-development/BUG.md` (394 bytes, 11 lines)
- [x] `sources/addy/evals/fixtures/test-driven-development/package.json` (189 bytes, 10 lines)

## Outputs produced
- `docs/analysis/inventory/addy/evals-fixtures-security-and-hardening-webhook-js.md` (2760 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-security-and-hardening-webhook-test-js.md` (2209 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-shipping-and-launch-authority-pressure-md.md` (2008 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-shipping-and-launch-launch-status-md.md` (2412 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-source-driven-development-framework-task-md.md` (2206 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-spec-driven-development-decomposition-portal-brief-md.md` (2482 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-spec-driven-development-billing-brief-md.md` (2269 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-ledger-py.md` (2112 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-readme-md.md` (1603 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-test-ledger-py.md` (2066 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-test-driven-development-bug-md.md` (2048 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-test-driven-development-package-json.md` (1657 bytes)

## Scripts executed
- `sources/addy/evals/fixtures/test-driven-development-ecosystem/test_ledger.py`, `python3 -m unittest`, exit 0
- `sources/addy/evals/fixtures/test-driven-development/package.json`, `npm test` (`node --test`), exit 0
- `sources/addy/evals/fixtures/security-and-hardening/webhook.test.js`, `bun test webhook.test.js` (exit 0) / `node --test webhook.test.js` (exit 1 due to ancestor ESM package.json)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Evaluation fixtures in `evals/fixtures/` correspond directly to evaluation cases declared in `evals/cases/*.json` and skills inventoried in earlier units:
  - `evals/fixtures/security-and-hardening/` (`webhook.js`, `webhook.test.js`) is used by `evals/cases/security-and-hardening.json:35` evaluating `skills/security-and-hardening/`.
  - `evals/fixtures/shipping-and-launch/` (`authority-pressure.md`, `launch-status.md`) is used by `evals/cases/shipping-and-launch.json:34,47` evaluating `skills/shipping-and-launch/`.
  - `evals/fixtures/source-driven-development/` (`framework-task.md`) is used by `evals/cases/source-driven-development.json:35` evaluating `skills/source-driven-development/`.
  - `evals/fixtures/spec-driven-development-decomposition/` (`portal-brief.md`) is explicitly named in `evals/cases/spec-driven-development.json:58` evaluating decomposition workflows in `skills/spec-driven-development/`.
  - `evals/fixtures/spec-driven-development/` (`billing-brief.md`) is used by `evals/cases/spec-driven-development.json:47` evaluating `skills/spec-driven-development/`.
  - `evals/fixtures/test-driven-development-ecosystem/` (`ledger.py`, `README.md`, `test_ledger.py`) is used by `evals/cases/test-driven-development.json:62` evaluating polyglot TDD workflows in `skills/test-driven-development/`.
  - `evals/fixtures/test-driven-development/` (`BUG.md`, `package.json`) is paired with `README.md`, `src/split.js`, and `test/split.test.js` (assigned to `inv-addy-12`) and used by `evals/cases/test-driven-development.json:32,35,46`.
- Module system boundary: `evals/fixtures/security-and-hardening/` contains CommonJS `.js` files without a local `package.json`. When executed directly with Node from a workspace root containing `"type": "module"`, Node attempts to parse them as ES modules and fails on `require()`. In contrast, `evals/fixtures/test-driven-development/` provides a local `package.json` without `"type": "module"`, allowing Node to properly treat `.js` files as CommonJS.

## Blocked or uncertain
none

## Time and size
- Source read: 5522 bytes (~1380 tokens) across 12 files
- Output written: 25832 bytes (~6458 tokens) across 12 cards
