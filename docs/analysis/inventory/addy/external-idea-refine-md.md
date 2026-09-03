---
package: addy
path: ../addy-external/idea-refine.md
type: external-doc
bytes: 24943
unit: inv-addy-21
---

# ../addy-external/idea-refine.md

## Purpose — required, verbatim
> "Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one." — sources/addy-external/idea-refine.md:1, 5

## Design intent — required
Public catalog web landing page for `idea-refine` hosted on Addy Osmani's agent skills website (`skills.addy.ie/skills/idea-refine/`). It provides external discoverability, marketing, and developer onboarding for the skill, summarizing its core ideation workflow (divergent and convergent thinking to stress-test assumptions before engineering commitment). It facilitates standalone skill adoption via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill idea-refine`) without requiring a full repository clone. It establishes lifecycle positioning within the `addy:Define` phase alongside `/spec` and related skills (`interview-me`, `spec-driven-development`), and links directly to the authoritative repository source on GitHub.

## Phase — required
addy:Define

## Inputs — required
- HTTP GET request for canonical URL `https://skills.addy.ie/skills/idea-refine/` — sources/addy-external/idea-refine.md:1
- User trigger condition / problem input: "You have a rough idea that needs exploration and stress-testing." — sources/addy-external/idea-refine.md:5
- Skill repository package: `addyosmani/agent-skills` via Vercel's `skills` CLI (`npx skills add addyosmani/agent-skills --skill idea-refine`) — sources/addy-external/idea-refine.md:8
- Web runtime assets: Astro static site bundle, Netlify RUM analytics token/script (`/.netlify/scripts/rum`), Google Fonts (`Geist`, `Geist Mono`), favicon `/favicon.svg`, Open Graph image `/og.png`, sitemap `/sitemap-index.xml` — sources/addy-external/idea-refine.md:1, 19
- User interactions: clipboard copy button clicks on CLI installation commands, mobile navigation toggle clicks, navigation links to related skills and docs — sources/addy-external/idea-refine.md:5, 8, 12, 15

