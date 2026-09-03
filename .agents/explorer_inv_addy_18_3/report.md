# Exploration Report: `sources/addy/skills/doubt-driven-development/SKILL.md`

**Target File**: `sources/addy/skills/doubt-driven-development/SKILL.md` (16,499 bytes)  
**Work Unit**: `inv-addy-18`  
**Explorer**: 3 (`teamwork_preview_explorer`)  
**Parent Orchestrator ID**: `d33b522a-5b61-4615-8dfd-7e95f45ad187`  

---

## 1. Complete Draft of Inventory Entry

**Path**: `docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md`

```markdown
---
package: addy
path: skills/doubt-driven-development/SKILL.md
type: skill
bytes: 16499
unit: inv-addy-18
---

# skills/doubt-driven-development/SKILL.md

## Purpose — required, verbatim
> "Doubt-driven development is the discipline of materializing a fresh-context reviewer — biased to **disprove**, not approve — before any non-trivial output stands." — skills/doubt-driven-development/SKILL.md:10

## Design intent — required
In long-running agent sessions, confirmation bias and accumulated conversational context subtly transform speculative assumptions into accepted facts, causing agents to confidently commit flawed architectural choices, unverified invariants, or destructive operations. `doubt-driven-development` solves this by introducing an in-flight, adversarial cross-examination discipline that extracts minimal reviewable units (artifact and contract stripped of author rationalizations) and subjects them to an isolated, fresh-context reviewer prompted strictly to disprove and falsify the decision before it stands. Without it, agents lack an early-warning checkpoint between initial generation and post-hoc PR review, allowing hallucinated safety guarantees and blind spots to solidify into code where remediation is orders of magnitude more expensive.

## Phase — required
addy:Build

## Inputs — required
- Non-trivial decision / architectural proposal / code change / assertion / claim under scrutiny (`skills/doubt-driven-development/SKILL.md:16-30`)
- Extracted smallest reviewable unit: `ARTIFACT` (diff, function, proposal, or assertion) and `CONTRACT` (constraints, requirements, invariant guarantees), stripped of author reasoning and without the CLAIM (`skills/doubt-driven-development/SKILL.md:75-84, 102-106`)
- Review findings produced by isolated fresh-context reviewer (`skills/doubt-driven-development/SKILL.md:99-100, 168-170`)
- User inputs: authorization / tool selection for optional cross-model escalation (Gemini CLI, Codex CLI, manual, skip), exact flag/auth confirmation, and override/stop commands (`skills/doubt-driven-development/SKILL.md:118-133, 187`)

## Outputs — required
- Compact Step 1 statement: `CLAIM` and `WHY THIS MATTERS` (`skills/doubt-driven-development/SKILL.md:62-74`)
- Adversarial review prompt with isolated `ARTIFACT` and `CONTRACT` blocks (`skills/doubt-driven-development/SKILL.md:89-104`)
- Categorized review findings table or list under 4-tier precedence: `Contract misread`, `Valid + actionable`, `Valid trade-off`, `Noise` (`skills/doubt-driven-development/SKILL.md:172-178`)
- Documented trade-offs for valid accepted issues (`skills/doubt-driven-development/SKILL.md:176`)
- Revised artifact code/spec or updated contract addressing actionable issues (`skills/doubt-driven-development/SKILL.md:174-175`)
- Announcement of cross-model status (user choice, failure, or non-interactive skip notice) (`skills/doubt-driven-development/SKILL.md:159, 163`)
- Go/stop verdict (or escalation to human after 3 cycles or on unresolved doubts) (`skills/doubt-driven-development/SKILL.md:181-192`; `evals/cases/doubt-driven-development.json:31`)

## Invokes — required
- reference ../../references/orchestration-patterns.md — skills/doubt-driven-development/SKILL.md:46, 229
- agent agents/ — skills/doubt-driven-development/SKILL.md:108, 110
- skill code-review-and-quality — skills/doubt-driven-development/SKILL.md:225
- skill source-driven-development — skills/doubt-driven-development/SKILL.md:226
- skill test-driven-development — skills/doubt-driven-development/SKILL.md:227
- skill debugging-and-error-recovery — skills/doubt-driven-development/SKILL.md:228

## Invoked by — required
- command .claude/commands/build.md — .claude/commands/build.md:39
- command commands/build.toml — commands/build.toml:38
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:14, skills/interview-me/SKILL.md:185
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:29, skills/using-agent-skills/SKILL.md:154, skills/using-agent-skills/SKILL.md:176
- doc README.md — README.md:253, README.md:361
- doc CLAUDE.md — CLAUDE.md:23
- doc docs/adoption-guide.md — docs/adoption-guide.md:84
- doc docs/getting-started.md — docs/getting-started.md:139
- config evals/cases/doubt-driven-development.json — evals/cases/doubt-driven-development.json:2, evals/cases/doubt-driven-development.json:33
- external-doc sources/addy-external/doubt-driven-development.md — sources/addy-external/doubt-driven-development.md:5

## Concepts named — required, verbatim
- `doubt-driven-development` — skills/doubt-driven-development/SKILL.md:2, 6, 10 — defined here
- `fresh-context adversarial review` — skills/doubt-driven-development/SKILL.md:3, 10, 87 — defined here
- `/review` — skills/doubt-driven-development/SKILL.md:12, 200, 216, 225 — used here
- `non-trivial decision` — skills/doubt-driven-development/SKILL.md:16, 40 — defined here
- `main-session orchestrator` — skills/doubt-driven-development/SKILL.md:44, 229 — used here
- `orchestration anti-pattern` — skills/doubt-driven-development/SKILL.md:46, 229 — used here
- `orchestration-patterns.md` — skills/doubt-driven-development/SKILL.md:46, 229 — used here
- `degraded self-questioning fallback` — skills/doubt-driven-development/SKILL.md:47 — defined here
- `Doubt cycle` — skills/doubt-driven-development/SKILL.md:54 — defined here
- `Step 1: CLAIM` — skills/doubt-driven-development/SKILL.md:55, 62 — defined here
- `Step 2: EXTRACT` — skills/doubt-driven-development/SKILL.md:56, 75 — defined here
- `Step 3: DOUBT` — skills/doubt-driven-development/SKILL.md:57, 85 — defined here
- `Step 4: RECONCILE` — skills/doubt-driven-development/SKILL.md:58, 168 — defined here
- `Step 5: STOP` — skills/doubt-driven-development/SKILL.md:59, 181 — defined here
- `CLAIM block` — skills/doubt-driven-development/SKILL.md:67, 81 — defined here
- `WHY THIS MATTERS` — skills/doubt-driven-development/SKILL.md:69 — defined here
- `ARTIFACT` — skills/doubt-driven-development/SKILL.md:77, 102, 106 — defined here
- `CONTRACT` — skills/doubt-driven-development/SKILL.md:77, 103, 106 — defined here
- `Smallest reviewable unit` — skills/doubt-driven-development/SKILL.md:75 — defined here
- `Adversarial prompt` — skills/doubt-driven-development/SKILL.md:89-104, 110 — defined here
- `code-reviewer` — skills/doubt-driven-development/SKILL.md:110 — used here
- `Cross-model escalation` — skills/doubt-driven-development/SKILL.md:112, 114 — defined here
- `Gemini CLI` — skills/doubt-driven-development/SKILL.md:122, 148 — used here
- `Codex CLI` — skills/doubt-driven-development/SKILL.md:122, 144 — used here
- `manual external review` — skills/doubt-driven-development/SKILL.md:122, 155 — defined here
- `read-only sandbox` — skills/doubt-driven-development/SKILL.md:143, 151 — used here
- `/loop` — skills/doubt-driven-development/SKILL.md:161 — used here
- `autonomous-loop` — skills/doubt-driven-development/SKILL.md:161 — used here
- `Contract misread` — skills/doubt-driven-development/SKILL.md:174 — defined here
- `Valid + actionable` — skills/doubt-driven-development/SKILL.md:175 — defined here
- `Valid trade-off` — skills/doubt-driven-development/SKILL.md:176 — defined here
- `Noise` — skills/doubt-driven-development/SKILL.md:177 — defined here
- `Common Rationalizations` — skills/doubt-driven-development/SKILL.md:193 — defined here
- `Red Flags` — skills/doubt-driven-development/SKILL.md:207 — defined here
- `Doubt theater` — skills/doubt-driven-development/SKILL.md:215 — defined here
- `code-review-and-quality` — skills/doubt-driven-development/SKILL.md:225 — used here
- `source-driven-development` — skills/doubt-driven-development/SKILL.md:226 — used here
- `test-driven-development` — skills/doubt-driven-development/SKILL.md:227 — used here
- `TDD's RED step` — skills/doubt-driven-development/SKILL.md:227, 236 — used here
- `debugging-and-error-recovery` — skills/doubt-driven-development/SKILL.md:228 — used here
- `anti-pattern B` — skills/doubt-driven-development/SKILL.md:229 — used here
- `Verification checklist` — skills/doubt-driven-development/SKILL.md:231-244 — defined here

