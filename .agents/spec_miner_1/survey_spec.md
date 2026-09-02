# Survey Specification: Phase 1 Inventory Extraction (`inv-addy-1`)

## Executive Summary

This specification defines the complete operational, structural, and semantic requirements for executing Phase 1 Inventory Extraction on work unit `inv-addy-1` within the `brain-v2` lifecycle synthesis project. It is synthesized directly from authoritative project sources:
- `docs/plan/METHOD.md`
- `docs/plan/STATE.md`
- `docs/plan/DO-NOT-READ.md`
- `docs/plan/GLOSSARY.md`
- `docs/decisions/DECISIONS.md`
- `docs/plan/templates/inventory-entry.md`
- `docs/plan/templates/work-unit-report.md`
- `inv-addy-1-prompt.md`
- `docs/analysis/manifest/addy.md`

---

## Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|---|---|---|---|---|---|---|
| 1 | Extraction Rules | R1: Full Reads & Coverage | Every in-scope file is read completely from first line to last line with no sampling or partial reads. Manifest rows track progress. | In-scope file path, manifest row | Complete inventory entry on disk | Unchecked manifest rows or missing files fail `coverage.ts`. | `METHOD.md` §3, §5; `inv-addy-1-prompt.md` §1 |
| 2 | Extraction Rules | R2: Evidence & Script Execution | Every claim cites `path:line`. Every script in scope must be executed with documented examples; exit codes compared against code exit paths. | Script path, documented example invocation | Execution stdout, actual exit code, exit path analysis | Describing script without executing or missing `path:line` is a defect. | `METHOD.md` §3, §4; `inv-addy-1-prompt.md` §1 |
| 3 | Extraction Rules | R3: Verbatim Extraction | Fields designated as verbatim must contain exact source quotes without paraphrase. | Source file text | Quoted text with `path:line` citation | Paraphrasing in verbatim fields constitutes an analysis defect. | `METHOD.md` §3; `docs/plan/templates/inventory-entry.md` |
| 4 | Extraction Rules | R4: One Vocabulary / Prefixing | Prior to Phase 4 decisions, terms must use package prefix (e.g. `addy:ship`). Canonical terms used only after decisions. | Unaligned source concept name | Prefixed term (`addy:<name>`) | Inventing neutral interim terms or premature canonical naming triggers lint errors. | `METHOD.md` §3; `GLOSSARY.md` §Rules |
| 5 | Extraction Rules | R5: Defect is Not Dismissal | Every defect (broken path, doc drift, unfailable gate) is catalogued in `Defects` while design intent is preserved. | Source code anomalies, §4 checklist findings | Classified defect line (`<type> — <path:line> — <desc>`) | Discarding a design due to implementation bugs is forbidden. | `METHOD.md` §3; `DECISIONS.md` D-006 |
| 6 | Extraction Rules | R6: Depth Rule & Concept Cards | Every named technique, framework, artifact, gate, role, checklist, template, or phase must be captured in `Concepts named`. | Named entity in source text | `` `<name>` — path:line — defined here \| used here `` | Missed named entities result in synthesis gaps in Phase 2. | `METHOD.md` §3; `templates/inventory-entry.md` |
| 7 | Schema / Schema Contract | `inventory-entry.md` Frontmatter | Standard YAML frontmatter defining file metadata: `package`, `path`, `type`, `bytes`, `unit`, optional `deprecated`, optional `in_scope_via`. | File path, size, work unit | YAML frontmatter block | Missing required keys or invalid enum types fail validation. | `templates/inventory-entry.md` |
| 8 | Schema / Schema Contract | `inventory-entry.md` Sections | Standard Markdown body sections: Purpose, Design intent, Phase, Inputs, Outputs, Invokes, Invoked by, Concepts named, Structure, Scripts, Defects, Observations, Context cost. | Complete file analysis | 13 structured Markdown sections | Empty fields (instead of `none`) fail `coverage.ts`. | `templates/inventory-entry.md`; `METHOD.md` §4 |
| 9 | Schema / Schema Contract | `work-unit-report.md` Schema | Subagent summary report containing YAML frontmatter and 7 sections: Files assigned, Outputs produced, Scripts executed, Coverage self-check, Cross-unit notes, Blocked or uncertain, Time and size. | Execution metadata, file lists, script logs | Formatted work unit report | Unchecked items in coverage self-check indicate incomplete unit. | `templates/work-unit-report.md` |
| 10 | Quality / Verification | §4 Comprehensive Checklist | 8-point inspection checklist: Existence, Execution, Documentation drift, Internal consistency, Cross-file consistency, Composition, Context cost, Design intent. | Source file and references | `Defects` and `Observations` entries | Broken paths, drifting docs, or unverified gates logged as defects. | `METHOD.md` §4 |
| 11 | Tooling & Constraints | Pure Bun / TypeScript Tooling | All project tooling (`manifest.ts`, `coverage.ts`, `glossary-lint.ts`) and synthesis code must run strictly in Bun/TypeScript. | Project TypeScript scripts | Execution via `bun <script>` | Python, Node-specific APIs, or multi-line shell scripts violate R9/D-003. | `METHOD.md` §3; `DECISIONS.md` D-003 |
| 12 | Security / Fence | Input Fence & History Cutoff | Permitted inputs restricted to `sources/`, brain conventions, and `docs/`. Git history before first kit commit is forbidden. Only `v2` worktree exists. | File system / Git repository | Audited input context | Reading `main`, other worktrees, or old git commits violates fence. | `METHOD.md` §2; `DO-NOT-READ.md`; `DECISIONS.md` D-002 |
| 13 | Target Architecture | Dual-Target Parity (D-009) | Canonical Claude Code plugin structure with generated Antigravity/Gemini mirrors. | Canonical Claude plugin artifacts | Dual artifact pairs | Asymmetry without explicit entry in parity table is forbidden. | `METHOD.md` §1.3; `DECISIONS.md` D-009 |

