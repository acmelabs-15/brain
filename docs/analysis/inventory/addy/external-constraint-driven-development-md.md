---
package: addy
path: ../addy-external/constraint-driven-development.md
type: external-doc
bytes: 0
unit: inv-addy-29
---

# ../addy-external/constraint-driven-development.md

## Purpose — required, verbatim
> "none (file unavailable upstream: https://skills.addy.ie/skills/constraint-driven-development/ returned HTTP 404; snapshot size 0 bytes)" — ../addy-external/constraint-driven-development.md:0

Upstream in-repository skill purpose (for cross-reference from `sources/addy/skills/constraint-driven-development/SKILL.md:3`):
> "Establishes a project's quality bar as a written contract and stops agents quietly lowering it. Interviews the user on which dimensions matter, supplies sane default thresholds when they have no number in mind, records everything in CONSTRAINTS.md, and watches the diff for a weakened bar — new @ts-ignore or eslint-disable suppressions, skipped or deleted tests, assertions stripped out, unimplemented stubs, thresholds edited down. Use when no quality bar is written down, when the user says \"set up constraints\" or \"define our standards\", when an agent keeps silencing checks or skipping tests to get to green, when you need a coverage or performance threshold and don't know what number to pick, or when an agent writes more code than anyone will read." — skills/constraint-driven-development/SKILL.md:3

## Design intent — required
Intended to serve as the public web catalog, discovery portal, and installation landing page for Addy Osmani's `constraint-driven-development` skill within the `agent-skills` ecosystem (`skills.addy.ie/skills/constraint-driven-development/`). However, during Phase 0 external documentation snapshotting, this page was found to be unavailable (HTTP 404 Not Found), resulting in 0 bytes on disk. Investigation reveals that `https://skills.addy.ie/sitemap-0.xml` indexes only 24 skills, omitting `constraint-driven-development` from web deployment despite the canonical skill being fully implemented in the repository (20,880 bytes in `sources/addy/skills/constraint-driven-development/SKILL.md`, inventoried in `inv-addy-16`). Without this external catalog page, web users cannot discover the skill via `skills.addy.ie`, install it directly via the single-skill web command, or browse it in the Define phase web grid. Per `METHOD.md` §1.1, §5, and R1, unavailable external pages are retained in the manifest and cataloged with an explicit inventory entry rather than silently dropped.

## Phase — required
addy:Define

*(Note: Derived from repository categorization in `sources/addy/README.md:356` and in-repo skill inventory in `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`).*

## Inputs — required
none (file unavailable upstream; HTTP 404 returned from `https://skills.addy.ie/skills/constraint-driven-development/`)

## Outputs — required
none (file unavailable upstream; 0 bytes on disk)

## Invokes — required
- skill skills/constraint-driven-development/SKILL.md — sources/addy/skills/constraint-driven-development/SKILL.md:1

## Invoked by — required
- manifest docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:205

## Concepts named — required, verbatim
- `constraint-driven-development` — sources/addy/skills/constraint-driven-development/SKILL.md:2 — defined here

## Structure
none (file unavailable upstream; 0 bytes on disk)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · ../addy-external/constraint-driven-development.md:0 · Upstream URL `https://skills.addy.ie/skills/constraint-driven-development/` returned HTTP 404 (Not Found) during Phase 0 external doc fetch; file has 0 bytes and no content on disk.
- `doc-drift` · https://skills.addy.ie/sitemap-0.xml vs sources/addy/skills/ · The public documentation site only publishes 24 skills, omitting `constraint-driven-development`, while the cloned git repository contains 25 skills.
- `cross-file-contradiction` · sources/addy/CLAUDE.md:21 vs sources/addy/README.md:356 · `CLAUDE.md:21` omits `constraint-driven-development` from the Define phase listing (`**Define:** interview-me, idea-refine, spec-driven-development`), whereas `README.md:356` includes it (`├── constraint-driven-development/ # Define`).
- `cross-file-contradiction` · sources/addy-external/spec-driven-development.md:12 vs sources/addy/README.md:356 · The external spec-driven-development page omits `constraint-driven-development` from "More in the Define phase", while `README.md:356` lists it under Define.

## Observations
- Canonical Repository Implementation: The canonical skill exists in full at `sources/addy/skills/constraint-driven-development/SKILL.md` (20,880 bytes) along with `references/floor-guard.md` (10,419 bytes), and was comprehensively inventoried in work unit `inv-addy-16` (`docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`).
- Distribution CLI Parity: Although the web landing page 404s, Vercel's `skills` CLI reads directly from the GitHub repository (`npx skills add addyosmani/agent-skills -l`), so `constraint-driven-development` remains discoverable and installable via CLI tools.
- Preservation of Auditability: Retaining this entry and marking manifest row 205 as `| [x] (unavailable) |` complies strictly with `METHOD.md` §1.1 and §5 (Phase 0 step 3), proving complete coverage without silent dropping of missing upstream resources.

## Context cost
0 bytes source text, 0 tokens.
