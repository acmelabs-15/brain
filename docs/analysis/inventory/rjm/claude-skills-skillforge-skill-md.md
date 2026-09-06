---
package: rjm
path: .claude/skills/skillforge/SKILL.md
type: skill
bytes: 16036
unit: inv-rjm-165
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/SKILL.md

## Purpose — required, verbatim
> "Analyzes any input to find, improve, compose, or create the right skill." — .claude/skills/skillforge/SKILL.md:22

Frontmatter description also states:
"Intelligent skill router and creator. Analyzes ANY input to recommend existing skills, improve them, or create new ones. Uses deep iterative analysis with 11 thinking models, regression questioning, evolution lens, and multi-agent synthesis panel. Phase 0 triage ensures you never duplicate existing functionality." — .claude/skills/skillforge/SKILL.md:3

## Design intent — required
SkillForge 4.1 acts as the central router, quality governor, and authoring framework for the agent skill catalog in the rjm repository. It prevents redundant skill proliferation and brittle agent extensions by routing all user and task inputs through a mandatory Phase 0 triage gate before creation. When new skills or improvements are justified, it orchestrates a structured engineering workflow: deep multi-lens analysis across 11 thinking models, XML formal specification incorporating evolution and timelessness scoring (requiring a score of >=7), progressive disclosure generation (retaining concise core rules in SKILL.md while delegating depth to reference files), and multi-agent consensus panel approval. Without it, skills would be created haphazardly without reuse checks, leading to registry bloat, conflicting definitions, and high runtime failure rates across Claude Code workflows.

## Phase — required
cross-phase

## Inputs — required
- User inputs: direct creation requests, skill improvement requests, skill lookup questions, task prompts, error messages, URLs, and code snippets — .claude/skills/skillforge/SKILL.md:28-29
- Autonomous goal prompts and commands: `SkillForge: {goal}`, `SkillForge --plan-only {goal}`, `SkillForge --quick {goal}`, `SkillForge --triage {input}`, `SkillForge --improve {skill}` — .claude/skills/skillforge/SKILL.md:112-116
- External skill catalogs: commit-pinned SHA and enumerated file list when adapting external skills — .claude/skills/skillforge/SKILL.md:136
- Pre-existing skill ecosystem index and local skill directories — .claude/skills/skillforge/SKILL.md:122

## Outputs — required
- Triage decisions: `USE_EXISTING`, `IMPROVE_EXISTING`, `CREATE_NEW`, `COMPOSE`, or `CLARIFY` — .claude/skills/skillforge/SKILL.md:84
- Skill specification: XML specification with metadata, requirements, architecture, evolution analysis, and success criteria (`SKILL_SPEC.md`) — .claude/skills/skillforge/SKILL.md:17, 166
- Skill directory artifacts: generated `SKILL.md`, `references/`, `assets/`, and `scripts/` — .claude/skills/skillforge/SKILL.md:17, 87
- Distribution packages: packaged skill archives produced by `package_skill.py` — .claude/skills/skillforge/SKILL.md:227

