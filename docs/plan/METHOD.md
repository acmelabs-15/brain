# METHOD — Lifecycle Synthesis

This file is the operating manual for the lifecycle synthesis project. It does not change between sessions. `STATE.md` records where the work is; this file records how the work is done. Read this file completely at the start of every session, before `STATE.md`.

---

## 0. Purpose

Produce one aligned development lifecycle for brain — terminology, phase boundaries, sequencing, artifacts, skill composition, references, and roles — by exhaustively analysing three source packages and synthesising the strongest parts of each into a single consistent whole. Then implement that lifecycle as brain skills, commands, references, and agents.

The project has two parts with a hard human gate between them:

- **Part 1 (Phases 0–5):** analyse, align, and specify. Output: `docs/plan/lifecycle-spec/`.
- **Human gate:** Peter reads and approves the spec. Nothing in Part 2 begins until `STATE.md` carries `human_approval: APPROVED`.
- **Part 2 (Phases 6–8):** implement against the approved spec, with traceability back to it.

The gate exists so that nothing is built until its definitions are settled and agreed.

---

## 1. Sources and scope

### 1.1 The three sources

| ID | Package | Clone target | Scope |
|---|---|---|---|
| `addy` | `github.com/addyosmani/agent-skills` | `sources/addy/` | Entire repository |
| `matt` | `github.com/mattpocock/skills` | `sources/matt/` | Entire repository, including `skills/in-progress/` and `skills/deprecated/` (deprecated content is inventoried and flagged `deprecated: true`, never adopted) |
| `rjm` | `github.com/rjmurillo/ai-agents` | `sources/rjm/` | **Lifecycle implementation only** — see 1.2 |

Commit SHAs are pinned in Phase 0 and recorded in `STATE.md`. Every session analyses the same pinned code. If a source must be re-pinned, that is a decision (append to `DECISIONS.md`) and every inventory entry for that source is marked stale.

**Fresh, isolated clones.** Sources are cloned fresh into `sources/<pkg>/` — never a copy that has been opened, edited, or used for anything else, and never a clone that lives elsewhere on the machine. `sources/` is gitignored so no source code enters brain's history. At every session start, verify `git -C sources/<pkg> rev-parse HEAD` equals the pinned SHA; if `sources/` is missing (new machine) or the SHA differs, re-clone and `git checkout <sha>` before any reading. A checkout that does not match the pin is not a source.

**Documentation is in scope, not just code.** For every package, the in-scope set includes its README, `docs/`, `CONTRIBUTING`, `CLAUDE.md`, `AGENTS.md`, changelogs, and any other markdown that describes what the package does or how it is meant to be used. Documentation is where a package states its *intent*; the §4 checklist compares it against what the code does. Two sources also publish documentation outside the repo — Addy at `skills.addy.ie/skills/<name>/`, Matt at `aihero.dev/skills-<name>` — and those pages are in scope for every in-scope skill: the manifest lists them as type `external-doc` with the URL, they are fetched once in Phase 0 and saved under `sources/<pkg>-external/<slug>.md` so every session reads the same snapshot, and they get inventory entries like any other file. An external page that describes a skill differently from its `SKILL.md` is a `doc-drift` defect with both locations cited.

### 1.2 rjm scope rule

rjm is a large repository. Only its lifecycle implementation is in scope. The in-scope set is derived, not listed: start from the entry points, follow every `Skill(...)`, `Task(subagent_type=...)`, `@file` and path reference, and stop at the exclusion boundary.

**Entry points (always in scope):**

- `.claude/commands/spec.md`, `plan.md`, `build.md`, `test.md`, `ship.md`
- `.claude/skills/review/` (the sixth lifecycle phase; a skill, not a command)
- `docs/workflow-commands.md`
- `README.md` § Lifecycle Commands
- `.agents/architecture/ADR-064-*` (explains why `review` is a skill)

**Exclusion boundary (never descend into):**

- Any skill whose name begins `memory` or contains `serena` or `forgetful`
- `exploring-knowledge-graph`, `chestertons-fence`, `curating-memories`, `encode-repo-serena`, `using-serena-symbols`, `using-forgetful-memory`
- `.serena/`, `.forgetful/`, `.claude-mem/`, `scripts/memory_enhancement/`, `.mcp.json`
- `github`, `pr-*`, `push-pr`, `pr-autofix`, `pr-quality/`, `pr-comment-responder` (PR tooling, not lifecycle)
- `.claude/hooks/`, `evals/`, `tests/`, `build/`, `packages/`

When an in-scope file invokes an excluded skill (for example `/spec` invoking `memory-gate`), record the **concept** the call represents — from the calling file's own text only — as a concept card with `implementation_in_scope: false`. Do not read the excluded skill. The idea of a search-before-change gate is lifecycle-relevant; the memory implementation behind it is not.

