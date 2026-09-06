---
package: rjm
path: scripts/validation/adr_lifecycle_baseline.json
type: script
bytes: 502
unit: inv-rjm-271
in_scope_via: scripts/validation/check_adr_lifecycle.py
aliases: []
memo_inputs:
  - {path: scripts/validation/adr_lifecycle_baseline.json, sha256: cd19b2354ac9855f1658fe2d56233b96ff6dc7f32fcdde0a0dd0e10376fc2f73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/adr_lifecycle_baseline.json

## Purpose — required, verbatim
> "Per-check ADR lifecycle violation ceiling (issue #5191). A count may fall but never rise. Regenerate with: uv run python scripts/validation/check_adr_lifecycle.py --write-baseline" — scripts/validation/adr_lifecycle_baseline.json:3

## Design intent — required
Establishes a machine-readable non-regression baseline ceiling for architectural decision record (ADR) lifecycle validation checks implemented in `scripts/validation/check_adr_lifecycle.py` per issue #5191. The file specifies the maximum acceptable violation count across eight discrete validation checks covering frontmatter structure, status enumeration, reciprocal supersession links, target existence, proposal constraints, prose/frontmatter consistency, and status progression edges. By recording an explicit ceiling of zero across all checks, it locks in zero tolerance against lifecycle defects in the repository's 104 ADR records, preventing any newly introduced or modified ADR from violating structural or lifecycle rules.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script check_adr_lifecycle.py — scripts/validation/check_adr_lifecycle.py:185

## Concepts named — required, verbatim
- `schema_version` — scripts/validation/adr_lifecycle_baseline.json:2 — defined here
- `description` — scripts/validation/adr_lifecycle_baseline.json:3 — defined here
- `counts` — scripts/validation/adr_lifecycle_baseline.json:4 — defined here
- `frontmatter-parses` — scripts/validation/adr_lifecycle_baseline.json:5 — defined here
- `id-matches-filename` — scripts/validation/adr_lifecycle_baseline.json:6 — defined here
- `status-enum` — scripts/validation/adr_lifecycle_baseline.json:7 — defined here
- `supersession-reciprocal` — scripts/validation/adr_lifecycle_baseline.json:8 — defined here
- `supersession-target-exists` — scripts/validation/adr_lifecycle_baseline.json:9 — defined here
- `proposed-cannot-supersede` — scripts/validation/adr_lifecycle_baseline.json:10 — defined here
- `prose-frontmatter-agree` — scripts/validation/adr_lifecycle_baseline.json:11 — defined here
- `status-edge-consistency` — scripts/validation/adr_lifecycle_baseline.json:12 — defined here

## Structure
- Schema version and usage description — scripts/validation/adr_lifecycle_baseline.json:2-3
- Violation count ceiling mapping — scripts/validation/adr_lifecycle_baseline.json:4-13

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/adr_lifecycle_baseline.json`, language: JSON, lines: 15
- documented invocation:
  - "Regenerate with: uv run python scripts/validation/check_adr_lifecycle.py --write-baseline" — scripts/validation/adr_lifecycle_baseline.json:3
- executed: yes
- actual command run: `python3 -m json.tool scripts/validation/adr_lifecycle_baseline.json` (and `uv run python scripts/validation/check_adr_lifecycle.py`)
- abridged stdout:
```
{
    "schema_version": "1",
    "description": "Per-check ADR lifecycle violation ceiling (issue #5191). A count may fall but never rise. Regenerate with: uv run python scripts/validation/check_adr_lifecycle.py --write-baseline",
    "counts": {
        "frontmatter-parses": 0,
        "id-matches-filename": 0,
        "status-enum": 0,
        "supersession-reciprocal": 0,
        "supersession-target-exists": 0,
        "proposed-cannot-supersede": 0,
        "prose-frontmatter-agree": 0,
        "status-edge-consistency": 0
    }
}
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (data file)
  - Actual: N/A (static JSON configuration)
- for validators/gates:
  - Can exit non-zero: N/A (data configuration consumed by `scripts/validation/check_adr_lifecycle.py`)
  - Verified on repository default branch: valid JSON; all 8 checks report 0 violations across 104 ADRs
- does output match what the documentation claims: yes, valid JSON schema version 1 baseline with 8 zero-count violation ceilings

## Defects — required
none

## Observations
- Classifies type as `script` per manifest partition table for `scripts/validation/` files.
- All eight ADR validation counts are set to 0, establishing a strict zero-tolerance baseline rather than a grandfathering backlog.

## Context cost
502 bytes, 15 lines, ~125 tokens.
