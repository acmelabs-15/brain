---
package: rjm
name: CONTRADICTION_PATTERNS
slug: contradiction-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CONTRADICTION_PATTERNS

## Definition — verbatim
(used, not defined)

> "CONTRADICTION_PATTERNS = re.compile(" — scripts/validate_session_json.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 177 | defined here | Defined as a compiled regular expression matching evidence tokens that contradict checklist completion. |

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
defects: doc-drift, missing-path

## Design notes
`CONTRADICTION_PATTERNS` is a Python compiled regular expression constant in `scripts/validate_session_json.py` used to flag conflicting evidence phrases in checklist items rather than an SDLC lifecycle concept.