Anything reachable from an entry point that is not excluded is in scope and must be read in full, including every `references/` file and every `scripts/` file of every in-scope skill.

### 1.3 Brain conventions

Brain on the `v2` branch is an **empty Claude Code plugin**: `agents/`, `commands/`, `skills/` at the repo root (each holding only `.gitkeep`), `docs/{analysis,decisions,plan}/`, a `package.json` (`@acmelabs/brain`, Bun, `bun test`, `tsc --noEmit`), `bunfig.toml`, `tsconfig.json`, and a CI workflow that runs typecheck and tests. There is no `CLAUDE.md`, no `AGENTS.md`, no existing skill to use as an exemplar, and no `.claude-plugin/plugin.json` yet. The README states the plugin's intent and that the marketplace lists it only once `plugin.json` exists.

So there are no authoring conventions to inherit — this project **establishes** them. In Phase 0, record what exists in `docs/analysis/brain-conventions.md`: the plugin layout, the Bun toolchain, the test and typecheck commands, the CI contract, and the README's stated intent (quoted). Then note explicitly: *frontmatter shape, skill directory structure, naming style, invocation patterns, and test conventions for built artifacts are undecided and will be set by Phase 4–5 decisions.* Those decisions draw on what the three sources do (the `invocation-patterns` concordance family exists for this) and on Claude Code's plugin requirements. Every convention decided this way is a `D-1xx` entry, and Phase 7 builds against it.

Part 2 output is **dual-target** (D-009): Claude Code first, full Antigravity parity. The canonical form of every artifact follows Claude Code plugin standards and lands in the plugin's root directories — `skills/<name>/`, `commands/`, `agents/` — plus `.claude-plugin/plugin.json` as its own build unit. Alongside it, the Antigravity/Gemini form is shipped wherever the standard differs: root `AGENTS.md`, `.agents/skills/`, `.agents/agents/`, `.agents/mcp_config.json` (remote servers use `serverUrl`), `.agents/hooks.json` (five events: `PreToolUse`, `PostToolUse`, `PreInvocation`, `PostInvocation`, `Stop`), and an Antigravity `plugin.json`. The Claude layout is the canonical source; Antigravity artifacts are mirrors derived from it, never hand-forked — a change lands canonically first and propagates. Each Phase 7 build unit produces both forms; Phase 8 verifies parity. Project tooling written for this synthesis (manifest, coverage, glossary lint) lives under `scripts/synthesis/` and is **not** plugin content in either manifest; it may be removed once Part 2 is complete.

---

## 2. The fence — inputs

The analysis is only as independent as its inputs. This section fixes what the agent may read.

**Permitted inputs, and nothing else:**

1. The three pinned source clones under `sources/`
2. Brain's conventions files (1.3)
3. Everything under `docs/analysis/`, `docs/decisions/`, `docs/plan/`

**Forbidden:** everything in `docs/plan/DO-NOT-READ.md`. This work happens on the `v2` branch, checked out as a git worktree at `/Users/peterkloss/Dev/ACMElabs/brain-v2`, and the fence has two rules.

**Rule one — the `v2` branch is the only branch.** The repository has other refs (`main`, `lifecycle`) and another worktree at `/Users/peterkloss/Dev/ACMElabs/brain` — none of them exist for this project. No `git checkout` or `git switch` to any other ref, no `git show <ref>:<path>`, no `git log` or `git diff` against another ref, no reading the reflog, no reading any path under `/Users/peterkloss/Dev/ACMElabs/brain/`, no fetching or reading any other ref in any form.

**Rule two — git history is not an input.** The working tree is the only readable state of this repository. Git is used to commit and push this project's work forward, never to read backward. The project's own first commit (the kit commit, message beginning `lifecycle synthesis:`) is the history boundary: git read commands (`git show <commit>:<path>`, `git log -p`, `git diff <commit>`) are permitted only between commits this project made, and only where a protocol in this file calls for it (§11 step 2). Commits earlier than the boundary are not inputs, whatever they contain — no reading their file contents, their diffs, or their messages, and no unbounded `git log`. What changed in this project is read from `STATE.md` and the session handoffs; that is what they are for.

If a needed file is unclear, treat it as forbidden and ask.

**Harness memory is off.** No automatic memory, knowledge base, or cross-session context feature of the agent harness is used for this work — nothing from earlier sessions or other projects may leak in. The agent does not rely on, look for, or write to any memory store. The only memory this project has is `docs/`. If the harness injects conversation summaries, knowledge items, or "memories" into the context, the agent disregards them entirely — they are not inputs, whatever they say. If a session finds itself "remembering" something about the sources that it cannot point to a `docs/` file for, that memory is treated as contamination and ignored.

