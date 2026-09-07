---
package: rjm
name: Speculative Generality
slug: speculative-generality
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Speculative Generality

## Definition — verbatim
> "hooks, abstract classes, and parameters added for \"future flexibility\" that no caller exercises. Inline the indirection until a real second case appears." — .claude/skills/software-engineering-library/references/refactoring.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 66 | defined here | Defined as a code smell where unexercised abstractions are prematurely added for future flexibility. |

## Consumes
Unused abstract classes, unused hook interfaces, or unexercised parameter options.

## Produces
Simplified inlined logic removing superfluous layers of indirection.

## When applied
Flagged when code contains speculative hooks or abstractions with only one concrete caller.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Speculative Generality is a code smell in rjm warning against premature over-engineering (YAGNI). When developers create abstract base classes, pluggable interfaces, or generalized hook parameters for hypothetical future use cases that do not yet exist, cognitive complexity rises with zero operational benefit. rjm mandates inlining these indirections until a genuine second case emerges.
