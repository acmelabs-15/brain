# Deep-Dive Analysis: `sources/addy-external/debugging-and-error-recovery.md`

**Target File**: `sources/addy-external/debugging-and-error-recovery.md`  
**Package**: `addy`  
**Unit**: `inv-addy-21`  
**Investigator**: Explorer 3 (`explorer_inv_addy_21_3_gen2`)  
**Date**: 2026-09-03  

---

## 1. File Statistics & Verification

| Property | Value | Evidence / Command |
|---|---|---|
| Relative Path (from project root) | `sources/addy-external/debugging-and-error-recovery.md` | Filesystem |
| Path relative to `sources/addy/` | `../addy-external/debugging-and-error-recovery.md` | Manifest row 194 |
| Canonical Source URL | `https://skills.addy.ie/skills/debugging-and-error-recovery/` | `link[rel="canonical"]` (line 1) |
| File Type | `external-doc` | Static HTML snapshot of public web documentation |
| File Size (bytes) | 23,705 bytes | `Buffer.byteLength()`, `wc -c` |
| Line Count | 20 lines | Bun `text.split("\n").length` (19 `\n` characters) |
| SHA-256 Checksum | `d0c1b0c0347395ef86161427a1e05a3da4ce2f5f1ea38be98d30e3bbbe7089b0` | Verification hash |

---

## 2. Complete Inventory Entry Extraction

### 2.1 Purpose (Verbatim)
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — ../addy-external/debugging-and-error-recovery.md:5

*(Also identically present in `<meta name="description">`, `<meta property="og:description">`, and `<meta name="twitter:description">` at `../addy-external/debugging-and-error-recovery.md:1`)*.

### 2.2 Design Intent
This external documentation page serves as the public web catalog entry and installation portal for the `debugging-and-error-recovery` skill on `skills.addy.ie`. It solves the discoverability, external skill acquisition, and onboarding problem for developers and AI coding agents operating outside the local repository clone. Without this page, developers and agent operators discovering skills through web search, documentation catalogs, or package managers would lack an accessible summary of the skill's triggers ("Tests fail, builds break, or behavior is unexpected"), quick-install commands via the Vercel Labs open `skills` CLI (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery`), structural anatomy (the 6-part standardized skill layout), and lifecycle positioning within the `Verify` phase alongside `/test`.

### 2.3 Phase
`addy:Verify`

**Evidence**:
- Breadcrumb navigation: `<a href="/skills/">Skills</a> / <span class="crumb-phase">Verify</span>` (`line 5`)
- Phase badge: `<span class="chip phase-chip"><span class="phase-dot"></span>Verify phase</span>` (`line 5`)
- Sidebar card header: `<h3 class="side-title">Verify phase</h3>` with description `"Prove it works with real runtime evidence."` and command association `Command /test` (`line 12`)
- Related skills section: `<h2 class="related-title">More in the Verify phase</h2>` (`line 12`)

### 2.4 Inputs
- **Web request context**: HTTP GET request to canonical URL `https://skills.addy.ie/skills/debugging-and-error-recovery/` (`line 1`).
- **Referenced static assets**: Favicon `/favicon.svg`, Open Graph card `/og.png`, stylesheets `/_astro/compare.BYu2_sXs.css` and `/_astro/_slug_.sGV3LZnA.css`, Google Fonts (`Geist Mono`, `Geist`), sitemap `/sitemap-index.xml` (`lines 1, 5`).
- **Client-side runtime modules**: Astro client hydration scripts, mobile navigation toggle script, clipboard copy script, IntersectionObserver scroll-reveal observer, and Netlify RUM analytics script `/.netlify/scripts/rum` (`lines 5, 8, 18, 19`).
- **Underlying skill definition**: Metadata, descriptions, and workflow concepts derived from `sources/addy/skills/debugging-and-error-recovery/SKILL.md` (`lines 5, 10-12`).
- **Operational trigger conditions**: "Tests fail, builds break, or behavior is unexpected." (`line 5`).

