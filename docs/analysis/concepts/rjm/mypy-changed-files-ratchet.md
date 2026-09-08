---
package: rjm
name: Mypy Changed Files (ratchet)
slug: mypy-changed-files-ratchet
kind: gate
package_phase: cross-phase
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

# Mypy Changed Files (ratchet)

## Definition — verbatim
> "Mypy Changed Files (ratchet)" — scripts/validation/pre_pr_sequence.py:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 250 | defined here | Pre-PR validation gate enforcing static type checking via mypy on changed Python files under ratchet semantics. |

## Consumes
Changed Python files relative to the base ref and the recorded mypy ratchet baseline.

## Produces
Type check pass/fail gate verdict ensuring no new mypy type errors are introduced.

## When applied
Executed during the shift-left pre-PR validation sequence before branch push or pull request creation.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Mypy Changed Files (ratchet) is a shift-left pre-PR quality gate (Issue #4674) that runs mypy type checking against only modified Python files rather than the entire repository. By enforcing ratchet semantics where violation counts cannot increase, it catches type regressions before push CI without requiring an immediate, repository-wide type-checking overhaul of legacy modules.
