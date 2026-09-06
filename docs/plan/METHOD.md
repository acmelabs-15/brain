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

**Documentation is in scope, not just code.** For every package, the in-scope set includes its README, `docs/`, `CONTRIBUTING`, `CLAUDE.md`, `AGENTS.md`, changelogs, and any other markdown that describes what the package does or how it is meant to be used. Documentation is where a package states its *intent*; the §4 checklist compares it against what the code does. Two sources also publish documentation outside the repo — Addy at `skills.addy.ie/skills/<name>/`, Matt at `aihero.dev/skills-<name>` — and those pages are in scope for every in-scope skill: the manifest lists them as type `external-doc` under the path `external/<slug>.md`, they are fetched once in Phase 0 and saved under `sources/<pkg>-external/<slug>.md` so every session reads the same snapshot (tooling resolves `external/…` to that directory), and they get inventory entries like any other file. A symlink in a source is a manifest row of type `symlink` and needs no entry; its target's rows do. A binary file — image, video, font, archive (`_lib.ts` `ASSET_EXTS`) — is a row of type `asset` and needs no entry either: it has no text to quote; the entry of every file that references it records the reference with `path:line`. Both kinds stay in the manifest and are listed by `unit-facts.ts` under *No card needed* so the worker knows they exist. An external page that describes a skill differently from its `SKILL.md` is a `doc-drift` defect with both locations cited.

### 1.2 rjm scope rule

rjm is a large repository. Only its lifecycle implementation is in scope. The in-scope set is derived, not listed: start from the entry points, follow every `Skill(...)`, `Task(subagent_type=...)`, `@file` and path reference, and stop at the exclusion boundary. `Task(subagent_type="x")` names an **agent**: it resolves to `.claude/agents/x.md`, and also to `.claude/skills/x/` when such a skill exists; `Skill("x")` resolves to `.claude/skills/x/`. `manifest.ts` implements exactly this and writes `rjm-excluded.md` so the boundary is auditable.

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

**Rule two — git history is not an input.** The working tree is the only readable state of this repository. Git is used to commit and push this project's work forward, never to read backward. The D-016 reset commit (message beginning `lifecycle synthesis: reset analysis (D-016)`) is the history boundary: git read commands (`git show <commit>:<path>`, `git log -p`, `git diff <commit>`) are permitted only between commits this project made, and only where a protocol in this file calls for it (§11 step 2). Commits earlier than the boundary are not inputs, whatever they contain — no reading their file contents, their diffs, or their messages, and no unbounded `git log`. What changed in this project is read from `STATE.md` and the session handoffs; that is what they are for.

If a needed file is unclear, treat it as forbidden, record it under *For Peter* in the handoff, and continue; if work cannot proceed without it, `STOP: needs Peter` per §8.3.

**Harness memory is off.** No automatic memory, knowledge base, or cross-session context feature of the agent harness is used for this work — nothing from earlier sessions or other projects may leak in. The agent does not rely on, look for, or write to any memory store. The only memory this project has is `docs/`. If the harness injects conversation summaries, knowledge items, or "memories" into the context, the agent disregards them entirely — they are not inputs, whatever they say. If a session finds itself "remembering" something about the sources that it cannot point to a `docs/` file for, that memory is treated as contamination and ignored.

### 2.4 Duplication ledger

Source packages repeat themselves: a harness mirror generated from a canonical tree (`rjm`: `.claude/**` → `src/copilot-cli/**`, declared in `templates/platforms/copilot-cli.yaml`), a hand-maintained second copy (`addy`: `commands/*.toml` ↔ `.gemini/commands/*.toml`), a symlink (`matt`: `AGENTS.md` → `CLAUDE.md`). The ledger makes this explicit so identical bytes are read once and every difference is read in full.

Phase 0 step 3 runs, for every package, `bun scripts/synthesis/dedupe.ts <pkg> sources/<pkg> docs/analysis/manifest/<pkg>.md > docs/analysis/manifest/<pkg>-duplicates.md`. The ledger has two lists and is regenerated, never hand-edited; it is re-run at every phase gate (§10).

- **EXACT** groups: files whose bytes are identical. One canonical path (a real file, never a symlink; the shortest path wins ties) and its aliases.
- **VARIANT** pairs: two files with the same name under different roots whose contents differ but share at least 60% of their distinct lines. The full `diff -u` of the pair is in the ledger.

The manifest is unchanged by the ledger: every path stays a row. The ledger changes how rows are *satisfied*:

(a) An EXACT alias row is satisfied by the canonical row's inventory entry. That entry lists every alias in its frontmatter `aliases:`; every quotation cites the canonical `path:line` and, where the alias is relevant, appends `(= <alias path>)`. No separate entry is written for an alias, and no alias is read a second time.

(b) A VARIANT pair is satisfied by one inventory entry for the longer member plus a **divergence card** (`templates/divergence-card.md`, written to `docs/analysis/inventory/<pkg>/_divergence/`). The divergence card quotes every hunk of the ledger diff verbatim — nothing elided — and classifies each hunk as `harness-substitution` (same meaning, different harness vocabulary), `content` (different meaning), or `generated-from` (declared build output, declaration cited). A `content` hunk becomes a Phase 3 concordance candidate; a `harness-substitution` hunk becomes a Phase 5 parity-table candidate (D-009).

(c) A GENERATED-FROM declaration found in a source (`sourceDir`/`outputDir` configuration, a "do not edit — generated" notice, a symlink) is recorded on the declared source's entry with a `path:line` citation. It never removes a row from the manifest and never substitutes for reading an output that differs from its declared source — rule (b) applies. `rjm`'s declared agent source (`templates/agents/*.shared.md`) differs from what Claude Code loads (`.claude/agents/*.md`) by up to several hundred lines per agent; both are inventoried, and the pair gets a divergence card.

The ledger keys on file bytes and file names, never on a package's directory layout, so it needs no per-package configuration.

---

## 3. Hard rules

These apply in every phase, to the orchestrator and to every subagent.

**R1 — Full reads. Coverage is proven, not asserted.** Every in-scope file is read from first line to last. "No sampling" is enforced by the manifest: every file is a row; a row is checked off only when its inventory entry exists on disk. Phase 1 is not done until every row is checked.

**R2 — Evidence, and scripts are run.** Every claim about a source names `path:line`. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths. Reading a script and describing what it appears to do is not evidence.

**R3 — Verbatim in extraction.** Inventory and concept-card fields marked *verbatim* carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis. Alignment happens later, on the record, not silently during reading.

**R4 — One vocabulary, from the glossary.** Until a term is decided in Phase 4, refer to it with its source and package prefix: `addy:spec`, `matt:spec`, `rjm:spec`. After a decision, use only the canonical term from `GLOSSARY.md`. Never introduce an analyst's own term for a source concept.

**R5 — Defect is not dismissal.** Record every defect found (broken reference, script bug, doc/code drift, unfailable gate) as a defect on the inventory entry. Evaluate the *design intent* of the thing separately from its *implementation status*. A broken implementation of a good idea is a good idea with a defect. Never port a defect; never discard a design because its implementation has one.

