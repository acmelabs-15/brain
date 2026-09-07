---
package: rjm
name: Skill Observations
slug: skill-observations
kind: template
package_phase: rjm:reflect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/templates/skill-observations-template.md, sha256: 7480214a6258904898ebe1060329fab9f3f7c1ccf8a43959444ad69630cf7c9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Observations

## Definition — verbatim
> "# Skill Observations: {skill-name}" — .claude/skills/reflect/templates/skill-observations-template.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/templates/skill-observations-template.md | 1 | defined here | Markdown template title and structure for skill observation memory files. |

## Consumes
Empirical learnings and observations from sessions utilizing a specific skill.

## Produces
Initialized `.serena/memories/{skill-name}-observations.md` markdown file.

## When applied
Applied when creating a new sidecar memory document for a skill that lacks one.

## Sub-concepts
constraints-high-confidence, preferences-med-confidence, edge-cases-med-confidence, documentation-med-confidence, notes-for-review-low-confidence

## Part of
reflect-skill

## Implementation status
defects: orphan

## Design notes
Skill Observations provides a structured template for tracking empirical observations, constraints, preferences, and edge cases for a specific skill across sessions, serving as a dedicated sidecar memory file.