### 2.5 Outputs
- **Rendered web presentation**: Styled documentation page presenting skill overview, triggers, installation instructions, structure, lifecycle context, and related skills (`lines 1-20`).
- **CLI installation commands**:
  - `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` (single skill) (`line 8`)
  - `npx skills add addyosmani/agent-skills` (all skills pack) (`line 8, 15`)
- **Interactive clipboard copies**: Copy button interaction providing one-click command copying to system clipboard (`line 8`).
- **Lifecycle & catalog navigation**: Direct links to `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` (`lines 5, 15`).
- **Platform setup deep links**: Links to setup instructions for Claude Code, Codex, Cursor, and Antigravity at `/docs/getting-started/` (`line 15`).
- **Peer skill discovery**: Cross-link to related Verify phase skill `/skills/browser-testing-with-devtools/` (`line 12`).
- **External repository references**: Links to upstream GitHub repository `https://github.com/addyosmani/agent-skills`, source file `https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md`, contributing guidelines `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md`, evals framework `https://github.com/addyosmani/agent-skills/tree/main/evals`, author site `https://addyosmani.com`, and open skills CLI `https://github.com/vercel-labs/skills` (`lines 5, 6, 10-12, 15`).
- **Telemetry data**: Real User Monitoring (RUM) beacon transmission to Netlify (`line 19`).

### 2.6 Invokes
- skill `browser-testing-with-devtools` — `../addy-external/debugging-and-error-recovery.md:12` (in "More in the Verify phase" grid)
- command `/test` — `../addy-external/debugging-and-error-recovery.md:12` (associated Verify phase command)
- command `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` — `../addy-external/debugging-and-error-recovery.md:8`
- command `npx skills add addyosmani/agent-skills` — `../addy-external/debugging-and-error-recovery.md:8, 15`
- doc `skills/debugging-and-error-recovery/SKILL.md` — `../addy-external/debugging-and-error-recovery.md:10-12` (via link `https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md`)
- doc `CONTRIBUTING.md` — `../addy-external/debugging-and-error-recovery.md:15` (via link `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md`)
- doc `evals` framework — `../addy-external/debugging-and-error-recovery.md:15` (via link `https://github.com/addyosmani/agent-skills/tree/main/evals`)
- external tool `skills CLI` (`@vercel-labs/skills`) — `../addy-external/debugging-and-error-recovery.md:6` (via link `https://github.com/vercel-labs/skills`)
- script `/.netlify/scripts/rum` — `../addy-external/debugging-and-error-recovery.md:19`

### 2.7 Invoked by
- external-doc `sources/addy-external/browser-testing-with-devtools.md` — `../addy-external/browser-testing-with-devtools.md:12` (in its "More in the Verify phase" related grid)
- `orphan` relative to core repository: No file within `sources/addy/` references `skills.addy.ie/skills/debugging-and-error-recovery` or links directly to this external snapshot. It is an unreferenced external publication of `skills/debugging-and-error-recovery/SKILL.md`.

---

## 3. Exhaustive Concepts Named (per METHOD.md R6)

