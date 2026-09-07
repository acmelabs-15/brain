---
unit: cc-rjm-41
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-41

## Files assigned
- [x] .agents/architecture/ADR-087-held-out-validated-improvement.md
- [x] scripts/eval/README.md
- [x] scripts/eval/_optimizer_core.py
- [x] scripts/eval/optimize-artifact.py

## Outputs produced
- docs/analysis/concepts/rjm/decision-requirement-1.md (1136 bytes)
- docs/analysis/concepts/rjm/decision-requirement-5.md (1151 bytes)
- docs/analysis/concepts/rjm/open-requirements.md (1002 bytes)
- docs/analysis/concepts/rjm/decision-group.md (1514 bytes)
- docs/analysis/concepts/rjm/optimize-group.md (1418 bytes)
- docs/analysis/concepts/rjm/selection-group.md (1425 bytes)
- docs/analysis/concepts/rjm/test-group.md (1391 bytes)
- docs/analysis/concepts/rjm/accept-decision.md (1475 bytes)
- docs/analysis/concepts/rjm/tamper-evident.md (1476 bytes)
- docs/analysis/concepts/rjm/selection-event.md (1523 bytes)
- docs/analysis/concepts/rjm/consultation-budget.md (1535 bytes)
- docs/analysis/concepts/rjm/discordant-pairs.md (1476 bytes)
- docs/analysis/concepts/rjm/fail-to-pass.md (1284 bytes)
- docs/analysis/concepts/rjm/pass-to-fail.md (1314 bytes)
- docs/analysis/concepts/rjm/declared-corpora.md (1464 bytes)
- docs/analysis/concepts/rjm/strip-bypass.md (1460 bytes)
- docs/analysis/concepts/rjm/corpus-verified.md (1479 bytes)
- docs/analysis/concepts/rjm/null-control.md (1512 bytes)
- docs/analysis/concepts/rjm/preflight.md (1571 bytes)
- docs/analysis/concepts/rjm/results-envelope.md (1516 bytes)
- docs/analysis/concepts/rjm/corpus-pinned.md (1432 bytes)
- docs/analysis/concepts/rjm/digest-scrubber.md (1307 bytes)
- docs/analysis/concepts/rjm/authenticated-provenance.md (1511 bytes)
- docs/analysis/concepts/rjm/reusable-holdout.md (1518 bytes)
- docs/analysis/concepts/rjm/mcnemar-s-exact-test.md (1468 bytes)
- docs/analysis/concepts/rjm/bonferroni.md (1895 bytes)
- docs/analysis/concepts/rjm/degradation-clause.md (1429 bytes)
- docs/analysis/concepts/rjm/boolean-seam.md (1544 bytes)
- docs/analysis/concepts/rjm/open-requirement-1.md (1098 bytes)
- docs/analysis/concepts/rjm/open-requirement-12.md (1101 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts: `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/decision-requirement-1.md docs/analysis/concepts/rjm/decision-requirement-5.md docs/analysis/concepts/rjm/open-requirements.md docs/analysis/concepts/rjm/decision-group.md docs/analysis/concepts/rjm/optimize-group.md docs/analysis/concepts/rjm/selection-group.md docs/analysis/concepts/rjm/test-group.md docs/analysis/concepts/rjm/accept-decision.md docs/analysis/concepts/rjm/tamper-evident.md docs/analysis/concepts/rjm/selection-event.md docs/analysis/concepts/rjm/consultation-budget.md docs/analysis/concepts/rjm/discordant-pairs.md docs/analysis/concepts/rjm/fail-to-pass.md docs/analysis/concepts/rjm/pass-to-fail.md docs/analysis/concepts/rjm/declared-corpora.md docs/analysis/concepts/rjm/strip-bypass.md docs/analysis/concepts/rjm/corpus-verified.md docs/analysis/concepts/rjm/null-control.md docs/analysis/concepts/rjm/preflight.md docs/analysis/concepts/rjm/results-envelope.md docs/analysis/concepts/rjm/corpus-pinned.md docs/analysis/concepts/rjm/digest-scrubber.md docs/analysis/concepts/rjm/authenticated-provenance.md docs/analysis/concepts/rjm/reusable-holdout.md docs/analysis/concepts/rjm/mcnemar-s-exact-test.md docs/analysis/concepts/rjm/bonferroni.md docs/analysis/concepts/rjm/degradation-clause.md docs/analysis/concepts/rjm/boolean-seam.md docs/analysis/concepts/rjm/open-requirement-1.md docs/analysis/concepts/rjm/open-requirement-12.md`, exit code 0 (38 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to unit cc-rjm-41 were authored in full from templates/concept-card.md.
- The unit covers core statistical and evaluation architecture centered around ADR-087 (`Held-Out Validation for Iterated Improvement Claims`) and the evaluation harness CLI `optimize-artifact.py` / `_optimizer_core.py`.
- 5 concepts representing structural section headings and enumerated requirement labels were authored with `kind: name-only` and `package_phase: none` per METHOD.md R6 and D-023: `decision-requirement-1`, `decision-requirement-5`, `open-requirements`, `open-requirement-1`, and `open-requirement-12`.
- Operational lifecycle concepts were authored with `package_phase: cross-phase`:
  - Evaluation partitions: `decision-group`, `optimize-group`, `selection-group`, `test-group` (kind: artifact).
  - Validation gates and rules: `accept-decision`, `consultation-budget`, `pass-to-fail`, `preflight`, `degradation-clause` (kind: gate).
  - Statistical techniques: `selection-event`, `discordant-pairs`, `fail-to-pass`, `null-control`, `authenticated-provenance`, `mcnemar-s-exact-test`, `bonferroni` (kind: technique).
  - Integrity patterns and mechanisms: `tamper-evident`, `declared-corpora`, `strip-bypass`, `digest-scrubber`, `boolean-seam` (kind: pattern).
  - Protocol envelopes and properties: `corpus-verified`, `results-envelope`, `corpus-pinned` (kind: artifact).
  - External literature reference: `reusable-holdout` (kind: reference).
- All 30 cards pass byte-exact quotation checking with `bun scripts/synthesis/quote-check.ts` (38 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~82,000 tokens across ADR-087, README.md, _optimizer_core.py, optimize-artifact.py and citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this report.
