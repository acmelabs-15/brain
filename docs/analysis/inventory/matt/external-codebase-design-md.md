---
package: matt
path: external/codebase-design.md
type: external-doc
bytes: 365134
unit: inv-matt-12
deprecated: false
aliases: []
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/codebase-design.md

## Purpose — required, verbatim
> "The vocabulary for designing deep modules." — external/codebase-design.md:24

## Design intent — required
Serves as the public web documentation and conceptual guide for Matt Pocock's `codebase-design` skill on `aihero.dev/skills-codebase-design`. It establishes a precise, shared architectural vocabulary (module, interface, depth, seam, adapter, leverage, locality) for designing deep modules, explicitly proscribing fuzzy terms ("component", "service", "API", "boundary") and clarifying that the skill is an un-opinionated, scale-agnostic reference rather than an executable driver workflow. Without this page, developers and AI agents discovering or using the skill would lack essential guidance on when to reach for it vs. adjacent skills (such as `domain-modeling`, `improve-codebase-architecture`, `grilling`, and `tdd`), key design principles (like the deletion test and two-adapter seam rule), answers to frequent implementation questions (enforcing deep modules in TypeScript, avoiding unconstrained agent loops, absorbing `design-an-interface`), and concrete observable criteria for when codebase design is functioning effectively.

## Phase — required
cross-phase

## Inputs — required
- Invocation command: "or the agent reaches for it automatically when a design task fits." — external/codebase-design.md:28
- Contextual state: "and you need to think about its shape: where the seam goes, how small the interface can get, whether an extraction is earning its keep." — external/codebase-design.md:29
- Supporting reference files read on demand: `DEEPENING.md` and `DESIGN-IT-TWICE.md` — external/codebase-design.md:43
- User questions or checkpoints: none ("There is no loop to run, no artifact it produces, no checkpoint where it asks you a question." — external/codebase-design.md:26)

## Outputs — required
none

"It is a reference, not a process. There is no loop to run, no artifact it produces, no checkpoint where it asks you a question." — external/codebase-design.md:26

## Invokes — required
- skill domain-modeling — external/codebase-design.md:31
- skill improve-codebase-architecture — external/codebase-design.md:31
- skill grilling — external/codebase-design.md:31
- skill tdd — external/codebase-design.md:31
- reference DEEPENING.md — external/codebase-design.md:43
- reference DESIGN-IT-TWICE.md — external/codebase-design.md:43
- skill grill-with-docs — external/codebase-design.md:48
- skill setup-ts-deep-modules — external/codebase-design.md:46
- skill ask-matt — external/codebase-design.md:68

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `codebase-design` — external/codebase-design.md:25 — defined here
- `module` — external/codebase-design.md:25 — defined here
- `interface` — external/codebase-design.md:25 — defined here
- `depth` — external/codebase-design.md:25 — defined here
- `deep module` — external/codebase-design.md:24 — defined here
- `seam` — external/codebase-design.md:25 — defined here
- `adapter` — external/codebase-design.md:25 — defined here
- `leverage` — external/codebase-design.md:25 — defined here
- `locality` — external/codebase-design.md:25 — defined here
- `component` — external/codebase-design.md:25 — used here
- `service` — external/codebase-design.md:25 — used here
- `API` — external/codebase-design.md:25 — used here
- `boundary` — external/codebase-design.md:25 — used here
- `depth-as-leverage` — external/codebase-design.md:35 — defined here
- `internal seams` — external/codebase-design.md:38 — defined here
- `external seam` — external/codebase-design.md:38 — defined here
- `deletion test` — external/codebase-design.md:39 — defined here
- `pass-through` — external/codebase-design.md:39 — used here
- `test surface` — external/codebase-design.md:40 — defined here
- `hypothetical seam` — external/codebase-design.md:41 — defined here
- `single-adapter seam` — external/codebase-design.md:41 — defined here
- `in-process` — external/codebase-design.md:43 — used here
- `local-substitutable` — external/codebase-design.md:43 — used here
- `remote-but-owned` — external/codebase-design.md:43 — used here
- `true-external` — external/codebase-design.md:43 — used here
- `sub-agents` — external/codebase-design.md:43 — used here
- `design it twice` — external/codebase-design.md:50 — used here
- `design-an-interface` — external/codebase-design.md:50 — used here
- `Agent tool` — external/codebase-design.md:56 — used here
- `connascence` — external/codebase-design.md:58 — used here
- `module secrets` — external/codebase-design.md:58 — used here
- `progressive disclosure` — external/codebase-design.md:58 — used here
- `reach-for-it-anytime standalone` — external/codebase-design.md:68 — used here

## Structure
- The /codebase-design Skill
- What it does
- When to reach for it
- The vocabulary
- The four principles
- Common questions
- It's working if
- Where it fits
- Install the skills
- Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/codebase-design.md:25 — The vocabulary section defines 7 terms but omits "Implementation", which is defined as a primary glossary term in skills/engineering/codebase-design/SKILL.md:18.
- doc-drift — external/codebase-design.md:36 — Presents four principles and supporting documents but omits the "Deep vs shallow" ASCII diagram, the three "Designing for testability" rules and TypeScript examples, and the "Relationships" section found in skills/engineering/codebase-design/SKILL.md:30-104.
- orphan — external/codebase-design.md:1 — External documentation web snapshot hosted at https://aihero.dev/skills-codebase-design; not loaded or invoked directly as an executable skill within the repository.

## Observations
- Reference vs Driver pitfall: "It is a reference, not a process. There is no loop to run, no artifact it produces, no checkpoint where it asks you a question." — external/codebase-design.md:26. When invoked without a driver skill, agents may run open-ended explorations ("The skill is model-invoked and describes itself as vocabulary, but nothing in it hard-stops an agent from treating it as a runnable process." — external/codebase-design.md:48, citing issue #449).
- Absorbed skill: "was removed and absorbed into this skill." — external/codebase-design.md:50 explains that `design-an-interface` was retired and its parallel sub-agent technique preserved in `DESIGN-IT-TWICE.md`.
- Platform portability constraint: "spawn 3+ sub-agents in parallel using the Agent tool" — external/codebase-design.md:56 notes that `DESIGN-IT-TWICE.md` explicitly relies on Claude Code's Agent tool, which is tracked as issue #564 for other harnesses.
- Decoupling from filesystem layout: "deep modules are about the design of the interface and accessing through a strict interface, no matter what the file system looks like." — external/codebase-design.md:52 confirms that modules are conceptual interfaces rather than filesystem folder structures (rejecting issue #95).
- Web snapshot structure: The file is an HTML snapshot of the Next.js page (365,134 bytes). The core article text mirrors docs/engineering/codebase-design.md within lines 24–68, wrapped by navigation, install commands ("npx skills@latest add mattpocock/skills --skill=codebase-design" — external/codebase-design.md:24), and client-side hydration scripts.

## Context cost
365134 bytes (~91280 tokens total for the complete HTML document; core article text is ~13000 bytes / ~3250 tokens). 0 executable runtime dependencies loaded when read.
