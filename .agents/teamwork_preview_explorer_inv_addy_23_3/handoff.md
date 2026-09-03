# Handoff Report — Explorer 3: Comparative Cross-File Analysis & Verification Spec (inv-addy-23)

## 1. Observation

Direct, verbatim observations across the assigned external snapshot files, internal repository skills, evaluation suites, manifests, and project state:

### 1.1 File Properties & Dimensions
- `sources/addy-external/planning-and-task-breakdown.md`: 22,310 bytes, 20 lines (single-line minified markup blocks from Astro static site generation).
- `sources/addy/skills/planning-and-task-breakdown/SKILL.md`: 10,564 bytes, 258 lines.
- `sources/addy/evals/cases/planning-and-task-breakdown.json`: 1,233 bytes, 45 lines.
- `sources/addy/evals/fixtures/planning-and-task-breakdown/notifications-spec.md`: 854 bytes, 19 lines.
- `sources/addy-external/incremental-implementation.md`: 26,461 bytes, 20 lines (Astro static HTML export).
- `sources/addy/skills/incremental-implementation/SKILL.md`: 9,507 bytes, 250 lines.
- `sources/addy/evals/cases/incremental-implementation.json`: 1,942 bytes, 58 lines.
- `sources/addy/evals/fixtures/incremental-implementation/reports.js`: 145 bytes, 8 lines.
- `sources/addy/evals/fixtures/incremental-implementation/reports.test.js`: 325 bytes, 13 lines.
- `sources/addy/evals/fixtures/incremental-implementation/tasks/plan.md`: 311 bytes, 9 lines.
- `sources/addy/evals/fixtures/incremental-implementation-pressure/draft-export.js`: 552 bytes, 18 lines.
- `sources/addy/evals/fixtures/incremental-implementation-pressure/scenario.md`: 419 bytes, 10 lines.

### 1.2 Pair 1: `planning-and-task-breakdown` (External vs Internal)
- **Nature of External File**:
  - `sources/addy-external/planning-and-task-breakdown.md:1`: Starts with `<!DOCTYPE html><html lang="en" data-astro-cid-5hce7sga>`. It is the rendered HTML output of the marketing and documentation site at `https://skills.addy.ie/skills/planning-and-task-breakdown/`.
  - Canonical URL: `https://skills.addy.ie/skills/planning-and-task-breakdown/` (line 1).
- **Summary & Description Divergence**:
  - Internal `SKILL.md:3`:
    > `description: Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.`
  - External Doc (`meta name="description"` & `p.detail-summary`, lines 1, 5):
    > `Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.`
  - **Drift**: External doc omits `"Use when you have a spec or clear requirements and need to break work into implementable tasks."` and replaces it with `"with acceptance criteria and dependency ordering"`.
- **"When to Use" Section**:
  - Internal `SKILL.md:12-20`: Specifies 5 bulleted positive trigger conditions and an explicit negative rule:
    > `**When NOT to use:** Single-file changes with obvious scope, or when the spec already contains well-defined tasks.`
  - External Doc (line 5): Condenses triggering to a single callout:
    > `<div class="detail-when"><span class="detail-when-label">Use when</span><span>You have a spec and need implementable units.</span></div>`
    Omits the negative trigger condition entirely.
- **Categorization & Metadata**:
  - External Doc lines 5, 12: Embeds tags `<span class="chip">#planning</span><span class="chip">#tasks</span>`, breadcrumbs `Skills / Plan`, phase badge `Plan phase`, and command badge `/plan`.
  - Internal `SKILL.md`: Has no tags in YAML frontmatter (only `name` and `description`).
- **Installation Tooling**:
  - External Doc lines 6-8: Directs users to install via Vercel Labs' open `skills CLI`:
    `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` (single skill)
    `npx skills add addyosmani/agent-skills` (full suite)
    Linking to `https://github.com/vercel-labs/skills`.
  - Internal `SKILL.md`: Contains no CLI installation instructions (relies on repo-level `CLAUDE.md`, `.codex-plugin/`, or `AGENTS.md`).
