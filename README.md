# brain

A development lifecycle for coding agents, as one plugin for Claude Code, Codex CLI,
Gemini CLI and Antigravity CLI.

brain carries [Addy Osmani's agent-skills](https://github.com/addyosmani/agent-skills)
unchanged and adds three things:

- **A glossary discipline.** Matt Pocock's `domain-modeling` skill keeps a `CONTEXT.md`
  glossary and one-paragraph ADRs, and every brain skill reads the glossary before it
  names a domain concept.
- **Plain talk on every turn.** One text, rendered for each host: an output style for
  Claude Code, a context file for Gemini CLI, an always-on rule for Antigravity, and an
  `AGENTS.md` block that the `setup-brain` skill writes into the Codex global file. The
  text follows the install's scope. The `wait-what` skill is the repair when a message
  still does not land.
- **One question at a time.** The `ask-user-question` skill composes every decision put
  to the user: the facts inside the question, each option with what it costs, one
  recommendation with its reason.

## Install

One install per host. Each page has install, verify, update and remove:

- [Claude Code](docs/install/claude-code.md)
- [Codex CLI](docs/install/codex.md)
- [Gemini CLI](docs/install/gemini-cli.md)
- [Antigravity CLI](docs/install/antigravity.md)

Then, once per repo, run `setup-brain`. It sets the glossary layout and the issue tracker,
and on a machine with Codex it writes the plain-talk block into `~/.codex/AGENTS.md` once.

## What is inside

| Folder | Holds | Owner |
|---|---|---|
| `skills/` | 25 agent-skills, 3 of mattpocock/skills, ask-user-question, and brain's own | vendored ones are byte-identical to upstream; brain's own sit beside them |
| `references/`, `agents/`, `hooks/` | agent-skills' checklists, personas and hook scripts | vendored |
| `.claude/commands/`, `commands/` | the nine lifecycle commands for Claude Code, and for Gemini and Antigravity | seeded from agent-skills, brain-owned |
| `output-styles/`, `GEMINI.md`, `rules/`, `plain-talk/` | the plain-talk text and its rendered forms; the block at the end of `AGENTS.md` is one of them | brain |
| `upstream.json`, `upstream.lock.json` | which commit of each upstream is vendored, and a hash per file | brain |
| `licenses/` | the upstream licence texts | vendored |

The upstream packs are MIT licensed; their texts are in `licenses/`. brain is MIT.

## Lifecycle

Run `setup-brain` once per repo first. The commands are the entry points in Claude Code
(`/brain:<name>`) and Gemini CLI (`/<name>`). In Codex and Antigravity, call the skills by
name. Every stage asks each decision through the ask-user-question skill, one question per
call, and reads the glossary through `docs/agents/domain.md`.

| Stage | Command | Skills it composes |
|---|---|---|
| Define | `spec` | `interview-me` when the ask is underspecified, then `spec-driven-development`; `domain-modeling` keeps the glossary; `prototype` and `handoff` for a question that needs a runnable answer |
| Plan | `plan` (`planning` in Gemini) | `planning-and-task-breakdown` |
| Build | `build` | `incremental-implementation` with `test-driven-development`; `build auto` runs each task in a clean context |
| Verify | `test` | `test-driven-development`; `debugging-and-error-recovery` for a bug |
| Review | `review` | `code-review-and-quality`, five axes as parallel sub-agents, one verdict |
| Ship | `ship` | `shipping-and-launch` with the three review personas |
| Quality bar | `constraints` | `constraint-driven-development` |
| Simplify | `code-simplify` | `code-simplification` |
| Web performance | `webperf` | the `web-performance-auditor` persona |

Two on-ramps feed the lifecycle: `triage` for issues the user did not write, and
`wayfinder` for work too big for one session. `using-brain` routes a request to the
right stage. `wait-what` is the repair when a reply does not land.

The eight skills that carry brain's additions keep agent-skills' names. They are seeded
from addy's text and owned by brain: `interview-me`, `spec-driven-development`,
`planning-and-task-breakdown`, `incremental-implementation`, `test-driven-development`,
`debugging-and-error-recovery`, `code-review-and-quality`, `using-brain`. The
research behind each fold is under `docs/research/`.

## Evals

brain measures its own claims with Claude Code's plugin eval command: ten cases under
`evals/`, each a prompt plus graders, run with the plugin and without it, so the delta
shows what brain adds. Every run is model calls on the account that runs it. Claude Code
2.1.269 or later is needed.

```
claude plugin eval . --ablation none --case 'setup/*'   # the setup cases, plugin arm only
claude plugin eval . --case 'plain-talk/*'              # the plain-talk cases, both arms
claude plugin eval . --json evals/results/ci.json       # everything, for the gate
bun run evals:gate evals/results/ci.json                # exit 1 under the threshold
```

The `Evals` workflow runs the suite by hand or weekly, never on every push, and needs
the `ANTHROPIC_API_KEY` repository secret. `evals/results/` is not committed.

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
