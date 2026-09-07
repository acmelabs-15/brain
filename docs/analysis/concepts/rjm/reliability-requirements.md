---
package: rjm
name: reliability requirements
slug: reliability-requirements
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reliability requirements

## Definition — verbatim
(used, not defined)

> "file size limits, and platform-specific reliability requirements with custom lints." — .claude/skills/taste-lints/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 15 | used here | Cited as platform-specific constraints enforced through custom static lints within the harness engineering quote. |

## Consumes
Platform specifications, runtime constraints, and system error handling policies.

## Produces
Resilient software implementations complying with platform reliability and fault-tolerance standards.

## When applied
Applied during software implementation and lint verification to guarantee platform-specific operational invariants.

## Sub-concepts
none

## Part of
harness-engineering

## Implementation status
defects: doc-drift

## Design notes
Platform-specific architectural and operational constraints enforced statically via lint rules to ensure software components meet uptime, safety, and fault-tolerance expectations.
