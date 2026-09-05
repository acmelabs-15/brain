---
package: matt
path: external/prototype.md
type: external-doc
bytes: 341956
unit: inv-matt-21
deprecated: false
aliases: []
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/prototype.md

## Purpose — required, verbatim
> "Answer a design question with code you then delete." — external/prototype.md:24

## Design intent — required
Serves as the public web documentation and conceptual guide for the `/prototype` skill on Matt Pocock's AI Hero catalog (aihero.dev/skills-prototype). It solves the problem of developers and autonomous agents getting trapped in endless, ballooning discussions over unresolvable design ambiguities by building throwaway code to answer one specific question. It establishes two distinct prototyping branches: a logic/state model branch that produces a standalone, self-contained HTML file with guided walkthroughs and state inspection, and a UI branch that renders radically different layout variations switchable via URL parameters. It introduces the discipline of capturing the durable verdict in production while preserving the runnable prototype as a primary source on an unmerged branch with a context pointer on the issue, preventing context window pollution while preserving evidentiary rationale for subsequent sessions. Without this document, agents and developers would either over-engineer throwaway explorations into fragile production code, conflate prototyping with full-application sales demos, or lose the evidentiary reasoning behind design decisions across session boundaries.

## Phase — required
matt:Shaping

## Inputs — required
- Design question: "does this state model feel right, or what should this screen look like" — external/prototype.md:25
- Invocation command or agent trigger: "/prototype" — external/prototype.md:28
- Decision ticket on a wayfinder map: "tickets" — external/prototype.md:30
- Logic/state branch question: "Does this logic / state model feel right?" — external/prototype.md:34
- UI branch question: "What should this look like?" — external/prototype.md:35

## Outputs — required
- Self-contained HTML logic demo: "single shareable HTML file" — external/prototype.md:34 with "guided walkthroughs" — external/prototype.md:34 and a "small pure module" — external/prototype.md:34
- UI variations on a single route: "radically different" — external/prototype.md:35 UI variations switchable via "?variant=" — external/prototype.md:35
- Durable design verdict: "answer" — external/prototype.md:40 captured in "a commit message, an ADR, the implementation issue" — external/prototype.md:40
- Secondary source evidence: "context pointer" — external/prototype.md:41 to the throwaway branch left on the implementation issue

## Invokes — required
- command /prototype — external/prototype.md:28
- skill diagnosing-bugs — external/prototype.md:29
- skill wayfinder — external/prototype.md:30
- command /implement — external/prototype.md:48
- skill handoff — external/prototype.md:52
- skill wayfinder — external/prototype.md:66
- skill grill-me — external/prototype.md:67
- skill grill-with-docs — external/prototype.md:67
- skill to-spec — external/prototype.md:67
- skill ask-matt — external/prototype.md:67

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The /prototype Skill` — external/prototype.md:24 — defined here
- `What it does` — external/prototype.md:24 — defined here
- `throwaway code` — external/prototype.md:25 — defined here
- `When to reach for it` — external/prototype.md:27 — defined here
- `/prototype` — external/prototype.md:28 — defined here
- `agent` — external/prototype.md:28 — used here
- `Grilling` — external/prototype.md:29 — used here
- `diagnosing-bugs` — external/prototype.md:29 — used here
- `wayfinder` — external/prototype.md:30 — used here
- `tickets` — external/prototype.md:30 — used here
- `Two branches` — external/prototype.md:31 — defined here
- `single shareable HTML file` — external/prototype.md:34 — defined here
- `guided walkthroughs` — external/prototype.md:34 — defined here
- `free-play buttons` — external/prototype.md:34 — defined here
- `pure module` — external/prototype.md:34 — used here
- `state model` — external/prototype.md:34 — used here
- `UI variations` — external/prototype.md:35 — defined here
- `?variant=` — external/prototype.md:35 — defined here
- `The prototype is a primary source` — external/prototype.md:38 — defined here
- `ADR` — external/prototype.md:40 — used here
- `implementation issue` — external/prototype.md:40 — used here
- `context pointer` — external/prototype.md:41 — used here
- `Common questions` — external/prototype.md:42 — defined here
- `primary source` — external/prototype.md:44 — used here
- `session` — external/prototype.md:44 — used here
- `terminal app` — external/prototype.md:46 — used here
- `/implement` — external/prototype.md:48 — used here
- `context` — external/prototype.md:52 — used here
- `handoff` — external/prototype.md:52 — used here
- `tokens` — external/prototype.md:54 — used here
- `Where it fits` — external/prototype.md:64 — defined here
- `reach-for-it-anytime standalone` — external/prototype.md:65 — defined here
- `decision tickets` — external/prototype.md:66 — used here
- `wayfinder map` — external/prototype.md:66 — used here
- `grill-me` — external/prototype.md:67 — used here
- `grill-with-docs` — external/prototype.md:67 — used here
- `to-spec` — external/prototype.md:67 — used here
- `ask-matt` — external/prototype.md:67 — used here
- `Shaping` — external/prototype.md:5 — used here
- `The Main Flow` — external/prototype.md:5 — used here
- `Getting Started` — external/prototype.md:5 — used here
- `Upkeep` — external/prototype.md:5 — used here
- `Productivity Skills` — external/prototype.md:5 — used here
- `Reference Skills` — external/prototype.md:5 — used here

## Structure
- # The /prototype Skill
- ## What it does
- ## When to reach for it
- ## Two branches
- ## The prototype is a primary source
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
- orphan — external/prototype.md:1 — External documentation page snapshot hosted at https://aihero.dev/skills-prototype is not referenced or invoked by any file in the source repository.
- doc-drift — external/prototype.md:44 — External documentation notes that prototypes are no longer deleted upon completion: "Not any more. It used to be: build it, keep the answer, bin the code." — external/prototype.md:44, whereas earlier discipline called for deletion and the in-repo skill still defines a prototype as "throwaway code that answers a question" — external/prototype.md:25.
- doc-drift — external/prototype.md:46 — Documents retirement of terminal apps in favor of HTML: "The logic branch now emits a single shareable HTML file instead. A terminal app can only be driven by someone with the repo cloned and a runtime installed" — external/prototype.md:46.
- other — external/prototype.md:48 — Documents a known naming problem where flow-unaware agents recommend the skill prematurely: "Known, and it is a naming problem." — external/prototype.md:48 with "the obvious next step" — external/prototype.md:48 recommended even when design was settled.

## Observations
- The external documentation shifts the operational model of prototyping from disposable code ("bin the code") to treating the prototype as an unmerged primary source on a dedicated branch with a context pointer left on the tracker issue.
- Replaces terminal apps with standalone, single-file HTML walkthroughs with tabbed scenarios and state inspection panels, specifically to enable non-technical stakeholders (PMs, designers, domain experts) to test logic models without runtime installation.
- Clarifies scope boundaries: warns against full-application prototyping, noting that open-ended prototypes inevitably become unmaintainable production code by momentum.

## Context cost
341956 bytes, approximately 85,000 tokens (isolated external documentation page).
