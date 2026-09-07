---
package: rjm
name: Integration Planning
slug: integration-planning
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Integration Planning

## Definition — verbatim
> "### Step 8: Integration Planning (When User Accepts Recommendation)" — .claude/skills/programming-advisor/SKILL.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 146 | defined here | Process step providing project context detection, install commands, integration steps, starter code, and issue warnings upon recommendation acceptance. |

## Consumes
User acceptance of a recommended third-party package or internal component, and project workspace context.

## Produces
A complete integration plan detailing installation commands, configuration adjustments, new file scaffolding, and modification instructions.

## When applied
Applied during Step 8 of programming-advisor when a user accepts a recommended existing solution or asks how to add it.

## Sub-concepts
none

## Part of
programming-advisor

## Implementation status
clean

## Design notes
Integration planning bridges the gap between advisory recommendations and hands-on implementation. Instead of leaving developers to read documentation and figure out setup details, this workflow step inspects project context and provides exact installation commands, configuration scaffolding, and starter code to accelerate adoption of vetted solutions.
