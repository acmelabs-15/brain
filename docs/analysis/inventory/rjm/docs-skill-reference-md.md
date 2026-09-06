---
package: rjm
path: docs/skill-reference.md
type: doc
bytes: 9268
unit: inv-rjm-193
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/skill-reference.md

## Purpose — required, verbatim
> "Skills are reusable workflow components that agents and users invoke for common tasks. Skills are organized by category in the table below." — docs/skill-reference.md:3

## Design intent — required
Central reference catalog classifying all repository skills into 10 functional domains. Outlines invocation patterns distinguishing Claude Code user/agent triggers (`/skill-name`) from Copilot CLI internal agent invocation, provides concise capability summaries for each skill, documents the deprecation of `incoherence` in favor of `doc-accuracy`, and details optional skill pack installation options.

## Phase — required
cross-phase

## Inputs — required
- "user input" — docs/skill-reference.md:50
- ".editorconfig" — docs/skill-reference.md:100
- "StyleCop" — docs/skill-reference.md:100
- ".agents/governance/golden-principles.md" — docs/skill-reference.md:122
- "git history" — docs/skill-reference.md:198
- "installation.md" — docs/skill-reference.md:174

## Outputs — required
- "threat models" — docs/skill-reference.md:90
- "structured assessment reports" — docs/skill-reference.md:104
- "Service Level Objectives" — docs/skill-reference.md:148
- "health dashboards" — docs/skill-reference.md:202

## Invokes — required
- skill github — docs/skill-reference.md:38
- skill memory — docs/skill-reference.md:54
- skill security-scan — docs/skill-reference.md:80
- skill style-enforcement — docs/skill-reference.md:98
- skill doc-accuracy — docs/skill-reference.md:112
- doc golden-principles.md — docs/skill-reference.md:122
- skill adr-review — docs/skill-reference.md:126
- skill planner — docs/skill-reference.md:156
- doc installation.md — docs/skill-reference.md:174
- skill git-advanced-workflows — docs/skill-reference.md:192
- skill SkillForge — docs/skill-reference.md:214
- skill research-and-incorporate — docs/skill-reference.md:228

## Invoked by — required
- doc README.md — README.md:534
- doc getting-started.md — docs/getting-started.md:197

## Concepts named — required, verbatim
- `Skill Reference` — docs/skill-reference.md:1 — defined here
- `Skill Categories` — docs/skill-reference.md:21 — defined here
- `GitHub Operations` — docs/skill-reference.md:25 — defined here
- `Memory and Knowledge` — docs/skill-reference.md:26 — defined here
- `Security` — docs/skill-reference.md:27 — defined here
- `Code Quality` — docs/skill-reference.md:28 — defined here
- `Architecture and Design` — docs/skill-reference.md:29 — defined here
- `Planning and Strategy` — docs/skill-reference.md:30 — defined here
- `Documentation` — docs/skill-reference.md:31 — defined here
- `Development Workflows` — docs/skill-reference.md:32 — defined here
- `Agent and Skill Management` — docs/skill-reference.md:33 — defined here
- `Research` — docs/skill-reference.md:34 — defined here
- `OWASP Four-Question Framework` — docs/skill-reference.md:90 — used here
- `Commonality Variability Analysis` — docs/skill-reference.md:132 — used here
- `Cynefin Framework` — docs/skill-reference.md:170 — used here
- `Passive Context` — docs/skill-reference.md:188 — used here

## Structure
- # Skill Reference — docs/skill-reference.md:1
- ## How to Use Skills — docs/skill-reference.md:5
- ## Skill Categories — docs/skill-reference.md:21
- ## GitHub Operations — docs/skill-reference.md:36
- ### github — docs/skill-reference.md:38
- ### pr-comment-responder — docs/skill-reference.md:44
- ### github-url-intercept — docs/skill-reference.md:48
- ## Memory and Knowledge — docs/skill-reference.md:52
- ### memory — docs/skill-reference.md:54
- ### memory-enhancement — docs/skill-reference.md:58
- ### memory-documentary — docs/skill-reference.md:62
- ### curating-memories — docs/skill-reference.md:66
- ### exploring-knowledge-graph — docs/skill-reference.md:70
- ### using-forgetful-memory — docs/skill-reference.md:74
- ## Security — docs/skill-reference.md:78
- ### security-scan — docs/skill-reference.md:80
- ### security-detection — docs/skill-reference.md:84
- ### threat-modeling — docs/skill-reference.md:88
- ### codeql-scan — docs/skill-reference.md:92
- ## Code Quality — docs/skill-reference.md:96
- ### style-enforcement — docs/skill-reference.md:98
- ### analyze — docs/skill-reference.md:102
- ### code-qualities-assessment — docs/skill-reference.md:106
- ### incoherence — docs/skill-reference.md:110
- ### taste-lints — docs/skill-reference.md:116
- ### golden-principles — docs/skill-reference.md:120
- ## Architecture and Design — docs/skill-reference.md:124
- ### adr-review — docs/skill-reference.md:126
- ### cva-analysis — docs/skill-reference.md:130
- ### decision-critic — docs/skill-reference.md:134
- ### serena-code-architecture — docs/skill-reference.md:138
- ### chaos-experiment — docs/skill-reference.md:142
- ### slo-designer — docs/skill-reference.md:146
- ### using-serena-symbols — docs/skill-reference.md:150
- ## Planning and Strategy — docs/skill-reference.md:154
- ### planner — docs/skill-reference.md:156
- ### pre-mortem — docs/skill-reference.md:160
- ### buy-vs-build-framework — docs/skill-reference.md:164
- ### cynefin-classifier — docs/skill-reference.md:168
- ### business-strategy (optional pack) — docs/skill-reference.md:172
- ## Documentation — docs/skill-reference.md:176
- ### doc-accuracy — docs/skill-reference.md:178
- ### fix-markdown-fences — docs/skill-reference.md:182
- ### context-optimizer — docs/skill-reference.md:186
- ## Development Workflows — docs/skill-reference.md:190
- ### git-advanced-workflows — docs/skill-reference.md:192
- ### merge-resolver — docs/skill-reference.md:196
- ### metrics — docs/skill-reference.md:200
- ### encode-repo-serena — docs/skill-reference.md:204
- ### steering-matcher — docs/skill-reference.md:208
- ## Agent and Skill Management — docs/skill-reference.md:212
- ### SkillForge — docs/skill-reference.md:214
- ### slashcommandcreator — docs/skill-reference.md:218
- ### reflect — docs/skill-reference.md:222
- ## Research — docs/skill-reference.md:226
- ### research-and-incorporate — docs/skill-reference.md:228
- ### programming-advisor — docs/skill-reference.md:232
- ### prompt-engineer — docs/skill-reference.md:236

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · docs/skill-reference.md:112 · References `.claude/skills/incoherence/scripts/incoherence.py` which does not exist at that path (the incoherence skill was retired in session 2594 and the script relocated to `scripts/incoherence.py`).

## Observations
Catalogs 42 skills across 10 functional domains, establishing the invocation interface across Claude Code and Copilot CLI. Documents deprecation of `incoherence` in favor of `doc-accuracy`. Flags `business-strategy` as an optional pack requiring `npx ai-agents init --pack business`.

## Context cost
9268 bytes, approximately 2300 tokens.
