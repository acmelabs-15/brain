---
package: rjm
path: scripts/validation/validate_no_orphaned_build_deferrals.py
type: script
bytes: 12197
unit: inv-rjm-309
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_no_orphaned_build_deferrals.py, sha256: 385823fc11288d84abe811bc70275a1e11eef981f5a217f044244fac5386fba0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_no_orphaned_build_deferrals.py

## Purpose — required, verbatim
> "Police staleness deferrals in build/scripts/build_all.py against orphaning." — scripts/validation/validate_no_orphaned_build_deferrals.py:2

## Design intent — required
Prevents deadlocks between generator commit gates (`build_all.py --check`) and skill validation gates (`SkillForge`) when upstream skills are broken. Historically, maintainers added ad-hoc exemptions in `build_all.py` (`STALENESS_DEFERRALS`) that were frequently forgotten and left in place after upstream fixes landed. This validator enforces a sanctioned deferral protocol by scanning `build_all.py` for deferral constants, extracting cited tracking issues, and failing closed if any referenced GitHub tracking issue has been closed.

## Phase — required
rjm:build

## Inputs — required
- CLI arguments:
  - `--build-all` path to `build_all.py` (default: `build/scripts/build_all.py`) — scripts/validation/validate_no_orphaned_build_deferrals.py:281
  - `--repo` GitHub repository slug `owner/name` for issue lookups (default: `GH_REPO` env var or `rjmurillo/ai-agents`) — scripts/validation/validate_no_orphaned_build_deferrals.py:286
- Files read:
  - `build/scripts/build_all.py` source text — scripts/validation/validate_no_orphaned_build_deferrals.py:281
- External data:
  - GitHub issue state (OPEN or CLOSED) fetched via `gh issue view` subprocess execution (scripts/validation/validate_no_orphaned_build_deferrals.py:161)

## Outputs — required
- Standard error:
  - Warning notices `WARN: <warning>` for missing issue citations or offline lookup failures
  - Failure notices `ORPHANED-DEFERRAL: <failure>` for closed tracking issues
  - Error message `CONFIG-ERROR: <exc>` when `build_all.py` is missing
- Exit codes:
  - 0: no orphaned deferrals (no deferrals at all, or all cite OPEN issues, or issue state could not be resolved and was kept with a warning) — scripts/validation/validate_no_orphaned_build_deferrals.py:52-53
  - 1: one or more deferrals cite a CLOSED tracking issue (orphan) — scripts/validation/validate_no_orphaned_build_deferrals.py:54
  - 2: config error (build_all.py missing) — scripts/validation/validate_no_orphaned_build_deferrals.py:55

## Invokes — required
- script build/scripts/build_all.py — scripts/validation/validate_no_orphaned_build_deferrals.py:281
- cli gh — scripts/validation/validate_no_orphaned_build_deferrals.py:161
- doc ADR-035 — scripts/validation/validate_no_orphaned_build_deferrals.py:51

## Invoked by — required
- script validate_no_orphaned_build_deferrals — scripts/validation/pre_pr.py:155
- script validate_no_orphaned_build_deferrals — scripts/validation/pre_pr_sequence.py:110

## Concepts named — required, verbatim
- `build_all.py --check` — scripts/validation/validate_no_orphaned_build_deferrals.py:6 — used here
- `SkillForge` — scripts/validation/validate_no_orphaned_build_deferrals.py:7 — used here
- `STALENESS_DEFERRALS` — scripts/validation/validate_no_orphaned_build_deferrals.py:11 — used here
- `Sanctioned deferral protocol` — scripts/validation/validate_no_orphaned_build_deferrals.py:27 — defined here
- `ADR-035` — scripts/validation/validate_no_orphaned_build_deferrals.py:51 — used here
- `DeferralBlock` — scripts/validation/validate_no_orphaned_build_deferrals.py:104 — defined here
- `lookup_issue_state` — scripts/validation/validate_no_orphaned_build_deferrals.py:148 — defined here
- `evaluate_deferrals` — scripts/validation/validate_no_orphaned_build_deferrals.py:188 — defined here
- `validate_no_orphaned_build_deferrals` — scripts/validation/validate_no_orphaned_build_deferrals.py:245 — defined here

## Structure
- Motivation (issue #2770) — scripts/validation/validate_no_orphaned_build_deferrals.py:4
- Sanctioned deferral protocol — scripts/validation/validate_no_orphaned_build_deferrals.py:27
- Scope — scripts/validation/validate_no_orphaned_build_deferrals.py:43
- Exit codes (per ADR-035): — scripts/validation/validate_no_orphaned_build_deferrals.py:51

## Scripts — required if type is script or the skill ships scripts
- path: scripts/validation/validate_no_orphaned_build_deferrals.py
- language: Python
- lines: 304
- documented invocation: none
- executed: yes
- actual command run: `python3 scripts/validation/validate_no_orphaned_build_deferrals.py`
- abridged stdout: none
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - no orphaned deferrals (no deferrals at all, or all cite OPEN issues, or issue state could not be resolved and was kept with a warning)" — scripts/validation/validate_no_orphaned_build_deferrals.py:52-53
    - "1 - one or more deferrals cite a CLOSED tracking issue (orphan)" — scripts/validation/validate_no_orphaned_build_deferrals.py:54
    - "2 - config error (build_all.py missing)" — scripts/validation/validate_no_orphaned_build_deferrals.py:55
  - actual exit paths:
    - scripts/validation/validate_no_orphaned_build_deferrals.py:298: `return 2` on FileNotFoundError
    - scripts/validation/validate_no_orphaned_build_deferrals.py:299: `return 0 if ok else 1`
    - scripts/validation/validate_no_orphaned_build_deferrals.py:303: `sys.exit(main())`
- for validators/gates:
  - can it exit non-zero: yes (exits 1 if a deferral cites a closed issue; exits 2 if build_all.py missing)
  - does it fail on the source repo's own default branch: no (passes trivially with exit 0 because build_all.py has zero deferrals)
- does the output match what the documentation claims: yes (silently exits 0 when no deferral blocks are found)

## Defects — required
none

## Observations
- Network tolerance: if `gh` CLI lookup fails, network is down, or issue is not found, `lookup_issue_state` returns `None` and `evaluate_deferrals` issues a warning without failing the gate (lines 153-158, 218-223).
- Bounded timeout: calls to `gh` are bounded by `_GH_TIMEOUT_S = 30` (line 70) following Release It! integration point principles.
- Path traversal defense: `_resolve_within_repo` (lines 227-243) explicitly verifies that relative paths to `build_all.py` do not escape the repository root.

## Context cost
File size: 12,197 bytes (~3,050 tokens). Self-contained script with no external library imports.