---

## Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---|---|---|
| 1 | Purpose Extraction | File without explicit purpose statement (e.g. raw JSON config or command file without description) | Quote the first substantive paragraph / JSON description and append `(no explicit purpose statement)` with `path:line`. |
| 2 | Required Field Emptiness | Required field with nothing to report (e.g. `Scripts`, `Defects`, `Inputs`, `Outputs`) | Write `none` explicitly. Leaving field blank/empty fails `coverage.ts`. |
| 3 | Package Prefixing | Term not yet defined in `GLOSSARY.md` (e.g. `/ship`, `fan-out`, `go/no-go`) | Prefix with source package: `addy:ship`, `addy:fan-out`, `addy:go/no-go`. Never invent neutral interim terms. |
| 4 | Deprecated Files | Files located under `skills/deprecated/` (in Matt package) | Set YAML frontmatter `deprecated: true`. File is inventoried in full but marked to never be adopted. |
| 5 | rjm Scope Inclusion | In-scope file in `rjm` package | Include YAML frontmatter `in_scope_via: <entry point or invoking file>`. |
| 6 | rjm Exclusion Boundary | In-scope file invokes an excluded skill (e.g. `/spec` invokes `memory-gate`) | Extract the *concept* from the calling file's text only; do NOT read or descend into the excluded skill. |
| 7 | Scriptless Work Units | Work unit containing only command definitions (`.toml`) and eval configs (`.json`) such as `inv-addy-1` | Record `Scripts: none` in inventory entries and `none` in work-unit report `## Scripts executed`. |
| 8 | Validator / Gate Analysis | Script acting as a gate or validator | Test whether code has non-zero exit paths and whether it fails on source repository's default branch. Flag `unfailable-gate` or `always-failing-gate`. |
| 9 | Invocation Visibility | Subagent without global visibility of entire manifest graph | Record `none` if entry point, `orphan` if confirmed isolated, or `unknown` if caller cannot be determined from local context. |
| 10 | Context Compaction Prevention | Large work units exceeding context boundaries | Checkpoint to disk per work-unit boundary. Stateless subagents are dispatched with fresh context. |

---

## Section 1: Exact Definitions of Rules R1 through R6 in METHOD.md

The operational manual (`docs/plan/METHOD.md` §3) mandates six core extraction rules binding all agents and subagents:

