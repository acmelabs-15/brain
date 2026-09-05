---
unit: inv-rjm-37
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-37

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-087-held-out-validated-improvement.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-087-held-out-validated-improvement-md.md` (16045 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-37 covers ADR-087 (`.agents/architecture/ADR-087-held-out-validated-improvement.md`, 57,524 bytes, 952 lines).
- Architectural context and synthesis importance:
  - Establishes the formal held-out validation protocol for unattended, iterated improvement loops on authored artifacts (rules, agents, hooks, prompts).
  - Identifies that iterating an artifact against a visible evaluation set until scores improve constitutes test-set fitting (overfitting); without held-out validation, effective loops optimize specifically for visible tasks while generalizing worse to unseen ones.
  - Implements a tamper-evident partition into optimize (`opt`), selection (`sel`), and optional test (`test`) groups before any edits begin, fingerprinted over seed, task IDs, and ratios.
  - Formulates a sequential consultation budget keyed on the SHA-256 digest of sorted held-out task IDs under `$EVAL_LEDGER_DIR` (or user state directory) rather than caller-supplied inputs, preventing budget resets via file copying or parameter re-drawing.
  - Restates and enforces ADR-057's no-regression clause (`pass-to-fail` flips automatically refuse the change, with no override) on the held-out selection group.
  - Incorporates corpus verification (`fixture_set_sha`), refusing comparisons when declared corpora differ, closing the omission exploit that produced false controls.
  - Employs Bonferroni multi-comparison correction (`--max-p` divided by `--max-consultations`) to control the family error rate under arbitrary dependence between sequential queries on the same held-out group.
  - Candidly records 17 review rounds, multiple falsifications, and live validation results: live rule-path validation revealed an LLM judge noise of 0.49 points moving 5 of 24 tasks across the pass threshold, exposing that single-sample strict improvements cannot distinguish true enhancements from judge noise without repeated sampling or null controls.
  - Delineates the boundary between cooperative optimization discipline (tamper-evident budgeting for cooperating optimizers) and true security boundaries (which require an external trusted controller, since optimizers with filesystem access can read task definitions and result mappings directly).
- Relationship to other units and files:
  - Invokes / references ADR-010 (unit inv-rjm-6), ADR-022 (unit inv-rjm-11), ADR-057 (unit inv-rjm-28), ADR-058 (unit inv-rjm-29), ADR-088 (unit inv-rjm-38).
  - Invoked by / implemented in `scripts/eval/optimize-artifact.py`, `scripts/eval/_optimizer_core.py`, `scripts/eval/_optimizer_adapters.py`, `scripts/eval/README.md`, and `.claude/skills/context-optimizer/references/rule-audit-procedure.md`.
  - Open Requirements 1, 6, 7, and 12 remain active blockers preventing ADR-087 from advancing from `proposed` to `accepted`.
- Defects identified:
  - `missing-path` at lines 39-40, 64, 70: scripts and modules (`eval-prompt-change.py`, `eval-rule-activation.py`, `eval-agent-vs-baseline.py`, `_report_aggregator.py`, `optimize-artifact.py`) cited as bare filenames without their actual `scripts/eval/` directory path.
  - `missing-path` at line 818: `.claude/rules/working-with-legacy-code.md` (moved by ADR-088 to `.claude/skills/software-engineering-library/references/working-with-legacy-code.md`, documented in Amendment at line 948).
  - `doc-drift` at line 9: frontmatter states `implemented: false` while Implementation section (lines 770-780) records the core mechanism shipped in PR #3430.
  - `internal-contradiction` at line 39: context table lists prompt evaluation under ADR-057 evaluators, while lines 510-512 admits no prompt adapter exists yet and prompt work routes through rule adapters or not at all.
- Duplication ledger:
  - None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,400 tokens (57,524 bytes, 952 lines across 1 file); approximate tokens of output written: ~4,500 tokens (16,045 bytes for inventory card, ~4,900 bytes for unit report).