- **Anatomy & Outbound Link**:
  - External Doc lines 9-11: Outlines standard 6-part anatomy: `01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`.
  - CTA button (line 11): Links out to GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md` with label `"Read the full SKILL.md"`.
- **Omitted Operational Instructions**:
  - External doc omits 100% of: Step 1 (Plan Mode), Step 2 (Dependency Graph ASCII tree), Step 3 (Horizontal vs Vertical Slicing), Step 4 (Task format template), Step 5 (Ordering & Checkpoint template), Task Sizing Guidelines (XS-XL table and breakdown rules), Output Files specification (`tasks/plan.md`, `tasks/todo.md`, incomplete plan overwrite guardrails, external tracker polymorphic mapping), Plan Document Template, Parallelization Opportunities, Common Rationalizations table, Red Flags, Verification checklist, and See Also (`references/definition-of-done.md`).
- **Evaluation Suite Linkage**:
  - `sources/addy/evals/cases/planning-and-task-breakdown.json:28-43`: Contains 1 test case with prompt `"Break the attached notifications spec into an executable plan."` pointing to `evals/fixtures/planning-and-task-breakdown/notifications-spec.md`. It verifies acceptance criteria, dependency ordering, vertical slicing, and zero code generation during planning.

---

### 1.3 Pair 2: `incremental-implementation` (External vs Internal)
- **Nature of External File**:
  - `sources/addy-external/incremental-implementation.md:1`: Starts with `<!DOCTYPE html><html lang="en" data-astro-cid-5hce7sga>`. Rendered HTML output of `https://skills.addy.ie/skills/incremental-implementation/`.
- **Summary & Description Divergence**:
  - Internal `SKILL.md:3`:
    > `description: Delivers changes incrementally. Use when implementing any feature or change that touches more than one file. Use when you're about to write a large amount of code at once, or when a task feels too big to land in one step.`
  - External Doc (`meta name="description"` & `p.detail-summary`, lines 1, 5):
    > `Delivers changes incrementally as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes. Use when you’re about to write a large amount of code at once.`
  - **Drift**: External doc elevates architectural mechanisms ("thin vertical slices with feature flags, safe defaults, and rollback-friendly changes") directly into the summary, moving "touches more than one file" into the "Use when" callout.
- **"When to Use" Section**:
  - Internal `SKILL.md:12-20`: Specifies 4 positive trigger conditions (multi-file changes, task breakdown implementation, refactoring, >100 lines) and negative condition (`Single-file, single-function changes where the scope is already minimal`).
  - External Doc (line 5): Condenses to `<div class="detail-when"><span class="detail-when-label">Use when</span><span>Any change touching more than one file.</span></div>`.
- **Categorization & Metadata**:
  - External Doc lines 5, 12: Tags `#implementation`, `#workflow`, breadcrumb `Skills / Build`, phase badge `Build phase`, command `/build`.
- **Installation Tooling**:
  - External Doc lines 6-8: `npx skills add addyosmani/agent-skills --skill incremental-implementation` and `npx skills add addyosmani/agent-skills`.
- **Extra Section Present in External Doc (Phase Cross-References)**:
  - External Doc lines 12: Contains `<div class="container detail-related">` with heading `More in the Build phase`.
  - Links to 3 sibling skills:
    1. `test-driven-development` (`/skills/test-driven-development/`): `/test`, `#testing #tdd #quality`.
    2. `context-engineering` (`/skills/context-engineering/`): `#context #agents #mcp`.
    3. `source-driven-development` (`/skills/source-driven-development/`): `#documentation #correctness`.
  - (Note: `planning-and-task-breakdown.md` does not have a "More in the Plan phase" section).
- **Omitted Operational Instructions**:
  - External doc omits 100% of: The Increment Cycle diagram (Implement -> Test -> Verify -> Commit -> Next slice), Slicing Strategies (Vertical, Contract-First, Risk-First), Implementation Rules (Rule 0 Simplicity First with EventBus/Factory anti-patterns, Rule 0.5 Scope Discipline with `NOTICED BUT NOT TOUCHING` syntax, Rule 1 One Thing at a Time, Rule 2 Keep It Compilable, Rule 3 Feature Flags, Rule 4 Safe Defaults, Rule 5 Rollback-Friendly), Working with Agents prompt pattern, Increment Checklist with stack discovery, Anti-Reassurance rule (no re-running commands without intervening code changes), Common Rationalizations table, Red Flags, Verification checklist, and See Also (`references/definition-of-done.md`).
