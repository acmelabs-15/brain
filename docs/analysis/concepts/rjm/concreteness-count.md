---
package: rjm
name: concreteness_count
slug: concreteness-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/burstiness.py, sha256: c6c1c60b5f3e1cdf84bf8d1c3615c8ab4a6d7334a8ba082e1d73db85a5096b06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# concreteness_count

## Definition — verbatim
(used, not defined)

> "    concreteness_count: int" — .claude/skills/prose-self-check/scripts/burstiness.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/burstiness.py | 53 | defined here | Dataclass field definition recording the total count of numbers, file paths, and multi-word named entities. |

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
clean

## Design notes
`concreteness_count` is a dataclass field identifier in `burstiness.py` storing the cumulative count of concrete tokens, classified as `kind: name-only` per D-023.
