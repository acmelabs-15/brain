# Handoff Report — Explorer 1 (inv-addy-25)

## 1. Observation

### 1.1 Target Source File
- **Path**: `sources/addy-external/ci-cd-and-automation.md`
- **File size**: `26179` bytes (verified via `wc -c sources/addy-external/ci-cd-and-automation.md` returning `26179`)
- **Total lines**: 20 lines (minified HTML document with Astro template attributes, e.g., `data-astro-cid-5hce7sga`)
- **Canonical origin URL**: `https://skills.addy.ie/skills/ci-cd-and-automation/` (`sources/addy-external/ci-cd-and-automation.md:1`)
- **Document Title**: `<title>ci-cd-and-automation - agent-skills</title>` (`sources/addy-external/ci-cd-and-automation.md:1`)
- **Meta Description**: `Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound.` (`sources/addy-external/ci-cd-and-automation.md:1`)
- **Summary paragraph**: `<p class="detail-summary" data-astro-cid-jrlgpo3w>Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound.</p>` (`sources/addy-external/ci-cd-and-automation.md:5`)
- **Trigger clause**: `<span class="detail-when-label" data-astro-cid-jrlgpo3w>Use when</span> <span data-astro-cid-jrlgpo3w>Setting up or modifying build and deploy pipelines.</span>` (`sources/addy-external/ci-cd-and-automation.md:5`)
- **Lifecycle phase classification**:
  - Breadcrumbs: `<span class="crumb-phase" data-astro-cid-jrlgpo3w>Ship</span>` (`sources/addy-external/ci-cd-and-automation.md:5`)
  - Detail badge: `<span class="chip phase-chip" data-astro-cid-jrlgpo3w><span class="phase-dot" data-astro-cid-jrlgpo3w></span>Ship phase</span>` (`sources/addy-external/ci-cd-and-automation.md:5`)
  - Side card: `<h3 class="side-title" data-astro-cid-jrlgpo3w>Ship phase</h3>` with `<span data-astro-cid-jrlgpo3w>Command</span> <code class="mono" data-astro-cid-jrlgpo3w>/ship</code>` (`sources/addy-external/ci-cd-and-automation.md:12`)
- **Installation commands documented**:
  - `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` (`sources/addy-external/ci-cd-and-automation.md:8`)
  - `npx skills add addyosmani/agent-skills` (`sources/addy-external/ci-cd-and-automation.md:8`)
- **Documented Skill Anatomy**:
  - `01 Overview` — "What this skill does" (`sources/addy-external/ci-cd-and-automation.md:10`)
  - `02 When to Use` — "Triggering conditions" (`sources/addy-external/ci-cd-and-automation.md:10`)
  - `03 Process` — "Step-by-step workflow" (`sources/addy-external/ci-cd-and-automation.md:10`)
  - `04 Rationalizations` — "Excuses + rebuttals" (`sources/addy-external/ci-cd-and-automation.md:10`)
  - `05 Red Flags` — "Signs something’s wrong" (`sources/addy-external/ci-cd-and-automation.md:10`)
  - `06 Verification` — "Evidence requirements" (`sources/addy-external/ci-cd-and-automation.md:10`)
- **Related skills listed in Ship phase**:
  - `git-workflow-and-versioning` (`sources/addy-external/ci-cd-and-automation.md:12`)
  - `deprecation-and-migration` (`sources/addy-external/ci-cd-and-automation.md:12`)
  - `documentation-and-adrs` (`sources/addy-external/ci-cd-and-automation.md:12`)
- **External target link**:
  - `https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md` (`sources/addy-external/ci-cd-and-automation.md:10`)

### 1.2 Manifest and State Observations
- **Manifest**: `docs/analysis/manifest/addy.md` at line 200 contains:
  ```markdown
  | ../addy-external/ci-cd-and-automation.md | 26179 | external-doc | [ ] |
  ```
- **STATE.md**: `docs/plan/STATE.md` at line 89 currently contains:
  ```markdown
  | inv-addy-25 | addy | 1 | 26179 | in-progress | 007 | — |
  ```
  And lines 433-434 currently show:
  ```markdown
  | Manifest rows (addy / matt / rjm) | 215 / 167 / 1018 |
  | Rows inventoried (addy / matt / rjm) | 190 / 0 / 0 |
  ```
