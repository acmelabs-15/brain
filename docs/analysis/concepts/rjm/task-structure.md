---
package: rjm
name: Task Structure
slug: task-structure
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Task Structure

## Definition — verbatim
> "### Task Structure" — .claude/skills/spec-generator/SKILL.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/SKILL.md | 149 | defined here | Defines the frontmatter schema and 6-part body layout for atomic task documents. |

## Consumes
Technical design artifacts (`DESIGN-NNN`), acceptance criteria, and file impact estimates.

## Produces
Atomic task artifacts (`TASK-NNN-{slug}.md`) with complexity estimates, acceptance checkboxes, and file modification lists.

## When applied
Applied during Step 6 of `/spec` when breaking down technical design into executable development tasks.

## Sub-concepts
complexity-sizing

## Part of
3-tier-specifications

## Implementation status
clean

## Design notes
Task Structure defines the schema for the implementation tier in rjm, requiring parent DESIGN linkage, atomic objective scoping, binary pass/fail acceptance criteria, and complexity sizing.
