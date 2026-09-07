---
package: matt
name: Gaps
slug: gaps
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/RESOURCES-FORMAT.md, sha256: e9cacf34026e11a8d1c8f9de88abe5bcbf654f4ebdb25cae8c0de0d5f48f44ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Gaps

## Definition — verbatim
> "If no good resource exists for an area the mission needs, write a `## Gaps` section listing what is missing. This drives future search." — skills/productivity/teach/RESOURCES-FORMAT.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/RESOURCES-FORMAT.md | 30 | defines | Defines the optional Gaps section in RESOURCES.md for documenting missing resource coverage required by the mission. |

## Consumes
Identified topic areas required by the mission where high-trust resources are currently lacking.

## Produces
A `## Gaps` section in `RESOURCES.md`.

## When applied
Applied when no good resource exists for an area the mission needs.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
An explicit section in RESOURCES.md that catalogues unfulfilled knowledge requirements. By tracking missing trusted materials directly in workspace state, it drives targeted future searches rather than allowing the agent to paper over missing information with unverified guesses.
