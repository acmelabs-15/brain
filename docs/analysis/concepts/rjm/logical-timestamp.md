---
package: rjm
name: logical timestamp
slug: logical-timestamp
kind: technique
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

# logical timestamp

## Definition — verbatim
(used, not defined)

> "Causal order requires explicit metadata: a vector clock, a logical timestamp, or a parent reference on each event. Wall-clock timestamps are not causal." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 120 | used here | Cited as metadata mechanism required for establishing causal order between events without wall clocks. |

## Consumes
Monotonically increasing sequence counters, event generation triggers.

## Produces
Monotonic integer tokens providing unambiguous causal sequencing within event streams.

## When applied
When event causality must be established across processes without relying on physical wall clocks.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A logical timestamp assigns monotonically increasing counter values to events based on internal state progression, ensuring safe causal ordering in distributed architectures.
