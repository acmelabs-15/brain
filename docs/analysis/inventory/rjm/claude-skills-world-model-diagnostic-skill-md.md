---
package: rjm
path: .claude/skills/world-model-diagnostic/SKILL.md
type: skill
bytes: 14862
unit: inv-rjm-180
in_scope_via: scripts/validation/skill_md_portability_baseline.json
aliases: []
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/world-model-diagnostic/SKILL.md

## Purpose — required, verbatim
> "Your job is not to hand back a polished readiness score. Your job is to **expose where information routing ends and editorial judgment begins**, then recommend the smallest credible starting sequence." — .claude/skills/world-model-diagnostic/SKILL.md:14

## Design intent — required
Twenty-minute diagnostic framework mapping organizations to an appropriate world-model architecture paradigm (vector database, structured ontology, or signal-fidelity) based on signal fidelity, bad interpretive decision costs, and available senior human judgment. Identifies the boundary layer where automated routing ends and human editorial judgment begins, audits critical operational flows to prevent simulated judgment vulnerabilities, evaluates readiness across five qualitative principles without misleading numeric scores, and recommends an ordered three-step implementation sequence.

## Phase — required
none

## Inputs — required
- Trigger phrases:
  - "run the world model diagnostic" — .claude/skills/world-model-diagnostic/SKILL.md:28
  - "audit our world model" — .claude/skills/world-model-diagnostic/SKILL.md:29
  - "which world model architecture fits us" — .claude/skills/world-model-diagnostic/SKILL.md:30
  - "audit where we automate judgment" — .claude/skills/world-model-diagnostic/SKILL.md:31
  - "what should we build first for a world model" — .claude/skills/world-model-diagnostic/SKILL.md:32
- Intake interview responses across company size, industry, cost-of-error environment, top 3-5 data sources ranked by fidelity, decision points, editorial judgment locations, thinned management layers, outcome recording methods, and data capture friction (.claude/skills/world-model-diagnostic/SKILL.md:115-123).
- Prior diagnostic context queried from repo memory layer (`Serena` or `Forgetful`) (.claude/skills/world-model-diagnostic/SKILL.md:97).

## Outputs — required
- Intake summary artifact: `diagnostic-{company-slug}-intake` — .claude/skills/world-model-diagnostic/SKILL.md:213
- Boundary audit summary artifact: `diagnostic-{company-slug}-boundary` — .claude/skills/world-model-diagnostic/SKILL.md:218
- Final assessment artifact: `diagnostic-{company-slug}-assessment` — .claude/skills/world-model-diagnostic/SKILL.md:223
- Optional on-disk diagnostic files under `.agents/analysis/diagnostics/{company-slug}/` (`YYYY-MM-DD-intake.md`, `YYYY-MM-DD-boundary-audit.md`, `YYYY-MM-DD-assessment.md`, `YYYY-MM-DD-full-diagnostic.md`) — .claude/skills/world-model-diagnostic/SKILL.md:226
- Structured diagnostic assessment (markdown or JSON) specifying firm findings, inferences, open questions, paradigm fit, boundary status, and recommended build order — .claude/skills/world-model-diagnostic/SKILL.md:178-203

## Invokes — required
- skill analyst — .claude/skills/world-model-diagnostic/SKILL.md:44
- skill architect — .claude/skills/world-model-diagnostic/SKILL.md:44
- skill roadmap — .claude/skills/world-model-diagnostic/SKILL.md:45
- skill work-operating-model — .claude/skills/world-model-diagnostic/SKILL.md:290
- skill panning-for-gold — .claude/skills/world-model-diagnostic/SKILL.md:291
- skill codebase-documenter — .claude/skills/world-model-diagnostic/SKILL.md:292

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `world-model-diagnostic` — .claude/skills/world-model-diagnostic/SKILL.md:2 — defined here
- `vector DB` — .claude/skills/world-model-diagnostic/SKILL.md:4 — used here
- `structured ontology` — .claude/skills/world-model-diagnostic/SKILL.md:4 — used here
- `signal-fidelity` — .claude/skills/world-model-diagnostic/SKILL.md:4 — used here
- `work-operating-model` — .claude/skills/world-model-diagnostic/SKILL.md:4 — used here
- `editorial judgment` — .claude/skills/world-model-diagnostic/SKILL.md:14 — used here
- `boundary layer` — .claude/skills/world-model-diagnostic/SKILL.md:20 — used here
- `simulated judgment` — .claude/skills/world-model-diagnostic/SKILL.md:21 — used here
- `Firm finding` — .claude/skills/world-model-diagnostic/SKILL.md:52 — defined here
- `Inference` — .claude/skills/world-model-diagnostic/SKILL.md:53 — defined here
- `Open question` — .claude/skills/world-model-diagnostic/SKILL.md:54 — defined here
- `vector database` — .claude/skills/world-model-diagnostic/SKILL.md:70 — used here
- `signal fidelity` — .claude/skills/world-model-diagnostic/SKILL.md:87 — defined here
- `earned structure` — .claude/skills/world-model-diagnostic/SKILL.md:88 — defined here
- `outcome encoding` — .claude/skills/world-model-diagnostic/SKILL.md:89 — defined here
- `organizational resistance` — .claude/skills/world-model-diagnostic/SKILL.md:90 — defined here
- `time in system` — .claude/skills/world-model-diagnostic/SKILL.md:91 — defined here
- `Serena` — .claude/skills/world-model-diagnostic/SKILL.md:97 — used here
- `Forgetful` — .claude/skills/world-model-diagnostic/SKILL.md:97 — used here
- `Boundary Audit` — .claude/skills/world-model-diagnostic/SKILL.md:142 — defined here
- `panning-for-gold` — .claude/skills/world-model-diagnostic/SKILL.md:291 — used here
- `codebase-documenter` — .claude/skills/world-model-diagnostic/SKILL.md:292 — used here

