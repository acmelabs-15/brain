# ADR-002: `brain` is the one plugin that holds the whole toolset

## Status

Accepted — supersedes the *home* clause of [ADR-001](ADR-001-rehydration-belongs-to-the-plan.md)
("the skill moves into `~/.claude/skills/session`; whether `~/.claude/skills` becomes a git repo
is deferred") and the remaining *location* clause of env-setup's ADR-023 (the session skill as
its own plugin `sessions`). Everything else in ADR-001 stands: the split, the three acts, the
status vocabulary, the inference, the sequencing (build in acmelabs-15/sessions, move last).

## Date

2026-08-31 (the founding conversation; acmelabs-15/sessions SES-002)

## Context

The toolset Peter works with is spread over five homes: the `sessions` plugin
(acmelabs-15/sessions), the `ask-user-question` plugin (acmelabs-15/ask-user-question), 46 skills
copied into `~/.claude/skills` (24 from Addy Osmani's agent-skills, 20 from Matt Pocock's skills,
2 local — with local edits tracked only in `LOCAL-CHANGES.md`), 8 commands in `~/.claude/commands`
and 4 agents in `~/.claude/agents`. The copies are machine-local and untracked; the two plugins
are versioned but namespaced (`/sessions:session`, `/ask-user-question:ask-user-question`); and a
design change that touches a plan skill and the session skill at once (ADR-001) has to land in two
repos and a home directory. ANA-001 recorded the cost: four homes for one procedure, drifted copies
nobody diffs, and a bare `/session` that a plugin cannot provide. When the question of a home for
the new docs system came up, Peter: "it can all go into a brand new ACMElabs plugin called brain …
the ask-user-question skill, the session skill, all the skills in `~/.claude/skills`, all the
commands in `~/.claude/commands` and all of the agents in `~/.claude/agents`."

## Decision

- **acmelabs-15/brain is one Claude Code plugin** carrying: the `ask-user-question` skill; the
  `session` skill and its tool; every skill now under `~/.claude/skills` with its local edits as
  they stand; every command under `~/.claude/commands`; every agent under `~/.claude/agents`; the
  references under `~/.claude/references` those skills point at; their evidence (`evals/`); and
  this docs system (`docs/plan`, `docs/decisions`, `docs/analysis`, `docs/sessions`).
- **Git history replaces `LOCAL-CHANGES.md`.** A drifted copy of an upstream skill is a tracked
  file whose diff against the reference checkout is the record of the edit.
- **One marketplace entry.** `brain` is listed in the ACMElabs marketplace (env-setup's generator
  reads its `plugin.json`); the `sessions` and `ask-user-question` plugins are retired and their
  repos archived with a pointer once `brain` is installed and a fresh conversation resolves
  `/plan` and `/session`.
- **Order unchanged.** The session skill is still built and recorded in acmelabs-15/sessions
  through PLAN-001 Parts 1–4; Part 5 is the move — of everything, not only the session skill.
- **Open, decided at Part 5 Task 1 with Peter:** how the bare `/session` and `/plan` are kept, since
  a plugin skill is reached as `brain:<skill>` and acmelabs-15/sessions PLAN-001 Part 1 Task 3
  measured that bare forms fail for a plugin. Candidates: the plugin's `commands/` as the typed
  surface, or a thin personal command per entry point installed by env-setup.

## Alternatives considered

### `~/.claude/skills` becomes a git repo (ADR-001's deferred question)

Versioned and portable, but a directory of loose skills with no manifest, no marketplace entry,
no place for agents and commands beside the skills, and two plugins still outside it. Rejected in
favour of one plugin.

### Keep the plugins separate and only track the copies

Three homes instead of five; the cross-cutting change still lands in several repos. Rejected.

### Move only the session skill into `brain`

The minimum that answers ADR-001's question, but it leaves the plan skills — the other half of
ADR-001's design — untracked. Rejected: the design is one system.

## Consequences

- PRD-001 requirement 12; PLAN-001 Part 5 lists the sources, the retirements and the eval redo.
- Plugin-kit's `plugin-creator` governs the layout; `claude plugin validate --strict` is a check
  before finishing; the plugin's namespace question is Part 5 Task 1's first decision.
- `choosing-a-skill`'s three lineages and its name-collision table describe files that will all
  live in one plugin; it is rewritten at the move.
- env-setup's `claude-settings` item stops copying skills, commands and agents into `~/.claude`
  and installs the plugin instead.
