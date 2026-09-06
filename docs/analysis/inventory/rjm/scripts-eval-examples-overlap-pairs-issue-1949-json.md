---
package: rjm
path: scripts/eval/examples/overlap-pairs-issue-1949.json
type: script
bytes: 6925
unit: inv-rjm-234
in_scope_via: scripts/eval/README.md
aliases: []
memo_inputs:
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/examples/overlap-pairs-issue-1949.json

## Purpose — required, verbatim
> "Issue #1949 (M4): pairwise overlap eval on the two INVESTIGATE-tier pairs from the M1 triage. Pair 1: curating-memories x memory-enhancement (both maintain memory quality, content vs metadata facet). Pair 2: exploring-knowledge-graph x memory Tier-1 (both answer 'what do you know about X', graph traversal vs semantic search). Prompts are the per-skill native prompts derived from each SKILL.md. Run live with: python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/overlap-pairs-issue-1949.json" — scripts/eval/examples/overlap-pairs-issue-1949.json:2

## Design intent — required
Provides production-grade evaluation fixtures for Issue #1949 milestone 4 (M4) pairwise skill overlap analysis, focusing on two "INVESTIGATE-tier" pairs identified during M1 catalog triage: (1) `curating-memories` ↔ `memory-enhancement` (content curation versus operational metadata/confidence decay), and (2) `exploring-knowledge-graph` ↔ `memory` (multi-hop graph relation traversal versus Tier-1 flat semantic search). It specifies 4 realistic, native prompts per skill with detailed expected behaviors and skill owner designations. Without this dataset, evaluating skill boundary disambiguation and query routing across the knowledge and memory subsystems would lack grounded test cases reflecting actual operational differences.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Issue #1949` — scripts/eval/examples/overlap-pairs-issue-1949.json:2 — used here
- `M4` — scripts/eval/examples/overlap-pairs-issue-1949.json:2 — used here
- `pairwise overlap eval` — scripts/eval/examples/overlap-pairs-issue-1949.json:2 — used here
- `INVESTIGATE-tier` — scripts/eval/examples/overlap-pairs-issue-1949.json:2 — used here
- `curating-memories` — scripts/eval/examples/overlap-pairs-issue-1949.json:4 — used here
- `memory-enhancement` — scripts/eval/examples/overlap-pairs-issue-1949.json:4 — used here
- `exploring-knowledge-graph` — scripts/eval/examples/overlap-pairs-issue-1949.json:5 — used here
- `memory` — scripts/eval/examples/overlap-pairs-issue-1949.json:5 — used here
- `eval-skill-overlap.py` — scripts/eval/examples/overlap-pairs-issue-1949.json:2 — used here
- `pairs` — scripts/eval/examples/overlap-pairs-issue-1949.json:3 — defined here
- `prompts` — scripts/eval/examples/overlap-pairs-issue-1949.json:7 — defined here
- `owner` — scripts/eval/examples/overlap-pairs-issue-1949.json:12 — defined here

## Structure
- `pairs` — scripts/eval/examples/overlap-pairs-issue-1949.json:3
- `prompts` — scripts/eval/examples/overlap-pairs-issue-1949.json:7
  - `curating-memories` — scripts/eval/examples/overlap-pairs-issue-1949.json:8
  - `memory-enhancement` — scripts/eval/examples/overlap-pairs-issue-1949.json:30
  - `exploring-knowledge-graph` — scripts/eval/examples/overlap-pairs-issue-1949.json:52
  - `memory` — scripts/eval/examples/overlap-pairs-issue-1949.json:74

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/examples/overlap-pairs-issue-1949.json`, language: JSON / test fixture data, lines: 98
- documented invocation:
  - "python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/overlap-pairs-issue-1949.json" — scripts/eval/examples/overlap-pairs-issue-1949.json:2
- **executed:** yes
- actual command run: `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/overlap-pairs-issue-1949.json --dry-run`
  abridged stdout:
  ```
  Cost estimate: 96 API calls, ~336,000 tokens, ~$3.02 USD (pricing as of 2026-08-01)
  Dry run: 2 pair(s) validated, no API calls made.
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: none (data fixture file)
  - actual exit paths: none (data file)
- for validators/gates: test fixture file; consumer script `eval-skill-overlap.py` validates inputs and calculates cost estimate without error.
- does the output match what the documentation claims? yes, validates 2 pairs and 96 planned API calls calculated.

## Defects — required
- orphan · scripts/eval/examples/overlap-pairs-issue-1949.json:2 — file is not statically referenced or invoked by other in-scope files; intended to be passed via CLI flag `--pairs` to `scripts/eval/eval-skill-overlap.py` as documented in its header comment.

## Observations
Provides concrete prompts exploring subtle architectural distinctions between semantic similarity and knowledge-graph traversal, as well as operational memory metadata reinforcement versus content curation.

## Context cost
6,925 bytes (~1,731 tokens).
