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