## Structure
- # World Model Diagnostic — .claude/skills/world-model-diagnostic/SKILL.md:8
- ## Purpose — .claude/skills/world-model-diagnostic/SKILL.md:12
- ## Triggers — .claude/skills/world-model-diagnostic/SKILL.md:24
- ## When to Use — .claude/skills/world-model-diagnostic/SKILL.md:34
- ## Non-Negotiable Rules — .claude/skills/world-model-diagnostic/SKILL.md:48
- ## Paradigm Mapping Contract — .claude/skills/world-model-diagnostic/SKILL.md:64
- ## Five-Principle Evaluation — .claude/skills/world-model-diagnostic/SKILL.md:81
- ## Process — .claude/skills/world-model-diagnostic/SKILL.md:93
- ### Phase 1: Orientation — .claude/skills/world-model-diagnostic/SKILL.md:95
- ### Phase 2: Intake — .claude/skills/world-model-diagnostic/SKILL.md:109
- ### Phase 3: Classification — .claude/skills/world-model-diagnostic/SKILL.md:131
- ### Phase 4: Boundary Audit — .claude/skills/world-model-diagnostic/SKILL.md:142
- ### Phase 5: Final Assessment — .claude/skills/world-model-diagnostic/SKILL.md:163
- ## Persistence — .claude/skills/world-model-diagnostic/SKILL.md:207
- ### 1. Intake Summary — .claude/skills/world-model-diagnostic/SKILL.md:211
- ### 2. Boundary Audit Summary — .claude/skills/world-model-diagnostic/SKILL.md:216
- ### 3. Final Assessment — .claude/skills/world-model-diagnostic/SKILL.md:221
- ## Interview Style — .claude/skills/world-model-diagnostic/SKILL.md:228
- ## Paradigm Definitions — .claude/skills/world-model-diagnostic/SKILL.md:237
- ### Vector Database — .claude/skills/world-model-diagnostic/SKILL.md:239
- ### Structured Ontology — .claude/skills/world-model-diagnostic/SKILL.md:246
- ### Signal-Fidelity — .claude/skills/world-model-diagnostic/SKILL.md:253
- ## Common Pitfalls — .claude/skills/world-model-diagnostic/SKILL.md:260
- ### Mistaking "we have data" for "we have signal" — .claude/skills/world-model-diagnostic/SKILL.md:262
- ### Automating judgment that should stay human — .claude/skills/world-model-diagnostic/SKILL.md:268
- ### Building structure before patterns emerge — .claude/skills/world-model-diagnostic/SKILL.md:274
- ### Missing the boundary layer entirely — .claude/skills/world-model-diagnostic/SKILL.md:280
- ## Integration — .claude/skills/world-model-diagnostic/SKILL.md:286
- ## Verification — .claude/skills/world-model-diagnostic/SKILL.md:296

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/world-model-diagnostic/SKILL.md:290 · Companion skill `work-operating-model` is referenced as in-flight issue #1806 but does not exist in repository.
- `orphan` · .claude/skills/world-model-diagnostic/SKILL.md:2 · Diagnostic skill is not invoked by any core lifecycle command or entry point.

## Observations
- Ported from upstream OpenClaw catalog (credited to Jonathan Edwards at line 10) per session 1760 history notes.
- Strictly forbids numeric readiness scoring (rule 1, line 50), enforcing qualitative rigor and labeling conclusions as firm findings, inferences, or open questions.
- Includes vendor portability notice at line 304 with an optional on-disk note path under `.agents/analysis/diagnostics/{company-slug}/`.

## Context cost
14862 bytes. Approximately 3715 tokens.