**R6 — Depth rule.** If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets a concept card. Named things are the unit of alignment. Examples: `jobs-to-be-done`, `how-might-we`, `definition-of-done`, `vertical-slice`, `acceptance-criteria`, `pre-mortem`, `ticket`, `spec`, `PRD`, `one-pager`.

**R7 — Persist before proceeding.** A work unit is complete only when its output file exists on disk and `units.ts show <unit>` reports it `done`. Results that exist only in conversation do not exist. Never end a session with an unpersisted unit; finish it or mark it `rolled-back` and note why.

**R8 — Decisions are append-only.** `DECISIONS.md` entries are never edited after the session that wrote them. To change a decision, append a new entry with `supersedes: D-NNN`. The superseded entry gets one line added: `superseded-by: D-MMM`. Nothing else in it changes.

**R9 — Bun only.** Every script written for this project — manifest generation, coverage checks, glossary lint, anything in Part 2 — is Bun/TypeScript. No Node-specific APIs, no Python, no shell scripts longer than a one-liner.

**R10 — Human gate.** Phase 6 does not begin until `STATE.md` has `human_approval: APPROVED` with Peter's date. The agent never writes that field.

**R11 — Dedupe fidelity and provable quotations.** Every citation `"…" — path:line` and `` `term` — path:line `` is byte-exact at that line; `quote-check.ts` proves it and a card with any FAIL is not verified. An EXACT alias row (§2.4) is satisfied by exactly one canonical entry that lists it; a VARIANT pair has a divergence card whose hunk count equals the ledger diff's. `coverage.ts` enforces both. Facts a script prints (bytes, lines, hashes, exit codes, manifest rows) are never retyped by hand.

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

The project tooling under `scripts/synthesis/` is shipped with the kit (§9) and is run, not written. Every command below is run from the repository root and its output and exit code go into the session handoff.

1. Confirm the current branch is `v2` (`git branch --show-current`). Confirm `DO-NOT-READ.md` is filled. Confirm `sources/` and `.teamwork/` are in `.gitignore`.
2. Sources: for each package, `git -C sources/<pkg> rev-parse HEAD` must equal the SHA in `STATE.md` § Source pins; if `sources/<pkg>` is absent or differs, clone fresh and `git -C sources/<pkg> checkout <sha>` (§1.1). Record the three verified SHAs in the handoff.
3. `bun scripts/synthesis/manifest.ts` — writes `docs/analysis/manifest/{addy,matt,rjm,rjm-excluded}.md` per §1 (one row per in-scope file; `rjm` by reachability from the §1.2 entry points; `external/<slug>.md` rows for the documentation pages, fetched once into `sources/<pkg>-external/`; a page that cannot be fetched is a row marked `unavailable`, never dropped). Then `bun scripts/synthesis/dedupe.ts <pkg> sources/<pkg> docs/analysis/manifest/<pkg>.md > docs/analysis/manifest/<pkg>-duplicates.md` for each package (§2.4). Read every manifest once, top to bottom, and note anything surprising in the handoff — a row that should not be there is a §1 problem to raise, not a row to delete.
4. `bun scripts/synthesis/partition.ts` — writes `docs/analysis/manifest/units.md` (unit → file assignment under both §6.5 caps, skills kept whole or split into labelled parts). Then `bun scripts/synthesis/units.ts init` — writes the unit status table `docs/plan/units.md` (every unit `pending`) and the counts into `STATE.md`. The table is never pasted or edited by hand.
5. Read brain conventions (§1.3). Write `docs/analysis/brain-conventions.md`.
6. Run every anti-drift check in §10 and record the output: `coverage.ts` (all rows unchecked, zero failures), `quote-check.ts --all` (prints `0 card(s)` and exits 0 — no cards yet), `memo.ts audit`, `partition.ts --check`, `units.ts check`, `prefix-check.ts`, `glossary-lint.ts`, `budget.ts --line`.
7. Write `docs/plan/sessions/000-setup.md`. Update `STATE.md`: phase = 1. Close per §8.3. The next conversation dispatches the first Phase 1 run itself (§6.3); Phase 0 dispatches nothing.

**Done when:** four manifests and three ledgers exist, `docs/analysis/manifest/units.md` and `docs/plan/units.md` exist and `units.ts check` is clean, every §10 check has run with its output recorded, conventions recorded, external docs snapshotted.

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

For each unit, a worker receives (§6.3 item 3) the output of `unit-facts.ts` for the unit and the read-list — the inventory-entry template, rules R1–R11, the §4 checklist, and the current `GLOSSARY.md` (empty at first; the package-prefix convention still applies) — which it reads from disk. It reads every file in full, runs every script, writes one inventory entry per file (one per EXACT group, plus a divergence card per VARIANT pair — §2.4) and a work-unit report, runs `quote-check.ts` on what it wrote, and returns.

Entries live at `docs/analysis/inventory/<pkg>/<file-slug>.md`, reports at `docs/analysis/inventory/<pkg>/_units/<unit-id>.md`, divergence cards under `_divergence/`. When the run's completion artifacts exist (`await-run.ts`) the primary agent runs §7 steps 5–8: stamps, verifies, writes `verified:`, marks the units through `units.ts` (never by editing a table), regenerates the manifests so `Checked` is derived, and records the run.

**Verification sub-phase (1V).** After all units for a package are done, a verifier subagent receives the package's inventory and a random 15% of its source files, and answers: does any file contain a named concept, invocation, produced artifact, or defect that its inventory entry omits? Findings are written to `docs/analysis/inventory/<pkg>/_verification.md` — a report, not a card: no file or directory whose name begins with `_` is a card, and the checks (`coverage.ts`, `memo.ts`, `quote-check.ts --all`) skip them (D-022). Omissions are fixed by **re-running the affected units, never by editing cards** (§6.3 item 5 — the primary agent writes no card). The procedure (D-022): (1) for every card the report names, `bun scripts/synthesis/units.ts owner <card path>` gives the unit; (2) `bun scripts/synthesis/units.ts rerun --session NNN <units…>` deletes those units' cards and reports and sets them `pending` (a re-run cannot go through §7 step 1 otherwise — the memo would HIT on unchanged inputs and skip the unit); (3) the units are dispatched as an ordinary run through §7 and §8.2, with the brief's re-run line (§6.3.1) so every Worker reads the package's `_verification.md` before it writes; (4) after the run is verified and checked off, the verifier subagent is dispatched again for the flagged files only and rewrites `_verification.md`. A package is done when its report's verdict is clean. Then Phase 1 is done and `STATE.md` moves to Phase 2.

**Done when:** `coverage.ts` reports zero unchecked rows, zero empty required fields and zero R11 problems for all three packages; `quote-check.ts --all` reports zero FAIL; `memo.ts audit` reports zero STALE and zero UNSTAMPED; and all three `_verification.md` files report clean.

### Phase 2 — Concept cards

*Mode: fan-out by concept unit — the same loop as Phase 1 (§7, §8.2), the same table, the same driver (D-023).*

