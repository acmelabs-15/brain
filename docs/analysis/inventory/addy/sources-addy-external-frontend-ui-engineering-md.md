---
package: addy
path: ../addy-external/frontend-ui-engineering.md
type: external-doc
bytes: 26596
unit: inv-addy-27
---

# sources/addy-external/frontend-ui-engineering.md

## Purpose — required, verbatim
> "Builds production-quality, accessible, responsive user-facing UIs. Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated." — sources/addy-external/frontend-ui-engineering.md:1, 5

Additional triggering purpose:
> "Building or modifying user-facing interfaces." — sources/addy-external/frontend-ui-engineering.md:5

Sidebar summary:
> "Write the code in thin, tested vertical slices." — sources/addy-external/frontend-ui-engineering.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — sources/addy-external/frontend-ui-engineering.md:13-14

## Design intent — required
AI coding agents frequently produce generic, unpolished user interfaces that suffer from recognizable anti-patterns ("AI aesthetic"): arbitrary purple/indigo color palettes, excessive gradients, exaggerated corner rounding, poor visual hierarchy, missing loading/empty/error states, and failure to meet basic keyboard accessibility and contrast standards. `sources/addy-external/frontend-ui-engineering.md` provides the public web catalog and installation entry point for the `frontend-ui-engineering` agent skill on `https://skills.addy.ie`. It establishes web-accessible discoverability for the skill, publishes copyable CLI commands for installing via Vercel Labs' open-source `skills` CLI tool (`npx skills add addyosmani/agent-skills --skill frontend-ui-engineering`), defines the standardized 6-section skill anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), and firmly anchors the skill within the `addy:Build` lifecycle phase alongside slash command `/build` and companion Build-phase skills (`incremental-implementation`, `test-driven-development`, `context-engineering`). Without this external doc, users and automated agent consumers discovering `agent-skills` on the public web would lack an indexable landing page, copyable CLI installation commands, Build-phase context, cross-links to related lifecycle skills, and an entry point to the upstream GitHub repository and web-based loop engineering guides.

## Phase — required
addy:Build

## Inputs — required
- In-repo skill definition at `skills/frontend-ui-engineering/SKILL.md` (linked via `https://github.com/addyosmani/agent-skills/blob/main/skills/frontend-ui-engineering/SKILL.md` at line 10)
- Skills CLI packaging metadata (`addyosmani/agent-skills` repository)
- Lifecycle metadata assigning the skill to the Build phase and `/build` slash command
- Related skills in the Build phase (`incremental-implementation`, `test-driven-development`, `context-engineering`)
- Global site assets (Google Fonts Geist and Geist Mono, Astro CSS bundles `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css`, SVG icons, navigation structure)
- Netlify Real User Monitoring (RUM) script and configuration (`/.netlify/scripts/rum`)

## Outputs — required
- Web presentation and documentation catalog entry for `frontend-ui-engineering` at `https://skills.addy.ie/skills/frontend-ui-engineering/`
- Open skills CLI installation command strings:
  - `npx skills add addyosmani/agent-skills --skill frontend-ui-engineering`
  - `npx skills add addyosmani/agent-skills`
- Canonical links and social metadata (`<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`, etc.)
- Standardized 6-part skill anatomy breakdown:
  - `01 Overview` (`What this skill does`) — sources/addy-external/frontend-ui-engineering.md:10
  - `02 When to Use` (`Triggering conditions`) — sources/addy-external/frontend-ui-engineering.md:10
  - `03 Process` (`Step-by-step workflow`) — sources/addy-external/frontend-ui-engineering.md:10
  - `04 Rationalizations` (`Excuses + rebuttals`) — sources/addy-external/frontend-ui-engineering.md:10
  - `05 Red Flags` (`Signs something’s wrong`) — sources/addy-external/frontend-ui-engineering.md:10
  - `06 Verification` (`Evidence requirements`) — sources/addy-external/frontend-ui-engineering.md:10
- Navigation links to related lifecycle skills, tutorials, lifecycle documentation, and upstream GitHub repository
- Tag taxonomy: `#frontend`, `#ui`, `#accessibility` — sources/addy-external/frontend-ui-engineering.md:5

