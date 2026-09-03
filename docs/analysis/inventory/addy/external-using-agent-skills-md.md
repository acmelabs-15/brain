---
package: addy
path: ../addy-external/using-agent-skills.md
type: external-doc
bytes: 21955
unit: inv-addy-22
---

# ../addy-external/using-agent-skills.md

## Purpose — required, verbatim
> "Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered and invoked - load it first and it routes each task to the right workflow." — ../addy-external/using-agent-skills.md:1, 5

## Design intent — required
Functions as the public web catalog entry and distribution landing page for the `using-agent-skills` meta-skill on the `skills.addy.ie` documentation portal. Solves the problem of external discoverability for developers and automated agents operating outside the GitHub repository, providing an accessible browser presentation, copyable installation commands using Vercel's `skills` CLI, lifecycle positioning under an explicit "Meta phase", and a structured overview of skill anatomy, directing users to the upstream repository implementation on GitHub. Without it, external users would lack a web-indexed showcase and CLI installation entry point for the meta-skill without directly cloning or exploring the git repository source tree.

## Phase — required
`addy:Meta phase` (rendered as `Meta` in breadcrumb at `../addy-external/using-agent-skills.md:5` and as `Meta phase` in the phase chip and sidebar at `../addy-external/using-agent-skills.md:5, 12`). Note: In the repository's internal files (`skills/using-agent-skills/SKILL.md:168`), skills are organized across six lifecycle phases (`Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship`), and the meta-skill is cross-phase (`CLAUDE.md:21-26` and `README.md:353-377` omit it entirely). The external web portal invents a dedicated 7th phase named `Meta phase`.

