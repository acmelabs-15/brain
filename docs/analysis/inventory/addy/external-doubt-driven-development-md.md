---
package: addy
path: external/doubt-driven-development.md
type: doc
bytes: 26502
unit: inv-addy-20
aliases: []
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/doubt-driven-development.md

## Purpose — required, verbatim
> "Subjects every non-trivial decision to a fresh-context adversarial review before it stands: CLAIM → EXTRACT → DOUBT → RECONCILE → STOP, with optional user-authorized cross-model escalation." — external/doubt-driven-development.md:5

## Design intent — required
This external documentation page serves as the public documentation catalog entry and web preview for the `doubt-driven-development` skill on `skills.addy.ie`. It establishes the skill's positioning within the Addy agent-skills ecosystem as a Build-phase verification skill (`addy:Build`), detailing its primary purpose of subjecting non-trivial decisions to fresh-context adversarial review through a 5-step loop (CLAIM → EXTRACT → DOUBT → RECONCILE → STOP) with optional cross-model escalation. It provides copy-paste installation commands via the open `skills CLI` (`npx skills add addyosmani/agent-skills --skill doubt-driven-development`), summarizes the standard 6-part anatomy of agent skills, and provides navigation links to related Build-phase skills (`incremental-implementation`, `test-driven-development`, `context-engineering`). Without this page, users exploring the agent-skills catalog would lack web-accessible documentation, triggering criteria ("Stakes are high, code is unfamiliar, or verifying now beats debugging later"), installation instructions, and cross-skill discovery for adversarial verification workflows.

## Phase — required
addy:Build

## Inputs — required
- Skill triggering conditions: "Stakes are high, code is unfamiliar, or verifying now beats debugging later." — external/doubt-driven-development.md:5
- Upstream source repository reference: "https://github.com/addyosmani/agent-skills/blob/main/skills/doubt-driven-development/SKILL.md" — external/doubt-driven-development.md:10
- Installation tool: open "skills CLI" — external/doubt-driven-development.md:6
- Escalation authorization: "optional user-authorized cross-model escalation" — external/doubt-driven-development.md:5

## Outputs — required
- Skill install command: "npx skills add addyosmani/agent-skills --skill doubt-driven-development" — external/doubt-driven-development.md:8
- Full pack install command: "npx skills add addyosmani/agent-skills" — external/doubt-driven-development.md:8
- Decision workflow loop: "CLAIM → EXTRACT → DOUBT → RECONCILE → STOP" — external/doubt-driven-development.md:5
- No files produced on disk (none)

## Invokes — required
- skill doubt-driven-development — external/doubt-driven-development.md:10
- skill incremental-implementation — external/doubt-driven-development.md:12
- skill test-driven-development — external/doubt-driven-development.md:12
- skill context-engineering — external/doubt-driven-development.md:12
- command /build — external/doubt-driven-development.md:12
- command /test — external/doubt-driven-development.md:12
- doc CONTRIBUTING.md — external/doubt-driven-development.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `doubt-driven-development` — external/doubt-driven-development.md:5 — used here
- `adversarial review` — external/doubt-driven-development.md:5 — defined here
- `CLAIM → EXTRACT → DOUBT → RECONCILE → STOP` — external/doubt-driven-development.md:5 — defined here
- `CLAIM` — external/doubt-driven-development.md:5 — defined here
- `EXTRACT` — external/doubt-driven-development.md:5 — defined here
- `DOUBT` — external/doubt-driven-development.md:5 — defined here
- `RECONCILE` — external/doubt-driven-development.md:5 — defined here
- `STOP` — external/doubt-driven-development.md:5 — defined here
- `cross-model escalation` — external/doubt-driven-development.md:5 — defined here
- `Build phase` — external/doubt-driven-development.md:5 — used here
- `Overview` — external/doubt-driven-development.md:10 — used here
- `When to Use` — external/doubt-driven-development.md:10 — used here
- `Process` — external/doubt-driven-development.md:10 — used here
- `Rationalizations` — external/doubt-driven-development.md:10 — used here
- `Red Flags` — external/doubt-driven-development.md:10 — used here
- `Verification` — external/doubt-driven-development.md:10 — used here
- `SKILL.md` — external/doubt-driven-development.md:11 — used here
- `vertical slices` — external/doubt-driven-development.md:12 — used here
- `incremental-implementation` — external/doubt-driven-development.md:12 — used here
- `test-driven-development` — external/doubt-driven-development.md:12 — used here
- `context-engineering` — external/doubt-driven-development.md:12 — used here
- `Red-Green-Refactor` — external/doubt-driven-development.md:12 — used here
- `test pyramid` — external/doubt-driven-development.md:12 — used here
- `DAMP over DRY` — external/doubt-driven-development.md:12 — used here
- `Beyoncé Rule` — external/doubt-driven-development.md:12 — used here
- `rules files` — external/doubt-driven-development.md:12 — used here
- `context packing` — external/doubt-driven-development.md:12 — used here
- `MCP` — external/doubt-driven-development.md:12 — used here
- `Loop engineering` — external/doubt-driven-development.md:15 — used here
- `Evals framework` — external/doubt-driven-development.md:15 — used here

## Structure
- doubt-driven-development — external/doubt-driven-development.md:5
- Install just this skill — external/doubt-driven-development.md:5
- How this skill is structured — external/doubt-driven-development.md:8
- Build phase — external/doubt-driven-development.md:12
- More in the Build phase — external/doubt-driven-development.md:12
- Product — external/doubt-driven-development.md:15
- Setup — external/doubt-driven-development.md:15
- Resources — external/doubt-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/doubt-driven-development.md:10 · Website anatomy panel displays a static 6-section template ("Process", "Rationalizations") whereas SKILL.md contains eight sections including "Loading Constraints", "The Process", "Common Rationalizations", and "Interaction with Other Skills".
- cross-file-contradiction · external/doubt-driven-development.md:5 · Categorized as Build phase (and associated with /build at line 12), whereas skills/interview-me/SKILL.md:14 groups doubt-driven-development among "Define-phase skills".
- orphan · external/doubt-driven-development.md:1 · External doc snapshot from skills.addy.ie is not linked or referenced by any repository file in sources/addy/.

## Observations
The page cleanly summarizes the 5-step doubt-driven development cycle (`CLAIM → EXTRACT → DOUBT → RECONCILE → STOP`) and its core mechanism of fresh-context adversarial review with user-authorized cross-model escalation. The page is an Astro-rendered HTML snapshot (20 lines, 26,502 bytes) containing navigation headers, CSS style definitions, interactive copy-to-clipboard buttons, an anatomy overview, sidebar phase metadata linking to `/build`, related Build phase skill cards, and footer links. Over 90% of the byte content consists of HTML/CSS scaffolding and navigation rather than executable skill instructions.

## Context cost
26,502 bytes (~6,625 tokens) for this documentation file. If an executing agent loads both this page and the linked `skills/doubt-driven-development/SKILL.md` (16,499 bytes, ~4,125 tokens), total context cost is approximately 43,001 bytes (~10,750 tokens). Most of this file's bytes are presentational markup that an agent cannot operationalize.
