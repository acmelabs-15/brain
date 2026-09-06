---
package: rjm
path: .claude/skills/reflect/templates/skill-observations-template.md
type: skill
bytes: 638
unit: inv-rjm-146
in_scope_via: .claude/skills/reflect/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reflect/templates/skill-observations-template.md, sha256: 7480214a6258904898ebe1060329fab9f3f7c1ccf8a43959444ad69630cf7c9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reflect/templates/skill-observations-template.md

## Purpose — required, verbatim
> "This memory captures learnings from using the `{skill-name}` skill across sessions." — .claude/skills/reflect/templates/skill-observations-template.md:8

## Design intent — required
Skeleton template for creating new skill observation sidecar memory files under `.serena/memories/{skill-name}-observations.md`. Establishes uniform structure across all skills by pre-populating metadata headers (`Last Updated`, `Sessions Analyzed`), a purpose statement, and categorized sections for Constraints (HIGH confidence), Preferences (MED confidence), Edge Cases (MED confidence), Documentation (MED confidence), Notes for Review (LOW confidence), and Related memory links.

## Phase — required
cross-phase

## Inputs — required
- `{skill-name}` identifier and current session date `{YYYY-MM-DD}`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Skill Observations` — .claude/skills/reflect/templates/skill-observations-template.md:1 — defined here
- `Constraints (HIGH confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:10 — defined here
- `Preferences (MED confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:14 — defined here
- `Edge Cases (MED confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:18 — defined here
- `Documentation (MED confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:22 — defined here
- `Notes for Review (LOW confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:26 — defined here

## Structure
- `# Skill Observations: {skill-name}` — .claude/skills/reflect/templates/skill-observations-template.md:1
- `## Purpose` — .claude/skills/reflect/templates/skill-observations-template.md:6
- `## Constraints (HIGH confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:10
- `## Preferences (MED confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:14
- `## Edge Cases (MED confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:18
- `## Documentation (MED confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:22
- `## Notes for Review (LOW confidence)` — .claude/skills/reflect/templates/skill-observations-template.md:26
- `## Related` — .claude/skills/reflect/templates/skill-observations-template.md:30

## Defects — required
- orphan · .claude/skills/reflect/templates/skill-observations-template.md:1 · file is present in the repository but never referenced or loaded by reflect/SKILL.md or any other in-scope file.

## Observations
- Includes a `Documentation (MED confidence)` section not listed in the inline memory format of `phase3-4-propose-persist.md`.
- Context cost: 638 bytes, ~160 tokens.

## Context cost
638 bytes, ~160 tokens.
