---
package: addy
path: external/documentation-and-adrs.md
type: external-doc
bytes: 26223
unit: inv-addy-19
aliases: []
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# external/documentation-and-adrs.md

## Purpose — required, verbatim
> "Records decisions and documentation. Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." — external/documentation-and-adrs.md:5

## Design intent — required
This external documentation page (`https://skills.addy.ie/skills/documentation-and-adrs/`) serves as the public web landing page and catalog entry for the `documentation-and-adrs` skill in Addy Osmani's agent skills library. Hosted on skills.addy.ie, it summarizes the skill's purpose (capturing decisions, ADRs, and inline docs), outlines trigger conditions ("Making architectural decisions, changing APIs, or shipping features."), presents the standardized 6-part skill anatomy, offers CLI installation commands via `npx skills add`, and places the skill in the Ship lifecycle phase associated with the `/ship` command and related skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`). Without this page, external web users and autonomous agents browsing the public catalog would lack web discoverability, an overview of the skill's structure, and direct links to the canonical GitHub source repository (`skills/documentation-and-adrs/SKILL.md`).

## Phase — required
addy:Ship
> "Ship phase" — external/documentation-and-adrs.md:5

## Inputs — required
Static web page inputs:
- HTTP GET requests to `https://skills.addy.ie/skills/documentation-and-adrs/`
- Build-time content from `skills/documentation-and-adrs/SKILL.md` rendered via Astro templates.
- Trigger condition documented on page: "Making architectural decisions, changing APIs, or shipping features." — external/documentation-and-adrs.md:5
No CLI parameters or runtime arguments are consumed by this static HTML document.

## Outputs — required
Static web presentation:
- Rendered HTML document displaying skill summary, triggers, CLI installation commands (`npx skills add addyosmani/agent-skills --skill documentation-and-adrs`), 6-part skill anatomy, and navigation links to related Ship skills and the GitHub source file (`https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md`).
Produces no repository artifacts, files, or commits directly.

## Invokes — required
- command /ship — external/documentation-and-adrs.md:12
- skill git-workflow-and-versioning — external/documentation-and-adrs.md:12
- skill ci-cd-and-automation — external/documentation-and-adrs.md:12
- skill deprecation-and-migration — external/documentation-and-adrs.md:12
- file skills/documentation-and-adrs/SKILL.md — external/documentation-and-adrs.md:10

## Invoked by — required
orphan (external documentation page published at `https://skills.addy.ie/skills/documentation-and-adrs/`; not invoked or referenced by any file within `sources/addy/`)

## Concepts named — required, verbatim
- `documentation-and-adrs` — external/documentation-and-adrs.md:1 — defined here
- `Architecture Decision Records` — external/documentation-and-adrs.md:1 — defined here
- `API docs` — external/documentation-and-adrs.md:1 — defined here
- `inline documentation standards` — external/documentation-and-adrs.md:1 — defined here
- `Ship phase` — external/documentation-and-adrs.md:5 — used here
- `documentation` — external/documentation-and-adrs.md:5 — used here
- `adr` — external/documentation-and-adrs.md:5 — used here
- `skills CLI` — external/documentation-and-adrs.md:6 — used here
- `How this skill is structured` — external/documentation-and-adrs.md:8 — defined here
- `anatomy` — external/documentation-and-adrs.md:9 — defined here
- `Overview` — external/documentation-and-adrs.md:10 — defined here
- `When to Use` — external/documentation-and-adrs.md:10 — defined here
- `Process` — external/documentation-and-adrs.md:10 — defined here
- `Rationalizations` — external/documentation-and-adrs.md:10 — defined here
- `Red Flags` — external/documentation-and-adrs.md:10 — defined here
- `Verification` — external/documentation-and-adrs.md:10 — defined here
- `SKILL.md` — external/documentation-and-adrs.md:11 — used here
- `/ship` — external/documentation-and-adrs.md:12 — used here
- `git-workflow-and-versioning` — external/documentation-and-adrs.md:12 — used here
- `trunk-based development` — external/documentation-and-adrs.md:12 — used here
- `atomic commits` — external/documentation-and-adrs.md:12 — used here
- `~100-line changes` — external/documentation-and-adrs.md:12 — used here
- `commit-as-save-point` — external/documentation-and-adrs.md:12 — used here
- `ci-cd-and-automation` — external/documentation-and-adrs.md:12 — used here
- `Shift Left` — external/documentation-and-adrs.md:12 — used here
- `Faster is Safer` — external/documentation-and-adrs.md:12 — used here
- `feature flags` — external/documentation-and-adrs.md:12 — used here
- `quality-gate pipelines` — external/documentation-and-adrs.md:12 — used here
- `deprecation-and-migration` — external/documentation-and-adrs.md:12 — used here
- `code-as-liability mindset` — external/documentation-and-adrs.md:12 — used here
- `compulsory vs advisory deprecation` — external/documentation-and-adrs.md:12 — used here
- `zombie-code removal` — external/documentation-and-adrs.md:12 — used here
- `Claude Code` — external/documentation-and-adrs.md:15 — used here
- `Codex` — external/documentation-and-adrs.md:15 — used here
- `Cursor` — external/documentation-and-adrs.md:15 — used here
- `Antigravity` — external/documentation-and-adrs.md:15 — used here
- `Evals framework` — external/documentation-and-adrs.md:15 — used here

