---
package: rjm
name: KISS vs YAGNI
slug: kiss-vs-yagni
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# KISS vs YAGNI

## Definition — verbatim
> "Both push toward less code, but from different angles." — .claude/skills/quality-grades/references/kiss-principle.md:48

## Also called — verbatim
> "## KISS vs YAGNI" — .claude/skills/quality-grades/references/kiss-principle.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/kiss-principle.md | 41 | defined here | Section comparing implementation simplicity (KISS) with feature scope discipline (YAGNI). |

## Consumes
Architectural requirements and implementation scope specifications.

## Produces
Clear conceptual boundary separating implementation simplicity (how you build it) from scope constraints (what you build).

## When applied
When planning feature scope and designing code to prevent bloat from both implementation and feature angles.

## Sub-concepts
none

## Part of
kiss-principle

## Implementation status
defects: missing-path

## Design notes
A comparative reference section in rjm clarifying that KISS focuses on implementation simplicity while YAGNI focuses on feature scope, with both working concurrently to reduce total code footprint.
