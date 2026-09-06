---
package: matt
path: CHANGELOG.md
type: doc
bytes: 44408
unit: inv-matt-3
deprecated: false
aliases: []
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CHANGELOG.md

## Purpose — required, verbatim
> "# mattpocock-skills" — CHANGELOG.md:1 (no explicit purpose statement)

## Design intent — required
Tracks the comprehensive release history, semantic versioning increments, breaking changes, feature additions, bug fixes, skill graduations, and refactorings across the `mattpocock-skills` package (versions 1.0.0 through 1.2.3). Managed via Changesets, it documents the structural evolution of the skill suite—including promoting experimental skills (`wayfinder`, `wizard`, `to-questionnaire`), deprecating or removing obsolete skills (`caveman`, `zoom-out`, `write-a-skill`, `to-prd`, `to-plan`, `to-issues`), integrating Codex metadata via `agents/openai.yaml` alongside Claude Code frontmatter, publishing as an official Claude Code plugin, and standardizing agent prompt patterns (such as redacting secrets in `diagnosing-bugs`, round-by-round questioning in `grilling`, and concise steering in `wait-what`). Serves as the authoritative chronological log of capabilities and migrations for users and agent harnesses.

## Phase — required
cross-phase

## Inputs — required
Pull request descriptions, commit summaries, Changeset entries, and release metadata contributed by package maintainers.

## Outputs — required
Structured markdown change logs recording release notes, version transitions, breaking changes, migration guidance, and skill lifecycle status updates.

## Invokes — required
- skill diagnosing-bugs — CHANGELOG.md:7
- template scripts/hitl-loop.template.sh — CHANGELOG.md:11
- skill code-review — CHANGELOG.md:13
- skill codebase-design — CHANGELOG.md:13
- skill improve-codebase-architecture — CHANGELOG.md:13
- skill wizard — CHANGELOG.md:15
- skill writing-for-agents — CHANGELOG.md:21
- config agents/openai.yaml — CHANGELOG.md:23
- skill writing-great-skills — CHANGELOG.md:24
- doc README.md — CHANGELOG.md:25
- doc skills/productivity/README.md — CHANGELOG.md:25
- file SKILL.md — CHANGELOG.md:33
- doc .agents/invocation.md — CHANGELOG.md:35
- doc CLAUDE.md — CHANGELOG.md:35
- doc AGENTS.md — CHANGELOG.md:36
- skill to-questionnaire — CHANGELOG.md:38
- doc docs/productivity/to-questionnaire.md — CHANGELOG.md:42
- skill ask-matt — CHANGELOG.md:42
- skill grill-me — CHANGELOG.md:42
- template template.sh — CHANGELOG.md:46
- doc docs/engineering/wizard.md — CHANGELOG.md:52
- skill prototype — CHANGELOG.md:54
- config .claude-plugin/plugin.json — CHANGELOG.md:74
- script skills.sh — CHANGELOG.md:74
- doc .agents/adr/0002-ship-as-a-claude-code-plugin.md — CHANGELOG.md:74
- skill wait-what — CHANGELOG.md:76
- doc CONTEXT.md — CHANGELOG.md:76
- skill grill-with-docs — CHANGELOG.md:80
- skill wayfinder — CHANGELOG.md:82
- skill research — CHANGELOG.md:86
- doc GLOSSARY.md — CHANGELOG.md:90
- doc SKILL-MECHANICS.md — CHANGELOG.md:90
- file package.json — CHANGELOG.md:92
- skill setup-matt-pocock-skills — CHANGELOG.md:115
- skill triage — CHANGELOG.md:117
- doc docs/agents/triage-labels.md — CHANGELOG.md:117
- doc docs/agents/issue-tracker.md — CHANGELOG.md:118
- skill to-tickets — CHANGELOG.md:120
- skill to-spec — CHANGELOG.md:120
- skill grilling — CHANGELOG.md:124
- skill ubiquitous-language — CHANGELOG.md:136
- skill domain-modeling — CHANGELOG.md:136
- skill design-an-interface — CHANGELOG.md:137
- doc DESIGN-IT-TWICE.md — CHANGELOG.md:137
- skill qa — CHANGELOG.md:138
- skill request-refactor-plan — CHANGELOG.md:139
- skill edit-article — CHANGELOG.md:143
- skill obsidian-vault — CHANGELOG.md:144
- skill to-prd — CHANGELOG.md:148
- doc docs/engineering/research.md — CHANGELOG.md:153
- skill tdd — CHANGELOG.md:161
- skill review — CHANGELOG.md:163
- doc docs/engineering/code-review.md — CHANGELOG.md:163
- skill implement — CHANGELOG.md:163
- skill to-issues — CHANGELOG.md:179
- skill to-plan — CHANGELOG.md:181
- doc docs/engineering/to-spec.md — CHANGELOG.md:187
- doc docs/engineering/to-tickets.md — CHANGELOG.md:187
- doc docs/engineering/wayfinder.md — CHANGELOG.md:191
- skill decision-mapping — CHANGELOG.md:193
- doc refactoring.md — CHANGELOG.md:209
- doc tests.md — CHANGELOG.md:211
- skill teach — CHANGELOG.md:223
- doc improve-codebase-architecture/LANGUAGE.md — CHANGELOG.md:235
- doc deep-modules.md — CHANGELOG.md:238
- doc interface-design.md — CHANGELOG.md:238
- skill caveman — CHANGELOG.md:243
- skill zoom-out — CHANGELOG.md:243
- skill diagnose — CHANGELOG.md:250
- skill write-a-skill — CHANGELOG.md:254
- skill resolving-merge-conflicts — CHANGELOG.md:264
- doc docs/invocation.md — CHANGELOG.md:266

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:25

