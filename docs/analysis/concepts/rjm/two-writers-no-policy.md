---
package: rjm
name: Two writers, no policy
slug: two-writers-no-policy
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Two writers, no policy

## Definition — verbatim
> "- **Two writers, no policy**: two components write to the same field with no documented conflict rule. Pick a SoR or write a CRDT." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 157 | defined here | Defined as an anti-pattern where concurrent components update identical fields without conflict resolution policies. |

## Consumes
Shared state fields, concurrent writer processes.

## Produces
State corruption, race conditions, or silent data overwrite anomalies.

## When applied
Identified during code review or architecture design when multiple components concurrently modify shared fields without an authoritative system of record or CRDT.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift

## Design notes
Two writers, no policy is a distributed concurrency anti-pattern where multiple components write to the same field without defined reconciliation rules, resolved in rjm by assigning an unambiguous System of Record (SoR) or conflict-free replicated data types.
