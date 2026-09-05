---
package: matt
path: external/writing-for-agents.md
type: external-doc
bytes: 345577
unit: inv-matt-34
deprecated: false
aliases: []
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/writing-for-agents.md

## Purpose — required, verbatim
> "How to write skills and other documents agents read." — external/writing-for-agents.md:24

## Design intent — required
Serves as the public web documentation and conceptual guide for the `/writing-for-agents` skill on Matt Pocock's AI Hero catalog (`aihero.dev/skills-writing-for-agents`). It addresses the common failure mode where developers and agents authoring agent-facing documentation over-explain familiar concepts, generating verbose prompts that inflate context load without directing agent behavior. The page establishes the core operating philosophy that writing for agents prioritizes deletion over explanation, evaluating every line through the behavioral "no-op test" and balancing "context load" against "cognitive load." It defines five primary levers (context pointers, information hierarchy / progressive disclosure, completion criteria, leading words, and pruning) and clarifies that these principles govern all agent-facing documents—including skills, `AGENTS.md`, `CLAUDE.md`, specs, tickets, and runtime prompts—rather than skills alone. Without this page, practitioners and agents would lack the foundational architectural framework and diagnostic vocabulary necessary to prune documentation sediment, write high-leverage context pointers, and defend against premature task completion across the skill ecosystem.

## Phase — required
matt:Productivity Skills

## Inputs — required
- Agent-facing document draft or existing document: "a skill, an" — external/writing-for-agents.md:25 `AGENTS.md` / `CLAUDE.md` — external/writing-for-agents.md:25, "a" — external/writing-for-agents.md:25 `spec` — external/writing-for-agents.md:25, "a runtime prompt, a README, any doc an" — external/writing-for-agents.md:25 `agent` — external/writing-for-agents.md:25 reads; "a document you already have as on a blank file." — external/writing-for-agents.md:26; "Use the reference on the draft: a review pass is where most of its value lands." — external/writing-for-agents.md:52
- Slash command invocation or automatic agent trigger: "Type" — external/writing-for-agents.md:29 `/writing-for-agents` — external/writing-for-agents.md:29, "or the agent reaches for it on its own when you&#x27;re creating or editing a skill, or modifying" — external/writing-for-agents.md:29 `AGENTS.md` — external/writing-for-agents.md:29 or `CLAUDE.md` — external/writing-for-agents.md:29
- Manual invocation for other agent-read documents: "Reach for it by hand for everything else an agent reads: your docs, specs and" — external/writing-for-agents.md:30 `tickets` — external/writing-for-agents.md:30, "system and" — external/writing-for-agents.md:30 `AFK` — external/writing-for-agents.md:30 "prompts." — external/writing-for-agents.md:30
- Linked skill mechanics reference (when document is a skill): "The skill-only mechanics (frontmatter, the model- versus user-invoked choice, router skills) are disclosed to a linked" — external/writing-for-agents.md:27 `SKILL-MECHANICS.md` — external/writing-for-agents.md:27 "you read only when the document in front of you is a skill." — external/writing-for-agents.md:27

## Outputs — required
- Streamlined/pruned agent-facing documents with deletion of no-ops: "Its default move is deletion, not explanation." — external/writing-for-agents.md:26; "The document gets shorter as it gets better, and you are surprised how little is left." — external/writing-for-agents.md:67
- Diagnostic evaluation and failure-mode vocabulary: "the failure-mode vocabulary as a diagnostic. When a document misbehaves, that vocabulary is also the repair kit: name the failure mode first, then fix that." — external/writing-for-agents.md:56; "delete the whole sentence rather than trim words from it, and settle a disagreement about it by running the document, not by arguing." — external/writing-for-agents.md:54
- Produced files on disk: none

