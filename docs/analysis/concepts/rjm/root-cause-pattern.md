---
package: rjm
name: Root Cause Pattern
slug: root-cause-pattern
kind: pattern
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

# Root Cause Pattern

## Definition — verbatim
> "## Root Cause Pattern" — templates/agents/retrospective.shared.md:888

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/retrospective.shared.md | 888 | defined here | Section heading and template for structured root cause patterns within retrospective artifacts. |

## Consumes
Five Whys causal chain analysis identifying root mechanisms of agent or execution failure.

## Produces
Structured root cause pattern record with detection signals, prevention skills, and relation links.

## When applied
Added to retrospective artifacts whenever Five Whys analysis uncovers an underlying root cause.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A standardized artifact structure capturing diagnosed failure mechanisms alongside detection signals and concrete prevention skills, enabling agents to recognize and avoid recurring failure modes.
