# Fixture: a repo on the brain 0.8 layout

A repo that setup-brain 0.8 set up and that worked on through 0.8's skills. It is the input for the migrate mode (T13, T36 to T38), and status reports on it. It is not a clean fixture: its files keep the 0.8 layout, so the layout-2 rules do not hold here. The tests copy this tree into a temp git repo and commit it first, because the migrate mode moves files with `git mv` and dates migrated files from git.

## What it holds

| Path | What it is | Migrate step |
|---|---|---|
| `CONTEXT.md` | The glossary under its old name | T38 reuses T05's move to `GLOSSARY.md` |
| `spec/CAPABILITY-MAP.md` | The module index of the two specs; not a spec | T36 |
| `spec/SPEC-accounts.md`, `spec/SPEC-billing.md` | Two module specs, no frontmatter | T36: each becomes a `SPEC-NNN-<slug>/` folder |
| `tasks/plan.md`, `tasks/todo.md` | The old plan (checkbox task list, phases) and the old task blocks (with a Dependencies field) | T36: the user says which spec they belong to |
| `docs/decisions/0001-keep-the-ledger-in-postgres.md` | An ADR from domain-modeling, numbered `0001` | T38: a `DEC` file with the next free number |
| `docs/decisions/DEC-001-bill-by-calendar-month.md` | A decision record with no frontmatter | T13: frontmatter with `migrated: 0.8` |
| `docs/research/RES-001-payment-provider-retries.md` | A research record with no frontmatter, its findings in the old free form | T13: frontmatter with `migrated: 0.8` |
| `docs/intent/billing.md` | A confirmed intent doc, behind both specs | T37: the user says whether it becomes an idea |
| `docs/intent/usage-alerts.md` | A draft intent doc with no spec yet | T37: the user says whether it becomes an idea |
| `docs/agents/domain.md` | setup-brain 0.8's domain doc, naming `CONTEXT.md` | T38 |
| `docs/agents/issue-tracker.md`, `docs/agents/triage-labels.md` | setup-brain 0.8's tracker files, local tracker | T37: removed only with the user's yes |

There is no `docs/agents/workspace.md`, no `docs/STATUS.md`, and no root `SPEC.md`; a test that needs the single-spec shape moves one spec to `SPEC.md` in its copy.

## Answers a migrate test gives for the user

- `tasks/plan.md` and `tasks/todo.md` belong to `spec/SPEC-billing.md`: the plan's second line names it. `spec/SPEC-accounts.md` gets a spec folder with no plan.
- Both specs come from `docs/intent/billing.md`.
- `docs/intent/usage-alerts.md` is a draft with no spec: if it becomes an idea, the idea is in define.

## What brain must report

- `brain status`: "run setup-brain to migrate". The repo has no `docs/agents/workspace.md`, and it holds the 0.8 markers: `CONTEXT.md`, `spec/` and `tasks/plan.md`.
- `brain check`: not clean. T14 decides what it prints on a repo with no `workspace.md`. These files break the layout-2 rules under the default paths: `docs/decisions/0001-keep-the-ledger-in-postgres.md` has a bad name, and `DEC-001-bill-by-calendar-month.md` and `RES-001-payment-provider-retries.md` have no frontmatter.
- After the whole migrate mode runs on it: `brain check` exits 0, and `docs/agents/workspace.md` records `layout: 2`.
