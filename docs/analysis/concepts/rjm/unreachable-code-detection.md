---
package: rjm
name: Unreachable Code Detection
slug: unreachable-code-detection
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Unreachable Code Detection

## Definition — verbatim
> "Unreachable Code Detection" — scripts/validation/pre_pr_sequence.py:228

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 228 | defined here | Pre-PR validation gate scanning Python ASTs for unreachable code, deduplicated with pre-push job python-unreachable-statements. |

## Consumes
Tracked Python source and test files across the repository.

## Produces
Pass/fail validation verdict ensuring no unreachable statements exist after terminal return or raise statements.

## When applied
During pre-PR validation sequence and pre-push fast-stage execution.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Static analysis gate that inspects Python ASTs to detect and reject unreachable statements, ensuring that dead code after control flow terminations is caught before push.
