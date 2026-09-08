---
package: rjm
name: Subprocess Encoding Convention
slug: subprocess-encoding-convention
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

# Subprocess Encoding Convention

## Definition — verbatim
> "Subprocess Encoding Convention" — scripts/validation/pre_pr_sequence.py:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 232 | defined here | Pre-PR validation gate enforcing explicit character encoding specifications in subprocess calls. |

## Consumes
Python script invocations calling subprocess APIs across repository scripts.

## Produces
Pass/fail validation verdict ensuring all subprocess executions explicitly specify text encoding.

## When applied
During pre-PR validation sequence execution prior to pull request submission.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Shift-left governance gate that ensures all subprocess executions specify explicit character encodings, preventing platform-specific default encoding bugs between Windows and POSIX systems.
