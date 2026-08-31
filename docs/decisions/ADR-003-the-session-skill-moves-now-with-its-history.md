# ADR-003: The session skill moves into `brain` now, with its history; every typed form is `brain:`-namespaced and the plugin's `commands/` is the typed surface

## Status

Accepted — supersedes the *order* clause of [ADR-002](ADR-002-brain-is-the-plugin-for-the-whole-toolset.md) ("Order unchanged. The session skill is still built and recorded in acmelabs-15/sessions through PLAN-001 Parts 1–4; Part 5 is the move") and decides its open point ("how the bare `/session` and `/plan` are kept"). Everything else in ADR-002 stands: `brain` is the one plugin for the whole toolset, git history replaces `LOCAL-CHANGES.md`, one marketplace entry, the `sessions` and `ask-user-question` plugins retired. ADR-001's sequencing clause ("build in acmelabs-15/sessions, move last") is superseded with it.

## Date

2026-08-31 (brain SES-001)

## Analysis it relies on

- [ANA-002](../analysis/ANA-002-measured-facts-and-eval-lessons.md) § Invocation and resolution — a plugin skill is reachable only namespaced (`/session` → "isn't available"); a personal skill or command resolves bare and would shadow a plugin's bare name.
- This repo's SES-001 Narrative, 2026-08-31 — the first task landed under the old order needed two logs for one plan part (the code's entry in acmelabs-15/sessions SES-002, the plan's tick in brain SES-001) and a status line naming both.

## Context

PLAN-001 Part 1 Task 4 landed in acmelabs-15/sessions (`0caa67c`) and was recorded there, while the plan of record, its tick and this repo's own log live here. Peter, on seeing that: "this work should be being done in the brain plugin so that history can be captured … we're eventually going to remove this sessions plugin codebase." The facts that bear on it: the sessions repo holds 57 commits and two session files (its SES-001, SES-002) that account for them; the gate walks every non-merge commit on the branch, so a merged-in history must stay accounted for; `git merge --allow-unrelated-histories` carries every commit, author and date across, and works the same at Part 5 as today — what waiting costs is the two-log split for every part until then.

## Decision

- **Move now, history merged.** acmelabs-15/sessions `main` is merged into this repo with `--allow-unrelated-histories`; the code lands at the same paths (`skills/session/`, `commands/`, `.claude-plugin/`, the Bun scaffold), so `git log --follow` and `git blame` keep working. The sessions repo's docs keep their numbers and move under `docs/plan/archive/acmelabs-15-sessions/` and `docs/sessions/archive/acmelabs-15-sessions/`; this repo's PRD-001, PLAN-001 and SES-001 stay the record.
- **An archived log still vouches for its commits.** The tool reads every `SES-*.md` under `docs/sessions/archive/` for the shas it accounts for, and never lists, selects or writes one. That is the rule that lets a repository's history be merged in without renumbering its sessions.
- **Namespaced only.** Every typed form is `/brain:session start | log | close` (and `/brain:plan` once the plan command is copied in and rewritten — PLAN-001 Parts 2 and 4 since the renumbering of 2026-08-31). The plugin's `commands/` directory is the typed surface: the sessions repo's aliases move in and delegate to `brain:session` (three of them from Part 3 Task 1, as numbered since 2026-08-31); the commands under `~/.claude/commands` join them at Part 5. Nothing is installed under `~/.claude` to provide a bare form.
- **The `brain` plugin exists from this day**: `.claude-plugin/plugin.json` named `brain`, version 0.3.0 (the first release after `sessions` 0.2.0), listed in the ACMElabs marketplace by env-setup's generator; `sessions@ACMElabs` uninstalled once `brain@ACMElabs` is installed and a fresh conversation resolves `/brain:session`. The sessions repo is archived with a pointer.
- **The rest moves as ADR-002 says**: the `ask-user-question` skill, the 46 skills, the 8 commands, the 4 agents and the references — copied in at PLAN-001 Part 2 and their sources retired at Part 6, as numbered since 2026-08-31 (this ADR first said "Part 5 keeps the rest").

## Alternatives considered

### Move now, copy only

Copy `skills/session`, `commands` and `evals` into brain and keep the sessions repo as the archived history. Rejected: `git log` and `git blame` for the skill would start today, and the 57 commits' history would live in a retired repo — the loss Peter named.

### Keep the order — move at Part 5

Parts 1–4 in sessions, the merge at Part 5, history intact. Rejected: every part until then needs two logs and a status line naming two sessions; every commit lands in a repo to be retired.

### Thin personal commands from env-setup for the bare forms

`~/.claude/commands/session.md`, `session-start.md`, `session-log.md`, `session-close.md`, `plan.md`, each delegating to the `brain:` skill. Rejected: five files outside the plugin on every machine, a second home for each entry point's argument hint, and Peter's standing call — "if it's in a plugin we should invoke it properly".

## Consequences

- PLAN-001 Part 1 Task 5 (Task 6 when written) carries the move; the copy part loses the session skill from its sources and the retirement part the `sessions` retirement; PRD-001 requirement 11 changes.
- The tool gains the archive rule (`docs/sessions/archive/**`), with a test.
- Every `/sessions:session` form in this repo's docs, aliases and manifests becomes `/brain:session` — Part 2 Task 2's sweep is done here, at the move.
- env-setup's `claude-settings` and marketplace items name `brain`; the reinstall route in PLAN-001 § State changes to `brain@ACMElabs`.
- `CONTEXT-MAP.md` arrives with the merge: this repo now holds the authoring vocabulary and the session-log vocabulary, and is itself a consumer of the latter (its own `docs/sessions/`).
