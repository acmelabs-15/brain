---
unit: inv-rjm-36
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-36

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-086-lefthook-local-hook-orchestration.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-086-lefthook-local-hook-orchestration-md.md` (12075 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-36 covers ADR-086 (`.agents/architecture/ADR-086-lefthook-local-hook-orchestration.md`, 21,060 bytes, 393 lines), which supersedes ADR-004 (`.agents/architecture/ADR-004-pre-commit-hook-architecture.md`, inventoried in unit inv-rjm-4).
- Key architectural findings:
  - Replaced custom repository-owned hook installation, activation, and scheduling machinery (`.githooks/` Git entry points and `scripts/hooks/pre-push` payload wrappers) with Lefthook 2.1.10 as the sole declarative local Git hook orchestrator.
  - Pinned `lefthook==2.1.10` in `pyproject.toml` and locked via `uv.lock`, executing via `uv run --frozen lefthook`.
  - Lefthook owns commodity scheduler duties: `commit-msg`, `pre-commit`, and `pre-push` event scheduling, native `stage_fixed` formatting auto-staging, group ordering, changed-file filtering (`{staged_files}`), standard input forwarding, skip conditions, and outer job timeouts.
  - Repository-specific validation policy remains implemented in Python (`scripts/validation/git_hook_policy.py`), including allowlisted generated-output staging (`stage-generated`), path safety checks, and selective `git add`.
  - Implements a two-tier timeout architecture (ADR-086 item 9) where Python subprocess invocations receive an inner timeout strictly shorter than Lefthook's outer job timeout (with >=30s headroom verified by `tests/test_lefthook_integration.py`). This guarantees exit code 3 and diagnostic reporting before outer SIGKILL.
  - Uses Git's active index (`GIT_INDEX_FILE`), avoiding custom alternate-index adapters or guards.
  - Defines an atomic rollback plan (lines 325-353) prohibiting partial rollbacks or manual reconstruction of deleted framework roots.
- Defects discovered via METHOD.md §4 checklist:
  - `missing-path` at line 216 (`CITATION-SCHEMA.md` referenced in the dependent components table does not exist anywhere in the repository).
  - Explicitly documents historical/deleted paths `.githooks/` and `scripts/hooks/`, which were deleted as part of PR #3259.
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,200 tokens (21,060 bytes, 393 lines across 1 file); approximate tokens of output written: ~3,000 tokens (12,075 bytes for inventory card, ~2,200 bytes for unit report).
