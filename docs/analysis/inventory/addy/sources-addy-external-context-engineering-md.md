---
package: addy
path: ../addy-external/context-engineering.md
type: external-doc
bytes: 26352
unit: inv-addy-26
---

# sources/addy-external/context-engineering.md

## Purpose — required, verbatim
> "Optimizes agent context setup. Configure rules files, pack context deliberately, and wire MCP integrations so the agent has exactly what it needs - no more, no less." — sources/addy-external/context-engineering.md:1, 5

> "Starting a session, switching tasks, or when output quality drops." — sources/addy-external/context-engineering.md:5

## Design intent — required
Without deliberate context engineering, autonomous coding agents suffer from either context starvation (hallucinating non-existent APIs, inventing redundant utilities, ignoring established architectural conventions) or context flooding (excessive non-task context causing attention dilution and degraded reasoning quality). Furthermore, long-running agent sessions accumulate stale assumptions, outdated error outputs, and confusion. `sources/addy-external/context-engineering.md` solves this by serving as the public web catalog, discovery portal, and installation entry point for the `context-engineering` skill on `https://skills.addy.ie`. It establishes web-accessible discoverability for the skill, provides verified CLI installation commands via Vercel Labs' open `skills` CLI package manager (`npx skills add addyosmani/agent-skills --skill context-engineering`), defines the standardized 6-section skill anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), anchors the skill firmly in the `addy:Build` lifecycle phase alongside slash command `/build`, and cross-links related Build-phase skills (`incremental-implementation`, `test-driven-development`, `source-driven-development`). Without this external document, developers and agent runners would lack a standalone web landing page, a direct one-command CLI installation target, cross-links to related lifecycle skills, and an entry point to web-based tutorials and loop engineering guides.

## Phase — required
addy:Build

## Inputs — required
- In-repo skill definition at `skills/context-engineering/SKILL.md` (linked via `https://github.com/addyosmani/agent-skills/blob/main/skills/context-engineering/SKILL.md` at line 10)
- Skills CLI packaging metadata (`addyosmani/agent-skills` repository)
- Lifecycle metadata assigning the skill to the Build phase (and linking to `/build` command)
- Related skills in the Build phase (`incremental-implementation`, `test-driven-development`, `source-driven-development`)
- Global site assets (Geist and Geist Mono fonts, Astro stylesheets `/css/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css`, responsive navigation structure, social cards, Netlify RUM analytics token)

## Outputs — required
- Web presentation and documentation catalog entry for `context-engineering` at `https://skills.addy.ie/skills/context-engineering/`
- Open skills CLI installation command strings:
  - `npx skills add addyosmani/agent-skills --skill context-engineering`
  - `npx skills add addyosmani/agent-skills`
- Canonical links and social metadata (`og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:creator`)
- Navigation links to related lifecycle skills, tutorials, lifecycle documentation, GitHub repository, and setup guides (Claude Code, Codex, Cursor, Antigravity)
- Client-side UI behaviors (clipboard copy button, mobile navigation drawer toggle, reveal animations, Netlify RUM telemetry)

