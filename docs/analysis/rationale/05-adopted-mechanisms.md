# 05 · The five zero-quality-cost mechanisms, as specified before they were built

**Status:** adopted as D-015 on 2026-09-04 (M1 result store → `memo.ts`; M2 ledger → `dedupe.ts`; M3 fixed set → `prefix.json` + `prefix-check.ts`; M5 fact scripts → `quote-check.ts`, `unit-facts.ts`). M4 became **D-010** on 2026-09-05 once measured — see `../dynamic-batching-experiment.md` and `11-experiment-and-reset.md`.

**Where the built versions differ from this specification.** (0) M1's key is the *extraction contract* (METHOD §2.4, §3, §4 + the template), not the whole of METHOD.md: the whole-file key made every between-session edit to the manual a re-run of the inventory — sessions 002–003 stopped on 90 STALE cards after hotfix 1 — and D-020 narrowed it. (1) M1's `verified:` field is written by the primary agent at METHOD §7 step 6, not by a separate reviewer role. (2) M3's "agent definitions with `skills:` preloaded" were never created; the fixed material is read from disk by the Worker (METHOD §6.3 item 3) — same effect, no message copies. (3) M4's "the harness must not summarise on its own below the measured budget" turned out to be unachievable on Antigravity (no setting) and unnecessary (state is on disk) — §8.4. (4) The closing question — whether brain should ship M1/M3/M4/M5 as general tools — is still Peter's at the Phase 5 gate.

---

*The research as delivered on 2026-09-04 follows, unedited except for this preface. Section numbers inside it refer to the research bundle, not to METHOD.*

This supersedes the ranked list in `02-caching-token-efficiency.md` as the thing to act on. The ranked list remains as research; two of its items are withdrawn (model tiering, and "model: flash as the Antigravity lever") because they trade reading quality for cost, which is out of bounds for this project. Everything below leaves what the model reads, and which model reads it, unchanged.

All five live in three places only: `scripts/synthesis/` (pure Bun, no dependencies), rules in `docs/plan/METHOD.md`, and a small per-harness settings adapter. No script knows anything about `brain`'s layout or about lifecycles; each takes paths and prints text. A repo that adopts the method copies the scripts and the templates.

---

## M1 · Result store — do not redo verified work

**What.** Every deliverable carries a record of exactly what produced it. A script compares the record to the present state. Match → reuse. No match → redo.

**How.** Five frontmatter fields on every card: `inputs` (each source path with its sha256), `method_sha` (sha256 of METHOD.md), `template_sha` (sha256 of the template used), `model`, `effort`. When the card passes review, the reviewer adds `verified: <date, check name>`.

Before dispatching a unit, the primary agent runs `bun scripts/synthesis/memo.ts check <unit>`. The script rehashes the unit's inputs, METHOD.md and the template as they are now, and prints one line per deliverable: `HIT <path>` or `MISS <path> — <field that changed>`. On HIT the unit is marked `done` in STATE.md with `reused: true` and nothing is dispatched. On MISS, dispatch as normal.

**Why quality is untouched.** A HIT reuses a card that already met R1–R11 from byte-identical inputs under the same METHOD, template, model and effort. Nothing weaker reads anything.

**Portable because** inputs and deliverables are files; the key is content. The key is strict on purpose: a METHOD.md change invalidates every card, which is §11 change propagation made automatic.

**Check.** `memo.ts audit` lists every card whose record no longer matches the present hashes. Runs at every phase gate beside `coverage.ts`.

---

## M2 · Duplication ledger — read identical bytes once

**What.** `dedupe.ts` (in this bundle; specified in `01-duplication.md`). Keys on file bytes and file names, never on folder layout.

**How.** Phase 0 runs it per package and commits `docs/analysis/manifest/<pkg>-duplicates.md`. EXACT groups: one canonical path, the rest aliases; one card, aliases in its header, every quote cites the canonical path plus `(= alias)`. VARIANT pairs: same name, small differences, full `diff -u` in the ledger; one card plus one divergence card with one `### Hunk` per hunk. The dispatch message for a unit includes the ledger rows for that unit's paths, so the subagent knows the aliases before it reads.

**Why quality is untouched.** Identical bytes carry identical meaning. Every difference is read in full; a skipped hunk fails the check.

**Portable because** it found matt's symlink, addy's `.gemini/` copy and rjm's build tree with no configuration. Threshold is one env var.

**Check.** `coverage.ts` R11: every alias row claimed by exactly one card; every VARIANT pair has a divergence card whose hunk count equals the ledger's `@@` count.

---

## M3 · Fixed set — keep the start of every conversation identical

**What.** A declared list of files that must not change during a conversation, placed where the harness loads them once, plus settings that stop the harness from changing its own prefix.

