---
package: addy
name: JSON payload
slug: json-payload
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/session-start-test.sh, sha256: db35bb3e69a98900dddb0c5b1c9ceb8e738cdeb17613ed50177fff7924d350d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# JSON payload

## Definition — verbatim
(used, not defined)
> "# session-start-test.sh - Tests for the SessionStart hook JSON payload" — hooks/session-start-test.sh:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/session-start-test.sh | 2 | used here | Comment description for the expected stdout format emitted by session-start.sh |

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
defects: script-bug, doc-drift (regression test crashes due to schema mismatch with session-start.sh)

## Design notes
General description of the JSON data structure produced by the session start hook in a test script header, not an agent lifecycle concept.