## Outputs — required
- Rendered HTML documentation interface presenting skill metadata, triggering conditions ("You have a rough idea that needs exploration and stress-testing"), tags (`#ideation`, `#discovery`), installation commands, 6-part anatomy description, and related Define phase skills — sources/addy-external/idea-refine.md:1-20
- CLI installation command strings copied to clipboard via `navigator.clipboard.writeText` (`npx skills add addyosmani/agent-skills --skill idea-refine` and `npx skills add addyosmani/agent-skills`) — sources/addy-external/idea-refine.md:8, 15
- Hyperlinks to canonical `SKILL.md` on GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md`), repository root (`https://github.com/addyosmani/agent-skills`), contributing guide, evals framework, and documentation sub-pages — sources/addy-external/idea-refine.md:5, 11, 12, 15
- Catalog navigation and deep links to `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — sources/addy-external/idea-refine.md:5, 12, 15
- Setup guide links for Claude Code, Codex, Cursor, and Antigravity at `/docs/getting-started/` — sources/addy-external/idea-refine.md:15
- Netlify Real User Monitoring (RUM) telemetry beacon (`/.netlify/scripts/rum`) — sources/addy-external/idea-refine.md:19
- Files produced: none (static web documentation page)

## Invokes — required
- skill skills/idea-refine/SKILL.md — https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md — sources/addy-external/idea-refine.md:11
- skill skills/interview-me/SKILL.md — /skills/interview-me/ — sources/addy-external/idea-refine.md:12
- skill skills/spec-driven-development/SKILL.md — /skills/spec-driven-development/ — sources/addy-external/idea-refine.md:12
- command /spec — sources/addy-external/idea-refine.md:12
- command npx skills add addyosmani/agent-skills --skill idea-refine — sources/addy-external/idea-refine.md:8
- command npx skills add addyosmani/agent-skills — sources/addy-external/idea-refine.md:8, 15
- doc README.md — https://github.com/addyosmani/agent-skills — sources/addy-external/idea-refine.md:5
- doc CONTRIBUTING.md — https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md — sources/addy-external/idea-refine.md:15
- doc evals/README.md — https://github.com/addyosmani/agent-skills/tree/main/evals — sources/addy-external/idea-refine.md:15
- external tool skills-cli — https://github.com/vercel-labs/skills — sources/addy-external/idea-refine.md:6
- script /.netlify/scripts/rum — sources/addy-external/idea-refine.md:19

## Invoked by — required
- inventory-entry docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md — docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md:49
- manifest docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:193
- web origin https://skills.addy.ie/skills/idea-refine/ — sources/addy-external/idea-refine.md:1

## Concepts named — required, verbatim
- `idea-refine` — sources/addy-external/idea-refine.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/idea-refine.md:1, 5, 8, 12, 15 — defined here
- `divergent and convergent thinking` — sources/addy-external/idea-refine.md:1, 5 — used here
- `Define phase` — sources/addy-external/idea-refine.md:5, 12 — used here
- `Define` — sources/addy-external/idea-refine.md:5, 12 — used here
- `Use when` — sources/addy-external/idea-refine.md:5 — defined here
- `ideation` — sources/addy-external/idea-refine.md:5 — used here
- `discovery` — sources/addy-external/idea-refine.md:5 — used here
- `Install just this skill` — sources/addy-external/idea-refine.md:5 — defined here
- `skills CLI` — sources/addy-external/idea-refine.md:6 — used here
- `This skill only` — sources/addy-external/idea-refine.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill idea-refine` — sources/addy-external/idea-refine.md:8 — defined here
- `All skills` — sources/addy-external/idea-refine.md:8 — used here
- `npx skills add addyosmani/agent-skills` — sources/addy-external/idea-refine.md:8, 15 — used here
- `How this skill is structured` — sources/addy-external/idea-refine.md:8 — defined here
- `anatomy` — sources/addy-external/idea-refine.md:9, 10 — defined here
- `Overview` — sources/addy-external/idea-refine.md:10 — defined here
- `When to Use` — sources/addy-external/idea-refine.md:10 — defined here
- `Process` — sources/addy-external/idea-refine.md:10 — defined here
- `Rationalizations` — sources/addy-external/idea-refine.md:10 — defined here
- `Red Flags` — sources/addy-external/idea-refine.md:10 — defined here
- `Verification` — sources/addy-external/idea-refine.md:10 — defined here
- `SKILL.md` — sources/addy-external/idea-refine.md:11 — used here
- `Command` — sources/addy-external/idea-refine.md:12 — used here
- `/spec` — sources/addy-external/idea-refine.md:12 — used here
- `More in the Define phase` — sources/addy-external/idea-refine.md:12 — used here
- `interview-me` — sources/addy-external/idea-refine.md:12 — used here
- `spec-driven-development` — sources/addy-external/idea-refine.md:12 — used here
- `PRD` — sources/addy-external/idea-refine.md:12 — used here
- `Production-grade engineering skills` — sources/addy-external/idea-refine.md:13 — used here
- `AI coding agents` — sources/addy-external/idea-refine.md:13 — used here
- `senior-engineer workflows` — sources/addy-external/idea-refine.md:13-14 — used here
- `full lifecycle` — sources/addy-external/idea-refine.md:14 — used here
- `Skills catalog` — sources/addy-external/idea-refine.md:15 — used here
- `The lifecycle` — sources/addy-external/idea-refine.md:5, 12, 15 — used here
- `Loop engineering` — sources/addy-external/idea-refine.md:5, 15 — used here
- `Teach & share` — sources/addy-external/idea-refine.md:5, 15 — used here
- `How it compares` — sources/addy-external/idea-refine.md:5, 15 — used here
- `Getting started` — sources/addy-external/idea-refine.md:5, 15 — used here
- `Claude Code` — sources/addy-external/idea-refine.md:15 — used here
- `Codex` — sources/addy-external/idea-refine.md:15 — used here
- `Cursor` — sources/addy-external/idea-refine.md:15 — used here
- `Antigravity` — sources/addy-external/idea-refine.md:15 — used here
- `Evals framework` — sources/addy-external/idea-refine.md:15 — used here

