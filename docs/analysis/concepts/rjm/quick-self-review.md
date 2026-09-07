---
package: rjm
name: Quick Self-Review
slug: quick-self-review
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick Self-Review

## Definition — verbatim
> "Before opening a PR that crosses or creates a layer boundary, walk this list." — .claude/skills/software-engineering-library/references/clean-architecture.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 165 | defined here | Pre-PR checklist verifying layer dependency directions, adapter mapping, and port usage. |
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 165 | defined here | Pre-PR checklist auditing data ownership, idempotency keys, consistency models, and schema evolution. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 252 | defined here | Pre-PR checklist ensuring changes respect bounded contexts, ubiquitous language, and aggregate invariants. |

## Consumes
Pull request code diffs, architectural layer boundaries, data persistence paths, domain model modifications.

## Produces
Self-review audit assessment confirming compliance with architectural, consistency, and domain boundary standards.

## When applied
Before opening a pull request that crosses architectural layers, modifies write paths, or updates domain models.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
defects: doc-drift

## Design notes
Quick Self-Review serves as a standardized pre-PR quality gate across the software engineering library reference guides in rjm. By forcing developers and agents to verify layer dependencies, consistency guarantees, and domain language alignment before opening pull requests, it catches architectural drift and boundary violations early in the authoring lifecycle.
