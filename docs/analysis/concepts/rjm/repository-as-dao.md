---
package: rjm
name: Repository as DAO
slug: repository-as-dao
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Repository as DAO

## Definition — verbatim
> "**Repository as DAO**: methods named `executeQuery`, `runUpdate`, or `getConnection`. Replace with named, intention-revealing operations." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 137 | defined here | Defined as an anti-pattern where repository abstractions expose low-level query execution methods rather than domain-intention-revealing operations. |

## Consumes
none

## Produces
none

## When applied
Applied during design and code review of persistence abstractions and repository interfaces.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural anti-pattern discouraging the degradation of repositories into generic data access objects that expose raw connection or query-level semantics instead of collection-oriented, intention-revealing domain operations.
