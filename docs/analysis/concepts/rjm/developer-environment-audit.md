---
package: rjm
name: Developer Environment Audit
slug: developer-environment-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Developer Environment Audit

## Definition — verbatim
> "README setup instructions: steps, prerequisites, platform coverage." — .claude/skills/dx-review/SKILL.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 140 | defines | Defined as Step 6 of the audit process evaluating local development setup instructions and toolchain configuration. |

## Consumes
Repository README setup sections, prerequisite declarations, CI/CD pipeline definitions, type declarations, and test fixture suites.

## Produces
A Dev Environment dimension score (0-10, typically INFERRED) detailing environmental friction or missing configuration details.

## When applied
Executed as Step 6 of dx-review to evaluate how easily developers can set up, build, and test the project locally.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
Step 6 of rjm's dx-review audit procedure that reviews the developer environment configuration. It inspects whether prerequisites, local build setups, container configurations, and test runners are clearly documented and robust across platforms.
