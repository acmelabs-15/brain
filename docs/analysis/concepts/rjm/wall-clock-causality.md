---
package: rjm
name: Wall-clock causality
slug: wall-clock-causality
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

# Wall-clock causality

## Definition — verbatim
> "- **Wall-clock causality**: deciding \"A happened before B\" by comparing timestamps from two machines. Use logical clocks or explicit parent links." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:163

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 163 | defined here | Defined as an anti-pattern where event causality is determined by comparing physical machine timestamps. |

## Consumes
Distributed event logs, multi-host physical timestamps.

## Produces
Inverted causal sequences, clock skew bugs, and incorrect concurrency resolution.

## When applied
Flagged when distributed event sequencing logic relies on comparing physical wall-clock timestamps across different machines.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift

## Design notes
Wall-clock causality is the anti-pattern of using physical timestamps from separate machines to infer event ordering, creating subtle bugs due to clock drift that must be solved using logical timestamps or explicit parent causal references.
