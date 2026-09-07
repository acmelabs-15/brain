---
package: rjm
name: _anthropic_api.py
slug: anthropic-api-py
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

# _anthropic_api.py

## Definition — verbatim
(used, not defined)

> "The harness uses the repo's own `call_api` transport (`scripts/eval/_anthropic_api.py`), not a vendor SDK." — .agents/architecture/ADR-075-form-factor-eval-methodology.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 136 | used here | Cited as the local API transport module used by evaluation harness. |

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
A script file path for the internal API transport module rather than an operational lifecycle concept.
