---
package: matt
name: spec.md
slug: spec-md
kind: artifact
package_phase: matt:to-spec
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

# spec.md

## Definition — verbatim
> "The spec is `.scratch/<feature-slug>/spec.md`" — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 8 | used here | Establishes the standard file path for feature specifications in local markdown tracking. |

## Consumes
Feature requests, architectural discussions, and domain models.

## Produces
A local markdown specification file documenting requirements, interfaces, and testing strategies.

## When applied
Authored during feature design before breaking implementation down into individual tickets.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The designated file location for feature specifications within local-markdown issue tracking (`.scratch/<feature-slug>/spec.md`), serving as the authoritative design reference for subsequent ticket generation.
