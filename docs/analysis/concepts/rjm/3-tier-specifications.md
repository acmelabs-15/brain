---
package: rjm
name: 3-tier specifications
slug: 3-tier-specifications
kind: pattern
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

# 3-tier specifications

## Definition — verbatim
> "Transform feature descriptions into 3-tier specifications: Requirements (WHAT/WHY) then Design (HOW) then Tasks (IMPLEMENTATION)." — .claude/skills/spec-generator/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/SKILL.md | 11 | defined here | Defines the specification decomposition framework separating requirements, technical design, and implementation tasks. |

## Consumes
Feature descriptions, PRD inputs, and problem context.

## Produces
A 3-tier specification set comprising EARS requirements (`REQ-NNN`), technical architecture (`DESIGN-NNN`), and atomic tasks (`TASK-NNN`).

## When applied
Applied during the `/spec` phase (Step 6) or when triggering spec generation to formalize feature requirements.

## Sub-concepts
requirement-structure, design-structure, task-structure

## Part of
spec-generator

## Implementation status
clean

## Design notes
3-tier specifications is a core specification framework in rjm that decomposes features into three progressive, traceable artifact levels (Requirements, Design, and Tasks). This pattern enforces separation between problem definition (WHAT/WHY) and technical architecture (HOW) before task scheduling, preventing premature coding and ungrounded implementations.
