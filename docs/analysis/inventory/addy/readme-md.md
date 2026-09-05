---
package: addy
path: README.md
type: doc
bytes: 25223
unit: inv-addy-34
deprecated: false
aliases: []
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# README.md

## Purpose — required, verbatim
> "Skills encode the workflows, quality gates, and best practices that senior engineers use when building software. These ones are packaged so AI agents follow them consistently across every phase of development." — README.md:5

## Design intent — required
Primary entry point, documentation, and catalog for the `addyosmani/agent-skills` repository. It introduces the 6-phase engineering lifecycle (Define, Plan, Build, Verify, Review, Ship), documents 9 slash commands and 25 skills (24 lifecycle skills plus 1 meta-skill), details 4 agent personas and 7 shared reference checklists, and provides installation and setup guides across more than 10 agent environments and IDEs.

## Phase — required
cross-phase

## Inputs — required
- User requirements, target platform/agent environment, and project context — README.md:46-208, 224-282

## Outputs — required
- Directs agents and users to slash commands, skills, personas, checklists, and platform setup instructions — README.md:22-386

## Invokes — required
- command spec — README.md:28
- command plan — README.md:29
- command build — README.md:30
- command test — README.md:31
- command constraints — README.md:32
- command review — README.md:33
- command webperf — README.md:34
- command code-simplify — README.md:35
- command ship — README.md:36
- skill using-agent-skills — README.md:228
- skill interview-me — README.md:234
- skill idea-refine — README.md:235
- skill spec-driven-development — README.md:236
- skill constraint-driven-development — README.md:237
- skill planning-and-task-breakdown — README.md:243
- skill incremental-implementation — README.md:249
- skill test-driven-development — README.md:250
- skill context-engineering — README.md:251
- skill source-driven-development — README.md:252
- skill doubt-driven-development — README.md:253
- skill frontend-ui-engineering — README.md:254
- skill api-and-interface-design — README.md:255
- skill browser-testing-with-devtools — README.md:261
- skill debugging-and-error-recovery — README.md:262
- skill code-review-and-quality — README.md:268
- skill code-simplification — README.md:269
- skill security-and-hardening — README.md:270
- skill performance-optimization — README.md:271
- skill git-workflow-and-versioning — README.md:277
- skill ci-cd-and-automation — README.md:278
- skill deprecation-and-migration — README.md:279
- skill documentation-and-adrs — README.md:280
- skill observability-and-instrumentation — README.md:281
- skill shipping-and-launch — README.md:282
- agent code-reviewer — README.md:292
- agent test-engineer — README.md:293
- agent security-auditor — README.md:294
- agent web-performance-auditor — README.md:295
- reference definition-of-done.md — README.md:307
- reference testing-patterns.md — README.md:308
- reference security-checklist.md — README.md:309
- reference performance-checklist.md — README.md:310
- reference accessibility-checklist.md — README.md:311
- reference observability-checklist.md — README.md:312
- reference orchestration-patterns.md — README.md:313
- doc docs/adoption-guide.md — README.md:216
- doc docs/agents.md — README.md:297
- doc docs/antigravity-setup.md — README.md:110
- doc docs/codex-setup.md — README.md:184
- doc docs/commandcode-setup.md — README.md:199
- doc docs/comparison.md — README.md:402
- doc docs/copilot-setup.md — README.md:165
- doc docs/cursor-setup.md — README.md:103
- doc docs/gemini-cli-setup.md — README.md:130
- doc docs/getting-started.md — README.md:206
- doc docs/opencode-setup.md — README.md:158
- doc docs/skill-anatomy.md — README.md:410
- doc docs/windsurf-setup.md — README.md:149
- doc CONTRIBUTING.md — README.md:410

## Invoked by — required
none

## Concepts named — required, verbatim
- `Agent Skills` — README.md:1 — defined here
- `DEFINE` — README.md:12 — defined here
- `PLAN` — README.md:12 — defined here
- `BUILD` — README.md:12 — defined here
- `VERIFY` — README.md:12 — defined here
- `REVIEW` — README.md:12 — defined here
- `SHIP` — README.md:12 — defined here
- `Commands` — README.md:22 — defined here
- `/build auto` — README.md:38 — defined here
- `Agent Personas` — README.md:286 — defined here
- `Reference Checklists` — README.md:301 — defined here
- `How Skills Work` — README.md:317 — defined here
- `Process, not prose` — README.md:341 — defined here
- `Anti-rationalization` — README.md:342 — defined here
- `Verification is non-negotiable` — README.md:343 — defined here
- `Progressive disclosure` — README.md:344 — defined here
- `Hyrum's Law` — README.md:396 — used here
- `Beyonce Rule` — README.md:396 — used here
- `test pyramid` — README.md:396 — used here
- `change sizing` — README.md:396 — used here
- `review speed norms` — README.md:396 — used here
- `Chesterton's Fence` — README.md:396 — used here
- `trunk-based development` — README.md:396 — used here
- `Shift Left` — README.md:396 — used here
- `feature flags` — README.md:396 — used here

## Structure
- # Agent Skills — README.md:1
- ## Commands — README.md:22
- ## Quick Start — README.md:44
- ## Adoption — README.md:214
- ## All 24 Skills — README.md:220
- ### Meta - Discover which skill applies — README.md:224
- ### Define - Clarify what to build — README.md:230
- ### Plan - Break it down — README.md:239
- ### Build - Write the code — README.md:245
- ### Verify - Prove it works — README.md:257
- ### Review - Quality gates before merge — README.md:264
- ### Ship - Deploy with confidence — README.md:273
- ## Agent Personas — README.md:286
- ## Reference Checklists — README.md:301
- ## How Skills Work — README.md:317
- ## Project Structure — README.md:348
- ## Why Agent Skills? — README.md:389
- ## How it compares — README.md:400
- ## Contributing — README.md:406
- ## Team — README.md:414
- ## License — README.md:426

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · README.md:220, 222: Section heading announces "All 24 Skills" but text in line 222 immediately clarifies "The pack includes 25 skills total — 24 lifecycle skills plus the using-agent-skills meta-skill."
- doc-drift · README.md:24, 381-383: Commands section describes 9 slash commands, but repository structure tree lists 8 slash commands per directory in `.claude/commands/`, `.gemini/commands/`, and `commands/`.

## Observations
Documents the open skills CLI distribution mechanism (`npx skills add addyosmani/agent-skills`), highlighting the known portability limitation in issue #361 where per-skill npx installs omit the root `references/` directory (lines 61-66). Also introduces `/build auto` for autonomous execution across a decomposed task plan while retaining individual red-green-refactor verification loops (line 38).

## Context cost
25,223 bytes (approx. 6,300 tokens) for this root catalog and documentation file.
