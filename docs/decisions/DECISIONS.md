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
- **made-by:** AI Agent
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

---

<!-- Alignment decisions (D-100+) are appended below this line in Phase 4. -->
