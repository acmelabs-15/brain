---
package: rjm
name: Highest-Risk Surfaces
slug: highest-risk-surfaces
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Highest-Risk Surfaces

## Definition — verbatim
> "## Highest-Risk Surfaces" — .claude/skills/security-review/SKILL.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 174 | defined here | Checklist enumerating critical exposure areas (CI/CD workflows, plaintext secrets, agentic boundaries) requiring automatic blocks or strict mitigation. |

## Consumes
Code diffs affecting workflows, secrets, or agent input boundaries.

## Produces
Automatic block or conditional review requirements for high-risk modifications.

## When applied
Applied during Phase 1 and Phase 2 of security review to detect modifications to sensitive system infrastructure.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
A high-priority review checklist highlighting system areas where errors carry catastrophic impact. It specifies automatic blocks for exposed secrets, unquoted variables or dynamic command construction in CI workflows, and unmitigated prompt-injection or goal-hijack vectors along agentic boundaries.
