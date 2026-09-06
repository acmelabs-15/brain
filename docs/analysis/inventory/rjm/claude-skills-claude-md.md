---
package: rjm
path: .claude/skills/CLAUDE.md
type: skill
bytes: 4296
unit: inv-rjm-99
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/CLAUDE.md

## Purpose — required, verbatim
> "**Scope**: Skills directory only. Auto-loaded when working in `.claude/skills/`." — .claude/skills/CLAUDE.md:3
(no explicit purpose statement)

## Design intent — required
Establishes repository-wide development, structural, and validation standards for skills residing in `.claude/skills/`. It defines the required directory structure, YAML frontmatter schemas (minimal vs. full for SkillForge validation), model selection policies (defaulting to harness-inherited models, restricting model pins to cheap rolling aliases like haiku per ADR-080), progressive disclosure guidelines under a 500-line ceiling, and testing/documentation expectations. Without this document, agents authoring or modifying skills would lack unified rules on file organization, frontmatter compliance, token size boundaries, and validator gotchas, leading to broken skill registration and inconsistent agent capabilities.

## Phase — required
cross-phase

## Inputs — required
- Directory-level auto-loading context:
  > "Auto-loaded when working in `.claude/skills/`." — .claude/skills/CLAUDE.md:3
- Primary repository conventions:
  > "Root CLAUDE.md and AGENTS.md take precedence." — .claude/skills/CLAUDE.md:4
- Referenced skills and campaigns:
  > "read `agent-harness-reference` first" — .claude/skills/CLAUDE.md:7
  > "Route cross-harness mutations through `ai-agents-portability-campaign`." — .claude/skills/CLAUDE.md:7-8
- Memory and source sidecar contract:
  > "The official source sidecar is the contract; Serena memories are retrieval aids." — .claude/skills/CLAUDE.md:8-9
- Architecture decisions:
  > "Per ADR-080, skills default to the harness-inherited model." — .claude/skills/CLAUDE.md:50
- External documentation:
  `<https://code.claude.com/docs/en/skills>` — .claude/skills/CLAUDE.md:130

## Outputs — required
none

## Invokes — required
- doc CLAUDE.md — .claude/skills/CLAUDE.md:4
- doc AGENTS.md — .claude/skills/CLAUDE.md:4
- skill agent-harness-reference — .claude/skills/CLAUDE.md:7
- skill ai-agents-portability-campaign — .claude/skills/CLAUDE.md:8
- doc ADR-080 — .claude/skills/CLAUDE.md:50
- script scripts/validation/skill_size.py — .claude/skills/CLAUDE.md:95
- doc .serena/memories/claude-code-skill-frontmatter-standards.md — .claude/skills/CLAUDE.md:128
- doc scripts/AGENTS.md — .claude/skills/CLAUDE.md:129

## Invoked by — required
- doc scripts/AGENTS.md — scripts/AGENTS.md:134
- skill .claude/skills/prose-self-check/SKILL.md — .claude/skills/prose-self-check/SKILL.md:277

## Concepts named — required, verbatim
- `Skill Development Conventions` — .claude/skills/CLAUDE.md:1 — defined here
- `CLAUDE.md` — .claude/skills/CLAUDE.md:4 — used here
- `AGENTS.md` — .claude/skills/CLAUDE.md:4 — used here
- `Claude Code` — .claude/skills/CLAUDE.md:6 — used here
- `Copilot CLI` — .claude/skills/CLAUDE.md:7 — used here
- `agent-harness-reference` — .claude/skills/CLAUDE.md:7 — used here
- `ai-agents-portability-campaign` — .claude/skills/CLAUDE.md:8 — used here
- `official source sidecar` — .claude/skills/CLAUDE.md:8 — defined here
- `Serena memories` — .claude/skills/CLAUDE.md:9 — used here
- `Skill Structure` — .claude/skills/CLAUDE.md:11 — defined here
- `SKILL.md` — .claude/skills/CLAUDE.md:15 — used here
- `Pester tests` — .claude/skills/CLAUDE.md:22 — used here
- `Frontmatter Standards` — .claude/skills/CLAUDE.md:26 — defined here
- `SkillForge validation` — .claude/skills/CLAUDE.md:37 — used here
- `Model Selection` — .claude/skills/CLAUDE.md:48 — defined here
- `ADR-080` — .claude/skills/CLAUDE.md:50 — used here
- `harness-inherited model` — .claude/skills/CLAUDE.md:50 — defined here
- `model-pin check` — .claude/skills/CLAUDE.md:53 — used here
- `rolling alias` — .claude/skills/CLAUDE.md:55 — used here
- `haiku` — .claude/skills/CLAUDE.md:56 — used here
- `model-rationale` — .claude/skills/CLAUDE.md:56 — defined here
- `model_tiers` — .claude/skills/CLAUDE.md:60 — used here
- `Validation Rules` — .claude/skills/CLAUDE.md:63 — defined here
- `progressive disclosure` — .claude/skills/CLAUDE.md:69 — used here
- `Prompt Size Limits` — .claude/skills/CLAUDE.md:71 — defined here
- `size-exception` — .claude/skills/CLAUDE.md:85 — defined here
- `skill_size.py` — .claude/skills/CLAUDE.md:95 — used here
- `SkillForge Validator Gotchas` — .claude/skills/CLAUDE.md:97 — defined here
- `PowerShell Conventions` — .claude/skills/CLAUDE.md:105 — defined here
- `Testing` — .claude/skills/CLAUDE.md:112 — defined here
- `Documentation` — .claude/skills/CLAUDE.md:119 — defined here
- `Related References` — .claude/skills/CLAUDE.md:126 — defined here

