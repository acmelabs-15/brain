# Detailed Analysis: `sources/addy-external/idea-refine.md`

**Unit:** `inv-addy-21`  
**Package:** `addy`  
**Target File:** `sources/addy-external/idea-refine.md`  
**Manifest Path:** `../addy-external/idea-refine.md` (Row 193)  
**File Size:** 24,943 bytes  
**Line Count:** 20 lines (19 newlines)  
**Type:** `external-doc`  
**Web Origin:** `https://skills.addy.ie/skills/idea-refine/`  

---

## 1. Inventory Entry Extraction

The following extraction adheres strictly to `docs/plan/templates/inventory-entry.md` and rules R1–R6:

```markdown
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
Serves as the public web catalog and package distribution page for the `idea-refine` skill within the `agent-skills` ecosystem (hosted at `https://skills.addy.ie/skills/idea-refine/`). It addresses the problem of web discoverability and cross-agent CLI installation by providing copyable `npx skills add` commands via Vercel's open `skills` CLI, categorizing the skill within the `addy:Define` lifecycle stage alongside `/spec`, and outlining the standardized skill anatomy. Without it, developers and agents discovering skills from the web would lack direct CLI installation commands, high-level lifecycle context, and an overview of related discovery skills without reading raw markdown in the GitHub repository.

## Phase — required
addy:Define

## Inputs — required
- User trigger condition / problem input: "You have a rough idea that needs exploration and stress-testing." — sources/addy-external/idea-refine.md:5
- Skill repository package: `addyosmani/agent-skills` via Vercel's `skills` CLI (`npx skills add addyosmani/agent-skills --skill idea-refine`) — sources/addy-external/idea-refine.md:8
- Web runtime assets: Astro static site bundle, Netlify RUM analytics token/script (`/.netlify/scripts/rum`), Google Fonts (`Geist`, `Geist Mono`) — sources/addy-external/idea-refine.md:1, 19

## Outputs — required
- Installation commands: provides CLI commands to install `idea-refine` independently (`npx skills add addyosmani/agent-skills --skill idea-refine`) or the entire skill pack (`npx skills add addyosmani/agent-skills`) — sources/addy-external/idea-refine.md:8
- External navigation & links:
  - Direct link to full skill source on GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md` — sources/addy-external/idea-refine.md:10-12
  - Internal catalog navigation to Define-phase skills: `/skills/interview-me/`, `/skills/spec-driven-development/` — sources/addy-external/idea-refine.md:12
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — sources/addy-external/idea-refine.md:5, 12, 15
- Files produced: none (static web documentation page).

## Invokes — required
- CLI command `npx skills add addyosmani/agent-skills --skill idea-refine` — sources/addy-external/idea-refine.md:8
- CLI command `npx skills add addyosmani/agent-skills` — sources/addy-external/idea-refine.md:8, 15
- slash-command `/spec` (cited as command for Define phase) — sources/addy-external/idea-refine.md:12
- external-source `https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md` — sources/addy-external/idea-refine.md:10-12
- external-tool `https://github.com/vercel-labs/skills` (open skills CLI) — sources/addy-external/idea-refine.md:6
- external-doc `https://skills.addy.ie/skills/interview-me/` (`/skills/interview-me/`) — sources/addy-external/idea-refine.md:12
- external-doc `https://skills.addy.ie/skills/spec-driven-development/` (`/skills/spec-driven-development/`) — sources/addy-external/idea-refine.md:12
- web-resource `https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600;700&display=swap` — sources/addy-external/idea-refine.md:1
- web-script `/.netlify/scripts/rum` (Netlify Real User Monitoring) — sources/addy-external/idea-refine.md:19
- internal-route `/lifecycle/` — sources/addy-external/idea-refine.md:5, 12, 15
- internal-route `/loops/` — sources/addy-external/idea-refine.md:5, 15
- internal-route `/teach/` — sources/addy-external/idea-refine.md:5, 15
- internal-route `/compare/` — sources/addy-external/idea-refine.md:5, 15
- internal-route `/docs/getting-started/` — sources/addy-external/idea-refine.md:5, 15

