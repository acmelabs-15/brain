---
package: rjm
path: .claude/skills/ai-agents-config-catalog/SKILL.md
type: skill
bytes: 19396
unit: inv-rjm-81
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-config-catalog/SKILL.md

## Purpose — required, verbatim
> "Catalog of every configuration axis in this repo, env vars, commit markers, frontmatter keys, QA skip verdicts, and escape hatches, each with its enforcement point and abuse story, plus the checklist for adding a new flag safely. Use when you say `what does a skip flag do`, `list escape hatches`, `can I skip this gate`, `add a config flag`. Do NOT use for hook runtime behavior (use `agent-harness-reference`) or change gating policy (use `ai-agents-change-control`)." — .claude/skills/ai-agents-config-catalog/SKILL.md:3

## Design intent — required
Provides an exhaustive reference catalog of every configuration axis, environment variable, commit marker, frontmatter key, text directive, QA skip verdict, and escape hatch across the repository. It pairs every flag with its enforcement point, operational status, and historical abuse story or guard (grounded in the house rule from session 1187 that "escape hatches get teeth or get abused"), and supplies an 8-step protocol for introducing new configuration flags safely. Without it, contributors and agents would invent unmonitored bypasses, misconfigure test/harness environments, or reintroduce dangerous global escape hatches.

## Phase — required
cross-phase

## Inputs — required
- Environment variables (`GIT_CONFIG_COUNT`, `AI_AGENTS_PYTEST_FULL_SUITE_LOCALLY`, `AI_AGENTS_PYTEST_WORKERS`, `SKIP_PUSH_LOCK_COMMIT_GUARD`, `.env` keys).
- Commit message markers (`[skip-drift-check]`).
- Source code text directives (`<!-- orphan-ref-ignore -->`, `<!-- orphan-ref-ignore-file -->`).
- Skill frontmatter keys (`size-exception: true`, `allowed-tools`, `argument-hint`).
- QA skip verdict strings in session logs (`SKIPPED: investigation-only`, `SKIPPED: docs-only`).
- Hook registration surfaces (`.claude/settings.json`, `.claude/hooks/hooks.json`).

## Outputs — required
none

## Invokes — required
- skill ai-agents-change-control — .claude/skills/ai-agents-config-catalog/SKILL.md:3
- skill agent-harness-reference — .claude/skills/ai-agents-config-catalog/SKILL.md:3
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-config-catalog/SKILL.md:18
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-config-catalog/SKILL.md:18
- doc .claude/rules/lsp-first.md — .claude/skills/ai-agents-config-catalog/SKILL.md:38
- config lefthook.yml — .claude/skills/ai-agents-config-catalog/SKILL.md:42
- doc .agents/retrospective/2026-02-08-session-1187-skip-prepush-abuse.md — .claude/skills/ai-agents-config-catalog/SKILL.md:51
- script tests/conftest.py — .claude/skills/ai-agents-config-catalog/SKILL.md:60
- config pyproject.toml — .claude/skills/ai-agents-config-catalog/SKILL.md:63
- script scripts/validation/check_push_lock_before_commit.py — .claude/skills/ai-agents-config-catalog/SKILL.md:64
- script scripts/validation/git_hook_policy.py — .claude/skills/ai-agents-config-catalog/SKILL.md:65
- config .env.example — .claude/skills/ai-agents-config-catalog/SKILL.md:70
- config .github/workflows/agent-drift-detection.yml — .claude/skills/ai-agents-config-catalog/SKILL.md:76
- doc CONTRIBUTING.md — .claude/skills/ai-agents-config-catalog/SKILL.md:76
- script .claude/skills/orphan-ref-validator/scripts/patterns.py — .claude/skills/ai-agents-config-catalog/SKILL.md:82
- script .claude/skills/orphan-ref-validator/scripts/scan.py — .claude/skills/ai-agents-config-catalog/SKILL.md:188
- script scripts/validation/skill_size.py — .claude/skills/ai-agents-config-catalog/SKILL.md:91
- script .claude/skills/taste-lints/scripts/taste_lints.py — .claude/skills/ai-agents-config-catalog/SKILL.md:91
- script .claude/skills/orphan-ref-validator/scripts/filters.py — .claude/skills/ai-agents-config-catalog/SKILL.md:92
- script scripts/modules/investigation_allowlist.py — .claude/skills/ai-agents-config-catalog/SKILL.md:100
- script scripts/validate_session_json.py — .claude/skills/ai-agents-config-catalog/SKILL.md:101
- config .claude/.claude-plugin/plugin.json — .claude/skills/ai-agents-config-catalog/SKILL.md:115
- config src/claude/.claude-plugin/plugin.json — .claude/skills/ai-agents-config-catalog/SKILL.md:116
- config src/copilot-cli/.claude-plugin/plugin.json — .claude/skills/ai-agents-config-catalog/SKILL.md:117
- config .claude-plugin/marketplace.json — .claude/skills/ai-agents-config-catalog/SKILL.md:118
- config .github/plugin/marketplace.json — .claude/skills/ai-agents-config-catalog/SKILL.md:119
- script scripts/validation/pre_pr.py — .claude/skills/ai-agents-config-catalog/SKILL.md:122
- script build/scripts/validate_plugin_version_bump.py — .claude/skills/ai-agents-config-catalog/SKILL.md:123
- config .github/workflows/validate-plugin-version-bump.yml — .claude/skills/ai-agents-config-catalog/SKILL.md:124
- config .claude/settings.json — .claude/skills/ai-agents-config-catalog/SKILL.md:136
- config .claude/hooks/hooks.json — .claude/skills/ai-agents-config-catalog/SKILL.md:137

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:67
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:173
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-failure-archaeology/SKILL.md:70
- skill ai-agents-build-and-env — .claude/skills/ai-agents-build-and-env/SKILL.md:41
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:30
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-generation-and-release/SKILL.md:36

