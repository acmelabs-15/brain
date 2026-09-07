---
package: rjm
name: Forward compatible
slug: forward-compatible
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

# Forward compatible

## Definition — verbatim
> "old code reads new data, ignoring fields it does not understand." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 20 | defined here | Defined in core vocabulary as the property where un-upgraded code reads newer data by ignoring unknown fields. |

## Consumes
Permissive schema parsers, optional field schemas, un-upgraded reader implementations.

## Produces
Data formats that allow phased rollout without breaking running un-upgraded components.

## When applied
When adding new fields to persisted payloads, protocol envelopes, or inter-agent messages.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Forward compatibility in rjm guarantees that older running agents, tools, or third-party plugins do not crash when encountering newly introduced JSON fields, allowing safe incremental rollouts. Readers must be built to ignore unfamiliar attributes rather than failing validation.
