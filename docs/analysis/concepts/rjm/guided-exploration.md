---
package: rjm
name: guided exploration
slug: guided-exploration
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# guided exploration

## Definition — verbatim
> "Covers architecture reviews, security assessments, and code quality evaluations through guided exploration, investigation planning, and synthesis." — .claude/skills/analyze/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 4 | defined here | Initial phase technique delegating codebase reconnaissance to Explore subagents. |

## Consumes
Target repository path and user investigation prompt.

## Produces
Codebase structural overview, relevant component listings, and initial candidate areas for Step 2 focus selection.

## When applied
Applied during Phase 1 (Step 1) of `analyze` prior to committing to specific investigation hypotheses.

## Sub-concepts
explore-agent

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`guided exploration` prevents the primary agent from saturating its own context window with raw file reads during initial discovery by dispatching lightweight Explore subagents and folding their summarized findings back into the state machine.