| Concept Name (Verbatim) | Location (`path:line`) | Status | Category |
|---|---|---|---|
| `debugging-and-error-recovery` | `../addy-external/debugging-and-error-recovery.md:1, 5` | defined here | Skill Name |
| `agent-skills` | `../addy-external/debugging-and-error-recovery.md:1, 5` | used here | Package Name |
| `systematic root-cause debugging` | `../addy-external/debugging-and-error-recovery.md:1, 5` | defined here | Technique |
| `Reproduce, localize, reduce, fix, guard` | `../addy-external/debugging-and-error-recovery.md:1, 5` | defined here | Process / Triage Steps |
| `stop-the-line rule` | `../addy-external/debugging-and-error-recovery.md:1, 5` | defined here | Rule / Policy |
| `safe fallbacks` | `../addy-external/debugging-and-error-recovery.md:1, 5` | defined here | Pattern |
| `Skills` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Navigation / Concept |
| `Docs` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Navigation / Concept |
| `Tutorials` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Navigation / Concept |
| `Lifecycle` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Framework |
| `Loops` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Framework |
| `Teach` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Framework |
| `Compare` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Tool / Concept |
| `Verify` | `../addy-external/debugging-and-error-recovery.md:5` | used here | Lifecycle Phase |
| `Verify phase` | `../addy-external/debugging-and-error-recovery.md:5, 12` | used here | Lifecycle Phase |
| `Use when` | `../addy-external/debugging-and-error-recovery.md:5` | defined here | Trigger Header |
| `#debugging` | `../addy-external/debugging-and-error-recovery.md:5` | defined here | Tag |
| `#quality` | `../addy-external/debugging-and-error-recovery.md:5` | defined here | Tag |
| `Install just this skill` | `../addy-external/debugging-and-error-recovery.md:5` | defined here | Panel Heading |
| `skills CLI` | `../addy-external/debugging-and-error-recovery.md:6` | used here | Tool |
| `This skill only` | `../addy-external/debugging-and-error-recovery.md:8` | defined here | Distribution Scope |
| `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` | `../addy-external/debugging-and-error-recovery.md:8` | defined here | Invocation Command |
| `All skills` | `../addy-external/debugging-and-error-recovery.md:8` | used here | Distribution Scope |
| `npx skills add addyosmani/agent-skills` | `../addy-external/debugging-and-error-recovery.md:8, 15` | used here | Invocation Command |
| `How this skill is structured` | `../addy-external/debugging-and-error-recovery.md:8` | defined here | Panel Heading |
| `anatomy` | `../addy-external/debugging-and-error-recovery.md:9` | defined here | Template / Structural Standard |
| `Overview` | `../addy-external/debugging-and-error-recovery.md:10` | defined here | Anatomy Section 01 |
| `When to Use` | `../addy-external/debugging-and-error-recovery.md:10` | defined here | Anatomy Section 02 |
| `Process` | `../addy-external/debugging-and-error-recovery.md:10` | defined here | Anatomy Section 03 |
| `Rationalizations` | `../addy-external/debugging-and-error-recovery.md:10` | defined here | Anatomy Section 04 |
| `Red Flags` | `../addy-external/debugging-and-error-recovery.md:10` | defined here | Anatomy Section 05 |
| `Verification` | `../addy-external/debugging-and-error-recovery.md:10` | defined here | Anatomy Section 06 |
| `SKILL.md` | `../addy-external/debugging-and-error-recovery.md:10` | used here | Artifact Type |
| `/test` | `../addy-external/debugging-and-error-recovery.md:12` | used here | Lifecycle Command |
| `The lifecycle` | `../addy-external/debugging-and-error-recovery.md:12, 15` | used here | Framework |
| `More in the Verify phase` | `../addy-external/debugging-and-error-recovery.md:12` | used here | Section Heading |
| `browser-testing-with-devtools` | `../addy-external/debugging-and-error-recovery.md:12` | used here | Related Skill |
| `Chrome DevTools MCP` | `../addy-external/debugging-and-error-recovery.md:12` | used here | Tool / Protocol |
| `testing` | `../addy-external/debugging-and-error-recovery.md:12` | used here | Related Tag |
| `browser` | `../addy-external/debugging-and-error-recovery.md:12` | used here | Related Tag |
| `mcp` | `../addy-external/debugging-and-error-recovery.md:12` | used here | Related Tag |
| `Production-grade engineering skills` | `../addy-external/debugging-and-error-recovery.md:13` | used here | Descriptor |
| `AI coding agents` | `../addy-external/debugging-and-error-recovery.md:13` | used here | Target Audience |
| `senior-engineer workflows` | `../addy-external/debugging-and-error-recovery.md:13-14` | used here | Architectural Intent |
| `Skills catalog` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Product Section |
| `Loop engineering` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Product Section |
| `Teach & share` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Product Section |
| `How it compares` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Product Section |
| `Getting started` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Documentation Section |
| `Claude Code` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Target Harness |
| `Codex` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Target Harness |
| `Cursor` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Target Harness |
| `Antigravity` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Target Harness |
| `Evals framework` | `../addy-external/debugging-and-error-recovery.md:15` | used here | Testing Framework |

