---
package: rjm
path: scripts/eval/examples/example-overlap-pairs.json
type: script
bytes: 3183
unit: inv-rjm-234
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/examples/example-overlap-pairs.json

## Purpose — required, verbatim
> "Phase 1 example for eval-skill-overlap.py. The Issue #1932 body named four pairs, but doc-coverage, doc-sync, and session-qa-eligibility were deleted in the M1 catalog prune (commit 5c4729345, #1942). Only live, currently-overlapping pairs are listed here: memory-enhancement/curating-memories (both maintain memory quality) and curating-memories/exploring-knowledge-graph (both touch the memory knowledge graph). Prompts below are illustrative; replace with the per-skill 5-6 native prompts from the triage report before a production run." — scripts/eval/examples/example-overlap-pairs.json:2

## Design intent — required
Provides an illustrative configuration and prompt dataset for evaluating skill overlap via `eval-skill-overlap.py` (Issue #1932). Following the deletion of pruned skills (`doc-coverage`, `doc-sync`, `session-qa-eligibility`), this file defines live, candidate overlapping pairs (`memory-enhancement` ↔ `curating-memories`, `curating-memories` ↔ `exploring-knowledge-graph`) along with per-skill representative prompts, expected answers, and skill ownership tags. It serves as an example schema and test fixture for verifying pairwise routing, cross-skill boundary clarity, and disambiguation. Without this example, developers configuring skill overlap evaluations would lack a verified reference input for the pairwise evaluation runner.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc scripts/eval/README.md — scripts/eval/README.md:30

## Concepts named — required, verbatim
- `eval-skill-overlap.py` — scripts/eval/examples/example-overlap-pairs.json:2 — used here
- `Issue #1932` — scripts/eval/examples/example-overlap-pairs.json:2 — used here
- `M1 catalog prune` — scripts/eval/examples/example-overlap-pairs.json:2 — used here
- `pairs` — scripts/eval/examples/example-overlap-pairs.json:3 — defined here
- `memory-enhancement` — scripts/eval/examples/example-overlap-pairs.json:4 — used here
- `curating-memories` — scripts/eval/examples/example-overlap-pairs.json:4 — used here
- `exploring-knowledge-graph` — scripts/eval/examples/example-overlap-pairs.json:5 — used here
- `prompts` — scripts/eval/examples/example-overlap-pairs.json:7 — defined here
- `owner` — scripts/eval/examples/example-overlap-pairs.json:12 — defined here

## Structure
- `pairs` — scripts/eval/examples/example-overlap-pairs.json:3
- `prompts` — scripts/eval/examples/example-overlap-pairs.json:7
  - `memory-enhancement` — scripts/eval/examples/example-overlap-pairs.json:8
  - `curating-memories` — scripts/eval/examples/example-overlap-pairs.json:20
  - `exploring-knowledge-graph` — scripts/eval/examples/example-overlap-pairs.json:32

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/examples/example-overlap-pairs.json`, language: JSON / test fixture data, lines: 46
- documented invocation:
  - `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json --dry-run` (documented in `scripts/eval/README.md:30`)
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json --dry-run`
  abridged stdout:
  ```
  Cost estimate: 48 API calls, ~168,000 tokens, ~$1.51 USD (pricing as of 2026-08-01)
  Dry run: 2 pair(s) validated, no API calls made.
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: none (data fixture file)
  - actual exit paths: none (data file)
- for validators/gates: test fixture file; consumer script `eval-skill-overlap.py` validates inputs and prints cost estimate without error.
- does the output match what the documentation claims? yes, validates 2 pairs and calculates API call and token costs.

## Defects — required
none

## Observations
Explicitly notes that three previously overlapping pairs (`doc-coverage`, `doc-sync`, `session-qa-eligibility`) were deleted in commit 5c4729345 (#1942), documenting repository evolution.

## Context cost
3,183 bytes (~795 tokens).
