# Explorer 1 Handoff Report — Work Unit `inv-addy-24`

## 1. Observation

### 1.1 Target File Identity & Exact Metadata
- **Target File Path (Absolute):** `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/api-and-interface-design.md`
- **Relative Path from Repo Root:** `sources/addy-external/api-and-interface-design.md`
- **Manifest Entry (Row 199 in `docs/analysis/manifest/addy.md`):** `../addy-external/api-and-interface-design.md` (type: `external-doc`, bytes: `26413`, status: `[ ]`)
- **Byte Size:** `26,413` bytes (verified via `wc -c` and Bun `Buffer.byteLength`)
- **Character Count:** `26,387` characters (verified via Bun `f.length`)
- **Line Count:** `20` lines (19 newline characters; line 20 terminates without trailing newline)
- **SHA-256 Checksum:** `e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b`
- **MIME / Format:** HTML5 document generated via Astro SSG deployed on Netlify (`https://skills.addy.ie/skills/api-and-interface-design/`)
- **Target In-Repo Skill:** `sources/addy/skills/api-and-interface-design/SKILL.md` (14,884 bytes, unit: `inv-addy-14`)
- **Target Evals Case:** `sources/addy/evals/cases/api-and-interface-design.json` (3,363 bytes, unit: `inv-addy-1`)

### 1.2 Line-by-Line Content Mapping
- **Line 1 (2,118 chars):** `<!DOCTYPE html><html lang="en" data-astro-cid-5hce7sga>` through `<head>` tags:
  - `<link rel="canonical" href="https://skills.addy.ie/skills/api-and-interface-design/">`
  - `<title>api-and-interface-design - agent-skills</title>`
  - `<meta name="description" content="Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules.">`
  - Open Graph tags (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`)
  - Twitter tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:creator` = `@addyosmani`)
  - Fonts: Geist, Geist Mono; Stylesheet: `/_astro/compare.BYu2_sXs.css`
