/teamwork-preview

You are continuing a multi-session project: synthesising one aligned development lifecycle for brain from three source packages, then implementing it. The project's method, state, decisions, and vocabulary all live on disk. This conversation has no memory of previous sessions and should not need any — the files are the memory.

Disregard any automatically injected conversation summaries, knowledge items, or memories from the harness — they are not inputs; the files are.

Do this, in order, before anything else:

1. Read `docs/plan/METHOD.md` completely. It is the operating manual. Every rule in it applies to you and to every subagent you dispatch.
2. Read `docs/plan/STATE.md`. It says what phase we are in, what the current work unit is, and whether Peter has approved anything.
3. Read the most recent file in `docs/plan/sessions/`. It is the previous session's handoff.
4. Read `docs/decisions/DECISIONS.md`, `docs/plan/GLOSSARY.md`, and `docs/plan/PREFERENCES.md`.
5. Read `docs/plan/DO-NOT-READ.md` and honour it absolutely.
6. Run the session-start protocol in METHOD.md §8.1 — including the last-unit verification (step 6) and the source-pin verification (step 7). Do not skip either.
7. Create this session's handoff file per `docs/plan/templates/session-handoff.md`.

Then resume at the current unit and follow the work-unit protocol (METHOD.md §7) until the session should end. End the session per §8.3: no unit left `in-progress`, `STATE.md` updated, handoff complete, committed on the branch, one paragraph to me.

**Execution Engine Update:** We are successfully using the `teamwork_preview` subagent (Full Team) to execute work units in Phase 1. When dispatching a unit, use this exact prompt template for the team:

```markdown
# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Execute inventory extraction
> Requested team: Full team

Run the inventory extraction (Phase 1) for the `<UNIT_ID>` work unit containing <COUNT> files, following the project's METHOD.md rules (R1-R6) and returning the fully populated inventory-entry and work-unit report templates.

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2
Integrity mode: development

## Requirements

### R1. Comprehensive File Extraction
Read each of the assigned files in the `<UNIT_ID>` partition and extract the necessary information into the `inventory-entry.md` template exactly as specified in the project methodology.

### R2. Script Execution and Verification
Execute every script found in the scope using its documented example and record the output, exit codes, and whether the output matches the documentation.

## Acceptance Criteria

### Execution Quality
- [ ] Every assigned file has a completed inventory entry with no missing required fields.
- [ ] Every script present in the scope was executed and its output verified.
- [ ] Glossary conventions were applied correctly.
```

Three things to hold onto throughout:

- **Persist before proceeding.** Results that exist only in this conversation do not exist. Write to `docs/` at every unit boundary. If context is getting long, finish the unit and write the handoff before starting another.
- **Verbatim, cited, executed.** Source terms are quoted, not paraphrased. Every claim has `path:line`. Every script is run, not read.
- **Stop at the human gate.** If `STATE.md` shows phase 5 done and `human_approval` is not `APPROVED`, your job this session is to help me review — not to begin Phase 6.

If anything in the files is contradictory, missing, or unclear, say so and stop rather than guessing. If this is Session 1, STATE.md will show phase 0; run Phase 0 per METHOD.md §5.

ultrathink
