---
package: rjm
name: End
slug: end
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# End

## Definition — verbatim
> "**End**:Issue handoff if open|Update Serena|Lint|Commit|Check" — AGENTS.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 19 | defined here | Final session teardown gate requiring issue handoffs, memory updates, lint checks, and atomic commits. |

## Consumes
Session execution context, open issue state, memory entries, and uncommitted file modifications.

## Produces
Persisted issue handoff, synchronized persistent memory, clean lint status, and final commit.

## When applied
Mandatory completion checkpoint evaluated at the end of an agent work session or task completion.

## Sub-concepts
none

## Part of
gates

## Implementation status
clean

## Design notes
The terminal session teardown gate in rjm ensuring that agents update persistent memory, document handoffs for subsequent sessions, run style lints, and make clean atomic commits before shutting down.
