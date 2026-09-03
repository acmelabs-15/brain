# Handoff Report — explorer_inv_addy_6_2

**Work Unit**: `inv-addy-6`  
**Assigned Source Files**:  
1. `sources/addy/docs/developer-onboarding.md` (7,850 bytes)  
2. `sources/addy/docs/getting-started.md` (7,104 bytes)  

---

## 1. Observation

Direct observations from reading both files in full (R1) and executing filesystem / script verification (R2):

1. **Assigned File Content & Structure**:
   - `sources/addy/docs/developer-onboarding.md`: 117 lines, 7,850 bytes. Outlines contributor guidance, local setup, the 5 composable layers (Skills, Personas, Commands, References, Evals), the 3-tier eval verification loop, contribution paths, pre-PR checklist, and reading order.
   - `sources/addy/docs/getting-started.md`: 166 lines, 7,104 bytes. Outlines end-user onboarding, skill execution mechanics, quick start, recommended setup tiers (Minimal, Full Lifecycle, Context-Aware), skill anatomy diagram, specialist agents catalog, slash commands table, references catalog, living spec/task artifact lifecycle (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), and tips.

2. **Referenced Path Existence (Filesystem Verification)**:
   All paths cited in both files exist in `sources/addy/`:
   - `docs/getting-started.md`, `CONTRIBUTING.md`, `docs/skill-anatomy.md`, `evals/README.md` exist.
   - `.claude/commands/`, `.gemini/commands/`, `commands/` exist.
   - `references/orchestration-patterns.md`, `AGENTS.md`, `CLAUDE.md` exist.
   - `scripts/validate-skills.js`, `scripts/validate-commands.js`, `scripts/run-evals.js`, `scripts/validate-artifact-paths.js` exist.
   - `hooks/session-start.sh`, `hooks/session-start-test.sh` exist.
   - `agents/code-reviewer.md`, `agents/test-engineer.md`, `agents/security-auditor.md`, `agents/web-performance-auditor.md` exist.
   - All 7 references exist under `references/`.
   - All section anchor links in `CONTRIBUTING.md` (`#before-proposing-a-new-skill`, `#structure`, `#translations`) exist verbatim.

3. **Script Execution & Verification**:
   - Running `bun scripts/validate-skills.js` within `sources/addy/` exits with code `0`:
     `25 skills checked — 0 error(s), 0 warning(s) — PASSED`.
   - Running `bun scripts/validate-commands.js` within `sources/addy/` exits with code `0`:
     `Checking command parity... 9 commands checked — 0 error(s) — PASSED`.
     Commands checked: `build`, `code-simplify`, `constraints`, `plan`, `review`, `ship`, `spec`, `test`, `webperf`.
   - Running `bun scripts/run-evals.js` within `sources/addy/` exits with code `0`:
     `136 checks passed — 0 error(s), 0 warning(s) ... PASSED`.
   - Running `bash hooks/session-start-test.sh` within `sources/addy/` exits with code `1`:
     `Error: expected IMPORTANT priority, got undefined at [stdin]:8:11`.
     Verification of `bash hooks/session-start.sh` revealed output begins with `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"agent-skills loaded..."}}`, demonstrating schema divergence between the hook script and its test script.
   - Executing validator scripts with plain `node` in the repository workspace without Bun or CommonJS flags fails with `ReferenceError: require is not defined in ES module scope` due to the root `package.json` specifying `"type": "module"`.

