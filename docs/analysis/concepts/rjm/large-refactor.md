---
package: rjm
name: Large refactor
slug: large-refactor
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/quality-boy-scout-rule.md, sha256: fe632e02d3b667f3f21fe6336aefb6747e671955e195820dc4a6bca764b4a6aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Large refactor

## Definition — verbatim
> "| Large refactor | Dedicated task with plan | Restructure module boundaries |" — .claude/skills/analyze/references/quality-boy-scout-rule.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/quality-boy-scout-rule.md | 56 | defined here | Defined in scope classification table as a major restructuring requiring a dedicated task with an execution plan (e.g. restructuring module boundaries). |

## Consumes
Architectural findings, structural debt assessments, module boundary redesign proposals.

## Produces
Dedicated backlog task, structured refactoring plan, and isolated delivery branch.

## When applied
Applied when an improvement touches module boundaries or multiple components, requiring planned execution rather than opportunistic alteration.

## Sub-concepts
none

## Part of
quality-boy-scout-rule

## Implementation status
defects: missing-path

## Design notes
Large refactor acts as a containment boundary in rjm's quality methodology, preventing agents from opportunistically expanding task scope into major restructurings and instead requiring formal planning and backlog allocation.