## Structure
- "documentation-and-adrs" — external/documentation-and-adrs.md:5
- "Install just this skill" — external/documentation-and-adrs.md:5
- "How this skill is structured" — external/documentation-and-adrs.md:8
- "Ship phase" — external/documentation-and-adrs.md:12
- "More in the Ship phase" — external/documentation-and-adrs.md:12
- "Product" — external/documentation-and-adrs.md:15
- "Setup" — external/documentation-and-adrs.md:15
- "Resources" — external/documentation-and-adrs.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/documentation-and-adrs.md:5 — The webpage summary appends "Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." ("Records decisions and documentation. Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." — external/documentation-and-adrs.md:5), whereas the repository skill description ("Records decisions and documentation. Use when making architectural decisions, changing public APIs, shipping features, or when you need to record context that future engineers and agents will need to understand the codebase." — skills/documentation-and-adrs/SKILL.md:3) combines a concise summary sentence with broader triggering criteria.
- doc-drift — external/documentation-and-adrs.md:5 — The page condenses the skill's triggering criteria in the "Use when" block to "Making architectural decisions, changing APIs, or shipping features." — external/documentation-and-adrs.md:5, omitting "changing public APIs" and "when you need to record context that future engineers and agents will need to understand the codebase." — skills/documentation-and-adrs/SKILL.md:3, as well as the full bulleted trigger list under "## When to Use" in skills/documentation-and-adrs/SKILL.md:12-21.
- doc-drift — external/documentation-and-adrs.md:10 — The page displays a generic 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/documentation-and-adrs.md:9; "Process" — external/documentation-and-adrs.md:10; "Rationalizations" — external/documentation-and-adrs.md:10; "Red Flags" — external/documentation-and-adrs.md:10), but skills/documentation-and-adrs/SKILL.md does not follow this anatomy: it has no "Process", "Rationalizations", or "Red Flags" sections, providing instead "## Architecture Decision Records (ADRs)", "## ADR Template", "## ADR Lifecycle", "## API Documentation", and "## Inline Documentation Standards".
- orphan — external/documentation-and-adrs.md:1 — External documentation page is an orphan within the repository; no in-scope file in `sources/addy/` links to or invokes this external documentation page.

## Observations
- Generated via Astro static site generator (`data-astro-cid-*` attributes) and hosted at `https://skills.addy.ie/skills/documentation-and-adrs/`.
- Provides CLI installation commands for the single skill ("npx skills add addyosmani/agent-skills --skill documentation-and-adrs" — external/documentation-and-adrs.md:8) and whole pack snippet ("npx skills add addyosmani/agent-skills" — external/documentation-and-adrs.md:8).
- Includes client-side interactive clipboard copying script for the `skills CLI` installation snippet.
- Embeds Netlify RUM analytics script (`netlify-rum-container`) and links to external Geist / Geist Mono web fonts.
- Features cross-harness navigation in the footer linking to getting started guides for `Claude Code`, `Codex`, `Cursor`, and `Antigravity`.
- Places the skill under the Ship phase with command "/ship" — external/documentation-and-adrs.md:12, and links to related Ship skills: git-workflow-and-versioning, ci-cd-and-automation, and deprecation-and-migration ("More in the Ship phase" — external/documentation-and-adrs.md:12).
- Context cost observation: As an Astro-rendered HTML file (26,223 bytes), the vast majority of tokens comprise UI boilerplate, CSS styles, SVGs, and client scripts rather than actionable documentation.

## Context cost
- File size: 26,223 bytes (~6,555 tokens).
- Linked files: `skills/documentation-and-adrs/SKILL.md` (9,782 bytes), `commands/ship.toml` (1,691 bytes), `skills/git-workflow-and-versioning/SKILL.md` (12,987 bytes), `skills/ci-cd-and-automation/SKILL.md` (10,958 bytes), and `skills/deprecation-and-migration/SKILL.md` (10,601 bytes). Total with directly referenced files: 72,242 bytes (~18,060 tokens).
