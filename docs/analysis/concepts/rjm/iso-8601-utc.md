---
package: rjm
name: ISO 8601 UTC
slug: iso-8601-utc
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ISO 8601 UTC

## Definition — verbatim
(used, not defined)

> "Also record the full ISO 8601 UTC time" — .claude/commands/checkpoint.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 49 | used here | Specified as the required timestamp serialization format for checkpoint document bodies. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
checkpoint-command

## Implementation status
clean

## Design notes
A standardized date-time representation format mandated for consistent timestamp recording in session checkpoints rather than an independent development lifecycle concept.
