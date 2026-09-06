---
unit: inv-rjm-239
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-239

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/external_signals/gate_aggregator.py (6758 bytes, 183 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/generate_third_party_notices.py (18771 bytes, 498 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/gh_retry_helpers.py (8741 bytes, 258 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/github_core/__init__.py (3035 bytes, 122 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-external-signals-gate-aggregator-py.md (5517 bytes)
- docs/analysis/inventory/rjm/scripts-generate-third-party-notices-py.md (6637 bytes)
- docs/analysis/inventory/rjm/scripts-gh-retry-helpers-py.md (5404 bytes)
- docs/analysis/inventory/rjm/scripts-github-core---init---py.md (4258 bytes)

## Scripts executed
- scripts/external_signals/gate_aggregator.py: `python3 sources/rjm/scripts/external_signals/gate_aggregator.py --signal external:pytest=PASS` (exit code: 0)
- scripts/external_signals/gate_aggregator.py: `python3 sources/rjm/scripts/external_signals/gate_aggregator.py --signal llm:critic=PASS` (exit code: 1, closed-loop refusal)
- scripts/external_signals/gate_aggregator.py: `python3 sources/rjm/scripts/external_signals/gate_aggregator.py --signal bad` (exit code: 2, invalid syntax)
- scripts/generate_third_party_notices.py: `python3 scripts/generate_third_party_notices.py --check` (exit code: 0)
- scripts/gh_retry_helpers.py: `python3 sources/rjm/scripts/gh_retry_helpers.py` (exit code: 0, library import check)
- scripts/github_core/__init__.py: `python3 -c "import scripts.github_core; print('imported successfully')"` (exit code: 0, package import check)
- scripts/sync_plugin_lib.py: `python3 scripts/sync_plugin_lib.py --check` (exit code: 0, verified plugin lib mirror parity)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/external_signals/gate_aggregator.py` provides the anti-closed-loop logic mandated by issue #1855, consumed by `scripts/quality_gate/external_signal_gate.py` and `scripts/quality_gate/spec_external_signal_gate.py`.
- `scripts/generate_third_party_notices.py` writes three synchronized notice files (root `THIRD-PARTY-NOTICES.TXT`, `.claude/THIRD-PARTY-NOTICES.TXT`, and `src/copilot-cli/THIRD-PARTY-NOTICES.TXT`) based on `.claude-plugin/marketplace.json` plugin declarations.
- `scripts/gh_retry_helpers.py` provides resilient GitHub CLI invocation with header parsing (`Retry-After`, `X-RateLimit-Reset`) and token redaction, extracted from `scripts/ci/build_ai_review_context.py` (issue #4597).
- `scripts/github_core/__init__.py` re-exports the public interface of the `github_core` module, mirrored at `.claude/lib/github_core/` and synchronized via `scripts/sync_plugin_lib.py`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,300 tokens (37,305 bytes across 4 files)
- Approximate tokens of output written: ~5,500 tokens (21,816 bytes across 4 inventory cards + unit report)
