---
package: rjm
name: TestContentControlledPromptParity
slug: testcontentcontrolledpromptparity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TestContentControlledPromptParity

## Definition — verbatim
(used, not defined)

> "Parity is enforced by `tests/evals/test_form_factor_eval.py::TestContentControlledPromptParity`." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 104 | used here | Cited as the test asserting SHA equality between agent and content-controlled skill prompts. |

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
defects: cross-file-contradiction, internal-contradiction

## Design notes
A pytest test case identifier enforcing prompt SHA parity between agent and skill evaluation fixtures rather than an operational lifecycle concept.
