---
package: rjm
name: Domain
slug: domain
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Domain

## Definition — verbatim
> "the problem space the system addresses (orchestrating AI agents to land changes in a repository)." — .claude/skills/software-engineering-library/references/domain-driven-design.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-inventory-audit.md | 15 | defined here | Summary table category classifying project-specific workflows, conventions, and configuration. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 22 | defined here | Defines the enumeration of Cynefin problem complexity domains. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 14 | defined here | Defines Domain as the specific problem space that the software system addresses. |

## Consumes
Business objectives, user workflows, problem specifications, and repository-specific conventions.

## Produces
Domain models, bounded contexts, ubiquitous language terms, and project-specific customizations.

## When applied
Applied when establishing domain models, bounded contexts, or classifying problem space complexity.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, unimplemented-feature

## Design notes
Domain in rjm encompasses both the domain-driven design definition of the targeted business or operational problem space and the repository-specific customization layer that tailors generic multi-agent capabilities to a specific codebase.