## Invokes — required
- command /build — sources/addy-external/context-engineering.md:12
- command /test — sources/addy-external/context-engineering.md:12
- skill skills/context-engineering/SKILL.md — sources/addy-external/context-engineering.md:10
- skill incremental-implementation — sources/addy-external/context-engineering.md:12
- skill test-driven-development — sources/addy-external/context-engineering.md:12
- skill source-driven-development — sources/addy-external/context-engineering.md:12
- doc /docs/getting-started/ — sources/addy-external/context-engineering.md:5, 15
- doc /lifecycle/ — sources/addy-external/context-engineering.md:5, 12, 15
- doc /loops/ — sources/addy-external/context-engineering.md:5, 15
- doc /tutorials/ — sources/addy-external/context-engineering.md:5, 15
- doc /teach/ — sources/addy-external/context-engineering.md:5, 15
- doc /compare/ — sources/addy-external/context-engineering.md:5, 15
- doc /skills/ — sources/addy-external/context-engineering.md:5, 15
- doc CONTRIBUTING.md — sources/addy-external/context-engineering.md:15
- tool vercel-labs/skills — sources/addy-external/context-engineering.md:6

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `context-engineering` — sources/addy-external/context-engineering.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/context-engineering.md:1, 5, 12, 15 — used here
- `rules files` — sources/addy-external/context-engineering.md:1, 5 — used here
- `pack context` — sources/addy-external/context-engineering.md:1, 5 — used here
- `MCP integrations` — sources/addy-external/context-engineering.md:1, 5 — used here
- `Build` — sources/addy-external/context-engineering.md:5, 12 — used here
- `Build phase` — sources/addy-external/context-engineering.md:5, 12 — used here
- `#context` — sources/addy-external/context-engineering.md:5 — used here
- `#agents` — sources/addy-external/context-engineering.md:5 — used here
- `#mcp` — sources/addy-external/context-engineering.md:5 — used here
- `skills CLI` — sources/addy-external/context-engineering.md:6 — used here
- `This skill only` — sources/addy-external/context-engineering.md:8 — used here
- `All skills` — sources/addy-external/context-engineering.md:8 — used here
- `npx skills add addyosmani/agent-skills --skill context-engineering` — sources/addy-external/context-engineering.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — sources/addy-external/context-engineering.md:8, 15 — defined here
- `Overview` — sources/addy-external/context-engineering.md:10 — defined here
- `When to Use` — sources/addy-external/context-engineering.md:10 — defined here
- `Process` — sources/addy-external/context-engineering.md:10 — defined here
- `Rationalizations` — sources/addy-external/context-engineering.md:10 — defined here
- `Red Flags` — sources/addy-external/context-engineering.md:10 — defined here
- `Verification` — sources/addy-external/context-engineering.md:10 — defined here
- `SKILL.md` — sources/addy-external/context-engineering.md:10 — used here
- `vertical slices` — sources/addy-external/context-engineering.md:12 — used here
- `/build` — sources/addy-external/context-engineering.md:12 — used here
- `/test` — sources/addy-external/context-engineering.md:12 — used here
- `incremental-implementation` — sources/addy-external/context-engineering.md:12 — used here
- `thin vertical slices` — sources/addy-external/context-engineering.md:12 — used here
- `rollback-friendly changes` — sources/addy-external/context-engineering.md:12 — used here
- `test-driven-development` — sources/addy-external/context-engineering.md:12 — used here
- `Red-Green-Refactor` — sources/addy-external/context-engineering.md:12 — used here
- `the test pyramid` — sources/addy-external/context-engineering.md:12 — used here
- `DAMP over DRY` — sources/addy-external/context-engineering.md:12 — used here
- `the Beyoncé Rule` — sources/addy-external/context-engineering.md:12 — used here
- `source-driven-development` — sources/addy-external/context-engineering.md:12 — used here
- `official docs` — sources/addy-external/context-engineering.md:12 — used here
- `Claude Code` — sources/addy-external/context-engineering.md:15 — used here
- `Codex` — sources/addy-external/context-engineering.md:15 — used here
- `Cursor` — sources/addy-external/context-engineering.md:15 — used here
- `Antigravity` — sources/addy-external/context-engineering.md:15 — used here
- `Loop engineering` — sources/addy-external/context-engineering.md:15 — used here
- `Evals framework` — sources/addy-external/context-engineering.md:15 — used here
- `Addy Osmani` — sources/addy-external/context-engineering.md:16 — used here

## Structure
- context-engineering (h1) — sources/addy-external/context-engineering.md:5
- Install just this skill (h2) — sources/addy-external/context-engineering.md:5
- How this skill is structured (h2) — sources/addy-external/context-engineering.md:8
- Build phase (h3) — sources/addy-external/context-engineering.md:12
- More in the Build phase (h2) — sources/addy-external/context-engineering.md:12
- incremental-implementation (h3) — sources/addy-external/context-engineering.md:12
- test-driven-development (h3) — sources/addy-external/context-engineering.md:12
- source-driven-development (h3) — sources/addy-external/context-engineering.md:12
- Product (h3) — sources/addy-external/context-engineering.md:15
- Setup (h3) — sources/addy-external/context-engineering.md:15
- Resources (h3) — sources/addy-external/context-engineering.md:15