---

## 3. Hard rules

These apply in every phase, to the orchestrator and to every subagent.

**R1 — Full reads. Coverage is proven, not asserted.** Every in-scope file is read from first line to last. "No sampling" is enforced by the manifest: every file is a row; a row is checked off only when its inventory entry exists on disk. Phase 1 is not done until every row is checked.

**R2 — Evidence, and scripts are run.** Every claim about a source names `path:line`. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths. Reading a script and describing what it appears to do is not evidence.

**R3 — Verbatim in extraction.** Inventory and concept-card fields marked *verbatim* carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis. Alignment happens later, on the record, not silently during reading.

**R4 — One vocabulary, from the glossary.** Until a term is decided in Phase 4, refer to it with its source and package prefix: `addy:spec`, `matt:spec`, `rjm:spec`. After a decision, use only the canonical term from `GLOSSARY.md`. Never introduce an analyst's own term for a source concept.

**R5 — Defect is not dismissal.** Record every defect found (broken reference, script bug, doc/code drift, unfailable gate) as a defect on the inventory entry. Evaluate the *design intent* of the thing separately from its *implementation status*. A broken implementation of a good idea is a good idea with a defect. Never port a defect; never discard a design because its implementation has one.

**R6 — Depth rule.** If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets a concept card. Named things are the unit of alignment. Examples: `jobs-to-be-done`, `how-might-we`, `definition-of-done`, `vertical-slice`, `acceptance-criteria`, `pre-mortem`, `ticket`, `spec`, `PRD`, `one-pager`.

**R7 — Persist before proceeding.** A work unit is complete only when its output file exists on disk and `STATE.md` shows it checked. Results that exist only in conversation do not exist. Never end a session with an unpersisted unit; finish it or mark it `rolled-back` and note why.

**R8 — Decisions are append-only.** `DECISIONS.md` entries are never edited after the session that wrote them. To change a decision, append a new entry with `supersedes: D-NNN`. The superseded entry gets one line added: `superseded-by: D-MMM`. Nothing else in it changes.

**R9 — Bun only.** Every script written for this project — manifest generation, coverage checks, glossary lint, anything in Part 2 — is Bun/TypeScript. No Node-specific APIs, no Python, no shell scripts longer than a one-liner.

**R10 — Human gate.** Phase 6 does not begin until `STATE.md` has `human_approval: APPROVED` with Peter's date. The agent never writes that field.

---

## 4. What "comprehensive" means for one source file

Run this checklist against every skill, command, reference, agent, template, and script in scope. Findings go in the inventory entry's `defects` and `observations` fields.

**Existence.** Every path the file references — skills, scripts, references, templates, directories — is checked with `ls`. Missing targets are defects.

**Execution.** Every script is run with its documented example. Record: actual stdout (abridged), actual exit code, whether output matches the documentation's claim. For validators and gates additionally: is there any code path that exits non-zero? Run it on the source repo's own default branch — does it fail there? A gate with no failing path, or one that always fails, is recorded as such.

**Documentation drift.** Does the README, the command file, and the skill body agree on what this thing does, how many steps or axes it has, and what it outputs? Disagreements are defects with all locations cited.

**Internal consistency.** Does the file contradict itself — two different definitions of the same term, a step numbered but never defined, a template that differs from the inline example?

**Cross-file consistency.** Where this file defines or uses a concept that another in-scope file also defines, do they agree? Record the other file's location; the concordance phase resolves it.

**Composition.** What does this file invoke, and what invokes it? What does it consume (inputs, prior artifacts) and produce (files, decisions, verdicts)? Where do produced artifacts live on disk?

**Context cost.** Byte size of the file and of everything it loads. Note reference material that an executing agent cannot act on (design notes, generation instructions, duplicated content).

**Design intent.** Separately from all of the above: what is this thing *for*? What problem does it solve, what would be lost without it? This field is what Phase 3 aligns on.

---

## 5. Phases

Each phase lists inputs, work units, outputs, done criteria, and delegation mode. Delegation modes are defined in §6.

### Phase 0 — Setup

*Mode: orchestrator only. One session.*

