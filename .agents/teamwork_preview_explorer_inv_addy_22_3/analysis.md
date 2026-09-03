---
package: addy
path: ../addy-external/test-driven-development.md
type: external-doc
bytes: 26483
unit: inv-addy-22
---

# ../addy-external/test-driven-development.md

## Purpose — required, verbatim
> "Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought." — ../addy-external/test-driven-development.md:5

## Design intent — required
The external documentation page at `skills.addy.ie/skills/test-driven-development/` serves as the public catalog entry, landing page, and distribution portal for the `test-driven-development` skill within the `agent-skills` ecosystem. It presents web-accessible summary metadata, command-line installation instructions (`npx skills add ...`), skill anatomy structure, lifecycle positioning (`Build phase`, associated with `/test` and `/build`), and discovery links to related build-phase skills (`incremental-implementation`, `context-engineering`, `source-driven-development`). Without this document, human developers and automated agents evaluating the skill library would lack a canonical web representation of the skill's role in the lifecycle, its package distribution mechanisms, its prerequisite anatomy, and its catalog discovery context.

## Phase — required
addy:Build

## Inputs — required
- User or agent intent to discover or install skills via web interface or CLI (`npx skills add addyosmani/agent-skills --skill test-driven-development` or full pack) — ../addy-external/test-driven-development.md:8
- Upstream skill definition file on GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/test-driven-development/SKILL.md` — ../addy-external/test-driven-development.md:11-12
- Triggering conditions / Use-when context: "Implementing logic, fixing bugs, or changing behavior." — ../addy-external/test-driven-development.md:5
- Static assets and site navigation links (CSS stylesheets, Netlify RUM analytics, Astro site routes `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`) — ../addy-external/test-driven-development.md:1, 5, 19

## Outputs — required
- Public web page presentation of skill metadata, summary, taxonomy tags (`#testing`, `#tdd`, `#quality`), and install commands — ../addy-external/test-driven-development.md:1, 5, 8
- Installation commands for clipboard / shell execution: `npx skills add addyosmani/agent-skills --skill test-driven-development` and `npx skills add addyosmani/agent-skills` — ../addy-external/test-driven-development.md:8
- Canonical anatomy definition (6-step skill structure: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — ../addy-external/test-driven-development.md:10
- Navigation routing and discovery links to related build skills (`incremental-implementation`, `context-engineering`, `source-driven-development`) and lifecycle documentation — ../addy-external/test-driven-development.md:12
- `none` for disk files (pure web documentation reference)

## Invokes — required
- command /test — ../addy-external/test-driven-development.md:5
- command /build — ../addy-external/test-driven-development.md:12
- skill incremental-implementation — ../addy-external/test-driven-development.md:12
- skill context-engineering — ../addy-external/test-driven-development.md:12
- skill source-driven-development — ../addy-external/test-driven-development.md:12
- file skills/test-driven-development/SKILL.md — ../addy-external/test-driven-development.md:11-12
- tool skills CLI — ../addy-external/test-driven-development.md:6-8
- doc CONTRIBUTING.md — ../addy-external/test-driven-development.md:15
- doc evals — ../addy-external/test-driven-development.md:15

## Invoked by — required
orphan (No in-scope repository file in sources/addy links to or loads this external web snapshot; it is an external publishing artifact representing `https://skills.addy.ie/skills/test-driven-development/` brought into scope via METHOD.md §1.1)

## Concepts named — required, verbatim
- `test-driven-development` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `agent-skills` — ../addy-external/test-driven-development.md:1, 5, 8, 12, 15 — used here
- `Red-Green-Refactor` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `test pyramid` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `80/15/5` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `test sizes` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `DAMP over DRY` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `DAMP` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `DRY` — ../addy-external/test-driven-development.md:1, 5 — used here
- `Beyoncé Rule` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `browser testing` — ../addy-external/test-driven-development.md:1, 5 — defined here
- `Skills` — ../addy-external/test-driven-development.md:5 — used here
- `Build` — ../addy-external/test-driven-development.md:5 — defined here
- `Build phase` — ../addy-external/test-driven-development.md:5, 12 — defined here
- `/test` — ../addy-external/test-driven-development.md:5 — used here
- `Use when` — ../addy-external/test-driven-development.md:5 — defined here
- `#testing` — ../addy-external/test-driven-development.md:5 — defined here
- `#tdd` — ../addy-external/test-driven-development.md:5 — defined here
- `#quality` — ../addy-external/test-driven-development.md:5 — defined here
- `skills CLI` — ../addy-external/test-driven-development.md:6 — used here
- `This skill only` — ../addy-external/test-driven-development.md:8 — defined here
- `All skills` — ../addy-external/test-driven-development.md:8 — defined here
- `anatomy` — ../addy-external/test-driven-development.md:9, 10 — defined here
- `Overview` — ../addy-external/test-driven-development.md:10 — defined here
- `When to Use` — ../addy-external/test-driven-development.md:10 — defined here
- `Process` — ../addy-external/test-driven-development.md:10 — defined here
- `Rationalizations` — ../addy-external/test-driven-development.md:10 — defined here
- `Red Flags` — ../addy-external/test-driven-development.md:10 — defined here
- `Verification` — ../addy-external/test-driven-development.md:10 — defined here
- `SKILL.md` — ../addy-external/test-driven-development.md:11 — used here
- `vertical slices` — ../addy-external/test-driven-development.md:12 — defined here
- `Command` — ../addy-external/test-driven-development.md:12 — defined here
- `/build` — ../addy-external/test-driven-development.md:12 — used here
- `incremental-implementation` — ../addy-external/test-driven-development.md:12 — used here
- `context-engineering` — ../addy-external/test-driven-development.md:12 — used here
- `source-driven-development` — ../addy-external/test-driven-development.md:12 — used here
- `MCP` — ../addy-external/test-driven-development.md:12 — used here
- `full lifecycle` — ../addy-external/test-driven-development.md:14 — used here
- `Skills catalog` — ../addy-external/test-driven-development.md:15 — used here
- `Tutorials` — ../addy-external/test-driven-development.md:15 — used here
- `The lifecycle` — ../addy-external/test-driven-development.md:15 — used here
- `Loop engineering` — ../addy-external/test-driven-development.md:15 — used here
- `Teach & share` — ../addy-external/test-driven-development.md:15 — used here
- `How it compares` — ../addy-external/test-driven-development.md:15 — used here
- `Getting started` — ../addy-external/test-driven-development.md:15 — used here
- `Claude Code` — ../addy-external/test-driven-development.md:15 — used here
- `Codex` — ../addy-external/test-driven-development.md:15 — used here
- `Cursor` — ../addy-external/test-driven-development.md:15 — used here
- `Antigravity` — ../addy-external/test-driven-development.md:15 — used here
- `Evals framework` — ../addy-external/test-driven-development.md:15 — used here

## Structure
- `test-driven-development` (line 5)
- `Install just this skill` (line 5)
- `How this skill is structured` (line 8)
- `Build phase` (line 12)
- `More in the Build phase` (line 12)
  - `incremental-implementation` (line 12)
  - `context-engineering` (line 12)
  - `source-driven-development` (line 12)
- `Product` (line 15)
- `Setup` (line 15)
- `Resources` (line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · ../addy-external/test-driven-development.md:1 · No in-scope repository file in sources/addy invokes, links to, or references this external documentation URL (`https://skills.addy.ie/skills/test-driven-development/`) or its snapshot file.
- `doc-drift` · ../addy-external/test-driven-development.md:5 vs skills/test-driven-development/SKILL.md:3, 10 · The external page summary describes the skill as `"Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought."`, whereas `SKILL.md:3` defines description as `"Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality."` and `SKILL.md:10` provides an overview without mentioning the specific technique roster.
- `doc-drift` · ../addy-external/test-driven-development.md:5 vs skills/test-driven-development/SKILL.md:12-20 · The external page condenses "Use when" to `"Implementing logic, fixing bugs, or changing behavior."`, dropping the five structured positive criteria (including edge case handling and risk of regression) and omitting the negative boundary constraint (`**When NOT to use:** Pure configuration changes, documentation updates, or static content changes that have no behavioral impact.`).
- `doc-drift` / `cross-file-contradiction` · ../addy-external/test-driven-development.md:10 vs skills/test-driven-development/SKILL.md:24-387 · The external page asserts a 6-part standardized skill anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), but `SKILL.md` has no `Process` section, features multiple intermediate technical sections (`Discover the Stack First`, `The TDD Cycle`, `The Prove-It Pattern`, `The Test Pyramid`, `Writing Good Tests`, `Test Anti-Patterns to Avoid`, `Browser Testing with DevTools`, `When to Use Subagents for Testing`, `See Also`), and titles its rationalizations section `## Common Rationalizations` rather than `Rationalizations`.
- `internal-contradiction` · ../addy-external/test-driven-development.md:5 vs ../addy-external/test-driven-development.md:12 · The skill detail header tags the skill with command badge `/test` (`<span class="detail-cmd-badge mono">/test</span>`), but the sidebar card for the Build phase immediately adjacent designates the phase command as `/build` (`<code class="mono">/build</code>`), creating conflicting command signals for consumers of the page.
- `doc-drift` / `cross-file-contradiction` · ../addy-external/test-driven-development.md:5 vs skills/using-agent-skills/SKILL.md:180 · The external page explicitly classifies `test-driven-development` under the `Build phase` (`addy:Build`), whereas `skills/using-agent-skills/SKILL.md:180` classifies `test-driven-development` under `Verify`.
- `other` · ../addy-external/test-driven-development.md:1, 5 vs skills/test-driven-development/SKILL.md:161 · Orthographic variation in naming: the external document uses `Beyoncé Rule` (with acute accent é) in metadata and summary text, whereas `SKILL.md:161` spells it `Beyonce Rule` (unaccented e).

## Observations
- Web catalog landing page: An Astro-built static HTML rendering of `https://skills.addy.ie/skills/test-driven-development/` providing a public marketing and discovery entry point for the skill.
- Distribution via Vercel Labs CLI: Emphasizes package consumption via `npx skills add addyosmani/agent-skills --skill test-driven-development` linking to `https://github.com/vercel-labs/skills`.
- Navigation taxonomy: Organizes Addy's skill ecosystem into a web-accessible taxonomy with routes for `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, and `/compare/`.
- Cross-skill clustering in Build phase: Directly links to three companion skills in the Build phase: `incremental-implementation` (thin vertical slices), `context-engineering` (prompt packing and MCP), and `source-driven-development` (official framework docs verification).

## Context cost
File size: 26,483 bytes (~6,621 tokens). Pure HTML document with no transitive markdown file loads; links externally to Astro CSS assets (`/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css`), Google Fonts, and Netlify RUM analytics (`/.netlify/scripts/rum`).
