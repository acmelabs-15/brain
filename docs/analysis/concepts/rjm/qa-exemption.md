---
package: rjm
name: QA exemption
slug: qa-exemption
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QA exemption

## Definition — verbatim
> "Shared investigation-only allowlist for ADR-034 QA exemption." — scripts/modules/investigation_allowlist.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 1 | used here | Policy mechanism exempting investigation artifacts from standard QA requirements per ADR-034. |

## Consumes
Commit diffs and file paths modified during an investigation session.

## Produces
Exemption verdict permitting merge without full test suite execution when changes are investigation-only.

## When applied
Evaluated during commit validation and PR review checks when sessions declare the ADR-034 QA exemption.

## Sub-concepts
investigation-artifact

## Part of
qa

## Implementation status
clean

## Design notes
QA exemption allows exploratory and diagnostic work to be merged without requiring production test suites, provided all touched paths fall within the approved investigation allowlist.
