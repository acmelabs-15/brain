---
package: rjm
path: .claude/skills/skillforge/references/phase0-triage.md
type: reference
bytes: 6246
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/phase0-triage.md

## Purpose — required, verbatim
> "Before creating anything, SkillForge intelligently analyzes your input to determine the best action." — .claude/skills/skillforge/references/phase0-triage.md:5

## Design intent — required
Specifies the three-step triage protocol that executes before any skill creation begins in SkillForge. By classifying arbitrary input into six intent types, scanning an ecosystem index of 250+ skills, and evaluating match confidence against a decision matrix, it prevents redundant skill proliferation, routes users to existing skills, suggests skill composition for multi-domain requests, and limits creation to verified gaps.

## Phase — required
rjm:Phase 0: Skill Triage

## Inputs — required
- Arbitrary user input (prompts, errors, code snippets, URLs, questions, task requests)
- Pre-built skill ecosystem index (`~/.cache/skillrecommender/skill_index.json` scanning `~/.claude/skills/`, `plugins/marketplaces/*`, and `plugins/cache/*`)

## Outputs — required
- Routed action verdict: `USE_EXISTING`, `IMPROVE_EXISTING`, `CREATE_NEW`, `COMPOSE`, or `CLARIFY`
- JSON output from `scripts/triage_skill_request.py` for automated orchestration

## Invokes — required
- script triage_skill_request.py — .claude/skills/skillforge/references/phase0-triage.md:64
- script discover_skills.py — .claude/skills/skillforge/references/phase0-triage.md:86

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:48
- skill skillforge — .claude/skills/skillforge/SKILL.md:128
- skill skillforge — .claude/skills/skillforge/SKILL.md:298

## Concepts named — required, verbatim
- `Phase 0 Skill Triage` — .claude/skills/skillforge/references/phase0-triage.md:1 — defined here
- `INPUT CLASSIFICATION` — .claude/skills/skillforge/references/phase0-triage.md:17 — defined here
- `SKILL ECOSYSTEM SCAN` — .claude/skills/skillforge/references/phase0-triage.md:30 — defined here
- `DECISION MATRIX` — .claude/skills/skillforge/references/phase0-triage.md:38 — defined here
- `USE_EXISTING` — .claude/skills/skillforge/references/phase0-triage.md:54 — defined here
- `IMPROVE_EXISTING` — .claude/skills/skillforge/references/phase0-triage.md:55 — defined here
- `CREATE_NEW` — .claude/skills/skillforge/references/phase0-triage.md:56 — defined here
- `COMPOSE` — .claude/skills/skillforge/references/phase0-triage.md:57 — defined here
- `CLARIFY` — .claude/skills/skillforge/references/phase0-triage.md:58 — defined here

## Structure
- `# Phase 0 Skill Triage` — .claude/skills/skillforge/references/phase0-triage.md:1
- `## Phase 0: Skill Triage (NEW in v4.0)` — .claude/skills/skillforge/references/phase0-triage.md:3
- `### How It Works` — .claude/skills/skillforge/references/phase0-triage.md:7
- `### Decision Actions` — .claude/skills/skillforge/references/phase0-triage.md:50
- `### Triage Script` — .claude/skills/skillforge/references/phase0-triage.md:60
- `### Ecosystem Index` — .claude/skills/skillforge/references/phase0-triage.md:80
- `### Integration with Phases 1-4` — .claude/skills/skillforge/references/phase0-triage.md:92

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The decision matrix thresholds: Match >=80% + explicit create triggers a duplicate warning (`CLARIFY`); Match >=60% for skill questions routes to `USE_EXISTING`; Match 50-79% routes to `IMPROVE_EXISTING`; Match <50% + explicit create routes to `CREATE_NEW`.

## Context cost
6,246 bytes (~1,561 tokens).
