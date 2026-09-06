---
unit: inv-rjm-228
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-228

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-e2e-delivery.py (8656 bytes, 248 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-knowledge-integration.py (35810 bytes, 774 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-eval-e2e-delivery-py.md (7601 bytes)
- docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md (10943 bytes)

## Scripts executed
- scripts/eval/eval-e2e-delivery.py: `python3 scripts/eval/eval-e2e-delivery.py --fixtures scripts/eval/examples/e2e-delivery-fixtures.json --dry-run` (exit code: 0)
- scripts/eval/eval-knowledge-integration.py: `python3 scripts/eval/eval-knowledge-integration.py --dry-run` (exit code: 1, kill gate STOP on mock zero delta)
- scripts/eval/eval-knowledge-integration.py: `python3 scripts/eval/eval-knowledge-integration.py --skill cva-analysis --dry-run` (exit code: 1, kill gate STOP on mock zero delta)
- scripts/eval/eval-knowledge-integration.py: `python3 scripts/eval/eval-knowledge-integration.py --dry-run --skill nonexistent` (exit code: 1, skill directory not found)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Both scripts are specialized evaluation runners within `scripts/eval/` in `sources/rjm`:
  - `eval-e2e-delivery.py` implements issue #2859 shape 2 (plan-rubric proxy), measuring an autonomous agent's ability to plan delivery from an ambiguous germ scored against hidden acceptance criteria from merged PRs across 5 rubric axes.
  - `eval-knowledge-integration.py` implements the knowledge value assessment comparing unassisted baseline prompts against skill-augmented prompts across accuracy, depth, and specificity (1-5 scale) with an ADR-057 flakiness protocol and a 4-tier kill gate (`PROCEED`, `CONDITIONAL`, `STOP`, `NO_DATA`).
- Neither file is in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`), so no divergence cards were required.
- Shared infrastructure: both scripts rely on `scripts/eval/_anthropic_api.py` for API access and rate limiting. `eval-knowledge-integration.py` also imports `_eval_common.py` for multi-run score aggregation.
- Documented defects: `eval-knowledge-integration.py` has minor doc-drift where comments and CLI help claim 5 skills / 30 prompts, but 8 skills / 48 prompts are implemented.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,100 tokens (44,466 bytes across 2 files)
- Approximate tokens of output written: ~4,600 tokens (18,544 bytes across 2 cards)
