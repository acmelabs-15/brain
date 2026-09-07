---
package: rjm
name: Path Dependence
slug: path-dependence
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Path Dependence

## Definition — verbatim
> "### Path Dependence (Constraint Recognition)" — templates/agents/architect.shared.md:566

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 138 | used here | Subsection header in the Strategic Validation Checklist for evaluating irreversibility and historical constraints. |
| templates/agents/architect.shared.md | 48 | used here | Listed under Architecture Principles strategic knowledge guiding the architect persona to recognize irreversibility. |
| templates/agents/architect.shared.md | 566 | defined here | Section heading defining the path dependence constraint recognition protocol for architecture decisions. |

## Consumes
System architecture history, compatibility requirements, ecosystem dependencies, and training investments.

## Produces
Classification of architectural decisions into reversible versus irreversible actions with exit strategies.

## When applied
Evaluated when designing or reviewing architectural changes that carry long-term lock-in or migration costs.

## Sub-concepts
none

## Part of
strategic-validation-checklist

## Implementation status
defects: missing-path

## Design notes
An architectural mental model and evaluation lens in rjm that requires engineers and agents to recognize how past choices constrain present options, requiring explicit distinction between reversible and irreversible architectural commitments.
