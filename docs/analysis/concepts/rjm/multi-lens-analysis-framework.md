---
package: rjm
name: Multi-Lens Analysis Framework
slug: multi-lens-analysis-framework
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-Lens Analysis Framework

## Definition — verbatim
> "Systematic application of 11 thinking models to skill design." — .claude/skills/skillforge/references/multi-lens-framework.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/multi-lens-framework.md | 1 | defined here | Title heading introducing the systematic thinking model analysis framework for skill design. |

## Consumes
User skill goals, task requirements, and problem statements.

## Produces
Multi-dimensional requirement analysis, anti-patterns, constraint boundaries, and architecture rationale.

## When applied
Applied during Phase 1 (Deep Analysis) of SkillForge when creating or significantly refactoring skills.

## Sub-concepts
- multi-lens-analysis

## Part of
skillforge

## Implementation status
clean

## Design notes
The Multi-Lens Analysis Framework prevents narrow single-perspective skill authoring by mandating that skill designers evaluate requirements through 11 mental models (such as First Principles, Inversion, Second-Order, Pre-Mortem, and Systems Thinking). This surfaces hidden edge cases and integration hazards early in design.
