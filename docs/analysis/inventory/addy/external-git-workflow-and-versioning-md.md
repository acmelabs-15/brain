---
package: addy
path: external/git-workflow-and-versioning.md
type: external-doc
bytes: 26317
lines: 20
unit: inv-addy-17
sha256: 5e099b35e9a7d6f03cb7e5ae8dc55d6447814db5a230ca375a2283bf36eb0155
aliases: []
memo_inputs:
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/git-workflow-and-versioning.md

## Purpose — required, verbatim
> "Structures git workflow practices. Trunk-based development, atomic commits, change sizing (~100 lines), and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:1, 5

Triggering condition:
> "Making any code change (always)." — external/git-workflow-and-versioning.md:5

Sidebar summary:
> "Deploy with confidence - rollout, rollback, observe." — external/git-workflow-and-versioning.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — external/git-workflow-and-versioning.md:13-14

## Design intent — required
The external documentation page at `https://skills.addy.ie/skills/git-workflow-and-versioning/` (captured in `sources/addy-external/git-workflow-and-versioning.md`) serves as the public web catalog entry, discoverability hub, and distribution landing page for Addy Osmani's `git-workflow-and-versioning` skill within the `agent-skills` ecosystem. Built with Astro and deployed on Netlify, its design intent is to introduce developers and AI coding agents to disciplined version control practices (trunk-based development, atomic commits, ~100-line change sizing, commit-as-save-point pattern, worktree parallelism, and semantic versioning) as essential guardrails when autonomous agents generate code rapidly. The page provides immediate package installation commands via Vercel Labs' `skills` CLI (`npx skills add ...`), frames the skill within the broader `addy:Ship` lifecycle stage alongside sibling release skills (`ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`), presents a standardized 6-section skill anatomy, and links directly to the canonical repository specification (`skills/git-workflow-and-versioning/SKILL.md`). Without this page, developers and agent creators discovering the repository via the web catalog would lack an accessible overview of git workflow discipline, its universal application to every code change, installation entry points, and its conceptual integration into production shipping workflows.

## Phase — required
addy:Ship

(Rendered as `Ship` in breadcrumb at `external/git-workflow-and-versioning.md:5`, and as `Ship phase` in the phase chip and sidebar at `external/git-workflow-and-versioning.md:5, 12`. Aligns with `CLAUDE.md:26`, `README.md:371`, and `skills/using-agent-skills/SKILL.md:187`. However, notice that while the package classifies this skill under the `Ship` phase, the page itself explicitly specifies triggering as "Making any code change (always)." at `external/git-workflow-and-versioning.md:5`, reflecting that git commit and save-point hygiene operates cross-cuttingly throughout implementation, and `AGENTS.md:45` omits it from its implicit SHIP command mapping).

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/git-workflow-and-versioning/` — external/git-workflow-and-versioning.md:1
- User intent / triggering condition: "Making any code change (always)." — external/git-workflow-and-versioning.md:5
- Upstream skill specification at `https://github.com/addyosmani/agent-skills/blob/main/skills/git-workflow-and-versioning/SKILL.md` consumed at build time — external/git-workflow-and-versioning.md:10
- Sibling skills in Ship phase: `ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs` — external/git-workflow-and-versioning.md:12
- Local stylesheet asset `/_astro/compare.BYu2_sXs.css` — external/git-workflow-and-versioning.md:1
- Local stylesheet asset `/_astro/_slug_.sGV3LZnA.css` — external/git-workflow-and-versioning.md:5
- Google Fonts: Geist and Geist Mono via `https://fonts.googleapis.com` and `https://fonts.gstatic.com` — external/git-workflow-and-versioning.md:1
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — external/git-workflow-and-versioning.md:6
- Netlify Real User Monitoring (RUM) telemetry container script: `/.netlify/scripts/rum` — external/git-workflow-and-versioning.md:19
- User browser interactions: clipboard button clicks for `skills add` CLI commands, mobile navigation toggles, outbound links to GitHub and documentation pages — external/git-workflow-and-versioning.md:5, 8, 10, 15

