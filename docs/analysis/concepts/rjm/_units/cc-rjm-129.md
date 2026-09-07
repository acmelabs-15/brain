---
unit: cc-rjm-129
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-129

## Files assigned
- [x] sources/rjm/.claude/skills/context-optimizer/references/rule-audit-evidence.md
- [x] sources/rjm/.claude/skills/context-optimizer/references/rule-audit-instrument.md
- [x] sources/rjm/.claude/skills/context-optimizer/references/rule-audit-parser-forensics.md
- [x] sources/rjm/.claude/skills/context-optimizer/references/rule-audit-procedure.md
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/_copilot_cli.py
- [x] sources/rjm/scripts/eval/_copilot_cli_constants.py
- [x] sources/rjm/scripts/eval/_optimizer_adapters.py
- [x] sources/rjm/scripts/eval/eval-rule-activation.py
- [x] sources/rjm/scripts/eval/optimize-artifact.py
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-evidence-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-instrument-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-parser-forensics-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-procedure-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-cli-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--copilot-cli-constants-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval--optimizer-adapters-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-optimize-artifact-py.md

## Outputs produced
- docs/analysis/concepts/rjm/var-opus-2.md (1431 bytes)
- docs/analysis/concepts/rjm/var-opus-3.md (1430 bytes)
- docs/analysis/concepts/rjm/delta-full.md (1379 bytes)
- docs/analysis/concepts/rjm/recovered-prefixes.md (1835 bytes)
- docs/analysis/concepts/rjm/truncation-ceiling.md (1794 bytes)
- docs/analysis/concepts/rjm/recovered-judge-payloads-json.md (1464 bytes)
- docs/analysis/concepts/rjm/duplicate-name-guard.md (2664 bytes)
- docs/analysis/concepts/rjm/judge-salvaged.md (2144 bytes)
- docs/analysis/concepts/rjm/pooled-description-delta.md (1820 bytes)
- docs/analysis/concepts/rjm/sign-test.md (2584 bytes)
- docs/analysis/concepts/rjm/post-hoc-recovery.md (1780 bytes)
- docs/analysis/concepts/rjm/adr-087.md (2021 bytes)
- docs/analysis/concepts/rjm/noise-floor.md (2228 bytes)
- docs/analysis/concepts/rjm/read-direction-not-magnitude.md (1505 bytes)
- docs/analysis/concepts/rjm/two-tailed.md (1811 bytes)
- docs/analysis/concepts/rjm/registered-decision-rule.md (2163 bytes)
- docs/analysis/concepts/rjm/fair-coin-null.md (1777 bytes)
- docs/analysis/concepts/rjm/activation-score.md (2783 bytes)
- docs/analysis/concepts/rjm/citation-score.md (2669 bytes)
- docs/analysis/concepts/rjm/behavior-score.md (2704 bytes)
- docs/analysis/concepts/rjm/coordinate-wise-median.md (1927 bytes)
- docs/analysis/concepts/rjm/cell-score.md (2147 bytes)
- docs/analysis/concepts/rjm/eval-provider-copilot-cli.md (1402 bytes)
- docs/analysis/concepts/rjm/copilotcliprovider.md (1626 bytes)
- docs/analysis/concepts/rjm/fail-over-activation.md (2640 bytes)
- docs/analysis/concepts/rjm/min-restraint-score.md (2269 bytes)
- docs/analysis/concepts/rjm/fail-negative-incomplete.md (2524 bytes)
- docs/analysis/concepts/rjm/fail-positive-incomplete.md (2457 bytes)
- docs/analysis/concepts/rjm/four-backtick-fence.md (1803 bytes)
- docs/analysis/concepts/rjm/eval-copilot-allow-unverified-model.md (1709 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-129.md (7735 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/var-opus-2.md docs/analysis/concepts/rjm/var-opus-3.md docs/analysis/concepts/rjm/delta-full.md docs/analysis/concepts/rjm/recovered-prefixes.md docs/analysis/concepts/rjm/truncation-ceiling.md docs/analysis/concepts/rjm/recovered-judge-payloads-json.md docs/analysis/concepts/rjm/duplicate-name-guard.md docs/analysis/concepts/rjm/judge-salvaged.md docs/analysis/concepts/rjm/pooled-description-delta.md docs/analysis/concepts/rjm/sign-test.md docs/analysis/concepts/rjm/post-hoc-recovery.md docs/analysis/concepts/rjm/adr-087.md docs/analysis/concepts/rjm/noise-floor.md docs/analysis/concepts/rjm/read-direction-not-magnitude.md docs/analysis/concepts/rjm/two-tailed.md docs/analysis/concepts/rjm/registered-decision-rule.md docs/analysis/concepts/rjm/fair-coin-null.md docs/analysis/concepts/rjm/activation-score.md docs/analysis/concepts/rjm/citation-score.md docs/analysis/concepts/rjm/behavior-score.md docs/analysis/concepts/rjm/coordinate-wise-median.md docs/analysis/concepts/rjm/cell-score.md docs/analysis/concepts/rjm/eval-provider-copilot-cli.md docs/analysis/concepts/rjm/copilotcliprovider.md docs/analysis/concepts/rjm/fail-over-activation.md docs/analysis/concepts/rjm/min-restraint-score.md docs/analysis/concepts/rjm/fail-negative-incomplete.md docs/analysis/concepts/rjm/fail-positive-incomplete.md docs/analysis/concepts/rjm/four-backtick-fence.md docs/analysis/concepts/rjm/eval-copilot-allow-unverified-model.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-129 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped, 65 inputs)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-129 authors 30 concept cards spanning the prompt evaluation, forensic parser audit, and empirical decision gating infrastructure of rjm:
  1. Statistical hypothesis testing and decision rules: `sign-test`, `registered-decision-rule`, `fair-coin-null`, `two-tailed`, `noise-floor`, and `pooled-description-delta`.
  2. Multi-dimensional evaluation rubric metrics and reduction: `activation-score`, `citation-score`, `behavior-score`, `cell-score`, and the retired reduction defect `coordinate-wise-median`.
  3. Defensive parsing patterns and evaluation forensic markers: `duplicate-name-guard`, `judge-salvaged`, `truncation-ceiling`, `recovered-prefixes`, `post-hoc-recovery`, and `four-backtick-fence`.
  4. Failure modes, restraint floors, and safety gates: `fail-over-activation`, `min-restraint-score`, `fail-negative-incomplete`, and `fail-positive-incomplete`.
  5. Identifiers, filenames, section headings, configuration flags, and transport classes authored as `kind: name-only` per D-023: `var-opus-2`, `var-opus-3`, `delta-full`, `recovered-judge-payloads-json`, `adr-087`, `read-direction-not-magnitude`, `eval-provider-copilot-cli`, `copilotcliprovider`, and `eval-copilot-allow-unverified-model`.
- All 65 occurrences listed in `facts/cc-rjm-129.txt` were mapped to `Where used` rows across the 30 cards.
- Citing inventory defect entries were systematically propagated into `Implementation status` (clean or defects: `doc-drift`, `missing-path`, `script-bug`, `other`), strictly preserving separation between design intent and implementation defects per R5.
- All 30 concept cards pass `quote-check.ts` with zero failures (30 PASS, 0 FAIL, 0 MISSING).
- All 30 concept cards were stamped using `memo.ts stamp-unit`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~40,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
