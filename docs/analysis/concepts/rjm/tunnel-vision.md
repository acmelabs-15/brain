---
package: rjm
name: Tunnel Vision
slug: tunnel-vision
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Tunnel Vision

## Definition — verbatim
> "Only local context; operations and maintenance ignored" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 115 | defines | Tabulated under Time Dimension anti-patterns as evaluating only local context while ignoring operations and long-term maintenance. |

## Consumes
System boundary models, operational requirements, and cross-component dependencies.

## Produces
Requirement for comprehensive lifecycle impact analysis spanning deployment, monitoring, and ongoing maintenance.

## When applied
Applied during review when a decision is analyzed strictly within an isolated module without assessing global repository effects.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Tunnel Vision occurs when an architectural decision is scoped solely to the immediate component or service being modified, completely overlooking how the change affects deployment infrastructure, monitoring, security boundaries, and ongoing maintenance. In rjm, reviewers identify Tunnel Vision to ensure that localized solutions do not create systemic operational debt.