## Inputs — required
- User or agent browsing intent: "Starting a session or deciding which skill applies." — ../addy-external/using-agent-skills.md:5
- Terminal invocation command arguments for the open skills CLI specifying repo `addyosmani/agent-skills` and flag `--skill using-agent-skills` — ../addy-external/using-agent-skills.md:8
- Upstream GitHub repository source file `skills/using-agent-skills/SKILL.md` — ../addy-external/using-agent-skills.md:10
- Static web assets, Netlify RUM analytics script, Google Fonts, and site routes (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`) — ../addy-external/using-agent-skills.md:1, 5, 15, 19

## Outputs — required
- Terminal installation commands for shell execution: `npx skills add addyosmani/agent-skills --skill using-agent-skills` (single skill) and `npx skills add addyosmani/agent-skills` (all skills) — ../addy-external/using-agent-skills.md:8, 15
- Architectural routing directive: "Route work to the right skill and set shared operating rules." — ../addy-external/using-agent-skills.md:12
- Public web presentation of skill metadata, summary, taxonomy tags (`#routing`, `#workflow`), and anatomy breakdown — ../addy-external/using-agent-skills.md:5, 10
- External hyperlinks to upstream GitHub source (`skills/using-agent-skills/SKILL.md`), lifecycle guide (`/lifecycle/`), and getting started docs (`/docs/getting-started/`) — ../addy-external/using-agent-skills.md:10, 12, 15
- `none` for disk files (pure web documentation reference)

## Invokes — required
- file skills/using-agent-skills/SKILL.md — ../addy-external/using-agent-skills.md:10
- tool skills CLI (vercel-labs/skills) — ../addy-external/using-agent-skills.md:6
- doc lifecycle — ../addy-external/using-agent-skills.md:5, 12, 15
- doc docs/getting-started — ../addy-external/using-agent-skills.md:5, 15
- doc tutorials — ../addy-external/using-agent-skills.md:5, 15
- doc loops — ../addy-external/using-agent-skills.md:5, 15
- doc teach — ../addy-external/using-agent-skills.md:5, 15
- doc compare — ../addy-external/using-agent-skills.md:5, 15
- doc evals — ../addy-external/using-agent-skills.md:15
- doc CONTRIBUTING.md — ../addy-external/using-agent-skills.md:15

## Invoked by — required
orphan — This static external HTML snapshot (`sources/addy-external/using-agent-skills.md`) is a frozen snapshot of `https://skills.addy.ie/skills/using-agent-skills/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `using-agent-skills` — ../addy-external/using-agent-skills.md:1, 5 — defined here
- `agent-skills` — ../addy-external/using-agent-skills.md:1, 5, 13, 15 — defined here
- `meta-skill` — ../addy-external/using-agent-skills.md:1, 5 — defined here
- `Skills` — ../addy-external/using-agent-skills.md:5 — used here
- `Meta` — ../addy-external/using-agent-skills.md:5 — defined here
- `Meta phase` — ../addy-external/using-agent-skills.md:5, 12 — defined here
- `Use when` — ../addy-external/using-agent-skills.md:5 — defined here
- `#routing` — ../addy-external/using-agent-skills.md:5 — defined here
- `#workflow` — ../addy-external/using-agent-skills.md:5 — defined here
- `Install just this skill` — ../addy-external/using-agent-skills.md:5 — defined here
- `skills CLI` — ../addy-external/using-agent-skills.md:6 — used here
- `This skill only` — ../addy-external/using-agent-skills.md:8 — defined here
- `All skills` — ../addy-external/using-agent-skills.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill using-agent-skills` — ../addy-external/using-agent-skills.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — ../addy-external/using-agent-skills.md:8, 15 — defined here
- `How this skill is structured` — ../addy-external/using-agent-skills.md:8 — defined here
- `anatomy` — ../addy-external/using-agent-skills.md:9, 10 — defined here
- `Overview` — ../addy-external/using-agent-skills.md:10 — defined here
- `When to Use` — ../addy-external/using-agent-skills.md:10 — defined here
- `Process` — ../addy-external/using-agent-skills.md:10 — defined here
- `Rationalizations` — ../addy-external/using-agent-skills.md:10 — defined here
- `Red Flags` — ../addy-external/using-agent-skills.md:10 — defined here
- `Verification` — ../addy-external/using-agent-skills.md:10 — defined here
- `SKILL.md` — ../addy-external/using-agent-skills.md:10, 11 — used here
- `Read the full SKILL.md` — ../addy-external/using-agent-skills.md:11 — used here
- `See the full lifecycle` — ../addy-external/using-agent-skills.md:12 — used here
- `Lifecycle` — ../addy-external/using-agent-skills.md:5, 12, 15 — used here
- `The lifecycle` — ../addy-external/using-agent-skills.md:15 — used here
- `Loops` — ../addy-external/using-agent-skills.md:5, 15 — used here
- `Loop engineering` — ../addy-external/using-agent-skills.md:15 — used here
- `Teach` — ../addy-external/using-agent-skills.md:5, 15 — used here
- `Teach & share` — ../addy-external/using-agent-skills.md:15 — used here
- `Compare` — ../addy-external/using-agent-skills.md:5, 15 — used here
- `How it compares` — ../addy-external/using-agent-skills.md:15 — used here
- `Getting started` — ../addy-external/using-agent-skills.md:5, 15 — used here
- `Claude Code` — ../addy-external/using-agent-skills.md:15 — used here
- `Codex` — ../addy-external/using-agent-skills.md:15 — used here
- `Cursor` — ../addy-external/using-agent-skills.md:15 — used here
- `Antigravity` — ../addy-external/using-agent-skills.md:15 — used here
- `Contributing` — ../addy-external/using-agent-skills.md:15 — used here
- `Evals framework` — ../addy-external/using-agent-skills.md:15 — used here

## Structure
- `using-agent-skills` (H1 — line 5)
- `Install just this skill` (H2 — line 5)
- `How this skill is structured` (H2 — line 8)
- `Meta phase` (H3 — line 12)
- `Product` (H3 — line 15)
- `Setup` (H3 — line 15)
- `Resources` (H3 — line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` / `internal-contradiction` · `../addy-external/using-agent-skills.md:9-10` vs `sources/addy/skills/using-agent-skills/SKILL.md:1-193` and `sources/addy/scripts/lib/skill-lint.js:57-58` · The web page asserts that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" and presents 6 standard sections (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), but the actual `skills/using-agent-skills/SKILL.md` possesses an entirely different anatomy (`Overview`, `Skill Discovery`, `Core Operating Behaviors`, `Failure Modes to Avoid`, `Skill Rules`, `Lifecycle Sequence`, `Quick Reference`) which is explicitly exempt from section checks in the repository linter.
- `doc-drift` · `../addy-external/using-agent-skills.md:10` vs `sources/addy/docs/skill-anatomy.md:37-73` · The web page defines a 6-part anatomy with `03 Process` as a distinct top-level numbered section, whereas canonical repository documentation in `docs/skill-anatomy.md` defines a 5-part structure (`Overview`, `When to Use`, `Common Rationalizations`, `Red Flags`, `Verification`), treating workflow steps as body content under varied headings rather than a fixed section titled "Process".
- `doc-drift` · `../addy-external/using-agent-skills.md:5, 12` vs `sources/addy/CLAUDE.md:21-26` and `sources/addy/README.md:353-377` · The web page establishes and assigns `using-agent-skills` to a dedicated `Meta phase` (also labeled `Meta`), whereas the repository lifecycle tables in `CLAUDE.md` and `README.md` enumerate only six phases (`Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship`) and omit `using-agent-skills` from the phase taxonomy entirely.
- `doc-drift` · `../addy-external/using-agent-skills.md:6, 8` vs `sources/addy/docs/getting-started.md:12` and `sources/addy/README.md:46` · The web page documents skill installation exclusively via `npx skills add addyosmani/agent-skills` leveraging the external Vercel `skills CLI` (`github.com/vercel-labs/skills`), whereas repository documentation prescribes `npx addy-skills add <name>` or native Claude Code marketplace installation.
- `doc-drift` · `../addy-external/using-agent-skills.md:8` vs `sources/addy/docs/skill-anatomy.md:111-119` · Single-skill installation via `npx skills add addyosmani/agent-skills --skill using-agent-skills` fails to install shared repository references (`../../references/definition-of-done.md`), resulting in broken reference links at runtime.
- `doc-drift` · `../addy-external/using-agent-skills.md:15` vs `sources/addy/docs/` · The web page footer maps all four agent platform links (`Claude Code`, `Codex`, `Cursor`, `Antigravity`) to the identical URL `/docs/getting-started/`, collapsing the distinct setup files that exist in the repository (`docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).
- `orphan` · `../addy-external/using-agent-skills.md:1` · This static external HTML snapshot is not referenced, imported, or invoked by any repository file or command.

## Observations
- Web Catalog Facade Pattern: The external documentation page does not publish or render the contents of `SKILL.md` (omitting all 193 lines of routing tables, assumption disclosure formatting, pushback directives, and lifecycle sequencing). Instead, it serves as a lightweight landing page with installation commands and a link to GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/using-agent-skills/SKILL.md`).
- Hardcoded Anatomy Uniformity: The text "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" and the 6 anatomy rows are statically generated by the Astro site layout (`src/layouts` or components), displaying uniform anatomy even for meta-skills that intentionally deviate.
- Upstream Toolchain Integration: Emphasizes `vercel-labs/skills` as the universal CLI runner, showing alignment with Vercel's agent skills standard for multi-agent interoperability.
- Embedded Telemetry: The deployed snapshot includes Netlify Real User Monitoring (`/.netlify/scripts/rum`) with production site ID `35855e33-2721-4c12-bae9-edb8b9d2c20e`.

## Context cost
File size: 21,955 bytes (~5,489 tokens). If following the link to `skills/using-agent-skills/SKILL.md` (10,426 bytes, ~2,607 tokens), total context is 32,381 bytes (~8,096 tokens). High token overhead relative to substantive content due to Astro HTML and CSS boilerplate.
