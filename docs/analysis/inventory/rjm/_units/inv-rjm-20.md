---
unit: inv-rjm-20
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-20

## Files assigned
- [x] `.agents/architecture/ADR-056-skill-output-format-standardization.md` (4227 bytes, 104 lines, sha256 a71c3a7799d1aa29)
- [x] `.agents/architecture/ADR-057-prompt-behavioral-evaluation.md` (22813 bytes, 310 lines, sha256 924e6f5e3f68c755)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-056-skill-output-format-standardization-md.md (7145 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-057-prompt-behavioral-evaluation-md.md (8720 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-20.md (1880 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-056 was superseded by ADR-103 (`.agents/architecture/ADR-103-skill-output-python-contract-correction.md`) under the GDS Way bounded rule because the shipped Python implementation drifted from the original PowerShell decision specification.
- ADR-057 is closely coupled with ADR-023 (structural validation) and ADR-058 (agent-vs-baseline efficacy), and amends its own enforcement mechanism (Amendment 2026-07-22, Issue #3185) after deleting an inert commit-blocking PreToolUse hook (`invoke_prompt_eval_gate.py`), keeping enforcement advisory at PR review except for the blocking `/spec` CI leg in `.github/workflows/slash-command-quality.yml`.

## Blocked or uncertain
none

## Time and size
Source read: 27040 bytes (~6500 tokens). Output written: ~11000 bytes (~2700 tokens).
