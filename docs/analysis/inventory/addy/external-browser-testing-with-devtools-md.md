---
package: addy
path: external/browser-testing-with-devtools.md
type: doc
bytes: 23834
unit: inv-addy-13
aliases: []
memo_inputs:
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/browser-testing-with-devtools.md

## Purpose — required, verbatim
> "Tests in real browsers via the Chrome DevTools MCP. Inspect the DOM, capture console errors, analyze network requests, profile performance, and verify visual output with real runtime data." — external/browser-testing-with-devtools.md:5

## Design intent — required
Web documentation and catalog page hosted at `skills.addy.ie/skills/browser-testing-with-devtools/` serving as the public discovery and reference portal for the `browser-testing-with-devtools` skill. It provides developers and autonomous AI coding agents with a structured overview of real-browser testing capabilities powered by Chrome DevTools MCP (DOM inspection, console error capture, network request analysis, performance profiling, and visual runtime verification). It details installation commands via the `skills` CLI, maps the skill to the `Verify` lifecycle phase (`/test` command), summarizes the standardized six-part skill anatomy, and links to the full repository SKILL.md. Without this page, agents and developers browsing the external skills catalog would lack an indexable overview of browser runtime verification capabilities, installation commands, and lifecycle phase integration.

## Phase — required
addy:Verify

## Inputs — required
- Triggering condition: "Building or debugging anything that runs in a browser." — external/browser-testing-with-devtools.md:5
- Real runtime browser execution data: DOM state, console errors, network requests, performance profiles, and visual output — external/browser-testing-with-devtools.md:5

## Outputs — required
- Installation command for this skill: `npx skills add addyosmani/agent-skills --skill browser-testing-with-devtools` — external/browser-testing-with-devtools.md:8
- Installation command for full pack: `npx skills add addyosmani/agent-skills` — external/browser-testing-with-devtools.md:8
- Verified runtime evidence: DOM state, console error logs, network traces, performance profiles, and visual output — external/browser-testing-with-devtools.md:5

## Invokes — required
- skill browser-testing-with-devtools — external/browser-testing-with-devtools.md:5
- doc SKILL.md — external/browser-testing-with-devtools.md:11
- command /test — external/browser-testing-with-devtools.md:12
- skill debugging-and-error-recovery — external/browser-testing-with-devtools.md:12
- doc CONTRIBUTING.md — external/browser-testing-with-devtools.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Chrome DevTools MCP` — external/browser-testing-with-devtools.md:1, 5 — used here
- `Verify phase` — external/browser-testing-with-devtools.md:5, 12 — used here
- `skills CLI` — external/browser-testing-with-devtools.md:6 — used here
- `anatomy` — external/browser-testing-with-devtools.md:9 — defined here
- `Overview` — external/browser-testing-with-devtools.md:10 — defined here
- `When to Use` — external/browser-testing-with-devtools.md:10 — defined here
- `Process` — external/browser-testing-with-devtools.md:10 — defined here
- `Rationalizations` — external/browser-testing-with-devtools.md:10 — defined here
- `Red Flags` — external/browser-testing-with-devtools.md:10 — defined here
- `Verification` — external/browser-testing-with-devtools.md:10 — defined here
- `SKILL.md` — external/browser-testing-with-devtools.md:11 — used here
- `Five-step triage` — external/browser-testing-with-devtools.md:12 — used here
- `Stop-the-line rule` — external/browser-testing-with-devtools.md:12 — used here
- `Loop engineering` — external/browser-testing-with-devtools.md:15 — used here
- `Evals framework` — external/browser-testing-with-devtools.md:15 — used here

## Structure
- browser-testing-with-devtools — external/browser-testing-with-devtools.md:5
- Install just this skill — external/browser-testing-with-devtools.md:5
- How this skill is structured — external/browser-testing-with-devtools.md:8
- Verify phase — external/browser-testing-with-devtools.md:12
- More in the Verify phase — external/browser-testing-with-devtools.md:12
- Product — external/browser-testing-with-devtools.md:15
- Setup — external/browser-testing-with-devtools.md:15
- Resources — external/browser-testing-with-devtools.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/browser-testing-with-devtools.md:10 · Anatomy section asserts the skill follows a generic 6-section structure (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), whereas the actual SKILL.md (skills/browser-testing-with-devtools/SKILL.md) contains 13 top-level sections including setup, security boundaries, debugging workflows, and accessibility verification.
- doc-drift · external/browser-testing-with-devtools.md:5 · Skill summary omits prerequisite requirement "Requires the chrome-devtools MCP server to be configured" stated in skills/browser-testing-with-devtools/SKILL.md:3.
- orphan · external/browser-testing-with-devtools.md:1 · External documentation snapshot is published on skills.addy.ie but is not referenced or linked from any repository file.

## Observations
Static web snapshot generated by Astro (`data-astro-cid-*`) from `https://skills.addy.ie/skills/browser-testing-with-devtools/`. Demonstrates Addy's external documentation format for agent skills, standardizing public skill discovery around the `npx skills` CLI (`skills add addyosmani/agent-skills --skill browser-testing-with-devtools`), visual tag taxonomy (`#testing`, `#browser`, `#mcp`), lifecycle phase integration (`Verify` / `/test`), related skill cross-promotion (`debugging-and-error-recovery`), and repository linkage to `SKILL.md`, `CONTRIBUTING.md`, and `evals`.

## Context cost
23,834 bytes (approx. 5,950 tokens) for this HTML document snapshot. When invoked as documentation, loads external links to `skills/browser-testing-with-devtools/SKILL.md` (14,539 bytes), `skills/debugging-and-error-recovery/SKILL.md` (9,566 bytes), and `CONTRIBUTING.md` (7,179 bytes).