From a package's inventory, produce one concept card per named thing (R6): `docs/analysis/concepts/<pkg>/<concept-slug>.md`. A card records the source's name for it (verbatim), its definition (verbatim quote with location), every place it is used, what phase it belongs to in that package, what it consumes and produces, and its implementation status (from inventory defects). A concept used in five skills gets one card with five usage entries, not five cards. The inventory of 2026-09-06 names 13,765 distinct things (addy 1,313 · matt 1,193 · rjm 11,259), so "one subagent per package" is not a unit of work; a unit is a set of at most 30 concept slugs (§6.5).

**Units.** The first Phase 2 conversation runs, once: `bun scripts/synthesis/partition-concepts.ts` (derives `docs/analysis/manifest/units-p2.md` from the inventory cards' `Concepts named` sections — the same lines `coverage.ts` demands a card for — deterministic, persisted), then `bun scripts/synthesis/units.ts init` (adds the `cc-<pkg>-N` units to the status table as `pending`; the Phase 1 rows keep their status), then one commit (`lifecycle synthesis: session NNN — Phase 2 partition`). From then on `budget.ts` sees the pending concept units and the session runs the §8.2 loop unchanged: `unit-facts.ts <cc-unit>` prints every concept of the unit with its verbatim name and every occurrence the inventory recorded (inventory card, source path:line, role), the source files to read, the expected card paths and the memo status; the brief (§6.3.1) names `templates/concept-card.md`; §7 steps 1–8 apply as written, with `memo.ts stamp-unit` and `memo.ts verify` doing per unit what Phase 1 did per card.

**What a Worker does with a concept.** Reads the cited lines of the source files (enough surrounding text to quote the definition byte-exactly — R3) and the citing inventory cards (their `Defects` feed `Implementation status`); writes the card from the template; runs `quote-check.ts` on it. Every occurrence becomes a `Where used` row. A name the inventory recorded that is an identifier, a file name, a heading or a label rather than a lifecycle concept still gets its card — coverage is mechanical — with `kind: name-only`, a `(used, not defined)` definition and one sentence of design notes saying so; Phase 3 filters on `kind`. Slugs are the inventory's (`conceptSlug` in `_lib.ts`: lowercased, runs of non-alphanumerics → `-`), never re-normalised here — that is Phase 3's job.

`docs/analysis/concepts/<pkg>/_index.md` is **derived**, never written by hand: `bun scripts/synthesis/concept-index.ts` regenerates it from the cards' frontmatter at §7 step 7 (as `manifest.ts` regenerates `Checked`), grouped by `package_phase`.

**Done when:** `coverage.ts` reports zero *concepts without card* and zero index problems for all three packages (a concept without a card is pending work while Phase 2 runs, not a failure — like an uncovered manifest row in Phase 1); `quote-check.ts --all` zero FAIL; `memo.ts audit` zero STALE and zero UNSTAMPED; `partition-concepts.ts --check` and `concept-index.ts --check` clean; every `cc-` unit `done`.

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

The agent stops. Peter reads `lifecycle-spec/`. He may write review notes in `docs/plan/REVIEW.md`. Revisions are new decisions and spec edits, then another *Spec ready for review* handoff. When satisfied, Peter writes `human_approval: APPROVED` and the date in `STATE.md`. Only then does Phase 6 begin. The headless driver (§8.5) stops when the *Spec ready for review* handoff exists; it is started again by hand after the approval.

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

### 6.2 Fresh context per unit; one team per run

Every unit's inputs are files on disk and every unit's outputs go to disk before the next unit starts, so no worker ever needs state from another. Whatever writes a unit starts from fresh context and the unit's dispatch — that is what makes a unit reproducible: the same inputs give the same outputs regardless of what ran before.

On the Antigravity CLI the delegation mechanism is **Teamwork**, used at the granularity of a **run** — a batch of units sized by the D-010 budget (§8.2) — never one team per unit (D-014, D-017). The primary agent dispatches every run itself, by the recipe in §6.3 item 8, and may dispatch several runs at the same time when the budget allows (§8.2); Peter is not in the loop. Inside one Teamwork run the Project Orchestrator fans units out to Workers with fresh context, all in parallel; the primary agent (this conversation) never reads a source file for inventory and never writes an inventory entry — it dispatches, waits on the run's files, verifies, records, commits. This method version is written for the Antigravity CLI; a different harness needs a §11 change that defines what stands in for the dispatch call and the run directory before any unit is dispatched on it.

`/boost` is not used before Phase 7. It is a code-verification pipeline (tests, edge cases, assertion feedback); Phases 3–6 produce judgement, which it cannot verify. In Phase 7 it may be invoked inside the Teamwork run for a build unit that is a hard, test-verifiable problem. Phase 4V and Phase 5 review use Teamwork's Document Review path (prompt wording "review this … / critique this …").

### 6.3 The delegation contract (D-014, D-017)

1. **Granularity.** One Teamwork run per batch of `n` units, `k` runs at a time, both from `budget.ts` (§8.2). Roles are referred to by their documented names (Sentinel, Project Orchestrator, Explorer, Worker, Critic, Challenger, Auditor, Success Auditor). Everything Teamwork does inside a run — the survey explorers, the Critic and Auditor, the Success Auditor, the independent post-victory audit — is part of the quality gate and is never asked to be skipped.
2. **The interview is answered by the primary agent from files (D-017).** The five interview fields plus the two fixed lines (Project Working Directory, Integrity mode) are written to `docs/plan/teamwork/<run-id>.md` from METHOD and STATE (§6.3.1) — never invented — and handed to Teamwork by the recipe in item 8. Integrity mode is `development` — its modes govern code provenance, not extraction fidelity; the fidelity lever is the Independent Verification field. Sessions 013–014 measured this path at 2,161 byte-exact citations and zero failures (D-010); the earlier agent-run interviews that produced the 18% baseline dispatched one team per unit with no verification field — the defect was the contract, not who answered.
3. **Dispatch message.** For every unit the Orchestrator hands a Worker: the output of `bun scripts/synthesis/unit-facts.ts <unit>` (paths, bytes, lines, hashes, ledger rows, memo status — computed by the Orchestrator, never retyped) and the paths of what the Worker must read from disk before writing: `docs/plan/METHOD.md` (R1–R11, §2.4, §4), `docs/plan/DO-NOT-READ.md`, the template(s) under `docs/plan/templates/`, `docs/plan/GLOSSARY.md`, and the brief. The fixed material is read from disk, never copied into the message (M3); runs 01–02 did exactly this.
4. **Whoever writes a verbatim field has the file open.** The Worker reads every assigned file in full before writing. Explorer summaries never supply a quotation. Before returning, the Worker runs `bun scripts/synthesis/quote-check.ts <card>` on every card it wrote and fixes every FAIL; a returned card with a FAIL is malformed and is re-dispatched, not patched.
5. **Ownership.** Unit deliverables are written to disk by the team under exclusive file ownership: only `docs/analysis/inventory/<pkg>/<slug>.md`, `_units/<unit>.md`, `_divergence/*.md` (and the Phase 2/7 equivalents). The team never writes `STATE.md`, the manifests, `GLOSSARY.md`, `DECISIONS.md`, `METHOD.md`, or anything under `docs/plan/`, and never runs git. The primary agent is the only writer of shared state and the only committer. Teamwork's own request/plan/progress artifacts live in the run's working directory `.teamwork/<run-id>/` (gitignored), never in `docs/`.
6. **Verification before check-off.** The Critic and Auditor judge against the interview's rubric: every required field non-empty, R3/R4 conventions, `coverage.ts` clean, `quote-check.ts` zero FAIL. When `await-run.ts` reports the run COMPLETE, the primary agent runs §7 steps 5–8, and only then are units `done` — through `units.ts`, never a table edit. A run whose completion artifacts never appear, or a check that fails, sends the unit back (`rolled-back`, re-dispatched in a later run) — never a hand edit by the primary agent. Sentinel messages that arrive in the conversation are read but are not the record; the files are.
7. **The numbers are D-010.** Units per run (`n`), runs at once (`k`) and the ceiling come from `budget.ts`, whose parameters are measured and stored in `docs/plan/budget-params.json`; the step-up rule in §8.2 is how they grow. Concurrency *inside* a run is fixed by the brief: one Worker per unit, all at once (§6.3.1). Left to itself the Orchestrator chose otherwise in the test series — 6 Workers for 12 units, 8 for 24, and five sequential gated milestones for 16 (65 minutes for a run that takes 13 in parallel) — with no effect on quality but every effect on wall time, which is why the brief now says it (D-021).
8. **The dispatch recipe.** For the plan `k × n`: `bun scripts/synthesis/units.ts pending <k×n>` names the units once; they are split in order into `k` disjoint sets of `n`. Then, per run, in this order: (1) `bun scripts/synthesis/budget.ts --record "run-start <run-id> n=<count>"`; (2) `bun scripts/synthesis/unit-facts.ts <unit> | grep -E 'MISSING|^# unit-facts'` once per unit — a `MISSING` line stops the dispatch of that unit (mark it `blocked`); the Workers get the full output from the Orchestrator, who runs `unit-facts.ts` itself (item 3); (3) the brief (§6.3.1) is written; (4) the units are marked `in-progress` with `units.ts mark`; (5) `<run-id> (k × n)` is added to this session's handoff on its `runs:` line; (6) one commit of the brief, `docs/plan/units.md`, `docs/plan/STATE.md` and the handoff (`git add` those paths; message `lifecycle synthesis: session NNN — dispatch <run-id>`); (7) one `invoke_subagent` call per run with `TypeName: "teamwork_preview"`, `Model: "inherit"` (so every worker provably runs the same model and effort as this conversation — `flash`/`pro` would not), `Role: "Teamwork Project Orchestrator"`, and `Prompt` = the five field answers verbatim followed by `Project Working Directory: <repo>/.teamwork/<run-id>` and `Integrity mode: development`. The call returns in seconds; the run continues on its own; (8) `budget.ts --record "dispatched <run-id>"`. With `k > 1`, steps (1)–(8) run for each of the `k` runs back to back, with disjoint unit sets and distinct run ids, before the wait. Then §7 step 4 (wait). The recipe is complete here: nothing under `~/.gemini`, no transcript, no `cli.log`, no earlier handoff is read to find it.

The primary agent never summarises a team's return before recording it. It records what the checks print, then reads what it wrote to update `STATE.md` and the results doc (the **results doc** is `docs/analysis/dynamic-batching-experiment.md` §7, one block per run).

**Quota.** A rate limit (429) inside a run is Teamwork's to handle, not the primary agent's: the Sentinel pauses the workers and resumes them when the quota bucket refills (sessions 006–007 recorded a four-hour pause that resumed and finished). So a STALLED run means **keep waiting** — and since D-022 `await-run.ts` does the waiting itself: when a run's files stop changing it keeps polling, in the same call, until they change again or three hours have passed (`--stall-max 180`), and only then returns (exit 4: run it again). One call is one model call; the production series showed that returning every few minutes through a 4–7-hour pause costs 8–10 % of the context window in failed calls and Sentinel-message replies (sessions 005 and 007), which is the one context risk observed in the whole series. Record the pause once in the results block with `grep -il '429\|quota' .teamwork/<run-id>/progress.md .teamwork/<run-id>/*/handoff.md` (the file evidence). A run is never rolled back for quota. It is rolled back only if its directory has shown no change for 12 hours, or if the conversation itself must end (the driver's `--print-timeout`, 12 hours) — and then the next session's §8.1 step 6 finds the run's directory and finishes or re-dispatches it. Nothing is sent to the team and no conversation is opened.