## Concepts named — required, verbatim
- `subagent-dispatch` — CHANGELOG.md:13 — used here
- `model-invokable` — CHANGELOG.md:21 — used here
- `implicit invocation` — CHANGELOG.md:34 — used here
- `User-invoked` — CHANGELOG.md:25 — used here
- `Model-invoked` — CHANGELOG.md:25 — used here
- `dual-harness invocation model` — CHANGELOG.md:35 — defined here
- `grilling session` — CHANGELOG.md:40 — used here
- `time-remaining` — CHANGELOG.md:46 — used here
- `confirmation gates` — CHANGELOG.md:46 — used here
- `guided walkthroughs` — CHANGELOG.md:56 — defined here
- `throwaway branch` — CHANGELOG.md:58 — defined here
- `context pointer` — CHANGELOG.md:58 — defined here
- `Claude Code plugin` — CHANGELOG.md:60 — used here
- `ubiquitous language` — CHANGELOG.md:76 — used here
- `Simplified Technical English` — CHANGELOG.md:76 — used here
- `leading words` — CHANGELOG.md:78 — defined here
- `decision ticket` — CHANGELOG.md:82 — defined here
- `_implementation_ ticket` — CHANGELOG.md:84 — used here
- `Research tickets` — CHANGELOG.md:86 — defined here
- `blocking edges` — CHANGELOG.md:86 — used here
- `Single source of truth` — CHANGELOG.md:92 — defined here
- `YAGNI scoping filter` — CHANGELOG.md:94 — defined here
- `Phase boundaries` — CHANGELOG.md:100 — defined here
- `phase` — CHANGELOG.md:100 — defined here
- `smart zone` — CHANGELOG.md:106 — defined here
- `Wayfinder routing` — CHANGELOG.md:108 — defined here
- `Local-markdown tickets` — CHANGELOG.md:120 — defined here
- `frontier` — CHANGELOG.md:126 — defined here
- `design it twice` — CHANGELOG.md:137 — used here
- `Fowler smell baseline` — CHANGELOG.md:165 — defined here
- `confirmation gate` — CHANGELOG.md:169 — defined here
- `Facts vs. decisions` — CHANGELOG.md:171 — defined here
- `Negation` — CHANGELOG.md:173 — defined here
- `Negative Space` — CHANGELOG.md:173 — defined here
- `background agent` — CHANGELOG.md:177 — defined here
- `primary sources` — CHANGELOG.md:177 — defined here
- `wide refactor` — CHANGELOG.md:179 — defined here
- `blast radius` — CHANGELOG.md:179 — defined here
- `expand–contract` — CHANGELOG.md:179 — defined here
- `tickets` — CHANGELOG.md:183 — defined here
- `tracer-bullet vertical slices` — CHANGELOG.md:183 — defined here
- `native blocking links` — CHANGELOG.md:183 — defined here
- `native sub-issues` — CHANGELOG.md:185 — defined here
- `native blocking edges` — CHANGELOG.md:185 — defined here
- `fog of war` — CHANGELOG.md:193 — defined here
- `the map` — CHANGELOG.md:193 — defined here
- `decisions, not deliverables` — CHANGELOG.md:195 — defined here
- `task` — CHANGELOG.md:201 — defined here
- `HITL` — CHANGELOG.md:202 — defined here
- `AFK` — CHANGELOG.md:202 — defined here
- `seam` — CHANGELOG.md:209 — defined here
- `Tautological tests` — CHANGELOG.md:211 — defined here
- `deep-module vocabulary` — CHANGELOG.md:235 — defined here
- `Commands / Skills` — CHANGELOG.md:266 — used here

## Structure
- `# mattpocock-skills` — CHANGELOG.md:1
- `## 1.2.3` — CHANGELOG.md:3
- `### Patch Changes` — CHANGELOG.md:5
- `## 1.2.2` — CHANGELOG.md:17
- `### Patch Changes` — CHANGELOG.md:19
- `## 1.2.0` — CHANGELOG.md:27
- `### Minor Changes` — CHANGELOG.md:29
- `### Patch Changes` — CHANGELOG.md:96
- `## 1.1.0` — CHANGELOG.md:157
- `### Minor Changes` — CHANGELOG.md:159
- `### Patch Changes` — CHANGELOG.md:205
- `## 1.0.1` — CHANGELOG.md:219
- `### Patch Changes` — CHANGELOG.md:221
- `## 1.0.0` — CHANGELOG.md:225
- `### Major Changes` — CHANGELOG.md:227
- `### Minor Changes` — CHANGELOG.md:262
- `### Patch Changes` — CHANGELOG.md:268

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — CHANGELOG.md:11 — cites "scripts/hitl-loop.template.sh" which does not exist at the repository root; file is located at skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh.
- doc-drift — CHANGELOG.md:9 — Contains numerous em-dash characters throughout release notes despite CLAUDE.md:25 rule prohibiting em-dashes anywhere in repo prose.

## Observations
Documents extensive lineage of skill naming and capability refactorings, including the evolution from `to-prd`/`to-plan`/`to-issues` into `to-spec` and `to-tickets`, the renaming of `decision-mapping` to `wayfinder`, and the extraction of shared design discipline into `codebase-design` and `domain-modeling`. Demonstrates how Changesets are used to maintain semantic versioning and release notes across multi-harness agent skill repositories.

## Context cost
44408 bytes, 271 lines, approximately 8500 tokens.
