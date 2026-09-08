---
package: rjm
name: support floor
slug: support-floor
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_python_syntax.py, sha256: cae50f12ab4aab7b54cb7ec16cb66639fed56024af29643a96fc6a935c749c2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# support floor

## Definition — verbatim
> "Blocking gate: every tracked Python file must parse at the support floor." — scripts/validation/validate_python_syntax.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_python_syntax.py | 2 | defined here | used here | Defined as a blocking gate requiring all tracked Python files to parse at the minimum execution floor. |
| scripts/validation/validate_python_syntax.py | 56 | defined here | Constant tuple setting the support floor to Python (3, 10). |
| scripts/validation/validate_python_syntax.py | 66 | defined here | Function returning the hook-execution portability floor tuple. |

## Consumes
All git-tracked Python files across the repository.

## Produces
A pass/fail validation verdict determining whether Python files are compatible with the baseline runtime.

## When applied
Executed during pre-PR validation and CI test workflows to prevent shipping syntax newer than the minimum supported interpreter.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The support floor enforces a minimum Python runtime compatibility level (Python 3.10) for all plugin hooks independently of the repository's higher development version (3.14). This prevents ambient execution hosts running older Python interpreters from encountering SyntaxError failures on import and denying tool calls.
