---
unit: inv-rjm-294
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-294

## Files assigned
- [x] sources/rjm/scripts/validation/ci_runner_base.py
- [x] sources/rjm/scripts/validation/citation_anchors.py
- [x] sources/rjm/scripts/validation/citation_head_state.py
- [x] sources/rjm/scripts/validation/command_size.py
- [x] sources/rjm/scripts/validation/doc_interpreter_baseline.json
- [x] sources/rjm/scripts/validation/doc_interpreter_subprocess.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-ci-runner-base-py.md (4990 bytes)
- docs/analysis/inventory/rjm/scripts-validation-citation-anchors-py.md (5224 bytes)
- docs/analysis/inventory/rjm/scripts-validation-citation-head-state-py.md (4676 bytes)
- docs/analysis/inventory/rjm/scripts-validation-command-size-py.md (5331 bytes)
- docs/analysis/inventory/rjm/scripts-validation-doc-interpreter-baseline-json.md (3012 bytes)
- docs/analysis/inventory/rjm/scripts-validation-doc-interpreter-subprocess-py.md (4843 bytes)

## Scripts executed
- scripts/validation/ci_runner_base.py: `python3 sources/rjm/scripts/validation/ci_runner_base.py` (exit 0)
- scripts/validation/citation_anchors.py: `python3 sources/rjm/scripts/validation/citation_anchors.py` (exit 0)
- scripts/validation/citation_head_state.py: `python3 sources/rjm/scripts/validation/citation_head_state.py` (exit 0)
- scripts/validation/command_size.py: `python3 sources/rjm/scripts/validation/command_size.py --ci` (exit 0)
- scripts/validation/doc_interpreter_baseline.json: `python3 -m json.tool sources/rjm/scripts/validation/doc_interpreter_baseline.json` (exit 0)
- scripts/validation/doc_interpreter_subprocess.py: `python3 sources/rjm/scripts/validation/doc_interpreter_subprocess.py` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `ci_runner_base.py` provides core git fetch and diff base resolution used by `run_install_parity_ci.py` (unit inv-rjm-304) and `run_plugin_version_bump_ci.py` (unit inv-rjm-306).
- `citation_anchors.py` and `citation_head_state.py` were extracted at file-size ceilings from `check_citation_freshness.py` (unit inv-rjm-277).
- `doc_interpreter_subprocess.py` and `doc_interpreter_baseline.json` support `check_doc_interpreter_portability.py` (unit inv-rjm-278). `doc_interpreter_baseline.json` is categorized as type `script` in the manifest despite containing only JSON data.

## Blocked or uncertain
none

## Time and size
Approximate source tokens read: ~9,745 tokens (38,982 bytes across 6 files). Approximate output tokens written: ~7,020 tokens (28,076 bytes across 6 inventory cards).