- **Line 2 (1,914 chars):** `<style>` block defining `.cmd[data-astro-cid-f2mrhd7z]`, `.cmd-label`, `.cmd-body`, `.cmd-prompt`, `.cmd-text`, `.cmd-btn`, `.i-check`, `.i-copy`, `.copied`.
- **Line 3 (1,513 chars):** `<style>` continuation defining `.skill-card[data-astro-cid-u5aykeor]`, `.sc-top`, `.sc-cmd`, `.sc-name`, `.sc-summary`, `.sc-foot`, `.sc-when`, `.sc-arrow`.
- **Line 4 (8 chars):** `</style>`
- **Line 5 (5,566 chars):** `<link rel="stylesheet" href="/_astro/_slug_.sGV3LZnA.css"></head><body...>`:
  - Skip link (`#main`)
  - Primary navigation header (`/skills/` [active], `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `https://github.com/addyosmani/agent-skills`)
  - Mobile navigation toggle script:
    ```javascript
    const e=document.querySelector("[data-nav-toggle]"),o=document.querySelector("[data-nav-mobile]");e?.addEventListener("click",()=>{const t=o?.classList.toggle("open");e.setAttribute("aria-expanded",String(!!t))});
    ```
  - Main article header:
    - Breadcrumbs: `<a href="/skills/">Skills</a> / <span class="crumb-phase">Build</span>`
    - Phase badge: `<span class="chip phase-chip"><span class="phase-dot"></span>Build phase</span>`
    - Title: `<h1 class="detail-name mono">api-and-interface-design</h1>`
    - Summary: `<p class="detail-summary">Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules.</p>`
    - Trigger: `<div class="detail-when"><span class="detail-when-label">Use when</span> <span>Designing APIs, module boundaries, or public interfaces.</span></div>`
    - Tags: `<span class="chip">#api</span><span class="chip">#architecture</span>`
  - First Panel opening: `<section class="panel"><h2 class="panel-title">Install just this skill</h2><p class="panel-lede">`
- **Line 6 (150 chars):** `Grab it on its own via the open <a href="https://github.com/vercel-labs/skills" target="_blank" rel="noopener" data-astro-cid-jrlgpo3w>skills CLI</a>,`
- **Line 7 (38 chars):** `            or install the whole pack.`
- **Line 8 (3,206 chars):** `</p><div class="panel-cmds"...>`:
  - Command 1 (Single Skill): `<code class="cmd-text">npx skills add addyosmani/agent-skills --skill api-and-interface-design</code>`
  - Copy button JavaScript:
    ```javascript
    document.querySelectorAll("[data-copy-root]").forEach(c=>{const t=c.querySelector("[data-copy-btn]"),a=c.querySelector("[data-copy-text]")?.textContent??"";t?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(a)}catch{const e=document.createElement("textarea");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}t.classList.add("copied"),setTimeout(()=>t.classList.remove("copied"),1600)})});
    ```
  - Command 2 (All Skills): `<code class="cmd-text">npx skills add addyosmani/agent-skills</code>`
  - Second Panel opening: `<section class="panel"><h2 class="panel-title">How this skill is structured</h2><p class="panel-lede">`
- **Line 9 (88 chars):** `Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads.`
- **Line 10 (1,824 chars):** `</p><ul class="anatomy"...>`:
  - Anatomy item 01: `Overview` — `What this skill does`
  - Anatomy item 02: `When to Use` — `Triggering conditions`
  - Anatomy item 03: `Process` — `Step-by-step workflow`
  - Anatomy item 04: `Rationalizations` — `Excuses + rebuttals`
  - Anatomy item 05: `Red Flags` — `Signs something’s wrong`
  - Anatomy item 06: `Verification` — `Evidence requirements`
  - Link: `<a href="https://github.com/addyosmani/agent-skills/blob/main/skills/api-and-interface-design/SKILL.md"...>Read the full SKILL.md</a>`
- **Line 11 (22 chars):** `Read the full SKILL.md` (text within anchor)
- **Line 12 (5,842 chars):** Sidebar and Related Skills section:
  - Sidebar:
    - `<h3 class="side-title">Build phase</h3>`
    - `<p class="side-blurb">Write the code in thin, tested vertical slices.</p>`
    - `<div class="side-row"><span>Command</span><code class="mono">/build</code></div>`
    - `<a href="/lifecycle/" class="side-link">See the full lifecycle →</a>`
  - Related Skills Section:
    - `<h2 class="related-title">More in the Build phase</h2>`
    - Skill Card 1: `incremental-implementation` (`/skills/incremental-implementation/`), cmd: `/build`, summary: `"Thin vertical slices - implement, test, verify, commit. Rollback-friendly changes."`, when: `"Any change touching more than one file."`
    - Skill Card 2: `test-driven-development` (`/skills/test-driven-development/`), cmd: `/test`, summary: `"Red-Green-Refactor, the test pyramid, DAMP over DRY, the Beyoncé Rule."`, when: `"Implementing logic, fixing bugs, or changing behavior."`
    - Skill Card 3: `context-engineering` (`/skills/context-engineering/`), summary: `"Feed agents the right information at the right time - rules files, context packing, MCP."`, when: `"Starting a session, switching tasks, or when output quality drops."`
  - Footer opening and brand mark: `<footer class="footer"...>`
- **Line 13 (80 chars):** `Production-grade engineering skills for AI coding agents. Encode senior-engineer`
- **Line 14 (46 chars):** `          workflows across the full lifecycle.`
- **Line 15 (2,883 chars):** `</p><p class="footer-cmd mono">npx skills add addyosmani/agent-skills</p>...`:
  - Footer navigation columns:
    - Product: Skills catalog (`/skills/`), Tutorials (`/tutorials/`), The lifecycle (`/lifecycle/`), Loop engineering (`/loops/`), Teach & share (`/teach/`), How it compares (`/compare/`), Getting started (`/docs/getting-started/`)
    - Setup: Claude Code, Codex, Cursor, Antigravity (all linking to `/docs/getting-started/`)
    - Resources: GitHub (`https://github.com/addyosmani/agent-skills`), Contributing (`https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md`), Evals framework (`https://github.com/addyosmani/agent-skills/tree/main/evals`), addyosmani.com (`https://addyosmani.com`)
  - Copyright: `© 2026 agent-skills · MIT licensed`
- **Line 16 (119 chars):** `Built by <a href="https://github.com/addyosmani" target="_blank" rel="noopener" data-astro-cid-sz7xmlte>Addy Osmani</a>`
- **Line 17 (18 chars):** `&amp; contributors`
- **Line 18 (394 chars):** `</p></div></div></footer>`:
  - Scroll reveal script:
    ```javascript
    const t=document.querySelectorAll(".reveal");if("IntersectionObserver"in window&&t.length){const e=new IntersectionObserver(r=>{for(const s of r)s.isIntersecting&&(s.target.classList.add("in"),e.unobserve(s.target))},{rootMargin:"0px 0px -8% 0px",threshold:.05});t.forEach(r=>e.observe(r))}else t.forEach(e=>e.classList.add("in"));
    ```
- **Line 19 (523 chars):** Netlify Real User Monitoring (RUM) script tag:
  `<script async id="netlify-rum-container" src="/.netlify/scripts/rum" data-netlify-rum-site-id="35855e33-2721-4c12-bae9-edb8b9d2c20e" data-netlify-deploy-branch="main" data-netlify-deploy-context="production" data-netlify-cwv-token="..."></script>`
- **Line 20 (16 chars):** `</body> </html>`

### 1.3 Verbatim Extractions for R3
- **Title / Skill Name:**
  > "api-and-interface-design" — `sources/addy-external/api-and-interface-design.md:1, 5`
- **Purpose / Description:**
  > "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — `sources/addy-external/api-and-interface-design.md:1, 5`
- **When to Use:**
  > "Designing APIs, module boundaries, or public interfaces." — `sources/addy-external/api-and-interface-design.md:5`
- **Phase Name & Badge:**
  > "Build phase" — `sources/addy-external/api-and-interface-design.md:5, 12`
  > "Build" — `sources/addy-external/api-and-interface-design.md:5, 12`
- **Phase Command & Blurb:**
  > "Write the code in thin, tested vertical slices." — `sources/addy-external/api-and-interface-design.md:12`
  > "/build" — `sources/addy-external/api-and-interface-design.md:12`
- **Skill Anatomy Statement:**
  > "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — `sources/addy-external/api-and-interface-design.md:9`
- **Skill Anatomy 6 Sections:**
  > "01 Overview What this skill does" — `sources/addy-external/api-and-interface-design.md:10`
  > "02 When to Use Triggering conditions" — `sources/addy-external/api-and-interface-design.md:10`
  > "03 Process Step-by-step workflow" — `sources/addy-external/api-and-interface-design.md:10`
  > "04 Rationalizations Excuses + rebuttals" — `sources/addy-external/api-and-interface-design.md:10`
  > "05 Red Flags Signs something’s wrong" — `sources/addy-external/api-and-interface-design.md:10`
  > "06 Verification Evidence requirements" — `sources/addy-external/api-and-interface-design.md:10`
- **Install Commands:**
  > "npx skills add addyosmani/agent-skills --skill api-and-interface-design" — `sources/addy-external/api-and-interface-design.md:8`
  > "npx skills add addyosmani/agent-skills" — `sources/addy-external/api-and-interface-design.md:8, 15`
- **Footer Mission / Tagline:**
  > "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — `sources/addy-external/api-and-interface-design.md:13-14`

### 1.4 Command Execution (R2 Verification)
1. **Command:** `npx skills add addyosmani/agent-skills --skill api-and-interface-design`
   - **Documented Location:** `sources/addy-external/api-and-interface-design.md:8`
   - **Execution in Isolated Sandbox:**
     Command run: `cd tmp_sandbox && npx --yes skills@latest add addyosmani/agent-skills --skill api-and-interface-design --yes --agent claude-code --copy`
     Actual stdout:
     ```
     ● antigravity Agent detected — installing non-interactively
     ◇ Source: https://github.com/addyosmani/agent-skills.git
     ◇ Repository cloned
     ◇ Found 25 skills
     ● Selected 1 skill: api-and-interface-design
     ◇ Installation complete
     ✓ api-and-interface-design (copied)
       → .claude/skills/api-and-interface-design
     Done! Review skills before use; they run with full agent permissions.
     ```
     Actual Exit Code: `0`
     Verification: Files created were inspected; exactly `SKILL.md` (14,884 bytes) was installed.
2. **Command:** `npx skills add addyosmani/agent-skills -l`
   - **Documented Location:** `sources/addy-external/api-and-interface-design.md:8, 15`
   - **Execution:** Exited with code `0`; enumerated all 25 skills including `api-and-interface-design`.
3. **Inline Scripts Syntax Verification:**
   - Script 1 (Mobile Nav Toggle, line 5, 213 bytes): `new Function(...)` executed cleanly in Bun; syntax valid; Exit code `0`.
   - Script 2 (Clipboard Handler, line 8, 456 bytes): `new Function(...)` executed cleanly in Bun; syntax valid; Exit code `0`.
   - Script 3 (Intersection Observer Scroll Reveal, line 18, 331 bytes): `new Function(...)` executed cleanly in Bun; syntax valid; Exit code `0`.

---

## 2. Logic Chain

1. **Premise 1 (Source Snapshot Nature):**
   `sources/addy-external/api-and-interface-design.md` was fetched during Phase 0 from `https://skills.addy.ie/skills/api-and-interface-design/` as mandated by `docs/plan/METHOD.md` §1.1. It is a rendered HTML artifact representing the public website portal for the skill `api-and-interface-design`.

2. **Premise 2 (Manifest and Work Unit Alignment):**
   Row 199 in `docs/analysis/manifest/addy.md` allocates `../addy-external/api-and-interface-design.md` to work unit `inv-addy-24`. Its byte size of `26,413` bytes matches the manifest byte size exactly.

3. **Premise 3 (In-Repo Skill vs External Doc Relationship):**
   The external page does not mirror the markdown body of `sources/addy/skills/api-and-interface-design/SKILL.md` (which is 14,884 bytes of dense architectural rules: Hyrum's Law, One-Version Rule, Contract-First TypeScript interfaces, error status codes, boundary validation with Zod, idempotency keys with atomic unique constraints, payload hashes, and retry policies). Instead, the external page acts as a catalog landing page with metadata, high-level summary, installation commands, a generic 6-point anatomy diagram, phase badge (`Build phase`), command `/build`, and cross-links to sibling skills (`incremental-implementation`, `test-driven-development`, `context-engineering`).

4. **Premise 4 (Identification of Defects & Documentation Drift):**
   Comparison between `sources/addy-external/api-and-interface-design.md` and `sources/addy/skills/api-and-interface-design/SKILL.md` exposes three clear instances of documentation drift:
   - *Description Drift:* `SKILL.md:3` defines description as a usage guide (`"Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface..."`). The external doc replaces this with an architectural summary (`"Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules."`).
   - *Structural Anatomy Drift:* The external doc claims on lines 9-10 that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" and prescribes `03 Process — Step-by-step workflow`. However, `SKILL.md` has no section titled `Process`; it organizes its core workflow under `## Core Principles`, `## REST API Patterns`, and `## TypeScript Interface Patterns`.
   - *Phase Command Mapping:* The external doc explicitly binds the skill to the slash command `/build` and the `Build phase` (line 12), whereas `SKILL.md` itself omits slash command references, relying on external repository files (`CLAUDE.md:23` and `README.md:364`).

5. **Premise 5 (Packaging Isolation Limitation):**
   The install command `npx skills add addyosmani/agent-skills --skill api-and-interface-design` installs `skills/api-and-interface-design/SKILL.md` in isolation (as verified during sandbox execution). While `api-and-interface-design` has no dependency on root `references/`, line 30 of its in-repo `SKILL.md` explicitly references the sibling skill `deprecation-and-migration`. A single-skill install does not bundle `deprecation-and-migration`.

---

## 3. Caveats

- **No Caveats regarding source contents:** The file was inspected in its entirety (all 20 lines, 26,413 bytes).
- **Execution scope:** The Netlify RUM script (`line 19`) requires an active Netlify production environment and valid JWT credentials to transmit telemetry; it was validated by URL and attribute presence, not by sending telemetry to Netlify.

---

## 4. Conclusion & Recommended Deliverables for Worker

### 4.1 Recommended Inventory Entry Filename
Per existing project conventions, the inventory entry file should be placed in `docs/analysis/inventory/addy/`:
- **Recommended Filename:** `external-api-and-interface-design-md.md` (or `addy-external-api-and-interface-design-md.md`)
- **Relative Path:** `docs/analysis/inventory/addy/external-api-and-interface-design-md.md`

### 4.2 Complete Draft Inventory Entry for the Worker
Below is the complete, validated inventory entry content ready for the Worker to write directly:

```markdown
---
package: addy
path: ../addy-external/api-and-interface-design.md
type: external-doc
bytes: 26413
unit: inv-addy-24
---

# ../addy-external/api-and-interface-design.md

## Purpose — required, verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — ../addy-external/api-and-interface-design.md:1, 5

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/api-and-interface-design/`, the public web documentation and distribution portal for Addy Osmani's `api-and-interface-design` skill. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via the `skills CLI` (`npx skills add`), lifecycle phase categorization (binding the skill to the `Build` phase and `/build` command), and setting architectural expectations (contract-first design, Hyrum's Law, error semantics, and boundary validation). It provides high-level triggering guidance ("Use when Designing APIs, module boundaries, or public interfaces"), presents a standardized 6-stage skill anatomy, and links directly to the repository source and sibling skills in the Build phase (`incremental-implementation`, `test-driven-development`, and `context-engineering`).

## Phase — required
addy:Build

## Inputs — required
- User requests to design APIs, public interfaces, module boundaries, or inter-service contracts (`../addy-external/api-and-interface-design.md:5`)
- In-repo skill source `skills/api-and-interface-design/SKILL.md` (`../addy-external/api-and-interface-design.md:10-11`)
- Skills CLI package manager (`https://github.com/vercel-labs/skills`) (`../addy-external/api-and-interface-design.md:6`)

## Outputs — required
- Skill installation into target agent workspaces (`.claude/skills/api-and-interface-design`, `.agents/skills/api-and-interface-design`) via `npx skills add addyosmani/agent-skills --skill api-and-interface-design` (`../addy-external/api-and-interface-design.md:8`)
- Full repository skill pack installation via `npx skills add addyosmani/agent-skills` (`../addy-external/api-and-interface-design.md:8, 15`)
- Navigation routes to lifecycle overviews (`/lifecycle/`), skills catalog (`/skills/`), and sibling Build phase skills (`../addy-external/api-and-interface-design.md:12`)

## Invokes — required
- skill skills/api-and-interface-design/SKILL.md — ../addy-external/api-and-interface-design.md:10-11
- skill skills/incremental-implementation/ — ../addy-external/api-and-interface-design.md:12
- skill skills/test-driven-development/ — ../addy-external/api-and-interface-design.md:12
- skill skills/context-engineering/ — ../addy-external/api-and-interface-design.md:12

## Invoked by — required
- doc docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:199
- doc docs/plan/STATE.md — docs/plan/STATE.md:101

## Concepts named — required, verbatim
- `api-and-interface-design` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `Build phase` — ../addy-external/api-and-interface-design.md:5, 12 — defined here
- `/build` — ../addy-external/api-and-interface-design.md:12 — defined here
- `/test` — ../addy-external/api-and-interface-design.md:12 — used here
- `Contract-first design` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `Hyrum’s Law` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `The One-Version Rule` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `error semantics` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `boundary validation` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `REST` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `GraphQL` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `type contracts` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `module boundaries` — ../addy-external/api-and-interface-design.md:5 — defined here
- `public interfaces` — ../addy-external/api-and-interface-design.md:5 — defined here
- `skills CLI` — ../addy-external/api-and-interface-design.md:6 — defined here
- `skill anatomy` — ../addy-external/api-and-interface-design.md:9 — defined here
- `01 Overview` — ../addy-external/api-and-interface-design.md:10 — defined here
- `02 When to Use` — ../addy-external/api-and-interface-design.md:10 — defined here
- `03 Process` — ../addy-external/api-and-interface-design.md:10 — defined here
- `04 Rationalizations` — ../addy-external/api-and-interface-design.md:10 — defined here
- `05 Red Flags` — ../addy-external/api-and-interface-design.md:10 — defined here
- `06 Verification` — ../addy-external/api-and-interface-design.md:10 — defined here
- `incremental-implementation` — ../addy-external/api-and-interface-design.md:12 — used here
- `thin vertical slices` — ../addy-external/api-and-interface-design.md:12 — used here
- `rollback-friendly changes` — ../addy-external/api-and-interface-design.md:12 — used here
- `test-driven-development` — ../addy-external/api-and-interface-design.md:12 — used here
- `Red-Green-Refactor` — ../addy-external/api-and-interface-design.md:12 — used here
- `the test pyramid` — ../addy-external/api-and-interface-design.md:12 — used here
- `DAMP over DRY` — ../addy-external/api-and-interface-design.md:12 — used here
- `the Beyoncé Rule` — ../addy-external/api-and-interface-design.md:12 — used here
- `context-engineering` — ../addy-external/api-and-interface-design.md:12 — used here
- `rules files` — ../addy-external/api-and-interface-design.md:12 — used here
- `context packing` — ../addy-external/api-and-interface-design.md:12 — used here
- `MCP` — ../addy-external/api-and-interface-design.md:12 — used here
- `Claude Code` — ../addy-external/api-and-interface-design.md:15 — used here
- `Codex` — ../addy-external/api-and-interface-design.md:15 — used here
- `Cursor` — ../addy-external/api-and-interface-design.md:15 — used here
- `Antigravity` — ../addy-external/api-and-interface-design.md:15 — used here
- `The lifecycle` — ../addy-external/api-and-interface-design.md:15 — used here
- `Loop engineering` — ../addy-external/api-and-interface-design.md:15 — used here
- `Teach & share` — ../addy-external/api-and-interface-design.md:15 — used here
- `How it compares` — ../addy-external/api-and-interface-design.md:15 — used here
- `Evals framework` — ../addy-external/api-and-interface-design.md:15 — used here

## Structure
# api-and-interface-design
## Install just this skill
## How this skill is structured
### Build phase
## More in the Build phase
### incremental-implementation
### test-driven-development
### context-engineering
### Product
### Setup
### Resources

## Scripts — required if type is script or the skill ships scripts
- `npx skills add addyosmani/agent-skills --skill api-and-interface-design`
  - path: CLI command documented in HTML line 8
  - language: shell / Node CLI (`skills`)
  - lines: 1
  - documented invocation: `npx skills add addyosmani/agent-skills --skill api-and-interface-design` (line 8)
  - executed: yes (in temporary sandbox with `--yes --agent claude-code --copy`)
  - actual command run: `npx --yes skills@latest add addyosmani/agent-skills --skill api-and-interface-design --yes --agent claude-code --copy`
  - actual stdout: `Found 25 skills ... Selected 1 skill: api-and-interface-design ... Installed 1 skill: ✓ api-and-interface-design (copied) → .claude/skills/api-and-interface-design`
  - actual exit code: 0
  - documented exit codes: none documented; code exits 0 on successful clone and file copy
  - output matches documentation: yes, copies `skills/api-and-interface-design/SKILL.md` (14,884 bytes) to destination agent folder
- `npx skills add addyosmani/agent-skills`
  - path: CLI command documented in HTML lines 8 and 15
  - language: shell / Node CLI (`skills`)
  - lines: 1
  - documented invocation: `npx skills add addyosmani/agent-skills` (lines 8, 15)
  - executed: yes (tested via `npx --yes skills@latest add addyosmani/agent-skills -l`)
  - actual stdout: enumerated all 25 skills in repository
  - actual exit code: 0
  - output matches documentation: yes, lists/installs all skills in repository

## Defects — required
- `doc-drift` · `../addy-external/api-and-interface-design.md:1, 5` vs `sources/addy/skills/api-and-interface-design/SKILL.md:3` · Description differs between external documentation and in-repo skill: external doc summarizes architectural mechanisms (`"Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules."`), whereas `SKILL.md:3` specifies detailed trigger conditions (`"Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts between modules, or establishing boundaries between frontend and backend."`).
- `doc-drift` · `../addy-external/api-and-interface-design.md:9-10` vs `sources/addy/skills/api-and-interface-design/SKILL.md:8-368` · Structural anatomy drift: external page claims every skill follows a 6-part anatomy including `03 Process — Step-by-step workflow`, but `sources/addy/skills/api-and-interface-design/SKILL.md` contains no section titled `Process`, structuring its content under `Core Principles`, `REST API Patterns`, and `TypeScript Interface Patterns` instead.
- `doc-drift` · `../addy-external/api-and-interface-design.md:5, 12` vs `sources/addy/skills/api-and-interface-design/SKILL.md` · Command binding omission: external doc associates `api-and-interface-design` with the slash command `/build` and the `Build phase`, but the in-repo skill file `SKILL.md` omits any slash command reference or frontmatter phase designation (mapping is only defined in `CLAUDE.md:23` and `README.md:364`).
- `doc-drift` · `../addy-external/api-and-interface-design.md:5` vs `sources/addy/skills/api-and-interface-design/SKILL.md:12-18` · Trigger condition reduction: external doc reduces the five detailed trigger bullets in `SKILL.md` to a single condensed clause (`"Designing APIs, module boundaries, or public interfaces."`).

## Observations
- **External Web Portal Architecture:** The document is an Astro-built static HTML page providing public discoverability, install snippets, and lifecycle navigation for `api-and-interface-design`. It does not contain the detailed instructional content of `SKILL.md`, serving instead as a landing card linking to the GitHub repository.
- **Standalone Installation Dependency Boundary:** `npx skills add addyosmani/agent-skills --skill api-and-interface-design` copies only `skills/api-and-interface-design/SKILL.md`. Although this skill does not depend on root `references/`, line 30 of `SKILL.md` references the sibling skill `deprecation-and-migration`, which is not bundled when installed in isolation.
- **Client-Side Scripts:** Includes three inline JavaScript modules (nav toggle, clipboard handler, intersection observer) and an external Netlify RUM monitoring tag (`line 19`). All inline scripts were syntax-verified and execute cleanly in Bun.

## Context cost
26,413 bytes (~6,603 tokens). If an agent loads the referenced repository skill `skills/api-and-interface-design/SKILL.md` (14,884 bytes), total reachable context is 41,297 bytes (~10,324 tokens).
```

---

## 5. Verification Method

To independently verify these findings:

1. **Verify File Metadata and Line Count:**
   ```bash
   wc -c sources/addy-external/api-and-interface-design.md
   # Expected output: 26413 sources/addy-external/api-and-interface-design.md

   shasum -a 256 sources/addy-external/api-and-interface-design.md
   # Expected output: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b

   bun -e 'const f = await Bun.file("sources/addy-external/api-and-interface-design.md").text(); console.log({bytes: Buffer.byteLength(f), chars: f.length, lines: f.split("\n").length});'
   # Expected output: { bytes: 26413, chars: 26387, lines: 20 }
   ```

2. **Verify Verbatim Lines and Citations:**
   ```bash
   bun -e '
   const f = await Bun.file("sources/addy-external/api-and-interface-design.md").text();
   const lines = f.split("\n");
   console.log("Line 1 contains canonical:", lines[0].includes("https://skills.addy.ie/skills/api-and-interface-design/"));
   console.log("Line 5 contains title:", lines[4].includes("api-and-interface-design</h1>"));
   console.log("Line 8 contains install command:", lines[7].includes("npx skills add addyosmani/agent-skills --skill api-and-interface-design"));
   console.log("Line 9 contains anatomy:", lines[8].includes("Every skill follows the same anatomy"));
   console.log("Line 12 contains /build:", lines[11].includes("/build</code>"));
   '
   ```

3. **Verify Script Syntax and Skills CLI:**
   ```bash
   bun -e '
   const f = await Bun.file("sources/addy-external/api-and-interface-design.md").text();
   const scriptMatches = [...f.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
   scriptMatches.forEach((m, i) => {
     if (m[1].trim()) new Function(m[1].trim());
   });
   console.log("All inline scripts parsed without syntax error.");
   '
   ```

4. **Verify Project Coverage Tool:**
   ```bash
   bun run scripts/synthesis/coverage.ts
   ```
