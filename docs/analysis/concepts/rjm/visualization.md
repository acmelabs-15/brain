---
package: rjm
name: Visualization
slug: visualization
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Visualization

## Definition — verbatim
> "Render progress or status" — .claude/skills/skillforge/references/script-integration-framework.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 82 | defined here | Defines Visualization as a script category for rendering progress indicators and status dashboards. |

## Consumes
Execution metrics, task status states, progress counters, or hierarchy trees.

## Produces
Terminal-rendered status icons, progress bars, and hierarchical ASCII trees.

## When applied
When scripts or workflows need to communicate progress or current state visually to operators or monitoring logs.

## Sub-concepts
progress-visualization

## Part of
script-categories

## Implementation status
clean

## Design notes
Visualization scripts provide immediate, human- and agent-observable feedback during execution through lightweight ASCII progress bars and status icons without external graphical dependencies.
