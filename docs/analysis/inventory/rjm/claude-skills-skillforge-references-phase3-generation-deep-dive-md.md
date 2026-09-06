---
package: rjm
path: .claude/skills/skillforge/references/phase3-generation-deep-dive.md
type: reference
bytes: 2336
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase3-generation-deep-dive.md, sha256: cd9b8fe32d69e8db40084da5d79f81aa00781b644560daf43cc76502d01fa6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/phase3-generation-deep-dive.md

## Purpose — required, verbatim
> "**Context:** Fresh, clean (no analysis artifacts polluting) **Standard:** Zero errors, every section verified before proceeding" — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:3-4 (no explicit purpose statement)

## Design intent — required
Specifies the sequential file-generation order (directories, `SKILL.md`, `references/`, `assets/`, `scripts/`) and intermediate quality gates for Phase 3 (Generation) of SkillForge. It enforces that generation executes in a fresh context free of polluting analysis scratchpads, mandates portable script execution paths using `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}`, restricts frontmatter properties to allowed keys, and requires structured tables over prose.

## Phase — required
rjm:Phase 3: Generation

## Inputs — required
- Validated `<skill_specification>` XML artifact from Phase 2 (Specification)

## Outputs — required
- Generated skill directory containing `SKILL.md`, `references/`, `assets/templates/`, and `scripts/`

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:182
- skill skillforge — .claude/skills/skillforge/SKILL.md:305

## Concepts named — required, verbatim
- `Generation Order` — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:6 — defined here
- `Quality Checks During Generation` — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:48 — defined here
- `Portable exec paths` — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:62 — defined here

## Structure
- `# Phase 3: Generation Deep Dive` — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:1
- `## Generation Order` — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:6
- `## Quality Checks During Generation` — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:48

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Generation is explicitly specified to run in a fresh context (.claude/skills/skillforge/references/phase3-generation-deep-dive.md:3) to prevent intermediate analysis tokens and deliberations from polluting the generated skill text.
- Mandatory portable execution paths (.claude/skills/skillforge/references/phase3-generation-deep-dive.md:42-45, 62) require `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/...` to resolve cross-harness path discrepancies (issue #2838).

## Context cost
2,336 bytes (~584 tokens).
