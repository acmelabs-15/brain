---
package: addy
name: Written only
slug: written-only
kind: pattern
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

# Written only

## Definition — verbatim
> "1. **Written only.** `CONSTRAINTS.md` exists and agents read it. Costs nothing, catches the honest mistakes, relies on the agent complying." — skills/constraint-driven-development/SKILL.md:256

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 256 | defined here | First level of the constraint escalation path relying on agent compliance |

## Consumes
A written `CONSTRAINTS.md` file and pointer instructions in `AGENTS.md` or `CLAUDE.md`.

## Produces
Baseline documented constraints that rely on agent self-discipline without automated enforcement.

## When applied
Initial adoption stage when introducing quality constraints to a repository.

## Sub-concepts
none

## Part of
escalation-path, constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
The baseline tier of the constraint escalation path. Constraints are documented in markdown and communicated to agents via prompt instructions. It costs nothing to adopt and catches well-intentioned errors, but provides no mechanical verification if an agent forgets or ignores the rules.
