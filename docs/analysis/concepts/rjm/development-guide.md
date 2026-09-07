---
package: rjm
name: Development Guide
slug: development-guide
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Development Guide

## Definition — verbatim
(used, not defined)

> "# skills/analyze/ Development Guide" — .claude/skills/analyze/references/DEVELOPMENT.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 1 | defined here | Top-level guide documenting the architecture, state machine, and extension model of skills/analyze/. |

## Consumes
analyze skill architecture specifications, state machine requirements.

## Produces
Developer instructions for maintaining and extending the analyze skill's script-driven workflow.

## When applied
Consulted when understanding or modifying the multi-phase analysis pipeline.

## Sub-concepts
script-driven-workflow, state-machine, phase-map

## Part of
analyze

## Implementation status
defects: orphan

## Design notes
The internal developer reference documenting the architecture of the `analyze` skill in rjm. It details the script-driven state machine pattern, maps execution steps to internal Python functions, and provides conventions for adding investigation dimensions.
