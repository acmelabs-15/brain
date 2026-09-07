---
package: rjm
name: pass_when DSL
slug: pass-when-dsl
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

# pass_when DSL

## Definition — verbatim
(used, not defined)

> "# ADR-059: /pr-review Completion Gate Dispatcher and pass_when DSL" — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 12 | defined here | ADR title introducing the lightweight expression DSL for PR review completion gate evaluation |

## Consumes
JSON output emitted by verifier commands.

## Produces
Boolean pass/fail verdict for each PR review criterion without running arbitrary code.

## When applied
Applied during PR review completion gate evaluation to check criteria expressions.

## Sub-concepts
pass-when

## Part of
dispatcher

## Implementation status
defects: missing-path, other

## Design notes
pass_when DSL is a lightweight, safe expression language for evaluating PR review verifier outputs against acceptance criteria without arbitrary code execution risk. In rjm's architecture, using this DSL replaces subjective LLM self-attestation with deterministic condition matching.
