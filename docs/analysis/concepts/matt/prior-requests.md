---
package: matt
name: Prior requests
slug: prior-requests
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prior requests

## Definition — verbatim
> "## Prior requests" — skills/engineering/triage/OUT-OF-SCOPE.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/OUT-OF-SCOPE.md | 49 | defined here | Defines the section in an out-of-scope record listing links and summaries of closed duplicate issues. |

## Consumes
Issue tracker identifiers and descriptions of closed duplicate feature requests.

## Produces
An audit log of prior requested issues within `.out-of-scope/<concept>.md`.

## When applied
Applied whenever closing duplicate issues against an existing out-of-scope rejection document.

## Sub-concepts
none

## Part of
out-of-scope

## Implementation status
clean

## Design notes
A dedicated section within an `.out-of-scope/<concept>.md` document that catalogs all previous issues requesting the rejected feature. It provides an audit trail of recurring demand, demonstrating repeated historical evaluation and connecting separate conversations to the single canonical decision rationale.
