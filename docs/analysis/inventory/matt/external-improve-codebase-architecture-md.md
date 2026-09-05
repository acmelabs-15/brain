---
package: matt
path: external/improve-codebase-architecture.md
type: external-doc
bytes: 368468
unit: inv-matt-20
deprecated: false
aliases: []
memo_inputs:
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/improve-codebase-architecture.md

## Purpose — required, verbatim
> "Find the modules worth refactoring, as a visual report." — external/improve-codebase-architecture.md:24

## Design intent — required
Serves as the public web documentation and conceptual guide for Matt Pocock's `improve-codebase-architecture` skill on `aihero.dev/skills-improve-codebase-architecture`. It explains that the skill is a periodic maintenance survey tool designed to identify architectural friction and "deepening opportunities" — refactoring shallow modules into deep modules that hide significant behavior behind small, stable interfaces — without directly altering repository code. Instead of executing immediate refactorings, it generates an external, visual HTML report with candidate cards, deletion test validation, before/after diagrams, and recommendation strength badges (`Strong`, `Worth exploring`, `Speculative`), followed by a grilling session on a user-chosen candidate that produces a decision for `/to-spec`. Without this guide, developers and AI agents would misunderstand the skill's operational timing (periodic upkeep and pre-build scoping vs. active feature development), confuse it with sibling skills (`codebase-design`, `wayfinder`, `diagnosing-bugs`), encounter silent rendering failures caused by CDN dependencies, or struggle with unconstrained post-report grilling loops.

## Phase — required
matt:Upkeep

## Inputs — required
- Invocation command: "You invoke this by typing" — external/improve-codebase-architecture.md:29
- Direction prompt or spec: "Where a big build is coming up, point it at the spec and ask" — external/improve-codebase-architecture.md:56
- Domain glossary: "None to run it. It reads" — external/improve-codebase-architecture.md:39
- Commit history: "reads recent commit history first and biases the scan toward paths that are actively changing" — external/improve-codebase-architecture.md:27
- User selection: "and then the skill stops and asks which candidate you want to explore." — external/improve-codebase-architecture.md:45

## Outputs — required
- HTML report file: "It writes in two places. The report goes to" — external/improve-codebase-architecture.md:40
- Domain model updates and ADRs: "creating that file if it does not exist, and offer to record a rejected candidate as an ADR so a future run does not re-suggest it." — external/improve-codebase-architecture.md:40
- Architectural decisions: "The output of that session is a decision, not a diff." — external/improve-codebase-architecture.md:47
- Downstream tickets and specs: "you can pick up independently later. Put the chosen improvement into a spec rather than going straight to implementation." — external/improve-codebase-architecture.md:54
- Zero repository code changes: "It never changes the code. The whole run produces one HTML file in your OS temp directory and a conversation;" — external/improve-codebase-architecture.md:26

## Invokes — required
- skill codebase-design — external/improve-codebase-architecture.md:34
- skill wayfinder — external/improve-codebase-architecture.md:35
- skill diagnosing-bugs — external/improve-codebase-architecture.md:36
- reference CONTEXT.md — external/improve-codebase-architecture.md:39
- reference docs/adr/ — external/improve-codebase-architecture.md:39
- skill grilling — external/improve-codebase-architecture.md:47
- skill to-spec — external/improve-codebase-architecture.md:47
- skill to-tickets — external/improve-codebase-architecture.md:47
- skill implement — external/improve-codebase-architecture.md:47
- skill grill-with-docs — external/improve-codebase-architecture.md:58
- reference TYPESCRIPT.md — external/improve-codebase-architecture.md:66
- skill domain-modeling — external/improve-codebase-architecture.md:77
- skill ask-matt — external/improve-codebase-architecture.md:77
- skill tdd — external/improve-codebase-architecture.md:77
- skill research — external/improve-codebase-architecture.md:77

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `improve-codebase-architecture` — external/improve-codebase-architecture.md:25 — defined here
- `deepening opportunities` — external/improve-codebase-architecture.md:25 — defined here
- `shallow module` — external/improve-codebase-architecture.md:25 — defined here
- `deletion test` — external/improve-codebase-architecture.md:27 — defined here
- `Routine upkeep` — external/improve-codebase-architecture.md:31 — used here
- `Before a big build` — external/improve-codebase-architecture.md:31 — used here
- `Brownfield audit` — external/improve-codebase-architecture.md:31 — used here
- `Legacy test work` — external/improve-codebase-architecture.md:31 — used here
- `spec` — external/improve-codebase-architecture.md:31 — used here
- `vibe-coded` — external/improve-codebase-architecture.md:31 — used here
- `codebase-design` — external/improve-codebase-architecture.md:34 — used here
- `wayfinder` — external/improve-codebase-architecture.md:35 — used here
- `diagnosing-bugs` — external/improve-codebase-architecture.md:36 — used here
- `depth` — external/improve-codebase-architecture.md:42 — defined here
- `deep module` — external/improve-codebase-architecture.md:42 — defined here
- `locality` — external/improve-codebase-architecture.md:42 — used here
- `seams` — external/improve-codebase-architecture.md:42 — used here
- `leverage` — external/improve-codebase-architecture.md:43 — used here
- `Strong` — external/improve-codebase-architecture.md:44 — defined here
- `Worth exploring` — external/improve-codebase-architecture.md:44 — defined here
- `Speculative` — external/improve-codebase-architecture.md:44 — defined here
- `Top recommendation` — external/improve-codebase-architecture.md:45 — defined here
- `grilling` — external/improve-codebase-architecture.md:47 — used here
- `to-spec` — external/improve-codebase-architecture.md:47 — used here
- `to-tickets` — external/improve-codebase-architecture.md:47 — used here
- `implement` — external/improve-codebase-architecture.md:47 — used here
- `context window` — external/improve-codebase-architecture.md:54 — used here
- `tickets` — external/improve-codebase-architecture.md:54 — used here
- `grill-with-docs` — external/improve-codebase-architecture.md:58 — used here
- `module` — external/improve-codebase-architecture.md:60 — used here
- `interface` — external/improve-codebase-architecture.md:60 — used here
- `seam` — external/improve-codebase-architecture.md:60 — used here
- `adapter` — external/improve-codebase-architecture.md:60 — used here
- `Agent` — external/improve-codebase-architecture.md:64 — used here
- `subagent_type=Explore` — external/improve-codebase-architecture.md:64 — used here
- `harness` — external/improve-codebase-architecture.md:64 — used here
- `TYPESCRIPT.md` — external/improve-codebase-architecture.md:66 — used here
- `periodic maintenance` — external/improve-codebase-architecture.md:77 — defined here
- `domain-modeling` — external/improve-codebase-architecture.md:77 — used here
- `ask-matt` — external/improve-codebase-architecture.md:77 — used here
- `tdd` — external/improve-codebase-architecture.md:77 — used here
- `research` — external/improve-codebase-architecture.md:77 — used here