## Structure
- `# Skill Development Conventions` — .claude/skills/CLAUDE.md:1
- `## Skill Structure` — .claude/skills/CLAUDE.md:11
- `## Frontmatter Standards` — .claude/skills/CLAUDE.md:26
- `### Required (Minimal)` — .claude/skills/CLAUDE.md:28
- `### Required (Full, for SkillForge validation)` — .claude/skills/CLAUDE.md:37
- `### Model Selection` — .claude/skills/CLAUDE.md:48
- `## Validation Rules` — .claude/skills/CLAUDE.md:63
- `### Prompt Size Limits` — .claude/skills/CLAUDE.md:71
- `## SkillForge Validator Gotchas` — .claude/skills/CLAUDE.md:97
- `## PowerShell Conventions` — .claude/skills/CLAUDE.md:105
- `## Testing` — .claude/skills/CLAUDE.md:112
- `## Documentation` — .claude/skills/CLAUDE.md:119
- `## Related References` — .claude/skills/CLAUDE.md:126

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/CLAUDE.md:128 · Referenced file `.serena/memories/claude-code-skill-frontmatter-standards.md` does not exist at cited path; actual file is located at `.serena/memories/claude/claude-code-skill-frontmatter-standards.md`.
- `cross-file-contradiction` · .claude/skills/CLAUDE.md:16 · Documents optional PowerShell modules (`.psm1`), PowerShell scripts (`.ps1`), and Pester tests (`.Tests.ps1`) for skill structure and conventions (repeated on lines 105-118), contradicting `scripts/AGENTS.md:14-19` which establishes Python-first per ADR-042 and confirms zero PowerShell files remain in the repository (all 235 skill scripts are Python).
- `doc-drift` · .claude/skills/CLAUDE.md:71 · Documents prompt size limits strictly in terms of line counts (300 warning, 500 error), omitting the byte ceiling (target 20,480 bytes, warn 12,288 bytes, error 24,576 bytes) enforced by `scripts/validation/skill_size.py:10-12`.
- `missing-path` · .claude/skills/CLAUDE.md:50 · Mentions `ADR-080` without path; the actual decision record on disk is `.agents/architecture/ADR-080-model-pin-justification-policy.md`.

## Observations
- Documents progressive disclosure design pattern for keeping skill prompts under 500 lines by offloading to `references/`, `modules/`, and `templates/`.
- Enforces model pin justification policy: skills default to the harness-inherited model, and explicit pins are restricted to rolling aliases priced below default (`haiku`) with required `model-rationale:` field.
- Identifies SkillForge validator gotchas (YAML keys must be top-level, trigger phrases must be 3-5 backtick-wrapped phrases, heading syntax constraints).
- Warns about parallel agent staging locking the git index, recommending `git diff --staged`.

## Context cost
4296 bytes. Approximately 1074 tokens. Combined with primary referenced root documents `CLAUDE.md` (2482 bytes) and `AGENTS.md` (2947 bytes), total context cost is 9725 bytes (~2430 tokens).
