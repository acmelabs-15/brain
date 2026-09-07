---
package: rjm
name: Fallback Behavior
slug: fallback-behavior
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Fallback Behavior

## Definition — verbatim
> "**Fallback Behavior:**" — .claude/agents/silent-failure-hunter.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 69 | defined here | Review axis evaluating fallback documentation, observability, and avoidance of production mocks. |
| templates/agents/silent-failure-hunter.shared.md | 79 | defined here | Shared template review axis defining fallback behavior verification rules. |

## Consumes
Alternative execution branches, default value substitutions, and secondary recovery mechanisms.

## Produces
Audit recommendations enforcing documentation and runtime observability for any fallback that alters user-visible behavior.

## When applied
Applied when reviewing conditional branches, default values, or recovery routines that execute upon failure.

## Sub-concepts
none

## Part of
review-process

## Implementation status
defects: other

## Design notes
Fallback Behavior evaluates error recovery paths to ensure alternative behaviors are documented, observable via logs or metrics, justified rather than silent mock substitutions, and do not mislead users or operators about underlying system failures.