---

## 4. Structure (HTML Headings in Order)

1. `h1.detail-name`: `debugging-and-error-recovery` (`line 5`)
2. `h2.panel-title`: `Install just this skill` (`line 5`)
3. `h2.panel-title`: `How this skill is structured` (`line 8`)
4. `h3.side-title`: `Verify phase` (`line 12`)
5. `h2.related-title`: `More in the Verify phase` (`line 12`)
6. `h3.sc-name`: `browser-testing-with-devtools` (`line 12`)
7. `h3`: `Product` (`line 15`)
8. `h3`: `Setup` (`line 15`)
9. `h3`: `Resources` (`line 15`)

---

## 5. Scripts & Commands

- **Type**: `external-doc` (does not author or ship shell or JS scripts in the package).
- **Documented Invocations**:
  - `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` — `../addy-external/debugging-and-error-recovery.md:8`
  - `npx skills add addyosmani/agent-skills` — `../addy-external/debugging-and-error-recovery.md:8, 15`
- **Embedded Browser Client Scripts**:
  - `line 5`: Mobile menu navigation toggle handler (`data-nav-toggle`, `data-nav-mobile`).
  - `line 8`: Clipboard copy handler for CLI commands (`[data-copy-root]`, `[data-copy-btn]`, `[data-copy-text]`).
  - `line 18`: Scroll reveal animations via `IntersectionObserver` on `.reveal` elements.
  - `line 19`: Netlify Real User Monitoring (RUM) tracking bundle `/.netlify/scripts/rum`.

---

## 6. Comprehensive Defect Analysis (METHOD.md §4 Checklist)

### 6.1 `doc-drift` (Primary Defects)
1. **Triage Step Count & Omission**:
   - `Location 1`: `../addy-external/debugging-and-error-recovery.md:1, 5` (description and summary: *"Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing."*)
   - `Location 2`: `../addy-external/browser-testing-with-devtools.md:12` (*"Five-step triage: reproduce, localize, reduce, fix, guard. Stop-the-line rule."*)
   - `Location 3`: `sources/addy/skills/debugging-and-error-recovery/SKILL.md:36-170`
   - *Analysis*: The external documentation page (and the related skill card on `browser-testing-with-devtools.md`) describes the triage process as a **5-step triage** (`reproduce, localize, reduce, fix, guard`). In contrast, `SKILL.md` defines a structured **6-step triage checklist**:
     - `### Step 1: Reproduce` (`SKILL.md:40`)
     - `### Step 2: Localize` (`SKILL.md:87`)
     - `### Step 3: Reduce` (`SKILL.md:111`)
     - `### Step 4: Fix the Root Cause` (`SKILL.md:121`)
     - `### Step 5: Guard Against Recurrence` (`SKILL.md:138`)
     - `### Step 6: Verify End-to-End` (`SKILL.md:154`)
     The external web page completely omits `Step 6: Verify End-to-End`, which is a required step before resuming feature work under the Stop-the-Line rule. This mirrors the doc-drift found in `README.md:262` and `docs/adoption-guide.md:83`.

2. **Standardized Anatomy Mismatch with SKILL.md Section Headers**:
   - `Location 1`: `../addy-external/debugging-and-error-recovery.md:8-10`
   - `Location 2`: `sources/addy/skills/debugging-and-error-recovery/SKILL.md:21-280`
   - *Analysis*: The external page asserts that *"Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads"*, enumerating six standard sections: `01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, and `06 Verification`. However, `SKILL.md` does NOT contain any section named `Process` or `## Process`. Instead, its core workflow spans `## The Stop-the-Line Rule` (line 21), `## The Triage Checklist` (line 36), `## Error-Specific Patterns` (line 172), `## Safe Fallback Patterns` (line 214), and `## Instrumentation Guidelines` (line 243). Furthermore, the rationalizations section is titled `## Common Rationalizations` (`SKILL.md:262`), and a critical security section — `## Treating Error Output as Untrusted Data` (`SKILL.md:272`, prompt injection defense) — is completely absent from the claimed 6-part anatomy.

