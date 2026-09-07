---
package: rjm
name: Gather Information
slug: gather-information
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Gather Information

## Definition — verbatim
> "Gather Information" — .claude/skills/cynefin-classifier/scripts/classify.py:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/scripts/classify.py | 131 | defined here | Defined in STRATEGIES dictionary as the response strategy approach string for problems in the Confusion domain. |
| .claude/skills/cynefin-classifier/SKILL.md | 65 | defined here | Specified in the Cynefin Framework diagram center as the governing response rule when the domain is unknown. |

## Consumes
Problem statements with high ambiguity, missing context, incomplete logs.

## Produces
Clarified requirements, resolved unknowns, subsequent re-classification into one of the four active domains.

## When applied
When a problem description lacks sufficient information to determine its domain or triggers an even tie between domain indicators.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: unimplemented-feature, doc-drift

## Design notes
`Gather Information` is the default response strategy when a problem falls into Cynefin's central Confusion domain. Acting or committing to architectural plans before understanding basic facts risks misapplying cognitive models. By pausing to clarify requirements and decompose ambiguities, agents avoid premature commitments and exit exit code 2 until the problem can be classified into an actionable domain.
