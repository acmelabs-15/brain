---
package: rjm
name: Capacity by hope
slug: capacity-by-hope
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Capacity by hope

## Definition — verbatim
> "**Capacity by hope**: assumed limits with no enforcement (queue depth, connection count, retry count)." — .claude/skills/software-engineering-library/references/release-it.md:225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 225 | defined here | Defined as a stability anti-pattern relying on wishful assumptions about load without programmatic enforcement of limits. |

## Consumes
Unbounded queues, unconstrained thread pools, open retry loops, and unmonitored buffers.

## Produces
Sudden out-of-memory errors, connection starvation, and unexpected production crashes under load.

## When applied
Identified and rejected during code reviews whenever resource consumption limits lack strict programmatic enforcement.

## Sub-concepts
none

## Part of
stability-anti-pattern

## Implementation status
defects: missing-path

## Design notes
An anti-pattern where systems operate under the optimistic assumption that traffic or queue depth will remain manageable, omitting hard programmatic bounds. Enforcing explicit limits on queues, timeouts, and retry attempts in rjm removes capacity-by-hope vulnerabilities.
