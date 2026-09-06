---
package: addy
name: "Rollback-friendly changes"
slug: rollback-friendly-changes
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Rollback-friendly changes

## Definition — verbatim
> "Thin vertical slices - implement, test, verify, commit. Rollback-friendly changes." — external/context-engineering.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/context-engineering.md | 12 | used here | Summary of incremental-implementation skill in Build phase |
| README.md | 249 | used here | Table description of incremental-implementation workflow |
| external/incremental-implementation.md | 5 | used here | Detail page description of incremental-implementation |

## Consumes
none

## Produces
none

## When applied
Any change touching more than one file, or when delivering complex modifications incrementally.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`Rollback-friendly changes` is an architectural pattern paired with thin vertical slices, feature flags, and safe defaults to ensure changes can be reverted cleanly without cascading failures or orphaned state.