3. **Trigger Condition Reduction**:
   - `Location 1`: `../addy-external/debugging-and-error-recovery.md:5`
   - `Location 2`: `sources/addy/skills/debugging-and-error-recovery/SKILL.md:14-19`
   - *Analysis*: The external page condenses the triggering conditions into a single 3-part sentence: *"Tests fail, builds break, or behavior is unexpected."* In contrast, `SKILL.md` specifies 6 distinct operational triggers: tests failing after a code change, build breaks, runtime behavior mismatch, bug reports arriving, console/log errors appearing, and regressions where previously working code stops functioning.

4. **Lifecycle Command Attribution Drift**:
   - `Location 1`: `../addy-external/debugging-and-error-recovery.md:12`
   - `Location 2`: `sources/addy/commands/test.toml:1-19`, `sources/addy/commands/build.toml:36, 42`
   - *Analysis*: The sidebar links the `Verify phase` directly to `Command /test`. However, in the repository, `/test` (`commands/test.toml`) only invokes `test-driven-development` and `browser-testing-with-devtools`. The command that actually invokes `debugging-and-error-recovery` is `/build` (`commands/build.toml:36, 42`), which explicitly instructs agents to follow `debugging-and-error-recovery` when tests or builds fail.

### 6.2 `internal-contradiction`
- `Location`: `../addy-external/debugging-and-error-recovery.md:8-11`
- *Analysis*: The panel lede at lines 8-9 claims: *"Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads."* Immediately following the list of 6 anatomy items, line 11 provides a button explicitly inviting human and agent users: *"Read the full SKILL.md"*, directly contradicting the assertion that it is not a document to be read.

### 6.3 `cross-file-contradiction`
- `Location`: `../addy-external/debugging-and-error-recovery.md:12` vs `../addy-external/browser-testing-with-devtools.md:12`
- *Analysis*: Both external web pages cross-promote each other in their "More in the Verify phase" sections. On `browser-testing-with-devtools.md:12`, the summary card for `debugging-and-error-recovery` explicitly states: *"Five-step triage: reproduce, localize, reduce, fix, guard. Stop-the-line rule."*, entrenching the 5-step description across multiple external documents, contrary to the 6 steps defined in the authoritative `SKILL.md`.

### 6.4 `orphan`
- `Location`: `../addy-external/debugging-and-error-recovery.md`
- *Analysis*: Within the core repository `sources/addy/`, no file points to or invokes `skills.addy.ie/skills/debugging-and-error-recovery/` or `../addy-external/debugging-and-error-recovery.md`. It exists as an external publication snapshot fetched during Phase 0 setup. Within the external snapshot set, it is referenced only by `../addy-external/browser-testing-with-devtools.md:12`.

---

## 7. Observations & Context Cost

