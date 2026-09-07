---
package: rjm
name: Goals and Non-Goals
slug: goals-and-non-goals
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Goals and Non-Goals

## Definition — verbatim
(used, not defined)

> "## Goals and Non-Goals" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 7 | defined here | Section heading grouping explicit project objectives alongside deliberate scope exclusions. |

## Consumes
Product requirements, project scope definitions, and architectural boundaries.

## Produces
Structured declaration of intended outcomes paired with explicit boundary exclusions.

## When applied
Applied during architecture documentation to establish project scope boundaries.

## Sub-concepts
goals, non-goals

## Part of
architecture

## Implementation status
clean

## Design notes
Goals and Non-Goals pairs what a system is built to achieve directly with what it intentionally refuses to do. Grouping these complementary sections prevents scope creep, clarifies architectural trade-offs, and gives reviewers an objective standard to reject out-of-scope feature proposals.