## Outputs — required
- Public web page presentation of skill metadata, summary description, taxonomy tags (`#git`, `#workflow`), and install commands — external/git-workflow-and-versioning.md:1, 5
- Installation shell commands for clipboard execution: `npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning` and `npx skills add addyosmani/agent-skills` — external/git-workflow-and-versioning.md:8
- Canonical skill anatomy specification (6-step structure: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — external/git-workflow-and-versioning.md:10
- Lifecycle navigation routing and discovery links to related Ship-phase skills (`ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`) and lifecycle documentation — external/git-workflow-and-versioning.md:12
- Client-side Netlify RUM telemetry beacon tracking (`data-netlify-rum-site-id="35855e33-2721-4c12-bae9-edb8b9d2c20e"`) — external/git-workflow-and-versioning.md:19
- `none` for disk files (pure static web documentation artifact)

## Invokes — required
- command /ship — external/git-workflow-and-versioning.md:12
- skill ci-cd-and-automation — external/git-workflow-and-versioning.md:12
- skill deprecation-and-migration — external/git-workflow-and-versioning.md:12
- skill documentation-and-adrs — external/git-workflow-and-versioning.md:12
- file skills/git-workflow-and-versioning/SKILL.md — external/git-workflow-and-versioning.md:10
- doc CONTRIBUTING.md — external/git-workflow-and-versioning.md:15
- doc evals — external/git-workflow-and-versioning.md:15
- doc lifecycle — external/git-workflow-and-versioning.md:5
- doc tutorials — external/git-workflow-and-versioning.md:5
- doc loops — external/git-workflow-and-versioning.md:5
- doc teach — external/git-workflow-and-versioning.md:5
- doc compare — external/git-workflow-and-versioning.md:5
- script /.netlify/scripts/rum — external/git-workflow-and-versioning.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/git-workflow-and-versioning.md`) is a frozen snapshot of `https://skills.addy.ie/skills/git-workflow-and-versioning/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `git-workflow-and-versioning` — external/git-workflow-and-versioning.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/git-workflow-and-versioning.md:1, 5, 8, 10, 15 — used here
- `Trunk-based development` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `atomic commits` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `change sizing` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `commit-as-save-point pattern` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `branching` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `conflicts` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `releases` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `semantic versioning` — external/git-workflow-and-versioning.md:1, 5 — defined here
- `Skills` — external/git-workflow-and-versioning.md:5 — used here
- `Ship` — external/git-workflow-and-versioning.md:5, 12 — defined here
- `Ship phase` — external/git-workflow-and-versioning.md:5, 12 — defined here
- `Use when` — external/git-workflow-and-versioning.md:5 — defined here
- `Making any code change (always).` — external/git-workflow-and-versioning.md:5 — defined here
- `#git` — external/git-workflow-and-versioning.md:5 — defined here
- `#workflow` — external/git-workflow-and-versioning.md:5 — defined here
- `skills CLI` — external/git-workflow-and-versioning.md:6 — used here
- `This skill only` — external/git-workflow-and-versioning.md:8 — defined here
- `All skills` — external/git-workflow-and-versioning.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning` — external/git-workflow-and-versioning.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — external/git-workflow-and-versioning.md:8, 15 — defined here
- `How this skill is structured` — external/git-workflow-and-versioning.md:8 — defined here
- `anatomy` — external/git-workflow-and-versioning.md:9, 10 — defined here
- `Overview` — external/git-workflow-and-versioning.md:10 — defined here
- `When to Use` — external/git-workflow-and-versioning.md:10 — defined here
- `Process` — external/git-workflow-and-versioning.md:10 — defined here
- `Rationalizations` — external/git-workflow-and-versioning.md:10 — defined here
- `Red Flags` — external/git-workflow-and-versioning.md:10 — defined here
- `Verification` — external/git-workflow-and-versioning.md:10 — defined here
- `SKILL.md` — external/git-workflow-and-versioning.md:10, 11 — used here
- `Read the full SKILL.md` — external/git-workflow-and-versioning.md:11 — used here
- `Command` — external/git-workflow-and-versioning.md:12 — defined here
- `/ship` — external/git-workflow-and-versioning.md:12 — used here
- `See the full lifecycle` — external/git-workflow-and-versioning.md:12 — used here
- `More in the Ship phase` — external/git-workflow-and-versioning.md:12 — defined here
- `ci-cd-and-automation` — external/git-workflow-and-versioning.md:12 — used here
- `Shift Left` — external/git-workflow-and-versioning.md:12 — used here
- `Faster is Safer` — external/git-workflow-and-versioning.md:12 — used here
- `feature flags` — external/git-workflow-and-versioning.md:12 — used here
- `quality-gate pipelines` — external/git-workflow-and-versioning.md:12 — used here
- `deprecation-and-migration` — external/git-workflow-and-versioning.md:12 — used here
- `Code-as-liability mindset` — external/git-workflow-and-versioning.md:12 — used here
- `compulsory vs advisory deprecation` — external/git-workflow-and-versioning.md:12 — used here
- `zombie-code removal` — external/git-workflow-and-versioning.md:12 — used here
- `documentation-and-adrs` — external/git-workflow-and-versioning.md:12 — used here
- `Architecture Decision Records` — external/git-workflow-and-versioning.md:12 — used here
- `API docs` — external/git-workflow-and-versioning.md:12 — used here
- `inline standards` — external/git-workflow-and-versioning.md:12 — used here
- `document the why` — external/git-workflow-and-versioning.md:12 — used here
- `Production-grade engineering skills for AI coding agents` — external/git-workflow-and-versioning.md:13 — used here
- `full lifecycle` — external/git-workflow-and-versioning.md:12, 14 — used here
- `Skills catalog` — external/git-workflow-and-versioning.md:15 — used here
- `Tutorials` — external/git-workflow-and-versioning.md:5, 15 — used here
- `The lifecycle` — external/git-workflow-and-versioning.md:15 — used here
- `Loop engineering` — external/git-workflow-and-versioning.md:15 — used here
- `Teach` — external/git-workflow-and-versioning.md:5, 15 — used here
- `Teach &amp; share` — external/git-workflow-and-versioning.md:15 — used here
- `How it compares` — external/git-workflow-and-versioning.md:15 — used here
- `Getting started` — external/git-workflow-and-versioning.md:15 — used here
- `Claude Code` — external/git-workflow-and-versioning.md:15 — used here
- `Codex` — external/git-workflow-and-versioning.md:15 — used here
- `Cursor` — external/git-workflow-and-versioning.md:15 — used here
- `Antigravity` — external/git-workflow-and-versioning.md:15 — used here
- `Contributing` — external/git-workflow-and-versioning.md:15 — used here
- `Evals framework` — external/git-workflow-and-versioning.md:15 — used here
- `addyosmani.com` — external/git-workflow-and-versioning.md:15 — used here

## Structure
- `git-workflow-and-versioning` (H1 — line 5)
- `Install just this skill` (H2 — line 5)
- `How this skill is structured` (H2 — line 8)
- `Ship phase` (H3 — line 12)
- `More in the Ship phase` (H2 — line 12)
  - `ci-cd-and-automation` (H3 — line 12)
  - `deprecation-and-migration` (H3 — line 12)
  - `documentation-and-adrs` (H3 — line 12)
- `Product` (H3 — line 15)
- `Setup` (H3 — line 15)
- `Resources` (H3 — line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/git-workflow-and-versioning.md:12 vs sources/addy/commands/ship.toml:4, 6 · External documentation page pairs git-workflow-and-versioning with Command /ship in the sidebar badge, but /ship specifically invokes shipping-and-launch ("Invoke the shipping-and-launch skill.") to run a parallel pre-launch review fan-out and go/no-go synthesis, never executing or referencing git-workflow-and-versioning.
- doc-drift · external/git-workflow-and-versioning.md:10 vs sources/addy/skills/git-workflow-and-versioning/SKILL.md:16-312 · The external page asserts a uniform 6-section skill anatomy ("01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification"), but SKILL.md contains no section named Process (providing instead 9 detailed workflow and pattern sections: Core Principles, Branching Strategy, Working with Worktrees, The Save Point Pattern, Change Summaries, Pre-Commit Hygiene, Handling Generated Files, Using Git for Debugging, and Release & Versioning) and names its rationalizations section "Common Rationalizations" (line 313) rather than Rationalizations.
- doc-drift · external/git-workflow-and-versioning.md:5 vs sources/addy/skills/git-workflow-and-versioning/SKILL.md:3, 12-14 · The external landing page condenses "Use when" to a single phrase ("Making any code change (always)."), omitting the granular triggering scenarios documented in SKILL.md:3, 12-14 (committing, branching, resolving conflicts, opening or reviewing a pull request, pushing to a remote, organizing work across parallel streams, cutting a release, choosing a semantic version bump, tagging, or writing a changelog).
- cross-file-contradiction · external/git-workflow-and-versioning.md:5, 12 vs sources/addy/AGENTS.md:45 · The external page categorizes git-workflow-and-versioning under the Ship phase, but AGENTS.md:45 (Lifecycle Mapping / Implicit Commands) maps SHIP exclusively to shipping-and-launch, completely omitting git-workflow-and-versioning from its lifecycle progression table.
- internal-contradiction · external/git-workflow-and-versioning.md:9-11 · Line 9 asserts that skill anatomy is "a workflow the agent follows, not a doc it reads", but line 11 immediately provides a primary call-to-action button stating "Read the full SKILL.md".
- orphan · external/git-workflow-and-versioning.md:1 · No in-scope repository file in sources/addy invokes, links to, or references this external documentation URL (https://skills.addy.ie/skills/git-workflow-and-versioning/) or its local snapshot file.
- other · external/git-workflow-and-versioning.md:1-20 · Extreme packaging overhead: 26,317 bytes of static compiled Astro HTML markup, CSS styling, navigation headers, and Netlify telemetry scripts, containing only ~1,200 bytes (~4.6%) of skill-specific workflow content and metadata.

## Observations
- **Universal Cross-Cutting Nature vs Phase Categorization**: Although categorized under the `Ship` phase in `CLAUDE.md:26` and `README.md:371`, `git-workflow-and-versioning` operates across all development phases — as stated on line 5: "Making any code change (always)." Git save points, branch isolation, and small atomic commits are foundational practices throughout Plan, Build, and Verify, not merely at final deployment/shipping.
- **Save Point Pattern for AI Agents**: The underlying skill introduces a critical operational concept for agentic coding: treating commits as reversible checkpoints (`commit-as-save-point pattern`). When coding agents generate complex or speculative changes, committing working increments enables instant rollback without losing previous progress.
- **Change Sizing Guideline**: Emphasizes small change batches (~100 lines) to facilitate human code review and reduce merge conflicts.
- **Git Worktrees for Multi-Agent Parallelism**: The underlying skill provides instructions for utilizing `git worktree` so concurrent agents can work independently in separate directories without colliding in the primary working tree.
- **Vercel Skills CLI Distribution**: Serves as the distribution entry point for individual skill installation (`npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning`) and complete bundle adoption (`npx skills add addyosmani/agent-skills`).
- **Multi-Agent Setup Links**: Provides direct links to setup instructions for Claude Code, Codex, Cursor, and Antigravity.

## Context cost
- File size: 26,317 bytes (~6,579 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime.
