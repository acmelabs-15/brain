---
package: rjm
path: scripts/validation/vendor_portability_baseline.txt
type: script
bytes: 1645
unit: inv-rjm-310
in_scope_via: scripts/validation/check_vendor_portability.py
aliases: []
memo_inputs:
  - {path: scripts/validation/vendor_portability_baseline.txt, sha256: 37ae7684ee65407fe97be4ab35c2841d69b28d022abac56ccf1566d119e2b88f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/validation/vendor_portability_baseline.txt

## Purpose — required, verbatim
> "Vendor-portability baseline (Issue #2050)." — scripts/validation/vendor_portability_baseline.txt:1

## Design intent — required
Maintains a ratchet baseline listing pre-existing scripts that contain hard-coded references to vendor paths (`.agents/`, `.claude/lib/`, or `scripts/`). Consumed by `check_vendor_portability.py` to allow legacy debt while failing closed on any newly introduced vendor-portability violations.

## Phase — required
none

## Inputs — required
none

## Outputs — required
Baseline list of 19 permitted legacy script paths read by `check_vendor_portability.py` to determine permitted vendor path exceptions.

## Invokes — required
none

## Invoked by — required
- script check_vendor_portability.py — scripts/validation/check_vendor_portability.py:145

## Concepts named — required, verbatim
none

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/vendor_portability_baseline.txt`, language: Plain text, lines: 30
- documented invocation:
  "vendor_portability_baseline.txt" — scripts/validation/check_vendor_portability.py:145
  (plain text baseline data file; not directly executable as a standalone script)
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `cat sources/rjm/scripts/validation/vendor_portability_baseline.txt`
  Abridged stdout: `# Vendor-portability baseline (Issue #2050). ... .claude/skills/taste-lints/scripts/taste_lints.py`
  **Actual exit code:** 0
- documented exit codes: none (plain text data file; not an executable program) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (plain text baseline file consumed by validator). does it fail on the source repo's own default branch? no
- does the output match what the documentation claims? yes (contains the 19 baseline script entries)

## Defects — required
none

## Observations
- Classified as type `script` in the manifest and unit facts table due to directory location under `scripts/validation/`, despite functioning as a static configuration baseline.
- Notes in header explain that some entries are known false positives (e.g. regex literals or template text) tracked in issue #4046.

## Context cost
1645 bytes (~411 tokens). Loads no dependencies.
