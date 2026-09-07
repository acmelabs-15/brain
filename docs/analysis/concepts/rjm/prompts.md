---
package: rjm
name: PROMPTS
slug: prompts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PROMPTS

## Definition — verbatim
> "PROMPTS: dict[str, list[dict[str, Any]]] = {" — scripts/eval/eval-agents.py:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 127 | defined here | Dictionary mapping agent identifiers to test evaluation prompt suites. |
| scripts/eval/examples/example-overlap-pairs.json | 7 | defined here | JSON object mapping skill names to illustrative test prompt cases. |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 7 | defined here | JSON object mapping skill names to issue-1949 pairwise overlap evaluation prompts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, orphan

## Design notes
A data structure containing test prompt fixtures across evaluation scripts and configuration files, classified as `name-only` per D-023.