## Structure
- Doubt-Driven Development (line 6)
- Overview (line 8)
- When to Use (line 14)
- Loading Constraints (line 42)
- The Process (line 49)
  - Step 1: CLAIM — Surface what stands (line 62)
  - Step 2: EXTRACT — Smallest reviewable unit (line 75)
  - Step 3: DOUBT — Invoke the fresh-context reviewer (line 85)
    - Cross-model escalation (line 112)
  - Step 4: RECONCILE — Fold findings back (line 168)
  - Step 5: STOP — Bounded loop, not recursion (line 181)
- Common Rationalizations (line 193)
- Red Flags (line 207)
- Interaction with Other Skills (line 223)
- Verification (line 231)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction — skills/interview-me/SKILL.md:14 vs CLAUDE.md:23, README.md:361, skills/using-agent-skills/SKILL.md:176, commands/build.toml:38, and sources/addy-external/doubt-driven-development.md:5 — `skills/interview-me/SKILL.md:14` explicitly classifies `doubt-driven-development` as an "other Define-phase" skill that "stress-tests a plan after you've drafted one", directly contradicting all authoritative listings that place it in the `Build` phase (`addy:Build`), as well as `doubt-driven-development/SKILL.md:12-28` which defines it as an in-flight implementation posture for non-trivial coding decisions.
- missing-path — skills/doubt-driven-development/SKILL.md:161 — References `/loop` alongside CI, autonomous-loop, and scheduled runs as non-interactive execution contexts, but no `/loop` slash command file exists in the repository (`.claude/commands/loop.md` or `commands/loop.toml` are absent).
- doc-drift — skills/doubt-driven-development/SKILL.md vs CLAUDE.md:23, README.md:361, and sources/addy-external/doubt-driven-development.md:5 — `SKILL.md` omits any explicit lifecycle phase designation in its frontmatter or body text (relying on generic phrasing like "in-flight posture" and "designed for the main-session orchestrator"), whereas `CLAUDE.md`, `README.md`, `using-agent-skills/SKILL.md`, `.claude/commands/build.md:39`, and the external documentation bind it specifically to the Build phase (`/build`).

