---
package: addy
path: external/doubt-driven-development.md
type: external-doc
bytes: 26502
unit: inv-addy-20
deprecated: false
aliases: []
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/doubt-driven-development.md

## Purpose — required, verbatim
> "Subjects every non-trivial decision to a fresh-context adversarial review before it stands: CLAIM → EXTRACT → DOUBT → RECONCILE → STOP, with optional user-authorized cross-model escalation." — external/doubt-driven-development.md:5

## Design intent — required
This file is the public web documentation catalog page for Addy's `doubt-driven-development` skill hosted at `https://skills.addy.ie/skills/doubt-driven-development/`. It provides web visitors and agents with a summary of the skill, triggering conditions, its placement in the Build phase alongside the `/build` command, CLI installation commands via `npx skills add`, links to related skills in the same phase (`incremental-implementation`, `test-driven-development`, `context-engineering`), an overview of the 6-part skill anatomy, and a direct link to the canonical `SKILL.md` in the GitHub repository. Without this page, the external website catalog would lack an entry point for `doubt-driven-development`, preventing discoverability, quick CLI installation, and visibility into its position in the build lifecycle.

## Phase — required
addy:Build
> "Build phase" — external/doubt-driven-development.md:5

## Inputs — required
Static web page inputs:
- HTTP GET requests to `https://skills.addy.ie/skills/doubt-driven-development/`
- Build-time content extracted from `skills/doubt-driven-development/SKILL.md` and Astro page templates.
No CLI parameters or runtime arguments are consumed by this static HTML document.

## Outputs — required
Static web presentation:
- Rendered HTML documentation page presenting skill overview, triggering criteria, CLI installation snippets (`npx skills add addyosmani/agent-skills --skill doubt-driven-development`), standard anatomy outline, and navigation links to related skills and the GitHub repository source file (`https://github.com/addyosmani/agent-skills/blob/main/skills/doubt-driven-development/SKILL.md`).
Produces no repository artifacts, files, or commits directly.

## Invokes — required
- command /build — external/doubt-driven-development.md:12
- skill incremental-implementation — external/doubt-driven-development.md:12
- skill test-driven-development — external/doubt-driven-development.md:12
- skill context-engineering — external/doubt-driven-development.md:12
- doc skills/doubt-driven-development/SKILL.md — external/doubt-driven-development.md:10

## Invoked by — required
orphan (external documentation page published at `https://skills.addy.ie/skills/doubt-driven-development/`; not invoked or referenced by any file within `sources/addy/`)

## Concepts named — required, verbatim
- `doubt-driven-development` — external/doubt-driven-development.md:1 — defined here
- `CLAIM` — external/doubt-driven-development.md:1 — defined here
- `EXTRACT` — external/doubt-driven-development.md:1 — defined here
- `DOUBT` — external/doubt-driven-development.md:1 — defined here
- `RECONCILE` — external/doubt-driven-development.md:1 — defined here
- `STOP` — external/doubt-driven-development.md:1 — defined here
- `cross-model escalation` — external/doubt-driven-development.md:1 — defined here
- `Build phase` — external/doubt-driven-development.md:5 — used here
- `verification` — external/doubt-driven-development.md:5 — used here
- `quality` — external/doubt-driven-development.md:5 — used here
- `agents` — external/doubt-driven-development.md:5 — used here
- `skills CLI` — external/doubt-driven-development.md:6 — used here
- `Overview` — external/doubt-driven-development.md:10 — used here
- `When to Use` — external/doubt-driven-development.md:10 — used here
- `Process` — external/doubt-driven-development.md:10 — used here
- `Rationalizations` — external/doubt-driven-development.md:10 — used here
- `Red Flags` — external/doubt-driven-development.md:10 — used here
- `Verification` — external/doubt-driven-development.md:10 — used here
- `/build` — external/doubt-driven-development.md:12 — used here
- `incremental-implementation` — external/doubt-driven-development.md:12 — used here
- `vertical slices` — external/doubt-driven-development.md:12 — used here
- `/test` — external/doubt-driven-development.md:12 — used here
- `test-driven-development` — external/doubt-driven-development.md:12 — used here
- `Red-Green-Refactor` — external/doubt-driven-development.md:12 — used here
- `test pyramid` — external/doubt-driven-development.md:12 — used here
- `DAMP over DRY` — external/doubt-driven-development.md:12 — used here
- `Beyoncé Rule` — external/doubt-driven-development.md:12 — used here
- `context-engineering` — external/doubt-driven-development.md:12 — used here
- `rules files` — external/doubt-driven-development.md:12 — used here
- `context packing` — external/doubt-driven-development.md:12 — used here
- `MCP` — external/doubt-driven-development.md:12 — used here
- `Claude Code` — external/doubt-driven-development.md:15 — used here
- `Codex` — external/doubt-driven-development.md:15 — used here
- `Cursor` — external/doubt-driven-development.md:15 — used here
- `Antigravity` — external/doubt-driven-development.md:15 — used here
- `Evals framework` — external/doubt-driven-development.md:15 — used here

