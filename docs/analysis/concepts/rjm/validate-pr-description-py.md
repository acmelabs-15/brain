---
package: rjm
name: validate_pr_description.py
slug: validate-pr-description-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/parse_pr_standards.py, sha256: adc2d57b18d0bd54ff66d68244d1aaf1487755715dbc172042fc15d3442415f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_pr_description.py

## Definition — verbatim
(used, not defined)

> "Runs validate_pr_description.py and writes parsed results to GITHUB_OUTPUT." — .github/scripts/parse_pr_standards.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/parse_pr_standards.py | 4 | used here | Docstring notes that the parser runs `validate_pr_description.py` and extracts standards results for GitHub Actions. |

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
defects: orphan

## Design notes
A script filename reference cited in workflow parser documentation rather than an independent lifecycle concept.
