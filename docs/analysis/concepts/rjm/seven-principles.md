---
package: rjm
name: seven principles
slug: seven-principles
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/influence.md, sha256: 75ebcd66c931d69ac38ca458339fe8e57d34e2e63c17ea18459698a8fe648c41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# seven principles

## Definition — verbatim
> "The seven principles, applied as a sequence:" — .claude/skills/business-strategy/references/influence.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/influence.md | 20 | defined here | Taxonomic framework synthesizing Cialdini's core persuasion drivers into an actionable sequential protocol. |

## Consumes
A well-defined business ask, targeted counterparty identity, and relationship status.

## Produces
A focused communication strategy selecting a primary persuasion driver and at most one reinforcing secondary principle.

## When applied
Applied when drafting formal business requests, negotiation proposals, or sales messaging to align triggers with recipient context.

## Sub-concepts
reciprocity, commitment, social-proof, liking, authority, scarcity, unity

## Part of
influence

## Implementation status
clean

## Design notes
The seven principles categorize Robert Cialdini's validated psychological drivers of compliance into a structured framework. Within rjm, they provide a deliberate protocol that prevents muddying messages through undisciplined stacking, enforcing single-principle focus and honest triggers.