## Observations
- Distinguishes between in-flight decision cross-examination (`doubt-driven-development`) and post-hoc PR artifact reviews (`code-review-and-quality` / `/review`).
- Architectural loading constraint: Strictly reserves execution to the main-session orchestrator and forbids inclusion in a subagent persona's `skills:` frontmatter to prevent persona-calls-persona recursion (violating `references/orchestration-patterns.md` Anti-Pattern B). Provides a degraded self-questioning fallback if trapped in a nested context.
- Cross-model escalation protocol: Establishes a concrete protocol for user-authorized cross-model reviews via external CLIs (`gemini`, `codex`) with mandatory safety protections (read-only sandbox flags `--sandbox read-only` and `--approval-mode plan`, piping stdin via temp files to avoid shell interpolation / injection). Mandates explicit interactive choice offering and explicit non-interactive skip announcements.
- Epistemological hygiene: Demands stripping the author's conclusions and CLAIM from the reviewer's prompt (passing `ARTIFACT` + `CONTRACT` only) to prevent confirmation bias and reviewer validation loops.
- Defined anti-rationalization check: Defines "Doubt theater" as a checkable failure signal where 2+ review cycles return substantive findings but 0 are classified as actionable.

## Context cost
File alone: 16,499 bytes (~4,125 tokens). File plus directly linked orchestration pattern reference (`references/orchestration-patterns.md` 18,201 B): 34,700 bytes (~8,675 tokens). Total transitive graph with mentioned companion skills (`code-review-and-quality` 20,555 B, `source-driven-development` 9,949 B, `test-driven-development` 16,483 B, `debugging-and-error-recovery` 13,858 B): 95,545 bytes (~23,886 tokens).
```

---

## 2. Comprehensive §4 Checklist Results

### 1. Existence
- `../../references/orchestration-patterns.md` (lines 46, 229): Confirmed exists at `sources/addy/references/orchestration-patterns.md` (18,201 bytes).
- `agents/` (line 108): Confirmed exists at `sources/addy/agents/` containing role-based agent definitions.
- `skills/code-review-and-quality` (line 225): Confirmed exists at `sources/addy/skills/code-review-and-quality/SKILL.md` (20,555 bytes).
- `skills/source-driven-development` (line 226): Confirmed exists at `sources/addy/skills/source-driven-development/SKILL.md` (9,949 bytes).
- `skills/test-driven-development` (line 227): Confirmed exists at `sources/addy/skills/test-driven-development/SKILL.md` (16,483 bytes).
- `skills/debugging-and-error-recovery` (line 228): Confirmed exists at `sources/addy/skills/debugging-and-error-recovery/SKILL.md` (13,858 bytes).
- `evals/cases/doubt-driven-development.json`: Confirmed exists at `sources/addy/evals/cases/doubt-driven-development.json` (1,274 bytes).
- `evals/fixtures/doubt-driven-development/migration-plan.md`: Confirmed exists at `sources/addy/evals/fixtures/doubt-driven-development/migration-plan.md` (672 bytes).
- `sources/addy-external/doubt-driven-development.md`: Confirmed exists at `sources/addy-external/doubt-driven-development.md` (26,502 bytes).
- Non-interactive context `/loop` (line 161): **Missing**. No command file `.claude/commands/loop.md` or `commands/loop.toml` exists in the repository. Classified as `missing-path` defect.

### 2. Execution
- No executable scripts or gate programs are shipped in `sources/addy/skills/doubt-driven-development/`.
- Repository validation script execution:
  - `bun sources/addy/scripts/validate-skills.js`: Exited 0 (`PASSED: 25 skills checked — 0 error(s), 0 warning(s)`).
  - `bun sources/addy/scripts/validate-reference-links.js`: Exited 0 (`PASSED: 25 skills checked — 0 error(s)`). Both `../../references/orchestration-patterns.md` references resolve cleanly.
- Code blocks in lines 144 and 148 contain shell pipeline examples for invoking external CLIs (`codex exec --sandbox read-only -C <repo-path> - < /tmp/doubt-prompt.md` and `gemini --approval-mode plan -p "" < /tmp/doubt-prompt.md`). These are illustrative integration patterns guarded by safety switches, not packaged scripts.

### 3. Documentation Drift
- **Phase classification contradiction**:
  - `skills/interview-me/SKILL.md:14` states: *"The other Define-phase skills assume you already know roughly what you want: `idea-refine` generates variations from an idea, `spec-driven-development` writes the requirements down, `doubt-driven-development` stress-tests a plan after you've drafted one."*
  - This directly contradicts canonical phase placement in `CLAUDE.md:23` (`**Build:** ... doubt-driven-development`), `README.md:361` (`skills/doubt-driven-development/ # Build`), `skills/using-agent-skills/SKILL.md:176` (`| Build | doubt-driven-development |`), `commands/build.toml:38`, `.claude/commands/build.md:39` (invoked under `/build`), and external documentation `sources/addy-external/doubt-driven-development.md:5` (`Build phase`, associated with `/build`).
  - Furthermore, `SKILL.md` defines the skill as an in-flight posture for coding and implementation decisions (diffs, functions, branches, invariants), rather than a plan-drafting review tool.
