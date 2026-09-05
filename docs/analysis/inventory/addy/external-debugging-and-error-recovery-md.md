---
package: addy
path: external/debugging-and-error-recovery.md
type: external-doc
bytes: 23705
unit: inv-addy-18
deprecated: false
aliases: []
memo_inputs:
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/debugging-and-error-recovery.md

## Purpose — required, verbatim
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — external/debugging-and-error-recovery.md:5

## Design intent — required
Provides a public web catalog documentation and discovery page for the `debugging-and-error-recovery` skill within Addy Osmani's agent-skills repository. It explains the skill's purpose, triggering conditions ("Tests fail, builds break, or behavior is unexpected."), installation commands via the `skills` CLI, and its standardized 6-part anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification). It positions the skill within the `addy:Verify` lifecycle phase, associates it with the `/test` command, and surfaces related testing and verification skills such as `browser-testing-with-devtools`. Without this page, agents and users discovering the skill via external web search would lack standardized catalog metadata, installation workflows, and lifecycle positioning.

## Phase — required
`addy:Verify`
> "Verify phase" — external/debugging-and-error-recovery.md:5

## Inputs — required
- HTTP GET requests to `https://skills.addy.ie/skills/debugging-and-error-recovery/`
- Render inputs from the Astro site build system: repository skill definition from `skills/debugging-and-error-recovery/SKILL.md` and site navigation metadata

## Outputs — required
- Rendered web documentation page for `debugging-and-error-recovery`
- CLI installation commands: `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` and `npx skills add addyosmani/agent-skills`
- Hyperlinks to `skills/debugging-and-error-recovery/SKILL.md` on GitHub, `/skills/browser-testing-with-devtools/`, and `/lifecycle/`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Verify phase` — external/debugging-and-error-recovery.md:5 — used here
- `root-cause debugging` — external/debugging-and-error-recovery.md:5 — used here
- `stop-the-line rule` — external/debugging-and-error-recovery.md:5 — used here
- `safe fallbacks` — external/debugging-and-error-recovery.md:5 — used here
- `Overview` — external/debugging-and-error-recovery.md:10 — used here
- `When to Use` — external/debugging-and-error-recovery.md:10 — used here
- `Process` — external/debugging-and-error-recovery.md:10 — used here
- `Rationalizations` — external/debugging-and-error-recovery.md:10 — used here
- `Red Flags` — external/debugging-and-error-recovery.md:10 — used here
- `Verification` — external/debugging-and-error-recovery.md:10 — used here
- `/test` — external/debugging-and-error-recovery.md:12 — used here
- `browser-testing-with-devtools` — external/debugging-and-error-recovery.md:12 — used here

## Structure
1. `debugging-and-error-recovery` (h1)
2. `Install just this skill` (h2)
3. `How this skill is structured` (h2)
4. `Verify phase` (h3 aside)
5. `More in the Verify phase` (h2)
6. `browser-testing-with-devtools` (h3 related skill)
7. `Product` (h3 footer)
8. `Setup` (h3 footer)
9. `Resources` (h3 footer)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/debugging-and-error-recovery.md:9 claims a standardized 6-section structure including "Process" at line 10, but skills/debugging-and-error-recovery/SKILL.md organizes its workflow into "The Stop-the-Line Rule" — skills/debugging-and-error-recovery/SKILL.md:21 and "The Triage Checklist" — skills/debugging-and-error-recovery/SKILL.md:36 rather than a single "Process" heading.
- `doc-drift` — "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — external/debugging-and-error-recovery.md:5 diverges from the repository description "Guides systematic root-cause debugging. Use when tests fail, builds break, behavior doesn't match expectations, or you encounter any unexpected error. Use when you need a systematic approach to finding and fixing the root cause rather than guessing." — skills/debugging-and-error-recovery/SKILL.md:3.

## Observations
- Complete Astro-generated HTML artifact (23,705 bytes, 20 lines) capturing the public documentation landing page at `https://skills.addy.ie/skills/debugging-and-error-recovery/`.
- Embedded inline stylesheet rules (`<style data-astro-cid-f2mrhd7z>`) and Netlify RUM analytics script contribute significantly to file byte weight.
- Categorizes `debugging-and-error-recovery` as belonging to the `Verify` lifecycle phase and pairs it directly with the `/test` lifecycle command.
- Features related verify-phase skill recommendation for `browser-testing-with-devtools`.
- Promotes multi-agent runtime compatibility in the footer: Claude Code, Codex, Cursor, and Antigravity.

## Context cost
23,705 bytes (~5,900 tokens). Loads no external files at runtime.
