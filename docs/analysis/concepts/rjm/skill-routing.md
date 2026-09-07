---
package: rjm
name: Skill routing
slug: skill-routing
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill routing

## Definition — verbatim
> "Explicit skill invocations still win: when the request names an available skill or uses that skill's slash command, invoke that skill first. Concrete requests that name no skill go through `/autoplan` below." — CLAUDE.md:43

## Also called — verbatim
> "## Skill routing" — CLAUDE.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 41 | defined here | Section heading establishing precedence between explicit skill invocations and fallback `/autoplan` routing. |

## Consumes
User request text, explicit skill mentions, and slash command invocations.

## Produces
Routed dispatch to the explicitly named skill or delegated dispatch to `/autoplan`.

## When applied
Evaluated at prompt receipt to select the appropriate skill, command, or routing agent.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Dispatch discipline that prevents routing collisions by prioritizing explicit skill or command invocations while funneling untagged requests through canonical intent triage.
