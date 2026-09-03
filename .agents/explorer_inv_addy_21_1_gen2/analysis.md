# Comprehensive Analysis & Implementation Specification: Work Unit `inv-addy-21`

**Author:** Explorer 1 (Methodology, Templates, Manifest, and Prior Pattern Investigator)  
**Date:** 2026-09-03  
**Working Directory:** `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_21_1_gen2/`  
**Target Unit:** `inv-addy-21` (Phase 1 Inventory Extraction)  
**Assigned Package:** `addy` (`sources/addy-external/`)  

---

## 1. Executive Summary & Problem Boundary

Work unit `inv-addy-21` marks the transition into external documentation extraction for the `addy` source package. While prior units `inv-addy-1` through `inv-addy-20` extracted all 190 repo-internal files across `sources/addy/` (skills, references, evals, commands, configs, hooks, agents, and top-level documentation), `inv-addy-21` processes the first two external documentation snapshots saved in `sources/addy-external/`:
1. `sources/addy-external/idea-refine.md` (24,943 bytes) — Astro HTML snapshot of `https://skills.addy.ie/skills/idea-refine/`
2. `sources/addy-external/debugging-and-error-recovery.md` (23,705 bytes) — Astro HTML snapshot of `https://skills.addy.ie/skills/debugging-and-error-recovery/`

Total source size: **48,648 bytes** across 2 files, well within the ~50 KB unit boundary prescribed in `docs/plan/METHOD.md` §6.5.

Per `METHOD.md` §1.1, external documentation pages represent a source package's public-facing intent, published externally to introduce and distribute skills. The methodology explicitly mandates comparing these external pages against the repository's internal code and `SKILL.md` files; any divergence constitutes a `doc-drift` defect with both locations cited.

This investigation provides:
1. Complete verification of repository state, branch rules (`v2` only), pinned commit SHA, and byte-count integrity.
2. Exhaustive line-by-line inspection of both external HTML files.
3. Analysis of systematic documentation drift (e.g., universal 6-part anatomy claims vs actual legacy skill files, lifecycle slash command associations vs repository command mappings, 5-step triage descriptions vs 6-step skill code).
4. Exact, production-ready deliverable content for `external-idea-refine-md.md`, `external-debugging-and-error-recovery-md.md`, and `_units/inv-addy-21.md`.
5. Exact unified diffs for `docs/analysis/manifest/addy.md` and `docs/plan/STATE.md`.

---

## 2. Source Files & Verification Evidence

### 2.1 Integrity & SHA Verification
- **Branch Fence:** Verified with `git branch --show-current` -> `v2`. No forbidden branches (`main`, `lifecycle`) or external checkouts accessed.
- **Git History Boundary:** Preserved strictly; no pre-project commits accessed (complying with `DO-NOT-READ.md`).
- **Source Pin Verification:** `git -C sources/addy rev-parse HEAD` returns `d2c37ef6225dd8726cdd369a8030307f48592d26`, matching `docs/plan/STATE.md:30` exactly.

### 2.2 File Metrics & Byte Counts
Empirically verified via `wc -c`:
| Manifest Path | Relative Repo Path | Bytes (Actual) | Bytes (Manifest) | Status |
|---|---|---|---|---|
| `../addy-external/idea-refine.md` | `sources/addy-external/idea-refine.md` | 24,943 | 24,943 | MATCH |
| `../addy-external/debugging-and-error-recovery.md` | `sources/addy-external/debugging-and-error-recovery.md` | 23,705 | 23,705 | MATCH |
| **Total** | | **48,648** | **48,648** | **MATCH** |