### Rule R1 — Full reads. Coverage is proven, not asserted.
- **Definition:** Every in-scope file is read from first line to last line.
- **Enforcement:** "No sampling" is enforced by the manifest (`docs/analysis/manifest/<pkg>.md`). Every file is a row in the manifest table; a row is checked off (`[x]`) only when its corresponding inventory entry exists on disk. Phase 1 is not complete until every single manifest row is checked off.
- **Subagent Instruction:** Use file viewing tools without offset or limit, continuing with offsets until the last line is reached if the file exceeds single-read limits.

### Rule R2 — Evidence, and scripts are run.
- **Definition:** Every claim about a source names `path:line`. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths.
- **Standard of Proof:** Reading a script and describing what it appears to do is **not evidence**.

### Rule R3 — Verbatim in extraction.
- **Definition:** Inventory and concept-card fields marked *verbatim* carry the source's exact words, enclosed in quotation marks, accompanied by a precise `path:line` citation.
- **Standard of Proof:** Paraphrasing in verbatim fields is an explicit defect in the analysis. Alignment and synthesis happen later in Phases 3–5 on the record, never silently during reading.

### Rule R4 — One vocabulary, from the glossary.
- **Definition:** Until a term is formally decided in Phase 4, agents must refer to it with its source and package prefix: `addy:spec`, `matt:spec`, `rjm:spec`.
- **Post-Decision Rule:** After an alignment decision is made, use only the canonical term from `GLOSSARY.md`.
- **Prohibition:** Never introduce an analyst's own synthetic or interim neutral terms for a source concept.

### Rule R5 — Defect is not dismissal.
- **Definition:** Record every defect found (broken reference, script bug, doc/code drift, unfailable gate) as an explicit defect entry on the inventory entry.
- **Separation of Intent vs Implementation:** Evaluate the *design intent* of the feature separately from its *implementation status*. A broken implementation of a good idea is a good idea with a defect.
- **Prohibition:** Never port a defect into brain; never discard a design because its implementation has a defect (reinforced by Decision `D-006`).

### Rule R6 — Depth rule.
- **Definition:** If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, or phase — it gets a concept card.
- **Significance:** Named things are the fundamental unit of alignment across packages.
- **Examples:** `jobs-to-be-done`, `how-might-we`, `definition-of-done`, `vertical-slice`, `acceptance-criteria`, `pre-mortem`, `ticket`, `spec`, `PRD`, `one-pager`.

---

## Section 2: Structural Specification & Schema for `inventory-entry.md`

Every in-scope source file must have an inventory entry. When persisted by the orchestrator, it lives at `docs/analysis/inventory/<pkg>/<file-slug>.md`.

### 2.1 YAML Frontmatter Specification

```yaml
---
package: addy | matt | rjm
path: <path relative to sources/<pkg>/>
type: skill | command | reference | agent | script | template | doc | config | external-doc
bytes: <integer>
unit: <unit-id>
deprecated: true | false          # matt only; true if under skills/deprecated/
in_scope_via: <entry point or invoking file>   # rjm only
---
```

#### Frontmatter Fields:
1. `package` (required): Enum `addy`, `matt`, `rjm`.
2. `path` (required): Relative path from `sources/<pkg>/` (e.g. `.gemini/commands/ship.toml`, `evals/cases/code-review-and-quality.json`).
3. `type` (required): Enum `skill`, `command`, `reference`, `agent`, `script`, `template`, `doc`, `config`, `external-doc`.
4. `bytes` (required): Exact file size in bytes as reported by file metadata or manifest.
5. `unit` (required): Identifier of the assigned work unit (e.g. `inv-addy-1`).
6. `deprecated` (conditional): Required for `matt` package if file is under `skills/deprecated/` (`true` or `false`).
7. `in_scope_via` (conditional): Required for `rjm` package to record the entry point or caller tracing it into scope.

---

### 2.2 Markdown Body Sections Specification

The body starts with `# <path>` followed by 13 standardized sections:

