---
package: addy
path: ../addy-external/ci-cd-and-automation.md
type: external-doc
bytes: 26179
unit: inv-addy-25
---

# sources/addy-external/ci-cd-and-automation.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — sources/addy-external/ci-cd-and-automation.md:5

## Design intent — required
Manual inspection of pull requests and ad-hoc deployments do not scale when multiple human engineers and autonomous coding agents push high-velocity changes. Without automated verification pipelines, defects, type errors, security vulnerabilities, and broken builds reach production branches, increasing blast radius and mean-time-to-recovery (MTTR). `sources/addy-external/ci-cd-and-automation.md` provides the public web catalog and installation entry point for the `ci-cd-and-automation` skill on `https://skills.addy.ie`. It establishes web-accessible discoverability for the skill, provides verified CLI commands for installing via Vercel Labs' `skills` CLI tool (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`), defines the standardized 6-section skill anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), and firmly anchors the skill within the `addy:Ship` lifecycle phase alongside slash command `/ship` and companion Ship-phase skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`). Without this external doc, users and automated package consumers lack a web-searchable landing page, a direct one-command CLI installation target, cross-links to related lifecycle skills, and an entry point to web-based tutorials and loop engineering guides.

## Phase — required
addy:Ship

## Inputs — required
- In-repo skill definition at `skills/ci-cd-and-automation/SKILL.md` (linked via `https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md` at line 10)
- Skills CLI packaging metadata (`addyosmani/agent-skills` repository)
- Lifecycle metadata assigning the skill to the Ship phase and `/ship` slash command
- Related skills in the Ship phase (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`)
- Global site assets (fonts, Astro styling, navigation structure, social cards)

## Outputs — required
- Web presentation and documentation catalog entry for `ci-cd-and-automation` at `https://skills.addy.ie/skills/ci-cd-and-automation/`
- Open skills CLI installation command strings:
  - `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`
  - `npx skills add addyosmani/agent-skills`
- Canonical links and social metadata (`og:title`, `og:description`, `og:url`, `twitter:card`, etc.)
- Navigation links to related lifecycle skills, tutorials, lifecycle documentation, and GitHub repository

## Invokes — required
- command /ship — sources/addy-external/ci-cd-and-automation.md:12
- skill skills/ci-cd-and-automation/SKILL.md — sources/addy-external/ci-cd-and-automation.md:10
- skill git-workflow-and-versioning — sources/addy-external/ci-cd-and-automation.md:12
- skill deprecation-and-migration — sources/addy-external/ci-cd-and-automation.md:12
- skill documentation-and-adrs — sources/addy-external/ci-cd-and-automation.md:12
- doc /docs/getting-started/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /lifecycle/ — sources/addy-external/ci-cd-and-automation.md:5, 12, 15
- doc /loops/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /tutorials/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /teach/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /compare/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc CONTRIBUTING.md — sources/addy-external/ci-cd-and-automation.md:15
- tool vercel-labs/skills — sources/addy-external/ci-cd-and-automation.md:6

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ci-cd-and-automation` — sources/addy-external/ci-cd-and-automation.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/ci-cd-and-automation.md:1, 5, 13 — used here
- `Shift Left` — sources/addy-external/ci-cd-and-automation.md:1, 5 — used here
- `Faster is Safer` — sources/addy-external/ci-cd-and-automation.md:1, 5 — used here
- `feature flags` — sources/addy-external/ci-cd-and-automation.md:1, 5 — used here
- `quality-gate pipelines` — sources/addy-external/ci-cd-and-automation.md:1, 5 — used here
- `failure feedback loops` — sources/addy-external/ci-cd-and-automation.md:1, 5 — used here
- `Ship` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `Ship phase` — sources/addy-external/ci-cd-and-automation.md:5, 12 — used here
- `build and deploy pipelines` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `#ci-cd` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `#automation` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `skills CLI` — sources/addy-external/ci-cd-and-automation.md:6 — used here
- `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` — sources/addy-external/ci-cd-and-automation.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — sources/addy-external/ci-cd-and-automation.md:8, 15 — defined here
- `Overview` — sources/addy-external/ci-cd-and-automation.md:10 — defined here
- `When to Use` — sources/addy-external/ci-cd-and-automation.md:10 — defined here
- `Process` — sources/addy-external/ci-cd-and-automation.md:10 — defined here
- `Rationalizations` — sources/addy-external/ci-cd-and-automation.md:10 — defined here
- `Red Flags` — sources/addy-external/ci-cd-and-automation.md:10 — defined here
- `Verification` — sources/addy-external/ci-cd-and-automation.md:10 — defined here
- `/ship` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `git-workflow-and-versioning` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `trunk-based development` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `atomic commits` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `~100-line changes` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `commit-as-save-point` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `deprecation-and-migration` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `code-as-liability mindset` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `compulsory vs advisory deprecation` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `zombie-code removal` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `documentation-and-adrs` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `Architecture Decision Records` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `API docs` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `inline standards` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `Claude Code` — sources/addy-external/ci-cd-and-automation.md:15 — used here
- `Codex` — sources/addy-external/ci-cd-and-automation.md:15 — used here
- `Cursor` — sources/addy-external/ci-cd-and-automation.md:15 — used here
- `Antigravity` — sources/addy-external/ci-cd-and-automation.md:15 — used here
- `Loop engineering` — sources/addy-external/ci-cd-and-automation.md:15 — used here
- `Evals framework` — sources/addy-external/ci-cd-and-automation.md:15 — used here

## Structure
- ci-cd-and-automation (h1) — sources/addy-external/ci-cd-and-automation.md:5
- Install just this skill (h2) — sources/addy-external/ci-cd-and-automation.md:5
- How this skill is structured (h2) — sources/addy-external/ci-cd-and-automation.md:8
- Ship phase (h3) — sources/addy-external/ci-cd-and-automation.md:12
- More in the Ship phase (h2) — sources/addy-external/ci-cd-and-automation.md:12
- git-workflow-and-versioning (h3) — sources/addy-external/ci-cd-and-automation.md:12
- deprecation-and-migration (h3) — sources/addy-external/ci-cd-and-automation.md:12
- documentation-and-adrs (h3) — sources/addy-external/ci-cd-and-automation.md:12
- Product (h3) — sources/addy-external/ci-cd-and-automation.md:15
- Setup (h3) — sources/addy-external/ci-cd-and-automation.md:15
- Resources (h3) — sources/addy-external/ci-cd-and-automation.md:15

## Scripts — required if type is script or the skill ships scripts
none (File type is `external-doc`; it ships no executable script files. Documented CLI installation commands were executed and verified under METHOD.md R2):
- `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` — sources/addy-external/ci-cd-and-automation.md:8
  - **executed:** yes
  - actual command run: `mkdir -p /tmp/test-ci-cd-verify && cd /tmp/test-ci-cd-verify && npx --yes skills add addyosmani/agent-skills --skill ci-cd-and-automation -y --copy && ls -la && rm -rf /tmp/test-ci-cd-verify`
  - abridged stdout: `Agent detected — installing non-interactively ... Selected 1 skill: ci-cd-and-automation ... Installed 1 skill: ✓ ci-cd-and-automation (copied) → ./.agents/skills/ci-cd-and-automation`
  - **actual exit code:** `0`
  - documented exit codes: none documented in HTML text; CLI exits 0 on successful installation and non-zero on failure.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, installs the single specified skill.
- `npx skills add addyosmani/agent-skills`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills` — sources/addy-external/ci-cd-and-automation.md:8, 15
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills -l`
  - abridged stdout: `ci-cd-and-automation ... code-review-and-quality ... using-agent-skills ... Use --skill <name> to install specific skills`
  - **actual exit code:** `0`
  - documented exit codes: none documented; CLI exits 0.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, queries repository and lists all 25 skills.

## Defects — required
- `doc-drift` — sources/addy-external/ci-cd-and-automation.md:5 vs sources/addy/skills/ci-cd-and-automation/SKILL.md:3 — The external doc summary description states `"Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound."`, whereas the in-repo SKILL.md frontmatter description states `"Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies."`.
- `doc-drift` — sources/addy-external/ci-cd-and-automation.md:5 vs sources/addy/skills/ci-cd-and-automation/SKILL.md:16-23 — The external doc condenses "When to Use" into a single clause (`"Setting up or modifying build and deploy pipelines."`), omitting five detailed operational triggers present in `SKILL.md` (automating quality gates, configuring CI test runners, establishing deployment strategies, preview deployments, and feeding CI failures back to agents).
- `doc-drift` — sources/addy-external/ci-cd-and-automation.md:10 vs sources/addy/skills/ci-cd-and-automation/SKILL.md:24-342 — The external page lists a standard 6-section anatomy featuring `03 Process (Step-by-step workflow)`, but `ci-cd-and-automation/SKILL.md` contains no `## Process` heading or section; its workflow is organized across domain-specific sections (`## The Quality Gate Pipeline`, `## GitHub Actions Configuration`, `## Feeding CI Failures Back to Agents`, `## Deployment Automation`, `## CI Optimization`).
- `cross-file-contradiction` — sources/addy-external/ci-cd-and-automation.md:12 vs sources/addy/README.md:376 — The "More in the Ship phase" card grid lists only 3 sibling skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`), omitting `shipping-and-launch`, which is also categorized under the Ship phase in `sources/addy/README.md:376` and `CLAUDE.md:26`.
- `orphan` — sources/addy-external/ci-cd-and-automation.md:1 — The external documentation URL (`https://skills.addy.ie/skills/ci-cd-and-automation/`) is not referenced or linked anywhere within the internal repository files under `sources/addy/`. It is brought into scope exclusively via the synthesis manifest (`docs/analysis/manifest/addy.md:200`) per METHOD.md §1.1.

## Observations
- The external documentation represents a statically generated Astro site page snapshot (`<!DOCTYPE html><html lang="en" data-astro-cid-5hce7sga>`), rendered from the web deployment of `skills.addy.ie`.
- It highlights the `npx skills add` CLI distribution mechanism (from `vercel-labs/skills`), indicating how Addy intends skills to be consumed independently or as a pack by agent users across multiple platforms (Claude Code, Codex, Cursor, Antigravity).
- It reinforces the 5-phase lifecycle taxonomy of Addy (`Idea`, `Design`, `Build`, `Review`, `Ship`), categorizing `ci-cd-and-automation` firmly into `Ship` alongside `/ship`, `git-workflow-and-versioning`, `deprecation-and-migration`, and `documentation-and-adrs`.
- The HTML contains minified inline CSS and JavaScript for copy buttons (`data-copy-btn`), mobile menu toggling, and Netlify RUM analytics (`data-netlify-rum-site-id`).

## Context cost
- Bytes: 26,179 bytes
- Approximate tokens: ~6,500 tokens (full HTML document); substantive text and metadata is approx. ~3,800 bytes (~950 tokens).
- Loaded dependencies: none (external standalone document).