## Invokes — required
- command /build — sources/addy-external/frontend-ui-engineering.md:12
- command /test — sources/addy-external/frontend-ui-engineering.md:12
- skill skills/frontend-ui-engineering/SKILL.md — sources/addy-external/frontend-ui-engineering.md:10
- skill incremental-implementation — sources/addy-external/frontend-ui-engineering.md:12
- skill test-driven-development — sources/addy-external/frontend-ui-engineering.md:12
- skill context-engineering — sources/addy-external/frontend-ui-engineering.md:12
- doc /docs/getting-started/ — sources/addy-external/frontend-ui-engineering.md:5, 15
- doc /lifecycle/ — sources/addy-external/frontend-ui-engineering.md:5, 12, 15
- doc /loops/ — sources/addy-external/frontend-ui-engineering.md:5, 15
- doc /tutorials/ — sources/addy-external/frontend-ui-engineering.md:5, 15
- doc /teach/ — sources/addy-external/frontend-ui-engineering.md:5, 15
- doc /compare/ — sources/addy-external/frontend-ui-engineering.md:5, 15
- doc CONTRIBUTING.md — sources/addy-external/frontend-ui-engineering.md:15
- doc evals — sources/addy-external/frontend-ui-engineering.md:15
- tool vercel-labs/skills — sources/addy-external/frontend-ui-engineering.md:6
- script /.netlify/scripts/rum — sources/addy-external/frontend-ui-engineering.md:19

## Invoked by — required
- doc docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:202
- orphan — As an external documentation HTML snapshot, this local file is not referenced or loaded by any source code file in `sources/addy/`.

## Concepts named — required, verbatim
- `frontend-ui-engineering` — sources/addy-external/frontend-ui-engineering.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/frontend-ui-engineering.md:1, 5, 8, 12, 15 — used here
- `production-quality` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `accessible` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `responsive` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `Component architecture` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `design systems` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `state management` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `responsive design` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `WCAG 2.1 AA accessibility` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `WCAG 2.1 AA` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `AI-generated` — sources/addy-external/frontend-ui-engineering.md:1, 5 — used here
- `Build` — sources/addy-external/frontend-ui-engineering.md:5 — used here
- `Build phase` — sources/addy-external/frontend-ui-engineering.md:5, 12 — used here
- `user-facing interfaces` — sources/addy-external/frontend-ui-engineering.md:5 — used here
- `#frontend` — sources/addy-external/frontend-ui-engineering.md:5 — used here
- `#ui` — sources/addy-external/frontend-ui-engineering.md:5 — used here
- `#accessibility` — sources/addy-external/frontend-ui-engineering.md:5 — used here
- `skills CLI` — sources/addy-external/frontend-ui-engineering.md:6 — used here
- `npx skills add addyosmani/agent-skills --skill frontend-ui-engineering` — sources/addy-external/frontend-ui-engineering.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — sources/addy-external/frontend-ui-engineering.md:8, 15 — defined here
- `Overview` — sources/addy-external/frontend-ui-engineering.md:10 — defined here
- `When to Use` — sources/addy-external/frontend-ui-engineering.md:10 — defined here
- `Process` — sources/addy-external/frontend-ui-engineering.md:10 — defined here
- `Rationalizations` — sources/addy-external/frontend-ui-engineering.md:10 — defined here
- `Red Flags` — sources/addy-external/frontend-ui-engineering.md:10 — defined here
- `Verification` — sources/addy-external/frontend-ui-engineering.md:10 — defined here
- `SKILL.md` — sources/addy-external/frontend-ui-engineering.md:11 — used here
- `/build` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `thin, tested vertical slices` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `incremental-implementation` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `thin vertical slices - implement, test, verify, commit` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `Rollback-friendly changes` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `test-driven-development` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `/test` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `Red-Green-Refactor` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `the test pyramid` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `DAMP over DRY` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `the Beyoncé Rule` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `context-engineering` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `rules files` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `context packing` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `MCP` — sources/addy-external/frontend-ui-engineering.md:12 — used here
- `Claude Code` — sources/addy-external/frontend-ui-engineering.md:15 — used here
- `Codex` — sources/addy-external/frontend-ui-engineering.md:15 — used here
- `Cursor` — sources/addy-external/frontend-ui-engineering.md:15 — used here
- `Antigravity` — sources/addy-external/frontend-ui-engineering.md:15 — used here
- `Loop engineering` — sources/addy-external/frontend-ui-engineering.md:15 — used here
- `Evals framework` — sources/addy-external/frontend-ui-engineering.md:15 — used here
- `Netlify RUM` — sources/addy-external/frontend-ui-engineering.md:19 — used here

