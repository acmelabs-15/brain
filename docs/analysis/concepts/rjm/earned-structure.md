---
package: rjm
name: earned structure
slug: earned-structure
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

# earned structure

## Definition — verbatim
> "| earned structure | Letting structure emerge from work, or forcing schema too early? | `earned` / `partially earned` / `imposed` |" — .claude/skills/world-model-diagnostic/SKILL.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 88 | defined here | Core diagnostic evaluation principle measuring whether schemas emerge from real work or are prematurely imposed. |

## Consumes
Operational usage patterns, historical workflow data, and emerging schema conventions.

## Produces
Principle classification (`earned`, `partially earned`, or `imposed`) informing knowledge infrastructure design.

## When applied
Evaluated during Five-Principle Evaluation to prevent premature over-engineering of data schemas.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
An architectural design philosophy in rjm warning against premature schema design. It demands that data models and formal ontologies emerge inductively from verified workflow behaviors rather than being imposed deductively before actual operational patterns are understood.