### 6.3.1 The interview brief (the five Teamwork fields)

The primary agent writes this file and passes its five answers and the two fixed lines, verbatim, as the `Prompt` of the dispatch call (§6.3 item 8). Every field is filled from METHOD and STATE — never invented.

```markdown
# Teamwork interview brief — <run-id>   (p1-run-NN; NN is sequential across the project, starting at 01 after the D-016 reset)

## Scope & Objectives
Phase <n> — <phase name> for units <list>, dispatched by session NNN. Purpose: exploration/analysis artefacts for the brain lifecycle synthesis. Audience: the next session of this project, which reads only files.

## Requirements
- Every unit in <list> produces the deliverables named by `unit-facts.ts`, filled from templates/<template>.md, obeying METHOD.md R1–R11.
- The Project Orchestrator runs `bun scripts/synthesis/unit-facts.ts <unit>` per unit and hands each Worker its full output plus the read-list of METHOD.md §6.3 item 3 (METHOD.md R1–R11/§2.4/§4, DO-NOT-READ.md, the templates, GLOSSARY.md, this brief).
- Workers read every assigned file in full; quotations are byte-exact with path:line.
- One Worker per unit, and every Worker dispatched at the same time: a Worker never receives a second unit, and no unit waits for another unit's milestone to be gated first. Review, challenge and audit run per unit or across the run — never as a sequence of gated milestones that holds units back (D-021: the unit caps of METHOD.md §6.5 are per Worker context).
- The Sentinel reports to the dispatching conversation only when the run is complete or blocked — no periodic progress messages: the dispatcher reads the run's files, and every message it receives costs it context (D-022).
- Deliverables are the only files written; nothing under docs/plan/ or docs/analysis/manifest/ is touched; no git.
- (Phase 2 only) Each concept gets one card from templates/concept-card.md; every occurrence unit-facts.ts lists becomes a `Where used` row; the definition is quoted byte-exactly from the cited source lines; a name that is not a lifecycle concept gets `kind: name-only`; slugs are exactly the ones unit-facts.ts prints.
- (re-runs after Phase 1V only) These units are re-runs: each Worker reads docs/analysis/inventory/<pkg>/_verification.md first and addresses every finding for its files; the earlier cards were removed.

## Independent Verification
An independent agent judges every card against METHOD.md R1–R11 and runs, from the repo root:
  bun scripts/synthesis/quote-check.ts <card>        → zero FAIL
  bun scripts/synthesis/coverage.ts                  → zero failures (uncovered rows elsewhere are not failures)
A card with any FAIL or empty required field is rejected back to its Worker.

## Acceptance Criteria
- Every unit in <list>: all deliverables exist, coverage.ts zero failures, quote-check.ts zero FAIL.
- The Success Auditor's report lists, per unit, the exact commands run and their exit codes.

## Project Working Directory
<absolute repo path>/.teamwork/<run-id>

## Integrity mode
development
```

