---
package: matt
path: .agents/writing-docs.md
type: agent
bytes: 12688
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/writing-docs.md

## Purpose — required, verbatim
> "The job of a docs page is to relieve it: to orient one reader around one skill so they can hold it in their head, know when to reach for it, and see where it sits in the system. The pages are collectively a distributed router; each is a node." — .agents/writing-docs.md:5

## Design intent — required
Authoring manual and quality checklist for human-facing documentation pages published on `aihero.dev/skills-<skill-name>`. Defines the required four-section anatomy (`What it does`, `When to reach for it`, `Common questions`, `It's working if`), the "defining constraint" requirement, an evidence-based question hunt protocol (using wiki, issues, changelog), absolute URL linking rules, and alignment with the AI Coding Dictionary. Ensures documentation functions as a low-cognitive-load distributed router across user-invoked and model-invoked skills.

## Phase — required
cross-phase

## Inputs — required
Skill implementation files (`SKILL.md`), GitHub issues from `mattpocock/skills`, `CHANGELOG.md`, personal wiki audience questions, and the AI Coding Dictionary repository.

## Outputs — required
Human-facing documentation pages at `docs/<bucket>/<skill-name>.md` for all promoted skills.

## Invokes — required
- doc install-block.md — .agents/writing-docs.md:19
- skill to-spec — .agents/writing-docs.md:25
- skill grill-with-docs — .agents/writing-docs.md:36
- skill teach — .agents/writing-docs.md:36
- skill triage — .agents/writing-docs.md:36
- skill to-tickets — .agents/writing-docs.md:36
- skill setup-matt-pocock-skills — .agents/writing-docs.md:36
- skill implement — .agents/writing-docs.md:66
- skill code-review — .agents/writing-docs.md:66
- skill improve-codebase-architecture — .agents/writing-docs.md:66
- skill diagnosing-bugs — .agents/writing-docs.md:66
- skill prototype — .agents/writing-docs.md:66
- skill handoff — .agents/writing-docs.md:66
- skill ask-matt — .agents/writing-docs.md:68

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:17
- agent .agents/install-block.md — .agents/install-block.md:39

## Concepts named — required, verbatim
- `docs page` — .agents/writing-docs.md:3 — defined here
- `cognitive load` — .agents/writing-docs.md:5 — defined here
- `distributed router` — .agents/writing-docs.md:5 — defined here
- `fixed frame` — .agents/writing-docs.md:15 — defined here
- `defining constraint` — .agents/writing-docs.md:25 — defined here
- `Invocation mode` — .agents/writing-docs.md:31 — defined here
- `Trigger boundary` — .agents/writing-docs.md:32 — defined here
- `leading word` — .agents/writing-docs.md:42 — defined here
- `chain step` — .agents/writing-docs.md:66 — defined here
- `run-once setup` — .agents/writing-docs.md:66 — defined here
- `periodic maintenance` — .agents/writing-docs.md:66 — defined here
- `reach-for-it-anytime standalone` — .agents/writing-docs.md:66 — defined here
- `AI Coding Dictionary` — .agents/writing-docs.md:77 — used here

## Structure
- Writing docs pages — .agents/writing-docs.md:1
- Page structure — .agents/writing-docs.md:13
- Conventions — .agents/writing-docs.md:72
- Done when — .agents/writing-docs.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly specifies the sequential development chain for the matt package: `grill-with-docs → to-spec → to-tickets → implement → code-review` (.agents/writing-docs.md:66). Strictly forbids attributing statements or advice to the author ("never name the author"). Requires looking up actual user confusion points via GitHub issues, changelogs, and audience wikis before drafting FAQs, warning that invented questions teach readers nothing.

## Context cost
12688 bytes, ~2900 tokens. References `.agents/install-block.md` (2780 bytes).
