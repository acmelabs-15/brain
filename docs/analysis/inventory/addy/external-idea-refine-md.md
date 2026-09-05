---
package: addy
path: external/idea-refine.md
type: doc
bytes: 24943
unit: inv-addy-23
aliases: []
memo_inputs:
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/idea-refine.md

## Purpose — required, verbatim
> "Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one." — external/idea-refine.md:5

## Design intent — required
Web documentation and catalog entry hosted at `skills.addy.ie/skills/idea-refine/` serving as the public discovery and reference page for the `idea-refine` skill. It provides developers and autonomous coding agents with an overview of the skill's ideation methodology, focusing on structured divergent and convergent thinking to sharpen raw concepts and stress-test assumptions before committing to implementation. It supplies standalone and full-pack installation commands via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill idea-refine`), situates the skill within the `Define` lifecycle phase alongside `/spec` and related Define-phase skills (`interview-me`, `spec-driven-development`), summarizes the standardized six-part skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), and links to the canonical `SKILL.md` in GitHub. Without this page, agents and engineers discovering skills through the web portal would lack an indexed catalog entry for early-stage idea refinement, copy-paste CLI installation commands, and lifecycle-phase navigation.

## Phase — required
addy:Define

## Inputs — required
- Trigger condition: "You have a rough idea that needs exploration and stress-testing." — external/idea-refine.md:5
- Installation command: "npx skills add addyosmani/agent-skills --skill idea-refine" — external/idea-refine.md:8
- Target skill source link: `skills/idea-refine/SKILL.md` — external/idea-refine.md:10

## Outputs — required
none

## Invokes — required
- skill idea-refine — external/idea-refine.md:5
- command /spec — external/idea-refine.md:12
- skill interview-me — external/idea-refine.md:12
- skill spec-driven-development — external/idea-refine.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `idea-refine` — external/idea-refine.md:5 — defined here
- `Define phase` — external/idea-refine.md:5 — used here
- `divergent and convergent thinking` — external/idea-refine.md:5 — defined here
- `ideation` — external/idea-refine.md:5 — used here
- `discovery` — external/idea-refine.md:5 — used here
- `skills CLI` — external/idea-refine.md:6 — used here
- `anatomy` — external/idea-refine.md:9 — defined here
- `Overview` — external/idea-refine.md:10 — used here
- `When to Use` — external/idea-refine.md:10 — used here
- `Process` — external/idea-refine.md:10 — used here
- `Rationalizations` — external/idea-refine.md:10 — used here
- `Red Flags` — external/idea-refine.md:10 — used here
- `Verification` — external/idea-refine.md:10 — used here
- `SKILL.md` — external/idea-refine.md:10 — used here
- `Define phase` — external/idea-refine.md:12 — used here
- `/spec` — external/idea-refine.md:12 — used here
- `interview-me` — external/idea-refine.md:12 — used here
- `spec-driven-development` — external/idea-refine.md:12 — used here
- `PRD` — external/idea-refine.md:12 — used here
- `full lifecycle` — external/idea-refine.md:14 — used here
- `The lifecycle` — external/idea-refine.md:15 — used here
- `Loop engineering` — external/idea-refine.md:15 — used here

## Structure
- "idea-refine" — external/idea-refine.md:5
- "Install just this skill" — external/idea-refine.md:5
- "How this skill is structured" — external/idea-refine.md:8
- "Define phase" — external/idea-refine.md:12
- "More in the Define phase" — external/idea-refine.md:12
- "Product" — external/idea-refine.md:15
- "Setup" — external/idea-refine.md:15
- "Resources" — external/idea-refine.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/idea-refine.md:5: External summary ("Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one.") drifts from `skills/idea-refine/SKILL.md:3`, which includes detailed triggering conditions and trigger phrases ("Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Use when an idea is still vague, when you need to stress-test assumptions before committing to a plan, or when you want to expand options before converging on one. Triggers on \"ideate\", \"refine this idea\", or \"stress-test my plan\".").
- doc-drift · external/idea-refine.md:10: Page asserts that "Every skill follows the same anatomy" specifying six sections (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification), but `skills/idea-refine/SKILL.md` implements a different anatomy (How It Works, Usage, Output, Detailed Instructions with Philosophy, Process, Anti-patterns to Avoid, and Tone, Red Flags, Verification), omitting "Rationalizations" entirely and using "Anti-patterns to Avoid".
- doc-drift · external/idea-refine.md:12: The Define phase sidebar card lists `Command /spec` alongside `idea-refine`, but repository command `commands/spec.toml:4` only invokes `spec-driven-development` and does not invoke `idea-refine`.
- orphan · external/idea-refine.md:1: This external documentation snapshot is not invoked or linked by any repository command, agent, or skill in the repository scope.

## Observations
- Web documentation snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/idea-refine/`.
- Documents skill installation via the Vercel open `skills` CLI using `npx skills add addyosmani/agent-skills --skill idea-refine` (individual skill) or `npx skills add addyosmani/agent-skills` (entire skill pack).
- Categorizes `idea-refine` into the `Define` lifecycle phase alongside sibling Define-phase skills `interview-me` and `spec-driven-development`.
- Links back to the canonical skill definition in GitHub at `https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md`.
- Includes Netlify Real User Monitoring (RUM) tracking script snippet at EOF (line 19).

## Context cost
24943 bytes, ~6235 tokens. As an external web catalog documentation page, it is meant for developer browsing and web discovery rather than direct ingestion into an agent's working context window.