**How.** `docs/plan/prefix.json` lists the fixed set: METHOD.md, the templates, the agent definitions, CLAUDE.md / AGENTS.md. Two rules follow.

Rule one — placement. The fixed set goes where the harness loads it once, never into each task message. Claude Code: the agent definition (`.claude/agents/<name>.md`, templates preloaded via `skills:`) and CLAUDE.md. Antigravity: `.agents/agents/<name>.md` with `skills:`, and AGENTS.md. A dispatch message is then only the unit id, its paths, its ledger rows and its `unit-facts.ts` output. Every subagent of one kind starts from byte-identical text, so the harness can reuse it.

Rule two — pins. Claude Code: `model` and `effortLevel` fixed in settings.json; no MCP or plugin toggles mid-conversation; `CLAUDE_CODE_PROMPT_CACHE_TTL=1h` only if billing by API key. Antigravity: `--effort` fixed at launch; a batch of subagents dispatched in one turn (Gemini's implicit reuse depends on similar prefixes arriving close together).

Every conversation starts from a committed, clean tree (§8.3 already requires the commit; the harness reuses the startup text only when the git snapshot matches).

**Why quality is untouched.** Nothing is removed from what the model reads; it is placed where it is read once and reused.

**Portable because** the fixed set is a list in a JSON file. A repo edits the list, not the scripts.

**Check.** `prefix-check.ts` hashes the fixed set at conversation start and end and writes both into the handoff. A mismatch means a fixed file changed mid-conversation and the next session must know. On Claude Code, `/usage` shows the prompt-cache hit rate; a low rate is a defect to investigate.

---

## M4 · Context budget — this is D-010, not a new rule

**What.** The stopping rule already in `docs/analysis/dynamic-batching-experiment.md`: dispatch while `used + largest observed per-unit delta + reserve < budget`, where the budget comes from measured rot metrics (a skipped §7 step, a check-off without read-back, drifting STATE counts, a fabricated citation, a verbatim field that does not match its source). The conversation ends by plan before any of those appear. When the measurements land, the result is recorded as D-010 and edits §6.5 / §8.2.

Where rot actually lives in this architecture is one level down — the Project Orchestrator inside each team, bounded by §6.5 unit sizing (≤ 50 KB source per unit) and Teamwork's documented self-succession. The experiment reads those transcripts after each unit completes, never during a conversation. That stays as designed.

**What this bundle adds — three small things, no new rule.**

The harness must not summarize on its own below the measured budget. Claude Code: set the auto-compact window to the full model context (`CLAUDE_CODE_AUTO_COMPACT_WINDOW`) so it cannot fire first; `/rewind`, never `/compact`, to abandon a path. Antigravity: no setting found that governs this — recorded in the experiment as "undocumented — probe", per its own rule for harness facts.

The handoff template gains one field: peak `context_window.used_percentage` for the conversation. The experiment already measures it; writing it down is the only addition.

M1, M2 and M5 shrink the per-unit delta. A smaller delta means more units per conversation under the same budget. That is the link between the five: four lower the cost per unit; the stopping rule spends the budget.

---

## M5 · Fact scripts — mechanical facts computed, never generated

**What.** A fixed set of Bun scripts that produce every mechanical fact a card needs, so the model spends its output on reading and judgment.

**How.** `manifest.ts`, `coverage.ts`, `dedupe.ts` exist. Two are added.

`quote-check.ts`: for every `"…" — path:line` in a card, read that line in the source and confirm the quoted bytes appear there. Output is `PASS` or `FAIL path:line "<quote>"` per quotation. A card with any FAIL cannot be marked verified; the subagent runs it on its own card before returning; the reviewer runs it again.

`unit-facts.ts`: prints what a subagent would otherwise compute at the start of its work — paths, bytes, line counts, hashes, ledger aliases, memo status. The primary agent pastes the output into the dispatch message. The subagent reads the source files in full; it does not recount them.

**Why quality is untouched.** The model reads the same bytes it reads today. It stops typing numbers a script prints exactly, and its quotations become provable instead of trusted.

**Portable because** the scripts take paths and print text.

**Check.** `quote-check.ts` is itself the mechanical half of Phase 1V. Every script's exit code is recorded in the handoff, per the evidence rule.

---

## What these are, beyond this project

`brain` is the plugin; the Phase 5 spec defines the lifecycle it will ship. M1, M3, M4 and M5 are general tools for any agent doing long work in any repo — the same family as `brain`'s existing session skill with its gate and log. Whether `brain` ships them is a question for Peter at the Phase 5 gate. M2 is specific to analysing a corpus of source packages and is project tooling. Either way they are built as clean Bun scripts with no `brain`-specific paths, which is how they are specified above.
