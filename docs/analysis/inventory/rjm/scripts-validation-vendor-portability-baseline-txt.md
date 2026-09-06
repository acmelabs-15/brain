---
package: rjm
path: scripts/validation/vendor_portability_baseline.txt
type: script
bytes: 1645
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/vendor_portability_baseline.txt, sha256: 37ae7684ee65407fe97be4ab35c2841d69b28d022abac56ccf1566d119e2b88f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/vendor_portability_baseline.txt

## Purpose — required, verbatim
> "# Vendor-portability baseline (Issue #2050)." — scripts/validation/vendor_portability_baseline.txt:1

## Design intent — required
Provides an explicit version-controlled baseline ratchet of 18 pre-existing scripts that contain hard-coded references to `.agents/`, `.claude/lib/`, or `scripts/`. Read by the validation gate `scripts/validation/check_vendor_portability.py`, it allows legacy technical debt to pass without blocking active pull requests while strictly failing CI if any new vendor-portability violations are introduced. It also documents false positives from issue #4013 (such as regex literals and README template prose that name `scripts/` as a conceptual string rather than performing path I/O).

## Phase — required
rjm:test

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script check_vendor_portability — scripts/validation/check_vendor_portability.py:145
- script check_vendor_portability — scripts/validation/check_vendor_portability.py:511

## Concepts named — required, verbatim
- `Vendor-portability baseline` — scripts/validation/vendor_portability_baseline.txt:1 — defined here
- `check_vendor_portability.py` — scripts/validation/vendor_portability_baseline.txt:3 — used here

## Structure
- Header comments and instructions: lines 1-11
- Baselined offender paths: lines 12-29

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/vendor_portability_baseline.txt`, language: Plain text / baseline data, lines: 30
- documented invocation:
  - "# Regenerate: python3 scripts/validation/check_vendor_portability.py --update-baseline" — scripts/validation/vendor_portability_baseline.txt:4
- **executed:** yes
- actual command run: `python3 scripts/validation/check_vendor_portability.py`, abridged stdout: `[PASS] No new vendor-portability offenders. 18 known offender(s) tracked in the baseline (Issue #2050 migration debt).`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - Success: no new offenders (baseline-listed debt is allowed); OR" — scripts/validation/check_vendor_portability.py:58
    - "1 - One or more NEW offenders found (not in the baseline)." — scripts/validation/check_vendor_portability.py:62
    - "2 - Configuration error (repo root or baseline path invalid)." — scripts/validation/check_vendor_portability.py:63
  - actual exit paths:
    none in baseline text file itself (direct execution in shell fails with exit code 127); in consuming gate `check_vendor_portability.py`, `return 2` on configuration failure (`scripts/validation/check_vendor_portability.py:578`), `return 0` on clean state (`scripts/validation/check_vendor_portability.py:590`), and `return 1` on new offenders (`scripts/validation/check_vendor_portability.py:595`), wrapped in `raise SystemExit(main())` at `scripts/validation/check_vendor_portability.py:599`.
- for validators/gates: can exit non-zero via consuming gate; exits 0 on current repository default branch.
- does output match documentation: yes

## Defects — required
none

## Observations
Categorized as `script` in the manifest and unit facts to mirror its validator companion `check_vendor_portability.py`. Contains 18 distinct paths across `.claude/skills/` subject to vendor portability remediation.

## Context cost
1645 bytes (~410 tokens). Consumed by `scripts/validation/check_vendor_portability.py` (24904 bytes).