- **Evaluation Suite Linkage**:
  - `sources/addy/evals/cases/incremental-implementation.json`:
    - Eval 1 (lines 30-42): CSV export task from `evals/fixtures/incremental-implementation/tasks/plan.md` using `reports.js` and `reports.test.js`.
    - Eval 2 (Pressure test, lines 43-56): Sunk-cost pressure scenario from `evals/fixtures/incremental-implementation-pressure/scenario.md` and `draft-export.js`. Enforces rejecting sunk-cost arguments and decomposing messy code into independently verified slices.

---

### 1.4 Manifest & Project State Rows
- `docs/analysis/manifest/addy.md`:
  - Line 197: `| ../addy-external/planning-and-task-breakdown.md | 22310 | external-doc | [ ] |`
  - Line 198: `| ../addy-external/incremental-implementation.md | 26461 | external-doc | [ ] |`
- `docs/plan/STATE.md`:
  - Line 87: `| inv-addy-23 | addy | 2 | 48771 | in-progress | 007 | — |`

---

## 2. Logic Chain

1. **Dual Role of External Documentation Artifacts (Observational Basis: 1.2, 1.3):**
   - The files in `sources/addy-external/` are static HTML page dumps of `https://skills.addy.ie/skills/<name>/` pulled down during Phase 0 setup per `METHOD.md:35, 151`.
   - Because they are HTML web pages, they contain site-wide chrome: navigation headers, breadcrumbs, copy-to-clipboard UI script bundles, installation panels, marketing ledes, Netlify analytics scripts, and footer links.
   - Crucially, they do not contain the raw operational text of the skill. Instead, they act as an external discovery catalog and marketing index that defines the public contract, command mapping (`/plan`, `/build`), phase placement (`addy:Plan`, `addy:Build`), triggering synopsis, and links out to `SKILL.md` on GitHub as the canonical implementation.

2. **Analysis of Content Evolution and Drift (Observational Basis: 1.2, 1.3):**
   - **Summary Drift**: In both cases, the external catalog copy has been rewritten from `SKILL.md` frontmatter descriptions. The web descriptions are more polished and technical:
     - For `planning-and-task-breakdown`: Adds "with acceptance criteria and dependency ordering", removing generic phrasing.
     - For `incremental-implementation`: Adds "as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes", surfacing implementation tactics at the top level.
   - **Trigger Simplification**: Both external pages compress multi-clause "When to Use" and "When NOT to use" sections into a single punchy "Use when" sentence, omitting negative constraints.
   - **Distribution Drift**: The external documentation introduces `npx skills add addyosmani/agent-skills --skill <name>` using the Vercel open skills CLI (`github.com/vercel-labs/skills`), an installation vector completely absent from repo-level documentation.
   - **Structural Asymmetry**: `incremental-implementation.md` exposes cross-skill discoverability within the `Build` phase (`test-driven-development`, `context-engineering`, `source-driven-development`), whereas `planning-and-task-breakdown.md` isolates the skill without cross-linking to `spec-driven-development`.

3. **Evaluation Suite Alignment (Observational Basis: 1.2, 1.3):**
   - The eval suites (`evals/cases/` and `evals/fixtures/`) specifically test the operational rules found in `SKILL.md` that are omitted from the external doc:
     - `planning-and-task-breakdown`: Tests vertical slicing, acceptance criteria, dependency order, and zero code generation during planning.
     - `incremental-implementation`: Tests thin slicing, atomic commits per slice, and explicitly tests resistance to sunk-cost pressure (`scenario.md`), directly validating Rule 0.5 (Scope Discipline) and Rule 1 (One Thing at a Time).

