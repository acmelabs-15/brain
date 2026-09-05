---
package: rjm
path: .claude/commands/spec.md
type: command
bytes: 17720
unit: inv-rjm-75
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/spec.md

## Purpose — required, verbatim
> "Define what to build. Transform a problem into testable requirements with acceptance criteria." — .claude/commands/spec.md:2

## Design intent — required
Defines the front-end specification process of the lifecycle that transforms vague problem statements or issue numbers into structured, testable Product Requirement Documents (PRDs) with testable acceptance criteria in EARS syntax. It prevents wasted engineering iterations by enforcing two blocking gates before requirements are drafted: a 6-question first-principles demand gate (forcing evidence of real demand, status quo workarounds, and narrowest wedge) and a memory-first prior-art gate (running git archaeology, decision memory queries, and knowledge-graph traversals scaled to provisional tier). Without this command, features risk solving unvalidated problems, repeating past architectural mistakes, or introducing unreviewed blast-radius dependencies.

## Phase — required
rjm:spec

## Inputs — required
- Problem statement or issue number via argument `$ARGUMENTS` (.claude/commands/spec.md:4, 10, 12).
- Answers to six forcing questions in Step 0 First Principles Gate (Q1 Demand Reality, Q2 Status Quo, Q3 Desperate Specificity, Q4 Narrowest Wedge, Q5 Observation, Q6 Future-fit) (.claude/commands/spec.md:20-30).
- Entity alias mappings from `.agents/dictionaries/spec-entity-aliases.json` (.claude/commands/spec.md:77).
- Gate rules and schemas from `.claude/skills/spec-generator/references/spec-step0-gates.md` (.claude/commands/spec.md:33) and `references/spec-prior-art-schema.md` (.claude/commands/spec.md:131, 133).
- Repository context via `@CLAUDE.md` (.claude/commands/spec.md:7).

## Outputs — required
- Structured `## Step 0 First Principles` block (.claude/commands/spec.md:31).
- `PriorArtBlock` containing `### Direct prior art from memory`, `### Connected context from exploring-knowledge-graph`, and `### Coverage notes` (.claude/commands/spec.md:85, 87, 99, 105, 133).
- Structured requirements document (PRD) containing: Problem statement, User stories, Ontology, Data model, Integrations, Failure modes, Security, Observability, Acceptance criteria (EARS syntax), Out of scope, Deferred, Open questions, CVA summary, Buy-vs-build decision, Complexity classification, Operating Model Context (Tier 5), and ADR cross-reference (Tier 4-5) (.claude/commands/spec.md:157-176).

## Invokes — required
- doc CLAUDE.md — .claude/commands/spec.md:7
- reference references/spec-step0-gates.md — .claude/commands/spec.md:33
- skill memory-gate — .claude/commands/spec.md:37
- skill chestertons-fence — .claude/commands/spec.md:87
- skill memory — .claude/commands/spec.md:88
- script search_memory.py — .claude/commands/spec.md:88
- skill exploring-knowledge-graph — .claude/commands/spec.md:91
- reference references/spec-prior-art-schema.md — .claude/commands/spec.md:133
- skill work-operating-model — .claude/commands/spec.md:136
- skill pre-mortem — .claude/commands/spec.md:165
- skill threat-modeling — .claude/commands/spec.md:166
- skill slo-designer — .claude/commands/spec.md:167
- skill cynefin-classifier — .claude/commands/spec.md:174
- skill adr-generator — .claude/commands/spec.md:176
- skill adr-review — .claude/commands/spec.md:176

## Invoked by — required
- command /spec — README.md:316
- command /spec — docs/workflow-commands.md:45
- doc getting-started.md — docs/getting-started.md:120

## Concepts named — required, verbatim
- `First Principles Gate` — .claude/commands/spec.md:16 — defined here
- `Demand Reality` — .claude/commands/spec.md:24 — defined here
- `Status Quo` — .claude/commands/spec.md:25 — defined here
- `Desperate Specificity` — .claude/commands/spec.md:26 — defined here
- `Narrowest Wedge` — .claude/commands/spec.md:27 — defined here
- `Observation` — .claude/commands/spec.md:28 — defined here
- `Future-fit` — .claude/commands/spec.md:29 — defined here
- `Memory-First Gate` — .claude/commands/spec.md:35 — defined here
- `ProvisionalTier` — .claude/commands/spec.md:41 — defined here
- `topic extraction` — .claude/commands/spec.md:69 — defined here
- `entity adjudication` — .claude/commands/spec.md:112 — defined here
- `Operating-model drift` — .claude/commands/spec.md:135 — defined here
- `Evaluation Axes` — .claude/commands/spec.md:140 — defined here
- `CVA` — .claude/commands/spec.md:150 — used here
- `YAGNI` — .claude/commands/spec.md:151 — used here
- `Separation of Concerns` — .claude/commands/spec.md:152 — used here
- `Buy-vs-build decision` — .claude/commands/spec.md:154 — defined here
- `EARS` — .claude/commands/spec.md:168 — used here

## Structure
- ## Process — .claude/commands/spec.md:14
- ### Step 0: First Principles Gate (blocking, runs before Step 1) — .claude/commands/spec.md:16
- ### Step 0.5: Memory-First Gate (blocking, runs after Step 0) — .claude/commands/spec.md:35
- #### Step 0.5 ProvisionalTier (auto-classified, no user prompt) — .claude/commands/spec.md:41
- #### Step 0.5 topic extraction — .claude/commands/spec.md:69
- #### Step 0.5 skill invocation sequence — .claude/commands/spec.md:83
- #### Step 0.5 degradation rules — .claude/commands/spec.md:101
- #### Step 0.5 entity adjudication — .claude/commands/spec.md:112
- ## Evaluation Axes — .claude/commands/spec.md:140
- ## Principles — .claude/commands/spec.md:149
- ## Output — .claude/commands/spec.md:156

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/workflow-commands.md:53-59 — .claude/commands/spec.md:14 — docs/workflow-commands.md outlines /spec as a 5-step process without mentioning Step 0 First Principles Gate or Step 0.5 Memory-First Gate.

## Observations
- Command delegates detailed schema validation and halt-block rules downstream to `spec-generator` skill references (`spec-step0-gates.md` and `spec-prior-art-schema.md`).
- Multi-tier classification scales the knowledge-graph exploration depth and required sections (such as ADR cross-reference at Tier 4-5 and Operating Model Context at Tier 5).
- Auto-mode entity adjudication applies whole-token equality with alias normalization to prevent broken access control substring bypasses (CWE-863).

## Context cost
17720 bytes (approx. 4430 tokens) plus referenced skills and gate schemas when invoked.
