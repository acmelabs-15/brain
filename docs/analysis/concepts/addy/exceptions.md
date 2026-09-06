---
package: addy
name: Exceptions
slug: exceptions
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Exceptions

## Definition — verbatim
> "## Exceptions" — skills/constraint-driven-development/SKILL.md:133

## Also called — verbatim
> "a new Exceptions row." — skills/constraint-driven-development/references/floor-guard.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 10 | used here | Listed in the contract as a detected move when a change introduces an unauthorized new Exceptions row. |
| skills/constraint-driven-development/SKILL.md | 133 | defined here | Heading for the structured exemptions table within CONSTRAINTS.md tracking bounded rule waivers. |

## Consumes
Tracked technical debt, rule waiver justifications, ticket references, designated owner, and expiration date.

## Produces
An auditable markdown table in `CONSTRAINTS.md` documenting authorized, time-bounded exceptions to project quality rules.

## When applied
When an intentional architectural compromise or legacy code migration requires exempting specific paths from an otherwise strict constraint.

## Sub-concepts
none

## Part of
constraints-md, constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
A structured governance section in `CONSTRAINTS.md` recording an ID, rule, path, reason, owner, and expiration date for explicit rule exemptions, preventing unmonitored inline suppressions and ensuring waivers remain temporary and tracked.
