# Working on brain

brain is one plugin for Claude Code, Codex CLI, Gemini CLI and Antigravity CLI. `README.md` says what is inside; `spec/README.md` indexes the module specs. This file holds what an agent needs on every turn here.

## Ownership

- A file listed in `upstream.lock.json` is vendored. A change to it goes upstream, as a pull request to the pack it comes from. `bun run sync -- --check` fails on a local edit.
- Every other file is brain's. The eight combined skills and the commands were seeded from addy's text and are owned here; `bun run sync -- --report` shows what addy changed since.
- A generated file names its source. `output-styles/talk-plain.md`, `GEMINI.md`, `rules/talk-plain.md`, `plain-talk/AGENTS-block.md` and the block at the end of this file come from `plain-talk/PLAIN-TALK.md`. Edit the source, then run `bun run plain-talk:render`.

## Commands

```
bun run check      # the gate: typecheck, lint, format, tests, version, render, lifecycle and question checks
bun run validate   # the host validators
bun run sync       # fetch every pinned upstream again
bun run changeset  # a user-facing change gets one; the release workflow versions and tags from it
```

## Where things live

| What | Where |
|---|---|
| The capability map and one spec per module | `spec/` |
| The current plan and task list; done plans by module | `tasks/plan.md`, `tasks/todo.md`; `tasks/done/<module>/` |
| Intent, research notes, decision records, install pages | `docs/intent/`, `docs/research/`, `docs/decisions/`, `docs/install/` |
| Tests | `__tests__/` beside the file under test, `bun:test` |

## Change discipline

- Bun 1.4.0 only. No Node runtime, no Python.
- A failing test first, then the code, then `bun run check` green before the commit.
- One commit per task. Stage the task's files by name.
- A decision that is the user's goes through the ask-user-question skill, one question per call.

<!-- brain:plain-talk:start -->
## Talk plain

Every reply is read once, cold, by a reader who was thinking about something else a moment ago. Write for that reader, always in ASD-STE100 Simplified Technical English.

## Shape of a reply

1. Open with one line that names the subject: what this reply is about and where things stand, before any detail.
2. Give the answer or the outcome.
3. Add only what the reader needs in order to act. Leave the rest out.

## Sentences

Write ASD-STE100 Simplified Technical English:

- One idea per sentence, about 20 words at most.
- Active voice. Simple present tense where the fact is current.
- One word per concept, and the same word every time. Take each domain word from `CONTEXT.md`, the project's glossary. When `CONTEXT-MAP.md` exists at the root, the repo has several contexts and the map points to the `CONTEXT.md` for each. A word the glossary marks _Avoid_ stays out. A concept the glossary lacks is a gap to note for the domain-modeling skill, not a synonym to coin.
- Plain words. A technical term appears only when the reader has to search for it, and it is expanded the first time.

## Structure

- A table for a choice. A list for a sequence or for parallel items. Prose for a single line of argument.
- One or two sentences per bullet.
- Code, commands, paths and error text go in fenced blocks, not inside sentences.
- Headers only past about 300 words, and at most three.

## Before you send

Read the draft as that reader and check:

1. The first line says what this is about.
2. Every paragraph is four sentences or fewer.
3. Parallel items are a list, and a choice is a table.
4. Every term is one the reader already uses.

Where a check fails, re-pitch the draft: give a little context, in ASD-STE100 Simplified Technical English, in the glossary's words. Then check again. The reader's repair for a message that still does not land is the wait-what skill; a message that earns it failed one of these checks.

The sentence rules also apply to the text of a question put to the reader through the host's user-question tool. The layout of that call follows the ask-user-question skill. Load it before you compose the call.
<!-- brain:plain-talk:end -->
