---
package: rjm
name: Analysis Priority
slug: analysis-priority
kind: checklist
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Analysis Priority

## Definition — verbatim
> "## Analysis Priority" — .claude/agents/janitor.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 82 | defined here | Section heading listing the ordered five-step priority hierarchy for code analysis. |
| templates/agents/janitor.shared.md | 90 | defined here | Section heading defining the code analysis priority list across shared templates. |

## Consumes
Candidate tech debt targets across the codebase.

## Produces
A prioritized sequence of debt investigations: 1. Unused code, 2. Complexity, 3. Duplicate patterns, 4. Conditional logic, 5. Dependencies.

## When applied
When initiating a janitorial review to determine which areas of tech debt to investigate and address first.

## Sub-concepts
none

## Part of
janitor-agent

## Implementation status
clean

## Design notes
Defines the priority ordering for analyzing technical debt within a target codebase. By placing dead code deletion first and dependency removal last, it establishes an optimal return-on-effort gradient: eliminating unused code removes entire subsystems from consideration before spending effort simplifying remaining logic.
