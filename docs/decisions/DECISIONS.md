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
