---
package: rjm
name: ExternalReviewSource
slug: externalreviewsource
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ExternalReviewSource

## Definition — verbatim
(used, not defined)

> "class ExternalReviewSource(Enum):" — scripts/security/invoke_security_retrospective.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/invoke_security_retrospective.py | 46 | defined here | Enumeration defining external security review sources including Gemini, Manual, and Other. |

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
defects: orphan, doc-drift

## Design notes
`ExternalReviewSource` is a Python enumeration class identifier classifying review comment origins rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
