---
package: rjm
name: Quality Assurance
slug: quality-assurance
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/debug.md, sha256: 1ca17664f5023678bd614250d7725069bdfeb96b441ef8818dd96b2c83f388fc}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Assurance

## Definition — verbatim
> "## Phase 4: Quality Assurance" — .claude/agents/debug.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/debug.md | 50 | defined here | Section heading defining maintainability review, regression test addition, and final reporting. |
| templates/agents/debug.shared.md | 58 | defined here | Section heading defining the fourth phase of the debugging lifecycle in the shared agent template. |

## Consumes
Verified bug fix code, reproduction logs, and test execution results.

## Produces
Maintainability improvements, permanent regression test cases, and a final summary report documenting root cause and preventive measures.

## When applied
After a code fix passes verification testing, completing the debugging workflow.

## Sub-concepts
none

## Part of
debug

## Implementation status
clean

## Design notes
The fourth and final phase of the debugging lifecycle in rjm. It ensures that bug fixes do not introduce technical debt by enforcing maintainability reviews, mandating regression tests to prevent recurrence, and generating a structured final report documenting root causes and preventive steps.
