---
package: rjm
name: False Urgency
slug: false-urgency
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

# False Urgency

## Definition — verbatim
> "Non-existing context to create pseudo-problem" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 129 | defines | Tabulated under Magic Tricks anti-patterns as fabricating artificial context to manufacture a pseudo-problem requiring urgent resolution. |

## Consumes
Problem statement, business driver claims, and schedule urgency assertions.

## Produces
Skeptical review challenge requiring empirical evidence that a problem genuinely exists and requires immediate resolution.

## When applied
Evaluated during ADR review when dramatic or speculative urgency is cited to bypass thorough trade-off analysis.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
False Urgency is a rhetorical tactic where authors manufacture artificial crises, exaggerated external threats, or hypothetical emergencies to bypass rigorous peer scrutiny. In rjm, reviewers actively probe urgency claims, demanding verifiable evidence of operational bottlenecks or business constraints before approving architectural changes.
