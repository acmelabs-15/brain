---
package: addy
name: session cookie
slug: session-cookie
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/using-agent-skills/incident.md, sha256: e0fa777f873d7616cd6bafa9ff3c9c35b70124ab8a8c05608f785bcab760111c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# session cookie

## Definition — verbatim
(used, not defined)

> "request reaches the authentication callback, then fails before a session cookie" — evals/fixtures/using-agent-skills/incident.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/using-agent-skills/incident.md | 4 | used here | Web authentication state mechanism mentioned in an incident evaluation fixture |

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
Standard web authentication mechanism mentioned in an incident evaluation fixture; not a development lifecycle concept.
