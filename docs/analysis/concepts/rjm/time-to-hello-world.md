---
package: rjm
name: Time-to-Hello-World
slug: time-to-hello-world
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

# Time-to-Hello-World

## Definition — verbatim
> "Measure Time-to-Hello-World (TTHW) only when the target supports a runnable example." — .claude/skills/dx-review/SKILL.md:90-91

## Also called — verbatim
`TTHW` — .claude/skills/dx-review/SKILL.md:90

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 9 | defines | Defined as an empirical metric measuring onboarding duration and setup friction. |

## Consumes
Quickstart instructions, getting-started commands, setup scripts, and start/end timing boundaries.

## Produces
A quantitative time duration measurement (in minutes) accompanied by an evidence label (TESTED, PARTIAL, or N/A with rationale).

## When applied
Measured during Step 1 (Getting Started / Onboarding Audit) whenever the evaluated target provides a runnable sample project.

## Sub-concepts
none

## Part of
onboarding-audit, dx-review

## Implementation status
defects: orphan

## Design notes
An empirical benchmark metric in rjm's dx-review skill that captures the elapsed time required for a new developer to reach a functioning execution milestone. It quantifies early onboarding friction, requiring concrete start/end timestamps and prohibiting hardcoded estimates without execution.
