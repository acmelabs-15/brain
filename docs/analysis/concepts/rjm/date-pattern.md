---
package: rjm
name: DATE_PATTERN
slug: date-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/scripts/validate_operating_model.py, sha256: 99f44b417e6f3b715e0579caf73524caa79c26fa8cf7887e0fda9f0a1de44a54}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DATE_PATTERN

## Definition — verbatim
(used, not defined)

> "DATE_PATTERN = re.compile(r\"^\d{4}-\d{2}-\d{2}$\")" — .claude/skills/work-operating-model/scripts/validate_operating_model.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/scripts/validate_operating_model.py | 56 | defined here | Compiled regular expression constant validating ISO 8601 date strings. |

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
A regular expression constant identifier (`DATE_PATTERN`) used to validate date formats in operating model documents, classified as `name-only` per D-023.
