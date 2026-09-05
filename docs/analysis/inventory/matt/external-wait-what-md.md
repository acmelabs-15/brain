---
package: matt
path: external/wait-what.md
type: external-doc
bytes: 329864
unit: inv-matt-31
deprecated: false
aliases: []
memo_inputs:
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/wait-what.md

## Purpose — required, verbatim
> "Ask the agent to say that again, in plain English." — external/wait-what.md:24

## Design intent — required
Serves as the public web documentation, discoverability page, and orientation guide for the `/wait-what` skill on Matt Pocock's AI Hero platform (aihero.dev/skills-wait-what). It defines the cognitive and conversational role of `/wait-what`: a lightweight, in-conversation repair mechanism invoked when an agent's explanation fails to land (due to invented jargon, stacked acronyms, or unstated premises). It articulates why brevity instructions ("be concise", `/tldr`, `/no-fluff`) fail by degrading into an unhelpful "caveman register", whereas focusing on listener comprehension ("wait") prompts the agent to back up and supply missing context. It also explains how the skill anchors in existing project artifacts (`CLAUDE.md`, `CONTEXT.md`, and `CONTEXT-MAP.md`) using ASD-STE100 Simplified Technical English to re-pitch with agreed domain vocabulary. Without this page, developers would lack the rationale for why the skill is intentionally minimal (a single prompt line) and how it fits into the broader lifecycle alongside proactive alignment skills like `grill-with-docs`.

## Phase — required
matt:Productivity Skills

## Inputs — required
- User invocation when comprehension fails: "You invoke it by typing" — external/wait-what.md:28 where "The agent will not reach for it on its own, and it shouldn&#x27;t." — external/wait-what.md:28 because "Only you know when you stopped following." — external/wait-what.md:28
- Conversational trigger when skimming or lost: "Use it the second you notice you&#x27;re skimming." — external/wait-what.md:29 when "The agent has drifted into jargon it invented, stacked five acronyms, or explained a decision whose premise you never saw." — external/wait-what.md:29 to ensure "It fixes the conversation you&#x27;re already in." — external/wait-what.md:29
- Prior conversation context: "The skill says re-pitch" — external/wait-what.md:33 that, because "What lost you is usually bigger than one paragraph, so the agent decides how far back to go." — external/wait-what.md:33
- Project context files: "The body reuses the leading words already in your global" — external/wait-what.md:35 `CLAUDE.md` and `CONTEXT.md`, with fallback when "If you have no" — external/wait-what.md:36 `CONTEXT.md` or `CONTEXT-MAP.md` "pointing to one for the context at hand), the skill still works. You lose only the domain-vocabulary half." — external/wait-what.md:36

## Outputs — required
- In-conversation re-pitch: the agent "then re-pitches what it just said. It adds the context you were missing, writes in plain English, and uses the vocabulary from your project&#x27;s" — external/wait-what.md:25 `CONTEXT.md`.
- Clearer output without terse degradation: the output is "shorter and clearer" — external/wait-what.md:39 where "It adds the premise you were missing, instead of only deleting words." — external/wait-what.md:40
- Restored domain vocabulary: "Project nouns replace invented ones. The terms in your" — external/wait-what.md:41 `CONTEXT.md` return, ensuring "You can use it twice in a row, and it does not degrade into terseness." — external/wait-what.md:42
- Persistent artifacts: none (pure in-session repair; writes no workspace files).

