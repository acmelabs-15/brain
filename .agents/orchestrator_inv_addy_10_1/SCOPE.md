# Scope: inv-addy-10

## Overview
Unit `inv-addy-10` in package `addy` (Phase 1: Inventory Extraction).
Contains 4 executable files (scripts/tests), total 42,379 bytes.

## Assigned Source Files
1. `sources/addy/scripts/run-evals.js` (24,129 bytes, script)
2. `sources/addy/scripts/validate-commands-test.js` (5,471 bytes, test script)
3. `sources/addy/scripts/run-evals-test.js` (10,378 bytes, test script)
4. `sources/addy/scripts/validate-skills.js` (2,401 bytes, script)

## Target Inventory Deliverables
1. `docs/analysis/inventory/addy/scripts-run-evals-js.md`
2. `docs/analysis/inventory/addy/scripts-validate-commands-test-js.md`
3. `docs/analysis/inventory/addy/scripts-run-evals-test-js.md`
4. `docs/analysis/inventory/addy/scripts-validate-skills-js.md`
5. `docs/analysis/inventory/addy/_units/inv-addy-10.md`
6. Updates to `docs/analysis/manifest/addy.md` (check off 4 rows)
7. Updates to `docs/plan/STATE.md` (mark unit inv-addy-10 complete, update rows inventoried from 111 to 115)

## Interface & Quality Contracts
- Follow METHOD.md §3 (R1-R6), §4 (Checklist), §8 (Templates), §10 (Anti-drift checks).
- R2 Script Execution: execute every script with documented invocation / bun test, record stdout, actual exit code, compare against documented exit codes.
- Template conformance: all required fields must be non-empty (`none` if nothing).
- Verbatim citations with `path:line`.
