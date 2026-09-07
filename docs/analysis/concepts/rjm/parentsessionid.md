---
package: rjm
name: parentSessionId
slug: parentsessionid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/reconstruct_trace.py, sha256: ca583e5d73a03980877473ec231b4879af5011e2718eb188e5eded7369b9f081}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parentSessionId

## Definition — verbatim
(used, not defined)

> "(traceId, parentSessionId) and reconstructs the full delegation tree." — scripts/traceability/reconstruct_trace.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/reconstruct_trace.py | 5 | used here | Metadata link in session logs pointing to the parent session that delegated the execution. |

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
A session log metadata identifier pointing to the parent session that delegated a task, classified as `name-only` per D-023.
