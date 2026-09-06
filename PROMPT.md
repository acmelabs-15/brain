You are continuing a multi-session project: synthesising one aligned development lifecycle for brain from three source packages, then implementing it. The project's method, state, decisions, and vocabulary all live on disk. This conversation has no memory of previous sessions and should not need any — the files are the memory.

Disregard any automatically injected conversation summaries, knowledge items, or memories from the harness — they are not inputs; the files are. If the harness tells you mid-conversation that earlier context was truncated or compacted, follow METHOD.md §8.4: re-read STATE.md and the latest handoff, never a transcript.

The repository is `/Users/peterkloss/Dev/ACMElabs/brain-v2` — your working directory. Every path below is relative to it and exists there; never search the filesystem for a file named here, and never read anything under `/Users/peterkloss/Dev/ACMElabs/brain/` (a different worktree, fenced by `DO-NOT-READ.md`) or anywhere else outside this repository.

Do this, in order, before anything else:

1. Read `docs/plan/METHOD.md` completely, in exactly two views — lines 1–327, then 328 to the end. It is the operating manual. Every rule in it applies to you and to every subagent you dispatch. Do not read any part of it twice.
2. Read `docs/plan/STATE.md`. It says what phase we are in and whether Peter has approved anything. Do not open `docs/plan/units.md`; `bun scripts/synthesis/units.ts status` and `units.ts pending <n>` are how you ask about units.
3. Read the most recent file in `docs/plan/sessions/`. It is the previous session's handoff. Read no earlier handoff.
4. Read `docs/decisions/DECISIONS.md`, `docs/plan/GLOSSARY.md`, and `docs/plan/PREFERENCES.md`.
5. Read `docs/plan/DO-NOT-READ.md` and honour it absolutely.
6. Run the session-start protocol in METHOD.md §8.1 — every step, including the last-unit verification (step 6), the source-pin verification (step 7), and `budget.ts --record start` (step 9). Do not skip any.
7. Create this session's handoff file per `docs/plan/templates/session-handoff.md`.

Then work. In Phase 1 that means the loop in METHOD.md §8.2: `bun scripts/synthesis/budget.ts` tells you how many Teamwork runs to dispatch at once and how many units each holds; you dispatch them yourself by the recipe in §6.3 item 8 — nobody else runs an interview — wait with `await-run.ts`, verify per §7, record with `budget.ts --record`, and ask `budget.ts` again. When it says STOP, end the session per §8.3: no unit left `in-progress`, `STATE.md` updated, `budget.ts --measure` stored with `--set`, handoff complete, committed on the branch, one paragraph to me. In Phase 2 the loop is identical — `budget.ts` counts the concept units (`cc-*`) once `partition-concepts.ts` and `units.ts init` have run (the first Phase 2 conversation runs them, per §5), `unit-facts.ts` describes a concept unit, `memo.ts stamp-unit` and `memo.ts verify` do per unit what Phase 1 did per card. In Phases 3–5, §5 gives each phase's mode — fan-out phases dispatch runs the same way; single-threaded phases are done by you, checkpointing to disk after every concept family — and §8.2's ceiling still governs: `budget.ts` tells you the context you have, and the session ends by plan (§8.3) while the close cost is in hand, never by running out.

Two harness facts for headless mode: `write_to_file` to a path inside the repository is refused ("artifacts must be in …/antigravity-cli/brain/…") — create new files with `run_command` and a quoted heredoc (`cat > path <<'EOF' … EOF`) and edit existing ones with the replace tool; and the first sandboxed command of a conversation may fail with "sandbox configuration error … globs not supported" — run it again.

Do not ask me anything during the session. If the files are contradictory, missing, or unclear, stop, say so in one paragraph that begins `STOP: needs Peter`, and end the session per §8.3 with what you have. Do not guess.

Three things to hold onto throughout:

- **Persist before proceeding.** Results that exist only in this conversation do not exist. Write to `docs/` at every run boundary. Every context number you write comes from `budget.ts`, never from memory.
- **Verbatim, cited, executed.** Source terms are quoted, not paraphrased. Every claim has `path:line`. Every script is run, not read. Every tool output lands in your context and your context is the budget: `head` and `grep`, never `cat`; `--summary` and `--quiet` forms; one line per card when stamping; run the tooling, do not read its source — `head -25 scripts/synthesis/<x>.ts` is its usage (§7 context discipline).
- **Stop at the human gate.** If `STATE.md` shows phase 5 done and `human_approval` is not `APPROVED`, your job this session is to help me review — not to begin Phase 6.

If this is Session 1, STATE.md will show phase 0: run Phase 0 per METHOD.md §5 (§8.1 says which of its steps do not apply before the manifests exist) and close per §8.3 — the next conversation dispatches the first run.

ultrathink
