---
package: rjm
name: Principles
slug: principles
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md, sha256: 25940bcf531f8689e2245518804e86b4e50e3dc33aeda22c146e256483b3a834}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Principles

## Definition — verbatim
> "Comments explain **why**, not **what**. Restating the code is noise." — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md | 5 | defined here | Core rules establishing that comments explain motivation rather than mechanics and must be kept accurate. |

## Consumes
Proposed source comments, function signatures, and docstrings.

## Produces
High-signal code comments stripped of redundant paraphrasing and outdated assertions.

## When applied
Applied during code authoring and code quality review.

## Sub-concepts
why-not-what

## Part of
code-comment-standards

## Implementation status
clean

## Design notes
Principles articulates the core heuristics of clean code documentation: function names and types should carry primary meaning, comments must explain motivation rather than mechanics, and inaccurate comments are worse than no comments. Adhering to these principles prevents comment rot and reduces cognitive noise for future maintainers.