### 7.1 Observations
1. **Packaging & Distribution via Open Skills CLI**: The page highlights distribution via `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` using the open `skills` CLI maintained by Vercel Labs (`https://github.com/vercel-labs/skills`), indicating an ecosystem standard for granular skill installation.
2. **Standardized Marketing/Anatomy Framework**: The web catalog imposes a rigid, uniform 6-part anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`) across all skills, even when individual skill files in the repository contain rich domain-specific structures (such as `The Stop-the-Line Rule`, `Instrumentation Guidelines`, and `Treating Error Output as Untrusted Data`).
3. **Multi-Harness Setup Portal**: The footer explicitly targets four AI coding harnesses (`Claude Code`, `Codex`, `Cursor`, `Antigravity`), pointing all four setup links to `/docs/getting-started/`.

### 7.2 Context Cost
- **File Size**: 23,705 bytes (~5,926 tokens).
- **Signal-to-Noise Ratio**: Extremely low. Over 23,000 bytes consist of HTML boilerplate, Astro CSS stylesheets, SVG graphics, full navigation headers/footers, and Netlify RUM scripts. Only ~500 bytes contain substantive information about the `debugging-and-error-recovery` skill.
- **Actionability**: An executing agent in a development harness cannot act on 98% of this file. For agent consumption, the authoritative in-repo file `skills/debugging-and-error-recovery/SKILL.md` (10,837 bytes) provides 100% actionable guidance at less than half the total token cost.

---

## 8. Complete Deliverable: Inventory Entry

The following markdown is ready to be written to `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md`:

```markdown
---
package: addy
path: ../addy-external/debugging-and-error-recovery.md
type: external-doc
bytes: 23705
unit: inv-addy-21
---

# ../addy-external/debugging-and-error-recovery.md

## Purpose — required, verbatim
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — ../addy-external/debugging-and-error-recovery.md:5

## Design intent — required
Serves as the public web catalog and installation page on skills.addy.ie for the debugging-and-error-recovery skill in Addy Osmani's agent-skills collection. It provides external discoverability and quick-installation instructions via the open skills CLI (npx skills add) for developers and agents discovering skills outside the repository clone. Without it, external consumers would lack a web-searchable landing page detailing the skill's triggers, standardized anatomy, and position within the Verify lifecycle phase.

## Phase — required
addy:Verify

## Inputs — required
- Web HTTP GET request to canonical URL https://skills.addy.ie/skills/debugging-and-error-recovery/ — ../addy-external/debugging-and-error-recovery.md:1
- Static assets: /favicon.svg, /og.png, /_astro/compare.BYu2_sXs.css, /_astro/_slug_.sGV3LZnA.css, Google Fonts, /sitemap-index.xml — ../addy-external/debugging-and-error-recovery.md:1, 5
- Client-side runtime modules: mobile navigation toggle, clipboard copy, IntersectionObserver reveal, Netlify RUM script /.netlify/scripts/rum — ../addy-external/debugging-and-error-recovery.md:5, 8, 18, 19
- Source skill metadata and content from skills/debugging-and-error-recovery/SKILL.md — ../addy-external/debugging-and-error-recovery.md:5, 10-12
- Trigger condition inputs: "Tests fail, builds break, or behavior is unexpected." — ../addy-external/debugging-and-error-recovery.md:5

## Outputs — required
- Web presentation of debugging-and-error-recovery skill documentation — ../addy-external/debugging-and-error-recovery.md:1-20
- CLI installation commands for clipboard copy: `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` (single skill) and `npx skills add addyosmani/agent-skills` (full pack) — ../addy-external/debugging-and-error-recovery.md:8
- Navigation links to catalog (/skills/), docs (/docs/getting-started/), tutorials (/tutorials/), lifecycle (/lifecycle/), loops (/loops/), teach (/teach/), and compare (/compare/) — ../addy-external/debugging-and-error-recovery.md:5, 15
- Setup links for Claude Code, Codex, Cursor, and Antigravity — ../addy-external/debugging-and-error-recovery.md:15
- External links to GitHub repository, contributing guide, evals framework, SKILL.md source, skills CLI, and addyosmani.com — ../addy-external/debugging-and-error-recovery.md:5, 6, 10-12, 15
- Peer discovery card linking to /skills/browser-testing-with-devtools/ — ../addy-external/debugging-and-error-recovery.md:12
- Netlify RUM telemetry beacon — ../addy-external/debugging-and-error-recovery.md:19

