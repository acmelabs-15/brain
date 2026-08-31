# The session tool's surface against the skill's three acts — what the sources say

> **Analysis** · 2026-08-31 · status: current — findings only; the decisions are Peter's, one at a
> time (PLAN-001 Part 5 Task 4) · brain SES-005

## Question

Peter, verbatim in PLAN-001 Part 5 Task 4: the skill has three acts (start · log · close) and the
tool nine subcommands (`help`, `init`, `template`, `list`, `new`, `append`, `current`, `check`,
`close`) — do they match? Should the session-file, README and entry shapes live in `SKILL.md`
(Template pattern) rather than in `core.ts`? Does `init` stay, and without `--refresh`? Do
`append` and `current` survive, or fold into the acts? Is `check` renamed `validate`, and how
does the gate read as a feedback loop?

## What was read

Anthropic's skill-authoring best-practices page in full (1,185 lines: § Template pattern,
§ Examples pattern, § Workflows and feedback loops / § Implement feedback loops, § Provide
utility scripts, § Code and scripts, § Solve don't defer, § Runtime environment); the Agent
Skills overview in full (the three levels, § The Skills architecture); the engineering post
*Equipping agents for the real world with Agent Skills* (2025-10-16); plugin-kit's
`progressive-disclosure.md` (the load-mode taxonomy, the placement rule, the measured pointer and
pull-rate results) and `pure-bun.md`; the tool's `help` output and every `session <subcommand>`
invocation in `skills/session/SKILL.md`; `skills/session/CONTEXT.md` (**Act**, **Subcommand**,
**Gate**); ADR-001, ADR-004.

## Findings

### F1. The Template pattern is about output the model writes — and the entry template already follows it

Best-practices § Template pattern: "Provide templates for output format … ALWAYS use this exact
template structure" — a markdown block inside `SKILL.md` that the model fills when *it* writes
the artifact. The session skill already does this for the one shape the model writes free-form:
the entry (log step 2 carries the exact template, pinned to `render()` by a test), with two
Input/Output pairs (§ Examples pattern, likewise satisfied). What the page does **not** say: that
a shape a *script* emits must live in `SKILL.md`. Its own PDF example runs `analyze_form.py`
whose output shape is documented beside the command — the shape lives with the code that emits it.

### F2. The sources push scaffolding toward scripts, not away from them

Three sources, one direction. Best-practices § Provide utility scripts: pre-made scripts are
"more reliable than generated code", "save tokens", "ensure consistency across uses"; § Runtime
environment: "Prefer scripts for deterministic operations: write `validate_form.py` rather than
asking Claude to generate validation code". The engineering post: "many applications require the
deterministic reliability that only code can provide". The skeleton `append` writes is exactly a
deterministic derivation — the commit walk, the accounted-for logic, one line per touched file
with +/− counts, renames as two lines — and the session-file header is what `parseHeader`,
`knownShas` and the gate later parse: a shape the code both writes and reads. Moving those shapes
into `SKILL.md` for the model to copy would replace a deterministic emitter with generation, the
direction every source argues against. What no source says: that a tool this small *must* keep
them in code — the question is reliability and one-home, not doctrine.

### F3. `init` is the Template pattern's alternative for one file only — and `--refresh` exists because shapes-in-code need a refresh path

Since ADR-004, `init` writes exactly one document: `docs/sessions/README.md`. That file is prose
a model could write from a template block in `SKILL.md` (best-practices' pattern would serve —
it is output, written once). What `init` buys over that: byte-stable output across repos, the
index block the tool later regenerates (`new` and `close` rewrite it — the tool must own the
file's shape to edit it safely), and "solve, don't defer". `--refresh` is the maintenance half of
the same choice: when the template changes, regenerated prose beats hand edits (env-setup
`83d0881` — the hand regeneration that cut a file's tail — is the incident behind it, and
2026-08-31's `/brain:plan` fix used `--refresh` again: the bare-`/plan` defect was fixed once in
the template and both repos regenerated). If the README shape moved to `SKILL.md`, `init` and
`--refresh` would go with it — but the index block would still need an owner, so `list`/`new`/
`close` would still carry README-editing code. The shape would then have two homes, which is the
defect ADR-004 removed from `CONTEXT.md`.

### F4. The feedback loop is the page's named pattern, and `check` already is one — the rename would collide with the glossary

Best-practices § Implement feedback loops: "Run validator → fix errors → repeat … Only proceed
when validation passes." The log act is written as that loop (step 5: `NOT ready` names what is
missing "fill it, run the gate again, stage only when it prints `complete`"), and `close` runs
the same gate counting `Outcome`. The page names the *pattern* "validation loop"; it prescribes
no command name. Two facts bear on `check` → `validate`: (a) the glossary (`skills/session/
CONTEXT.md` **Gate**) lists *validation* on its `_Avoid_` line — renaming the subcommand
`validate` would put the avoided word on the typed surface while the defined word (**gate**)
names the concept; (b) plugin-kit's own validator is `validate.ts`, so inside this toolset
*validate* already means "static checks on an artifact", not "gate a session". What no source
says: anything about naming; the choice is the glossary's to keep coherent.

