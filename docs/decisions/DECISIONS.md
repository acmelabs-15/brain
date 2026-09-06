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

<!-- Alignment decisions (D-100+) are appended below this line in Phase 4. -->