## Invokes — required
- reference references/overview-and-triggers.md — .claude/skills/skillforge/SKILL.md:46
- reference references/phase0-triage.md — .claude/skills/skillforge/SKILL.md:48
- reference references/external-skill-source-adaptation.md — .claude/skills/skillforge/SKILL.md:148
- reference references/phase1-analysis-deep-dive.md — .claude/skills/skillforge/SKILL.md:158
- reference references/multi-lens-framework.md — .claude/skills/skillforge/SKILL.md:159
- reference references/regression-questions.md — .claude/skills/skillforge/SKILL.md:160
- reference references/phase2-specification-deep-dive.md — .claude/skills/skillforge/SKILL.md:171
- reference references/specification-template.md — .claude/skills/skillforge/SKILL.md:172
- reference references/phase3-generation-deep-dive.md — .claude/skills/skillforge/SKILL.md:182
- reference references/output-structure.md — .claude/skills/skillforge/SKILL.md:183
- reference references/script-integration-framework.md — .claude/skills/skillforge/SKILL.md:184
- reference references/script-patterns-catalog.md — .claude/skills/skillforge/SKILL.md:185
- reference references/phase4-synthesis-deep-dive.md — .claude/skills/skillforge/SKILL.md:195
- reference references/synthesis-protocol.md — .claude/skills/skillforge/SKILL.md:196
- reference references/evolution-scoring.md — .claude/skills/skillforge/SKILL.md:206
- reference references/evolution-timelessness.md — .claude/skills/skillforge/SKILL.md:207
- reference references/architecture-patterns.md — .claude/skills/skillforge/SKILL.md:208
- reference references/configuration.md — .claude/skills/skillforge/SKILL.md:314
- reference references/changelog.md — .claude/skills/skillforge/SKILL.md:315
- script quick_validate.py — .claude/skills/skillforge/SKILL.md:225
- script validate-skill.py — .claude/skills/skillforge/SKILL.md:226
- script package_skill.py — .claude/skills/skillforge/SKILL.md:227
- script triage_skill_request.py — .claude/skills/skillforge/SKILL.md:278
- script discover_skills.py — .claude/skills/skillforge/SKILL.md:279
- script init_skill.py — .claude/skills/skillforge/SKILL.md:280
- script skill_modularity_audit.py — .claude/skills/skillforge/SKILL.md:283
- script check_docs_safety.py — .claude/skills/skillforge/SKILL.md:285
- script frontmatter.py — .claude/skills/skillforge/SKILL.md:286
- script _constants.py — .claude/skills/skillforge/SKILL.md:287
- skill slashcommandcreator — .claude/skills/skillforge/SKILL.md:3
- skill skill-composer — .claude/skills/skillforge/SKILL.md:321
- skill claude-authoring-guide — .claude/skills/skillforge/SKILL.md:321
- skill codereview — .claude/skills/skillforge/SKILL.md:321
- skill maker-framework — .claude/skills/skillforge/SKILL.md:321
- doc docs/SKILL-AUTHORING.md — .claude/skills/skillforge/SKILL.md:264
- script scripts/validation/instruction_budget.py — .claude/skills/skillforge/SKILL.md:248
- reference context-optimizer/references/model-context-doctrine.md — .claude/skills/skillforge/SKILL.md:248

## Invoked by — required
- doc docs/SKILL-AUTHORING.md — docs/SKILL-AUTHORING.md:324
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:6841
- skill autoplan — src/copilot-cli/skills/autoplan/SKILL.md:133
- script triage_skill_request.py — .claude/skills/skillforge/scripts/triage_skill_request.py:5

## Concepts named — required, verbatim
- `skillforge` — .claude/skills/skillforge/SKILL.md:2 — defined here
- `SkillForge` — .claude/skills/skillforge/SKILL.md:20 — defined here
- `meta-skill` — .claude/skills/skillforge/SKILL.md:14 — defined here | used here
- `orchestrator` — .claude/skills/skillforge/SKILL.md:15 — defined here | used here
- `Phase 0: Skill Triage` — .claude/skills/skillforge/SKILL.md:120 — defined here
- `Phase 0 triage` — .claude/skills/skillforge/SKILL.md:3 — defined here | used here
- `Phase 1: Deep Analysis` — .claude/skills/skillforge/SKILL.md:152 — defined here
- `Phase 2: Specification` — .claude/skills/skillforge/SKILL.md:164 — defined here
- `Phase 3: Generation` — .claude/skills/skillforge/SKILL.md:176 — defined here
- `Phase 4: Synthesis Panel` — .claude/skills/skillforge/SKILL.md:189 — defined here
- `USE_EXISTING` — .claude/skills/skillforge/SKILL.md:84 — defined here | used here
- `IMPROVE_EXISTING` — .claude/skills/skillforge/SKILL.md:84 — defined here | used here
- `CREATE_NEW` — .claude/skills/skillforge/SKILL.md:84 — defined here | used here
- `COMPOSE` — .claude/skills/skillforge/SKILL.md:84 — defined here | used here
- `CLARIFY` — .claude/skills/skillforge/SKILL.md:84 — defined here | used here
- `Tool Escalation Policy` — .claude/skills/skillforge/SKILL.md:100 — defined here
- `Adapting an external skill source` — .claude/skills/skillforge/SKILL.md:131 — defined here
- `Source identity first` — .claude/skills/skillforge/SKILL.md:136 — defined here
- `Reuse over duplication` — .claude/skills/skillforge/SKILL.md:140 — defined here
- `Reject product coupling` — .claude/skills/skillforge/SKILL.md:144 — defined here
- `Evolution and Architecture Selection` — .claude/skills/skillforge/SKILL.md:200 — defined here
- `Validation and Packaging` — .claude/skills/skillforge/SKILL.md:212 — defined here
- `Anti-Patterns` — .claude/skills/skillforge/SKILL.md:236 — defined here
- `Progressive disclosure` — .claude/skills/skillforge/SKILL.md:248 — used here
- `Verification Checklist` — .claude/skills/skillforge/SKILL.md:253 — defined here

