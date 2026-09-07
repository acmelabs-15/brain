---
package: rjm
name: compare-and-set
slug: compare-and-set
kind: technique
package_phase: cross-phase
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

# compare-and-set

## Definition — verbatim
> "For mutable values, prefer compare-and-set or a versioned write." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 59 | used here | Recommended atomic mutation technique for mutable values to avoid lost-update anomalies. |

## Consumes
Expected existing value or state token, target updated value, underlying storage conditional write support.

## Produces
Atomic state transition or concurrency failure signal indicating state changed concurrently.

## When applied
When mutating shared records or configuration state where concurrent updates might overwrite changes.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Compare-and-set (CAS) is an optimistic concurrency control technique in rjm that ensures a shared mutable field is only updated if its current value matches an expected state, preventing the lost-update anomaly during parallel agent execution.
