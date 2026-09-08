---
unit: cc-rjm-355
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-355

## Files assigned
- [x] sources/rjm/scripts/validation/git_hook_policy.py
- [x] docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md

## Outputs produced
- docs/analysis/concepts/rjm/staged-action-pins.md (966 bytes)
- docs/analysis/concepts/rjm/root-scratch.md (916 bytes)
- docs/analysis/concepts/rjm/staged-conflict-markers.md (1005 bytes)
- docs/analysis/concepts/rjm/github-bash.md (929 bytes)
- docs/analysis/concepts/rjm/security-suppressions.md (978 bytes)
- docs/analysis/concepts/rjm/mypy.md (867 bytes)
- docs/analysis/concepts/rjm/yamllint.md (896 bytes)
- docs/analysis/concepts/rjm/memory-cross-reference.md (970 bytes)
- docs/analysis/concepts/rjm/workflow-local.md (934 bytes)
- docs/analysis/concepts/rjm/sessions.md (900 bytes)
- docs/analysis/concepts/rjm/observations.md (910 bytes)
- docs/analysis/concepts/rjm/extract-episodes.md (938 bytes)
- docs/analysis/concepts/rjm/branch-context.md (931 bytes)
- docs/analysis/concepts/rjm/planning.md (880 bytes)
- docs/analysis/concepts/rjm/generate-mcp.md (917 bytes)
- docs/analysis/concepts/rjm/generate-agents.md (927 bytes)
- docs/analysis/concepts/rjm/memory-token-update.md (941 bytes)
- docs/analysis/concepts/rjm/memory-size.md (892 bytes)
- docs/analysis/concepts/rjm/memory-sync.md (882 bytes)
- docs/analysis/concepts/rjm/placeholder-identity.md (987 bytes)
- docs/analysis/concepts/rjm/additions.md (891 bytes)
- docs/analysis/concepts/rjm/bot-cascade.md (923 bytes)
- docs/analysis/concepts/rjm/semgrep-push.md (905 bytes)
- docs/analysis/concepts/rjm/security-suppressions-push.md (1023 bytes)
- docs/analysis/concepts/rjm/observations-push.md (962 bytes)
- docs/analysis/concepts/rjm/security-suppressions-staged.md (1036 bytes)
- docs/analysis/concepts/rjm/tracked-conflict-markers.md (1008 bytes)
- docs/analysis/concepts/rjm/cli-hook-e2e.md (930 bytes)
- docs/analysis/concepts/rjm/cli-plugin-e2e.md (910 bytes)
- docs/analysis/concepts/rjm/commit-message.md (949 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-355.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/staged-action-pins.md docs/analysis/concepts/rjm/root-scratch.md docs/analysis/concepts/rjm/staged-conflict-markers.md docs/analysis/concepts/rjm/github-bash.md docs/analysis/concepts/rjm/security-suppressions.md docs/analysis/concepts/rjm/mypy.md docs/analysis/concepts/rjm/yamllint.md docs/analysis/concepts/rjm/memory-cross-reference.md docs/analysis/concepts/rjm/workflow-local.md docs/analysis/concepts/rjm/sessions.md docs/analysis/concepts/rjm/observations.md docs/analysis/concepts/rjm/extract-episodes.md docs/analysis/concepts/rjm/branch-context.md docs/analysis/concepts/rjm/planning.md docs/analysis/concepts/rjm/generate-mcp.md docs/analysis/concepts/rjm/generate-agents.md docs/analysis/concepts/rjm/memory-token-update.md docs/analysis/concepts/rjm/memory-size.md docs/analysis/concepts/rjm/memory-sync.md docs/analysis/concepts/rjm/placeholder-identity.md docs/analysis/concepts/rjm/additions.md docs/analysis/concepts/rjm/bot-cascade.md docs/analysis/concepts/rjm/semgrep-push.md docs/analysis/concepts/rjm/security-suppressions-push.md docs/analysis/concepts/rjm/observations-push.md docs/analysis/concepts/rjm/security-suppressions-staged.md docs/analysis/concepts/rjm/tracked-conflict-markers.md docs/analysis/concepts/rjm/cli-hook-e2e.md docs/analysis/concepts/rjm/cli-plugin-e2e.md docs/analysis/concepts/rjm/commit-message.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-355 completes 30 concept cards corresponding to CLI subcommand identifiers registered in `scripts/validation/git_hook_policy.py`:
  1. Hygiene, syntax, and formatting guard subcommands (`staged-action-pins`, `root-scratch`, `staged-conflict-markers`, `github-bash`, `security-suppressions`, `security-suppressions-staged`, `security-suppressions-push`, `tracked-conflict-markers`, `placeholder-identity`, `commit-message`).
  2. Static analysis and quality advisory runners (`mypy`, `yamllint`, `workflow-local`, `planning`, `additions`, `bot-cascade`, `semgrep-push`).
  3. Memory management and synchronization hooks (`memory-cross-reference`, `memory-token-update`, `memory-size`, `memory-sync`, `observations`, `observations-push`, `sessions`, `extract-episodes`).
  4. Repository generation and environment context checkers (`branch-context`, `generate-mcp`, `generate-agents`).
  5. End-to-end integration and smoke test harnesses (`cli-hook-e2e`, `cli-plugin-e2e`).
- All 30 concepts represent CLI command mapping tokens and subcommand identifiers within `git_hook_policy.py`'s `build_parser()` method rather than autonomous SDLC lifecycle concepts, and are classified as `kind: name-only` per D-023.
- All 30 occurrences recorded in `facts/cc-rjm-355.txt` are mapped in the `Where used` tables.
- Defect status from citing inventory card `docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md` was propagated into `Implementation status` (`clean`).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens across 1 source file and 1 inventory card.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
