---
package: rjm
name: Quality Checks During Generation
slug: quality-checks-during-generation
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase3-generation-deep-dive.md, sha256: cd9b8fe32d69e8db40084da5d79f81aa00781b644560daf43cc76502d01fa6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Checks During Generation

## Definition — verbatim
> "## Quality Checks During Generation" — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase3-generation-deep-dive.md | 48 | defined here | Section heading and quality checklist verifying generated components against authoring standards. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 40 | used here | Table row recording extraction of Quality Checks During Generation into references/phase3-generation-deep-dive.md. |

## Consumes
In-flight generated skill artifacts (frontmatter, name, description, triggers, phases).

## Produces
Verified artifact sections meeting format, length, and structural requirements.

## When applied
Applied concurrently while drafting skill artifacts in Phase 3.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Quality Checks During Generation enforces inline verification during skill creation (e.g. verifying frontmatter contains only allowed properties, name is hyphen-case <=64 chars, description <=1024 chars, 3-5 distinct triggers, 1-3 max phases). In rjm, this catches structural defects before synthesis panel review.
