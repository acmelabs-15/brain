---
package: rjm
name: Engineering Restraint
slug: engineering-restraint
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-anti-patterns.md, sha256: bb3bb55f446fe40863d1d4460e2885e4f1115d196236896d4107656891eb1bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Engineering Restraint

## Definition — verbatim
> "### Engineering Restraint (CLAUDE.md Pattern)" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:51
> "Priority order with explicit conflict resolution:" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 51 | defined here | Defined as a prompt governance pattern ordering priorities and establishing negative constraints against over-engineering. |

## Consumes
Engineering requirements and potential architectural tradeoffs.

## Produces
Ranked priority list (correctness > simplicity > maintainability > reversibility > performance) and negative non-goals.

## When applied
When drafting project instructions, steering guidelines, or agent operational boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Engineering Restraint provides explicit conflict resolution by establishing a strict hierarchy of values: correctness first, followed by simplicity, maintainability, reversibility, and performance. By framing non-goals (theoretical elegance, trendy architectures, premature optimization) as negative constraints, it prevents speculative development.