4. **Synthesis of Work-Unit Deliverables (Observational Basis: 1.1, 1.4):**
   - The deliverables for work unit `inv-addy-23` must include:
     1. Inventory entry `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md`.
     2. Inventory entry `docs/analysis/inventory/addy/external-incremental-implementation-md.md`.
     3. Work-unit report `docs/analysis/inventory/addy/_units/inv-addy-23.md`.
     4. Manifest update in `docs/analysis/manifest/addy.md` (rows 197 and 198 changed from `[ ]` to `[x]`).
     5. State update in `docs/plan/STATE.md` (line 87 updated from `in-progress` to `complete`, output path set).

---

## 3. Caveats

- **No Caveats.**
- The files in `sources/addy-external/` were verified as verbatim HTML snapshots taken from the production Astro deployment of `skills.addy.ie`.
- The internal files in `sources/addy/skills/` and `sources/addy/evals/` were examined in full from line 1 to line end.
- All references, URLs, CLI commands, and manifest rows have been checked.

---

## 4. Conclusion

The comparative analysis reveals that `sources/addy-external/` represents a published public web catalog layer for the Addy skills ecosystem. It provides public discovery, slash command mappings, phase classifications, and Vercel skills CLI installation commands, but defers 100% of procedural execution to the repository's internal `SKILL.md` files.

Significant `doc-drift` defects exist between `SKILL.md` and external documentation regarding skill descriptions, trigger conditions, and installation commands.

Below are the detailed specifications for the work-unit deliverables.

---

### Detailed Specification for Work-Unit Report: `docs/analysis/inventory/addy/_units/inv-addy-23.md`