## Structure
- `# SkillForge 4.1 - Intelligent Skill Router and Creator` — .claude/skills/skillforge/SKILL.md:20
- `## Quick Start` — .claude/skills/skillforge/SKILL.md:26
- `## Triggers` — .claude/skills/skillforge/SKILL.md:53
- `### Creation Triggers` — .claude/skills/skillforge/SKILL.md:55
- `### Routing Triggers` — .claude/skills/skillforge/SKILL.md:63
- `## Process Overview` — .claude/skills/skillforge/SKILL.md:79
- `### Tool Escalation Policy` — .claude/skills/skillforge/SKILL.md:100
- `## Commands` — .claude/skills/skillforge/SKILL.md:108
- `## Phase 0: Skill Triage` — .claude/skills/skillforge/SKILL.md:120
- `### Adapting an external skill source` — .claude/skills/skillforge/SKILL.md:131
- `## Phase 1: Deep Analysis` — .claude/skills/skillforge/SKILL.md:152
- `## Phase 2: Specification` — .claude/skills/skillforge/SKILL.md:164
- `## Phase 3: Generation` — .claude/skills/skillforge/SKILL.md:176
- `## Phase 4: Synthesis Panel` — .claude/skills/skillforge/SKILL.md:189
- `## Evolution and Architecture Selection` — .claude/skills/skillforge/SKILL.md:200
- `## Validation and Packaging` — .claude/skills/skillforge/SKILL.md:212
- `## Anti-Patterns` — .claude/skills/skillforge/SKILL.md:236
- `## Verification Checklist` — .claude/skills/skillforge/SKILL.md:253
- `## Scripts` — .claude/skills/skillforge/SKILL.md:272
- `## References` — .claude/skills/skillforge/SKILL.md:293
- `## Related Skills` — .claude/skills/skillforge/SKILL.md:319
- `## Extension Points` — .claude/skills/skillforge/SKILL.md:323

## Scripts — required if type is script or the skill ships scripts
The skill ships 8 executable scripts in `scripts/`:

### validate-skill.py
- path: `.claude/skills/skillforge/scripts/validate-skill.py`
- language: Python (python3)
- lines: 830
- documented invocation:
  - `python "$FORGE/validate-skill.py" skills/my-skill/` — .claude/skills/skillforge/SKILL.md:226
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py sources/rjm/.claude/skills/skillforge`
- abridged stdout:
  ```text
  ============================================================
  Skill Validation Report: skillforge
  ============================================================
  File: sources/rjm/.claude/skills/skillforge/SKILL.md
  Checks: 69/79 passed
  ===========================ERRORS===========================
    ✗ user-invocable must be a boolean (got str)
  ```
- actual exit code: 1
- documented exit codes vs actual exit paths:
  - Documented: `0` on success and non-zero on failure (`1` general; individual scripts add `2` or `3` for specific precondition failures, documented in each script's `--help`) — .claude/skills/skillforge/SKILL.md:274-275
  - Actual in code: `sys.exit(0 if passed else 1)` at line 825, `sys.exit(1)` at line 818
- for validators/gates: can exit non-zero. Fails on source repo's default branch on `skillforge` (exit 1) due to fallback frontmatter parser in `validate-skill.py` returning `str` instead of `bool` for `user-invocable: true` when PyYAML is not installed.
- does the output match what the documentation claims: partial (runs structural checks as described, but fails validation on itself when PyYAML is unavailable).

### quick_validate.py
- path: `.claude/skills/skillforge/scripts/quick_validate.py`
- language: Python (python3)
- lines: 343
- documented invocation:
  - `python "$FORGE/quick_validate.py" skills/my-skill/` — .claude/skills/skillforge/SKILL.md:225
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/quick_validate.py sources/rjm/.claude/skills/skillforge`
- abridged stdout: `✅ Skill is valid!`
- actual exit code: 0
- documented exit codes: `0` on success, non-zero on failure (`1`)
- for validators/gates: passes on source repo's default branch for `skillforge`.
- does the output match what the documentation claims: yes.

