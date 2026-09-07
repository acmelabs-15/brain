---
package: rjm
name: Phase 3: APPLICABILITY
slug: phase-3-applicability
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 3: APPLICABILITY

## Definition — verbatim
> "│ Phase 3: APPLICABILITY (BLOCKING)                               │" — .claude/skills/research-and-incorporate/SKILL.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 102 | defined here | Defined in process diagram as the third blocking phase mapping integration points and prioritizing applications. |

## Consumes
Completed Phase 2 analysis document.

## Produces
Detailed applicability section mapping concrete integration points across agents, protocols, memory, and skills.

## When applied
Executed after Phase 2 quality gates are satisfied in research-and-incorporate.

## Sub-concepts
constraint-and-governance, skills-and-automation, phase-3-verification

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The third phase of research-and-incorporate, evaluating how external research findings specifically apply to repository architecture, agent behaviors, and development workflows.
