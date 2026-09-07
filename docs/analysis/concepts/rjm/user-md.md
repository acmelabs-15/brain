---
package: rjm
name: USER.md
slug: user-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# USER.md

## Definition — verbatim
(used, not defined)

> "The optional markdown views (`USER.md`, `SOUL.md`, `HEARTBEAT.md`) are projections of this document; the JSON is the source of truth." — .claude/skills/work-operating-model/references/entry-contract.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/references/entry-contract.md | 3 | used here | Specified as an optional human-readable markdown projection derived from canonical operating model JSON. |
| .claude/skills/work-operating-model/SKILL.md | 74 | defined here | Documented in interview close phase as an optional emitted markdown projection. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`USER.md` is a filename designating an optional human-readable markdown projection of team operating model data rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
