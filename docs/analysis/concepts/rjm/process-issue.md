---
package: rjm
name: _process_issue
slug: process-issue
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/sweep_copilot_synthesis.py, sha256: 6e2ee8a4efeefcaf6a250ad485ea4cab481fdaf8d9024465b82c936a6a4360d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _process_issue

## Definition — verbatim
(used, not defined)

> "def _process_issue(issue_number: str) -> bool:" — scripts/ci/sweep_copilot_synthesis.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/sweep_copilot_synthesis.py | 25 | defined here | Helper function synthesizing context for one issue and removing the copilot-ready label upon success. |

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
defects: orphan

## Design notes
_process_issue is a private Python helper function coordinating per-issue context synthesis rather than an SDLC lifecycle concept.
