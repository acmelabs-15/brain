---
package: rjm
name: SAFE_FILENAME_PATTERN
slug: safe-filename-pattern
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/utils/path_validation.py, sha256: c2f4ac43ed5662e0fddce7be5e1a0e91c5e0592b931e84b4c7415cca2cd0e949}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SAFE_FILENAME_PATTERN

## Definition — verbatim
(used, not defined)

> "SAFE_FILENAME_PATTERN = re.compile(r\"^[a-zA-Z0-9_.-]+$\")" — scripts/utils/path_validation.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/path_validation.py | 15 | defined here | Compiled regular expression pattern matching safe filename characters (alphanumerics, underscore, hyphen, dot). |

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
A regular expression constant identifier used in path validation utilities rather than an agent lifecycle concept.