## Structure
- `<title>frontend-ui-engineering - agent-skills</title>` — sources/addy-external/frontend-ui-engineering.md:1
- `frontend-ui-engineering` (h1) — sources/addy-external/frontend-ui-engineering.md:5
- `Install just this skill` (h2) — sources/addy-external/frontend-ui-engineering.md:5
- `How this skill is structured` (h2) — sources/addy-external/frontend-ui-engineering.md:8
- `Build phase` (h3) — sources/addy-external/frontend-ui-engineering.md:12
- `More in the Build phase` (h2) — sources/addy-external/frontend-ui-engineering.md:12
- `incremental-implementation` (h3) — sources/addy-external/frontend-ui-engineering.md:12
- `test-driven-development` (h3) — sources/addy-external/frontend-ui-engineering.md:12
- `context-engineering` (h3) — sources/addy-external/frontend-ui-engineering.md:12
- `Product` (h3) — sources/addy-external/frontend-ui-engineering.md:15
- `Setup` (h3) — sources/addy-external/frontend-ui-engineering.md:15
- `Resources` (h3) — sources/addy-external/frontend-ui-engineering.md:15

## Scripts — required if type is script or the skill ships scripts
none (File type is `external-doc`; it ships no executable script files. Documented CLI installation commands were executed and verified under METHOD.md R2):
- `npx skills add addyosmani/agent-skills --skill frontend-ui-engineering`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills --skill frontend-ui-engineering` — sources/addy-external/frontend-ui-engineering.md:8
  - **executed:** yes
  - actual command run: `mkdir -p /tmp/test-fe-ui-verify-w1 && cd /tmp/test-fe-ui-verify-w1 && npx --yes skills add addyosmani/agent-skills --skill frontend-ui-engineering -y --copy && ls -la .agents/skills/frontend-ui-engineering && rm -rf /tmp/test-fe-ui-verify-w1`
  - abridged stdout: `Agent detected — installing non-interactively ... Selected 1 skill: frontend-ui-engineering ... Installed 1 skill: ✓ frontend-ui-engineering (copied) → ./.agents/skills/frontend-ui-engineering ... SKILL.md (10711 bytes)`
  - **actual exit code:** `0`
  - documented exit codes: none documented in HTML text; CLI exits 0 on successful installation and non-zero on failure.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, successfully installs the single specified skill.
- `npx skills add addyosmani/agent-skills`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills` — sources/addy-external/frontend-ui-engineering.md:8, 15
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills -l`
  - abridged stdout: `ci-cd-and-automation ... frontend-ui-engineering ... incremental-implementation ... test-driven-development ... using-agent-skills ... Use --skill <name> to install specific skills`
  - **actual exit code:** `0`
  - documented exit codes: none documented; CLI exits 0.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, queries repository and lists all 25 skills.

## Defects — required
- `doc-drift` — sources/addy-external/frontend-ui-engineering.md:1, 5 vs sources/addy/skills/frontend-ui-engineering/SKILL.md:3 — The external doc summary description states `"Builds production-quality, accessible, responsive user-facing UIs. Component architecture, design systems, state management, responsive design, and WCAG 2.1 AA accessibility - output that looks production-quality, not AI-generated."`, whereas the in-repo `SKILL.md` frontmatter description states `"Builds production-quality, accessible, responsive user-facing UIs. Use when building or modifying interfaces and pages, creating components, implementing layouts, meeting WCAG accessibility requirements, managing state, or when the output needs to look and feel production-quality rather than AI-generated."`. The external doc replaces operational triggers with architectural technique keywords.
- `doc-drift` — sources/addy-external/frontend-ui-engineering.md:5 vs sources/addy/skills/frontend-ui-engineering/SKILL.md:12-19 — The external doc condenses "When to Use" into a single generic clause (`"Building or modifying user-facing interfaces."`), omitting five detailed operational triggers present in `SKILL.md` (building new UI components or pages, modifying existing user-facing interfaces, implementing responsive layouts, adding interactivity or state management, fixing visual or UX issues).
- `doc-drift` — sources/addy-external/frontend-ui-engineering.md:10 vs sources/addy/skills/frontend-ui-engineering/SKILL.md:20-294 — The external page lists a standard 6-section anatomy featuring `03 Process (Step-by-step workflow)`, but `frontend-ui-engineering/SKILL.md` contains no `## Process` heading or section; its workflow is organized across domain-specific sections (`## Component Architecture`, `## State Management`, `## Design System Adherence`, `## Accessibility (WCAG 2.1 AA)`, `## Responsive Design`, `## Loading and Transitions`). Furthermore, section 04 is titled `## Common Rationalizations` in `SKILL.md:299` rather than `Rationalizations`.
- `cross-file-contradiction` — sources/addy-external/frontend-ui-engineering.md:12 vs sources/addy/commands/build.toml:1-44 — The external page displays `Command /build` and the blurb `Write the code in thin, tested vertical slices` for `frontend-ui-engineering`, but `commands/build.toml` exclusively invokes `incremental-implementation` and `test-driven-development` and never invokes `frontend-ui-engineering`.
- `cross-file-contradiction` — sources/addy-external/frontend-ui-engineering.md:12 vs sources/addy/CLAUDE.md:23 and sources/addy/README.md:362 — The "More in the Build phase" card grid displays only 3 sibling skills (`incremental-implementation`, `test-driven-development`, `context-engineering`), omitting `api-and-interface-design`, `source-driven-development`, and `doubt-driven-development`, which are also categorized under the Build phase in `sources/addy/CLAUDE.md:23` and `sources/addy/README.md:362`.
- `doc-drift` — sources/addy-external/frontend-ui-engineering.md:10 vs sources/addy/skills/frontend-ui-engineering/SKILL.md:297 — Missing reference documentation linkage: the external page links to `SKILL.md` on GitHub but omits any mention of or link to `references/accessibility-checklist.md`, which is explicitly referenced as companion material by `SKILL.md:297`.
- `orphan` — sources/addy-external/frontend-ui-engineering.md:1 — The external documentation URL (`https://skills.addy.ie/skills/frontend-ui-engineering/`) is not referenced or linked anywhere within the internal repository files under `sources/addy/`. It is brought into scope exclusively via the synthesis manifest (`docs/analysis/manifest/addy.md:202`) per METHOD.md §1.1.
- `format-mismatch` — sources/addy-external/frontend-ui-engineering.md:1-20 — File has the `.md` markdown file extension but contains raw minified HTML (`<!DOCTYPE html><html ...>`) compiled by Astro with embedded inline `<style>` and `<script>` blocks.

## Observations
- The external documentation represents a statically generated Astro site page snapshot (`<!DOCTYPE html><html lang="en" data-astro-cid-5hce7sga>`), rendered from the web deployment of `skills.addy.ie`.
- It highlights the `npx skills add` CLI distribution mechanism (from `vercel-labs/skills`), indicating how Addy intends skills to be consumed independently or as a pack by agent users across multiple platforms (Claude Code, Codex, Cursor, Antigravity).
- It reinforces the 5-phase lifecycle taxonomy of Addy (`Idea`, `Design`, `Build`, `Review`, `Ship`), categorizing `frontend-ui-engineering` firmly into `Build` alongside `/build`, `incremental-implementation`, `test-driven-development`, and `context-engineering`.
- The HTML contains minified inline CSS and JavaScript for copy buttons (`data-copy-btn`), mobile menu toggling, scroll reveal animations (`IntersectionObserver`), and Netlify RUM analytics (`data-netlify-rum-site-id`).

## Context cost
- Bytes: 26,596 bytes
- Approximate tokens: ~6,650 tokens (full HTML document); substantive text and metadata is approx. ~3,900 bytes (~975 tokens).
- Loaded dependencies: none (external standalone document).
