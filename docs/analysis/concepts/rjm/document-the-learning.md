---
package: rjm
name: Document the Learning
slug: document-the-learning
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/vibe-engineering.md, sha256: 74fba64a08fefa107a664143c29dab8e3f4425eea76f9d7cebbc940e4d421f9a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Document the Learning

## Definition — verbatim
> "### 7. Document the Learning" — .claude/skills/context-optimizer/references/vibe-engineering.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/vibe-engineering.md | 41 | defined here | Step 7 of the interaction protocol persisting reusable patterns to comments, wikis, skills, or memory notes. |

## Consumes
Process reflections and validated reusable solutions.

## Produces
Documented learnings, updated skill files, and codebase knowledge entries.

## When applied
Final step closing the interaction protocol. Every interaction that produces a reusable pattern becomes a skill.

## Sub-concepts
none

## Part of
7-step-agent-interaction-protocol, vibe-engineering

## Implementation status
defects: missing-path

## Design notes
The compounding knowledge capture stage of the 7-Step Protocol that converts validated execution patterns into reusable skills, docs, or code comments for future sessions.