## Structure
- "doubt-driven-development" — external/doubt-driven-development.md:5
- "Install just this skill" — external/doubt-driven-development.md:5
- "How this skill is structured" — external/doubt-driven-development.md:8
- "Build phase" — external/doubt-driven-development.md:12
- "More in the Build phase" — external/doubt-driven-development.md:12
- "Product" — external/doubt-driven-development.md:15
- "Setup" — external/doubt-driven-development.md:15
- "Resources" — external/doubt-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/doubt-driven-development.md:5 — The webpage summary appends the 5-step loop and cross-model escalation ("Subjects every non-trivial decision to a fresh-context adversarial review before it stands: CLAIM → EXTRACT → DOUBT → RECONCILE → STOP, with optional user-authorized cross-model escalation." — external/doubt-driven-development.md:5), whereas the repository skill description ("Subjects every non-trivial decision to a fresh-context adversarial review before it stands. Use when correctness matters more than speed, when working in unfamiliar code, when stakes are high (production, security-sensitive logic, irreversible operations), or any time a confident output would be cheaper to verify now than to debug later." — skills/doubt-driven-development/SKILL.md:3) combines a concise summary sentence with broader triggering criteria.
- doc-drift — external/doubt-driven-development.md:5 — The page condenses the skill's triggering criteria in the "Use when" block to "Stakes are high, code is unfamiliar, or verifying now beats debugging later." — external/doubt-driven-development.md:5, omitting the explicit condition "when correctness matters more than speed" — skills/doubt-driven-development/SKILL.md:3 and specific examples ("production, security-sensitive logic, irreversible operations" — skills/doubt-driven-development/SKILL.md:3).
- doc-drift — external/doubt-driven-development.md:10 — The page displays a generic 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/doubt-driven-development.md:9), omitting specialized sections present in the actual skill file such as "## Loading Constraints" — skills/doubt-driven-development/SKILL.md:42, "#### Cross-model escalation" — skills/doubt-driven-development/SKILL.md:112, and "## Interaction with Other Skills" — skills/doubt-driven-development/SKILL.md:223.
- orphan — external/doubt-driven-development.md:1 — External documentation page is an orphan within the repository; no in-scope file in `sources/addy/` links to or invokes this external documentation page.

## Observations
- Generated via Astro static site generator (`data-astro-cid-*` attributes) and hosted at `https://skills.addy.ie/skills/doubt-driven-development/`.
- Includes client-side interactive clipboard copying script for the `skills CLI` installation snippet (`npx skills add addyosmani/agent-skills --skill doubt-driven-development`).
- Embeds Netlify RUM analytics script (`netlify-rum-container`) and links to external Geist / Geist Mono web fonts.
- Features cross-harness navigation in the footer linking to getting started guides for `Claude Code`, `Codex`, `Cursor`, and `Antigravity`.

## Context cost
- File size: 26,502 bytes (~6,625 tokens).
- When loaded alongside linked documentation (`skills/doubt-driven-development/SKILL.md` at 16,499 bytes, `commands/build.toml` at 3,840 bytes, `skills/incremental-implementation/SKILL.md` at 9,507 bytes, `skills/test-driven-development/SKILL.md` at 16,483 bytes, and `skills/context-engineering/SKILL.md` at 11,070 bytes): 83,901 bytes (~20,975 tokens).
