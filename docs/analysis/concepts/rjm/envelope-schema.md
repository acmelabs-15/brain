---
package: rjm
name: envelope schema
slug: envelope-schema
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_output.py, sha256: b92bfbfc72a709b2762ae3121e5bbe8d7c78374cf6562003156836754af3ca2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# envelope schema

## Definition — verbatim
(used, not defined)

> "Validate skill script output against the standard envelope schema (ADR-056, ADR-103)." — scripts/validate_skill_output.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 1 | used here | Docstring references standard envelope schema governing structured skill output JSON envelopes. |

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
defects: doc-drift

## Design notes
`envelope schema` is an architectural schema label identifying the ADR-056/ADR-103 JSON contract structure for skill script output rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