```markdown
# <path>

## Purpose — required, verbatim
> "<the file's own statement of what it is for>" — path:line

## Design intent — required
<One paragraph in analyst's own words stating what problem this solves and what would be lost without it. Kept strictly separate from implementation defects (R5).>

## Phase — required
<Package's lifecycle stage name verbatim, prefixed with package name, e.g. `addy:Define`. Write `none` if unassigned or `cross-phase` if applicable across all phases.>

## Inputs — required
<What this consumes: arguments, prior artifacts (with paths as named in source), files read, user prompts. Write `none` if nothing consumed.>

## Outputs — required
<What this produces: files (with paths as named in source, verbatim), decisions, verdicts, side effects (commits, tickets). Write `none` for pure references.>

## Invokes — required
<Every skill, command, agent, script, or reference called or loaded. Format: `<kind> <name> — path:line`. Write `none` if isolated.>

## Invoked by — required
<Every in-scope file that calls or loads this file. Write `none` if entry point, `orphan` if isolated and not an entry point, or `unknown` if caller cannot be resolved locally.>

## Concepts named — required, verbatim
<Every named technique, framework, artifact, gate, role, checklist, template, or phase defined or used. Format: `` `<name as written>` — path:line — defined here | used here ``. Write `none` if none.>

## Structure
<Section headings in order (verbatim), matching source file structure.>

## Scripts — required if type is script or the skill ships scripts
<If script/ships scripts:
- path, language, lines
- documented invocation (verbatim, path:line)
- executed: yes | no — if no, why
- actual command run, abridged stdout, actual exit code
- documented exit codes (verbatim) vs. actual exit paths in code (path:line for each exit/sys.exit/process.exit)
- for validators/gates: can it exit non-zero? does it fail on default branch?
- does output match documentation claims?
If no scripts: write `none`.>

## Defects — required
<Classified findings per §4 checklist:
- `missing-path` · `script-bug` · `doc-drift` · `internal-contradiction` · `cross-file-contradiction` · `unfailable-gate` · `always-failing-gate` · `exit-code-mismatch` · `orphan` · `other`
Format: `<type> — path:line — <one-sentence description>`. Write `none` if clean.>

## Observations
<Noteworthy patterns, context-cost notes, non-actionable reference text, cross-file duplicates. Write `none` if none.>

## Context cost
<Bytes of this file plus everything it loads when invoked (following `Invokes`). Approximate tokens.>
```

---

### 2.3 Formatting & Emptiness Conventions
- **Field Emptiness Rule:** Required fields must **NEVER** be left blank. If there is nothing to report, explicitly write `none`. `coverage.ts` checks for empty required fields; blank fields mean "not checked", whereas `none` means "checked, nothing there".
- **Verbatim Citations:** Quotations must be exact, enclosed in quotes, with a `path:line` reference (e.g. `> "Run the pre-launch checklist..." — .gemini/commands/ship.toml:1`).
- **Fallbacks:** If a file lacks an explicit purpose statement, quote its first substantive paragraph and append `(no explicit purpose statement)`.

---

## Section 3: Structural Specification & Schema for `work-unit-report.md`

At the conclusion of an extraction work unit, the subagent produces a work-unit report summarizing its execution. When persisted by the orchestrator, it lives at `docs/analysis/inventory/<pkg>/_units/<unit-id>.md`.

### 3.1 YAML Frontmatter Specification

```yaml
---
unit: <unit-id>
phase: 1
package: addy | matt | rjm | —
session: NNN
subagent_returned: complete | truncated | malformed
---
```

### 3.2 Markdown Body Specification

```markdown
# Unit <unit-id>

## Files assigned
<Every assigned path, one per line, with `[x]` for read in full or `[ ]` for not read (with reason). Any `[ ]` means unit is incomplete.>

## Outputs produced
<Every inventory entry file produced, one per line, with byte count.>

## Scripts executed
<One per line: `<path>, <command>, exit <exit_code>`. Write `none` if unit had no scripts.>

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
<Information spanning across units or later phases (e.g. multi-unit concepts, root causes outside current unit). Write `none` if none.>

## Blocked or uncertain
<Items that could not be resolved. Write `none` if clean.>

## Time and size
<Approximate tokens of source read; approximate tokens of output written.>
```

---

## Section 4: Glossary Conventions, Naming Rules & Forbidden Patterns