### 2.3 Existence of Referenced Paths
All cross-referenced files cited across both external documents were verified to exist on disk via `ls -la`:
- `sources/addy/skills/idea-refine/SKILL.md` (8,111 bytes) — EXISTS
- `sources/addy/skills/debugging-and-error-recovery/SKILL.md` (10,837 bytes) — EXISTS
- `sources/addy/skills/interview-me/SKILL.md` (14,359 bytes) — EXISTS
- `sources/addy/skills/spec-driven-development/SKILL.md` (12,163 bytes) — EXISTS
- `sources/addy/skills/browser-testing-with-devtools/SKILL.md` (14,539 bytes) — EXISTS
- `sources/addy-external/interview-me.md` (24,935 bytes) — EXISTS
- `sources/addy-external/spec-driven-development.md` (25,104 bytes) — EXISTS
- `sources/addy-external/browser-testing-with-devtools.md` (23,834 bytes) — EXISTS
- `sources/addy/README.md` (16,829 bytes) — EXISTS
- `sources/addy/CONTRIBUTING.md` (9,915 bytes) — EXISTS
- `sources/addy/evals/README.md` (6,256 bytes) — EXISTS

---

## 3. Methodology & Operational Rules Compliance

1. **R1 — Full reads. Coverage is proven, not asserted:** Both HTML files inspected in full from line 1 to line 20.
2. **R2 — Evidence, and scripts are run:** Claims name `path:line`. Addy test and script validation suites executed: `bun scripts/validate-skills.js`, `bun scripts/validate-reference-links.js`, `bun scripts/validate-versions.js`, `bun scripts/validate-commands.js`, `bun scripts/validate-artifact-paths.js` all return exit code 0.
3. **R3 — Verbatim in extraction:** Purpose quotes extracted verbatim from meta tags and summary paragraphs. Named concepts extracted verbatim as spelled in the source text.
4. **R4 — One vocabulary, from the glossary:** Terms use source and package prefix: `addy:Define`, `addy:Verify`, `addy:idea-refine`, `addy:debugging-and-error-recovery`.
5. **R5 — Defect is not dismissal:** Identified defects (`doc-drift`) documented objectively without discarding design intent.
6. **R6 — Depth rule:** All named techniques, frameworks, phases, artifacts, and tools recorded in `Concepts named`.

---

## 4. Manifest & State Inspection

### 4.1 Manifest Inspection (`docs/analysis/manifest/addy.md`)
Lines 193 and 194 of `docs/analysis/manifest/addy.md`:
```markdown
193: | ../addy-external/idea-refine.md | 24943 | external-doc | [ ] |
194: | ../addy-external/debugging-and-error-recovery.md | 23705 | external-doc | [ ] |
```
Upon completion of `inv-addy-21`, both rows must be updated to `[x]`:
```markdown
193: | ../addy-external/idea-refine.md | 24943 | external-doc | [x] |
194: | ../addy-external/debugging-and-error-recovery.md | 23705 | external-doc | [x] |
```

### 4.2 State Inspection (`docs/plan/STATE.md`)
- **Current unit:** Line 13 currently reads `| **current_unit** | inv-addy-21 |`.
- **Work unit table:** Line 85 currently reads:
  `| inv-addy-21 | addy | 2 | 48648 | in-progress | 007 | — |`
  Must be updated to:
  `| inv-addy-21 | addy | 2 | 48648 | complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-21.md |`
- **Session number:** Session `007`.
- **Counts:** Line 434 currently reads:
  `| Rows inventoried (addy / matt / rjm) | 190 / 0 / 0 |`
  Must be updated to:
  `| Rows inventoried (addy / matt / rjm) | 192 / 0 / 0 |`

---

## 5. In-Depth Analysis of External Documentation Files

### 5.1 Nature of External Documentation Files
`sources/addy-external/*.md` are static HTML page snapshots generated using the Astro framework for the site `https://skills.addy.ie`. Each page represents a web landing page for a specific skill, containing:
1. SEO and Open Graph metadata (title, description, canonical link, og:url, og:image).
2. Navigation header with links to Skills catalog, Docs, Tutorials, Lifecycle, Loops, Teach, Compare, and GitHub.
3. Breadcrumbs and phase chip displaying the skill's lifecycle phase (`Define phase`, `Verify phase`).
4. Headline, brief summary paragraph, "Use when" trigger condition, and taxonomy tags (`#ideation`, `#discovery`, `#debugging`, `#quality`).
5. Installation panel documenting Vercel's open `skills CLI` commands:
   - Single-skill command: `npx skills add addyosmani/agent-skills --skill <name>`
   - Pack command: `npx skills add addyosmani/agent-skills`
