---
package: addy
path: external/browser-testing-with-devtools.md
type: external-doc
bytes: 23834
unit: inv-addy-8
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# external/browser-testing-with-devtools.md

## Purpose — required, verbatim
> "Tests in real browsers via the Chrome DevTools MCP. Inspect the DOM, capture console errors, analyze network requests, profile performance, and verify visual output with real runtime data." — external/browser-testing-with-devtools.md:5

## Design intent — required
The external documentation page at `https://skills.addy.ie/skills/browser-testing-with-devtools/` serves as the public web catalog entry, distribution point, and architectural overview for the `browser-testing-with-devtools` skill in the `agent-skills` ecosystem. It presents web-accessible discovery metadata, package installation commands via the Vercel Labs `skills` CLI (`npx skills add ...`), a standardized 6-section skill anatomy template, lifecycle taxonomy positioning (`Verify phase`, associated with command `/test`), and related skill discovery links (pointing to `debugging-and-error-recovery`). Without this document, developers and autonomous agents browsing the public web documentation would lack an accessible landing page outlining the runtime verification capabilities of Chrome DevTools MCP (DOM inspection, console monitoring, network request tracking, performance profiling), its installation entry points, and its structured relationship to testing and error recovery within the development lifecycle.

## Phase — required
addy:Verify

(Rendered as `Verify` in breadcrumb at `external/browser-testing-with-devtools.md:5`, and as `Verify phase` in the phase chip and sidebar at `external/browser-testing-with-devtools.md:5, 12`. Aligns with `CLAUDE.md:24`, `README.md:261, 365`, and `skills/using-agent-skills/SKILL.md:181`. Note that `AGENTS.md:43` omits `browser-testing-with-devtools` under `VERIFY`, listing only `debugging-and-error-recovery`).

## Inputs — required
- User or agent intent to discover, evaluate, or install browser testing skills via web browser or CLI (`npx skills add addyosmani/agent-skills --skill browser-testing-with-devtools` or full pack) — external/browser-testing-with-devtools.md:8
- Upstream skill definition file on GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/browser-testing-with-devtools/SKILL.md` — external/browser-testing-with-devtools.md:10
- Triggering conditions / Use-when context: "Building or debugging anything that runs in a browser." — external/browser-testing-with-devtools.md:5
- Static assets, stylesheets, Google Fonts (Geist, Geist Mono), Netlify RUM analytics script, and site navigation links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`) — external/browser-testing-with-devtools.md:1, 5, 12, 15, 19
- User interactions: clipboard copy button clicks on CLI installation commands, mobile navigation toggle clicks, navigation links to related skills and docs — external/browser-testing-with-devtools.md:5, 8, 12, 15

