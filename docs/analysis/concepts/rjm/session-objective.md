---
package: rjm
name: session.objective
slug: session-objective
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

# session.objective

## Definition — verbatim
(used, not defined)

> "session log's `session.objective`. If no active session log exists, derive" — .claude/commands/checkpoint.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 63 | used here | Extracted from the active session log to supply a fallback label when checkpoint arguments are omitted. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
active-session-log

## Implementation status
clean

## Design notes
A JSON schema field within session logs that stores the declared mission or goal of a development session rather than representing an independent lifecycle concept.
