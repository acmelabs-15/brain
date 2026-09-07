---
package: rjm
name: direct call to action
slug: direct-call-to-action
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/storybrand.md, sha256: 77d4aad5404196cbf960a0fbf9858eaba544794ebd675fc4130afe2a77f2e038}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# direct call to action

## Definition — verbatim
> "Make one direct call to action obvious and repeated (buy, book, start)." — .claude/skills/business-strategy/references/storybrand.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/storybrand.md | 25 | defined here | Primary action directive instructing ready prospects to make an immediate commitment. |

## Consumes
Clear customer journey steps and high-friction buying readiness.

## Produces
Repeated, unambiguous user action prompt driving core business conversion.

## When applied
Placed prominently above the fold and repeatedly across marketing pages for high-intent visitors.

## Sub-concepts
none

## Part of
storybrand-messaging

## Implementation status
clean

## Design notes
A direct call to action explicitly commands the visitor to take the primary transaction step (e.g., "Buy Now" or "Book a Call"). In rjm, enforcing a single repeated direct CTA eliminates choice paralysis and ensures high-intent prospects encounter zero friction when ready to buy.
