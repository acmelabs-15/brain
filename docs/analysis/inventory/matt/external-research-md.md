---
package: matt
path: external/research.md
type: external-doc
bytes: 347558
unit: inv-matt-22
deprecated: false
aliases: []
memo_inputs:
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/research.md

## Purpose — required, verbatim
> "Get a cited answer, read from primary sources." — external/research.md:24

## Design intent — required
Delegates documentation discovery and external fact-finding to an asynchronous background agent so that developers and primary agent sessions do not stall or pollute their conversation context with ephemeral reading legwork. It enforces a strict primary-source discipline—requiring claims to be verified directly against official documentation, specifications, source code, or first-party APIs rather than blog posts or summaries—and compiles findings into a durable, cited Markdown document saved directly into the repository. Without it, coding agents either clutter active context with extensive external reading, guess or hallucinate API behaviors, or base critical architectural choices on low-trust secondary sources.

## Phase — required
matt:Shaping (series navigation section 3.3; also categorized as a "A reach-for-it-anytime standalone that feeds the thinking skills rather than sitting in the build chain." — external/research.md:61)

## Inputs — required
- User argument or question: "answers a question by reading the sources that own the answer" — external/research.md:25
- Slash command or automatic trigger: "reaches for it automatically when a task turns into reading legwork." — external/research.md:28
- External inquiry boundary: "from outside the working directory (how a third-party API behaves, what a spec actually says, whether a version claim holds)" — external/research.md:29
- Factual prerequisite: "An external fact a decision is waiting on" — external/research.md:30
- Primary source material: "official docs, source code, specs, first-party APIs." — external/research.md:25
- Scoped inquiry criteria: "A narrow, answerable question (one API, one behaviour, one version claim) comes back far better than" — external/research.md:49
- Research tickets from wayfinder: "created research tickets. Do I resolve those myself?" — external/research.md:50 and "per research ticket and burns them down in parallel" — external/research.md:51

## Outputs — required
- Cited Markdown file in repository: "leaves a cited Markdown file in the repo." — external/research.md:25
- Repo-located note artifact: "The output is a file, written where the repo already keeps such notes, with a link on each claim." — external/research.md:26
- Portable document: "a document you can react to, hand to another agent, or throw away" — external/research.md:26
- Single-run file artifact: "writes one Markdown file, and reports back." — external/research.md:33
- Repository-aligned placement: "Where the file lands is decided by the repo, not by the skill: it matches whatever convention already exists for notes" — external/research.md:35
- Single file constraint: "It writes one file per run." — external/research.md:35
- Reported file path: "One new Markdown file shows up, in the folder the repo already uses for notes, and the agent tells you the path." — external/research.md:56
- Claim citations: "Every claim in it carries a link, and following two at random lands you on an official doc, a spec, or the actual source file" — external/research.md:57
- Background task notification: "Exactly one new background task appears. A second one with a near-identical name is the nesting bug." — external/research.md:55
- Throwaway Git branch with context pointers (via wayfinder): "deleting the branch later breaks the context pointers the tickets hold." — external/research.md:51

## Invokes — required
- skill grilling — external/research.md:30
- skill grill-with-docs — external/research.md:30
- skill prototype — external/research.md:30
- skill wayfinder — external/research.md:30
- skill to-spec — external/research.md:61
- skill ask-matt — external/research.md:61
- command /research — external/research.md:28

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The /research Skill` — external/research.md:24 — defined here
- `primary sources` — external/research.md:25 — used here
- `session` — external/research.md:26 — used here
- `agent` — external/research.md:28 — used here
- `/research` — external/research.md:28 — defined here
- `CONTEXT.md` — external/research.md:30 — used here
- `grilling` — external/research.md:30 — used here
- `grill-with-docs` — external/research.md:30 — used here
- `prototype` — external/research.md:30 — used here
- `wayfinder` — external/research.md:30 — used here
- `shelf life` — external/research.md:31 — used here
- `ADR` — external/research.md:31 — used here
- `background agent` — external/research.md:33 — defined here
- `general-purpose` — external/research.md:38 — used here
- `Agent` — external/research.md:38 — used here
- `subagent` — external/research.md:38 — used here
- `token` — external/research.md:38 — used here
- `ADRs` — external/research.md:41 — used here
- `model` — external/research.md:43 — used here
- `ticket` — external/research.md:45 — used here
- `context` — external/research.md:47 — used here
- `harness` — external/research.md:47 — used here
- `/wayfinder` — external/research.md:50 — used here
- `research tickets` — external/research.md:50 — defined here
- `context pointer` — external/research.md:51 — used here
- `AFK` — external/research.md:51 — used here
- `to-spec` — external/research.md:61 — used here
- `ask-matt` — external/research.md:61 — used here
- `Shaping` — external/research.md:5 — used here
- `The Main Flow` — external/research.md:5 — used here
- `Getting Started` — external/research.md:5 — used here
- `Upkeep` — external/research.md:5 — used here

## Structure
- # The /research Skill
- ## What it does
- ## When to reach for it
- ## Delegated legwork
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
- orphan — external/research.md:1 — External documentation page snapshot is an orphan not referenced or linked by any in-scope file in sources/matt/.
- other — external/research.md:38 — Unrestricted agent delegation causes recursive subagent execution ("The skill tells its caller to spin up a background agent but does not restrict the agent type" — external/research.md:38, tracked in "issue #530" — external/research.md:38), leading to redundant duplicate runs.
- other — external/research.md:49 — Missing stopping criteria ("There is no stopping criterion in the skill, and this shows up as two complaints that look opposite but are the same gap:" — external/research.md:49) leads to agents either researching excessively deep or omitting critical narrow facts.
- other — external/research.md:51 — Subagent delegation on throwaway research branches has been observed creating draft PRs ("issue #576" — external/research.md:51) and subsequent branch deletion breaks context pointers held by tickets.

## Observations
- Outlines the core philosophy: "Research is legwork you delegate, not thinking you outsource" — external/research.md:33, keeping the main session active and the developer in control of decision making.
- Notes the rough edge in agent delegation: "The delegation is unguarded, and the background agent can spawn a further background agent of its own." — external/research.md:34.
- Highlights that research artifacts have short shelf life compared to architectural records: "A research file records what was true on the day it was written, so a stale one is worse than none." — external/research.md:41.
- Explains why past research files are not auto-loaded into new sessions: "No. Nothing auto-loads a past research file; it is a document sitting in the repo until a human or a skill points at it." — external/research.md:45.
- Demonstrates the context-preservation benefit over ad-hoc prompts: "Two things the skill buys over the prompt: it runs in the background so your session keeps its" — external/research.md:47 clean context and ensures consistent primary-source output format.
- Documents workflow connection with wayfinder: wayfinder "is the one skill that invokes it directly, resolving each research ticket on its map with a" — external/research.md:61 subagent.
- Source snapshot taken from https://aihero.dev/skills-research fetched 2026-09-05T01:31:44.202Z.

## Context cost
347558 bytes, approximately 87,000 tokens (full HTML document snapshot including client-side scripts, styles, and page metadata). 0 loaded runtime dependencies.
