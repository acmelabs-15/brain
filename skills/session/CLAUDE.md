# skills/session — the skill

`SKILL.md` is the procedure (`start [PLAN-NNN] · entry · end · close`) and the only file a
conversation pays for on every invocation; keep its body under 5,000 tokens (it is ~4,000) and its
description under 1,024 characters (measured, not eyeballed). What the model *reads* on demand is
`references/` — `docs-system.md` (the record's shapes and rules) and `tool.md` (the tool's
commands, outputs and refusals). What `session init` *copies* into a repo is `assets/` — the two
directory READMEs and the `CONTEXT.md` glossary section; they carry purpose, index and templates
only, and point at the skill for the rules, so a rule has one home. `scripts/` is run, never read:
`session.ts` (the CLI), `session-lib.ts` (the pure half — parsing, selection, the gate's counting,
plan matching), `paths.ts` (repo and asset resolution), tests in `scripts/__tests__/`.

Invariants that span files: the session header and entry shape live in `session-lib.ts`
(`template`, `parseHeader`, `knownShas`, `placeholderCount`), in `references/docs-system.md`, and
in `assets/sessions-README.md` — change one, change all three. The plan part's status-line grammar
lives in `SKILL.md`, `references/docs-system.md` and `assets/plan-README.md`. The four modes are
described in six places that must agree — `SKILL.md`'s description, the four `../../commands/*.md`
descriptions, and the table in the root `README.md`. The three injected
state lines in `SKILL.md` are markers the harness runs at load time: a marker is recognised only at
line start or after a space, and nothing in the body may spell one out in prose.

Checks: `bun test`, `bun run typecheck`, `bun run validate`, and plugin-kit's
`bun shared/validate/validate.ts --target-type skill <this dir> --extended --with-environment`.
`evals/` is the measured evidence — see its own CLAUDE.md before running an iteration.