```markdown
---
unit: inv-addy-23
phase: 1
package: addy
session: 007
subagent_returned: complete
---

# Unit inv-addy-23

## Files assigned
- [x] `sources/addy-external/planning-and-task-breakdown.md` (22,310 bytes)
- [x] `sources/addy-external/incremental-implementation.md` (26,461 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md` (9,150 bytes)
- `docs/analysis/inventory/addy/external-incremental-implementation-md.md` (9,650 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-23.md` (4,850 bytes)

## Scripts executed
none (The assigned external-doc files are static HTML snapshots; no executable scripts are contained within the assigned files. Repository eval test suites were validated in earlier units).

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **External Documentation Architectural Role:** Both assigned files in `sources/addy-external/` are rendered HTML snapshots generated by Astro for the public catalog at `https://skills.addy.ie`. They serve as discovery, marketing, and distribution landing pages rather than executable agent instructions.
- **Canonical Implementation Precedence:** The external pages contain a standardized 6-section anatomy overview and link directly to GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/<name>/SKILL.md`) for the full operational workflow. `SKILL.md` remains the authoritative source of procedural instructions.
- **Defects (`doc-drift`):**
  - *Summary Drift:* Both external docs diverge in their summary copy from `SKILL.md:3`. External `planning-and-task-breakdown` adds "with acceptance criteria and dependency ordering"; external `incremental-implementation` adds "as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes".
  - *Trigger Simplification:* Both external pages compress comprehensive positive/negative trigger conditions from `SKILL.md` into a single short sentence, omitting "When NOT to use" guidance.
  - *Installation CLI:* The external docs document `npx skills add addyosmani/agent-skills` using Vercel Labs' open `skills` CLI (`github.com/vercel-labs/skills`), which is never mentioned in repository-level documentation.
- **Phase Allocation & Command Bindings:**
  - `planning-and-task-breakdown.md` is bound to `addy:Plan` and command `/plan`.
  - `incremental-implementation.md` is bound to `addy:Build` and command `/build`.
- **Phase Cross-References Asymmetry:** `incremental-implementation.md` provides a "More in the Build phase" grid cross-referencing `test-driven-development`, `context-engineering`, and `source-driven-development`. `planning-and-task-breakdown.md` lacks any sibling links.
- **Evaluation Linkage:**
  - `evals/cases/planning-and-task-breakdown.json` validates plan generation against `notifications-spec.md`.
  - `evals/cases/incremental-implementation.json` validates incremental slicing (`reports.js`, `reports.test.js`, `tasks/plan.md`) and pressure-testing against sunk-cost rationalization (`draft-export.js`, `scenario.md`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,200 tokens (48,771 bytes of external HTML snapshots + ~20,000 bytes of corresponding internal skills and evals).
- Approximate tokens of output written: ~11,000 tokens across 2 inventory entries and 1 unit report.
```

---

### Detailed Specification for Inventory Entry 1: `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md`

- **Header Frontmatter:**
  ```yaml
  ---
  package: addy
  path: sources/addy-external/planning-and-task-breakdown.md
  type: external-doc
  bytes: 22310
  unit: inv-addy-23
  ---
  ```
- **Title:** `# sources/addy-external/planning-and-task-breakdown.md`
- **Purpose (Verbatim):**
  > "Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — sources/addy-external/planning-and-task-breakdown.md:1, 5
- **Design Intent:**
  Acts as the public web catalog and distribution portal entry for the `planning-and-task-breakdown` skill on `skills.addy.ie`. It establishes the public-facing contract of the skill, binds it to the `addy:Plan` lifecycle phase and `/plan` command, provides copy-paste installation commands via the Vercel open `skills` CLI, presents a standardized 6-step skill anatomy overview, and directs users to the canonical `SKILL.md` on GitHub.
- **Phase:** `addy:Plan`
- **Inputs:**
  - Specification document or requirements (`"You have a spec and need implementable units."` — line 5)
  - Canonical `SKILL.md` on GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md` — line 11)
  - Vercel skills CLI (`npx skills add` — line 8)
- **Outputs:**
  - Single-skill CLI installation command: `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` (line 8)
  - Full-suite CLI installation command: `npx skills add addyosmani/agent-skills` (line 8)
  - Navigational links to skills catalog, lifecycle, tutorials, and getting started guides (lines 5, 12, 15)
- **Invokes:**
  - tool `npx skills add` (Vercel `skills` CLI) — line 8
  - skill `planning-and-task-breakdown` (via GitHub `SKILL.md` reference) — line 11
  - command `/plan` — line 5, 12
- **Invoked by:**
  - doc `sources/addy-external/` catalog / `https://skills.addy.ie/skills/`
- **Concepts Named (Verbatim):**
  - `planning-and-task-breakdown` — line 1, 5 — defined here
  - `Plan phase` — line 5, 12 — defined here
  - `/plan` — line 5, 12 — defined here
  - `skills CLI` — line 6 — used here
  - `npx skills add` — line 8, 15 — used here
  - `Overview` — line 10 — defined here
  - `When to Use` — line 10 — defined here
  - `Process` — line 10 — defined here
  - `Rationalizations` — line 10 — defined here
  - `Red Flags` — line 10 — defined here
  - `Verification` — line 10 — defined here
  - `#planning` — line 5 — defined here
  - `#tasks` — line 5 — defined here
  - `Lifecycle` — line 5, 12, 15 — used here
  - `Loop engineering` — line 5, 15 — used here
- **Structure:**
  - `<head>` (Metadata, canonical link, OG tags, Twitter card, font preconnects) (line 1)
  - `<header class="nav">` (Brand mark, primary navigation links, GitHub link, CTA) (line 5)
  - `<article class="detail">` (Breadcrumbs, phase chip, command badge, title, summary, use-when callout, tags) (line 5)
  - `<section class="panel">` Install just this skill (Single skill and all-skills copy blocks) (lines 5-8)
  - `<section class="panel">` How this skill is structured (6-step anatomy list, link to full SKILL.md) (lines 8-11)
  - `<aside class="detail-side">` Plan phase sidebar (Blurb, command badge, lifecycle link) (line 12)
  - `<footer class="footer">` (Product links, setup links, resources links, copyright) (lines 12-18)
  - `<script>` (Netlify RUM analytics) (line 19)
- **Scripts:** `none` (telemetry and UI clipboard scripts are non-operational)
- **Defects:**
  - `doc-drift` · `sources/addy-external/planning-and-task-breakdown.md:1, 5` vs `sources/addy/skills/planning-and-task-breakdown/SKILL.md:3` · Description text drifts: external doc adds `"with acceptance criteria and dependency ordering"` and omits `"Use when you have a spec or clear requirements and need to break work into implementable tasks."`
  - `doc-drift` · `sources/addy-external/planning-and-task-breakdown.md:5` vs `sources/addy/skills/planning-and-task-breakdown/SKILL.md:12-20` · External doc condenses 5 detailed "When to Use" criteria into one sentence and completely drops the "When NOT to use" section.
  - `doc-drift` · `sources/addy-external/planning-and-task-breakdown.md:6-8` vs repository root docs · External doc instructs installation via `npx skills add addyosmani/agent-skills --skill ...` (Vercel `skills` CLI), which is not documented in the repository's `README.md`, `CLAUDE.md`, or `package.json`.
- **Observations:**
  - Web Catalog Facade: The external doc is a static web portal facade that summarizes metadata and defers the actual execution logic to GitHub.
  - Command Association: Unambiguously documents the `/plan` command association with `planning-and-task-breakdown`.
- **Context Cost:** 22,310 bytes (~5,577 tokens). High markup-to-content ratio due to HTML boilerplate and inline CSS/SVG.

---

### Detailed Specification for Inventory Entry 2: `docs/analysis/inventory/addy/external-incremental-implementation-md.md`

- **Header Frontmatter:**
  ```yaml
  ---
  package: addy
  path: sources/addy-external/incremental-implementation.md
  type: external-doc
  bytes: 26461
  unit: inv-addy-23
  ---
  ```
- **Title:** `# sources/addy-external/incremental-implementation.md`
- **Purpose (Verbatim):**
  > "Delivers changes incrementally as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes. Use when you’re about to write a large amount of code at once." — sources/addy-external/incremental-implementation.md:1, 5
- **Design Intent:**
  Serves as the web catalog landing page and distribution point for the `incremental-implementation` skill on `skills.addy.ie`. It binds the skill to `addy:Build` and `/build`, establishes the public value proposition of thin vertical slices and safe defaults, provides Vercel skills CLI installation commands, provides an anatomy breakdown, links out to canonical `SKILL.md` on GitHub, and provides cross-skill discovery for other `Build` phase skills.
- **Phase:** `addy:Build`
- **Inputs:**
  - Multi-file code changes (`"Any change touching more than one file."` — line 5)
  - Canonical `SKILL.md` on GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/incremental-implementation/SKILL.md` — line 11)
  - Vercel skills CLI (`npx skills add` — line 8)
- **Outputs:**
  - Single-skill CLI installation command: `npx skills add addyosmani/agent-skills --skill incremental-implementation` (line 8)
  - Full-suite CLI installation command: `npx skills add addyosmani/agent-skills` (line 8)
  - Related skill discovery links: `test-driven-development`, `context-engineering`, `source-driven-development` (line 12)
- **Invokes:**
  - tool `npx skills add` (Vercel `skills` CLI) — line 8
  - skill `incremental-implementation` (via GitHub `SKILL.md` reference) — line 11
  - command `/build` — line 5, 12
  - skill `test-driven-development` — line 12
  - skill `context-engineering` — line 12
  - skill `source-driven-development` — line 12
  - command `/test` — line 12
- **Invoked by:**
  - doc `sources/addy-external/` catalog / `https://skills.addy.ie/skills/`
- **Concepts Named (Verbatim):**
  - `incremental-implementation` — line 1, 5 — defined here
  - `Build phase` — line 5, 12 — defined here
  - `/build` — line 5, 12 — defined here
  - `thin vertical slices` — line 1, 5, 12 — defined here
  - `feature flags` — line 1, 5 — defined here
  - `safe defaults` — line 1, 5 — defined here
  - `rollback-friendly changes` — line 1, 5 — defined here
  - `skills CLI` — line 6 — used here
  - `npx skills add` — line 8, 15 — used here
  - `Overview` — line 10 — defined here
  - `When to Use` — line 10 — defined here
  - `Process` — line 10 — defined here
  - `Rationalizations` — line 10 — defined here
  - `Red Flags` — line 10 — defined here
  - `Verification` — line 10 — defined here
  - `#implementation` — line 5 — defined here
  - `#workflow` — line 5 — defined here
  - `test-driven-development` — line 12 — used here
  - `/test` — line 12 — used here
  - `context-engineering` — line 12 — used here
  - `source-driven-development` — line 12 — used here
  - `Red-Green-Refactor` — line 12 — used here
  - `the test pyramid` — line 12 — used here
  - `DAMP over DRY` — line 12 — used here
  - `the Beyoncé Rule` — line 12 — used here
- **Structure:**
  - `<head>` (Metadata, canonical link, OG tags, Twitter card, font preconnects) (line 1)
  - `<header class="nav">` (Brand mark, primary navigation links, GitHub link, CTA) (line 5)
  - `<article class="detail">` (Breadcrumbs, phase chip, command badge, title, summary, use-when callout, tags) (line 5)
  - `<section class="panel">` Install just this skill (Single skill and all-skills copy blocks) (lines 5-8)
  - `<section class="panel">` How this skill is structured (6-step anatomy list, link to full SKILL.md) (lines 8-11)
  - `<aside class="detail-side">` Build phase sidebar (Blurb, command badge, lifecycle link) (line 12)
  - `<div class="container detail-related">` More in the Build phase (Cards for `test-driven-development`, `context-engineering`, `source-driven-development`) (line 12)
  - `<footer class="footer">` (Product links, setup links, resources links, copyright) (lines 12-18)
  - `<script>` (Netlify RUM analytics) (line 19)
- **Scripts:** `none`
- **Defects:**
  - `doc-drift` · `sources/addy-external/incremental-implementation.md:1, 5` vs `sources/addy/skills/incremental-implementation/SKILL.md:3` · Summary text drifts: external doc adds `"as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes"` and removes `"touching more than one file"`.
  - `doc-drift` · `sources/addy-external/incremental-implementation.md:5` vs `sources/addy/skills/incremental-implementation/SKILL.md:12-20` · External doc condenses 4 positive triggers into one sentence and omits the negative condition.
  - `doc-drift` · `sources/addy-external/incremental-implementation.md:6-8` vs repository root docs · Documents Vercel `skills` CLI installation, absent from repo-level docs.
- **Observations:**
  - Intra-Phase Skill Clustering: Uniquely showcases intra-phase relationship clustering by rendering cards for `test-driven-development`, `context-engineering`, and `source-driven-development` under the `Build` phase umbrella.
- **Context Cost:** 26,461 bytes (~6,615 tokens).

---

### Manifest Update Specification (`docs/analysis/manifest/addy.md`)

Update rows 197 and 198:
```markdown
| ../addy-external/planning-and-task-breakdown.md | 22310 | external-doc | [x] |
| ../addy-external/incremental-implementation.md | 26461 | external-doc | [x] |
```

---

### State Update Specification (`docs/plan/STATE.md`)

Update row 87 from:
```markdown
| inv-addy-23 | addy | 2 | 48771 | in-progress | 007 | — |
```
To:
```markdown
| inv-addy-23 | addy | 2 | 48771 | complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-23.md |
```

---

## 5. Verification Method

To independently verify these findings:

1. **Inspect Raw Files:**
   - External files: `view_file` on `sources/addy-external/planning-and-task-breakdown.md` and `sources/addy-external/incremental-implementation.md`.
   - Internal skills: `view_file` on `sources/addy/skills/planning-and-task-breakdown/SKILL.md` and `sources/addy/skills/incremental-implementation/SKILL.md`.
   - Eval suites: `view_file` on `sources/addy/evals/cases/planning-and-task-breakdown.json` and `sources/addy/evals/cases/incremental-implementation.json`.

2. **Verify Quotations and Line Numbers:**
   - Confirm Purpose quotations against line 1 and 5 of both external files.
   - Confirm description divergence against line 3 of both internal `SKILL.md` files.
   - Confirm command bindings (`/plan`, `/build`) against lines 5 and 12 of external files.

3. **Verify Manifest and State Consistency:**
   - Check rows 197-198 of `docs/analysis/manifest/addy.md`.
   - Check row 87 of `docs/plan/STATE.md`.
   - Run `bun run scripts/synthesis/coverage.ts` to ensure manifest row state aligns once updated.

4. **Invalidation Conditions:**
   - Invalidation occurs if the external snapshot files are regenerated from a different upstream endpoint or if `SKILL.md` frontmatter is updated.
