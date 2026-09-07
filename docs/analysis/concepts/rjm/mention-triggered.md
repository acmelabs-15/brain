---
package: rjm
name: mention-triggered
slug: mention-triggered
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mention-triggered

## Definition — verbatim
(used, not defined)

> "mention-triggered" — .github/scripts/invoke_pr_maintenance.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 41 | defined here | Configures bot accounts that trigger upon mentions (such as Copilot SWE agent) for PR triage. |

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
defects: internal-contradiction, orphan

## Design notes
mention-triggered is a bot classification category label identifying mention-activated coding agents rather than an SDLC lifecycle concept, classified as name-only per D-023.