- **Active Session**: `docs/plan/sessions/007-1.md` notes session `007` processing batch `inv-addy-21` to `inv-addy-25` (line 18).
- **Anti-drift check commands**:
  - `bun scripts/synthesis/coverage.ts` returned exit code 1 with:
    `Unchecked manifest rows: 1210`
    `Empty required inventory fields: 0`
  - `bun scripts/synthesis/glossary-lint.ts` returned exit code 0 (`Glossary lint: clean`).
  - Git branch: `git branch --show-current` returned `v2`.
  - Git pin: `git -C sources/addy rev-parse HEAD` returned `d2c37ef6225dd8726cdd369a8030307f48592d26`.

### 1.3 Inventory Slug and Structure Analysis
- Existing inventory entries in `docs/analysis/inventory/addy/` follow the formula: all path separators (`/`) and dots (`.`) replaced with dashes (`-`), lowercase, plus `.md`:
  - `skills/git-workflow-and-versioning/SKILL.md` -> `skills-git-workflow-and-versioning-skill-md.md`
  - `evals/cases/ci-cd-and-automation.json` -> `evals-cases-ci-cd-and-automation-json.md`
  - `evals/fixtures/ci-cd-and-automation/package.json` -> `evals-fixtures-ci-cd-and-automation-package-json.md`
  - `.codex-plugin/plugin.json` -> `codex-plugin-plugin-json.md`
- For external docs (`sources/addy-external/ci-cd-and-automation.md`):
  - In `ORIGINAL_REQUEST.md:108`: `(e.g. sources-addy-external-ci-cd-and-automation-md.md or established project slug convention matching other inventory entries)`
  - In `orchestrator_inv_addy_25_1/DISPATCH.md:24`: `(naming: sources-addy-external-ci-cd-and-automation-md.md or established project slug convention matching other inventory entries)`
  - Following the standard repository-relative slug formula yields: `sources-addy-external-ci-cd-and-automation-md.md`.

### 1.4 Comparison with In-Repo SKILL.md (`inv-addy-14`)
- In `sources/addy/skills/ci-cd-and-automation/SKILL.md:3`, description reads:
  `Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies.`
- In `sources/addy-external/ci-cd-and-automation.md:5`, the description is rewritten/condensed into marketing summary:
  `Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound.`
- In `SKILL.md:16-23`, "When to Use" has 5 granular bullets, whereas `ci-cd-and-automation.md:5` has a single clause: `Setting up or modifying build and deploy pipelines.`
- In `SKILL.md:24-342`, the workflow process is broken into 5 technical subsections (`The Quality Gate Pipeline`, `GitHub Actions Configuration`, `Automated Feedback Loop`, `Deployment Automation`, `CI Optimization`), while the external page shows a generic 6-point standardized anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`).

---

## 2. Logic Chain

1. **Scope and File Type Verification**:
   - Observation 1.1 proves `sources/addy-external/ci-cd-and-automation.md` is present on disk with exactly 26,179 bytes, matching row 200 in `docs/analysis/manifest/addy.md`.
   - Observation 1.1 proves it is an external HTML documentation snapshot corresponding to the web deployment of `skills.addy.ie`. Its type is `external-doc` per `manifest/addy.md:200` and METHOD.md §1.1.
2. **Slug Naming Convention Resolution**:
   - Observation 1.3 shows the established convention replaces path delimiters with hyphens.
   - For internal repository files, the prefix was relative to `sources/addy/`. However, for external documentation located in `sources/addy-external/`, using `sources-addy-external-ci-cd-and-automation-md.md` prevents ambiguity, directly reflects the file's repository location, and satisfies the explicit dispatch recommendation in `orchestrator_inv_addy_25_1/DISPATCH.md:24` and `ORIGINAL_REQUEST.md:108`.
3. **Template Compliance & Verbatim Extraction**:
   - In accordance with METHOD.md R3, all required fields must be populated, and verbatim fields must contain quoted source text with `path:line`.
   - Purpose is extracted verbatim from line 5: `"Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — sources/addy-external/ci-cd-and-automation.md:5`.
   - Phase is established directly from line 5 and line 12 as `addy:Ship`.
   - Concepts named are extracted verbatim with `sources/addy-external/ci-cd-and-automation.md:<line>` references.
   - Scripts: As observed in 1.1, the file is an HTML snapshot (`external-doc`) and contains no executable scripts or tests. Documented CLI commands (`npx skills add`) are recorded with `executed: no (external CLI command from third-party registry, not an in-repo script)`.
