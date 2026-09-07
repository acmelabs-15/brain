---
package: rjm
name: concreteness
slug: concreteness
kind: technique
package_phase: cross-phase
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

# concreteness

## Definition — verbatim
> "Computes sentence-length variance (burstiness) and a concreteness count" — .claude/skills/prose-self-check/scripts/burstiness.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/burstiness.py | 4 | defined here | Defined in the module docstring as a metric counting numbers, file paths, and capitalized multi-word entities in prose. |

## Consumes
Target prose artifact text.

## Produces
Aggregated frequency count of concrete reference tokens (numbers, paths, named entities).

## When applied
Evaluated during Layer 3 distributional analysis to identify abstract filler prose lacking grounded details.

## Sub-concepts
concreteness_count

## Part of
prose-self-check

## Implementation status
clean

## Design notes
In prose-self-check, concreteness measures the density of grounded tokens (numbers, file paths, and named entities) to alert authors and agents when prose drifts into fluent but vacuous generalities.
