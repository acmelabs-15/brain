---
package: rjm
name: EARS syntax
slug: ears-syntax
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EARS syntax

## Definition — verbatim
> "### EARS Syntax" — .claude/skills/spec-generator/SKILL.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/SKILL.md | 96 | used here | Specified as required format for acceptance criteria in structured output. |
| .claude/skills/spec-generator/SKILL.md | 81 | defined here | Defined with template and patterns for requirement statements in REQ artifacts. |

## Consumes
Requirement behavior, triggers, and rationale.

## Produces
Standardized requirement statements and acceptance criteria clauses.

## When applied
Applied when authoring acceptance criteria and formal requirement specifications.

## Sub-concepts
none

## Part of
spec-generator

## Implementation status
clean

## Design notes
Easy Approach to Requirements Syntax structures requirements into unambiguous trigger-action-rationale clauses (WHEN ... THE SYSTEM SHALL ... SO THAT ...) to guarantee objective pass/fail testability.
