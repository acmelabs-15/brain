---
package: rjm
name: Use Cases
slug: use-cases
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Use Cases

## Definition — verbatim
> "3. **Use Cases** (also called application services). Application-specific business rules. Each use case is one named operation the system performs on behalf of a caller." — .claude/skills/software-engineering-library/references/clean-architecture.md:18

## Also called — verbatim
`application services` — .claude/skills/software-engineering-library/references/clean-architecture.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 18 | defined here | Application-specific business rule layer coordinating entity operations and transaction boundaries. |

## Consumes
Entity domain objects, abstract ports, and caller requests.

## Produces
Orchestrated domain operations, committed units of work, and execution results.

## When applied
Applied when an operation crosses multiple entities, requires transactional integrity, or serves multiple external entry points.

## Sub-concepts
use-case, abstract-ports, unit-of-work

## Part of
clean-architecture, the-dependency-rule

## Implementation status
clean

## Design notes
Use Cases represent application-specific business operations that orchestrate domain entities and external ports without coupling to delivery mechanisms. In rjm, lifecycle commands like /spec, /plan, /build, and /review function as canonical use cases orchestrating underlying agent tasks and repository state changes.