## Invokes — required
- skill grill-with-docs — external/writing-for-agents.md:30
- reference SKILL-MECHANICS.md — external/writing-for-agents.md:27
- skill ask-matt — external/writing-for-agents.md:73
- command /writing-for-agents — external/writing-for-agents.md:29
- command /writing-great-skills — external/writing-for-agents.md:47
- doc AGENTS.md — external/writing-for-agents.md:25
- doc CLAUDE.md — external/writing-for-agents.md:25
- doc CONTEXT.md — external/writing-for-agents.md:73
- skill grill-me — external/writing-for-agents.md:5
- skill handoff — external/writing-for-agents.md:5
- skill to-questionnaire — external/writing-for-agents.md:5
- skill teach — external/writing-for-agents.md:5
- skill wait-what — external/writing-for-agents.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The /writing-for-agents Skill` — external/writing-for-agents.md:24 — defined here
- `writing-for-agents` — external/writing-for-agents.md:24 — defined here
- `AGENTS.md` — external/writing-for-agents.md:25 — used here
- `CLAUDE.md` — external/writing-for-agents.md:25 — used here
- `spec` — external/writing-for-agents.md:25 — used here
- `runtime prompt` — external/writing-for-agents.md:25 — used here
- `README` — external/writing-for-agents.md:25 — used here
- `agent` — external/writing-for-agents.md:25 — used here
- `process` — external/writing-for-agents.md:25 — used here
- `no-op` — external/writing-for-agents.md:26 — defined here
- `context` — external/writing-for-agents.md:26 — used here
- `model` — external/writing-for-agents.md:26 — used here
- `writing-great-skills` — external/writing-for-agents.md:27 — used here
- `frontmatter` — external/writing-for-agents.md:27 — used here
- `router skills` — external/writing-for-agents.md:27 — used here
- `SKILL-MECHANICS.md` — external/writing-for-agents.md:27 — used here
- `/writing-for-agents` — external/writing-for-agents.md:29 — defined here
- `tickets` — external/writing-for-agents.md:30 — used here
- `AFK` — external/writing-for-agents.md:30 — used here
- `grill-with-docs` — external/writing-for-agents.md:30 — used here
- `The two loads` — external/writing-for-agents.md:31 — defined here
- `Context load` — external/writing-for-agents.md:34 — defined here
- `turn` — external/writing-for-agents.md:34 — used here
- `Cognitive load` — external/writing-for-agents.md:35 — defined here
- `Context pointers` — external/writing-for-agents.md:40 — defined here
- `Information hierarchy` — external/writing-for-agents.md:41 — defined here
- `Progressive disclosure` — external/writing-for-agents.md:41 — defined here
- `Completion criteria` — external/writing-for-agents.md:42 — defined here
- `legwork` — external/writing-for-agents.md:42 — defined here
- `premature completion` — external/writing-for-agents.md:42 — defined here
- `Leading words` — external/writing-for-agents.md:43 — defined here
- `tracer bullet` — external/writing-for-agents.md:43 — used here
- `Pruning` — external/writing-for-agents.md:44 — defined here
- `no-op test` — external/writing-for-agents.md:44 — defined here
- `duplication` — external/writing-for-agents.md:44 — used here
- `sediment` — external/writing-for-agents.md:44 — used here
- `sprawl` — external/writing-for-agents.md:44 — used here
- `/writing-great-skills` — external/writing-for-agents.md:47 — used here
- `failure-mode vocabulary` — external/writing-for-agents.md:56 — defined here
- `session` — external/writing-for-agents.md:58 — used here
- `tokens` — external/writing-for-agents.md:64 — used here
- `standalone reference` — external/writing-for-agents.md:73 — defined here
- `CONTEXT.md` — external/writing-for-agents.md:73 — used here
- `ADRs` — external/writing-for-agents.md:73 — used here
- `ask-matt` — external/writing-for-agents.md:73 — used here
- `Productivity Skills` — external/writing-for-agents.md:5 — used here
- `The Main Flow` — external/writing-for-agents.md:5 — used here
- `Shaping` — external/writing-for-agents.md:5 — used here
- `Upkeep` — external/writing-for-agents.md:5 — used here
- `Reference Skills` — external/writing-for-agents.md:5 — used here
- `Getting Started` — external/writing-for-agents.md:5 — used here

## Structure
- # The /writing-for-agents Skill
- ## What it does
- ## When to reach for it
- ## The two loads
- ## The levers
- ## Common questions
- ## It's working if
- ## Where it fits
- ### You have the skill. Now build the workflow around it.
- ## Install the skills
- ## Related reading
- ### Learn
- ### Cohorts
- ### Account
- ### Agents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — external/writing-for-agents.md:1 — External documentation page snapshot is an orphan not referenced or linked by relative filesystem path by any in-scope file in sources/matt/ (only referenced by external URL in docs/engineering/ask-matt.md:76).
- doc-drift — external/writing-for-agents.md:24 — Rendered external doc page includes an H1 heading ("The /writing-for-agents Skill" — external/writing-for-agents.md:24) and interactive install block ("npx skills@latest add mattpocock/skills --skill=writing-for-agents" — external/writing-for-agents.md:24), both omitted from repo markdown source file docs/productivity/writing-for-agents.md per .agents/writing-docs.md and .agents/install-block.md.
- doc-drift — external/writing-for-agents.md:48 — Mentions historical rename from `/writing-great-skills` in v1.1 ("renamed in v1.1." — external/writing-for-agents.md:48) and explicitly states "There is no alias. Reinstall under the new name." — external/writing-for-agents.md:48, breaking backwards compatibility for callers of the old name.
- doc-drift — external/writing-for-agents.md:54 — Documents model failure mode where agents instructed to streamline trim lines for brevity rather than behavior: "delete the whole sentence rather than trim words from it, and settle a disagreement about it by running the document, not by arguing." — external/writing-for-agents.md:54.
- doc-drift — external/writing-for-agents.md:62 — Documents exemplar over-indexing defect: "The common route (do the work once, then have the agent write it up as a skill) over-indexes on that one run, and the exemplars come out too specific." — external/writing-for-agents.md:62.

## Observations
- Defines the fundamental dichotomy between "Context load" — external/writing-for-agents.md:34 (token and attention cost of always-loaded material on the agent's window) and "Cognitive load" — external/writing-for-agents.md:35 (human cost of knowing which documents exist and when to reach for them).
- Establishes the "no-op test" — external/writing-for-agents.md:44 as a behavioral metric ("The no-op test is behavioural, not aesthetic:" — external/writing-for-agents.md:54): deleting a line and verifying if the agent's behavior changes, rather than editing for prose aesthetics.
- Articulates progressive disclosure in prompt design: in-file steps, in-file references, and disclosed references pushed out behind context pointers ("Progressive disclosure" — external/writing-for-agents.md:41).
- Introduces "leading words" ("Leading words" — external/writing-for-agents.md:43) as pre-trained model priors (e.g. "tracer bullet" — external/writing-for-agents.md:43) that anchor execution in the document body and invocation in the pointer.
- Highlights the role of "Completion criteria" — external/writing-for-agents.md:42 and required "legwork" — external/writing-for-agents.md:42 as defense against "premature completion" — external/writing-for-agents.md:42.
- Classifies the reference as a "reach-for-it-anytime standalone reference" — external/writing-for-agents.md:73 that underpins all skills and outputs ("CONTEXT.md" — external/writing-for-agents.md:73, specs, tickets).
- Header catalog metadata lists skill series position: "21 / 25" — external/writing-for-agents.md:24.
- Snapshot URL: "https://aihero.dev/skills-writing-for-agents" — external/writing-for-agents.md:1.

## Context cost
345577 bytes, approximately 86,000 tokens (full HTML snapshot including Next.js script bundles, stylesheets, and hydration state). 0 loaded runtime dependencies.