## Concepts named — required, verbatim
- `Config Catalog` — .claude/skills/ai-agents-config-catalog/SKILL.md:8 — defined here
- `escape hatches` — .claude/skills/ai-agents-config-catalog/SKILL.md:3 — defined here
- `LSP-first` — .claude/skills/ai-agents-config-catalog/SKILL.md:38 — used here
- `Lefthook` — .claude/skills/ai-agents-config-catalog/SKILL.md:42 — used here
- `SKIP_PREPUSH` — .claude/skills/ai-agents-config-catalog/SKILL.md:51 — used here
- `SKIP_TESTS` — .claude/skills/ai-agents-config-catalog/SKILL.md:52 — used here
- `GIT_CONFIG_COUNT` — .claude/skills/ai-agents-config-catalog/SKILL.md:60 — used here
- `SERENA_PROJECT_ROOT` — .claude/skills/ai-agents-config-catalog/SKILL.md:61 — used here
- `SKIP_PUSH_LOCK_COMMIT_GUARD` — .claude/skills/ai-agents-config-catalog/SKILL.md:64 — used here
- `AI_AGENTS_PYTEST_FULL_SUITE_LOCALLY` — .claude/skills/ai-agents-config-catalog/SKILL.md:65 — used here
- `AI_AGENTS_PYTEST_WORKERS` — .claude/skills/ai-agents-config-catalog/SKILL.md:66 — used here
- `skip-drift-check` — .claude/skills/ai-agents-config-catalog/SKILL.md:76 — used here
- `orphan-ref-ignore` — .claude/skills/ai-agents-config-catalog/SKILL.md:82 — defined here
- `orphan-ref-ignore-file` — .claude/skills/ai-agents-config-catalog/SKILL.md:83 — defined here
- `size-exception` — .claude/skills/ai-agents-config-catalog/SKILL.md:91 — defined here
- `SKIPPED: investigation-only` — .claude/skills/ai-agents-config-catalog/SKILL.md:100 — used here
- `SKIPPED: docs-only` — .claude/skills/ai-agents-config-catalog/SKILL.md:101 — used here
- `Plugin Manifest Version Prohibition` — .claude/skills/ai-agents-config-catalog/SKILL.md:105 — defined here
- `Hook Registration Surfaces` — .claude/skills/ai-agents-config-catalog/SKILL.md:128 — defined here
- `How to Add a New Flag` — .claude/skills/ai-agents-config-catalog/SKILL.md:147 — defined here

## Structure
- `# AI Agents Config Catalog` — .claude/skills/ai-agents-config-catalog/SKILL.md:8
- `## Triggers` — .claude/skills/ai-agents-config-catalog/SKILL.md:20
- `## Process` — .claude/skills/ai-agents-config-catalog/SKILL.md:28
- `## Environment Variables: LSP Gate (retired)` — .claude/skills/ai-agents-config-catalog/SKILL.md:36
- `## Git Hook Configuration` — .claude/skills/ai-agents-config-catalog/SKILL.md:40
- `## Removed and Stale Flags (do not use, do not reintroduce)` — .claude/skills/ai-agents-config-catalog/SKILL.md:47
- `## Environment Variables: Tests and Tooling` — .claude/skills/ai-agents-config-catalog/SKILL.md:56
- `## .env Keys (from .env.example)` — .claude/skills/ai-agents-config-catalog/SKILL.md:68
- `## Commit Markers` — .claude/skills/ai-agents-config-catalog/SKILL.md:72
- `## Text Directives (orphan-ref-validator)` — .claude/skills/ai-agents-config-catalog/SKILL.md:78
- `## Frontmatter Keys (skills)` — .claude/skills/ai-agents-config-catalog/SKILL.md:87
- `## QA Skip Verdicts (ADR-034)` — .claude/skills/ai-agents-config-catalog/SKILL.md:94
- `## Plugin Manifest Version Prohibition` — .claude/skills/ai-agents-config-catalog/SKILL.md:105
- `## Hook Registration Surfaces` — .claude/skills/ai-agents-config-catalog/SKILL.md:128
- `## How to Add a New Flag` — .claude/skills/ai-agents-config-catalog/SKILL.md:147
- `## Anti-Patterns` — .claude/skills/ai-agents-config-catalog/SKILL.md:158
- `## Verification` — .claude/skills/ai-agents-config-catalog/SKILL.md:168
- `## Provenance and Maintenance` — .claude/skills/ai-agents-config-catalog/SKILL.md:175

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Line 202 notes: "`COMPRESS_TOKENIZER` consumer not located; verify before documenting it as live." Line 70 also notes that `COMPRESS_TOKENIZER` appears only in `.env.example`, with no code consumer located in this audit, and should be treated as possibly vestigial.
- Encodes the doctrine that "escape hatches get teeth or get abused" (line 15). Flags must be narrow, observable in stdout (WARN/SKIP lines), and accompanied by tests.
- Re-verified hook registration counts on 2026-09-01: `.claude/settings.json` (4 events, 7 groups); `.claude/hooks/hooks.json` (0 events, 0 groups); `.github/hooks/require-subagent-model.json` retired/deleted under ADR-097.

## Context cost
19,396 bytes; ~4,850 tokens.