## Scripts — required if type is script or the skill ships scripts
none (File type is `external-doc`; it ships no executable script files. Documented CLI installation commands were executed and verified under METHOD.md R2):
- `npx skills add addyosmani/agent-skills --skill context-engineering`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills --skill context-engineering` — sources/addy-external/context-engineering.md:8
  - **executed:** yes
  - actual command run: `mkdir -p /tmp/test-context-eng-verify && cd /tmp/test-context-eng-verify && npx --yes skills add addyosmani/agent-skills --skill context-engineering -y --copy && ls -la .agents/skills/context-engineering && rm -rf /tmp/test-context-eng-verify`
  - abridged stdout: `Agent detected — installing non-interactively ... Selected 1 skill: context-engineering ... Installed 1 skill: ✓ context-engineering (copied) → ./.agents/skills/context-engineering`
  - **actual exit code:** `0`
  - documented exit codes: none documented in HTML text; CLI exits 0 on successful installation and non-zero on failure.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, installs the single specified skill.
- `npx skills add addyosmani/agent-skills`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills` — sources/addy-external/context-engineering.md:8, 15
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills -l`
  - abridged stdout: `ci-cd-and-automation ... context-engineering ... using-agent-skills ... Use --skill <name> to install specific skills`
  - **actual exit code:** `0`
  - documented exit codes: none documented; CLI exits 0.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, queries repository and lists all 25 skills.

## Defects — required
- `doc-drift` — sources/addy-external/context-engineering.md:1, 5 vs sources/addy/skills/context-engineering/SKILL.md:3 — The external doc summary description states `"Optimizes agent context setup. Configure rules files, pack context deliberately, and wire MCP integrations so the agent has exactly what it needs - no more, no less."`, whereas the in-repo SKILL.md frontmatter description states `"Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project."` (and `sources/addy/README.md:251` states `"Feed agents the right information at the right time - rules files, context packing, MCP integrations"`).
- `doc-drift` — sources/addy-external/context-engineering.md:5 vs sources/addy/skills/context-engineering/SKILL.md:14-19 — The external doc condenses "When to Use" into 3 triggers (`"Starting a session, switching tasks, or when output quality drops."`), omitting two detailed operational triggers present in `SKILL.md` (`"Setting up a new project for AI-assisted development"`, `"The agent is not following project conventions"`).
- `doc-drift` — sources/addy-external/context-engineering.md:10 vs sources/addy/skills/context-engineering/SKILL.md:20-252 — The external page lists a standard 6-section anatomy featuring `03 Process (Step-by-step workflow)`, but `context-engineering/SKILL.md` contains no `## Process` heading or linear section; its workflow is organized across domain sections (`## The Context Hierarchy`, `## Context Packing Strategies`, `## MCP Integrations`, `## Confusion Management`, `## Anti-Patterns`).
- `doc-drift` — sources/addy-external/context-engineering.md:12 vs sources/addy/.claude/commands/build.md:5 — The external sidebar pairs `context-engineering` with `/build` and the blurb `"Write the code in thin, tested vertical slices."` However, `/build` explicitly invokes only `incremental-implementation` and `test-driven-development`; `context-engineering` has no dedicated slash command.
- `cross-file-contradiction` — sources/addy-external/context-engineering.md:12 vs sources/addy/README.md:245-256 and sources/addy/CLAUDE.md:23 — The "More in the Build phase" card grid displays only 3 sibling skills (`incremental-implementation`, `test-driven-development`, `source-driven-development`), omitting 3 other Build-phase skills present in `sources/addy/README.md:245-256` and `CLAUDE.md:23` (`doubt-driven-development`, `frontend-ui-engineering`, `api-and-interface-design`).
- `orphan` — sources/addy-external/context-engineering.md:1 — The external documentation URL (`https://skills.addy.ie/skills/context-engineering/`) is not referenced or linked anywhere within the internal repository files under `sources/addy/`. It is brought into scope exclusively via the synthesis manifest (`docs/analysis/manifest/addy.md:201`) per METHOD.md §1.1.

## Observations
- The external documentation represents a statically generated Astro site page snapshot (`<!DOCTYPE html><html lang="en" data-astro-cid-5hce7sga>`), rendered from the web deployment of `skills.addy.ie`.
- It highlights the `npx skills add` CLI distribution mechanism (from `vercel-labs/skills`), indicating how Addy intends skills to be consumed independently or as a pack by agent users across multiple platforms (Claude Code, Codex, Cursor, Antigravity).
- It reinforces the 5-phase lifecycle taxonomy of Addy (`Idea`, `Design`, `Build`, `Review`, `Ship`), categorizing `context-engineering` firmly into `Build` alongside `/build`, `incremental-implementation`, `test-driven-development`, and `source-driven-development`.
- The HTML contains minified inline CSS and JavaScript for copy buttons (`data-copy-btn`), mobile menu toggling, and Netlify RUM analytics (`data-netlify-rum-site-id="35855e33-2721-4c12-bae9-edb8b9d2c20e"`).

## Context cost
- Bytes: 26,352 bytes
- Approximate tokens: ~6,550 tokens (full HTML document); substantive text and metadata is approx. ~3,900 bytes (~975 tokens).
- Loaded dependencies: none (external standalone document).