4. **Cross-file & Drift Observations**:
   - `docs/getting-started.md:107-120` contains a table of slash commands listing `/spec`, `/plan`, `/build`, `/build auto`, `/test`, `/review`, `/code-simplify`, `/ship`, `/webperf`. It completely omits `/constraints` (`.claude/commands/constraints.md`), despite `/constraints` being one of the 9 validated commands checked by `scripts/validate-commands.js`.
   - `docs/getting-started.md:143-149` documents that installing standalone skills via `npx skills add` breaks access to `references/` (issue #361), and recommends copying checklists into installed skills as a workaround. This directly contradicts the architectural rule in `docs/developer-onboarding.md:24` ("Don't duplicate, reference").

---

## 2. Logic Chain

1. **Existence Verification**:
   - *Premise*: Every path cited by an in-scope documentation file must resolve to a valid file or directory on disk; missing paths represent defects.
   - *Observation*: Inspected 21 separate paths and 3 anchor links referenced in both files. All resolved cleanly on disk.
   - *Deduction*: No `missing-path` defects exist in either file.

2. **Hook Regression Test Defect**:
   - *Premise*: `docs/developer-onboarding.md:69-70` and line `103` instruct contributors: `bash hooks/session-start-test.sh` and `- [ ] Hook test green if you touched hooks/ or using-agent-skills`.
   - *Observation*: Executing `bash hooks/session-start-test.sh` fails with code 1. Inspection of `hooks/session-start.sh` confirmed it emits `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": ...}}`. Meanwhile, `hooks/session-start-test.sh:24` tests `payload.priority !== 'IMPORTANT'`, which evaluates to `undefined !== 'IMPORTANT'` and throws an unhandled error.
   - *Deduction*: A `script-bug` and `unfailable-gate` defect exists in the repository test suite and is falsely documented in `developer-onboarding.md` as an active pre-PR gate.

3. **Slash Commands Drift**:
   - *Premise*: `docs/getting-started.md:105-120` claims to document the slash commands contained in `.claude/commands/`.
   - *Observation*: `.claude/commands/` contains `constraints.md`, and `scripts/validate-commands.js` asserts 9 commands. The table in `getting-started.md` lists only 8 commands (plus `/build auto` as a parameter variant), omitting `/constraints`.
   - *Deduction*: `docs/getting-started.md` suffers from a `doc-drift` defect where command documentation lags behind implemented commands.

4. **Reference Duplication Contradiction**:
   - *Premise*: `docs/developer-onboarding.md:24` establishes the architectural invariant: "Don't duplicate, reference. Skills link to other skills and to `references/` instead of restating content."
   - *Observation*: `docs/getting-started.md:146-147` advises users facing issue #361 to "copy the needed checklist into a `references/` directory inside the installed skill."
   - *Deduction*: A `doc-drift` / internal inconsistency exists between developer architecture and user workaround recommendations.

---

## 3. Caveats

- **Network-dependent tools**: Tool `gh` (`gh pr list`) and live Claude plugin execution (`claude --plugin-dir`) mentioned in `developer-onboarding.md` were not executed against live remotes or live Anthropic endpoints to adhere strictly to offline/local evaluation rules.
- **Node CJS vs ESM execution**: Running validator scripts using `node` directly failed due to the enclosing `brain-v2/package.json` declaring `"type": "module"`. In an isolated clone of `agent-skills`, Node defaults to CJS because no `package.json` is present. Execution via `bun` succeeded cleanly.
- No other areas within `developer-onboarding.md` or `getting-started.md` were left uninvestigated.

---

## 4. Conclusion

Both files serve critical, complementary roles in Addy's repository architecture:
- `docs/developer-onboarding.md` is the canonical developer/contributor onboarding guide, defining the 5-layer repository mental model, command parity rules, the 3-tier eval system, and contribution paths.
- `docs/getting-started.md` is the canonical user onboarding guide, defining the execution model of skills, tiered rollout strategies (Minimal 3-skill setup, Full Lifecycle, Context-Aware), slash command mapping, agent catalog, references catalog, and living spec/task artifact conventions (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`).

Both files are fully analyzed and their drafted inventory entries are ready for immediate ingestion into `docs/analysis/inventory/addy/`.

---

## 5. Verification Method

To independently verify the findings and script behavior:

1. **Verify file contents and line numbers**:
   ```bash
   head -n 25 sources/addy/docs/developer-onboarding.md
   head -n 25 sources/addy/docs/getting-started.md
   ```
2. **Verify command validation and list of 9 commands**:
   ```bash
   cd sources/addy && bun scripts/validate-commands.js
   ```
   Confirm output lists `constraints` alongside the other 8 commands.
3. **Verify the hook regression test failure**:
   ```bash
   cd sources/addy && bash hooks/session-start-test.sh
   ```
   Confirm it fails with exit code 1 and `Error: expected IMPORTANT priority, got undefined`.
4. **Verify SessionStart hook payload schema**:
   ```bash
   cd sources/addy && bash hooks/session-start.sh | head -c 120
   ```
   Confirm top-level key is `hookSpecificOutput`, not `priority` or `message`.

---

## Complete Drafted Inventory Entries

### Entry 1: `sources/addy/docs/developer-onboarding.md`

```markdown
---
package: addy
path: docs/developer-onboarding.md
type: doc
bytes: 7850
unit: inv-addy-6
---

# docs/developer-onboarding.md

## Purpose — required, verbatim
> "This guide is for people working **on** the agent-skills repository itself: contributing skills, fixing docs, improving the eval harness. If you want to *use* the skills in your own projects, you're looking for [getting-started.md](getting-started.md) instead." — docs/developer-onboarding.md:3

## Design intent — required
Strategic meta-repository developer onboarding guide that establishes the mental model and contributor architecture for developing on `agent-skills`. It decomposes the repository into five composable layers (Skills as "How", Personas as "Who", Commands as "When", References as "What to check", Evals as "Does it work") and enforces critical architectural constraints: user/command orchestration over persona-to-persona chaining, reference linking over duplication, and repo-level agent config (`AGENTS.md`, `CLAUDE.md`) containment. Without it, contributors would create conflicting routing personas, duplicate reference checklists within skill directories, fail command parity across platforms, or misinterpret eval tier test failures.

## Phase — required
`cross-phase` (developer onboarding and contributor architecture)

## Inputs — required
- Contributor intent / task scope (docs/developer-onboarding.md:3, 76-96)
- Prerequisites: Node 20+, bash, jq, gh CLI, Claude Code (docs/developer-onboarding.md:37-43)
- Authoritative documentation and rulebooks: `CONTRIBUTING.md`, `skill-anatomy.md`, `evals/README.md`, `AGENTS.md` (docs/developer-onboarding.md:5, 114-116)
- Existing catalog: `skills/` directories, `evals/cases/` files, open PRs (`gh pr list --state open`) (docs/developer-onboarding.md:86-88)

## Outputs — required
- Guided contribution paths: Path 1 (fixing/improving an existing skill), Path 2 (proposing a new skill), Path 3 (docs, references, harness) (docs/developer-onboarding.md:78-96)
- Contribution artifacts specification: `skills/<name>/SKILL.md`, `evals/cases/<name>.json`, and optional `scripts/` (docs/developer-onboarding.md:88)
- Pre-PR verification checklist (docs/developer-onboarding.md:98-108)
- Suggested contributor reading order (docs/developer-onboarding.md:109-117)

## Invokes — required
- doc getting-started.md — docs/developer-onboarding.md:3
- doc ../CONTRIBUTING.md — docs/developer-onboarding.md:5, 86, 88, 94, 116
- doc skill-anatomy.md — docs/developer-onboarding.md:5, 87, 88, 114
- doc ../evals/README.md — docs/developer-onboarding.md:5, 72, 115
- reference ../references/orchestration-patterns.md — docs/developer-onboarding.md:23
- doc ../AGENTS.md — docs/developer-onboarding.md:26, 116
- doc ../CLAUDE.md — docs/developer-onboarding.md:26
- script scripts/validate-skills.js — docs/developer-onboarding.md:56, 100
- script scripts/validate-commands.js — docs/developer-onboarding.md:59, 102
- script scripts/run-evals.js — docs/developer-onboarding.md:62, 65, 81, 95, 101
- script hooks/session-start.sh — docs/developer-onboarding.md:67, 96
- skill using-agent-skills — docs/developer-onboarding.md:68, 96, 103, 112
- script hooks/session-start-test.sh — docs/developer-onboarding.md:69, 103
- skill code-review-and-quality — docs/developer-onboarding.md:107
- doc ../README.md — docs/developer-onboarding.md:111
- skill test-driven-development — docs/developer-onboarding.md:113

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:5

## Concepts named — required, verbatim
- `Skills` — docs/developer-onboarding.md:15 — defined here
- `Personas` — docs/developer-onboarding.md:16, 23 — defined here | used here
- `Commands` — docs/developer-onboarding.md:17, 28 — defined here | used here
- `References` — docs/developer-onboarding.md:18, 24, 88, 92 — defined here | used here
- `Evals` — docs/developer-onboarding.md:19 — defined here
- `five composable layers` — docs/developer-onboarding.md:11 — defined here
- `parallel fan-out with a merge step` — docs/developer-onboarding.md:23 — used here
- `Don't duplicate, reference` — docs/developer-onboarding.md:24 — defined here
- `Tier 1, structural` — docs/developer-onboarding.md:55, 82, 100 — defined here | used here
- `Command parity` — docs/developer-onboarding.md:28, 58, 74, 102 — defined here | used here
- `Tier 2, trigger & routing` — docs/developer-onboarding.md:61, 72, 81, 101 — defined here | used here
- `Tier 3, behavioral` — docs/developer-onboarding.md:42, 64, 72, 95 — defined here | used here
- `lexical approximation of routing` — docs/developer-onboarding.md:72 — defined here
- `stemmed TF-IDF` — docs/developer-onboarding.md:72 — defined here
- `Hook regression test` — docs/developer-onboarding.md:67, 96, 103 — defined here | used here
- `SessionStart hook` — docs/developer-onboarding.md:67, 96 — used here
- `Pre-PR checklist` — docs/developer-onboarding.md:98 — defined here
- `Change-sizing guidance` — docs/developer-onboarding.md:107 — used here

## Structure
- `# Developer Onboarding` — docs/developer-onboarding.md:1
- `## 1. The mental model` — docs/developer-onboarding.md:9
- `## 2. Local setup` — docs/developer-onboarding.md:30
- `## 3. The verification loop` — docs/developer-onboarding.md:50
- `## 4. Contribution paths` — docs/developer-onboarding.md:76
- `### Path 1: Fixing or improving an existing skill (most common, best first PR)` — docs/developer-onboarding.md:78
- `### Path 2: Proposing a new skill (higher bar, do the pre-flight)` — docs/developer-onboarding.md:84
- `### Path 3: Docs, references, harness` — docs/developer-onboarding.md:92
- `## 5. Pre-PR checklist` — docs/developer-onboarding.md:98
- `## 6. Suggested reading order` — docs/developer-onboarding.md:109

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug`: `docs/developer-onboarding.md:69-70, 103` instructs contributors to run `bash hooks/session-start-test.sh`, which consistently fails with exit code 1 (`Error: expected IMPORTANT priority, got undefined`) because `hooks/session-start.sh` migrated to Claude Code's nested `{"hookSpecificOutput": {"additionalContext": ...}}` payload format while `session-start-test.sh` still expects root properties `payload.priority` and `payload.message`.
- `doc-drift`: `docs/developer-onboarding.md:37-39` asserts validators are plain Node scripts requiring "Node 20+ for the scripts/ validators" without a build step or package.json, but because `scripts/*.js` use CommonJS `require()` without a repository-level `package.json`, running `node scripts/validate-skills.js` crashes with `ReferenceError: require is not defined in ES module scope` in any environment where an ancestor directory specifies `"type": "module"`.

## Observations
- Articulates the "five composable layers" foundational ontology separating concerns: Skills (How), Personas (Who), Commands (When), References (What to check), and Evals (Does it work).
- Formulates a hard architectural invariant: "The user (or a slash command) is the orchestrator. Personas never invoke other personas", explicitly restricting multi-agent interaction to parallel fan-out with merge.
- Clarifies the critical distinction between repo-scoped configuration files (`AGENTS.md`, `CLAUDE.md`) and portable, reusable skills.
- Describes the 3-tier eval architecture and explains why Tier 2 failure is a design signal for skill description vocabulary rather than a test suite bug.

## Context cost
- File size: 7,850 bytes (~1,960 tokens).
- Transitive context cost: 0 static prompt overhead (developer documentation read offline by contributors).
```

---

### Entry 2: `sources/addy/docs/getting-started.md`

```markdown
---
package: addy
path: docs/getting-started.md
type: doc
bytes: 7104
unit: inv-addy-6
---

# docs/getting-started.md

## Purpose — required, verbatim
> "agent-skills works with any AI coding agent that accepts Markdown instructions. This guide covers the universal approach. For tool-specific setup, see the dedicated guides." — docs/getting-started.md:3

## Design intent — required
Universal end-user onboarding guide that introduces developers to the core principles of using Markdown-based skills with AI coding agents. Establishes the operational definition of a skill as a deterministic workflow with verification gates rather than a reference doc, details multi-channel loading strategies (system prompt, rules file, in-conversation invocation), provides tiered rollout pathways (Minimal 3-skill setup vs. Full 4-phase lifecycle vs. Context-Aware loading), and indexes the repository's agents, slash commands, references, and living spec/plan artifacts. Without it, users would treat skills as static documentation, overload agent context windows by loading all skills simultaneously, or lack clear mappings between commands, agent personas, and supplementary checklists.

## Phase — required
`cross-phase` (universal user onboarding and skill lifecycle introduction)

## Inputs — required
- AI coding agent supporting Markdown instructions (Claude Code, Cursor, Antigravity, Gemini CLI, etc.) (docs/getting-started.md:3, 30-36)
- Repository clone or selected skill directories (docs/getting-started.md:15, 143)
- Project rules file (`CLAUDE.md`, `.cursorrules`, etc.) (docs/getting-started.md:34, 48)
- Tool-specific setup guides: `docs/adoption-guide.md`, `docs/skill-anatomy.md`, per-tool setup guides (docs/getting-started.md:3, 44, 90)

## Outputs — required
- User loading configurations:
  - Minimal 3-skill setup: `spec-driven-development`, `test-driven-development`, `code-review-and-quality` (docs/getting-started.md:46-54)
  - Full lifecycle sequence: Starting a project → During development → Before merge → Before deploy (docs/getting-started.md:56-65)
  - Task-specific context-aware configurations (docs/getting-started.md:67-74)
- Working living document artifacts: `SPEC.md`, `tasks/plan.md`, `tasks/todo.md` (docs/getting-started.md:151-158)
- Operational guidelines and best practices (docs/getting-started.md:159-166)

## Invokes — required
- skill using-agent-skills — docs/getting-started.md:40
- doc adoption-guide.md — docs/getting-started.md:44
- skill spec-driven-development — docs/getting-started.md:50, 61, 111, 161
- skill test-driven-development — docs/getting-started.md:36, 51, 62, 113, 114, 115, 133, 162
- skill code-review-and-quality — docs/getting-started.md:52, 63, 116
- skill planning-and-task-breakdown — docs/getting-started.md:61, 112, 114
- skill incremental-implementation — docs/getting-started.md:62, 113, 114
- skill security-and-hardening — docs/getting-started.md:63, 135
- skill shipping-and-launch — docs/getting-started.md:64, 118
- skill frontend-ui-engineering — docs/getting-started.md:71, 136
- skill debugging-and-error-recovery — docs/getting-started.md:72
- skill ci-cd-and-automation — docs/getting-started.md:73
- doc skill-anatomy.md — docs/getting-started.md:90
- agent agents/code-reviewer.md — docs/getting-started.md:98, 103
- agent agents/test-engineer.md — docs/getting-started.md:99
- agent agents/security-auditor.md — docs/getting-started.md:100
- agent agents/web-performance-auditor.md — docs/getting-started.md:101, 119
- command .claude/commands/spec.md — docs/getting-started.md:111, 153
- command .claude/commands/plan.md — docs/getting-started.md:112, 153
- command .claude/commands/build.md — docs/getting-started.md:113, 114
- command .claude/commands/test.md — docs/getting-started.md:115
- command .claude/commands/review.md — docs/getting-started.md:116
- command .claude/commands/code-simplify.md — docs/getting-started.md:117
- skill code-simplification — docs/getting-started.md:117
- command .claude/commands/ship.md — docs/getting-started.md:118
- command .claude/commands/webperf.md — docs/getting-started.md:119
- reference references/testing-patterns.md — docs/getting-started.md:133
- reference references/performance-checklist.md — docs/getting-started.md:134
- skill performance-optimization — docs/getting-started.md:134
- reference references/security-checklist.md — docs/getting-started.md:135
- reference references/accessibility-checklist.md — docs/getting-started.md:136
- reference references/definition-of-done.md — docs/getting-started.md:137
- reference references/observability-checklist.md — docs/getting-started.md:138
- skill observability-and-instrumentation — docs/getting-started.md:138
- reference references/orchestration-patterns.md — docs/getting-started.md:139
- skill doubt-driven-development — docs/getting-started.md:139

## Invoked by — required
- doc docs/adoption-guide.md — docs/adoption-guide.md:5, 30
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:3
- doc docs/cursor-setup.md — docs/cursor-setup.md:223
- doc README.md — README.md:206
- script scripts/validate-artifact-paths.js — scripts/validate-artifact-paths.js:50

## Concepts named — required, verbatim
- `When to use` — docs/getting-started.md:22, 82 — defined here | used here
- `Process` — docs/getting-started.md:23 — defined here
- `Core Process` — docs/getting-started.md:83 — defined here
- `Verification` — docs/getting-started.md:24, 87, 163 — defined here | used here
- `Common rationalizations` — docs/getting-started.md:25, 85 — defined here | used here
- `Red flags` — docs/getting-started.md:26, 86 — defined here | used here
- `System prompt` — docs/getting-started.md:32 — used here
- `Rules file` — docs/getting-started.md:34, 48 — used here
- `Meta-skill` — docs/getting-started.md:38 — used here
- `Minimal setup` — docs/getting-started.md:46 — defined here
- `Full Lifecycle` — docs/getting-started.md:56 — defined here
- `Context-Aware Loading` — docs/getting-started.md:67 — defined here
- `Skill Anatomy` — docs/getting-started.md:75, 90 — defined here
- `YAML frontmatter` — docs/getting-started.md:80 — used here
- `Overview` — docs/getting-started.md:81 — defined here
- `Examples` — docs/getting-started.md:84 — defined here
- `Five-axis code review` — docs/getting-started.md:98 — used here
- `Core Web Vitals` — docs/getting-started.md:101 — used here
- `/build auto` — docs/getting-started.md:114 — defined here | used here
- `Living documents` — docs/getting-started.md:153 — defined here | used here
- `SPEC.md` — docs/getting-started.md:153 — used here
- `tasks/plan.md` — docs/getting-started.md:153 — used here
- `tasks/todo.md` — docs/getting-started.md:153 — used here
- `Definition of Done` — docs/getting-started.md:137 — used here

## Structure
- `# Getting Started with agent-skills` — docs/getting-started.md:1
- `## How Skills Work` — docs/getting-started.md:5
- `## Quick Start (Any Agent)` — docs/getting-started.md:11
- `### 1. Clone the repository` — docs/getting-started.md:13
- `### 2. Choose a skill` — docs/getting-started.md:19
- `### 3. Load the skill into your agent` — docs/getting-started.md:28
- `### 4. Use the meta-skill for discovery` — docs/getting-started.md:38
- `## Recommended Setup` — docs/getting-started.md:42
- `### Minimal (Start here)` — docs/getting-started.md:46
- `### Full Lifecycle` — docs/getting-started.md:56
- `### Context-Aware Loading` — docs/getting-started.md:67
- `## Skill Anatomy` — docs/getting-started.md:75
- `## Using Agents` — docs/getting-started.md:92
- `## Using Commands` — docs/getting-started.md:105
- `## Using References` — docs/getting-started.md:127
- `## Spec and task artifacts` — docs/getting-started.md:151
- `## Tips` — docs/getting-started.md:159

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift`: `docs/getting-started.md:107-120` slash commands table lists 8 core commands (plus `/build auto` as a variant), but omits `/constraints` (`.claude/commands/constraints.md`), which is one of the 9 validated commands actively checked by `scripts/validate-commands.js`.
- `doc-drift`: `docs/getting-started.md:143-149` documents that standalone skill installs via `npx skills add` lose access to repo-level `references/` (tracked in issue #361), and suggests copying checklists directly into individual skill directories as a workaround, directly contradicting the repository's core architectural rule against duplicating reference material across skills articulated in `docs/developer-onboarding.md:24` ("Don't duplicate, reference").

## Observations
- Establishes a foundational distinction: "Skills are not reference docs. They're step-by-step processes the agent follows."
- Defines the 3-skill "Minimal" baseline (`spec-driven-development`, `test-driven-development`, `code-review-and-quality`) addressing the highest-risk failure modes of AI coding.
- Enforces the "living document" lifecycle pattern for `SPEC.md`, `tasks/plan.md`, and `tasks/todo.md`, explicitly recommending committing them to version control during active implementation.
- Explains the command directory split between Claude Code (`.claude/commands/`) and Antigravity (`commands/`), resolving potential user confusion regarding plugin command registration warnings.

## Context cost
- File size: 7,104 bytes (~1,775 tokens).
- Transitive context cost: 0 static prompt overhead (user onboarding documentation).
```