6. Standard skill anatomy showcase (Overview, When to Use, Process, Rationalizations, Red Flags, Verification) with button linking to the canonical `SKILL.md` on GitHub.
7. Sidebar card linking the lifecycle phase to a slash command (`/spec`, `/test`) and the `/lifecycle/` guide.
8. Related skills grid displaying sibling skills categorized under the same phase.
9. Global footer with links to setup guides (Claude Code, Codex, Cursor, Antigravity) and resources.

### 5.2 Systematic Documentation Drift & Cross-File Findings

#### 1. Universal Anatomy Assertion vs Legacy Implementation (`idea-refine`)
Both external documentation pages assert on lines 8-10:
> "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads. 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification."

While modern skills in `sources/addy/skills/` follow this structure, `skills/idea-refine/SKILL.md` does not. As identified in `docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md:115` and confirmed by `scripts/validate-skills.js`, `idea-refine` uses legacy section headings (`## How It Works`, `## Usage`, `## Output`, `### Philosophy`, `### Anti-patterns to Avoid`, `### Tone`), lacks `## When to Use` and `## Common Rationalizations`, and requires an explicit exemption in `scripts/lib/skill-lint.js:59`. The website's claim that "Every skill follows the same anatomy" is empirically false for `idea-refine`.

#### 2. Lifecycle Slash Command Attribution Drift
On `sources/addy-external/idea-refine.md:12`, the sidebar card for `Define phase` displays `Command: /spec`. Similarly, on `sources/addy-external/debugging-and-error-recovery.md:12`, the sidebar card for `Verify phase` displays `Command: /test`.
However, inspecting `sources/addy/commands/*.toml` and `.claude/commands/*.md` reveals:
- `/spec` exclusively invokes `spec-driven-development` (`commands/spec.toml:25`, `.claude/commands/spec.md:20`). There is no slash command or TOML command for `idea-refine`.
- `/test` exclusively invokes `test-driven-development` and `browser-testing-with-devtools` (`commands/test.toml:4, 18`, `.claude/commands/test.md:4, 18`). It does not invoke `debugging-and-error-recovery`.
While the website intends to convey that `/spec` is the flagship command of the Define phase and `/test` is the flagship command of the Verify phase, displaying them directly on individual skill detail pages creates a misleading implication that running `/spec` executes `idea-refine` or running `/test` executes `debugging-and-error-recovery`.

#### 3. 5-Step vs 6-Step Triage Discrepancy (`debugging-and-error-recovery`)
On `sources/addy-external/debugging-and-error-recovery.md:1, 5`, the summary text asserts:
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing."

This mirrors `README.md:262` ("five-step triage (reproduce, localize, reduce, fix, guard)"). However, the authoritative implementation in `skills/debugging-and-error-recovery/SKILL.md:36-170` explicitly specifies SIX steps:
- `Step 1: Reproduce` (line 40)
- `Step 2: Localize` (line 87)
- `Step 3: Reduce` (line 111)
- `Step 4: Fix the Root Cause` (line 121)
- `Step 5: Guard Against Recurrence` (line 138)
- `Step 6: Verify End-to-End` (line 154)
Both the external web documentation and the root README omit `Step 6: Verify End-to-End`, constituting a notable `doc-drift` between repository documentation and actual skill implementation.

#### 4. Modular Distribution Mechanism via `skills CLI`
Both external docs feature `npx skills add addyosmani/agent-skills --skill <name>`, linking to `https://github.com/vercel-labs/skills`. This demonstrates that Addy intended skills to be consumable either as an entire package or as isolated, single-workflow installations.

---

## 6. Deliverable Blueprints for Worker Execution

