---
package: rjm
name: pass_when_python
slug: pass-when-python
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pass_when_python

## Definition — verbatim
> "Provide `pass_when_python` as an escape hatch. Evaluated with `eval`" — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 48 | defined here | Defines the restricted Python eval escape hatch for complex review completion criteria |

## Consumes
Python expression string and verifier JSON output.

## Produces
Boolean evaluation result via restricted Python `eval` against an empty `__builtins__` dictionary.

## When applied
Used when a PR review criterion requires complex logic exceeding the expressiveness of the standard `pass_when` DSL.

## Sub-concepts
none

## Part of
pass-when-dsl

## Implementation status
defects: missing-path, other

## Design notes
pass_when_python is an escape-hatch configuration option for evaluating verifier results using Python's eval function against an empty `__builtins__` environment. In rjm's architecture, it isolates complex evaluation logic while keeping common review criteria safely within the declarative DSL.