- **Phase declaration omission**: `SKILL.md` omits any explicit phase tag in its YAML frontmatter or section headers, unlike documentation tables in README and CLAUDE.md.
- **Missing slash command `/loop`**: Line 161 mentions `/loop` alongside CI and scheduled runs, but no `/loop` command is defined in `sources/addy/`.

### 4. Internal Consistency
- Fully self-consistent across all five workflow steps (`CLAIM` → `EXTRACT` → `DOUBT` → `RECONCILE` → `STOP`), matching the process checklist (line 54), detailed subsections, summary, and verification checklist.
- The 4-tier finding classification hierarchy (`Contract misread` → `Valid + actionable` → `Valid trade-off` → `Noise`) is strictly preserved in both Step 4 and the verification checklist.
- Re-emphasizes the non-negotiable rule to NEVER pass the author's CLAIM or reasoning to the reviewer across Steps 2, 3, Red Flags, and Verification.

### 5. Cross-File Consistency
- Completely aligned with `sources/addy/references/orchestration-patterns.md`:
  - Enforces Loading Constraints (line 46, 229) directly mapped to `references/orchestration-patterns.md` Anti-Pattern B (lines 145, 302-312: "Persona that calls another persona").
  - Prohibits adding the skill to persona frontmatters to avoid nested persona invocation failures on Claude Code.
