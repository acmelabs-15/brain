---
package: rjm
name: Session-Level Change Detection
slug: session-level-change-detection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session-Level Change Detection

## Definition — verbatim
> "Option 1: Session-Level Change Detection" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 44 | defined here | Analyzed and rejected as Option 1 in architectural assessment due to git session boundary complexity. |

## Consumes
Git commit ranges, session boundary metadata, and working tree commit logs.

## Produces
Scoped change diffs attributed to a specific agent session rather than the entire branch.

## When applied
Evaluated during protocol validation design to isolate changes made in a single session from previous branch commits.

## Sub-concepts
none

## Part of
qa-validation

## Implementation status
defects: orphan, missing-path

## Design notes
Session-Level Change Detection was an evaluated mechanism in rjm to determine whether an individual agent session modified code files rather than checking whole-branch git history. While conceptually sound, it was rejected as overengineered because git does not natively track session boundaries across multiple commits, leading instead to the adoption of explicit investigation markers and staged file checks.