## Invokes — required
- skill browser-testing-with-devtools — ../addy-external/debugging-and-error-recovery.md:12
- command /test — ../addy-external/debugging-and-error-recovery.md:12
- command npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery — ../addy-external/debugging-and-error-recovery.md:8
- command npx skills add addyosmani/agent-skills — ../addy-external/debugging-and-error-recovery.md:8, 15
- doc skills/debugging-and-error-recovery/SKILL.md — ../addy-external/debugging-and-error-recovery.md:10-12
- doc CONTRIBUTING.md — ../addy-external/debugging-and-error-recovery.md:15
- doc evals framework — ../addy-external/debugging-and-error-recovery.md:15
- external tool skills CLI (@vercel-labs/skills) — ../addy-external/debugging-and-error-recovery.md:6
- script /.netlify/scripts/rum — ../addy-external/debugging-and-error-recovery.md:19

## Invoked by — required
- external-doc sources/addy-external/browser-testing-with-devtools.md — ../addy-external/browser-testing-with-devtools.md:12
- orphan (relative to core sources/addy/ repository tree; no file in repo links to this external web snapshot)

## Concepts named — required, verbatim
- `debugging-and-error-recovery` — ../addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `agent-skills` — ../addy-external/debugging-and-error-recovery.md:1, 5 — used here
- `systematic root-cause debugging` — ../addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `Reproduce, localize, reduce, fix, guard` — ../addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `stop-the-line rule` — ../addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `safe fallbacks` — ../addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `Skills` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Docs` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Tutorials` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Lifecycle` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Loops` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Teach` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Compare` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Verify` — ../addy-external/debugging-and-error-recovery.md:5 — used here
- `Verify phase` — ../addy-external/debugging-and-error-recovery.md:5, 12 — used here
- `Use when` — ../addy-external/debugging-and-error-recovery.md:5 — defined here
- `#debugging` — ../addy-external/debugging-and-error-recovery.md:5 — defined here
- `#quality` — ../addy-external/debugging-and-error-recovery.md:5 — defined here
- `Install just this skill` — ../addy-external/debugging-and-error-recovery.md:5 — defined here
- `skills CLI` — ../addy-external/debugging-and-error-recovery.md:6 — used here
- `This skill only` — ../addy-external/debugging-and-error-recovery.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` — ../addy-external/debugging-and-error-recovery.md:8 — defined here
- `All skills` — ../addy-external/debugging-and-error-recovery.md:8 — used here
- `npx skills add addyosmani/agent-skills` — ../addy-external/debugging-and-error-recovery.md:8, 15 — used here
- `How this skill is structured` — ../addy-external/debugging-and-error-recovery.md:8 — defined here
- `anatomy` — ../addy-external/debugging-and-error-recovery.md:9 — defined here
- `Overview` — ../addy-external/debugging-and-error-recovery.md:10 — defined here
- `When to Use` — ../addy-external/debugging-and-error-recovery.md:10 — defined here
- `Process` — ../addy-external/debugging-and-error-recovery.md:10 — defined here
- `Rationalizations` — ../addy-external/debugging-and-error-recovery.md:10 — defined here
- `Red Flags` — ../addy-external/debugging-and-error-recovery.md:10 — defined here
- `Verification` — ../addy-external/debugging-and-error-recovery.md:10 — defined here
- `SKILL.md` — ../addy-external/debugging-and-error-recovery.md:10 — used here
- `/test` — ../addy-external/debugging-and-error-recovery.md:12 — used here
- `The lifecycle` — ../addy-external/debugging-and-error-recovery.md:12, 15 — used here
- `More in the Verify phase` — ../addy-external/debugging-and-error-recovery.md:12 — used here
- `browser-testing-with-devtools` — ../addy-external/debugging-and-error-recovery.md:12 — used here
- `Chrome DevTools MCP` — ../addy-external/debugging-and-error-recovery.md:12 — used here
- `testing` — ../addy-external/debugging-and-error-recovery.md:12 — used here
- `browser` — ../addy-external/debugging-and-error-recovery.md:12 — used here
- `mcp` — ../addy-external/debugging-and-error-recovery.md:12 — used here
- `Production-grade engineering skills` — ../addy-external/debugging-and-error-recovery.md:13 — used here
- `AI coding agents` — ../addy-external/debugging-and-error-recovery.md:13 — used here
- `senior-engineer workflows` — ../addy-external/debugging-and-error-recovery.md:13-14 — used here
- `Skills catalog` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Loop engineering` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Teach & share` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `How it compares` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Getting started` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Claude Code` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Codex` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Cursor` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Antigravity` — ../addy-external/debugging-and-error-recovery.md:15 — used here
- `Evals framework` — ../addy-external/debugging-and-error-recovery.md:15 — used here