### 6.4 The adversarial reviewer contract

Reviewers (1V, 4V, Phase 7 review, Phase 8) are told they are looking for what was missed or got wrong, given the artifact under review and its inputs, and asked for findings with locations — never a summary of what is good. A reviewer that returns "looks fine" without having named the specific things it checked is re-dispatched with the §4 checklist made explicit. The mechanical half of every review is `quote-check.ts` and `coverage.ts`; the reviewer's job is what those cannot check.

### 6.5 Unit sizing

Concept cards (Phase 2, D-023): at most 30 concept slugs **and** at most 300 occurrence rows per unit (`partition-concepts.ts`); concepts are taken in the order they are first named, inventory card by inventory card in manifest order, so the concepts of one card share a unit when the caps allow; a single concept over the occurrence cap is its own unit. The caps bound what one Worker reads (the cited source lines and inventory cards) and writes (30 cards); the 300-row cap exists because a name used in 195 places (`adr-035` in rjm) is 195 `Where used` rows.

Inventory: at most 50 KB of readable source **and** at most 12 readable files per unit (D-010: the two run-01 workers that compacted mid-unit held 29 and 55 files; every 1–6-file unit finished clean). The caps are per Worker context, which is why the brief gives every Worker exactly one unit (§6.3.1, D-021). A skill — the directory holding `SKILL.md`, at any depth — and its `references/`, `scripts/` and `assets/` stay together; a skill over either cap is split into consecutive parts, and every part's `unit-facts.ts` names the skill's `SKILL.md` as read-first context. Symlink and asset rows ride along at zero weight. A single file over 50 KB is its own unit — it must be read whole. `partition.ts` implements this and persists the assignment in `docs/analysis/manifest/units.md`; `units.ts` keeps the status table. Concept cards: one package per unit, or one concept family per unit for `addy` and `rjm`. Build: one artifact per unit. If a unit's worker returns truncated output, mark the unit `rolled-back`, and lower `FILE_CAP` or `BYTE_CAP` in `partition.ts` by a D-0xx decision followed by `partition.ts`, `units.ts init`, and `units.ts mark pending` for every unit (unit ids are positional, so a re-partition changes what an id names; §7 step 1 `memo.ts check` reuses every card that is still valid) — a §11 change.

---

## 7. Work-unit protocol

Every unit, every phase. In Phase 1 the steps run per **run** (a batch of units, §6.3): steps 1–3 for every unit of the run before dispatch, step 4 once per run, steps 5–7 for every unit after the run completes, step 8 once per run.

