---
package: rjm
name: transaction script
slug: transaction-script
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

# transaction script

## Definition — verbatim
> "Add the structure or accept that you are writing a transaction script and keep it short." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 129 | used here | Pragmatic pattern guidance recommending short transaction scripts when formal patterns are not warranted. |

## Consumes
Procedural service requests and database queries without domain modeling abstractions.

## Produces
Straightforward procedural execution of a single business transaction.

## When applied
Applied when operations are simple, isolated, and do not warrant the architectural overhead of rich domain models or multi-layered patterns.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Transaction Script organizes business logic as a single procedural routine handling a specific request from start to finish. In rjm, it represents an acceptable pragmatic approach for simple operations provided it remains short and does not accumulate complex business branching.