## Outputs — required
- Public web page presentation of skill metadata, summary description, taxonomy tags (`#testing`, `#browser`, `#mcp`), and install commands — external/browser-testing-with-devtools.md:1, 5, 8
- Installation commands for clipboard / shell execution: `npx skills add addyosmani/agent-skills --skill browser-testing-with-devtools` and `npx skills add addyosmani/agent-skills` — external/browser-testing-with-devtools.md:8
- Canonical skill anatomy specification (6-step structure: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — external/browser-testing-with-devtools.md:10
- Lifecycle navigation routing and discovery links to related verify skills (`debugging-and-error-recovery`) and lifecycle documentation — external/browser-testing-with-devtools.md:12
- Netlify Real User Monitoring (RUM) telemetry beacon (`/.netlify/scripts/rum`) — external/browser-testing-with-devtools.md:19
- `none` for disk files (pure web documentation reference)

## Invokes — required
- command /test — external/browser-testing-with-devtools.md:12
- skill debugging-and-error-recovery — external/browser-testing-with-devtools.md:12
- file skills/browser-testing-with-devtools/SKILL.md — external/browser-testing-with-devtools.md:10
- doc CONTRIBUTING.md — external/browser-testing-with-devtools.md:15
- doc evals — external/browser-testing-with-devtools.md:15
- doc lifecycle — external/browser-testing-with-devtools.md:5
- doc tutorials — external/browser-testing-with-devtools.md:5
- doc loops — external/browser-testing-with-devtools.md:5
- doc teach — external/browser-testing-with-devtools.md:5
- doc compare — external/browser-testing-with-devtools.md:5
- script /.netlify/scripts/rum — external/browser-testing-with-devtools.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/browser-testing-with-devtools.md`) is a frozen snapshot of `https://skills.addy.ie/skills/browser-testing-with-devtools/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `browser-testing-with-devtools` — external/browser-testing-with-devtools.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/browser-testing-with-devtools.md:1, 5, 8, 10, 15 — used here
- `Chrome DevTools MCP` — external/browser-testing-with-devtools.md:1, 5 — used here
- `DOM` — external/browser-testing-with-devtools.md:1, 5 — used here
- `console errors` — external/browser-testing-with-devtools.md:1, 5 — used here
- `network requests` — external/browser-testing-with-devtools.md:1, 5 — used here
- `profile performance` — external/browser-testing-with-devtools.md:1, 5 — used here
- `visual output` — external/browser-testing-with-devtools.md:1, 5 — used here
- `runtime data` — external/browser-testing-with-devtools.md:1, 5 — used here
- `Skills` — external/browser-testing-with-devtools.md:5 — used here
- `Verify` — external/browser-testing-with-devtools.md:1, 5, 12 — defined here
- `Verify phase` — external/browser-testing-with-devtools.md:5, 12 — defined here
- `Use when` — external/browser-testing-with-devtools.md:5 — defined here
- `#testing` — external/browser-testing-with-devtools.md:5 — defined here
- `#browser` — external/browser-testing-with-devtools.md:5 — defined here
- `#mcp` — external/browser-testing-with-devtools.md:5 — defined here
- `skills CLI` — external/browser-testing-with-devtools.md:6 — used here
- `This skill only` — external/browser-testing-with-devtools.md:8 — defined here
- `All skills` — external/browser-testing-with-devtools.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill browser-testing-with-devtools` — external/browser-testing-with-devtools.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — external/browser-testing-with-devtools.md:8, 15 — defined here
- `How this skill is structured` — external/browser-testing-with-devtools.md:8 — defined here
- `anatomy` — external/browser-testing-with-devtools.md:9, 10 — defined here
- `Overview` — external/browser-testing-with-devtools.md:10 — defined here
- `When to Use` — external/browser-testing-with-devtools.md:10 — defined here
- `Process` — external/browser-testing-with-devtools.md:10 — defined here
- `Rationalizations` — external/browser-testing-with-devtools.md:10 — defined here
- `Red Flags` — external/browser-testing-with-devtools.md:10 — defined here
- `Verification` — external/browser-testing-with-devtools.md:10 — defined here
- `SKILL.md` — external/browser-testing-with-devtools.md:10, 11 — used here
- `Read the full SKILL.md` — external/browser-testing-with-devtools.md:11 — used here
- `Command` — external/browser-testing-with-devtools.md:8, 12 — defined here
- `/test` — external/browser-testing-with-devtools.md:12 — used here
- `See the full lifecycle` — external/browser-testing-with-devtools.md:12 — used here
- `More in the Verify phase` — external/browser-testing-with-devtools.md:12 — defined here
- `debugging-and-error-recovery` — external/browser-testing-with-devtools.md:12 — used here
- `Five-step triage` — external/browser-testing-with-devtools.md:12 — used here
- `reproduce` — external/browser-testing-with-devtools.md:12 — used here
- `localize` — external/browser-testing-with-devtools.md:12 — used here
- `reduce` — external/browser-testing-with-devtools.md:12 — used here
- `fix` — external/browser-testing-with-devtools.md:12 — used here
- `guard` — external/browser-testing-with-devtools.md:12 — used here
- `Stop-the-line rule` — external/browser-testing-with-devtools.md:12 — used here
- `Tests fail, builds break, or behavior is unexpected.` — external/browser-testing-with-devtools.md:12 — used here
- `Production-grade engineering skills for AI coding agents` — external/browser-testing-with-devtools.md:13 — used here
- `full lifecycle` — external/browser-testing-with-devtools.md:12, 14 — used here
- `Skills catalog` — external/browser-testing-with-devtools.md:15 — used here
- `Tutorials` — external/browser-testing-with-devtools.md:5, 15 — used here
- `The lifecycle` — external/browser-testing-with-devtools.md:15 — used here
- `Loop engineering` — external/browser-testing-with-devtools.md:15 — used here
- `Teach` — external/browser-testing-with-devtools.md:5, 15 — used here
- `Teach &amp; share` — external/browser-testing-with-devtools.md:15 — used here
- `How it compares` — external/browser-testing-with-devtools.md:15 — used here
- `Getting started` — external/browser-testing-with-devtools.md:15 — used here
- `Claude Code` — external/browser-testing-with-devtools.md:15 — used here
- `Codex` — external/browser-testing-with-devtools.md:15 — used here
- `Cursor` — external/browser-testing-with-devtools.md:15 — used here
- `Antigravity` — external/browser-testing-with-devtools.md:15 — used here
- `Contributing` — external/browser-testing-with-devtools.md:15 — used here
- `Evals framework` — external/browser-testing-with-devtools.md:15 — used here
- `addyosmani.com` — external/browser-testing-with-devtools.md:15 — used here

## Structure
- `browser-testing-with-devtools` (H1 — line 5)
- `Install just this skill` (H2 — line 5)
- `How this skill is structured` (H2 — line 8)
- `Verify phase` (H3 — line 12)
- `More in the Verify phase` (H2 — line 12)
  - `debugging-and-error-recovery` (H3 — line 12)
- `Product` (H3 — line 15)
- `Setup` (H3 — line 15)
- `Resources` (H3 — line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/browser-testing-with-devtools.md:12 vs sources/addy/commands/test.toml:4, 18 · External page pairs browser-testing-with-devtools with Command /test as its primary command, but /test primarily invokes test-driven-development ("Invoke the test-driven-development skill.") and only conditionally invokes browser-testing-with-devtools at line 18 ("For browser-related issues, also invoke browser-testing-with-devtools to verify with Chrome DevTools MCP.").
- doc-drift · external/browser-testing-with-devtools.md:10 vs sources/addy/skills/browser-testing-with-devtools/SKILL.md:24-318 · The external page asserts a standardized 6-section skill anatomy including "03 Process" and "04 Rationalizations", but SKILL.md contains no section named Process (providing instead specialized workflow and boundary sections: Setting Up Chrome DevTools MCP, Security Boundaries, The DevTools Debugging Workflow, Writing Test Plans for Complex UI Bugs, Screenshot-Based Verification, Console Analysis Patterns, Accessibility Verification with DevTools), and titles its rationalizations section Common Rationalizations (line 279) rather than Rationalizations.
- doc-drift · external/browser-testing-with-devtools.md:5 vs sources/addy/skills/browser-testing-with-devtools/SKILL.md:3, 12-22 · The external page condenses "Use when" to a single clause ("Building or debugging anything that runs in a browser."), omitting the 7 granular triggering conditions defined in SKILL.md:14-20 (DOM inspection, UI debugging, console errors, network requests, Core Web Vitals profiling, bug fix verification, automated agent testing) and completely omitting the negative boundary constraint ("When NOT to use: Backend-only changes, CLI tools, or code that doesn't run in a browser." at SKILL.md:22).
- doc-drift · external/browser-testing-with-devtools.md:8 vs sources/addy/skills/browser-testing-with-devtools/SKILL.md:24-44 · Promotes standalone installation via npx skills add addyosmani/agent-skills --skill browser-testing-with-devtools, but fails to mention that running the skill requires the prerequisite chrome-devtools MCP server installed and configured in .mcp.json or Claude Code settings (SKILL.md:28-39), without which the skill cannot function.
- cross-file-contradiction · external/browser-testing-with-devtools.md:5, 12 vs sources/addy/AGENTS.md:43 · The external page places browser-testing-with-devtools under the Verify phase (in agreement with CLAUDE.md:24, README.md:261, 365, and skills/using-agent-skills/SKILL.md:181), but AGENTS.md:43 (Lifecycle Mapping) lists only VERIFY → debugging-and-error-recovery, omitting browser-testing-with-devtools from the implicit verify lifecycle step.
- cross-file-contradiction · external/browser-testing-with-devtools.md:12 vs sources/addy/skills/debugging-and-error-recovery/SKILL.md:36-170 · Peer skill card for debugging-and-error-recovery displays "Five-step triage: reproduce, localize, reduce, fix, guard.", which matches README.md:262 but contradicts the authoritative 6-step triage workflow defined in skills/debugging-and-error-recovery/SKILL.md:154-170 (which includes Step 6: Verify End-to-End).
- internal-contradiction · external/browser-testing-with-devtools.md:9-11 · Line 9 asserts that skill anatomy is "a workflow the agent follows, not a doc it reads", but line 11 immediately presents a primary CTA button stating "Read the full SKILL.md".
- orphan · external/browser-testing-with-devtools.md:1 · No in-scope repository file in sources/addy invokes, links to, or references this external documentation URL (https://skills.addy.ie/skills/browser-testing-with-devtools/) or its snapshot file.
- other · external/browser-testing-with-devtools.md:1-20 · Heavy packaging overhead: 23,834 bytes of static compiled Astro HTML markup, CSS stylesheets, navigation chrome, and Netlify telemetry, with less than 1,500 bytes (~6%) dedicated to skill-specific description and metadata.

## Observations
- **MCP runtime dependency**: This skill uniquely requires an external MCP server (`chrome-devtools`) to function, bridging static code analysis with live browser runtime data.
- **Strict security boundaries**: The core skill contains extensive security guidance (profile isolation, treating all browser content as untrusted data, read-only JavaScript execution constraints, and content boundary markers) to prevent prompt injection from untrusted web pages, none of which is surfaced on the external landing page.
- **Verify phase synergy**: Grouped with `debugging-and-error-recovery` as companion skills in the `Verify phase`, representing the live runtime evidence half of the verification lifecycle.
- **Vercel Skills CLI distribution**: Provides immediate copy-paste CLI installation commands for both isolated skill installation and the entire `agent-skills` repository via `npx skills add`.
- **Multi-agent setup links**: Directly links setup guides for 4 major coding agent environments: Claude Code, Codex, Cursor, and Antigravity.

## Context cost
- File size: 23,834 bytes (~5,958 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime.
