---
package: matt
name: Wayfinder routing
slug: wayfinder-routing
kind: technique
package_phase: matt:ask-matt
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Wayfinder routing

## Definition — verbatim
> "**Wayfinder routing.** The two mistakes people most often make with the heaviest, most cognitively demanding flow:" — CHANGELOG.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 108 | defined here | Changelog entry noting the addition of wayfinder routing to the ask-matt router |

## Consumes
A project description, greenfield initiative, or feature request spanning multiple sessions

## Produces
A routing decision directing the user to `/wayfinder` rather than the linear spec-to-tickets flow

## When applied
When a development journey involves substantial ambiguity, architectural unknowns, or multi-session scope

## Sub-concepts
the-map

## Part of
ask-matt

## Implementation status
clean

## Design notes
Wayfinder routing serves as an adaptive on-ramp in `/ask-matt` that identifies projects with high structural ambiguity or multi-session complexity and steers them to `/wayfinder` for incremental mapping rather than attempting premature linear specification.
