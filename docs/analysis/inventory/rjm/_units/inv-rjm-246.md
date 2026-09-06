---
unit: inv-rjm-246
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-246

## Files assigned
- [x] sources/rjm/scripts/incoherence.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-incoherence-py.md (14270 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-246.md

## Scripts executed
- `sources/rjm/scripts/incoherence.py`: `python3 sources/rjm/scripts/incoherence.py --step-number 1 --total-steps 22 --thoughts "Analyzing project X"`, exit code 0; `python3 sources/rjm/scripts/incoherence.py --step-number 14 --total-steps 22 --thoughts "Reconciling..."`, exit code 0; `python3 sources/rjm/scripts/incoherence.py`, exit code 2 (argparse error: missing required arguments)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/incoherence.py` is referenced in `docs/skill-reference.md:112` as a deprecated skill (`incoherence`) whose detection workflow was absorbed by `doc-accuracy`, but retained for legacy reconciliation. The referenced path `.claude/skills/incoherence/scripts/incoherence.py` does not exist in the repository tree.
- In `scripts/validation/check_plugin_frontmatter_self_containment.py:47`, `scripts/incoherence.py` is noted as one of four references in historical commits to unresolvable external files.
- The script has an internal contradiction where the report template at line 465 specifies `**Dimension**: [A-I category name]`, while the dimension catalog at lines 40–113 and line 161 defines 11 categories from A through K.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: 9,500 tokens (37,983 bytes across 1 file).
Approximate tokens of output written: 4,200 tokens (approx. 16,500 bytes across 1 card and 1 unit report).
