---
package: addy
name: quality gates
slug: quality-gates
kind: gate
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# quality gates

## Definition — verbatim
(used, not defined)

> "The user asks to \"set up constraints\", \"add quality gates\", \"define our standards\", or \"stop the agent shipping junk\"" — skills/constraint-driven-development/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 23 | used here | User trigger phrase prompting the application of constraint-driven development |

## Consumes
User request and project quality standards.

## Produces
Automated verification gates that halt development pipelines when standards are violated.

## When applied
Applied when establishing repository guardrails or protecting main branches against autonomous loops.

## Sub-concepts
floor, floor-guard

## Part of
constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
Automated verification checkpoints deployed across the lifecycle to prevent substandard or unverified code from progressing to production. In constraint-driven development, quality gates are codified as machine-checkable commands with explicit numerical thresholds.