## Structure
- debugging-and-error-recovery (line 5)
- Install just this skill (line 5)
- How this skill is structured (line 8)
- Verify phase (line 12)
- More in the Verify phase (line 12)
- browser-testing-with-devtools (line 12)
- Product (line 15)
- Setup (line 15)
- Resources (line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `../addy-external/debugging-and-error-recovery.md:1, 5` vs `sources/addy/skills/debugging-and-error-recovery/SKILL.md:36-170` · The external page describes the triage process as a 5-step triage ("Reproduce, localize, reduce, fix, guard"), completely omitting Step 6: Verify End-to-End (SKILL.md:154), which is required before resuming work.
- `doc-drift` · `../addy-external/debugging-and-error-recovery.md:8-10` vs `sources/addy/skills/debugging-and-error-recovery/SKILL.md:21-280` · The external page asserts a uniform 6-part anatomy containing "03 Process" and "04 Rationalizations", but SKILL.md contains no "Process" section, names the section "Common Rationalizations", and contains a major prompt injection defense section ("Treating Error Output as Untrusted Data", SKILL.md:272) not represented in the anatomy.
- `doc-drift` · `../addy-external/debugging-and-error-recovery.md:5` vs `sources/addy/skills/debugging-and-error-recovery/SKILL.md:14-19` · The external page truncates the 6 specific trigger conditions in SKILL.md into a generic 3-clause phrase ("Tests fail, builds break, or behavior is unexpected").
- `doc-drift` · `../addy-external/debugging-and-error-recovery.md:12` vs `sources/addy/commands/build.toml:36, 42` and `sources/addy/commands/test.toml:1-19` · The external page pairs the Verify phase and this skill with `Command /test`, but `/test` only runs TDD and browser testing, whereas `commands/build.toml:36, 42` is the command that explicitly invokes `debugging-and-error-recovery`.
- `internal-contradiction` · `../addy-external/debugging-and-error-recovery.md:8-11` · The page claims skills follow an anatomy that is "a workflow the agent follows, not a doc it reads" (line 9), but immediately provides a primary call-to-action button labeled "Read the full SKILL.md" (line 11).
- `cross-file-contradiction` · `../addy-external/debugging-and-error-recovery.md:12` vs `../addy-external/browser-testing-with-devtools.md:12` · Both external docs reinforce the outdated 5-step triage summary ("Five-step triage: reproduce, localize, reduce, fix, guard"), contradicting the authoritative 6-step checklist in `SKILL.md:36-170`.
- `orphan` · `../addy-external/debugging-and-error-recovery.md:1` · No file within the primary `sources/addy/` repository references or links to this external web snapshot; it is an unreferenced external publication.

## Observations
- Package distribution model: Promotes installation of individual skills via the open Vercel Labs `skills` CLI (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery`), demonstrating granular composability.
- Multi-harness integration: Directly links setup documentation for four AI agent environments: Claude Code, Codex, Cursor, and Antigravity.
- Presentation overhead: HTML document contains over 23 KB of layout scaffolding, CSS styling, and analytics code, yielding a very low substantive signal-to-noise ratio compared to the repo's native markdown skill files.

## Context cost
23,705 bytes (~5,926 tokens). Contains ~23,200 bytes of non-actionable HTML/CSS/JS boilerplate and ~500 bytes of substantive skill metadata.
```
