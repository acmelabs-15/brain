---
package: rjm
path: docs/SKILL-AUTHORING.md
type: doc
bytes: 14860
unit: inv-rjm-193
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/SKILL-AUTHORING.md

## Purpose — required, verbatim
> "This guide covers how to create Claude Code skills with correct YAML frontmatter, model selection, and file structure." — docs/SKILL-AUTHORING.md:3

## Design intent — required
Comprehensive authoring specification and reference manual for creating Claude Code skills within the repository. Enforces standardized YAML frontmatter schemas (`name`, `description`, `allowed-tools`), progressive disclosure file layout separating executable logic and reference material from the entrypoint `SKILL.md` (< 500 lines), strict adherence to ADR-080 model-pin policies (permitting only unpinned inheritance or the bare `haiku` cost alias with rationale), and mandatory portable script invocations across local checkout, Claude Code plugin, and Copilot CLI runtime environments.

## Phase — required
cross-phase

## Inputs — required
- "YAML frontmatter" — docs/SKILL-AUTHORING.md:3
- ".agents/analysis/claude-code-skill-frontmatter-2026.md" — docs/SKILL-AUTHORING.md:5
- "ADR-080" — docs/SKILL-AUTHORING.md:23
- "templates/platforms/copilot-cli.yaml" — docs/SKILL-AUTHORING.md:115
- "scripts/eval/_eval_common.py" — docs/SKILL-AUTHORING.md:117
- "scripts/validation/skill_md_exec_portability_baseline.json" — docs/SKILL-AUTHORING.md:235

## Outputs — required
- "SKILL.md" — docs/SKILL-AUTHORING.md:9
- "references/" — docs/SKILL-AUTHORING.md:190
- "scripts/" — docs/SKILL-AUTHORING.md:194
- "<!-- vendor-portability-exec: bootstrap runs before COPILOT_PLUGIN_ROOT is set -->" — docs/SKILL-AUTHORING.md:245

## Invokes — required
- doc claude-code-skill-frontmatter-2026.md — docs/SKILL-AUTHORING.md:5
- doc ADR-080-model-pin-justification-policy.md — docs/SKILL-AUTHORING.md:23
- script eval-model-sweep.py — docs/SKILL-AUTHORING.md:90
- script check_model_pins.py — docs/SKILL-AUTHORING.md:92
- config copilot-cli.yaml — docs/SKILL-AUTHORING.md:115
- script _eval_common.py — docs/SKILL-AUTHORING.md:117
- script test_pr_merge_ready.py — docs/SKILL-AUTHORING.md:211
- script check_skill_md_exec_portability.py — docs/SKILL-AUTHORING.md:233
- skill fix-markdown-fences — docs/SKILL-AUTHORING.md:258
- skill doc-accuracy — docs/SKILL-AUTHORING.md:276
- skill analyze — docs/SKILL-AUTHORING.md:293
- script validate-skill.py — docs/SKILL-AUTHORING.md:324
- script git_hook_policy.py — docs/SKILL-AUTHORING.md:324
- script pre_pr.py — docs/SKILL-AUTHORING.md:325

## Invoked by — required
- skill slashcommandcreator — .claude/skills/slashcommandcreator/SKILL.md:140
- skill skillforge — .claude/skills/skillforge/SKILL.md:264

## Concepts named — required, verbatim
- `Skill Authoring Guide` — docs/SKILL-AUTHORING.md:1 — defined here
- `YAML frontmatter` — docs/SKILL-AUTHORING.md:3 — used here
- `Frontmatter Schema` — docs/SKILL-AUTHORING.md:7 — defined here
- `Model Selection` — docs/SKILL-AUTHORING.md:22 — defined here
- `progressive disclosure` — docs/SKILL-AUTHORING.md:78 — used here
- `bare rolling alias` — docs/SKILL-AUTHORING.md:102 — defined here
- `model-rationale` — docs/SKILL-AUTHORING.md:103 — defined here
- `model_tiers` — docs/SKILL-AUTHORING.md:115 — used here
- `Portable Script Invocations` — docs/SKILL-AUTHORING.md:200 — defined here
- `vendor-portability-exec` — docs/SKILL-AUTHORING.md:245 — defined here
- `vendor-portability` — docs/SKILL-AUTHORING.md:248 — used here
- `Frontmatter Checklist` — docs/SKILL-AUTHORING.md:312 — defined here

## Structure
- # Skill Authoring Guide — docs/SKILL-AUTHORING.md:1
- ## Frontmatter Schema — docs/SKILL-AUTHORING.md:7
- ### Required Fields — docs/SKILL-AUTHORING.md:11
- ### Optional Fields — docs/SKILL-AUTHORING.md:18
- ### Minimum Valid Frontmatter — docs/SKILL-AUTHORING.md:29
- ### Full Frontmatter — docs/SKILL-AUTHORING.md:38
- ## Validation Rules — docs/SKILL-AUTHORING.md:58
- ## Model Selection — docs/SKILL-AUTHORING.md:80
- ### The Two Conformant States — docs/SKILL-AUTHORING.md:98
- ### Model Tiers — docs/SKILL-AUTHORING.md:113
- ### When to Pin the Cost Alias — docs/SKILL-AUTHORING.md:125
- ### Agents Are Different — docs/SKILL-AUTHORING.md:133
- ## Description Best Practices — docs/SKILL-AUTHORING.md:141
- ## Allowed-Tools Configuration — docs/SKILL-AUTHORING.md:163
- ## File Structure — docs/SKILL-AUTHORING.md:181
- ## Portable Script Invocations (Required) — docs/SKILL-AUTHORING.md:200
- ## Working Examples — docs/SKILL-AUTHORING.md:251
- ### Cost Alias: Mechanical Work — docs/SKILL-AUTHORING.md:256
- ### Inherited Default: Standard Workflow — docs/SKILL-AUTHORING.md:274
- ### Inherited Default: Multi-Agent Orchestration — docs/SKILL-AUTHORING.md:291
- ## Frontmatter Checklist — docs/SKILL-AUTHORING.md:312
- ## Troubleshooting — docs/SKILL-AUTHORING.md:327
- ### Model Pin Rejected — docs/SKILL-AUTHORING.md:329
- ### 404 Not Found Error — docs/SKILL-AUTHORING.md:346
- ### Skill Not Triggering — docs/SKILL-AUTHORING.md:365
- ### Platform Mismatch — docs/SKILL-AUTHORING.md:371
- ## References — docs/SKILL-AUTHORING.md:377

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes the progressive disclosure design pattern where `SKILL.md` is limited to under 500 lines containing primary triggers and workflow summary, delegating domain details to `references/` and execution scripts to `scripts/`. Details cross-harness portability testing across upstream checkout, Claude Code plugin, and Copilot CLI environments using `SCRIPTS_DIR="${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/..."`.

## Context cost
14860 bytes, approximately 3700 tokens.