## Structure
- idea-refine (line 5)
- Install just this skill (line 5)
- How this skill is structured (line 8)
- Define phase (line 12)
- More in the Define phase (line 12)
  - interview-me (line 12)
  - spec-driven-development (line 12)
- Product (line 15)
- Setup (line 15)
- Resources (line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · sources/addy-external/idea-refine.md:9-10 vs sources/addy/skills/idea-refine/SKILL.md:1-179 · The external documentation page asserts that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification", but `skills/idea-refine/SKILL.md` does not implement this 6-part anatomy, instead using legacy section headings (`## How It Works`, `## Usage`, `## Output`, `### Philosophy`, `### Anti-patterns to Avoid`, `### Tone`), omitting `## When to Use` and `## Common Rationalizations`, and requiring an explicit exemption in `scripts/lib/skill-lint.js:59` and `scripts/validate-skills.js`.
- doc-drift · sources/addy-external/idea-refine.md:12 vs sources/addy/.claude/commands/spec.md:20 and sources/addy/commands/spec.toml:25 · The external page sidebar displays `Command: /spec` for the `Define phase` card accompanying `idea-refine`. However, in the repository, `/spec` invokes `spec-driven-development` exclusively; `idea-refine` has no corresponding slash command or TOML command configuration.
- doc-drift · sources/addy-external/idea-refine.md:1, 5 vs sources/addy/skills/idea-refine/SKILL.md:8 · The external summary ("Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one.") omits the qualifying phrase "worth building" found in `SKILL.md:8` ("Refines raw ideas into sharp, actionable concepts worth building through structured divergent and convergent thinking") while appending a second sentence not present in the source `SKILL.md`.
- doc-drift · sources/addy-external/idea-refine.md:5 vs sources/addy/skills/idea-refine/SKILL.md:3, 25-28 · The external page reduces triggering conditions to "You have a rough idea that needs exploration and stress-testing" and introduces tags `#ideation` and `#discovery`, omitting the explicit trigger phrases (`"Help me refine this idea"`, `"Ideate on [concept]"`, `"Stress-test my plan"`) defined in `SKILL.md`.
- internal-contradiction · sources/addy-external/idea-refine.md:9-11 · The external page claims skills follow an anatomy that is "a workflow the agent follows, not a doc it reads" (line 9), but immediately provides a primary call-to-action button labeled "Read the full SKILL.md" (line 11).
- other · sources/addy-external/idea-refine.md:1-20 · Static HTML snapshot contains 24,943 bytes of compiled Astro markup, embedded CSS styling, and analytics tracking code, with less than 2,000 bytes (~8%) representing actual instructional skill content.

## Observations
- External documentation provides an alternative distribution vector via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill idea-refine`), which downloads individual skills directly from GitHub without requiring a full repository clone or Claude Code plugin installation.
- The web showcase organizes skills by lifecycle phase using a unified color palette (Define phase = blue HSL 205, Verify phase = orange/amber HSL 40), reinforcing phase grouping and discovery of related skills (`interview-me`, `spec-driven-development`).
- Promotes multi-harness compatibility in the footer, providing setup links for Claude Code, Codex, Cursor, and Antigravity.
- Includes client-side observability tooling (`Netlify RUM` analytics script with CWV tracking and intersection observer scroll reveal), standard for Astro static site generation.

## Context cost
24,943 bytes (~6,236 tokens). Static web documentation snapshot; 0 static context cost in agent system prompts during skill execution.