## Invoked by — required
- manifest row: `docs/analysis/manifest/addy.md:193`
- repo skill inventory entry: `docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md:49`
- web origin: `https://skills.addy.ie/skills/idea-refine/`

## Concepts named — required, verbatim
- `idea-refine` — sources/addy-external/idea-refine.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/idea-refine.md:1, 5, 8, 12, 15 — defined here
- `divergent and convergent thinking` — sources/addy-external/idea-refine.md:1, 5 — used here
- `Define phase` — sources/addy-external/idea-refine.md:5, 12 — used here
- `Define` — sources/addy-external/idea-refine.md:5, 12 — used here
- `ideation` — sources/addy-external/idea-refine.md:5 — used here
- `discovery` — sources/addy-external/idea-refine.md:5 — used here
- `skills CLI` — sources/addy-external/idea-refine.md:6 — used here
- `anatomy` — sources/addy-external/idea-refine.md:9, 10 — defined here
- `Overview` — sources/addy-external/idea-refine.md:10 — defined here
- `When to Use` — sources/addy-external/idea-refine.md:10 — defined here
- `Process` — sources/addy-external/idea-refine.md:10 — defined here
- `Rationalizations` — sources/addy-external/idea-refine.md:10 — defined here
- `Red Flags` — sources/addy-external/idea-refine.md:10 — defined here
- `Verification` — sources/addy-external/idea-refine.md:10 — defined here
- `/spec` — sources/addy-external/idea-refine.md:12 — used here
- `interview-me` — sources/addy-external/idea-refine.md:12 — used here
- `spec-driven-development` — sources/addy-external/idea-refine.md:12 — used here
- `PRD` — sources/addy-external/idea-refine.md:12 — used here
- `Lifecycle` — sources/addy-external/idea-refine.md:5, 12, 15 — used here
- `Loop engineering` — sources/addy-external/idea-refine.md:15 — used here
- `Teach & share` — sources/addy-external/idea-refine.md:15 — used here
- `Claude Code` — sources/addy-external/idea-refine.md:15 — used here
- `Codex` — sources/addy-external/idea-refine.md:15 — used here
- `Cursor` — sources/addy-external/idea-refine.md:15 — used here
- `Antigravity` — sources/addy-external/idea-refine.md:15 — used here
- `Evals framework` — sources/addy-external/idea-refine.md:15 — used here

## Structure
- `<h1 class="detail-name mono">idea-refine</h1>` (line 5)
- `<h2 class="panel-title">Install just this skill</h2>` (line 5)
- `<h2 class="panel-title">How this skill is structured</h2>` (line 8)
- `<h3 class="side-title">Define phase</h3>` (line 12)
- `<h2 class="related-title">More in the Define phase</h2>` (line 12)
  - `<h3 class="sc-name mono">interview-me</h3>` (line 12)
  - `<h3 class="sc-name mono">spec-driven-development</h3>` (line 12)
- `<h3 data-astro-cid-sz7xmlte>Product</h3>` (line 15)
- `<h3 data-astro-cid-sz7xmlte>Setup</h3>` (line 15)
- `<h3 data-astro-cid-sz7xmlte>Resources</h3>` (line 15)

## Scripts — required if type is script or the skill ships scripts
- documented invocation: `npx skills add addyosmani/agent-skills --skill idea-refine` — sources/addy-external/idea-refine.md:8
- executed: yes
- actual command run: `npx --yes skills add addyosmani/agent-skills --skill idea-refine --list`
- abridged stdout: `idea-refine\n  Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Use when an idea is still vague...`
- actual exit code: 0
- documented exit codes: none documented on page
- actual exit paths in code: Vercel skills CLI package execution
- for validators/gates: not a validator/gate
- does the output match what the documentation claims? yes; successfully retrieves and displays the `idea-refine` skill metadata from repository

