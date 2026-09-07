---
package: rjm
name: design tree
slug: design-tree
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# design tree

## Definition — verbatim
> "Adversarial requirements interview that walks the design tree to elicit testable requirements before any code is written." — .claude/skills/requirements-interview/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/SKILL.md | 4 | defines | Description stating the skill walks the design tree to elicit testable requirements before any code is written. |

## Consumes
Problem statement, issue body, or feature description.

## Produces
Structured PRD with resolved decisions across all requirement branches.

## When applied
Triggered during requirements elicitation by phrases like "walk the design tree" or "interview me on this".

## Sub-concepts
branch-checklist, user-stories, ontologyfragment

## Part of
requirements-interview

## Implementation status
clean

## Design notes
A hierarchical decision framework used during requirements interviews to systematically traverse and resolve architectural and implementation decisions branch by branch before writing code. It prevents generation without alignment by ensuring all dependencies, failure modes, and scope boundaries are explicitly addressed.
