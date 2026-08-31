> Frozen 2026-08-31 at the copy into the brain plugin (PLAN-001 Part 2): git history records every edit from here on; this file is what LOCAL-CHANGES.md said when the copies under ~/.claude were the only record.

# Local changes to installed skills

These skills are copies of `~/Dev/reference/matt-pocock-skills` (and others), not symlinks. A re-sync
from the reference would overwrite the edits below; reapply them, or keep this list current. Rationale:
`~/Dev/env-setup/docs/analysis/ANA-010-context-md-maintenance-in-the-reference-skills.md`.

2026-08-30 — three edits, each one or two lines:

- **ADR location follows the project's convention** (was hardcoded `docs/adr/`): `domain-modeling/SKILL.md`,
  `domain-modeling/ADR-FORMAT.md`, `improve-codebase-architecture/SKILL.md`, `documentation-and-adrs/SKILL.md`.
- **Read `CONTEXT.md` (and `CONTEXT-MAP.md`) before exploring; never an avoided synonym; a missing concept is a gap for
  `/domain-modeling`** — the reference's `docs/agents/domain.md` consumer rule, added to: test-driven-development, implement, implement-spec, incremental-implementation, code-review, code-review-and-quality, api-and-interface-design, codebase-design, planning-and-task-breakdown, spec-driven-development, to-spec, to-tickets, research, debugging-and-error-recovery, deprecation-and-migration, doubt-driven-development.
- **Route to `domain-modeling` when a term is resolved or a decision recorded** (a closing section): documentation-and-adrs,
  spec-driven-development, to-spec, interview-me, idea-refine; `grill-me` gains a pointer to `/grill-with-docs` (it stays stateless).

2026-08-30, same day — outside `skills/`:

- `~/.claude/agents/code-reviewer.md`, `~/.claude/agents/test-engineer.md`: a closing "Project vocabulary" section (read
  `CONTEXT.md` before judging or inventing a name; gaps go to `/domain-modeling`).
- `~/.claude/references/project-docs-conventions.md` and `~/CLAUDE.md` §3: the ADR-directory split is described as resolved
  (the skills defer to the project; `docs/adr/` only as the no-convention default).
- Commands under `~/.claude/commands/` delegate to skills that carry the read rule; `security-auditor` and
  `web-performance-auditor` do not name domain concepts — all left unchanged.

2026-08-31 — the per-part status line and the PRD Plans table (the `session` plugin, ADR-022 in env-setup):

- `planning-and-task-breakdown/SKILL.md`: the plan template's phases became **parts**, each with a
  `> Status: planned | in progress (session SES-NNN) | done (session SES-NNN, sha)` line and its checkpoint
  folded in; a paragraph after the template says what the line is for; the verification list checks it.
- `spec-driven-development/SKILL.md`: the spec template gained a `## Plans` table (spec → plan → part → session);
  Phase 2 step 5 asks for the status line per part.
- `~/.claude/references/project-docs-conventions.md`: the `docs/plan/` row names the status grammar and the Plans
  table; a paragraph introduces `docs/sessions/` and `session init` as the source of the PLAN/PRD templates.
- `~/.claude/commands/plan.md` step 5 and `build.md` step 8: the status line and the sha-citing tick.

2026-08-31, later — PLAN-001 part 2 in acmelabs-15/sessions:

- `~/.claude/references/project-docs-conventions.md`: which `Status:` vocabulary belongs to which artefact (plan
  part / ticket / ADR), and the one-line rule that picks `docs/plan/PLAN-NNN` over the `tasks/plan.md` fallback.
- `~/.claude/commands/build.md` step 5: the task's tick cites the commit's sha, so it lands in the following
  `docs(session)` commit rather than in the task's own (ADR-022's never-self-referential rule).
