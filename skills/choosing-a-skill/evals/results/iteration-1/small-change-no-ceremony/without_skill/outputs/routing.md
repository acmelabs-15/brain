# Routing decision

## Skills invoked

**None.**

## Why

The request is a small, well-specified, low-risk change to a CLI: add a flag, and
gate the side-effecting branches behind it. The user has already stated the scope
("should be a small change"), the desired behaviour ("prints what it would do
instead of doing it"), and the location ("the sync command"). There is nothing
ambiguous to resolve and nothing to design.

The correct move is to read the sync command, make the edit, and show the diff.
Every skill I could plausibly reach for here would add process that costs more
than the change itself.

## Skills explicitly considered and rejected

- **spec-driven-development / `/spec`** — Rejected. Writing a specification for a
  single boolean flag inverts the cost of the work. The requirement fits in the
  user's one sentence.
- **planning-and-task-breakdown / `/plan`** — Rejected. A task breakdown needs
  more than one task to break down. This is one edit in one or two files.
- **interview-me / grilling / idea-refine** — Rejected. The ask is not
  underspecified in any way that matters. The only open question is a local
  implementation detail (how the existing code is structured), which reading the
  code answers faster than asking the user does. The eval framing also forbids
  clarifying questions, but I would not have asked here regardless.
- **test-driven-development / `/test`** — Rejected as a *gate*, but I will follow
  the repo's existing convention: if the sync command has tests, I add a small
  case covering the dry-run path as part of the same change. That is ordinary
  diligence, not a workflow invocation.
- **incremental-implementation** — Rejected. It exists for changes too big to land
  in one step. This one lands in one step.
- **code-review / `/review`, doubt-driven-development, security-and-hardening,
  shipping-and-launch** — Rejected. `--dry-run` strictly *reduces* the blast
  radius of the command. There is no new attack surface, no deploy, and no
  decision worth an adversarial pass.
- **documentation-and-adrs** — Rejected as a skill invocation, but I will update
  the command's `--help` text / usage string inline, since that is part of
  shipping a user-facing flag rather than a separate documentation exercise.

## What I would actually do

1. Locate the sync command and its argument parser.
2. Add the `--dry-run` flag with help text.
3. Thread the flag to the side-effecting operations; print the intended action at
   each one instead of performing it. Keep the read/compute path identical so the
   printed plan is truthful rather than a separate code path.
4. Add or extend a test if the command already has coverage.
5. Show the diff and note anything I had to judge (e.g. an operation whose output
   later steps depend on, which dry-run has to simulate).

Only if step 1 turns up something unexpected — the sync command already having a
partial dry-run notion, or side effects scattered across many call sites so the
change is not in fact small — would I stop and escalate, and even then I would
report back to the user rather than reaching for a workflow skill.
