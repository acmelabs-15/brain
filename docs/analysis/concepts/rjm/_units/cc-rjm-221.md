---
unit: cc-rjm-221
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-221

## Files assigned
- [x] sources/rjm/.claude/skills/taste-lints/SKILL.md
- [x] sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/advanced-analysis.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/risk-rating-guide.md
- [x] sources/rjm/.codeql/scripts/get_codeql_diagnostics.py
- [x] sources/rjm/scripts/ci/taste_count_ratchet.py
- [x] sources/rjm/scripts/skill_registry.py
- [x] sources/rjm/scripts/validation/hook_contracts.py
- [x] sources/rjm/scripts/validation/instruction_budget.py
- [x] sources/rjm/scripts/validation/passive_context_budget.py
- [x] sources/rjm/scripts/validation/sha_pinning.py
- [x] sources/rjm/scripts/validation/traceability.py
- [x] docs/analysis/inventory/rjm/claude-skills-taste-lints-scripts-taste-lints-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-taste-lints-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-advanced-analysis-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-risk-rating-guide-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md
- [x] docs/analysis/inventory/rjm/codeql-scripts-get-codeql-diagnostics-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-taste-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-skill-registry-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-hook-contracts-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-instruction-budget-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-passive-context-budget-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-sha-pinning-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-traceability-py.md

## Outputs produced
- docs/analysis/concepts/rjm/size-exception-true.md (997 bytes)
- docs/analysis/concepts/rjm/run-lint.md (908 bytes)
- docs/analysis/concepts/rjm/format-text.md (943 bytes)
- docs/analysis/concepts/rjm/format-json.md (1994 bytes)
- docs/analysis/concepts/rjm/harness-engineering.md (1179 bytes)
- docs/analysis/concepts/rjm/structured-logging.md (1327 bytes)
- docs/analysis/concepts/rjm/file-size-limits.md (1494 bytes)
- docs/analysis/concepts/rjm/reliability-requirements.md (1297 bytes)
- docs/analysis/concepts/rjm/agent-context.md (1116 bytes)
- docs/analysis/concepts/rjm/taste-lints-py.md (1090 bytes)
- docs/analysis/concepts/rjm/taste-invariants.md (1454 bytes)
- docs/analysis/concepts/rjm/taste-lint-report.md (1194 bytes)
- docs/analysis/concepts/rjm/upper-case.md (1172 bytes)
- docs/analysis/concepts/rjm/invoke.md (1120 bytes)
- docs/analysis/concepts/rjm/hook-scripts.md (1138 bytes)
- docs/analysis/concepts/rjm/function-complexity.md (1217 bytes)
- docs/analysis/concepts/rjm/skill-prompt-size.md (1151 bytes)
- docs/analysis/concepts/rjm/attack-trees.md (1609 bytes)
- docs/analysis/concepts/rjm/kill-chains.md (1368 bytes)
- docs/analysis/concepts/rjm/recon.md (1230 bytes)
- docs/analysis/concepts/rjm/weaponize.md (1229 bytes)
- docs/analysis/concepts/rjm/deliver.md (1184 bytes)
- docs/analysis/concepts/rjm/exploit.md (1171 bytes)
- docs/analysis/concepts/rjm/install.md (1205 bytes)
- docs/analysis/concepts/rjm/command.md (1211 bytes)
- docs/analysis/concepts/rjm/apt-style-threats.md (1241 bytes)
- docs/analysis/concepts/rjm/risk-formula.md (1208 bytes)
- docs/analysis/concepts/rjm/likelihood-scale.md (1173 bytes)
- docs/analysis/concepts/rjm/impact-scale.md (1199 bytes)
- docs/analysis/concepts/rjm/risk-matrix.md (1176 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-221.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/size-exception-true.md docs/analysis/concepts/rjm/run-lint.md docs/analysis/concepts/rjm/format-text.md docs/analysis/concepts/rjm/format-json.md docs/analysis/concepts/rjm/harness-engineering.md docs/analysis/concepts/rjm/structured-logging.md docs/analysis/concepts/rjm/file-size-limits.md docs/analysis/concepts/rjm/reliability-requirements.md docs/analysis/concepts/rjm/agent-context.md docs/analysis/concepts/rjm/taste-lints-py.md docs/analysis/concepts/rjm/taste-invariants.md docs/analysis/concepts/rjm/taste-lint-report.md docs/analysis/concepts/rjm/upper-case.md docs/analysis/concepts/rjm/invoke.md docs/analysis/concepts/rjm/hook-scripts.md docs/analysis/concepts/rjm/function-complexity.md docs/analysis/concepts/rjm/skill-prompt-size.md docs/analysis/concepts/rjm/attack-trees.md docs/analysis/concepts/rjm/kill-chains.md docs/analysis/concepts/rjm/recon.md docs/analysis/concepts/rjm/weaponize.md docs/analysis/concepts/rjm/deliver.md docs/analysis/concepts/rjm/exploit.md docs/analysis/concepts/rjm/install.md docs/analysis/concepts/rjm/command.md docs/analysis/concepts/rjm/apt-style-threats.md docs/analysis/concepts/rjm/risk-formula.md docs/analysis/concepts/rjm/likelihood-scale.md docs/analysis/concepts/rjm/impact-scale.md docs/analysis/concepts/rjm/risk-matrix.md` (exit code 0, 33 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-221 authors 30 concept cards across 41 total occurrences cited in `facts/cc-rjm-221.txt`.
- The concepts cover:
  1. `taste-lints` script internals, frontmatter configuration flags, and functions (`size-exception: true`, `run_lint`, `format_text`, and cross-cutting `format_json`).
  2. Taste invariants, static enforcement concepts, and harness engineering principles (`Harness Engineering`, `structured logging`, `file size limits`, `reliability requirements`, `agent context`, `taste_lints.py`, `taste invariants`, `taste lint report`, `UPPER_CASE`, `invoke_`, `Hook scripts`, `Function Complexity`, `Skill Prompt Size`).
  3. Advanced threat modeling analysis techniques and the Cyber Kill Chain phases (`Attack Trees`, `Kill Chains`, `Recon`, `Weaponize`, `Deliver`, `Exploit`, `Install`, `Command`, `APT-style threats`).
  4. Structured risk rating guide formulas and scales (`Risk Formula`, `Likelihood Scale`, `Impact Scale`, `Risk Matrix`).
- Identifiers and filenames (`size-exception: true`, `run_lint`, `format_text`, `format_json`, `taste_lints.py`) are classified as `kind: name-only` per D-023.
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` with 33 PASS and 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 13 source files and 13 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
