---
package: rjm
name: DRY Principle
slug: dry-principle
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DRY Principle

## Definition — verbatim
> "Every piece of knowledge must have a single, unambiguous, authoritative representation within the system." — .claude/skills/golden-principles/references/design-dry-principle.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 131 | used here | Cited as the core architectural principle justifying an index-style reference document rather than duplicating constraint definitions. |
| .claude/skills/golden-principles/references/design-dry-principle.md | 7 | defined here | Dedicated reference document defining the DRY principle, its scope, common violations, and exceptions. |
| .claude/skills/golden-principles/SKILL.md | 134 | used here | Catalogued as a core design principle reference within the golden-principles skill. |

## Consumes
System knowledge, data models, business logic, configuration files, and architectural documentation.

## Produces
Single authoritative representations, extracted methods/constants/classes, and consolidated index structures.

## When applied
Applied during code and architecture review whenever duplicate logic, copy-pasted structures, or redundant documentation sources are identified.

## Sub-concepts
rule-of-three, extract-constants, extract-methods, extract-classes

## Part of
golden-principles

## Implementation status
defects: missing-path

## Design notes
The DRY (Don't Repeat Yourself) principle is a foundational engineering standard in rjm that mandates a single authoritative representation for every piece of system knowledge. It applies across code, architecture decisions, and operational documentation. In governance analysis, it drives the decision to maintain authoritative rationale in individual ADRs while referencing them via lightweight indexes, preventing duplicate maintenance burdens while preserving unambiguous truth.
