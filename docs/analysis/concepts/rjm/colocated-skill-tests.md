---
package: rjm
name: Colocated Skill Tests
slug: colocated-skill-tests
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

# Colocated Skill Tests

## Definition — verbatim
> "Colocated Skill Tests" — scripts/validation/pre_pr_sequence.py:317

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 317 | defined here | Pre-PR gate blocking new test files from being placed inside customer-shipped skill directories. |

## Consumes
File trees of customer-shipped skill directories under .claude/skills/.

## Produces
Pass/fail gate verdict preventing test files from entering shipped skill distributions.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Colocated Skill Tests is a packaging hygiene gate (Issue #4838) preventing test files from being colocated within customer-shipped skill folders. It enforces that test suites remain in dedicated testing directories, ensuring clean and minimal skill distribution packages.