### F5. The act ↔ subcommand map, measured from `SKILL.md`

Every subcommand's consumer, from the body as shipped:

| Subcommand | Invoked by | The act it serves | Notes |
| --- | --- | --- | --- |
| `help` | prose pointer ("prints every subcommand") | all | self-documentation; best-practices checklist: "scripts have clear documentation" |
| `init` [`--refresh`] | the `no session log` gotcha | before any act | F3 |
| `template` | prose pointer ("prints any document `init` writes") | none directly | exists so the shapes have one home *and* stay inspectable; dies if shapes move to `SKILL.md` |
| `list` (bare) | nothing in the body | none | human convenience only; the skill never runs it |
| `list --brief` | the injected Sessions line (frontmatter `!`-marker) | act inference (step 1 reads `unrecorded:`), close (the no-id question) | load-bearing |
| `new` | start step 3 | **start** | the act's engine |
| `append` | log step 1, close step 1 | **log**, **close** | the deterministic skeleton (F2); close uses it as the "nothing unrecorded" probe |
| `current` | log step 1, parenthetically ("lists them by line") | log | the placeholder lister; the gate's `unfilled:` lines carry the same information — the weakest claim to exist |
| `check` | log step 5, close step 1 | **log**, **close** | the gate; the feedback loop (F4) |
| `close` | close step 4 | **close** | the gate again plus the status flip |

So the mismatch Peter sensed is real but smaller than nine-versus-three: `new`/`append`+`check`/
`close` are the three acts' engines; `list --brief` feeds inference; `help`/`init`/`template` are
the before-any-act surface; the two with thin claims are bare `list` (unused by the skill) and
`current` (duplicates the gate's `unfilled:` output). No source prescribes that a CLI mirror the
skill's verb set; best-practices § Use consistent terminology cuts the other way for `close`
naming both an act and a subcommand that are not the same thing (`CONTEXT.md` **Subcommand**
already flags it).

### F6. What the wider record adds

plugin-kit's `progressive-disclosure.md` (measured): a bundled file's kind is its load mode —
run, read, or copy; the session skill's shapes-in-code choice makes them *script output*, which
never enters context, where a `SKILL.md` template block is body tokens paid on every invocation
(the body is at 275 lines of its 500 budget; the session file + README templates would add
roughly 60–80 lines). Its measured caution: a strong tier forgives what a weak tier misses, so a
model-copied template is the variant that degrades on Haiku, a script's output is tier-invariant.
`pure-bun.md`: the tool as one Bun CLI is the house standard; nothing there bears on the
subcommand count.

## Refuted

- **"Templates are normally defined in SKILL.md, so a tool writing them is abnormal"** — the
  best-practices page's Template pattern covers output *the model writes*; for deterministic
  emission the same page and the engineering post prescribe scripts. The two patterns coexist in
  the skill today: the entry template (model-written) is in `SKILL.md`; the machine-parsed shapes
  (session header, README with its regenerated index) are script-emitted. [best-practices
  § Template pattern, § Provide utility scripts; the engineering post]

## Unverifiable

- Whether any measured run ever used `current` or bare `list` — the disclosure transcripts
  predate the current tool surface (the eval redo is Part 6 Task 2); asserted from the body's
  text, not from runs.

## Consequences — the decisions this tees up (Peter's, one at a time)

1. **Shapes' home** — keep session-file/README shapes in `core.ts` with the entry template in
   `SKILL.md` (the split the sources support), or move them to `SKILL.md`. F1–F3, F6.
2. **`init` / `--refresh`** — keep both (F3), or drop `--refresh`, or drop `init` for a
   `SKILL.md` template block plus model-written file. F3.
3. **`append` and `current`** — keep `append` (F2); fold `current` into `check`'s `unfilled:`
   output or keep it. F5.
4. **`check` vs `validate`** — keep `check` (or rename to the glossary's own word, `gate`);
   `validate` collides with the glossary's `_Avoid_` line and plugin-kit's validator. F4.
5. **Bare `list`** — keep as human surface or fold `--brief` into the default. F5.

An ADR follows only where a shape moves (Task 4's own text); the tool's USAGE, `SKILL.md`,
`skills/session/CONTEXT.md` (**Subcommand**), the tests and the `allowed-tools` grant follow
whatever is decided.
