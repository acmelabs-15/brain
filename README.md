# brain

A development lifecycle for coding agents, as one plugin for Claude Code, Codex CLI,
Gemini CLI and Antigravity CLI.

brain carries [Addy Osmani's agent-skills](https://github.com/addyosmani/agent-skills)
unchanged and adds three things:

- **A glossary discipline.** Matt Pocock's `domain-modeling` skill keeps a `CONTEXT.md`
  glossary and one-paragraph ADRs, and every brain skill reads the glossary before it
  names a domain concept.
- **Plain talk on every turn.** One text, rendered for each host: an output style for
  Claude Code, a context file for Gemini CLI, and an `AGENTS.md` block that the
  `setup-brain` skill writes for Codex and Antigravity. The `wait-what` skill is the
  repair when a message still does not land.
- **One question at a time.** The `ask-user-question` skill composes every decision put
  to the user: the facts inside the question, each option with what it costs, one
  recommendation with its reason.

## Install

One install per host. Each page has install, verify, update and remove:

- [Claude Code](docs/install/claude-code.md)
- [Codex CLI](docs/install/codex.md)
- [Gemini CLI](docs/install/gemini-cli.md)
- [Antigravity CLI](docs/install/antigravity.md)

Then, once per repo, run `setup-brain`.

## What is inside

| Folder | Holds | Owner |
|---|---|---|
| `skills/` | 25 agent-skills, 3 of mattpocock/skills, ask-user-question, and brain's own | vendored ones are byte-identical to upstream; brain's own sit beside them |
| `references/`, `agents/`, `hooks/` | agent-skills' checklists, personas and hook scripts | vendored |
| `.claude/commands/`, `commands/` | the nine lifecycle commands for Claude Code, and for Gemini and Antigravity | seeded from agent-skills, brain-owned |
| `output-styles/`, `GEMINI.md`, `plain-talk/` | the plain-talk text and its rendered forms | brain |
| `upstream.json`, `upstream.lock.json` | which commit of each upstream is vendored, and a hash per file | brain |
| `licenses/` | the upstream licence texts | vendored |

The upstream packs are MIT licensed; their texts are in `licenses/`. brain is MIT.

## Lifecycle

The commands are the entry points in Claude Code and Gemini CLI. In Codex and Antigravity,
call the skills by name.

| Stage | Command | Skills it composes |
|---|---|---|
| Define | `/brain:spec` | `spec-driven-development`, with `domain-modeling` and `ask-user-question` |
| Plan | `/brain:plan` | `planning-and-task-breakdown` |
| Build | `/brain:build` | `incremental-implementation`, `test-driven-development` |
| Verify | `/brain:test` | `test-driven-development`, `debugging-and-error-recovery` |
| Review | `/brain:review` | `code-review-and-quality` |
| Ship | `/brain:ship` | `shipping-and-launch` with the review personas |

The composition is the `lifecycle` module's work and is not finished; the commands still
carry agent-skills' text.

## Development

Bun only.

```
bun install
bun run check                  # typecheck, lint, format check, tests, version and render checks
bun run sync                   # fetch every pinned upstream and rewrite the vendored tree
bun run sync -- --check        # fail if a vendored file drifted
bun run sync -- --report       # what addy changed in a seeded command since it was seeded
bun run validate               # claude plugin validate --strict, and agy plugin validate
```

To update an upstream: change its `sha` in `upstream.json`, run `bun run sync`, read the
diff, commit. Never edit a vendored file; a change goes upstream as a pull request.

Design records: `spec/` (the capability map and one spec per module), `docs/intent/`,
`docs/research/`, `docs/decisions/`.
