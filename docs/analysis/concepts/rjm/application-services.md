---
package: rjm
name: application services
slug: application-services
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

# application services

## Definition — verbatim
> "3. **Use Cases** (also called application services). Application-specific business rules. Each use case is one named operation the system performs on behalf of a caller." — .claude/skills/software-engineering-library/references/clean-architecture.md:18

## Also called — verbatim
`Use Cases` — .claude/skills/software-engineering-library/references/clean-architecture.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 18 | used here | Alternative terminology for the Use Cases layer coordinating application business rules. |

## Consumes
Caller requests, domain entities, and abstract ports.

## Produces
Executed business transactions and coordinated domain state updates.

## When applied
Applied when orchestrating application-level workflows across multiple domain entities.

## Sub-concepts
use-cases, use-case

## Part of
clean-architecture

## Implementation status
clean

## Design notes
application services is DDD and enterprise architecture terminology cited as an alternative name for the Use Cases layer in Clean Architecture. In rjm, application services provide entry-point-neutral coordination of lifecycle operations, preventing business logic from leaking into CLI commands or hook scripts.
