# The session tool

`skills/session/scripts/session.ts`, run as `bun "${CLAUDE_PLUGIN_ROOT}/skills/session/scripts/session.ts" <command>` and written `session <command>` in SKILL.md. Read this when the tool refuses something, prints a line you did not expect, or when the question is what a command does rather than what step comes next. Every output below was produced by running the command.

## Commands and their outputs

```text
session init
  wrote: <repo>/docs/sessions/README.md          (or "kept: …" when the file exists)
  wrote: <repo>/docs/plan/README.md
  wrote: <repo>/CONTEXT.md                       (or "appended: … ← "## The session log …"", or "kept: … (already has …)")
  session: initialised — open the first session with `session new <slug>`

session list [--plan PLAN-NNN]
  SES-001  open    demo part one · PLAN-001 · part 1      one line per session: id, status, title · plan
              <its Goal, or "(no Goal)">                   (the `/session` injection drops these indented lines)
  open: SES-001                                            or "open: none"; with --plan and no match: "no session serves PLAN-NNN"

session new <slug> [--plan "PLAN-NNN · part N"]
  session: opened SES-002-<slug>.md — set the Goal line and the title; pass `--session SES-002` to later runs.
  note: also open — SES-001                                only when another session is open

session append --session SES-NNN                           (a bare `session` means append)
  + 2c87fe3 chore: init                                    one line per skeleton appended
  session: appended 2 to SES-001-<slug>.md — fill in every _(fill in)_ (then `session check --session SES-001`).
  session: up to date                                      when every commit is accounted for

session current --session SES-NNN
  session: SES-001-<slug>.md · started: … · status: open · plan: … · goal: …
     12: - Summary: _(fill in)_                            every placeholder with its line number
  placeholders: 8                                          or "placeholders: none"

session check --session SES-NNN                            the gate; read its exit status, pipe it through nothing
  session: complete (SES-001, open)                        exit 0
  unfilled: SES-001-<slug>.md has 8 placeholder line(s)    exit 1, with "missing: <sha> <subject>" per unrecorded commit
  session: NOT ready — run `session append --session SES-001` and fill in the placeholders (`current --session SES-001` lists them).
  warning: SES-005-<slug>.md has 3 placeholder line(s) — not the gated session; leave it to its own conversation …

session close --session SES-NNN                            the gate again, now counting Outcome and Open at end
  session: closed SES-001                                  optionally "— still open: SES-002"
  session: NOT closed — SES-001 is not complete.           exit 1
  session: SES-001 is already closed                       idempotent
```

## Refusals

Each is one `session: …` line on stderr and exit 1, never a stack trace:

| Line | Cause | What to do |
| --- | --- | --- |
| `no session log at <dir> — run `session init` in this repo first …` | `docs/sessions/README.md` does not exist under the repo the tool resolved | run `session init`, commit it, continue |
| `no open session — join one with `--session SES-NNN` or open one with `new <slug>`` | a run without `--session` and nothing open | name the session, or open one |
| `2 open sessions — say which with --session: SES-004 (…), SES-005 (…)` | a run without `--session` and several open | pass `--session` — the tool never guesses into another conversation's file |
| `no session file matches --session SES-009` | the id, number or file name matches nothing | `session list` |
| `SES-003 is closed — reopen it (edit its Status line) or open a new session with `new <slug>`` | append into a closed session | open a new session, or reopen deliberately with a dated Narrative note |
| `SES-004-x.md: first heading must be "# YYYY-MM-DD HH:MM · Title"` | a session file without the H1 timestamp line | fix the heading; the tool does not add it to someone else's file |
| `unknown command "x" — one of: init, list, new, append, check, close, current` | a typo | — |

## How it decides

- **The repo** is `CLAUDE_PROJECT_DIR` when set, else `git rev-parse --show-toplevel`, else the working directory (`scripts/paths.ts`) — so it works from any subdirectory and never reads the plugin's own tree as the docs system.
- **Which session** a run acts on: `--session SES-NNN` (or `4`, or the file name) wins; else the single open session; none or several open is a refusal.
- **Accounted for** means: an entry heading `### … · <sha>`, a parent entry's `- Also: <sha>` line, the trailer `Session-entry: none` in the commit's own message, or a subject starting `docs(session)` / `docs(ledger)`. Everything else on the current branch (merges excluded, `--no-renames`, so a rename shows as a delete plus an add) gets a skeleton on `append` and a `missing:` line on `check`.
- **The gate counts** placeholder lines beginning `- ` (entry lines and the Goal) and the Narrative placeholder in the target session; `Outcome` / `Open at end` only under `close`. Placeholders in any other session are warnings.
- **The index** block between `<!-- sessions:start -->` and `<!-- sessions:end -->` in `docs/sessions/README.md` is regenerated on every `list`-free run (`new`, `append`, `check`, `close`); its absence is an error naming the markers.
- **A release marker** is inserted under an entry only when that entry is appended and its commit already carries a tag.
- **Sorting** is by the `SES-NNN` number; a file without a `Status:` line reads as open.

## Running it by hand

Outside a `/session` invocation the path is the plugin's install: `~/.claude/plugins/cache/<marketplace>/session/<version>/skills/session/scripts/session.ts`, or this checkout's `skills/session/scripts/session.ts`. Bun must be on `PATH` (`export PATH="$HOME/.bun/bin:$PATH"`); git is the only other thing it needs.