1. Confirm the current branch is `v2` (`git branch --show-current`). Confirm `DO-NOT-READ.md` is filled. Confirm `sources/` is in `.gitignore`; add it if not.
2. Clone the three sources fresh into `sources/` (§1.1). Record each SHA in `STATE.md`.
3. Write `scripts/synthesis/manifest.ts` (Bun): walks a source, applies the scope rules in §1, emits `docs/analysis/manifest/<pkg>.md` — one row per in-scope file: path, bytes, type (`skill` / `command` / `reference` / `agent` / `script` / `template` / `doc` / `config` / `external-doc`), checked (`[ ]`). For `rjm`, the script follows the invocation graph from the entry points and applies the exclusion list; it emits a second list, `docs/analysis/manifest/rjm-excluded.md`, of everything reachable but excluded, so the boundary is auditable. For `addy` and `matt`, it derives the external-doc URL for each in-scope skill, fetches the page once, saves it under `sources/<pkg>-external/<slug>.md`, and adds a manifest row pointing at the saved copy. A page that cannot be fetched gets a row marked `unavailable` — never silently dropped.
4. Partition each manifest into inventory work units of at most ~50 KB source each, keeping a skill's `SKILL.md`, `references/`, and `scripts/` in the same unit. Record units in `STATE.md` § Work units.
5. Read brain conventions (§1.3). Write `docs/analysis/brain-conventions.md`.
6. Write `scripts/synthesis/coverage.ts` (Bun): reports unchecked manifest rows and inventory entries with empty required fields. Write `scripts/synthesis/glossary-lint.ts` (Bun): reports canonical-looking terms used in `docs/` that are not defined in `GLOSSARY.md`.
7. Write `docs/plan/sessions/000-setup.md`. Update `STATE.md`: phase = 1.

**Done when:** three manifests exist, every row assigned to a unit, all three scripts run clean, conventions recorded, external docs snapshotted.

### Phase 0.5 — Landscape scan (bounded, decision-gated)

*Mode: orchestrator, optionally one research subagent. One session at most. Runs only if `STATE.md` shows D-007 as `active` with `landscape_scan: yes`.*

The three sources were chosen by Peter as well-regarded lifecycle implementations that are not worlds apart. This phase asks one bounded question: **is there a fourth that clearly fills a gap the three do not cover?** It is a scouting step, not a source hunt, and it cannot add a source on its own — it produces a recommendation and Peter decides.