## Invokes — required
- command /wait-what — external/wait-what.md:28
- skill grill-with-docs — external/wait-what.md:29
- command /tldr — external/wait-what.md:32
- command /no-fluff — external/wait-what.md:32
- command /talk-normal — external/wait-what.md:32
- file CLAUDE.md — external/wait-what.md:35
- file CONTEXT.md — external/wait-what.md:35
- file CONTEXT-MAP.md — external/wait-what.md:36
- skill domain-modeling — external/wait-what.md:45
- skill ask-matt — external/wait-what.md:45
- skill grill-me — external/wait-what.md:45

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The /wait-what Skill` — external/wait-what.md:24 — defined here
- `wait-what` — external/wait-what.md:25 — defined here
- `agent` — external/wait-what.md:25 — used here
- `re-pitches` — external/wait-what.md:25 — defined here
- `plain English` — external/wait-what.md:25 — used here
- `CONTEXT.md` — external/wait-what.md:25 — used here
- `model` — external/wait-what.md:26 — used here
- `/wait-what` — external/wait-what.md:28 — defined here
- `grill-with-docs` — external/wait-what.md:29 — used here
- `wait` — external/wait-what.md:31 — defined here
- `/tldr` — external/wait-what.md:32 — used here
- `/no-fluff` — external/wait-what.md:32 — used here
- `/talk-normal` — external/wait-what.md:32 — used here
- `caveman register` — external/wait-what.md:32 — defined here
- `CLAUDE.md` — external/wait-what.md:35 — used here
- `ASD-STE100 Simplified Technical English` — external/wait-what.md:35 — used here
- `ubiquitous language` — external/wait-what.md:35 — used here
- `token` — external/wait-what.md:35 — used here
- `CONTEXT-MAP.md` — external/wait-what.md:36 — used here
- `domain-vocabulary` — external/wait-what.md:36 — used here
- `Project nouns` — external/wait-what.md:41 — used here
- `grilling` — external/wait-what.md:45 — used here
- `domain-modeling` — external/wait-what.md:45 — used here
- `ask-matt` — external/wait-what.md:45 — used here
- `Productivity Skills` — external/wait-what.md:5 — used here

## Structure
- # The /wait-what Skill
- ## What it does
- ## When to reach for it
- ## The name is the mechanism
- ## It plugs into the language you already have
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
- orphan — external/wait-what.md:1 — External documentation page snapshot is an orphan not referenced or linked by any in-scope file in sources/matt/.
- doc-drift — external/wait-what.md:26 — Documentation asserts "The skill is three lines long." — external/wait-what.md:26 whereas the actual repository implementation in sources/matt/skills/productivity/wait-what/SKILL.md consists of 8 lines (or 1 prompt line following 5 lines of frontmatter).
- doc-drift — external/wait-what.md:24 — Rendered web documentation includes an H1 heading "The /wait-what Skill" — external/wait-what.md:24 and interactive install block "npx skills@latest add mattpocock/skills --skill=wait-what" — external/wait-what.md:24 which are omitted from the repo's internal markdown source docs/productivity/wait-what.md.

## Observations
- Design philosophy on concision skills: "Skills that fight verbosity fail by growing: a four-hundred-line concision skill still leaves the" — external/wait-what.md:26 model "verbose, because the model reads the volume, not the plea. This one carries a single precise leading word and nothing else." — external/wait-what.md:26
- Listener state vs. output constraint: "An agent that hears &quot;be brief&quot; writes telegrams. An agent that hears &quot;wait, you lost me&quot; backs up and explains." — external/wait-what.md:31
- Critique of popular concision commands: "The model over-corrects into a caveman register that is shorter and no clearer." — external/wait-what.md:32
- Register and terminology grounding: "ASD-STE100 Simplified Technical English sets the register. The ubiquitous language supplies the nouns." — external/wait-what.md:35
- Universal availability and scope: "You can use" — external/wait-what.md:45 `wait-what` "at any point, in any conversation, inside any other skill. It repairs one message after the fact." — external/wait-what.md:45
- Web snapshot provenance: fetched from "https://aihero.dev/skills-wait-what" — external/wait-what.md:1.

## Context cost
329864 bytes, approximately 82,500 tokens (full HTML snapshot including scripts, stylesheets, and hydration payload; core article content is ~3.5 KB, ~800 tokens). 0 loaded runtime dependencies.
