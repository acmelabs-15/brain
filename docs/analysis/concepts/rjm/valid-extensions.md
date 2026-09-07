---
package: rjm
name: VALID_EXTENSIONS
slug: valid-extensions
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_skill_violation.py, sha256: afe11d459bd7604bb9ef80647f0efd016f7e19ac492cf6690322d1b21b457cf7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_EXTENSIONS

## Definition — verbatim
(used, not defined)

> "VALID_EXTENSIONS = frozenset({\".md\", \".py\", \".ps1\", \".psm1\"})" — scripts/detect_skill_violation.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_skill_violation.py | 49 | defined here | Constant frozenset defining the file extensions scanned for skill violations (.md, .py, .ps1, .psm1). |

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
defects: missing-path

## Design notes
VALID_EXTENSIONS is a Python script constant in detect_skill_violation.py specifying allowed file extensions for static scanning rather than an SDLC lifecycle concept.