1. **Candidates.** Search for coding-agent lifecycle or workflow packages with evidence of community regard: stars and forks, being cited or linked by any of the three sources, coverage in well-known engineering blogs or newsletters, adoption by tool vendors. Seed the search with candidates already known — as of this method's writing, `github/spec-kit` (spec → plan → tasks → implement, slash-command based) and `obra/superpowers` (brainstorm → plan → execute → TDD, skills-based) are the two most obvious; the scan must verify their current state and must look beyond them. Cap the shortlist at eight.
2. **Fit rubric.** For each candidate, from its README and top-level docs only (do not inventory it), score: explicit lifecycle phases (yes/no), targets coding agents rather than humans (yes/no), delivered as skills/commands/prompts rather than an SDK or framework (yes/no), actively maintained (last commit within six months), approach compatible with the three sources (one paragraph — where it aligns, where it diverges). Then the decisive question: **what does it have that none of the three has?** If the answer is "a variant of something already present", it does not fill a gap.
3. **Output.** `docs/analysis/landscape.md`: the shortlist, the rubric scores, and one of three recommendations per candidate — `add-as-source` (would be inventoried in full and change every later phase's scope), `consult-only` (not inventoried; may be cited in a Phase 4 decision as an external definition or tiebreaker, with the specific concepts it is worth consulting on), or `skip`. Default is `skip`. `add-as-source` is recommended only when a candidate clearly fills a named gap and the scan can estimate the cost (its size in bytes and files, and the sessions it would add).
4. **Peter decides.** The recommendation goes to Peter in the session handoff. His answer is a project decision (`D-008`) appended to `DECISIONS.md`. Only then does Phase 1 begin, with the manifest regenerated if a source was added.

**Cost to keep in view.** Each source at Addy's size adds roughly a third to Phases 1–4 and a proportional number of concordance rows and decisions. More sources do not make alignment easier; they make it larger. Three already triangulate well: a skill library (addy), a conversation-first toolkit with no commands (matt), and an enforced gated pipeline (rjm). A fourth earns its place only by covering something those three do not.

**Done when:** `landscape.md` exists with a recommendation for every shortlisted candidate, and D-008 is recorded.

### Phase 1 — Inventory

*Mode: fan-out. One subagent per work unit. Many sessions.*

For each unit, a subagent receives: the unit's file list, the inventory-entry template, rules R1–R6, the §4 checklist, and the current `GLOSSARY.md` (empty at first; the package-prefix convention still applies). It reads every file in full, runs every script, and returns one inventory entry per file plus a work-unit report.

The orchestrator writes each entry to `docs/analysis/inventory/<pkg>/<file-slug>.md` immediately on return, writes the report to `docs/analysis/inventory/<pkg>/_units/<unit-id>.md`, checks the rows off in the manifest, and updates `STATE.md`. Then dispatches the next unit.

**Verification sub-phase (1V).** After all units for a package are done, a verifier subagent receives the package's inventory and a random 15% of its source files, and answers: does any file contain a named concept, invocation, produced artifact, or defect that its inventory entry omits? Findings are written to `docs/analysis/inventory/<pkg>/_verification.md`. Omissions are fixed by re-running the affected unit. A package is done when 1V reports no omissions.

**Done when:** `coverage.ts` reports zero unchecked rows and zero empty required fields for all three packages, and all three `_verification.md` files report clean.

### Phase 2 — Concept cards

*Mode: fan-out by package. One subagent per package, or split by concept family if a package is large.*

From a package's inventory, produce one concept card per named thing (R6): `docs/analysis/concepts/<pkg>/<concept-slug>.md`. A card records the source's name for it (verbatim), its definition (verbatim quote with location), every place it is used, what phase it belongs to in that package, what it consumes and produces, and its implementation status (from inventory defects). A concept used in five skills gets one card with five usage entries, not five cards.

Also produce `docs/analysis/concepts/<pkg>/_index.md`: every card, one line each, grouped by the package's own phase names.

**Done when:** every named thing in every inventory entry's `concepts_named` field has a card, and `_index.md` lists them all. `coverage.ts` verifies the first condition.

### Phase 3 — Concordance

*Mode: single-threaded, orchestrator. Checkpoint to disk after every concept family.*

This is where alignment judgement begins, and it needs one mind holding the whole picture. Do not parallelise it.

Build `docs/analysis/concordance/` — one file per concept family (phases, artifacts, techniques, gates, roles, references, invocation patterns), each a table with one row per aligned concept candidate and one column per package. Every row is classified:

| Class | Meaning |
|---|---|
| `ALIGNED` | Same concept, same name, compatible definition across packages |
| `SYNONYM` | Same concept, different names |
| `HOMONYM` | Same name, different concepts |
| `PARTIAL` | Overlapping but not identical concepts |
| `UNIQUE` | Present in one package only |
| `CONFLICT` | Packages define it incompatibly or sequence it differently |

Each cell links to the concept card. Each row has a `notes` field for what the difference actually is, with locations.

Three concordances get their own files regardless of family because they are structural: `phases.md` (what each package calls its lifecycle stages and where the boundaries fall), `artifacts.md` (spec / PRD / one-pager / brief / plan / ticket / task and what each package means by each), and `sequencing.md` (what must precede what, in each package).

**Done when:** every concept card appears in exactly one concordance row; every row is classified; `_summary.md` gives counts per class per family.

### Phase 4 — Alignment decisions

*Mode: single-threaded orchestrator, then one adversarial pass.*

For every `SYNONYM`, `HOMONYM`, `PARTIAL`, and `CONFLICT` row, and for every `UNIQUE` row where inclusion is a judgement call, write a decision in `DECISIONS.md` using the decision template: canonical term, canonical definition, which package's version is adopted (or which parts of which), what is dropped and why, rejected alternatives, and the concordance row it resolves. Add the canonical term to `GLOSSARY.md` in the same step.

`PREFERENCES.md` is an input: Peter's stated preferences are weighed, cited when followed, and cited with reasons when not.

**Adversarial pass (4V).** A reviewer subagent receives `DECISIONS.md`, `GLOSSARY.md`, and the concordance, and hunts for: two active decisions that conflict; a decision that uses a term not in the glossary; a glossary term with no decision behind it; a concordance row with no decision that needed one; a decision whose rationale does not match its cited evidence. Findings are resolved by new decisions (R8), not edits.

**Done when:** every non-`ALIGNED` concordance row is resolved by a decision, `glossary-lint.ts` runs clean on `docs/`, and 4V reports clean.

### Phase 5 — Lifecycle specification

*Mode: single-threaded orchestrator.*

Write `docs/plan/lifecycle-spec/`:

- `00-overview.md` — the phases, one paragraph each, and the diagram
- `01-phases.md` — for each phase: canonical name, purpose, entry criteria, exit criteria, artifacts consumed, artifacts produced (canonical names and on-disk paths), skills composed, references used, roles involved, gates
- `02-artifacts.md` — every artifact: canonical name, definition, schema or template, who produces it, who consumes it, where it lives
- `03-skills.md` — every skill to be built: name, phase, purpose, inputs, outputs, what it invokes, which source material it draws from (`path:line` in `sources/`), which decisions govern it
- `04-references.md` — every reference document to be written or adapted, with sources
- `05-roles.md` — every agent or subagent role, if the spec has them
- `06-sequencing.md` — the order of phases, what can be skipped and when, how one phase hands to the next (artifact contract, not conversation state)
- `07-traceability.md` — every spec element → concordance rows → decisions

Every sentence in the spec that asserts something about a source cites `path:line`. Every canonical term is in the glossary. Every design choice is a decision.

**Done when:** `glossary-lint.ts` is clean, `07-traceability.md` has no unlinked elements, and `docs/plan/sessions/` has a handoff note titled *Spec ready for review*.

### ⏸ Human gate

The agent stops. Peter reads `lifecycle-spec/`. He may write review notes in `docs/plan/REVIEW.md`. Revisions are new decisions and spec edits, then another *Spec ready for review* handoff. When satisfied, Peter writes `human_approval: APPROVED` and the date in `STATE.md`. Only then does Phase 6 begin.

### Phase 6 — Implementation plan

*Mode: orchestrator.*

From `03-skills.md`, `04-references.md`, `05-roles.md`, produce `docs/plan/implementation/plan.md`: one build unit per skill, reference, command, or agent, in dependency order (references before the skills that load them; skills before the commands that compose them). Each unit names its spec sections, its source material, its brain-conventions constraints, and its acceptance criteria. Record units in `STATE.md`.

### Phase 7 — Build and review

*Mode: fan-out per build unit, each followed by an adversarial review; capped at 3 review rounds per unit.*

A builder subagent receives: the unit's spec sections, the traced source material (the actual text from `sources/`, not a summary), `GLOSSARY.md`, `brain-conventions.md`, the relevant decisions (including D-009), and R9. It produces the artifact in brain's tree — the canonical Claude Code form **and** its Antigravity mirror where the standards differ (§1.3) — and a build report at `docs/plan/implementation/reports/<unit-id>.md` that names both files.

A reviewer subagent receives the built artifact, the same spec sections, the glossary, and the conventions, and checks: every term is canonical; every spec requirement for this unit is met; every path the artifact references exists; every script runs and its exit codes match its documentation (the §4 checklist, applied to our own output); nothing from a source was ported that the inventory marked as a defect. Findings go back to the builder. Three rounds maximum; an unresolved unit after round 3 is escalated to Peter in the session handoff, not silently accepted.

**Done when:** every build unit has a clean review and its report on disk.

### Phase 8 — Integration verification

*Mode: orchestrator plus one adversarial subagent.*

Run the §4 checklist across the whole built lifecycle as a system: do all skills use the same artifact paths; does every phase's output match the next phase's expected input; does `glossary-lint.ts` run clean on the built skills; does a dry run of the full lifecycle on a small synthetic feature complete without a phase asking for something the previous phase did not produce. Then the **parity check (D-009)**: a table in `docs/analysis/integration-verification.md` with one row per skill, command, agent, and reference — canonical Claude Code path, Antigravity mirror path, and a verdict (`parity` / `divergence: <what and why>` / `no-equivalent: <capability one harness lacks, with the closest substitute>`). Mirrors are diffed against their canonical source for content drift. Fix findings as Phase 7 units.

**Done when:** integration verification is clean and `STATE.md` phase = `complete`.

---

## 6. Delegation strategy

### 6.1 Why fan-out for extraction and build, single-thread for alignment

Extraction (Phase 1, 2) and build (Phase 7) are mechanical against a fixed schema. Parallel subagents with fresh context produce more reliable results than one long context — each unit gets full attention, and drift from accumulated context cannot occur. The schema is what keeps parallel results consistent; without it, six subagents produce six vocabularies, and the alignment task grows instead of shrinking.

Alignment (Phase 3, 4, 5) is judgement across the whole picture. Parallelising it guarantees inconsistency: two subagents deciding related terms independently will disagree. One mind, checkpointing to disk after each family, is slower and correct.

### 6.2 Subagents, not agent teams

Use stateless subagents dispatched through whatever delegation mechanism this harness provides (a task/subagent tool, a spawned worker — whichever it is, each dispatch starts with fresh context), not a persistent agent team. Every unit's inputs are files on disk and every unit's outputs go to disk before the next unit starts, so there is no state a teammate would need to hold. Statelessness is what makes a unit reproducible: the same inputs give the same outputs regardless of what ran before. Persistent teammates accumulate context and drift. If the harness offers no delegation mechanism at all, the orchestrator runs the units itself, one at a time, in manifest order — slower, same files, same protocol.

### 6.3 The subagent contract

Every extraction or build subagent prompt contains, in this order:

1. The rules R1–R6 (and R9 for builders), verbatim from this file
2. The exact file list, with absolute paths, and an instruction that every file is read in full — using `Read` without offset or limit, continuing with offsets until the last line if the file is long
3. The template it fills, verbatim
4. The current `GLOSSARY.md` (so package-prefix convention or canonical terms are applied)
5. For builders: the spec sections, source excerpts, conventions, and decisions
6. The return format: the filled template(s) followed by the work-unit report

The orchestrator never summarises a subagent's return before writing it. It writes the return to disk verbatim, then reads what it wrote to update `STATE.md`. If a return is truncated or malformed, the unit is re-dispatched, not patched.

### 6.4 The adversarial reviewer contract

Reviewers (1V, 4V, Phase 7 review, Phase 8) are told they are looking for what was missed or got wrong, given the artifact under review and its inputs, and asked for findings with locations — never a summary of what is good. A reviewer that returns "looks fine" without having named the specific things it checked is re-dispatched with the §4 checklist made explicit.

### 6.5 Unit sizing

Inventory: at most ~50 KB of source per unit; a skill and its `references/` and `scripts/` stay together. Concept cards: one package per unit, or one concept family per unit for `addy` and `rjm`. Build: one artifact per unit. If a unit's subagent returns truncated output, split the unit.

---

## 7. Work-unit protocol

Every unit, every phase:

1. **Claim.** Mark the unit `in-progress` in `STATE.md` with the session number.
2. **Dispatch or execute.** Per §6.
3. **Persist.** Write outputs to their `docs/` paths. Verbatim from the subagent where applicable.
4. **Verify.** Read the written files back. Check required fields are non-empty. Run `coverage.ts` for Phase 1–2 units.
5. **Check off.** Mark the unit `done` in `STATE.md`. Update the manifest rows.
6. **Next.** Pick the next `pending` unit in order.

A unit that cannot complete is marked `blocked` with the reason. The session handoff names every blocked unit.

---

## 8. Session protocol

### 8.1 Session start

1. Read `docs/plan/METHOD.md` (this file) completely.
2. Read `docs/plan/STATE.md`. Note phase, current unit, human-approval field.
3. Read the most recent file in `docs/plan/sessions/`.
4. Read `docs/decisions/DECISIONS.md` and `docs/plan/GLOSSARY.md`.
5. Read `docs/plan/PREFERENCES.md`.
6. Verify: does the output file of the last `done` unit actually exist and pass field checks? If not, mark it `pending` and note the discrepancy in this session's handoff.
7. Verify the checkout and sources: `git branch --show-current` is `v2` — if not, stop and tell Peter; then, for each package, `git -C sources/<pkg> rev-parse HEAD` equals the SHA in `STATE.md`. If `sources/` is absent or any SHA differs, re-clone and check out the pin before continuing (§1.1). Confirm `sources/<pkg>-external/` snapshots exist for `addy` and `matt`.
8. Run `scripts/synthesis/coverage.ts` and `glossary-lint.ts`. Note the output.
9. Create `docs/plan/sessions/NNN-<phase>.md` with the start state.
10. Resume at the current unit.

Do not begin work before step 9 is done. Do not skip step 6 — it is the only check that catches a previous session that ended badly. Do not skip step 7 — analysing an unpinned checkout invalidates every `path:line` already recorded.

### 8.2 During the session

Watch context length. When the conversation is long enough that a compaction is plausible, finish the current unit and write the handoff *before* starting another. Unpersisted results lost to compaction are the single most likely failure of this project.

### 8.3 Session end

1. Finish the current unit or mark it `rolled-back` (never leave it `in-progress`).
2. Update `STATE.md`: phase, units, counts, anything Peter must act on.
3. Complete the session handoff file: what was done (unit IDs), what was found that the next session must know, what is blocked, what is next, and any question for Peter.
4. Commit on the branch with a message naming the session and units.
5. Say, in one paragraph to Peter: where things stand, what is next, and whether anything needs him.

---

## 9. Repository layout

Complete. Every tracked file and directory at the repository root is listed here with its role; when a new root-level item is added, this section is updated in the same session. A brand-new session must be able to identify every file in the repository from this section alone.

```
PROMPT.md                  ← the stable prompt Peter pastes to start every session;
                             it instructs reading METHOD.md and STATE.md; never edited by the agent
AGENTS.md                  ← harness context file, auto-read by the Antigravity CLI at startup;
                             points at METHOD.md/STATE.md and restates the fence; in Part 2 it also
                             becomes the plugin's Antigravity context mirror (D-009)
README.md                  ← the plugin's public description
package.json               ← @acmelabs/brain; Bun; `bun test`, `bun run typecheck`
bun.lock                   ← lockfile
bunfig.toml                ← Bun test configuration
tsconfig.json              ← TypeScript configuration
.gitignore                 ← includes sources/
.github/                   ← CI: typecheck + tests
agents/                    ← plugin output (canonical, Claude Code): agent definitions; Part 2
commands/                  ← plugin output (canonical, Claude Code): slash commands; Part 2
skills/                    ← plugin output (canonical, Claude Code): skills; Part 2
.agents/                   ← plugin output (Antigravity mirrors, D-009): skills/, agents/,
                             mcp_config.json, hooks.json; created in Part 2
scripts/
  synthesis/               ← project tooling for this synthesis; NOT plugin content
    manifest.ts            ← Bun
    coverage.ts            ← Bun
    glossary-lint.ts       ← Bun
sources/                   ← gitignored; pinned source clones; never enters brain's history
  addy/                    ← fresh clone at pinned SHA
  addy-external/           ← skills.addy.ie snapshots, one .md per skill
  matt/                    ← fresh clone at pinned SHA
  matt-external/           ← aihero.dev snapshots, one .md per skill
  rjm/                     ← fresh clone at pinned SHA
docs/
  plan/
    METHOD.md              ← this file; never changes
    STATE.md               ← living state; updated at every unit boundary
    GLOSSARY.md            ← canonical terms; grows from Phase 4
    PREFERENCES.md         ← Peter's stated inputs; read-only for the agent
    DO-NOT-READ.md         ← the fence: v2 only, history is not an input
    REVIEW.md              ← Peter's spec review notes (human gate)
    templates/             ← the schemas every subagent fills
    sessions/              ← one handoff file per session
    lifecycle-spec/        ← Phase 5 output; frozen at approval
    implementation/        ← Phase 6 plan; Phase 7 reports
  decisions/
    DECISIONS.md           ← append-only; every alignment decision
  analysis/
    brain-conventions.md   ← Phase 0
    landscape.md           ← Phase 0.5, if run
    manifest/              ← Phase 0; one file per package + rjm-excluded
    inventory/<pkg>/       ← Phase 1; one entry per source file
    concepts/<pkg>/        ← Phase 2; one card per named concept
    concordance/           ← Phase 3; one file per concept family
    integration-verification.md  ← Phase 8
```

---

## 10. Anti-drift checks

Run at every session start and at every phase gate.

| Check | Tool | Catches |
|---|---|---|
| Coverage | `coverage.ts` | Files read but not inventoried; entries with empty required fields; concepts named but without cards |
| Glossary lint | `glossary-lint.ts` | Canonical-looking terms used anywhere in `docs/` that are not defined; package-prefixed terms used after their decision exists |
| Last-unit verification | §8.1 step 6 | A session that claimed a unit done without persisting it |
| Decision consistency | 4V adversarial pass | Contradicting active decisions; undefined terms in decisions |
| Traceability | `07-traceability.md`, Phase 8 | Spec elements with no decision; built artifacts with no spec section |
| Fence | `DO-NOT-READ.md` + §2 | Any input outside the permitted set |

A failed check is fixed before new work begins. It is never noted and deferred.

---

## 11. Change propagation — standing protocol for mid-project changes

When anything already recorded changes mid-project — a scope rule, a source pin, a phase definition, a unit partition — the change is treated as its own work unit and run through this protocol. A file left inconsistent with a change is corrupted memory: the next session will act on it as true.

1. **Record** the change before propagating it. Append a decision stating the new rule completely (supersedes semantics). Edit the METHOD.md section that states the old rule so it matches the decision exactly. Note the METHOD change in the session handoff.
2. **Derive** the impact set — never recall it. Regenerate whatever artifact the changed rule produces (for a scope change: re-run `manifest.ts` and diff against the prior manifest via git — a project-made commit, permitted by §2 rule two). The diff is the authoritative impact list; save it under `docs/analysis/`. Trace forward mechanically: grep every changed path and affected concept slug across **every file `git ls-files` returns** — not by judgment.
3. **Propagate**, respecting the two kinds of files. Living state (STATE.md, manifests, inventory entries, concept cards, concordance, GLOSSARY, counts) is updated to full consistency; out-of-scope entries are removed or explicitly marked, never left looking current. Historical record (past session handoffs, superseded decisions) is never rewritten — it was true when written; the change is recorded forward.
4. **Verify** — completeness is proven, not asserted. Grep the full `git ls-files` set for every removed path and stale count: zero hits outside historical records. Run `coverage.ts` and `glossary-lint.ts`: clean. Then one adversarial subagent, reading every tracked file with no conversation context, hunts for any statement inconsistent with the newest decision; fix and re-run until it returns none.
5. **Report** three explicit lists: (a) every file changed and why; (b) every file examined and deliberately unchanged and why; (c) the exact verification commands and results. Every path in `git ls-files` appears in (a) or (b); a file in neither was not checked, and the task is not done.

---

## 12. What good looks like

At the end of Part 1, someone who has read none of the three source packages can read `lifecycle-spec/` and know exactly what brain's lifecycle is, what every term means, why each choice was made, and where each idea came from — down to the line. At the end of Part 2, every built skill uses the same words for the same things, every phase hands the next an artifact the next expects, every script runs and fails when it should, and nothing was ported that did not work at the source.
