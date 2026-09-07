---
package: rjm
name: Inversion Thinking Protocol
slug: inversion-thinking-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Inversion Thinking Protocol

## Definition — verbatim
> "## Inversion Thinking Protocol" — .claude/skills/decision-critic/SKILL.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/SKILL.md | 117 | defined here | Defines the five-step inversion thinking protocol for identifying and mitigating decision failure modes. |

## Consumes
A proposed decision, architecture direction, or goal statement.

## Produces
Inverted failure scenarios, reversed success criteria, and a decision validation assessment.

## When applied
"Before finalizing any decision, apply inversion to identify failure modes" (.claude/skills/decision-critic/SKILL.md:119).

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The Inversion Thinking Protocol is a five-step structured technique in decision-critic that requires an agent to state a goal, invert it into failure scenarios, and reverse those failure modes into explicit success criteria before finalizing a decision. This counteracts positive confirmation bias by forcing systematic identification of how the decision could cause catastrophic failure.
