---
package: rjm
name: vector database
slug: vector-database
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# vector database

## Definition — verbatim
(used, not defined)

> "| Under 100 people, strong senior team | `vector database` | Senior people can temporarily act as a human boundary layer. |" — .claude/skills/world-model-diagnostic/SKILL.md:70

## Also called — verbatim
> "vector DB" — .claude/skills/world-model-diagnostic/SKILL.md:4

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 70 | used here | Tabular paradigm mapping rule identifying vector databases as suitable for organizations under 100 people with senior oversight. |

## Consumes
Unstructured documents, communications, meeting notes, and senior human oversight.

## Produces
High-dimensional embedding indices supporting similarity queries across unstructured knowledge assets.

## When applied
Recommended for knowledge-work organizations or small teams whose senior engineers absorb semantic interpretation errors.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A knowledge infrastructure paradigm in rjm providing semantic similarity search across unstructured documents. In rjm's diagnostic framework, vector databases are recognized as the easiest starting point for small teams, but require explicit boundary controls and outcome tracking to remain reliable as organizations scale.
