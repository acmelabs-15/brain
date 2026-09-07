---
unit: cc-rjm-159
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-159

## Files assigned
- [x] sources/rjm/.claude/skills/orphan-ref-validator/SKILL.md
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/scan.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/scripts/walking.py
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/variance-control.py
- [x] sources/rjm/scripts/metrics_writer.py
- [x] sources/rjm/scripts/validation/check_doc_interpreter_portability.py
- [x] sources/rjm/scripts/validation/check_rule_activation_coverage.py
- [x] sources/rjm/scripts/validation/check_ruleset_params_drift.py
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_vendor_portability.py
- [x] sources/rjm/scripts/validation/portability_common.py

## Outputs produced
- docs/analysis/concepts/rjm/rule-path.md (1007 bytes)
- docs/analysis/concepts/rjm/instruction-path.md (1042 bytes)
- docs/analysis/concepts/rjm/line-scope-ignore-directives.md (1142 bytes)
- docs/analysis/concepts/rjm/line-ignore-directive.md (1111 bytes)
- docs/analysis/concepts/rjm/skill-name.md (1058 bytes)
- docs/analysis/concepts/rjm/sibling-names.md (1074 bytes)
- docs/analysis/concepts/rjm/ac-2.md (1189 bytes)
- docs/analysis/concepts/rjm/vendored-install.md (1175 bytes)
- docs/analysis/concepts/rjm/script-path.md (1074 bytes)
- docs/analysis/concepts/rjm/max-findings.md (816 bytes)
- docs/analysis/concepts/rjm/baselineerror.md (835 bytes)
- docs/analysis/concepts/rjm/load-baseline.md (1979 bytes)
- docs/analysis/concepts/rjm/scan-truncated.md (1037 bytes)
- docs/analysis/concepts/rjm/reporooterror.md (835 bytes)
- docs/analysis/concepts/rjm/build-gate-contract.md (1061 bytes)
- docs/analysis/concepts/rjm/exclude-dir-names.md (1041 bytes)
- docs/analysis/concepts/rjm/scan-file-suffixes.md (923 bytes)
- docs/analysis/concepts/rjm/secret-denylist-patterns.md (922 bytes)
- docs/analysis/concepts/rjm/max-file-bytes.md (852 bytes)
- docs/analysis/concepts/rjm/walkproblem.md (1000 bytes)
- docs/analysis/concepts/rjm/is-secret-path.md (1036 bytes)
- docs/analysis/concepts/rjm/is-safe-subdirectory.md (1090 bytes)
- docs/analysis/concepts/rjm/cwe-59.md (1316 bytes)
- docs/analysis/concepts/rjm/collect-walk-targets.md (1123 bytes)
- docs/analysis/concepts/rjm/walk-targets.md (1055 bytes)
- docs/analysis/concepts/rjm/rglob.md (1055 bytes)
- docs/analysis/concepts/rjm/verdict-pass.md (1193 bytes)
- docs/analysis/concepts/rjm/verdict-warn.md (1275 bytes)
- docs/analysis/concepts/rjm/verdict-critical-fail.md (1311 bytes)
- docs/analysis/concepts/rjm/opt-in-adr-targets.md (891 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-159.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts <30 cards>` (exit code 0, 30 PASS, 0 FAIL across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-159 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 cards stamped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-159 covers 30 concepts and their cited occurrences from package rjm.
- All occurrences from facts/cc-rjm-159.txt are represented in the cards' Where used tables.
- Defect annotations from inventory cards were propagated to Implementation status.
- All 30 cards pass byte-exact verification with quote-check.ts (30 PASS, 0 FAIL) and are stamped with memo.ts stamp-unit.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across assigned files.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