### 4.1 Naming Rules by Project Phase
1. **Phase 1–3 (Pre-Decision):**
   - Every source concept must be prefixed with its package identifier: `addy:<name>`, `matt:<name>`, `rjm:<name>`.
   - Examples: `addy:ship`, `addy:fan-out`, `addy:go/no-go`, `addy:spec-driven-development`.
   - Never invent synthetic, interim, or neutral terms (e.g. do not invent "verification-gate" if the source says `addy:pre-launch checklist`).
2. **Phase 4+ (Post-Decision):**
   - Once a decision is recorded in `DECISIONS.md` and registered in `GLOSSARY.md`, all subsequent `docs/` and built artifacts must use strictly the canonical term.
   - `scripts/synthesis/glossary-lint.ts` enforces that no undefined canonical terms are used and no prefixed terms linger after decisions.

### 4.2 Forbidden Patterns
- **Paraphrasing in Verbatim Fields:** Violates Rule R3.
- **Uncited Claims:** Making any claim about source behavior without a `path:line` violates Rule R2.
- **Empty Required Fields:** Leaving Markdown sections empty without `none` violates validation.
- **Discarding Designs due to Defects:** Rejecting a concept because the underlying script/reference is broken violates Rule R5 and Decision `D-006`.
- **Premature Canonicalization:** Using un-decided global terms without package prefixes during Phase 1 violates Rule R4.

---

## Section 5: Script Execution & Verification Rules

### 5.1 Verification vs. Documentation
Rule R2 dictates that reading script source code and describing what it appears to do is **not evidence**. Scripts must be executed under controlled conditions.

### 5.2 Mandatory Execution Protocol (§4 Checklist)
1. **Invocation:** Execute the script using its documented example command from its README or comments.
2. **Output Capture:** Capture actual `stdout` and `stderr` (abridged if verbose).
3. **Exit Code Inspection:** Record actual numeric exit code.
4. **Code Path Analysis:** Cross-reference documented exit codes with all exit points in source code (grepping for `process.exit`, `sys.exit`, `exit()`, `return` in main).
5. **Gate / Validator Analysis:**
   - Verify if any code path exits non-zero.
   - Run against the source repository's default branch to observe if it fails or passes.
   - Flag `unfailable-gate` (if it cannot exit non-zero on failure) or `always-failing-gate` (if it exits non-zero unconditionally).
6. **Documentation Drift:** Compare actual output against documentation claims. Discrepancies logged as `doc-drift` or `exit-code-mismatch`.

### 5.3 Applicability to Work Unit `inv-addy-1`
- `inv-addy-1` consists of 9 `.toml` command definitions under `.gemini/commands/` and 19 `.json` eval case configurations under `evals/cases/`.
- No standalone executable scripts (`.sh`, `.ts`, `.py`, `.js`) are shipped in `inv-addy-1`.
- For this unit, `Scripts` in inventory entries is recorded as `none`, and `## Scripts executed` in the work-unit report is recorded as `none`.

---

## Section 6: Hard Project Constraints & Fencing Boundaries

### 6.1 Toolchain & Language Constraints (R9, D-003, AGENTS.md)
- **Runtime:** Bun only (`bun test`, `bun run`).
- **Language:** TypeScript (`tsc --noEmit`).
- **Strict Prohibitions:**
  - **NO Python:** No python scripts, virtualenvs, or python runtime tools.
  - **NO Node-specific APIs:** Do not import or rely on Node-only internals; use Web standard / Bun native APIs.
  - **NO Multi-line Shell Scripts:** Shell commands must be simple one-liners. Complex logic must be written in TypeScript run with Bun.

### 6.2 The Fence & Permitted Inputs (METHOD.md §2, DO-NOT-READ.md, D-002, AGENTS.md)
- **The Only Branch:** The `v2` branch is the **only** branch.
  - Working directory: `/Users/peterkloss/Dev/ACMElabs/brain-v2`.
  - Forbidden: Checking out, switching to, diffing against, or reading from `main`, `lifecycle`, or `/Users/peterkloss/Dev/ACMElabs/brain/`.
- **Git History Boundary:**
  - Git history prior to this project's initial commit (`lifecycle synthesis:`) is strictly forbidden.
  - Git is used only to commit forward.
  - Reading git history (`git show`, `git log -p`, `git diff`) is permitted only between commits made by this project for change propagation (§11).
