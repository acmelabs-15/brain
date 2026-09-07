---
package: rjm
name: devils_advocate
slug: devils-advocate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# devils_advocate

## Definition — verbatim
(used, not defined)

> "<lens>devils_advocate</lens>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 22 | used here | Listed as an analytical lens applied during multi-lens questioning in CVA skill development. |

## Consumes
Proposed architectural decisions, pattern selections, or requirements models.

## Produces
Counter-arguments, vulnerability probes, alternative explanations, edge-case challenges.

## When applied
During questioning rounds and architectural critiques to actively challenge prevailing assumptions.

## Sub-concepts
none

## Part of
multi-lens-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
devils_advocate is an analytical lens within rjm's multi-lens review framework that systematically generates opposing arguments and stress-tests design assumptions. In CVA analysis and specification workflows, it forces reviewers to challenge why an abstraction is necessary, propose simpler alternatives, and expose hidden weaknesses before code is written. Without this lens, confirmation bias could lead teams to accept flawed abstractions and unverified designs.
