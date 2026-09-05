---
package: addy
path: external/using-agent-skills.md
type: external-doc
bytes: 21955
unit: inv-addy-32
deprecated: false
aliases: []
memo_inputs:
  - {path: external/using-agent-skills.md, sha256: f900bb1f69f838528d2fc85316cb851ca19488a22005f1249ec5d5fc059d32c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/using-agent-skills.md

## Purpose — required, verbatim
> "Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered and invoked - load it first and it routes each task to the right workflow." — external/using-agent-skills.md:5

## Design intent — required
Web documentation and distribution catalog page for Addy Osmani's `using-agent-skills` meta-skill on `skills.addy.ie`. It introduces the central routing meta-skill that governs skill discovery across the agent-skills ecosystem, places it in the Meta lifecycle phase, provides one-line CLI installation commands via the Vercel open skills CLI (both for this specific skill and the entire repository pack), presents the standardized 6-section skill anatomy, and links to the upstream GitHub repository definition. Without this page, users and autonomous agents exploring the catalog website would lack an indexed entry point explaining how skills are organized, how discovery is sequenced, and how the meta-skill routes arriving tasks to dedicated engineering workflows.

## Phase — required
addy:Meta (verbatim: "Meta phase" — external/using-agent-skills.md:5)

## Inputs — required
- Triggering conditions: "Starting a session or deciding which skill applies." — external/using-agent-skills.md:5
- Upstream skill definition: "https://github.com/addyosmani/agent-skills/blob/main/skills/using-agent-skills/SKILL.md" — external/using-agent-skills.md:10
- No runtime arguments, filesystem inputs, or environment variables are consumed by this static web documentation snapshot.

## Outputs — required
none

## Invokes — required
- doc SKILL.md — external/using-agent-skills.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `using-agent-skills` — external/using-agent-skills.md:5 — defined here
- `Meta phase` — external/using-agent-skills.md:5 — used here
- `skills CLI` — external/using-agent-skills.md:6 — used here
- `Overview` — external/using-agent-skills.md:10 — used here
- `When to Use` — external/using-agent-skills.md:10 — used here
- `Process` — external/using-agent-skills.md:10 — used here
- `Rationalizations` — external/using-agent-skills.md:10 — used here
- `Red Flags` — external/using-agent-skills.md:10 — used here
- `Verification` — external/using-agent-skills.md:10 — used here
- `SKILL.md` — external/using-agent-skills.md:11 — used here
- `AI coding agents` — external/using-agent-skills.md:13 — used here
- `senior-engineer` — external/using-agent-skills.md:13 — used here
- `lifecycle` — external/using-agent-skills.md:14 — used here

## Structure
- # using-agent-skills — external/using-agent-skills.md:5
- ## Install just this skill — external/using-agent-skills.md:5
- ## How this skill is structured — external/using-agent-skills.md:8
  - 01 Overview — external/using-agent-skills.md:10
  - 02 When to Use — external/using-agent-skills.md:10
  - 03 Process — external/using-agent-skills.md:10
  - 04 Rationalizations — external/using-agent-skills.md:10
  - 05 Red Flags — external/using-agent-skills.md:10
  - 06 Verification — external/using-agent-skills.md:10
- ### Meta phase — external/using-agent-skills.md:12
- ### Product — external/using-agent-skills.md:15
- ### Setup — external/using-agent-skills.md:15
- ### Resources — external/using-agent-skills.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/using-agent-skills.md:9 — The page claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/using-agent-skills.md:9 and shows the standard 6 sections ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"), but the repository file skills/using-agent-skills/SKILL.md diverges completely, containing only "Overview", "Skill Discovery", "Core Operating Behaviors", and "Skill Index", with none of the other 5 sections from the web anatomy.
- doc-drift — external/using-agent-skills.md:5 — External page description adds "load it first and it routes each task to the right workflow." — external/using-agent-skills.md:5, which is absent from skills/using-agent-skills/SKILL.md:3 description.
- orphan — external/using-agent-skills.md:1 — Static web documentation snapshot is an orphan not referenced or linked by any in-scope repository file in sources/addy/.

## Observations
- Provides standalone and pack CLI installation commands: "npx skills add addyosmani/agent-skills --skill using-agent-skills" — external/using-agent-skills.md:8 and "npx skills add addyosmani/agent-skills" — external/using-agent-skills.md:8.
- Canonical URL is "https://skills.addy.ie/skills/using-agent-skills/" — external/using-agent-skills.md:1.
- Characterizes the skill's purpose as routing: "Route work to the right skill and set shared operating rules." — external/using-agent-skills.md:12.

## Context cost
21955 bytes, approximately 5488 tokens. Static HTML documentation snapshot not intended for execution context.