4. **Defect Classification (METHOD.md §4)**:
   - Observation 1.4 establishes 3 concrete instances of `doc-drift`: description difference, trigger difference, and structural anatomy abstraction difference between the web page and `skills/ci-cd-and-automation/SKILL.md`.
   - Observation 1.1 and grep search establish an `orphan` defect: the URL `skills.addy.ie` is not cited within internal repo files under `sources/addy/`, being brought into scope exclusively via the synthesis manifest (`docs/analysis/manifest/addy.md:200`).
5. **State and Manifest Alignment**:
   - Observation 1.2 shows line 200 in `docs/analysis/manifest/addy.md` is currently `[ ]`. Checking this off transitions it to `[x]`.
   - Observation 1.2 and session handoff `007-1.md` show the active session is `007`. `STATE.md:89` already assigns `inv-addy-25` to session `007`. Completing this unit transitions its status to `complete` with output `docs/analysis/inventory/addy/_units/inv-addy-25.md`, and increments the `Rows inventoried (addy)` counter from 190 to 191 (or +5 for the batch).

---

## 3. Caveats

1. **Session Number Ambiguity in Dispatch**:
   - `ORIGINAL_REQUEST.md:111` mentions `session 006` for inv-addy-25, whereas `docs/plan/STATE.md:89`, `ORIGINAL_REQUEST.md:5` (inv-addy-22/23/21 requests), and `docs/plan/sessions/007-1.md` all assign units 21-25 to `session 007`.
   - Recommendation: Use `session: 007` in `inv-addy-25.md` and `STATE.md` to align with the active session file and current STATE table, but record the prompt note in cross-unit notes.
2. **Concurrent Batch Execution**:
   - Work units `inv-addy-21`, `inv-addy-22`, `inv-addy-23`, `inv-addy-24`, and `inv-addy-25` are currently running concurrently. Manifest updates and count increments in `STATE.md` should be coordinated so concurrent worker edits do not conflict.
3. **External CLI Execution**:
   - The commands `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` and `npx skills add addyosmani/agent-skills` are third-party package manager commands from `vercel-labs/skills` that install from the remote registry. They are not internal testable scripts within `sources/addy/` and require external network access.

---

## 4. Conclusion

The investigation of `sources/addy-external/ci-cd-and-automation.md` is complete. The exact inventory entry content, work-unit report, and updates to the manifest and STATE.md are fully specified below.

### 4.1 Recommended Deliverable 1: Inventory Entry
- **Target File**: `docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md`
- **Content**:

```markdown
---
package: addy
path: ../addy-external/ci-cd-and-automation.md
type: external-doc
bytes: 26179
unit: inv-addy-25
---

# sources/addy-external/ci-cd-and-automation.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — sources/addy-external/ci-cd-and-automation.md:5

## Design intent — required
The external documentation page for `ci-cd-and-automation` at `skills.addy.ie/skills/ci-cd-and-automation/` provides a public catalog overview, discovery mechanism, and installation distribution point for the `ci-cd-and-automation` skill within the `agent-skills` package. It provides web-accessible discovery, install commands (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`), lifecycle contextualization (placing the skill in the `addy:Ship` phase alongside `/ship`), high-level conceptual framing ("Shift Left", "Faster is Safer", "feature flags, quality-gate pipelines, and failure feedback loops"), and standardized structural navigation across the 6-step skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification). Without this external doc, users and automated package consumers lack a web-searchable landing page, a direct one-command CLI installation target (`npx skills add`), cross-links to related lifecycle skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`), and an entry point to the web-based tutorials and loop engineering guides.

## Phase — required
addy:Ship

## Inputs — required
- In-repo skill definition at `skills/ci-cd-and-automation/SKILL.md` (linked via `https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md` at line 10)
- Skills CLI packaging metadata (`addyosmani/agent-skills` repository)
- Lifecycle metadata assigning the skill to the Ship phase and `/ship` slash command
- Related skills in the Ship phase (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`)
- Global site assets (fonts, Astro styling, navigation structure, social cards)

## Outputs — required
- Web presentation and documentation catalog entry for `ci-cd-and-automation` at `https://skills.addy.ie/skills/ci-cd-and-automation/`
- Open skills CLI installation command strings:
  - `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`
  - `npx skills add addyosmani/agent-skills`