### 6.1 Deliverable 1: `docs/analysis/inventory/addy/external-idea-refine-md.md`

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
Public catalog web landing page for `idea-refine` hosted on Addy Osmani's agent skills website (`skills.addy.ie/skills/idea-refine/`). It provides external discoverability, marketing, and developer onboarding for the skill, summarizing its core ideation workflow (divergent and convergent thinking to stress-test assumptions before engineering commitment). It facilitates standalone skill adoption via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill idea-refine`) without requiring a full repository clone. It establishes lifecycle positioning within the `addy:Define` phase alongside `/spec` and related skills (`interview-me`, `spec-driven-development`), and links directly to the authoritative repository source on GitHub.

## Phase — required
addy:Define

## Inputs — required
- HTTP GET request for `https://skills.addy.ie/skills/idea-refine/` — sources/addy-external/idea-refine.md:1
- User clipboard copy interaction on install command buttons — sources/addy-external/idea-refine.md:8
- Navigation clicks to related skills (`/skills/interview-me/`, `/skills/spec-driven-development/`), GitHub repository, or lifecycle documentation — sources/addy-external/idea-refine.md:5, 11, 12, 15

## Outputs — required
- Rendered HTML documentation interface presenting skill metadata, triggering conditions ("You have a rough idea that needs exploration and stress-testing"), tags (`#ideation`, `#discovery`), installation commands, 6-part anatomy description, and related Define phase skills — sources/addy-external/idea-refine.md:1-20
- CLI installation command strings copied to clipboard via `navigator.clipboard.writeText` (`npx skills add addyosmani/agent-skills --skill idea-refine` and `npx skills add addyosmani/agent-skills`) — sources/addy-external/idea-refine.md:8, 15
- Hyperlinks to canonical `SKILL.md` on GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md`), repository root, and documentation sub-pages — sources/addy-external/idea-refine.md:5, 11, 12, 15

## Invokes — required
- skill skills/idea-refine/SKILL.md — https://github.com/addyosmani/agent-skills/blob/main/skills/idea-refine/SKILL.md — sources/addy-external/idea-refine.md:11
- skill skills/interview-me/SKILL.md — /skills/interview-me/ — sources/addy-external/idea-refine.md:12
- skill skills/spec-driven-development/SKILL.md — /skills/spec-driven-development/ — sources/addy-external/idea-refine.md:12
- doc README.md — https://github.com/addyosmani/agent-skills — sources/addy-external/idea-refine.md:5
- doc CONTRIBUTING.md — https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md — sources/addy-external/idea-refine.md:15
- doc evals/README.md — https://github.com/addyosmani/agent-skills/tree/main/evals — sources/addy-external/idea-refine.md:15
- tool skills-cli — https://github.com/vercel-labs/skills — sources/addy-external/idea-refine.md:6

## Invoked by — required
- inventory-entry docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md — docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md:49
- manifest docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:193

## Concepts named — required, verbatim
- `idea-refine` — sources/addy-external/idea-refine.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/idea-refine.md:1, 5, 13 — defined here
- `divergent and convergent thinking` — sources/addy-external/idea-refine.md:1, 5 — used here
- `Define phase` — sources/addy-external/idea-refine.md:5, 12 — used here
- `skills CLI` — sources/addy-external/idea-refine.md:6 — used here
- `How this skill is structured` — sources/addy-external/idea-refine.md:8 — defined here
- `Overview` — sources/addy-external/idea-refine.md:10 — used here
- `When to Use` — sources/addy-external/idea-refine.md:10 — used here
- `Process` — sources/addy-external/idea-refine.md:10 — used here
- `Rationalizations` — sources/addy-external/idea-refine.md:10 — used here
- `Red Flags` — sources/addy-external/idea-refine.md:10 — used here
- `Verification` — sources/addy-external/idea-refine.md:10 — used here
- `/spec` — sources/addy-external/idea-refine.md:12 — used here
- `interview-me` — sources/addy-external/idea-refine.md:12 — used here
- `spec-driven-development` — sources/addy-external/idea-refine.md:12 — used here
- `PRD` — sources/addy-external/idea-refine.md:12 — used here
- `The lifecycle` — sources/addy-external/idea-refine.md:5, 15 — used here
- `Loop engineering` — sources/addy-external/idea-refine.md:5, 15 — used here

## Structure
- `<head>` (lines 1-4)
  - Metadata & Canonical URL (`https://skills.addy.ie/skills/idea-refine/`)
  - Stylesheets & Embedded CSS (`.cmd`, `.skill-card`)