## Defects — required
- `doc-drift` — sources/addy-external/idea-refine.md:9-10 vs sources/addy/skills/idea-refine/SKILL.md:10-168 — External page asserts that "Every skill follows the same anatomy" (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification), but `idea-refine/SKILL.md` does not follow this schema: it lacks `## Overview`, `## When to Use`, and `## Rationalizations`, instead using legacy sections (`## How It Works`, `## Usage`, `## Output`, `### Philosophy`, `### Anti-patterns to Avoid`, `### Tone`) as formally exempted in `scripts/lib/skill-lint.js:59`.
- `doc-drift` — sources/addy-external/idea-refine.md:12 vs sources/addy/commands/spec.toml:4 — External page sidebar displays `Define phase | Command /spec` directly adjacent to `idea-refine`, falsely implying that `/spec` invokes `idea-refine`; in reality, `/spec` exclusively invokes `spec-driven-development` and `idea-refine` has no slash command in the package.
- `doc-drift` — sources/addy-external/idea-refine.md:5 vs sources/addy/skills/idea-refine/SKILL.md:3, 25-28 — External page reduces trigger conditions to "You have a rough idea that needs exploration and stress-testing" and introduces arbitrary tags `#ideation` and `#discovery`, omitting the explicit trigger phrases (`"Help me refine this idea"`, `"Ideate on [concept]"`, `"Stress-test my plan"`) defined in `SKILL.md`.
- `doc-drift` — sources/addy-external/idea-refine.md:5-12 vs sources/addy/skills/idea-refine/SKILL.md:22, 69, 82, 84, 97, 110-140, 156 — External page omits all actionable operational details of the skill: it does not mention sub-references (`frameworks.md`, `refinement-criteria.md`, `examples.md`), interactive tools (`AskUserQuestion`), initialization script (`idea-refine.sh`), or artifact output requirements (`docs/ideas/[idea-name].md` with "Not Doing" list).
- `other` — sources/addy-external/idea-refine.md:1-20 — File contains 24,943 bytes of raw compiled Astro HTML/CSS/JS with minified scoped styling and tracking scripts, with less than 2,000 bytes (~8%) representing actual instructional content.

## Observations
- Demonstrates how the Addy package exposes skills to web users via Vercel's `skills` CLI registry (`npx skills add addyosmani/agent-skills --skill <name>`).
- Emphasizes the "Define phase" branding and links `idea-refine` directly to `interview-me` and `spec-driven-development` as complementary Define-phase workflows.
- Contains references to supported agents in the footer: Claude Code, Codex, Cursor, Antigravity (line 15).

## Context cost
24,943 bytes (~6,236 tokens). Very high context overhead due to Astro static HTML, embedded CSS rules, SVGs, and telemetry scripts.
```

---

## 2. In-Depth Comparative Analysis: External Doc vs. Repository Source

### 2.1 Structural & Anatomy Divergence (`doc-drift`)
In `sources/addy-external/idea-refine.md:9-10`, the site claims:
> "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads."
> 
> 01 Overview — What this skill does  
> 02 When to Use — Triggering conditions  
> 03 Process — Step-by-step workflow  
> 04 Rationalizations — Excuses + rebuttals  
> 05 Red Flags — Signs something's wrong  
> 06 Verification — Evidence requirements  

However, inspecting the actual skill file at `sources/addy/skills/idea-refine/SKILL.md`:
1. It contains no `## Overview` section (it opens with `# Idea Refine` followed by a one-sentence summary and `## How It Works`).
2. It contains no `## When to Use` heading (triggers are in YAML frontmatter and `## Usage`).
3. It contains no `## Rationalizations` section anywhere in the document.
4. Instead, it features custom headings: `## Output`, `### Philosophy`, `### Anti-patterns to Avoid`, and `### Tone`.
5. This divergence is acknowledged internally in `sources/addy/scripts/lib/skill-lint.js:59`, which hardcodes an exemption:
   `'idea-refine': 'Legacy structure predating skill-anatomy.md — uses How-It-Works/Usage/Anti-patterns instead of standard headings. Tracked for conformance in https://github.com/addyosmani/agent-skills/issues'`
Thus, the external web page claims uniformity that does not exist in the source repository for this skill.

