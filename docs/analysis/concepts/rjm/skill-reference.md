---
package: rjm
name: Skill Reference
slug: skill-reference
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Reference

## Definition — verbatim
> "Skills are reusable workflow components that agents and users invoke for common tasks. Skills are organized by category in the table below." — docs/skill-reference.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-reference.md | 1 | defined here | Central reference catalog classifying all repository skills into functional domains and documenting invocation interfaces across Claude Code and Copilot CLI. |

## Consumes
Available workflow skills, capability summaries, and cross-platform invocation patterns.

## Produces
Comprehensive skill catalog mapping development tasks to appropriate specialized skills and invocation methods.

## When applied
When developers or autonomous agents need to discover, select, or trigger reusable workflow skills for repository tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The authoritative reference catalog in rjm documenting 42 specialized workflow skills across 10 functional categories, bridging Claude Code slash-command invocation patterns and Copilot CLI internal agent routing so users and agents can discover the right automation component for any lifecycle phase.