- Aligned with `.claude/commands/build.md:39` and `commands/build.toml:38` which mandate invoking `doubt-driven-development` during `/build` whenever a task touches high-risk or irreversible operations.
- Interacts cleanly with `evals/cases/doubt-driven-development.json` (trigger prompts for auth and migrations; rubric checking extracted claims, challenged assumptions, and go/stop verdict) and fixture `evals/fixtures/doubt-driven-development/migration-plan.md`.

### 6. Composition
- **Invokes**:
  - `references/orchestration-patterns.md` (architectural anti-pattern boundary)
  - `agents/` (role-based reviewers such as `code-reviewer`)
  - `code-review-and-quality` (differentiates in-flight doubt from post-hoc PR reviews)
  - `source-driven-development` (SDD verifies framework facts; doubt-driven verifies reasoning)
  - `test-driven-development` (TDD RED failing test satisfies doubt step for behavioral claims)
  - `debugging-and-error-recovery` (invoked when reviewer surfaces real actionable defects)
- **Invoked by**:
  - Commands: `.claude/commands/build.md:39`, `commands/build.toml:38`
  - Skills: `skills/interview-me/SKILL.md:14, 185`, `skills/using-agent-skills/SKILL.md:29, 154, 176`
  - Documentation: `README.md:253, 361`, `CLAUDE.md:23`, `docs/adoption-guide.md:84`, `docs/getting-started.md:139`
  - Evals: `evals/cases/doubt-driven-development.json:2, 33`
  - External docs: `sources/addy-external/doubt-driven-development.md:5`

