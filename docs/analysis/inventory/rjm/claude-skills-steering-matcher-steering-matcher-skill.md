---
package: rjm
path: .claude/skills/steering-matcher/steering-matcher.skill
type: skill
bytes: 429
unit: inv-rjm-174
in_scope_via: .claude/skills/steering-matcher/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/steering-matcher/steering-matcher.skill, sha256: 528fcbe473cd2fe26f50130e3972a84a6646f17661f43330673cf4b74700362b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/steering-matcher/steering-matcher.skill

## Purpose — required, verbatim
> "Match file paths against steering file glob patterns to determine applicable steering guidance. Use when orchestrator needs to inject context-aware guidance based on files being modified." — .claude/skills/steering-matcher/steering-matcher.skill:3

## Design intent — required
Provides an alternate harness packaging manifest (for GitHub Copilot CLI or PowerShell skill generators) generated from `SKILL.md`. Without it, harnesses consuming `.skill` manifests rather than directory-based `SKILL.md` definitions would not discover the steering-matcher skill.

## Phase — required
none

## Inputs — required
- Source specification file: `.claude\skills\steering-matcher\SKILL.md` — .claude/skills/steering-matcher/steering-matcher.skill:5

## Outputs — required
- Manifest metadata: skill name and description for external skill runner platforms — .claude/skills/steering-matcher/steering-matcher.skill:2-3

## Invokes — required
- skill SKILL.md — .claude/skills/steering-matcher/steering-matcher.skill:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `steering-matcher` — .claude/skills/steering-matcher/steering-matcher.skill:2 — defined here
- `SKILL.md` — .claude/skills/steering-matcher/steering-matcher.skill:8 — used here
- `gen-skills.ps1` — .claude/skills/steering-matcher/steering-matcher.skill:11 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/steering-matcher/steering-matcher.skill:11 · references generator script `./scripts/gen-skills.ps1` which does not exist in the repository.
- other · .claude/skills/steering-matcher/steering-matcher.skill:5 · uses Windows-style backslashes in `generated_from: ".claude\skills\steering-matcher\SKILL.md"` instead of portable forward slashes.

## Observations
- File carries declaration `# GENERATED FILE` and `generated: true`.
- Context cost: 429 bytes, approximately 110 tokens.

## Context cost
429 bytes, approximately 110 tokens.