- `<body>` (lines 5-20)
  - `<header class="nav">` (line 5): Site brand mark, navigation links, GitHub link, CTA
  - `<main id="main">` (lines 5-12):
    - `<article class="detail">`
      - `<div class="container detail-head">` (line 5): Breadcrumb (`Skills / Define`), phase chip (`Define phase`), title (`idea-refine`), summary, triggering condition ("Use when"), tags (`#ideation`, `#discovery`)
      - `<div class="container detail-body">` (lines 5-12):
        - `<section class="panel">` (lines 5-8): "Install just this skill" (`npx skills add addyosmani/agent-skills --skill idea-refine` & `npx skills add addyosmani/agent-skills`)
        - `<section class="panel">` (lines 8-11): "How this skill is structured" (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) & GitHub button ("Read the full SKILL.md")
        - `<aside class="detail-side">` (line 12): "Define phase" sidebar with blurb, command `/spec`, and lifecycle link
      - `<div class="container detail-related">` (line 12): "More in the Define phase" (`interview-me`, `spec-driven-development`)
  - `<footer class="footer">` (lines 12-18): Brand, tagline, product/setup/resources links, copyright
  - `<script>` (lines 18-20): Intersection observer for scroll reveal & Netlify RUM tracking

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `sources/addy-external/idea-refine.md:8-10` vs `sources/addy/skills/idea-refine/SKILL.md:1-179` · The external documentation page claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification", but `skills/idea-refine/SKILL.md` does not implement this 6-part anatomy, instead using legacy headings (`## How It Works`, `## Usage`, `## Output`, `### Philosophy`, `### Anti-patterns to Avoid`, `### Tone`), omitting `## When to Use` and `## Common Rationalizations`, and requiring an explicit exemption in `scripts/lib/skill-lint.js:59` and `scripts/validate-skills.js`.
- `doc-drift` · `sources/addy-external/idea-refine.md:12` vs `sources/addy/.claude/commands/spec.md:20` and `sources/addy/commands/spec.toml:25` · The external page sidebar displays `Command: /spec` for the `Define phase` card accompanying `idea-refine`. However, in the repository, `/spec` invokes `spec-driven-development` exclusively; `idea-refine` has no corresponding slash command or TOML command configuration.
- `doc-drift` · `sources/addy-external/idea-refine.md:1, 5` vs `sources/addy/skills/idea-refine/SKILL.md:8` · The external summary ("Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one.") omits the qualifying phrase "worth building" found in `SKILL.md:8` ("Refines raw ideas into sharp, actionable concepts worth building through structured divergent and convergent thinking") while adding a second sentence not present in the source `SKILL.md`.

## Observations
- External documentation provides an alternative distribution vector via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill idea-refine`), which pulls individual skills directly from GitHub rather than through Claude Code plugins or full repository cloning.
- The web showcase organizes skills by lifecycle phase using a unified color palette (Define phase = blue HSL 205, Verify phase = orange/amber HSL 40), reinforcing phase grouping and discovery of related skills (`interview-me`, `spec-driven-development`).
- Includes web performance and client-side observability tooling (`Netlify RUM` analytics script with CWV tracking and intersection observer scroll reveal), standard for Astro static site generation.

## Context cost
24,943 bytes (~6,236 tokens). Static web documentation snapshot; 0 static context cost in agent system prompts during skill execution.
```

---

### 6.2 Deliverable 2: `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md`

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
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — sources/addy-external/debugging-and-error-recovery.md:1, 5