### 2.2 Command Mapping Misattribution (`doc-drift` / `cross-file-contradiction`)
In `sources/addy-external/idea-refine.md:12`, the sidebar presents:
```html
<h3 class="side-title">Define phase</h3>
<p class="side-blurb">Clarify what to build before a line of code is written.</p>
<div class="side-row">
  <span>Command</span>
  <code class="mono">/spec</code>
</div>
```
In the repository, slash commands are defined in `.claude/commands/` and `commands/*.toml`. Inspecting `sources/addy/commands/spec.toml:4` and `.claude/commands/spec.md:4` confirms:
- `/spec` explicitly runs `Invoke the spec-driven-development skill`.
- There is no slash command for `idea-refine` anywhere in `sources/addy/`.
- `idea-refine` is only invoked via natural language trigger phrases or explicit agent skill invocation.
Presenting `Command /spec` on `skills.addy.ie/skills/idea-refine/` creates an inaccurate assumption that `/spec` runs or incorporates `idea-refine`.

### 2.3 Stripping of Operational Guidance and Artifact Specifications
The repository skill `sources/addy/skills/idea-refine/` is a rich, highly disciplined ideation workflow consisting of:
- `SKILL.md` (8,111 bytes): Defines divergent lenses (Inversion, Constraint removal, Audience shift, Combination, Simplification, 10x version, Expert lens), convergent criteria (User value, Feasibility, Differentiation), and a concrete markdown output format (`docs/ideas/[idea-name].md`) mandating a "Not Doing" list.
- `frameworks.md` (5,404 bytes): Six structured ideation frameworks (Jobs to Be Done, SCAMPER, First Principles, Six Thinking Hats, Crazy Eights, Blue Ocean ERRC).
- `refinement-criteria.md` (5,738 bytes): 5-dimension scoring rubric.
- `examples.md` (20,284 bytes): Three complete end-to-end dialogue transcripts.
- `scripts/idea-refine.sh` (342 bytes): Directory initialization script.

In contrast, `sources/addy-external/idea-refine.md` strips away all of these components, serving purely as an installation entry point and high-level marketing teaser with a link pointing back to GitHub.

---

## 3. Verification of Scripts and Commands

1. **Documented CLI Command:**
   ```bash
   npx skills add addyosmani/agent-skills --skill idea-refine
   ```
   **Execution Test:**
   ```bash
   npx --yes skills add addyosmani/agent-skills --skill idea-refine --list
   ```
   - **Exit Code:** `0`
   - **Stdout:** Successfully resolved `addyosmani/agent-skills` from GitHub, located `idea-refine`, and output its description:
     `Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Use when an idea is still vague, when you need to stress-test assumptions before committing to a plan, or when you want to expand options before converging on one. Triggers on "ideate", "refine this idea", or "stress-test my plan".`
   - **Result:** Fully functional CLI command.

2. **Underlying Repository Script:**
   ```bash
   bash skills/idea-refine/scripts/idea-refine.sh
   ```
   **Execution Test:**
   ```bash
   cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh
   ```
   - **Exit Code:** `0`
   - **Stdout:** `Created directory: docs/ideas\n{"status": "ready", "directory": "docs/ideas"}`
   - **Cleanup:** `docs/ideas` was safely removed immediately after execution to maintain repository cleanliness.

---

## 4. Context Cost Breakdown

| Segment | Raw Bytes | Approx Tokens | % of File | Description |
|---|---|---|---|---|
| CSS Styles & Astro Scoping (`.cmd`, `.skill-card`, etc.) | ~12,500 | ~3,125 | 50.1% | Minified CSS layout, theme variables, hover transitions |
| HTML Head & Meta Tags | ~3,500 | ~875 | 14.0% | OpenGraph, Twitter cards, Geist fonts preconnect, canonical links |
| Navigation & Footer Boilerplate | ~5,500 | ~1,375 | 22.1% | Global site navigation, SVG icons, footer links, Netlify RUM script |
| Client-side Scripts | ~1,500 | ~375 | 6.0% | Clipboard copy logic, IntersectionObserver, menu toggle |
| Domain Content (`idea-refine` specific) | ~1,943 | ~486 | 7.8% | Title, summary, use-when blurb, install commands, related skills |
| **Total** | **24,943** | **~6,236** | **100%** | Full external doc file |
