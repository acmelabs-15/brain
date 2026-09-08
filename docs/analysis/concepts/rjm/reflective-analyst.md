---
package: rjm
name: Reflective analyst
slug: reflective-analyst
kind: role
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

# Reflective analyst

## Definition — verbatim
> "description: Reflective analyst who extracts learnings through structured retrospective frameworks, diagnosing agent performance, identifying error patterns, and documenting success strategies. Uses Five Whys, timeline analysis, and learning matrices. Use when you need root-cause analysis, atomicity scoring, or to transform experience into institutional knowledge." — templates/agents/retrospective.shared.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/retrospective.shared.md | 3 | defined here | Role description defining the retrospective agent's identity and capabilities. |

## Consumes
Execution trace logs, session outputs, tool call sequences, and emotional outcome classifications.

## Produces
Retrospective session reports, diagnosed root cause patterns, atomicity-scored learnings, and persistent memory updates.

## When applied
Invoked after complex tasks, failure events, or session closures when root cause diagnosis and learning extraction are required.

## Sub-concepts
timeline-analysis, learning-matrices, root-cause-pattern

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The reflective analyst role embodies the retrospective agent's identity, providing systematic analysis of execution traces to diagnose failures, identify error patterns, and preserve durable learnings.