### package_skill.py
- path: `.claude/skills/skillforge/scripts/package_skill.py`
- language: Python (python3)
- lines: 168
- documented invocation:
  - `python "$FORGE/package_skill.py" skills/my-skill/ ./dist` — .claude/skills/skillforge/SKILL.md:227
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/package_skill.py --help`
- abridged stdout: `usage: package_skill.py [-h] skill_path output_dir`
- actual exit code: 0
- documented exit codes vs actual exit paths: documented `0` on success, non-zero on failure; actual `sys.exit(0)` on success, `sys.exit(1)` on error.
- does the output match what the documentation claims: yes.

### triage_skill_request.py
- path: `.claude/skills/skillforge/scripts/triage_skill_request.py`
- language: Python (python3)
- lines: 794
- documented invocation:
  - `SkillForge --triage {input}` — .claude/skills/skillforge/SKILL.md:115
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/triage_skill_request.py --help`
- abridged stdout: `usage: triage_skill_request.py [-h] [--json] input_text`
- actual exit code: 0
- documented exit codes: `0` on success, `1` on general failure, `2` on missing index.
- does the output match what the documentation claims: yes.

### discover_skills.py
- path: `.claude/skills/skillforge/scripts/discover_skills.py`
- language: Python (python3)
- lines: 442
- documented invocation:
  - `discover_skills.py` — .claude/skills/skillforge/SKILL.md:279
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/discover_skills.py --help`
- abridged stdout: `usage: discover_skills.py [-h] [--format {json,table}] [--refresh] [paths ...]`
- actual exit code: 0
- documented exit codes: `0` on success, non-zero on failure.
- does the output match what the documentation claims: yes.

### init_skill.py
- path: `.claude/skills/skillforge/scripts/init_skill.py`
- language: Python (python3)
- lines: 281
- documented invocation:
  - `init_skill.py` — .claude/skills/skillforge/SKILL.md:280
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/init_skill.py --help`
- abridged stdout: `usage: init_skill.py [-h] [--path PATH] [--force] name description`
- actual exit code: 0
- documented exit codes: `0` on success, non-zero on failure.
- does the output match what the documentation claims: yes.

### skill_modularity_audit.py
- path: `.claude/skills/skillforge/scripts/skill_modularity_audit.py`
- language: Python (python3)
- lines: 371
- documented invocation:
  - `skill_modularity_audit.py` — .claude/skills/skillforge/SKILL.md:283
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/skill_modularity_audit.py --help`
- abridged stdout: `usage: skill_modularity_audit.py [-h] [--ci] [--json] [skill_dir]`
- actual exit code: 0
- documented exit codes: `0` on success, non-zero on audit failure.
- does the output match what the documentation claims: yes.

### check_docs_safety.py
- path: `.claude/skills/skillforge/scripts/check_docs_safety.py`
- language: Python (python3)
- lines: 67
- documented invocation:
  - `python scripts/check_docs_safety.py` — .claude/skills/skillforge/SKILL.md:263
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/check_docs_safety.py --help`
- abridged stdout: `usage: check_docs_safety.py [-h] [path]`
- actual exit code: 0
- documented exit codes: `0` on success, `1` on security check failure.
- does the output match what the documentation claims: yes.

## Defects — required
- `doc-drift`: In `.claude/skills/skillforge/SKILL.md:225-226`, validation commands suggest running `quick_validate.py` and `validate-skill.py` against `skills/my-skill/` after changing directory to `$HOME/.claude`, but both validators enforce CWE-22 path containment checks that reject directories outside the current working directory.
- `script-bug`: In `.claude/skills/skillforge/SKILL.md:274`, documentation states scripts fall back to a stdlib parser when PyYAML is not installed, but running `validate-skill.py` without PyYAML causes `_parse_frontmatter_fallback` to store `user-invocable` as `str`, causing validation to fail on `SKILL.md` itself.
- `missing-path`: In `.claude/skills/skillforge/SKILL.md:248`, reference path `context-optimizer/references/model-context-doctrine.md` lacks the repository root prefix `.claude/skills/` required for direct filesystem resolution.

## Observations
- SkillForge 4.1 implements a comprehensive 5-phase authoring pipeline designed around progressive disclosure, keeping `SKILL.md` concise while moving in-depth reference material into dedicated modular files under `references/`.
- The skill includes an explicit external skill catalog adaptation policy with three mandatory guardrails (source identity first, reuse over duplication, reject product coupling) to prevent vendor lock-in.
- Integrates self-verification tooling via 8 specialized Python scripts covering the full lifecycle from scaffolding to modularity auditing and packaging.

## Context cost
16,036 bytes (approx. 4,000 tokens). Invokes 19 reference documents (~120 KB, ~30,000 tokens) and 8 companion scripts (~130 KB, ~32,500 tokens), yielding an aggregated context footprint of ~266 KB (~66,500 tokens) across the full skill definition.