## Structure
- The /improve-codebase-architecture Skill
- What it does
- When to reach for it
- Prerequisites
- Depth, and the report that hunts for it
- What happens after you pick one
- Common questions
- It's working if
- Where it fits
- Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/improve-codebase-architecture.md:64 — Describes the exploration phase as explicitly naming Claude Code's Agent tool with `subagent_type=Explore` directly, whereas skills/engineering/improve-codebase-architecture/SKILL.md:27 simply specifies to "spawn a sub-agent to walk the codebase" without naming the harness-specific parameter.
- doc-drift — external/improve-codebase-architecture.md:50 — Details user issues where weaker models bypass candidate selection and jump directly into a lengthy grilling interview ("10's or 100's of questions"), while skills/engineering/improve-codebase-architecture/SKILL.md:60 strictly directs: "Do NOT propose interfaces yet. After the file is written, ask the user: 'Which of these would you like to explore?'"
- missing-path — external/improve-codebase-architecture.md:66 — Acknowledges recurring requests for a `TYPESCRIPT.md` reference defining concrete module and directory layouts for deep modules, but notes that "it does not exist" in the repository.
- orphan — external/improve-codebase-architecture.md:1 — External documentation web snapshot hosted at https://aihero.dev/skills-improve-codebase-architecture; not loaded or invoked directly as an executable skill within the repository.

## Observations
- Survey vs. refactoring separation: "It never changes the code. The whole run produces one HTML file in your OS temp directory and a conversation;" — external/improve-codebase-architecture.md:26. The skill deliberately decouples discovery from implementation to prevent premature or unguided edits.
- Dual-filter candidate selection: Every candidate must satisfy the deletion test ("would removing this module concentrate complexity behind a smaller interface, or just spread it across callers?" — external/improve-codebase-architecture.md:27) and is biased toward actively changing code paths discovered via commit history.
- CDN dependency vulnerability: "The report loads Tailwind and Mermaid from CDNs, so it needs network access when you open it, and it breaks silently when something blocks those scripts." — external/improve-codebase-architecture.md:52. Security hooks demanding Subresource Integrity (SRI) fail due to CDN bytecode differences, and offline environments produce unstyled raw HTML.
- Grilling fatigue and missing flags: "This is the loudest complaint the skill has." — external/improve-codebase-architecture.md:50. The skill lacks a formal flag or parameter to disable post-survey interviewing ("The design intent is that the report comes first and the grill only starts on a candidate you chose" — external/improve-codebase-architecture.md:50).
- Driver vs. reference distinction: "is a reference, not a session driver. It supplies the vocabulary (module, interface, depth, seam, adapter, leverage, locality), and this skill borrows it." — external/improve-codebase-architecture.md:60.
- Web snapshot structure: Snapshot fetched from https://aihero.dev/skills-improve-codebase-architecture (368,468 bytes, 78 lines). Core guidance spans lines 24–77, embedded within Next.js layout, header/footer navigation, and React hydration bundles.

## Context cost
368468 bytes (~92100 tokens total for the complete HTML document; core article text is ~11800 bytes / ~2950 tokens). 0 executable runtime dependencies loaded when read.