- **Memory & Cross-Session Isolation:**
  - The agent harness's automatic memory, knowledge base, and injected cross-session memories are disabled and ignored.
  - The repository's only persistent memory is `docs/`.

### 6.3 Dual-Target Parity Standard (D-009)
- Canonical output: Claude Code plugin layout (`skills/`, `commands/`, `agents/`, `.claude-plugin/plugin.json`).
- Mirror output: Antigravity/Gemini layout (`AGENTS.md`, `.agents/skills/`, `.agents/agents/`, `.agents/mcp_config.json`, `.agents/hooks.json`).
- Parity is verified in Phase 8 via `docs/analysis/integration-verification.md`.

---

## Section 7: Scope Breakdown for `inv-addy-1` (28 Files)

Work unit `inv-addy-1` encompasses 28 files totaling 49,827 bytes in `sources/addy/`:

### Group A: Command Definitions (9 `.gemini/commands/*.toml` files)
1. `.gemini/commands/ship.toml` (4,780 bytes) — Type: `command`
   - Purpose: Fan-out orchestrator running 3 personas (`code-reviewer`, `security-auditor`, `test-engineer`) for go/no-go launch decision.
2. `.gemini/commands/webperf.toml` (1,884 bytes) — Type: `command`
   - Purpose: Core Web Vitals audit and performance optimization workflow.
3. `.gemini/commands/planning.toml` (635 bytes) — Type: `command`
   - Purpose: Task breakdown and planning workflow.
4. `.gemini/commands/review.toml` (844 bytes) — Type: `command`
   - Purpose: Multi-axis code review workflow.
5. `.gemini/commands/constraints.toml` (2,775 bytes) — Type: `command`
   - Purpose: Constraint-driven development validation and boundary checking.
6. `.gemini/commands/build.toml` (3,840 bytes) — Type: `command`
   - Purpose: Incremental implementation and build execution loop.
7. `.gemini/commands/spec.toml` (911 bytes) — Type: `command`
   - Purpose: Specification discovery, refinement, and authoring.
8. `.gemini/commands/code-simplify.toml` (1,066 bytes) — Type: `command`
   - Purpose: Code simplification and cognitive load reduction pass.
9. `.gemini/commands/test.toml` (650 bytes) — Type: `command`
   - Purpose: Test-driven development and test suite verification.

### Group B: Eval Configurations (19 `evals/cases/*.json` files)
10. `evals/cases/code-review-and-quality.json` (1,374 bytes) — Type: `config`
11. `evals/cases/source-driven-development.json` (1,287 bytes) — Type: `config`
12. `evals/cases/interview-me.json` (1,197 bytes) — Type: `config`
13. `evals/cases/ci-cd-and-automation.json` (1,349 bytes) — Type: `config`
14. `evals/cases/test-driven-development.json` (3,981 bytes) — Type: `config`
15. `evals/cases/security-and-hardening.json` (1,311 bytes) — Type: `config`
16. `evals/cases/doubt-driven-development.json` (1,274 bytes) — Type: `config`
17. `evals/cases/spec-driven-development.json` (2,657 bytes) — Type: `config`
18. `evals/cases/idea-refine.json` (1,269 bytes) — Type: `config`
19. `evals/cases/incremental-implementation.json` (1,942 bytes) — Type: `config`
20. `evals/cases/observability-and-instrumentation.json` (1,278 bytes) — Type: `config`
21. `evals/cases/constraint-driven-development.json` (3,353 bytes) — Type: `config`
22. `evals/cases/context-engineering.json` (1,390 bytes) — Type: `config`
23. `evals/cases/browser-testing-with-devtools.json` (1,455 bytes) — Type: `config`
24. `evals/cases/frontend-ui-engineering.json` (1,430 bytes) — Type: `config`
25. `evals/cases/documentation-and-adrs.json` (1,328 bytes) — Type: `config`
26. `evals/cases/shipping-and-launch.json` (1,816 bytes) — Type: `config`
27. `evals/cases/api-and-interface-design.json` (1,494 bytes) — Type: `config`
28. `evals/cases/deprecation-and-migration.json` (1,257 bytes) — Type: `config`
