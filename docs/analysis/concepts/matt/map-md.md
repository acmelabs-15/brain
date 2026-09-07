---
package: matt
name: map.md
slug: map-md
kind: artifact
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# map.md

## Definition — verbatim
> "`.scratch/<effort>/map.md` (the Notes / Decisions-so-far / Fog body)." — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 25 | used here | Specifies the local markdown map file path for coordinating wayfinding efforts. |

## Consumes
High-level exploration goals and questions.

## Produces
Persistent state tracking notes, accumulated decisions, and child ticket relationships.

## When applied
Created at the start of a wayfinding investigation and updated after each ticket resolution.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The core coordinating document in local markdown wayfinding, recording the overall map, notes, accumulated decisions, and active tickets to preserve continuity across multiple agent sessions.
