---
package: rjm
name: timeline analysis
slug: timeline-analysis
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# timeline analysis

## Definition — verbatim
(used, not defined)

> "Uses Five Whys, timeline analysis, and learning matrices." — templates/agents/retrospective.shared.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/retrospective.shared.md | 3 | used here | Retrospective framework technique used to construct chronological execution traces. |

## Consumes
Agent execution logs, timestamped tool call sequences, and session outputs.

## Produces
Chronological execution timeline mapping agent actions, state transitions, and failure points.

## When applied
Applied during the data gathering phase of a retrospective to establish an accurate execution sequence.

## Sub-concepts
none

## Part of
reflective-analyst

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A retrospective analysis technique that constructs an objective chronological trace of agent tool calls and decisions, helping identify turning points and error progressions leading to failures.
