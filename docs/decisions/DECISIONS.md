# DECISIONS — Lifecycle Synthesis

Append-only. Entries are never edited after the session that wrote them (METHOD.md R8). To change a decision, append a new one with `supersedes:` and add a single `superseded-by:` line to the old one.

Two kinds of entry live here:

- **Project decisions** (`D-001`–`D-099`) — scope, method, constraints. Made by Peter before or during the project.
- **Alignment decisions** (`D-100` onward) — canonical terms, definitions, sequencing, composition. Made by the agent in Phase 4 and later, each resolving one or more concordance rows.

Template: `docs/plan/templates/decision.md`.

---

## D-001 — Three sources; rjm lifecycle only

- **date:** 2026-09-01
- **made-by:** Peter
- **status:** active
- **decision:** The synthesis draws from exactly three packages: Addy Osmani's `agent-skills` (entire repo), Matt Pocock's `skills` (entire repo, deprecated content inventoried but never adopted), and rjmurillo's `ai-agents` **lifecycle implementation only** — the six lifecycle phases (`/spec`, `/plan`, `/build`, `/test`, `review`, `/ship`) and what they directly compose.
- **explicitly excluded:** rjm's memory implementation in its entirety — Serena, Forgetful, every `memory*` skill, `chestertons-fence`, `exploring-knowledge-graph`, and the directories and configs behind them. Also rjm's PR tooling, hooks, evals, and tests. See METHOD.md §1.2 for the derivation rule.
- **rationale:** Peter favours Addy's overall approach, wants specific strengths from Matt's package brought in, and was drawn to rjm's naming and composition choices in the lifecycle specifically. rjm's memory stack is a separate concern outside the lifecycle.
- **resolves:** scope

## D-002 — Inputs are fenced to the `v2` branch and `sources/`

- **date:** 2026-09-01
- **made-by:** Peter
- **status:** active
- **decision:** The agent's permitted inputs are exactly: the three pinned source clones under `sources/`, brain's conventions files in the `v2` working tree, and everything under `docs/analysis/`, `docs/decisions/`, `docs/plan/` in that tree. No other branch, ref, worktree, cache, or external note is an input, and git history before this project's first commit is not an input — the working tree is the only readable state of the repository. The fence is stated in `docs/plan/DO-NOT-READ.md` and METHOD.md §2. The agent harness's automatic memory and cross-session context features are disabled for this project.
- **rationale:** The analysis is only as independent as its inputs. A fixed, auditable input set is what makes every `path:line` reproducible and every conclusion attributable.
- **resolves:** method

## D-003 — Pure Bun for all code

- **date:** 2026-09-01
- **made-by:** Peter
- **status:** active
- **decision:** Every script, tool, validator, or program written in brain for this project is Bun/TypeScript. No Node-specific APIs, no Python, no shell scripts beyond one-liners. This applies to project tooling (manifest, coverage, glossary lint) and to every script shipped inside a built skill.
- **rationale:** Brain is Bun-native. Source packages ship Python (rjm) and shell; none of that is ported as-is. Where a source script's *behaviour* is adopted, it is reimplemented in Bun.
- **resolves:** constraint

## D-004 — Documentation layout

- **date:** 2026-09-01
- **made-by:** Peter
- **status:** active
- **decision:** All analysis, decision, and planning markdown lives under `docs/` at the brain repo root: `docs/analysis/` for inventories, concept cards, concordance, and verification reports; `docs/decisions/` for this file; `docs/plan/` for method, state, glossary, preferences, sessions, the lifecycle spec, and implementation plans. Full layout in METHOD.md §9.
- **rationale:** Stated by Peter. Keeps project working documents separate from brain's runtime skills and discoverable by a new session.
- **resolves:** constraint

## D-005 — Human approval gate between Part 1 and Part 2

- **date:** 2026-09-01
- **made-by:** Peter
- **status:** active
- **decision:** No implementation (Phase 6 onward) begins until Peter has read `docs/plan/lifecycle-spec/` and written `human_approval: APPROVED` in `STATE.md`. The agent never writes that field. Revisions Peter requests go through `REVIEW.md`, produce new alignment decisions, and a fresh *Spec ready for review* handoff.
- **rationale:** Definitions are settled and agreed before anything is built against them. The gate ensures the spec is reviewed by Peter as a whole — terms, phases, artifacts, composition — before implementation commits to it.
- **resolves:** method

## D-006 — Defects are recorded, not used as grounds for dismissal

- **date:** 2026-09-01
- **made-by:** Peter
- **status:** active
- **decision:** When analysis finds a defect in a source — a broken reference, a script bug, doc/code drift, a gate that cannot fail — the defect is recorded on the inventory entry and the concept card's `implementation_status`. It is never ported into brain. But the *design* the defective code was implementing is still evaluated on its merits, alongside the rest of that package. A defect disqualifies the implementation, not the idea.
- **rationale:** Peter's instruction: the agent should find these things through comprehensive analysis, should not adopt them, but should "still consider the other parts / the whole." Good ideas with bad implementations are exactly what a synthesis should rescue.
- **resolves:** method

## D-007 — Landscape scan: run or skip

- **date:** 2026-09-01
- **made-by:** Peter
- **status:** active
- **decision:** `landscape_scan: no` (yes | no). If `yes`, Phase 0.5 runs per METHOD.md §5 — a bounded, one-session scouting pass that shortlists community-regarded lifecycle packages, scores them against a fixed rubric from their README only, and recommends `add-as-source` / `consult-only` / `skip` for each. It cannot add a source on its own; that is D-008. If `no`, Phase 0.5 is skipped and the three sources in D-001 are final.
- **rationale:** Peter asked whether other well-regarded, approach-compatible implementations should be pulled in. The method's position: a fourth source earns its place only by covering something the three do not, and each source adds roughly a third to Phases 1–4. The scan exists so that question is answered with evidence and bounded cost rather than skipped or left open.
- **resolves:** scope

## D-008 — Landscape scan outcome

- **status:** not-yet — written after Phase 0.5, if it runs. Records which candidates (if any) become sources or consult-only references, with the cost estimate from `docs/analysis/landscape.md`.

## D-009 — Dual-target: Claude Code first, with full Antigravity parity

- **date:** 2026-09-02
- **made-by:** Peter
- **status:** active
- **decision:** The lifecycle is a **Claude Code–first** implementation: the canonical form of every built artifact follows Claude Code plugin standards — `skills/<name>/SKILL.md` with Claude frontmatter, `commands/`, `agents/`, `.claude-plugin/plugin.json`. Because the build and test harness for this project is the Antigravity CLI, the plugin also ships **full Antigravity/Gemini parity**: wherever the Gemini standard differs (root `AGENTS.md` context file, `.agents/skills/`, `.agents/agents/<name>.md` with Antigravity frontmatter, `.agents/mcp_config.json` with `serverUrl`, `.agents/hooks.json` with the five-event schema, Antigravity `plugin.json`), the equivalent artifact exists and works. Leaning into a Gemini standard where the two differ is expected and fine — but never at the cost of the Claude Code form.
- **rules:** (1) The Claude Code layout is the canonical source; Antigravity artifacts are mirrors generated or derived from it, never hand-forked — a change lands in the canonical form first and propagates. (2) 100% parity is a verified property, not an intention: Phase 8 includes a parity check — every skill, command, agent, and reference present and functional in both layouts, with a parity table in `docs/analysis/integration-verification.md`. (3) Where a capability exists in only one harness (for example, a hook event one harness lacks), the gap is recorded in the parity table with the closest equivalent or an explicit `no-equivalent` entry — never silently dropped.
- **rationale:** Stated by Peter: the experiment runs under the Antigravity CLI, which requires Gemini-standard artifacts to exercise the plugin, but the target product is a Claude Code plugin. The canonical-source-with-generated-mirrors pattern keeps one source of truth while shipping both surfaces.
- **resolves:** constraint

---


## D-011 — Delegation architecture for Teamwork Preview

- **date:** 2026-09-04
- **made-by:** AI Agent (drafted for Peter's ratification)
- **status:** active
- **decision:** The actual contract for Teamwork Preview delegation is:
  1. One Teamwork dispatch per unit (Sentinel -> Project Orchestrator -> Explorers -> Worker -> review panel -> Success Auditor). Roles are called by their documented names.
  2. Whoever writes a verbatim field has read the source file in full. The Worker re-reads every assigned file before writing to ensure R1 and R3 fidelity.
  3. Unit deliverables are written to disk by the team, under exclusive file ownership. The team never writes STATE.md, manifests, GLOSSARY.md, or DECISIONS.md, and never runs git. The primary agent is the only writer of shared state and the only committer.
  4. The Success Auditor's integrity check must cover: every required field non-empty, R3/R4 conventions, coverage.ts and glossary-lint.ts clean. If the auditor does not check something, the primary agent reads it back before check-off.
  5. The primary agent records per unit on the Sentinel's report the context used. On a report that is not "confirmed", the primary agent reads back the outputs and decides on remediation or roll-back.
  6. Concurrency and units-per-session are "per D-010, once measured" — no number until then.
- **rationale:** Correcting drift and fabricated claims about the teamwork_preview system. 
- **resolves:** method §6.3
- **superseded-by:** D-014

---

## D-012 — Duplication ledger (METHOD §2.4, R11)

- **date:** 2026-09-04
- **made-by:** Peter
- **session:** 013
- **status:** active
- **supersedes:** —
- **resolves:** method §2.4, §3 R11, §10

### Decision
Every package gets a duplication ledger (`docs/analysis/manifest/<pkg>-duplicates.md`, generated by `scripts/synthesis/dedupe.ts`, never hand-edited) listing EXACT groups (byte-identical files) and VARIANT pairs (same name, ≥60% shared lines, full `diff -u` included). An EXACT alias row is satisfied by the canonical entry that lists it under `aliases:`; a VARIANT pair is satisfied by one entry plus a divergence card reproducing every hunk. `coverage.ts` enforces both (R11). Provenance declarations in a source are recorded, never trusted as a filter.

### Adopted from
Measured on all three packages at the pinned SHAs: `matt` `AGENTS.md` → `CLAUDE.md` symlink (1 exact); `addy` `commands/*.toml` ↔ `.gemini/commands/*.toml` (5 exact, 4 variants at 83–95%); `rjm` `.claude/**` → `src/copilot-cli/**` (1,155 exact files repo-wide, declared in `templates/platforms/copilot-cli.yaml:4-12`; 604 same-path identical and 6 same-path divergent `SKILL.md` in the lifecycle trees).

### Dropped
Nothing is removed from any manifest by this decision.

### Rejected alternatives
Excluding mirror trees from the manifests — loses the harness-porting deltas that D-009 needs. Trusting `sourceDir`/`outputDir` declarations — `rjm`'s declared agent source differs from what Claude Code loads by up to 380 lines per agent.

### Evidence
`docs/analysis/manifest/*-duplicates.md` once generated; the measurements above from the kit's `dedupe.ts` runs on 2026-09-04.

### Glossary
none (method decision).

---

## D-013 — Manifest and partition tooling shipped with the kit; `Task(subagent_type)` resolves to agents

- **date:** 2026-09-04
- **made-by:** Peter
- **session:** 013
- **status:** active
- **supersedes:** —
- **resolves:** method §1.2, Phase 0, §6.5, §9

### Decision
`scripts/synthesis/` is shipped with the kit and run, not written, in Phase 0: `manifest.ts`, `partition.ts`, `dedupe.ts`, `coverage.ts`, `quote-check.ts`, `memo.ts`, `unit-facts.ts`, `prefix-check.ts`, `_lib.ts`. In `rjm` reachability, `Task(subagent_type="x")` resolves to `.claude/agents/x.md` and to `.claude/skills/x/` when either exists; `Skill("x")` to `.claude/skills/x/`. A manifest row's `Checked` cell is derived from the card directory listing by exact slug (lowercase), never by `existsSync` and never by a basename fallback. External documentation rows use the path `external/<slug>.md`. Symlink rows are typed `symlink` and need no card. Unit → file assignment is persisted in `docs/analysis/manifest/units.md`.

### Adopted from
The defect this fixes, measured on the pre-reset tree: `manifest.ts:222` enqueued `.claude/skills/${name}` for `Task(subagent_type=…)`, so zero `.claude/agents/*.md` rows existed while 29 `templates/agents/*.shared.md` rows did; `manifest.ts:263` accepted a bare-basename card as satisfying any row; existing cards were checked off through macOS's case-insensitive `existsSync`.

### Dropped
The agent-written `manifest.ts`, `partition.ts`, `coverage.ts` stub and per-unit `verify-*.ts` scripts.

### Rejected alternatives
Letting Phase 0 rewrite the tooling each time — the resolver and check-off defects above are exactly what that produced.

### Evidence
`grep -c '^| \.claude/agents/' docs/analysis/manifest/rjm.md` → 0 before, 34 after, at rjm `2abef31`.

### Glossary
none.

---

## D-014 — Teamwork at phase granularity; Peter answers the interview; Boost only in Phase 7

- **date:** 2026-09-04
- **made-by:** Peter
- **session:** 013
- **status:** active
- **supersedes:** D-011
- **resolves:** method §6.2, §6.3, §6.3.1
- **superseded-by:** D-017

### Decision
Teamwork remains the delegation mechanism on the Antigravity CLI. One Teamwork run per phase (or per batch of units Peter approves), never one team per work unit. Teamwork's scoping interview is answered by Peter from the brief the primary agent writes (§6.3.1): Independent Verification = R1–R11 plus `coverage.ts` and `quote-check.ts`; Acceptance Criteria = the phase's done criteria; Project Working Directory = `<repo>/.teamwork/<run-id>` (gitignored); integrity mode `development`. The rest of D-011's contract stands and is restated in §6.3: the writer of a verbatim field has the file open; the team writes only unit deliverables; the primary agent is the only writer of shared state and the only committer; no numbers until D-010. `/boost` is used only inside Phase 7 for a build unit that is a hard, test-verifiable problem; Phase 4V and Phase 5 review use Teamwork's Document Review path.

### Adopted from
Teamwork documentation: scope ("large software projects … deep research tasks … work spans multiple days"), roles, integrity-mode table (code-provenance semantics), Project Working Directory field, exclusive file ownership; Boost documentation: comparison table and code-only use cases. Sources cited in `docs/analysis/dynamic-batching-experiment.md` §6.

### Dropped
One team per unit (D-011 item 1); agent-answered interviews; the `benchmark` mode as a fidelity control; Boost for Phases 3–6.

### Rejected alternatives
Plain `invoke_subagent` fan-out instead of Teamwork — the project as a whole matches Teamwork's documented use case and its verification roles are the ones the method needs; the defect was granularity, not mechanism.

### Evidence
`docs/analysis/dynamic-batching-experiment.md` §2 baseline (18% of citations not byte-exact under one-team-per-unit with an agent-run interview).

### Glossary
none.

---

## D-015 — Zero-quality-cost mechanisms M1, M3, M5 adopted; M4 is D-010 when measured

- **date:** 2026-09-04
- **made-by:** Peter
- **session:** 013
- **status:** active
- **supersedes:** —
- **resolves:** method §7, §8, §10; templates

### Decision
Token and quota savings are accepted only where they change nothing about what the model reads or which model reads it. Adopted: **M1 result store** — every card carries `memo_inputs`, `method_sha`, `template_sha`, `model`, `effort`, and `verified`; `memo.ts check` before dispatch reuses a verified card whose record matches the tree. **M3 fixed set** — `docs/plan/prefix.json` names the files that never change inside a conversation; `prefix-check.ts` hashes them at §8.1 and §8.3; fixed material lives in agent definitions and `AGENTS.md`, dispatch messages carry only the unit. **M5 fact scripts** — `unit-facts.ts` supplies every mechanical fact a dispatch needs; `quote-check.ts` makes quotations provable. **M4 context budget** — the stopping rule in `dynamic-batching-experiment.md`, recorded as D-010 once measured; the handoff records peak context. **Withdrawn and never adopted:** model tiering (a smaller or faster model for any reading or extraction), summarisation of sources before the model sees them, harness compaction as a working mode.

### Adopted from
Peter's constraint, stated 2026-09-04: efficiency measures may not compromise quality in any way.

### Dropped
Model tiering; "`model: flash` for mechanical subagents".

### Rejected alternatives
Verifier-gated tiering — a verifier catches errors after a weaker reader makes them; it does not make the reading equivalent.

### Evidence
`docs/plan/METHOD.md` §7, §8, §10 as amended; `scripts/synthesis/{memo,prefix-check,quote-check,unit-facts}.ts`.

### Glossary
none.

---

## D-010 — The context budget: measured costs, per-model ceilings, and the k × n dispatch calculation

- **date:** 2026-09-05
- **made-by:** Peter
- **session:** 000
- **supersedes:** —
- **status:** active
- **resolves:** method §6.3 item 7, §6.5, §7, §8.2, §8.4; `docs/plan/budget-params.json`; `docs/plan/context-ceilings.json`

### Decision
The primary conversation's context is budgeted by `scripts/synthesis/budget.ts` from measured costs, never watched or guessed. One conversation costs `S + Σ_runs (R + n × u) + C` of the model's window: **S** (session start) 9.0%, **R** (fixed cost of one run) 4.6%, **u** (verifying one unit) 0.19%, **C** (close) 2.9% — measured on Gemini 3.8 Flash (High) in session 014 (run 02, 8 units; the model reproduces the observed 18.08% end state), and re-measured every conversation by `budget.ts --record` / `--measure`. A plan of `k` runs × `n` units, dispatched at the same time, fits when `k × (R + n × u) ≤ governing ceiling − used − C`; `budget.ts` recommends the plan with the most units that fits, preferring a bigger run over more runs, capped at the largest `n` and `k` proven clean, and dispatches one step above the proven maximum when that step also fits (the **probe**). A step is clean when every returned card has zero `quote-check.ts` FAIL, there is no 429 and no rot metric, and the run's wall time is within 25% of the last clean run's — wall time that grows at the same unit caps is the harness's concurrent-stream limit. Proven at this decision: `n = 8`, `k = 1`; the series is `8 → 12 → 16 → 24` and `1 → 2 → 3`. The **governing ceiling** is per model in `context-ceilings.json` and comes only from this project's evidence: 3.8 Flash 25% (zero rot metrics through a 18.08% peak; the long-context recall plateau bound), raised only by that file's `raise_rule`; a model without project evidence is governed by its strict knee. **Harness compaction is not a ceiling**: it fired at about 10% used in session 013 and not at 18% in session 014; it is handled by §8.4 (re-read state from disk; never the transcript). **Unit caps**: 50 KB and 12 readable files, because the two run-01 workers that compacted held 29 and 55 files while every 1–6-file unit finished clean; a skill over a cap is split into labelled parts. Per-unit cost in the primary conversation is small (0.19%), so run size barely moves the budget: bigger runs and simultaneous runs are the lever, and neither changes what any agent reads or checks.

### Adopted from
`docs/analysis/dynamic-batching-experiment.md` §7 (runs 01 and 02) and §9 (the 2026-09-04 findings from the statusline log and the 34 conversation transcripts of that day: phase-by-phase token attribution, the compaction evidence, the run timeline). Ceiling evidence: Context Arena MRCR v2 per-model summaries cited in `context-ceilings.json`.

### Dropped
The session-014 figure "0.53% per unit" — it divided the run's fixed cost by the unit count. The provisional ceiling 21% and its "compaction ≈ 24%" rationale — the run-01 series that suggested it no longer exists and the transcripts contradict it. Per-Sentinel-report edit cycles as the way to record a run (2.1% per run) — readings are recorded by `budget.ts --record`; the run is read from its files by `await-run.ts`.

### Rejected alternatives
A single fixed "units per conversation" number — wrong for every model and every future cost change; the live calculation is what stays true. Watching `used_percentage` and stopping "when it looks high" — not a rule, and the harness's compaction proved unrelated to it. Avoiding compaction as a goal — it cannot be predicted; making it harmless (state on disk, §8.4) can.

### Evidence
`docs/analysis/dynamic-batching-experiment.md` §7 (run 01: 1,158 PASS / 0 FAIL; run 02: 1,003 PASS / 0 FAIL, readings 9.07 → 10.21 → 14.42 → 18.08%) and §9; `docs/plan/budget-params.json`; `docs/plan/context-ceilings.json`; `scripts/synthesis/budget.ts`.

### Glossary
none.

---

## D-016 — Analysis reset: all outputs before this decision are discarded

- **date:** 2026-09-05
- **made-by:** Peter
- **session:** 000
- **status:** active
- **supersedes:** —
- **resolves:** STATE.md, docs/analysis/, docs/plan/sessions/, docs/plan/teamwork/

### Decision
Every analysis output produced before this decision — manifests, inventory entries, unit reports, divergence cards, session handoffs, interview briefs, Teamwork scratch committed under `.agents/` — is deleted from the working tree. The project restarts at Phase 0 with the kit's tooling, METHOD as amended by D-010, D-012–D-015 and D-017–D-018, and the same three source pins. Decisions D-001–D-015 stand (R8: decisions are never deleted). Git history before this commit is not an input (§2 rule two). What is kept from before the reset is exactly the measurement record: `docs/analysis/dynamic-batching-experiment.md` with its §2 baseline, §7 run results and §9 findings — the evidence D-010 rests on.

### Adopted from
Peter's assessment on 2026-09-04 that the pre-reset analysis is unreliable, quantified by `quote-check.ts` (18% of resolvable citations not byte-exact; 82% of cards affected) and by the coverage defects recorded in D-013. The 109 cards produced by runs 01–02 under the new contract were clean (2,161 PASS / 0 FAIL) but were written against the pre-D-010 partition (unit ids and file assignments differ) and are re-produced rather than carried across, so every card in the tree has one provenance.

### Dropped
All pre-reset analysis content, including the clean run-01/02 cards.

### Rejected alternatives
Repairing the existing cards in place — cheaper per card, but leaves every card's provenance unknown (no memo record, no verified quote check) and the reachability gap in `rjm` unfilled. Keeping the 109 clean cards — would put two partitions' worth of unit ids in one tree; `memo.ts check` will reuse nothing, and 109 units of 372 is one conversation's work under D-010.

### Evidence
The pre-reset tree is in git history before this commit and is not an input.

### Glossary
none.

---

## D-017 — The primary agent dispatches Teamwork itself; the interview is answered from files

- **date:** 2026-09-05
- **made-by:** Peter
- **session:** 000
- **status:** active
- **supersedes:** D-014
- **resolves:** method §6.2, §6.3, §6.3.1

### Decision
Teamwork remains the delegation mechanism on the Antigravity CLI, at the granularity of a **run** (a batch of `n` units, `k` runs at a time, from D-010), never one team per unit. The primary agent dispatches every run itself: it writes the five interview fields to `docs/plan/teamwork/<run-id>.md` from METHOD and STATE (§6.3.1) and passes them verbatim in one `invoke_subagent` call — `TypeName: "teamwork_preview"`, `Model: "inherit"`, `Role: "Teamwork Project Orchestrator"`, `Prompt` = the five answers + `Project Working Directory: <repo>/.teamwork/<run-id>` + `Integrity mode: development` — then waits on the run's completion artifacts with `await-run.ts`. Peter is not in the loop; a conversation runs from one paste (or headless, D-018) to its §8.3 close without a question to him. `Model: "inherit"` replaces the `"flash"` used in sessions 013–014 so that every worker provably runs the same model and effort as the primary conversation. Everything else in D-014 stands: the writer of a verbatim field has the file open; the team writes only unit deliverables under exclusive ownership; the primary agent is the only writer of shared state and the only committer; Independent Verification = R1–R11 plus `coverage.ts` and `quote-check.ts`; integrity mode `development`; `/boost` only inside Phase 7; Phase 4V and Phase 5 review use Teamwork's Document Review path. Nothing Teamwork does inside a run — survey explorers, Critic, Auditor, Success Auditor, post-victory audit — is asked to be skipped.

### Adopted from
Sessions 013 and 014: the agent-dispatched path with the §6.3.1 brief produced 2,161 byte-exact citations and zero failures across 109 cards; the run-02 conversation started, dispatched, verified, recorded and closed from one paste. Teamwork documentation: roles, Project Working Directory, exclusive file ownership.

### Dropped
D-014 item 2 ("The interview is Peter's") and the stop-and-wait it required. The reasoning behind it — that the 18% baseline came from agent-answered interviews — was a misattribution: those runs dispatched one team per unit with no verification field; sessions 013–014 answered the interview by agent and were clean.

### Rejected alternatives
Keeping Peter's paste per run — one human action per 22-minute run, and no autonomy. Plain `invoke_subagent` fan-out without Teamwork — loses the survey, Critic/Auditor and Success Auditor gates the method relies on.

### Evidence
`docs/analysis/dynamic-batching-experiment.md` §7 run 01 and run 02; session 014's transcript timeline in §9 (dispatch call returned in 4 s; 8 workers started at 20:09:30Z and finished by 20:14:27Z).

### Glossary
none.

---

## D-018 — Headless driver: conversations are started by `drive.ts`, not by a paste (probe)

- **date:** 2026-09-05
- **made-by:** Peter
- **session:** 000
- **status:** active
- **supersedes:** —
- **resolves:** method §8, §8.5, §9

### Decision
`scripts/synthesis/drive.ts` may start the project's conversations headless: `agy -p "<PROMPT.md>" --output-format stream-json --model <slug> --print-timeout 180m`, one conversation after another, until `STATE.md` leaves Phases 0–1 or a stop condition fires (a conversation that did not commit, asked for Peter, ended twice without `SUCCESS`, or — in Phase 1 — dispatched nothing). It passes `--dangerously-skip-permissions` unless started with `--ask`. The driver writes the context series into `.teamwork/ctx-log.jsonl` from the stream's per-step `usage.input_tokens` in the statusline's record shape, so `budget.ts` and the method are identical in both modes. Whether Teamwork dispatch (`invoke_subagent` → `teamwork_preview`) works under `-p` is **undocumented — probe**: the first driven Phase-1 conversation (the first run after the reset, `p1-run-01`) decides it, and the driver stops if no `.teamwork/<run-id>/` appears. Phase 0 may also be driven; it dispatches nothing by design. Whether `usage.input_tokens` is the step's prompt size (the context) or a cumulative count is likewise unconfirmed; the driver stops and says so if a value exceeds the window. The interactive paste remains the fallback and is the same prompt.

### Adopted from
Antigravity CLI headless documentation (`-p`/`--print`, `--output-format stream-json`, `step_update.usage.{input_tokens,…}`, `subagent_info`, `--print-timeout`, `--dangerously-skip-permissions` / `permissions.allow`): https://antigravity.google/docs/cli/headless. CHANGELOG 1.1.13: headless runs settle a choice themselves where they would otherwise ask.

### Dropped
Nothing.

### Rejected alternatives
A shell loop around `agy -p` — R9 (Bun only) and no event parsing, so no context series and no stop conditions. Keeping the paste as the only start — every conversation would wait on a human.

### Evidence
`scripts/synthesis/drive.ts`; the probe result, recorded in `docs/analysis/dynamic-batching-experiment.md` §7 when it exists.

### Glossary
none.

---

## D-019 — The rationale record: `docs/analysis/rationale/`

- **date:** 2026-09-05
- **made-by:** Peter
- **session:** 000
- **status:** active
- **supersedes:** —
- **resolves:** method §9

### Decision
The reasoning behind the method — the research, the measurements, the false starts and the constraints Peter set — is kept in the repository under `docs/analysis/rationale/` (index in its `README.md`), so that the record of *why* survives alongside the record of *what* (`DECISIONS.md`) and *how* (`METHOD.md`). It is an input under §2 (it lives under `docs/analysis/`). It never overrides a rule: where the folder and `METHOD.md` or `DECISIONS.md` disagree, those two files win and the disagreement is reported in the handoff. The folder is written outside sessions by Peter and his assistant, from captures and conversations that are themselves not inputs; sessions may append to `12-open-questions.md` when a probe lands and otherwise do not edit it. Transcripts, logs and captures cited by the record remain outside the fence.

### Adopted from
Peter, 2026-09-05: "make sure that everything that we've made decisions about, probably all the analysis we've done as well, gets persisted into an analysis note or a decision note in the docs directory of v2 … so we have as comprehensive a set of explanations for why we did what we did as we can."

### Dropped
Nothing.

### Rejected alternatives
Expanding each `DECISIONS.md` entry with the full research — R8 makes entries immutable and they would grow past what a session should read at start. Keeping the record outside the repo — it would not follow the project.

### Evidence
`docs/analysis/rationale/README.md` and the twelve documents it indexes; the captures of 2026-09-04/05 described in `11-experiment-and-reset.md`.

### Glossary
none.

---

## D-020 — The result store keys on the extraction contract, not the whole manual; the 90 session-001 cards are re-stamped, not re-run

- **date:** 2026-09-05
- **made-by:** Peter
- **session:** 003
- **status:** active
- **supersedes:** —
- **resolves:** method §7 step 5, §10 (Result store row); `scripts/synthesis/memo.ts`

### Decision
A card's `method_sha` is the hash of the **extraction contract** — the parts of `METHOD.md` that govern what a card contains: §2.4 (duplication ledger), §3 (R1–R11) and §4 (the checklist) — together with `template_sha` for the template it was written from. An edit anywhere else in the manual (session protocol, budget, repository layout, delegation recipe) changes no card and therefore invalidates none. `memo.ts restamp` re-hashes already-stamped cards under a changed hash definition, keeping their `model`, `effort` and `verified` fields; it is not a re-verification and never touches a card's body. **Ruling on sessions 002–003:** the 90 cards of `p1-run-01` were marked STALE only because commit `9e274fb` (D-019 and hotfix 1) edited operational sections of `METHOD.md`; their content rules and templates were unchanged and `quote-check.ts` still passes every citation (107 PASS / 0 FAIL on `inv-addy-8`; 1,217 / 0 across the run). They are re-stamped, not re-run. Units `inv-addy-1`–`8` stay `done`.

### Adopted from
The agent's own analysis in `docs/plan/sessions/003-inventory.md` § For Peter, which identified the cause and posed exactly this choice; Peter's answer on 2026-09-05. M1 as specified in `docs/analysis/rationale/05-adopted-mechanisms.md` ("a METHOD.md change invalidates every card") was too coarse: it made every between-session edit to the manual a re-run of the whole inventory.

### Dropped
Whole-file hashing of `METHOD.md` as the memo key.

### Rejected alternatives
Re-running the eight units — 90 verified cards discarded for a change that touched none of their rules. Leaving the audit failing and telling the agent to ignore it — §10 says a failed check is fixed before new work begins, and that rule is worth more than the shortcut.

### Evidence
`docs/plan/sessions/002-inventory.md`, `003-inventory.md` (the stop and its reasoning); `memo.ts audit` before and after the re-stamp, recorded in the commit that applies this decision.

### Glossary
none.

---

## D-021 — Final reset after the test series; one Worker per unit; the checked `run-start`; the driver runs to the human gate

- **date:** 2026-09-05
- **made-by:** Peter
- **session:** — (between sessions; applied by the go kit)
- **supersedes:** — (D-016's reset is repeated, not replaced)
- **status:** active
- **resolves:** method §6.3 item 7, §6.3.1 (Requirements), §6.5, §7 step 2, §8.2 (step-up rule), §8.5, §5 (human gate); `docs/plan/budget-params.json`; `scripts/synthesis/budget.ts`, `drive.ts`, `drive-ui.ts`; `PROMPT.md`

### Decision
The test series (sessions 000–007, 2026-09-05 — nine Teamwork runs from one `drive.ts` command, 100 units, 428 cards, 8,466 PASS / 0 FAIL) is the last trial. Its outputs are deleted and the project restarts at Phase 0 under the method as it now stands, so that every card in the tree has one provenance and the production series runs unattended from the first conversation to the human gate. Five rules come from what the series showed (`docs/analysis/rationale/13-test-series-and-final-parameters.md`; `dynamic-batching-experiment.md` §10):

1. **One Worker per unit, all at once.** The brief's Requirements (§6.3.1) now say it. Left to itself the Orchestrator ran 6 Workers for 12 units, 8 for 24, and five sequential gated milestones for 16 (65 minutes for a run that takes 13 in parallel) — with no effect on quality, but the §6.5 unit caps are per Worker context, and the wall-time test of §8.2 is meaningless unless every run has the same shape.
2. **The wall-time test applies only between runs of that shape**, checked from the run's own files. The 24-unit probe of the series was clean on quality (927 PASS / 0 FAIL) and its wall-time verdict is void; 24 returns to `run_sizes`, which is `[8, 12, 16, 24, 32, 48]` with `max_clean_run = 16` (proven twice) and `last_clean_wall_minutes = 12.6` (p1-run-04, 16 Workers at once).
3. **`budget.ts --record "run-start <run> n=<count>"` refuses a count that is not the current plan's `n`.** The agent recorded `n=16` then `n=12` twice, and `n=2` then `n=1` against a STOP; the label is evidence and must be the verdict's number.
4. **The driver runs from Phase 0 to the human gate** (Phase 6 in `STATE.md`, or a handoff titled *Spec ready for review*), stops gracefully on `touch .teamwork/drive/STOP` after the running conversation commits, and treats a conversation that agy ends with status ERROR *after* a complete, committed close ("The stream was interrupted", session 004) as finished, not failed. The fan-out no-op stop applies to Phases 1–2 and only when phase, unit counts and run directories are all unchanged.
5. **The measured parameters stand as planning values**: `S 9.16`, `R 4.6`, `u 0.19`, `C 1.1`. The series measured first runs at 5.9–6.8% and second runs at 1.8–3.8% with no visible dependence on `n` between 12 and 24 units, so `R + n·u` over-estimates — the safe direction; a later decision may lower `u` when the production series shows the same at 32 and 48.

`k` (runs at once) stays at 1 proven: the one `k = 2` dispatch (session 007) ran both runs to completion — the conversation outlived the Ctrl-C that was meant to cancel it — but neither run's shape was inspected and the second run's quality was never checked, so it is evidence that two runs work, not a measurement. The calculation grows `n` before `k`. The driver now kills its agy child on Ctrl-C.

### Adopted from
Peter, 2026-09-05: "this is our last test session … reset once more and let the thing run"; "the Sentinel handles [rate limits] … never roll back a run for quota" (already D-019 hotfix 1, kept); no further token cutting (D-010's C1/C2). The analysis of the third capture (`brainv2capture20260904225801.zip`): `teamwork/readings.jsonl`, `teamwork/drive/*.jsonl` and `drive.log`, the nine run directories, the handoffs 004–007.

### Dropped
The 24-unit verdict of session 006 as a harness measurement; the assumption (§6.3 item 7, old text) that the Orchestrator "has always been every unit at once"; the 100 units of the series (deleted with the tree — the same reasoning as D-016: one provenance per card, and the series' cards were produced under a brief that no longer exists).

### Rejected alternatives
Keeping the 100 done units and continuing from `inv-rjm-9`: saves about two conversations, leaves two briefs' worth of provenance in one tree and 32 `in-progress` units from a cancelled conversation to reconcile. Dropping the wall-time test altogether: it is the only detector of the concurrent-stream limit; it needed a shape condition, not removal. Raising `max_clean_run` to 24 by fiat on the quality result alone: the step-up rule exists so that every size is proven under the rule, not granted.

### Evidence
`docs/analysis/rationale/13-test-series-and-final-parameters.md` (every reading, every run's shape and wall time, the run blocks verbatim); `docs/analysis/dynamic-batching-experiment.md` §10; the capture zip outside the repository.

### Glossary
none.

---

## D-022 — Phase 1V reports are not cards; omissions are fixed by re-running units; a quota pause is waited through in one call

- **date:** 2026-09-06
- **made-by:** Peter
- **session:** — (between sessions 010 and 011; applied by hotfix 3)
- **status:** active
- **supersedes:** —
- **resolves:** the `STOP: needs Peter` of session 010 (`docs/plan/sessions/010-inventory.md` § For Peter); method §5 (Phase 1V), §6.3 (quota), §6.3.1 (brief), §7 step 4, §9; `scripts/synthesis/_lib.ts`, `coverage.ts`, `memo.ts`, `quote-check.ts`, `units.ts`, `await-run.ts`

### Decision
1. **A file or directory whose name begins with `_` under `docs/analysis/inventory/<pkg>/` or `docs/analysis/concepts/<pkg>/` is not a card.** `_units/` (reports) and `_divergence/` (divergence cards) already were not; `_verification.md` (Phase 1V) and `_index.md` (Phase 2) now are not either. One rule in `_lib.ts` (`isCardPath`) replaces the two path checks that `coverage.ts`, `memo.ts` and `quote-check.ts` each carried. Session 010 stopped correctly: METHOD §5 told the verifier to write `_verification.md` and §10 told the primary agent not to proceed while `coverage.ts` reported three orphan cards — the manual and the tooling disagreed, and the agent asked rather than guessed.
2. **Phase 1V omissions are fixed by re-running the affected units, never by editing cards.** Session 009's handoff proposed patching the flagged cards by hand; §6.3 item 5 forbids it (the primary agent writes no card), and a patched card would carry a memo stamp that no longer describes how it was produced. The procedure is now in §5: `units.ts owner <card>` names the unit; `units.ts rerun --session NNN <units…>` removes the unit's cards and report and sets it pending (otherwise §7 step 1's memo check would HIT on unchanged inputs and skip the unit); the units go through an ordinary run whose brief carries the re-run line (every Worker reads `_verification.md` first); the verifier is dispatched again on the flagged files and rewrites the report; a package is done when the report is clean.
3. **A quota pause is waited through in one blocking call.** `await-run.ts` no longer returns when a run goes silent; it keeps polling until the files change or three hours pass. The production series showed why: the primary conversation spent 9.75 % of its window during run 09's 6.8-hour wait (session 005, which then ended in ERROR with an uncommitted tree) and 8.48 % during run 14's 4.5-hour wait (session 007, peak 24.4 % — 0.6 % under the ceiling — with one compaction). Each return was a model call; during the quota window those calls failed and were retried (239 error messages in session 007's stream), and every Sentinel progress message drew a reply. A normal 48-unit run costs 2.3–2.9 %. The brief now also asks the Sentinel to report only at completion or when blocked.

### Adopted from
The agent's own `STOP: needs Peter` (session 010), which identified the contradiction exactly; session 009's handoff (the findings and the proposed remediation, corrected on the editing point); the production capture of 2026-09-06 (`readings.jsonl`, the drive streams of sessions 005 and 007).

### Dropped
Hand-patching of flagged cards. Returning from `await-run.ts` on a 15-minute stall.

### Rejected alternatives
Moving the 1V report outside `docs/analysis/inventory/<pkg>/` — the report belongs beside what it verifies, and §9 already names its place; the tooling had the rule wrong, not the layout. Treating the 1V findings as done because quality checks pass — the checks verify citations and coverage, not omissions; that is exactly the gap 1V exists to find.

### Evidence
`docs/plan/sessions/009-inventory.md`, `010-inventory.md`; `docs/analysis/inventory/{addy,matt,rjm}/_verification.md`; `docs/analysis/rationale/12-open-questions.md` (production-series notes); the capture zip outside the repository.

### Glossary
none.

---

## D-023 — Phase 2 runs on concept units: a deterministic partition of the inventory's named things, in the same table and loop as Phase 1

- **date:** 2026-09-06
- **made-by:** Peter
- **session:** — (between sessions 013 and 014; applied by the Phase 2 kit)
- **status:** active
- **supersedes:** the Phase 2 mode line of §5 ("one subagent per package, or split by concept family")
- **resolves:** the `STOP: needs Peter` of session 013 (`docs/plan/sessions/013-concept-cards.md` § For Peter); open question 12; method §5 (Phase 2), §6.3.1, §6.5, §7 steps 5–7, §8.1 step 8, §8.2, §9, §10; `templates/concept-card.md`; `scripts/synthesis/{_lib,partition-concepts,units,unit-facts,memo,coverage,concept-index,budget}.ts`; `budget-params.json`

### Decision
1. **A Phase 2 work unit is a set of at most 30 concept slugs of one package (`cc-<pkg>-N`), at most 300 occurrence rows.** `partition-concepts.ts` derives the units from the inventory cards' `Concepts named` sections — the very lines `coverage.ts` demands a card for — in first-named order, card by card in manifest order, and persists them in `docs/analysis/manifest/units-p2.md`; `--check` says whether the inventory still produces the same units. The inventory names 13,765 distinct things (addy 1,313 · matt 1,193 · rjm 11,259) → 460 units (44 · 40 · 376). Session 013 was right that "one subagent per package" is not a unit: rjm's 11,259 concepts cannot go to one Worker.
2. **Concept units live in the same status table and go through the same loop.** `units.ts init` adds them as `pending` next to the Phase 1 rows (`readUnits()` reads both manifests); `budget.ts` counts them; §6.3 item 8 dispatches them; `unit-facts.ts <cc-unit>` prints every concept with its verbatim name and every occurrence (inventory card, source path:line, role), the source files to read, the card paths and the memo status; `memo.ts check` derives a concept card's inputs — every source file the inventory cites for it — from the concept index. Nothing in the driver, the budget or the session protocol changes.
3. **Per-unit verification replaces per-card.** `memo.ts stamp-unit <unit>` stamps every card of a unit in one call with one line of output; `memo.ts verify <unit>` runs `quote-check.ts --summary` on the unit's cards and, at zero FAIL, writes `verified:` into each — one call, not thirty edits. Both apply to Phase 1 units too. Without this a 30-card unit would have cost the primary conversation thirty stamp lines and thirty edit calls: 13,765 edits over the phase, which no budget survives.
4. **Every named thing gets a card; a name that is not a lifecycle concept is `kind: name-only`.** Coverage stays mechanical (a concept without a card is *pending work*, counted, not a failure — as an uncovered manifest row was in Phase 1; Phase 2 is done at zero); the judgement of what is and is not a lifecycle concept is made by the Worker with the source in view and recorded on the card, where Phase 3 filters on it. The primary agent decides nothing about individual names.
5. **`_index.md` is derived** by `concept-index.ts` from the cards' frontmatter at §7 step 7, like the manifests' `Checked` column; `coverage.ts` checks it lists every card once.
6. **The step-up series restarts for the new kind of unit**: `max_clean_run` 16, `last_clean_wall_minutes` null (the first clean Phase 2 run sets it), `max_clean_concurrency` 1. The first concept run is a 24-unit probe; 32 and 48 follow on clean runs, as in Phase 1. A concept Worker writes 30 cards where an inventory Worker wrote about four; the caps are new, so the sizes are re-proven rather than inherited.

### Adopted from
Session 013's analysis (the count, the four tool couplings it named — `units.ts`, `budget.ts`, `unit-facts.ts`, §6.5 — all addressed above); METHOD §5 Phase 2 as written (what a card contains, one card per named thing, the index); the Phase 1 experience that per-unit script calls, not per-card edits, are what keep the primary conversation inside its budget (D-010, D-021).

### Dropped
"One subagent per package, or split by concept family" as the Phase 2 mode. Hand-written `_index.md`. Per-card stamping and `verified:` edits by the primary agent.

### Rejected alternatives
Filtering the inventory's named things down to "real" concepts before Phase 2 — a judgement the primary agent would make without the sources in view, invisible to coverage, and contrary to R6; `kind: name-only` records the same judgement where it can be checked. Grouping units by concept family — the families are Phase 3's output, not Phase 2's input. Inheriting `max_clean_run 48` from Phase 1 — a different kind of Worker task, so the sizes are re-proven (three conversations at most).

### Evidence
`docs/plan/sessions/013-concept-cards.md`; `docs/analysis/manifest/units-p2.md` (the partition, reproducible with `partition-concepts.ts --check`); the kit's test run on a copy of the tree at `c0de860`: partition, `units.ts init` (861 units, 416 kept), `unit-facts.ts cc-addy-1`, `memo.ts stamp-unit` / `verify` on two fabricated cards, `coverage.ts` clean with 1,203 concepts pending, type check and 89 tests clean.

### Glossary
none.

---

<!-- Alignment decisions (D-100+) are appended below this line in Phase 4. -->

---

## D-100 — spec

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#lifecycle-stage-spec
- **preferences consulted:** PREFERENCES.md § Approach states Peter favours Addy's overall lifecycle framing as the starting frame, but is drawn to RJM's naming and composition choices; followed by adopting RJM's concise `/spec` naming while retaining Addy's requirements-elicitation and scope-bounding rigor.

### Decision
The canonical name for the initial discovery and specification stage is `spec`. The spec phase is the initial lifecycle stage in which user requirements, problem scope, and system boundaries are explored, clarified, and formalized into an approved technical specification before execution planning.

### Adopted from
RJM `.claude/commands/spec.md:1` for `/spec` command lifecycle position and role; Addy `skills/spec-driven-development/SKILL.md:12` for six-area specification framing; Matt `skills/explore/SKILL.md:14` for conversational problem exploration.

### Dropped
Addy's orphan path defects and cross-file contradiction defects (D-006); Matt's unstructured notes approach in favor of a formalized specification artifact; RJM's missing template path defects.

### Rejected alternatives
explore (Matt: too unstructured; exploration is an activity within spec, not the phase itself), define (Addy: broader product framing, less direct for developer lifecycle than `spec`).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:12-40`; Matt `skills/explore/SKILL.md:14-30`; RJM `.claude/commands/spec.md:1-50`.

### Glossary
### spec

- **definition:** The spec phase is the initial lifecycle stage in which user requirements, problem scope, and system boundaries are explored, clarified, and formalized into an approved technical specification before execution planning.
- **kind:** phase
- **source names:** addy: `DEFINE` · matt: `explore` · rjm: `/spec`
- **decision:** D-100
- **concordance:** `docs/analysis/concordance/phases.md#lifecycle-stage-spec`
- **not to be confused with:** `specification-drafting`, `plan`

---

## D-101 — test

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#lifecycle-stage-verify-test
- **preferences consulted:** PREFERENCES.md § Approach favours RJM's naming for lifecycle phases; followed by adopting `test` as the macro lifecycle stage name corresponding to `/test`.

### Decision
The canonical name for the post-build verification and testing stage is `test`. The test phase is the lifecycle stage in which newly constructed code and automated test suites are executed, baseline behaviors verified, and regressions prevented prior to independent code review.

### Adopted from
RJM `.claude/commands/test.md:1` for `/test` command lifecycle position and automated verification gates; Addy `skills/verify/SKILL.md:5` for diagnostic verification and execution proof concepts.

### Dropped
RJM's always-failing drift gates and script bugs (D-006); Addy's cross-file contradiction defects between verify and test.

### Rejected alternatives
verify (Addy: retained as a sub-concept/assurance gate rather than the top-level command phase name), qa (too narrow, suggests manual QA rather than automated test execution).

### Evidence
Addy `skills/verify/SKILL.md:5-25`; RJM `.claude/commands/test.md:1-40`.

### Glossary
### test

- **definition:** The test phase is the lifecycle stage in which newly constructed code and automated test suites are executed, baseline behaviors verified, and regressions prevented prior to independent code review.
- **kind:** phase
- **source names:** addy: `VERIFY` · matt: — · rjm: `test`
- **decision:** D-101
- **concordance:** `docs/analysis/concordance/phases.md#lifecycle-stage-verify-test`
- **not to be confused with:** `quality-assurance`, `review`

---

## D-102 — build-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#catalog-build-phase
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's catalog framing while aligning with `/build`; followed by adopting `build-phase`.

### Decision
The canonical catalog classification for software construction is `build-phase`. The build phase is the implementation stage of the lifecycle where vertical code slices are constructed, unit tests written, and task checklist items executed.

### Adopted from
Addy `external/api-and-interface-design.md:5` for catalog grouping; RJM `.claude/commands/build.md:126` for implementation phase boundary.

### Dropped
RJM's missing path defects in build automation (D-006); Addy's doc-drift between catalog text and command files.

### Rejected alternatives
implementation (RJM: longer name, `build` is standard across brain and CLI commands).

### Evidence
Addy `external/api-and-interface-design.md:5`; RJM `.claude/commands/build.md:126-140`.

### Glossary
### build-phase

- **definition:** The build phase is the implementation stage of the lifecycle where vertical code slices are constructed, unit tests written, and task checklist items executed.
- **kind:** phase
- **source names:** addy: `Build phase` · matt: — · rjm: `Implementation`
- **decision:** D-102
- **concordance:** `docs/analysis/concordance/phases.md#catalog-build-phase`
- **not to be confused with:** `task-execution`, `plan-phase`

---

## D-103 — plan-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#catalog-plan-phase
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's starting frame and RJM's concise naming; followed by adopting `plan-phase`.

### Decision
The canonical catalog classification for execution planning is `plan-phase`. The plan phase is the lifecycle stage where technical specifications are decomposed into an acyclic graph of discrete, testable work units with explicit acceptance criteria.

### Adopted from
Addy `external/api-and-interface-design.md:5`; RJM `.claude/commands/plan.md:183`.

### Dropped
RJM's exit code mismatches in plan validator scripts (D-006).

### Rejected alternatives
execution-planning (RJM: names the primary planning activity, not the top-level phase classification).

### Evidence
Addy `external/api-and-interface-design.md:5`; RJM `.claude/commands/plan.md:183-200`.

### Glossary
### plan-phase

- **definition:** The plan phase is the lifecycle stage where technical specifications are decomposed into an acyclic graph of discrete, testable work units with explicit acceptance criteria.
- **kind:** phase
- **source names:** addy: `"Plan phase"` · matt: — · rjm: `Execution Planning`
- **decision:** D-103
- **concordance:** `docs/analysis/concordance/phases.md#catalog-plan-phase`
- **not to be confused with:** `execution-planning`, `task-decomposition`

---

## D-104 — review-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#catalog-review-phase
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's catalog structure and RJM's multi-perspective reviewer architecture (ADR-064); followed by adopting `review-phase`.

### Decision
The canonical catalog classification for code inspection is `review-phase`. The review phase is the post-verification lifecycle stage where independent reviewer roles evaluate code quality, security posture, architectural adherence, and maintainability prior to release.

### Adopted from
Addy `external/api-and-interface-design.md:5` for phase boundary; RJM `.claude/skills/review/SKILL.md:28` and `.agents/architecture/ADR-064-*` for independent reviewer panel design.

### Dropped
Addy's doc-drift regarding review checklists (D-006).

### Rejected alternatives
independent-review (RJM: names the first step of review, not the complete phase).

### Evidence
Addy `external/api-and-interface-design.md:5`; RJM `.claude/skills/review/SKILL.md:28-60`.

### Glossary
### review-phase

- **definition:** The review phase is the post-verification lifecycle stage where independent reviewer roles evaluate code quality, security posture, architectural adherence, and maintainability prior to release.
- **kind:** phase
- **source names:** addy: `Review phase` · matt: — · rjm: `Phase 1: Independent Review`
- **decision:** D-104
- **concordance:** `docs/analysis/concordance/phases.md#catalog-review-phase`
- **not to be confused with:** `test`, `prior-art-review`

---

## D-105 — ship-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#catalog-ship-phase
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's starting frame and RJM's `/ship` command; followed by adopting `ship-phase`.

### Decision
The canonical catalog classification for delivery is `ship-phase`. The ship phase is the release lifecycle stage where reviewed changes are packaged, documentation and changelogs generated, migrations finalized, and code tagged or deployed.

### Adopted from
Addy `external/api-and-interface-design.md:5`; RJM `.claude/commands/ship.md:73`.

### Dropped
RJM's script bug in ship packaging (D-006).

### Rejected alternatives
release (generic, but `ship` aligns directly with `/ship` command), packaging (RJM: names one sub-step only).

### Evidence
Addy `external/api-and-interface-design.md:5`; RJM `.claude/commands/ship.md:73-95`.

### Glossary
### ship-phase

- **definition:** The ship phase is the release lifecycle stage where reviewed changes are packaged, documentation and changelogs generated, migrations finalized, and code tagged or deployed.
- **kind:** phase
- **source names:** addy: `Ship phase` · matt: — · rjm: `Validation and Packaging`
- **decision:** D-105
- **concordance:** `docs/analysis/concordance/phases.md#catalog-ship-phase`
- **not to be confused with:** `review-phase`

---

## D-106 — quality-assurance

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#catalog-verify-phase
- **preferences consulted:** PREFERENCES.md § Approach favours granular synthesis; followed by adopting RJM's `quality-assurance` as the assurance activity within test to avoid colliding with macro `test`.

### Decision
The canonical term for post-fix verification assurance is `quality-assurance`. Quality assurance is the systematic verification activity within the test phase that ensures bug fixes include permanent regression tests and satisfy quality invariants.

### Adopted from
RJM `.claude/commands/test.md:144` for QA gate discipline; Addy `external/api-and-interface-design.md:5` for verification criteria.

### Dropped
Addy's redundant category duplication (D-006).

### Rejected alternatives
verify-phase (collides with macro stage `test` and causes homonym confusion with verify skill).

### Evidence
Addy `external/api-and-interface-design.md:5`; RJM `.claude/commands/test.md:144-160`.

### Glossary
### quality-assurance

- **definition:** Quality assurance is the systematic verification activity within the test phase that ensures bug fixes include permanent regression tests and satisfy quality invariants.
- **kind:** phase
- **source names:** addy: `Verify phase` · matt: — · rjm: `Quality Assurance`
- **decision:** D-106
- **concordance:** `docs/analysis/concordance/phases.md#catalog-verify-phase`
- **not to be confused with:** `test`, `defect-remediation`

---

## D-107 — expand-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#phase-expand
- **preferences consulted:** PREFERENCES.md § References highlights Addy's migration patterns; PREFERENCES.md § Approach notes Matt has strengths worth bringing over; followed by unifying Addy's schema expand and Matt's interface expand into a single canonical parallel change phase.

### Decision
The canonical term for the additive step of a parallel migration is `expand-phase`. The expand phase is the initial stage of a parallel change migration where new database columns, interfaces, or method signatures are introduced additively alongside existing implementations without breaking existing consumers.

### Adopted from
Addy `references/database-migrations.md:34` for schema expand; Matt `skills/expand-contract-migrate/SKILL.md:18` for codebase interface expand.

### Dropped
None (both sources clean).

### Rejected alternatives
additive-phase (non-standard; Expand is the canonical term from Martin Fowler's Parallel Change pattern).

### Evidence
Addy `references/database-migrations.md:34-45`; Matt `skills/expand-contract-migrate/SKILL.md:18-23`.

### Glossary
### expand-phase

- **definition:** The expand phase is the initial stage of a parallel change migration where new database columns, interfaces, or method signatures are introduced additively alongside existing implementations without breaking existing consumers.
- **kind:** phase
- **source names:** addy: `EXPAND` · matt: `Expand` · rjm: —
- **decision:** D-107
- **concordance:** `docs/analysis/concordance/phases.md#phase-expand`
- **not to be confused with:** `migrate-phase`, `contract-phase`

---

## D-108 — migrate-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#phase-migrate
- **preferences consulted:** PREFERENCES.md § Approach notes granular synthesis; followed by combining Addy's data backfill and Matt's call-site batch transition rules.

### Decision
The canonical term for the transitional step of a parallel migration is `migrate-phase`. The migrate phase is the intermediate stage of a parallel change migration where active call sites and data reads/writes are incrementally transitioned in batches to the expanded interface.

### Adopted from
Addy `references/database-migrations.md:46` for dual-write data migration; Matt `skills/expand-contract-migrate/SKILL.md:24` for call-site ticket batching.

### Dropped
None (clean implementations in both sources).

### Rejected alternatives
transition-phase (less specific than Migrate).

### Evidence
Addy `references/database-migrations.md:46-58`; Matt `skills/expand-contract-migrate/SKILL.md:24-29`.

### Glossary
### migrate-phase

- **definition:** The migrate phase is the intermediate stage of a parallel change migration where active call sites and data reads/writes are incrementally transitioned in batches to the expanded interface.
- **kind:** phase
- **source names:** addy: `MIGRATE` · matt: `Migrate` · rjm: —
- **decision:** D-108
- **concordance:** `docs/analysis/concordance/phases.md#phase-migrate`
- **not to be confused with:** `expand-phase`, `contract-phase`

---

## D-109 — contract-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#phase-contract
- **preferences consulted:** PREFERENCES.md § Approach notes Matt has things worth bringing over; followed by adopting Matt's explicit Contract phase to complete the Expand-Migrate-Contract cycle.

### Decision
The canonical term for the deprecation removal step of a parallel migration is `contract-phase`. The contract phase is the terminal stage of a parallel change migration where deprecated legacy interfaces, schema columns, or compatibility adapters are cleanly removed after all consumers have migrated.

### Adopted from
Matt `skills/expand-contract-migrate/SKILL.md:30`.

### Dropped
None.

### Rejected alternatives
cleanup-phase (collides with diagnostic/deletion cleanup).

### Evidence
Matt `skills/expand-contract-migrate/SKILL.md:30-36`.

### Glossary
### contract-phase

- **definition:** The contract phase is the terminal stage of a parallel change migration where deprecated legacy interfaces, schema columns, or compatibility adapters are cleanly removed after all consumers have migrated.
- **kind:** phase
- **source names:** addy: — · matt: `Contract` · rjm: —
- **decision:** D-109
- **concordance:** `docs/analysis/concordance/phases.md#phase-contract`
- **not to be confused with:** `expand-phase`, `migrate-phase`, `deletion-cleanup`

---

## D-110 — diagnostic-cleanup and deletion-cleanup

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#phase-cleanup
- **preferences consulted:** PREFERENCES.md § Approach favours Matt's bug diagnosis workflow and RJM's review rigor; followed by splitting the homonym into `diagnostic-cleanup` (Matt) and `deletion-cleanup` (RJM) per Glossary Rule 3.

### Decision
The homonym `cleanup` is resolved by establishing two distinct canonical terms: `diagnostic-cleanup` for bug diagnosis, and `deletion-cleanup` for dead-code and ADR deletion review. Diagnostic cleanup is the concluding step of a bug diagnosis workflow in which temporary logging, test probes, and diagnostic scaffolding are removed before committing the fix. Deletion cleanup is the final step of a code deletion review where obsolete references, stale documentation, and deprecated architecture records are systematically removed.

### Adopted from
Matt `skills/diagnosing-bugs/SKILL.md:135` for diagnostic instrumentation removal; RJM `.claude/skills/review/SKILL.md:195` for dead-code deletion cleanup.

### Dropped
Generic overloaded term `Cleanup`.

### Rejected alternatives
cleanup (rejected because it represents two completely distinct operations).

### Evidence
Matt `skills/diagnosing-bugs/SKILL.md:135-148`; RJM `.claude/skills/review/SKILL.md:195-210`.

### Glossary
### diagnostic-cleanup

- **definition:** Diagnostic cleanup is the concluding step of a bug diagnosis workflow in which temporary logging, test probes, and diagnostic scaffolding are removed before committing the fix.
- **kind:** phase
- **source names:** addy: — · matt: `Cleanup` · rjm: —
- **decision:** D-110
- **concordance:** `docs/analysis/concordance/phases.md#phase-cleanup`
- **not to be confused with:** `deletion-cleanup`, `contract-phase`

### deletion-cleanup

- **definition:** Deletion cleanup is the final step of a code deletion review where obsolete references, stale documentation, and deprecated architecture records are systematically removed.
- **kind:** phase
- **source names:** addy: — · matt: — · rjm: `Phase D4: Cleanup`
- **decision:** D-110
- **concordance:** `docs/analysis/concordance/phases.md#phase-cleanup`
- **not to be confused with:** `diagnostic-cleanup`, `contract-phase`

---

## D-111 — lifecycle

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#meta-sdlc
- **preferences consulted:** PREFERENCES.md § Approach notes result must be compatible with brain; followed by establishing `lifecycle` as the overarching term for brain's development workflow.

### Decision
The canonical term for the overarching development framework is `lifecycle`. The lifecycle is the structured, multi-phase sequence of engineering stages—spanning specification, planning, implementation, testing, review, and shipping—governing autonomous software development.

### Adopted from
Addy `skills/spec-driven-development/SKILL.md:14` for phased SDLC framework; Matt `skills/work-in-phases/SKILL.md:12` for phase isolation; RJM `.claude/skills/autonomous-dev/SKILL.md:1` for autonomous session boundaries.

### Dropped
RJM's missing path defects in autonomous dev scripts (D-006).

### Rejected alternatives
sdlc (too generic/traditional), workflow (overloaded with CI/CD).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:14-25`; Matt `skills/work-in-phases/SKILL.md:12-22`; RJM `.claude/skills/autonomous-dev/SKILL.md:1-20`.

### Glossary
### lifecycle

- **definition:** The lifecycle is the structured, multi-phase sequence of engineering stages—spanning specification, planning, implementation, testing, review, and shipping—governing autonomous software development.
- **kind:** phase
- **source names:** addy: `SDLC` · matt: `phase` · rjm: `autonomous development session`
- **decision:** D-111
- **concordance:** `docs/analysis/concordance/phases.md#meta-sdlc`
- **not to be confused with:** `phase-routing`

---

## D-112 — phase-routing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#meta-phase-routing
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's skill routing; followed by establishing `phase-routing` as the canonical orchestration entry point.

### Decision
The canonical term for entry dispatch and stage selection is `phase-routing`. Phase routing is the meta-orchestration mechanism that determines which lifecycle phase, skill, or workflow command is appropriate for an incoming developer request.

### Adopted from
Addy `external/index.md:25` for skill discovery and phase routing; Matt `skills/productivity/SKILL.md:5` for task orientation.

### Dropped
Addy's orphan links in external documentation (D-006).

### Rejected alternatives
meta-phase (Addy: too abstract), productivity (Matt: too broad).

### Evidence
Addy `external/index.md:25-40`; Matt `skills/productivity/SKILL.md:5-18`.

### Glossary
### phase-routing

- **definition:** Phase routing is the meta-orchestration mechanism that determines which lifecycle phase, skill, or workflow command is appropriate for an incoming developer request.
- **kind:** phase
- **source names:** addy: `Meta phase` · matt: `productivity` · rjm: —
- **decision:** D-112
- **concordance:** `docs/analysis/concordance/phases.md#meta-phase-routing`
- **not to be confused with:** `lifecycle`

---

## D-113 — engineering-domain

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#framework-engineering
- **preferences consulted:** PREFERENCES.md § Approach favours explicit phases over monolithic containers; followed by classifying Matt's `engineering` container as a catalog domain rather than a single lifecycle phase.

### Decision
Matt's `engineering` concept is adopted as a catalog domain classification rather than an active lifecycle phase, under the canonical name `engineering-domain`. The engineering domain is the functional container classifying core software construction, testing, and maintenance capabilities within the agent skill catalog.

### Adopted from
Matt `skills/engineering/SKILL.md:5`.

### Dropped
Monolithic single-phase view of engineering in favor of discrete lifecycle phases (`spec`, `plan`, `build`, `test`, `review`, `ship`).

### Rejected alternatives
Treating engineering as an active phase (rejected because it blurs phase boundaries).

### Evidence
Matt `skills/engineering/SKILL.md:5-20`.

### Glossary
### engineering-domain

- **definition:** The engineering domain is the functional container classifying core software construction, testing, and maintenance capabilities within the agent skill catalog.
- **kind:** phase
- **source names:** addy: — · matt: `engineering` · rjm: —
- **decision:** D-113
- **concordance:** `docs/analysis/concordance/phases.md#framework-engineering`
- **not to be confused with:** `lifecycle`, `build-phase`

---

## D-114 — triage-phase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#framework-triage
- **preferences consulted:** PREFERENCES.md § Approach notes Matt has strengths worth bringing over; followed by adopting Matt's triage workflow as an intake phase.

### Decision
The canonical term for issue intake and pre-specification assessment is `triage-phase`. The triage phase is the pre-specification intake stage in which incoming bug reports, issues, or external requests are inspected, reproduced, labeled, and prepared for entry into the lifecycle.

### Adopted from
Matt `skills/triage/SKILL.md:10`.

### Dropped
Matt's missing path defect referencing setup-matt-pocock-skills.md (D-006).

### Rejected alternatives
Omitting triage (rejected because issue intake is an essential real-world lifecycle entry point).

### Evidence
Matt `skills/triage/SKILL.md:10-45`.

### Glossary
### triage-phase

- **definition:** The triage phase is the pre-specification intake stage in which incoming bug reports, issues, or external requests are inspected, reproduced, labeled, and prepared for entry into the lifecycle.
- **kind:** phase
- **source names:** addy: — · matt: `triage` · rjm: —
- **decision:** D-114
- **concordance:** `docs/analysis/concordance/phases.md#framework-triage`
- **not to be confused with:** `spec`, `reconnaissance`

---

## D-115 — reconnaissance

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#workflow-phase-0-scope
- **preferences consulted:** PREFERENCES.md § Approach notes RJM naming strengths; followed by adopting `reconnaissance` unifying Addy's scope boundary check and RJM's repo recon.

### Decision
The canonical term for early environment mapping and capability bounding is `reconnaissance`. Reconnaissance is the preparatory phase within specification or planning that surveys repository conventions, tooling, and modular boundaries to determine feasible scope before detailed design.

### Adopted from
Addy `skills/spec-driven-development/SKILL.md:32` for modular capability mapping; RJM `.claude/commands/autoplan.md:22` for target repository reconnaissance.

### Dropped
Addy's doc-drift regarding phase numbering (D-006).

### Rejected alternatives
scope-check (Addy: names only the boundary check, omitting environmental survey).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:32-39`; RJM `.claude/commands/autoplan.md:22-35`.

### Glossary
### reconnaissance

- **definition:** Reconnaissance is the preparatory phase within specification or planning that surveys repository conventions, tooling, and modular boundaries to determine feasible scope before detailed design.
- **kind:** phase
- **source names:** addy: `"Phase 0: Scope Check"` · matt: — · rjm: `Phase 0: Recon the target`
- **decision:** D-115
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-0-scope`
- **not to be confused with:** `scope-check`, `prior-art-review`

---

## D-116 — scope-check and prior-art-review

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#workflow-phase-0-homonym
- **preferences consulted:** PREFERENCES.md § Approach notes granular synthesis; followed by splitting the `Phase 0` homonym into `scope-check` (spec) and `prior-art-review` (review) per Glossary Rule 3.

### Decision
The homonym `Phase 0` is resolved by establishing two distinct canonical terms: `scope-check` for specification modular validation, and `prior-art-review` for code review background research. The scope check is the initial gate in specification that validates whether an incoming request spans multiple independently testable capabilities and decomposes it before drafting. Prior art review is the initial exploratory stage in code review that examines historical context, related architecture decision records, and git history before evaluating diffs.

### Adopted from
Addy `skills/spec-driven-development/SKILL.md:28` for specification scope checking; RJM `.claude/skills/review/SKILL.md:18` for review prior art research.

### Dropped
Generic numbered label `Phase 0`.

### Rejected alternatives
phase-0 (rejected because it means two completely different things in spec vs review).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:28-35`; RJM `.claude/skills/review/SKILL.md:18-27`.

### Glossary
### scope-check

- **definition:** The scope check is the initial gate in specification that validates whether an incoming request spans multiple independently testable capabilities and decomposes it before drafting.
- **kind:** phase
- **source names:** addy: `Phase 0` · matt: — · rjm: —
- **decision:** D-116
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-0-homonym`
- **not to be confused with:** `prior-art-review`, `reconnaissance`

### prior-art-review

- **definition:** Prior art review is the initial exploratory stage in code review that examines historical context, related architecture decision records, and git history before evaluating diffs.
- **kind:** phase
- **source names:** addy: — · matt: — · rjm: `Phase 0`
- **decision:** D-116
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-0-homonym`
- **not to be confused with:** `scope-check`, `review-phase`

---

## D-117 — specification-drafting

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#workflow-phase-1-specify
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's comprehensive specification structure; followed by adopting `specification-drafting` combining Addy's six-area template with RJM's PRD conversion.

### Decision
The canonical term for drafting technical requirements is `specification-drafting`. Specification drafting is the core activity of the spec phase in which user requirements, architecture diagrams, data contracts, and acceptance criteria are written into a structured specification artifact.

### Adopted from
Addy `skills/spec-driven-development/SKILL.md:40` for six-area specification; RJM `.claude/commands/spec.md:52` for requirements-to-spec transformation.

### Dropped
Addy's doc-drift regarding phase sequence numbering (D-006).

### Rejected alternatives
prd-to-spec (RJM: assumes PRD always exists as an input; specification drafting applies to user prompts directly).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:40-51`; RJM `.claude/commands/spec.md:52-70`.

### Glossary
### specification-drafting

- **definition:** Specification drafting is the core activity of the spec phase in which user requirements, architecture diagrams, data contracts, and acceptance criteria are written into a structured specification artifact.
- **kind:** phase
- **source names:** addy: `"Phase 1: Specify"` · matt: — · rjm: `PRD to Spec`
- **decision:** D-117
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-1-specify`
- **not to be confused with:** `spec`, `execution-planning`

---

## D-118 — execution-planning

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#workflow-phase-2-plan
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's task planning approach and RJM's milestone structuring; followed by adopting `execution-planning`.

### Decision
The canonical term for technical plan authoring is `execution-planning`. Execution planning is the primary activity of the plan phase in which an approved specification is translated into architectural milestones, target file lists, and technical approach documentation.

### Adopted from
Addy `skills/spec-driven-development/SKILL.md:52` for `tasks/plan.md` artifact generation; RJM `.claude/commands/work.md:30` and `.claude/commands/plan.md:183` for execution plan structure.

### Dropped
RJM's legacy `/1-plan` numbered command syntax (D-006).

### Rejected alternatives
1-plan (RJM: legacy numbering anti-pattern).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:52-63`; RJM `.claude/commands/work.md:30-44`.

### Glossary
### execution-planning

- **definition:** Execution planning is the primary activity of the plan phase in which an approved specification is translated into architectural milestones, target file lists, and technical approach documentation.
- **kind:** phase
- **source names:** addy: `"Phase 2: Plan"` · matt: — · rjm: `/1-plan`
- **decision:** D-118
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-2-plan`
- **not to be confused with:** `plan-phase`, `task-decomposition`

---

## D-119 — task-decomposition

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#workflow-phase-3-tasks
- **preferences consulted:** PREFERENCES.md § Phase mapping notes both Addy and Matt define task templates with Description, Acceptance Criteria, and Dependencies; PREFERENCES.md § Phase mapping explicitly notes Peter prefers "phase" over "part" as grouping word; followed by adopting `task-decomposition`.

### Decision
The canonical term for task breakdown is `task-decomposition`. Task decomposition is the final stage of planning in which the execution plan is broken down into an ordered checklist or ticket set of independently testable, bite-sized tasks.

### Adopted from
Addy `skills/spec-driven-development/SKILL.md:64` for `tasks/todo.md` checklist generation; RJM `.claude/commands/plan.md:120` for task board structure; Matt `skills/to-tickets/SKILL.md:15` for modular ticket sizing.

### Dropped
Addy's doc-drift regarding checklist sync (D-006).

### Rejected alternatives
kanban (RJM: names visualization board rather than decomposition activity).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:64-75`; RJM `.claude/commands/plan.md:120-145`; Matt `skills/to-tickets/SKILL.md:15-35`.

### Glossary
### task-decomposition

- **definition:** Task decomposition is the final stage of planning in which the execution plan is broken down into an ordered checklist or ticket set of independently testable, bite-sized tasks.
- **kind:** phase
- **source names:** addy: `"Phase 3: Tasks"` · matt: — · rjm: `Kanban`
- **decision:** D-119
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-3-tasks`
- **not to be confused with:** `execution-planning`, `task-execution`

---

## D-120 — task-execution

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#workflow-phase-4-implement
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's vertical-slice implementation discipline; followed by adopting `task-execution`.

### Decision
The canonical term for implementation against tasks is `task-execution`. Task execution is the primary activity of the build phase in which code and tests are iteratively written, compiled, and verified against task acceptance criteria.

### Adopted from
Addy `skills/spec-driven-development/SKILL.md:76` for task checklist execution; RJM `.claude/commands/work.md:45` for implementation iteration.

### Dropped
RJM's legacy `/2-impl` command syntax (D-006).

### Rejected alternatives
2-impl (RJM legacy number), coding (too colloquial).

### Evidence
Addy `skills/spec-driven-development/SKILL.md:76-90`; RJM `.claude/commands/work.md:45-60`.

### Glossary
### task-execution

- **definition:** Task execution is the primary activity of the build phase in which code and tests are iteratively written, compiled, and verified against task acceptance criteria.
- **kind:** phase
- **source names:** addy: `"Phase 4: Implement"` · matt: — · rjm: `/2-impl`
- **decision:** D-120
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-4-implement`
- **not to be confused with:** `build-phase`, `task-decomposition`

---

## D-121 — defect-reproduction

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#diagnosing-phase-1
- **preferences consulted:** PREFERENCES.md § Approach notes Matt does things better than Addy's version; Matt's `diagnosing-bugs` has a proven 5-phase method for defect isolation; followed by adopting Matt's automated red-command creation for Phase 1.

### Decision
The canonical term for initial defect reproduction is `defect-reproduction`. Defect reproduction is the initial diagnostic phase in which an automated, deterministic reproduction command is established to reliably demonstrate a reported defect before attempting fixes.

### Adopted from
Matt `skills/diagnosing-bugs/SKILL.md:25` for deterministic red command; RJM `.claude/commands/test.md:34` for test strategy documentation.

### Dropped
RJM's missing-path defects in QA test strategy directories (D-006).

### Rejected alternatives
test-strategy (RJM: broad and covers green-field testing, whereas this phase is bug reproduction).

### Evidence
Matt `skills/diagnosing-bugs/SKILL.md:25-47`; RJM `.claude/commands/test.md:34-55`.

### Glossary
### defect-reproduction

- **definition:** Defect reproduction is the initial diagnostic phase in which an automated, deterministic reproduction command is established to reliably demonstrate a reported defect before attempting fixes.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 1` · rjm: `Phase 1: Test Strategy`
- **decision:** D-121
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-1`
- **not to be confused with:** `test`, `baseline-establishment`

---

## D-122 — baseline-establishment

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#diagnosing-phase-2
- **preferences consulted:** PREFERENCES.md § Approach notes Matt's debugging rigor and RJM's telemetry baseline; followed by synthesizing Matt's reproduction minimization with RJM's steady-state baseline.

### Decision
The canonical term for reproduction minimization and baseline metrics is `baseline-establishment`. Baseline establishment is the diagnostic phase in which reproduction steps are minimized to only load-bearing elements and steady-state operating telemetry is recorded as a benchmark.

### Adopted from
Matt `skills/diagnosing-bugs/SKILL.md:48` for load-bearing minimization; RJM `.claude/commands/test.md:62` for steady-state baseline telemetry.

### Dropped
RJM's exit-code mismatch defect in baseline scripts (D-006).

### Rejected alternatives
minimization (Matt: describes the reproduction case, but misses baseline validation).

### Evidence
Matt `skills/diagnosing-bugs/SKILL.md:48-69`; RJM `.claude/commands/test.md:62-85`.

### Glossary
### baseline-establishment

- **definition:** Baseline establishment is the diagnostic phase in which reproduction steps are minimized to only load-bearing elements and steady-state operating telemetry is recorded as a benchmark.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 2` · rjm: `Establish Baseline`
- **decision:** D-122
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-2`
- **not to be confused with:** `defect-reproduction`, `hypothesis-generation`

---

## D-123 — hypothesis-generation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#diagnosing-phase-3
- **preferences consulted:** PREFERENCES.md § Approach values scientific bug diagnosis; followed by adopting Matt's 3–5 ranked falsifiable hypotheses rule combined with RJM's hypothesis structure.

### Decision
The canonical term for formulating root-cause theories is `hypothesis-generation`. Hypothesis generation is the diagnostic phase in which three to five ranked, falsifiable hypotheses with specific observable predictions are formulated to explain an observed failure.

### Adopted from
Matt `skills/diagnosing-bugs/SKILL.md:70` for ranked falsifiable predictions; RJM `.claude/commands/test.md:88` for hypothesis formulation.

### Dropped
RJM's script bugs in hypothesis verification (D-006).

### Rejected alternatives
guessing (anti-pattern; hypotheses must be falsifiable).

### Evidence
Matt `skills/diagnosing-bugs/SKILL.md:70-91`; RJM `.claude/commands/test.md:88-110`.

### Glossary
### hypothesis-generation

- **definition:** Hypothesis generation is the diagnostic phase in which three to five ranked, falsifiable hypotheses with specific observable predictions are formulated to explain an observed failure.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 3` · rjm: `Form Hypothesis`
- **decision:** D-123
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-3`
- **not to be confused with:** `hypothesis-probing`

---

## D-124 — hypothesis-probing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#diagnosing-phase-4
- **preferences consulted:** PREFERENCES.md § Approach favours Matt's one-variable-at-a-time probe isolation; followed by adopting `hypothesis-probing`.

### Decision
The canonical term for targeted diagnostic testing is `hypothesis-probing`. Hypothesis probing is the active diagnostic phase in which targeted probes, instrumentation, or logging are applied to isolate and test candidate hypotheses one variable at a time.

### Adopted from
Matt `skills/diagnosing-bugs/SKILL.md:92` for one-variable probing; RJM `.claude/commands/test.md:112` for diagnostic execution.

### Dropped
RJM's internal contradiction and missing path defects in diagnosis scripts (D-006).

### Rejected alternatives
diagnosis (too general; probing is the concrete action).

### Evidence
Matt `skills/diagnosing-bugs/SKILL.md:92-114`; RJM `.claude/commands/test.md:112-135`.

### Glossary
### hypothesis-probing

- **definition:** Hypothesis probing is the active diagnostic phase in which targeted probes, instrumentation, or logging are applied to isolate and test candidate hypotheses one variable at a time.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 4` · rjm: `Diagnosis`
- **decision:** D-124
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-4`
- **not to be confused with:** `hypothesis-generation`, `defect-remediation`

---

## D-125 — defect-remediation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 027
- **status:** active
- **supersedes:** —
- **resolves:** phases.md#diagnosing-phase-5
- **preferences consulted:** PREFERENCES.md § Approach combines Matt's proper-seam regression testing with RJM's pre-push validation gates; followed by adopting `defect-remediation`.

### Decision
The canonical term for fix confirmation and regression test locking is `defect-remediation`. Defect remediation is the concluding diagnostic phase in which the verified fix and permanent regression test are confirmed at the proper architectural seam, instrumentation removed, and validation gates passed.

### Adopted from
Matt `skills/diagnosing-bugs/SKILL.md:115` for regression testing at the right seam and instrumentation cleanup; RJM `.claude/commands/verify.md:42` for pre-push validation gates.

### Dropped
RJM's unfailable drift gates (D-006).

### Rejected alternatives
bug-fix (informal and omits the regression testing and drift gate invariants).

### Evidence
Matt `skills/diagnosing-bugs/SKILL.md:115-140`; RJM `.claude/commands/verify.md:42-65`.

### Glossary
### defect-remediation

- **definition:** Defect remediation is the concluding diagnostic phase in which the verified fix and permanent regression test are confirmed at the proper architectural seam, instrumentation removed, and validation gates passed.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 5` · rjm: `Phase 3: Run the Drift Gates Locally Before Pushing`
- **decision:** D-125
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-5`
- **not to be confused with:** `quality-assurance`, `diagnostic-cleanup`

---

## D-126 — one-pager

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-one-pager
- **preferences consulted:** PREFERENCES.md § Depth notes Addy's one-pager with MVP scope and Not Doing list; followed by adopting Addy's one-pager framing over Matt's brief.

### Decision
The canonical term for this artifact is `one-pager`. A one-pager is a high-density, single-page summary artifact establishing problem scope, target audience, MVP boundaries, and non-goals prior to detailed specification.

### Adopted from
ADDY `evals/cases/idea-refine.json:34` for one-pager; MATT `skills/in-progress/loop-me/SKILL.md:23` for Brief.

### Dropped
None (source implementations clean).

### Rejected alternatives
brief (Matt: too generic; brief is used for agent task prompts in agent-brief), project-summary (non-standard).

### Evidence
ADDY `evals/cases/idea-refine.json:34`; MATT `skills/in-progress/loop-me/SKILL.md:23`.

### Glossary
### one-pager

- **definition:** A one-pager is a high-density, single-page summary artifact establishing problem scope, target audience, MVP boundaries, and non-goals prior to detailed specification.
- **kind:** artifact
- **source names:** addy: `one-pager` · matt: `Brief` · rjm: —
- **decision:** D-126
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-one-pager`
- **not to be confused with:** `agent-brief, requirements-spec`

---

## D-127 — agent-brief

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-agent-brief
- **preferences consulted:** PREFERENCES.md § Approach favours Matt's agent-oriented context design; followed by adopting agent-brief for agent task initialization.

### Decision
The canonical term for this artifact is `agent-brief`. An agent brief is a structured context document specifying problem boundaries, system constraints, user intent, and references necessary to seed an autonomous agent session.

### Adopted from
ADDY `evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1` for product brief; MATT `skills/engineering/triage/AGENT-BRIEF.md:3` for agent brief.

### Dropped
MATT's defects: doc-drift (from skills-engineering-triage-agent-brief-md.md: mentions GitHub issue or PR specifically, whereas SKILL.md and design support alternative trackers) defects (D-006).

### Rejected alternatives
product-brief (Addy: describes human product orientation rather than agent session dispatch).

### Evidence
ADDY `evals/fixtures/spec-driven-development-decomposition/portal-brief.md:1`; MATT `skills/engineering/triage/AGENT-BRIEF.md:3`.

### Glossary
### agent-brief

- **definition:** An agent brief is a structured context document specifying problem boundaries, system constraints, user intent, and references necessary to seed an autonomous agent session.
- **kind:** artifact
- **source names:** addy: `product brief` · matt: `agent brief` · rjm: —
- **decision:** D-127
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-agent-brief`
- **not to be confused with:** `one-pager, input-contract`

---

## D-128 — requirements-spec

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-requirements
- **preferences consulted:** PREFERENCES.md § Approach values Addy's comprehensive specification structure combined with RJM's requirement schemas; followed by adopting requirements-spec.

### Decision
The canonical term for this artifact is `requirements-spec`. A requirements specification is a structured catalog of functional and non-functional capability definitions, user stories, and constraints governing system behavior.

### Adopted from
ADDY `external/spec-driven-development.md:5` for requirements; MATT `skills/engineering/to-spec/SKILL.md:33` for user stories; RJM `.claude/skills/spec-generator/references/spec-schemas.md:75` for Requirement Schema.

### Dropped
ADDY's defects: doc-drift defects (D-006); RJM's defects: missing-path defects (D-006).

### Rejected alternatives
user-stories (Matt: format-specific; requirements encompass more than agile stories), requirement-schema (RJM: refers to template structure rather than the artifact).

### Evidence
ADDY `external/spec-driven-development.md:5`; MATT `skills/engineering/to-spec/SKILL.md:33`; RJM `.claude/skills/spec-generator/references/spec-schemas.md:75`.

### Glossary
### requirements-spec

- **definition:** A requirements specification is a structured catalog of functional and non-functional capability definitions, user stories, and constraints governing system behavior.
- **kind:** artifact
- **source names:** addy: `requirements` · matt: `user stories` · rjm: `Requirement Schema`
- **decision:** D-128
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-requirements`
- **not to be confused with:** `structured-requirements, spec`

---

## D-129 — structured-requirements

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-structured-requirements
- **preferences consulted:** PREFERENCES.md § Approach values RJM's formal verification rigor; followed by adopting RJM's structured-requirements concept.

### Decision
The canonical term for this artifact is `structured-requirements`. Structured requirements are machine-readable requirement declarations formalized with unique identifiers, acceptance criteria, verification methods, and dependency relationships.

### Adopted from
ADDY `skills/documentation-and-adrs/SKILL.md:255` for Spec files; RJM `.claude/skills/requirements-interview/SKILL.md:39` for Structured requirements.

### Dropped
None (source implementations clean).

### Rejected alternatives
spec-files (Addy: too generic; refers to file distribution rather than machine-readable structure).

### Evidence
ADDY `skills/documentation-and-adrs/SKILL.md:255`; RJM `.claude/skills/requirements-interview/SKILL.md:39`.

### Glossary
### structured-requirements

- **definition:** Structured requirements are machine-readable requirement declarations formalized with unique identifiers, acceptance criteria, verification methods, and dependency relationships.
- **kind:** artifact
- **source names:** addy: `Spec files` · matt: — · rjm: `Structured requirements`
- **decision:** D-129
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-structured-requirements`
- **not to be confused with:** `requirements-spec, task-list`

---

## D-130 — input-contract

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-input-contract
- **preferences consulted:** PREFERENCES.md § Approach favours RJM's gated pipeline contracts; followed by adopting input-contract.

### Decision
The canonical term for this artifact is `input-contract`. An input contract is an immutable, schema-validated specification of all caller-provided parameters, prerequisite artifacts, and environmental preconditions required before phase execution.

### Adopted from
ADDY `skills/interview-me/SKILL.md:136` for confirmed statement of intent; MATT `skills/in-progress/writing-shape/SKILL.md:9` for input pile; RJM `.agents/governance/agent-design-principles.md:259` for Input Contract.

### Dropped
RJM's defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor detection documented without automated enforcement at line 41) defects (D-006).

### Rejected alternatives
input-pile (Matt: colloquial and unstructured), confirmed-statement-of-intent (Addy: captures user agreement but lacks formal schema boundaries).

### Evidence
ADDY `skills/interview-me/SKILL.md:136`; MATT `skills/in-progress/writing-shape/SKILL.md:9`; RJM `.agents/governance/agent-design-principles.md:259`.

### Glossary
### input-contract

- **definition:** An input contract is an immutable, schema-validated specification of all caller-provided parameters, prerequisite artifacts, and environmental preconditions required before phase execution.
- **kind:** artifact
- **source names:** addy: `confirmed statement of intent` · matt: `input pile` · rjm: `Input Contract`
- **decision:** D-130
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-input-contract`
- **not to be confused with:** `agent-brief, scope-constraints`

---

## D-131 — scope-constraints

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-scope-constraints
- **preferences consulted:** PREFERENCES.md § Approach combines Addy's Not Doing list with RJM's breaking-change assessments; followed by adopting scope-constraints.

### Decision
The canonical term for this artifact is `scope-constraints`. Scope constraints are explicit boundary definitions documenting out-of-scope capabilities, technical invariants, and breaking-change risk assessments for an initiative.

### Adopted from
ADDY `evals/cases/idea-refine.json:34` for Not Doing list; MATT `skills/productivity/teach/MISSION-FORMAT.md:19` for Constraints; RJM `.claude/skills/review/references/architect.md:138` for Breaking Change Assessment.

### Dropped
RJM's defects: doc-drift, missing-path, other defects (D-006).

### Rejected alternatives
not-doing-list (Addy: colloquial sub-section name), constraints (Matt: too broad).

### Evidence
ADDY `evals/cases/idea-refine.json:34`; MATT `skills/productivity/teach/MISSION-FORMAT.md:19`; RJM `.claude/skills/review/references/architect.md:138`.

### Glossary
### scope-constraints

- **definition:** Scope constraints are explicit boundary definitions documenting out-of-scope capabilities, technical invariants, and breaking-change risk assessments for an initiative.
- **kind:** artifact
- **source names:** addy: `Not Doing list` · matt: `Constraints` · rjm: `Breaking Change Assessment`
- **decision:** D-131
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-scope-constraints`
- **not to be confused with:** `input-contract, mvp-scope`

---

## D-132 — mvp-scope

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-mvp-scope
- **preferences consulted:** PREFERENCES.md § Depth notes Addy's MVP scope framing; followed by adopting mvp-scope.

### Decision
The canonical term for this artifact is `mvp-scope`. An MVP scope is an explicit specification of the minimal viable capability set and concrete observable success criteria required for initial release.

### Adopted from
ADDY `evals/cases/idea-refine.json:34` for MVP scope; MATT `skills/productivity/teach/MISSION-FORMAT.md:14` for Success looks like.

### Dropped
None (source implementations clean).

### Rejected alternatives
success-looks-like (Matt: colloquial phrased condition).

### Evidence
ADDY `evals/cases/idea-refine.json:34`; MATT `skills/productivity/teach/MISSION-FORMAT.md:14`.

### Glossary
### mvp-scope

- **definition:** An MVP scope is an explicit specification of the minimal viable capability set and concrete observable success criteria required for initial release.
- **kind:** artifact
- **source names:** addy: `MVP scope` · matt: `Success looks like` · rjm: —
- **decision:** D-132
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-mvp-scope`
- **not to be confused with:** `scope-constraints, one-pager`

---

## D-133 — discovery-questionnaire

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-discovery-questionnaire
- **preferences consulted:** PREFERENCES.md § Approach values Matt's interactive discovery grilling; followed by adopting discovery-questionnaire.

### Decision
The canonical term for this artifact is `discovery-questionnaire`. A discovery questionnaire is an exploratory inquiry artifact containing structured clarifying questions and recorded stakeholder responses used to resolve ambiguity during specification.

### Adopted from
MATT `skills/productivity/to-questionnaire/SKILL.md:20` for discovery questionnaire; RJM `.agents/governance/interview-response-template.md:1` for Agent Interview Response Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
agent-interview-response-template (RJM: clumsy template name).

### Evidence
MATT `skills/productivity/to-questionnaire/SKILL.md:20`; RJM `.agents/governance/interview-response-template.md:1`.

### Glossary
### discovery-questionnaire

- **definition:** A discovery questionnaire is an exploratory inquiry artifact containing structured clarifying questions and recorded stakeholder responses used to resolve ambiguity during specification.
- **kind:** artifact
- **source names:** addy: — · matt: `discovery questionnaire` · rjm: `Agent Interview Response Template`
- **decision:** D-133
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-discovery-questionnaire`
- **not to be confused with:** `questionnaire-template, agent-brief`

---

## D-134 — task-list

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-tasks-todo-list
- **preferences consulted:** PREFERENCES.md § Phase mapping notes both Addy and Matt define task templates; PREFERENCES.md § Phase mapping prefers 'phase' over 'part'; followed by adopting task-list.

### Decision
The canonical term for this artifact is `task-list`. A task list is an ordered checklist of discrete, testable work units with explicit completion criteria and dependencies governing implementation progress.

### Adopted from
ADDY `skills/spec-driven-development/SKILL.md:176` for tasks/todo.md; MATT `CHANGELOG.md:183` for tickets; RJM `.github/scripts/generate_spec_report.py:120` for TASK-*.

### Dropped
ADDY's defects: other defects (D-006); MATT's defects: missing-path defects (D-006); RJM's defects: orphan, missing-path defects (D-006).

### Rejected alternatives
todo-md (Addy: file-path specific), tickets (Matt: implies ticketing system), kanban (RJM: visual board).

### Evidence
ADDY `skills/spec-driven-development/SKILL.md:176`; MATT `CHANGELOG.md:183`; RJM `.github/scripts/generate_spec_report.py:120`.

### Glossary
### task-list

- **definition:** A task list is an ordered checklist of discrete, testable work units with explicit completion criteria and dependencies governing implementation progress.
- **kind:** artifact
- **source names:** addy: `tasks/todo.md` · matt: `tickets` · rjm: `TASK-*`
- **decision:** D-134
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-tasks-todo-list`
- **not to be confused with:** `task-card, subtask-card`

---

## D-135 — task-card

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-task-unit
- **preferences consulted:** PREFERENCES.md § Phase mapping notes modular task definitions; followed by adopting task-card.

### Decision
The canonical term for this artifact is `task-card`. A task card is a self-contained work unit record defining a single implementation change with its objective, target files, acceptance criteria, and verification commands.

### Adopted from
ADDY `skills/planning-and-task-breakdown/SKILL.md:159` for Task List Target; MATT `CONTEXT.md:13` for ticket; RJM `.claude/agents/task-decomposer.md:105` for Task Definition Format.

### Dropped
MATT's defects: missing-path, other, doc-drift (proscribed by CONTEXT.md in favor of Issue yet pervasive across skill documentation and wayfinder terminology) defects (D-006).

### Rejected alternatives
ticket (Matt: suggests external issue tracker), task-definition (RJM: abstract format name).

### Evidence
ADDY `skills/planning-and-task-breakdown/SKILL.md:159`; MATT `CONTEXT.md:13`; RJM `.claude/agents/task-decomposer.md:105`.

### Glossary
### task-card

- **definition:** A task card is a self-contained work unit record defining a single implementation change with its objective, target files, acceptance criteria, and verification commands.
- **kind:** artifact
- **source names:** addy: `Task List Target` · matt: `ticket` · rjm: `Task Definition Format`
- **decision:** D-135
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-task-unit`
- **not to be confused with:** `task-list, subtask-card`

---

## D-136 — plan-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-plan-template
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's plan document structure; followed by adopting plan-template.

### Decision
The canonical term for this artifact is `plan-template`. A plan template is a standardized schema defining required sections, headings, risk registers, and milestone structures for execution planning documents.

### Adopted from
ADDY `skills/planning-and-task-breakdown/SKILL.md:166` for Plan Document Template; MATT `skills/engineering/to-spec/SKILL.md:21` for spec-template; RJM `templates/agents/task-decomposer.shared.md:139` for Task List Template.

### Dropped
MATT's defects: missing-path (skills/engineering/to-spec/SKILL.md:9 mentions non-existent /setup-matt-pocock-skills command) defects (D-006).

### Rejected alternatives
spec-template (Matt: conflates spec and plan templates), task-list-template (RJM: narrow focus on tasks only).

### Evidence
ADDY `skills/planning-and-task-breakdown/SKILL.md:166`; MATT `skills/engineering/to-spec/SKILL.md:21`; RJM `templates/agents/task-decomposer.shared.md:139`.

### Glossary
### plan-template

- **definition:** A plan template is a standardized schema defining required sections, headings, risk registers, and milestone structures for execution planning documents.
- **kind:** artifact
- **source names:** addy: `Plan Document Template` · matt: `spec-template` · rjm: `Task List Template`
- **decision:** D-136
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-plan-template`
- **not to be confused with:** `artifact-template, task-list`

---

## D-137 — subtask-card

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-child-ticket
- **preferences consulted:** PREFERENCES.md § Approach notes Matt's granular ticket breakdown; followed by adopting subtask-card aligned with task-card.

### Decision
The canonical term for this artifact is `subtask-card`. A subtask card is a subordinate work unit record representing an atomic implementation step linked to a parent task card or feature milestone.

### Adopted from
MATT `skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:26` for Child ticket; RJM `.claude/skills/spec-generator/references/spec-schemas.md:284` for Task Schema.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
child-ticket (Matt: ticketing terminology), task-schema (RJM: schema format name).

### Evidence
MATT `skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:26`; RJM `.claude/skills/spec-generator/references/spec-schemas.md:284`.

### Glossary
### subtask-card

- **definition:** A subtask card is a subordinate work unit record representing an atomic implementation step linked to a parent task card or feature milestone.
- **kind:** artifact
- **source names:** addy: — · matt: `Child ticket` · rjm: `Task Schema`
- **decision:** D-137
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-child-ticket`
- **not to be confused with:** `task-card, task-list`

---

## D-138 — task-backlog

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-backlog
- **preferences consulted:** PREFERENCES.md § Approach values Matt's issue triage and backlog management; followed by adopting task-backlog.

### Decision
The canonical term for this artifact is `task-backlog`. A task backlog is an organized repository of pending, unstarted task cards and feature ideas prioritized for future lifecycle iterations.

### Adopted from
MATT `CONTEXT.md:29` for backlog; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:154` for selection group.

### Dropped
MATT's defects: missing-path, other (from context-md.md: cites non-existent docs/agents/triage-labels.md and subject to runaway artifact bloat in CONTEXT.md) defects (D-006); RJM's defects: doc-drift, internal-contradiction, missing-path defects (D-006).

### Rejected alternatives
selection-group (RJM: transient execution batch term).

### Evidence
MATT `CONTEXT.md:29`; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:154`.

### Glossary
### task-backlog

- **definition:** A task backlog is an organized repository of pending, unstarted task cards and feature ideas prioritized for future lifecycle iterations.
- **kind:** artifact
- **source names:** addy: — · matt: `backlog` · rjm: `selection group`
- **decision:** D-138
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-backlog`
- **not to be confused with:** `task-list, task-card`

---

## D-139 — considered-options

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-considered-options
- **preferences consulted:** PREFERENCES.md § Approach favours RJM and Matt's naming for design evaluation; followed by adopting considered-options.

### Decision
The canonical term for this artifact is `considered-options`. A considered options record is an architectural analysis artifact documenting candidate solutions evaluated during design alongside the explicit rationale for rejected alternatives.

### Adopted from
ADDY `skills/documentation-and-adrs/SKILL.md:69` for Alternatives Considered; MATT `skills/engineering/domain-modeling/ADR-FORMAT.md:22` for Considered Options; RJM `.claude/skills/adr-generator/references/adr-templates-catalog.md:59` for Considered Options.

### Dropped
RJM's defects: internal-contradiction defects (D-006).

### Rejected alternatives
alternatives-considered (Addy: slightly less active phrasing than considered-options).

### Evidence
ADDY `skills/documentation-and-adrs/SKILL.md:69`; MATT `skills/engineering/domain-modeling/ADR-FORMAT.md:22`; RJM `.claude/skills/adr-generator/references/adr-templates-catalog.md:59`.

### Glossary
### considered-options

- **definition:** A considered options record is an architectural analysis artifact documenting candidate solutions evaluated during design alongside the explicit rationale for rejected alternatives.
- **kind:** artifact
- **source names:** addy: `Alternatives Considered` · matt: `Considered Options` · rjm: `Considered Options`
- **decision:** D-139
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-considered-options`
- **not to be confused with:** `architecture-decision-record, decision-ticket`

---

## D-140 — architecture-decision-record

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-architecture-decision-records-concept
- **preferences consulted:** PREFERENCES.md § References and § Depth value explicit architectural decision records; followed by adopting canonical architecture-decision-record.

### Decision
The canonical term for this artifact is `architecture-decision-record`. An architecture decision record is a durable document capturing a significant architectural choice, its context, consequences, alternatives considered, and current status.

### Adopted from
ADDY `skills/documentation-and-adrs/SKILL.md:25` for Architecture Decision Records; MATT `.changeset/domain-modeling-trigger-context-adr.md:5` for architectural decision; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:150` for decision group.

### Dropped
RJM's defects: doc-drift, internal-contradiction, missing-path defects (D-006).

### Rejected alternatives
decision-group (RJM: batching container), architectural-decision (Matt: informal concept).

### Evidence
ADDY `skills/documentation-and-adrs/SKILL.md:25`; MATT `.changeset/domain-modeling-trigger-context-adr.md:5`; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:150`.

### Glossary
### architecture-decision-record

- **definition:** An architecture decision record is a durable document capturing a significant architectural choice, its context, consequences, alternatives considered, and current status.
- **kind:** artifact
- **source names:** addy: `Architecture Decision Records` · matt: `architectural decision` · rjm: `decision group`
- **decision:** D-140
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-architecture-decision-records-concept`
- **not to be confused with:** `considered-options, decision-ticket`

---

## D-141 — context-map

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-context-map
- **preferences consulted:** PREFERENCES.md § Approach adopts Evans DDD terminology used by Matt and RJM; followed by adopting context-map.

### Decision
The canonical term for this artifact is `context-map`. A context map is a structural diagram and architectural inventory illustrating bounded system domains, component relationships, dependencies, and integration boundaries.

### Adopted from
ADDY `skills/spec-driven-development/SKILL.md:44` for capability map; MATT `skills/engineering/domain-modeling/CONTEXT-FORMAT.md:39` for Context Map; RJM `.claude/skills/software-engineering-library/references/domain-driven-design.md:24` for Context Map.

### Dropped
None (source implementations clean).

### Rejected alternatives
capability-map (Addy: focuses on business capabilities rather than architectural boundaries).

### Evidence
ADDY `skills/spec-driven-development/SKILL.md:44`; MATT `skills/engineering/domain-modeling/CONTEXT-FORMAT.md:39`; RJM `.claude/skills/software-engineering-library/references/domain-driven-design.md:24`.

### Glossary
### context-map

- **definition:** A context map is a structural diagram and architectural inventory illustrating bounded system domains, component relationships, dependencies, and integration boundaries.
- **kind:** artifact
- **source names:** addy: `capability map` · matt: `Context Map` · rjm: `Context Map`
- **decision:** D-141
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-context-map`
- **not to be confused with:** `context-map-file, domain-mapping`

---

## D-142 — pull-request

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-pull-request
- **preferences consulted:** PREFERENCES.md § Approach supports standard git workflow integration; followed by adopting pull-request.

### Decision
The canonical term for this artifact is `pull-request`. A pull request is a version control change proposal bundling atomic commits, change descriptions, automated test runs, and reviewer approvals for merging into a target branch.

### Adopted from
ADDY `evals/cases/git-workflow-and-versioning.json:18` for pull request; MATT `skills/engineering/triage/SKILL.md:11` for Pull requests; RJM `scripts/eval/software_engineering_library_activation_ci.py:147` for restoration PR.

### Dropped
MATT's defects: missing-path defects (D-006).

### Rejected alternatives
restoration-pr (RJM: names specific rollback PR subtype only).

### Evidence
ADDY `evals/cases/git-workflow-and-versioning.json:18`; MATT `skills/engineering/triage/SKILL.md:11`; RJM `scripts/eval/software_engineering_library_activation_ci.py:147`.

### Glossary
### pull-request

- **definition:** A pull request is a version control change proposal bundling atomic commits, change descriptions, automated test runs, and reviewer approvals for merging into a target branch.
- **kind:** artifact
- **source names:** addy: `pull request` · matt: `Pull requests` · rjm: `restoration PR`
- **decision:** D-142
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-pull-request`
- **not to be confused with:** `commit-message, working-increment`

---

## D-143 — commit-message

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-commit-message
- **preferences consulted:** PREFERENCES.md § References highlights git workflow and atomic commit disciplines; followed by adopting commit-message.

### Decision
The canonical term for this artifact is `commit-message`. A commit message is a structured version control summary describing the intent, scope, and rationale of an atomic code change.

### Adopted from
ADDY `skills/code-review-and-quality/SKILL.md:132` for Change Descriptions; MATT `external/diagnosing-bugs.md:49` for commit message.

### Dropped
None (source implementations clean).

### Rejected alternatives
change-descriptions (Addy: vague plural descriptor).

### Evidence
ADDY `skills/code-review-and-quality/SKILL.md:132`; MATT `external/diagnosing-bugs.md:49`.

### Glossary
### commit-message

- **definition:** A commit message is a structured version control summary describing the intent, scope, and rationale of an atomic code change.
- **kind:** artifact
- **source names:** addy: `Change Descriptions` · matt: `commit message` · rjm: —
- **decision:** D-143
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-commit-message`
- **not to be confused with:** `pull-request, changeset`

---

## D-144 — working-increment

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-working-code
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's vertical-slice implementation discipline; followed by adopting working-increment.

### Decision
The canonical term for this artifact is `working-increment`. A working increment is a compiled, functional, and test-verified code slice satisfying a defined subset of task acceptance criteria without regressing existing baselines.

### Adopted from
ADDY `evals/cases/incremental-implementation.json:10` for working increment; MATT `skills/misc/migrate-to-shoehorn/SKILL.md:12` for production code.

### Dropped
None (source implementations clean).

### Rejected alternatives
production-code (Matt: refers to target codebase rather than the incremental artifact).

### Evidence
ADDY `evals/cases/incremental-implementation.json:10`; MATT `skills/misc/migrate-to-shoehorn/SKILL.md:12`.

### Glossary
### working-increment

- **definition:** A working increment is a compiled, functional, and test-verified code slice satisfying a defined subset of task acceptance criteria without regressing existing baselines.
- **kind:** artifact
- **source names:** addy: `working increment` · matt: `production code` · rjm: —
- **decision:** D-144
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-working-code`
- **not to be confused with:** `working-tree, pull-request`

---

## D-145 — working-tree and working-title

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-working-tree
- **preferences consulted:** PREFERENCES.md § Approach requires unambiguous terminology; followed by splitting homonym into working-tree and working-title per Glossary Rule 3.

### Decision
The homonym is resolved by establishing two distinct canonical terms: `working-tree` and `working-title`. A working tree is the active filesystem directory structure containing tracked repository files, unstaged modifications, and local artifacts currently checked out by a developer or agent. A working title is a provisional, human-readable identifier assigned to an exploratory document or draft specification prior to formal naming and indexing.

### Adopted from
ADDY `skills/constraint-driven-development/references/floor-guard.md:9` for working tree; MATT `skills/in-progress/writing-fragments/SKILL.md:45` for Working title.

### Dropped
None (source implementations clean).

### Rejected alternatives
working-tree-homonym (unresolved overload).

### Evidence
ADDY `skills/constraint-driven-development/references/floor-guard.md:9`; MATT `skills/in-progress/writing-fragments/SKILL.md:45`.

### Glossary
### working-tree

- **definition:** A working tree is the active filesystem directory structure containing tracked repository files, unstaged modifications, and local artifacts currently checked out by a developer or agent.
- **kind:** artifact
- **source names:** addy: `working tree` · matt: — · rjm: —
- **decision:** D-145
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-working-tree`
- **not to be confused with:** `working-title, working-increment`

### working-title

- **definition:** A working title is a provisional, human-readable identifier assigned to an exploratory document or draft specification prior to formal naming and indexing.
- **kind:** artifact
- **source names:** addy: — · matt: `Working title` · rjm: —
- **decision:** D-145
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-working-tree`
- **not to be confused with:** `working-tree, spec`


---

## D-146 — plugin-manifest

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-claude-plugin-manifest
- **preferences consulted:** D-009 dual-target decision establishes Claude Code plugin manifest (.claude-plugin/plugin.json) with Antigravity parity; followed by adopting plugin-manifest.

### Decision
The canonical term for this artifact is `plugin-manifest`. A plugin manifest is a JSON metadata artifact declaring plugin identity, version, entrypoints, permissions, and tool capabilities for agent platform discovery.

### Adopted from
MATT `.agents/adr/0002-ship-as-a-claude-code-plugin.md:5` for Claude Code plugin; RJM `.agents/architecture/ADR-047-plugin-mode-hook-behavior.md:24` for marketplace plugin.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
marketplace-plugin (RJM: platform-specific marketplace wrapper).

### Evidence
MATT `.agents/adr/0002-ship-as-a-claude-code-plugin.md:5`; RJM `.agents/architecture/ADR-047-plugin-mode-hook-behavior.md:24`.

### Glossary
### plugin-manifest

- **definition:** A plugin manifest is a JSON metadata artifact declaring plugin identity, version, entrypoints, permissions, and tool capabilities for agent platform discovery.
- **kind:** artifact
- **source names:** addy: — · matt: `Claude Code plugin` · rjm: `marketplace plugin`
- **decision:** D-146
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-claude-plugin-manifest`
- **not to be confused with:** `agent-rules-config`

---

## D-147 — test-results

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-test-execution-results
- **preferences consulted:** PREFERENCES.md § Approach values empirical test output verification; followed by adopting test-results.

### Decision
The canonical term for this artifact is `test-results`. A test results record is an execution log capturing test suite execution status, assertion outcomes, failure traces, and duration metrics.

### Adopted from
ADDY `skills/context-engineering/SKILL.md:107` for Error Output / Test Results; MATT `external/diagnosing-bugs.md:34` for failing test; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:155` for test group.

### Dropped
ADDY's defects: doc-drift, orphan defects (D-006); RJM's defects: doc-drift, internal-contradiction, missing-path defects (D-006).

### Rejected alternatives
error-output (Addy: captures failures only), failing-test (Matt: captures reproduction red-state only), test-group (RJM: organizational structure).

### Evidence
ADDY `skills/context-engineering/SKILL.md:107`; MATT `external/diagnosing-bugs.md:34`; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:155`.

### Glossary
### test-results

- **definition:** A test results record is an execution log capturing test suite execution status, assertion outcomes, failure traces, and duration metrics.
- **kind:** artifact
- **source names:** addy: `Error Output / Test Results` · matt: `failing test` · rjm: `test group`
- **decision:** D-147
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-test-execution-results`
- **not to be confused with:** `test-coverage-report, test-strategy`

---

## D-148 — test-coverage-report

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-test-coverage
- **preferences consulted:** PREFERENCES.md § References highlights testing patterns; followed by adopting test-coverage-report.

### Decision
The canonical term for this artifact is `test-coverage-report`. A test coverage report is a diagnostic evaluation measuring the proportion of code statements, branches, and critical paths exercised by automated test suites.

### Adopted from
ADDY `agents/test-engineer.md:64` for Test Coverage Analysis; MATT `skills/misc/README.md:6` for test files; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:290` for corpus_verified.

### Dropped
RJM's defects: doc-drift, internal-contradiction, missing-path, script-bug defects (D-006).

### Rejected alternatives
test-files (Matt: names the test files themselves), corpus-verified (RJM: benchmark verification status).

### Evidence
ADDY `agents/test-engineer.md:64`; MATT `skills/misc/README.md:6`; RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:290`.

### Glossary
### test-coverage-report

- **definition:** A test coverage report is a diagnostic evaluation measuring the proportion of code statements, branches, and critical paths exercised by automated test suites.
- **kind:** artifact
- **source names:** addy: `Test Coverage Analysis` · matt: `test files` · rjm: `corpus_verified`
- **decision:** D-148
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-test-coverage`
- **not to be confused with:** `test-results, test-strategy`

---

## D-149 — test-strategy

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-testing-strategy
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md; followed by adopting test-strategy.

### Decision
The canonical term for this artifact is `test-strategy`. A test strategy is a specification artifact defining testing levels, assertion specifications, test environment requirements, and verification commands for a project.

### Adopted from
ADDY `skills/spec-driven-development/SKILL.md:108` for Testing Strategy; MATT `skills/engineering/to-spec/SKILL.md:61` for Testing Decisions; RJM `scripts/eval/_runtime_parity.py:31` for AssertionSpec.

### Dropped
ADDY's defects: doc-drift defects (D-006).

### Rejected alternatives
testing-decisions (Matt: informal record), assertion-spec (RJM: specific assertion schema).

### Evidence
ADDY `skills/spec-driven-development/SKILL.md:108`; MATT `skills/engineering/to-spec/SKILL.md:61`; RJM `scripts/eval/_runtime_parity.py:31`.

### Glossary
### test-strategy

- **definition:** A test strategy is a specification artifact defining testing levels, assertion specifications, test environment requirements, and verification commands for a project.
- **kind:** artifact
- **source names:** addy: `Testing Strategy` · matt: `Testing Decisions` · rjm: `AssertionSpec`
- **decision:** D-149
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-testing-strategy`
- **not to be confused with:** `test-results, test-coverage-report`

---

## D-150 — debug-trace

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-debug-trace
- **preferences consulted:** PREFERENCES.md § Approach notes Matt's debugging rigor and Addy's DevTools integration; followed by adopting debug-trace.

### Decision
The canonical term for this artifact is `debug-trace`. A debug trace is a chronological diagnostic log or performance capture recording runtime telemetry, function invocations, and variable states during defect investigation.

### Adopted from
ADDY `commands/webperf.toml:12` for DevTools performance trace; MATT `docs/engineering/diagnosing-bugs.md:51` for debug log; RJM `.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:14` for Probe.

### Dropped
MATT's clean in core technique; associated with risk of secret leakage in unredacted log captures noted in docs/engineering/diagnosing-bugs.md:70 defects (D-006); RJM's defects: missing-path defects (D-006).

### Rejected alternatives
performance-trace (Addy: performance-specific), debug-log (Matt: unstructured logging), probe (RJM: names diagnostic action).

### Evidence
ADDY `commands/webperf.toml:12`; MATT `docs/engineering/diagnosing-bugs.md:51`; RJM `.claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:14`.

### Glossary
### debug-trace

- **definition:** A debug trace is a chronological diagnostic log or performance capture recording runtime telemetry, function invocations, and variable states during defect investigation.
- **kind:** artifact
- **source names:** addy: `DevTools performance trace` · matt: `debug log` · rjm: `Probe`
- **decision:** D-150
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-debug-trace`
- **not to be confused with:** `test-results, baseline-establishment`

---

## D-151 — review-report

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-review-report
- **preferences consulted:** PREFERENCES.md § Approach values RJM's multi-perspective reviewer architecture (ADR-064) and Addy's review checklists; followed by adopting review-report.

### Decision
The canonical term for this artifact is `review-report`. A review report is an evaluative document summarizing multi-perspective code inspection findings, security assessments, architectural adherence, and required remediation items.

### Adopted from
ADDY `agents/code-reviewer.md:59` for Review Output Template; RJM `.claude/skills/planner/scripts/executor.py:495` for retrospective_format.

### Dropped
RJM's defects: missing-path, internal-contradiction, exit-code-mismatch defects (D-006).

### Rejected alternatives
retrospective-format (RJM: conflates code review with post-mortem retrospective).

### Evidence
ADDY `agents/code-reviewer.md:59`; RJM `.claude/skills/planner/scripts/executor.py:495`.

### Glossary
### review-report

- **definition:** A review report is an evaluative document summarizing multi-perspective code inspection findings, security assessments, architectural adherence, and required remediation items.
- **kind:** artifact
- **source names:** addy: `Review Output Template` · matt: — · rjm: `retrospective_format`
- **decision:** D-151
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-review-report`
- **not to be confused with:** `security-assessment, post-implementation-verification-template`

---

## D-152 — security-assessment

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-security-assessment
- **preferences consulted:** PREFERENCES.md § Approach emphasizes security verification; followed by adopting security-assessment.

### Decision
The canonical term for this artifact is `security-assessment`. A security assessment is an analytical audit artifact identifying threat models, attack surfaces, vulnerability scans, and required hardening controls for a software component.

### Adopted from
ADDY `agents/security-auditor.md:70` for Security Audit Report; RJM `.claude/agents/security/references/threat-model-template.md:18` for Attack Vectors.

### Dropped
RJM's defects: doc-drift defects (D-006).

### Rejected alternatives
attack-vectors (RJM: names threat vectors rather than the audit report).

### Evidence
ADDY `agents/security-auditor.md:70`; RJM `.claude/agents/security/references/threat-model-template.md:18`.

### Glossary
### security-assessment

- **definition:** A security assessment is an analytical audit artifact identifying threat models, attack surfaces, vulnerability scans, and required hardening controls for a software component.
- **kind:** artifact
- **source names:** addy: `Security Audit Report` · matt: — · rjm: `Attack Vectors`
- **decision:** D-152
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-security-assessment`
- **not to be confused with:** `review-report, security-audit-template`

---

## D-153 — assumption-challenge

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-assumption-challenge
- **preferences consulted:** PREFERENCES.md § Depth notes assumption audits in ideation; followed by adopting RJM's explicit assumption-challenge terminology.

### Decision
The canonical term for this artifact is `assumption-challenge`. An assumption challenge is a structured critique artifact identifying unverified premises, failure modes, and surviving doubts in a specification or architecture.

### Adopted from
ADDY `evals/cases/doubt-driven-development.json:38` for surviving doubts; RJM `.claude/agents/independent-thinker.md:160` for Assumption Challenge Template.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
surviving-doubts (Addy: informal section header).

### Evidence
ADDY `evals/cases/doubt-driven-development.json:38`; RJM `.claude/agents/independent-thinker.md:160`.

### Glossary
### assumption-challenge

- **definition:** An assumption challenge is a structured critique artifact identifying unverified premises, failure modes, and surviving doubts in a specification or architecture.
- **kind:** artifact
- **source names:** addy: `surviving doubts` · matt: — · rjm: `Assumption Challenge Template`
- **decision:** D-153
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-assumption-challenge`
- **not to be confused with:** `review-report, considered-options`

---

## D-154 — changeset

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-changeset
- **preferences consulted:** PREFERENCES.md § Approach values Matt's automated versioning and changeset workflow; followed by adopting changeset.

### Decision
The canonical term for this artifact is `changeset`. A changeset is a versioning artifact documenting atomic package release notes, semver bump classifications, and consumer-facing changelog summaries.

### Adopted from
ADDY `external/git-workflow-and-versioning.md:5` for releases; MATT `skills/deprecated/README.md:3` for changeset.

### Dropped
ADDY's defects: doc-drift, orphan defects (D-006); MATT's defects: cross-file-contradiction defects (D-006).

### Rejected alternatives
releases (Addy: broad milestone container).

### Evidence
ADDY `external/git-workflow-and-versioning.md:5`; MATT `skills/deprecated/README.md:3`.

### Glossary
### changeset

- **definition:** A changeset is a versioning artifact documenting atomic package release notes, semver bump classifications, and consumer-facing changelog summaries.
- **kind:** artifact
- **source names:** addy: `releases` · matt: `changeset` · rjm: —
- **decision:** D-154
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-changeset`
- **not to be confused with:** `commit-message, pull-request`

---

## D-155 — rollback-plan

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rollback-steps
- **preferences consulted:** PREFERENCES.md § References highlights operational runbooks and migration safety; followed by adopting rollback-plan.

### Decision
The canonical term for this artifact is `rollback-plan`. A rollback plan is an operational procedure specifying exact commands and steps required to safely revert a failed deployment or migration to a known good state.

### Adopted from
ADDY `evals/fixtures/shipping-and-launch/authority-pressure.md:5` for rollback steps; RJM `.agents/critique/ADR-045-debate-log.md:133` for Resolution Path.

### Dropped
RJM's defects: cross-file-contradiction defects (D-006).

### Rejected alternatives
resolution-path (RJM: broader incident recovery term), rollback-steps (Addy: less formal phrasing).

### Evidence
ADDY `evals/fixtures/shipping-and-launch/authority-pressure.md:5`; RJM `.agents/critique/ADR-045-debate-log.md:133`.

### Glossary
### rollback-plan

- **definition:** A rollback plan is an operational procedure specifying exact commands and steps required to safely revert a failed deployment or migration to a known good state.
- **kind:** artifact
- **source names:** addy: `rollback steps` · matt: — · rjm: `Resolution Path`
- **decision:** D-155
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rollback-steps`
- **not to be confused with:** `runbook, launch-runbook`

---

## D-156 — runbook

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-runbook
- **preferences consulted:** PREFERENCES.md § References highlights operational documentation; followed by adopting runbook.

### Decision
The canonical term for this artifact is `runbook`. A runbook is an operational procedure document containing step-by-step instructions for operating, monitoring, diagnosing, and maintaining a software service in production.

### Adopted from
ADDY `skills/observability-and-instrumentation/SKILL.md:153` for runbook; RJM `.claude/agents/qa.md:833` for Infrastructure Handoff.

### Dropped
None (source implementations clean).

### Rejected alternatives
infrastructure-handoff (RJM: handoff milestone rather than operational doc).

### Evidence
ADDY `skills/observability-and-instrumentation/SKILL.md:153`; RJM `.claude/agents/qa.md:833`.

### Glossary
### runbook

- **definition:** A runbook is an operational procedure document containing step-by-step instructions for operating, monitoring, diagnosing, and maintaining a software service in production.
- **kind:** artifact
- **source names:** addy: `runbook` · matt: — · rjm: `Infrastructure Handoff`
- **decision:** D-156
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-runbook`
- **not to be confused with:** `launch-runbook, rollback-plan`

---

## D-157 — launch-runbook

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-launch-runbook
- **preferences consulted:** PREFERENCES.md § References values launch verification procedures; followed by adopting launch-runbook.

### Decision
The canonical term for this artifact is `launch-runbook`. A launch runbook is a specialized deployment checklist detailing pre-flight checks, staged cutover steps, rollback criteria, and post-launch verification procedures.

### Adopted from
ADDY `evals/fixtures/shipping-and-launch/launch-status.md:11` for launch runbook; RJM `.claude/skills/threat-modeling/SKILL.md:112` for Deployment Diagram.

### Dropped
RJM's defects: exit-code-mismatch, missing-path defects (D-006).

### Rejected alternatives
deployment-diagram (RJM: visual architecture artifact).

### Evidence
ADDY `evals/fixtures/shipping-and-launch/launch-status.md:11`; RJM `.claude/skills/threat-modeling/SKILL.md:112`.

### Glossary
### launch-runbook

- **definition:** A launch runbook is a specialized deployment checklist detailing pre-flight checks, staged cutover steps, rollback criteria, and post-launch verification procedures.
- **kind:** artifact
- **source names:** addy: `launch runbook` · matt: — · rjm: `Deployment Diagram`
- **decision:** D-157
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-launch-runbook`
- **not to be confused with:** `runbook, rollback-plan`

---

## D-158 — service-dashboard-spec

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-monitoring-dashboards
- **preferences consulted:** PREFERENCES.md § Approach supports production observability standards; followed by adopting service-dashboard-spec.

### Decision
The canonical term for this artifact is `service-dashboard-spec`. A service dashboard specification is an operational artifact defining service level indicators (SLIs), alert thresholds, and telemetry visualizations for runtime monitoring.

### Adopted from
ADDY `references/observability-checklist.md:12` for Dashboards; RJM `.claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:15` for SLI (Service Level Indicator).

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
dashboards (Addy: concrete UI dashboard), sli (RJM: names metric, not artifact).

### Evidence
ADDY `references/observability-checklist.md:12`; RJM `.claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:15`.

### Glossary
### service-dashboard-spec

- **definition:** A service dashboard specification is an operational artifact defining service level indicators (SLIs), alert thresholds, and telemetry visualizations for runtime monitoring.
- **kind:** artifact
- **source names:** addy: `Dashboards` · matt: — · rjm: `SLI (Service Level Indicator)`
- **decision:** D-158
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-monitoring-dashboards`
- **not to be confused with:** `slo-configuration-template, runbook`

---

## D-159 — readme-doc

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-readme-md-file
- **preferences consulted:** PREFERENCES.md § Approach values clear documentation entry points; followed by adopting readme-doc.

### Decision
The canonical term for this artifact is `readme-doc`. A README document is the primary introductory markdown file at a repository or component root providing purpose, setup instructions, usage examples, and architecture overview.

### Adopted from
MATT `.changeset/remove-em-dashes-repo-wide.md:5` for README.md; RJM `.claude/agents/devops.md:465` for Infrastructure Documentation Format.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
infrastructure-documentation-format (RJM: overly verbose schema name).

### Evidence
MATT `.changeset/remove-em-dashes-repo-wide.md:5`; RJM `.claude/agents/devops.md:465`.

### Glossary
### readme-doc

- **definition:** A README document is the primary introductory markdown file at a repository or component root providing purpose, setup instructions, usage examples, and architecture overview.
- **kind:** artifact
- **source names:** addy: — · matt: `README.md` · rjm: `Infrastructure Documentation Format`
- **decision:** D-159
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-readme-md-file`
- **not to be confused with:** `agent-instructions-file, glossary-doc`

---

## D-160 — glossary-doc

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-glossary
- **preferences consulted:** PREFERENCES.md § Depth notes alignment on vocabulary; followed by adopting glossary-doc.

### Decision
The canonical term for this artifact is `glossary-doc`. A glossary document is an authoritative index defining domain terminology, canonical concepts, source citations, and distinctions for a project.

### Adopted from
MATT `skills/engineering/grill-with-docs/SKILL.md:3` for glossary; RJM `.claude/skills/doc-accuracy/scripts/doc_accuracy.py:13` for source symbols.

### Dropped
MATT's defects: other (runaway artifact bloat where CONTEXT.md turns into a running spec in docs/engineering/domain-modeling.md:44-45; missing docs/agents/domain.md path in setup-matt-pocock-skills/domain.md:3) defects (D-006); RJM's defects: script-bug, internal-contradiction, doc-drift defects (D-006).

### Rejected alternatives
source-symbols (RJM: code symbol index rather than conceptual glossary).

### Evidence
MATT `skills/engineering/grill-with-docs/SKILL.md:3`; RJM `.claude/skills/doc-accuracy/scripts/doc_accuracy.py:13`.

### Glossary
### glossary-doc

- **definition:** A glossary document is an authoritative index defining domain terminology, canonical concepts, source citations, and distinctions for a project.
- **kind:** artifact
- **source names:** addy: — · matt: `glossary` · rjm: `source symbols`
- **decision:** D-160
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-glossary`
- **not to be confused with:** `canonical-glossary-file, shared-vocabulary`

---

## D-161 — canonical-glossary-file

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-glossary-md-file
- **preferences consulted:** METHOD.md R4 and §9 mandate GLOSSARY.md as project vocabulary store; followed by adopting canonical-glossary-file.

### Decision
The canonical term for this artifact is `canonical-glossary-file`. A canonical glossary file is the specific tracked repository markdown file (docs/plan/GLOSSARY.md) maintaining the machine-checked vocabulary of the development lifecycle.

### Adopted from
MATT `skills/productivity/teach/GLOSSARY-FORMAT.md:3` for GLOSSARY.md; RJM `.claude/skills/threat-modeling/SKILL.md:128` for Data Stores.

### Dropped
MATT's defects: doc-drift (teach/SKILL.md omits linking to GLOSSARY-FORMAT.md in its workspace file list) defects (D-006); RJM's defects: exit-code-mismatch, missing-path defects (D-006).

### Rejected alternatives
data-stores (RJM: generic data persistence concept).

### Evidence
MATT `skills/productivity/teach/GLOSSARY-FORMAT.md:3`; RJM `.claude/skills/threat-modeling/SKILL.md:128`.

### Glossary
### canonical-glossary-file

- **definition:** A canonical glossary file is the specific tracked repository markdown file (docs/plan/GLOSSARY.md) maintaining the machine-checked vocabulary of the development lifecycle.
- **kind:** artifact
- **source names:** addy: — · matt: `GLOSSARY.md` · rjm: `Data Stores`
- **decision:** D-161
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-glossary-md-file`
- **not to be confused with:** `glossary-doc, shared-vocabulary`

---

## D-162 — shared-vocabulary

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-shared-language
- **preferences consulted:** PREFERENCES.md § Depth requires shared language across agents; followed by adopting shared-vocabulary.

### Decision
The canonical term for this artifact is `shared-vocabulary`. A shared vocabulary is a documented semantic model aligning engineering definitions, domain terminology, and user documentation across team and agent interactions.

### Adopted from
MATT `README.md:115` for shared language; RJM `docs/customization.md:213` for User docs.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
user-docs (RJM: end-user documentation).

### Evidence
MATT `README.md:115`; RJM `docs/customization.md:213`.

### Glossary
### shared-vocabulary

- **definition:** A shared vocabulary is a documented semantic model aligning engineering definitions, domain terminology, and user documentation across team and agent interactions.
- **kind:** artifact
- **source names:** addy: — · matt: `shared language` · rjm: `User docs`
- **decision:** D-162
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-shared-language`
- **not to be confused with:** `glossary-doc, canonical-glossary-file`

---

## D-163 — learning-record

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-learning-records
- **preferences consulted:** PREFERENCES.md § Approach notes Matt's learning record tracking; followed by adopting learning-record.

### Decision
The canonical term for this artifact is `learning-record`. A learning record is an iterative reflection document capturing operational insights, agent adaptation notes, and process improvements across lifecycle sessions.

### Adopted from
MATT `skills/productivity/teach/LEARNING-RECORD-FORMAT.md:3` for learning-records; RJM `.claude/skills/skillforge/TRANSFORMATION_NOTES.md:9` for Sync log.

### Dropped
MATT's defects: internal-contradiction (lack of initial assessment leaves first session with zero learning records) defects (D-006); RJM's defects: orphan, missing-path, internal-contradiction, doc-drift defects (D-006).

### Rejected alternatives
sync-log (RJM: operational sync file).

### Evidence
MATT `skills/productivity/teach/LEARNING-RECORD-FORMAT.md:3`; RJM `.claude/skills/skillforge/TRANSFORMATION_NOTES.md:9`.

### Glossary
### learning-record

- **definition:** A learning record is an iterative reflection document capturing operational insights, agent adaptation notes, and process improvements across lifecycle sessions.
- **kind:** artifact
- **source names:** addy: — · matt: `learning-records` · rjm: `Sync log`
- **decision:** D-163
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-learning-records`
- **not to be confused with:** `review-report, learning-extraction-template`

---

## D-164 — agent-rules-config

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rules-configuration
- **preferences consulted:** D-009 dual-target standards establish Claude Code and Antigravity rule configs; followed by adopting agent-rules-config.

### Decision
The canonical term for this artifact is `agent-rules-config`. An agent rules configuration is a repository or platform policy file governing autonomous agent behavior, coding constraints, tool access, and lifecycle execution parameters.

### Adopted from
ADDY `docs/cursor-setup.md:9` for rules; MATT `.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3` for per-repo config; RJM `templates/README.md:310` for Platform Configuration Schema.

### Dropped
RJM's defects: cross-file-contradiction, doc-drift defects (D-006).

### Rejected alternatives
per-repo-config (Matt: generic config name), platform-configuration-schema (RJM: platform schema).

### Evidence
ADDY `docs/cursor-setup.md:9`; MATT `.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:3`; RJM `templates/README.md:310`.

### Glossary
### agent-rules-config

- **definition:** An agent rules configuration is a repository or platform policy file governing autonomous agent behavior, coding constraints, tool access, and lifecycle execution parameters.
- **kind:** artifact
- **source names:** addy: `rules` · matt: `per-repo config` · rjm: `Platform Configuration Schema`
- **decision:** D-164
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rules-configuration`
- **not to be confused with:** `agent-instructions-file, editor-rules-config`

---

## D-165 — agent-instructions-file

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-claude-rules
- **preferences consulted:** D-009 specifies CLAUDE.md canonical with AGENTS.md mirror; followed by adopting agent-instructions-file.

### Decision
The canonical term for this artifact is `agent-instructions-file`. An agent instructions file is the repository-level context file (CLAUDE.md or AGENTS.md) instructing AI coding agents on project layout, build commands, and coding guidelines.

### Adopted from
ADDY `skills/context-engineering/SKILL.md:42` for CLAUDE.md; MATT `docs/productivity/writing-for-agents.md:3` for AGENTS.md.

### Dropped
ADDY's defects: other, doc-drift, orphan defects (D-006).

### Rejected alternatives
claude-rules (Claude-specific, lacks dual-target parity framing).

### Evidence
ADDY `skills/context-engineering/SKILL.md:42`; MATT `docs/productivity/writing-for-agents.md:3`.

### Glossary
### agent-instructions-file

- **definition:** An agent instructions file is the repository-level context file (CLAUDE.md or AGENTS.md) instructing AI coding agents on project layout, build commands, and coding guidelines.
- **kind:** artifact
- **source names:** addy: `CLAUDE.md` · matt: `AGENTS.md` · rjm: —
- **decision:** D-165
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-claude-rules`
- **not to be confused with:** `agent-rules-config, editor-rules-config`

---

## D-166 — editor-rules-config

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-editor-rules
- **preferences consulted:** D-009 prioritizes Claude Code CLI and Antigravity parity over editor-specific configs; followed by classifying editor-rules-config.

### Decision
The canonical term for this artifact is `editor-rules-config`. An editor rules configuration is an IDE-specific context file (.cursorrules or equivalent) providing environment-specific guidelines and prompts to in-editor AI assistants.

### Adopted from
ADDY `docs/cursor-setup.md:29` for cursorrules; MATT `skills/engineering/setup-matt-pocock-skills/domain.md:3` for Domain docs.

### Dropped
ADDY's defects: doc-drift, orphan defects (D-006); MATT's defects: missing-path (skills/engineering/setup-matt-pocock-skills/domain.md:3 references docs/agents/domain.md which is not present in source repo root and must be instantiated by setup-matt-pocock-skills) defects (D-006).

### Rejected alternatives
domain-docs (Matt: broad domain documentation).

### Evidence
ADDY `docs/cursor-setup.md:29`; MATT `skills/engineering/setup-matt-pocock-skills/domain.md:3`.

### Glossary
### editor-rules-config

- **definition:** An editor rules configuration is an IDE-specific context file (.cursorrules or equivalent) providing environment-specific guidelines and prompts to in-editor AI assistants.
- **kind:** artifact
- **source names:** addy: `cursorrules` · matt: `Domain docs` · rjm: —
- **decision:** D-166
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-editor-rules`
- **not to be confused with:** `agent-instructions-file, agent-rules-config`

---

## D-167 — code-style-guidelines

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-code-style
- **preferences consulted:** PREFERENCES.md § Approach emphasizes code consistency; followed by adopting code-style-guidelines.

### Decision
The canonical term for this artifact is `code-style-guidelines`. Code style guidelines are documented conventions specifying naming patterns, syntax rules, formatting standards, and structural idioms for a codebase.

### Adopted from
ADDY `skills/spec-driven-development/SKILL.md:106` for Code Style; MATT `external/grill-with-docs.md:50` for design principles.

### Dropped
ADDY's defects: doc-drift defects (D-006); MATT's defects: orphan, doc-drift defects (D-006).

### Rejected alternatives
design-principles (Matt: higher-level architectural principles rather than code style).

### Evidence
ADDY `skills/spec-driven-development/SKILL.md:106`; MATT `external/grill-with-docs.md:50`.

### Glossary
### code-style-guidelines

- **definition:** Code style guidelines are documented conventions specifying naming patterns, syntax rules, formatting standards, and structural idioms for a codebase.
- **kind:** artifact
- **source names:** addy: `Code Style` · matt: `design principles` · rjm: —
- **decision:** D-167
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-code-style`
- **not to be confused with:** `project-rules, agent-rules-config`

---

## D-168 — windsurf-rules

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-addy-windsurfrules
- **preferences consulted:** D-009 specifies dual-target Claude Code and Antigravity standards; followed by dropping Windsurf-specific rules.

### Decision
The canonical term for this artifact is `windsurf-rules`. A windsurf rules artifact is an IDE-specific configuration file (.windsurfrules) for the Windsurf development environment, dropped from canonical lifecycle output in favor of dual-target Claude and Antigravity standards.

### Adopted from
ADDY `docs/windsurf-setup.md:7` for .windsurfrules.

### Dropped
ADDY's defects: doc-drift defects (D-006).

### Rejected alternatives
adopting-windsurfrules (violates D-009 dual-target standard).

### Evidence
ADDY `docs/windsurf-setup.md:7`.

### Glossary
### windsurf-rules

- **definition:** A windsurf rules artifact is an IDE-specific configuration file (.windsurfrules) for the Windsurf development environment, dropped from canonical lifecycle output in favor of dual-target Claude and Antigravity standards.
- **kind:** artifact
- **source names:** addy: `.windsurfrules` · matt: — · rjm: —
- **decision:** D-168
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-windsurfrules`
- **not to be confused with:** `editor-rules-config, agent-rules-config`

---

## D-169 — floor-guard-script

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-addy-floor-guard-mjs
- **preferences consulted:** D-003 mandates pure Bun and no standalone JS/Node scripts; followed by reimplementing floor-guard invariant checking in Bun.

### Decision
The canonical term for this artifact is `floor-guard-script`. A floor guard script is an automated validation script enforcing quality baselines and invariant checks, implemented in pure Bun rather than ported as standalone external scripts.

### Adopted from
ADDY `skills/constraint-driven-development/references/floor-guard.md:19` for floor-guard.mjs.

### Dropped
None (source implementations clean).

### Rejected alternatives
floor-guard-mjs (D-003 forbids .mjs/Node scripts).

### Evidence
ADDY `skills/constraint-driven-development/references/floor-guard.md:19`.

### Glossary
### floor-guard-script

- **definition:** A floor guard script is an automated validation script enforcing quality baselines and invariant checks, implemented in pure Bun rather than ported as standalone external scripts.
- **kind:** artifact
- **source names:** addy: `floor-guard.mjs` · matt: — · rjm: —
- **decision:** D-169
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-floor-guard-mjs`
- **not to be confused with:** `validation-script-template, script-template`

---

## D-170 — rule-file-set

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-addy-rules-files
- **preferences consulted:** PREFERENCES.md § Approach favours structured agent instructions; followed by adopting rule-file-set.

### Decision
The canonical term for this artifact is `rule-file-set`. A rule file set is a composite collection of specialized rule documents partitioned by domain or lifecycle phase to guide agent behavior without context bloat.

### Adopted from
ADDY `skills/context-engineering/SKILL.md:26` for rules files.

### Dropped
None (source implementations clean).

### Rejected alternatives
rules-files (unhyphenated plural descriptor).

### Evidence
ADDY `skills/context-engineering/SKILL.md:26`.

### Glossary
### rule-file-set

- **definition:** A rule file set is a composite collection of specialized rule documents partitioned by domain or lifecycle phase to guide agent behavior without context bloat.
- **kind:** artifact
- **source names:** addy: `rules files` · matt: — · rjm: —
- **decision:** D-170
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-rules-files`
- **not to be confused with:** `agent-rules-config, project-rules`

---

## D-171 — project-rules

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-addy-project-rules
- **preferences consulted:** PREFERENCES.md § Approach values explicit repository constraints; followed by adopting project-rules.

### Decision
The canonical term for this artifact is `project-rules`. Project rules are repository-scoped behavioral directives and architectural constraints that apply unconditionally to all agents and developers working in a repository.

### Adopted from
ADDY `docs/cursor-setup.md:13` for Project rules.

### Dropped
None (source implementations clean).

### Rejected alternatives
repo-rules (less formal naming).

### Evidence
ADDY `docs/cursor-setup.md:13`.

### Glossary
### project-rules

- **definition:** Project rules are repository-scoped behavioral directives and architectural constraints that apply unconditionally to all agents and developers working in a repository.
- **kind:** artifact
- **source names:** addy: `Project rules` · matt: — · rjm: —
- **decision:** D-171
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-project-rules`
- **not to be confused with:** `user-rules, agent-rules-config`

---

## D-172 — user-rules

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-addy-user-rules
- **preferences consulted:** PREFERENCES.md § Approach values separation of user preferences from project rules; followed by adopting user-rules.

### Decision
The canonical term for this artifact is `user-rules`. User rules are developer-scoped personal configuration directives and preferences applied across projects in an agent's global configuration environment.

### Adopted from
ADDY `docs/cursor-setup.md:15` for User rules.

### Dropped
None (source implementations clean).

### Rejected alternatives
developer-rules (less standard than user-rules).

### Evidence
ADDY `docs/cursor-setup.md:15`.

### Glossary
### user-rules

- **definition:** User rules are developer-scoped personal configuration directives and preferences applied across projects in an agent's global configuration environment.
- **kind:** artifact
- **source names:** addy: `User rules` · matt: — · rjm: —
- **decision:** D-172
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-user-rules`
- **not to be confused with:** `project-rules, agent-rules-config`

---

## D-173 — artifact-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-template
- **preferences consulted:** PREFERENCES.md § Approach values structured artifact templates; followed by adopting artifact-template.

### Decision
The canonical term for this artifact is `artifact-template`. An artifact template is a standardized document boilerplate defining mandatory sections, markdown formatting, and prompt instructions for generating lifecycle deliverables.

### Adopted from
MATT `docs/engineering/wizard.md:44` for template.

### Dropped
None (source implementations clean).

### Rejected alternatives
template (too generic, causes homonym collision).

### Evidence
MATT `docs/engineering/wizard.md:44`.

### Glossary
### artifact-template

- **definition:** An artifact template is a standardized document boilerplate defining mandatory sections, markdown formatting, and prompt instructions for generating lifecycle deliverables.
- **kind:** artifact
- **source names:** addy: — · matt: `template` · rjm: —
- **decision:** D-173
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-template`
- **not to be confused with:** `plan-template, seed-template-schema`

---

## D-174 — seed-template-schema

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-seed-template-schema
- **preferences consulted:** PREFERENCES.md § Approach values schema validation for templates; followed by adopting seed-template-schema.

### Decision
The canonical term for this artifact is `seed-template-schema`. A seed template schema is a formal specification defining the frontmatter properties, validation rules, and structural fields required for initializing new skills or templates.

### Adopted from
MATT `.out-of-scope/setup-skill-verify-mode.md:7` for seed-template schema.

### Dropped
None (source implementations clean).

### Rejected alternatives
seed-schema (less descriptive).

### Evidence
MATT `.out-of-scope/setup-skill-verify-mode.md:7`.

### Glossary
### seed-template-schema

- **definition:** A seed template schema is a formal specification defining the frontmatter properties, validation rules, and structural fields required for initializing new skills or templates.
- **kind:** artifact
- **source names:** addy: — · matt: `seed-template schema` · rjm: —
- **decision:** D-174
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-seed-template-schema`
- **not to be confused with:** `artifact-template, seed-template-collection`

---

## D-175 — exploration-map-file

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-map-md
- **preferences consulted:** PREFERENCES.md § Approach notes Matt's wayfinder and exploration skills; followed by adopting exploration-map-file.

### Decision
The canonical term for this artifact is `exploration-map-file`. An exploration map file is a lightweight markdown artifact (map.md) recording navigated concepts, open questions, and discovered paths during conversational exploration.

### Adopted from
MATT `skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:25` for map.md.

### Dropped
None (source implementations clean).

### Rejected alternatives
map-md (path-specific naming).

### Evidence
MATT `skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:25`.

### Glossary
### exploration-map-file

- **definition:** An exploration map file is a lightweight markdown artifact (map.md) recording navigated concepts, open questions, and discovered paths during conversational exploration.
- **kind:** artifact
- **source names:** addy: — · matt: `map.md` · rjm: —
- **decision:** D-175
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-map-md`
- **not to be confused with:** `exploration-map, context-map-file`

---

## D-176 — exploration-map

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-map
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conceptual mapping during discovery; followed by adopting exploration-map.

### Decision
The canonical term for this artifact is `exploration-map`. An exploration map is a conceptual graph or outline charting the explored problem space, related domains, and potential technical directions during discovery.

### Adopted from
MATT `docs/engineering/wayfinder.md:3` for map.

### Dropped
None (source implementations clean).

### Rejected alternatives
map (too generic; collides with data structure).

### Evidence
MATT `docs/engineering/wayfinder.md:3`.

### Glossary
### exploration-map

- **definition:** An exploration map is a conceptual graph or outline charting the explored problem space, related domains, and potential technical directions during discovery.
- **kind:** artifact
- **source names:** addy: — · matt: `map` · rjm: —
- **decision:** D-176
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-map`
- **not to be confused with:** `exploration-map-file, context-map`

---

## D-177 — local-ticket-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-local-ticket-template
- **preferences consulted:** PREFERENCES.md § Phase mapping notes task templates with Description and Acceptance Criteria; followed by adopting local-ticket-template.

### Decision
The canonical term for this artifact is `local-ticket-template`. A local ticket template is a markdown boilerplate specifying the description, acceptance criteria, dependencies, and verification steps for an in-repo task ticket.

### Adopted from
MATT `skills/engineering/to-tickets/SKILL.md:69` for local-ticket-template.

### Dropped
MATT's defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command) defects (D-006).

### Rejected alternatives
ticket-template (lacks in-repo local distinction).

### Evidence
MATT `skills/engineering/to-tickets/SKILL.md:69`.

### Glossary
### local-ticket-template

- **definition:** A local ticket template is a markdown boilerplate specifying the description, acceptance criteria, dependencies, and verification steps for an in-repo task ticket.
- **kind:** artifact
- **source names:** addy: — · matt: `local-ticket-template` · rjm: —
- **decision:** D-177
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-local-ticket-template`
- **not to be confused with:** `task-card, local-markdown-tickets`

---

## D-178 — context-map-file

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-context-map-md
- **preferences consulted:** PREFERENCES.md § Approach values DDD context mapping in markdown; followed by adopting context-map-file.

### Decision
The canonical term for this artifact is `context-map-file`. A context map file is a dedicated markdown document (CONTEXT-MAP.md) detailing service boundaries, module interactions, and interface contracts across a repository.

### Adopted from
MATT `skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36` for CONTEXT-MAP.md.

### Dropped
MATT's defects: doc-drift, orphan defects (D-006).

### Rejected alternatives
context-map-md (filename-specific naming).

### Evidence
MATT `skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36`.

### Glossary
### context-map-file

- **definition:** A context map file is a dedicated markdown document (CONTEXT-MAP.md) detailing service boundaries, module interactions, and interface contracts across a repository.
- **kind:** artifact
- **source names:** addy: — · matt: `CONTEXT-MAP.md` · rjm: —
- **decision:** D-178
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-context-map-md`
- **not to be confused with:** `context-map, exploration-map-file`

---

## D-179 — shared-exploration-map

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-shared-map
- **preferences consulted:** PREFERENCES.md § Approach values collaborative exploration; followed by adopting shared-exploration-map.

### Decision
The canonical term for this artifact is `shared-exploration-map`. A shared exploration map is a collaborative context artifact shared across developer and agent turns to synchronize understanding of system topology and problem scope.

### Adopted from
MATT `skills/engineering/wayfinder/SKILL.md:7` for shared map.

### Dropped
MATT's defects: other defects (D-006).

### Rejected alternatives
shared-map (too generic).

### Evidence
MATT `skills/engineering/wayfinder/SKILL.md:7`.

### Glossary
### shared-exploration-map

- **definition:** A shared exploration map is a collaborative context artifact shared across developer and agent turns to synchronize understanding of system topology and problem scope.
- **kind:** artifact
- **source names:** addy: — · matt: `shared map` · rjm: —
- **decision:** D-179
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-shared-map`
- **not to be confused with:** `exploration-map, wayfinder-map`

---

## D-180 — local-markdown-tickets

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-local-markdown-tickets
- **preferences consulted:** PREFERENCES.md § Phase mapping notes local issue tracking in repo docs; followed by adopting local-markdown-tickets.

### Decision
The canonical term for this artifact is `local-markdown-tickets`. Local markdown tickets are file-based task definitions stored directly within a repository's version-controlled documentation to track implementation tasks without external tools.

### Adopted from
MATT `CHANGELOG.md:120` for Local-markdown tickets.

### Dropped
None (source implementations clean).

### Rejected alternatives
markdown-tickets (lacks local repository scope).

### Evidence
MATT `CHANGELOG.md:120`.

### Glossary
### local-markdown-tickets

- **definition:** Local markdown tickets are file-based task definitions stored directly within a repository's version-controlled documentation to track implementation tasks without external tools.
- **kind:** artifact
- **source names:** addy: — · matt: `Local-markdown tickets` · rjm: —
- **decision:** D-180
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-local-markdown-tickets`
- **not to be confused with:** `local-ticket-template, task-card`

---

## D-181 — round-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-round-template
- **preferences consulted:** PREFERENCES.md § Approach values Matt's iterative review rounds; followed by adopting round-template.

### Decision
The canonical term for this artifact is `round-template`. A round template is a structured interaction schema defining prompt framing, expected feedback categories, and exit criteria for iterative review or grilling rounds.

### Adopted from
MATT `.changeset/grilling-add-hr-between-questions.md:5` for round template.

### Dropped
None (source implementations clean).

### Rejected alternatives
round (too generic).

### Evidence
MATT `.changeset/grilling-add-hr-between-questions.md:5`.

### Glossary
### round-template

- **definition:** A round template is a structured interaction schema defining prompt framing, expected feedback categories, and exit criteria for iterative review or grilling rounds.
- **kind:** artifact
- **source names:** addy: — · matt: `round template` · rjm: —
- **decision:** D-181
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-round-template`
- **not to be confused with:** `questionnaire-template, discovery-questionnaire`

---

## D-182 — issue-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-issue-template
- **preferences consulted:** PREFERENCES.md § Approach values structured issue intake; followed by adopting issue-template.

### Decision
The canonical term for this artifact is `issue-template`. An issue template is a standardized form specification guiding developers and agents in submitting complete bug reports, feature requests, or investigation briefs.

### Adopted from
MATT `skills/engineering/to-tickets/SKILL.md:84` for issue-template.

### Dropped
MATT's defects: missing-path defects (D-006).

### Rejected alternatives
ticket-template (collides with implementation tickets).

### Evidence
MATT `skills/engineering/to-tickets/SKILL.md:84`.

### Glossary
### issue-template

- **definition:** An issue template is a standardized form specification guiding developers and agents in submitting complete bug reports, feature requests, or investigation briefs.
- **kind:** artifact
- **source names:** addy: — · matt: `issue-template` · rjm: —
- **decision:** D-182
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-issue-template`
- **not to be confused with:** `deferral-issue-template, local-ticket-template`

---

## D-183 — domain-mapping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-mapping
- **preferences consulted:** PREFERENCES.md § Depth values deep domain and technique alignment; followed by adopting domain-mapping.

### Decision
The canonical term for this artifact is `domain-mapping`. A domain mapping is an analytical artifact charting domain models, entity relationships, and operational flows across complex software subsystems.

### Adopted from
MATT `external/setup-matt-pocock-skills.md:50` for mapping.

### Dropped
MATT's defects: orphan, doc-drift defects (D-006).

### Rejected alternatives
mapping (too generic).

### Evidence
MATT `external/setup-matt-pocock-skills.md:50`.

### Glossary
### domain-mapping

- **definition:** A domain mapping is an analytical artifact charting domain models, entity relationships, and operational flows across complex software subsystems.
- **kind:** artifact
- **source names:** addy: — · matt: `mapping` · rjm: —
- **decision:** D-183
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-mapping`
- **not to be confused with:** `context-map, exploration-map`

---

## D-184 — decision-ticket

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-decision-ticket
- **preferences consulted:** PREFERENCES.md § Approach values explicitly tracked decision units; followed by adopting decision-ticket.

### Decision
The canonical term for this artifact is `decision-ticket`. A decision ticket is an actionable task unit whose primary deliverable is an architectural or technical choice documented with trade-offs and rationale rather than code.

### Adopted from
MATT `CONTEXT.md:16` for decision ticket.

### Dropped
MATT's defects: missing-path, other (in CONTEXT.md); missing-path, doc-drift (in CHANGELOG.md) defects (D-006).

### Rejected alternatives
decision-task (less standard in ticket workflows).

### Evidence
MATT `CONTEXT.md:16`.

### Glossary
### decision-ticket

- **definition:** A decision ticket is an actionable task unit whose primary deliverable is an architectural or technical choice documented with trade-offs and rationale rather than code.
- **kind:** artifact
- **source names:** addy: — · matt: `decision ticket` · rjm: —
- **decision:** D-184
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-decision-ticket`
- **not to be confused with:** `architecture-decision-record, decision-ticket-set`

---

## D-185 — tracer-bullet-ticket

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-tracer-bullet-tickets
- **preferences consulted:** PREFERENCES.md § Approach values rapid end-to-end architectural validation; followed by adopting tracer-bullet-ticket.

### Decision
The canonical term for this artifact is `tracer-bullet-ticket`. A tracer bullet ticket is an end-to-end implementation task designed to rapidly validate an architectural path, integration seam, or technological feasibility through a minimal functional slice.

### Adopted from
MATT `README.md:200` for tracer-bullet tickets.

### Dropped
None (source implementations clean).

### Rejected alternatives
spike-ticket (tracer bullets produce production code; spikes produce disposable prototypes).

### Evidence
MATT `README.md:200`.

### Glossary
### tracer-bullet-ticket

- **definition:** A tracer bullet ticket is an end-to-end implementation task designed to rapidly validate an architectural path, integration seam, or technological feasibility through a minimal functional slice.
- **kind:** artifact
- **source names:** addy: — · matt: `tracer-bullet tickets` · rjm: —
- **decision:** D-185
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-tracer-bullet-tickets`
- **not to be confused with:** `implementation-ticket, task-card`

---

## D-186 — navigational-map

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-the-map
- **preferences consulted:** PREFERENCES.md § Approach values wayfinding skills; followed by adopting navigational-map.

### Decision
The canonical term for this artifact is `navigational-map`. A navigational map is the active, evolving orientation document maintained by wayfinding skills to guide users and agents through unfamiliar codebases.

### Adopted from
MATT `CHANGELOG.md:193` for the map.

### Dropped
None (source implementations clean).

### Rejected alternatives
the-map (colloquial definite article).

### Evidence
MATT `CHANGELOG.md:193`.

### Glossary
### navigational-map

- **definition:** A navigational map is the active, evolving orientation document maintained by wayfinding skills to guide users and agents through unfamiliar codebases.
- **kind:** artifact
- **source names:** addy: — · matt: `the map` · rjm: —
- **decision:** D-186
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-the-map`
- **not to be confused with:** `wayfinder-map, exploration-map`

---

## D-187 — research-ticket

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-research-tickets
- **preferences consulted:** PREFERENCES.md § Approach values bounded research exploration; followed by adopting research-ticket.

### Decision
The canonical term for this artifact is `research-ticket`. A research ticket is an exploratory task card dedicated to investigating third-party libraries, algorithmic approaches, or performance characteristics prior to design.

### Adopted from
MATT `CHANGELOG.md:86` for Research tickets.

### Dropped
MATT's defects: other (external/research.md:51 notes subagents opening draft PRs on throwaway branches and branch deletion breaking context pointers) defects (D-006).

### Rejected alternatives
spike (less specific than research-ticket).

### Evidence
MATT `CHANGELOG.md:86`.

### Glossary
### research-ticket

- **definition:** A research ticket is an exploratory task card dedicated to investigating third-party libraries, algorithmic approaches, or performance characteristics prior to design.
- **kind:** artifact
- **source names:** addy: — · matt: `Research tickets` · rjm: —
- **decision:** D-187
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-research-tickets`
- **not to be confused with:** `decision-ticket, implementation-ticket`

---

## D-188 — seed-template-collection

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-seed-templates
- **preferences consulted:** PREFERENCES.md § Approach values modular plugin scaffolding; followed by adopting seed-template-collection.

### Decision
The canonical term for this artifact is `seed-template-collection`. A seed template collection is a bundled library of baseline skill definitions, command scaffolds, and configuration files used to bootstrap new plugin extensions.

### Adopted from
MATT `.out-of-scope/setup-skill-verify-mode.md:9` for seed templates.

### Dropped
None (source implementations clean).

### Rejected alternatives
seed-templates (unhyphenated plural).

### Evidence
MATT `.out-of-scope/setup-skill-verify-mode.md:9`.

### Glossary
### seed-template-collection

- **definition:** A seed template collection is a bundled library of baseline skill definitions, command scaffolds, and configuration files used to bootstrap new plugin extensions.
- **kind:** artifact
- **source names:** addy: — · matt: `seed templates` · rjm: —
- **decision:** D-188
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-seed-templates`
- **not to be confused with:** `seed-template-schema, shared-template-library`

---

## D-189 — decision-ticket-set

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-decision-tickets
- **preferences consulted:** PREFERENCES.md § Approach values resolving architectural decisions before coding; followed by adopting decision-ticket-set.

### Decision
The canonical term for this artifact is `decision-ticket-set`. A decision ticket set is a grouped collection of open technical questions and architectural forks that must be resolved prior to scheduling implementation tickets.

### Adopted from
MATT `skills/engineering/wayfinder/SKILL.md:7` for decision tickets.

### Dropped
None (source implementations clean).

### Rejected alternatives
decision-tickets (unhyphenated plural).

### Evidence
MATT `skills/engineering/wayfinder/SKILL.md:7`.

### Glossary
### decision-ticket-set

- **definition:** A decision ticket set is a grouped collection of open technical questions and architectural forks that must be resolved prior to scheduling implementation tickets.
- **kind:** artifact
- **source names:** addy: — · matt: `decision tickets` · rjm: —
- **decision:** D-189
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-decision-tickets`
- **not to be confused with:** `decision-ticket, architecture-decision-record`

---

## D-190 — wayfinder-map

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-wayfinder-map
- **preferences consulted:** PREFERENCES.md § Approach values wayfinder skills; followed by adopting wayfinder-map.

### Decision
The canonical term for this artifact is `wayfinder-map`. A wayfinder map is a structured architectural overview artifact produced by wayfinding skills to orient developers and agents within a repository's file structure and workflows.

### Adopted from
MATT `skills/engineering/wayfinder/SKILL.md:21` for wayfinder:map.

### Dropped
MATT's defects: other (Notes override in wayfinder permits agents to self-authorize execution inside the map) defects (D-006).

### Rejected alternatives
wayfinder:map (contains illegal colon identifier character).

### Evidence
MATT `skills/engineering/wayfinder/SKILL.md:21`.

### Glossary
### wayfinder-map

- **definition:** A wayfinder map is a structured architectural overview artifact produced by wayfinding skills to orient developers and agents within a repository's file structure and workflows.
- **kind:** artifact
- **source names:** addy: — · matt: `wayfinder:map` · rjm: —
- **decision:** D-190
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-wayfinder-map`
- **not to be confused with:** `navigational-map, exploration-map`

---

## D-191 — implementation-ticket

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-implementation-ticket
- **preferences consulted:** PREFERENCES.md § Phase mapping values modular implementation tasks; followed by adopting implementation-ticket.

### Decision
The canonical term for this artifact is `implementation-ticket`. An implementation ticket is a concrete, self-contained task unit specifying code changes, test additions, and verification steps required to deliver a feature slice.

### Adopted from
MATT `CHANGELOG.md:84` for _implementation_ ticket.

### Dropped
None (source implementations clean).

### Rejected alternatives
code-ticket (narrow focus on code rather than tests and verification).

### Evidence
MATT `CHANGELOG.md:84`.

### Glossary
### implementation-ticket

- **definition:** An implementation ticket is a concrete, self-contained task unit specifying code changes, test additions, and verification steps required to deliver a feature slice.
- **kind:** artifact
- **source names:** addy: — · matt: `_implementation_ ticket` · rjm: —
- **decision:** D-191
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-implementation-ticket`
- **not to be confused with:** `tracer-bullet-ticket, task-card`

---

## D-192 — shell-template-scaffold

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-template-sh
- **preferences consulted:** D-003 forbids shell scripts longer than one-liners and mandates pure Bun; followed by dropping template.sh.

### Decision
The canonical term for this artifact is `shell-template-scaffold`. A shell template scaffold is a script boilerplate used in Matt's toolkit for generating executable templates, dropped from brain in favor of pure Bun tooling per D-003.

### Adopted from
MATT `skills/engineering/wizard/SKILL.md:10` for template.sh.

### Dropped
None (source implementations clean).

### Rejected alternatives
template-sh (violates D-003).

### Evidence
MATT `skills/engineering/wizard/SKILL.md:10`.

### Glossary
### shell-template-scaffold

- **definition:** A shell template scaffold is a script boilerplate used in Matt's toolkit for generating executable templates, dropped from brain in favor of pure Bun tooling per D-003.
- **kind:** artifact
- **source names:** addy: — · matt: `template.sh` · rjm: —
- **decision:** D-192
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-template-sh`
- **not to be confused with:** `generation-script-template, script-template`

---

## D-193 — questionnaire-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-matt-questionnaire-template
- **preferences consulted:** PREFERENCES.md § Approach values Matt's interactive interviewing skills; followed by adopting questionnaire-template.

### Decision
The canonical term for this artifact is `questionnaire-template`. A questionnaire template is a structured interviewing document providing standard diagnostic and requirements elicitation questions for user grilling.

### Adopted from
MATT `skills/productivity/to-questionnaire/SKILL.md:20` for questionnaire-template.

### Dropped
None (source implementations clean).

### Rejected alternatives
interview-template (too broad).

### Evidence
MATT `skills/productivity/to-questionnaire/SKILL.md:20`.

### Glossary
### questionnaire-template

- **definition:** A questionnaire template is a structured interviewing document providing standard diagnostic and requirements elicitation questions for user grilling.
- **kind:** artifact
- **source names:** addy: — · matt: `questionnaire-template` · rjm: —
- **decision:** D-193
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-questionnaire-template`
- **not to be confused with:** `discovery-questionnaire, round-template`

---

## D-194 — evolution-score-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-evolution-score-template
- **preferences consulted:** PREFERENCES.md § Approach values quantitative architecture assessment; followed by adopting evolution-score-template.

### Decision
The canonical term for this artifact is `evolution-score-template`. An evolution score template is an evaluation rubric measuring codebase maturity, architectural drift, and maintainability progression across development milestones.

### Adopted from
RJM `.claude/skills/skillforge/references/evolution-scoring.md:323` for Evolution Score Template.

### Dropped
RJM's defects: doc-drift defects (D-006).

### Rejected alternatives
maturity-model (too generic enterprise term).

### Evidence
RJM `.claude/skills/skillforge/references/evolution-scoring.md:323`.

### Glossary
### evolution-score-template

- **definition:** An evolution score template is an evaluation rubric measuring codebase maturity, architectural drift, and maintainability progression across development milestones.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Evolution Score Template`
- **decision:** D-194
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-evolution-score-template`
- **not to be confused with:** `template-assessment, security-audit-template`

---

## D-195 — reassessment-plan

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-reassessment-plan
- **preferences consulted:** PREFERENCES.md § Approach values continuous architectural verification; followed by adopting reassessment-plan.

### Decision
The canonical term for this artifact is `reassessment-plan`. A reassessment plan is a scheduled review document outlining verification checkpoints, metrics, and criteria for re-evaluating architectural decisions and system performance.

### Adopted from
RJM `.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:247` for reassessment-plan.

### Dropped
RJM's defects: doc-drift, exit-code-mismatch, missing-doc, missing-path defects (D-006).

### Rejected alternatives
review-schedule (lacks explicit evaluation criteria).

### Evidence
RJM `.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:247`.

### Glossary
### reassessment-plan

- **definition:** A reassessment plan is a scheduled review document outlining verification checkpoints, metrics, and criteria for re-evaluating architectural decisions and system performance.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `reassessment-plan`
- **decision:** D-195
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-reassessment-plan`
- **not to be confused with:** `investigation-plan, remediation-action-plan`

---

## D-196 — skill-specification-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-skill-specification-template
- **preferences consulted:** PREFERENCES.md § Approach and D-009 govern skill authoring standards; followed by adopting skill-specification-template.

### Decision
The canonical term for this artifact is `skill-specification-template`. A skill specification template is a standardized schema defining skill metadata, input/output schemas, invocation triggers, composed tools, and verification invariants.

### Adopted from
RJM `.claude/skills/skillforge/references/specification-template.md:3` for Skill Specification Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
skill-template (collides with skill directory templates).

### Evidence
RJM `.claude/skills/skillforge/references/specification-template.md:3`.

### Glossary
### skill-specification-template

- **definition:** A skill specification template is a standardized schema defining skill metadata, input/output schemas, invocation triggers, composed tools, and verification invariants.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Skill Specification Template`
- **decision:** D-196
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-skill-specification-template`
- **not to be confused with:** `artifact-template, yaml-frontmatter-schema`

---

## D-197 — script-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-script-template
- **preferences consulted:** D-003 mandates pure Bun/TypeScript for all scripts; followed by adopting script-template for Bun scripts.

### Decision
The canonical term for this artifact is `script-template`. A script template is a boilerplate structure for executable automation scripts defining standard argument parsing, logging, error handling, and exit code conventions.

### Adopted from
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:831` for Script Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
python-script-template (D-003 forbids Python).

### Evidence
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:831`.

### Glossary
### script-template

- **definition:** A script template is a boilerplate structure for executable automation scripts defining standard argument parsing, logging, error handling, and exit code conventions.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Script Template`
- **decision:** D-197
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-script-template`
- **not to be confused with:** `validation-script-template, state-management-script-template`

---

## D-198 — execution-plan-doc

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-executionplan
- **preferences consulted:** PREFERENCES.md § References highlights migration and execution patterns; followed by adopting execution-plan-doc.

### Decision
The canonical term for this artifact is `execution-plan-doc`. An execution plan document is a detailed procedural roadmap defining concrete milestones, testing gates, command invocations, and rollback checkpoints for a complex migration.

### Adopted from
RJM `scripts/eval/_eval_agent_types.py:204` for ExecutionPlan.

### Dropped
None (source implementations clean).

### Rejected alternatives
execution-plan (collides with plan-phase execution-planning).

### Evidence
RJM `scripts/eval/_eval_agent_types.py:204`.

### Glossary
### execution-plan-doc

- **definition:** An execution plan document is a detailed procedural roadmap defining concrete milestones, testing gates, command invocations, and rollback checkpoints for a complex migration.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `ExecutionPlan`
- **decision:** D-198
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-executionplan`
- **not to be confused with:** `lifecycle-plan-template, plan-template`

---

## D-199 — conversation-structure-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-conversation-structure-template
- **preferences consulted:** PREFERENCES.md § Approach values structured agent interaction; followed by adopting conversation-structure-template.

### Decision
The canonical term for this artifact is `conversation-structure-template`. A conversation structure template is a conversational prompt schema defining turn-taking phases, agent personas, and required artifact handoffs in interactive workflows.

### Adopted from
RJM `.claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:548` for Conversation Structure Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
chat-template (informal).

### Evidence
RJM `.claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:548`.

### Glossary
### conversation-structure-template

- **definition:** A conversation structure template is a conversational prompt schema defining turn-taking phases, agent personas, and required artifact handoffs in interactive workflows.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Conversation Structure Template`
- **decision:** D-199
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-conversation-structure-template`
- **not to be confused with:** `round-template, agent-brief`

---

## D-200 — planguage-requirement-schema

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-planguage
- **preferences consulted:** PREFERENCES.md § Approach and § Depth value precise technical verification; followed by adopting planguage-requirement-schema.

### Decision
The canonical term for this artifact is `planguage-requirement-schema`. A planguage requirement schema is a formal requirements syntax specifying keyword-value tags (TAG, GIST, SCALE, METER, MUST, WISH) for unambiguous technical verification.

### Adopted from
RJM `.claude/skills/adr-generator/references/adr-templates-catalog.md:15` for Planguage.

### Dropped
None (source implementations clean).

### Rejected alternatives
planguage (unqualified proper noun).

### Evidence
RJM `.claude/skills/adr-generator/references/adr-templates-catalog.md:15`.

### Glossary
### planguage-requirement-schema

- **definition:** A planguage requirement schema is a formal requirements syntax specifying keyword-value tags (TAG, GIST, SCALE, METER, MUST, WISH) for unambiguous technical verification.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Planguage`
- **decision:** D-200
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-planguage`
- **not to be confused with:** `structured-requirements, requirements-spec`

---

## D-201 — design-schema

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-design-schema
- **preferences consulted:** PREFERENCES.md § Approach values structured design artifacts; followed by adopting design-schema.

### Decision
The canonical term for this artifact is `design-schema`. A design schema is a formal data contract specifying the structure, fields, validation rules, and relationships required for architectural design documents.

### Adopted from
RJM `.claude/skills/spec-generator/references/spec-schemas.md:186` for Design Schema.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
architecture-schema (less common in RJM source).

### Evidence
RJM `.claude/skills/spec-generator/references/spec-schemas.md:186`.

### Glossary
### design-schema

- **definition:** A design schema is a formal data contract specifying the structure, fields, validation rules, and relationships required for architectural design documents.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Design Schema`
- **decision:** D-201
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-design-schema`
- **not to be confused with:** `design-review-template, yaml-frontmatter-schema`

---

## D-202 — resource-lease-schema

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-lease-schema
- **preferences consulted:** PREFERENCES.md § Approach supports safe multi-agent execution; followed by adopting resource-lease-schema.

### Decision
The canonical term for this artifact is `resource-lease-schema`. A resource lease schema is a concurrency control specification defining lease durations, ownership tokens, and expiration conditions for shared development environments.

### Adopted from
RJM `.agents/architecture/ADR-090-pr-branch-holder-lease.md:83` for Lease schema.

### Dropped
RJM's not-implemented (ADR-090 proposed; citing inventory card records defects: none) defects (D-006).

### Rejected alternatives
lease-schema (unqualified noun).

### Evidence
RJM `.agents/architecture/ADR-090-pr-branch-holder-lease.md:83`.

### Glossary
### resource-lease-schema

- **definition:** A resource lease schema is a concurrency control specification defining lease durations, ownership tokens, and expiration conditions for shared development environments.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Lease schema`
- **decision:** D-202
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-lease-schema`
- **not to be confused with:** `input-contract, state-management-script-template`

---

## D-203 — template-assessment

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-template-assessment
- **preferences consulted:** PREFERENCES.md § Approach values anti-drift template audits; followed by adopting template-assessment.

### Decision
The canonical term for this artifact is `template-assessment`. A template assessment is an evaluative report auditing template completeness, drift against source implementations, and adherence to platform formatting conventions.

### Adopted from
RJM `.claude/skills/review/references/devops.md:227` for Template Assessment.

### Dropped
None (source implementations clean).

### Rejected alternatives
template-audit (less aligned with RJM naming).

### Evidence
RJM `.claude/skills/review/references/devops.md:227`.

### Glossary
### template-assessment

- **definition:** A template assessment is an evaluative report auditing template completeness, drift against source implementations, and adherence to platform formatting conventions.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Template Assessment`
- **decision:** D-203
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-template-assessment`
- **not to be confused with:** `evolution-score-template, review-report`

---

## D-204 — shared-template-library

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-shared-templates
- **preferences consulted:** PREFERENCES.md § References values organized shared references; followed by adopting shared-template-library.

### Decision
The canonical term for this artifact is `shared-template-library`. A shared template library is a centralized directory of reusable document schemas, checklists, and prompt scaffolds accessible across multiple lifecycle commands.

### Adopted from
RJM `.agents/architecture/ADR-036-two-source-agent-template-architecture.md:60` for Shared Templates.

### Dropped
RJM's defects: doc-drift, internal-contradiction, missing-path defects (D-006).

### Rejected alternatives
shared-templates (unhyphenated plural).

### Evidence
RJM `.agents/architecture/ADR-036-two-source-agent-template-architecture.md:60`.

### Glossary
### shared-template-library

- **definition:** A shared template library is a centralized directory of reusable document schemas, checklists, and prompt scaffolds accessible across multiple lifecycle commands.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Shared Templates`
- **decision:** D-204
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-shared-templates`
- **not to be confused with:** `artifact-template, seed-template-collection`

---

## D-205 — concept-card-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-card-template
- **preferences consulted:** METHOD.md §5 and templates/concept-card.md govern concept cards; followed by adopting concept-card-template.

### Decision
The canonical term for this artifact is `concept-card-template`. A concept card template is a structured schema defining required fields, verbatim quotation citations, occurrence tables, and design intent for lifecycle concepts.

### Adopted from
RJM `.claude/skills/prompt-engineer/references/workflow.md:115` for Card Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
card-template (too generic).

### Evidence
RJM `.claude/skills/prompt-engineer/references/workflow.md:115`.

### Glossary
### concept-card-template

- **definition:** A concept card template is a structured schema defining required fields, verbatim quotation citations, occurrence tables, and design intent for lifecycle concepts.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Card Template`
- **decision:** D-205
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-card-template`
- **not to be confused with:** `artifact-template, visual-card-template`

---

## D-206 — ci-validation-report-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-ci-validation-report-template
- **preferences consulted:** PREFERENCES.md § Approach supports automated CI gates; followed by adopting ci-validation-report-template.

### Decision
The canonical term for this artifact is `ci-validation-report-template`. A CI validation report template is a standardized schema formatting continuous integration pipeline results, gate checks, and test summaries for release review.

### Adopted from
RJM `.claude/agents/devops.md:425` for CI Validation Report Template.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
ci-report (too informal).

### Evidence
RJM `.claude/agents/devops.md:425`.

### Glossary
### ci-validation-report-template

- **definition:** A CI validation report template is a standardized schema formatting continuous integration pipeline results, gate checks, and test summaries for release review.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `CI Validation Report Template`
- **decision:** D-206
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-ci-validation-report-template`
- **not to be confused with:** `test-results, post-implementation-verification-template`

---

## D-207 — yaml-frontmatter-schema

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-yaml-front-matter-schema
- **preferences consulted:** METHOD.md R1–R11 enforce strict frontmatter validation; followed by adopting yaml-frontmatter-schema.

### Decision
The canonical term for this artifact is `yaml-frontmatter-schema`. A YAML frontmatter schema is a formal specification defining the required metadata keys, types, and constraints embedded at the head of markdown documentation.

### Adopted from
RJM `.agents/governance/ears-format.md:173` for YAML Front Matter Schema.

### Dropped
None (source implementations clean).

### Rejected alternatives
frontmatter-schema (lacks YAML format specification).

### Evidence
RJM `.agents/governance/ears-format.md:173`.

### Glossary
### yaml-frontmatter-schema

- **definition:** A YAML frontmatter schema is a formal specification defining the required metadata keys, types, and constraints embedded at the head of markdown documentation.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `YAML Front Matter Schema`
- **decision:** D-207
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-yaml-front-matter-schema`
- **not to be confused with:** `design-schema, seed-template-schema`

---

## D-208 — diagnosis-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-diagnosis-template
- **preferences consulted:** PREFERENCES.md § Approach values Matt's diagnosing-bugs and RJM's diagnosis templates; followed by adopting diagnosis-template.

### Decision
The canonical term for this artifact is `diagnosis-template`. A diagnosis template is a structured investigation schema guiding root-cause analysis through defect reproduction, baseline metrics, ranked hypotheses, and targeted probes.

### Adopted from
RJM `.claude/skills/retrospective/references/diagnosis-and-actions.md:83` for Diagnosis Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
bug-diagnosis-template (overly specific).

### Evidence
RJM `.claude/skills/retrospective/references/diagnosis-and-actions.md:83`.

### Glossary
### diagnosis-template

- **definition:** A diagnosis template is a structured investigation schema guiding root-cause analysis through defect reproduction, baseline metrics, ranked hypotheses, and targeted probes.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Diagnosis Template`
- **decision:** D-208
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-diagnosis-template`
- **not to be confused with:** `investigation-plan, resolution-summary-template`

---

## D-209 — state-management-script-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-state-management-script-template
- **preferences consulted:** METHOD.md §7 and §8 govern state management scripts in pure Bun; followed by adopting state-management-script-template.

### Decision
The canonical term for this artifact is `state-management-script-template`. A state management script template is a boilerplate for scripts that read, mutate, and synchronize repository state tables and phase markers under concurrent access.

### Adopted from
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:682` for State Management Script Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
state-script (too brief).

### Evidence
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:682`.

### Glossary
### state-management-script-template

- **definition:** A state management script template is a boilerplate for scripts that read, mutate, and synchronize repository state tables and phase markers under concurrent access.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `State Management Script Template`
- **decision:** D-209
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-state-management-script-template`
- **not to be confused with:** `script-template, validation-script-template`

---

## D-210 — learning-extraction-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-learning-extraction-template
- **preferences consulted:** PREFERENCES.md § Approach values retrospective learning; followed by adopting learning-extraction-template.

### Decision
The canonical term for this artifact is `learning-extraction-template`. A learning extraction template is a retrospective schema capturing root-cause patterns, process improvements, and model failure modes from completed workflows.

### Adopted from
RJM `.claude/skills/retrospective/references/learning-template.md:1` for Learning Extraction Template.

### Dropped
RJM's defects: internal-contradiction in .claude/skills/retrospective/SKILL.md; clean in .claude/skills/retrospective/references/learning-template.md defects (D-006).

### Rejected alternatives
retrospective-template (conflates general retrospective with learning extraction).

### Evidence
RJM `.claude/skills/retrospective/references/learning-template.md:1`.

### Glossary
### learning-extraction-template

- **definition:** A learning extraction template is a retrospective schema capturing root-cause patterns, process improvements, and model failure modes from completed workflows.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Learning Extraction Template`
- **decision:** D-210
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-learning-extraction-template`
- **not to be confused with:** `learning-record, root-cause-pattern-template`

---

## D-211 — visual-card-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-visual-card-template
- **preferences consulted:** PREFERENCES.md § Approach values high-density visual summaries; followed by adopting visual-card-template.

### Decision
The canonical term for this artifact is `visual-card-template`. A visual card template is a presentation schema for displaying concise task status, gate metrics, and architectural diagrams in terminal or chat interfaces.

### Adopted from
RJM `.claude/skills/prompt-engineer/SKILL.md:84` for visual card template.

### Dropped
None (source implementations clean).

### Rejected alternatives
ui-card (implies GUI web UI rather than terminal/chat).

### Evidence
RJM `.claude/skills/prompt-engineer/SKILL.md:84`.

### Glossary
### visual-card-template

- **definition:** A visual card template is a presentation schema for displaying concise task status, gate metrics, and architectural diagrams in terminal or chat interfaces.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `visual card template`
- **decision:** D-211
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-visual-card-template`
- **not to be confused with:** `concept-card-template, task-card`

---

## D-212 — session-protocol-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-session-protocol-template
- **preferences consulted:** METHOD.md §8 specifies strict session protocols; followed by adopting session-protocol-template.

### Decision
The canonical term for this artifact is `session-protocol-template`. A session protocol template is a standardized operational checklist defining startup, work-loop, and shutdown steps for autonomous agent conversations.

### Adopted from
RJM `.agents/projects/v0.4.0/PLAN.md:252` for SESSION-PROTOCOL template.

### Dropped
RJM's defects: missing-path, doc-drift defects (D-006).

### Rejected alternatives
session-checklist (less formal than protocol).

### Evidence
RJM `.agents/projects/v0.4.0/PLAN.md:252`.

### Glossary
### session-protocol-template

- **definition:** A session protocol template is a standardized operational checklist defining startup, work-loop, and shutdown steps for autonomous agent conversations.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `SESSION-PROTOCOL template`
- **decision:** D-212
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-session-protocol-template`
- **not to be confused with:** `agent-guardrails-template, halt-message-schema`

---

## D-213 — agent-guardrails-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-agent-guardrails-template
- **preferences consulted:** METHOD.md §2 and DO-NOT-READ.md embody agent guardrails; followed by adopting agent-guardrails-template.

### Decision
The canonical term for this artifact is `agent-guardrails-template`. An agent guardrails template is a security and governance schema specifying tool constraints, file fence boundaries, and safety invariants for autonomous subagents.

### Adopted from
RJM `.claude/skills/security-scan/references/agent-guardrails-template.md:7` for Agent Guardrails Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
guardrails (names concept rather than template artifact).

### Evidence
RJM `.claude/skills/security-scan/references/agent-guardrails-template.md:7`.

### Glossary
### agent-guardrails-template

- **definition:** An agent guardrails template is a security and governance schema specifying tool constraints, file fence boundaries, and safety invariants for autonomous subagents.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Agent Guardrails Template`
- **decision:** D-213
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-agent-guardrails-template`
- **not to be confused with:** `session-protocol-template, agent-rules-config`

---

## D-214 — halt-message-schema

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-halt-message-schema
- **preferences consulted:** METHOD.md §8.3 specifies STOP escalation protocol; followed by adopting halt-message-schema.

### Decision
The canonical term for this artifact is `halt-message-schema`. A halt message schema is a structured escalation contract defining the error taxonomy, blocking reason, required human input, and resume token when an agent stops.

### Adopted from
RJM `.agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:220` for Halt Message Schema.

### Dropped
RJM's defects: doc-drift, missing-path defects (D-006).

### Rejected alternatives
stop-schema (less descriptive).

### Evidence
RJM `.agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:220`.

### Glossary
### halt-message-schema

- **definition:** A halt message schema is a structured escalation contract defining the error taxonomy, blocking reason, required human input, and resume token when an agent stops.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Halt Message Schema`
- **decision:** D-214
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-halt-message-schema`
- **not to be confused with:** `session-protocol-template, resolution-summary-template`

---

## D-215 — design-review-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-design-review-template
- **preferences consulted:** PREFERENCES.md § Approach values pre-implementation architectural review; followed by adopting design-review-template.

### Decision
The canonical term for this artifact is `design-review-template`. A design review template is an evaluative schema specifying criteria, checklists, and scoring rubrics for assessing architectural designs before implementation.

### Adopted from
RJM `.claude/agents/architect.md:411` for Design Review Template.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
spec-review-template (narrows focus to specs only).

### Evidence
RJM `.claude/agents/architect.md:411`.

### Glossary
### design-review-template

- **definition:** A design review template is an evaluative schema specifying criteria, checklists, and scoring rubrics for assessing architectural designs before implementation.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Design Review Template`
- **decision:** D-215
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-design-review-template`
- **not to be confused with:** `review-report, design-schema`

---

## D-216 — migration-plan-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-migration-plan-template
- **preferences consulted:** PREFERENCES.md § References highlights database-migrations.md; followed by adopting migration-plan-template.

### Decision
The canonical term for this artifact is `migration-plan-template`. A migration plan template is a structured schema defining parallel change phases, schema expansions, data backfills, and deprecation contractions for system migrations.

### Adopted from
RJM `.agents/governance/agent-consolidation-process.md:121` for Migration Plan Template.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
cutover-template (covers only the cutover phase).

### Evidence
RJM `.agents/governance/agent-consolidation-process.md:121`.

### Glossary
### migration-plan-template

- **definition:** A migration plan template is a structured schema defining parallel change phases, schema expansions, data backfills, and deprecation contractions for system migrations.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Migration Plan Template`
- **decision:** D-216
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-migration-plan-template`
- **not to be confused with:** `execution-plan-doc, rollback-plan`

---

## D-217 — generation-script-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-generation-script-template
- **preferences consulted:** D-003 requires pure Bun for all code generation; followed by adopting generation-script-template.

### Decision
The canonical term for this artifact is `generation-script-template`. A generation script template is a code scaffolding template defining boilerplate generators and artifact synthesis utilities implemented in pure Bun.

### Adopted from
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:743` for Generation Script Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
scaffold-template (less descriptive of generation logic).

### Evidence
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:743`.

### Glossary
### generation-script-template

- **definition:** A generation script template is a code scaffolding template defining boilerplate generators and artifact synthesis utilities implemented in pure Bun.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Generation Script Template`
- **decision:** D-217
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-generation-script-template`
- **not to be confused with:** `script-template, validation-script-template`

---

## D-218 — deferral-issue-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-p1-deferral-issue-template
- **preferences consulted:** PREFERENCES.md § Approach values disciplined technical debt deferral; followed by adopting deferral-issue-template.

### Decision
The canonical term for this artifact is `deferral-issue-template`. A deferral issue template is a formal issue tracking schema for recording non-blocking review findings and technical debt deferred to subsequent iterations.

### Adopted from
RJM `.claude/skills/adr-review/references/issue-resolution.md:67` for P1 Deferral Issue Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
p1-deferral (priority label is platform-specific).

### Evidence
RJM `.claude/skills/adr-review/references/issue-resolution.md:67`.

### Glossary
### deferral-issue-template

- **definition:** A deferral issue template is a formal issue tracking schema for recording non-blocking review findings and technical debt deferred to subsequent iterations.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `P1 Deferral Issue Template`
- **decision:** D-218
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-p1-deferral-issue-template`
- **not to be confused with:** `issue-template, task-backlog`

---

## D-219 — security-audit-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-architecture-security-audit-template
- **preferences consulted:** PREFERENCES.md § Approach emphasizes security auditing rigor; followed by adopting security-audit-template.

### Decision
The canonical term for this artifact is `security-audit-template`. A security audit template is a comprehensive inspection schema defining threat modeling checks, dependency vulnerability scans, and access control verifications.

### Adopted from
RJM `.agents/security/architecture-security-template.md:1` for Architecture Security Audit Template.

### Dropped
RJM's defects: missing-path defects (D-006).

### Rejected alternatives
architecture-security-audit-template (unnecessarily verbose).

### Evidence
RJM `.agents/security/architecture-security-template.md:1`.

### Glossary
### security-audit-template

- **definition:** A security audit template is a comprehensive inspection schema defining threat modeling checks, dependency vulnerability scans, and access control verifications.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Architecture Security Audit Template`
- **decision:** D-219
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-architecture-security-audit-template`
- **not to be confused with:** `security-assessment, review-report`

---

## D-220 — post-implementation-verification-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-piv-report-template
- **preferences consulted:** PREFERENCES.md § Approach values post-implementation verification; followed by adopting post-implementation-verification-template.

### Decision
The canonical term for this artifact is `post-implementation-verification-template`. A post-implementation verification template is a reporting schema summarizing automated test runs, regression verifications, and deployment sanity checks.

### Adopted from
RJM `.claude/agents/security.md:504` for PIV Report Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
piv-report (obscure acronym).

### Evidence
RJM `.claude/agents/security.md:504`.

### Glossary
### post-implementation-verification-template

- **definition:** A post-implementation verification template is a reporting schema summarizing automated test runs, regression verifications, and deployment sanity checks.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `PIV Report Template`
- **decision:** D-220
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-piv-report-template`
- **not to be confused with:** `review-report, ci-validation-report-template`

---

## D-221 — root-cause-pattern-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-root-cause-pattern-template
- **preferences consulted:** PREFERENCES.md § Approach values systematic defect learning; followed by adopting root-cause-pattern-template.

### Decision
The canonical term for this artifact is `root-cause-pattern-template`. A root cause pattern template is an analytical schema cataloging recurring failure modes, architectural anti-patterns, and diagnostic indicators across defects.

### Adopted from
RJM `.claude/agents/retrospective.md:864` for Root Cause Pattern Template.

### Dropped
RJM's defects: missing-path, internal-contradiction defects (D-006).

### Rejected alternatives
failure-pattern (less specific than root-cause).

### Evidence
RJM `.claude/agents/retrospective.md:864`.

### Glossary
### root-cause-pattern-template

- **definition:** A root cause pattern template is an analytical schema cataloging recurring failure modes, architectural anti-patterns, and diagnostic indicators across defects.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Root Cause Pattern Template`
- **decision:** D-221
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-root-cause-pattern-template`
- **not to be confused with:** `learning-extraction-template, diagnosis-template`

---

## D-222 — validation-script-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-validation-script-template
- **preferences consulted:** METHOD.md §10 anti-drift checks are validation scripts in pure Bun; followed by adopting validation-script-template.

### Decision
The canonical term for this artifact is `validation-script-template`. A validation script template is a test harness boilerplate for deterministic verification scripts that assert file invariants and execution success.

### Adopted from
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:633` for Validation Script Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
test-script-template (conflates unit tests with invariant validation scripts).

### Evidence
RJM `.claude/skills/skillforge/references/script-patterns-catalog.md:633`.

### Glossary
### validation-script-template

- **definition:** A validation script template is a test harness boilerplate for deterministic verification scripts that assert file invariants and execution success.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Validation Script Template`
- **decision:** D-222
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-validation-script-template`
- **not to be confused with:** `script-template, generation-script-template`

---

## D-223 — plan-vs-reality-record

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-plan-vs-reality
- **preferences consulted:** PREFERENCES.md § Approach values empirical tracking of plan accuracy; followed by adopting plan-vs-reality-record.

### Decision
The canonical term for this artifact is `plan-vs-reality-record`. A plan versus reality record is a variance analysis artifact comparing planned estimates and milestones against actual execution duration and scope adjustments.

### Adopted from
RJM `.claude/skills/dx-review/SKILL.md:216` for PLAN vs REALITY.

### Dropped
RJM's defects: orphan defects (D-006).

### Rejected alternatives
variance-report (too financial/generic).

### Evidence
RJM `.claude/skills/dx-review/SKILL.md:216`.

### Glossary
### plan-vs-reality-record

- **definition:** A plan versus reality record is a variance analysis artifact comparing planned estimates and milestones against actual execution duration and scope adjustments.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `PLAN vs REALITY`
- **decision:** D-223
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-plan-vs-reality`
- **not to be confused with:** `execution-plan-doc, learning-record`

---

## D-224 — investigation-plan

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-investigation-plan
- **preferences consulted:** PREFERENCES.md § Approach values structured troubleshooting; followed by adopting investigation-plan.

### Decision
The canonical term for this artifact is `investigation-plan`. An investigation plan is a diagnostic roadmap specifying reproduction steps, telemetry captures, and analytical hypotheses for troubleshooting complex issues.

### Adopted from
RJM `.claude/skills/analyze/SKILL.md:117` for investigation plan.

### Dropped
RJM's defects: missing-path, doc-drift defects (D-006).

### Rejected alternatives
debug-plan (informal).

### Evidence
RJM `.claude/skills/analyze/SKILL.md:117`.

### Glossary
### investigation-plan

- **definition:** An investigation plan is a diagnostic roadmap specifying reproduction steps, telemetry captures, and analytical hypotheses for troubleshooting complex issues.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `investigation plan`
- **decision:** D-224
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-investigation-plan`
- **not to be confused with:** `diagnosis-template, remediation-action-plan`

---

## D-225 — measurement-plan

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-measurement-plan
- **preferences consulted:** METHOD.md §8.2 D-010 is an empirical measurement plan; followed by adopting measurement-plan.

### Decision
The canonical term for this artifact is `measurement-plan`. A measurement plan is an experimental artifact defining performance indicators, data collection methods, benchmark baselines, and statistical criteria for validation.

### Adopted from
RJM `.agents/metrics/baseline-report.md:198` for Measurement Plan.

### Dropped
None (source implementations clean).

### Rejected alternatives
metrics-plan (less comprehensive than measurement plan).

### Evidence
RJM `.agents/metrics/baseline-report.md:198`.

### Glossary
### measurement-plan

- **definition:** A measurement plan is an experimental artifact defining performance indicators, data collection methods, benchmark baselines, and statistical criteria for validation.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Measurement Plan`
- **decision:** D-225
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-measurement-plan`
- **not to be confused with:** `slo-configuration-template, service-dashboard-spec`

---

## D-226 — resolution-summary-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-resolution-summary-template
- **preferences consulted:** PREFERENCES.md § Approach values post-incident resolution rigor; followed by adopting resolution-summary-template.

### Decision
The canonical term for this artifact is `resolution-summary-template`. A resolution summary template is a post-mortem document schema summarizing problem statement, root cause, fix implementation, and regression prevention measures.

### Adopted from
RJM `.claude/skills/adr-review/references/issue-resolution.md:174` for Resolution Summary Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
incident-summary (narrow focus on live outages).

### Evidence
RJM `.claude/skills/adr-review/references/issue-resolution.md:174`.

### Glossary
### resolution-summary-template

- **definition:** A resolution summary template is a post-mortem document schema summarizing problem statement, root cause, fix implementation, and regression prevention measures.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Resolution Summary Template`
- **decision:** D-226
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-resolution-summary-template`
- **not to be confused with:** `diagnosis-template, remediation-action-plan`

---

## D-227 — slo-configuration-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-slo-configuration-template
- **preferences consulted:** PREFERENCES.md § Approach supports production observability standards; followed by adopting slo-configuration-template.

### Decision
The canonical term for this artifact is `slo-configuration-template`. An SLO configuration template is a declarative schema specifying service level objectives, error budget thresholds, and alerting policies for production services.

### Adopted from
RJM `.claude/skills/slo-designer/templates/slo-config-template.yaml:1` for SLO Configuration Template.

### Dropped
RJM's defects: orphan, internal-contradiction defects (D-006).

### Rejected alternatives
slo-template (unqualified template name).

### Evidence
RJM `.claude/skills/slo-designer/templates/slo-config-template.yaml:1`.

### Glossary
### slo-configuration-template

- **definition:** An SLO configuration template is a declarative schema specifying service level objectives, error budget thresholds, and alerting policies for production services.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `SLO Configuration Template`
- **decision:** D-227
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-slo-configuration-template`
- **not to be confused with:** `service-dashboard-spec, measurement-plan`

---

## D-228 — remediation-action-plan

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-action-plan
- **preferences consulted:** PREFERENCES.md § Approach values accountable remediation; followed by adopting remediation-action-plan.

### Decision
The canonical term for this artifact is `remediation-action-plan`. A remediation action plan is a structured operational roadmap specifying corrective actions, assignees, deadlines, and verification gates following an incident or audit.

### Adopted from
RJM `.claude/skills/analyze/SKILL.md:127` for action plan.

### Dropped
RJM's defects: missing-path, doc-drift defects (D-006).

### Rejected alternatives
action-plan (too generic; collides with general planning).

### Evidence
RJM `.claude/skills/analyze/SKILL.md:127`.

### Glossary
### remediation-action-plan

- **definition:** A remediation action plan is a structured operational roadmap specifying corrective actions, assignees, deadlines, and verification gates following an incident or audit.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `action plan`
- **decision:** D-228
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-action-plan`
- **not to be confused with:** `investigation-plan, resolution-summary-template`

---

## D-229 — lifecycle-plan-template

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 028
- **status:** active
- **supersedes:** —
- **resolves:** artifacts.md#artifact-rjm-plan-template
- **preferences consulted:** PREFERENCES.md § Approach and § Phase mapping govern lifecycle plan templates; followed by adopting lifecycle-plan-template.

### Decision
The canonical term for this artifact is `lifecycle-plan-template`. A lifecycle plan template is an overarching execution plan schema defining work breakdown structures, risk matrices, and milestone delivery schedules.

### Adopted from
RJM `.claude/agents/milestone-planner.md:119` for Plan Template.

### Dropped
None (source implementations clean).

### Rejected alternatives
plan-template (already used for D-136 artifact-plan-template).

### Evidence
RJM `.claude/agents/milestone-planner.md:119`.

### Glossary
### lifecycle-plan-template

- **definition:** A lifecycle plan template is an overarching execution plan schema defining work breakdown structures, risk matrices, and milestone delivery schedules.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Plan Template`
- **decision:** D-229
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-plan-template`
- **not to be confused with:** `plan-template, execution-plan-doc`
---

## D-230 — standard-feature-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-pipeline-standard-feature-workflow
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's overall lifecycle framing while adopting RJM's concise slash-command composition; followed by adopting the six-phase standard feature workflow.

### Decision
The canonical term for this sequencing concept is `standard-feature-workflow`. The standard feature workflow is the canonical six-stage macro lifecycle execution pipeline (/spec → /plan → /build → /test → /review → /ship) sequentially driven by the human developer for non-trivial capabilities.

### Adopted from
RJM `docs/workflow-commands.md:17` for the standard feature workflow sequence; Addy `references/orchestration-patterns.md:80` for user-driven command dispatch.

### Dropped
RJM's doc-drift defects; Matt's lack of macro slash-command pipeline in favor of explicit phase boundaries.

### Rejected alternatives
- sequential-slash-commands (describes interface syntax rather than architectural workflow)
- standard-pipeline (too generic; fails to convey feature-level scope)

### Evidence
Addy `references/orchestration-patterns.md:80`; RJM `docs/workflow-commands.md:17`.

### Glossary
### standard-feature-workflow

- **definition:** The standard feature workflow is the canonical six-stage macro lifecycle execution pipeline (/spec → /plan → /build → /test → /review → /ship) sequentially driven by the human developer for non-trivial capabilities.
- **kind:** pattern
- **source names:** addy: `Sequential pipeline as user-driven slash commands` · matt: `workflows/*.md` · rjm: `Standard Feature Workflow`
- **decision:** D-230
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-standard-feature-workflow`
- **not to be confused with:** quick-fix-workflow, research-first-workflow

---

## D-231 — lifecycle-sequence

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-pipeline-macro-lifecycle-sequence
- **preferences consulted:** PREFERENCES.md § Approach and § Phase mapping govern lifecycle sequence order; followed by establishing the canonical stage progression.

### Decision
The canonical term for this sequencing concept is `lifecycle-sequence`. The lifecycle sequence is the chronologically ordered stage progression defining the entry, handoff, and completion order across all lifecycle phases.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:14` for the Lifecycle Sequence; RJM `README.md:543` and `docs/workflow-commands.md:14` for lifecycle command sequencing.

### Dropped
Addy's internal contradictions and doc-drift across skill guides (D-006).

### Rejected alternatives
- command-sequence (focuses on CLI invocation rather than phase progression)
- stage-order (narrower procedural term lacking lifecycle context)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:14`; RJM `README.md:543`.

### Glossary
### lifecycle-sequence

- **definition:** The lifecycle sequence is the chronologically ordered stage progression defining the entry, handoff, and completion order across all lifecycle phases.
- **kind:** pattern
- **source names:** addy: `Lifecycle Sequence` · matt: `General workflow tools` · rjm: `Lifecycle commands`
- **decision:** D-231
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-macro-lifecycle-sequence`
- **not to be confused with:** standard-feature-workflow, lifecycle-workflow

---

## D-232 — lifecycle-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-pipeline-lifecycle-concept
- **preferences consulted:** PREFERENCES.md § Approach requires compatibility with brain and disciplined software engineering; followed by adopting lifecycle-workflow.

### Decision
The canonical term for this sequencing concept is `lifecycle-workflow`. A lifecycle workflow is an end-to-end disciplined engineering sequence governing software creation, validation, and release under explicit gate constraints.

### Adopted from
Addy `README.md:5` for the lifecycle discipline concept; RJM `docs/workflow-commands.md:14` for workflow execution structure.

### Dropped
RJM's internal contradiction and missing-path defects (D-006).

### Rejected alternatives
- sdlc (abbreviation; less explicit in codebase documentation)
- workflow (overloaded across GitHub Actions, CI, and agent loops)

### Evidence
Addy `README.md:5`; RJM `docs/workflow-commands.md:14`.

### Glossary
### lifecycle-workflow

- **definition:** A lifecycle workflow is an end-to-end disciplined engineering sequence governing software creation, validation, and release under explicit gate constraints.
- **kind:** pattern
- **source names:** addy: `lifecycle` · matt: — · rjm: `Workflows`
- **decision:** D-232
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-concept`
- **not to be confused with:** lifecycle-sequence, standard-feature-workflow

---

## D-233 — lifecycle-mapping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-pipeline-lifecycle-mapping
- **preferences consulted:** PREFERENCES.md § Approach favours Addy's catalog and entry-routing structure; followed by adopting lifecycle-mapping.

### Decision
The canonical term for this sequencing concept is `lifecycle-mapping`. Lifecycle mapping is the dispatch heuristic that categorizes an incoming developer request and routes it to the corresponding lifecycle phase and skill.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:28` for Lifecycle Mapping.

### Dropped
Addy's missing path defects in `docs/opencode-setup.md` (D-006).

### Rejected alternatives
- phase-router (connotes a dedicated agent persona, which is an anti-pattern per D-258)
- request-mapping (too generic; collides with web server HTTP routing)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:28`.

### Glossary
### lifecycle-mapping

- **definition:** Lifecycle mapping is the dispatch heuristic that categorizes an incoming developer request and routes it to the corresponding lifecycle phase and skill.
- **kind:** pattern
- **source names:** addy: `Lifecycle Mapping` · matt: — · rjm: —
- **decision:** D-233
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-mapping`
- **not to be confused with:** implicit-command-mapping, phase-routing

---

## D-234 — implicit-command-mapping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-pipeline-lifecycle-mapping-implicit
- **preferences consulted:** PREFERENCES.md § Approach supports flexible developer interactions across both command and conversational modes; followed by adopting implicit-command-mapping.

### Decision
The canonical term for this sequencing concept is `implicit-command-mapping`. Implicit command mapping is the natural-language intent recognition mechanism that infers and activates the appropriate lifecycle skill without requiring explicit slash-command syntax.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:35` for implicit command triggers.

### Dropped
None (clean source concept).

### Rejected alternatives
- natural-language-dispatch (generic; does not cite command mapping target)
- intent-routing (vague AI marketing term)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:35`.

### Glossary
### implicit-command-mapping

- **definition:** Implicit command mapping is the natural-language intent recognition mechanism that infers and activates the appropriate lifecycle skill without requiring explicit slash-command syntax.
- **kind:** pattern
- **source names:** addy: `Lifecycle Mapping (Implicit Commands)` · matt: — · rjm: —
- **decision:** D-234
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-mapping-implicit`
- **not to be confused with:** lifecycle-mapping, command-driven-workflow

---

## D-235 — command-driven-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-pipeline-command-vs-agent-driven
- **preferences consulted:** PREFERENCES.md § Approach favours developer steering and explicit phase gates; followed by establishing command-driven-workflow as primary.

### Decision
The canonical term for this sequencing concept is `command-driven-workflow`. A command-driven workflow is an execution paradigm where progression through lifecycle phases is explicitly invoked and gated by developer slash commands rather than autonomous loops.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:52` for command-driven workflow.

### Dropped
Addy's missing path defects in `docs/opencode-setup.md` (D-006).

### Rejected alternatives
- manual-workflow (misleading; suggests manual coding without agents)
- slash-command-workflow (focuses narrowly on syntax rather than control model)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:52`.

### Glossary
### command-driven-workflow

- **definition:** A command-driven workflow is an execution paradigm where progression through lifecycle phases is explicitly invoked and gated by developer slash commands rather than autonomous loops.
- **kind:** pattern
- **source names:** addy: `Command-driven workflow` · matt: — · rjm: —
- **decision:** D-235
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-command-vs-agent-driven`
- **not to be confused with:** agent-driven-workflow, standard-feature-workflow

---

## D-236 — agent-driven-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-pipeline-agent-driven-workflow
- **preferences consulted:** PREFERENCES.md § Approach balances agent autonomy with strict quality bounds; followed by adopting agent-driven-workflow for bounded sub-phases.

### Decision
The canonical term for this sequencing concept is `agent-driven-workflow`. An agent-driven workflow is an autonomous execution paradigm where subagents progress through multi-step task breakdowns within bounded phase constraints without turn-by-turn developer prompting.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:65` for agent-driven workflow.

### Dropped
Addy's missing path defects in `docs/opencode-setup.md` (D-006).

### Rejected alternatives
- autonomous-workflow (too absolute; agents operate within bounded sandboxes and review gates)
- agentic-sdlc (buzzword styling; inconsistent with repository naming)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:65`.

### Glossary
### agent-driven-workflow

- **definition:** An agent-driven workflow is an autonomous execution paradigm where subagents progress through multi-step task breakdowns within bounded phase constraints without turn-by-turn developer prompting.
- **kind:** pattern
- **source names:** addy: `Agent-driven workflow` · matt: — · rjm: —
- **decision:** D-236
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-agent-driven-workflow`
- **not to be confused with:** command-driven-workflow, standard-feature-workflow

---

## D-237 — front-gate-prerequisite

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-precedence-front-gate-prerequisite
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints emphasize unyielding gates and verified prerequisites; followed by adopting front-gate-prerequisite.

### Decision
The canonical term for this sequencing concept is `front-gate-prerequisite`. A front-gate prerequisite is an entry assertion that strictly blocks a lifecycle phase or pipeline from initiating until all required upstream artifacts are committed to disk.

### Adopted from
RJM `.claude/commands/plan.md:15` for front-gate-before-pipeline assertions; Addy `README.md:222` for the gated workflow; Matt `skills/engineering/implement/SKILL.md:18` for decision prerequisites.

### Dropped
RJM's doc-drift and missing-path defects (D-006).

### Rejected alternatives
- entry-gate (generic; fails to convey prerequisite artifact verification)
- prerequisite-gate (redundant formulation)

### Evidence
Addy `README.md:222`; Matt `skills/engineering/implement/SKILL.md:18`; RJM `.claude/commands/plan.md:15`.

### Glossary
### front-gate-prerequisite

- **definition:** A front-gate prerequisite is an entry assertion that strictly blocks a lifecycle phase or pipeline from initiating until all required upstream artifacts are committed to disk.
- **kind:** gate
- **source names:** addy: `The Gated Workflow` · matt: `Prerequisite` · rjm: `front-gate-before-pipeline`
- **decision:** D-237
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-front-gate-prerequisite`
- **not to be confused with:** task-prerequisites, quality-gate-pipeline

---

## D-238 — task-prerequisites

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-precedence-prerequisites-pattern
- **preferences consulted:** PREFERENCES.md § Approach favours granular task breakdown with explicit dependencies; followed by adopting task-prerequisites.

### Decision
The canonical term for this sequencing concept is `task-prerequisites`. Task prerequisites are explicit dependencies declared on work items or tickets that prevent execution from beginning until blocking parent tasks or technical decisions are complete.

### Adopted from
Matt `skills/engineering/to-tickets/SKILL.md:22` for the prerequisites pattern; RJM `.claude/commands/plan.md:18` for dependency checks.

### Dropped
Matt's missing-path and doc-drift defects (D-006).

### Rejected alternatives
- task-dependencies (refers to the graph relationship; prerequisites refers to the blocking status)
- blocking-tasks (informal terminology)

### Evidence
Matt `skills/engineering/to-tickets/SKILL.md:22`; RJM `.claude/commands/plan.md:18`.

### Glossary
### task-prerequisites

- **definition:** Task prerequisites are explicit dependencies declared on work items or tickets that prevent execution from beginning until blocking parent tasks or technical decisions are complete.
- **kind:** pattern
- **source names:** addy: — · matt: `Prerequisites` · rjm: `Front-gate`
- **decision:** D-238
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-prerequisites-pattern`
- **not to be confused with:** front-gate-prerequisite, task-dependency-graph

---

## D-239 — quality-gate-pipeline

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-precedence-quality-gate-pipeline
- **preferences consulted:** PREFERENCES.md § Approach demands rigorous quality verification and prevention of defect propagation; followed by adopting quality-gate-pipeline.

### Decision
The canonical term for this sequencing concept is `quality-gate-pipeline`. A quality-gate pipeline is a series of automated verification checks and policy assertions enforced at phase boundaries before code or artifacts can transition to subsequent stages.

### Adopted from
Addy `skills/ci-cd-and-automation/SKILL.md:12` for quality-gate pipelines; RJM `.agents/architecture/ADR-064:42` for fast-stage gates.

### Dropped
Addy's doc-drift and orphan path defects (D-006).

### Rejected alternatives
- stage-gates (business process term lacking automated pipeline semantics)
- ci-gates (artificially restricts gate execution to CI server rather than local commands)

### Evidence
Addy `skills/ci-cd-and-automation/SKILL.md:12`; RJM `.agents/architecture/ADR-064:42`.

### Glossary
### quality-gate-pipeline

- **definition:** A quality-gate pipeline is a series of automated verification checks and policy assertions enforced at phase boundaries before code or artifacts can transition to subsequent stages.
- **kind:** gate
- **source names:** addy: `quality-gate pipelines` · matt: — · rjm: —
- **decision:** D-239
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-quality-gate-pipeline`
- **not to be confused with:** front-gate-prerequisite, phase-boundary-transition

---

## D-240 — pipeline-staleness-invalidation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-precedence-full-pipeline-staleness
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints require strict traceability and zero drift between specification and implementation; followed by adopting pipeline-staleness-invalidation.

### Decision
The canonical term for this sequencing concept is `pipeline-staleness-invalidation`. Pipeline staleness invalidation is the dependency invalidation rule where modifications to upstream specification or planning artifacts mark all downstream code and verification outputs stale, requiring pipeline re-execution.

### Adopted from
RJM `.agents/architecture/ADR-064:55` for Full pipeline staleness.

### Dropped
RJM's unfailable gate defect in `build_all.py` (D-006).

### Rejected alternatives
- downstream-invalidation (generic; omits pipeline re-run mandate)
- full-staleness (incomplete descriptor)

### Evidence
RJM `.agents/architecture/ADR-064:55`.

### Glossary
### pipeline-staleness-invalidation

- **definition:** Pipeline staleness invalidation is the dependency invalidation rule where modifications to upstream specification or planning artifacts mark all downstream code and verification outputs stale, requiring pipeline re-execution.
- **kind:** pattern
- **source names:** addy: — · matt: — · rjm: `Full pipeline staleness`
- **decision:** D-240
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-full-pipeline-staleness`
- **not to be confused with:** front-gate-prerequisite, quality-gate-pipeline

---

## D-241 — task-fitness-guide

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-when-to-use-guide
- **preferences consulted:** PREFERENCES.md § Approach values pragmatic fitness and right-sizing lifecycle overhead; followed by adopting task-fitness-guide.

### Decision
The canonical term for this sequencing concept is `task-fitness-guide`. The task fitness guide is a decision matrix mapping incoming engineering task shapes (such as full features, hotfixes, spikes, or doc changes) to the appropriate subset of lifecycle phases.

### Adopted from
RJM `docs/when-to-use.md:1` for the eight task-shape fitness guide; Addy `skills/using-agent-skills/SKILL.md:18` for When-to-use criteria; Matt `skills/engineering/triage/SKILL.md:24` for scope boundaries.

### Dropped
RJM's missing relative links and script directory drift (D-006); Addy's documentation contradictions.

### Rejected alternatives
- when-to-use (phrasal heading; not a canonical noun phrase)
- routing-guide (confuses fitness selection with phase-routing mechanics)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:18`; Matt `skills/engineering/triage/SKILL.md:24`; RJM `docs/when-to-use.md:1`.

### Glossary
### task-fitness-guide

- **definition:** The task fitness guide is a decision matrix mapping incoming engineering task shapes (such as full features, hotfixes, spikes, or doc changes) to the appropriate subset of lifecycle phases.
- **kind:** reference
- **source names:** addy: `When to use` · matt: `Explicit scope boundaries` · rjm: `When to Use`
- **decision:** D-241
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-when-to-use-guide`
- **not to be confused with:** lifecycle-anti-recommendations, lifecycle-mapping

---

## D-242 — quick-fix-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-quick-fix-workflow
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints support lightweight paths for obvious bugs while preserving test verification; followed by adopting quick-fix-workflow.

### Decision
The canonical term for this sequencing concept is `quick-fix-workflow`. The quick fix workflow is an accelerated, three-stage lifecycle fast path (/build → /test → /ship) bypassing specification and planning for localized defect repairs with verified root causes and bounded blast radii.

### Adopted from
RJM `docs/workflow-commands.md:26` for Quick Fix Workflow; Addy `skills/debugging-and-error-recovery/SKILL.md:15` for five-step triage; Matt `skills/engineering/triage/SKILL.md:12` for triage classification.

### Dropped
Matt's CLI setup script bugs in triage (D-006); RJM's doc-drift.

### Rejected alternatives
- hotfix-workflow (too restrictive; applies to local development bugs as well as production hotfixes)
- fast-track (informal colloquialism)

### Evidence
Addy `skills/debugging-and-error-recovery/SKILL.md:15`; Matt `skills/engineering/triage/SKILL.md:12`; RJM `docs/workflow-commands.md:26`.

### Glossary
### quick-fix-workflow

- **definition:** The quick fix workflow is an accelerated, three-stage lifecycle fast path (/build → /test → /ship) bypassing specification and planning for localized defect repairs with verified root causes and bounded blast radii.
- **kind:** pattern
- **source names:** addy: `five-step triage` · matt: `triage roles` · rjm: `Quick Fix Workflow`
- **decision:** D-242
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-quick-fix-workflow`
- **not to be confused with:** standard-feature-workflow, research-first-workflow

---

## D-243 — research-first-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-research-first-workflow
- **preferences consulted:** PREFERENCES.md § Approach favours deep research and alignment prior to building; followed by adopting research-first-workflow.

### Decision
The canonical term for this sequencing concept is `research-first-workflow`. The research-first workflow is an exploratory lifecycle sequence that executes specification and execution planning (/spec → /plan) to investigate technical spikes and resolve architectural uncertainties without writing implementation code.

### Adopted from
RJM `docs/workflow-commands.md:34` for Research-First Workflow; Matt `skills/productivity/grilling/SKILL.md:18` for the exploratory grilling loop.

### Dropped
RJM's doc-drift defects (D-006).

### Rejected alternatives
- spike-workflow (informal agile jargon)
- exploratory-workflow (vague; fails to indicate termination after planning)

### Evidence
Matt `skills/productivity/grilling/SKILL.md:18`; RJM `docs/workflow-commands.md:34`.

### Glossary
### research-first-workflow

- **definition:** The research-first workflow is an exploratory lifecycle sequence that executes specification and execution planning (/spec → /plan) to investigate technical spikes and resolve architectural uncertainties without writing implementation code.
- **kind:** pattern
- **source names:** addy: — · matt: `grilling loop` · rjm: `Research-First Workflow`
- **decision:** D-243
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-research-first-workflow`
- **not to be confused with:** standard-feature-workflow, quick-fix-workflow

---

## D-244 — triage-first-discipline

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-triage-first
- **preferences consulted:** PREFERENCES.md § Approach values disciplined intake before work initiation; followed by adopting triage-first-discipline.

### Decision
The canonical term for this sequencing concept is `triage-first-discipline`. The triage-first discipline is the intake sequencing rule requiring issue reproduction, severity assessment, and blast-radius classification before selecting a lifecycle workflow path.

### Adopted from
RJM `docs/workflow-commands.md:42` for Triage first; Matt `skills/engineering/triage/SKILL.md:30` for triage role evaluation.

### Dropped
Matt's missing-path defects (D-006); RJM's doc-drift.

### Rejected alternatives
- triage-gate (it is a sequencing discipline governing workflow choice, not a binary pass/fail gate)
- triage-priority (narrows the concept to scheduling priority rather than intake discipline)

### Evidence
Matt `skills/engineering/triage/SKILL.md:30`; RJM `docs/workflow-commands.md:42`.

### Glossary
### triage-first-discipline

- **definition:** The triage-first discipline is the intake sequencing rule requiring issue reproduction, severity assessment, and blast-radius classification before selecting a lifecycle workflow path.
- **kind:** pattern
- **source names:** addy: — · matt: `Triage role` · rjm: `Triage first`
- **decision:** D-244
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-triage-first`
- **not to be confused with:** triage-phase, triage-checklist-sequence

---

## D-245 — needs-triage-marker

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-needs-triage-label
- **preferences consulted:** PREFERENCES.md § Approach and § Phase mapping acknowledge triage state tracking; followed by adopting needs-triage-marker.

### Decision
The canonical term for this sequencing concept is `needs-triage-marker`. A needs-triage marker is an issue tracking state or label indicating that an incoming work item is unclassified and requires evaluation before entry into the lifecycle.

### Adopted from
Matt `skills/engineering/setup-matt-pocock-skills/triage-labels.md:12` for needs-triage label definition.

### Dropped
RJM's missing-path defects in `Skill-Triage-002` (D-006).

### Rejected alternatives
- untriaged (adjective form lacking artifact/marker noun phrase)
- triage-needed (phrasal; less standard in issue tracking taxonomy)

### Evidence
Matt `skills/engineering/setup-matt-pocock-skills/triage-labels.md:12`.

### Glossary
### needs-triage-marker

- **definition:** A needs-triage marker is an issue tracking state or label indicating that an incoming work item is unclassified and requires evaluation before entry into the lifecycle.
- **kind:** pattern
- **source names:** addy: — · matt: `needs-triage` · rjm: `Skill-Triage-002`
- **decision:** D-245
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-needs-triage-label`
- **not to be confused with:** triage-first-discipline, triage-phase

---

## D-246 — triage-checklist-sequence

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-triage-checklist
- **preferences consulted:** PREFERENCES.md § Approach prioritizes methodical defect investigation over rapid guesswork; followed by adopting triage-checklist-sequence.

### Decision
The canonical term for this sequencing concept is `triage-checklist-sequence`. The triage checklist sequence is an ordered defect triage protocol systematically progressing through reproduction, localization, reduction, root cause isolation, recurrence guarding, and verification.

### Adopted from
Addy `skills/debugging-and-error-recovery/SKILL.md:45` for The Triage Checklist.

### Dropped
None (clean source sequence).

### Rejected alternatives
- bug-triage-steps (informal colloquial phrasing)
- defect-checklist (collides with build quality checklists)

### Evidence
Addy `skills/debugging-and-error-recovery/SKILL.md:45`.

### Glossary
### triage-checklist-sequence

- **definition:** The triage checklist sequence is an ordered defect triage protocol systematically progressing through reproduction, localization, reduction, root cause isolation, recurrence guarding, and verification.
- **kind:** pattern
- **source names:** addy: `The Triage Checklist` · matt: — · rjm: —
- **decision:** D-246
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-triage-checklist`
- **not to be confused with:** triage-first-discipline, runtime-error-triage

---

## D-247 — runtime-error-triage

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-runtime-error-triage
- **preferences consulted:** PREFERENCES.md § Approach values empirical diagnostics; followed by adopting runtime-error-triage.

### Decision
The canonical term for this sequencing concept is `runtime-error-triage`. Runtime error triage is a specialized diagnostic sequence isolating exception causes, stack frames, and failure states in production or test environments prior to remediation.

### Adopted from
Addy `skills/debugging-and-error-recovery/SKILL.md:58` for Runtime Error Triage.

### Dropped
None (clean source sequence).

### Rejected alternatives
- crash-triage (too narrow; excludes non-fatal runtime anomalies and network errors)
- exception-analysis (describes analysis technique rather than sequencing workflow)

### Evidence
Addy `skills/debugging-and-error-recovery/SKILL.md:58`.

### Glossary
### runtime-error-triage

- **definition:** Runtime error triage is a specialized diagnostic sequence isolating exception causes, stack frames, and failure states in production or test environments prior to remediation.
- **kind:** pattern
- **source names:** addy: `Runtime Error Triage` · matt: — · rjm: —
- **decision:** D-247
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-runtime-error-triage`
- **not to be confused with:** triage-checklist-sequence, defect-reproduction

---

## D-248 — gate-skip-policy

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-fitness-skipping-rules-policy
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach mandate that bypassing checks must be audited and deliberate; followed by adopting gate-skip-policy.

### Decision
The canonical term for this sequencing concept is `gate-skip-policy`. A gate skip policy is a formal operational standard specifying permissible conditions, mandatory justifications, and audit trails required to bypass a lifecycle gate or verification check.

### Adopted from
Addy `skills/constraint-driven-development/SKILL.md:32` for the SKIPS policy; RJM `.claude/commands/ship.md:45` for default skip policy definitions.

### Dropped
RJM's defects in skip policy configuration defaults (D-006).

### Rejected alternatives
- skip-rules (informal phrasing)
- bypass-policy (connotes security bypass rather than disciplined lifecycle fast-tracking)

### Evidence
Addy `skills/constraint-driven-development/SKILL.md:32`; RJM `.claude/commands/ship.md:45`.

### Glossary
### gate-skip-policy

- **definition:** A gate skip policy is a formal operational standard specifying permissible conditions, mandatory justifications, and audit trails required to bypass a lifecycle gate or verification check.
- **kind:** pattern
- **source names:** addy: `SKIPS` · matt: — · rjm: `_DEFAULT_SKIP_POLICY`
- **decision:** D-248
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-skipping-rules-policy`
- **not to be confused with:** lifecycle-anti-recommendations, front-gate-prerequisite

---

## D-249 — lifecycle-anti-recommendations

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-overkill-anti-recommendations
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints emphasize efficiency without ritualistic overhead; followed by adopting lifecycle-anti-recommendations.

### Decision
The canonical term for this sequencing concept is `lifecycle-anti-recommendations`. Lifecycle anti-recommendations are documented negative guidelines defining trivial or mechanical tasks (such as single-line doc typos or dependency pin bumps) where the full lifecycle imposes unnecessary overhead and must be omitted.

### Adopted from
RJM `docs/when-to-use.md:36` for the Anti-recommendations specification.

### Dropped
RJM's missing-path defects (D-006).

### Rejected alternatives
- anti-patterns (overloaded across orchestration and architecture)
- when-not-to-use (phrasal heading; not a canonical noun phrase)

### Evidence
RJM `docs/when-to-use.md:36`.

### Glossary
### lifecycle-anti-recommendations

- **definition:** Lifecycle anti-recommendations are documented negative guidelines defining trivial or mechanical tasks (such as single-line doc typos or dependency pin bumps) where the full lifecycle imposes unnecessary overhead and must be omitted.
- **kind:** reference
- **source names:** addy: — · matt: — · rjm: `idea lifecycle`
- **decision:** D-249
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-overkill-anti-recommendations`
- **not to be confused with:** task-fitness-guide, gate-skip-policy

---

## D-250 — greenfield-lifecycle-path

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-adoption-greenfield-path
- **preferences consulted:** PREFERENCES.md § Approach supports greenfield engineering rigour; followed by adopting greenfield-lifecycle-path.

### Decision
The canonical term for this sequencing concept is `greenfield-lifecycle-path`. The greenfield lifecycle path is an adoption sequence for new codebases establishing comprehensive specification, strict planning, and rigorous testing gates from project inception.

### Adopted from
Addy `docs/adoption-guide.md:20` for Path A Greenfield lifecycle adoption; Matt `skills/engineering/codebase-design/SKILL.md:30` for greenfield builds; RJM `docs/workflow-commands.md:50` for bootstrap iterations.

### Dropped
Matt's orphan and doc-drift defects (D-006).

### Rejected alternatives
- greenfield-mode (implies a boolean flag rather than an adoption sequencing strategy)
- bootstrap-workflow (too narrow; suggests initial repository initialization only)

### Evidence
Addy `docs/adoption-guide.md:20`; Matt `skills/engineering/codebase-design/SKILL.md:30`; RJM `docs/workflow-commands.md:50`.

### Glossary
### greenfield-lifecycle-path

- **definition:** The greenfield lifecycle path is an adoption sequence for new codebases establishing comprehensive specification, strict planning, and rigorous testing gates from project inception.
- **kind:** pattern
- **source names:** addy: `Greenfield` · matt: `greenfield build` · rjm: `BOOTSTRAP_ITERATIONS`
- **decision:** D-250
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-adoption-greenfield-path`
- **not to be confused with:** standard-feature-workflow, quick-fix-workflow

---

## D-251 — phase-boundary-decision-model

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-boundary-decision-model
- **preferences consulted:** PREFERENCES.md § Approach values Matt's disciplined context hygiene at phase seams; followed by adopting phase-boundary-decision-model.

### Decision
The canonical term for this sequencing concept is `phase-boundary-decision-model`. The phase boundary decision model is an architectural protocol evaluated at phase completion to determine context management actions across continuation, clean slate, handoff, subagent dispatch, or compaction.

### Adopted from
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:1` for the five-option phase boundary decision model; Addy `skills/using-agent-skills/SKILL.md:40` for boundary rules; RJM `.agents/architecture/ADR-064:30` for boundary protection.

### Dropped
None (clean synthesis across sources).

### Rejected alternatives
- boundary-decision-tree (informal; model is broader than a simple tree)
- context-decision-model (too generic; fails to anchor decision to phase boundaries)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:40`; Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:1`; RJM `.agents/architecture/ADR-064:30`.

### Glossary
### phase-boundary-decision-model

- **definition:** The phase boundary decision model is an architectural protocol evaluated at phase completion to determine context management actions across continuation, clean slate, handoff, subagent dispatch, or compaction.
- **kind:** pattern
- **source names:** addy: `three-tier boundary system` · matt: `Phase boundaries` · rjm: `Boundary Protection`
- **decision:** D-251
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-boundary-decision-model`
- **not to be confused with:** phase-boundary-transition, session-handoff-protocol

---

## D-252 — phase-boundary-transition

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-boundary-phase-boundary-gate
- **preferences consulted:** PREFERENCES.md § Approach favours clean handoffs and strict phase separation; followed by adopting phase-boundary-transition.

### Decision
The canonical term for this sequencing concept is `phase-boundary-transition`. A phase boundary transition is the explicit stopping and evaluation point between two lifecycle stages where deliverables are verified and session context is reset or handed off.

### Adopted from
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5` for phase boundary transitions; Addy `skills/using-agent-skills/SKILL.md:44` for boundary validation; RJM `.agents/architecture/ADR-064:35` for boundary translation.

### Dropped
RJM's defects in error translation (D-006).

### Rejected alternatives
- phase-transition (generic; omits the boundary evaluation semantics)
- stage-gate (collides with quality-gate-pipeline)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:44`; Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5`; RJM `.agents/architecture/ADR-064:35`.

### Glossary
### phase-boundary-transition

- **definition:** A phase boundary transition is the explicit stopping and evaluation point between two lifecycle stages where deliverables are verified and session context is reset or handed off.
- **kind:** gate
- **source names:** addy: `boundaries` · matt: `phase boundary` · rjm: `Boundary translation`
- **decision:** D-252
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-boundary-phase-boundary-gate`
- **not to be confused with:** phase-boundary-decision-model, quality-gate-pipeline

---

## D-253 — trust-boundary-enforcement

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-boundary-trust-boundaries
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints mandate ironclad security and input sanitation; followed by adopting trust-boundary-enforcement.

### Decision
The canonical term for this sequencing concept is `trust-boundary-enforcement`. Trust boundary enforcement is an architectural security discipline that isolates trusted agent execution environments and tool invocations from untrusted user inputs, external web content, and third-party data.

### Adopted from
Addy `skills/security-and-hardening/SKILL.md:18` for Trust boundaries; RJM `.claude/commands/spec.md:88` for untrusted-content boundaries.

### Dropped
None (clean source pattern).

### Rejected alternatives
- security-boundary (unqualified; could refer to network or process isolation)
- content-gate (too narrow; misses execution context isolation)

### Evidence
Addy `skills/security-and-hardening/SKILL.md:18`; RJM `.claude/commands/spec.md:88`.

### Glossary
### trust-boundary-enforcement

- **definition:** Trust boundary enforcement is an architectural security discipline that isolates trusted agent execution environments and tool invocations from untrusted user inputs, external web content, and third-party data.
- **kind:** pattern
- **source names:** addy: `Trust boundaries` · matt: — · rjm: `Untrusted-content boundary`
- **decision:** D-253
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-boundary-trust-boundaries`
- **not to be confused with:** phase-boundary-transition, front-gate-prerequisite

---

## D-254 — session-handoff-protocol

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-handoff-syntax-and-skill
- **preferences consulted:** PREFERENCES.md § Approach favours Matt's portable markdown handoff philosophy; followed by adopting session-handoff-protocol.

### Decision
The canonical term for this sequencing concept is `session-handoff-protocol`. The session handoff protocol is the mechanism of serializing completed phase progress, open decisions, and active context into a structured markdown document on disk to seed subsequent agent conversations.

### Adopted from
Matt `skills/productivity/handoff/SKILL.md:1` for `/handoff` portable markdown compaction; RJM `.claude/commands/build.md:42` for handoff syntax standards.

### Dropped
Matt's doc-drift and orphan defects (D-006); RJM's cross-file contradictions.

### Rejected alternatives
- handoff-skill (refers to a specific tool implementation rather than the sequencing protocol)
- context-handoff (vague; fails to specify disk serialization contract)

### Evidence
Matt `skills/productivity/handoff/SKILL.md:1`; RJM `.claude/commands/build.md:42`.

### Glossary
### session-handoff-protocol

- **definition:** The session handoff protocol is the mechanism of serializing completed phase progress, open decisions, and active context into a structured markdown document on disk to seed subsequent agent conversations.
- **kind:** pattern
- **source names:** addy: — · matt: `The /handoff Skill` · rjm: `Handoff syntax`
- **decision:** D-254
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-handoff-syntax-and-skill`
- **not to be confused with:** phase-boundary-decision-model, phase-boundary-transition

---

## D-255 — direct-invocation-pattern

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-orchestration-direct-invocation
- **preferences consulted:** PREFERENCES.md § Approach and § References prioritize minimal orchestration overhead for focused tasks; followed by adopting direct-invocation-pattern.

### Decision
The canonical term for this sequencing concept is `direct-invocation-pattern`. The direct invocation pattern is a single-persona execution model where a specialist skill or tool is called directly by the user or primary agent without intermediate coordinator routing.

### Adopted from
Addy `references/orchestration-patterns.md:11` for Direct invocation.

### Dropped
None (clean source pattern).

### Rejected alternatives
- direct-call (informal colloquialism)
- single-persona-mode (focuses on persona count rather than invocation topology)

### Evidence
Addy `references/orchestration-patterns.md:11`.

### Glossary
### direct-invocation-pattern

- **definition:** The direct invocation pattern is a single-persona execution model where a specialist skill or tool is called directly by the user or primary agent without intermediate coordinator routing.
- **kind:** pattern
- **source names:** addy: `Direct invocation` · matt: — · rjm: —
- **decision:** D-255
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-orchestration-direct-invocation`
- **not to be confused with:** parallel-fan-out-merge, meta-orchestrator-antipattern

---

## D-256 — parallel-fan-out-merge

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-orchestration-parallel-fan-out-merge
- **preferences consulted:** PREFERENCES.md § References highlights orchestration-patterns.md as critical; followed by adopting parallel-fan-out-merge.

### Decision
The canonical term for this sequencing concept is `parallel-fan-out-merge`. Parallel fan-out with merge is an orchestration pattern in which multiple specialist subagents run concurrently with isolated contexts on independent units or perspectives before their outputs are merged into a synthesized verdict.

### Adopted from
Addy `references/orchestration-patterns.md:48` for Parallel fan-out with merge; RJM `docs/workflow-commands.md:85` for multi-agent coordination.

### Dropped
RJM's missing-path and internal contradiction defects (D-006).

### Rejected alternatives
- fan-out-merge (lacks explicit parallel concurrency descriptor)
- multi-persona-review (too narrow; pattern applies to build and test extraction as well)

### Evidence
Addy `references/orchestration-patterns.md:48`; RJM `docs/workflow-commands.md:85`.

### Glossary
### parallel-fan-out-merge

- **definition:** Parallel fan-out with merge is an orchestration pattern in which multiple specialist subagents run concurrently with isolated contexts on independent units or perspectives before their outputs are merged into a synthesized verdict.
- **kind:** pattern
- **source names:** addy: `Parallel fan-out with merge` · matt: — · rjm: `Multi-Agent Orchestration System`
- **decision:** D-256
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-orchestration-parallel-fan-out-merge`
- **not to be confused with:** direct-invocation-pattern, meta-orchestrator-antipattern

---

## D-257 — orchestration-patterns-reference

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-orchestration-patterns-catalog
- **preferences consulted:** PREFERENCES.md § References explicitly names orchestration-patterns.md as one of the most important references to bring into brain; followed by adopting orchestration-patterns-reference.

### Decision
The canonical term for this sequencing concept is `orchestration-patterns-reference`. The orchestration patterns reference is an architectural specification documenting approved subagent dispatch topologies, communication constraints, and multi-agent coordination models.

### Adopted from
Addy `references/orchestration-patterns.md:1` for the master orchestration patterns catalog.

### Dropped
None (clean reference document).

### Rejected alternatives
- orchestration-doc (unprofessional abbreviation)
- orchestration-guide (informal; this is an architectural reference specification)

### Evidence
Addy `references/orchestration-patterns.md:1-120`.

### Glossary
### orchestration-patterns-reference

- **definition:** The orchestration patterns reference is an architectural specification documenting approved subagent dispatch topologies, communication constraints, and multi-agent coordination models.
- **kind:** reference
- **source names:** addy: `orchestration-patterns` · matt: — · rjm: —
- **decision:** D-257
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-orchestration-patterns-catalog`
- **not to be confused with:** orchestration-antipatterns-reference, parallel-fan-out-merge

---

## D-258 — meta-orchestrator-antipattern

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-antipattern-meta-orchestrator
- **preferences consulted:** PREFERENCES.md § References endorses Addy's orchestration rules; followed by proscribing the meta-orchestrator anti-pattern.

### Decision
The canonical term for this sequencing concept is `meta-orchestrator-antipattern`. The meta-orchestrator anti-pattern is an inefficient architecture where an intermediate agent persona serves solely to route tasks to other agents, introducing paraphrasing loss and unnecessary token consumption.

### Adopted from
Addy `references/orchestration-patterns.md:284` for Meta-orchestrator Anti-pattern A; RJM `.agents/architecture/ADR-064:65` for authority ordering.

### Dropped
None.

### Rejected alternatives
- router-persona (describes the component rather than classifying the anti-pattern)
- intermediate-orchestrator (euphemistic; fails to highlight anti-pattern status)

### Evidence
Addy `references/orchestration-patterns.md:284`; RJM `.agents/architecture/ADR-064:65`.

### Glossary
### meta-orchestrator-antipattern

- **definition:** The meta-orchestrator anti-pattern is an inefficient architecture where an intermediate agent persona serves solely to route tasks to other agents, introducing paraphrasing loss and unnecessary token consumption.
- **kind:** pattern
- **source names:** addy: `meta-orchestrator` · matt: — · rjm: —
- **decision:** D-258
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-antipattern-meta-orchestrator`
- **not to be confused with:** sequential-paraphrasing-antipattern, direct-invocation-pattern

---

## D-259 — sequential-paraphrasing-antipattern

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-antipattern-sequential-paraphrasing
- **preferences consulted:** PREFERENCES.md § Approach and § References mandate human-in-the-loop oversight at macro phase boundaries; followed by proscribing sequential paraphrasing.

### Decision
The canonical term for this sequencing concept is `sequential-paraphrasing-antipattern`. The sequential paraphrasing anti-pattern is an execution defect where an autonomous agent wraps and chains macro lifecycle commands sequentially on the user's behalf, obscuring underlying output and bypassing human gates.

### Adopted from
Addy `references/orchestration-patterns.md:316` for Anti-pattern C (Sequential orchestrator that paraphrases); RJM `docs/workflow-commands.md:98` for causal ordering.

### Dropped
None.

### Rejected alternatives
- autonomous-chaining (sounds like a desirable feature rather than an anti-pattern)
- paraphrasing-loss (names the defect symptom rather than the architectural anti-pattern)

### Evidence
Addy `references/orchestration-patterns.md:316`; RJM `docs/workflow-commands.md:98`.

### Glossary
### sequential-paraphrasing-antipattern

- **definition:** The sequential paraphrasing anti-pattern is an execution defect where an autonomous agent wraps and chains macro lifecycle commands sequentially on the user's behalf, obscuring underlying output and bypassing human gates.
- **kind:** pattern
- **source names:** addy: `Sequential orchestrator that paraphrases` · matt: — · rjm: —
- **decision:** D-259
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-antipattern-sequential-paraphrasing`
- **not to be confused with:** meta-orchestrator-antipattern, command-driven-workflow

---

## D-260 — orchestration-antipatterns-reference

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-antipattern-catalog
- **preferences consulted:** PREFERENCES.md § References endorses incorporating Addy's orchestration rules; followed by adopting orchestration-antipatterns-reference.

### Decision
The canonical term for this sequencing concept is `orchestration-antipatterns-reference`. The orchestration anti-patterns reference is a catalog of prohibited multi-agent design structures, including nested subagent hierarchies, router agents, and hidden conversational re-prompting.

### Adopted from
Addy `references/orchestration-patterns.md:280` for the orchestration anti-patterns catalog.

### Dropped
None.

### Rejected alternatives
- antipatterns-list (informal phrasing)
- orchestration-defects (confuses architectural anti-patterns with code bugs)

### Evidence
Addy `references/orchestration-patterns.md:280-350`.

### Glossary
### orchestration-antipatterns-reference

- **definition:** The orchestration anti-patterns reference is a catalog of prohibited multi-agent design structures, including nested subagent hierarchies, router agents, and hidden conversational re-prompting.
- **kind:** reference
- **source names:** addy: `orchestration anti-pattern` · matt: — · rjm: —
- **decision:** D-260
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-antipattern-catalog`
- **not to be confused with:** orchestration-patterns-reference, meta-orchestrator-antipattern

---

## D-261 — red-green-refactor-loop

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-loops-tdd-red-green-refactor
- **preferences consulted:** PREFERENCES.md § Approach favours Matt's crisp technique naming and Addy's rigorous TDD discipline; followed by adopting red-green-refactor-loop.

### Decision
The canonical term for this sequencing concept is `red-green-refactor-loop`. The red-green-refactor loop is a micro-implementation discipline requiring writing an automated failing test first, writing minimal code to make the test pass, and refactoring while keeping tests green.

### Adopted from
Matt `skills/engineering/tdd/SKILL.md:18` for the red-green-refactor loop; Addy `skills/test-driven-development/SKILL.md:12` for the TDD workflow; RJM `docs/workflow-commands.md:105` for closed-loop execution.

### Dropped
RJM's orphan defects (D-006).

### Rejected alternatives
- tdd-workflow (less evocative of the operational three-step loop)
- test-first-loop (omits the critical refactor step)

### Evidence
Addy `skills/test-driven-development/SKILL.md:12`; Matt `skills/engineering/tdd/SKILL.md:18`; RJM `docs/workflow-commands.md:105`.

### Glossary
### red-green-refactor-loop

- **definition:** The red-green-refactor loop is a micro-implementation discipline requiring writing an automated failing test first, writing minimal code to make the test pass, and refactoring while keeping tests green.
- **kind:** technique
- **source names:** addy: `TDD workflow` · matt: `red-green-refactor loop` · rjm: `closed-loop rule`
- **decision:** D-261
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-loops-tdd-red-green-refactor`
- **not to be confused with:** verification-feedback-loop, optimization-workflow

---

## D-262 — verification-feedback-loop

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-loops-feedback-loop-singular
- **preferences consulted:** PREFERENCES.md § Approach values empirical verification and tight feedback cycles; followed by adopting verification-feedback-loop.

### Decision
The canonical term for this sequencing concept is `verification-feedback-loop`. A verification feedback loop is an iterative diagnostic cycle in which code changes are immediately tested against deterministic verification commands to provide rapid correction signals.

### Adopted from
Addy `skills/verify/SKILL.md:15` for the verification loop; Matt `skills/engineering/diagnosing-bugs/SKILL.md:18` for the feedback loop; RJM `.claude/skills/review/SKILL.md:80` for self-improving loops.

### Dropped
Matt's doc-drift and over-triggering defects (D-006); RJM's internal contradictions.

### Rejected alternatives
- feedback-cycle (less standard than feedback loop)
- diagnostic-loop (confuses generic feedback with bug diagnosis specifically)

### Evidence
Addy `skills/verify/SKILL.md:15`; Matt `skills/engineering/diagnosing-bugs/SKILL.md:18`; RJM `.claude/skills/review/SKILL.md:80`.

### Glossary
### verification-feedback-loop

- **definition:** A verification feedback loop is an iterative diagnostic cycle in which code changes are immediately tested against deterministic verification commands to provide rapid correction signals.
- **kind:** pattern
- **source names:** addy: `verification loop` · matt: `feedback loop` · rjm: `self-improving loop`
- **decision:** D-262
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-loops-feedback-loop-singular`
- **not to be confused with:** red-green-refactor-loop, optimization-workflow

---

## D-263 — optimization-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-loops-optimization-workflow
- **preferences consulted:** PREFERENCES.md § References highlights performance-checklist.md and performance engineering; followed by adopting optimization-workflow.

### Decision
The canonical term for this sequencing concept is `optimization-workflow`. The optimization workflow is an empirical performance tuning cycle progressing through baseline measurement, profiling, surgical optimization, and regression verification.

### Adopted from
Addy `skills/performance-optimization/SKILL.md:18` for The Optimization Workflow.

### Dropped
None (clean source sequence).

### Rejected alternatives
- profiling-loop (too narrow; profiling is only stage two of four)
- performance-tuning-cycle (informal phrasing)

### Evidence
Addy `skills/performance-optimization/SKILL.md:18`.

### Glossary
### optimization-workflow

- **definition:** The optimization workflow is an empirical performance tuning cycle progressing through baseline measurement, profiling, surgical optimization, and regression verification.
- **kind:** pattern
- **source names:** addy: `The Optimization Workflow` · matt: — · rjm: —
- **decision:** D-263
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-loops-optimization-workflow`
- **not to be confused with:** verification-feedback-loop, red-green-refactor-loop

---

## D-264 — self-audit-round-cap

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-caps-self-audit-round-cap
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints mandate bounded costs and preventing runaway loops; followed by adopting self-audit-round-cap.

### Decision
The canonical term for this sequencing concept is `self-audit-round-cap`. The self-audit round cap is a hard limit capping automated review-and-fix iteration loops at three rounds maximum, requiring mandatory escalation to a human developer if unresolved.

### Adopted from
RJM `.claude/skills/review/SKILL.md:33` for the strict 3-round cap; Addy `references/orchestration-patterns.md:250` for loop engineering; Matt `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:1` for human-in-the-loop loops.

### Dropped
Matt's shell-script implementation per D-003 (pure Bun); RJM's doc-drift defects.

### Rejected alternatives
- retry-limit (too generic; applies to network retries)
- three-round-rule (informal colloquialism)

### Evidence
Addy `references/orchestration-patterns.md:250`; Matt `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:1`; RJM `.claude/skills/review/SKILL.md:33`.

### Glossary
### self-audit-round-cap

- **definition:** The self-audit round cap is a hard limit capping automated review-and-fix iteration loops at three rounds maximum, requiring mandatory escalation to a human developer if unresolved.
- **kind:** gate
- **source names:** addy: `Loop engineering` · matt: `hitl-loop.template.sh` · rjm: `Self-audit round cap`
- **decision:** D-264
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-caps-self-audit-round-cap`
- **not to be confused with:** human-in-the-loop-checkpoint, quality-gate-pipeline

---

## D-265 — human-in-the-loop-checkpoint

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-caps-human-in-the-loop
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints emphasize human judgment and authority; followed by adopting human-in-the-loop-checkpoint.

### Decision
The canonical term for this sequencing concept is `human-in-the-loop-checkpoint`. A human-in-the-loop checkpoint is a deliberate pause in autonomous execution requiring explicit human confirmation, direction, or approval before high-impact or destructive actions proceed.

### Adopted from
Matt `skills/engineering/diagnosing-bugs/SKILL.md:55` for human-in-the-loop checkpoints.

### Dropped
None.

### Rejected alternatives
- hitl (acronym; discouraged in canonical vocabulary)
- operator-gate (overly militaristic styling)

### Evidence
Matt `skills/engineering/diagnosing-bugs/SKILL.md:55`.

### Glossary
### human-in-the-loop-checkpoint

- **definition:** A human-in-the-loop checkpoint is a deliberate pause in autonomous execution requiring explicit human confirmation, direction, or approval before high-impact or destructive actions proceed.
- **kind:** pattern
- **source names:** addy: — · matt: `human-in-the-loop` · rjm: —
- **decision:** D-265
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-caps-human-in-the-loop`
- **not to be confused with:** self-audit-round-cap, phase-boundary-transition

---

## D-266 — topological-dependency-order

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-dag-dependency-order-topological
- **preferences consulted:** PREFERENCES.md § Approach values structured execution order and clean dependency handling; followed by adopting topological-dependency-order.

### Decision
The canonical term for this sequencing concept is `topological-dependency-order`. Topological dependency order is the linear scheduling sequence of work units derived from a directed acyclic graph to ensure all foundational components exist before dependent tasks execute.

### Adopted from
Addy `skills/planning-and-task-breakdown/SKILL.md:18` for dependency order; RJM `.agents/architecture/ADR-064:75` for Get-DecisionSequence.

### Dropped
RJM's unreleased PowerShell implementation in ReflexionMemory (D-006).

### Rejected alternatives
- topological-sort (algorithm name rather than the resulting lifecycle execution order)
- execution-order (too vague; fails to specify dependency derivation)

### Evidence
Addy `skills/planning-and-task-breakdown/SKILL.md:18`; RJM `.agents/architecture/ADR-064:75`.

### Glossary
### topological-dependency-order

- **definition:** Topological dependency order is the linear scheduling sequence of work units derived from a directed acyclic graph to ensure all foundational components exist before dependent tasks execute.
- **kind:** pattern
- **source names:** addy: `dependency order` · matt: — · rjm: `Get-DecisionSequence`
- **decision:** D-266
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-dependency-order-topological`
- **not to be confused with:** task-dependency-graph, task-prerequisites

---

## D-267 — task-dependency-graph

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-dag-dependency-graph
- **preferences consulted:** PREFERENCES.md § Approach supports rigorous task breakdown during planning; followed by adopting task-dependency-graph.

### Decision
The canonical term for this sequencing concept is `task-dependency-graph`. A task dependency graph is a directed acyclic model mapping relationships, prerequisites, and execution constraints among decomposed implementation tasks.

### Adopted from
Addy `skills/planning-and-task-breakdown/SKILL.md:25` for dependency graph; RJM `docs/workflow-commands.md:135` for workflow validation of DAG acyclicity.

### Dropped
RJM's doc-drift defects (D-006).

### Rejected alternatives
- dag-model (abbreviation; less explicit in codebase documentation)
- task-dag (informal slang)

### Evidence
Addy `skills/planning-and-task-breakdown/SKILL.md:25`; RJM `docs/workflow-commands.md:135`.

### Glossary
### task-dependency-graph

- **definition:** A task dependency graph is a directed acyclic model mapping relationships, prerequisites, and execution constraints among decomposed implementation tasks.
- **kind:** pattern
- **source names:** addy: `dependency graph` · matt: — · rjm: `Workflow Validation`
- **decision:** D-267
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-dependency-graph`
- **not to be confused with:** topological-dependency-order, task-prerequisites

---

## D-268 — shift-left-verification

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-dag-shift-left-lifecycle
- **preferences consulted:** PREFERENCES.md § Approach and § References favour catching bugs and vulnerabilities early; followed by adopting shift-left-verification.

### Decision
The canonical term for this sequencing concept is `shift-left-verification`. Shift-left verification is the architectural practice of moving quality, security, and performance assertions upstream into specification and planning phases to minimize remediation costs.

### Adopted from
Addy `skills/ci-cd-and-automation/SKILL.md:15` for Shift Left; RJM `docs/workflow-commands.md:142` for Shift-left security.

### Dropped
Addy's doc-drift defects (D-006).

### Rejected alternatives
- early-testing (informal phrasing; misses security and performance assertions)
- shift-left (unqualified phrasal verb)

### Evidence
Addy `skills/ci-cd-and-automation/SKILL.md:15`; RJM `docs/workflow-commands.md:142`.

### Glossary
### shift-left-verification

- **definition:** Shift-left verification is the architectural practice of moving quality, security, and performance assertions upstream into specification and planning phases to minimize remediation costs.
- **kind:** pattern
- **source names:** addy: `Shift Left` · matt: — · rjm: `Shift-left security`
- **decision:** D-268
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-shift-left-lifecycle`
- **not to be confused with:** quality-gate-pipeline, front-gate-prerequisite

---

## D-269 — atomic-commit-workflow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-dag-git-workflow-versioning
- **preferences consulted:** PREFERENCES.md § Approach requires clean git discipline and verifiable progress; followed by adopting atomic-commit-workflow.

### Decision
The canonical term for this sequencing concept is `atomic-commit-workflow`. The atomic commit workflow is a version control discipline creating small, focused (~100-line) commits with structured messages as checkpoints between discrete implementation tasks.

### Adopted from
Addy `skills/git-workflow-and-versioning/SKILL.md:1` for git-workflow-and-versioning.

### Dropped
Addy's cross-file contradiction defects between git-workflow and shipping (D-006).

### Rejected alternatives
- git-flow (names an external branching model rather than commit atomicity)
- micro-commit-discipline (less standard terminology)

### Evidence
Addy `skills/git-workflow-and-versioning/SKILL.md:1-40`.

### Glossary
### atomic-commit-workflow

- **definition:** The atomic commit workflow is a version control discipline creating small, focused (~100-line) commits with structured messages as checkpoints between discrete implementation tasks.
- **kind:** technique
- **source names:** addy: `git-workflow-and-versioning` · matt: — · rjm: —
- **decision:** D-269
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-git-workflow-versioning`
- **not to be confused with:** commit-message, working-increment

---

## D-270 — feature-flag-lifecycle

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-dag-feature-flag-lifecycle
- **preferences consulted:** PREFERENCES.md § Approach values controlled, safe shipping; followed by adopting feature-flag-lifecycle.

### Decision
The canonical term for this sequencing concept is `feature-flag-lifecycle`. The feature flag lifecycle is the release management progression governing flag creation, testing, gradual rollout, 100% enablement, and scheduled code cleanup.

### Adopted from
Addy `skills/shipping-and-launch/SKILL.md:22` for feature-flag lifecycle.

### Dropped
None (clean source lifecycle).

### Rejected alternatives
- flag-management (too broad; covers UI and database configuration rather than lifecycle)
- rollout-phases (narrower operational sub-step)

### Evidence
Addy `skills/shipping-and-launch/SKILL.md:22`.

### Glossary
### feature-flag-lifecycle

- **definition:** The feature flag lifecycle is the release management progression governing flag creation, testing, gradual rollout, 100% enablement, and scheduled code cleanup.
- **kind:** pattern
- **source names:** addy: `feature-flag lifecycle` · matt: — · rjm: —
- **decision:** D-270
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-feature-flag-lifecycle`
- **not to be confused with:** standard-feature-workflow, ship-phase

---

## D-271 — adr-state-lifecycle

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-dag-adr-lifecycle
- **preferences consulted:** PREFERENCES.md § References highlights documentation-and-adrs.md; followed by adopting adr-state-lifecycle.

### Decision
The canonical term for this sequencing concept is `adr-state-lifecycle`. The ADR state lifecycle is the formal progression governing architectural decision records through proposed, accepted, rejected, and superseded or deprecated states.

### Adopted from
Addy `skills/documentation-and-adrs/SKILL.md:18` for the ADR Lifecycle.

### Dropped
None (clean source lifecycle).

### Rejected alternatives
- adr-workflow (less specific regarding immutable state transitions)
- decision-states (describes the labels rather than the lifecycle state machine)

### Evidence
Addy `skills/documentation-and-adrs/SKILL.md:18`.

### Glossary
### adr-state-lifecycle

- **definition:** The ADR state lifecycle is the formal progression governing architectural decision records through proposed, accepted, rejected, and superseded or deprecated states.
- **kind:** pattern
- **source names:** addy: `ADR Lifecycle` · matt: — · rjm: —
- **decision:** D-271
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-adr-lifecycle`
- **not to be confused with:** architecture-decision-record, considered-options

---

## D-272 — review-thread-lifecycle

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 029
- **status:** active
- **supersedes:** —
- **resolves:** sequencing.md#sequencing-dag-thread-severity-lifecycle
- **preferences consulted:** PREFERENCES.md § Approach values accountable review remediation; followed by adopting review-thread-lifecycle.

### Decision
The canonical term for this sequencing concept is `review-thread-lifecycle`. The review thread lifecycle is the resolution sequence for pull request review comments categorizing severity (blocking vs non-blocking) and tracking findings from open to verified resolved.

### Adopted from
RJM `.claude/skills/review/references/thread-severity.md:1` for Thread Severity Classification and Lifecycle.

### Dropped
RJM's missing-path and internal contradiction defects (D-006).

### Rejected alternatives
- comment-lifecycle (too generic; comments can be general discussion rather than review findings)
- pr-thread-states (informal phrasing)

### Evidence
RJM `.claude/skills/review/references/thread-severity.md:1`.

### Glossary
### review-thread-lifecycle

- **definition:** The review thread lifecycle is the resolution sequence for pull request review comments categorizing severity (blocking vs non-blocking) and tracking findings from open to verified resolved.
- **kind:** pattern
- **source names:** addy: — · matt: — · rjm: `Thread Severity Classification and Lifecycle`
- **decision:** D-272
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-thread-severity-lifecycle`
- **not to be confused with:** review-phase, review-report

---

## D-273 — yagni

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#yagni
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `yagni`. YAGNI (You Aren't Gonna Need It) is a scoping filter and design discipline that eliminates speculative requirements, premature abstractions, and unneeded extension points during task planning and implementation.

### Adopted from
Matt `CHANGELOG.md:94`; RJM `.claude/commands/spec.md:151`.

### Dropped
rjm defects (defects: missing-path, internal-contradiction, cross-file-contradiction) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- yagni-practice (less specific than canonical technique name)
- generic-yagni (fails to reflect source methodology)

### Evidence
Matt `CHANGELOG.md:94`; RJM `.claude/commands/spec.md:151`.

### Glossary
### yagni

- **definition:** YAGNI (You Aren't Gonna Need It) is a scoping filter and design discipline that eliminates speculative requirements, premature abstractions, and unneeded extension points during task planning and implementation.
- **kind:** technique
- **source names:** addy: — · matt: `YAGNI scoping filter` · rjm: `YAGNI`
- **decision:** D-273
- **concordance:** `docs/analysis/concordance/techniques.md#yagni`

---

## D-274 — dialogue-driven-discovery

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#dialogue-driven-discovery
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `dialogue-driven-discovery`. Dialogue-driven discovery is an interactive elicitation technique that uncovers unstated user intent and architectural constraints through structured, one-question-at-a-time conversational interviews.

### Adopted from
Addy `skills/interview-me/SKILL.md:62`; Matt `docs/engineering/grill-with-docs.md:3`.

### Dropped
matt defects (defects: doc-drift (silent failure to write files when run inside external orchestration in docs/engineering/grill-with-docs.md:49), other (failure to load grilling and domain-modeling dependencies in docs/engineering/grill-with-docs.md:52)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- dialogue-driven-discovery-practice (less specific than canonical technique name)
- generic-dialogue-driven-discovery (fails to reflect source methodology)

### Evidence
Addy `skills/interview-me/SKILL.md:62`; Matt `docs/engineering/grill-with-docs.md:3`.

### Glossary
### dialogue-driven-discovery

- **definition:** Dialogue-driven discovery is an interactive elicitation technique that uncovers unstated user intent and architectural constraints through structured, one-question-at-a-time conversational interviews.
- **kind:** technique
- **source names:** addy: `one question at a time` · matt: `interview` · rjm: —
- **decision:** D-274
- **concordance:** `docs/analysis/concordance/techniques.md#dialogue-driven-discovery`

---

## D-275 — skill-discovery

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-skill-discovery
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `skill-discovery`. Skill discovery is the central dispatch mechanism in Addy's meta-skill architecture, matching incoming requests and current development phases against a structured decision tree to select the right skill from the 24-skill library.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:14`.

### Dropped
addy defects (defects: cross-file-contradiction, internal-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- skill-discovery-practice (less specific than canonical technique name)
- generic-skill-discovery (fails to reflect source methodology)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:14`.

### Glossary
### skill-discovery

- **definition:** Skill discovery is the central dispatch mechanism in Addy's meta-skill architecture, matching incoming requests and current development phases against a structured decision tree to select the right skill from the 24-skill library.
- **kind:** technique
- **source names:** addy: `Skill Discovery` · matt: — · rjm: —
- **decision:** D-275
- **concordance:** `docs/analysis/concordance/techniques.md#addy-skill-discovery`

---

## D-276 — scope-discipline-enforcement

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-maintain-scope-discipline
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `scope-discipline-enforcement`. Scope discipline enforcement is a discipline requiring surgical precision during edits, explicitly forbidding orthogonal cleanups, unsolicited refactoring, deleting unfamiliar comments, or adding unrequested features.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:99`.

### Dropped
addy defects (defects: cross-file-contradiction, internal-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- scope-discipline-enforcement-practice (less specific than canonical technique name)
- generic-scope-discipline (fails to reflect source methodology)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:99`.

### Glossary
### scope-discipline-enforcement

- **definition:** Scope discipline enforcement is a discipline requiring surgical precision during edits, explicitly forbidding orthogonal cleanups, unsolicited refactoring, deleting unfamiliar comments, or adding unrequested features.
- **kind:** technique
- **source names:** addy: `Maintain Scope Discipline` · matt: — · rjm: —
- **decision:** D-276
- **concordance:** `docs/analysis/concordance/techniques.md#addy-maintain-scope-discipline`

---

## D-277 — on-demand-skill-activation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-on-demand-skill-activation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `on-demand-skill-activation`. On demand skill activation is an engineering technique for on-demand skill activation enables natural-language intent routing, allowing coding agents to autonomously load relevant methodology skills when developers describe work rather than requiring explicit slash commands.

### Adopted from
Addy `docs/antigravity-setup.md:87`.

### Dropped
None (clean source technique).

### Rejected alternatives
- on-demand-skill-activation-practice (less specific than canonical technique name)
- generic-on-demand-skill-activation (fails to reflect source methodology)

### Evidence
Addy `docs/antigravity-setup.md:87`.

### Glossary
### on-demand-skill-activation

- **definition:** On demand skill activation is an engineering technique for on-demand skill activation enables natural-language intent routing, allowing coding agents to autonomously load relevant methodology skills when developers describe work rather than requiring explicit slash commands.
- **kind:** technique
- **source names:** addy: `On-Demand Skill Activation` · matt: — · rjm: —
- **decision:** D-277
- **concordance:** `docs/analysis/concordance/techniques.md#addy-on-demand-skill-activation`

---

## D-278 — discover-the-stack-first

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-discover-the-stack-first
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `discover-the-stack-first`. Discover the stack first is a preparatory technique mandating that agents inspect the repository's build system, checked-in wrappers, and CI configurations before invoking test commands. Without it, agents default to assumptions like `npm test` on non-Node repositories or invoke global binaries rather than project wrappers.

### Adopted from
Addy `skills/test-driven-development/SKILL.md:26`.

### Dropped
addy defects (defects: cross-file-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- discover-the-stack-first-practice (less specific than canonical technique name)
- generic-discover-the-stack-first (fails to reflect source methodology)

### Evidence
Addy `skills/test-driven-development/SKILL.md:26`.

### Glossary
### discover-the-stack-first

- **definition:** Discover the stack first is a preparatory technique mandating that agents inspect the repository's build system, checked-in wrappers, and CI configurations before invoking test commands. Without it, agents default to assumptions like `npm test` on non-Node repositories or invoke global binaries rather than project wrappers.
- **kind:** technique
- **source names:** addy: `Discover the Stack First` · matt: — · rjm: —
- **decision:** D-278
- **concordance:** `docs/analysis/concordance/techniques.md#addy-discover-the-stack-first`

---

## D-279 — constraints-guard

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-constraints-guard
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `constraints-guard`. Constraints guard is a diff inspection technique that guards against stealthy regressions where agents weaken thresholds, disable tests, or add linter suppressions to reach a green build.

### Adopted from
Addy `.gemini/commands/constraints.toml:30`.

### Dropped
None (clean source technique).

### Rejected alternatives
- constraints-guard-practice (less specific than canonical technique name)
- generic-constraints-guard (fails to reflect source methodology)

### Evidence
Addy `.gemini/commands/constraints.toml:30`.

### Glossary
### constraints-guard

- **definition:** Constraints guard is a diff inspection technique that guards against stealthy regressions where agents weaken thresholds, disable tests, or add linter suppressions to reach a green build.
- **kind:** technique
- **source names:** addy: `/constraints guard` · matt: — · rjm: —
- **decision:** D-279
- **concordance:** `docs/analysis/concordance/techniques.md#addy-constraints-guard`

---

## D-280 — agent-skill-dispatch-meta-pattern

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-using-agent-skills
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `agent-skill-dispatch-meta-pattern`. Agent skill dispatch meta pattern is an engineering technique that as the meta-skill of the addy pack, `using-agent-skills` acts as an operating system and router for AI coding agents. It pairs an algorithmic decision tree mapping development stages to specific skills with six mandatory operating behaviors (such as pushing back on bad ideas, enforcing simplicity, and verifying before claiming completion) to maintain engineering discipline across the entire lifecycle.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:10`.

### Dropped
addy defects (defects: cross-file-contradiction, internal-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- agent-skill-dispatch-meta-pattern-practice (less specific than canonical technique name)
- generic-agent-skill-dispatch-meta (fails to reflect source methodology)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:10`.

### Glossary
### agent-skill-dispatch-meta-pattern

- **definition:** Agent skill dispatch meta pattern is an engineering technique that as the meta-skill of the addy pack, `using-agent-skills` acts as an operating system and router for AI coding agents. It pairs an algorithmic decision tree mapping development stages to specific skills with six mandatory operating behaviors (such as pushing back on bad ideas, enforcing simplicity, and verifying before claiming completion) to maintain engineering discipline across the entire lifecycle.
- **kind:** technique
- **source names:** addy: `using-agent-skills` · matt: — · rjm: —
- **decision:** D-280
- **concordance:** `docs/analysis/concordance/techniques.md#addy-using-agent-skills`

---

## D-281 — tracer-bullet-vertical-slices

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-tracer-bullet-vertical-slices
- **preferences consulted:** PREFERENCES.md § Approach and § Depth prioritize thin vertical slices / tracer-bullet vertical slices; followed by adopting this scoped slicing technique.

### Decision
The canonical term for this technique is `tracer-bullet-vertical-slices`. Tracer bullet vertical slices is an engineering technique for tracer-bullet vertical slices prioritize building thin, end-to-end functional paths that prove integration across all architectural layers early, preventing the integration risks inherent in horizontal layer-by-layer development.

### Adopted from
Matt `CHANGELOG.md:183`.

### Dropped
None (clean source technique).

### Rejected alternatives
- tracer-bullet-vertical-slices-practice (less specific than canonical technique name)
- generic-tracer-bullet-vertical-slices (fails to reflect source methodology)

### Evidence
Matt `CHANGELOG.md:183`.

### Glossary
### tracer-bullet-vertical-slices

- **definition:** Tracer bullet vertical slices is an engineering technique for tracer-bullet vertical slices prioritize building thin, end-to-end functional paths that prove integration across all architectural layers early, preventing the integration risks inherent in horizontal layer-by-layer development.
- **kind:** technique
- **source names:** addy: — · matt: `tracer-bullet vertical slices` · rjm: —
- **decision:** D-281
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tracer-bullet-vertical-slices`

---

## D-282 — prompt-driven-skill-architecture

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-prompt-driven
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `prompt-driven-skill-architecture`. Prompt driven skill architecture is an engineering technique for prompt-driven skill architecture leverages the natural adaptability of large language models to re-scope skill execution on the fly, eliminating the overhead of dedicated CLI flags or redundant sibling commands.

### Adopted from
Matt `.out-of-scope/setup-skill-verify-mode.md:9`.

### Dropped
None (clean source technique).

### Rejected alternatives
- prompt-driven-skill-architecture-practice (less specific than canonical technique name)
- generic-prompt-driven-skill-architecture (fails to reflect source methodology)

### Evidence
Matt `.out-of-scope/setup-skill-verify-mode.md:9`.

### Glossary
### prompt-driven-skill-architecture

- **definition:** Prompt driven skill architecture is an engineering technique for prompt-driven skill architecture leverages the natural adaptability of large language models to re-scope skill execution on the fly, eliminating the overhead of dedicated CLI flags or redundant sibling commands.
- **kind:** technique
- **source names:** addy: — · matt: `prompt-driven` · rjm: —
- **decision:** D-282
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prompt-driven`

---

## D-283 — most-important-first

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-most-important-first
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `most-important-first`. Most important first is an async prioritization heuristic ensuring that if a busy stakeholder answers only the top few questions before disengaging, the most critical decision-blocking uncertainties are resolved first.

### Adopted from
Matt `docs/productivity/to-questionnaire.md:36`.

### Dropped
None (clean source technique).

### Rejected alternatives
- most-important-first-practice (less specific than canonical technique name)
- generic-most-important-first (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/to-questionnaire.md:36`.

### Glossary
### most-important-first

- **definition:** Most important first is an async prioritization heuristic ensuring that if a busy stakeholder answers only the top few questions before disengaging, the most critical decision-blocking uncertainties are resolved first.
- **kind:** technique
- **source names:** addy: — · matt: `most-important-first` · rjm: —
- **decision:** D-283
- **concordance:** `docs/analysis/concordance/techniques.md#matt-most-important-first`

---

## D-284 — hitl-capture-helper

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-capture
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `hitl-capture-helper`. Hitl capture helper is an interactive input helper in `hitl-loop.template.sh` that prompts the human operator for observation data and captures the reply into a variable. At loop completion, captured variables are printed as KEY=VALUE pairs for the invoking agent to parse.

### Adopted from
Matt `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:11`.

### Dropped
None (clean source technique).

### Rejected alternatives
- hitl-capture-helper-practice (less specific than canonical technique name)
- generic-hitl-capture (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:11`.

### Glossary
### hitl-capture-helper

- **definition:** Hitl capture helper is an interactive input helper in `hitl-loop.template.sh` that prompts the human operator for observation data and captures the reply into a variable. At loop completion, captured variables are printed as KEY=VALUE pairs for the invoking agent to parse.
- **kind:** technique
- **source names:** addy: — · matt: `capture` · rjm: —
- **decision:** D-284
- **concordance:** `docs/analysis/concordance/techniques.md#matt-capture`

---

## D-285 — exercise-skeleton-stubbing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-stubbing
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `exercise-skeleton-stubbing`. Exercise skeleton stubbing is a progressive authoring technique that scaffolds a full course skeleton with minimal valid placeholder files. Stubbing allows course designers to validate overall structure with linters before investing time in authoring detailed problem and solution content.

### Adopted from
Matt `skills/misc/scaffold-exercises/SKILL.md:25`.

### Dropped
None (clean source technique).

### Rejected alternatives
- exercise-skeleton-stubbing-practice (less specific than canonical technique name)
- generic-exercise-skeleton-stubbing (fails to reflect source methodology)

### Evidence
Matt `skills/misc/scaffold-exercises/SKILL.md:25`.

### Glossary
### exercise-skeleton-stubbing

- **definition:** Exercise skeleton stubbing is a progressive authoring technique that scaffolds a full course skeleton with minimal valid placeholder files. Stubbing allows course designers to validate overall structure with linters before investing time in authoring detailed problem and solution content.
- **kind:** technique
- **source names:** addy: — · matt: `stubbing` · rjm: —
- **decision:** D-285
- **concordance:** `docs/analysis/concordance/techniques.md#matt-stubbing`

---

## D-286 — implement-spec-orchestration

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-implement-spec
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `implement-spec-orchestration`. Implement spec orchestration is an experimental multi-agent orchestration skill residing in the in-progress bucket. It overcomes the limitation of single-ticket serial execution by modeling tickets as an acyclic task graph, launching concurrent implementer subagents across unblocked frontier tickets in isolated git worktrees, merging outputs via merger subagents, and culminating in a single verified pull request.

### Adopted from
Matt `.changeset/add-implement-spec-skill.md:5`.

### Dropped
None (clean source technique).

### Rejected alternatives
- implement-spec-orchestration-practice (less specific than canonical technique name)
- generic-implement-spec-orchestration (fails to reflect source methodology)

### Evidence
Matt `.changeset/add-implement-spec-skill.md:5`.

### Glossary
### implement-spec-orchestration

- **definition:** Implement spec orchestration is an experimental multi-agent orchestration skill residing in the in-progress bucket. It overcomes the limitation of single-ticket serial execution by modeling tickets as an acyclic task graph, launching concurrent implementer subagents across unblocked frontier tickets in isolated git worktrees, merging outputs via merger subagents, and culminating in a single verified pull request.
- **kind:** technique
- **source names:** addy: — · matt: `implement-spec` · rjm: —
- **decision:** D-286
- **concordance:** `docs/analysis/concordance/techniques.md#matt-implement-spec`

---

## D-287 — writing-great-skills

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-writing-great-skills
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `writing-great-skills`. Writing great skills is the original name of the `writing-for-agents` reference skill. It was renamed in v1.1 when practitioners realized that guidelines on information hierarchy, leading words, and pruning applied universally to all agent-facing text (such as AGENTS.md, specifications, and tickets) rather than just skill definitions.

### Adopted from
Matt `docs/productivity/writing-for-agents.md:7`.

### Dropped
None (clean source technique).

### Rejected alternatives
- writing-great-skills-practice (less specific than canonical technique name)
- generic-writing-great-skills (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/writing-for-agents.md:7`.

### Glossary
### writing-great-skills

- **definition:** Writing great skills is the original name of the `writing-for-agents` reference skill. It was renamed in v1.1 when practitioners realized that guidelines on information hierarchy, leading words, and pruning applied universally to all agent-facing text (such as AGENTS.md, specifications, and tickets) rather than just skill definitions.
- **kind:** technique
- **source names:** addy: — · matt: `writing-great-skills` · rjm: —
- **decision:** D-287
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-great-skills`

---

## D-288 — scaffold-exercises

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-scaffold-exercises
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `scaffold-exercises`. Scaffold exercises is a specialized course-authoring skill for scaffolding structured educational modules. It automates the generation of multi-variant exercise directories (`problem/`, `solution/`, `explainer/`) adhering to strict naming and linting conventions, ensuring that course repositories pass automated linter validation.

### Adopted from
Matt `skills/misc/scaffold-exercises/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- scaffold-exercises-practice (less specific than canonical technique name)
- generic-scaffold-exercises (fails to reflect source methodology)

### Evidence
Matt `skills/misc/scaffold-exercises/SKILL.md:3`.

### Glossary
### scaffold-exercises

- **definition:** Scaffold exercises is a specialized course-authoring skill for scaffolding structured educational modules. It automates the generation of multi-variant exercise directories (`problem/`, `solution/`, `explainer/`) adhering to strict naming and linting conventions, ensuring that course repositories pass automated linter validation.
- **kind:** technique
- **source names:** addy: — · matt: `scaffold-exercises` · rjm: —
- **decision:** D-288
- **concordance:** `docs/analysis/concordance/techniques.md#matt-scaffold-exercises`

---

## D-289 — prototype-exploration-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-the-prototype-skill
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `prototype-exploration-technique`. Prototype exploration technique is a shaping technique that resolves thorny design questions through disposable, runnable code rather than abstract conversational debate. By focusing strictly on answering one question, it prevents agents and developers from over-engineering unverified designs into production.

### Adopted from
Matt `external/prototype.md:24`.

### Dropped
matt defects (defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44 documents retaining prototypes on dedicated branches rather than deleting them), doc-drift (external/prototype.md:46 documents replacing terminal apps with HTML files), other (external/prototype.md:48 notes agents prematurely recommending prototyping for settled designs)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- prototype-exploration-technique-practice (less specific than canonical technique name)
- generic-prototype-exploration (fails to reflect source methodology)

### Evidence
Matt `external/prototype.md:24`.

### Glossary
### prototype-exploration-technique

- **definition:** Prototype exploration technique is a shaping technique that resolves thorny design questions through disposable, runnable code rather than abstract conversational debate. By focusing strictly on answering one question, it prevents agents and developers from over-engineering unverified designs into production.
- **kind:** technique
- **source names:** addy: — · matt: `The /prototype Skill` · rjm: —
- **decision:** D-289
- **concordance:** `docs/analysis/concordance/techniques.md#matt-the-prototype-skill`

---

## D-290 — scoping-decision-tree

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-decision-tree
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `scoping-decision-tree`. Scoping decision tree is the decision tree represents the structural branching of architectural and design choices that a grilling session systematically traverses to ensure all critical ambiguities are resolved before implementation begins.

### Adopted from
Matt `.out-of-scope/question-limits.md:7`.

### Dropped
None (clean source technique).

### Rejected alternatives
- scoping-decision-tree-practice (less specific than canonical technique name)
- generic-scoping-decision-tree (fails to reflect source methodology)

### Evidence
Matt `.out-of-scope/question-limits.md:7`.

### Glossary
### scoping-decision-tree

- **definition:** Scoping decision tree is the decision tree represents the structural branching of architectural and design choices that a grilling session systematically traverses to ensure all critical ambiguities are resolved before implementation begins.
- **kind:** technique
- **source names:** addy: — · matt: `decision tree` · rjm: —
- **decision:** D-290
- **concordance:** `docs/analysis/concordance/techniques.md#matt-decision-tree`

---

## D-291 — spike-prototyping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-prototype
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `spike-prototyping`. Spike prototyping is an empirical exploration technique in matt designed to break deadlocks during requirements gathering. When conversational inquiry cannot settle how a state machine behaves or how a screen feels, the developer detours to a prototype on an isolated branch. The code is written as deliberately throwaway—omitting tests, persistence, and abstractions—so that only the validated answer is preserved and folded into subsequent specifications.

### Adopted from
Matt `docs/engineering/prototype.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- spike-prototyping-practice (less specific than canonical technique name)
- generic-spike-prototyping (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/prototype.md:3`.

### Glossary
### spike-prototyping

- **definition:** Spike prototyping is an empirical exploration technique in matt designed to break deadlocks during requirements gathering. When conversational inquiry cannot settle how a state machine behaves or how a screen feels, the developer detours to a prototype on an isolated branch. The code is written as deliberately throwaway—omitting tests, persistence, and abstractions—so that only the validated answer is preserved and folded into subsequent specifications.
- **kind:** technique
- **source names:** addy: — · matt: `prototype` · rjm: —
- **decision:** D-291
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prototype`

---

## D-292 — relentless-interview

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-relentless-interview
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `relentless-interview`. Relentless interview is the core questioning technique employed by `grill-me` to stress-test designs and plans by recursively interrogating every branch of the design tree until all ambiguities and unexamined assumptions are resolved.

### Adopted from
Matt `skills/productivity/grill-me/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- relentless-interview-practice (less specific than canonical technique name)
- generic-relentless-interview (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/grill-me/SKILL.md:3`.

### Glossary
### relentless-interview

- **definition:** Relentless interview is the core questioning technique employed by `grill-me` to stress-test designs and plans by recursively interrogating every branch of the design tree until all ambiguities and unexamined assumptions are resolved.
- **kind:** technique
- **source names:** addy: — · matt: `relentless interview` · rjm: —
- **decision:** D-292
- **concordance:** `docs/analysis/concordance/techniques.md#matt-relentless-interview`

---

## D-293 — to-prd-synthesis

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-to-prd
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `to-prd-synthesis`. To prd synthesis is an engineering technique for `to-prd` was the predecessor skill name for `to-spec` in Matt's toolkit prior to version 1.1. It was retired and renamed to standardize the terminology around "spec" across the entire lifecycle rather than using PRD (Product Requirements Document), aligning the destination document with downstream tickets and test seam specifications.

### Adopted from
Matt `docs/engineering/to-spec.md:39`.

### Dropped
None (clean source technique).

### Rejected alternatives
- to-prd-synthesis-practice (less specific than canonical technique name)
- generic-to-prd (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/to-spec.md:39`.

### Glossary
### to-prd-synthesis

- **definition:** To prd synthesis is an engineering technique for `to-prd` was the predecessor skill name for `to-spec` in Matt's toolkit prior to version 1.1. It was retired and renamed to standardize the terminology around "spec" across the entire lifecycle rather than using PRD (Product Requirements Document), aligning the destination document with downstream tickets and test seam specifications.
- **kind:** technique
- **source names:** addy: — · matt: `to-prd` · rjm: —
- **decision:** D-293
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-prd`

---

## D-294 — to-spec-synthesis

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-to-spec
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `to-spec-synthesis`. To spec synthesis is an engineering technique that synthesizes decisions already made in conversation into a durable specification issue on the project's issue tracker. Designed under the principle that "specs are decision records, not questionnaires", it does not interview the user; instead, it records settled architecture, explicit user stories, implementation decisions, and testing seams so subsequent agent sessions can execute without context drift.

### Adopted from
Matt `.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7`.

### Dropped
matt defects (defects: missing-path (references `/setup-matt-pocock-skills` as a command path rather than a skill directory).) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- to-spec-synthesis-practice (less specific than canonical technique name)
- generic-to-spec (fails to reflect source methodology)

### Evidence
Matt `.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7`.

### Glossary
### to-spec-synthesis

- **definition:** To spec synthesis is an engineering technique that synthesizes decisions already made in conversation into a durable specification issue on the project's issue tracker. Designed under the principle that "specs are decision records, not questionnaires", it does not interview the user; instead, it records settled architecture, explicit user stories, implementation decisions, and testing seams so subsequent agent sessions can execute without context drift.
- **kind:** technique
- **source names:** addy: — · matt: `to-spec` · rjm: —
- **decision:** D-294
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-spec`

---

## D-295 — afk-research-investigation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-research
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `afk-research-investigation`. Research is an AFK investigation skill dedicated to uncovering external facts from primary sources. By delegating documentation and API verification to a background subagent, it prevents the primary conversational agent from hallucinating or guessing at external technical constraints.

### Adopted from
Matt `docs/engineering/research.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- afk-research-investigation-practice (less specific than canonical technique name)
- generic-afk-research-investigation (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/research.md:3`.

### Glossary
### afk-research-investigation

- **definition:** Research is an AFK investigation skill dedicated to uncovering external facts from primary sources. By delegating documentation and API verification to a background subagent, it prevents the primary conversational agent from hallucinating or guessing at external technical constraints.
- **kind:** technique
- **source names:** addy: — · matt: `research` · rjm: —
- **decision:** D-295
- **concordance:** `docs/analysis/concordance/techniques.md#matt-research`

---

## D-296 — interview-rounds-structure

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-rounds
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `interview-rounds-structure`. Interview rounds structure is an engineering technique for `rounds` structure the interactive interview loop in grilling. Rather than asking one question at a time (which is inefficient) or dumping all questions at once (which overwhelms users and asks questions whose prerequisites are unknown), grilling computes the frontier of currently answerable decisions and presents them in discrete, numbered rounds.

### Adopted from
Matt `skills/productivity/grilling/SKILL.md:8`.

### Dropped
None (clean source technique).

### Rejected alternatives
- interview-rounds-structure-practice (less specific than canonical technique name)
- generic-interview-rounds-structure (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/grilling/SKILL.md:8`.

### Glossary
### interview-rounds-structure

- **definition:** Interview rounds structure is an engineering technique for `rounds` structure the interactive interview loop in grilling. Rather than asking one question at a time (which is inefficient) or dumping all questions at once (which overwhelms users and asks questions whose prerequisites are unknown), grilling computes the frontier of currently answerable decisions and presents them in discrete, numbered rounds.
- **kind:** technique
- **source names:** addy: — · matt: `rounds` · rjm: —
- **decision:** D-296
- **concordance:** `docs/analysis/concordance/techniques.md#matt-rounds`

---

## D-297 — facts-elicitation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-facts
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `facts-elicitation`. Facts elicitation is an engineering technique for in Matt's grilling methodology, facts are empirical truths discoverable from the project environment. Agents are strictly forbidden from interrogating the user for information they can verify themselves; instead, they dispatch background subagents to locate facts, preserving human cognitive bandwidth solely for subjective decisions.

### Adopted from
Matt `skills/productivity/grilling/SKILL.md:26`.

### Dropped
matt defects (defects: orphan, doc-drift, other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- facts-elicitation-practice (less specific than canonical technique name)
- generic-facts-elicitation (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/grilling/SKILL.md:26`.

### Glossary
### facts-elicitation

- **definition:** Facts elicitation is an engineering technique for in Matt's grilling methodology, facts are empirical truths discoverable from the project environment. Agents are strictly forbidden from interrogating the user for information they can verify themselves; instead, they dispatch background subagents to locate facts, preserving human cognitive bandwidth solely for subjective decisions.
- **kind:** technique
- **source names:** addy: — · matt: `facts` · rjm: —
- **decision:** D-297
- **concordance:** `docs/analysis/concordance/techniques.md#matt-facts`

---

## D-298 — context-hygiene

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-context-hygiene
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `context-hygiene`. Context hygiene is a context management discipline in Matt Pocock's workflow that avoids resetting or compacting agent context between `/to-spec` and `/to-tickets`, ensuring the full specification is directly readable in memory rather than truncated during tracker API round-trips.

### Adopted from
Matt `external/to-spec.md:57`.

### Dropped
matt defects (defects: doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- context-hygiene-practice (less specific than canonical technique name)
- generic-context-hygiene (fails to reflect source methodology)

### Evidence
Matt `external/to-spec.md:57`.

### Glossary
### context-hygiene

- **definition:** Context hygiene is a context management discipline in Matt Pocock's workflow that avoids resetting or compacting agent context between `/to-spec` and `/to-tickets`, ensuring the full specification is directly readable in memory rather than truncated during tracker API round-trips.
- **kind:** technique
- **source names:** addy: — · matt: `context hygiene` · rjm: —
- **decision:** D-298
- **concordance:** `docs/analysis/concordance/techniques.md#matt-context-hygiene`

---

## D-299 — to-questionnaire

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-to-questionnaire
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `to-questionnaire`. To questionnaire is an engineering technique for to-questionnaire bridges the gap between autonomous development and human organizational reality. When progress stalls on unwritten domain knowledge, it packages the ambiguity into a structured, low-friction survey format that respects the stakeholder's time while forcing clear decision options.

### Adopted from
Matt `docs/productivity/to-questionnaire.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- to-questionnaire-practice (less specific than canonical technique name)
- generic-to-questionnaire (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/to-questionnaire.md:3`.

### Glossary
### to-questionnaire

- **definition:** To questionnaire is an engineering technique for to-questionnaire bridges the gap between autonomous development and human organizational reality. When progress stalls on unwritten domain knowledge, it packages the ambiguity into a structured, low-friction survey format that respects the stakeholder's time while forcing clear decision options.
- **kind:** technique
- **source names:** addy: — · matt: `to-questionnaire` · rjm: —
- **decision:** D-299
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-questionnaire`

---

## D-300 — blast-radius-containment

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#blast-radius-containment
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `blast-radius-containment`. Blast radius containment is an architectural isolation technique restricting the operational impact of potential subsystem failures or code refactors to strictly bounded component boundaries.

### Adopted from
Matt `skills/engineering/to-tickets/SKILL.md:40`; RJM `.claude/skills/chaos-experiment/SKILL.md:260`.

### Dropped
rjm defects (defects: doc-drift, missing-path) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- blast-radius-containment-practice (less specific than canonical technique name)
- generic-blast-radius-containment (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/to-tickets/SKILL.md:40`; RJM `.claude/skills/chaos-experiment/SKILL.md:260`.

### Glossary
### blast-radius-containment

- **definition:** Blast radius containment is an architectural isolation technique restricting the operational impact of potential subsystem failures or code refactors to strictly bounded component boundaries.
- **kind:** technique
- **source names:** addy: — · matt: `blast radius` · rjm: `Blast Radius Containment`
- **decision:** D-300
- **concordance:** `docs/analysis/concordance/techniques.md#blast-radius-containment`

---

## D-301 — thin-vertical-slices

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#vertical-slices
- **preferences consulted:** PREFERENCES.md § Approach and § Depth prioritize thin vertical slices / tracer-bullet vertical slices; followed by adopting this scoped slicing technique.

### Decision
The canonical term for this technique is `thin-vertical-slices`. Thin vertical slices is an end-to-end architectural implementation technique that builds fully functional, cross-layer functional paths demonstrating customer value rather than layer-by-layer horizontal scaffolding.

### Adopted from
Addy `external/api-and-interface-design.md:12`; Matt `skills/engineering/tdd/SKILL.md:32`; RJM `.claude/commands/build.md:2`.

### Dropped
addy defects (defects: doc-drift), matt defects (defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 red-green-refactor contradiction)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- thin-vertical-slices-practice (less specific than canonical technique name)
- generic-thin-vertical-slices (fails to reflect source methodology)

### Evidence
Addy `external/api-and-interface-design.md:12`; Matt `skills/engineering/tdd/SKILL.md:32`; RJM `.claude/commands/build.md:2`.

### Glossary
### thin-vertical-slices

- **definition:** Thin vertical slices is an end-to-end architectural implementation technique that builds fully functional, cross-layer functional paths demonstrating customer value rather than layer-by-layer horizontal scaffolding.
- **kind:** technique
- **source names:** addy: `thin vertical slices` · matt: `vertical slices` · rjm: `thin vertical slices`
- **decision:** D-301
- **concordance:** `docs/analysis/concordance/techniques.md#vertical-slices`

---

## D-302 — git-worktree-isolation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#git-worktrees
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `git-worktree-isolation`. Git worktree isolation is an execution environment management technique providing clean, separate filesystem working trees for parallel branch execution without repository switching overhead.

### Adopted from
Addy `skills/git-workflow-and-versioning/SKILL.md:147`; Matt `external/implement.md:52`; RJM `.claude/skills/git-advanced-workflows/SKILL.md:4`.

### Dropped
addy defects (defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)), matt defects (defects: orphan, doc-drift, cross-file-contradiction, other), rjm defects (defects: orphan) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- git-worktree-isolation-practice (less specific than canonical technique name)
- generic-git-worktree-isolation (fails to reflect source methodology)

### Evidence
Addy `skills/git-workflow-and-versioning/SKILL.md:147`; Matt `external/implement.md:52`; RJM `.claude/skills/git-advanced-workflows/SKILL.md:4`.

### Glossary
### git-worktree-isolation

- **definition:** Git worktree isolation is an execution environment management technique providing clean, separate filesystem working trees for parallel branch execution without repository switching overhead.
- **kind:** technique
- **source names:** addy: `Working with Worktrees` · matt: `worktrees` · rjm: `worktrees`
- **decision:** D-302
- **concordance:** `docs/analysis/concordance/techniques.md#git-worktrees`

---

## D-303 — integration-test

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-integration-test
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md and verification rigor; followed by adopting this testing technique.

### Decision
The canonical term for this technique is `integration-test`. Integration test is an integration test in Addy's test strategy corresponds to a Medium test size in the resource model (~15% of test suites) and validates behavior that crosses process or boundary layers like APIs, databases, or filesystems on localhost without external network dependencies.

### Adopted from
Addy `skills/test-driven-development/SKILL.md:181-182`.

### Dropped
addy defects (defects: cross-file-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- integration-test-practice (less specific than canonical technique name)
- generic-integration-test (fails to reflect source methodology)

### Evidence
Addy `skills/test-driven-development/SKILL.md:181-182`.

### Glossary
### integration-test

- **definition:** Integration test is an integration test in Addy's test strategy corresponds to a Medium test size in the resource model (~15% of test suites) and validates behavior that crosses process or boundary layers like APIs, databases, or filesystems on localhost without external network dependencies.
- **kind:** technique
- **source names:** addy: `Integration test` · matt: — · rjm: —
- **decision:** D-303
- **concordance:** `docs/analysis/concordance/techniques.md#addy-integration-test`

---

## D-304 — ubiquitous-language

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-ubiquitous-language
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `ubiquitous-language`. Ubiquitous language is an engineering technique that ubiquitous language in Matt's toolkit represents the shared domain vocabulary continuously sharpened and enforced across code, prompts, and conversation. It is maintained actively through `domain-modeling`, where terms are written inline into `CONTEXT.md` as soon as they are resolved, ensuring models and humans share identical conceptual boundaries without semantic drift.

### Adopted from
Matt `docs/engineering/domain-modeling.md:3`.

### Dropped
matt defects (defects: missing-path, other (runaway artifact bloat where models turn CONTEXT.md into a running spec instead of a lean ubiquitous language dictionary)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- ubiquitous-language-practice (less specific than canonical technique name)
- generic-ubiquitous-language (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/domain-modeling.md:3`.

### Glossary
### ubiquitous-language

- **definition:** Ubiquitous language is an engineering technique that ubiquitous language in Matt's toolkit represents the shared domain vocabulary continuously sharpened and enforced across code, prompts, and conversation. It is maintained actively through `domain-modeling`, where terms are written inline into `CONTEXT.md` as soon as they are resolved, ensuring models and humans share identical conceptual boundaries without semantic drift.
- **kind:** technique
- **source names:** addy: — · matt: `ubiquitous language` · rjm: —
- **decision:** D-304
- **concordance:** `docs/analysis/concordance/techniques.md#matt-ubiquitous-language`

---

## D-305 — domain-modeling

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-domain-modeling
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `domain-modeling`. Domain modeling is the active domain-driven design discipline in matt's ecosystem. Rather than passively reading existing documentation, it actively interrupts design conversations to challenge imprecise terms, enforce ubiquitous language, and record definitions in CONTEXT.md and ADRs at the moment they resolve.

### Adopted from
Matt `docs/engineering/domain-modeling.md:3`.

### Dropped
matt defects (defects: missing-path, other, internal-contradiction, doc-drift, orphan) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- domain-modeling-practice (less specific than canonical technique name)
- generic-domain-modeling (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/domain-modeling.md:3`.

### Glossary
### domain-modeling

- **definition:** Domain modeling is the active domain-driven design discipline in matt's ecosystem. Rather than passively reading existing documentation, it actively interrupts design conversations to challenge imprecise terms, enforce ubiquitous language, and record definitions in CONTEXT.md and ADRs at the moment they resolve.
- **kind:** technique
- **source names:** addy: — · matt: `domain-modeling` · rjm: —
- **decision:** D-305
- **concordance:** `docs/analysis/concordance/techniques.md#matt-domain-modeling`

---

## D-306 — seam-placement

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-seam-placement
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `seam-placement`. Seam placement is the explicit design choice of where to draw the boundary between a module's internal implementation and its external callers. In Design It Twice, seam placement is treated as its own first-class evaluation criterion—distinct from module depth and change locality—to ensure interfaces are drawn where boundaries naturally occur.

### Adopted from
Matt `skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42`.

### Dropped
None (clean source technique).

### Rejected alternatives
- seam-placement-practice (less specific than canonical technique name)
- generic-seam-placement (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/codebase-design/DESIGN-IT-TWICE.md:42`.

### Glossary
### seam-placement

- **definition:** Seam placement is the explicit design choice of where to draw the boundary between a module's internal implementation and its external callers. In Design It Twice, seam placement is treated as its own first-class evaluation criterion—distinct from module depth and change locality—to ensure interfaces are drawn where boundaries naturally occur.
- **kind:** technique
- **source names:** addy: — · matt: `seam placement` · rjm: —
- **decision:** D-306
- **concordance:** `docs/analysis/concordance/techniques.md#matt-seam-placement`

---

## D-307 — replace-don-t-layer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-replace-don-t-layer
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `replace-don-t-layer`. Replace don t layer is a testing strategy for module refactoring: when shallow modules are deepened into a cohesive deep module, developers must delete the old unit tests that targeted internal shallow components rather than keeping them as a redundant layer. Tests are rewritten at the deepened interface ("the interface is the test surface").

### Adopted from
Matt `skills/engineering/codebase-design/DEEPENING.md:32`.

### Dropped
None (clean source technique).

### Rejected alternatives
- replace-don-t-layer-practice (less specific than canonical technique name)
- generic-replace-don-t-layer (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/codebase-design/DEEPENING.md:32`.

### Glossary
### replace-don-t-layer

- **definition:** Replace don t layer is a testing strategy for module refactoring: when shallow modules are deepened into a cohesive deep module, developers must delete the old unit tests that targeted internal shallow components rather than keeping them as a redundant layer. Tests are rewritten at the deepened interface ("the interface is the test surface").
- **kind:** technique
- **source names:** addy: — · matt: `replace, don't layer` · rjm: —
- **decision:** D-307
- **concordance:** `docs/analysis/concordance/techniques.md#matt-replace-don-t-layer`

---

## D-308 — demo-path

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-demo-path
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `demo-path`. Demo path is a ticket authoring technique that requires defining an observable, demonstrable path through all layers of a change for every ticket, preventing models from defaulting to layer-by-layer horizontal partitioning.

### Adopted from
Matt `external/to-tickets.md:54`.

### Dropped
matt defects (defects: other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- demo-path-practice (less specific than canonical technique name)
- generic-demo-path (fails to reflect source methodology)

### Evidence
Matt `external/to-tickets.md:54`.

### Glossary
### demo-path

- **definition:** Demo path is a ticket authoring technique that requires defining an observable, demonstrable path through all layers of a change for every ticket, preventing models from defaulting to layer-by-layer horizontal partitioning.
- **kind:** technique
- **source names:** addy: — · matt: `demo path` · rjm: —
- **decision:** D-308
- **concordance:** `docs/analysis/concordance/techniques.md#matt-demo-path`

---

## D-309 — red-green-slice

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-red-green-slice
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `red-green-slice`. Red green slice is a red-green slice is the micro-iteration technique within implement where TDD is driven in minimal atomic steps: one failing test followed by only enough code to pass it, explicitly avoiding speculative code or batch test generation.

### Adopted from
Matt `docs/engineering/implement.md:36`.

### Dropped
None (clean source technique).

### Rejected alternatives
- red-green-slice-practice (less specific than canonical technique name)
- generic-red-green-slice (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/implement.md:36`.

### Glossary
### red-green-slice

- **definition:** Red green slice is a red-green slice is the micro-iteration technique within implement where TDD is driven in minimal atomic steps: one failing test followed by only enough code to pass it, explicitly avoiding speculative code or batch test generation.
- **kind:** technique
- **source names:** addy: — · matt: `red-green slice` · rjm: —
- **decision:** D-309
- **concordance:** `docs/analysis/concordance/techniques.md#matt-red-green-slice`

---

## D-310 — one-slice-at-a-time

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-one-slice-at-a-time
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `one-slice-at-a-time`. One slice at a time is an engineering technique that enforces strict atomicity in TDD execution: exactly one seam, one test, and one minimal implementation per cycle. This prevents agents and human developers from accumulating unverified code or over-committing to complex architectures before seeing concrete tests pass, ensuring steady, predictable progress.

### Adopted from
Matt `skills/engineering/tdd/SKILL.md:37`.

### Dropped
matt defects (defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 red-green-refactor contradiction)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- one-slice-at-a-time-practice (less specific than canonical technique name)
- generic-one-slice-at-a-time (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/tdd/SKILL.md:37`.

### Glossary
### one-slice-at-a-time

- **definition:** One slice at a time is an engineering technique that enforces strict atomicity in TDD execution: exactly one seam, one test, and one minimal implementation per cycle. This prevents agents and human developers from accumulating unverified code or over-committing to complex architectures before seeing concrete tests pass, ensuring steady, predictable progress.
- **kind:** technique
- **source names:** addy: — · matt: `One slice at a time` · rjm: —
- **decision:** D-310
- **concordance:** `docs/analysis/concordance/techniques.md#matt-one-slice-at-a-time`

---

## D-311 — native-blocking-edges

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-native-blocking-edges
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `native-blocking-edges`. Native blocking edges is an engineering technique for native blocking edges represent prerequisite constraints directly within the issue tracking engine, ensuring that tasks cannot be picked up until their dependencies are completed.

### Adopted from
Matt `CHANGELOG.md:185`.

### Dropped
matt defects (defects: doc-drift (external/to-tickets.md:58 records issues being created without native blocking edges; issue #513)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- native-blocking-edges-practice (less specific than canonical technique name)
- generic-native-blocking-edges (fails to reflect source methodology)

### Evidence
Matt `CHANGELOG.md:185`.

### Glossary
### native-blocking-edges

- **definition:** Native blocking edges is an engineering technique for native blocking edges represent prerequisite constraints directly within the issue tracking engine, ensuring that tasks cannot be picked up until their dependencies are completed.
- **kind:** technique
- **source names:** addy: — · matt: `native blocking edges` · rjm: —
- **decision:** D-311
- **concordance:** `docs/analysis/concordance/techniques.md#matt-native-blocking-edges`

---

## D-312 — improve-codebase-architecture

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-improve-codebase-architecture
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `improve-codebase-architecture`. Improve codebase architecture is an architectural survey skill that identifies opportunities to turn shallow modules into deep modules (hiding complexity behind simpler interfaces). Applying Ousterhout's philosophy and a strict "deletion test" (concentrating vs. spreading complexity), it acts as an advisory survey producing an external HTML report and interactive dialogue, deliberately leaving code modification to subsequent separate sessions.

### Adopted from
Matt `docs/engineering/improve-codebase-architecture.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- improve-codebase-architecture-practice (less specific than canonical technique name)
- generic-improve-codebase-architecture (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/improve-codebase-architecture.md:3`.

### Glossary
### improve-codebase-architecture

- **definition:** Improve codebase architecture is an architectural survey skill that identifies opportunities to turn shallow modules into deep modules (hiding complexity behind simpler interfaces). Applying Ousterhout's philosophy and a strict "deletion test" (concentrating vs. spreading complexity), it acts as an advisory survey producing an external HTML report and interactive dialogue, deliberately leaving code modification to subsequent separate sessions.
- **kind:** technique
- **source names:** addy: — · matt: `improve-codebase-architecture` · rjm: —
- **decision:** D-312
- **concordance:** `docs/analysis/concordance/techniques.md#matt-improve-codebase-architecture`

---

## D-313 — tracer-bullet

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-tracer-bullet
- **preferences consulted:** PREFERENCES.md § Approach and § Depth prioritize thin vertical slices / tracer-bullet vertical slices; followed by adopting this scoped slicing technique.

### Decision
The canonical term for this technique is `tracer-bullet`. Tracer bullet is a core decomposition principle in Matt Pocock's methodology where units of work cut vertically through every layer of the system (database, domain logic, API, UI, tests) rather than horizontally by technical tier. Each tracer bullet proves an end-to-end path immediately, enabling continuous validation and sizing work to fit safely inside a single fresh context window.

### Adopted from
Matt `docs/engineering/to-tickets.md:5`.

### Dropped
None (clean source technique).

### Rejected alternatives
- tracer-bullet-practice (less specific than canonical technique name)
- generic-tracer-bullet (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/to-tickets.md:5`.

### Glossary
### tracer-bullet

- **definition:** Tracer bullet is a core decomposition principle in Matt Pocock's methodology where units of work cut vertically through every layer of the system (database, domain logic, API, UI, tests) rather than horizontally by technical tier. Each tracer bullet proves an end-to-end path immediately, enabling continuous validation and sizing work to fit safely inside a single fresh context window.
- **kind:** technique
- **source names:** addy: — · matt: `tracer bullet` · rjm: —
- **decision:** D-313
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tracer-bullet`

---

## D-314 — teaching-decision

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-teaching-decision
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `teaching-decision`. Teaching decision is a teaching decision represents any pedagogical choice made by the agent—determining next topic, selecting resources, or designing exercises. The package requires all such decisions to be anchored in MISSION.md, ensuring that learning activities remain tightly coupled to the user's real-world outcome rather than arbitrary curriculum progression.

### Adopted from
Matt `skills/productivity/teach/MISSION-FORMAT.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- teaching-decision-practice (less specific than canonical technique name)
- generic-teaching-decision (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/teach/MISSION-FORMAT.md:3`.

### Glossary
### teaching-decision

- **definition:** Teaching decision is a teaching decision represents any pedagogical choice made by the agent—determining next topic, selecting resources, or designing exercises. The package requires all such decisions to be anchored in MISSION.md, ensuring that learning activities remain tightly coupled to the user's real-world outcome rather than arbitrary curriculum progression.
- **kind:** technique
- **source names:** addy: — · matt: `teaching decision` · rjm: —
- **decision:** D-314
- **concordance:** `docs/analysis/concordance/techniques.md#matt-teaching-decision`

---

## D-315 — anti-rationalization-guards

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-anti-rationalization-guards
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `anti-rationalization-guards`. Anti rationalization guards is an engineering technique for anti-rationalization guards explicitly enumerate common cognitive excuses coding agents use to skip tests or reviews, proactively dismantling these rationalizations before the agent can act on them.

### Adopted from
Addy `docs/comparison.md:11`.

### Dropped
None (clean source technique).

### Rejected alternatives
- anti-rationalization-guards-practice (less specific than canonical technique name)
- generic-anti-rationalization-guards (fails to reflect source methodology)

### Evidence
Addy `docs/comparison.md:11`.

### Glossary
### anti-rationalization-guards

- **definition:** Anti rationalization guards is an engineering technique for anti-rationalization guards explicitly enumerate common cognitive excuses coding agents use to skip tests or reviews, proactively dismantling these rationalizations before the agent can act on them.
- **kind:** technique
- **source names:** addy: `anti-rationalization guards` · matt: — · rjm: —
- **decision:** D-315
- **concordance:** `docs/analysis/concordance/techniques.md#addy-anti-rationalization-guards`

---

## D-316 — to-tickets

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-to-tickets
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `to-tickets`. To tickets is an engineering technique that breaks complex specifications or plans into independently buildable and verifiable vertical slices ("tracer bullets"). By enforcing vertical cuts through all architecture layers (rather than horizontal slicing by layer) and capturing explicit dependency edges, it generates tasks optimized for single-session agent execution without mid-task blocked states.

### Adopted from
Matt `.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7`.

### Dropped
matt defects (defects: missing-path (cites non-existent `commands/setup-matt-pocock-skills.md` in skill body).) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- to-tickets-practice (less specific than canonical technique name)
- generic-to-tickets (fails to reflect source methodology)

### Evidence
Matt `.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:7`.

### Glossary
### to-tickets

- **definition:** To tickets is an engineering technique that breaks complex specifications or plans into independently buildable and verifiable vertical slices ("tracer bullets"). By enforcing vertical cuts through all architecture layers (rather than horizontal slicing by layer) and capturing explicit dependency edges, it generates tasks optimized for single-session agent execution without mid-task blocked states.
- **kind:** technique
- **source names:** addy: — · matt: `to-tickets` · rjm: —
- **decision:** D-316
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-tickets`

---

## D-317 — perf-branch

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-perf-branch
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `perf-branch`. Perf branch is a specialized diagnostic branch in the bug diagnosis workflow that prescribes baseline measurement and bisection instead of log-based debugging for performance regressions.

### Adopted from
Matt `skills/engineering/diagnosing-bugs/SKILL.md:112`.

### Dropped
None (clean source technique).

### Rejected alternatives
- perf-branch-practice (less specific than canonical technique name)
- generic-perf-branch (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/diagnosing-bugs/SKILL.md:112`.

### Glossary
### perf-branch

- **definition:** Perf branch is a specialized diagnostic branch in the bug diagnosis workflow that prescribes baseline measurement and bisection instead of log-based debugging for performance regressions.
- **kind:** technique
- **source names:** addy: — · matt: `Perf branch` · rjm: —
- **decision:** D-317
- **concordance:** `docs/analysis/concordance/techniques.md#matt-perf-branch`

---

## D-318 — prefactoring

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-prefactoring
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `prefactoring`. Prefactoring is the practice of refactoring existing code prior to introducing new features, adhering to Kent Beck's maxim: "Make the change easy, then make the easy change." In `to-tickets`, prefactoring tickets are scheduled first in the dependency graph so that architectural friction is eliminated in standalone, behavior-preserving commits before behavioral feature tickets are attempted.

### Adopted from
Matt `docs/engineering/to-tickets.md:31`.

### Dropped
None (clean source technique).

### Rejected alternatives
- prefactoring-practice (less specific than canonical technique name)
- generic-prefactoring (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/to-tickets.md:31`.

### Glossary
### prefactoring

- **definition:** Prefactoring is the practice of refactoring existing code prior to introducing new features, adhering to Kent Beck's maxim: "Make the change easy, then make the easy change." In `to-tickets`, prefactoring tickets are scheduled first in the dependency graph so that architectural friction is eliminated in standalone, behavior-preserving commits before behavioral feature tickets are attempted.
- **kind:** technique
- **source names:** addy: — · matt: `prefactoring` · rjm: —
- **decision:** D-318
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prefactoring`

---

## D-319 — incremental-implementation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#incremental-implementation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `incremental-implementation`. Incremental implementation is an iterative engineering technique that breaks tasks into small, test-verified diffs committing working code continuously with immediate regression feedback.

### Adopted from
Addy `README.md:249`; Matt `docs/engineering/implement.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- incremental-implementation-practice (less specific than canonical technique name)
- generic-incremental-implementation (fails to reflect source methodology)

### Evidence
Addy `README.md:249`; Matt `docs/engineering/implement.md:3`.

### Glossary
### incremental-implementation

- **definition:** Incremental implementation is an iterative engineering technique that breaks tasks into small, test-verified diffs committing working code continuously with immediate regression feedback.
- **kind:** technique
- **source names:** addy: `incremental-implementation` · matt: `implement` · rjm: —
- **decision:** D-319
- **concordance:** `docs/analysis/concordance/techniques.md#incremental-implementation`

---

## D-320 — surface-assumptions

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-surface-assumptions
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `surface-assumptions`. Surface assumptions is an operational guardrail requiring agents to explicitly enumerate their assumptions about requirements, architecture, and scope before writing code, preventing costly rework caused by silent, unchecked misunderstandings.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:51`.

### Dropped
addy defects (defects: cross-file-contradiction, internal-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- surface-assumptions-practice (less specific than canonical technique name)
- generic-surface-assumptions (fails to reflect source methodology)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:51`.

### Glossary
### surface-assumptions

- **definition:** Surface assumptions is an operational guardrail requiring agents to explicitly enumerate their assumptions about requirements, architecture, and scope before writing code, preventing costly rework caused by silent, unchecked misunderstandings.
- **kind:** technique
- **source names:** addy: `Surface Assumptions` · matt: — · rjm: —
- **decision:** D-320
- **concordance:** `docs/analysis/concordance/techniques.md#addy-surface-assumptions`

---

## D-321 — push-back-when-warranted

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-push-back-when-warranted
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `push-back-when-warranted`. Push back when warranted is an anti-sycophancy directive instructing agents to voice honest technical objections and provide quantified tradeoffs when a proposed approach is flawed, prioritizing genuine software quality over agreeable compliance.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:75`.

### Dropped
addy defects (defects: cross-file-contradiction, internal-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- push-back-when-warranted-practice (less specific than canonical technique name)
- generic-push-back-when-warranted (fails to reflect source methodology)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:75`.

### Glossary
### push-back-when-warranted

- **definition:** Push back when warranted is an anti-sycophancy directive instructing agents to voice honest technical objections and provide quantified tradeoffs when a proposed approach is flawed, prioritizing genuine software quality over agreeable compliance.
- **kind:** technique
- **source names:** addy: `Push Back When Warranted` · matt: — · rjm: —
- **decision:** D-321
- **concordance:** `docs/analysis/concordance/techniques.md#addy-push-back-when-warranted`

---

## D-322 — worktree

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-worktree
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `worktree`. Worktree is the git worktree isolation mechanism used by implement-spec to enable concurrent background subagent execution. Allocating an independent worktree to each implementer subagent prevents git lock contention, working directory collisions, and intermediate state interference during parallel ticket execution.

### Adopted from
Matt `skills/in-progress/implement-spec/SKILL.md:25`.

### Dropped
None (clean source technique).

### Rejected alternatives
- worktree-practice (less specific than canonical technique name)
- generic-worktree (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/implement-spec/SKILL.md:25`.

### Glossary
### worktree

- **definition:** Worktree is the git worktree isolation mechanism used by implement-spec to enable concurrent background subagent execution. Allocating an independent worktree to each implementer subagent prevents git lock contention, working directory collisions, and intermediate state interference during parallel ticket execution.
- **kind:** technique
- **source names:** addy: — · matt: `worktree` · rjm: —
- **decision:** D-322
- **concordance:** `docs/analysis/concordance/techniques.md#matt-worktree`

---

## D-323 — replayed-capture

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-replayed-capture
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `replayed-capture`. Replayed capture is a diagnostic technique that isolates bugs by re-running saved production artifacts through code paths in local isolation. It avoids the friction of mocking complex upstream dependencies while retaining realistic error triggers.

### Adopted from
Matt `external/diagnosing-bugs.md:38`.

### Dropped
None (clean source technique).

### Rejected alternatives
- replayed-capture-practice (less specific than canonical technique name)
- generic-replayed-capture (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:38`.

### Glossary
### replayed-capture

- **definition:** Replayed capture is a diagnostic technique that isolates bugs by re-running saved production artifacts through code paths in local isolation. It avoids the friction of mocking complex upstream dependencies while retaining realistic error triggers.
- **kind:** technique
- **source names:** addy: — · matt: `replayed capture` · rjm: —
- **decision:** D-323
- **concordance:** `docs/analysis/concordance/techniques.md#matt-replayed-capture`

---

## D-324 — context-pointers

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-context-pointers
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `context-pointers`. Context pointers is the foundational architectural mechanism for managing LLM context windows. By placing concise, high-salience pointers in persistent context that specify when and why to load external documents, agents can navigate deep project knowledge without saturating working memory.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL.md:12`.

### Dropped
None (clean source technique).

### Rejected alternatives
- context-pointers-practice (less specific than canonical technique name)
- generic-context-pointers (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:12`.

### Glossary
### context-pointers

- **definition:** Context pointers is the foundational architectural mechanism for managing LLM context windows. By placing concise, high-salience pointers in persistent context that specify when and why to load external documents, agents can navigate deep project knowledge without saturating working memory.
- **kind:** technique
- **source names:** addy: — · matt: `Context pointers` · rjm: —
- **decision:** D-324
- **concordance:** `docs/analysis/concordance/techniques.md#matt-context-pointers`

---

## D-325 — recommendation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-recommendation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `recommendation`. Recommendation is the recommendation technique requires the agent to propose a concrete, reasoned answer alongside every question it poses. This accelerates human decision-making by allowing users to answer by number ("1 yes, 2 second option") rather than drafting detailed responses from scratch.

### Adopted from
Matt `external/grilling.md:34`.

### Dropped
matt defects (defects: orphan, doc-drift, other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- recommendation-practice (less specific than canonical technique name)
- generic-recommendation (fails to reflect source methodology)

### Evidence
Matt `external/grilling.md:34`.

### Glossary
### recommendation

- **definition:** Recommendation is the recommendation technique requires the agent to propose a concrete, reasoned answer alongside every question it poses. This accelerates human decision-making by allowing users to answer by number ("1 yes, 2 second option") rather than drafting detailed responses from scratch.
- **kind:** technique
- **source names:** addy: — · matt: `recommendation` · rjm: —
- **decision:** D-325
- **concordance:** `docs/analysis/concordance/techniques.md#matt-recommendation`

---

## D-326 — red-green

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-red-green
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `red-green`. Red green is an engineering technique for `Red-green` is Matt's streamlined adaptation of classical test-driven development for AI coding agents. Observing that agents routinely fail to execute nuanced refactorings in the middle of implementation, Matt's lifecycle explicitly decouples the red-green authoring loop from refactoring. Developers and agents write a failing test and just enough code to satisfy it, deferring code cleanup and architectural refactoring to a dedicated `code-review` session.

### Adopted from
Matt `docs/engineering/tdd.md:31`.

### Dropped
matt defects (defects: doc-drift (docs/engineering/tdd.md:51 where the skill description still promises "red-green-refactor" while the execution loop has been streamlined to red-green)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- red-green-practice (less specific than canonical technique name)
- generic-red-green (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/tdd.md:31`.

### Glossary
### red-green

- **definition:** Red green is an engineering technique for `Red-green` is Matt's streamlined adaptation of classical test-driven development for AI coding agents. Observing that agents routinely fail to execute nuanced refactorings in the middle of implementation, Matt's lifecycle explicitly decouples the red-green authoring loop from refactoring. Developers and agents write a failing test and just enough code to satisfy it, deferring code cleanup and architectural refactoring to a dedicated `code-review` session.
- **kind:** technique
- **source names:** addy: — · matt: `Red-green` · rjm: —
- **decision:** D-326
- **concordance:** `docs/analysis/concordance/techniques.md#matt-red-green`

---

## D-327 — background-worktrees

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-background-worktrees
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `background-worktrees`. Background worktrees is the filesystem and version control isolation technique enabling parallel agent execution. Running multiple autonomous agents in a single shared checkout leads to git index lock errors, HEAD contention, and stash collisions; background worktrees give each subagent an independent working tree linked to the same repository.

### Adopted from
Matt `.changeset/add-implement-spec-skill.md:5`.

### Dropped
None (clean source technique).

### Rejected alternatives
- background-worktrees-practice (less specific than canonical technique name)
- generic-background-worktrees (fails to reflect source methodology)

### Evidence
Matt `.changeset/add-implement-spec-skill.md:5`.

### Glossary
### background-worktrees

- **definition:** Background worktrees is the filesystem and version control isolation technique enabling parallel agent execution. Running multiple autonomous agents in a single shared checkout leads to git index lock errors, HEAD contention, and stash collisions; background worktrees give each subagent an independent working tree linked to the same repository.
- **kind:** technique
- **source names:** addy: — · matt: `background worktrees` · rjm: —
- **decision:** D-327
- **concordance:** `docs/analysis/concordance/techniques.md#matt-background-worktrees`

---

## D-328 — variant

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-variant
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `variant`. Variant is a query-parameter switching technique that enables rapid switching between radically different UI layout prototypes on a single production route, ensuring variants are evaluated against real layout density and live data rather than in an isolated vacuum.

### Adopted from
Matt `external/prototype.md:35`.

### Dropped
matt defects (defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- variant-practice (less specific than canonical technique name)
- generic-variant (fails to reflect source methodology)

### Evidence
Matt `external/prototype.md:35`.

### Glossary
### variant

- **definition:** Variant is a query-parameter switching technique that enables rapid switching between radically different UI layout prototypes on a single production route, ensuring variants are evaluated against real layout density and live data rather than in an isolated vacuum.
- **kind:** technique
- **source names:** addy: — · matt: `?variant=` · rjm: —
- **decision:** D-328
- **concordance:** `docs/analysis/concordance/techniques.md#matt-variant`

---

## D-329 — depth-as-leverage

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-depth-as-leverage
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `depth-as-leverage`. Depth as leverage is an architectural evaluation technique in Matt Pocock's codebase-design framework. While John Ousterhout originally defined module depth as the ratio of lines of implementation code to lines of interface specification, codebase-design rejects that formula because it incentivizes bloated implementations. Instead, depth-as-leverage defines depth as the amount of capability, safety, and functionality callers or tests can exercise per unit of interface surface they must learn.

### Adopted from
Matt `external/codebase-design.md:35`.

### Dropped
None (clean source technique).

### Rejected alternatives
- depth-as-leverage-practice (less specific than canonical technique name)
- generic-depth-as-leverage (fails to reflect source methodology)

### Evidence
Matt `external/codebase-design.md:35`.

### Glossary
### depth-as-leverage

- **definition:** Depth as leverage is an architectural evaluation technique in Matt Pocock's codebase-design framework. While John Ousterhout originally defined module depth as the ratio of lines of implementation code to lines of interface specification, codebase-design rejects that formula because it incentivizes bloated implementations. Instead, depth-as-leverage defines depth as the amount of capability, safety, and functionality callers or tests can exercise per unit of interface surface they must learn.
- **kind:** technique
- **source names:** addy: — · matt: `depth-as-leverage` · rjm: —
- **decision:** D-329
- **concordance:** `docs/analysis/concordance/techniques.md#matt-depth-as-leverage`

---

## D-330 — codebase-terminology

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-codebase-terminology
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `codebase-terminology`. Codebase terminology is an engineering technique for in Matt's toolkit, codebase terminology represents the shared vocabulary and naming conventions embedded within project code and documentation. Triggering domain-modeling on discussions of codebase terminology ensures that ambiguous or overloaded terms are pinned down and recorded inline in CONTEXT.md before code is written.

### Adopted from
Matt `.changeset/domain-modeling-trigger-context-adr.md:5`.

### Dropped
None (clean source technique).

### Rejected alternatives
- codebase-terminology-practice (less specific than canonical technique name)
- generic-codebase-terminology (fails to reflect source methodology)

### Evidence
Matt `.changeset/domain-modeling-trigger-context-adr.md:5`.

### Glossary
### codebase-terminology

- **definition:** Codebase terminology is an engineering technique for in Matt's toolkit, codebase terminology represents the shared vocabulary and naming conventions embedded within project code and documentation. Triggering domain-modeling on discussions of codebase terminology ensures that ambiguous or overloaded terms are pinned down and recorded inline in CONTEXT.md before code is written.
- **kind:** technique
- **source names:** addy: — · matt: `codebase terminology` · rjm: —
- **decision:** D-330
- **concordance:** `docs/analysis/concordance/techniques.md#matt-codebase-terminology`

---

## D-331 — resolving-merge-conflicts

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-resolving-merge-conflicts
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `resolving-merge-conflicts`. Resolving merge conflicts is an engineering technique for `resolving-merge-conflicts` approaches git conflict resolution as an intent-reconciliation problem rather than a syntactic text-editing task. It forbids blind resolution flags like `--ours` or `--theirs` and disallows `--abort`, insisting that the agent inspect primary sources (commit messages, PR discussions, and issue trackers) on both sides of each hunk. By requiring that the repository's native automated checks (typecheck, tests, format) run before committing, it prevents the introduction of code that looks syntactically harmonious but breaks runtime contracts.

### Adopted from
Matt `docs/engineering/resolving-merge-conflicts.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- resolving-merge-conflicts-practice (less specific than canonical technique name)
- generic-resolving-merge-conflicts (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/resolving-merge-conflicts.md:3`.

### Glossary
### resolving-merge-conflicts

- **definition:** Resolving merge conflicts is an engineering technique for `resolving-merge-conflicts` approaches git conflict resolution as an intent-reconciliation problem rather than a syntactic text-editing task. It forbids blind resolution flags like `--ours` or `--theirs` and disallows `--abort`, insisting that the agent inspect primary sources (commit messages, PR discussions, and issue trackers) on both sides of each hunk. By requiring that the repository's native automated checks (typecheck, tests, format) run before committing, it prevents the introduction of code that looks syntactically harmonious but breaks runtime contracts.
- **kind:** technique
- **source names:** addy: — · matt: `resolving-merge-conflicts` · rjm: —
- **decision:** D-331
- **concordance:** `docs/analysis/concordance/techniques.md#matt-resolving-merge-conflicts`

---

## D-332 — desirable-difficulty

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-desirable-difficulty
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `desirable-difficulty`. Desirable difficulty is an engineering technique for desirable difficulty is the pedagogical principle that learning tasks should be intentionally challenging to deepen encoding. The teach skill applies difficulty strategically: keeping initial knowledge acquisition frictionless to preserve working memory, while introducing calibrated difficulty during quizzes and drills to solidify storage strength.

### Adopted from
Matt `docs/productivity/teach.md:42`.

### Dropped
None (clean source technique).

### Rejected alternatives
- desirable-difficulty-practice (less specific than canonical technique name)
- generic-desirable-difficulty (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/teach.md:42`.

### Glossary
### desirable-difficulty

- **definition:** Desirable difficulty is an engineering technique for desirable difficulty is the pedagogical principle that learning tasks should be intentionally challenging to deepen encoding. The teach skill applies difficulty strategically: keeping initial knowledge acquisition frictionless to preserve working memory, while introducing calibrated difficulty during quizzes and drills to solidify storage strength.
- **kind:** technique
- **source names:** addy: — · matt: `desirable difficulty` · rjm: —
- **decision:** D-332
- **concordance:** `docs/analysis/concordance/techniques.md#matt-desirable-difficulty`

---

## D-333 — diagnosing-bugs

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-diagnosing-bugs
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `diagnosing-bugs`. Diagnosing bugs is an engineering skill enforcing a rigorous six-phase scientific debugging discipline. It strictly prohibits speculative code modifications by gating hypothesis formation behind an executable, reproducible tight feedback loop (a single command that goes red on the failure and green on resolution).

### Adopted from
Matt `docs/engineering/diagnosing-bugs.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- diagnosing-bugs-practice (less specific than canonical technique name)
- generic-diagnosing-bugs (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/diagnosing-bugs.md:3`.

### Glossary
### diagnosing-bugs

- **definition:** Diagnosing bugs is an engineering skill enforcing a rigorous six-phase scientific debugging discipline. It strictly prohibits speculative code modifications by gating hypothesis formation behind an executable, reproducible tight feedback loop (a single command that goes red on the failure and green on resolution).
- **kind:** technique
- **source names:** addy: — · matt: `diagnosing-bugs` · rjm: —
- **decision:** D-333
- **concordance:** `docs/analysis/concordance/techniques.md#matt-diagnosing-bugs`

---

## D-334 — prefactor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-prefactor
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `prefactor`. Prefactor is an engineering technique for prefactoring embodies the principle "Make the change easy, then make the easy change." Rather than tangling structural adjustments with new feature logic within a single ticket or commit, prefactoring isolates preparatory restructuring into dedicated prerequisite tickets. This keeps diffs clean, lowers cognitive load, and ensures that when new functionality is introduced, the codebase already accommodates it cleanly.

### Adopted from
Matt `skills/engineering/to-tickets/SKILL.md:23`.

### Dropped
matt defects (defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- prefactor-practice (less specific than canonical technique name)
- generic-prefactor (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/to-tickets/SKILL.md:23`.

### Glossary
### prefactor

- **definition:** Prefactor is an engineering technique for prefactoring embodies the principle "Make the change easy, then make the easy change." Rather than tangling structural adjustments with new feature logic within a single ticket or commit, prefactoring isolates preparatory restructuring into dedicated prerequisite tickets. This keeps diffs clean, lowers cognitive load, and ensures that when new functionality is introduced, the codebase already accommodates it cleanly.
- **kind:** technique
- **source names:** addy: — · matt: `prefactor` · rjm: —
- **decision:** D-334
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prefactor`

---

## D-335 — git-guardrails-claude-code

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-git-guardrails-claude-code
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `git-guardrails-claude-code`. Git guardrails claude code is an interactive setup procedure and skill in the misc bucket that installs an executable PreToolUse hook to intercept dangerous git commands (push, reset --hard, clean, branch -D) before Claude Code executes them. It ensures automated agents cannot inadvertently perform destructive repository mutations or data loss.

### Adopted from
Matt `skills/misc/git-guardrails-claude-code/SKILL.md:8`.

### Dropped
None (clean source technique).

### Rejected alternatives
- git-guardrails-claude-code-practice (less specific than canonical technique name)
- generic-git-guardrails-claude-code (fails to reflect source methodology)

### Evidence
Matt `skills/misc/git-guardrails-claude-code/SKILL.md:8`.

### Glossary
### git-guardrails-claude-code

- **definition:** Git guardrails claude code is an interactive setup procedure and skill in the misc bucket that installs an executable PreToolUse hook to intercept dangerous git commands (push, reset --hard, clean, branch -D) before Claude Code executes them. It ensures automated agents cannot inadvertently perform destructive repository mutations or data loss.
- **kind:** technique
- **source names:** addy: — · matt: `git-guardrails-claude-code` · rjm: —
- **decision:** D-335
- **concordance:** `docs/analysis/concordance/techniques.md#matt-git-guardrails-claude-code`

---

## D-336 — six-phase-diagnosis

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-six-phase-diagnosis
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `six-phase-diagnosis`. Six phase diagnosis is the core diagnostic methodology in Matt Pocock's diagnosing-bugs skill. It enforces a strict, gated sequence of six phases: (1) build a tight reproduction loop, (2) minimize reproduction code/time, (3) formulate and rank falsifiable hypotheses, (4) add targeted temporary instrumentation, (5) implement the fix with a regression test, and (6) clean up temporary probes. The methodology prevents agents from prematurely editing code or guessing theories before establishing an automated red-green verification signal.

### Adopted from
Matt `external/diagnosing-bugs.md:25`.

### Dropped
matt defects (defects: doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- six-phase-diagnosis-practice (less specific than canonical technique name)
- generic-six-phase-diagnosis (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:25`.

### Glossary
### six-phase-diagnosis

- **definition:** Six phase diagnosis is the core diagnostic methodology in Matt Pocock's diagnosing-bugs skill. It enforces a strict, gated sequence of six phases: (1) build a tight reproduction loop, (2) minimize reproduction code/time, (3) formulate and rank falsifiable hypotheses, (4) add targeted temporary instrumentation, (5) implement the fix with a regression test, and (6) clean up temporary probes. The methodology prevents agents from prematurely editing code or guessing theories before establishing an automated red-green verification signal.
- **kind:** technique
- **source names:** addy: — · matt: `six-phase diagnosis` · rjm: —
- **decision:** D-336
- **concordance:** `docs/analysis/concordance/techniques.md#matt-six-phase-diagnosis`

---

## D-337 — git-bisect-run

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-git-bisect-run
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `git-bisect-run`. Git bisect run is the standard git binary search command used to automate regression identification. Matt's lifecycle treats running git bisect as downstream mechanical work that becomes trivial once a reliable test harness exists.

### Adopted from
Matt `external/diagnosing-bugs.md:41`.

### Dropped
None (clean source technique).

### Rejected alternatives
- git-bisect-run-practice (less specific than canonical technique name)
- generic-git-bisect-run (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:41`.

### Glossary
### git-bisect-run

- **definition:** Git bisect run is the standard git binary search command used to automate regression identification. Matt's lifecycle treats running git bisect as downstream mechanical work that becomes trivial once a reliable test harness exists.
- **kind:** technique
- **source names:** addy: — · matt: `git bisect run` · rjm: —
- **decision:** D-337
- **concordance:** `docs/analysis/concordance/techniques.md#matt-git-bisect-run`

---

## D-338 — bisection-harness

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-bisection-harness
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `bisection-harness`. Bisection harness is an automated script harness that tests a checkout state and returns a clean exit code for `git bisect run`. In Matt's methodology, constructing this harness turns historical regression isolation into purely mechanical execution.

### Adopted from
Matt `external/diagnosing-bugs.md:41`.

### Dropped
None (clean source technique).

### Rejected alternatives
- bisection-harness-practice (less specific than canonical technique name)
- generic-bisection-harness (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:41`.

### Glossary
### bisection-harness

- **definition:** Bisection harness is an automated script harness that tests a checkout state and returns a clean exit code for `git bisect run`. In Matt's methodology, constructing this harness turns historical regression isolation into purely mechanical execution.
- **kind:** technique
- **source names:** addy: — · matt: `bisection harness` · rjm: —
- **decision:** D-338
- **concordance:** `docs/analysis/concordance/techniques.md#matt-bisection-harness`

---

## D-339 — git-worktree-isolation-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-git-worktrees
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `git-worktree-isolation-technique`. Git worktree isolation technique is an engineering technique for git worktrees allow multiple working trees to be attached to a single repository checkout. In agent workflows, they provide isolation for concurrent coding agents working on different tickets simultaneously, though Matt notes that shared refs (such as stashes) still require careful handling.

### Adopted from
Matt `external/implement.md:52`.

### Dropped
matt defects (defects: orphan, doc-drift, cross-file-contradiction, other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- git-worktree-isolation-technique-practice (less specific than canonical technique name)
- generic-git-worktree-isolation (fails to reflect source methodology)

### Evidence
Matt `external/implement.md:52`.

### Glossary
### git-worktree-isolation-technique

- **definition:** Git worktree isolation technique is an engineering technique for git worktrees allow multiple working trees to be attached to a single repository checkout. In agent workflows, they provide isolation for concurrent coding agents working on different tickets simultaneously, though Matt notes that shared refs (such as stashes) still require careful handling.
- **kind:** technique
- **source names:** addy: — · matt: `Git worktrees` · rjm: —
- **decision:** D-339
- **concordance:** `docs/analysis/concordance/techniques.md#matt-git-worktrees`

---

## D-340 — scoping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-scoping
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `scoping`. Scoping is an engineering technique for `scoping` grounds wizard creation in repository evidence. Rather than asking developers open-ended questions about what configuration is required, scoping inspects existing workflow files and configuration schemas to automatically deduce what variables and secrets must be produced.

### Adopted from
Matt `docs/engineering/wizard.md:30`.

### Dropped
None (clean source technique).

### Rejected alternatives
- scoping-practice (less specific than canonical technique name)
- generic-scoping (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/wizard.md:30`.

### Glossary
### scoping

- **definition:** Scoping is an engineering technique for `scoping` grounds wizard creation in repository evidence. Rather than asking developers open-ended questions about what configuration is required, scoping inspects existing workflow files and configuration schemas to automatically deduce what variables and secrets must be produced.
- **kind:** technique
- **source names:** addy: — · matt: `scoping` · rjm: —
- **decision:** D-340
- **concordance:** `docs/analysis/concordance/techniques.md#matt-scoping`

---

## D-341 — set-var

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-set-var
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `set-var`. Set var is a bash helper function in the wizard template library that automates setting non-secret GitHub Actions variables using the GitHub CLI (`gh variable set`), with graceful degradation to a skip list and manual instructions if `gh` is unavailable or unauthenticated.

### Adopted from
Matt `skills/engineering/wizard/template.sh:156`.

### Dropped
None (clean source technique).

### Rejected alternatives
- set-var-practice (less specific than canonical technique name)
- generic-set-var (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:156`.

### Glossary
### set-var

- **definition:** Set var is a bash helper function in the wizard template library that automates setting non-secret GitHub Actions variables using the GitHub CLI (`gh variable set`), with graceful degradation to a skip list and manual instructions if `gh` is unavailable or unauthenticated.
- **kind:** technique
- **source names:** addy: — · matt: `set_var` · rjm: —
- **decision:** D-341
- **concordance:** `docs/analysis/concordance/techniques.md#matt-set-var`

---

## D-342 — parallel-worktrees

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-parallel-worktrees
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `parallel-worktrees`. Parallel worktrees is the practice of running multiple concurrent agent sessions in isolated git worktrees. To prevent loss of intent during branch reconciliation, matt emphasizes that the session that authored the changes in a worktree should perform the merge back, rather than batching all conflicts onto a separate agent lacking author context.

### Adopted from
Matt `external/resolving-merge-conflicts.md:39`.

### Dropped
matt defects (defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- parallel-worktrees-practice (less specific than canonical technique name)
- generic-parallel-worktrees (fails to reflect source methodology)

### Evidence
Matt `external/resolving-merge-conflicts.md:39`.

### Glossary
### parallel-worktrees

- **definition:** Parallel worktrees is the practice of running multiple concurrent agent sessions in isolated git worktrees. To prevent loss of intent during branch reconciliation, matt emphasizes that the session that authored the changes in a worktree should perform the merge back, rather than batching all conflicts onto a separate agent lacking author context.
- **kind:** technique
- **source names:** addy: — · matt: `parallel worktrees` · rjm: —
- **decision:** D-342
- **concordance:** `docs/analysis/concordance/techniques.md#matt-parallel-worktrees`

---

## D-343 — refactoring

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-refactoring
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `refactoring`. Refactoring is the discipline of restructuring software internals without changing external observable behavior. In Matt Pocock's methodology, refactoring was explicitly decoupled from the classic red-green-refactor TDD inner loop in June 2026. Because coding agents struggled to execute refactoring mid-implementation and authoring sessions suffer from confirmation bias, refactoring is treated as an independent downstream activity driven by code-review and dedicated improvement skills in separate sessions.

### Adopted from
Matt `external/code-review.md:44`.

### Dropped
matt defects (defects: doc-drift, other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- refactoring-practice (less specific than canonical technique name)
- generic-refactoring (fails to reflect source methodology)

### Evidence
Matt `external/code-review.md:44`.

### Glossary
### refactoring

- **definition:** Refactoring is the discipline of restructuring software internals without changing external observable behavior. In Matt Pocock's methodology, refactoring was explicitly decoupled from the classic red-green-refactor TDD inner loop in June 2026. Because coding agents struggled to execute refactoring mid-implementation and authoring sessions suffer from confirmation bias, refactoring is treated as an independent downstream activity driven by code-review and dedicated improvement skills in separate sessions.
- **kind:** technique
- **source names:** addy: — · matt: `Refactoring` · rjm: —
- **decision:** D-343
- **concordance:** `docs/analysis/concordance/techniques.md#matt-refactoring`

---

## D-344 — characterization-testing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#characterization-testing
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md and verification rigor; followed by adopting this testing technique.

### Decision
The canonical term for this technique is `characterization-testing`. Characterization testing is a verification technique that captures the existing behavior of legacy or complex code before making changes to guarantee bug-for-bug behavioral parity.

### Adopted from
Addy `docs/adoption-guide.md:90`; RJM `.claude/skills/software-engineering-library/references/working-with-legacy-code.md:24`.

### Dropped
rjm defects (defects: internal-contradiction) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- characterization-testing-practice (less specific than canonical technique name)
- generic-characterization-testing (fails to reflect source methodology)

### Evidence
Addy `docs/adoption-guide.md:90`; RJM `.claude/skills/software-engineering-library/references/working-with-legacy-code.md:24`.

### Glossary
### characterization-testing

- **definition:** Characterization testing is a verification technique that captures the existing behavior of legacy or complex code before making changes to guarantee bug-for-bug behavioral parity.
- **kind:** technique
- **source names:** addy: `characterization tests` · matt: — · rjm: `Characterization test`
- **decision:** D-344
- **concordance:** `docs/analysis/concordance/techniques.md#characterization-testing`

---

## D-345 — sandbox-mode

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-sandbox-mode
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `sandbox-mode`. Sandbox mode is an engineering technique for sandbox mode enforces platform-level permission restrictions on agent shell execution, providing safety guardrails against accidental or malicious system damage during automated runs.

### Adopted from
Addy `docs/antigravity-setup.md:110`.

### Dropped
None (clean source technique).

### Rejected alternatives
- sandbox-mode-practice (less specific than canonical technique name)
- generic-sandbox-mode (fails to reflect source methodology)

### Evidence
Addy `docs/antigravity-setup.md:110`.

### Glossary
### sandbox-mode

- **definition:** Sandbox mode is an engineering technique for sandbox mode enforces platform-level permission restrictions on agent shell execution, providing safety guardrails against accidental or malicious system damage during automated runs.
- **kind:** technique
- **source names:** addy: `Sandbox Mode` · matt: — · rjm: —
- **decision:** D-345
- **concordance:** `docs/analysis/concordance/techniques.md#addy-sandbox-mode`

---

## D-346 — competing-hypothesis-debugging

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-competing-hypothesis-debugging
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `competing-hypothesis-debugging`. Competing hypothesis debugging is an engineering technique for competing-hypothesis debugging is an adversarial investigative technique leveraging Agent Teams for complex production defect analysis. Rather than allowing a single agent to fixate on the first plausible explanation, multiple specialized personas concurrently explore competing root-cause hypotheses and actively attempt to disprove each other's theories, ensuring that the surviving explanation is empirically verified before fixes are attempted.

### Adopted from
Addy `references/orchestration-patterns.md:174`.

### Dropped
None (clean source technique).

### Rejected alternatives
- competing-hypothesis-debugging-practice (less specific than canonical technique name)
- generic-competing-hypothesis-debugging (fails to reflect source methodology)

### Evidence
Addy `references/orchestration-patterns.md:174`.

### Glossary
### competing-hypothesis-debugging

- **definition:** Competing hypothesis debugging is an engineering technique for competing-hypothesis debugging is an adversarial investigative technique leveraging Agent Teams for complex production defect analysis. Rather than allowing a single agent to fixate on the first plausible explanation, multiple specialized personas concurrently explore competing root-cause hypotheses and actively attempt to disprove each other's theories, ensuring that the surviving explanation is empirically verified before fixes are attempted.
- **kind:** technique
- **source names:** addy: `competing-hypothesis debugging` · matt: — · rjm: —
- **decision:** D-346
- **concordance:** `docs/analysis/concordance/techniques.md#addy-competing-hypothesis-debugging`

---

## D-347 — debug-logging

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-debug-logging
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `debug-logging`. Debug logging is an engineering technique for diagnostic tracing technique that logs execution events, parsed parameters, and branch decisions to a local sentinel-triggered log file without contaminating model stdout or stderr channels.

### Adopted from
Addy `hooks/sdd-cache-post.sh:22`.

### Dropped
None (clean source technique).

### Rejected alternatives
- debug-logging-practice (less specific than canonical technique name)
- generic-debug-logging (fails to reflect source methodology)

### Evidence
Addy `hooks/sdd-cache-post.sh:22`.

### Glossary
### debug-logging

- **definition:** Debug logging is an engineering technique for diagnostic tracing technique that logs execution events, parsed parameters, and branch decisions to a local sentinel-triggered log file without contaminating model stdout or stderr channels.
- **kind:** technique
- **source names:** addy: `Debug logging` · matt: — · rjm: —
- **decision:** D-347
- **concordance:** `docs/analysis/concordance/techniques.md#addy-debug-logging`

---

## D-348 — e2e-test

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-e2e-test
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md and verification rigor; followed by adopting this testing technique.

### Decision
The canonical term for this technique is `e2e-test`. E2e test is an E2E test represents the top tier of Addy's test pyramid (~5% of tests), classified as a Large test size that verifies complete end-to-end user flows across the full stack while being strictly limited to critical paths to prevent flaky, slow execution suites.

### Adopted from
Addy `skills/test-driven-development/SKILL.md:184-185`.

### Dropped
addy defects (defects: cross-file-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- e2e-test-practice (less specific than canonical technique name)
- generic-e2e-test (fails to reflect source methodology)

### Evidence
Addy `skills/test-driven-development/SKILL.md:184-185`.

### Glossary
### e2e-test

- **definition:** E2e test is an E2E test represents the top tier of Addy's test pyramid (~5% of tests), classified as a Large test size that verifies complete end-to-end user flows across the full stack while being strictly limited to critical paths to prevent flaky, slow execution suites.
- **kind:** technique
- **source names:** addy: `E2E test` · matt: — · rjm: —
- **decision:** D-348
- **concordance:** `docs/analysis/concordance/techniques.md#addy-e2e-test`

---

## D-349 — type-assertions

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-type-assertions
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `type-assertions`. Type assertions is an engineering technique for in TypeScript, `as` type assertions force the compiler to treat a value as a specific type, bypassing static type checking. Matt's workflow flags `as` assertions in test files as a code smell and provides automated migration to safer helper libraries.

### Adopted from
Matt `skills/misc/README.md:6`.

### Dropped
None (clean source technique).

### Rejected alternatives
- type-assertions-practice (less specific than canonical technique name)
- generic-type-assertions (fails to reflect source methodology)

### Evidence
Matt `skills/misc/README.md:6`.

### Glossary
### type-assertions

- **definition:** Type assertions is an engineering technique for in TypeScript, `as` type assertions force the compiler to treat a value as a specific type, bypassing static type checking. Matt's workflow flags `as` assertions in test files as a code smell and provides automated migration to safer helper libraries.
- **kind:** technique
- **source names:** addy: — · matt: `type assertions` · rjm: —
- **decision:** D-349
- **concordance:** `docs/analysis/concordance/techniques.md#matt-type-assertions`

---

## D-350 — shoehorn

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-shoehorn
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `shoehorn`. Shoehorn is a type-safe testing utility and technique that allows developers to provide partial or mock objects in unit tests while retaining TypeScript type checking on the provided properties.

### Adopted from
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:10`.

### Dropped
None (clean source technique).

### Rejected alternatives
- shoehorn-practice (less specific than canonical technique name)
- generic-shoehorn (fails to reflect source methodology)

### Evidence
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:10`.

### Glossary
### shoehorn

- **definition:** Shoehorn is a type-safe testing utility and technique that allows developers to provide partial or mock objects in unit tests while retaining TypeScript type checking on the provided properties.
- **kind:** technique
- **source names:** addy: — · matt: `shoehorn` · rjm: —
- **decision:** D-350
- **concordance:** `docs/analysis/concordance/techniques.md#matt-shoehorn`

---

## D-351 — hypothesis-testing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-hypothesis-testing
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md and verification rigor; followed by adopting this testing technique.

### Decision
The canonical term for this technique is `hypothesis-testing`. Hypothesis testing is a structured inquiry technique in diagnosing-bugs where the agent generates 3–5 ranked, falsifiable explanations for a defect only after an automated reproduction command exists. Hypotheses make explicit predictions tested through minimal probes and temporary instrumentation, preventing speculative code changes until root causes are confirmed.

### Adopted from
Matt `external/diagnosing-bugs.md:26`.

### Dropped
matt defects (defects: doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- hypothesis-testing-practice (less specific than canonical technique name)
- generic-hypothesis-testing (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:26`.

### Glossary
### hypothesis-testing

- **definition:** Hypothesis testing is a structured inquiry technique in diagnosing-bugs where the agent generates 3–5 ranked, falsifiable explanations for a defect only after an automated reproduction command exists. Hypotheses make explicit predictions tested through minimal probes and temporary instrumentation, preventing speculative code changes until root causes are confirmed.
- **kind:** technique
- **source names:** addy: — · matt: `hypothesis-testing` · rjm: —
- **decision:** D-351
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hypothesis-testing`

---

## D-352 — falsifiable-hypotheses

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-falsifiable-hypotheses
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `falsifiable-hypotheses`. Falsifiable hypotheses is the scientific discipline applied to bug diagnosis: the agent must articulate 3 to 5 ranked, falsifiable predictions regarding the root cause before introducing probes, preventing biased or wandering experimentation.

### Adopted from
Matt `docs/engineering/diagnosing-bugs.md:50`.

### Dropped
matt defects (clean in core technique; associated with workflow gap in docs/engineering/diagnosing-bugs.md:64 (agent proceeds automatically on its own ranking if user is away)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- falsifiable-hypotheses-practice (less specific than canonical technique name)
- generic-falsifiable-hypotheses (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/diagnosing-bugs.md:50`.

### Glossary
### falsifiable-hypotheses

- **definition:** Falsifiable hypotheses is the scientific discipline applied to bug diagnosis: the agent must articulate 3 to 5 ranked, falsifiable predictions regarding the root cause before introducing probes, preventing biased or wandering experimentation.
- **kind:** technique
- **source names:** addy: — · matt: `falsifiable hypotheses` · rjm: —
- **decision:** D-352
- **concordance:** `docs/analysis/concordance/techniques.md#matt-falsifiable-hypotheses`

---

## D-353 — acquiring-wisdom

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-acquiring-wisdom
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `acquiring-wisdom`. Acquiring wisdom is an engineering technique for acquiring Wisdom represents the boundary where simulated in-workspace instruction yields to external reality. Recognising that models cannot synthesize authentic social or professional feedback, the technique bounds agent teaching by routing questions that demand seasoned judgment to external practitioner communities.

### Adopted from
Matt `skills/productivity/teach/SKILL.md:114`.

### Dropped
matt defects (defects: doc-drift, other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- acquiring-wisdom-practice (less specific than canonical technique name)
- generic-acquiring-wisdom (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/teach/SKILL.md:114`.

### Glossary
### acquiring-wisdom

- **definition:** Acquiring wisdom is an engineering technique for acquiring Wisdom represents the boundary where simulated in-workspace instruction yields to external reality. Recognising that models cannot synthesize authentic social or professional feedback, the technique bounds agent teaching by routing questions that demand seasoned judgment to external practitioner communities.
- **kind:** technique
- **source names:** addy: — · matt: `Acquiring Wisdom` · rjm: —
- **decision:** D-353
- **concordance:** `docs/analysis/concordance/techniques.md#matt-acquiring-wisdom`

---

## D-354 — temporary-instrumentation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-temporary-instrumentation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `temporary-instrumentation`. Temporary instrumentation is an engineering technique for temporary diagnostic code inserted to expose internal state during bug diagnosis. Matt's lifecycle treats adding temporary instrumentation as an escalated intervention requiring human permission and disciplined tagging (e.g. `[DEBUG-a4f2]`) to ensure complete removal before fixing.

### Adopted from
Matt `external/diagnosing-bugs.md:46`.

### Dropped
None (clean source technique).

### Rejected alternatives
- temporary-instrumentation-practice (less specific than canonical technique name)
- generic-temporary-instrumentation (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:46`.

### Glossary
### temporary-instrumentation

- **definition:** Temporary instrumentation is an engineering technique for temporary diagnostic code inserted to expose internal state during bug diagnosis. Matt's lifecycle treats adding temporary instrumentation as an escalated intervention requiring human permission and disciplined tagging (e.g. `[DEBUG-a4f2]`) to ensure complete removal before fixing.
- **kind:** technique
- **source names:** addy: — · matt: `temporary instrumentation` · rjm: —
- **decision:** D-354
- **concordance:** `docs/analysis/concordance/techniques.md#matt-temporary-instrumentation`

---

## D-355 — falsifiable

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-falsifiable
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `falsifiable`. Falsifiable is a strict quality standard for debugging hypotheses requiring each hypothesis to formulate an explicit testable prediction. Without falsifiability, hypotheses degenerate into vague intuition that cannot be systematically verified or eliminated.

### Adopted from
Matt `skills/engineering/diagnosing-bugs/SKILL.md:92`.

### Dropped
None (clean source technique).

### Rejected alternatives
- falsifiable-practice (less specific than canonical technique name)
- generic-falsifiable (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/diagnosing-bugs/SKILL.md:92`.

### Glossary
### falsifiable

- **definition:** Falsifiable is a strict quality standard for debugging hypotheses requiring each hypothesis to formulate an explicit testable prediction. Without falsifiability, hypotheses degenerate into vague intuition that cannot be systematically verified or eliminated.
- **kind:** technique
- **source names:** addy: — · matt: `falsifiable` · rjm: —
- **decision:** D-355
- **concordance:** `docs/analysis/concordance/techniques.md#matt-falsifiable`

---

## D-356 — no-op-test

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-no-op-test
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md and verification rigor; followed by adopting this testing technique.

### Decision
The canonical term for this technique is `no-op-test`. No op test is a behavioral editing technique: delete a sentence and test whether the agent's actions change. If behavior does not change, the line is a no-op that wastes context tokens and must be removed. It establishes an empirical, behavioral standard for brevity rather than stylistic preference.

### Adopted from
Matt `external/writing-for-agents.md:44`.

### Dropped
matt defects (defects: orphan, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- no-op-test-practice (less specific than canonical technique name)
- generic-no-op-test (fails to reflect source methodology)

### Evidence
Matt `external/writing-for-agents.md:44`.

### Glossary
### no-op-test

- **definition:** No op test is a behavioral editing technique: delete a sentence and test whether the agent's actions change. If behavior does not change, the line is a no-op that wastes context tokens and must be removed. It establishes an empirical, behavioral standard for brevity rather than stylistic preference.
- **kind:** technique
- **source names:** addy: — · matt: `no-op test` · rjm: —
- **decision:** D-356
- **concordance:** `docs/analysis/concordance/techniques.md#matt-no-op-test`

---

## D-357 — reproduction-rate

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-reproduction-rate
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `reproduction-rate`. Reproduction rate is a debugging technique for intermittent or flaky bugs. Rather than stalling waiting for a 100% deterministic reproduction, the agent actively increases the reproduction rate through parallel triggers, load, loops, or injected timing delays until the failure happens reliably enough to test hypotheses against.

### Adopted from
Matt `docs/engineering/diagnosing-bugs.md:38`.

### Dropped
matt defects (clean in core technique; associated with general diagnosis skill defects in docs/engineering/diagnosing-bugs.md:59) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- reproduction-rate-practice (less specific than canonical technique name)
- generic-reproduction-rate (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/diagnosing-bugs.md:38`.

### Glossary
### reproduction-rate

- **definition:** Reproduction rate is a debugging technique for intermittent or flaky bugs. Rather than stalling waiting for a 100% deterministic reproduction, the agent actively increases the reproduction rate through parallel triggers, load, loops, or injected timing delays until the failure happens reliably enough to test hypotheses against.
- **kind:** technique
- **source names:** addy: — · matt: `reproduction rate` · rjm: —
- **decision:** D-357
- **concordance:** `docs/analysis/concordance/techniques.md#matt-reproduction-rate`

---

## D-358 — pruning

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-pruning
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `pruning`. Pruning is the continuous editorial discipline of auditing agent-facing text sentence by sentence. Pruning aggressively removes no-ops, deduplicates repeated concepts, and eliminates stale sediment to ensure every token in the agent's window earns its keep.

### Adopted from
Matt `docs/productivity/writing-for-agents.md:30`.

### Dropped
None (clean source technique).

### Rejected alternatives
- pruning-practice (less specific than canonical technique name)
- generic-pruning (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/writing-for-agents.md:30`.

### Glossary
### pruning

- **definition:** Pruning is the continuous editorial discipline of auditing agent-facing text sentence by sentence. Pruning aggressively removes no-ops, deduplicates repeated concepts, and eliminates stale sediment to ensure every token in the agent's window earns its keep.
- **kind:** technique
- **source names:** addy: — · matt: `Pruning` · rjm: —
- **decision:** D-358
- **concordance:** `docs/analysis/concordance/techniques.md#matt-pruning`

---

## D-359 — deletion-test

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-deletion-test
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md and verification rigor; followed by adopting this testing technique.

### Decision
The canonical term for this technique is `deletion-test`. Deletion test is an engineering technique for thought experiment assessing module validity: imagine deleting the module; if complexity simply disappears, it was a pass-through wrapper; if complexity reappears across N call sites, it was genuinely earning its keep.

### Adopted from
Matt `docs/engineering/codebase-design.md:42`.

### Dropped
None (clean source technique).

### Rejected alternatives
- deletion-test-practice (less specific than canonical technique name)
- generic-deletion-test (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/codebase-design.md:42`.

### Glossary
### deletion-test

- **definition:** Deletion test is an engineering technique for thought experiment assessing module validity: imagine deleting the module; if complexity simply disappears, it was a pass-through wrapper; if complexity reappears across N call sites, it was genuinely earning its keep.
- **kind:** technique
- **source names:** addy: — · matt: `deletion test` · rjm: —
- **decision:** D-359
- **concordance:** `docs/analysis/concordance/techniques.md#matt-deletion-test`

---

## D-360 — performance-branch

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-performance-branch
- **preferences consulted:** PREFERENCES.md § References highlights performance-checklist.md; followed by adopting this performance technique.

### Decision
The canonical term for this technique is `performance-branch`. Performance branch is the performance branch adapts the diagnosing-bugs workflow to latency and resource regressions. Instead of relying on boolean pass/fail tests, it establishes a quantitative baseline measurement, applies bisection, and insists on measuring before and after any code modifications.

### Adopted from
Matt `external/diagnosing-bugs.md:55`.

### Dropped
None (clean source technique).

### Rejected alternatives
- performance-branch-practice (less specific than canonical technique name)
- generic-performance-branch (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:55`.

### Glossary
### performance-branch

- **definition:** Performance branch is the performance branch adapts the diagnosing-bugs workflow to latency and resource regressions. Instead of relying on boolean pass/fail tests, it establishes a quantitative baseline measurement, applies bisection, and insists on measuring before and after any code modifications.
- **kind:** technique
- **source names:** addy: — · matt: `performance branch` · rjm: —
- **decision:** D-360
- **concordance:** `docs/analysis/concordance/techniques.md#matt-performance-branch`

---

## D-361 — testability

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-testability
- **preferences consulted:** PREFERENCES.md § References highlights testing-patterns.md and verification rigor; followed by adopting this testing technique.

### Decision
The canonical term for this technique is `testability`. Testability is an architectural quality attribute and primary design objective in Matt's lifecycle where deep abstractions provide simple, durable test surfaces, avoiding the antipattern of exposing private implementation details or extracting shallow helper functions solely for unit testing.

### Adopted from
Matt `skills/engineering/improve-codebase-architecture/SKILL.md:9`.

### Dropped
None (clean source technique).

### Rejected alternatives
- testability-practice (less specific than canonical technique name)
- generic-testability (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/improve-codebase-architecture/SKILL.md:9`.

### Glossary
### testability

- **definition:** Testability is an architectural quality attribute and primary design objective in Matt's lifecycle where deep abstractions provide simple, durable test surfaces, avoiding the antipattern of exposing private implementation details or extracting shallow helper functions solely for unit testing.
- **kind:** technique
- **source names:** addy: — · matt: `testability` · rjm: —
- **decision:** D-361
- **concordance:** `docs/analysis/concordance/techniques.md#matt-testability`

---

## D-362 — migrate-to-shoehorn

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-migrate-to-shoehorn
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `migrate-to-shoehorn`. Migrate to shoehorn is a refactoring technique and workflow in the misc bucket that replaces unsafe `as` type assertions in test files with type-safe shoehorn utilities, preventing test mocks from masking schema regressions.

### Adopted from
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- migrate-to-shoehorn-practice (less specific than canonical technique name)
- generic-migrate-to-shoehorn (fails to reflect source methodology)

### Evidence
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:3`.

### Glossary
### migrate-to-shoehorn

- **definition:** Migrate to shoehorn is a refactoring technique and workflow in the misc bucket that replaces unsafe `as` type assertions in test files with type-safe shoehorn utilities, preventing test mocks from masking schema regressions.
- **kind:** technique
- **source names:** addy: — · matt: `migrate-to-shoehorn` · rjm: —
- **decision:** D-362
- **concordance:** `docs/analysis/concordance/techniques.md#matt-migrate-to-shoehorn`

---

## D-363 — three-dot-diff

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#three-dot-diff
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `three-dot-diff`. The three-dot diff is a code review inspection technique utilizing git merge-base diffing ('git diff base...head') to view exclusively changes introduced on a topic branch.

### Adopted from
Matt `docs/engineering/code-review.md:76`; RJM `.claude/skills/review/scripts/validate_findings_scope.py:6`.

### Dropped
matt defects (defects: cross-file-contradiction (excludes unstaged/uncommitted changes, causing implement to fail if it reviews before committing)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- three-dot-diff-practice (less specific than canonical technique name)
- generic-three-dot-diff (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/code-review.md:76`; RJM `.claude/skills/review/scripts/validate_findings_scope.py:6`.

### Glossary
### three-dot-diff

- **definition:** The three-dot diff is a code review inspection technique utilizing git merge-base diffing ('git diff base...head') to view exclusively changes introduced on a topic branch.
- **kind:** technique
- **source names:** addy: — · matt: `three-dot` · rjm: `three-dot diff`
- **decision:** D-363
- **concordance:** `docs/analysis/concordance/techniques.md#three-dot-diff`

---

## D-364 — dependency-security

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-dependency-security
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `dependency-security`. Dependency security is an engineering technique for dependency security safeguards applications against vulnerabilities and supply-chain attacks introduced through external packages. Addy mandates locating the exact installation boundary, verifying consistent package manager tooling, enforcing frozen and immutable lockfile installs in CI, and restricting package lifecycle script execution.

### Adopted from
Addy `references/security-checklist.md:15`.

### Dropped
None (clean source technique).

### Rejected alternatives
- dependency-security-practice (less specific than canonical technique name)
- generic-dependency-security (fails to reflect source methodology)

### Evidence
Addy `references/security-checklist.md:15`.

### Glossary
### dependency-security

- **definition:** Dependency security is an engineering technique for dependency security safeguards applications against vulnerabilities and supply-chain attacks introduced through external packages. Addy mandates locating the exact installation boundary, verifying consistent package manager tooling, enforcing frozen and immutable lockfile installs in CI, and restricting package lifecycle script execution.
- **kind:** technique
- **source names:** addy: `Dependency Security` · matt: — · rjm: —
- **decision:** D-364
- **concordance:** `docs/analysis/concordance/techniques.md#addy-dependency-security`

---

## D-365 — operational-metrics

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#operational-metrics
- **preferences consulted:** PREFERENCES.md § References highlights performance-checklist.md; followed by adopting this performance technique.

### Decision
The canonical term for this technique is `operational-metrics`. Operational metrics is an observational technique tracking quantitative performance, reliability, and error indicators to verify system health across operational workflows.

### Adopted from
Addy `references/observability-checklist.md:9`; RJM `.claude/skills/observability/schema.json:22`.

### Dropped
rjm defects (defects: doc-drift, exit-code-mismatch) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- operational-metrics-practice (less specific than canonical technique name)
- generic-operational-metrics (fails to reflect source methodology)

### Evidence
Addy `references/observability-checklist.md:9`; RJM `.claude/skills/observability/schema.json:22`.

### Glossary
### operational-metrics

- **definition:** Operational metrics is an observational technique tracking quantitative performance, reliability, and error indicators to verify system health across operational workflows.
- **kind:** technique
- **source names:** addy: `Metrics` · matt: — · rjm: `metric`
- **decision:** D-365
- **concordance:** `docs/analysis/concordance/techniques.md#operational-metrics`

---

## D-366 — hyrum-s-law

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-hyrum-s-law
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `hyrum-s-law`. Hyrum s law is an engineering technique for hyrum's Law forces agents to treat all observable behavior — including timing quirks and undocumented bugs — as contractually binding in mature systems, mandating active migration paths rather than optimistic assumption of contract purity.

### Adopted from
Addy `skills/api-and-interface-design/SKILL.md:24`.

### Dropped
addy defects (clean in skills/api-and-interface-design/SKILL.md, skills/deprecation-and-migration/SKILL.md, and docs/adoption-guide.md; defects: doc-drift, cross-file-contradiction in skills/git-workflow-and-versioning/SKILL.md; defects: doc-drift, orphan in external documentation; defects: doc-drift in README.md) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- hyrum-s-law-practice (less specific than canonical technique name)
- generic-hyrum-s-law (fails to reflect source methodology)

### Evidence
Addy `skills/api-and-interface-design/SKILL.md:24`.

### Glossary
### hyrum-s-law

- **definition:** Hyrum s law is an engineering technique for hyrum's Law forces agents to treat all observable behavior — including timing quirks and undocumented bugs — as contractually binding in mature systems, mandating active migration paths rather than optimistic assumption of contract purity.
- **kind:** technique
- **source names:** addy: `Hyrum's Law` · matt: — · rjm: —
- **decision:** D-366
- **concordance:** `docs/analysis/concordance/techniques.md#addy-hyrum-s-law`

---

## D-367 — constraint-driven-development

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-constraint-driven-development
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `constraint-driven-development`. Constraint driven development is a development methodology that shifts quality enforcement from post-hoc prose guidelines to explicit, mechanically checked threshold constraints that run inside the inner development loop.

### Adopted from
Addy `.gemini/commands/constraints.toml:4`.

### Dropped
None (clean source technique).

### Rejected alternatives
- constraint-driven-development-practice (less specific than canonical technique name)
- generic-constraint-driven-development (fails to reflect source methodology)

### Evidence
Addy `.gemini/commands/constraints.toml:4`.

### Glossary
### constraint-driven-development

- **definition:** Constraint driven development is a development methodology that shifts quality enforcement from post-hoc prose guidelines to explicit, mechanically checked threshold constraints that run inside the inner development loop.
- **kind:** technique
- **source names:** addy: `constraint-driven-development` · matt: — · rjm: —
- **decision:** D-367
- **concordance:** `docs/analysis/concordance/techniques.md#addy-constraint-driven-development`

---

## D-368 — dialogue-evals

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-dialogue-evals
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `dialogue-evals`. Dialogue evals is a behavioral evaluation technique for skills whose primary artifact is the conversation itself (such as mentoring, code review, or planning) rather than file modifications. Unlike execution evals, dialogue evals require no pre-baked workspace fixtures.

### Adopted from
Addy `scripts/run-evals.js:23`.

### Dropped
None (clean source technique).

### Rejected alternatives
- dialogue-evals-practice (less specific than canonical technique name)
- generic-dialogue-evals (fails to reflect source methodology)

### Evidence
Addy `scripts/run-evals.js:23`.

### Glossary
### dialogue-evals

- **definition:** Dialogue evals is a behavioral evaluation technique for skills whose primary artifact is the conversation itself (such as mentoring, code review, or planning) rather than file modifications. Unlike execution evals, dialogue evals require no pre-baked workspace fixtures.
- **kind:** technique
- **source names:** addy: `dialogue evals` · matt: — · rjm: —
- **decision:** D-368
- **concordance:** `docs/analysis/concordance/techniques.md#addy-dialogue-evals`

---

## D-369 — information-access

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-information-access
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `information-access`. Information access is an environment improvement category in retrospectives that targets informational bottlenecks. Rather than compensating with complex prompts, this technique provides coding agents with direct runtime visibility (such as teeing background server logs or granting read-only service tokens) to eliminate blind spots.

### Adopted from
Matt `skills/in-progress/retro/SKILL.md:23`.

### Dropped
None (clean source technique).

### Rejected alternatives
- information-access-practice (less specific than canonical technique name)
- generic-information-access (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/retro/SKILL.md:23`.

### Glossary
### information-access

- **definition:** Information access is an environment improvement category in retrospectives that targets informational bottlenecks. Rather than compensating with complex prompts, this technique provides coding agents with direct runtime visibility (such as teeing background server logs or granting read-only service tokens) to eliminate blind spots.
- **kind:** technique
- **source names:** addy: — · matt: `Information access` · rjm: —
- **decision:** D-369
- **concordance:** `docs/analysis/concordance/techniques.md#matt-information-access`

---

## D-370 — scheduler-yield

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-scheduler-yield
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `scheduler-yield`. Scheduler yield is the preferred modern web platform API for task-level yielding. Unlike setTimeout(..., 0), scheduler.yield() yields execution to high-priority browser tasks (input handling, rendering) while placing the continuation at the head of the task queue.

### Adopted from
Addy `references/performance-checklist.md:50`.

### Dropped
None (clean source technique).

### Rejected alternatives
- scheduler-yield-practice (less specific than canonical technique name)
- generic-scheduler-yield (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:50`.

### Glossary
### scheduler-yield

- **definition:** Scheduler yield is the preferred modern web platform API for task-level yielding. Unlike setTimeout(..., 0), scheduler.yield() yields execution to high-priority browser tasks (input handling, rendering) while placing the continuation at the head of the task queue.
- **kind:** technique
- **source names:** addy: `scheduler.yield()` · matt: — · rjm: —
- **decision:** D-370
- **concordance:** `docs/analysis/concordance/techniques.md#addy-scheduler-yield`

---

## D-371 — context-aware-loading

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-context-aware-loading
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `context-aware-loading`. Context aware loading is an engineering technique for context-Aware Loading prevents context window exhaustion and prompt dilution by restricting loaded skill instructions to those required for the current task (e.g. UI engineering during frontend work, debugging during error recovery), preserving model reasoning capacity.

### Adopted from
Addy `docs/getting-started.md:67`.

### Dropped
None (clean source technique).

### Rejected alternatives
- context-aware-loading-practice (less specific than canonical technique name)
- generic-context-aware-loading (fails to reflect source methodology)

### Evidence
Addy `docs/getting-started.md:67`.

### Glossary
### context-aware-loading

- **definition:** Context aware loading is an engineering technique for context-Aware Loading prevents context window exhaustion and prompt dilution by restricting loaded skill instructions to those required for the current task (e.g. UI engineering during frontend work, debugging during error recovery), preserving model reasoning capacity.
- **kind:** technique
- **source names:** addy: `Context-Aware Loading` · matt: — · rjm: —
- **decision:** D-371
- **concordance:** `docs/analysis/concordance/techniques.md#addy-context-aware-loading`

---

## D-372 — decision-flow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-decision-flow
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `decision-flow`. Decision flow is a structured decision tree for choosing the simplest valid orchestration architecture for a task. It biases strongly toward zero or minimal orchestration (direct invocation or user-driven commands), reserving parallel fan-out only for independent, repeating sub-tasks.

### Adopted from
Addy `references/orchestration-patterns.md:345`.

### Dropped
None (clean source technique).

### Rejected alternatives
- decision-flow-practice (less specific than canonical technique name)
- generic-decision (fails to reflect source methodology)

### Evidence
Addy `references/orchestration-patterns.md:345`.

### Glossary
### decision-flow

- **definition:** Decision flow is a structured decision tree for choosing the simplest valid orchestration architecture for a task. It biases strongly toward zero or minimal orchestration (direct invocation or user-driven commands), reserving parallel fan-out only for independent, repeating sub-tasks.
- **kind:** technique
- **source names:** addy: `Decision flow` · matt: — · rjm: —
- **decision:** D-372
- **concordance:** `docs/analysis/concordance/techniques.md#addy-decision-flow`

---

## D-373 — rationalization-tables

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-rationalization-tables
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `rationalization-tables`. Rationalization tables is an engineering technique for rationalization tables are anti-drift mechanisms embedded in skills that explicitly list the plausible-sounding excuses an agent generates to skip disciplined steps (such as omitting tests, assuming backwards compatibility, or bypassing verification) alongside direct refutations that hold the agent to project standards.

### Adopted from
Addy `docs/cursor-setup.md:183`.

### Dropped
None (clean source technique).

### Rejected alternatives
- rationalization-tables-practice (less specific than canonical technique name)
- generic-rationalization-tables (fails to reflect source methodology)

### Evidence
Addy `docs/cursor-setup.md:183`.

### Glossary
### rationalization-tables

- **definition:** Rationalization tables is an engineering technique for rationalization tables are anti-drift mechanisms embedded in skills that explicitly list the plausible-sounding excuses an agent generates to skip disciplined steps (such as omitting tests, assuming backwards compatibility, or bypassing verification) alongside direct refutations that hold the agent to project standards.
- **kind:** technique
- **source names:** addy: `rationalization tables` · matt: — · rjm: —
- **decision:** D-373
- **concordance:** `docs/analysis/concordance/techniques.md#addy-rationalization-tables`

---

## D-374 — enforce-simplicity

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-enforce-simplicity
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `enforce-simplicity`. Enforce simplicity is a counter-bias mechanism directing agents to resist overengineering and premature abstraction, demanding minimal lines of code and favoring boring, obvious solutions over expensive cleverness.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:88`.

### Dropped
addy defects (defects: cross-file-contradiction, internal-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- enforce-simplicity-practice (less specific than canonical technique name)
- generic-enforce-simplicity (fails to reflect source methodology)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:88`.

### Glossary
### enforce-simplicity

- **definition:** Enforce simplicity is a counter-bias mechanism directing agents to resist overengineering and premature abstraction, demanding minimal lines of code and favoring boring, obvious solutions over expensive cleverness.
- **kind:** technique
- **source names:** addy: `Enforce Simplicity` · matt: — · rjm: —
- **decision:** D-374
- **concordance:** `docs/analysis/concordance/techniques.md#addy-enforce-simplicity`

---

## D-375 — constraints-check

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-constraints-check
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `constraints-check`. Constraints check is a command utility that runs all configured project constraints against the current branch on demand, reporting immediate compliance status.

### Adopted from
Addy `.gemini/commands/constraints.toml:29`.

### Dropped
None (clean source technique).

### Rejected alternatives
- constraints-check-practice (less specific than canonical technique name)
- generic-constraints-check (fails to reflect source methodology)

### Evidence
Addy `.gemini/commands/constraints.toml:29`.

### Glossary
### constraints-check

- **definition:** Constraints check is a command utility that runs all configured project constraints against the current branch on demand, reporting immediate compliance status.
- **kind:** technique
- **source names:** addy: `/constraints check` · matt: — · rjm: —
- **decision:** D-375
- **concordance:** `docs/analysis/concordance/techniques.md#addy-constraints-check`

---

## D-376 — yieldtomain

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-yieldtomain
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `yieldtomain`. Yieldtomain is a task-chunking technique in browser JavaScript that yields control back to the main thread's event loop during long-running tasks. This prevents thread starvation, keeping the UI responsive and safeguarding INP.

### Adopted from
Addy `references/performance-checklist.md:49`.

### Dropped
None (clean source technique).

### Rejected alternatives
- yieldtomain-practice (less specific than canonical technique name)
- generic-yieldtomain (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:49`.

### Glossary
### yieldtomain

- **definition:** Yieldtomain is a task-chunking technique in browser JavaScript that yields control back to the main thread's event loop during long-running tasks. This prevents thread starvation, keeping the UI responsive and safeguarding INP.
- **kind:** technique
- **source names:** addy: `yieldToMain` · matt: — · rjm: —
- **decision:** D-376
- **concordance:** `docs/analysis/concordance/techniques.md#addy-yieldtomain`

---

## D-377 — keyboard-navigation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-keyboard-navigation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `keyboard-navigation`. Keyboard navigation is an engineering technique for in addy, Keyboard Navigation is a foundational WCAG 2.1 AA requirement ensuring that every interactive interface element can be discovered, focused, and triggered without a mouse. It requires semantic elements (<button>), explicit keyboard event handlers (onKeyDown), visible focus styling, and modal focus trapping.

### Adopted from
Addy `references/accessibility-checklist.md:15`.

### Dropped
None (clean source technique).

### Rejected alternatives
- keyboard-navigation-practice (less specific than canonical technique name)
- generic-keyboard-navigation (fails to reflect source methodology)

### Evidence
Addy `references/accessibility-checklist.md:15`.

### Glossary
### keyboard-navigation

- **definition:** Keyboard navigation is an engineering technique for in addy, Keyboard Navigation is a foundational WCAG 2.1 AA requirement ensuring that every interactive interface element can be discovered, focused, and triggered without a mouse. It requires semantic elements (<button>), explicit keyboard event handlers (onKeyDown), visible focus styling, and modal focus trapping.
- **kind:** technique
- **source names:** addy: `Keyboard Navigation` · matt: — · rjm: —
- **decision:** D-377
- **concordance:** `docs/analysis/concordance/techniques.md#addy-keyboard-navigation`

---

## D-378 — contain-intrinsic-size

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-contain-intrinsic-size
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `contain-intrinsic-size`. Contain intrinsic size is a companion CSS property used with `content-visibility: auto` to define a placeholder width and height for unrendered elements, ensuring accurate scrollbar sizing and preventing Cumulative Layout Shift when elements scroll into view.

### Adopted from
Addy `references/performance-checklist.md:84`.

### Dropped
None (clean source technique).

### Rejected alternatives
- contain-intrinsic-size-practice (less specific than canonical technique name)
- generic-contain-intrinsic-size (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:84`.

### Glossary
### contain-intrinsic-size

- **definition:** Contain intrinsic size is a companion CSS property used with `content-visibility: auto` to define a placeholder width and height for unrendered elements, ensuring accurate scrollbar sizing and preventing Cumulative Layout Shift when elements scroll into view.
- **kind:** technique
- **source names:** addy: `contain-intrinsic-size` · matt: — · rjm: —
- **decision:** D-378
- **concordance:** `docs/analysis/concordance/techniques.md#addy-contain-intrinsic-size`

---

## D-379 — content-visibility-auto

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-content-visibility-auto
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `content-visibility-auto`. Content visibility auto is a CSS rendering performance optimization that instructs the browser engine to skip layout, painting, and rendering work for off-screen elements until they approach the viewport, dramatically reducing initial DOM rendering time.

### Adopted from
Addy `references/performance-checklist.md:84`.

### Dropped
None (clean source technique).

### Rejected alternatives
- content-visibility-auto-practice (less specific than canonical technique name)
- generic-content-visibility-auto (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:84`.

### Glossary
### content-visibility-auto

- **definition:** Content visibility auto is a CSS rendering performance optimization that instructs the browser engine to skip layout, painting, and rendering work for off-screen elements until they approach the viewport, dramatically reducing initial DOM rendering time.
- **kind:** technique
- **source names:** addy: `content-visibility: auto` · matt: — · rjm: —
- **decision:** D-379
- **concordance:** `docs/analysis/concordance/techniques.md#addy-content-visibility-auto`

---

## D-380 — native-skills-system

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-native-skills-system
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `native-skills-system`. Native skills system is the native skills system represents host-level skill auto-discovery and on-demand invocation natively supported by the Gemini CLI. By automatically detecting `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` and activating them only when relevant to the user's prompt, it avoids monolithic system instruction files and preserves context budget.

### Adopted from
Addy `docs/gemini-cli-setup.md:7`.

### Dropped
None (clean source technique).

### Rejected alternatives
- native-skills-system-practice (less specific than canonical technique name)
- generic-native-skills-system (fails to reflect source methodology)

### Evidence
Addy `docs/gemini-cli-setup.md:7`.

### Glossary
### native-skills-system

- **definition:** Native skills system is the native skills system represents host-level skill auto-discovery and on-demand invocation natively supported by the Gemini CLI. By automatically detecting `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` and activating them only when relevant to the user's prompt, it avoids monolithic system instruction files and preserves context budget.
- **kind:** technique
- **source names:** addy: `native skills system` · matt: — · rjm: —
- **decision:** D-380
- **concordance:** `docs/analysis/concordance/techniques.md#addy-native-skills-system`

---

## D-381 — stampede-protection

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-stampede-protection
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `stampede-protection`. Stampede protection is an engineering technique for stampede protection is the umbrella architectural safeguard preventing a cache invalidation on a hot key from flooding origin services with concurrent recomputations. Addy notes that naive cache-aside implementations are particularly vulnerable, requiring mitigations such as in-flight promise deduplication, distributed locking, or serving stale data during background revalidation.

### Adopted from
Addy `references/performance-checklist.md:141`.

### Dropped
None (clean source technique).

### Rejected alternatives
- stampede-protection-practice (less specific than canonical technique name)
- generic-stampede-protection (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:141`.

### Glossary
### stampede-protection

- **definition:** Stampede protection is an engineering technique for stampede protection is the umbrella architectural safeguard preventing a cache invalidation on a hot key from flooding origin services with concurrent recomputations. Addy notes that naive cache-aside implementations are particularly vulnerable, requiring mitigations such as in-flight promise deduplication, distributed locking, or serving stale data during background revalidation.
- **kind:** technique
- **source names:** addy: `stampede protection` · matt: — · rjm: —
- **decision:** D-381
- **concordance:** `docs/analysis/concordance/techniques.md#addy-stampede-protection`

---

## D-382 — manage-confusion-actively

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-manage-confusion-actively
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `manage-confusion-actively`. Manage confusion actively is a critical behavioral rule halting autonomous execution whenever an agent detects contradictions or ambiguity, requiring it to name the confusion and present tradeoff options rather than guessing and hoping for the best.

### Adopted from
Addy `skills/using-agent-skills/SKILL.md:67`.

### Dropped
addy defects (defects: cross-file-contradiction, internal-contradiction, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- manage-confusion-actively-practice (less specific than canonical technique name)
- generic-manage-confusion-actively (fails to reflect source methodology)

### Evidence
Addy `skills/using-agent-skills/SKILL.md:67`.

### Glossary
### manage-confusion-actively

- **definition:** Manage confusion actively is a critical behavioral rule halting autonomous execution whenever an agent detects contradictions or ambiguity, requiring it to name the confusion and present tradeoff options rather than guessing and hoping for the best.
- **kind:** technique
- **source names:** addy: `Manage Confusion Actively` · matt: — · rjm: —
- **decision:** D-382
- **concordance:** `docs/analysis/concordance/techniques.md#addy-manage-confusion-actively`

---

## D-383 — trigger-evals

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-trigger-evals
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `trigger-evals`. Trigger evals is an engineering technique for evaluation technique that assesses whether a skill's description will trigger when an agent encounters natural language user requests. Evaluates TF-IDF similarity of positive test prompts against the entire catalog to guarantee target skills rank in the top-k, while ensuring negative prompts do not rank first.

### Adopted from
Addy `scripts/run-evals.js:7`.

### Dropped
None (clean source technique).

### Rejected alternatives
- trigger-evals-practice (less specific than canonical technique name)
- generic-trigger-evals (fails to reflect source methodology)

### Evidence
Addy `scripts/run-evals.js:7`.

### Glossary
### trigger-evals

- **definition:** Trigger evals is an engineering technique for evaluation technique that assesses whether a skill's description will trigger when an agent encounters natural language user requests. Evaluates TF-IDF similarity of positive test prompts against the entire catalog to guarantee target skills rank in the top-k, while ensuring negative prompts do not rank first.
- **kind:** technique
- **source names:** addy: `Trigger evals` · matt: — · rjm: —
- **decision:** D-383
- **concordance:** `docs/analysis/concordance/techniques.md#addy-trigger-evals`

---

## D-384 — ttfb-diagnosis

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-ttfb-diagnosis
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `ttfb-diagnosis`. Ttfb diagnosis is a structured diagnostic technique to troubleshoot server response latency (> 800ms). It breaks TTFB into distinct network and compute stages (DNS, connection/TLS, server execution), prescribing targeted remediations for each.

### Adopted from
Addy `references/performance-checklist.md:25`.

### Dropped
None (clean source technique).

### Rejected alternatives
- ttfb-diagnosis-practice (less specific than canonical technique name)
- generic-ttfb-diagnosis (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:25`.

### Glossary
### ttfb-diagnosis

- **definition:** Ttfb diagnosis is a structured diagnostic technique to troubleshoot server response latency (> 800ms). It breaks TTFB into distinct network and compute stages (DNS, connection/TLS, server execution), prescribing targeted remediations for each.
- **kind:** technique
- **source names:** addy: `TTFB Diagnosis` · matt: — · rjm: —
- **decision:** D-384
- **concordance:** `docs/analysis/concordance/techniques.md#addy-ttfb-diagnosis`

---

## D-385 — bfcache

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-bfcache
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `bfcache`. Bfcache is the browser back/forward cache that preserves full in-memory page snapshots for instant back/forward navigation. Addy mandates eliminating `unload` listeners and avoiding `Cache-Control: no-store` on HTML documents to keep pages eligible for bfcache.

### Adopted from
Addy `references/performance-checklist.md:85`.

### Dropped
None (clean source technique).

### Rejected alternatives
- bfcache-practice (less specific than canonical technique name)
- generic-bfcache (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:85`.

### Glossary
### bfcache

- **definition:** Bfcache is the browser back/forward cache that preserves full in-memory page snapshots for instant back/forward navigation. Addy mandates eliminating `unload` listeners and avoiding `Cache-Control: no-store` on HTML documents to keep pages eligible for bfcache.
- **kind:** technique
- **source names:** addy: `bfcache` · matt: — · rjm: —
- **decision:** D-385
- **concordance:** `docs/analysis/concordance/techniques.md#addy-bfcache`

---

## D-386 — subagents

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-subagents
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `subagents`. Subagents is an engineering technique that subagents in addy represent Claude Code's stable parallelism primitive for executing independent tasks concurrently. Operating in their own context windows, subagents report findings strictly back to the spawning main agent without peer-to-peer messaging, making them ideal for parallel fan-out inspections (such as /ship) and research isolation.

### Adopted from
Addy `references/orchestration-patterns.md:125`.

### Dropped
None (clean source technique).

### Rejected alternatives
- subagents-practice (less specific than canonical technique name)
- generic-subagents (fails to reflect source methodology)

### Evidence
Addy `references/orchestration-patterns.md:125`.

### Glossary
### subagents

- **definition:** Subagents is an engineering technique that subagents in addy represent Claude Code's stable parallelism primitive for executing independent tasks concurrently. Operating in their own context windows, subagents report findings strictly back to the spawning main agent without peer-to-peer messaging, making them ideal for parallel fan-out inspections (such as /ship) and research isolation.
- **kind:** technique
- **source names:** addy: `Subagents` · matt: — · rjm: —
- **decision:** D-386
- **concordance:** `docs/analysis/concordance/techniques.md#addy-subagents`

---

## D-387 — scheduler-posttask

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-scheduler-posttask
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `scheduler-posttask`. Scheduler posttask is a prioritized task-scheduling browser API allowing web applications to schedule tasks with specific priorities ('user-blocking', 'user-visible', 'background') so critical UI updates take precedence over background work.

### Adopted from
Addy `references/performance-checklist.md:50`.

### Dropped
None (clean source technique).

### Rejected alternatives
- scheduler-posttask-practice (less specific than canonical technique name)
- generic-scheduler-posttask (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:50`.

### Glossary
### scheduler-posttask

- **definition:** Scheduler posttask is a prioritized task-scheduling browser API allowing web applications to schedule tasks with specific priorities ('user-blocking', 'user-visible', 'background') so critical UI updates take precedence over background work.
- **kind:** technique
- **source names:** addy: `scheduler.postTask()` · matt: — · rjm: —
- **decision:** D-387
- **concordance:** `docs/analysis/concordance/techniques.md#addy-scheduler-posttask`

---

## D-388 — skill-execution-harness

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-skills
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `skill-execution-harness`. Skill execution harness is an engineering technique that skills are the fundamental procedural unit in addy's architecture, providing structured instructions that turn LLM capabilities into deterministic engineering workflows with verifiable exit gates.

### Adopted from
Addy `AGENTS.md:74`.

### Dropped
None (clean source technique).

### Rejected alternatives
- skill-execution-harness-practice (less specific than canonical technique name)
- generic-skill-execution-harness (fails to reflect source methodology)

### Evidence
Addy `AGENTS.md:74`.

### Glossary
### skill-execution-harness

- **definition:** Skill execution harness is an engineering technique that skills are the fundamental procedural unit in addy's architecture, providing structured instructions that turn LLM capabilities into deterministic engineering workflows with verifiable exit gates.
- **kind:** technique
- **source names:** addy: `Skills` · matt: — · rjm: —
- **decision:** D-388
- **concordance:** `docs/analysis/concordance/techniques.md#addy-skills`

---

## D-389 — explicit-context-loading

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-explicit-context-loading
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `explicit-context-loading`. Explicit context loading is an engineering technique for explicit Context Loading allows developers to bypass automated routing heuristics by directly referencing skill files via `@` syntax, providing deterministic execution when entering critical lifecycle phases.

### Adopted from
Addy `docs/gemini-cli-setup.md:98`.

### Dropped
None (clean source technique).

### Rejected alternatives
- explicit-context-loading-practice (less specific than canonical technique name)
- generic-explicit-context-loading (fails to reflect source methodology)

### Evidence
Addy `docs/gemini-cli-setup.md:98`.

### Glossary
### explicit-context-loading

- **definition:** Explicit context loading is an engineering technique for explicit Context Loading allows developers to bypass automated routing heuristics by directly referencing skill files via `@` syntax, providing deterministic execution when entering critical lifecycle phases.
- **kind:** technique
- **source names:** addy: `Explicit Context Loading` · matt: — · rjm: —
- **decision:** D-389
- **concordance:** `docs/analysis/concordance/techniques.md#addy-explicit-context-loading`

---

## D-390 — cross-session-memory

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-cross-session-memory
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `cross-session-memory`. Cross session memory is an engineering technique that cross-session memory represents the architectural ability to preserve and restore learned codebase knowledge, task status, and technical constraints across independent agent invocations without relying on fragile conversational history or manual prompt re-feeding.

### Adopted from
Addy `docs/comparison.md:111`.

### Dropped
addy defects (not-implemented) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- cross-session-memory-practice (less specific than canonical technique name)
- generic-cross-session-memory (fails to reflect source methodology)

### Evidence
Addy `docs/comparison.md:111`.

### Glossary
### cross-session-memory

- **definition:** Cross session memory is an engineering technique that cross-session memory represents the architectural ability to preserve and restore learned codebase knowledge, task status, and technical constraints across independent agent invocations without relying on fragile conversational history or manual prompt re-feeding.
- **kind:** technique
- **source names:** addy: `cross-session memory` · matt: — · rjm: —
- **decision:** D-390
- **concordance:** `docs/analysis/concordance/techniques.md#addy-cross-session-memory`

---

## D-391 — requestidlecallback

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-requestidlecallback
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `requestidlecallback`. Requestidlecallback is a standard browser API that schedules tasks during browser idle periods, preventing analytics flushes, telemetry, and prefetching from competing with high-priority rendering or input processing.

### Adopted from
Addy `references/performance-checklist.md:51`.

### Dropped
None (clean source technique).

### Rejected alternatives
- requestidlecallback-practice (less specific than canonical technique name)
- generic-requestidlecallback (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:51`.

### Glossary
### requestidlecallback

- **definition:** Requestidlecallback is a standard browser API that schedules tasks during browser idle periods, preventing analytics flushes, telemetry, and prefetching from competing with high-priority rendering or input processing.
- **kind:** technique
- **source names:** addy: `requestIdleCallback` · matt: — · rjm: —
- **decision:** D-391
- **concordance:** `docs/analysis/concordance/techniques.md#addy-requestidlecallback`

---

## D-392 — aria-live-regions

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-aria-live-regions
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `aria-live-regions`. Aria live regions is an engineering technique for in addy, ARIA Live Regions provide the standard accessibility mechanism for broadcasting asynchronous UI updates to screen readers without shifting keyboard focus, distinguishing polite non-disruptive notifications (role="status") from assertive interruptive alerts (role="alert").

### Adopted from
Addy `references/accessibility-checklist.md:10`.

### Dropped
None (clean source technique).

### Rejected alternatives
- aria-live-regions-practice (less specific than canonical technique name)
- generic-aria-live-regions (fails to reflect source methodology)

### Evidence
Addy `references/accessibility-checklist.md:10`.

### Glossary
### aria-live-regions

- **definition:** Aria live regions is an engineering technique for in addy, ARIA Live Regions provide the standard accessibility mechanism for broadcasting asynchronous UI updates to screen readers without shifting keyboard focus, distinguishing polite non-disruptive notifications (role="status") from assertive interruptive alerts (role="alert").
- **kind:** technique
- **source names:** addy: `ARIA Live Regions` · matt: — · rjm: —
- **decision:** D-392
- **concordance:** `docs/analysis/concordance/techniques.md#addy-aria-live-regions`

---

## D-393 — isinputpending

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-isinputpending
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `isinputpending`. Isinputpending is a browser API allowing JavaScript execution loops to inspect the input event queue and yield only when an actual user interaction is waiting, eliminating unnecessary yielding overhead while protecting INP.

### Adopted from
Addy `references/performance-checklist.md:50`.

### Dropped
None (clean source technique).

### Rejected alternatives
- isinputpending-practice (less specific than canonical technique name)
- generic-isinputpending (fails to reflect source methodology)

### Evidence
Addy `references/performance-checklist.md:50`.

### Glossary
### isinputpending

- **definition:** Isinputpending is a browser API allowing JavaScript execution loops to inspect the input event queue and yield only when an actual user interaction is waiting, eliminating unnecessary yielding overhead while protecting INP.
- **kind:** technique
- **source names:** addy: `isInputPending()` · matt: — · rjm: —
- **decision:** D-393
- **concordance:** `docs/analysis/concordance/techniques.md#addy-isinputpending`

---

## D-394 — mcp-integration

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-mcp-integration
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `mcp-integration`. Mcp integration is an engineering technique for mCP Integration connects AI agents to live runtime environments (such as Chrome DevTools for browser testing), enabling skills to verify real execution state instead of making ungrounded assumptions based solely on static code.

### Adopted from
Addy `docs/gemini-cli-setup.md:83`.

### Dropped
None (clean source technique).

### Rejected alternatives
- mcp-integration-practice (less specific than canonical technique name)
- generic-mcp-integration (fails to reflect source methodology)

### Evidence
Addy `docs/gemini-cli-setup.md:83`.

### Glossary
### mcp-integration

- **definition:** Mcp integration is an engineering technique for mCP Integration connects AI agents to live runtime environments (such as Chrome DevTools for browser testing), enabling skills to verify real execution state instead of making ungrounded assumptions based solely on static code.
- **kind:** technique
- **source names:** addy: `MCP Integration` · matt: — · rjm: —
- **decision:** D-394
- **concordance:** `docs/analysis/concordance/techniques.md#addy-mcp-integration`

---

## D-395 — anti-rationalization

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-anti-rationalization
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `anti-rationalization`. Anti rationalization is an engineering technique for anti-rationalization is a defensive prompt-engineering technique that anticipates common cognitive excuses agents use to skip steps (such as "I'll write tests later") and binds them to strict counter-arguments.

### Adopted from
Addy `README.md:342`.

### Dropped
addy defects (defects: doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- anti-rationalization-practice (less specific than canonical technique name)
- generic-anti-rationalization (fails to reflect source methodology)

### Evidence
Addy `README.md:342`.

### Glossary
### anti-rationalization

- **definition:** Anti rationalization is an engineering technique for anti-rationalization is a defensive prompt-engineering technique that anticipates common cognitive excuses agents use to skip steps (such as "I'll write tests later") and binds them to strict counter-arguments.
- **kind:** technique
- **source names:** addy: `Anti-Rationalization` · matt: — · rjm: —
- **decision:** D-395
- **concordance:** `docs/analysis/concordance/techniques.md#addy-anti-rationalization`

---

## D-396 — evals-framework

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-evals-framework
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `evals-framework`. Evals framework is the three-tier testing framework in addy that validates skill structure, measures prompt routing accuracy, and runs behavioral test cases against headless agents.

### Adopted from
Addy `external/api-and-interface-design.md:15`.

### Dropped
addy defects (defects: doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- evals-framework-practice (less specific than canonical technique name)
- generic-evals-framework (fails to reflect source methodology)

### Evidence
Addy `external/api-and-interface-design.md:15`.

### Glossary
### evals-framework

- **definition:** Evals framework is the three-tier testing framework in addy that validates skill structure, measures prompt routing accuracy, and runs behavioral test cases against headless agents.
- **kind:** technique
- **source names:** addy: `Evals framework` · matt: — · rjm: —
- **decision:** D-396
- **concordance:** `docs/analysis/concordance/techniques.md#addy-evals-framework`

---

## D-397 — context-efficiency

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-context-efficiency
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `context-efficiency`. Context efficiency is an engineering technique for context Efficiency establishes constraints (keeping SKILL.md under 500 lines, using progressive disclosure, preferring executable scripts over verbose inline code) to minimize prompt overhead and prevent context window degradation during agent operations.

### Adopted from
Addy `docs/skill-anatomy.md:121`.

### Dropped
addy defects (defects: [doc-drift, internal-contradiction] in docs/skill-anatomy.md) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- context-efficiency-practice (less specific than canonical technique name)
- generic-context-efficiency (fails to reflect source methodology)

### Evidence
Addy `docs/skill-anatomy.md:121`.

### Glossary
### context-efficiency

- **definition:** Context efficiency is an engineering technique for context Efficiency establishes constraints (keeping SKILL.md under 500 lines, using progressive disclosure, preferring executable scripts over verbose inline code) to minimize prompt overhead and prevent context window degradation during agent operations.
- **kind:** technique
- **source names:** addy: `Context Efficiency` · matt: — · rjm: —
- **decision:** D-397
- **concordance:** `docs/analysis/concordance/techniques.md#addy-context-efficiency`

---

## D-398 — intent-skill-mapping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-intent-skill-mapping
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `intent-skill-mapping`. Intent skill mapping is an engineering technique for intent to skill mapping provides an automated classification mechanism that connects ambiguous or natural-language user requests directly to structured skill workflows, ensuring agents adhere to disciplined processes even when users do not explicitly invoke commands.

### Adopted from
Addy `AGENTS.md:24`.

### Dropped
addy defects (defects: missing-path) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- intent-skill-mapping-practice (less specific than canonical technique name)
- generic-intent-skill-mapping (fails to reflect source methodology)

### Evidence
Addy `AGENTS.md:24`.

### Glossary
### intent-skill-mapping

- **definition:** Intent skill mapping is an engineering technique for intent to skill mapping provides an automated classification mechanism that connects ambiguous or natural-language user requests directly to structured skill workflows, ensuring agents adhere to disciplined processes even when users do not explicitly invoke commands.
- **kind:** technique
- **source names:** addy: `Intent → Skill Mapping` · matt: — · rjm: —
- **decision:** D-398
- **concordance:** `docs/analysis/concordance/techniques.md#addy-intent-skill-mapping`

---

## D-399 — eval-framework

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-eval-framework
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `eval-framework`. Eval framework is the eval framework provides automated testing for the skill pack itself, treating skills as software artifacts that require trigger, routing, and behavioral regression testing against model updates.

### Adopted from
Addy `docs/comparison.md:11`.

### Dropped
None (clean source technique).

### Rejected alternatives
- eval-framework-practice (less specific than canonical technique name)
- generic-eval-framework (fails to reflect source methodology)

### Evidence
Addy `docs/comparison.md:11`.

### Glossary
### eval-framework

- **definition:** Eval framework is the eval framework provides automated testing for the skill pack itself, treating skills as software artifacts that require trigger, routing, and behavioral regression testing against model updates.
- **kind:** technique
- **source names:** addy: `eval framework` · matt: — · rjm: —
- **decision:** D-399
- **concordance:** `docs/analysis/concordance/techniques.md#addy-eval-framework`

---

## D-400 — session-hooks

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#addy-session-hooks
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `session-hooks`. Session hooks is an engineering technique for session Hooks automate the injection of meta-skills or environment validation at session start, ensuring the agent is equipped with workflow routing without requiring manual prompt initialization by the developer.

### Adopted from
Addy `docs/gemini-cli-setup.md:92`.

### Dropped
addy defects (clean (docs/gemini-cli-setup.md has no defects; note hooks/session-start.sh carries defects: script-bug, doc-drift)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- session-hooks-practice (less specific than canonical technique name)
- generic-session-hooks (fails to reflect source methodology)

### Evidence
Addy `docs/gemini-cli-setup.md:92`.

### Glossary
### session-hooks

- **definition:** Session hooks is an engineering technique for session Hooks automate the injection of meta-skills or environment validation at session start, ensuring the agent is equipped with workflow routing without requiring manual prompt initialization by the developer.
- **kind:** technique
- **source names:** addy: `Session Hooks` · matt: — · rjm: —
- **decision:** D-400
- **concordance:** `docs/analysis/concordance/techniques.md#addy-session-hooks`

---

## D-401 — pulling-from-the-pile

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-pulling-from-the-pile
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `pulling-from-the-pile`. Pulling from the pile is an engineering technique for pulling from the pile defines the core extraction technique of treating raw authoring material as a quarry rather than a rigid outline. Material can be freely split, recombined, or paraphrased to serve the article's voice, while missing ideas are explicitly called out as gaps to be filled or cut.

### Adopted from
Matt `skills/in-progress/writing-beats/SKILL.md:54`.

### Dropped
None (clean source technique).

### Rejected alternatives
- pulling-from-the-pile-practice (less specific than canonical technique name)
- generic-pulling-from-the-pile (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/writing-beats/SKILL.md:54`.

### Glossary
### pulling-from-the-pile

- **definition:** Pulling from the pile is an engineering technique for pulling from the pile defines the core extraction technique of treating raw authoring material as a quarry rather than a rigid outline. Material can be freely split, recombined, or paraphrased to serve the article's voice, while missing ideas are explicitly called out as gaps to be filled or cut.
- **kind:** technique
- **source names:** addy: — · matt: `Pulling from the pile` · rjm: —
- **decision:** D-401
- **concordance:** `docs/analysis/concordance/techniques.md#matt-pulling-from-the-pile`

---

## D-402 — redact

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-redact
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `redact`. Redact is a critical privacy and safety technique in diagnosing bugs that mandates replacing credentials and secrets with `<REDACTED>` and keeping secrets in environment variables. Without this sanitization, auth tokens and credentials would be leaked into terminal context and recorded logs.

### Adopted from
Matt `skills/engineering/diagnosing-bugs/SKILL.md:12`.

### Dropped
None (clean source technique).

### Rejected alternatives
- redact-practice (less specific than canonical technique name)
- generic-redact (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/diagnosing-bugs/SKILL.md:12`.

### Glossary
### redact

- **definition:** Redact is a critical privacy and safety technique in diagnosing bugs that mandates replacing credentials and secrets with `<REDACTED>` and keeping secrets in environment variables. Without this sanitization, auth tokens and credentials would be leaked into terminal context and recorded logs.
- **kind:** technique
- **source names:** addy: — · matt: `Redact` · rjm: —
- **decision:** D-402
- **concordance:** `docs/analysis/concordance/techniques.md#matt-redact`

---

## D-403 — merge-rebase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-merge-rebase
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `merge-rebase`. Merge rebase is an engineering technique for git branch integration operations (merging or rebasing) that result in file-level conflicts. The resolving-merge-conflicts skill provides a structured procedure to inspect conflict state, understand intent from commit messages and PRs, resolve hunks without inventing behavior, and verify with automated checks.

### Adopted from
Matt `skills/engineering/resolving-merge-conflicts/SKILL.md:6`.

### Dropped
None (clean source technique).

### Rejected alternatives
- merge-rebase-practice (less specific than canonical technique name)
- generic-merge-rebase (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/resolving-merge-conflicts/SKILL.md:6`.

### Glossary
### merge-rebase

- **definition:** Merge rebase is an engineering technique for git branch integration operations (merging or rebasing) that result in file-level conflicts. The resolving-merge-conflicts skill provides a structured procedure to inspect conflict state, understand intent from commit messages and PRs, resolve hunks without inventing behavior, and verify with automated checks.
- **kind:** technique
- **source names:** addy: — · matt: `merge/rebase` · rjm: —
- **decision:** D-403
- **concordance:** `docs/analysis/concordance/techniques.md#matt-merge-rebase`

---

## D-404 — upserts

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-upserts
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `upserts`. Upserts is an engineering technique for upserting combines updating existing values with inserting missing ones. In the wizard skill, the `write_env` helper parses `.env` files line by line, replacing matching key definitions while preserving formatting and comments, or appending new keys when not found.

### Adopted from
Matt `external/wizard.md:40`.

### Dropped
None (clean source technique).

### Rejected alternatives
- upserts-practice (less specific than canonical technique name)
- generic-upserts (fails to reflect source methodology)

### Evidence
Matt `external/wizard.md:40`.

### Glossary
### upserts

- **definition:** Upserts is an engineering technique for upserting combines updating existing values with inserting missing ones. In the wizard skill, the `write_env` helper parses `.env` files line by line, replacing matching key definitions while preserving formatting and comments, or appending new keys when not found.
- **kind:** technique
- **source names:** addy: — · matt: `upserts` · rjm: —
- **decision:** D-404
- **concordance:** `docs/analysis/concordance/techniques.md#matt-upserts`

---

## D-405 — write-env

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-write-env
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `write-env`. Write env is a bash helper function in the wizard template library that performs idempotent upserts into an environment file (`.env`), ensuring that captured credentials and variables are saved without duplicating keys or corrupting file formatting on repeated wizard runs.

### Adopted from
Matt `skills/engineering/wizard/template.sh:128`.

### Dropped
None (clean source technique).

### Rejected alternatives
- write-env-practice (less specific than canonical technique name)
- generic-write-env (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:128`.

### Glossary
### write-env

- **definition:** Write env is a bash helper function in the wizard template library that performs idempotent upserts into an environment file (`.env`), ensuring that captured credentials and variables are saved without duplicating keys or corrupting file formatting on repeated wizard runs.
- **kind:** technique
- **source names:** addy: — · matt: `write_env` · rjm: —
- **decision:** D-405
- **concordance:** `docs/analysis/concordance/techniques.md#matt-write-env`

---

## D-406 — cross-skill-invocation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-cross-skill-invocation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `cross-skill-invocation`. Cross skill invocation is a composition pattern and calling convention where one skill invokes another by explicitly instructing the agent to call the harness Skill tool. This replaces bare slash-command mentions in prose, raising invocation reliability and ensuring harness-neutral interoperability.

### Adopted from
Matt `.changeset/skill-tool-invocation-terminology.md:5`.

### Dropped
None (clean source technique).

### Rejected alternatives
- cross-skill-invocation-practice (less specific than canonical technique name)
- generic-cross-skill-invocation (fails to reflect source methodology)

### Evidence
Matt `.changeset/skill-tool-invocation-terminology.md:5`.

### Glossary
### cross-skill-invocation

- **definition:** Cross skill invocation is a composition pattern and calling convention where one skill invokes another by explicitly instructing the agent to call the harness Skill tool. This replaces bare slash-command mentions in prose, raising invocation reliability and ensuring harness-neutral interoperability.
- **kind:** technique
- **source names:** addy: — · matt: `cross-skill invocation` · rjm: —
- **decision:** D-406
- **concordance:** `docs/analysis/concordance/techniques.md#matt-cross-skill-invocation`

---

## D-407 — pause

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-pause
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `pause`. Pause is a synchronization helper function in the wizard framework that halts execution until the user manually performs an out-of-band action (such as navigating a dashboard or confirming an external state) and presses Enter to proceed.

### Adopted from
Matt `skills/engineering/wizard/template.sh:77`.

### Dropped
None (clean source technique).

### Rejected alternatives
- pause-practice (less specific than canonical technique name)
- generic-pause (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:77`.

### Glossary
### pause

- **definition:** Pause is a synchronization helper function in the wizard framework that halts execution until the user manually performs an out-of-band action (such as navigating a dashboard or confirming an external state) and presses Enter to proceed.
- **kind:** technique
- **source names:** addy: — · matt: `pause` · rjm: —
- **decision:** D-407
- **concordance:** `docs/analysis/concordance/techniques.md#matt-pause`

---

## D-408 — typechecking

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-typechecking
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `typechecking`. Typechecking is a continuous static verification technique mandated during implementation to provide rapid feedback on type errors and syntax mismatches before running automated tests.

### Adopted from
Matt `skills/engineering/implement/SKILL.md:11`.

### Dropped
None (clean source technique).

### Rejected alternatives
- typechecking-practice (less specific than canonical technique name)
- generic-typechecking (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/implement/SKILL.md:11`.

### Glossary
### typechecking

- **definition:** Typechecking is a continuous static verification technique mandated during implementation to provide rapid feedback on type errors and syntax mismatches before running automated tests.
- **kind:** technique
- **source names:** addy: — · matt: `typechecking` · rjm: —
- **decision:** D-408
- **concordance:** `docs/analysis/concordance/techniques.md#matt-typechecking`

---

## D-409 — writing-beats

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-writing-beats
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `writing-beats`. Writing beats is an exploit-phase writing skill that organizes prose construction into a sequence of discrete narrative beats. It guarantees reader comprehension by checking that every concept is grounded before any beat relies on it, offering branching choices at each step.

### Adopted from
Matt `skills/in-progress/writing-beats/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- writing-beats-practice (less specific than canonical technique name)
- generic-writing-beats (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/writing-beats/SKILL.md:3`.

### Glossary
### writing-beats

- **definition:** Writing beats is an exploit-phase writing skill that organizes prose construction into a sequence of discrete narrative beats. It guarantees reader comprehension by checking that every concept is grounded before any beat relies on it, offering branching choices at each step.
- **kind:** technique
- **source names:** addy: — · matt: `writing-beats` · rjm: —
- **decision:** D-409
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-beats`

---

## D-410 — grilling-discipline

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grilling-discipline
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `grilling-discipline`. Grilling discipline is the questioning technique governing loop-me interactions: persistent interrogation structured as discrete rounds of questions where every question includes a proposed default answer. This structure accelerates user feedback, eliminates decision paralysis, and rapidly drives specifications toward completion.

### Adopted from
Matt `skills/in-progress/loop-me/SKILL.md:8`.

### Dropped
None (clean source technique).

### Rejected alternatives
- grilling-discipline-practice (less specific than canonical technique name)
- generic-grilling-discipline (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/loop-me/SKILL.md:8`.

### Glossary
### grilling-discipline

- **definition:** Grilling discipline is the questioning technique governing loop-me interactions: persistent interrogation structured as discrete rounds of questions where every question includes a proposed default answer. This structure accelerates user feedback, eliminates decision paralysis, and rapidly drives specifications toward completion.
- **kind:** technique
- **source names:** addy: — · matt: `grilling discipline` · rjm: —
- **decision:** D-410
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grilling-discipline`

---

## D-411 — drill

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-drill
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `drill`. Drill is a drill is an active practice exercise within the teach skill executed via a tight feedback loop where difficulty is utilized as a learning tool. Unlike passive reading, a drill refuses to accept superficial acknowledgment, holding the user accountable until retention and understanding are demonstrated.

### Adopted from
Matt `external/teach.md:39`.

### Dropped
matt defects (defects: orphan, doc-drift, missing-path) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- drill-practice (less specific than canonical technique name)
- generic-drill (fails to reflect source methodology)

### Evidence
Matt `external/teach.md:39`.

### Glossary
### drill

- **definition:** Drill is a drill is an active practice exercise within the teach skill executed via a tight feedback loop where difficulty is utilized as a learning tool. Unlike passive reading, a drill refuses to accept superficial acknowledgment, holding the user accountable until retention and understanding are demonstrated.
- **kind:** technique
- **source names:** addy: — · matt: `drill` · rjm: —
- **decision:** D-411
- **concordance:** `docs/analysis/concordance/techniques.md#matt-drill`

---

## D-412 — talk-normal

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-talk-normal
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `talk-normal`. Talk normal is an engineering technique for `/talk-normal` is an informal concision command that attempts to de-jargonize agent speech. In Matt's evaluation, such commands lack an anchor in agreed project vocabulary and lead models to strip nuance rather than restate missing foundational premises.

### Adopted from
Matt `external/wait-what.md:32`.

### Dropped
matt defects (not-implemented) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- talk-normal-practice (less specific than canonical technique name)
- generic-talk-normal (fails to reflect source methodology)

### Evidence
Matt `external/wait-what.md:32`.

### Glossary
### talk-normal

- **definition:** Talk normal is an engineering technique for `/talk-normal` is an informal concision command that attempts to de-jargonize agent speech. In Matt's evaluation, such commands lack an anchor in agreed project vocabulary and lead models to strip nuance rather than restate missing foundational premises.
- **kind:** technique
- **source names:** addy: — · matt: `/talk-normal` · rjm: —
- **decision:** D-412
- **concordance:** `docs/analysis/concordance/techniques.md#matt-talk-normal`

---

## D-413 — native-blocking-link

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-native-blocking-link
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `native-blocking-link`. Native blocking link is an engineering technique for gitLab's platform feature for linking blocked issues to their blockers, used by wayfinder to establish machine-verifiable dependency graphs across tickets.

### Adopted from
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43`.

### Dropped
None (clean source technique).

### Rejected alternatives
- native-blocking-link-practice (less specific than canonical technique name)
- generic-native-blocking-link (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43`.

### Glossary
### native-blocking-link

- **definition:** Native blocking link is an engineering technique for gitLab's platform feature for linking blocked issues to their blockers, used by wayfinder to establish machine-verifiable dependency graphs across tickets.
- **kind:** technique
- **source names:** addy: — · matt: `native blocking link` · rjm: —
- **decision:** D-413
- **concordance:** `docs/analysis/concordance/techniques.md#matt-native-blocking-link`

---

## D-414 — compaction

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-compaction
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `compaction`. Compaction is an automated or user-initiated context compression mechanism that summarises past conversation turns, which Matt cautions against when transitioning from `/to-spec` to `/to-tickets` because lossy compaction destroys detailed specification context.

### Adopted from
Matt `external/to-spec.md:57`.

### Dropped
None (clean source technique).

### Rejected alternatives
- compaction-practice (less specific than canonical technique name)
- generic-compaction (fails to reflect source methodology)

### Evidence
Matt `external/to-spec.md:57`.

### Glossary
### compaction

- **definition:** Compaction is an automated or user-initiated context compression mechanism that summarises past conversation turns, which Matt cautions against when transitioning from `/to-spec` to `/to-tickets` because lossy compaction destroys detailed specification context.
- **kind:** technique
- **source names:** addy: — · matt: `compaction` · rjm: —
- **decision:** D-414
- **concordance:** `docs/analysis/concordance/techniques.md#matt-compaction`

---

## D-415 — decision-mapping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-decision-mapping
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `decision-mapping`. Decision mapping is an engineering technique for `decision-mapping` was the original name of the skill before being reframed and renamed to `wayfinder` in v1.1. The term was retired because 'decision map' was perceived as jargon and inaccurate, given that only a subset of map tickets were pure decisions; it is marked `deprecated: true`.

### Adopted from
Matt `docs/engineering/wayfinder.md:86`.

### Dropped
None (clean source technique).

### Rejected alternatives
- decision-mapping-practice (less specific than canonical technique name)
- generic-decision-mapping (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/wayfinder.md:86`.

### Glossary
### decision-mapping

- **definition:** Decision mapping is an engineering technique for `decision-mapping` was the original name of the skill before being reframed and renamed to `wayfinder` in v1.1. The term was retired because 'decision map' was perceived as jargon and inaccurate, given that only a subset of map tickets were pure decisions; it is marked `deprecated: true`.
- **kind:** technique
- **source names:** addy: — · matt: `decision-mapping` · rjm: —
- **decision:** D-415
- **concordance:** `docs/analysis/concordance/techniques.md#matt-decision-mapping`

---

## D-416 — conversational-wizard-flow

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-wizard
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `conversational-wizard-flow`. Conversational wizard flow is an engineering technique for `wizard` bridges the gap between AI agents and human-only credentials/clicks. Because agents cannot interact with external browser consoles or securely hold human third-party passwords, `wizard` scopes the procedure and authors an interactive bash script that drives the human operator through each screen, capturing values directly into `.env` and GitHub Actions secrets.

### Adopted from
Matt `skills/engineering/wizard/SKILL.md:8`.

### Dropped
matt defects (defects: doc-drift, script-bug (from external-wizard-md.md: external doc places wizard under upkeep while in repo it is under engineering; arrow keys in ask prompt insert escape codes)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- conversational-wizard-flow-practice (less specific than canonical technique name)
- generic-conversational-wizard (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/SKILL.md:8`.

### Glossary
### conversational-wizard-flow

- **definition:** Conversational wizard flow is an engineering technique for `wizard` bridges the gap between AI agents and human-only credentials/clicks. Because agents cannot interact with external browser consoles or securely hold human third-party passwords, `wizard` scopes the procedure and authors an interactive bash script that drives the human operator through each screen, capturing values directly into `.env` and GitHub Actions secrets.
- **kind:** technique
- **source names:** addy: — · matt: `wizard` · rjm: —
- **decision:** D-416
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wizard`

---

## D-417 — shellcheck

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-shellcheck
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `shellcheck`. Shellcheck is an engineering technique for shellCheck is an industry-standard static analysis tool for shell scripts. In the wizard authoring workflow, running ShellCheck verifies quoting, variable expansion, and portability, ensuring scripts run reliably across varied user shell environments.

### Adopted from
Matt `external/wizard.md:41`.

### Dropped
None (clean source technique).

### Rejected alternatives
- shellcheck-practice (less specific than canonical technique name)
- generic-shellcheck (fails to reflect source methodology)

### Evidence
Matt `external/wizard.md:41`.

### Glossary
### shellcheck

- **definition:** Shellcheck is an engineering technique for shellCheck is an industry-standard static analysis tool for shell scripts. In the wizard authoring workflow, running ShellCheck verifies quoting, variable expansion, and portability, ensuring scripts run reliably across varied user shell environments.
- **kind:** technique
- **source names:** addy: — · matt: `shellcheck` · rjm: —
- **decision:** D-417
- **concordance:** `docs/analysis/concordance/techniques.md#matt-shellcheck`

---

## D-418 — grill-me

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grill-me
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `grill-me`. Grill me is a stateless, conversational interview skill that subjects early, uncommitted ideas to relentless inquiry. By asking frontier questions in structured rounds while intentionally refusing to create files or jump into plan generation, it forces the user to confront assumptions and clarify intent.

### Adopted from
Matt `skills/productivity/grill-me/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- grill-me-practice (less specific than canonical technique name)
- generic-grill-me (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/grill-me/SKILL.md:3`.

### Glossary
### grill-me

- **definition:** Grill me is a stateless, conversational interview skill that subjects early, uncommitted ideas to relentless inquiry. By asking frontier questions in structured rounds while intentionally refusing to create files or jump into plan generation, it forces the user to confront assumptions and clarify intent.
- **kind:** technique
- **source names:** addy: — · matt: `grill-me` · rjm: —
- **decision:** D-418
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grill-me`

---

## D-419 — the-research-skill

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-the-research-skill
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `the-research-skill`. The research skill is a shaping skill that offloads external documentation and fact-finding to an asynchronous background agent reading primary sources. Producing a cited Markdown file in the repo preserves the main session's context window while providing durable, verifiable evidence for subsequent architectural decisions.

### Adopted from
Matt `external/research.md:24`.

### Dropped
matt defects (defects: orphan (external/research.md:1), other (external/research.md:38 notes unrestricted agent delegation causes recursive subagent execution), other (external/research.md:49 notes missing stopping criteria leads to excessive or omitted research), other (external/research.md:51 notes subagent delegation on throwaway research branches creates draft PRs)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- the-research-skill-practice (less specific than canonical technique name)
- generic-the-research-skill (fails to reflect source methodology)

### Evidence
Matt `external/research.md:24`.

### Glossary
### the-research-skill

- **definition:** The research skill is a shaping skill that offloads external documentation and fact-finding to an asynchronous background agent reading primary sources. Producing a cited Markdown file in the repo preserves the main session's context window while providing durable, verifiable evidence for subsequent architectural decisions.
- **kind:** technique
- **source names:** addy: — · matt: `The /research Skill` · rjm: —
- **decision:** D-419
- **concordance:** `docs/analysis/concordance/techniques.md#matt-the-research-skill`

---

## D-420 — plan-step-decomposition

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-step
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `plan-step-decomposition`. Plan step decomposition is a terminal helper function in interactive scripts (`template.sh` and `hitl-loop.template.sh`). It presents a discrete human action (such as performing a manual browser step or signing into a service) and pauses execution until confirmed, maintaining clear visual progress during guided operations.

### Adopted from
Matt `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:10`.

### Dropped
None (clean source technique).

### Rejected alternatives
- plan-step-decomposition-practice (less specific than canonical technique name)
- generic-plan-step-decomposition (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:10`.

### Glossary
### plan-step-decomposition

- **definition:** Plan step decomposition is a terminal helper function in interactive scripts (`template.sh` and `hitl-loop.template.sh`). It presents a discrete human action (such as performing a manual browser step or signing into a service) and pauses execution until confirmed, maintaining clear visual progress during guided operations.
- **kind:** technique
- **source names:** addy: — · matt: `step` · rjm: —
- **decision:** D-420
- **concordance:** `docs/analysis/concordance/techniques.md#matt-step`

---

## D-421 — writing-shape

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-writing-shape
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `writing-shape`. Writing shape is an in-progress writing skill implementing the exploit phase of article authoring. It processes a fixed pile of raw fragments, forces deliberate opening selection, and grows the piece paragraph by paragraph while enforcing rigorous conceptual grounding and defensible formatting choices.

### Adopted from
Matt `skills/in-progress/writing-shape/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- writing-shape-practice (less specific than canonical technique name)
- generic-writing-shape (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/writing-shape/SKILL.md:3`.

### Glossary
### writing-shape

- **definition:** Writing shape is an in-progress writing skill implementing the exploit phase of article authoring. It processes a fixed pile of raw fragments, forces deliberate opening selection, and grows the piece paragraph by paragraph while enforcing rigorous conceptual grounding and defensible formatting choices.
- **kind:** technique
- **source names:** addy: — · matt: `writing-shape` · rjm: —
- **decision:** D-421
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-shape`

---

## D-422 — terminal-clearing-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-clearing
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `terminal-clearing-technique`. Clearing is the context hygiene discipline of resetting the conversation window between independent units of work. In Matt's architecture, tickets are deliberately sized to execute within a single clean context window, making previous conversation history disposable and preventing cross-task context pollution.

### Adopted from
Matt `docs/engineering/grill-with-docs.md:39`.

### Dropped
None (clean source technique).

### Rejected alternatives
- terminal-clearing-technique-practice (less specific than canonical technique name)
- generic-terminal-clearing (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/grill-with-docs.md:39`.

### Glossary
### terminal-clearing-technique

- **definition:** Clearing is the context hygiene discipline of resetting the conversation window between independent units of work. In Matt's architecture, tickets are deliberately sized to execute within a single clean context window, making previous conversation history disposable and preventing cross-task context pollution.
- **kind:** technique
- **source names:** addy: — · matt: `clearing` · rjm: —
- **decision:** D-422
- **concordance:** `docs/analysis/concordance/techniques.md#matt-clearing`

---

## D-423 — wayfinder-routing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-wayfinder-routing
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `wayfinder-routing`. Wayfinder routing is an engineering technique for wayfinder routing serves as an adaptive on-ramp in `/ask-matt` that identifies projects with high structural ambiguity or multi-session complexity and steers them to `/wayfinder` for incremental mapping rather than attempting premature linear specification.

### Adopted from
Matt `CHANGELOG.md:108`.

### Dropped
None (clean source technique).

### Rejected alternatives
- wayfinder-routing-practice (less specific than canonical technique name)
- generic-wayfinder-routing (fails to reflect source methodology)

### Evidence
Matt `CHANGELOG.md:108`.

### Glossary
### wayfinder-routing

- **definition:** Wayfinder routing is an engineering technique for wayfinder routing serves as an adaptive on-ramp in `/ask-matt` that identifies projects with high structural ambiguity or multi-session complexity and steers them to `/wayfinder` for incremental mapping rather than attempting premature linear specification.
- **kind:** technique
- **source names:** addy: — · matt: `Wayfinder routing` · rjm: —
- **decision:** D-423
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wayfinder-routing`

---

## D-424 — domain-modelling

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-domain-modelling
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `domain-modelling`. Domain modelling is an engineering technique for `domain modelling` represents the systematic elicitation and documentation of ubiquitous language and architecture decisions in `matt`. Implemented primarily through the `domain-modeling` skill and the `grill-with-docs` workflow, it ensures agents and human engineers share consistent project vocabulary and architectural boundaries.

### Adopted from
Matt `.claude-plugin/marketplace.json:12`.

### Dropped
None (clean source technique).

### Rejected alternatives
- domain-modelling-practice (less specific than canonical technique name)
- generic-domain-modelling (fails to reflect source methodology)

### Evidence
Matt `.claude-plugin/marketplace.json:12`.

### Glossary
### domain-modelling

- **definition:** Domain modelling is an engineering technique for `domain modelling` represents the systematic elicitation and documentation of ubiquitous language and architecture decisions in `matt`. Implemented primarily through the `domain-modeling` skill and the `grill-with-docs` workflow, it ensures agents and human engineers share consistent project vocabulary and architectural boundaries.
- **kind:** technique
- **source names:** addy: — · matt: `domain modelling` · rjm: —
- **decision:** D-424
- **concordance:** `docs/analysis/concordance/techniques.md#matt-domain-modelling`

---

## D-425 — push-right

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-push-right
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `push-right`. Push right is a core workflow design heuristic in loop-me: defer human involvement as far right in the process timeline as possible. By executing all preparatory, research, and generation work autonomously first, the human reviewer is engaged only once, late, with fully prepared decision briefs.

### Adopted from
Matt `skills/in-progress/loop-me/SKILL.md:22`.

### Dropped
None (clean source technique).

### Rejected alternatives
- push-right-practice (less specific than canonical technique name)
- generic-push-right (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/loop-me/SKILL.md:22`.

### Glossary
### push-right

- **definition:** Push right is a core workflow design heuristic in loop-me: defer human involvement as far right in the process timeline as possible. By executing all preparatory, research, and generation work autonomously first, the human reviewer is engaged only once, late, with fully prepared decision briefs.
- **kind:** technique
- **source names:** addy: — · matt: `Push right` · rjm: —
- **decision:** D-425
- **concordance:** `docs/analysis/concordance/techniques.md#matt-push-right`

---

## D-426 — steps-and-completion-criteria

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-steps-and-completion-criteria
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `steps-and-completion-criteria`. Steps and completion criteria is an engineering technique that establishes the core behavioural lever for procedural agent execution. By requiring every step to terminate on clear, checkable, and demanding conditions, it prevents agents from declaring premature success or rushing through sequential tasks.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL.md:47`.

### Dropped
None (clean source technique).

### Rejected alternatives
- steps-and-completion-criteria-practice (less specific than canonical technique name)
- generic-steps-and-completion-criteria (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:47`.

### Glossary
### steps-and-completion-criteria

- **definition:** Steps and completion criteria is an engineering technique that establishes the core behavioural lever for procedural agent execution. By requiring every step to terminate on clear, checkable, and demanding conditions, it prevents agents from declaring premature success or rushing through sequential tasks.
- **kind:** technique
- **source names:** addy: — · matt: `Steps and completion criteria` · rjm: —
- **decision:** D-426
- **concordance:** `docs/analysis/concordance/techniques.md#matt-steps-and-completion-criteria`

---

## D-427 — execution-continuation-prompt

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-continue
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `execution-continuation-prompt`. Execution continuation prompt is the first and highest-fidelity context transition option evaluated at phase boundaries. Keeping the unbroken session context preserves design rationale and decisions as a primary source, which lossy summarization or compaction would flatten. Compaction mid-phase causes agents to lose the thread, whereas continuing costs nothing and loses nothing.

### Adopted from
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:11`.

### Dropped
None (clean source technique).

### Rejected alternatives
- execution-continuation-prompt-practice (less specific than canonical technique name)
- generic-execution-continuation-prompt (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:11`.

### Glossary
### execution-continuation-prompt

- **definition:** Execution continuation prompt is the first and highest-fidelity context transition option evaluated at phase boundaries. Keeping the unbroken session context preserves design rationale and decisions as a primary source, which lossy summarization or compaction would flatten. Compaction mid-phase causes agents to lose the thread, whereas continuing costs nothing and loses nothing.
- **kind:** technique
- **source names:** addy: — · matt: `Continue` · rjm: —
- **decision:** D-427
- **concordance:** `docs/analysis/concordance/techniques.md#matt-continue`

---

## D-428 — lint-staged

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-lint-staged
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `lint-staged`. Lint staged is a fast pre-commit optimization technique that scopes formatting tools like Prettier strictly to staged files rather than scanning the entire repository, keeping commit times minimal.

### Adopted from
Matt `skills/misc/setup-pre-commit/SKILL.md:11`.

### Dropped
None (clean source technique).

### Rejected alternatives
- lint-staged-practice (less specific than canonical technique name)
- generic-lint-staged (fails to reflect source methodology)

### Evidence
Matt `skills/misc/setup-pre-commit/SKILL.md:11`.

### Glossary
### lint-staged

- **definition:** Lint staged is a fast pre-commit optimization technique that scopes formatting tools like Prettier strictly to staged files rather than scanning the entire repository, keeping commit times minimal.
- **kind:** technique
- **source names:** addy: — · matt: `lint-staged` · rjm: —
- **decision:** D-428
- **concordance:** `docs/analysis/concordance/techniques.md#matt-lint-staged`

---

## D-429 — single-interview-round

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-round
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `single-interview-round`. Single interview round is a round is the atomic interaction turn in grilling. Rather than asking questions one by one or dumping an overwhelming checklist all at once, a round asks exactly the subset of decisions whose dependencies are satisfied. This parallelizes independent inquiries while preserving logical causality across iterations.

### Adopted from
Matt `docs/productivity/grilling.md:5`.

### Dropped
matt defects (defects: internal-contradiction (round-based default contested by users preferring sequential questioning)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- single-interview-round-practice (less specific than canonical technique name)
- generic-single-interview-round (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/grilling.md:5`.

### Glossary
### single-interview-round

- **definition:** Single interview round is a round is the atomic interaction turn in grilling. Rather than asking questions one by one or dumping an overwhelming checklist all at once, a round asks exactly the subset of decisions whose dependencies are satisfied. This parallelizes independent inquiries while preserving logical causality across iterations.
- **kind:** technique
- **source names:** addy: — · matt: `round` · rjm: —
- **decision:** D-429
- **concordance:** `docs/analysis/concordance/techniques.md#matt-round`

---

## D-430 — multi-topic-grilling

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grills
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `multi-topic-grilling`. Multi topic grilling is an engineering technique that grills is the active verb form of the grilling interview technique. In improve-codebase-architecture, once a candidate is chosen, the agent grills the human on constraints and design trade-offs to ensure consensus before any refactoring takes place.

### Adopted from
Matt `docs/engineering/improve-codebase-architecture.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- multi-topic-grilling-practice (less specific than canonical technique name)
- generic-multi-topic-grilling (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/improve-codebase-architecture.md:3`.

### Glossary
### multi-topic-grilling

- **definition:** Multi topic grilling is an engineering technique that grills is the active verb form of the grilling interview technique. In improve-codebase-architecture, once a candidate is chosen, the agent grills the human on constraints and design trade-offs to ensure consensus before any refactoring takes place.
- **kind:** technique
- **source names:** addy: — · matt: `grills` · rjm: —
- **decision:** D-430
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grills`

---

## D-431 — when-to-split

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-when-to-split
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `when-to-split`. When to split is an engineering technique that establishes the criteria for document decomposition. Because dividing a document spends either context load or cognitive load, splitting is justified only when separating sequential steps prevents premature completion or when independent invocation triggers warrant separate descriptions.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL.md:56`.

### Dropped
None (clean source technique).

### Rejected alternatives
- when-to-split-practice (less specific than canonical technique name)
- generic-when-to-split (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:56`.

### Glossary
### when-to-split

- **definition:** When to split is an engineering technique that establishes the criteria for document decomposition. Because dividing a document spends either context load or cognitive load, splitting is justified only when separating sequential steps prevents premature completion or when independent invocation triggers warrant separate descriptions.
- **kind:** technique
- **source names:** addy: — · matt: `When to split` · rjm: —
- **decision:** D-431
- **concordance:** `docs/analysis/concordance/techniques.md#matt-when-to-split`

---

## D-432 — progressive-disclosure

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-progressive-disclosure
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `progressive-disclosure`. Progressive disclosure is the core architectural discipline of Matt's documentation approach: keep primary files focused on ordered steps and high-priority rules, moving detailed, branch-specific, or voluminous references into separate files accessed only via context pointers when needed.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL.md:39`.

### Dropped
None (clean source technique).

### Rejected alternatives
- progressive-disclosure-practice (less specific than canonical technique name)
- generic-progressive-disclosure (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:39`.

### Glossary
### progressive-disclosure

- **definition:** Progressive disclosure is the core architectural discipline of Matt's documentation approach: keep primary files focused on ordered steps and high-priority rules, moving detailed, branch-specific, or voluminous references into separate files accessed only via context pointers when needed.
- **kind:** technique
- **source names:** addy: — · matt: `progressive disclosure` · rjm: —
- **decision:** D-432
- **concordance:** `docs/analysis/concordance/techniques.md#matt-progressive-disclosure`

---

## D-433 — cli-banner-display

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-banner
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `cli-banner-display`. Cli banner display is a presentation helper function in the wizard library that clears the terminal and displays an opening banner explaining what the procedure will do and how many stages it contains, establishing clear expectations for the human operator.

### Adopted from
Matt `skills/engineering/wizard/template.sh:38`.

### Dropped
None (clean source technique).

### Rejected alternatives
- cli-banner-display-practice (less specific than canonical technique name)
- generic-cli-banner-display (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:38`.

### Glossary
### cli-banner-display

- **definition:** Cli banner display is a presentation helper function in the wizard library that clears the terminal and displays an opening banner explaining what the procedure will do and how many stages it contains, establishing clear expectations for the human operator.
- **kind:** technique
- **source names:** addy: — · matt: `banner` · rjm: —
- **decision:** D-433
- **concordance:** `docs/analysis/concordance/techniques.md#matt-banner`

---

## D-434 — call-graph-collapse

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-call-graph-collapse
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `call-graph-collapse`. Call graph collapse is a specialized diagram pattern for HTML architecture reports that illustrates deepening by showing an intricate tree of nested function calls consolidated into a single deep module with internal details faded out.

### Adopted from
Matt `skills/engineering/improve-codebase-architecture/HTML-REPORT.md:92`.

### Dropped
None (clean source technique).

### Rejected alternatives
- call-graph-collapse-practice (less specific than canonical technique name)
- generic-call-graph-collapse (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/improve-codebase-architecture/HTML-REPORT.md:92`.

### Glossary
### call-graph-collapse

- **definition:** Call graph collapse is a specialized diagram pattern for HTML architecture reports that illustrates deepening by showing an intricate tree of nested function calls consolidated into a single deep module with internal details faded out.
- **kind:** technique
- **source names:** addy: — · matt: `Call-graph collapse` · rjm: —
- **decision:** D-434
- **concordance:** `docs/analysis/concordance/techniques.md#matt-call-graph-collapse`

---

## D-435 — conversational-feel

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-conversational-feel
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `conversational-feel`. Conversational feel is an engineering technique for conversational feel frames the agent's role as an active editorial partner rather than a passive scribe. By inverting the exploratory grilling session to ask what the article is actually arguing and what breaks if a paragraph is cut, the agent enforces rigorous narrative momentum and defends against weak transitions.

### Adopted from
Matt `skills/in-progress/writing-shape/SKILL.md:43`.

### Dropped
None (clean source technique).

### Rejected alternatives
- conversational-feel-practice (less specific than canonical technique name)
- generic-conversational-feel (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/writing-shape/SKILL.md:43`.

### Glossary
### conversational-feel

- **definition:** Conversational feel is an engineering technique for conversational feel frames the agent's role as an active editorial partner rather than a passive scribe. By inverting the exploratory grilling session to ask what the article is actually arguing and what breaks if a paragraph is cut, the agent enforces rigorous narrative momentum and defends against weak transitions.
- **kind:** technique
- **source names:** addy: — · matt: `Conversational feel` · rjm: —
- **decision:** D-435
- **concordance:** `docs/analysis/concordance/techniques.md#matt-conversational-feel`

---

## D-436 — changeset-versioning-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-changesets
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `changeset-versioning-technique`. Changeset versioning technique is a versioning and release management workflow where contributors declare semantic intent through small markdown change files. These are later aggregated to update changelogs and bump package versions systematically during releases.

### Adopted from
Matt `.changeset/README.md:1`.

### Dropped
None (clean source technique).

### Rejected alternatives
- changeset-versioning-technique-practice (less specific than canonical technique name)
- generic-changeset-versioning (fails to reflect source methodology)

### Evidence
Matt `.changeset/README.md:1`.

### Glossary
### changeset-versioning-technique

- **definition:** Changeset versioning technique is a versioning and release management workflow where contributors declare semantic intent through small markdown change files. These are later aggregated to update changelogs and bump package versions systematically during releases.
- **kind:** technique
- **source names:** addy: — · matt: `Changesets` · rjm: —
- **decision:** D-436
- **concordance:** `docs/analysis/concordance/techniques.md#matt-changesets`

---

## D-437 — ai-navigability

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-ai-navigability
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `ai-navigability`. Ai navigability is a design quality attribute in Matt's framework representing how effectively an AI coding agent can understand, navigate, and modify a codebase without having to open and synthesize dozens of shallow, pass-through files to trace a single domain workflow.

### Adopted from
Matt `skills/engineering/improve-codebase-architecture/SKILL.md:9`.

### Dropped
None (clean source technique).

### Rejected alternatives
- ai-navigability-practice (less specific than canonical technique name)
- generic-ai-navigability (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/improve-codebase-architecture/SKILL.md:9`.

### Glossary
### ai-navigability

- **definition:** Ai navigability is a design quality attribute in Matt's framework representing how effectively an AI coding agent can understand, navigate, and modify a codebase without having to open and synthesize dozens of shallow, pass-through files to trace a single domain workflow.
- **kind:** technique
- **source names:** addy: — · matt: `AI-navigability` · rjm: —
- **decision:** D-437
- **concordance:** `docs/analysis/concordance/techniques.md#matt-ai-navigability`

---

## D-438 — setup-matt-pocock-skills

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-setup-matt-pocock-skills
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `setup-matt-pocock-skills`. Setup matt pocock skills is an engineering technique for foundational configuration skill executed once per repository to establish issue tracker destinations, triage label strings, and domain documentation locations. Embodying Matt Pocock's "config is death" philosophy, it replaces global configuration files with committed Markdown files under `docs/agents/`, enabling identical skill instructions to operate portably across GitHub, GitLab, and local scratch trackers without skill modification.

### Adopted from
Matt `docs/engineering/setup-matt-pocock-skills.md:3`.

### Dropped
matt defects (defects: missing-path, other, doc-drift (references non-existent command path under `commands/`; writes label mappings to `triage-labels.md` without remote tracker label entity provisioning).) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- setup-matt-pocock-skills-practice (less specific than canonical technique name)
- generic-setup-matt-pocock-skills (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/setup-matt-pocock-skills.md:3`.

### Glossary
### setup-matt-pocock-skills

- **definition:** Setup matt pocock skills is an engineering technique for foundational configuration skill executed once per repository to establish issue tracker destinations, triage label strings, and domain documentation locations. Embodying Matt Pocock's "config is death" philosophy, it replaces global configuration files with committed Markdown files under `docs/agents/`, enabling identical skill instructions to operate portably across GitHub, GitLab, and local scratch trackers without skill modification.
- **kind:** technique
- **source names:** addy: — · matt: `/setup-matt-pocock-skills` · rjm: —
- **decision:** D-438
- **concordance:** `docs/analysis/concordance/techniques.md#matt-setup-matt-pocock-skills`

---

## D-439 — decision-note-capture

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-note
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `decision-note-capture`. Decision note capture is a terminal output formatting helper function in `template.sh` used to render subtle, dimmed context and summary lines without competing visually with primary instructional steps.

### Adopted from
Matt `skills/engineering/wizard/template.sh:62`.

### Dropped
None (clean source technique).

### Rejected alternatives
- decision-note-capture-practice (less specific than canonical technique name)
- generic-decision-note-capture (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:62`.

### Glossary
### decision-note-capture

- **definition:** Decision note capture is a terminal output formatting helper function in `template.sh` used to render subtle, dimmed context and summary lines without competing visually with primary instructional steps.
- **kind:** technique
- **source names:** addy: — · matt: `note` · rjm: —
- **decision:** D-439
- **concordance:** `docs/analysis/concordance/techniques.md#matt-note`

---

## D-440 — splitting-by-invocation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-splitting-by-invocation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `splitting-by-invocation`. Splitting by invocation is an engineering technique that balances autonomous agent reach against permanent context window overhead. Because each model-invoked skill demands always-loaded description tokens, splitting by invocation requires justifying that token cost through a distinct prompt trigger word or cross-skill invocation need.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL-MECHANICS.md:18`.

### Dropped
None (clean source technique).

### Rejected alternatives
- splitting-by-invocation-practice (less specific than canonical technique name)
- generic-splitting-by-invocation (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL-MECHANICS.md:18`.

### Glossary
### splitting-by-invocation

- **definition:** Splitting by invocation is an engineering technique that balances autonomous agent reach against permanent context window overhead. Because each model-invoked skill demands always-loaded description tokens, splitting by invocation requires justifying that token cost through a distinct prompt trigger word or cross-skill invocation need.
- **kind:** technique
- **source names:** addy: — · matt: `Splitting by invocation` · rjm: —
- **decision:** D-440
- **concordance:** `docs/analysis/concordance/techniques.md#matt-splitting-by-invocation`

---

## D-441 — open-url

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-open-url
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `open-url`. Open url is a cross-platform browser opening utility in the wizard template library that detects and uses available launcher commands (`wslview`, `explorer.exe`, `xdg-open`, or macOS `open`) to navigate the human to the exact dashboard page required, falling back to manual instruction if no browser launcher succeeds.

### Adopted from
Matt `skills/engineering/wizard/template.sh:65`.

### Dropped
None (clean source technique).

### Rejected alternatives
- open-url-practice (less specific than canonical technique name)
- generic-open-url (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:65`.

### Glossary
### open-url

- **definition:** Open url is a cross-platform browser opening utility in the wizard template library that detects and uses available launcher commands (`wslview`, `explorer.exe`, `xdg-open`, or macOS `open`) to navigate the human to the exact dashboard page required, falling back to manual instruction if no browser launcher succeeds.
- **kind:** technique
- **source names:** addy: — · matt: `open_url` · rjm: —
- **decision:** D-441
- **concordance:** `docs/analysis/concordance/techniques.md#matt-open-url`

---

## D-442 — mock

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-mock
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `mock`. Mock is a test double technique strictly confined to external system boundaries (third-party APIs, time, external services). Matt Pocock's design philosophy firmly rejects mocking internal modules, classes, or database abstractions, mandating real implementations or in-process stand-ins instead to avoid brittle, tautological tests.

### Adopted from
Matt `skills/engineering/tdd/mocking.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- mock-practice (less specific than canonical technique name)
- generic-mock (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/tdd/mocking.md:3`.

### Glossary
### mock

- **definition:** Mock is a test double technique strictly confined to external system boundaries (third-party APIs, time, external services). Matt Pocock's design philosophy firmly rejects mocking internal modules, classes, or database abstractions, mandating real implementations or in-process stand-ins instead to avoid brittle, tautological tests.
- **kind:** technique
- **source names:** addy: — · matt: `Mock` · rjm: —
- **decision:** D-442
- **concordance:** `docs/analysis/concordance/techniques.md#matt-mock`

---

## D-443 — frontier-query

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-frontier-query
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `frontier-query`. Frontier query is an algorithmic technique used by wayfinder to deterministically select the next ticket from an exploration DAG. By filtering out blocked and assigned tickets, it prevents deadlocks and redundant work.

### Adopted from
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:43`.

### Dropped
None (clean source technique).

### Rejected alternatives
- frontier-query-practice (less specific than canonical technique name)
- generic-frontier-query (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:43`.

### Glossary
### frontier-query

- **definition:** Frontier query is an algorithmic technique used by wayfinder to deterministically select the next ticket from an exploration DAG. By filtering out blocked and assigned tickets, it prevents deadlocks and redundant work.
- **kind:** technique
- **source names:** addy: — · matt: `Frontier query` · rjm: —
- **decision:** D-443
- **concordance:** `docs/analysis/concordance/techniques.md#matt-frontier-query`

---

## D-444 — grill-with-docs

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grill-with-docs
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `grill-with-docs`. Grill with docs is the stateful engineering entry point in matt's lifecycle. It marries the interrogative grilling interview with active domain modeling, ensuring that as decisions and vocabulary are settled, they are written directly to repository files on disk.

### Adopted from
Matt `docs/engineering/grill-with-docs.md:3`.

### Dropped
matt defects (defects: doc-drift, other, orphan) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- grill-with-docs-practice (less specific than canonical technique name)
- generic-grill-with-docs (fails to reflect source methodology)

### Evidence
Matt `docs/engineering/grill-with-docs.md:3`.

### Glossary
### grill-with-docs

- **definition:** Grill with docs is the stateful engineering entry point in matt's lifecycle. It marries the interrogative grilling interview with active domain modeling, ensuring that as decisions and vocabulary are settled, they are written directly to repository files on disk.
- **kind:** technique
- **source names:** addy: — · matt: `grill-with-docs` · rjm: —
- **decision:** D-444
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grill-with-docs`

---

## D-445 — task-completion-verification

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-finish
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `task-completion-verification`. Task completion verification is a terminal presentation helper function in `template.sh` that provides closure to interactive setup wizards. By clearing intermediate step output and presenting a clean summary of written variables, secrets, and skipped manual tasks, `finish` gives the human operator an unambiguous record of what was accomplished and what remains to be done.

### Adopted from
Matt `skills/engineering/wizard/template.sh:169`.

### Dropped
None (clean source technique).

### Rejected alternatives
- task-completion-verification-practice (less specific than canonical technique name)
- generic-task-completion-verification (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:169`.

### Glossary
### task-completion-verification

- **definition:** Task completion verification is a terminal presentation helper function in `template.sh` that provides closure to interactive setup wizards. By clearing intermediate step output and presenting a clean summary of written variables, secrets, and skipped manual tasks, `finish` gives the human operator an unambiguous record of what was accomplished and what remains to be done.
- **kind:** technique
- **source names:** addy: — · matt: `finish` · rjm: —
- **decision:** D-445
- **concordance:** `docs/analysis/concordance/techniques.md#matt-finish`

---

## D-446 — prototyping

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-prototyping
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `prototyping`. Prototyping is the empirical engine of Wayfinder. Rather than building elaborate speculative roadmaps, Wayfinder relies on rapid, disposable prototypes to flush out technical constraints and invalidate bad assumptions early, keeping multi-session planning agile and evidence-driven.

### Adopted from
Matt `external/wayfinder.md:60`.

### Dropped
None (clean source technique).

### Rejected alternatives
- prototyping-practice (less specific than canonical technique name)
- generic-prototyping (fails to reflect source methodology)

### Evidence
Matt `external/wayfinder.md:60`.

### Glossary
### prototyping

- **definition:** Prototyping is the empirical engine of Wayfinder. Rather than building elaborate speculative roadmaps, Wayfinder relies on rapid, disposable prototypes to flush out technical constraints and invalidate bad assumptions early, keeping multi-session planning agile and evidence-driven.
- **kind:** technique
- **source names:** addy: — · matt: `prototyping` · rjm: —
- **decision:** D-446
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prototyping`

---

## D-447 — configuration-management

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-configuration-management
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `configuration-management`. Configuration management is an engineering technique for configuration management unifies setup generation and maintenance within a single skill to ensure that project templates and verification logic remain synchronized as skill packages evolve.

### Adopted from
Matt `.out-of-scope/setup-skill-verify-mode.md:11`.

### Dropped
None (clean source technique).

### Rejected alternatives
- configuration-management-practice (less specific than canonical technique name)
- generic-configuration-management (fails to reflect source methodology)

### Evidence
Matt `.out-of-scope/setup-skill-verify-mode.md:11`.

### Glossary
### configuration-management

- **definition:** Configuration management is an engineering technique for configuration management unifies setup generation and maintenance within a single skill to ensure that project templates and verification logic remain synchronized as skill packages evolve.
- **kind:** technique
- **source names:** addy: — · matt: `configuration management` · rjm: —
- **decision:** D-447
- **concordance:** `docs/analysis/concordance/techniques.md#matt-configuration-management`

---

## D-448 — exploratory-legwork

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-legwork
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `exploratory-legwork`. Exploratory legwork is the depth of autonomous exploration and verification an agent performs. Rather than scripting every micro-action, Matt's methodology induces legwork by framing completion criteria with uncompromising demand, compelling the model to exhaustively investigate before concluding.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL.md:50`.

### Dropped
None (clean source technique).

### Rejected alternatives
- exploratory-legwork-practice (less specific than canonical technique name)
- generic-exploratory-legwork (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:50`.

### Glossary
### exploratory-legwork

- **definition:** Exploratory legwork is the depth of autonomous exploration and verification an agent performs. Rather than scripting every micro-action, Matt's methodology induces legwork by framing completion criteria with uncompromising demand, compelling the model to exhaustively investigate before concluding.
- **kind:** technique
- **source names:** addy: — · matt: `legwork` · rjm: —
- **decision:** D-448
- **concordance:** `docs/analysis/concordance/techniques.md#matt-legwork`

---

## D-449 — native-issue-dependencies

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-native-issue-dependencies
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `native-issue-dependencies`. Native issue dependencies is an engineering technique for gitHub's built-in issue dependency relationship mechanism, leveraged by wayfinder to establish canonical blocking edges between tickets and enable automated frontier queries.

### Adopted from
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42`.

### Dropped
None (clean source technique).

### Rejected alternatives
- native-issue-dependencies-practice (less specific than canonical technique name)
- generic-native-issue-dependencies (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42`.

### Glossary
### native-issue-dependencies

- **definition:** Native issue dependencies is an engineering technique for gitHub's built-in issue dependency relationship mechanism, leveraged by wayfinder to establish canonical blocking edges between tickets and enable automated frontier queries.
- **kind:** technique
- **source names:** addy: — · matt: `native issue dependencies` · rjm: —
- **decision:** D-449
- **concordance:** `docs/analysis/concordance/techniques.md#matt-native-issue-dependencies`

---

## D-450 — fromany

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-fromany
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `fromany`. Fromany is a shoehorn utility function designed for negative testing, allowing intentionally invalid values to be passed to typed functions without triggering compile errors while retaining IDE code completion.

### Adopted from
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:81`.

### Dropped
None (clean source technique).

### Rejected alternatives
- fromany-practice (less specific than canonical technique name)
- generic-fromany (fails to reflect source methodology)

### Evidence
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:81`.

### Glossary
### fromany

- **definition:** Fromany is a shoehorn utility function designed for negative testing, allowing intentionally invalid values to be passed to typed functions without triggering compile errors while retaining IDE code completion.
- **kind:** technique
- **source names:** addy: — · matt: `fromAny()` · rjm: —
- **decision:** D-450
- **concordance:** `docs/analysis/concordance/techniques.md#matt-fromany`

---

## D-451 — tool-economy

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-tool-economy
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `tool-economy`. Tool economy is a retrospective evaluation technique focused on tool usage efficiency and context budget preservation. When coding agents execute repetitive or bloated tool calls (such as indiscriminate search or verbose CLI outputs), tool economy audits identify opportunities to streamline calls, filter responses, or rewrite custom MCP tooling to minimize token expenditure and latency.

### Adopted from
Matt `skills/in-progress/retro/SKILL.md:21`.

### Dropped
None (clean source technique).

### Rejected alternatives
- tool-economy-practice (less specific than canonical technique name)
- generic-tool-economy (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/retro/SKILL.md:21`.

### Glossary
### tool-economy

- **definition:** Tool economy is a retrospective evaluation technique focused on tool usage efficiency and context budget preservation. When coding agents execute repetitive or bloated tool calls (such as indiscriminate search or verbose CLI outputs), tool economy audits identify opportunities to streamline calls, filter responses, or rewrite custom MCP tooling to minimize token expenditure and latency.
- **kind:** technique
- **source names:** addy: — · matt: `Tool economy` · rjm: —
- **decision:** D-451
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tool-economy`

---

## D-452 — subagent-dispatch

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-subagent-dispatch
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `subagent-dispatch`. Subagent dispatch is an engineering technique for subagent-dispatch enables a primary agent to launch background child agents for focused tasks (such as parallel research or adversarial code review) using harness-agnostic instructions.

### Adopted from
Matt `CHANGELOG.md:13`.

### Dropped
matt defects (defects: missing-path, doc-drift (in CHANGELOG.md)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- subagent-dispatch-practice (less specific than canonical technique name)
- generic-subagent-dispatch (fails to reflect source methodology)

### Evidence
Matt `CHANGELOG.md:13`.

### Glossary
### subagent-dispatch

- **definition:** Subagent dispatch is an engineering technique for subagent-dispatch enables a primary agent to launch background child agents for focused tasks (such as parallel research or adversarial code review) using harness-agnostic instructions.
- **kind:** technique
- **source names:** addy: — · matt: `subagent-dispatch` · rjm: —
- **decision:** D-452
- **concordance:** `docs/analysis/concordance/techniques.md#matt-subagent-dispatch`

---

## D-453 — milestone-retrospective

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-retro
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `milestone-retrospective`. Milestone retrospective is a retrospective analysis skill designed to inspect completed coding session logs and recommend actionable refinements to the agent's environment. It addresses the root causes of agent mistakes by improving navigation pointers, automated checks, coding standards, or tooling efficiency.

### Adopted from
Matt `skills/in-progress/README.md:18`.

### Dropped
matt defects (clean in concept definition; not-implemented in execution (marked as STUB in skills/in-progress/README.md:18)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- milestone-retrospective-practice (less specific than canonical technique name)
- generic-milestone-retrospective (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/README.md:18`.

### Glossary
### milestone-retrospective

- **definition:** Milestone retrospective is a retrospective analysis skill designed to inspect completed coding session logs and recommend actionable refinements to the agent's environment. It addresses the root causes of agent mistakes by improving navigation pointers, automated checks, coding standards, or tooling efficiency.
- **kind:** technique
- **source names:** addy: — · matt: `retro` · rjm: —
- **decision:** D-453
- **concordance:** `docs/analysis/concordance/techniques.md#matt-retro`

---

## D-454 — multi-session-planning

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-multi-session-planning
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `multi-session-planning`. Multi session planning is an engineering technique for multi-session planning is an architectural strategy designed to combat context window exhaustion on large efforts. Instead of attempting to settle all details at once, it maps the problem into a structured graph of decision tickets that can be tackled across separate, focused sessions, preventing context degradation.

### Adopted from
Matt `external/grill-with-docs.md:31`.

### Dropped
matt defects (defects: orphan, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- multi-session-planning-practice (less specific than canonical technique name)
- generic-multi-session-planning (fails to reflect source methodology)

### Evidence
Matt `external/grill-with-docs.md:31`.

### Glossary
### multi-session-planning

- **definition:** Multi session planning is an engineering technique for multi-session planning is an architectural strategy designed to combat context window exhaustion on large efforts. Instead of attempting to settle all details at once, it maps the problem into a structured graph of decision tickets that can be tackled across separate, focused sessions, preventing context degradation.
- **kind:** technique
- **source names:** addy: — · matt: `multi-session planning` · rjm: —
- **decision:** D-454
- **concordance:** `docs/analysis/concordance/techniques.md#matt-multi-session-planning`

---

## D-455 — wait-what

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-wait-what
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `wait-what`. Wait what is a minimalist productivity skill designed to repair conversational comprehension without triggering degenerative 'be concise' caveman responses. By explicitly naming the listener's state ('Wait, you lost me') rather than demanding brevity, it prompts the agent to back up, provide missing context, and re-explain in clear, standardized English using the project's established ubiquitous language.

### Adopted from
Matt `skills/productivity/wait-what/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- wait-what-practice (less specific than canonical technique name)
- generic-wait-what (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/wait-what/SKILL.md:3`.

### Glossary
### wait-what

- **definition:** Wait what is a minimalist productivity skill designed to repair conversational comprehension without triggering degenerative 'be concise' caveman responses. By explicitly naming the listener's state ('Wait, you lost me') rather than demanding brevity, it prompts the agent to back up, provide missing context, and re-explain in clear, standardized English using the project's established ubiquitous language.
- **kind:** technique
- **source names:** addy: — · matt: `wait-what` · rjm: —
- **decision:** D-455
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wait-what`

---

## D-456 — writing-fragments

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-writing-fragments
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `writing-fragments`. Writing fragments is an in-progress writing skill implementing pure exploratory ideation. By interviewing the author relentlessly and appending ideas to a raw fragments document while forbidding outline generation, it prevents premature structural commitments and preserves rich creative material.

### Adopted from
Matt `skills/in-progress/writing-fragments/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- writing-fragments-practice (less specific than canonical technique name)
- generic-writing-fragments (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/writing-fragments/SKILL.md:3`.

### Glossary
### writing-fragments

- **definition:** Writing fragments is an in-progress writing skill implementing pure exploratory ideation. By interviewing the author relentlessly and appending ideas to a raw fragments document while forbidding outline generation, it prevents premature structural commitments and preserves rich creative material.
- **kind:** technique
- **source names:** addy: — · matt: `writing-fragments` · rjm: —
- **decision:** D-456
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-fragments`

---

## D-457 — grounding

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grounding
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `grounding`. Grounding is an authoring discipline ensuring that every idea or term is firmly understood before the text relies upon it. Concepts are grounded either as explicit audience prerequisites or introduced step-by-step in prior blocks, preventing conceptual leaps that lose readers.

### Adopted from
Matt `skills/in-progress/writing-beats/SKILL.md:15`.

### Dropped
None (clean source technique).

### Rejected alternatives
- grounding-practice (less specific than canonical technique name)
- generic-grounding (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/writing-beats/SKILL.md:15`.

### Glossary
### grounding

- **definition:** Grounding is an authoring discipline ensuring that every idea or term is firmly understood before the text relies upon it. Concepts are grounded either as explicit audience prerequisites or introduced step-by-step in prior blocks, preventing conceptual leaps that lose readers.
- **kind:** technique
- **source names:** addy: — · matt: `Grounding` · rjm: —
- **decision:** D-457
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grounding`

---

## D-458 — conflict-resolution-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-resolve
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `conflict-resolution-technique`. Conflict resolution technique is the final step in the lifecycle of a wayfinder ticket. The agent records answers on the ticket, marks it closed or resolved, and registers a summary pointer in the parent map so future agents can build upon the decision.

### Adopted from
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:45`.

### Dropped
None (clean source technique).

### Rejected alternatives
- conflict-resolution-technique-practice (less specific than canonical technique name)
- generic-conflict-resolution (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:45`.

### Glossary
### conflict-resolution-technique

- **definition:** Conflict resolution technique is the final step in the lifecycle of a wayfinder ticket. The agent records answers on the ticket, marks it closed or resolved, and registers a summary pointer in the parent map so future agents can build upon the decision.
- **kind:** technique
- **source names:** addy: — · matt: `Resolve` · rjm: —
- **decision:** D-458
- **concordance:** `docs/analysis/concordance/techniques.md#matt-resolve`

---

## D-459 — hidden-entry

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-hidden-entry
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `hidden-entry`. Hidden entry is an engineering technique for hidden entry is a terminal security technique implemented via `read -s` in the wizard template. By disabling character echo during sensitive inputs, it ensures passwords and API keys never persist in terminal logs, screenshots, or screen-sharing sessions.

### Adopted from
Matt `external/wizard.md:40`.

### Dropped
None (clean source technique).

### Rejected alternatives
- hidden-entry-practice (less specific than canonical technique name)
- generic-hidden-entry (fails to reflect source methodology)

### Evidence
Matt `external/wizard.md:40`.

### Glossary
### hidden-entry

- **definition:** Hidden entry is an engineering technique for hidden entry is a terminal security technique implemented via `read -s` in the wizard template. By disabling character echo during sensitive inputs, it ensures passwords and API keys never persist in terminal logs, screenshots, or screen-sharing sessions.
- **kind:** technique
- **source names:** addy: — · matt: `hidden entry` · rjm: —
- **decision:** D-459
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hidden-entry`

---

## D-460 — hidden-secret-entry

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-hidden-secret-entry
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `hidden-secret-entry`. Hidden secret entry is a terminal interaction technique in setup wizards that suppresses keyboard character echoing when reading sensitive values like API tokens or passwords, preventing shoulder surfing and ensuring credentials are not retained in terminal scrollback buffers.

### Adopted from
Matt `skills/engineering/wizard/SKILL.md:10`.

### Dropped
None (clean source technique).

### Rejected alternatives
- hidden-secret-entry-practice (less specific than canonical technique name)
- generic-hidden-secret-entry (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/SKILL.md:10`.

### Glossary
### hidden-secret-entry

- **definition:** Hidden secret entry is a terminal interaction technique in setup wizards that suppresses keyboard character echoing when reading sensitive values like API tokens or passwords, preventing shoulder surfing and ensuring credentials are not retained in terminal scrollback buffers.
- **kind:** technique
- **source names:** addy: — · matt: `hidden secret entry` · rjm: —
- **decision:** D-460
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hidden-secret-entry`

---

## D-461 — deduplication

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-deduplication
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `deduplication`. Deduplication is a triage technique that checks incoming feature requests against previously recorded rejections in `.out-of-scope/`. By matching concepts rather than issue titles, it prevents repetitive discussions and allows agents or maintainers to immediately close redundant requests with authoritative context.

### Adopted from
Matt `skills/engineering/triage/OUT-OF-SCOPE.md:6`.

### Dropped
None (clean source technique).

### Rejected alternatives
- deduplication-practice (less specific than canonical technique name)
- generic-deduplication (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/triage/OUT-OF-SCOPE.md:6`.

### Glossary
### deduplication

- **definition:** Deduplication is a triage technique that checks incoming feature requests against previously recorded rejections in `.out-of-scope/`. By matching concepts rather than issue titles, it prevents repetitive discussions and allows agents or maintainers to immediately close redundant requests with authoritative context.
- **kind:** technique
- **source names:** addy: — · matt: `Deduplication` · rjm: —
- **decision:** D-461
- **concordance:** `docs/analysis/concordance/techniques.md#matt-deduplication`

---

## D-462 — re-pitches

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-re-pitches
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `re-pitches`. Re pitches is an engineering technique for re-pitching is Matt's conversational repair technique: rather than forcing the model to simply compress its output into terseness, it instructs the model to step back, identify the missing premise or unstated assumption, and restate the idea in accessible language grounded in project vocabulary.

### Adopted from
Matt `external/wait-what.md:25`.

### Dropped
None (clean source technique).

### Rejected alternatives
- re-pitches-practice (less specific than canonical technique name)
- generic-re-pitches (fails to reflect source methodology)

### Evidence
Matt `external/wait-what.md:25`.

### Glossary
### re-pitches

- **definition:** Re pitches is an engineering technique for re-pitching is Matt's conversational repair technique: rather than forcing the model to simply compress its output into terseness, it instructs the model to step back, identify the missing premise or unstated assumption, and restate the idea in accessible language grounded in project vocabulary.
- **kind:** technique
- **source names:** addy: — · matt: `re-pitches` · rjm: —
- **decision:** D-462
- **concordance:** `docs/analysis/concordance/techniques.md#matt-re-pitches`

---

## D-463 — grill-the-send-not-the-subject

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grill-the-send-not-the-subject
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `grill-the-send-not-the-subject`. Grill the send not the subject is an engineering technique that prevents interview deadlock when the user is blocked on external knowledge. Probing a user about subject matter they do not understand causes frustration and stalls progress; interviewing them about the transmission context (recipient expertise and desired decision payload) extracts everything needed to frame an effective inquiry.

### Adopted from
Matt `skills/productivity/to-questionnaire/SKILL.md:9`.

### Dropped
None (clean source technique).

### Rejected alternatives
- grill-the-send-not-the-subject-practice (less specific than canonical technique name)
- generic-grill-the-send-not-the-subject (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/to-questionnaire/SKILL.md:9`.

### Glossary
### grill-the-send-not-the-subject

- **definition:** Grill the send not the subject is an engineering technique that prevents interview deadlock when the user is blocked on external knowledge. Probing a user about subject matter they do not understand causes frustration and stalls progress; interviewing them about the transmission context (recipient expertise and desired decision payload) extracts everything needed to frame an effective inquiry.
- **kind:** technique
- **source names:** addy: — · matt: `Grill the send, not the subject` · rjm: —
- **decision:** D-463
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grill-the-send-not-the-subject`

---

## D-464 — session-clear-command

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-clear
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `session-clear-command`. Session clear command is a context-management command in Claude Code that erases conversational history to reclaim the full token window. In matt's lifecycle, /clear is the highest-priority context reset move on the phase boundary tree when past work is disposable (such as between independent implementation tickets), eliminating conversational noise and preventing token degradation in the smart zone.

### Adopted from
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:12`.

### Dropped
None (clean source technique).

### Rejected alternatives
- session-clear-command-practice (less specific than canonical technique name)
- generic-session-clear-command (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:12`.

### Glossary
### session-clear-command

- **definition:** Session clear command is a context-management command in Claude Code that erases conversational history to reclaim the full token window. In matt's lifecycle, /clear is the highest-priority context reset move on the phase boundary tree when past work is disposable (such as between independent implementation tickets), eliminating conversational noise and preventing token degradation in the smart zone.
- **kind:** technique
- **source names:** addy: — · matt: `/clear` · rjm: —
- **decision:** D-464
- **concordance:** `docs/analysis/concordance/techniques.md#matt-clear`

---

## D-465 — skill-execution-harness-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-skills
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `skill-execution-harness-technique`. Skill execution harness technique is an engineering technique for in `matt`, `skills` has a dual meaning. Within the `teach` skill, it defines the practical, actionable capabilities a learner acquires through interactive practice, complementing factual knowledge and practitioner wisdom. Across the package as a whole, it represents the modular prompt-based behaviors and slash commands that equip coding agents to perform disciplined engineering tasks.

### Adopted from
Matt `skills/productivity/teach/SKILL.md:27`.

### Dropped
matt defects (defects: orphan) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- skill-execution-harness-technique-practice (less specific than canonical technique name)
- generic-skill-execution-harness (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/teach/SKILL.md:27`.

### Glossary
### skill-execution-harness-technique

- **definition:** Skill execution harness technique is an engineering technique for in `matt`, `skills` has a dual meaning. Within the `teach` skill, it defines the practical, actionable capabilities a learner acquires through interactive practice, complementing factual knowledge and practitioner wisdom. Across the package as a whole, it represents the modular prompt-based behaviors and slash commands that equip coding agents to perform disciplined engineering tasks.
- **kind:** technique
- **source names:** addy: — · matt: `skills` · rjm: —
- **decision:** D-465
- **concordance:** `docs/analysis/concordance/techniques.md#matt-skills`

---

## D-466 — trigger-phrasing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-trigger-phrasing
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `trigger-phrasing`. Trigger phrasing is an authoring technique where rich, descriptive keywords and situation cues are embedded in skill descriptions so models can autonomously select and execute the skill when relevant conditions arise.

### Adopted from
Matt `skills/productivity/README.md:17`.

### Dropped
None (clean source technique).

### Rejected alternatives
- trigger-phrasing-practice (less specific than canonical technique name)
- generic-trigger-phrasing (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/README.md:17`.

### Glossary
### trigger-phrasing

- **definition:** Trigger phrasing is an authoring technique where rich, descriptive keywords and situation cues are embedded in skill descriptions so models can autonomously select and execute the skill when relevant conditions arise.
- **kind:** technique
- **source names:** addy: — · matt: `trigger phrasing` · rjm: —
- **decision:** D-466
- **concordance:** `docs/analysis/concordance/techniques.md#matt-trigger-phrasing`

---

## D-467 — tldr-abbreviation-command

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-tldr
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `tldr-abbreviation-command`. Tldr abbreviation command is an engineering technique for `/tldr` is analyzed in Matt's design as an anti-pattern for conversational repair. Because it instructs the model to compress output rather than address comprehension failure, it causes the model to delete necessary context and drop into an uninformative register.

### Adopted from
Matt `external/wait-what.md:32`.

### Dropped
matt defects (not-implemented) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- tldr-abbreviation-command-practice (less specific than canonical technique name)
- generic-tldr-abbreviation-command (fails to reflect source methodology)

### Evidence
Matt `external/wait-what.md:32`.

### Glossary
### tldr-abbreviation-command

- **definition:** Tldr abbreviation command is an engineering technique for `/tldr` is analyzed in Matt's design as an anti-pattern for conversational repair. Because it instructs the model to compress output rather than address comprehension failure, it causes the model to delete necessary context and drop into an uninformative register.
- **kind:** technique
- **source names:** addy: — · matt: `/tldr` · rjm: —
- **decision:** D-467
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tldr`

---

## D-468 — adversarial-grilling-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grilling
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `adversarial-grilling-technique`. Adversarial grilling technique is the core interrogative interview loop in matt's package. It models problem spaces as design trees, questioning users along the decision frontier in batched rounds to eliminate unstated assumptions and establish firm consensus before code is written.

### Adopted from
Matt `docs/productivity/grilling.md:3`.

### Dropped
matt defects (defects: doc-drift, internal-contradiction, missing-path, orphan, other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- adversarial-grilling-technique-practice (less specific than canonical technique name)
- generic-adversarial-grilling (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/grilling.md:3`.

### Glossary
### adversarial-grilling-technique

- **definition:** Adversarial grilling technique is the core interrogative interview loop in matt's package. It models problem spaces as design trees, questioning users along the decision frontier in batched rounds to eliminate unstated assumptions and establish firm consensus before code is written.
- **kind:** technique
- **source names:** addy: — · matt: `grilling` · rjm: —
- **decision:** D-468
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grilling`

---

## D-469 — post-mortem

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-post-mortem
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `post-mortem`. Post mortem is an engineering technique for in `matt:engineering`, a post-mortem captures systemic architectural lessons from difficult bugs. In earlier iterations of `diagnosing-bugs`, Phase 6 incorporated a post-mortem step that handed off findings directly to `improve-codebase-architecture` whenever the lack of a proper test seam was identified. Because `improve-codebase-architecture` is an interactive user-invoked skill, this autonomous hand-off violated invocation invariants during unattended debugging sessions and was subsequently removed in favor of a clean, checklist-only Phase 6.

### Adopted from
Matt `.changeset/user-invoked-skill-invocation.md:8`.

### Dropped
matt defects (defects: doc-drift, orphan) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- post-mortem-practice (less specific than canonical technique name)
- generic-post-mortem (fails to reflect source methodology)

### Evidence
Matt `.changeset/user-invoked-skill-invocation.md:8`.

### Glossary
### post-mortem

- **definition:** Post mortem is an engineering technique for in `matt:engineering`, a post-mortem captures systemic architectural lessons from difficult bugs. In earlier iterations of `diagnosing-bugs`, Phase 6 incorporated a post-mortem step that handed off findings directly to `improve-codebase-architecture` whenever the lack of a proper test seam was identified. Because `improve-codebase-architecture` is an interactive user-invoked skill, this autonomous hand-off violated invocation invariants during unattended debugging sessions and was subsequently removed in favor of a clean, checklist-only Phase 6.
- **kind:** technique
- **source names:** addy: — · matt: `post-mortem` · rjm: —
- **decision:** D-469
- **concordance:** `docs/analysis/concordance/techniques.md#matt-post-mortem`

---

## D-470 — no-fluff

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-no-fluff
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `no-fluff`. No fluff is an engineering technique for `/no-fluff` represents a common prompt-engineering shortcut that attempts to reduce verbosity by constraining phrasing. Matt notes that focusing on output removal rather than listener needs causes models to become blunt while leaving underlying misunderstandings unresolved.

### Adopted from
Matt `external/wait-what.md:32`.

### Dropped
matt defects (not-implemented) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- no-fluff-practice (less specific than canonical technique name)
- generic-no-fluff (fails to reflect source methodology)

### Evidence
Matt `external/wait-what.md:32`.

### Glossary
### no-fluff

- **definition:** No fluff is an engineering technique for `/no-fluff` represents a common prompt-engineering shortcut that attempts to reduce verbosity by constraining phrasing. Matt notes that focusing on output removal rather than listener needs causes models to become blunt while leaving underlying misunderstandings unresolved.
- **kind:** technique
- **source names:** addy: — · matt: `/no-fluff` · rjm: —
- **decision:** D-470
- **concordance:** `docs/analysis/concordance/techniques.md#matt-no-fluff`

---

## D-471 — retrieval-practice

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-retrieval-practice
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `retrieval-practice`. Retrieval practice is an engineering technique for retrieval practice requires learners to actively pull knowledge from memory rather than passively re-reading text. By embedding quizzes and diagnostic drills directly within lessons, the teach skill reinforces memory pathways and confirms understanding before advancing to new material.

### Adopted from
Matt `skills/productivity/teach/SKILL.md:43`.

### Dropped
matt defects (defects: internal-contradiction (quiz answers defaulting to slot A impairs retrieval testing)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- retrieval-practice-practice (less specific than canonical technique name)
- generic-retrieval-practice (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/teach/SKILL.md:43`.

### Glossary
### retrieval-practice

- **definition:** Retrieval practice is an engineering technique for retrieval practice requires learners to actively pull knowledge from memory rather than passively re-reading text. By embedding quizzes and diagnostic drills directly within lessons, the teach skill reinforces memory pathways and confirms understanding before advancing to new material.
- **kind:** technique
- **source names:** addy: — · matt: `retrieval practice` · rjm: —
- **decision:** D-471
- **concordance:** `docs/analysis/concordance/techniques.md#matt-retrieval-practice`

---

## D-472 — instrumentation

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-instrumentation
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `instrumentation`. Instrumentation is an engineering technique for instrumentation in Matt's lifecycle represents targeted code modifications or logging probes inserted to isolate defective code paths. It is treated as strictly secondary and mechanical: adding probes or logs before establishing a deterministic feedback loop is rejected as speculative guessing.

### Adopted from
Matt `external/diagnosing-bugs.md:26`.

### Dropped
None (clean source technique).

### Rejected alternatives
- instrumentation-practice (less specific than canonical technique name)
- generic-instrumentation (fails to reflect source methodology)

### Evidence
Matt `external/diagnosing-bugs.md:26`.

### Glossary
### instrumentation

- **definition:** Instrumentation is an engineering technique for instrumentation in Matt's lifecycle represents targeted code modifications or logging probes inserted to isolate defective code paths. It is treated as strictly secondary and mechanical: adding probes or logs before establishing a deterministic feedback loop is rejected as speculative guessing.
- **kind:** technique
- **source names:** addy: — · matt: `instrumentation` · rjm: —
- **decision:** D-472
- **concordance:** `docs/analysis/concordance/techniques.md#matt-instrumentation`

---

## D-473 — existing-code-exploration

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-existing
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `existing-code-exploration`. Existing code exploration is a bash helper function in `template.sh` that checks the target `.env` file for existing key-value pairs. By retrieving prior values, it allows interactive input functions (`ask` and `ask_secret`) to offer current settings as re-run defaults, making wizard execution safe and repeatable without requiring re-entry of unmodified configurations.

### Adopted from
Matt `skills/engineering/wizard/template.sh:91`.

### Dropped
None (clean source technique).

### Rejected alternatives
- existing-code-exploration-practice (less specific than canonical technique name)
- generic-existing-code-exploration (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:91`.

### Glossary
### existing-code-exploration

- **definition:** Existing code exploration is a bash helper function in `template.sh` that checks the target `.env` file for existing key-value pairs. By retrieving prior values, it allows interactive input functions (`ask` and `ask_secret`) to offer current settings as re-run defaults, making wizard execution safe and repeatable without requiring re-entry of unmodified configurations.
- **kind:** technique
- **source names:** addy: — · matt: `_existing` · rjm: —
- **decision:** D-473
- **concordance:** `docs/analysis/concordance/techniques.md#matt-existing`

---

## D-474 — fromexact

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-fromexact
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `fromexact`. Fromexact is a shoehorn utility function that enforces complete interface conformance without allowing missing fields, providing an explicit transition step before relaxing mock constraints with fromPartial().

### Adopted from
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:103`.

### Dropped
None (clean source technique).

### Rejected alternatives
- fromexact-practice (less specific than canonical technique name)
- generic-fromexact (fails to reflect source methodology)

### Evidence
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:103`.

### Glossary
### fromexact

- **definition:** Fromexact is a shoehorn utility function that enforces complete interface conformance without allowing missing fields, providing an explicit transition step before relaxing mock constraints with fromPartial().
- **kind:** technique
- **source names:** addy: — · matt: `fromExact()` · rjm: —
- **decision:** D-474
- **concordance:** `docs/analysis/concordance/techniques.md#matt-fromexact`

---

## D-475 — hitl-bash-script

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-hitl-bash-script
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `hitl-bash-script`. Hitl bash script is a human-in-the-loop debugging technique using an interactive bash script to guide human actions and capture observations as structured key-value output. This ensures that even un-automatable bugs retain a structured, repeatable feedback loop.

### Adopted from
Matt `skills/engineering/diagnosing-bugs/SKILL.md:35`.

### Dropped
None (clean source technique).

### Rejected alternatives
- hitl-bash-script-practice (less specific than canonical technique name)
- generic-hitl-bash-script (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/diagnosing-bugs/SKILL.md:35`.

### Glossary
### hitl-bash-script

- **definition:** Hitl bash script is a human-in-the-loop debugging technique using an interactive bash script to guide human actions and capture observations as structured key-value output. This ensures that even un-automatable bugs retain a structured, repeatable feedback loop.
- **kind:** technique
- **source names:** addy: — · matt: `HITL bash script` · rjm: —
- **decision:** D-475
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hitl-bash-script`

---

## D-476 — mermaid-graph

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-mermaid-graph
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `mermaid-graph`. Mermaid graph is the primary diagramming technique recommended for HTML architecture reports to visualize dependencies and call flows, using Mermaid syntax wrapped in Tailwind-styled cards and styled with classDef rules to contrast messy before states against clean deep modules.

### Adopted from
Matt `skills/engineering/improve-codebase-architecture/HTML-REPORT.md:61`.

### Dropped
None (clean source technique).

### Rejected alternatives
- mermaid-graph-practice (less specific than canonical technique name)
- generic-mermaid-graph (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/improve-codebase-architecture/HTML-REPORT.md:61`.

### Glossary
### mermaid-graph

- **definition:** Mermaid graph is the primary diagramming technique recommended for HTML architecture reports to visualize dependencies and call flows, using Mermaid syntax wrapped in Tailwind-styled cards and styled with classDef rules to contrast messy before states against clean deep modules.
- **kind:** technique
- **source names:** addy: — · matt: `Mermaid graph` · rjm: —
- **decision:** D-476
- **concordance:** `docs/analysis/concordance/techniques.md#matt-mermaid-graph`

---

## D-477 — facts-vs-decisions

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-facts-vs-decisions
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `facts-vs-decisions`. Facts vs decisions is an engineering technique that this distinction prevents conversational fatigue by requiring agents to look up existing technical facts (libraries, schemas, existing patterns) from the workspace rather than asking the human, reserving human dialogue exclusively for true subjective decisions.

### Adopted from
Matt `CHANGELOG.md:171`.

### Dropped
None (clean source technique).

### Rejected alternatives
- facts-vs-decisions-practice (less specific than canonical technique name)
- generic-facts-vs-decisions (fails to reflect source methodology)

### Evidence
Matt `CHANGELOG.md:171`.

### Glossary
### facts-vs-decisions

- **definition:** Facts vs decisions is an engineering technique that this distinction prevents conversational fatigue by requiring agents to look up existing technical facts (libraries, schemas, existing patterns) from the workspace rather than asking the human, reserving human dialogue exclusively for true subjective decisions.
- **kind:** technique
- **source names:** addy: — · matt: `Facts vs. decisions` · rjm: —
- **decision:** D-477
- **concordance:** `docs/analysis/concordance/techniques.md#matt-facts-vs-decisions`

---

## D-478 — retrieval-spacing-discipline

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-spacing
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `retrieval-spacing-discipline`. Retrieval spacing discipline is an engineering technique for spacing distributes practice intervals over time rather than massing instruction into a single marathon session. In the teach skill, spacing leverages the multi-session nature of the standing workspace to re-test previously learned concepts after intervals of decay, transforming transient familiarity into permanent capability.

### Adopted from
Matt `skills/productivity/teach/SKILL.md:44`.

### Dropped
matt defects (defects: internal-contradiction (spacing lacks automated scheduling or calendar integration)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- retrieval-spacing-discipline-practice (less specific than canonical technique name)
- generic-retrieval-spacing-discipline (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/teach/SKILL.md:44`.

### Glossary
### retrieval-spacing-discipline

- **definition:** Retrieval spacing discipline is an engineering technique for spacing distributes practice intervals over time rather than massing instruction into a single marathon session. In the teach skill, spacing leverages the multi-session nature of the standing workspace to re-test previously learned concepts after intervals of decay, transforming transient familiarity into permanent capability.
- **kind:** technique
- **source names:** addy: — · matt: `spacing` · rjm: —
- **decision:** D-478
- **concordance:** `docs/analysis/concordance/techniques.md#matt-spacing`

---

## D-479 — chart-the-map

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-chart-the-map
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `chart-the-map`. Chart the map is the initial exploration phase and technique of wayfinder. In a single dedicated session, the agent pins down the overall destination, grills breadth-first across the problem space to reveal the frontier, creates the index map issue, and creates initial sharp child tickets while sketching remaining uncertainty into Not yet specified.

### Adopted from
Matt `skills/engineering/wayfinder/SKILL.md:107`.

### Dropped
matt defects (defects: other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- chart-the-map-practice (less specific than canonical technique name)
- generic-chart-the-map (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wayfinder/SKILL.md:107`.

### Glossary
### chart-the-map

- **definition:** Chart the map is the initial exploration phase and technique of wayfinder. In a single dedicated session, the agent pins down the overall destination, grills breadth-first across the problem space to reveal the frontier, creates the index map issue, and creates initial sharp child tickets while sketching remaining uncertainty into Not yet specified.
- **kind:** technique
- **source names:** addy: — · matt: `Chart the map` · rjm: —
- **decision:** D-479
- **concordance:** `docs/analysis/concordance/techniques.md#matt-chart-the-map`

---

## D-480 — setup-pre-commit

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-setup-pre-commit
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `setup-pre-commit`. Setup pre commit is an interactive setup skill that configures client-side pre-commit quality gates in a repository. It automatically detects the active package manager, installs Husky, lint-staged, and Prettier as devDependencies, initializes Husky v9+, configures formatting with `.lintstagedrc` and default `.prettierrc`, hooks up typechecking and test scripts if present, verifies the setup, and performs an initial commit as a smoke test.

### Adopted from
Matt `skills/misc/setup-pre-commit/SKILL.md:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- setup-pre-commit-practice (less specific than canonical technique name)
- generic-setup-pre-commit (fails to reflect source methodology)

### Evidence
Matt `skills/misc/setup-pre-commit/SKILL.md:3`.

### Glossary
### setup-pre-commit

- **definition:** Setup pre commit is an interactive setup skill that configures client-side pre-commit quality gates in a repository. It automatically detects the active package manager, installs Husky, lint-staged, and Prettier as devDependencies, initializes Husky v9+, configures formatting with `.lintstagedrc` and default `.prettierrc`, hooks up typechecking and test scripts if present, verifies the setup, and performs an initial commit as a smoke test.
- **kind:** technique
- **source names:** addy: — · matt: `setup-pre-commit` · rjm: —
- **decision:** D-480
- **concordance:** `docs/analysis/concordance/techniques.md#matt-setup-pre-commit`

---

## D-481 — leading-word

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-leading-word
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `leading-word`. Leading word is a cornerstone prompt-engineering technique in Matt's design. Rather than spending dozens of tokens explaining nuanced behaviors, authoring documents leverage compact pretrained tokens (e.g. *wait*, *tight*, *red*) that recruit extensive latent model priors at near-zero token cost.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL.md:63`.

### Dropped
None (clean source technique).

### Rejected alternatives
- leading-word-practice (less specific than canonical technique name)
- generic-leading-word (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:63`.

### Glossary
### leading-word

- **definition:** Leading word is a cornerstone prompt-engineering technique in Matt's design. Rather than spending dozens of tokens explaining nuanced behaviors, authoring documents leverage compact pretrained tokens (e.g. *wait*, *tight*, *red*) that recruit extensive latent model priors at near-zero token cost.
- **kind:** technique
- **source names:** addy: — · matt: `leading word` · rjm: —
- **decision:** D-481
- **concordance:** `docs/analysis/concordance/techniques.md#matt-leading-word`

---

## D-482 — single-session-planning

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-single-session-planning
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `single-session-planning`. Single session planning is an engineering technique for single-session planning is an architectural technique for resolving trade-offs and settling terminology in a single conversation. It prioritizes low overhead and rapid convergence, writing newly crystallized domain terms into CONTEXT.md and significant trade-offs into ADRs before passing the settled conversation directly to downstream specification skills.

### Adopted from
Matt `external/grill-with-docs.md:31`.

### Dropped
matt defects (defects: orphan, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- single-session-planning-practice (less specific than canonical technique name)
- generic-single-session-planning (fails to reflect source methodology)

### Evidence
Matt `external/grill-with-docs.md:31`.

### Glossary
### single-session-planning

- **definition:** Single session planning is an engineering technique for single-session planning is an architectural technique for resolving trade-offs and settling terminology in a single conversation. It prioritizes low overhead and rapid convergence, writing newly crystallized domain terms into CONTEXT.md and significant trade-offs into ADRs before passing the settled conversation directly to downstream specification skills.
- **kind:** technique
- **source names:** addy: — · matt: `single-session planning` · rjm: —
- **decision:** D-482
- **concordance:** `docs/analysis/concordance/techniques.md#matt-single-session-planning`

---

## D-483 — grilling-session

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-grilling-session
- **preferences consulted:** PREFERENCES.md § Approach values Matt's conversational and exploratory grilling techniques; followed by adopting this dialogue elicitation technique.

### Decision
The canonical term for this technique is `grilling-session`. Grilling session is a grilling session is Matt's core conversational alignment technique where the agent relentlessly interviews the developer to expose ambiguities and resolve decision branches before writing code or documents.

### Adopted from
Matt `README.md:96`.

### Dropped
matt defects (clean (in README.md, skills/in-progress/writing-fragments/, skills/in-progress/writing-shape/); defects: missing-path, doc-drift (in CHANGELOG.md)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- grilling-session-practice (less specific than canonical technique name)
- generic-grilling-session (fails to reflect source methodology)

### Evidence
Matt `README.md:96`.

### Glossary
### grilling-session

- **definition:** Grilling session is a grilling session is Matt's core conversational alignment technique where the agent relentlessly interviews the developer to expose ambiguities and resolve decision branches before writing code or documents.
- **kind:** technique
- **source names:** addy: — · matt: `grilling session` · rjm: —
- **decision:** D-483
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grilling-session`

---

## D-484 — interleaving

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-interleaving
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `interleaving`. Interleaving is a cognitive learning technique used in `teach` to build long-term retention (storage strength) rather than temporary fluency. By alternating among distinct but related topics during practice drills, it forces active discrimination between concepts, preventing rote habituation.

### Adopted from
Matt `skills/productivity/teach/SKILL.md:45`.

### Dropped
matt defects (defects: internal-contradiction) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- interleaving-practice (less specific than canonical technique name)
- generic-interleaving (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/teach/SKILL.md:45`.

### Glossary
### interleaving

- **definition:** Interleaving is a cognitive learning technique used in `teach` to build long-term retention (storage strength) rather than temporary fluency. By alternating among distinct but related topics during practice drills, it forces active discrimination between concepts, preventing rote habituation.
- **kind:** technique
- **source names:** addy: — · matt: `interleaving` · rjm: —
- **decision:** D-484
- **concordance:** `docs/analysis/concordance/techniques.md#matt-interleaving`

---

## D-485 — npx-skills

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-npx-skills
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `npx-skills`. Npx skills is the CLI execution mechanism used by developers to discover, add, and manage skills within their coding environment (`npx skills@latest add ...`), enabling modular distribution and installation of agent capabilities.

### Adopted from
Matt `.changeset/fix-yaml-frontmatter-colons.md:5`.

### Dropped
None (clean source technique).

### Rejected alternatives
- npx-skills-practice (less specific than canonical technique name)
- generic-npx-skills (fails to reflect source methodology)

### Evidence
Matt `.changeset/fix-yaml-frontmatter-colons.md:5`.

### Glossary
### npx-skills

- **definition:** Npx skills is the CLI execution mechanism used by developers to discover, add, and manage skills within their coding environment (`npx skills@latest add ...`), enabling modular distribution and installation of agent capabilities.
- **kind:** technique
- **source names:** addy: — · matt: `npx skills` · rjm: —
- **decision:** D-485
- **concordance:** `docs/analysis/concordance/techniques.md#matt-npx-skills`

---

## D-486 — leading-words

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-leading-words
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `leading-words`. Leading words is a prompt and documentation technique that recruits rich latent concepts already present in an LLM's pretraining using compact tokens. Anchoring to pretrained terms guides complex multi-step behavior without spending context on verbose explanations.

### Adopted from
Matt `skills/productivity/writing-for-agents/SKILL.md:63`.

### Dropped
matt defects (defects: missing-path, doc-drift, orphan) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- leading-words-practice (less specific than canonical technique name)
- generic-leading-words (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:63`.

### Glossary
### leading-words

- **definition:** Leading words is a prompt and documentation technique that recruits rich latent concepts already present in an LLM's pretraining using compact tokens. Anchoring to pretrained terms guides complex multi-step behavior without spending context on verbose explanations.
- **kind:** technique
- **source names:** addy: — · matt: `leading words` · rjm: —
- **decision:** D-486
- **concordance:** `docs/analysis/concordance/techniques.md#matt-leading-words`

---

## D-487 — prompt-quality

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-prompt-quality
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `prompt-quality`. Prompt quality is an engineering technique for prompt-quality emphasizes that conversational precision and relevance must be engineered into the skill prompt itself rather than handled through arbitrary external throttling mechanisms.

### Adopted from
Matt `.out-of-scope/question-limits.md:14`.

### Dropped
None (clean source technique).

### Rejected alternatives
- prompt-quality-practice (less specific than canonical technique name)
- generic-prompt-quality (fails to reflect source methodology)

### Evidence
Matt `.out-of-scope/question-limits.md:14`.

### Glossary
### prompt-quality

- **definition:** Prompt quality is an engineering technique for prompt-quality emphasizes that conversational precision and relevance must be engineered into the skill prompt itself rather than handled through arbitrary external throttling mechanisms.
- **kind:** technique
- **source names:** addy: — · matt: `prompt-quality` · rjm: —
- **decision:** D-487
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prompt-quality`

---

## D-488 — claims-verification-technique

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-claims
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `claims-verification-technique`. Claims verification technique is the coordination technique used in wayfinder to avoid collision between concurrent agent sessions. By assigning the ticket to the current session driver prior to starting work, unclaimed frontier tickets are immediately distinguishable from in-progress tickets, allowing multiple sessions to safely work the frontier in parallel.

### Adopted from
Matt `skills/engineering/wayfinder/SKILL.md:67`.

### Dropped
matt defects (defects: other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- claims-verification-technique-practice (less specific than canonical technique name)
- generic-claims-verification (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wayfinder/SKILL.md:67`.

### Glossary
### claims-verification-technique

- **definition:** Claims verification technique is the coordination technique used in wayfinder to avoid collision between concurrent agent sessions. By assigning the ticket to the current session driver prior to starting work, unclaimed frontier tickets are immediately distinguishable from in-progress tickets, allowing multiple sessions to safely work the frontier in parallel.
- **kind:** technique
- **source names:** addy: — · matt: `claims` · rjm: —
- **decision:** D-488
- **concordance:** `docs/analysis/concordance/techniques.md#matt-claims`

---

## D-489 — wayfinder-exploration-skill

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-wayfinder
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `wayfinder-exploration-skill`. Wayfinder exploration skill is an architectural planning discipline designed for large, multi-session initiatives. Instead of generating speculative implementation tasks, wayfinder charts the unknowns as a shared board of 'decision tickets' on an issue tracker. It methodically resolves decisions one at a time before any implementation code or task slicing begins.

### Adopted from
Matt `skills/engineering/wayfinder/agents/openai.yaml:3`.

### Dropped
None (clean source technique).

### Rejected alternatives
- wayfinder-exploration-skill-practice (less specific than canonical technique name)
- generic-wayfinder-exploration-skill (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wayfinder/agents/openai.yaml:3`.

### Glossary
### wayfinder-exploration-skill

- **definition:** Wayfinder exploration skill is an architectural planning discipline designed for large, multi-session initiatives. Instead of generating speculative implementation tasks, wayfinder charts the unknowns as a shared board of 'decision tickets' on an issue tracker. It methodically resolves decisions one at a time before any implementation code or task slicing begins.
- **kind:** technique
- **source names:** addy: — · matt: `wayfinder` · rjm: —
- **decision:** D-489
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wayfinder`

---

## D-490 — zone-of-proximal-development

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-zone-of-proximal-development
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `zone-of-proximal-development`. Zone of proximal development is an engineering technique for vygotskian pedagogical principle adapted for AI instruction in `teach`. It balances challenge against current mastery, selecting lessons that require deliberate effort without exceeding working memory or jumping into ungrounded prerequisites.

### Adopted from
Matt `docs/productivity/teach.md:44`.

### Dropped
matt defects (defects: other, internal-contradiction) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- zone-of-proximal-development-practice (less specific than canonical technique name)
- generic-zone-of-proximal-development (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/teach.md:44`.

### Glossary
### zone-of-proximal-development

- **definition:** Zone of proximal development is an engineering technique for vygotskian pedagogical principle adapted for AI instruction in `teach`. It balances challenge against current mastery, selecting lessons that require deliberate effort without exceeding working memory or jumping into ungrounded prerequisites.
- **kind:** technique
- **source names:** addy: — · matt: `zone of proximal development` · rjm: —
- **decision:** D-490
- **concordance:** `docs/analysis/concordance/techniques.md#matt-zone-of-proximal-development`

---

## D-491 — frompartial

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-frompartial
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `frompartial`. Frompartial is a TypeScript test helper function from shoehorn that permits partial objects while preserving type validation for all supplied fields, eliminating fragile boilerplate in test fixtures.

### Adopted from
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:65`.

### Dropped
None (clean source technique).

### Rejected alternatives
- frompartial-practice (less specific than canonical technique name)
- generic-frompartial (fails to reflect source methodology)

### Evidence
Matt `skills/misc/migrate-to-shoehorn/SKILL.md:65`.

### Glossary
### frompartial

- **definition:** Frompartial is a TypeScript test helper function from shoehorn that permits partial objects while preserving type validation for all supplied fields, eliminating fragile boilerplate in test fixtures.
- **kind:** technique
- **source names:** addy: — · matt: `fromPartial` · rjm: —
- **decision:** D-491
- **concordance:** `docs/analysis/concordance/techniques.md#matt-frompartial`

---

## D-492 — context-compaction-command

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-compact
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `context-compaction-command`. Context compaction command is a conversational summarization command in Claude Code that compresses dialogue history to free token capacity. In matt's lifecycle philosophy, /compact is intentionally placed at the bottom of the phase boundary decision tree as a default fallback rather than a first reach; because automated summarization flattens nuances and decisions, developers are advised to supply an explicit focusing instruction when compacting.

### Adopted from
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:15`.

### Dropped
None (clean source technique).

### Rejected alternatives
- context-compaction-command-practice (less specific than canonical technique name)
- generic-context-compaction-command (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:15`.

### Glossary
### context-compaction-command

- **definition:** Context compaction command is a conversational summarization command in Claude Code that compresses dialogue history to free token capacity. In matt's lifecycle philosophy, /compact is intentionally placed at the bottom of the phase boundary decision tree as a default fallback rather than a first reach; because automated summarization flattens nuances and decisions, developers are advised to supply an explicit focusing instruction when compacting.
- **kind:** technique
- **source names:** addy: — · matt: `/compact` · rjm: —
- **decision:** D-492
- **concordance:** `docs/analysis/concordance/techniques.md#matt-compact`

---

## D-493 — fluency-strength

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-fluency-strength
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `fluency-strength`. Fluency strength is a psychological concept defining how easily a learner can access information in the immediate moment. In Matt's teaching design, high fluency strength is explicitly identified as an unreliable indicator of true competence that often masks rapid forgetting once the prompt or session ends.

### Adopted from
Matt `skills/productivity/teach/SKILL.md:38`.

### Dropped
matt defects (defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- fluency-strength-practice (less specific than canonical technique name)
- generic-fluency-strength (fails to reflect source methodology)

### Evidence
Matt `skills/productivity/teach/SKILL.md:38`.

### Glossary
### fluency-strength

- **definition:** Fluency strength is a psychological concept defining how easily a learner can access information in the immediate moment. In Matt's teaching design, high fluency strength is explicitly identified as an unreliable indicator of true competence that often masks rapid forgetting once the prompt or session ends.
- **kind:** technique
- **source names:** addy: — · matt: `Fluency strength` · rjm: —
- **decision:** D-493
- **concordance:** `docs/analysis/concordance/techniques.md#matt-fluency-strength`

---

## D-494 — guided-walkthroughs

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-guided-walkthroughs
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `guided-walkthroughs`. Guided walkthroughs is an engineering technique for guided walkthroughs provide structured, reproducible scenario sequences inside self-contained logic prototype HTML files, enabling non-technical stakeholders to test domain logic and edge cases before code is written.

### Adopted from
Matt `skills/engineering/prototype/LOGIC.md:46`.

### Dropped
matt defects (clean (in docs/engineering/prototype.md, skills/engineering/prototype/LOGIC.md); defects: missing-path, doc-drift (in CHANGELOG.md)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- guided-walkthroughs-practice (less specific than canonical technique name)
- generic-guided-walkthroughs (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/prototype/LOGIC.md:46`.

### Glossary
### guided-walkthroughs

- **definition:** Guided walkthroughs is an engineering technique for guided walkthroughs provide structured, reproducible scenario sequences inside self-contained logic prototype HTML files, enabling non-technical stakeholders to test domain logic and edge cases before code is written.
- **kind:** technique
- **source names:** addy: — · matt: `guided walkthroughs` · rjm: —
- **decision:** D-494
- **concordance:** `docs/analysis/concordance/techniques.md#matt-guided-walkthroughs`

---

## D-495 — multi-commit-rebase

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-multi-commit-rebase
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `multi-commit-rebase`. Multi commit rebase is a multi-commit rebase is identified as an operational hazard for coding agents. Because rebasing across multiple commits with repeated conflict resolution easily causes agents to lose track of intermediate state, the recommended pattern is to abort, squash the branch to a single commit, and rebase cleanly once.

### Adopted from
Matt `external/resolving-merge-conflicts.md:48`.

### Dropped
matt defects (defects: orphan, doc-drift) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- multi-commit-rebase-practice (less specific than canonical technique name)
- generic-multi-commit-rebase (fails to reflect source methodology)

### Evidence
Matt `external/resolving-merge-conflicts.md:48`.

### Glossary
### multi-commit-rebase

- **definition:** Multi commit rebase is a multi-commit rebase is identified as an operational hazard for coding agents. Because rebasing across multiple commits with repeated conflict resolution easily causes agents to lose track of intermediate state, the recommended pattern is to abort, squash the branch to a single commit, and rebase cleanly once.
- **kind:** technique
- **source names:** addy: — · matt: `multi-commit rebase` · rjm: —
- **decision:** D-495
- **concordance:** `docs/analysis/concordance/techniques.md#matt-multi-commit-rebase`

---

## D-496 — warning-escalation-helper

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-warn
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `warning-escalation-helper`. Warning escalation helper is a terminal output formatting helper function in `template.sh` providing consistent visual highlighting and alert iconography for non-fatal errors, skipped actions, and cautionary guidance during wizard execution.

### Adopted from
Matt `skills/engineering/wizard/template.sh:63`.

### Dropped
None (clean source technique).

### Rejected alternatives
- warning-escalation-helper-practice (less specific than canonical technique name)
- generic-warning-escalation (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:63`.

### Glossary
### warning-escalation-helper

- **definition:** Warning escalation helper is a terminal output formatting helper function in `template.sh` providing consistent visual highlighting and alert iconography for non-fatal errors, skipped actions, and cautionary guidance during wizard execution.
- **kind:** technique
- **source names:** addy: — · matt: `warn` · rjm: —
- **decision:** D-496
- **concordance:** `docs/analysis/concordance/techniques.md#matt-warn`

---

## D-497 — delegating

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-delegating
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `delegating`. Delegating is the motivating outcome in loop-me's methodology. Once predictable patterns are formalized into workflows without unresolved questions, execution responsibility can be handed over from the human to autonomous agent routines.

### Adopted from
Matt `skills/in-progress/loop-me/SKILL.md:12`.

### Dropped
None (clean source technique).

### Rejected alternatives
- delegating-practice (less specific than canonical technique name)
- generic-delegating (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/loop-me/SKILL.md:12`.

### Glossary
### delegating

- **definition:** Delegating is the motivating outcome in loop-me's methodology. Once predictable patterns are formalized into workflows without unresolved questions, execution responsibility can be handed over from the human to autonomous agent routines.
- **kind:** technique
- **source names:** addy: — · matt: `delegating` · rjm: —
- **decision:** D-497
- **concordance:** `docs/analysis/concordance/techniques.md#matt-delegating`

---

## D-498 — plain-english

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-plain-english
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `plain-english`. Plain english is an engineering technique for plain English establishes the communicative baseline for human-agent collaboration in Matt's toolkit. Grounded in ASD-STE100 principles, it prevents models from generating opaque, self-referential prose and forces clear sentence structures without sacrificing technical precision.

### Adopted from
Matt `external/wait-what.md:25`.

### Dropped
None (clean source technique).

### Rejected alternatives
- plain-english-practice (less specific than canonical technique name)
- generic-plain-english (fails to reflect source methodology)

### Evidence
Matt `external/wait-what.md:25`.

### Glossary
### plain-english

- **definition:** Plain english is an engineering technique for plain English establishes the communicative baseline for human-agent collaboration in Matt's toolkit. Grounded in ASD-STE100 principles, it prevents models from generating opaque, self-referential prose and forces clear sentence structures without sacrificing technical precision.
- **kind:** technique
- **source names:** addy: — · matt: `plain English` · rjm: —
- **decision:** D-498
- **concordance:** `docs/analysis/concordance/techniques.md#matt-plain-english`

---

## D-499 — prettier

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-prettier
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `prettier`. Prettier is an opinionated code formatting tool that enforces consistent styling across a codebase. Integrated into pre-commit workflows so developers and agents do not waste review bandwidth on formatting trivialities.

### Adopted from
Matt `skills/misc/README.md:8`.

### Dropped
None (clean source technique).

### Rejected alternatives
- prettier-practice (less specific than canonical technique name)
- generic-prettier (fails to reflect source methodology)

### Evidence
Matt `skills/misc/README.md:8`.

### Glossary
### prettier

- **definition:** Prettier is an opinionated code formatting tool that enforces consistent styling across a codebase. Integrated into pre-commit workflows so developers and agents do not waste review bandwidth on formatting trivialities.
- **kind:** technique
- **source names:** addy: — · matt: `Prettier` · rjm: —
- **decision:** D-499
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prettier`

---

## D-500 — intent-dispatch-send

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-send
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `intent-dispatch-send`. Intent dispatch send is the foundational interview scoping technique in `to-questionnaire`. By restricting elicitation strictly to transmission parameters (recipient role, expertise, and required deliverables) instead of probing domain content the user explicitly does not possess, it prevents the interview from derailing into speculative or unanswerable queries.

### Adopted from
Matt `docs/productivity/to-questionnaire.md:5`.

### Dropped
None (clean source technique).

### Rejected alternatives
- intent-dispatch-send-practice (less specific than canonical technique name)
- generic-intent-dispatch-send (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/to-questionnaire.md:5`.

### Glossary
### intent-dispatch-send

- **definition:** Intent dispatch send is the foundational interview scoping technique in `to-questionnaire`. By restricting elicitation strictly to transmission parameters (recipient role, expertise, and required deliverables) instead of probing domain content the user explicitly does not possess, it prevents the interview from derailing into speculative or unanswerable queries.
- **kind:** technique
- **source names:** addy: — · matt: `send` · rjm: —
- **decision:** D-500
- **concordance:** `docs/analysis/concordance/techniques.md#matt-send`

---

## D-501 — work-through-the-map

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-work-through-the-map
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `work-through-the-map`. Work through the map is the iterative execution loop of wayfinder. Each session loads the low-resolution map, claims a single frontier decision ticket, investigates or grills to reach a definitive decision, records the resolution, and graduates clarified fog into new tickets until the destination is reached.

### Adopted from
Matt `skills/engineering/wayfinder/SKILL.md:118`.

### Dropped
matt defects (defects: other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- work-through-the-map-practice (less specific than canonical technique name)
- generic-work-through-the-map (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wayfinder/SKILL.md:118`.

### Glossary
### work-through-the-map

- **definition:** Work through the map is the iterative execution loop of wayfinder. Each session loads the low-resolution map, claims a single frontier decision ticket, investigates or grills to reach a definitive decision, records the resolution, and graduates clarified fog into new tickets until the destination is reached.
- **kind:** technique
- **source names:** addy: — · matt: `Work through the map` · rjm: —
- **decision:** D-501
- **concordance:** `docs/analysis/concordance/techniques.md#matt-work-through-the-map`

---

## D-502 — natural-language-steering

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-natural-language-steering
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `natural-language-steering`. Natural language steering is an engineering technique for natural-language steering establishes conversational dialogue as the primary mechanism for regulating agent depth, keeping control with the human operator rather than imposing rigid numeric thresholds.

### Adopted from
Matt `.out-of-scope/question-limits.md:12`.

### Dropped
None (clean source technique).

### Rejected alternatives
- natural-language-steering-practice (less specific than canonical technique name)
- generic-natural-language-steering (fails to reflect source methodology)

### Evidence
Matt `.out-of-scope/question-limits.md:12`.

### Glossary
### natural-language-steering

- **definition:** Natural language steering is an engineering technique for natural-language steering establishes conversational dialogue as the primary mechanism for regulating agent depth, keeping control with the human operator rather than imposing rigid numeric thresholds.
- **kind:** technique
- **source names:** addy: — · matt: `natural-language steering` · rjm: —
- **decision:** D-502
- **concordance:** `docs/analysis/concordance/techniques.md#matt-natural-language-steering`

---

## D-503 — safe-read-command

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-read-r
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `safe-read-command`. Safe read command is an engineering technique for `read -r` is the POSIX bash built-in command for capturing input without backslash escaping. While lightweight and portable, its lack of terminal line-editing causes escape sequences (such as arrow key movements) to be captured as literal text, presenting a documented UX limitation in setup wizards.

### Adopted from
Matt `external/wizard.md:49`.

### Dropped
matt defects (defects: script-bug (Arrow keys in ask prompts insert escape codes rather than moving cursor because read -r lacks line-editing support)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- safe-read-command-practice (less specific than canonical technique name)
- generic-safe-read-command (fails to reflect source methodology)

### Evidence
Matt `external/wizard.md:49`.

### Glossary
### safe-read-command

- **definition:** Safe read command is an engineering technique for `read -r` is the POSIX bash built-in command for capturing input without backslash escaping. While lightweight and portable, its lack of terminal line-editing causes escape sequences (such as arrow key movements) to be captured as literal text, presenting a documented UX limitation in setup wizards.
- **kind:** technique
- **source names:** addy: — · matt: `read -r` · rjm: —
- **decision:** D-503
- **concordance:** `docs/analysis/concordance/techniques.md#matt-read-r`

---

## D-504 — bash-syntax-check

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-bash-n
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `bash-syntax-check`. Bash syntax check is an engineering technique for `bash -n` performs a syntax check on shell scripts without executing commands. Because wizards contain interactive prompts and launch browser windows, the AI cannot run them end-to-end; `bash -n` provides a fast, zero-side-effect syntax gate before handoff.

### Adopted from
Matt `external/wizard.md:41`.

### Dropped
None (clean source technique).

### Rejected alternatives
- bash-syntax-check-practice (less specific than canonical technique name)
- generic-bash-syntax-check (fails to reflect source methodology)

### Evidence
Matt `external/wizard.md:41`.

### Glossary
### bash-syntax-check

- **definition:** Bash syntax check is an engineering technique for `bash -n` performs a syntax check on shell scripts without executing commands. Because wizards contain interactive prompts and launch browser windows, the AI cannot run them end-to-end; `bash -n` provides a fast, zero-side-effect syntax gate before handoff.
- **kind:** technique
- **source names:** addy: — · matt: `bash -n` · rjm: —
- **decision:** D-504
- **concordance:** `docs/analysis/concordance/techniques.md#matt-bash-n`

---

## D-505 — execution-wait-helper

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-wait
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `execution-wait-helper`. Execution wait helper is an engineering technique for in Matt's prompt design, "wait" is a targeted communicative trigger. Unlike output directives ("be brief", "be concise") that prompt the model to discard explanatory context, "wait" signals listener confusion, causing the agent to step backward, diagnose what went unexplained, and bridge the gap.

### Adopted from
Matt `external/wait-what.md:31`.

### Dropped
None (clean source technique).

### Rejected alternatives
- execution-wait-helper-practice (less specific than canonical technique name)
- generic-execution-wait (fails to reflect source methodology)

### Evidence
Matt `external/wait-what.md:31`.

### Glossary
### execution-wait-helper

- **definition:** Execution wait helper is an engineering technique for in Matt's prompt design, "wait" is a targeted communicative trigger. Unlike output directives ("be brief", "be concise") that prompt the model to discard explanatory context, "wait" signals listener confusion, causing the agent to step backward, diagnose what went unexplained, and bridge the gap.
- **kind:** technique
- **source names:** addy: — · matt: `wait` · rjm: —
- **decision:** D-505
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wait`

---

## D-506 — interactive-teaching-dialogue

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-teach
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `interactive-teaching-dialogue`. Interactive teaching dialogue is a dedicated pedagogical skill that isolates learning activities from production code. It verifies external learning materials rather than trusting model parametric memory and delivers bite-sized HTML lessons that track progress across sessions.

### Adopted from
Matt `docs/productivity/teach.md:3`.

### Dropped
matt defects (defects: doc-drift, script-bug, internal-contradiction, orphan, missing-path, other) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- interactive-teaching-dialogue-practice (less specific than canonical technique name)
- generic-interactive-teaching-dialogue (fails to reflect source methodology)

### Evidence
Matt `docs/productivity/teach.md:3`.

### Glossary
### interactive-teaching-dialogue

- **definition:** Interactive teaching dialogue is a dedicated pedagogical skill that isolates learning activities from production code. It verifies external learning materials rather than trusting model parametric memory and delivers bite-sized HTML lessons that track progress across sessions.
- **kind:** technique
- **source names:** addy: — · matt: `teach` · rjm: —
- **decision:** D-506
- **concordance:** `docs/analysis/concordance/techniques.md#matt-teach`

---

## D-507 — introduced-change-tracking

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-introduced
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `introduced-change-tracking`. Introduced change tracking is an engineering technique for introduced concepts are explicitly explained and landed within the article itself rather than assumed as audience prerequisites. Once an introduced concept is established by a beat or paragraph, it joins the running grounded set, allowing subsequent sections of the piece to build directly upon it without alienating the reader.

### Adopted from
Matt `skills/in-progress/writing-beats/SKILL.md:32`.

### Dropped
None (clean source technique).

### Rejected alternatives
- introduced-change-tracking-practice (less specific than canonical technique name)
- generic-introduced-change-tracking (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/writing-beats/SKILL.md:32`.

### Glossary
### introduced-change-tracking

- **definition:** Introduced change tracking is an engineering technique for introduced concepts are explicitly explained and landed within the article itself rather than assumed as audience prerequisites. Once an introduced concept is established by a beat or paragraph, it joins the running grounded set, allowing subsequent sections of the piece to build directly upon it without alienating the reader.
- **kind:** technique
- **source names:** addy: — · matt: `Introduced` · rjm: —
- **decision:** D-507
- **concordance:** `docs/analysis/concordance/techniques.md#matt-introduced`

---

## D-508 — no-ops

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-no-ops
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `no-ops`. No ops is a pruning technique that tests whether an instruction actually changes model behavior relative to default pre-trained behavior. If a model already follows the behavior by default, the instruction consumes valuable context window tokens and attention without altering output, and should be eliminated rather than edited.

### Adopted from
Matt `skills/in-progress/retro/SKILL.md:22`.

### Dropped
None (clean source technique).

### Rejected alternatives
- no-ops-practice (less specific than canonical technique name)
- generic-no-ops (fails to reflect source methodology)

### Evidence
Matt `skills/in-progress/retro/SKILL.md:22`.

### Glossary
### no-ops

- **definition:** No ops is a pruning technique that tests whether an instruction actually changes model behavior relative to default pre-trained behavior. If a model already follows the behavior by default, the instruction consumes valuable context window tokens and attention without altering output, and should be eliminated rather than edited.
- **kind:** technique
- **source names:** addy: — · matt: `No-ops` · rjm: —
- **decision:** D-508
- **concordance:** `docs/analysis/concordance/techniques.md#matt-no-ops`

---

## D-509 — ask-secret

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-ask-secret
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `ask-secret`. Ask secret is an interactive secret input helper in the wizard template library. Similar to `ask`, it prompts the user for a configuration value and retains previously saved values on re-run, but uses `read -rs` to suppress terminal echoing, safeguarding API tokens and passwords during setup.

### Adopted from
Matt `skills/engineering/wizard/template.sh:113`.

### Dropped
None (clean source technique).

### Rejected alternatives
- ask-secret-practice (less specific than canonical technique name)
- generic-ask-secret (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:113`.

### Glossary
### ask-secret

- **definition:** Ask secret is an interactive secret input helper in the wizard template library. Similar to `ask`, it prompts the user for a configuration value and retains previously saved values on re-run, but uses `read -rs` to suppress terminal echoing, safeguarding API tokens and passwords during setup.
- **kind:** technique
- **source names:** addy: — · matt: `ask_secret` · rjm: —
- **decision:** D-509
- **concordance:** `docs/analysis/concordance/techniques.md#matt-ask-secret`

---

## D-510 — free-play-buttons

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-free-play-buttons
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `free-play-buttons`. Free play buttons is an engineering technique for interactive controls in a logic prototype offering one button per domain action. They allow non-technical evaluators to poke at the state machine in arbitrary sequences, exposing unforeseen edge cases or invalid state transitions early.

### Adopted from
Matt `skills/engineering/prototype/LOGIC.md:45`.

### Dropped
matt defects (defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44)) (D-006: defects dropped, design intent preserved).

### Rejected alternatives
- free-play-buttons-practice (less specific than canonical technique name)
- generic-free-play-buttons (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/prototype/LOGIC.md:45`.

### Glossary
### free-play-buttons

- **definition:** Free play buttons is an engineering technique for interactive controls in a logic prototype offering one button per domain action. They allow non-technical evaluators to poke at the state machine in arbitrary sequences, exposing unforeseen edge cases or invalid state transitions early.
- **kind:** technique
- **source names:** addy: — · matt: `free-play buttons` · rjm: —
- **decision:** D-510
- **concordance:** `docs/analysis/concordance/techniques.md#matt-free-play-buttons`

---

## D-511 — direct-feedback-utterance

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 030
- **status:** active
- **supersedes:** —
- **resolves:** techniques.md#matt-say
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by establishing canonical definition and boundaries.

### Decision
The canonical term for this technique is `direct-feedback-utterance`. Direct feedback utterance is a bash output helper function in the wizard library that formats plain text instructions with two spaces of indentation, providing readable visual hierarchy beneath stage headings during interactive setup flows.

### Adopted from
Matt `skills/engineering/wizard/template.sh:58`.

### Dropped
None (clean source technique).

### Rejected alternatives
- direct-feedback-utterance-practice (less specific than canonical technique name)
- generic-direct-feedback-utterance (fails to reflect source methodology)

### Evidence
Matt `skills/engineering/wizard/template.sh:58`.

### Glossary
### direct-feedback-utterance

- **definition:** Direct feedback utterance is a bash output helper function in the wizard library that formats plain text instructions with two spaces of indentation, providing readable visual hierarchy beneath stage headings during interactive setup flows.
- **kind:** technique
- **source names:** addy: — · matt: `say` · rjm: —
- **decision:** D-511
- **concordance:** `docs/analysis/concordance/techniques.md#matt-say`
---

## D-512 — ask-first-confirmation-gate

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 031
- **status:** active
- **supersedes:** —
- **resolves:** gates.md#ask-first-confirmation-gate
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach emphasize human verification for high-impact decisions and unyielding gates; followed by establishing an explicit confirmation gate.

### Decision
The canonical term for this gate is `ask-first-confirmation-gate`. An ask-first confirmation gate is a mandatory human-in-the-loop pause requiring explicit human approval before an autonomous agent executes irreversible, destructive, security-sensitive, or architecturally breaking operations.

### Adopted from
Synthesizes Addy's security trigger criteria (`skills/security-and-hardening/SKILL.md:55`), Matt's shared-understanding closure barrier (`external/grilling.md:50`), and RJM's repository-level mandatory pause categories (`AGENTS.md:25`).

### Dropped
Matt's narrow restriction of confirmation gates solely to conversational interview closure in grilling (generalized to high-impact lifecycle boundary gates).

### Rejected alternatives
- ask-first (ambiguous between conversational posture and explicit gating mechanism)
- confirmation-gate (lacks explicit indication that the gate is an upstream "ask-first" barrier rather than post-facto confirmation)

### Evidence
Addy `skills/security-and-hardening/SKILL.md:55`; Matt `external/grilling.md:50`, `CHANGELOG.md:169`; RJM `AGENTS.md:25`, `.claude/skills/autoplan/SKILL.md:172`.

### Glossary
### ask-first-confirmation-gate

- **definition:** An ask-first confirmation gate is a mandatory human-in-the-loop pause requiring explicit human approval before an autonomous agent executes irreversible, destructive, security-sensitive, or architecturally breaking operations.
- **kind:** gate
- **source names:** addy: `Ask First` · matt: `confirmation gate` · rjm: `Ask First`
- **decision:** D-512
- **concordance:** `docs/analysis/concordance/gates.md#ask-first-confirmation-gate`
- **not to be confused with:** human-checkpoint, front-gate-prerequisite

---

## D-513 — completion-criteria-quality-gate

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 031
- **status:** active
- **supersedes:** —
- **resolves:** gates.md#completion-criteria-quality-gate
- **preferences consulted:** PREFERENCES.md § Depth requires aligning down to named techniques and criteria; followed by formalizing completion criteria within the quality gate taxonomy.

### Decision
The canonical term for this gate is `completion-criteria-quality-gate`. A completion-criteria quality gate is an exit evaluation checkpoint requiring concrete, observable, and verifiable proof that all specified task objectives and constraints are satisfied before work is marked done.

### Adopted from
Synthesizes Matt's operational rule that every step must end on concrete verifiable completion conditions (`skills/productivity/writing-for-agents/SKILL.md:47`) with RJM's formal validation checkpoint mechanism (`README.md:148`).

### Dropped
RJM's heavyweight subagent multi-role orchestration where a lightweight local criterion verification suffices.

### Rejected alternatives
- completion-criteria (identifies the criteria list rather than the enforcement gate itself)
- quality-gate (overly generic; overlaps with pipeline quality gates and definition-of-done)

### Evidence
Matt `skills/productivity/writing-for-agents/SKILL.md:47`, `docs/productivity/writing-for-agents.md:28`; RJM `README.md:148`.

### Glossary
### completion-criteria-quality-gate

- **definition:** A completion-criteria quality gate is an exit evaluation checkpoint requiring concrete, observable, and verifiable proof that all specified task objectives and constraints are satisfied before work is marked done.
- **kind:** gate
- **source names:** addy: — · matt: `Completion criteria` · rjm: `Quality Gate`
- **decision:** D-513
- **concordance:** `docs/analysis/concordance/gates.md#completion-criteria-quality-gate`
- **not to be confused with:** definition-of-done, quality-gate-pipeline

---

## D-514 — stop-the-line-andon-cord

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 031
- **status:** active
- **supersedes:** —
- **resolves:** gates.md#stop-the-line-andon-cord
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach favor unyielding failure handling and immediate defect remediation; followed by establishing an explicit stop-the-line gate.

### Decision
The canonical term for this gate is `stop-the-line-andon-cord`. A stop-the-line andon cord is a non-negotiable operational gate that immediately halts all forward execution, progression, or promotion upon the detection of an unexpected failure, broken invariant, or regression until root-cause diagnosis is complete.

### Adopted from
Synthesizes Addy's debugging discipline halting progression to fix root cause rather than guessing (`external/debugging-and-error-recovery.md:5`) and RJM's explicit Toyota/Lean andon-cord threshold mechanism (`.claude/skills/decision-critic/references/decision-pre-committed-metrics.md:23`).

### Dropped
None (both packages share identical lean manufacturing operational intent).

### Rejected alternatives
- stop-the-line-rule (names a policy rule rather than the mechanical gate itself)
- andon-cord (domain metaphor that may obscure software execution semantics without "stop-the-line")

### Evidence
Addy `external/debugging-and-error-recovery.md:5`, `skills/browser-testing-with-devtools/SKILL.md:12`; RJM `.claude/skills/decision-critic/references/decision-pre-committed-metrics.md:23`, `.claude/skills/review/SKILL.md:85`.

### Glossary
### stop-the-line-andon-cord

- **definition:** A stop-the-line andon cord is a non-negotiable operational gate that immediately halts all forward execution, progression, or promotion upon the detection of an unexpected failure, broken invariant, or regression until root-cause diagnosis is complete.
- **kind:** gate
- **source names:** addy: `Stop-the-line rule` · matt: — · rjm: `andon-cord`
- **decision:** D-514
- **concordance:** `docs/analysis/concordance/gates.md#stop-the-line-andon-cord`
- **not to be confused with:** front-gate-prerequisite, self-audit-round-cap

---

## D-515 — smoke-testing

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 031
- **status:** active
- **supersedes:** —
- **resolves:** gates.md#smoke-testing
- **preferences consulted:** PREFERENCES.md § References and § Depth emphasize rigorous testing patterns and clear gate definitions; followed by adopting smoke-testing.

### Decision
The canonical term for this gate is `smoke-testing`. Smoke testing is a rapid, preliminary verification gate that exercises critical execution pathways or basic system availability immediately after changes or deployments to confirm fundamental functionality before initiating exhaustive test suites.

### Adopted from
Combines Addy's post-deployment staging environment readiness check (`evals/fixtures/shipping-and-launch/launch-status.md:5`) with Matt's immediate post-configuration pipeline execution check (`skills/misc/setup-pre-commit/SKILL.md:85`).

### Dropped
Addy's staging-only contextual restriction (smoke testing applies equally to local build artifacts and CI environments).

### Rejected alternatives
- staging-smoke-test (overly specific to remote staging deployment environments)
- sanity-check (colloquial and less descriptive than smoke-testing)

### Evidence
Addy `evals/fixtures/shipping-and-launch/launch-status.md:5`; Matt `skills/misc/setup-pre-commit/SKILL.md:85`.

### Glossary
### smoke-testing

- **definition:** Smoke testing is a rapid, preliminary verification gate that exercises critical execution pathways or basic system availability immediately after changes or deployments to confirm fundamental functionality before initiating exhaustive test suites.
- **kind:** gate
- **source names:** addy: `Staging smoke test` · matt: `smoke test` · rjm: —
- **decision:** D-515
- **concordance:** `docs/analysis/concordance/gates.md#smoke-testing`
- **not to be confused with:** unit-testing-suite, integration-test

---

## D-516 — unit-testing-suite

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 031
- **status:** active
- **supersedes:** —
- **resolves:** gates.md#unit-testing-suite
- **preferences consulted:** PREFERENCES.md § References highlights `testing-patterns.md` and verification rigor; followed by adopting unit-testing-suite.

### Decision
The canonical term for this gate is `unit-testing-suite`. A unit-testing suite is an automated verification gate comprising fast, isolated test assertions that validate individual functions, modules, or component behaviors against their specifications.

### Adopted from
Synthesizes Addy's CI pipeline unit test gate specification using runners like Jest/Vitest (`skills/ci-cd-and-automation/SKILL.md:37`) with Matt's implementation cadence requiring regular single-file test runs and full test suite verification (`skills/engineering/implement/SKILL.md:11`).

### Dropped
Matt's non-standard tool invocation patterns in favor of Bun-native test runner execution (D-003).

### Rejected alternatives
- unit-tests (describes individual test cases rather than the collective gate)
- test-suite (ambiguous; encompasses end-to-end, integration, and performance suites as well as unit tests)

### Evidence
Addy `skills/ci-cd-and-automation/SKILL.md:37`, `evals/fixtures/shipping-and-launch/launch-status.md:3`; Matt `skills/engineering/implement/SKILL.md:11`.

### Glossary
### unit-testing-suite

- **definition:** A unit-testing suite is an automated verification gate comprising fast, isolated test assertions that validate individual functions, modules, or component behaviors against their specifications.
- **kind:** gate
- **source names:** addy: `Unit tests` · matt: `test suite` · rjm: —
- **decision:** D-516
- **concordance:** `docs/analysis/concordance/gates.md#unit-testing-suite`
- **not to be confused with:** integration-test, smoke-testing

---

## D-517 — pretooluse-hook

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 031
- **status:** active
- **supersedes:** —
- **resolves:** gates.md#pretooluse-hook
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach emphasize deterministic boundaries, safety guardrails, and dual-target parity (D-009); followed by formalizing pretooluse-hook.

### Decision
The canonical term for this gate is `pretooluse-hook`. A pretooluse hook is an automated lifecycle interception gate executed by the agent harness prior to any tool call invocation, validating arguments, enforcing security boundaries, or mutating input parameters before execution.

### Adopted from
Combines Addy's hook event registration conventions for caching and filtering (`hooks/sdd-cache-pre.sh:2`, `hooks/SIMPLIFY-IGNORE.md:24`) with Matt's safety guardrails intercepting and blocking dangerous tool commands (`skills/misc/git-guardrails-claude-code/SKILL.md:8`).

### Dropped
Matt's bash-only script wrapper implementation in favor of cross-platform Bun TypeScript execution (D-003) and Antigravity hook parity (D-009).

### Rejected alternatives
- pretooluse (refers to the raw harness event identifier rather than the operational gate)
- tool-interception-guard (avoids invented terminology when the canonical hook name is standardized)

### Evidence
Addy `hooks/sdd-cache-pre.sh:2`, `hooks/SIMPLIFY-IGNORE.md:24`; Matt `skills/misc/git-guardrails-claude-code/SKILL.md:8`.

### Glossary
### pretooluse-hook

- **definition:** A pretooluse hook is an automated lifecycle interception gate executed by the agent harness prior to any tool call invocation, validating arguments, enforcing security boundaries, or mutating input parameters before execution.
- **kind:** gate
- **source names:** addy: `PreToolUse` · matt: `PreToolUse hook` · rjm: —
- **decision:** D-517
- **concordance:** `docs/analysis/concordance/gates.md#pretooluse-hook`
- **not to be confused with:** pre-commit-validation-checks, posttooluse-hook

---

## D-518 — pre-commit-validation-checks

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 031
- **status:** active
- **supersedes:** —
- **resolves:** gates.md#pre-commit-validation-checks
- **preferences consulted:** PREFERENCES.md § References and § Constraints emphasize rigorous validation and preventing defect leakage; followed by adopting pre-commit-validation-checks.

### Decision
The canonical term for this gate is `pre-commit-validation-checks`. Pre-commit validation checks are an automated gate running local linters, typecheckers, security secret scans, and tests before a git commit or push is created, ensuring broken or non-compliant changes never enter version control.

### Adopted from
Synthesizes Addy's pre-commit security checklist preventing secrets in code (`references/security-checklist.md:8`, `references/security-checklist.md:32`) with RJM's automated gate-ladder hook assertions run via Lefthook (`.claude/skills/ai-agents-change-control/references/gate-ladder.md:15`).

### Dropped
RJM's Lefthook dependency in favor of standard git hooks and Bun validation scripts (D-003).

### Rejected alternatives
- pre-commit-checks (less specific than naming the validation and gating role)
- pre-push-hook (refers only to the remote push boundary, missing the earlier local commit gate)

### Evidence
Addy `references/security-checklist.md:8`, `references/security-checklist.md:32`; RJM `.claude/skills/ai-agents-change-control/references/gate-ladder.md:15`, `.agents/architecture/ADR-090-pr-branch-holder-lease.md:69`.

### Glossary
### pre-commit-validation-checks

- **definition:** Pre-commit validation checks are an automated gate running local linters, typecheckers, security secret scans, and tests before a git commit or push is created, ensuring broken or non-compliant changes never enter version control.
- **kind:** gate
- **source names:** addy: `Pre-Commit Checks` · matt: — · rjm: `pre-push hook`
- **decision:** D-518
- **concordance:** `docs/analysis/concordance/gates.md#pre-commit-validation-checks`
- **not to be confused with:** pretooluse-hook, smoke-testing

---

## D-519 — spec-subagent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#spec-sub-agent
- **preferences consulted:** PREFERENCES.md § Approach and § Roles emphasize granular role specialization and multi-perspective verification; followed by adopting an isolated specification audit subagent.

### Decision
The canonical term for this role is `spec-subagent`. A spec-subagent is a specialized subagent persona deployed during specification drafting and code review to audit functional requirements conformance, verify acceptance criteria, and flag scope creep against authoritative design documents.

### Adopted from
Synthesizes Matt's prompt specification for auditing functional specification conformance and scope creep (`skills/engineering/code-review/SKILL.md:66`) with RJM's dedicated research documentation and PRD analysis domain (`.agents/architecture/ASSESSMENT-session-qa-validation-options.md:78`).

### Dropped
RJM's heavy multi-page prompt boilerplate and Matt's hyphenated spelling in favor of standard unhyphenated subagent naming.

### Rejected alternatives
- analyst-agent (overly generic, conflates specification audit with open-ended domain exploration)
- spec-reviewer (lacks indication that the role is executed as an isolated subagent)

### Evidence
Matt `skills/engineering/code-review/SKILL.md:66`; RJM `.agents/architecture/ASSESSMENT-session-qa-validation-options.md:78`, `.agents/analysis/002-project-constraints-consolidation.md:853`.

### Glossary
### spec-subagent

- **definition:** A spec-subagent is a specialized subagent persona deployed during specification drafting and code review to audit functional requirements conformance, verify acceptance criteria, and flag scope creep against authoritative design documents.
- **kind:** role
- **source names:** addy: — · matt: `Spec sub-agent` · rjm: `Analyst Agent`
- **decision:** D-519
- **concordance:** `docs/analysis/concordance/roles.md#spec-sub-agent`
- **not to be confused with:** standards-subagent, specification-document

---

## D-520 — brutally-honest-strategic-advisor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#brutally-honest-strategic-advisor
- **preferences consulted:** PREFERENCES.md § Approach values RJM's rigorous adversarial critique mechanisms; followed by adopting this specialized advisory persona.

### Decision
The canonical term for this role is `brutally-honest-strategic-advisor`. A brutally honest strategic advisor is an adversarial advisory persona that cuts through organizational blind spots, directly challenges architectural and roadmap assumptions, and delivers unfiltered critiques of strategic plans.

### Adopted from
RJM's high-level advisor persona definition in `.claude/agents/high-level-advisor.md:13`.

### Dropped
Colloquial conversational padding while preserving the rigorous, unsparing verification posture.

### Rejected alternatives
- strategic-advisor (lacks the explicit mandate for adversarial confrontation and unfiltered critique)
- executive-critic (narrows the focus to executive management rather than technical strategy)

### Evidence
RJM `.claude/agents/high-level-advisor.md:13`, `.agents/architecture/ADR-043-role-composition-principles.md:120`.

### Glossary
### brutally-honest-strategic-advisor

- **definition:** A brutally honest strategic advisor is an adversarial advisory persona that cuts through organizational blind spots, directly challenges architectural and roadmap assumptions, and delivers unfiltered critiques of strategic plans.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Brutally Honest Strategic Advisor`
- **decision:** D-520
- **concordance:** `docs/analysis/concordance/roles.md#brutally-honest-strategic-advisor`
- **not to be confused with:** contrarian-analyst, hostile-expert

---

## D-521 — planner

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#planner
- **preferences consulted:** PREFERENCES.md § Approach and § Phase mapping highlight planning as an essential lifecycle stage; followed by adopting the dedicated planner persona.

### Decision
The canonical term for this role is `planner`. A planner is an interactive lifecycle agent role responsible for breaking high-level epics and specifications into structured, phased execution plans with explicit task dependencies.

### Adopted from
RJM's interactive planning skill in `.claude/skills/planner/SKILL.md:3` and planning command in `.claude/commands/plan.md:32`.

### Dropped
RJM's complex multi-phase subagent dispatch loop in favor of concise phase-bound task breakdown.

### Rejected alternatives
- planning-agent (adds redundant suffix to an established functional role)
- task-decomposer (confuses macroscopic execution planning with microscopic work breakdown)

### Evidence
RJM `.claude/skills/planner/SKILL.md:3`, `.claude/commands/plan.md:32`, `.agents/analysis/adr-045-feasibility-analysis.md:233`.

### Glossary
### planner

- **definition:** A planner is an interactive lifecycle agent role responsible for breaking high-level epics and specifications into structured, phased execution plans with explicit task dependencies.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `planner`
- **decision:** D-521
- **concordance:** `docs/analysis/concordance/roles.md#planner`
- **not to be confused with:** task-decomposer, coordinator

---

## D-522 — task-decomposer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#task-decomposer
- **preferences consulted:** PREFERENCES.md § Approach favors granular task decomposition and explicit acceptance criteria; followed by adopting task-decomposer.

### Decision
The canonical term for this role is `task-decomposer`. A task-decomposer is a specialized agent persona that translates high-level planning milestones into atomic, actionable, and testable work tickets with explicit acceptance criteria and boundaries.

### Adopted from
RJM's task decomposition agent in `.agents/AGENT-SYSTEM.md:120` and `README.md:410`.

### Dropped
External issue tracker API synchronization logic while preserving atomic decomposition rules.

### Rejected alternatives
- ticket-creator (emphasizes artifact mechanics rather than the decomposition technique)
- work-slicer (less established than task-decomposer in agent architectures)

### Evidence
RJM `.agents/AGENT-SYSTEM.md:120`, `README.md:410`, `.claude/commands/plan.md:158`.

### Glossary
### task-decomposer

- **definition:** A task-decomposer is a specialized agent persona that translates high-level planning milestones into atomic, actionable, and testable work tickets with explicit acceptance criteria and boundaries.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `task-decomposer`
- **decision:** D-522
- **concordance:** `docs/analysis/concordance/roles.md#task-decomposer`
- **not to be confused with:** planner, needs-slicing-role

---

## D-523 — assignee-role

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#assignee
- **preferences consulted:** PREFERENCES.md § Approach and § References value clear operational ownership; followed by adopting assignee-role.

### Decision
The canonical term for this role is `assignee-role`. An assignee role is the operational ownership designation identifying the specific human or autonomous agent responsible for claiming, implementing, and delivering an issue ticket.

### Adopted from
Matt's issue tracker ownership definition in `skills/engineering/wayfinder/SKILL.md:67`.

### Dropped
Matt-specific local markdown issue-tracker schema dependencies.

### Rejected alternatives
- assignee (ambiguous between the identity of the person/agent and the formal lifecycle role)
- ticket-owner (less standard in issue tracker metadata schemas than assignee)

### Evidence
Matt `skills/engineering/wayfinder/SKILL.md:67`, `skills/engineering/triage/SKILL.md:32`.

### Glossary
### assignee-role

- **definition:** An assignee role is the operational ownership designation identifying the specific human or autonomous agent responsible for claiming, implementing, and delivering an issue ticket.
- **kind:** role
- **source names:** addy: — · matt: `assignee` · rjm: —
- **decision:** D-523
- **concordance:** `docs/analysis/concordance/roles.md#assignee`
- **not to be confused with:** rollback-owner, driver

---

## D-524 — ask-matt-router

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#ask-matt
- **preferences consulted:** PREFERENCES.md § Approach supports intuitive conversational routing over skill collections; followed by adopting the router persona pattern.

### Decision
The canonical term for this role is `ask-matt-router`. An ask-matt router is an interactive triage and dispatch persona that analyzes human developer intent, inspects repository state, and routes work to the appropriate lifecycle skill or command.

### Adopted from
Matt's skill router definition in `docs/engineering/ask-matt.md:3` and `.agents/invocation.md:18`.

### Dropped
Matt-specific personal branding in favor of generic lifecycle dispatch.

### Rejected alternatives
- ask-matt (preserves personal branding unsuitable for brain's canonical lifecycle)
- skill-router (too generic, masks conversational intent-elicitation behavior)

### Evidence
Matt `docs/engineering/ask-matt.md:3`, `.agents/invocation.md:18`.

### Glossary
### ask-matt-router

- **definition:** An ask-matt router is an interactive triage and dispatch persona that analyzes human developer intent, inspects repository state, and routes work to the appropriate lifecycle skill or command.
- **kind:** role
- **source names:** addy: — · matt: `ask-matt` · rjm: —
- **decision:** D-524
- **concordance:** `docs/analysis/concordance/roles.md#ask-matt`
- **not to be confused with:** router, coordinator

---

## D-525 — ready-for-agent-role

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#ready-for-agent
- **preferences consulted:** PREFERENCES.md § Phase mapping recognizes task state transitions; followed by adopting ready-for-agent-role.

### Decision
The canonical term for this role is `ready-for-agent-role`. A ready-for-agent role is a task triage state designation indicating that a work ticket has a complete specification, verified acceptance criteria, and bounded scope suitable for autonomous agent execution.

### Adopted from
Matt's triage label specification in `skills/engineering/triage/SKILL.md:35` and `docs/engineering/to-spec.md:42`.

### Dropped
Uncontrolled background polling triggers that risk runaway token spend.

### Rejected alternatives
- ready-for-agent (ambiguous between state label and agent role)
- agent-ready (adjective form rather than formal triage classification role)

### Evidence
Matt `skills/engineering/triage/SKILL.md:35`, `docs/engineering/to-spec.md:42`.

### Glossary
### ready-for-agent-role

- **definition:** A ready-for-agent role is a task triage state designation indicating that a work ticket has a complete specification, verified acceptance criteria, and bounded scope suitable for autonomous agent execution.
- **kind:** role
- **source names:** addy: — · matt: `ready-for-agent` · rjm: —
- **decision:** D-525
- **concordance:** `docs/analysis/concordance/roles.md#ready-for-agent`
- **not to be confused with:** ready-for-human-role, ready-for-afk-role

---

## D-526 — ready-for-human-role

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#ready-for-human
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach emphasize clear boundaries between human judgment and agent execution; followed by adopting ready-for-human-role.

### Decision
The canonical term for this role is `ready-for-human-role`. A ready-for-human role is a task triage state designation marking an issue that requires human implementation, manual credentials, subjective design judgment, or third-party coordination.

### Adopted from
Matt's triage label definition in `skills/engineering/triage/SKILL.md:36` and `docs/engineering/triage.md:36`.

### Dropped
Ad-hoc manual tagging in favor of structured triage automation.

### Rejected alternatives
- human-only (lacks explicit task queue readiness indication)
- needs-human (less actionable than stating task readiness for human pickup)

### Evidence
Matt `skills/engineering/triage/SKILL.md:36`, `docs/engineering/triage.md:36`.

### Glossary
### ready-for-human-role

- **definition:** A ready-for-human role is a task triage state designation marking an issue that requires human implementation, manual credentials, subjective design judgment, or third-party coordination.
- **kind:** role
- **source names:** addy: — · matt: `ready-for-human` · rjm: —
- **decision:** D-526
- **concordance:** `docs/analysis/concordance/roles.md#ready-for-human`
- **not to be confused with:** ready-for-agent-role, ask-first-confirmation-gate

---

## D-527 — ready-for-afk-role

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#ready-for-afk
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach govern unattended execution safety; followed by adopting ready-for-afk-role.

### Decision
The canonical term for this role is `ready-for-afk-role`. A ready-for-afk role is a task triage state designation indicating that an issue is safe for unattended, background execution without real-time human interaction or supervision.

### Adopted from
Matt's issue triage state machine definition in `CONTEXT.md:19`.

### Dropped
Unrestricted shell execution permissions without sandboxing.

### Rejected alternatives
- afk-ready (adjective form rather than canonical state designation)
- background-ready (confuses asynchronous worker dispatch with unattended batch execution)

### Evidence
Matt `CONTEXT.md:19`, `skills/engineering/triage/SKILL.md:35`.

### Glossary
### ready-for-afk-role

- **definition:** A ready-for-afk role is a task triage state designation indicating that an issue is safe for unattended, background execution without real-time human interaction or supervision.
- **kind:** role
- **source names:** addy: — · matt: `ready-for-afk` · rjm: —
- **decision:** D-527
- **concordance:** `docs/analysis/concordance/roles.md#ready-for-afk`
- **not to be confused with:** afk-agent, afk-runner

---

## D-528 — needs-slicing-role

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#needs-slicing
- **preferences consulted:** PREFERENCES.md § Approach and § Depth favor vertical slice decomposition; followed by adopting needs-slicing-role.

### Decision
The canonical term for this role is `needs-slicing-role`. A needs-slicing role is a task triage state designation identifying an issue whose scope exceeds single-session context limits or task boundaries, requiring vertical decomposition into smaller tickets before implementation.

### Adopted from
Matt's triage classification in `external/triage.md:56` and `skills/engineering/triage/SKILL.md:36`.

### Dropped
Community derivative effort-point estimates.

### Rejected alternatives
- needs-breakdown (less descriptive of vertical slice decomposition)
- too-large (evaluative description rather than actionable triage state)

### Evidence
Matt `external/triage.md:56`, `skills/engineering/triage/SKILL.md:36`.

### Glossary
### needs-slicing-role

- **definition:** A needs-slicing role is a task triage state designation identifying an issue whose scope exceeds single-session context limits or task boundaries, requiring vertical decomposition into smaller tickets before implementation.
- **kind:** role
- **source names:** addy: — · matt: `needs-slicing` · rjm: —
- **decision:** D-528
- **concordance:** `docs/analysis/concordance/roles.md#needs-slicing`
- **not to be confused with:** task-decomposer, vertical-slice-technique

---

## D-529 — principal-engineer-advisor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#senior-engineer
- **preferences consulted:** PREFERENCES.md § Approach values high-level technical judgment and strategic perspective; followed by adopting principal-engineer-advisor.

### Decision
The canonical term for this role is `principal-engineer-advisor`. A principal engineer advisor is an experienced technical persona providing deep system judgment, high-level architectural oversight, and strategic buy-versus-build guidance.

### Adopted from
Synthesizes Addy's senior-engineer workflow baseline (`external/using-agent-skills.md:13`) with RJM's strategic leadership advisory persona (`.claude/skills/buy-vs-build-framework/SKILL.md:13`).

### Dropped
RJM's corporate organizational hierarchy assumptions while preserving high-level engineering rigor.

### Rejected alternatives
- senior-engineer (ambiguous between routine implementation work and macroscopic technical oversight)
- principal-leader (conflates organizational people management with technical architectural advising)

### Evidence
Addy `external/using-agent-skills.md:13`; RJM `.claude/skills/buy-vs-build-framework/SKILL.md:13`.

### Glossary
### principal-engineer-advisor

- **definition:** A principal engineer advisor is an experienced technical persona providing deep system judgment, high-level architectural oversight, and strategic buy-versus-build guidance.
- **kind:** role
- **source names:** addy: `senior-engineer` · matt: — · rjm: `Principal+`
- **decision:** D-529
- **concordance:** `docs/analysis/concordance/roles.md#senior-engineer`
- **not to be confused with:** architect, design-authority

---

## D-530 — architect

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#architect
- **preferences consulted:** PREFERENCES.md § Approach and § Depth value architectural coherence and explicit pattern adherence; followed by adopting architect.

### Decision
The canonical term for this role is `architect`. An architect is a specialized agent persona responsible for system-level structural integrity, component boundaries, pattern compliance, and Architectural Decision Record authoring.

### Adopted from
RJM's architect agent in `.agents/AGENT-SYSTEM.md:470` and architectural review guidance in `.claude/skills/review/references/architect.md:5`.

### Dropped
Heavy multi-tier review overhead for routine or local changes.

### Rejected alternatives
- software-architect (adds redundant modifier)
- system-designer (conflates initial design exploration with continuous architectural governance)

### Evidence
RJM `.agents/AGENT-SYSTEM.md:470`, `.claude/skills/review/references/architect.md:5`.

### Glossary
### architect

- **definition:** An architect is a specialized agent persona responsible for system-level structural integrity, component boundaries, pattern compliance, and Architectural Decision Record authoring.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `architect`
- **decision:** D-530
- **concordance:** `docs/analysis/concordance/roles.md#architect`
- **not to be confused with:** design-authority, principal-engineer-advisor

---

## D-531 — design-authority

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#design-authority
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach enforce invariant protection and unyielding architectural gates; followed by adopting design-authority.

### Decision
The canonical term for this role is `design-authority`. A design authority is a formal governance role that exercises final approval and sign-off authority on architectural invariants, interface contracts, and non-negotiable system standards.

### Adopted from
RJM's formal sign-off role in `.claude/skills/adr-review/references/zimmermann-review-guidance.md:11`.

### Dropped
Human committee scheduling delays for routine architectural invariant checks.

### Rejected alternatives
- architecture-approver (functional description rather than formal governance role)
- technical-lead (conflates operational delivery with architectural governance)

### Evidence
RJM `.claude/skills/adr-review/references/zimmermann-review-guidance.md:11`.

### Glossary
### design-authority

- **definition:** A design authority is a formal governance role that exercises final approval and sign-off authority on architectural invariants, interface contracts, and non-negotiable system standards.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Design Authority`
- **decision:** D-531
- **concordance:** `docs/analysis/concordance/roles.md#design-authority`
- **not to be confused with:** architect, steering-committee

---

## D-532 — implementation-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#implementation-agent
- **preferences consulted:** PREFERENCES.md § Approach and § Phase mapping emphasize rigorous implementation execution; followed by adopting implementation-agent.

### Decision
The canonical term for this role is `implementation-agent`. An implementation agent is the primary executing agent persona responsible for exploring codebases, authoring production-quality code, running tests, and debugging failures against approved plans.

### Adopted from
Matt's primary context-bearing coding agent definition in `skills/in-progress/retro/SKILL.md:31` and RJM's production code implementer in `.agents/AGENT-SYSTEM.md:198`.

### Dropped
RJM's automated direct git push logic without pre-commit gating.

### Rejected alternatives
- implementer (informal noun that can refer to a human or external script)
- developer-agent (conflates the broad developer identity with the execution phase persona)

### Evidence
Matt `skills/in-progress/retro/SKILL.md:31`; RJM `.agents/AGENT-SYSTEM.md:198`, `.claude/agents/implementer.md:3`.

### Glossary
### implementation-agent

- **definition:** An implementation agent is the primary executing agent persona responsible for exploring codebases, authoring production-quality code, running tests, and debugging failures against approved plans.
- **kind:** role
- **source names:** addy: — · matt: `implementation agent` · rjm: `implementer`
- **decision:** D-532
- **concordance:** `docs/analysis/concordance/roles.md#implementation-agent`
- **not to be confused with:** implementer-subagent, driver

---

## D-533 — implementer-subagent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#implementer-subagents
- **preferences consulted:** PREFERENCES.md § Approach supports parallel subagent execution for bounded work units; followed by adopting implementer-subagent.

### Decision
The canonical term for this role is `implementer-subagent`. An implementer-subagent is a worker subagent dispatched with isolated context to implement a bounded, atomic slice of a plan concurrently or sequentially in an isolated workspace.

### Adopted from
Matt's background implementer subagent design in `skills/in-progress/implement-spec/SKILL.md:15` and `.changeset/add-implement-spec-skill.md:5`.

### Dropped
Plural phrasing in favor of standard singular noun role naming.

### Rejected alternatives
- implementer-subagents (plural form rejected per GLOSSARY singular noun rules)
- worker-subagent (too generic, fails to convey the implementation task mandate)

### Evidence
Matt `skills/in-progress/implement-spec/SKILL.md:15`, `.changeset/add-implement-spec-skill.md:5`; RJM `templates/agents/implementer.shared.md:25`.

### Glossary
### implementer-subagent

- **definition:** An implementer-subagent is a worker subagent dispatched with isolated context to implement a bounded, atomic slice of a plan concurrently or sequentially in an isolated workspace.
- **kind:** role
- **source names:** addy: — · matt: `implementer subagents` · rjm: `implementer agent`
- **decision:** D-533
- **concordance:** `docs/analysis/concordance/roles.md#implementer-subagents`
- **not to be confused with:** implementation-agent, subagent

---

## D-534 — driver

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#driver
- **preferences consulted:** PREFERENCES.md § Approach values clear separation between passive references and active drivers; followed by adopting driver.

### Decision
The canonical term for this role is `driver`. A driver is the active conversational or headless entity that directs tool invocations, manages shell execution, and drives the workflow forward.

### Adopted from
Matt's distinction between passive reference documents and active driving entities in `external/tdd.md:26` and RJM's developer role in `scripts/incoherence.py:568`.

### Dropped
Interactive-only terminal assumptions (generalized to headless execution drivers).

### Rejected alternatives
- developer (conflates the persona with the human user or broad software engineer concept)
- runner (conflates session leadership with background queue runners)

### Evidence
Matt `external/tdd.md:26`; RJM `scripts/incoherence.py:568`.

### Glossary
### driver

- **definition:** A driver is the active conversational or headless entity that directs tool invocations, manages shell execution, and drives the workflow forward.
- **kind:** role
- **source names:** addy: — · matt: `driver` · rjm: `Developer`
- **decision:** D-534
- **concordance:** `docs/analysis/concordance/roles.md#driver`
- **not to be confused with:** afk-runner, coordinator

---

## D-535 — standards-subagent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#standards-sub-agent
- **preferences consulted:** PREFERENCES.md § Approach and § Depth prioritize rigorous code standards and automated smell detection; followed by adopting standards-subagent.

### Decision
The canonical term for this role is `standards-subagent`. A standards-subagent is a specialized subagent persona deployed during code review to audit adherence to repository style rules, lint baselines, code smell standards, and type system contracts.

### Adopted from
Synthesizes Matt's standards audit prompt in `skills/engineering/code-review/SKILL.md:60` with RJM's type design reviewer in `.claude/agents/type-design-analyzer.md:2`.

### Dropped
Hyphenated sub-agent spelling and RJM's narrow focus restricted exclusively to TypeScript types.

### Rejected alternatives
- standards-sub-agent (hyphenated variant rejected per glossary consistency)
- type-design-analyzer (too narrow, ignores broader code styling and lint invariants)

### Evidence
Matt `skills/engineering/code-review/SKILL.md:60`; RJM `.claude/agents/type-design-analyzer.md:2`.

### Glossary
### standards-subagent

- **definition:** A standards-subagent is a specialized subagent persona deployed during code review to audit adherence to repository style rules, lint baselines, code smell standards, and type system contracts.
- **kind:** role
- **source names:** addy: — · matt: `Standards sub-agent` · rjm: `type-design-analyzer`
- **decision:** D-535
- **concordance:** `docs/analysis/concordance/roles.md#standards-sub-agent`
- **not to be confused with:** spec-subagent, code-reviewer

---

## D-536 — code-simplifier

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#code-simplifier
- **preferences consulted:** PREFERENCES.md § Approach values clean code and minimizing accidental complexity; followed by adopting code-simplifier.

### Decision
The canonical term for this role is `code-simplifier`. A code-simplifier is a post-implementation refactoring persona that reduces accidental complexity, removes dead code, and enhances readability while preserving exact functional behavior.

### Adopted from
RJM's code-simplifier agent in `.claude/agents/code-simplifier.md:3`.

### Dropped
Unconstrained aesthetic rewriting by strictly binding simplification passes to passing unit test suites.

### Rejected alternatives
- refactorer (too broad, implies altering interfaces or architectural contracts)
- janitor (conflates semantic code simplification with workspace file hygiene)

### Evidence
RJM `.claude/agents/code-simplifier.md:3`.

### Glossary
### code-simplifier

- **definition:** A code-simplifier is a post-implementation refactoring persona that reduces accidental complexity, removes dead code, and enhances readability while preserving exact functional behavior.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `code-simplifier`
- **decision:** D-536
- **concordance:** `docs/analysis/concordance/roles.md#code-simplifier`
- **not to be confused with:** janitor, tech-debt-remediation-specialist

---

## D-537 — test-engineer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#test-engineer
- **preferences consulted:** PREFERENCES.md § References and § Approach emphasize comprehensive testing patterns; followed by adopting test-engineer.

### Decision
The canonical term for this role is `test-engineer`. A test-engineer is a specialized agent persona focused on designing comprehensive test strategies, authoring unit and integration suites, and identifying edge-case failure modes.

### Adopted from
Addy's test engineering persona in `agents/test-engineer.md:3` and RJM's QA specialist in `templates/agents/qa.shared.md:30`.

### Dropped
Manual clicking paradigms in favor of automated executable test harnesses.

### Rejected alternatives
- qa-specialist (traditional terminology often associated with manual regression testing)
- test-author (narrow verb-noun pair that omits test strategy and coverage analysis)

### Evidence
Addy `agents/test-engineer.md:3`, `.gemini/commands/ship.toml:16`; RJM `templates/agents/qa.shared.md:30`.

### Glossary
### test-engineer

- **definition:** A test-engineer is a specialized agent persona focused on designing comprehensive test strategies, authoring unit and integration suites, and identifying edge-case failure modes.
- **kind:** role
- **source names:** addy: `test-engineer` · matt: — · rjm: `Quality Assurance Specialist`
- **decision:** D-537
- **concordance:** `docs/analysis/concordance/roles.md#test-engineer`
- **not to be confused with:** systematic-bug-hunter, silent-failure-hunter

---

## D-538 — systematic-bug-hunter

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#systematic-bug-hunter
- **preferences consulted:** PREFERENCES.md § Depth and § Approach value hypothesis-driven debugging techniques; followed by adopting systematic-bug-hunter.

### Decision
The canonical term for this role is `systematic-bug-hunter`. A systematic bug hunter is an investigative debugging persona that executes hypothesis-driven defect isolation through structured assessment, investigation, reproduction, and resolution phases.

### Adopted from
RJM's debugging persona definition in `.claude/agents/debug.md:30`.

### Dropped
Shotgun debugging attempts by requiring a deterministic reproduction test before modifying code.

### Rejected alternatives
- debugger (too generic, often denotes developer tooling such as gdb or lldb)
- bug-hunter (omits the critical structured systematic methodology constraint)

### Evidence
RJM `.claude/agents/debug.md:30`.

### Glossary
### systematic-bug-hunter

- **definition:** A systematic bug hunter is an investigative debugging persona that executes hypothesis-driven defect isolation through structured assessment, investigation, reproduction, and resolution phases.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Systematic Bug Hunter`
- **decision:** D-538
- **concordance:** `docs/analysis/concordance/roles.md#systematic-bug-hunter`
- **not to be confused with:** silent-failure-hunter, test-engineer

---

## D-539 — silent-failure-hunter

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#silent-failure-hunter
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach require rigorous defect identification; followed by adopting silent-failure-hunter.

### Decision
The canonical term for this role is `silent-failure-hunter`. A silent-failure hunter is a specialized code audit persona that identifies unhandled errors, swallowed exceptions, empty catch blocks, unchecked promises, and missing error logging.

### Adopted from
RJM's review agent definition in `.claude/agents/silent-failure-hunter.md:2` and `docs/agent-catalog.md:43`.

### Dropped
Shallow string search scripts in favor of semantic AST inspection.

### Rejected alternatives
- error-checker (too generic, conflates syntax checking with error handling resilience)
- exception-auditor (omits languages where errors are values rather than thrown exceptions)

### Evidence
RJM `.claude/agents/silent-failure-hunter.md:2`, `docs/agent-catalog.md:43`.

### Glossary
### silent-failure-hunter

- **definition:** A silent-failure hunter is a specialized code audit persona that identifies unhandled errors, swallowed exceptions, empty catch blocks, unchecked promises, and missing error logging.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `silent-failure-hunter`
- **decision:** D-539
- **concordance:** `docs/analysis/concordance/roles.md#silent-failure-hunter`
- **not to be confused with:** systematic-bug-hunter, code-reviewer

---

## D-540 — screen-reader-auditor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#screen-reader
- **preferences consulted:** PREFERENCES.md § Depth and § Approach mandate thorough accessibility and UX verification; followed by adopting screen-reader-auditor.

### Decision
The canonical term for this role is `screen-reader-auditor`. A screen-reader auditor is an accessibility evaluation persona that audits user interfaces against screen-reader navigation paradigms, ARIA live region announcements, and semantic accessibility trees.

### Adopted from
Addy's accessibility checklist in `references/accessibility-checklist.md:58`.

### Dropped
Physical hardware dependencies by focusing on virtual accessibility object model trees and semantic DOM verification.

### Rejected alternatives
- screen-reader (refers to the assistive technology software itself rather than the auditing agent persona)
- a11y-auditor (broader than the specific screen-reader evaluation role)

### Evidence
Addy `references/accessibility-checklist.md:58`.

### Glossary
### screen-reader-auditor

- **definition:** A screen-reader auditor is an accessibility evaluation persona that audits user interfaces against screen-reader navigation paradigms, ARIA live region announcements, and semantic accessibility trees.
- **kind:** role
- **source names:** addy: `screen-reader` · matt: — · rjm: —
- **decision:** D-540
- **concordance:** `docs/analysis/concordance/roles.md#screen-reader`
- **not to be confused with:** web-performance-auditor, audience-agent

---

## D-541 — security-auditor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#security-auditor
- **preferences consulted:** PREFERENCES.md § References and § Constraints emphasize comprehensive security reviews; followed by adopting security-auditor.

### Decision
The canonical term for this role is `security-auditor`. A security auditor is an expert evaluation persona that inspects code and infrastructure for vulnerabilities, injection attack vectors, secret leakage, OWASP risks, and missing authorization checks.

### Adopted from
Addy's security persona in `agents/security-auditor.md:3` and RJM's security specialist in `templates/agents/security.shared.md:30`.

### Dropped
RJM's proprietary enterprise security tool bindings in favor of open static analysis standards.

### Rejected alternatives
- security-specialist (less prescriptive regarding auditing and gating responsibilities)
- pen-tester (implies offensive black-box exploitation rather than defensive codebase review)

### Evidence
Addy `agents/security-auditor.md:3`, `skills/security-and-hardening/SKILL.md:12`; RJM `templates/agents/security.shared.md:30`.

### Glossary
### security-auditor

- **definition:** A security auditor is an expert evaluation persona that inspects code and infrastructure for vulnerabilities, injection attack vectors, secret leakage, OWASP risks, and missing authorization checks.
- **kind:** role
- **source names:** addy: `security-auditor` · matt: — · rjm: `Security Specialist`
- **decision:** D-541
- **concordance:** `docs/analysis/concordance/roles.md#security-auditor`
- **not to be confused with:** supply-chain-risk-scanner, agent-safety-auditor

---

## D-542 — supply-chain-risk-scanner

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#supply-chain-risk-scanner
- **preferences consulted:** PREFERENCES.md § Constraints and § References mandate rigorous supply chain security; followed by adopting supply-chain-risk-scanner.

### Decision
The canonical term for this role is `supply-chain-risk-scanner`. A supply-chain risk scanner is an automated security role that audits third-party package dependencies, lockfiles, known CVE vulnerability databases, and open-source software license compliance.

### Adopted from
RJM's supply chain scanner role in `templates/agents/security.shared.md:144` and `docs/agent-catalog.md:24`.

### Dropped
Manual vendor audit questionnaires in favor of automated lockfile parsing.

### Rejected alternatives
- dependency-checker (too generic, conflates version staleness with security vulnerabilities)
- license-auditor (too narrow, ignores vulnerability scanning)

### Evidence
RJM `templates/agents/security.shared.md:144`, `docs/agent-catalog.md:24`.

### Glossary
### supply-chain-risk-scanner

- **definition:** A supply-chain risk scanner is an automated security role that audits third-party package dependencies, lockfiles, known CVE vulnerability databases, and open-source software license compliance.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Supply-chain risk scanner`
- **decision:** D-542
- **concordance:** `docs/analysis/concordance/roles.md#supply-chain-risk-scanner`
- **not to be confused with:** dependency-auditor, security-auditor

---

## D-543 — agent-safety-auditor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#agent-safety
- **preferences consulted:** PREFERENCES.md § Constraints govern agent safety boundaries; followed by adopting agent-safety-auditor.

### Decision
The canonical term for this role is `agent-safety-auditor`. An agent safety auditor is a governance and security role that audits prompt templates, tool permissions, boundary definitions, and autonomous capabilities to prevent unsafe agent tool execution.

### Adopted from
RJM's agent safety domain in `.claude/skills/ai-agents-config-catalog/SKILL.md:28`.

### Dropped
RJM-specific permission configurations.

### Rejected alternatives
- agent-safety (names the discipline rather than the auditor persona)
- safety-gate (confuses the role with the gating mechanism)

### Evidence
RJM `.claude/skills/ai-agents-config-catalog/SKILL.md:28`.

### Glossary
### agent-safety-auditor

- **definition:** An agent safety auditor is a governance and security role that audits prompt templates, tool permissions, boundary definitions, and autonomous capabilities to prevent unsafe agent tool execution.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `agent-safety`
- **decision:** D-543
- **concordance:** `docs/analysis/concordance/roles.md#agent-safety`
- **not to be confused with:** trusted-controller, security-auditor

---

## D-544 — steering-committee

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#steering-committee
- **preferences consulted:** PREFERENCES.md § Approach and § Governance emphasize balanced architectural decision-making; followed by adopting steering-committee.

### Decision
The canonical term for this role is `steering-committee`. A steering committee is a multi-stakeholder governance panel that reviews major architectural changes, evaluates system evolution, and balances developer experience with platform constraints.

### Adopted from
RJM's committee charter in `.agents/governance/steering-committee-charter.md:17` and ADR-043.

### Dropped
Heavy bureaucratic quarterly meeting schedules in favor of asynchronous architectural sign-offs.

### Rejected alternatives
- governance-board (too enterprise-oriented)
- review-panel (conflates routine code review panels with strategic lifecycle governance)

### Evidence
RJM `.agents/governance/steering-committee-charter.md:17`, `.agents/architecture/ADR-043-role-composition-principles.md:88`.

### Glossary
### steering-committee

- **definition:** A steering committee is a multi-stakeholder governance panel that reviews major architectural changes, evaluates system evolution, and balances developer experience with platform constraints.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Steering Committee`
- **decision:** D-544
- **concordance:** `docs/analysis/concordance/roles.md#steering-committee`
- **not to be confused with:** six-role-panel, design-authority

---

## D-545 — code-reviewer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#code-reviewer
- **preferences consulted:** PREFERENCES.md § Approach and § Phase mapping highlight post-implementation review as load-bearing; followed by adopting code-reviewer.

### Decision
The canonical term for this role is `code-reviewer`. A code-reviewer is a specialized review persona that evaluates proposed code diffs against architectural patterns, correctness criteria, maintainability standards, and test coverage before merging.

### Adopted from
Synthesizes Addy's code reviewer persona (`agents/code-reviewer.md:3`), Matt's reviewer agent (`skills/in-progress/retro/SKILL.md:19`), and RJM's code-reviewer (`.claude/agents/code-reviewer.md:2`).

### Dropped
Monolithic single-pass reviews in favor of multi-perspective, faceted review passes.

### Rejected alternatives
- reviewer-agent (redundant suffix)
- diff-reviewer (too narrow, focuses on the artifact rather than the comprehensive engineering role)

### Evidence
Addy `agents/code-reviewer.md:3`; Matt `skills/in-progress/retro/SKILL.md:19`; RJM `.claude/agents/code-reviewer.md:2`.

### Glossary
### code-reviewer

- **definition:** A code-reviewer is a specialized review persona that evaluates proposed code diffs against architectural patterns, correctness criteria, maintainability standards, and test coverage before merging.
- **kind:** role
- **source names:** addy: `code-reviewer` · matt: `reviewer agent` · rjm: `code-reviewer`
- **decision:** D-545
- **concordance:** `docs/analysis/concordance/roles.md#code-reviewer`
- **not to be confused with:** senior-code-reviewer, fresh-context-reviewer

---

## D-546 — senior-code-reviewer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#senior-code-reviewer
- **preferences consulted:** PREFERENCES.md § Approach values deep technical judgment in review; followed by adopting senior-code-reviewer.

### Decision
The canonical term for this role is `senior-code-reviewer`. A senior-code-reviewer is an advanced code evaluation persona that focuses on deep architectural implications, systemic maintainability, edge cases, and long-term tech debt risk.

### Adopted from
Addy's staff engineer persona in `agents/code-reviewer.md:8` and RJM's analytical reviewer in `.claude/agents/retrospective.md:13`.

### Dropped
Matt's assumption that review agents experience no context pressure when evaluating complex multi-file diffs.

### Rejected alternatives
- staff-engineer-reviewer (overly specific corporate hierarchy title)
- analytical-reviewer (conflates retrospective analysis with code review)

### Evidence
Addy `agents/code-reviewer.md:8`; Matt `skills/in-progress/retro/SKILL.md:33`; RJM `.claude/agents/retrospective.md:13`.

### Glossary
### senior-code-reviewer

- **definition:** A senior-code-reviewer is an advanced code evaluation persona that focuses on deep architectural implications, systemic maintainability, edge cases, and long-term tech debt risk.
- **kind:** role
- **source names:** addy: `Senior Code Reviewer` · matt: `review agent` · rjm: `Senior Analytical Reviewer`
- **decision:** D-546
- **concordance:** `docs/analysis/concordance/roles.md#senior-code-reviewer`
- **not to be confused with:** code-reviewer, principal-engineer-advisor

---

## D-547 — fresh-context-reviewer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#fresh-context-reviewer
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints emphasize fresh context to eliminate confirmation bias; followed by adopting fresh-context-reviewer.

### Decision
The canonical term for this role is `fresh-context-reviewer`. A fresh-context reviewer is an adversarial reviewer spawned with an unpolluted context window and zero prior conversation memory, biased to falsify assumptions and verify documentation clarity.

### Adopted from
Synthesizes Addy's doubt-driven development reviewer (`skills/doubt-driven-development/SKILL.md:10`), Matt's fresh agent (`skills/productivity/handoff/SKILL.md:8`), and RJM's naive reader (`.claude/agents/critic.md:66`).

### Dropped
Passive reading without explicit verification criteria.

### Rejected alternatives
- fresh-agent (too broad, does not specify the review function)
- naive-reader (conflates newcomer perspective with adversarial verification posture)

### Evidence
Addy `skills/doubt-driven-development/SKILL.md:10`; Matt `skills/productivity/handoff/SKILL.md:8`; RJM `.claude/agents/critic.md:66`.

### Glossary
### fresh-context-reviewer

- **definition:** A fresh-context reviewer is an adversarial reviewer spawned with an unpolluted context window and zero prior conversation memory, biased to falsify assumptions and verify documentation clarity.
- **kind:** role
- **source names:** addy: `fresh-context reviewer` · matt: `fresh agent` · rjm: `Naive Reader`
- **decision:** D-547
- **concordance:** `docs/analysis/concordance/roles.md#fresh-context-reviewer`
- **not to be confused with:** code-reviewer, naive-reader

---

## D-548 — peer-coach

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#peer-coach
- **preferences consulted:** PREFERENCES.md § Approach values constructive collaboration during early design; followed by adopting peer-coach.

### Decision
The canonical term for this role is `peer-coach`. A peer-coach is an early-stage review persona providing constructive, low-friction feedback during drafting and brainstorming before formal governance gates or panel reviews.

### Adopted from
RJM's review guidance in `.claude/skills/adr-review/references/zimmermann-review-guidance.md:9`.

### Dropped
Slash punctuation (`Peer/Coach`) in favor of canonical kebab-case naming.

### Rejected alternatives
- peer-reviewer (conflates early draft coaching with formal peer code review)
- draft-advisor (less focused on peer-level collaboration)

### Evidence
RJM `.claude/skills/adr-review/references/zimmermann-review-guidance.md:9`.

### Glossary
### peer-coach

- **definition:** A peer-coach is an early-stage review persona providing constructive, low-friction feedback during drafting and brainstorming before formal governance gates or panel reviews.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Peer/Coach`
- **decision:** D-548
- **concordance:** `docs/analysis/concordance/roles.md#peer-coach`
- **not to be confused with:** brutally-honest-strategic-advisor, code-reviewer

---

## D-549 — cynic

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#cynic
- **preferences consulted:** PREFERENCES.md § Approach embraces RJM's specialized adversarial review seats; followed by adopting cynic.

### Decision
The canonical term for this role is `cynic`. A cynic is an adversarial review panel persona that explicitly interrogates unstated assumptions, searches for unspoken dependencies, surfaces ignored failure modes, and rejects baseless optimistic estimates.

### Adopted from
RJM's critic panel definition in `.claude/agents/critic.md:68`.

### Dropped
Unconstructive cynicism by requiring explicit citation of the missing mitigation for each identified assumption.

### Rejected alternatives
- assumption-auditor (flattens the deliberate adversarial posture of the review seat)
- skeptic (less emphatic than cynic in challenging optimistic projections)

### Evidence
RJM `.claude/agents/critic.md:68`, `.agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:249`.

### Glossary
### cynic

- **definition:** A cynic is an adversarial review panel persona that explicitly interrogates unstated assumptions, searches for unspoken dependencies, surfaces ignored failure modes, and rejects baseless optimistic estimates.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Cynic`
- **decision:** D-549
- **concordance:** `docs/analysis/concordance/roles.md#cynic`
- **not to be confused with:** hostile-expert, contrarian-analyst

---

## D-550 — hostile-expert

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#hostile-expert
- **preferences consulted:** PREFERENCES.md § Approach and § Depth value adversarial falsification of claims; followed by adopting hostile-expert.

### Decision
The canonical term for this role is `hostile-expert`. A hostile-expert is an adversarial review panel persona that aggressively attacks the single weakest technical claim, challenges unsourced empirical numbers, and demands proof for waved-away performance trade-offs.

### Adopted from
RJM's critic persona roster in `.claude/agents/critic.md:67`.

### Dropped
Personal animus while retaining rigorous technical falsification.

### Rejected alternatives
- domain-critic (dilutes the intentional aggressive falsification stance)
- technical-challenger (less distinct within a multi-agent review panel)

### Evidence
RJM `.claude/agents/critic.md:67`.

### Glossary
### hostile-expert

- **definition:** A hostile-expert is an adversarial review panel persona that aggressively attacks the single weakest technical claim, challenges unsourced empirical numbers, and demands proof for waved-away performance trade-offs.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Hostile Expert`
- **decision:** D-550
- **concordance:** `docs/analysis/concordance/roles.md#hostile-expert`
- **not to be confused with:** cynic, contrarian-analyst

---

## D-551 — contrarian-analyst

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#contrarian-analyst
- **preferences consulted:** PREFERENCES.md § Approach emphasizes independent critical thinking and evidence; followed by adopting contrarian-analyst.

### Decision
The canonical term for this role is `contrarian-analyst`. A contrarian-analyst is an intellectually independent review persona that questions consensus narratives, presents evidence-based alternative solutions, and explicitly declares uncertainty rather than guessing.

### Adopted from
RJM's independent thinker persona in `.claude/agents/independent-thinker.md:13`.

### Dropped
Speculative contrarianism without primary-source evidence backing.

### Rejected alternatives
- devils-advocate (colloquial and often associated with superficial arguments)
- independent-thinker (too vague, does not specify the analytical critique role)

### Evidence
RJM `.claude/agents/independent-thinker.md:13`.

### Glossary
### contrarian-analyst

- **definition:** A contrarian-analyst is an intellectually independent review persona that questions consensus narratives, presents evidence-based alternative solutions, and explicitly declares uncertainty rather than guessing.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Contrarian Analyst`
- **decision:** D-551
- **concordance:** `docs/analysis/concordance/roles.md#contrarian-analyst`
- **not to be confused with:** cynic, hostile-expert

---

## D-552 — critic

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#critic
- **preferences consulted:** PREFERENCES.md § Approach and § Phase mapping prioritize pre-implementation plan stress-testing; followed by adopting critic.

### Decision
The canonical term for this role is `critic`. A critic is a pre-implementation validation persona that stress-tests plans, identifies architectural omissions, catches semantic ambiguities, and verifies completeness before execution starts.

### Adopted from
RJM's critic agent in `.agents/AGENT-SYSTEM.md:347` and `.claude/agents/critic.md:3`.

### Dropped
Post-hoc code evaluation (reserving critic specifically for pre-implementation plan validation).

### Rejected alternatives
- plan-validator (functional descriptor that misses the adversarial stress-testing mandate)
- pre-implementation-reviewer (unwieldy compound term)

### Evidence
RJM `.agents/AGENT-SYSTEM.md:347`, `.claude/agents/critic.md:3`.

### Glossary
### critic

- **definition:** A critic is a pre-implementation validation persona that stress-tests plans, identifies architectural omissions, catches semantic ambiguities, and verifies completeness before execution starts.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `critic`
- **decision:** D-552
- **concordance:** `docs/analysis/concordance/roles.md#critic`
- **not to be confused with:** cynic, code-reviewer

---

## D-553 — six-role-panel

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#six-role-panel
- **preferences consulted:** PREFERENCES.md § Approach favors comprehensive adversarial panels for major architectural reviews; followed by adopting six-role-panel.

### Decision
The canonical term for this role is `six-role-panel`. A six-role panel is a structured adversarial review assembly composing six complementary personas (such as Architect, Security, QA, Hostile Expert, Cynic, and Naive Reader) to cross-examine non-trivial artifacts from multiple vantage points.

### Adopted from
Synthesizes RJM's multi-perspective review panel (`.agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:249`) with Addy's isolated role-based reviewers (`skills/doubt-driven-development/SKILL.md:108`).

### Dropped
Rigid synchronous attendance requirements when fewer facets are warranted.

### Rejected alternatives
- review-panel (too generic, fails to convey the multi-role complementary composition)
- role-based-reviewers (plural descriptive phrase rather than a concrete panel concept)

### Evidence
RJM `.agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:249`; Addy `skills/doubt-driven-development/SKILL.md:108`.

### Glossary
### six-role-panel

- **definition:** A six-role panel is a structured adversarial review assembly composing six complementary personas (such as Architect, Security, QA, Hostile Expert, Cynic, and Naive Reader) to cross-examine non-trivial artifacts from multiple vantage points.
- **kind:** role
- **source names:** addy: `role-based reviewers` · matt: — · rjm: `six-role panel`
- **decision:** D-553
- **concordance:** `docs/analysis/concordance/roles.md#six-role-panel`
- **not to be confused with:** adversarial-reviewer, steering-committee

---

## D-554 — adversarial-reviewer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#adversarial-reviewer
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach mandate falsification-biased review; followed by adopting adversarial-reviewer.

### Decision
The canonical term for this role is `adversarial-reviewer`. An adversarial-reviewer is an overarching evaluation role biased to actively falsify hypotheses, challenge design claims, and prove failure modes rather than validate or confirm author intent.

### Adopted from
RJM's adversarial review framework in `.claude/agents/critic.md:18`.

### Dropped
Unfocused hostility without actionable, testable defect reports.

### Rejected alternatives
- falsifier (too abstract, sounds like a test function rather than a review persona)
- challenger (conflates constructive questioning with systematic falsification)

### Evidence
RJM `.claude/agents/critic.md:18`.

### Glossary
### adversarial-reviewer

- **definition:** An adversarial-reviewer is an overarching evaluation role biased to actively falsify hypotheses, challenge design claims, and prove failure modes rather than validate or confirm author intent.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `adversarial reviewer`
- **decision:** D-554
- **concordance:** `docs/analysis/concordance/roles.md#adversarial-reviewer`
- **not to be confused with:** fresh-context-reviewer, hostile-expert

---

## D-555 — devops-specialist

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#devops
- **preferences consulted:** PREFERENCES.md § References and § Constraints emphasize automated pipelines; followed by adopting devops-specialist.

### Decision
The canonical term for this role is `devops-specialist`. A devops-specialist is an operational engineering persona responsible for authoring CI/CD pipelines, automating deployment workflows, configuring infrastructure as code, and maintaining runtime stability.

### Adopted from
RJM's devops agent definition in `.agents/AGENT-SYSTEM.md:240` and `README.md:405`.

### Dropped
Manual infrastructure provisioning runbooks in favor of declarative CI and automation scripts.

### Rejected alternatives
- devops (umbrella industry term naming a discipline or cultural movement rather than a distinct agent persona)
- platform-engineer (too broad, includes internal developer portal maintenance)

### Evidence
RJM `.agents/AGENT-SYSTEM.md:240`, `README.md:405`.

### Glossary
### devops-specialist

- **definition:** A devops-specialist is an operational engineering persona responsible for authoring CI/CD pipelines, automating deployment workflows, configuring infrastructure as code, and maintaining runtime stability.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `devops`
- **decision:** D-555
- **concordance:** `docs/analysis/concordance/roles.md#devops`
- **not to be confused with:** build-cop, project-shipper

---

## D-556 — project-shipper

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#project-shipper
- **preferences consulted:** PREFERENCES.md § Phase mapping and § Approach highlight shipping and launch orchestration; followed by adopting project-shipper.

### Decision
The canonical term for this role is `project-shipper`. A project-shipper is a release orchestration persona that manages the final publishing sequence, including changelog generation, version tag creation, artifact packaging, and release verification.

### Adopted from
RJM's release execution role in `.claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:68`.

### Dropped
Unvalidated release publishing without passing pre-launch verification gates.

### Rejected alternatives
- release-manager (traditional human job title carrying coordination connotations rather than automated agent execution)
- publisher (too narrow, focuses only on pushing bytes rather than the full release ceremony)

### Evidence
RJM `.claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:68`.

### Glossary
### project-shipper

- **definition:** A project-shipper is a release orchestration persona that manages the final publishing sequence, including changelog generation, version tag creation, artifact packaging, and release verification.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `project-shipper`
- **decision:** D-556
- **concordance:** `docs/analysis/concordance/roles.md#project-shipper`
- **not to be confused with:** launch-sponsor, devops-specialist

---

## D-557 — dependency-auditor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#dependency-auditor
- **preferences consulted:** PREFERENCES.md § Constraints and § References mandate thorough dependency auditing; followed by adopting dependency-auditor.

### Decision
The canonical term for this role is `dependency-auditor`. A dependency-auditor is a pre-release audit persona that analyzes third-party package dependencies for version staleness, security advisories, licensing incompatibilities, and transitive dependency bloat.

### Adopted from
RJM's dependency auditor agent in `templates/agents/dependency-auditor.shared.md:14` and `docs/agent-catalog.md:24`.

### Dropped
Manual license review spreadsheets in favor of automated package manifest parsing.

### Rejected alternatives
- package-auditor (too vague)
- dependency-checker (minimizes the formal auditing and gating responsibilities)

### Evidence
RJM `templates/agents/dependency-auditor.shared.md:14`, `docs/agent-catalog.md:24`.

### Glossary
### dependency-auditor

- **definition:** A dependency-auditor is a pre-release audit persona that analyzes third-party package dependencies for version staleness, security advisories, licensing incompatibilities, and transitive dependency bloat.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `dependency-auditor`
- **decision:** D-557
- **concordance:** `docs/analysis/concordance/roles.md#dependency-auditor`
- **not to be confused with:** supply-chain-risk-scanner, security-auditor

---

## D-558 — build-cop

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#build-cop
- **preferences consulted:** PREFERENCES.md § Approach and § References value clear operational ownership and unyielding trunk health; followed by adopting build-cop.

### Decision
The canonical term for this role is `build-cop`. A build-cop is an operational guardianship role designated to monitor CI health, immediately quarantine or revert broken commits on trunk, and preserve mainline build stability.

### Adopted from
Addy's continuous integration guardianship pattern in `skills/ci-cd-and-automation/SKILL.md:300`.

### Dropped
Punitive blame dynamics by establishing automated revert-first runbooks.

### Rejected alternatives
- ci-monitor (passive observation rather than active revert authority)
- trunk-guard (less recognized in software engineering than build-cop)

### Evidence
Addy `skills/ci-cd-and-automation/SKILL.md:298`, `skills/ci-cd-and-automation/SKILL.md:300`.

### Glossary
### build-cop

- **definition:** A build-cop is an operational guardianship role designated to monitor CI health, immediately quarantine or revert broken commits on trunk, and preserve mainline build stability.
- **kind:** role
- **source names:** addy: `Build Cop` · matt: — · rjm: —
- **decision:** D-558
- **concordance:** `docs/analysis/concordance/roles.md#build-cop`
- **not to be confused with:** devops-specialist, rollback-owner

---

## D-559 — rollback-owner

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#rollback-owner
- **preferences consulted:** PREFERENCES.md § References and § Approach value clear operational ownership and emergency recovery; followed by adopting rollback-owner.

### Decision
The canonical term for this role is `rollback-owner`. A rollback-owner is the designated individual or agent holding explicit authority, verified runbooks, and credentials to execute immediate deployment reversals upon production incident detection.

### Adopted from
Addy's release incident response framework in `evals/fixtures/shipping-and-launch/launch-status.md:9`.

### Dropped
Unassigned collective responsibility where no single actor owns deployment reversal.

### Rejected alternatives
- incident-commander (broader crisis leadership role; rollback-owner specifically owns deployment reversal)
- revert-operator (focuses on git mechanics rather than production deployment rollback)

### Evidence
Addy `evals/fixtures/shipping-and-launch/launch-status.md:9`.

### Glossary
### rollback-owner

- **definition:** A rollback-owner is the designated individual or agent holding explicit authority, verified runbooks, and credentials to execute immediate deployment reversals upon production incident detection.
- **kind:** role
- **source names:** addy: `Rollback owner` · matt: — · rjm: —
- **decision:** D-559
- **concordance:** `docs/analysis/concordance/roles.md#rollback-owner`
- **not to be confused with:** build-cop, launch-sponsor

---

## D-560 — launch-sponsor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#launch-sponsor
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints emphasize human authorization for high-impact releases; followed by adopting launch-sponsor.

### Decision
The canonical term for this role is `launch-sponsor`. A launch-sponsor is the executive or engineering stakeholder who authorizes public release dates, accepts residual business risks, and grants final go-live approval.

### Adopted from
Addy's release governance framework in `evals/fixtures/shipping-and-launch/authority-pressure.md:3`.

### Dropped
Allowing schedule pressure from launch sponsors to bypass objective quality and security gates.

### Rejected alternatives
- release-approver (functional title that obscures executive business sponsorship)
- product-owner (general product role rather than release-authorizing stakeholder)

### Evidence
Addy `evals/fixtures/shipping-and-launch/authority-pressure.md:3`.

### Glossary
### launch-sponsor

- **definition:** A launch-sponsor is the executive or engineering stakeholder who authorizes public release dates, accepts residual business risks, and grants final go-live approval.
- **kind:** role
- **source names:** addy: `launch sponsor` · matt: — · rjm: —
- **decision:** D-560
- **concordance:** `docs/analysis/concordance/roles.md#launch-sponsor`
- **not to be confused with:** rollback-owner, design-authority

---

## D-561 — web-performance-auditor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#web-performance-auditor
- **preferences consulted:** PREFERENCES.md § References and § Depth prioritize web performance and Core Web Vitals verification; followed by adopting web-performance-auditor.

### Decision
The canonical term for this role is `web-performance-auditor`. A web-performance-auditor is a specialized evaluation persona that profiles bundle sizes, evaluates runtime latency, and audits Core Web Vitals against strict performance budgets.

### Adopted from
Addy's web performance engineering persona in `agents/web-performance-auditor.md:8`.

### Dropped
Generic Lighthouse scores in favor of actionable, user-centric performance metrics and Core Web Vitals budgets.

### Rejected alternatives
- performance-engineer (broad title that could cover backend database tuning)
- webperf-agent (informal abbreviation)

### Evidence
Addy `agents/web-performance-auditor.md:8`.

### Glossary
### web-performance-auditor

- **definition:** A web-performance-auditor is a specialized evaluation persona that profiles bundle sizes, evaluates runtime latency, and audits Core Web Vitals against strict performance budgets.
- **kind:** role
- **source names:** addy: `web-performance-auditor` · matt: — · rjm: —
- **decision:** D-561
- **concordance:** `docs/analysis/concordance/roles.md#web-performance-auditor`
- **not to be confused with:** test-engineer, screen-reader-auditor

---

## D-562 — merge-resolver

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#merger-subagent
- **preferences consulted:** PREFERENCES.md § Approach values clean multi-branch git reconciliation; followed by adopting merge-resolver.

### Decision
The canonical term for this role is `merge-resolver`. A merge-resolver is a specialized agent persona that analyzes commit history, reconciles divergent git branches, and resolves merge conflicts while preserving intentional changes from both branches.

### Adopted from
Synthesizes RJM's merge conflict resolution agent (`.agents/AGENT-SYSTEM.md:311`, `README.md:417`) with Matt's merger subagent design (`skills/in-progress/implement-spec/SKILL.md:27`, `.changeset/add-implement-spec-skill.md:5`).

### Dropped
Blind algorithmic conflict acceptance without running test suites post-merge.

### Rejected alternatives
- merger-subagent (narrows the role exclusively to subagent invocations, excluding standalone conflict resolution)
- git-merger (emphasizes the tool rather than semantic conflict resolution)

### Evidence
Matt `skills/in-progress/implement-spec/SKILL.md:27`, `.changeset/add-implement-spec-skill.md:5`; RJM `.agents/AGENT-SYSTEM.md:311`, `README.md:417`.

### Glossary
### merge-resolver

- **definition:** A merge-resolver is a specialized agent persona that analyzes commit history, reconciles divergent git branches, and resolves merge conflicts while preserving intentional changes from both branches.
- **kind:** role
- **source names:** addy: — · matt: `merger subagent` · rjm: `merge-resolver`
- **decision:** D-562
- **concordance:** `docs/analysis/concordance/roles.md#merger-subagent`
- **not to be confused with:** implementation-agent, driver

---

## D-563 — janitor

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#janitor
- **preferences consulted:** PREFERENCES.md § Approach values continuous codebase cleanliness and hygiene; followed by adopting janitor.

### Decision
The canonical term for this role is `janitor`. A janitor is a codebase maintenance persona that performs routine hygiene tasks including removing obsolete files, pruning unused exports, cleaning up scratch scripts, and enforcing formatting consistency.

### Adopted from
RJM's cleanup and maintenance agent in `README.md:415` and `docs/agent-catalog.md:31`.

### Dropped
Destructive sweeping without verification against active file references.

### Rejected alternatives
- cleaner (colloquial and ambiguous with data cleansing tools)
- hygiene-agent (less standard in software engineering than janitor)

### Evidence
RJM `README.md:415`, `docs/agent-catalog.md:31`.

### Glossary
### janitor

- **definition:** A janitor is a codebase maintenance persona that performs routine hygiene tasks including removing obsolete files, pruning unused exports, cleaning up scratch scripts, and enforcing formatting consistency.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `janitor`
- **decision:** D-563
- **concordance:** `docs/analysis/concordance/roles.md#janitor`
- **not to be confused with:** tech-debt-remediation-specialist, code-simplifier

---

## D-564 — tech-debt-remediation-specialist

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#tech-debt-remediation-specialist
- **preferences consulted:** PREFERENCES.md § Approach and § Depth support systematic remediation of architectural technical debt; followed by adopting tech-debt-remediation-specialist.

### Decision
The canonical term for this role is `tech-debt-remediation-specialist`. A tech-debt remediation specialist is an engineering refactoring persona that systematically identifies obsolete architectural patterns, eliminates deprecated API usages, and modernizes legacy subsystems.

### Adopted from
RJM's cleanup and simplification identity in `.claude/agents/janitor.md:30`.

### Dropped
Indiscriminate code deletion without backwards-compatibility or deprecation periods.

### Rejected alternatives
- refactoring-specialist (omits the specific focus on technical debt and deprecation)
- debt-collector (colloquial and misleading)

### Evidence
RJM `.claude/agents/janitor.md:30`.

### Glossary
### tech-debt-remediation-specialist

- **definition:** A tech-debt remediation specialist is an engineering refactoring persona that systematically identifies obsolete architectural patterns, eliminates deprecated API usages, and modernizes legacy subsystems.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Tech Debt Remediation Specialist`
- **decision:** D-564
- **concordance:** `docs/analysis/concordance/roles.md#tech-debt-remediation-specialist`
- **not to be confused with:** janitor, code-simplifier

---

## D-565 — comment-analyzer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#comment-analyzer
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints emphasize preventing documentation drift; followed by adopting comment-analyzer.

### Decision
The canonical term for this role is `comment-analyzer`. A comment-analyzer is a documentation audit persona that inspects inline comments, docstrings, and type annotations to detect doc-code drift, remove outdated commentary, and ensure accuracy.

### Adopted from
RJM's comment analyzer agent in `.claude/agents/comment-analyzer.md:3`.

### Dropped
Enforcing redundant comment authoring on self-explanatory code.

### Rejected alternatives
- docstring-checker (too narrow, focuses only on function docstrings)
- comment-linter (implies simple regex or grammar linting rather than semantic code alignment)

### Evidence
RJM `.claude/agents/comment-analyzer.md:3`.

### Glossary
### comment-analyzer

- **definition:** A comment-analyzer is a documentation audit persona that inspects inline comments, docstrings, and type annotations to detect doc-code drift, remove outdated commentary, and ensure accuracy.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `comment-analyzer`
- **decision:** D-565
- **concordance:** `docs/analysis/concordance/roles.md#comment-analyzer`
- **not to be confused with:** technical-writer, audience-agent

---

## D-566 — pr-comment-responder

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#pr-comment-responder
- **preferences consulted:** PREFERENCES.md § Approach values structured responses to review feedback; followed by adopting pr-comment-responder.

### Decision
The canonical term for this role is `pr-comment-responder`. A pr-comment-responder is an automated support persona that parses pull request review feedback, implements requested code revisions, and drafts clear responses to reviewer comments.

### Adopted from
RJM's review response support agent in `.agents/AGENT-SYSTEM.md:758`.

### Dropped
Auto-resolving review threads without human verification or passing CI test suites.

### Rejected alternatives
- review-responder (lacks indication that the medium is a pull request discussion thread)
- feedback-implementer (too broad)

### Evidence
RJM `.agents/AGENT-SYSTEM.md:758`.

### Glossary
### pr-comment-responder

- **definition:** A pr-comment-responder is an automated support persona that parses pull request review feedback, implements requested code revisions, and drafts clear responses to reviewer comments.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `pr-comment-responder`
- **decision:** D-566
- **concordance:** `docs/analysis/concordance/roles.md#pr-comment-responder`
- **not to be confused with:** code-reviewer, implementation-agent

---

## D-567 — retrospective-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#retrospective-agent
- **preferences consulted:** PREFERENCES.md § Approach embraces post-ship reflection and iterative improvement; followed by adopting retrospective-agent.

### Decision
The canonical term for this role is `retrospective-agent`. A retrospective-agent is a meta-process evaluation persona that analyzes completed development sessions, diagnoses agent mistakes or bottlenecks, and updates team skillbooks and instructions.

### Adopted from
RJM's reflective learning persona in `.claude/agents/retrospective.md:13` and Matt's retro analysis in `skills/in-progress/retro/SKILL.md:19`.

### Dropped
Vague motivational takeaways in favor of concrete rule additions or deletions in skill documentation.

### Rejected alternatives
- retro-analyzer (informal abbreviation)
- post-mortem-lead (conflates routine session retrospectives with catastrophic incident post-mortems)

### Evidence
RJM `.claude/agents/retrospective.md:13`, `.agents/analysis/002-project-constraints-consolidation.md:564`.

### Glossary
### retrospective-agent

- **definition:** A retrospective-agent is a meta-process evaluation persona that analyzes completed development sessions, diagnoses agent mistakes or bottlenecks, and updates team skillbooks and instructions.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `retrospective agent`
- **decision:** D-567
- **concordance:** `docs/analysis/concordance/roles.md#retrospective-agent`
- **not to be confused with:** skillbook-curator, retrospective-report

---

## D-568 — technical-writer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#technical-writer
- **preferences consulted:** PREFERENCES.md § Approach and § References value clear, comprehensive documentation; followed by adopting technical-writer.

### Decision
The canonical term for this role is `technical-writer`. A technical-writer is a documentation authoring persona dedicated to producing and maintaining user manuals, reference guides, API specifications, and architectural documentation.

### Adopted from
RJM's documentation persona assignment in `scripts/incoherence.py:569`.

### Dropped
Outdated manual PDF generation workflows in favor of Markdown and docsite publication.

### Rejected alternatives
- doc-author (informal)
- technical-communicator (overly abstract academic terminology)

### Evidence
RJM `scripts/incoherence.py:569`.

### Glossary
### technical-writer

- **definition:** A technical-writer is a documentation authoring persona dedicated to producing and maintaining user manuals, reference guides, API specifications, and architectural documentation.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Technical Writer`
- **decision:** D-568
- **concordance:** `docs/analysis/concordance/roles.md#technical-writer`
- **not to be confused with:** comment-analyzer, audience-agent

---

## D-569 — explorer

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#explore
- **preferences consulted:** PREFERENCES.md § Approach values read-only exploration prior to modification; followed by adopting explorer.

### Decision
The canonical term for this role is `explorer`. An explorer is a read-only investigation persona that surveys codebases, traces call graphs, searches documentation, and summarizes existing behavior without modifying any project files.

### Adopted from
Synthesizes Addy's read-only explore mode (`references/orchestration-patterns.md:113`), Matt's exploration subagent (`skills/engineering/ask-matt/PHASE-BOUNDARIES.md:16`), and RJM's exploratory persona (`.claude/commands/spec.md:45`).

### Dropped
Writing code or mutating workspace files during exploratory passes.

### Rejected alternatives
- explore (imperative verb rather than a canonical noun role)
- exploration-subagent (narrows the role strictly to subagent form factor rather than general conversational persona)

### Evidence
Addy `references/orchestration-patterns.md:113`; Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:16`; RJM `.claude/commands/spec.md:45`.

### Glossary
### explorer

- **definition:** An explorer is a read-only investigation persona that surveys codebases, traces call graphs, searches documentation, and summarizes existing behavior without modifying any project files.
- **kind:** role
- **source names:** addy: `Explore` · matt: `exploration subagent` · rjm: `Explore`
- **decision:** D-569
- **concordance:** `docs/analysis/concordance/roles.md#explore`
- **not to be confused with:** researcher, analyst

---

## D-570 — agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#agent
- **preferences consulted:** PREFERENCES.md § Approach recognizes AI coding agents as primary execution entities; followed by adopting agent.

### Decision
The canonical term for this role is `agent`. An agent is an autonomous or semi-autonomous LLM-powered computational actor equipped with tool access, system instructions, and goal-directed execution capabilities.

### Adopted from
Unified standard across Addy (`docs/copilot-setup.md:19`), Matt (`docs/engineering/code-review.md:3`), and RJM (`.agents/AGENT-SYSTEM.md:10`).

### Dropped
Anthropomorphic assumptions while affirming autonomous tool-using capabilities.

### Rejected alternatives
- ai-agent (redundant prefix in AI coding toolchains)
- bot (dated, implies dumb rule-based automation)

### Evidence
Addy `docs/copilot-setup.md:19`; Matt `docs/engineering/code-review.md:3`; RJM `.agents/AGENT-SYSTEM.md:10`.

### Glossary
### agent

- **definition:** An agent is an autonomous or semi-autonomous LLM-powered computational actor equipped with tool access, system instructions, and goal-directed execution capabilities.
- **kind:** role
- **source names:** addy: `AI coding agents` · matt: `agent` · rjm: `agent`
- **decision:** D-570
- **concordance:** `docs/analysis/concordance/roles.md#agent`
- **not to be confused with:** subagent, driver

---

## D-571 — autonomous-development-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#autonomous-development-agent
- **preferences consulted:** PREFERENCES.md § Approach and § Constraints govern end-to-end autonomous loops; followed by adopting autonomous-development-agent.

### Decision
The canonical term for this role is `autonomous-development-agent`. An autonomous-development-agent is an end-to-end meta-developer persona capable of ingesting high-level requirements, formulating plans, implementing code, running tests, and preparing pull requests with minimal human intervention.

### Adopted from
RJM's autonomous development persona in `docs/autonomous-issue-development.md:8`.

### Dropped
Unsupervised production deployments without mandatory human review gates.

### Rejected alternatives
- auto-developer (informal abbreviation)
- autonomous-swe (conflates software engineering title with agent classification)

### Evidence
RJM `docs/autonomous-issue-development.md:8`.

### Glossary
### autonomous-development-agent

- **definition:** An autonomous-development-agent is an end-to-end meta-developer persona capable of ingesting high-level requirements, formulating plans, implementing code, running tests, and preparing pull requests with minimal human intervention.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `autonomous development agent`
- **decision:** D-571
- **concordance:** `docs/analysis/concordance/roles.md#autonomous-development-agent`
- **not to be confused with:** implementation-agent, afk-agent

---

## D-572 — claude-code-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#coding-agents
- **preferences consulted:** PREFERENCES.md § Approach and D-009 establish Claude Code as the canonical target with Antigravity parity; followed by adopting claude-code-agent.

### Decision
The canonical term for this role is `claude-code-agent`. A claude-code-agent is an execution agent hosted natively within the Anthropic Claude Code command-line interface runtime environment.

### Adopted from
RJM's platform-specific agent definitions in `.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:15` and Addy's CLI agent usage.

### Dropped
Platform-specific command limitations (pairing Claude Code native execution with Antigravity mirror parity per D-009).

### Rejected alternatives
- coding-agent (too generic, fails to identify the canonical Claude Code runtime target)
- claude-agent (conflates the Anthropic model/assistant with the CLI harness)

### Evidence
Addy `docs/copilot-setup.md:19`; RJM `.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:15`.

### Glossary
### claude-code-agent

- **definition:** A claude-code-agent is an execution agent hosted natively within the Anthropic Claude Code command-line interface runtime environment.
- **kind:** role
- **source names:** addy: `coding agents` · matt: — · rjm: `Claude Code Agents`
- **decision:** D-572
- **concordance:** `docs/analysis/concordance/roles.md#coding-agents`
- **not to be confused with:** agent, general-purpose-agent

---

## D-573 — general-purpose-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#general-purpose
- **preferences consulted:** PREFERENCES.md § Approach values clean fallback defaults alongside specialized agents; followed by adopting general-purpose-agent.

### Decision
The canonical term for this role is `general-purpose-agent`. A general-purpose-agent is a baseline fallback agent persona equipped with standard shell and file editing tools without domain-specific prompt constraints or specialized role restrictions.

### Adopted from
Synthesizes Addy's default agent configuration (`references/orchestration-patterns.md:158`) with RJM's executor baseline role (`templates/agents/implementer.shared.md:2`).

### Dropped
Using general-purpose agents for high-risk verification or specialized audit phases.

### Rejected alternatives
- executor (too abstract, conflicts with standard runtime task executors)
- default-agent (conflates configuration default with operational capabilities)

### Evidence
Addy `references/orchestration-patterns.md:158`; RJM `templates/agents/implementer.shared.md:2`.

### Glossary
### general-purpose-agent

- **definition:** A general-purpose-agent is a baseline fallback agent persona equipped with standard shell and file editing tools without domain-specific prompt constraints or specialized role restrictions.
- **kind:** role
- **source names:** addy: `general-purpose` · matt: — · rjm: `executor`
- **decision:** D-573
- **concordance:** `docs/analysis/concordance/roles.md#general-purpose`
- **not to be confused with:** implementation-agent, explorer

---

## D-574 — subagent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#subagent
- **preferences consulted:** PREFERENCES.md § Approach and § Granularity emphasize context isolation via subagents; followed by adopting subagent.

### Decision
The canonical term for this role is `subagent`. A subagent is a child agent spawned by a primary agent with an isolated context window, specific prompt instructions, and bounded task scope, returning its deliverables upon completion.

### Adopted from
Matt's subagent isolation principle in `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:14` and `.agents/writing-docs.md:77`.

### Dropped
Hyphenated spelling (`sub-agent`) in favor of standard unhyphenated subagent.

### Rejected alternatives
- sub-agent (hyphenated variant rejected per glossary consistency)
- child-agent (less prevalent in LLM engineering literature)

### Evidence
Matt `skills/engineering/ask-matt/PHASE-BOUNDARIES.md:14`, `.agents/writing-docs.md:77`.

### Glossary
### subagent

- **definition:** A subagent is a child agent spawned by a primary agent with an isolated context window, specific prompt instructions, and bounded task scope, returning its deliverables upon completion.
- **kind:** role
- **source names:** addy: — · matt: `subagent` · rjm: —
- **decision:** D-574
- **concordance:** `docs/analysis/concordance/roles.md#subagent`
- **not to be confused with:** agent, background-agent

---

## D-575 — external-swe-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#sub-agent
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach govern cross-environment agent boundaries; followed by adopting external-swe-agent.

### Decision
The canonical term for this role is `external-swe-agent`. An external-swe-agent is an external autonomous coding agent (such as GitHub Copilot Workspace or an isolated third-party SWE worker) invoked across network or process boundaries to deliver an issue branch.

### Adopted from
Synthesizes RJM's external SWE agent integration (`scripts/ci/write_copilot_synthesis_summary.py:32`) with Matt's isolated sub-agent cross-referencing (`docs/engineering/code-review.md:3`).

### Dropped
Proprietary GitHub Copilot API dependencies in favor of harness-agnostic external delegation interfaces.

### Rejected alternatives
- copilot-swe-agent (vendor-locked term)
- sub-agent (duplicates D-574 subagent)

### Evidence
Matt `docs/engineering/code-review.md:3`; RJM `scripts/ci/write_copilot_synthesis_summary.py:32`.

### Glossary
### external-swe-agent

- **definition:** An external-swe-agent is an external autonomous coding agent (such as GitHub Copilot Workspace or an isolated third-party SWE worker) invoked across network or process boundaries to deliver an issue branch.
- **kind:** role
- **source names:** addy: — · matt: `sub-agent` · rjm: `copilot-swe-agent`
- **decision:** D-575
- **concordance:** `docs/analysis/concordance/roles.md#sub-agent`
- **not to be confused with:** subagent, implementation-agent

---

## D-576 — background-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#background-agent
- **preferences consulted:** PREFERENCES.md § Approach and § Granularity support non-blocking asynchronous research; followed by adopting background-agent.

### Decision
The canonical term for this role is `background-agent`. A background-agent is an asynchronous subagent that runs long-duration research, reading, or compilation tasks out of band without blocking the user or the primary orchestrator conversation.

### Adopted from
Matt's asynchronous background research pattern in `docs/engineering/research.md:25` and `CHANGELOG.md:177`.

### Dropped
Unmonitored background runaway loops by requiring explicit timeout bounds.

### Rejected alternatives
- async-worker (technical concurrency term rather than agent lifecycle persona)
- detached-agent (implies disconnected process rather than supervised background execution)

### Evidence
Matt `docs/engineering/research.md:25`, `CHANGELOG.md:177`.

### Glossary
### background-agent

- **definition:** A background-agent is an asynchronous subagent that runs long-duration research, reading, or compilation tasks out of band without blocking the user or the primary orchestrator conversation.
- **kind:** role
- **source names:** addy: — · matt: `background agent` · rjm: —
- **decision:** D-576
- **concordance:** `docs/analysis/concordance/roles.md#background-agent`
- **not to be confused with:** afk-agent, subagent

---

## D-577 — afk-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#afk-agent
- **preferences consulted:** PREFERENCES.md § Constraints and § Approach govern unattended execution safety; followed by adopting afk-agent.

### Decision
The canonical term for this role is `afk-agent`. An afk-agent is an autonomous execution agent configured to run unattended while the human operator is away from the keyboard, operating strictly against pre-approved agent briefs and safety constraints.

### Adopted from
Matt's unattended task execution agent in `skills/engineering/triage/AGENT-BRIEF.md:3`.

### Dropped
Executing ambiguous tasks without pre-existing automated test suites.

### Rejected alternatives
- unattended-agent (more clinical but less widely recognized than AFK in coding agent workflows)
- autonomous-worker (lacks the explicit away-from-keyboard supervision context)

### Evidence
Matt `skills/engineering/triage/AGENT-BRIEF.md:3`.

### Glossary
### afk-agent

- **definition:** An afk-agent is an autonomous execution agent configured to run unattended while the human operator is away from the keyboard, operating strictly against pre-approved agent briefs and safety constraints.
- **kind:** role
- **source names:** addy: — · matt: `AFK agent` · rjm: —
- **decision:** D-577
- **concordance:** `docs/analysis/concordance/roles.md#afk-agent`
- **not to be confused with:** afk-runner, ready-for-afk-role

---

## D-578 — afk-runner

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#afk-runner
- **preferences consulted:** PREFERENCES.md § Approach and § Granularity support batch queue processing; followed by adopting afk-runner.

### Decision
The canonical term for this role is `afk-runner`. An afk-runner is an orchestration supervisor process that sequentially polls the task queue, selects tickets marked ready-for-afk, dispatches afk-agents, and logs execution results.

### Adopted from
Matt's queue-processing supervisor in `external/triage.md:50`.

### Dropped
Infinite un-throttled polling loops without backoff or rate-limit handling.

### Rejected alternatives
- queue-runner (too generic)
- afk-orchestrator (overstates the complexity of the serial dispatch runner loop)

### Evidence
Matt `external/triage.md:50`.

### Glossary
### afk-runner

- **definition:** An afk-runner is an orchestration supervisor process that sequentially polls the task queue, selects tickets marked ready-for-afk, dispatches afk-agents, and logs execution results.
- **kind:** role
- **source names:** addy: — · matt: `AFK runner` · rjm: —
- **decision:** D-578
- **concordance:** `docs/analysis/concordance/roles.md#afk-runner`
- **not to be confused with:** afk-agent, coordinator

---

## D-579 — coordinator

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#coordinator
- **preferences consulted:** PREFERENCES.md § Approach and § References value clean multi-agent orchestration; followed by adopting coordinator.

### Decision
The canonical term for this role is `coordinator`. A coordinator is an orchestrating agent role that sequences multi-stage plans, routes subtasks to specialized workers, and aggregates parallel deliverables into a coherent final state.

### Adopted from
RJM's multi-agent coordination role in `.agents/AGENT-SYSTEM.md:836`.

### Dropped
Direct code implementation responsibilities (coordinators delegate, they do not write code).

### Rejected alternatives
- orchestrator (often used for workflow engines rather than the lifecycle role)
- team-lead (conflates human management with agent orchestration)

### Evidence
RJM `.agents/AGENT-SYSTEM.md:836`.

### Glossary
### coordinator

- **definition:** A coordinator is an orchestrating agent role that sequences multi-stage plans, routes subtasks to specialized workers, and aggregates parallel deliverables into a coherent final state.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `coordinator`
- **decision:** D-579
- **concordance:** `docs/analysis/concordance/roles.md#coordinator`
- **not to be confused with:** router, driver

---

## D-580 — router

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#router
- **preferences consulted:** PREFERENCES.md § Approach values fast single-hop request dispatch; followed by adopting router.

### Decision
The canonical term for this role is `router`. A router is a lightweight triage mechanism or persona that inspects incoming user requests or event payloads and routes them to the appropriate skill, command, or agent without executing work itself.

### Adopted from
RJM's router classification in `.claude/skills/autoplan/SKILL.md:11`.

### Dropped
Complex multi-step planning (routers make single-hop dispatch decisions).

### Rejected alternatives
- dispatcher (often conflated with event bus infrastructure)
- triage-agent (too broad, includes bug verification and label manipulation)

### Evidence
RJM `.claude/skills/autoplan/SKILL.md:11`.

### Glossary
### router

- **definition:** A router is a lightweight triage mechanism or persona that inspects incoming user requests or event payloads and routes them to the appropriate skill, command, or agent without executing work itself.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `router`
- **decision:** D-580
- **concordance:** `docs/analysis/concordance/roles.md#router`
- **not to be confused with:** coordinator, ask-matt-router

---

## D-581 — trusted-controller

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#trusted-controller
- **preferences consulted:** PREFERENCES.md § Constraints and § Depth enforce unyielding integrity of evaluation baselines; followed by adopting trusted-controller.

### Decision
The canonical term for this role is `trusted-controller`. A trusted-controller is a privileged execution kernel that securely owns evaluation datasets, test assertions, and scoring mechanisms, preventing untrusted or mutating agents from altering verification criteria.

### Adopted from
RJM's held-out verification architecture in `.agents/architecture/ADR-087-held-out-validated-improvement.md:573`.

### Dropped
Python evaluation harness dependencies in favor of Bun test runners.

### Rejected alternatives
- evaluation-harness (describes the software framework rather than the security boundary role)
- security-kernel (too low-level, sounds like operating system kernel architecture)

### Evidence
RJM `.agents/architecture/ADR-087-held-out-validated-improvement.md:573`.

### Glossary
### trusted-controller

- **definition:** A trusted-controller is a privileged execution kernel that securely owns evaluation datasets, test assertions, and scoring mechanisms, preventing untrusted or mutating agents from altering verification criteria.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `trusted controller`
- **decision:** D-581
- **concordance:** `docs/analysis/concordance/roles.md#trusted-controller`
- **not to be confused with:** agent-safety-auditor, build-cop

---

## D-582 — agent-persona

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#agent-personas
- **preferences consulted:** PREFERENCES.md § Approach embraces Addy's persona architecture; followed by adopting agent-persona.

### Decision
The canonical term for this role is `agent-persona`. An agent-persona is a structured role definition specifying an agent's behavioral identity, domain expertise, communication tone, tool permissions, and operational constraints.

### Adopted from
Addy's persona architecture in `docs/copilot-setup.md:19` and `references/agent-personas.md:5`.

### Dropped
Plural naming in favor of standard singular canonical entry.

### Rejected alternatives
- agent-personas (plural form rejected per GLOSSARY singular noun rules)
- system-prompt (conflates the raw prompt string with the structured role identity)

### Evidence
Addy `docs/copilot-setup.md:19`, `references/agent-personas.md:5`.

### Glossary
### agent-persona

- **definition:** An agent-persona is a structured role definition specifying an agent's behavioral identity, domain expertise, communication tone, tool permissions, and operational constraints.
- **kind:** role
- **source names:** addy: `Agent Personas` · matt: — · rjm: —
- **decision:** D-582
- **concordance:** `docs/analysis/concordance/roles.md#agent-personas`
- **not to be confused with:** specialized-agent-persona, agent

---

## D-583 — specialized-agent-persona

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#specialized-agent-personas
- **preferences consulted:** PREFERENCES.md § Approach and § Depth prioritize specialized personas for distinct lifecycle stages; followed by adopting specialized-agent-persona.

### Decision
The canonical term for this role is `specialized-agent-persona`. A specialized-agent-persona is a domain-tailored agent configuration packaged as a standalone agent definition (such as security auditor, test engineer, or web performance auditor) with dedicated tools and narrow verification focus.

### Adopted from
Addy's plugin agent packaging in `docs/antigravity-setup.md:94` and `docs/antigravity-setup.md:95`.

### Dropped
Plural naming in favor of standard singular canonical entry.

### Rejected alternatives
- specialized-agent-personas (plural form rejected per GLOSSARY rules)
- domain-agent (less expressive of behavioral persona customization)

### Evidence
Addy `docs/antigravity-setup.md:94`, `docs/antigravity-setup.md:95`.

### Glossary
### specialized-agent-persona

- **definition:** A specialized-agent-persona is a domain-tailored agent configuration packaged as a standalone agent definition (such as security auditor, test engineer, or web performance auditor) with dedicated tools and narrow verification focus.
- **kind:** role
- **source names:** addy: `Specialized Agent Personas` · matt: — · rjm: —
- **decision:** D-583
- **concordance:** `docs/analysis/concordance/roles.md#specialized-agent-personas`
- **not to be confused with:** agent-persona, general-purpose-agent

---

## D-584 — user-representative

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#user-representative
- **preferences consulted:** PREFERENCES.md § Approach values user experience advocacy in design governance; followed by adopting user-representative.

### Decision
The canonical term for this role is `user-representative`. A user-representative is a review or governance persona that advocates for end-user ergonomics, developer experience, intuitive interface design, and minimal cognitive friction.

### Adopted from
RJM's steering committee charter seat in `.agents/governance/steering-committee-charter.md:17`.

### Dropped
Subjective aesthetic vetoes without concrete usability defect evidence.

### Rejected alternatives
- ux-advocate (informal and narrow)
- customer-proxy (commercial business framing rather than developer/user experience focus)

### Evidence
RJM `.agents/governance/steering-committee-charter.md:17`.

### Glossary
### user-representative

- **definition:** A user-representative is a review or governance persona that advocates for end-user ergonomics, developer experience, intuitive interface design, and minimal cognitive friction.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `User Representative`
- **decision:** D-584
- **concordance:** `docs/analysis/concordance/roles.md#user-representative`
- **not to be confused with:** audience-agent, naive-reader

---

## D-585 — audience-agent

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#audience-agent
- **preferences consulted:** PREFERENCES.md § Approach values reader empathy and clear documentation; followed by adopting audience-agent.

### Decision
The canonical term for this role is `audience-agent`. An audience-agent is a documentation synthesis review persona that audits written guides and references from the reader's perspective, verifying clarity, discoverability, and accessibility to newcomers.

### Adopted from
RJM's synthesis protocol persona in `.claude/skills/skillforge/references/synthesis-protocol.md:21`.

### Dropped
Uppercase typography (`AUDIENCE AGENT`) in favor of canonical kebab-case naming.

### Rejected alternatives
- reader-agent (too generic)
- usability-agent (conflates UI software usability with document readability)

### Evidence
RJM `.claude/skills/skillforge/references/synthesis-protocol.md:21`, `.claude/skills/skillforge/references/synthesis-protocol.md:85`.

### Glossary
### audience-agent

- **definition:** An audience-agent is a documentation synthesis review persona that audits written guides and references from the reader's perspective, verifying clarity, discoverability, and accessibility to newcomers.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `AUDIENCE AGENT`
- **decision:** D-585
- **concordance:** `docs/analysis/concordance/roles.md#audience-agent`
- **not to be confused with:** user-representative, naive-reader

---

## D-586 — prompt-engineer-specialist

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#prompt-engineer
- **preferences consulted:** PREFERENCES.md § Approach and § Depth value rigorous prompt architecture; followed by adopting prompt-engineer-specialist.

### Decision
The canonical term for this role is `prompt-engineer-specialist`. A prompt-engineer-specialist is an agent authoring persona that designs, refines, and evaluates system prompts, instruction hierarchies, and few-shot examples for agents and skills.

### Adopted from
RJM's prompt author role in `.claude/skills/prose-self-check/SKILL.md:269`.

### Dropped
Conflating prompt authoring with auditing prose emitted during runtime sessions.

### Rejected alternatives
- prompt-engineer (bare title that can refer to human practitioner rather than dedicated agent persona)
- prompt-designer (less standard in industry)

### Evidence
RJM `.claude/skills/prose-self-check/SKILL.md:269`.

### Glossary
### prompt-engineer-specialist

- **definition:** A prompt-engineer-specialist is an agent authoring persona that designs, refines, and evaluates system prompts, instruction hierarchies, and few-shot examples for agents and skills.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `prompt-engineer`
- **decision:** D-586
- **concordance:** `docs/analysis/concordance/roles.md#prompt-engineer`
- **not to be confused with:** skillbook-curator, technical-writer

---

## D-587 — skillbook-curator

- **date:** 2026-09-08
- **made-by:** agent
- **session:** 032
- **status:** active
- **supersedes:** —
- **resolves:** roles.md#skillbook-agent
- **preferences consulted:** PREFERENCES.md § Approach supports continuous curation of skill repositories; followed by adopting skillbook-curator.

### Decision
The canonical term for this role is `skillbook-curator`. A skillbook-curator is a meta-maintenance persona that manages, updates, and validates the repository's library of skill markdown files, ensuring schema compliance and incorporating retrospective learnings.

### Adopted from
RJM's skillbook agent in `.claude/agents/skillbook.md:10`.

### Dropped
Unvalidated direct modifications to skill books without automated schema checks.

### Rejected alternatives
- skillbook-agent (noun-agent compounding rejected in favor of functional curator descriptor)
- skill-manager (too corporate and vague)

### Evidence
RJM `.claude/agents/skillbook.md:10`.

### Glossary
### skillbook-curator

- **definition:** A skillbook-curator is a meta-maintenance persona that manages, updates, and validates the repository's library of skill markdown files, ensuring schema compliance and incorporating retrospective learnings.
- **kind:** role
- **source names:** addy: — · matt: — · rjm: `Skillbook Agent`
- **decision:** D-587
- **concordance:** `docs/analysis/concordance/roles.md#skillbook-agent`
- **not to be confused with:** retrospective-agent, prompt-engineer-specialist