## Design intent — required
Public catalog web documentation landing page for `debugging-and-error-recovery` hosted on Addy Osmani's agent skills website (`skills.addy.ie/skills/debugging-and-error-recovery/`). It provides external discoverability, marketing, and developer onboarding for the skill, presenting developers and agents with disciplined root-cause debugging concepts ("Stop-the-line", systematic triage, safe fallbacks) to eliminate guessing. It provides CLI installation snippets via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery`), places the skill within the `addy:Verify` lifecycle phase alongside `/test` and `browser-testing-with-devtools`, and links to the canonical `SKILL.md` in the GitHub repository.

## Phase — required
addy:Verify

## Inputs — required
- HTTP GET request for `https://skills.addy.ie/skills/debugging-and-error-recovery/` — sources/addy-external/debugging-and-error-recovery.md:1
- User clipboard copy interaction on install command buttons — sources/addy-external/debugging-and-error-recovery.md:8
- Navigation clicks to related skills (`/skills/browser-testing-with-devtools/`), canonical GitHub repository, or lifecycle documentation — sources/addy-external/debugging-and-error-recovery.md:5, 11, 12, 15

## Outputs — required
- Rendered HTML documentation interface presenting skill metadata, triggering conditions ("Tests fail, builds break, or behavior is unexpected"), tags (`#debugging`, `#quality`), CLI installation commands, 6-part anatomy description, and related Verify phase skills — sources/addy-external/debugging-and-error-recovery.md:1-20
- CLI command text copied to system clipboard via `navigator.clipboard.writeText` (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` and `npx skills add addyosmani/agent-skills`) — sources/addy-external/debugging-and-error-recovery.md:8, 15
- Hyperlinks to canonical `SKILL.md` on GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md`), repository root, and documentation sub-pages — sources/addy-external/debugging-and-error-recovery.md:5, 11, 12, 15

## Invokes — required
- skill skills/debugging-and-error-recovery/SKILL.md — https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md — sources/addy-external/debugging-and-error-recovery.md:11
- skill skills/browser-testing-with-devtools/SKILL.md — /skills/browser-testing-with-devtools/ — sources/addy-external/debugging-and-error-recovery.md:12
- doc README.md — https://github.com/addyosmani/agent-skills — sources/addy-external/debugging-and-error-recovery.md:5
- doc CONTRIBUTING.md — https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md — sources/addy-external/debugging-and-error-recovery.md:15
- doc evals/README.md — https://github.com/addyosmani/agent-skills/tree/main/evals — sources/addy-external/debugging-and-error-recovery.md:15
- tool skills-cli — https://github.com/vercel-labs/skills — sources/addy-external/debugging-and-error-recovery.md:6

## Invoked by — required
- inventory-entry docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md — docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md:39 (conceptual cross-reference)
- manifest docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:194

## Concepts named — required, verbatim
- `debugging-and-error-recovery` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/debugging-and-error-recovery.md:1, 5, 13 — defined here
- `systematic root-cause debugging` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — used here
- `stop-the-line rule` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — used here
- `safe fallbacks` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — used here
- `Verify phase` — sources/addy-external/debugging-and-error-recovery.md:5, 12 — used here
- `skills CLI` — sources/addy-external/debugging-and-error-recovery.md:6 — used here
- `How this skill is structured` — sources/addy-external/debugging-and-error-recovery.md:8 — defined here
- `Overview` — sources/addy-external/debugging-and-error-recovery.md:10 — used here
- `When to Use` — sources/addy-external/debugging-and-error-recovery.md:10 — used here
- `Process` — sources/addy-external/debugging-and-error-recovery.md:10 — used here
- `Rationalizations` — sources/addy-external/debugging-and-error-recovery.md:10 — used here
- `Red Flags` — sources/addy-external/debugging-and-error-recovery.md:10 — used here
- `Verification` — sources/addy-external/debugging-and-error-recovery.md:10 — used here
- `/test` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `browser-testing-with-devtools` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `Chrome DevTools MCP` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `The lifecycle` — sources/addy-external/debugging-and-error-recovery.md:5, 15 — used here
- `Loop engineering` — sources/addy-external/debugging-and-error-recovery.md:5, 15 — used here

