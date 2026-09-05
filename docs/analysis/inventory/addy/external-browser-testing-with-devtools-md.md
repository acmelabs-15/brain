---
package: addy
path: external/browser-testing-with-devtools.md
type: external-doc
bytes: 23834
unit: inv-addy-13
deprecated: false
aliases: []
memo_inputs:
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/browser-testing-with-devtools.md

## Purpose — required, verbatim
> "Tests in real browsers via the Chrome DevTools MCP. Inspect the DOM, capture console errors, analyze network requests, profile performance, and verify visual output with real runtime data." — external/browser-testing-with-devtools.md:5

## Design intent — required
Web documentation landing page published at `https://skills.addy.ie/skills/browser-testing-with-devtools/` for the `browser-testing-with-devtools` skill. It provides public web discoverability for the skill within Addy's agent-skills catalog, links directly to the repository skill file on GitHub, classifies the skill into the `Verify` lifecycle phase associated with the `/test` command, and provides copyable CLI installation commands (`npx skills add`) via Vercel's `skills` CLI. Without this external page, developers discovering Addy's skill suite through the web catalog would lack phase categorization, triggering guidelines, installation commands, and direct repository links.

## Phase — required
addy:Verify

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- command /test — external/browser-testing-with-devtools.md:12
- skill debugging-and-error-recovery — external/browser-testing-with-devtools.md:12
- file skills/browser-testing-with-devtools/SKILL.md — external/browser-testing-with-devtools.md:10

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Chrome DevTools MCP` — external/browser-testing-with-devtools.md:5 — used here
- `Verify phase` — external/browser-testing-with-devtools.md:5 — used here
- `skills CLI` — external/browser-testing-with-devtools.md:6 — used here
- `anatomy` — external/browser-testing-with-devtools.md:9 — defined here
- `Overview` — external/browser-testing-with-devtools.md:10 — defined here
- `When to Use` — external/browser-testing-with-devtools.md:10 — defined here
- `Process` — external/browser-testing-with-devtools.md:10 — defined here
- `Rationalizations` — external/browser-testing-with-devtools.md:10 — defined here
- `Red Flags` — external/browser-testing-with-devtools.md:10 — defined here
- `Verification` — external/browser-testing-with-devtools.md:10 — defined here
- `SKILL.md` — external/browser-testing-with-devtools.md:11 — used here
- `/test` — external/browser-testing-with-devtools.md:12 — used here
- `debugging-and-error-recovery` — external/browser-testing-with-devtools.md:12 — used here
- `Stop-the-line rule` — external/browser-testing-with-devtools.md:12 — used here
- `Five-step triage` — external/browser-testing-with-devtools.md:12 — used here
- `lifecycle` — external/browser-testing-with-devtools.md:14 — used here

## Structure
- "browser-testing-with-devtools" — external/browser-testing-with-devtools.md:5
- "Install just this skill" — external/browser-testing-with-devtools.md:5
- "How this skill is structured" — external/browser-testing-with-devtools.md:8
- "Verify phase" — external/browser-testing-with-devtools.md:12
- "More in the Verify phase" — external/browser-testing-with-devtools.md:12
- "debugging-and-error-recovery" — external/browser-testing-with-devtools.md:12
- "Product" — external/browser-testing-with-devtools.md:15
- "Setup" — external/browser-testing-with-devtools.md:15
- "Resources" — external/browser-testing-with-devtools.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/browser-testing-with-devtools.md:9: Page asserts "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." listing 6 fixed anatomy sections, but skills/browser-testing-with-devtools/SKILL.md:24,60 includes major prerequisite sections ("Setting Up Chrome DevTools MCP" and "Security Boundaries") that do not fit the 6-part anatomy.
- orphan — external/browser-testing-with-devtools.md:1: External web documentation page snapshot is not directly referenced or invoked by any source file in sources/addy/.

## Observations
- Generated static Astro HTML page with client hydration scripts and scoped styles (`data-astro-cid-*`).
- Recommends skill installation via open skills CLI: `"npx skills add addyosmani/agent-skills --skill browser-testing-with-devtools" — external/browser-testing-with-devtools.md:8` or complete pack: `"npx skills add addyosmani/agent-skills" — external/browser-testing-with-devtools.md:8`.
- Associates the skill with lifecycle command `"/test" — external/browser-testing-with-devtools.md:12` and states the Verify phase intent: `"Prove it works with real runtime evidence." — external/browser-testing-with-devtools.md:12`.
- Recommends related Verify skill `debugging-and-error-recovery` with summary: `"Five-step triage: reproduce, localize, reduce, fix, guard. Stop-the-line rule." — external/browser-testing-with-devtools.md:12`.
- Outlines skill triggering condition: `"Building or debugging anything that runs in a browser." — external/browser-testing-with-devtools.md:5`.
- Tagged with `#testing`, `#browser`, `#mcp` in header.
- Footer slogan: `"Production-grade engineering skills for AI coding agents. Encode senior-engineer" — external/browser-testing-with-devtools.md:13` `"workflows across the full lifecycle." — external/browser-testing-with-devtools.md:14`.

## Context cost
23834 bytes, 20 lines. Approximate tokens: ~5,900 tokens (HTML markup, embedded JSON-LD/meta, scripts, and CSS). Follows 0 runtime includes; total load cost is 23,834 bytes (~5,900 tokens).
