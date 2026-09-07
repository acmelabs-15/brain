---
package: rjm
name: tolerate-external
slug: tolerate-external
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/assign_bot_reviewer.py, sha256: 16383cb10afb0de419d0af21fc4c6eae32b02146e40224606224d23cabe6f1fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tolerate-external

## Definition — verbatim
(used, not defined)

> "``--tolerate-external`` downgrades exit 3 to exit 0 after printing a" — .github/scripts/assign_bot_reviewer.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/assign_bot_reviewer.py | 26 | defined here | Command-line option documented as downgrading exit 3 (external rate limit failures) to exit 0 with a warning. |

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
tolerate-external is a command-line flag identifier for handling non-critical external API failures rather than a lifecycle concept.