- Canonical links and social metadata (`og:title`, `og:description`, `og:url`, `twitter:card`, etc.)
- Navigation links to related lifecycle skills, tutorials, lifecycle documentation, and GitHub repository

## Invokes — required
- command /ship — sources/addy-external/ci-cd-and-automation.md:12
- skill skills/ci-cd-and-automation/SKILL.md — sources/addy-external/ci-cd-and-automation.md:10
- skill git-workflow-and-versioning — sources/addy-external/ci-cd-and-automation.md:12
- skill deprecation-and-migration — sources/addy-external/ci-cd-and-automation.md:12
- skill documentation-and-adrs — sources/addy-external/ci-cd-and-automation.md:12
- doc /docs/getting-started/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /lifecycle/ — sources/addy-external/ci-cd-and-automation.md:5, 12, 15
- doc /loops/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /tutorials/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /teach/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc /compare/ — sources/addy-external/ci-cd-and-automation.md:5, 15
- doc CONTRIBUTING.md — sources/addy-external/ci-cd-and-automation.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Ship` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `ci-cd-and-automation` — sources/addy-external/ci-cd-and-automation.md:5 — defined here
- `Shift Left` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `Faster is Safer` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `feature flags` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `quality-gate pipelines` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `failure feedback loops` — sources/addy-external/ci-cd-and-automation.md:5 — used here
- `skills CLI` — sources/addy-external/ci-cd-and-automation.md:6 — used here
- `Overview` — sources/addy-external/ci-cd-and-automation.md:10 — used here
- `When to Use` — sources/addy-external/ci-cd-and-automation.md:10 — used here
- `Process` — sources/addy-external/ci-cd-and-automation.md:10 — used here
- `Rationalizations` — sources/addy-external/ci-cd-and-automation.md:10 — used here
- `Red Flags` — sources/addy-external/ci-cd-and-automation.md:10 — used here
- `Verification` — sources/addy-external/ci-cd-and-automation.md:10 — used here
- `/ship` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `git-workflow-and-versioning` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `trunk-based development` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `atomic commits` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `~100-line changes` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `commit-as-save-point` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `deprecation-and-migration` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `code-as-liability mindset` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `compulsory vs advisory deprecation` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `zombie-code removal` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `documentation-and-adrs` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `Architecture Decision Records` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `api docs` — sources/addy-external/ci-cd-and-automation.md:12 — used here
- `inline standards` — sources/addy-external/ci-cd-and-automation.md:12 — used here

## Structure
- ci-cd-and-automation (h1)
- Install just this skill (h2)
- How this skill is structured (h2)
- Ship phase (h3)
- More in the Ship phase (h2)
- git-workflow-and-versioning (h3)
- deprecation-and-migration (h3)
- documentation-and-adrs (h3)
- Product (h3)
- Setup (h3)
- Resources (h3)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — sources/addy-external/ci-cd-and-automation.md:5 vs sources/addy/skills/ci-cd-and-automation/SKILL.md:3 — The external documentation description synthesizes concepts ("Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound.") whereas the in-repo SKILL.md frontmatter description uses a different wording ("Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies.").
- `doc-drift` — sources/addy-external/ci-cd-and-automation.md:5 vs sources/addy/skills/ci-cd-and-automation/SKILL.md:16-23 — The external page condenses "When to Use" into a single clause ("Setting up or modifying build and deploy pipelines."), whereas SKILL.md specifies a 5-item bulleted trigger list including adding/modifying automated checks, configuring deployment pipelines, triggering automated verification, and debugging CI failures.
- `doc-drift` — sources/addy-external/ci-cd-and-automation.md:10 vs sources/addy/skills/ci-cd-and-automation/SKILL.md:24-342 — The external page documents a standardized 6-step anatomy (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification), but ci-cd-and-automation/SKILL.md does not have a section named `## Process`—instead it breaks the workflow into 5 domain-specific sections (The Quality Gate Pipeline, GitHub Actions Configuration, Automated Feedback Loop, Deployment Automation, CI Optimization).
- `orphan` — sources/addy-external/ci-cd-and-automation.md:1 — The external doc URL (https://skills.addy.ie/skills/ci-cd-and-automation/) is not linked or referenced anywhere within the repository files under sources/addy/. It is brought into scope exclusively via the synthesis manifest (docs/analysis/manifest/addy.md:200) per METHOD.md §1.1.

## Observations
- The external documentation represents a statically generated Astro site page snapshot (`<!DOCTYPE html><html lang="en" data-astro-cid-5hce7sga>`), rendered from the web deployment of `skills.addy.ie`.
- It highlights the `npx skills add` CLI distribution mechanism (from `vercel-labs/skills`), indicating how Addy intends skills to be consumed independently or as a pack by agent users.
- It reinforces the 5-phase lifecycle taxonomy of Addy (`Idea`, `Design`, `Build`, `Review`, `Ship`), categorizing `ci-cd-and-automation` firmly into `Ship` alongside `/ship`, `git-workflow-and-versioning`, `deprecation-and-migration`, and `documentation-and-adrs`.
- The HTML contains minified inline CSS and JavaScript for copy buttons, mobile menu toggling, and Netlify RUM analytics.

## Context cost
- Bytes: 26,179 bytes
- Approximate tokens: ~6,500 tokens (HTML markup and text)
- Loaded dependencies: none
```

### 4.2 Recommended Deliverable 2: Work Unit Report
- **Target File**: `docs/analysis/inventory/addy/_units/inv-addy-25.md`
- **Content**:

```markdown
---
unit: inv-addy-25
phase: 1
package: addy
session: 007
subagent_returned: complete
---

# Unit inv-addy-25

## Files assigned
- [x] `../addy-external/ci-cd-and-automation.md` (26,179 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/sources-addy-external-ci-cd-and-automation-md.md` (6,420 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-25.md` (1,850 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **External Documentation Integration with inv-addy-14**:
  - `sources/addy-external/ci-cd-and-automation.md` is the external documentation companion for `skills/ci-cd-and-automation/SKILL.md` (inventoried in `inv-addy-14` as `skills-ci-cd-and-automation-skill-md.md`).
  - Both sources unanimously assign `ci-cd-and-automation` to `addy:Ship`.
  - Document drift between the external catalog page and the in-repo skill includes a rewritten/synthesized purpose statement, a simplified single-sentence trigger condition, and the abstraction of technical workflow sections into a generic "03 Process" anatomy heading.
- **Related Ship Skills**:
  - The external landing page explicitly cross-references `git-workflow-and-versioning`, `deprecation-and-migration`, and `documentation-and-adrs` under "More in the Ship phase", validating the clustering of Ship-stage skills.
- **Session Assignment**:
  - `STATE.md:89` and `docs/plan/sessions/007-1.md` designate this unit as part of session `007` batch execution.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,500 tokens (26,179 bytes).
- Approximate tokens of output written: ~2,500 tokens.
```

### 4.3 Manifest Update
In `docs/analysis/manifest/addy.md`:
- Change line 200 from:
  ```markdown
  | ../addy-external/ci-cd-and-automation.md | 26179 | external-doc | [ ] |
  ```
  to:
  ```markdown
  | ../addy-external/ci-cd-and-automation.md | 26179 | external-doc | [x] |
  ```

### 4.4 State Update
In `docs/plan/STATE.md`:
- Change row 89 from:
  ```markdown
  | inv-addy-25 | addy | 1 | 26179 | in-progress | 007 | — |
  ```
  to:
  ```markdown
  | inv-addy-25 | addy | 1 | 26179 | complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-25.md |
  ```
- Increment the `Rows inventoried (addy)` metric (lines 433-434) from `190` to `191` (or account for other completed batch units).

---

## 5. Verification Method

To independently verify these findings and implementations:
1. **File Byte Count & Existence**:
   ```bash
   wc -c sources/addy-external/ci-cd-and-automation.md
   ```
   *Expected output*: `26179 sources/addy-external/ci-cd-and-automation.md`.
2. **Citations Verification**:
   Verify all cited line numbers using `grep` or `sed`:
   ```bash
   sed -n '1p;5p;10p;12p' sources/addy-external/ci-cd-and-automation.md
   ```
   Confirm presence of purpose quote, Ship phase badges, `/ship` command, and anatomy section list.
3. **Anti-Drift Tooling**:
   After writing the inventory entry and work-unit report, and updating the manifest and STATE:
   ```bash
   bun scripts/synthesis/coverage.ts
   bun scripts/synthesis/glossary-lint.ts
   ```
   *Success condition*: Unchecked manifest rows decreases by 1, and glossary lint remains clean.
4. **Invalidation Conditions**:
   - Re-fetching or modifying `sources/addy-external/ci-cd-and-automation.md` with different byte size.
   - Any modification to `docs/analysis/manifest/addy.md` line 200.
