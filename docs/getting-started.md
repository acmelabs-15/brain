# Getting Started with brain

Want a worked example before setting up your own project? The [interactive tutorials]() walk through a greenfield build, a brownfield feature, and a safe automation loop with copyable prompts for Claude Code.

## How Skills Work

Each skill is a Markdown file (`SKILL.md`) that describes a specific engineering workflow. When loaded into an agent's context, the agent follows the workflow — including verification steps, anti-patterns to avoid, and exit criteria.

**Skills are not reference docs.** They're step-by-step processes the agent follows.

### Existing projects need no migration

Install the pack from the existing project's root using the normal setup path for your agent, then keep working in that project. Skills activate for matching tasks; they do not require a new repository layout or a one-time conversion of existing code.

Do not copy this repository's root `AGENTS.md` or `CLAUDE.md` into the project. Those files configure contributors to brain itself. Add only the skills and any project-specific instructions your agent normally reads. For a gradual rollout in an established codebase, follow the [Adoption Guide](https://github.com/acmelabs-15/brain/tree/main/docs/adoption-guide.md).

## Recommended Setup

Rolling out to a real project? The **[Adoption Guide](https://github.com/acmelabs-15/brain/tree/main/docs/adoption-guide.md)** covers two end-to-end paths: the full lifecycle from day one for a greenfield project, and an incremental, verification-first rollout for an established codebase. The setup below is the quick version.

### Minimal (Start here)

Load three essential skills into your rules file:

1. **spec-driven-development** — For defining what to build
2. **test-driven-development** — For proving it works
3. **code-review-and-quality** — For verifying quality before merge

These three cover the most critical quality gaps in AI-assisted development.

### Full Lifecycle

For comprehensive coverage, load skills by phase:

```
Starting a project:  spec-driven-development → task-decomposition
During development:  incremental-implementation + test-driven-development
Before merge:        code-review-and-quality + security-and-hardening
Before deploy:       shipping-and-launch
```

### Context-Aware Loading

Don't load all skills at once — it wastes context. Load skills relevant to the current task:

- Working on UI? Load `frontend-ui-engineering`
- Debugging? Load `debugging-and-error-recovery`
- Setting up CI? Load `ci-cd-and-automation`

## Skill Anatomy

Every skill follows the same structure:

```
YAML frontmatter (name, description)
├── Overview — What this skill does
├── When to Use — Triggers and conditions
├── Core Process — Step-by-step workflow
├── Examples — Code samples and patterns
├── Common Rationalizations — Excuses and rebuttals
├── Red Flags — Signs the skill is being violated
└── Verification — Exit criteria checklist
```

See [skill-anatomy.md](https://github.com/acmelabs-15/brain/tree/main/docs/skill-anatomy.md) for the full specification.

## Using Agents

The `agents/` directory contains pre-configured agent personas:

| Agent | Purpose |
| --- | --- |
| `code-reviewer.md` | Five-axis code review |
| `test-engineer.md` | Test strategy and writing |
| `security-auditor.md` | Vulnerability detection |
| `web-performance-auditor.md` | Core Web Vitals & performance audit (via `/webperf`) |

Load an agent definition when you need specialized review. For example, ask your coding agent to "review this change using the code-reviewer agent persona" and provide the agent definition.

## Using Commands

The `.claude/commands/` directory contains slash commands for Claude Code:

| Command | Skill Invoked |
| --- | --- |
| `/spec` | spec-driven-development |
| `/constraints` | constraint-driven-development |
| `/plan` | task-decomposition |
| `/build` | incremental-implementation + test-driven-development |
| `/build auto` | task-decomposition → incremental-implementation + test-driven-development (whole plan, one approval) |
| `/test` | test-driven-development |
| `/review` | code-review-and-quality |
| `/code-simplify` | code-simplification |
| `/ship` | shipping-and-launch |
| `/webperf` | web-performance-auditor (specialist agent, web apps only) |

## Using References

The `references/` directory contains supplementary checklists:

| Reference | Use With |
| --- | --- |
| `testing-patterns.md` | test-driven-development |
| `performance-checklist.md` | performance-optimization |
| `security-checklist.md` | security-and-hardening |
| `accessibility-checklist.md` | frontend-ui-engineering |
| `definition-of-done.md` | all skills / every change |
| `observability-checklist.md` | observability-and-instrumentation |
| `orchestration-patterns.md` | doubt-driven-development |

Load a reference when you need detailed patterns beyond what the skill covers.

## Spec and task artifacts

The `/spec` and `/plan` commands create working artifacts (the spec's `spec.md` and one file per task in its `tasks/` folder, under `docs/specs/SPEC-NNN-<slug>/`). Treat them as **living documents** while the work is in progress:

- Keep them in version control during development so the human and the agent have a shared source of truth.
- Update them when scope or decisions change.

### Working across sessions

The same artifacts are the handoff between sessions. For a small task, run the whole lifecycle in one session. For anything non-trivial, a fresh session per phase (spec → plan → build → review) keeps context focused — what carries the work forward is the approved files, not the conversation:

- the spec — `docs/specs/SPEC-NNN-<slug>/spec.md`
- the task files in the spec's `tasks/` folder

**Before switching**, make sure those files reflect the decisions that still apply, the scope you approved, the questions still open, the next task, and the current verification state (which tests ran, against what).

**In the new session**, read the actual files and look at `git status` before doing anything. Don't assume approvals you can't see in the artifacts. Treat a recorded "tests pass" as a claim about a specific baseline: re-run the checks it covers if the code has moved since, if it doesn't say what was run against what, or if you're about to touch the area it covered. If the baseline still holds, take it and get on with the next task — the point is a check proportional to what changed, not a full suite at every handoff.

#### Task-boundary restarts and Ralph loops

`/build auto` can run the whole approved plan in one session. It does not require or perform a fresh process per task. Its per-task status updates, verification results, and commits make each completed task a restartable boundary, so a capable external harness may exit and resume there without depending on chat history.

A shell-level "Ralph loop" is harness behavior, not a separate skill workflow. If you use one, restart only after the current task has reached a recorded boundary; on re-entry, read the durable artifacts and repository state before selecting the next ready task. A process exit is not evidence that a task passed, and a restart must not bypass an approval gate. See the `context-engineering` skill's **Restartable Session Boundaries** section for the handoff checklist.

This doesn't need the `/spec` and `/plan` wrappers — plain requests work too:

> Read the spec's spec.md, then break it into small verifiable tasks with acceptance criteria and dependency order. Save each task as its own file in the spec's tasks/ folder. No product code yet — show me the plan first.

> Read the spec's spec.md and its task files, then check where things actually stand — `git status`, plus re-running whatever checks the recorded verification state no longer covers. Tell me the next ready task and anything still open, then stop: I'll confirm the scope before you start it. If the plan looks incomplete, say what's missing rather than rewriting it.

## Tips

1. **Start with spec-driven-development** for any non-trivial work
2. **Always load test-driven-development** when writing code
3. **Don't skip verification steps** — they're the whole point
4. **Load skills selectively** — more context isn't always better
5. **Use the agents for review** — different perspectives catch different issues
