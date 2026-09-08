---
package: rjm
name: validate_dash_prohibition
slug: validate-dash-prohibition
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_dash.py, sha256: 706e2794af3fd28adc259ad441a2bcf0795a0e7675cd0093673750fc051a845d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_dash_prohibition

## Definition — verbatim
(used, not defined)

> "def validate_dash_prohibition(repo_root: Path) -> bool:" — scripts/validation/checks_dash.py:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_dash.py | 144 | defined here | Validates that no markdown files changed on the branch contain Unicode em-dash or en-dash characters. |

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
defects: script-bug

## Design notes
A Python validation function identifier in `checks_dash.py` enforcing markdown character policies rather than an agent lifecycle concept.
