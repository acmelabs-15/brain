---
package: rjm
name: Manufactured trailing offers
slug: manufactured-trailing-offers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Manufactured trailing offers

## Definition — verbatim
> "- **Manufactured trailing offers** (`trailing_offer`): a sentence proposing" — .claude/skills/prose-self-check/SKILL.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 91 | defined here | Defined as structural tell involving uninvited scope proposals at the conclusion of agent output. |

## Consumes
Closing sections and sentences of agent output.

## Produces
Removal of unrequested offers to maintain bounded, concise responses.

## When applied
Audited in Layer 2 structural linting and checked against the repository STOP-TOKEN rule.

## Sub-concepts
stop-token

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
A conversational anti-pattern where an assistant injects unprompted closing offers for extra work, violating succinctness and protocol boundaries.