1. **Memo.** `bun scripts/synthesis/memo.ts check <unit>`. Every deliverable `HIT` → `units.ts mark done --session NNN <unit>`, `manifest.ts --no-fetch`, note `reused` against the unit in the handoff, and skip every other step for this unit. Otherwise continue.
2. **Claim.** Per §6.3 item 8, which gives the order: `bun scripts/synthesis/budget.ts --record "run-start <run-id> n=<count>"` first (once per run), the brief, then `bun scripts/synthesis/units.ts mark in-progress --session NNN <units…>`. `<count>` is the `n` of the verdict `budget.ts` printed just before — never a guess: the script refuses a `run-start` whose `n` is not the plan's (exit 2, printing the plan), so a refused label means run `budget.ts` again and record what it says (D-021: the test series recorded `n=16` then `n=12` twice, and `n=2` then `n=1` against a STOP). The unit table is never edited by hand.
3. **Dispatch.** Per §6.3 item 8 (which ends with `budget.ts --record "dispatched <run-id>"`). For single-threaded phases the primary agent executes the unit itself instead.
4. **Wait.** `bun scripts/synthesis/await-run.ts <run-id>… --wait 240`, repeated until it exits 0 (COMPLETE). Exit 3 means the runs are working (call again); exit 4 means a run has been silent for three hours — the quota case (§6.3): call again, do nothing else. Sentinel messages that arrive meanwhile are read, not answered at length — one short line at most; the files are the record. If the harness backgrounds the command, wait on it with the command-status tool rather than starting another.
5. **Stamp.** Every inventory or concept card the run produced (not divergence cards, not unit reports) is stamped per unit in one call with one line of output: `bun scripts/synthesis/memo.ts stamp-unit <unit> --model "<model>" --effort <effort>` (D-023; a concept card's inputs — every source file the inventory cites for it — are derived, never typed). Model and effort are the ones that actually produced the card: with `Model: "inherit"` (§6.3 item 8) that is this conversation's, read from the `model=` value of `budget.ts --line` (`Gemini 3.8 Flash (High)` → model `Gemini 3.8 Flash`, effort `high`); `unknown` if it cannot be read — never guessed. A card's `method_sha` covers the extraction contract only (§2.4, §3, §4 — D-020), so a between-session edit to any other section leaves every stamp valid; if a hash *definition* ever changes, `memo.ts restamp --all` re-hashes without touching model, effort or `verified:`.
6. **Verify.** `bun scripts/synthesis/memo.ts verify <unit>` per unit: it runs `quote-check.ts --summary` on the unit's cards and, at zero FAIL, writes `verified: <date> quote-check+coverage` into each card's frontmatter — the one edit ever made to a card, and since D-023 the script makes it (a 30-card unit would otherwise be 30 edits in this conversation); at any FAIL it writes nothing and exits 1 — the unit is malformed: mark it `rolled-back`, do not edit the card (the full `quote-check.ts <card>` shows which citation). Once per run: `bun scripts/synthesis/coverage.ts --quiet` (zero failures). Read the head of one card per unit (`head -n 15`). "The verifier" in the templates is the primary agent at this step.
7. **Check off.** `bun scripts/synthesis/units.ts mark done --session NNN <units…>` (refuses a unit whose report is missing — R7); regenerate the derived views — `bun scripts/synthesis/manifest.ts --no-fetch` (Phase 1: `Checked`) and `bun scripts/synthesis/concept-index.ts` (Phase 2: `_index.md`) — never hand-edited.
8. **Record and next.** Once per run: `bun scripts/synthesis/budget.ts --record "verified <run-id>"`, the run's block in the results doc (§8.3 step 2 names its fields), a commit `lifecycle synthesis: session NNN — <run-id> results`. Then `bun scripts/synthesis/budget.ts` decides whether another plan fits this conversation (§8.2).

A unit that cannot complete is marked `blocked` with the reason. The session handoff names every blocked unit. Every script named above is run and its exit code recorded in the handoff (evidence rule: commands and their output, never prose claims about what was done).

**Context discipline (D-010).** Every tool output lands in this conversation's context, and the context is the budget. Never `cat` a card, a manifest, the unit table or a transcript — `head`/`grep` the line needed; never read `STATE.md` more than once per run; never re-read `METHOD.md`; never print `unit-facts.ts` for more than one unit per command; never view a `scripts/synthesis/*.ts` file whole — `head -25` prints its usage, and the scripts are run, not read; never read a file outside this repository, and never search the filesystem for a file this manual names — every path here is relative to the repository root; record readings with `budget.ts --record`, not by pasting its full output into a document.

## 8. Session protocol

A **session** here is one conversation of the primary agent. It ends by plan, never by context pressure: the D-010 budget (`budget.ts`) decides how much is dispatched, and the session closes while the close cost is still in hand. Sessions are started by one action — Peter pasting `PROMPT.md`, or `drive.ts` doing it headless (§8.5) — and run to the end without a question to Peter unless the files are contradictory (then: end per §8.3 with a paragraph that begins `STOP: needs Peter`).

### 8.1 Session start

1. Read `docs/plan/METHOD.md` (this file) completely, in two views: lines 1–327, then 328–end (each under the file viewer's ~46 KB limit). Do not read any range twice. Paths in this manual are relative to the repository root (`/Users/peterkloss/Dev/ACMElabs/brain-v2`, the working directory); a same-named file elsewhere on the machine — in particular under `/Users/peterkloss/Dev/ACMElabs/brain/` — is not this project's file (§2, DO-NOT-READ.md).
2. Read `docs/plan/STATE.md`. Note phase, current unit, human-approval field. The unit table is not in it — `bun scripts/synthesis/units.ts status` gives the counts and `units.ts pending <n>` the next units; do not open `docs/plan/units.md`.
3. Read the most recent file in `docs/plan/sessions/`.
4. Read `docs/decisions/DECISIONS.md` and `docs/plan/GLOSSARY.md`.
5. Read `docs/plan/PREFERENCES.md` and `docs/plan/DO-NOT-READ.md`.
6. Verify the last unit (if no unit is `done` yet — the first Phase 1 session — record `none` and continue): `units.ts show <last done unit>`; `memo.ts check <unit>` (every deliverable HIT); `quote-check.ts --summary <its cards>` (the card paths are the *Deliverables* lines of `unit-facts.ts <unit>`; zero FAIL). If anything fails, mark it `pending` and note the discrepancy in this session's handoff. Any unit `in-progress` belongs to a conversation that did not close: find its run with `grep -l <unit> docs/plan/teamwork/*.md`; if `await-run.ts <run> --wait 0` says COMPLETE, finish it as §7 steps 5–8; otherwise mark it `pending`. In Phase 0 (no units yet) this step and step 8's `partition.ts --check` / `units.ts check` are skipped, and step 7's snapshot check is deferred to Phase 0 step 3.
7. Verify the checkout and sources: `git branch --show-current` is `v2` — if not, say `STOP: needs Peter` and end without committing anything; then, for each package, `git -C sources/<pkg> rev-parse HEAD` equals the SHA in `STATE.md`. If `sources/` is absent or any SHA differs, re-clone and check out the pin before continuing (§1.1). Confirm `sources/<pkg>-external/` snapshots exist for `addy` and `matt`. `git status --porcelain` is empty — the tree is committed and clean.
8. Run and record output and exit codes: `bun scripts/synthesis/prefix-check.ts` (note the combined hash), `bun scripts/synthesis/partition.ts --check`, `bun scripts/synthesis/units.ts check`, `bun scripts/synthesis/coverage.ts --quiet`, `bun scripts/synthesis/glossary-lint.ts`, `bun scripts/synthesis/memo.ts audit | tail -1`; from Phase 2 on, also `bun scripts/synthesis/partition-concepts.ts --check` and `bun scripts/synthesis/concept-index.ts --check` (both report "does not exist"/"nothing" harmlessly before Phase 2 has begun).
9. `bun scripts/synthesis/budget.ts --record start` — the session's starting context, from the instrument, never from memory. If it reports that `.teamwork/ctx-log.jsonl` is missing, the instrument is off — Peter's statusline configuration (interactive) or `drive.ts` (headless) writes that file; the agent never opens or edits anything under `~/.gemini`, it only reports the missing log: do no unit work in any phase, Phase 0 included — finish §8.1, then `STOP: needs Peter` per §8.3 without dispatching.
10. Create `docs/plan/sessions/NNN-<phase>.md` with the start state, the prefix hash, and the script outputs. `NNN` = the previous handoff's number + 1 (`000` for Phase 0).
11. Resume at the current unit.

Do not begin work before step 10 is done. Do not skip step 6 — it is the only check that catches a previous session that ended badly. Do not skip step 7 — analysing an unpinned checkout invalidates every `path:line` already recorded.

### 8.2 During the session — the D-010 budget

Context is budgeted, not watched. The instrument is `bun scripts/synthesis/budget.ts`: it reads this conversation's context from `.teamwork/ctx-log.jsonl` (written by the statusline, or by `drive.ts` headless), the model's ceiling from `docs/plan/context-ceilings.json`, the measured costs from `docs/plan/budget-params.json`, and the pending units from `docs/plan/units.md`, and prints a verdict. Its arithmetic:

```
headroom = governing ceiling − used − C            C = close cost (§8.3), always reserved
a plan of k runs × n units fits iff  k × (R + n × u) ≤ headroom
      R = fixed cost of one run    u = cost of verifying one unit    (both measured, budget-params.json)
recommended = most units that fit, with n ≤ max_clean_run and k ≤ max_clean_concurrency; n grows before k
PROBE       = when the recommendation is already the proven maximum and the next size in the series fits,
              that next size is dispatched — one step at a time, never two
```

The loop of a session is: `budget.ts` → its verdict names `k × n` → §7 steps 1–3 for the units (claim records `run-start`, dispatch records `dispatched`) → §7 step 4 (wait) → §7 steps 5–8 (verify, check off, record `verified`) → `budget.ts` again. `STOP` means go to §8.3.

**Step-up rule.** A run at a size or concurrency above the proven maximum is *clean* when: every returned card has zero `quote-check.ts` FAIL; no rot metric (below); no quota pause (`grep -il '429' .teamwork/<run-id>/progress.md .teamwork/<run-id>/*/handoff.md` finds nothing — a run that paused on quota still counts for quality, but its wall time measures the quota, not the harness, so it is not a step-up measurement and the probe is repeated next time); and its wall time (from `await-run.ts` — dispatch to COMPLETE) is within `wall_time_bound_pct` of `last_clean_wall_minutes` — when that parameter is set; a new phase starts with it `null` and with `max_clean_run` back at 16, because its units are a different kind of work (D-023), and the first clean run of the phase sets the bound — with one Worker per unit (§6.3.1) a longer wall time at the same unit caps means the harness is queueing conversations, and that is the concurrent-stream limit. The wall-time test is only valid between runs of the same shape: if the run's files show that the Orchestrator did not give every unit its own Worker at once (fewer `worker_*` directories under `.teamwork/<run-id>/.agents/` than units, or milestone gating in its `progress.md`), the run counts for quality but not as a wall-time measurement, and the probe is repeated next time (D-021: the test series' 24-unit run was clean at 927 PASS / 0 FAIL but ran 8 Workers for 24 units, so its 27.6 minutes measured the Orchestrator, not the harness). After a clean probe: `budget.ts --set max_clean_run=<n>` or `max_clean_concurrency=<k>` and `last_clean_wall_minutes=<m>`. After a probe that is not clean: the maximum stays, the reason is recorded in the results doc, and the series does not try that step again in this project without a D-0xx decision.

**Rot metrics** (recorded with `used` at that moment; any one stops dispatch for this conversation): a §7 step skipped; a unit marked done without read-back; a `units.ts check` failure; a decision cited that `DECISIONS.md` does not contain; a role or file named by a name that is not its documented name; a `quote-check.ts` FAIL on a returned card; an empty required field; a package prefix dropped (R4); a `coverage.ts` regression.

**Ceiling.** The governing ceiling is per model in `context-ceilings.json` and is raised only by that file's `raise_rule` on this project's own evidence (a conversation that peaked above the threshold with zero rot metrics — the handoff's `context_used_peak`). Harness compaction is not a ceiling (§8.4). A fixed-set file (`docs/plan/prefix.json`) is never edited mid-conversation; if one must change, that is a §11 change and the session ends after recording it.

### 8.3 Session end

1. Finish the current run or mark its units `rolled-back` (never leave a unit `in-progress`).
2. Update `STATE.md`: phase, counts (`units.ts sync`), anything Peter must act on. Confirm every run of this session has its block in `docs/analysis/dynamic-batching-experiment.md` §7 (written at §7 step 8): units, `budget.ts --line` at run-start / dispatched / verified, wall time, 429s, quote-check totals, the Success Auditor's report path.
3. Run `bun scripts/synthesis/prefix-check.ts --compare <start hash>`; record the result. `bun scripts/synthesis/budget.ts --record close`, then `budget.ts --measure` — and store what it derives with the `--set` command it prints, so the next conversation plans with this one's measured costs.
4. Complete the session handoff file: what was done (unit IDs), what was found that the next session must know, what is blocked, what is next, any question for Peter, every script run with its exit code, and `context_used_start` / `context_used_peak` from `budget.ts`.
5. Commit on the branch with a message naming the session and runs. `git status --porcelain` must be empty afterwards.
6. Say, in one paragraph to Peter: where things stand, what is next, and whether anything needs him. Commands and output, not claims. If something needs him, the paragraph begins `STOP: needs Peter` (the headless driver stops on it).

### 8.4 If the harness compacts this conversation

The CLI may replace the older part of a conversation with a summary (a `CHECKPOINT` or "Resuming from a compaction" notice). It has done so at 10% of the window and not at 18% — it is not a function of context used and is not planned around. It is harmless here because the state is on disk. On any such notice: re-read `STATE.md` and the latest handoff; run `units.ts status`, `budget.ts` and `await-run.ts --wait 0` for every run named in this session's handoff; continue at §7 step 4 or 5 for any run in flight (`await-run.ts` tells which). The notice ends with a pointer to a transcript file under `~/.gemini` — that file is outside the fence (§2) and is not read, whatever the notice says. Record the compaction (used before, per `budget.ts`) in the handoff's context note.

### 8.5 Headless operation (D-018, D-021)

`bun scripts/synthesis/drive.ts` starts conversations without a paste: `agy -p "<PROMPT.md>" --output-format stream-json --model <slug> --print-timeout 720m` in the repo root, one after another, from Phase 0 to the human gate. It stops, and says why, when: `STATE.md` shows Phase 6 or later, or the newest handoff is titled *Spec ready for review* (the gate — Peter's turn); a conversation ended with `STOP: needs Peter` or a `needs_peter: yes` handoff; a conversation left the working tree dirty (the §8.3 commit did not happen); two conversations in a row ended without status SUCCESS; a conversation in a fan-out phase (1 or 2) ended with the phase, the unit counts and the run directories all unchanged (it did nothing — every earlier stop of this kind was a method defect worth a look); a step's context exceeded the window (the usage fields would not be the prompt size); or the file `.teamwork/drive/STOP` exists — the graceful stop: `touch .teamwork/drive/STOP` lets the running conversation finish and commit, then the driver stops and removes the file. Ctrl-C is the hard stop: the driver kills the agy conversation it started (it does not die on its own — session 007 of the test series outlived its Ctrl-C by nine hours, verifying and committing a run nobody was watching), and the next session's §8.1 step 6 finds the `in-progress` units and finishes or re-dispatches the run. Teamwork's workers are separate agy processes and may outlive both; after a hard stop, `pgrep -lf agy` must print nothing before anything else is done in the tree. A conversation whose status is ERROR but whose handoff was written and committed with a clean tree (agy's "The stream was interrupted" after the final paragraph — session 004 of the test series, 2,086 PASS / 0 FAIL, everything committed) is a finished conversation and is shown in yellow, not counted as a failure.

The driver passes `--dangerously-skip-permissions` unless started with `--ask`, because headless mode has no prompt to answer; the 12-hour `--print-timeout` outlives a Teamwork run paused on quota (§6.3). agy renders the statusline in headless mode too, so the context series in `.teamwork/ctx-log.jsonl` normally comes from the statusline as in interactive mode; the driver writes the series itself only if the statusline does not (from the stream's per-step `usage.input_tokens + cache_read_tokens`, which matched the statusline's peak within 0.1% on 2026-09-05), and saves every event stream under `.teamwork/drive/`, the record of every conversation in `.teamwork/drive/drive.log`. The terminal shows one task block per conversation (`drive-ui.ts`): a spinner with the conversation, session and unit count, a short scrolling log of what is happening, and on completion a green ✔ (clean), yellow ▲ (finished — look at `drive.log`) or red ✖ (stopped — the reason follows). The agent's behaviour is identical in both modes: nothing in this file depends on how the conversation was started. Teamwork dispatch works headless: the test series (sessions 001–007, 2026-09-05) dispatched nine runs and verified 428 cards at 8,466 PASS / 0 FAIL from one driver command.

## 9. Repository layout

Complete. Every tracked file and directory at the repository root is listed here with its role; when a new root-level item is added, this section is updated in the same session. A brand-new session must be able to identify every file in the repository from this section alone.

```
PROMPT.md                  ← the stable prompt that starts every session — pasted by Peter, or passed by drive.ts (§8.5);
                             it instructs reading METHOD.md and STATE.md; never edited by the agent
AGENTS.md                  ← harness context file, auto-read by the Antigravity CLI at startup;
                             points at METHOD.md/STATE.md and restates the fence; in Part 2 it also
                             becomes the plugin's Antigravity context mirror (D-009)
README.md                  ← the plugin's public description
package.json               ← @acmelabs/brain; Bun; `bun test`, `bun run typecheck`
bun.lock                   ← lockfile
bunfig.toml                ← Bun test configuration
tsconfig.json              ← TypeScript configuration
.gitignore                 ← includes sources/ and .teamwork/
.github/                   ← CI: typecheck + tests
agents/                    ← plugin output (canonical, Claude Code): agent definitions; Part 2
commands/                  ← plugin output (canonical, Claude Code): slash commands; Part 2
skills/                    ← plugin output (canonical, Claude Code): skills; Part 2
.agents/                   ← plugin output (Antigravity mirrors, D-009): skills/, agents/,
                             mcp_config.json, hooks.json; created in Part 2. Teamwork scratch never lives here.
.teamwork/                 ← gitignored; Teamwork run working directories (<run-id>/) with their request/plan/progress
                             artifacts — read only through await-run.ts and the `grep -l` of §6.3/§8.2; ctx-log.jsonl (context series), readings.jsonl
                             (budget.ts --record), drive/ (headless event streams). Instrumentation, not an input to analysis.
scripts/
  synthesis/               ← project tooling for this synthesis (pure Bun); NOT plugin content
    _lib.ts                ← shared helpers (hashing, frontmatter, manifest/units parsing, slugOf)
    manifest.ts            ← the coverage manifests; Checked is derived from the card listing (R1)
    partition.ts           ← Phase 1 work units from the manifests under both caps; persists manifest/units.md (§6.5)
    partition-concepts.ts  ← Phase 2 work units from the inventory's Concepts named sections; persists manifest/units-p2.md (§6.5, D-023)
    concept-index.ts       ← derives concepts/<pkg>/_index.md from the concept cards (§5 Phase 2, §7 step 7)
    units.ts               ← the unit status table docs/plan/units.md: init / status / pending / show / mark / owner / rerun / sync / check (§7, §5 1V)
    budget.ts              ← the D-010 budget: k runs × n units that fit; --record / --measure / --set (§8.2)
    await-run.ts           ← waits on .teamwork/<run-id>/ completion artifacts, through quota pauses in one call; the primary agent's only view of a run (§6.3)
    drive.ts               ← headless driver: conversation after conversation via `agy -p`, Phase 0 to the human gate (§8.5, D-018, D-021)
    drive-ui.ts            ← the driver's terminal display (@clack/prompts, a devDependency used only here): live line, milestones, verdicts
    dedupe.ts              ← the duplication ledger (§2.4)
    coverage.ts            ← manifest ↔ cards, required fields, R11 (§10)
    quote-check.ts         ← byte-exact citation check (R3, R11)
    memo.ts                ← the result store: check / stamp / restamp / audit (M1, D-020)
    unit-facts.ts          ← the computed facts a dispatch carries (M5)
    prefix-check.ts        ← hash of the fixed set in prefix.json (M3)
    glossary-lint.ts       ← a stub until Phase 4 (reports clean while GLOSSARY.md has no entries); the lint rules land with Phase 4
sources/                   ← gitignored; pinned source clones; never enters brain's history
  addy/                    ← fresh clone at pinned SHA
  addy-external/           ← skills.addy.ie snapshots, one .md per skill (manifest rows `external/<slug>.md`)
  matt/                    ← fresh clone at pinned SHA
  matt-external/           ← aihero.dev snapshots, one .md per skill
  rjm/                     ← fresh clone at pinned SHA
docs/
  plan/
    METHOD.md              ← this file; changes only through §11
    STATE.md               ← living state: position, pins, phase table, unit COUNTS (units.ts sync), other unit tables
    units.md               ← the Phase 1 unit status table; written only by units.ts; never read whole by the agent
    budget-params.json     ← D-010 measured costs and proven maxima; changed only by budget.ts --set
    context-ceilings.json  ← per-model strict / plateau / governing ceilings with evidence
    GLOSSARY.md            ← canonical terms; grows from Phase 4
    PREFERENCES.md         ← Peter's stated inputs; read-only for the agent
    DO-NOT-READ.md         ← the fence: v2 only, history is not an input
    REVIEW.md              ← Peter's spec review notes (human gate)
    prefix.json            ← the fixed set: files that never change inside a conversation (M3)
    templates/             ← the schemas every worker fills: inventory-entry.md, concept-card.md, concordance-row.md,
                             decision.md, divergence-card.md, session-handoff.md, work-unit-report.md
    sessions/              ← one handoff file per session
    teamwork/              ← one interview brief per Teamwork run (§6.3.1); written and dispatched by the primary agent
    lifecycle-spec/        ← Phase 5 output; frozen at approval
    implementation/        ← Phase 6 plan; Phase 7 reports
  decisions/
    DECISIONS.md           ← append-only; every alignment decision
  analysis/
    brain-conventions.md   ← Phase 0
    landscape.md           ← Phase 0.5, if run
    manifest/              ← Phase 0; <pkg>.md, rjm-excluded.md, <pkg>-duplicates.md, units.md
    inventory/<pkg>/       ← Phase 1; one entry per source file; _units/, _divergence/, _verification.md
    concepts/<pkg>/        ← Phase 2; one card per named concept; _units/<cc-unit>.md reports; _index.md derived by concept-index.ts
    concordance/           ← Phase 3; one file per concept family
    dynamic-batching-experiment.md ← the D-010 measurement protocol, the run results (§7), and the 2026-09-04 findings (§9)
    rationale/             ← D-019: the record of why — research, measurements, constraints, timeline, open questions;
                             an input, never a rule; sessions append only to 12-open-questions.md when a probe lands
    integration-verification.md  ← Phase 8
```

---

## 10. Anti-drift checks

Run at every session start and at every phase gate. Every run is recorded in the handoff with its exit code.

| Check | Tool | Catches |
|---|---|---|
| Coverage | `coverage.ts` | Manifest rows without a card (or with a phantom check-off); cards without a row; empty required fields; R11 alias claims ≠ 1; divergence cards missing or with a hunk count ≠ the ledger |
| Quotations | `quote-check.ts --all` | Any `"…" — path:line` or `` `term` — path:line `` that is not byte-exact at that line |
| Result store | `memo.ts audit` | Cards whose recorded inputs, extraction contract (METHOD §2.4, §3, §4 — D-020) or template hash no longer match the tree; an edit elsewhere in METHOD invalidates nothing |
| Partition | `partition.ts --check` | `manifest/units.md` that no longer matches the manifests |
| Concept partition | `partition-concepts.ts --check` | `manifest/units-p2.md` that no longer matches the inventory's Concepts named sections (Phase 2+) |
| Concept index | `concept-index.ts --check` | a `concepts/<pkg>/_index.md` that no longer matches the cards (Phase 2+) |
| Unit table | `units.ts check` | `docs/plan/units.md` out of step with the manifests or with `STATE.md` counts; a `done` unit whose report is missing |
| Budget | `budget.ts --line` | Context above the governing ceiling; a plan dispatched that did not fit; the instrument not logging |
| Ledger | `dedupe.ts` (regenerate, `git diff --stat`) | Ledger drift after a manifest change |
| Fixed set | `prefix-check.ts --compare` | A fixed-set file edited mid-conversation |
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