### 7. Context Cost
- `SKILL.md`: 16,499 bytes (~4,125 tokens).
- Reference: `references/orchestration-patterns.md`: 18,201 bytes (~4,550 tokens).
- Sum: 34,700 bytes (~8,675 tokens).
- Transitive companion skills: 60,845 bytes (~15,211 tokens).
- Total transitive invocation graph: 95,545 bytes (~23,886 tokens).
- High context efficiency: Mandates extracting minimal diffs/functions rather than entire files, forbids reviewer summaries, and caps iteration at 3 cycles to prevent runaway token expenditure.

### 8. Design Intent
- Establishes a skeptical, in-flight verification posture that combats agent overconfidence and conversational context accumulation on critical, irreversible, or unfamiliar code paths before decisions become entrenched commits.

---

## 3. Work-Unit Report Draft (`inv-addy-18`)

**Path**: `docs/analysis/inventory/addy/_units/inv-addy-18.md`

```markdown
---
unit: inv-addy-18
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-18

## Files assigned
- [x] sources/addy/skills/interview-me/SKILL.md (14,359 bytes)
- [x] sources/addy/skills/code-simplification/SKILL.md (13,545 bytes)
- [x] sources/addy/skills/doubt-driven-development/SKILL.md (16,499 bytes)

## Outputs produced
- docs/analysis/inventory/addy/skills-interview-me-skill-md.md (14,359 bytes source)
- docs/analysis/inventory/addy/skills-code-simplification-skill-md.md (13,545 bytes source)
- docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md (16,499 bytes source)
- docs/analysis/inventory/addy/_units/inv-addy-18.md (work unit report)

## Scripts executed
- `bun sources/addy/scripts/validate-skills.js` (exit code: 0) — PASSED: 25 skills checked, 0 errors, 0 warnings
- `bun sources/addy/scripts/validate-reference-links.js` (exit code: 0) — PASSED: 25 skills checked, 0 errors
- `bun scripts/synthesis/coverage.ts` (exit code: 1, baseline check: 1226 unchecked rows, 0 empty required fields)
- `bun scripts/synthesis/glossary-lint.ts` (exit code: 0, clean)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls` / native inspection
- [x] Glossary convention applied (package-prefixed before decision; canonical after: e.g. `addy:Build`, `addy:Define`)

## Cross-unit notes
- **Phase placement contradiction across units**: `skills/interview-me/SKILL.md:14` (inv-addy-18, file 1) claims `doubt-driven-development` is an "other Define-phase" skill alongside `idea-refine` and `spec-driven-development`. However, `skills/doubt-driven-development/SKILL.md` (file 3), `CLAUDE.md:23`, `README.md:361`, `skills/using-agent-skills/SKILL.md:176`, `.claude/commands/build.md:39`, `commands/build.toml:38`, and `sources/addy-external/doubt-driven-development.md:5` all explicitly place `doubt-driven-development` under the `Build` phase (`addy:Build`).
- Interaction with `evals/cases/doubt-driven-development.json` (inv-addy-1) and `evals/fixtures/doubt-driven-development/migration-plan.md` (inv-addy-2): Evaluated triggers and fixture consistency confirmed.
- Orchestration Anti-Pattern B: `doubt-driven-development` enforces an explicit restriction against being placed in persona frontmatter, directly respecting `references/orchestration-patterns.md` (inv-addy-12).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,100 tokens (44,403 bytes across 3 assigned files).
- Approximate tokens of output written: ~12,500 tokens across 3 inventory entries and unit report.
```

---

## 4. Manifest Updates Specification

In `docs/analysis/manifest/addy.md`, rows 182, 183, and 184 must be updated from `[ ]` to `[x]`:

```markdown
| skills/interview-me/SKILL.md | 14359 | skill | [x] |
| skills/code-simplification/SKILL.md | 13545 | skill | [x] |
| skills/doubt-driven-development/SKILL.md | 16499 | skill | [x] |
```

---

## 5. `docs/plan/STATE.md` Update Specification

In `docs/plan/STATE.md`, the entry for `inv-addy-18` in the Phase 1 inventory units table should be updated:

```markdown
| inv-addy-18 | addy | 3 | 44403 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-18.md |
```