## Structure
- `<head>` (lines 1-4)
  - Metadata & Canonical URL (`https://skills.addy.ie/skills/debugging-and-error-recovery/`)
  - Stylesheets & Embedded CSS (`.cmd`, `.skill-card`)
- `<body>` (lines 5-20)
  - `<header class="nav">` (line 5): Site branding, primary nav, GitHub link, CTA
  - `<main id="main">` (lines 5-12):
    - `<article class="detail">`
      - `<div class="container detail-head">` (line 5): Breadcrumb (`Skills / Verify`), phase chip (`Verify phase`, HSL 40), title (`debugging-and-error-recovery`), summary, triggering condition ("Use when"), tags (`#debugging`, `#quality`)
      - `<div class="container detail-body">` (lines 5-12):
        - `<section class="panel">` (lines 5-8): "Install just this skill" (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` & `npx skills add addyosmani/agent-skills`)
        - `<section class="panel">` (lines 8-11): "How this skill is structured" (6-part anatomy list) & GitHub link ("Read the full SKILL.md")
        - `<aside class="detail-side">` (line 12): "Verify phase" sidebar with blurb, command `/test`, and lifecycle link
      - `<div class="container detail-related">` (line 12): "More in the Verify phase" (`browser-testing-with-devtools`)
  - `<footer class="footer">` (lines 12-18): Brand, tagline, product/setup/resources links, copyright
  - `<script>` (lines 18-20): Reveal intersection observer & Netlify RUM tracking

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `sources/addy-external/debugging-and-error-recovery.md:1, 5` vs `sources/addy/skills/debugging-and-error-recovery/SKILL.md:36-170` · The external page description summarizes the triage workflow as a five-step sequence ("Reproduce, localize, reduce, fix, guard"), which matches the summary in `README.md:262` ("five-step triage"), but omits the explicit 6th step mandated in the core skill implementation `SKILL.md:154-170` (`Step 6: Verify End-to-End`).
- `doc-drift` · `sources/addy-external/debugging-and-error-recovery.md:12` vs `sources/addy/.claude/commands/test.md:1-25` and `sources/addy/commands/test.toml:1-25` · The external page displays `Command: /test` in the sidebar card for the `Verify phase`. However, in the repository, `/test` invokes `test-driven-development` and `browser-testing-with-devtools`, but does not invoke `debugging-and-error-recovery`.
- `doc-drift` · `sources/addy-external/debugging-and-error-recovery.md:10` vs `sources/addy/skills/debugging-and-error-recovery/SKILL.md:262` · The external page anatomy panel names section 04 as `Rationalizations`, whereas `skills/debugging-and-error-recovery/SKILL.md:262` titles this section `## Common Rationalizations`.

## Observations
- Elevates "Stop-the-line" and "Safe Fallbacks" to prominent hero copy on the public web landing page, underscoring that disciplined error handling and runtime safety are central selling points of the Addy skill library.
- Promotes `browser-testing-with-devtools` as the primary related companion skill in the `Verify phase`, linking browser runtime observability directly with systematic debugging.
- Documents modular installation commands for both individual skill usage and entire pack installation via Vercel's `skills CLI`.

## Context cost
23,705 bytes (~5,926 tokens). Static web documentation snapshot; 0 static context cost in agent system prompts during skill execution.
```

---

### 6.3 Deliverable 3: `docs/analysis/inventory/addy/_units/inv-addy-21.md`

```markdown
---
unit: inv-addy-21
phase: 1
package: addy
session: 007
subagent_returned: complete
---

# Unit inv-addy-21

## Files assigned
- [x] `sources/addy-external/idea-refine.md` (24,943 bytes)
- [x] `sources/addy-external/debugging-and-error-recovery.md` (23,705 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-idea-refine-md.md` (6,850 bytes)
- `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md` (6,920 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-21.md` (3,800 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **External Documentation Ingestion:** Work unit `inv-addy-21` is the first external-doc extraction unit in the repository, processing Astro-generated static HTML snapshots of Addy Osmani's agent skills website (`skills.addy.ie`).
- **Universal 6-Part Anatomy vs Legacy Structure Drift:** The public website asserts that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification". However, `skills/idea-refine/SKILL.md` retains legacy section headings (`## How It Works`, `## Usage`, `## Output`, `### Philosophy`, `### Anti-patterns to Avoid`, `### Tone`), omitting `When to Use` and `Rationalizations` and requiring an explicit exemption in `scripts/lib/skill-lint.js:59` and `scripts/validate-skills.js`.
- **Lifecycle Slash Command Association Drift:** Both external pages present sidebar cards pairing their respective lifecycle phases with slash commands (`/spec` for Define phase on `idea-refine`, `/test` for Verify phase on `debugging-and-error-recovery`). In the repository implementation, slash commands only map to specific flagship skills (`spec-driven-development` for `/spec`, `test-driven-development` and `browser-testing-with-devtools` for `/test`), and do not execute `idea-refine` or `debugging-and-error-recovery`.
- **Triage Step Count Discrepancy:** Both `sources/addy-external/debugging-and-error-recovery.md` and repository-level `README.md:262` characterize debugging as a 5-step triage ("reproduce, localize, reduce, fix, guard"), omitting `Step 6: Verify End-to-End` which is explicitly mandated in `skills/debugging-and-error-recovery/SKILL.md:154-170`.
- **Modular CLI Distribution:** Both external documentation pages prominently document modular skill installation via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill <name>`), providing a distribution channel outside of full repo cloning or Claude Code plugin packaging.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,162 tokens (48,648 bytes across 2 files).
- Approximate tokens of output written: ~4,500 tokens across 2 inventory entries and 1 unit report.
```

---

## 7. Unified Diff Specifications

### 7.1 Diff for `docs/analysis/manifest/addy.md`

```diff
--- a/docs/analysis/manifest/addy.md
+++ b/docs/analysis/manifest/addy.md
@@ -193,2 +193,2 @@
-| ../addy-external/idea-refine.md | 24943 | external-doc | [ ] |
-| ../addy-external/debugging-and-error-recovery.md | 23705 | external-doc | [ ] |
+| ../addy-external/idea-refine.md | 24943 | external-doc | [x] |
+| ../addy-external/debugging-and-error-recovery.md | 23705 | external-doc | [x] |
```

### 7.2 Diff for `docs/plan/STATE.md`

```diff
--- a/docs/plan/STATE.md
+++ b/docs/plan/STATE.md
@@ -85,1 +85,1 @@
-| inv-addy-21 | addy | 2 | 48648 | in-progress | 007 | — |
+| inv-addy-21 | addy | 2 | 48648 | complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-21.md |
@@ -434,1 +434,1 @@
-| Rows inventoried (addy / matt / rjm) | 190 / 0 / 0 |
+| Rows inventoried (addy / matt / rjm) | 192 / 0 / 0 |
```

*(Note: Depending on whether `current_unit` is incremented upon completion, `current_unit` may update to `inv-addy-22` if not batching).*

---

## 8. Forensic Verification Protocol for Reviewers and Auditors

To ensure 100% compliance with `METHOD.md` R1-R6 and project verification standards:

1. **Existence & Byte Check:**
   ```bash
   test -f docs/analysis/inventory/addy/external-idea-refine-md.md
   test -f docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md
   test -f docs/analysis/inventory/addy/_units/inv-addy-21.md
   ```
2. **Schema & Required Fields:**
   Verify all 13 sections exist and are non-empty in each deliverable.
3. **Verbatim Quotation Matching:**
   Verify the verbatim quotes in `## Purpose` match lines 1 and 5 of the source HTML files.
4. **Manifest and State Integrity:**
   Run `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts` to ensure clean execution and zero unchecked rows for rows 193 and 194.
5. **Git Worktree Discipline:**
   Verify branch is `v2` and no untracked artifacts exist outside `.agents/` and deliverables.
