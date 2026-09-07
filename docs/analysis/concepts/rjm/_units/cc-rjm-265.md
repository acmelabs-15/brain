---
unit: cc-rjm-265
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-265

## Files assigned
- [x] sources/rjm/scripts/consensus/__init__.py
- [x] sources/rjm/scripts/consensus/algorithms.py
- [x] sources/rjm/scripts/consensus/decision_recorder.py
- [x] sources/rjm/scripts/consensus/weights.py
- [x] sources/rjm/scripts/consolidate_skills.py
- [x] sources/rjm/scripts/detect_hook_bypass.py
- [x] sources/rjm/scripts/detect_scope_explosion.py
- [x] sources/rjm/scripts/scope_pr_base.py
- [x] docs/analysis/inventory/rjm/scripts-consensus---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-consensus-algorithms-py.md
- [x] docs/analysis/inventory/rjm/scripts-consensus-decision-recorder-py.md
- [x] docs/analysis/inventory/rjm/scripts-consensus-weights-py.md
- [x] docs/analysis/inventory/rjm/scripts-consolidate-skills-py.md
- [x] docs/analysis/inventory/rjm/scripts-detect-hook-bypass-py.md
- [x] docs/analysis/inventory/rjm/scripts-detect-scope-explosion-py.md
- [x] docs/analysis/inventory/rjm/scripts-scope-pr-base-py.md

## Outputs produced
Every file written, one per line, with byte count.
- docs/analysis/concepts/rjm/quorum-consensus.md (1005 bytes)
- docs/analysis/concepts/rjm/unanimous-consensus.md (1057 bytes)
- docs/analysis/concepts/rjm/weighted-consensus.md (1023 bytes)
- docs/analysis/concepts/rjm/decisionrecorder.md (1050 bytes)
- docs/analysis/concepts/rjm/get-agent-weight.md (1047 bytes)
- docs/analysis/concepts/rjm/get-all-weights.md (1045 bytes)
- docs/analysis/concepts/rjm/consensus-algorithm-implementations.md (895 bytes)
- docs/analysis/concepts/rjm/decisionoutcome.md (854 bytes)
- docs/analysis/concepts/rjm/decision-recording-and-storage-for-multi-agent-consensus.md (1028 bytes)
- docs/analysis/concepts/rjm/record-decision.md (887 bytes)
- docs/analysis/concepts/rjm/get-decision.md (893 bytes)
- docs/analysis/concepts/rjm/list-decisions.md (863 bytes)
- docs/analysis/concepts/rjm/load-decision-file.md (922 bytes)
- docs/analysis/concepts/rjm/generate-id.md (905 bytes)
- docs/analysis/concepts/rjm/agent-expertise-weights-for-weighted-consensus-voting.md (984 bytes)
- docs/analysis/concepts/rjm/decisiondomain.md (822 bytes)
- docs/analysis/concepts/rjm/agent-weights.md (875 bytes)
- docs/analysis/concepts/rjm/consolidationconfig.md (870 bytes)
- docs/analysis/concepts/rjm/patternoccurrence.md (863 bytes)
- docs/analysis/concepts/rjm/patternstats.md (845 bytes)
- docs/analysis/concepts/rjm/skillcandidate.md (844 bytes)
- docs/analysis/concepts/rjm/consolidationreport.md (876 bytes)
- docs/analysis/concepts/rjm/bypassindicator.md (846 bytes)
- docs/analysis/concepts/rjm/scopedetectionerror.md (1084 bytes)
- docs/analysis/concepts/rjm/scoperesult.md (1027 bytes)
- docs/analysis/concepts/rjm/trunk-branches.md (878 bytes)
- docs/analysis/concepts/rjm/warn-threshold.md (900 bytes)
- docs/analysis/concepts/rjm/strong-warn-threshold.md (943 bytes)
- docs/analysis/concepts/rjm/block-threshold.md (907 bytes)
- docs/analysis/concepts/rjm/is-credible-rescope.md (1065 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-265.md (4413 bytes)

## Scripts executed
One per line: path, command, exit code. `none` if the unit had no scripts.
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `ScopeDetectionError` and `ScopeResult` span `scripts/detect_scope_explosion.py` and `scripts/scope_pr_base.py`.
- `is_credible_rescope` is defined in `scripts/scope_pr_base.py` and used in `scripts/detect_scope_explosion.py`.
- Consensus algorithms and helper functions (`quorum_consensus`, `unanimous_consensus`, `weighted_consensus`, `DecisionRecorder`, `get_agent_weight`, `get_all_weights`) span `scripts/consensus/__init__.py` and their respective submodules (`algorithms.py`, `decision_recorder.py`, `weights.py`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~21,000 tokens
Approximate tokens of output written: ~8,000 tokens
