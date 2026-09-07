---
package: rjm
name: Message Chains
slug: message-chains
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

# Message Chains

## Definition — verbatim
> "Violates Law of Demeter. Suggests Hide Delegate or, if the chain is load-bearing, accept the coupling and document it." — .claude/skills/software-engineering-library/references/refactoring.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 68 | defined here | Defined as a code smell where chained navigation calls couple a client to intermediate object structures. |

## Consumes
Long navigation chains where a client traverses object hierarchies to obtain deep collaborators.

## Produces
Delegation methods that encapsulate navigation or explicit documentation of necessary coupling.

## When applied
Identified when client code performs deep chained calls traversing multiple object relationships.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Message Chains is a code smell in rjm that violates the Law of Demeter (principle of least knowledge). When a client calls a.getB().getC().getD(), it couples itself not only to the immediate collaborator but to the entire navigational path through the object graph. Any structural shift in intermediate relationships breaks the caller. Resolving this via Hide Delegate or encapsulation keeps client dependencies narrow.
