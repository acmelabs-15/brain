# Intent: a stateful define phase and one workspace layout for brain

Drafted 2026-10-29 from a design conversation with Peter. Confirmed by Peter on
2026-10-29, with the glossary rename and the source cache added to Outcome.

- **Outcome:** brain's define phase keeps its state on disk. `interview-me` absorbs
  `wayfinder` and keeps its design tree as a map in one idea file, across as many sessions
  as the work needs. Every decision lands as a `DEC` file and every fact as a `RES` file.
  Specs live in one folder each. One helper creates every numbered document, and
  `bun run check` validates names and links. The session rules ship with the plugin, so a
  repo needs only `/setup-brain`, not a hand-written brain section in its `AGENTS.md`.
  The same work renames the glossary from `CONTEXT.md` to `GLOSSARY.md`, and ports
  agent-skills' sdd-cache hooks to a hardened Bun version that the plugin wires.
- **User:** Peter first, on all four hosts. Then anyone who installs brain.
- **Why now:** agent-skills' define phase writes files only when a skill ends, so a long
  interview loses its progress between sessions. Matt's `wayfinder` keeps state, but it
  sizes one decision to a whole session and keeps the map on an issue tracker. Peter's
  earlier systems (`acmelabs-15/skills/docs`, `docs/intent/brain-wrap.md`) showed which
  parts worked and which grew out of control.
- **Success:**
  - A new session resumes an interview from the idea file alone.
  - Every resolved map row links to a `DEC` or `RES` file.
  - Parallel research sub-agents never collide on a document number.
  - `bun run check` fails on a bad name, a duplicate number, a resolved row with no link,
    or a spec source that does not exist.
  - `/build` runs from `docs/specs/SPEC-NNN-<slug>/` (moved under `docs/` by open question 2).
  - After `/setup-brain` in a fresh repo, a new session reports its phase and next step
    with no brain text in the repo's `AGENTS.md`.
- **Constraint:** Bun only. Four hosts. Every user decision goes through brain's
  `ask-user-question` skill (it now lives in brain), one question per call. Vendored files: see
  [Vendored files](#vendored-files); the written rule and the practice have drifted.
- **Out of scope:** syncing maps to an issue tracker; migrating repos other than brain;
  editing addy's or matt's upstream repos.

---

## The design in brief

1. **One rule places every file: folders show ownership, links show use.** Ask: if the
   parent is deleted, does this file still matter? If yes, it lives in a top-level type
   folder and others link to it. If no, it lives inside its parent.
2. **Decisions, research and ideas are repo-wide** (`docs/`). They relate to specs
   many-to-many: one idea can produce several specs or none, and one decision or finding
   can serve many parts of the code.
3. **A spec owns its plan and tasks** (`specs/SPEC-NNN-<slug>/`).
4. **The idea file holds the map**: the design tree as a dependency graph of questions.
   It is an index, never a store. Each row links to the `DEC` or `RES` file that resolved it.
5. **`interview-me` is always stateful.** No one knows at the start whether an interview
   will take one session or ten, so the map is written from the first question.
6. **Tasks and tickets are the same structure**: an ID, a status, blocking edges and a
   result. The idea map and the spec's plan use one row format.
7. **Every user decision gets a `DEC` file.** Whether it is an ADR is a field, not a
   prefix, so promotion never renames a file.
8. **Sub-agents create their own files** through one atomic helper, write findings as they
   go, and reply with the file path only.

---

## Layout

```
<repo>/
  ├── AGENTS.md
  ├── CLAUDE.md
  ├── GLOSSARY.md                     # domain glossary (domain-modeling); replaces CONTEXT.md,
  │                                   #   see "Glossary rename"
  ├── docs/
  │   ├── agents/
  │   │   ├── domain.md
  │   │   ╰── workspace.md            # NEW: the one place that defines this layout
  │   │                               # (issue-tracker.md goes or folds in: open question 10)
  │   ├── decisions/
  │   │   ╰── DEC-NNN-<slug>.md       # every user decision; kind: decision | architecture
  │   ├── research/
  │   │   ╰── RES-NNN-<slug>.md       # research findings and task facts
  │   ╰── ideas/
  │       ╰── IDEA-NNN-<slug>.md      # intent + destination + map (the design tree)
  ╰── specs/
      ╰── SPEC-NNN-<slug>/
          ├── spec.md                 # frontmatter sources: [IDEA-004, DEC-031, RES-009]
          ╰── tasks/
              ├── plan.md             # task graph, same row format as the map
              ╰── todo.md             # keep, generate or drop: see open questions
```

The root `tasks/` folder and the root `spec/` folder go away. `/build` and the planning
skills find the active spec through `docs/agents/workspace.md`.

| File | Still matters if its spec is deleted? | Lives in |
|---|---|---|
| Decision | Yes | `docs/decisions/` |
| Research or task fact | Yes | `docs/research/` |
| Idea (intent, destination, map) | Yes; an idea may never become a spec | `docs/ideas/` |
| Spec, plan, todo | No | `specs/SPEC-NNN-<slug>/` |

---

## File formats

### The idea file: `docs/ideas/IDEA-NNN-<slug>.md`

```markdown
---
id: IDEA-004
status: define            # define | specced | parked
---
# IDEA-004: Merge wayfinder into interview-me

## Intent
- Outcome: <one line>
- User: <one line>
- Why now: <one line>
- Success: <one line>
- Constraint: <one line>
- Out of scope: <one line>

Confirmed by Peter on <date>.     (absent until the explicit yes)

## Destination
<one or two lines: what reaching the end of this map looks like>

## Notes
<skills every session loads; standing preferences for this idea>

## Map
| #  | Question                            | Type      | Status   | Blocked by | Result  |
|----|-------------------------------------|-----------|----------|------------|---------|
| 01 | Depend on the agent-skills plugin?  | interview | superseded by 03 | —  | DEC-030 |
| 03 | How does brain carry addy's skills? | interview | resolved | 04         | DEC-031 |
| 04 | What layout fits a wrap?            | research  | resolved | —          | RES-001 |
| 05 | Where does the map live?            | interview | open     | 03         | —       |

## Not yet specified
<fog: questions you can tell are coming but cannot phrase precisely yet>

## Out of scope
<work ruled beyond the destination; never graduates back>
```

Rules for the map:

- **Row types,** named by how a row is resolved:
  - **Decide**, with Peter: `interview`, `prototype`, `ideate`.
  - **Research**, by a sub-agent: `research`.
  - **Do**, by the agent or by Peter from a checklist: `task`.
- **Statuses.** `open`, `in-progress`, `resolved`, `superseded by NN`.
- **Result.** A resolved row always links to one `DEC` or `RES` file. Never inline text.
- **Frontier.** Every `open` row whose blocking rows are all `resolved`. It is computed,
  never written down.
- **One line per row.** Detail lives in the `DEC` or `RES` file. This stops the map from
  growing into a store (Peter's old `PLAN-001` reached 3,429 lines).
- **Fog vs row.** The test is whether the question can be stated precisely now, not
  whether it can be answered now. A sharp question becomes a row even if it is blocked.
- **Specs produced.** Generated from each spec's `sources:` list, never written by hand.
- **Row IDs.** Other files cite a row as `IDEA-004#03`.

### Decision file: `docs/decisions/DEC-NNN-<slug>.md`

```markdown
---
id: DEC-031
status: accepted              # proposed | accepted | superseded by DEC-NNN
kind: decision                # decision | architecture
adr-test:                     # all three true -> kind: architecture
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-004#03
evidence: [RES-001]
decided: 2026-10-29 by Peter
---
# DEC-031: Pin addy's skills by SHA and sync with Bun

<1-3 sentences: the context, what was decided, and why. Name the rejected options when
they are worth remembering.>
```

- Every decision Peter makes gets a `DEC` file, small or large. MADR, the most widely used
  template, renamed itself "Markdown **Any** Decision Records" for this reason.
- The `adr-test` block makes `kind` checkable. Filter on `kind: architecture` to see ADRs.
- `prototype` rows: the `DEC` records Peter's pick and links the prototype branch.
- `ideate` rows: the `DEC` records the chosen direction, with the other variations as
  considered options.
- Choices Claude makes on its own (cheap, reversible, do not change what gets built) never
  become rows and get no file. `interview-me` states them in chat with a one-line reason.

### Research file: `docs/research/RES-NNN-<slug>.md`

```markdown
---
id: RES-032
status: in-progress           # in-progress | resolved
kind: research                # research | task
from: IDEA-004#06
date: 2026-10-29
---
# RES-032: <title>

## Question
<the map row's question>

## Findings
- <claim>. Source: <url or path:line>, checked <date>.

## Follow-ups
- <a question the main session should turn into a new row>
```

`task` rows (work that must happen before a decision, such as provisioning access) also
resolve into a `RES` file: what was done and the facts later rows depend on.

### Spec folder: `specs/SPEC-NNN-<slug>/`

- `spec.md`: frontmatter `sources: [IDEA-004, DEC-031, RES-009]`. Links run one way only.
- `tasks/plan.md`: the task graph, same row format as the map (ID, task, status,
  blocked by, result).
- `tasks/todo.md`: see open questions.

### `docs/agents/workspace.md`

Written by `setup-brain`. It defines this layout once: the folders, the name patterns, the
templates, how to find the active effort, and how to resume. Every skill refers to "the
workspace (see `docs/agents/workspace.md`)" instead of hard-coding paths, the same way
skills read `docs/agents/issue-tracker.md` today. A later layout change then touches one
file.

---

## The stateful interview: merged `interview-me`

`wayfinder` is a multi-session `interview-me`, not a multi-session `idea-refine`. Each
part maps one to one:

| interview-me (working notes) | wayfinder (on disk) |
|---|---|
| Hypothesis | Destination |
| Design tree | Map, tickets, blocking edges |
| Branches not drawn yet | Not yet specified (fog) |
| Frontier | Frontier (identical rule) |
| Lookup or research sent to a sub-agent | Research ticket to a sub-agent |
| Decision as one question | Interview (grilling) ticket |
| Sideways handoff to prototype | Prototype ticket |
| Restate "Out of scope" line | Out of scope section |
| Restate plus explicit yes | Cleared map |

`idea-refine` does what wayfinder never does: it generates variations, groups them, and
stress-tests directions. It stays a separate skill and resolves `ideate` rows.

### Skills loaded at the start

- `ask-user-question`, brain's own (it moved into brain from acmelabs-15/ask-user-question).
- `domain-modeling`, loaded up front. Matt's own docs report that models skip it when it
  is called only conditionally.
- `context-engineering`, which owns the session-boundary rule below.

### Chart (always runs first)

1. Draft the destination from the hypothesis.
2. Map the frontier breadth-first, across the whole space.
3. Write the idea file: intent draft, destination, notes, the rows that can be stated now,
   fog in "Not yet specified".
4. Wire blocking edges in a second pass.
5. Start a research sub-agent for each research row on the frontier (see
   [Delegating research](#delegating-research)).

### The loop

1. Take the next frontier row.
   - Decide rows go to Peter one at a time.
   - Research rows run in sub-agents in parallel whenever they reach the frontier, any
     number of times during the interview.
   - Task rows run when unblocked: by the agent, or as a precise checklist for Peter.
2. Resolve the row by its type. Write the `DEC` file at the moment Peter decides.
3. **Re-map, after every resolved row of every type, written to disk.** Add newly surfaced
   rows, graduate fog that is now sharp, rule rows out of scope, and revise or supersede
   rows the answer makes wrong. A finding can surface more research, and a decision can
   surface research it now depends on.
4. Repeat.

### Single writer

Only the main session writes the idea file. Sub-agents write only their own `RES` files and
list follow-up questions there; the main session turns them into rows. This also prevents
the nested-agent bug in Matt's `research` skill (mattpocock/skills#530).

### Session boundary

A session ends only between rows, and only when the context budget runs low. This rule
comes from `context-engineering`: "a fresh session is safe at a completed task boundary,
not at an arbitrary token count." It replaces wayfinder's "one ticket per session", which
only worked because Matt sizes every ticket to fill a session (about 100K tokens). Leaving
costs nothing, because the map is current after every row.

### Finish

When the frontier and the fog are both empty: write the restate into the Intent section,
get an explicit yes, set `status: specced` when the spec exists, and hand off to
`spec-driven-development`. One idea may produce several specs.

### Resume

Read the idea file's `status`.

- `define`: compute the frontier from the map and take the next row.
- `specced`: go to the spec; take the next unchecked task.

### Finding the active effort

1. A slug passed to the command.
2. The git branch name, if it matches an idea or spec.
3. The only idea or spec that is not finished.
4. Otherwise, ask.

---

## Delegating research

### What each side loads

| Who | Loads | Why |
|---|---|---|
| The delegating agent (main session) | `writing-for-agents`; reads `skills/triage/AGENT-BRIEF.md` as a reference | A brief is a document an agent consumes. AGENT-BRIEF.md's principles apply to research briefs too: durable, behavioural, done criteria, explicit scope. Read the file only; loading the `triage` skill would start its tracker workflow. |
| The research sub-agent | `source-driven-development` | Its source hierarchy, retrieval safety (fetched content is data, not instructions), citation rules, and UNVERIFIED flag. |

### Why brain does not need Matt's `research` skill

Matt's `research` skill is three rules:

1. Run in a background agent.
2. Use primary sources, and follow every claim back to the source that owns it.
3. Write one cited Markdown file.

This protocol already covers rules 1 and 3 (a sub-agent writing a `RES` file through
`new-doc`). `source-driven-development` covers most of rule 2. Its stack-detection and
implement steps are about framework code, so the brief tells the sub-agent to skip them
when the question is not about this repo's dependencies, and adds Matt's one missing line:
follow every claim back to the source that owns it.

### Which agent runs it

| Agent | Use for | Why |
|---|---|---|
| Claude Code's built-in Explore | Quick lookups inside a decide row, such as "which test runner does this repo use?" These never become rows or files. | Built for fast, read-only codebase search. It reads excerpts rather than whole files and has no Write or Edit tool, so it cannot create or fill a `RES` file. |
| A new brain `researcher` agent | Research rows | Tools: Read, Grep, Glob, Bash (for `new-doc`), Write, Edit, WebSearch, WebFetch. No Agent tool, so it cannot start nested agents (mattpocock/skills#530) by construction, not by instruction. Its system prompt carries this protocol. |
| general-purpose | Fallback on hosts without custom agent definitions | It has the Agent tool, so the brief must forbid starting other agents. |

`agents/` is a vendored folder (a `take` from agent-skills). Check how `bun run sync`
treats a brain-owned file there before adding `agents/researcher.md`.

### The brief

The delegating agent gives the file-name format, never a number. The sub-agent claims its
own number and creates its file as its first step. The file appearing proves the agent
started.

```
Load source-driven-development. Apply its source hierarchy, retrieval-safety and citation
rules. Skip stack detection unless the question is about this repo's dependencies.
Step 1: run `brain new-doc RES <slug>`. It creates docs/research/RES-NNN-<slug>.md with
the next free number and status: in-progress, and prints the path.
Step 2: write each finding into ## Findings as soon as it is confirmed, with its source
and date. Follow every claim back to the source that owns it.
Log every step to your scratch progress file.
List follow-up questions under ## Follow-ups. Do not create other RES files, and do not
start other agents.
Last: set status: resolved. Reply with the file path only.
```

- Findings go into the file as they are confirmed, so partial work survives a crash.
- Step-by-step progress stays in the scratch progress file, out of the repo.
- The reply is the path only, so the parent reads the file, which stays the primary source.
- Peter's standing brief rules still apply: name the exact skills the sub-agent loads, run
  the capability check, report progress.

---

## Numbering and the `new-doc` helper

| Thing | Number | Example |
|---|---|---|
| Idea, spec, decision, research | Global, three digits, never reused, gaps allowed | `IDEA-004`, `SPEC-012`, `DEC-031`, `RES-032` |
| Map rows, plan tasks | Local to their file, two digits | `IDEA-004#03` |
| Fixed files in a spec | Plain names | `spec.md`, `tasks/plan.md` |

`brain new-doc <TYPE> <slug>`:

1. Finds the highest existing number for the type.
2. Claims the next one atomically with `mkdir $(git rev-parse --git-common-dir)/brain/ids/<TYPE>/<NNN>`.
   `mkdir` fails if the directory exists, so only one agent wins a number; the loser
   retries with the next. Outside a git repo, the claims folder is in the user's cache
   directory.
3. Creates the file from the type's template and prints the path.

The claims live inside git's own folder, so a user's `.gitignore` needs nothing, and
claims stay unique across worktrees on one machine (amended 2026-10-29; first drafted as
`docs/<folder>/.ids/`). `brain <cmd>` means running `scripts/brain.ts` from the brain
plugin with bun; `docs/agents/workspace.md` defines it once. Plain file creation cannot
catch a clash, because two agents use different slugs (`RES-032-auth.md`,
`RES-032-cache.md`).

Evidence for the split between global and local numbers: Peter's `acmelabs-15/skills` repo
has 111 `QA` files sharing 92 numbers, and `rjmurillo/ai-agents` has 265 critique files
sharing 37 numbers. Global counters collide under load; types that stay few (PLAN, SPEC,
ADR, RES) never did.

---

## Checks

Added to `bun run check` from day one. `rjmurillo/ai-agents` wrote naming rules but never
built the validator, and its repo drifted from its own document.

- Every file under `docs/decisions/`, `docs/research/`, `docs/ideas/` and `specs/` matches
  its name pattern.
- No two files of one type share a number.
- Frontmatter matches the template for its type.
- Every resolved map row links to an existing `DEC` or `RES` file.
- Every `blocked by` value names a row in the same map.
- Every spec `sources:` entry exists.
- Every `superseded by` points to an existing file or row.

---

## Installing brain in a repo

### The problem

Every repo that uses brain ends up with a medium-sized hand-written `AGENTS.md` that spells
out how a session starts, how work runs, the capability check, sub-agent briefs and how a
task ends. Almost all of it is the same in every repo. Only a few lines are about the repo.

### What other frameworks install

| Framework | What goes into a repo |
|---|---|
| agent-skills | Nothing. "Existing projects need no migration." Its docs say not to copy its own `AGENTS.md`; add a short rules file with your stack, commands and boundaries (`context-engineering`). It ships a session-start hook but does not wire it on hosts that route skills natively. |
| Matt Pocock | `/setup-matt-pocock-skills` writes `docs/agents/issue-tracker.md`, `domain.md` and `triage-labels.md`, plus a short `## Agent skills` block of pointers in the existing `CLAUDE.md` or `AGENTS.md`, updated in place on a re-run. |
| Superpowers | Nothing in the repo. A plugin `SessionStart` hook (on startup, clear and compact) injects its `using-superpowers` skill into every session. |
| OpenSpec | `openspec init` creates `openspec/` and per-tool skills and commands. Generated files are OpenSpec's to own and are rewritten by `openspec update`; "keep your own instructions elsewhere." |
| brain today | `setup-brain` writes `docs/agents/domain.md`, `issue-tracker.md` and `triage-labels.md` through one script with `--dry-run`. The plugin carries plain talk to three hosts (Claude output style, Gemini context file, Antigravity rule). For Codex, setup writes a marked block in `AGENTS.md`. Brain never writes a repo's `CLAUDE.md` or `GEMINI.md`. |

The pattern: generic rules travel with the plugin; the repo holds only repo facts.

### Where each part of the hand-written `AGENTS.md` goes

| Section of the current `AGENTS.md` | Generic or repo-specific | New home |
|---|---|---|
| Core rules, execution model, anti-rationalization | Generic | The plugin's always-on **brain protocol** |
| The list of 16 brain skills to load | Generic | Dropped. `using-brain` routes, and the capability check loads skills by phase. |
| Library skills (`acme-design-system:*`, `tanstack-*:*`) | Repo | `docs/agents/capabilities.md` |
| "Current work belongs to `docs/STATUS.md`" | Generic | The brain protocol, plus `brain status` |
| Session start, steps 1-4 | Generic | The brain protocol. On Claude Code, a `SessionStart` hook runs `brain status` and injects the result. |
| `bun --version` 1.4.4 or later | Repo | `docs/agents/capabilities.md`, as a toolchain check |
| Work through brain | Generic | The brain protocol |
| Capability check | Generic; the design-system docs server is repo | The protocol, plus the server list in `capabilities.md` |
| Sub-agent briefs | Generic | The brain protocol |
| Code: Bun and TypeScript | Repo | The repo's own `AGENTS.md`: stack, commands, boundaries |
| Task end | Generic | The brain protocol |

After install, the repo's `AGENTS.md` holds only what `context-engineering` says a rules
file should hold: the stack, the commands and the boundaries. Nothing about brain.

### Three layers

**1. The brain protocol: ships with the plugin, always on.** One source text,
`protocol/PROTOCOL.md`, rendered to each host by the pipeline that already renders plain
talk (`bun run plain-talk:render`):

| Host | Channel |
|---|---|
| Claude Code | A plugin `SessionStart` hook (startup, clear, compact) that injects the protocol and the output of `brain status`. A hook survives a change of output style, and it can carry live state. |
| Gemini CLI | The extension context file (`GEMINI.md`), next to plain talk |
| Antigravity | A plugin rule with `trigger: always_on`, next to plain talk |
| Codex | The marked block `setup-brain` already writes to `AGENTS.md` (global or project scope), extended with the protocol |

Keep it short: it costs context in every session. It must not repeat `using-brain`'s
routing; agent-skills warns that two routers on a host with native routing fight each other.
It says "the user", not a name, because brain is public.

Draft of `PROTOCOL.md`:

```markdown
# Working in a brain repo

## Session start
1. Get the state. On Claude Code, `brain status` already ran at session start; its output
   is above. Elsewhere, read docs/STATUS.md and the active idea or spec it names.
2. Read docs/agents/workspace.md, docs/agents/capabilities.md, docs/agents/domain.md and
   the glossary, each to its last line.
3. Open the active work: for an idea, its map; for a spec, spec.md, tasks/plan.md and
   tasks/todo.md.
4. Check `git status` and the branch. Run the toolchain checks in capabilities.md.
   Keep work you did not start.
5. Report in five lines or fewer: the phase, the last completed step, the next step,
   anything red, the decisions that wait on the user. Then follow the user's request.
   "Continue" resumes the next approved row or task.

## Work through brain
- When a skill may apply, load it before you act. using-brain routes work to skills.
- Keep ask-user-question loaded. Every decision or permission goes through it, one
  question per call, with a recommendation and its reason.
- Skills the user starts (setup-brain, wait-what, handoff, triage): give the command.

## Capability check
Run it at the start of a task; at each phase change (plan, build, test, review, ship);
before you start a sub-agent; after a compaction or a long run of tool calls; and before
you guess a convention that a skill or a server would give. Confirm:
- the brain skills for this phase;
- the library skills and servers in docs/agents/capabilities.md, each server proved by one
  real read-only call (a tool name in your list is no proof);
- ask-user-question.
Load what is missing. When a server does not answer, stop the work that depends on it and
say what failed. Report in one line what you loaded or fixed; nothing when all was in place.

## Sub-agent briefs
Each brief names the exact skills the sub-agent loads and the servers it needs. It tells
the sub-agent to run the capability check at its start and at its phase changes, to confirm
in its first report what it loaded and whether each server answered, to stop and report when
a skill or server fails, and to log each step to its own scratch progress file. A sub-agent
has no question tool: its questions come back in its report. Research briefs follow
interview-me's research protocol.

## Task end
1. Update the row or task: its status and its result link. Tick it in tasks/todo.md.
2. Research goes in its RES file, a decision in its DEC file. Update the spec when its
   facts change.
3. Rewrite docs/STATUS.md: the next action, anything red, and what waits on the user, with
   the exact command when the next step is theirs.
4. Record what is committed, pushed or waiting for approval. Stage files by name.
```

**2. `brain status`: live state.** A script that reads the workspace and prints the active
ideas and specs, each one's phase, the last completed row or task, the next frontier row or
task, anything red, and the decisions waiting on the user. On Claude Code the `SessionStart`
hook runs it, so session-start steps 1 and 5 cost nothing. `docs/STATUS.md` stays as the
handoff note the agent rewrites at task end (Peter's existing practice); `brain status`
prints it along with the computed state.

**3. Repo facts: written once by `setup-brain`.** Everything below lives in `docs/`, so
brain never needs to write the repo's `CLAUDE.md` or `GEMINI.md`:

| File | Holds |
|---|---|
| `docs/agents/workspace.md` | The layout (folders, name patterns, templates); the tracker section if `triage` stays |
| `docs/agents/domain.md` | Glossary layout and the rules for reading it (exists today) |
| `docs/agents/capabilities.md` | **New.** The toolchain checks, the library skills to load, and the servers the capability check must prove |
| `docs/STATUS.md` | A seed: "No active work. Start with interview-me." |

An example `capabilities.md`, from the current hand-written `AGENTS.md`:

```markdown
# Capabilities this repo needs

## Toolchain
- `bun --version` reports 1.4.4 or later.

## Library skills
Load the library's skills before you write code that uses it.
| Library             | Skills               |
|---------------------|----------------------|
| @acme/design-system | acme-design-system:* |
| @tanstack/*         | tanstack-*:*         |

## Servers
| Server             | Prove with                  | Needed for            |
|--------------------|-----------------------------|-----------------------|
| design-system docs | one real read-only call     | any design-system fact |
```

### The install process

1. **Install the plugin** on each host (unchanged). This brings the skills, commands,
   agents, plain talk, the protocol, and on Claude Code the `SessionStart` hook.
2. **Run `/setup-brain` once per repo.** It explores, asks only what exploration cannot
   settle (one question per call), shows a dry run, then writes through its one script:
   - It proposes library skills by matching the repo's dependencies (for example
     `package.json`) against the skills installed on this host.
   - It proposes servers from the repo's MCP config (for example `.mcp.json`).
   - It proposes toolchain checks from `engines` or `packageManager`.
   - It writes `workspace.md`, `capabilities.md` and the `STATUS.md` seed, and updates
     `domain.md`.
   - For Codex, it writes the plain-talk and protocol block (global or project scope), as
     it does for plain talk today.
   - When the repo's `AGENTS.md` or `CLAUDE.md` already holds rules the protocol now
     covers, it shows that overlap and asks whether to remove it. It never edits them
     without a yes.
3. **Re-run at any time.** The script is idempotent: one line per file, created, updated,
   unchanged or skipped. `setup-brain --check` reports drift without writing.

---

## Source cache for source-driven-development

### What upstream ships

agent-skills ships `hooks/SDD-CACHE.md`, `sdd-cache-pre.sh` and `sdd-cache-post.sh`, plus a
test. brain vendors all four unchanged and wires none of them. They are opt-in: the user
edits `.claude/settings.json` by hand.

- **Post hook (after `WebFetch`):** stores the result in `.claude/sdd-cache/<sha256(url)>.json`,
  after a `HEAD` request that records the page's `ETag` and `Last-Modified`.
- **Pre hook (before `WebFetch`):** when an entry exists, sends a conditional `HEAD`. On
  `304 Not Modified` it blocks the fetch (exit 2) and returns the cached text as the "error".
  On anything else, the fetch runs.
- **No TTL by design:** a `304` from the origin counts as a fresh check. A page without
  validators is never cached.

### Evaluation

The core idea is sound: freshness comes from the origin's `304`, not from a timer, so the
cache does not weaken the skill's "verify against current docs" rule. The implementation has
problems. The upstream files on `main` (`eb07f19`, 2026-10-28) match brain's vendored copies.

**Reported upstream in issue #295, still open** (PR #294 hardens, PR #501 adds tests;
neither is merged). Corrected 2026-10-29: #501 merged on 2026-09-20 and added
`hooks/sdd-cache-test.sh` on agent-skills `main`, after brain's pin, so brain vendors
three sdd-cache files, not four. #294 is still unmerged.

| Problem | Severity in the issue |
|---|---|
| SSRF: `curl -L` follows any redirect with no scheme or host check, so it can reach cloud metadata endpoints or localhost ports | Critical |
| No maximum age: once a `304` is served, injected content can persist across sessions | High |
| Tamperable cache: predictable file names, default permissions, inside the project tree; a planted entry is trusted | High |

**Found in this review:**

| Problem | Effect |
|---|---|
| Validators are captured *after* the fetch, by a second request | If the page changes between the `GET` and the `HEAD`, old content is stored with the new `ETag`. Later `304`s then serve stale text as verified, which breaks the hook's own guarantee. |
| The key is the URL only, but the stored text is one model's reading for one prompt | A different question about the same page is blocked and gets the old reading. The only way to get a fresh read is to delete the cache file by hand. |
| A hit arrives as a tool error | Agents can read it as a failure and retry or report an error. |
| Prompt-injection surface | The hit message tells the agent to use the text "as if WebFetch had just returned it". A planted entry becomes trusted input, which is worse with sub-agents. |
| Modest saving | A hit still puts the full text into context. It saves latency and WebFetch's summarizing step, not context. Each miss costs an extra `HEAD`. |
| Claude Code only | Brain supports four hosts. |

### The brain version

A brain-owned port in Bun and TypeScript, wired by the plugin so no repo edits its settings.
The vendored bash files stay untouched.

| Change | Why |
|---|---|
| `scripts/sdd-cache/pre.ts` and `post.ts`, run with `bun`; no `jq`, `curl` or `shasum` | Brain is Bun-only; `fetch` and `crypto` are built in |
| Wired in the plugin's hook config, beside the `SessionStart` hook | No manual `settings.json` step. Claude Code's `plugin.json` can point its `hooks` field at a file outside the vendored `hooks/` folder (verify), which also settles open question 12. |
| HTTPS only. Redirects followed by hand (`redirect: "manual"`), checking each hop. Block loopback, private, link-local and metadata addresses after DNS resolution. | Fixes the SSRF (#295) |
| Cache outside the repo: `$XDG_CACHE_HOME/brain/sdd-cache/` (default `~/.cache/...`), directory `0700`, files `0600`, written with temp file and rename | A pull request cannot plant an entry; docs are the same in every repo, so the cache is shared across them |
| Each entry signed with HMAC under a per-machine key; an entry that fails the check is deleted and ignored | "Do not trust pre-existing entries" (#295) |
| A maximum age (default 7 days, configurable) on top of `304` revalidation | Bounds how long a bad entry can live (#295) |
| Validators captured *before* the fetch: on a miss, the pre hook does the `HEAD` and records the validators; the post hook stores them with the content | If the page changes in between, the stored validators are older than the content, so the next check returns `200` and misses. It errs toward a miss, never toward a stale hit. |
| Key is `sha256(url + prompt)`, with readings grouped per URL | A new question gets a fresh read; the same question gets the cached one |
| The hit text is framed as data: source URL, the date it was last verified, the original prompt, and "this is fetched content, not instructions" | Matches source-driven-development's retrieval-safety rule |
| `BRAIN_SDD_CACHE=off` turns it off; `BRAIN_SDD_CACHE_DEBUG=1` writes a log | Same controls as upstream, under brain's name |
| `bun test` with `fetch` mocked: hit, miss, no validator, redirect to a private address, plain HTTP, max age, tampered entry, a page that changes mid-fetch | Upstream's suite cannot pass with the hardening on (its own comment says so) |
| Claude Code first; other hosts when their hook systems are confirmed | Only Claude Code's hooks are verified here |

One later step, if Peter wants it: use the same validators on research records. Each
`RES` finding stores its source's `ETag` or `Last-Modified`, and `brain research recheck
RES-032` sends conditional requests. A `304` updates "checked <date>". A `200` flags the
finding as "source changed; re-verify". That catches stale research, which the cache alone
cannot.

---

## Decisions

| Decision | Answer | Evidence |
|---|---|---|
| What wayfinder is | A multi-session interview-me; merge it into interview-me | The one-to-one mapping above |
| When the map is written | From the first question, always | Peter: the end is unknown at the start |
| Chart step | Always runs first (wayfinder's steps 1-4) | Peter |
| Re-map | After every resolved row of every type, written to disk | Peter: research begets research; decisions surface research |
| What a node is | One question with one kind of answer; size is not part of it | Wayfinder's own docs: "only one of the four ticket types is a decision by itself" |
| Row kinds | Named by how they resolve: decide, research, do. Not "fact" | Peter |
| Research rows | Run in sub-agents whenever they reach the frontier, many times per interview | Peter |
| Delegator's skills | `writing-for-agents`, plus the agent-brief reference (`triage/AGENT-BRIEF.md`, moved to `references/brain/agent-brief.md` by open question 10) read as a reference | Peter; a brief is a document for an agent |
| Researcher's skill | `source-driven-development` | Peter; it covers Matt's `research` rules except one line, which the brief adds |
| Matt's `research` skill | Not ported | The protocol covers its background agent and its file |
| Agent for research rows | A brain `researcher` agent with no Agent tool; Explore only for lookups | Explore cannot write files; no Agent tool prevents nesting |
| Who writes the map | The main session only | Avoids races; fixes mattpocock/skills#530 |
| Session limit | End only between rows, when the context budget is low | context-engineering; wayfinder's limit was a proxy for its ticket size |
| Skills interview-me loads | brain's ask-user-question, domain-modeling, context-engineering | Peter |
| idea-refine's role | Resolves `ideate` rows | Divergence is missing from wayfinder |
| `nodes/` folder | None. Results go straight to `docs/decisions` and `docs/research` | Peter |
| Where the map lives | `docs/ideas/IDEA-NNN-<slug>.md` | Ownership test: an idea outlives any one spec |
| Placement rule | Folders show ownership, links show use | Peter: decisions and research serve many parts of the code |
| Spec folder | `docs/specs/SPEC-NNN-<slug>/` (moved under `docs/` by open question 2) with `spec.md` and `tasks/` | Peter's sketch; per-effort folders match Spec Kit, Kiro, OpenSpec |
| Tasks and tickets | One row format for the map and the plan | Peter |
| Decision files | Every user decision gets a `DEC` file | Peter wanted individual files; MADR "Any Decision Records" |
| ADR vs decision | One prefix; `kind` plus an `adr-test` block | Promotion must not rename a file and break links |
| Task results | `RES` files, `kind: task` | One rule: every resolved row links to a file |
| Superseded decisions | Kept, with `superseded by` | brain-wrap.md's "Superseded" section worked |
| Numbering | Global for IDEA, SPEC, DEC, RES; local for rows and tasks | QA and critique collisions in two repos |
| Who claims a number | The sub-agent, through `new-doc`; the delegator gives the format only | Peter |
| Sub-agent reply | The file path only | Peter: the file is the primary source |
| Link direction | Spec lists `sources:`; the idea's list of specs is generated | Prevents drift |
| Path definitions | One file, `docs/agents/workspace.md`, written by setup-brain | Matt's tracker-doc pattern |
| Checks | In `bun run check` from day one | rjmurillo's validator was never built |
| Generic session rules | Ship with the plugin as an always-on protocol, rendered per host | Peter: no more hand-written `AGENTS.md`; superpowers ships its rules the same way |
| Claude Code channel for the protocol | A plugin `SessionStart` hook, not the output style | A hook survives an output-style change and can inject live state |
| Repo-specific needs | `docs/agents/capabilities.md`, written by `setup-brain` | Keeps brain out of the repo's `CLAUDE.md` and `GEMINI.md` (brain-wrap.md's rule) |
| The repo's own `AGENTS.md` | Stack, commands and boundaries only | agent-skills and `context-engineering`: a short rules file |
| `docs/STATUS.md` | Kept as the task-end handoff. Refined by open question 13: `brain status` prints a five-line report, which `STATUS.md` feeds; `--json` and the `SessionStart` hook carry the full `STATUS.md` text | Peter's existing practice |
| Source cache | A hardened brain-owned port of agent-skills' sdd-cache in Bun, wired by the plugin; the vendored bash stays unwired | Upstream issue #295 is open and its files are unchanged on `main`; four further problems found in review |
| Glossary name | `GLOSSARY.md` and `GLOSSARY-MAP.md`; brain migrates from `CONTEXT.md` and `CONTEXT-MAP.md` | Peter; Matt renamed the same convention upstream (mattpocock/skills PR #1120) |
| Spec folder location (open question 2) | `docs/specs/SPEC-NNN-<slug>/`, not a root `specs/` | Peter, 2026-10-29: every numbered document under `docs/`, one tree for the check and any index |
| `tasks/plan.md` and `tasks/todo.md` (open question 3) | Keep upstream's split. `plan.md` is the index and the only status: overview, links to `DEC` files instead of an Architecture Decisions section, the row table (ID, task, type `task` or `checkpoint`, status, blocked by, result = commit SHA plus the verification command and its outcome), risks, open questions. `todo.md` keeps upstream's per-task blocks (description, acceptance criteria, verification, files likely touched, scope) and checkpoint blocks, with no status line and no Dependencies field; blocked-by lives only in the table. `/build` hands a sub-agent its task's block from `todo.md`. Single writer: the main session updates the table row after the sub-agent reports; the sub-agent ticks only its own block's acceptance boxes and commits its code. `/build auto`'s spec paths and clean-baseline list move to `docs/specs/SPEC-NNN-<slug>/` | Peter, 2026-10-29 (option 3, refined) |
| Unique titles (open question 4) | Every H1 opens with an ID: a numbered file with its own (`# DEC-031: <title>`), a fixed file in a spec folder with its spec's (`# SPEC-012 plan: <title>`). File names stay plain. `spec.md`, `tasks/plan.md` and `tasks/todo.md` also carry frontmatter `spec: SPEC-012`. The workspace check verifies that the H1 prefix and the `spec:` field both match the folder's ID, which catches a file copied from another spec with its old ID still in it | Peter, 2026-10-29 (option 1, plus the `spec:` field) |
| Retiring wayfinder (open question 5) | Delete now, with no pointer skill. This branch removes `skills/wayfinder`, its `upstream.json` seed entry and its lock entries; removes the "Wayfinding operations" sections from setup-brain's tracker templates; removes every wayfinder mention in `using-brain`, `README.md` and brain's specs. `CHANGELOG.md` history stays as written. A changeset marked breaking (a minor bump under 0.x, 0.8.0 to 0.9.0): "wayfinder is removed. Its job moved into interview-me, which now keeps a multi-session map in docs/ideas/. Maps on an issue tracker are not migrated." `lifecycle:check` fails on any wayfinder mention outside `CHANGELOG.md` and history, the same way it guards `CONTEXT.md` | Peter, 2026-10-29 |
| Migrating brain's history (open question 6) | A migrate mode in setup-brain's write script, for repos on brain 0.8. It detects `CONTEXT.md` / `CONTEXT-MAP.md`; `DEC`/`RES` files without frontmatter; `0001-<slug>.md` ADRs; `SPEC.md`, `spec/`, `tasks/plan.md`, `tasks/todo.md`; `docs/intent/*.md`; `docs/agents/issue-tracker.md`. It moves with `git mv` only, never deletes, never rewrites a body (adds frontmatter only), shows a dry run, and writes one commit. The skill asks, one question per call, what a script cannot decide: which plan belongs to which spec, which intent docs become ideas. `workspace.md` records `layout: 2`; a re-run and `--check` use it. Until a repo migrates, a skill that finds no `workspace.md` tells the user once to run setup-brain (this generalizes the `CONTEXT.md` fallback). Test: a fixture repo in the 0.8 layout, migrated, passes `bun run check`; an eval beside `evals/setup/fresh-repo`. Brain is its first user: the check slice runs the migration on brain's seven `DEC`/`RES` files (frontmatter only, bodies untouched). Moving `spec/` and `tasks/done/` stays the last slice, in a separate PR, through the same migration, after a second ask | Peter, 2026-10-29 (option 1's outcome, produced by setup-brain) |
| Committing `docs/ideas/` (open question 7) | Committed, like decisions and research. Number claims live in git's own folder, never in `docs/` (see "Running brain's scripts") | Peter, 2026-10-29: any clone resumes an interview |
| `idea-refine` (open question 8, vendored) | Seeded: it leaves the agent-skills take list for the seed list, and brain owns it. A standalone run saves through `brain new-doc IDEA <slug>` and fills the IDEA template from the one-pager: Problem Statement, Recommended Direction and MVP Scope go to Destination; Key Assumptions to Validate become research rows in the map; Open Questions become rows if sharp, "Not yet specified" if not; Not Doing goes to Out of scope. Intent stays unconfirmed until interview-me gets an explicit yes, and interview-me can resume from that file later. Inside an interview, an `ideate` row resolves to a `DEC` file (the chosen direction, the other variations as considered options). Its sharpening questions go through ask-user-question, one per call. `scripts/idea-refine.sh` is dropped; new-doc creates the folder. Every `docs/ideas/[idea-name].md` mention in `examples.md` and `frameworks.md` is fixed too | Peter, 2026-10-29 |
| `documentation-and-adrs` (open question 8, vendored) | Left as vendored, plus one rule and one eval. Rule: every numbered file (IDEA, SPEC, DEC, RES) is created only through `brain new-doc`; `docs/agents/workspace.md` and the brain protocol both state it. When documentation-and-adrs is asked for an ADR, the agent runs `brain new-doc DEC <slug>`, sets `kind: architecture` with the `adr-test` block, and uses the skill's Context / Decision / Alternatives / Consequences guidance for the body only. Eval: in a fresh brain repo with no `DEC` files, "write an ADR for <decision>" produces a `DEC-NNN` file with `kind: architecture` that passes `bun run check` | Peter, 2026-10-29 |
| `agents/code-reviewer.md` and `context-engineering` (open question 8, vendored) | Left; neither needs a change. `code-reviewer.md` holds the prose "spec/task", not a path; `context-engineering` names no spec, tasks or glossary path | Checked 2026-10-29 against the files, which match the lock |
| `sync --check` in the gate (open question 8) | `bun run check` runs `bun run sync -- --check`. A brain-owned file inside a vendored folder (`agents/`, `hooks/`, `references/brain/`) passes `--check`, which flags extra files only inside `skills/<name>/`. A pin-bump `bun run sync` keeps such files: `applyUpstream` deletes only lock-listed files that upstream dropped and never replaces a folder, and `findCollisions` stops the sync before any write if upstream adds a file at a brain-owned path. A new test proves that a brain-owned file in `agents/` and in `hooks/` survives a sync run. This settles the doc's question about `agents/researcher.md` and `hooks/hooks.json`: the check passes them | Peter, 2026-10-29; `scripts/sync/lib/apply.ts`, `plan.ts`, `check.ts` read 2026-10-29 |
| domain-modeling's decision format (open question 9) | `ADR-FORMAT.md` becomes `DEC-FORMAT.md`; "offer ADRs sparingly" becomes "record every decision; the three tests set the kind"; the description drops "ADR"; the line "a repo that already keeps its ADRs in another folder keeps using that folder" goes. For this release, the migrate mode offers, one question per repo, to `git mv` an existing ADR folder (`docs/adr/`, adr-tools and similar) into `docs/decisions/` as `DEC` files with `kind: architecture`. Declined: the old folder stays as read-only history that `domain.md` points to, and new decisions still go to `DEC` files. new-doc and the workspace check read every folder path (decisions, research, ideas, specs) from `docs/agents/workspace.md`, with this doc's paths as defaults; neither hard-codes a path, so honouring a team's folder stays a one-line setting later | Peter, 2026-10-29 |
| `docs/agents/issue-tracker.md` and triage (open question 10) | Retire triage too, the same way as wayfinder. First move `skills/triage/AGENT-BRIEF.md` to `references/brain/agent-brief.md`, and point the research-brief section and interview-me at the new path. Delete `skills/triage`, its `upstream.json` seed entry and its lock entries. setup-brain stops writing `docs/agents/issue-tracker.md` and `triage-labels.md`; their writer code, test, eval grader and scaffold lines go, setup-brain loses its tracker question, and `workspace.md` gets no tracker section. The migrate mode removes an existing `issue-tracker.md` and `triage-labels.md` only with the user's yes (a yes-gated exception to "never deletes"). Remove triage from `using-brain` (tree, on-ramps, quick reference), `README.md` and brain's specs; `lifecycle:check` fails on stray mentions, like wayfinder. The breaking changeset adds: "triage is removed; re-seed it from mattpocock/skills if you need it." | Peter, 2026-10-29; acmelabs-15/brain has no issues and no outside PRs |
| `brain status` off Claude Code (open question 13) | One script, three entry points: the Claude Code `SessionStart` hook; a status command (`/brain:status`, Gemini `/status`, the skill by name on Codex and Antigravity). The script is read-only: it never writes `docs/STATUS.md`, the map or the plan. Default output is the five-line report (phase, last completed step, next step, red, decisions waiting on the user); `--json` gives the same data for the hook and tools. When it cannot run (no bun, no plugin path), the protocol's fallback is to read `docs/STATUS.md` and the active map by hand and say the frontier was computed by eye. Tests on fixture repos: an idea in define with a known frontier; a spec mid-build; no active work; a 0.8-layout repo, which reports "run setup-brain to migrate". Open question 13's "read the files" is now the fallback only | Peter, 2026-10-29 |
| Anti-rationalization rules (open question 14) | The 1% rule and the excuse list go into `using-brain`'s Skill Rule 1, not the always-on protocol, which keeps its one soft sentence. The wording is ported from Peter's hand-written `AGENTS.md`: "If a task matches a skill, you MUST invoke it", "even a 1% chance", and the rejected thoughts ("This is too small for a skill", "I can just quickly implement this", "I'll gather context first"). Two evals measure it. Skipped skill: a small task that matches a skill whose description does not obviously fit (a one-line framework change that needs source-driven-development); the skill must load. Over-loading: a plain question with no matching skill ("what does this function return?"); no lifecycle skill may load. If the second eval fails on a native-routing host, the wording is softened | Peter, 2026-10-29 |
| Overlap with a hand-written `AGENTS.md` (open question 15) | Covered sections. setup-brain maps each `AGENTS.md` heading to the protocol section that covers it or to `capabilities.md`; the dry run shows each covered section beside its replacement; one multi-select question picks the sections to remove; repo facts move to `capabilities.md` first; overlap in `CLAUDE.md` is reported, never edited. Guards: the dry run flags every line in a picked section that is neither covered nor moved, and those orphan lines stay in `AGENTS.md` as a trimmed section; when git history shows other authors, the question says teammates without brain read this file and recommends report-only; the `AGENTS.md` change is its own commit. Test fixture: a copy of `/Users/peterkloss/Dev/resume/AGENTS.md` at `ac74fb5`. After setup-brain, `AGENTS.md` keeps "Write all tooling in Bun and TypeScript" plus any orphan lines; `capabilities.md` holds the `@acmelabs/design-system` skills, the `acme-design-system` docs server and the `bun --version` 1.4.4 check. That file names no tanstack skills in any commit, so the fixture asserts none | Peter, 2026-10-29; fixture file checked 2026-10-29 |
| `brain research recheck` (open question 17) | Later, in its own branch; the recheck command and its tests wait for it. One step in this branch: the `RES` finding format reserves an optional validator per source, `- <claim>. Source: <url>, checked <date>, etag: <value> \| last-modified: <value>`. The research brief tells the sub-agent to fill it when the source cache already holds validators for that URL (a small read-only lookup in the sdd-cache code, for example `brain sdd-cache lookup <url>`), and to leave it out otherwise. The workspace check accepts findings with or without it | Peter, 2026-10-29 |
| Matt's pin and `DESIGN-IT-TWICE.md` (open question 8, vendored) | Bump mattpocock/skills from `c55ee46` to `d81f3a1` (PR #1120's merge commit, whose first parent is the old pin). In brain's taken files it changes one line: "CONTEXT.md vocabulary" becomes "GLOSSARY.md vocabulary". Its own commit inside the glossary-rename slice: run the sync, update the lock, confirm `sync --check` is clean. Then run `sync --report`, compare #1120's changes to the seeded domain-modeling and wait-what against brain's own rename of those files, and fix anything brain's rename missed. Matt's later lines on `main` (`a496f55`: #1341, #1184) wait for their own bump | Peter, 2026-10-29; upstream research checked 2026-10-29 with `gh` |
| The researcher agent on four hosts (open question 11) | A Claude-only researcher whose file sits outside `agents/`. The file holds only its tool policy (`disallowedTools: Agent`, nothing else restricted, so Skill and the search servers stay available) and one line: "Follow the research brief you are given." The research protocol lives only in the brief, which every host receives, so it cannot drift between hosts. `.claude-plugin/plugin.json` lists the researcher plus every vendored `agents/*.md` file (the list replaces Claude Code's `agents/` scan); `lifecycle:check` fails when the list misses one, so an upstream bump that adds an agent fails loudly. Other hosts: Gemini blocks nested agents by design; Antigravity relies on the brief's "start no other agents" line; Codex uses its general-purpose agent and the brief. If nesting shows up on Antigravity, a per-host researcher is rendered later through the plain-talk pipeline with that host's tool names | Peter, 2026-10-29; Claude Code, Gemini CLI, Antigravity and Codex docs checked 2026-10-29 |
| Where the Claude Code hooks live (open question 12) | One Claude-only hook file outside `hooks/`, next to its scripts, named once in `.claude-plugin/plugin.json`'s `hooks` field. It holds the `SessionStart` hook and, later, the source-cache hooks. No `hooks/hooks.json`. `lifecycle:check` fails if `hooks/hooks.json` or a root `hooks.json` exists, so an upstream bump that adds one cannot make Codex (trust prompt, public-directory bar) or Gemini (other event names) load hooks. When another host gets hooks, it gets its own file through its own manifest, rendered from one source the way plain talk is. Constraints from the docs: `SessionStart` text is capped at 10,000 characters per string, so the protocol plus `brain status` must fit; a `PreToolUse` hook cannot return a result in place of the tool, so a cache hit reaches the model as a denied call with the cached text as the reason | Peter, 2026-10-29; https://code.claude.com/docs/en/plugins/manifest-reference#hooks ("Loaded together with `hooks/hooks.json`"), Codex and Gemini hook docs, checked 2026-10-29 |
| Source cache on or off (open question 16) | On by default if a hit eval passes, opt-in if it fails; `BRAIN_SDD_CACHE=off` turns it off either way. The eval passes only if the agent, given a cache hit, does not retry the fetch, does not report an error or failure to the user, and uses the cached text citing the source URL with its "verified via 304 on <date>", on at least two models, one of them smaller. The debug log records local hit and miss counts, to judge later whether the cache earns its extra `HEAD` per miss. Brain's Bun tests port the 15 cases of upstream PR #501 | Peter, 2026-10-29; upstream state checked 2026-10-29 with `gh`: #295 open, #294 unmerged, #501 merged |
| Source cache maximum age (open question 16) | 7 days by default, configurable with `BRAIN_SDD_CACHE_MAX_AGE`. The maximum age mainly bounds a weak cached reading, not only a wrong 304; signing already covers planted entries. The hit/miss log records each hit's entry age; if nearly all hits come from entries under a day old, the extra six days add risk without saving fetches, and the default drops to 1 day. `brain sdd-cache clear [url]` deletes one entry, or all, for a cached reading that turned out poor; the hit message's framing mentions it, so the agent can tell the user how to force a fresh read | Peter, 2026-10-29; upstream PR #294 uses 1 day |
| Spec scope and delivery | Two new modules in `spec/CAPABILITY-MAP.md` and `spec/README.md`: `workspace` (`spec/SPEC-workspace.md`) and `source-cache` (`spec/SPEC-source-cache.md`), source-cache depending on nothing. The glossary rename, with Matt's pin bump, lands first as its own small PR from the workspace plan's first slice, so later diffs carry no rename noise. The workspace work stays on `feat/workspace-layout`. The source cache gets its own branch, `feat/source-cache`, and its own plan, after the workspace branch or in parallel. Whichever lands first creates the Claude-only hook file; the other adds its entries. The research brief's validator lookup works without the cache | Peter, 2026-10-29 |
| Running brain's scripts | One CLI by plugin path: `scripts/brain.ts` with subcommands `new-doc`, `check`, `status`. Skills, the protocol and briefs write `brain <subcommand>`; `docs/agents/workspace.md` defines it once: "`brain <cmd>` means running `scripts/brain.ts` from the brain plugin with bun; on Claude Code that is `${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts`, elsewhere resolve the plugin folder as setup-brain does". Brain's own `package.json` maps `bun run new-doc` and `status` to it; `check` is already brain's gate, so the gate runs `brain check` as one of its steps, through `bun run workspace:check` (named at spec review, 2026-10-29). In a user repo, the protocol's task-end step runs `brain check`, and `brain status` shows its failures as red; nothing is written into the user's `package.json`. new-doc claims numbers under `$(git rev-parse --git-common-dir)/brain/ids/<TYPE>/`, not `docs/<folder>/.ids/`: nothing to add to a user's `.gitignore`, and claims stay unique across worktrees on one machine; outside a git repo it falls back to a folder in the user's cache directory. setup-brain checks for bun first and says plainly that brain needs it. The doc now writes `brain new-doc` (and `brain sdd-cache`) wherever it meant a user repo | Peter, 2026-10-29 |
| Test seams for the workspace module | New: the CLI seam. Each test spawns `bun scripts/brain.ts` against a temp git repo and asserts the exit code, the output and the files. Tests build those repos from shared fixture folders (an idea mid-define with a known frontier, a spec mid-build, no active work, a 0.8-layout repo), reused by the check, status and migrate tests. The parallel-claim test starts about 20 `brain new-doc` processes at once, repeats the run several times, and asserts every number is unique and no number is skipped without a failed claim. Existing seams for the rest: render (`scripts/plain-talk/__tests__/render.test.ts`), lifecycle (`check-refs.test.ts`), setup writer (`write.test.ts`), evals (`evals/`). A function seam for the map-row parser comes later, only if its edge cases grow large | Peter, 2026-10-29 |
| brain's own glossary | brain gets its own `GLOSSARY.md`, written with domain-modeling in the glossary-rename slice. It defines the terms this design introduces: idea, effort, destination, map, row, decide / research / do rows, frontier, fog, claim, decision record (`DEC`), research record (`RES`), workspace, protocol. `SPEC-workspace.md` names it in its scope and success criteria | Peter, spec review 2026-10-29 |
| `from` in migrated files | `from` is required for new `DEC` and `RES` files. A file the migrate mode gave frontmatter carries `migrated: 0.8` instead, and the workspace check accepts a missing `from` only with that marker. `evidence` is optional for all files. T13 writes the marker on brain's seven files | Peter, plan review 2026-10-29 |
| The old-glossary fallback's end | The fallback ships in 0.9.0 (the rename) and 0.10.0 (the workspace work). From 0.11.0, `lifecycle:check` fails while the fallback sentence is still in `PLAIN-TALK.md` or the `domain.md` template. Plan task T40 removes the sentence and that check in the release that ships 0.11.0 | Peter, PR 13 review 2026-10-29: a 0.10.0 cutoff would fail the workspace release's Version Packages PR, and no task removed the fallback |

## Rejected options

| Option | Why rejected |
|---|---|
| Effort folders under `specs/` holding the whole lifecycle | Peter did not like it; ideas, decisions and research are not owned by one spec |
| A `nodes/` folder per idea | Duplicates `docs/decisions` and `docs/research` |
| Small decisions inline in the map's Result cell | Peter wants individual files the map points to |
| `ADR-NNN` and `DEC-NNN` side by side | Promoting a decision would rename the file and break links |
| The delegator creates the sub-agent's stub | A stub that exists even when the agent never started proves nothing |
| The delegator assigns the number | Peter's call: the sub-agent claims it atomically instead |
| Switching to "map mode" only when an interview grows | The end is unknown at the start |
| One ticket per session | A proxy for wayfinder's ticket size; wastes sessions on short decisions |
| Issue-tracker storage for the map | Peter does not like the convention; Matt's docs call repo storage "not recommended" but list local markdown as supported |
| Global numbers for every type | Collides under load |
| Root `SPEC.md` and `tasks/` singletons | Only one effort at a time; the spec is cut off from its history |
| Porting Matt's `research` skill | Its three rules are covered by this protocol and `source-driven-development` |
| Explore for research rows | No Write or Edit tool; reads excerpts, not whole sources |
| Loading the `triage` skill to write briefs | Starts a tracker workflow; only its `AGENT-BRIEF.md` reference is needed |
| A managed brain block in the repo's `AGENTS.md` (Matt's pattern) | Breaks brain's rule against writing `CLAUDE.md`/`GEMINI.md`, and repo facts fit in `docs/agents/` |
| Listing every brain skill to load at session start | Costs context every session and duplicates `using-brain`'s routing |
| The protocol inside the Claude output style | Disappears when the user picks another output style |
| Wiring upstream's sdd-cache bash as is | SSRF, no maximum age, tamperable entries (#295), plus the validator race and the URL-only key |
| Waiting for upstream PR #294 | Unmerged; it still leaves the validator race and the prompt trap, and the files stay bash with `jq` and `curl` |

---

## Open questions

The build agent puts each to Peter, one per call, with a recommendation.

Status 2026-10-29: questions 1 to 17 are answered; each answer is a row in the Decisions
table. Question 18 is open and not part of this build.

1. **Glossary name.** Settled: `GLOSSARY.md`. Brain migrates from `CONTEXT.md`; see
   [Glossary rename](#glossary-rename-contextmd-to-glossarymd).
2. **`specs/` at the root or `docs/specs/`.** If Brain indexes only `docs/`, specs at the
   root fall outside Brain's graph. Peter's older system used `docs/specs/`.
3. **`tasks/todo.md`.** If `plan.md` carries a status on every row, `todo.md` repeats it.
   Options: keep it, generate it from `plan.md`, or drop it. Recommend: generate.
4. **Unique titles.** If these files are Brain notes that need titles unique across the
   repo, titles may need a parent ID. Recommend: rely on IDs, which are already unique.
5. **Retiring wayfinder.** Delete it and drop it from `upstream.json`'s seed list, or keep
   `/wayfinder` as a thin pointer to interview-me. Recommend: a thin pointer for one
   release, then delete.
6. **Migrating brain's own history** (`spec/SPEC-*.md`, `tasks/done/*`,
   `docs/intent/brain-wrap.md`). Now, later, or never. Recommend: last slice, separate PR.
7. **Committing `docs/ideas/`.** Assumed yes: the decision trail is the point.
8. **Vendored files** (next section): seed each one or edit it in place.
9. **`domain-modeling`'s ADR format** writes `docs/decisions/0001-<slug>.md`. It must change
   to `DEC-NNN-<slug>.md` with the frontmatter above.
10. **`docs/agents/issue-tracker.md`.** Peter wants it removed. With wayfinder retired, its
    only remaining reader is `triage`, which needs the tracker commands, the PR flag and
    the label mapping. `setup-brain`'s `scripts/setup/write.ts`, its test, and the eval
    `evals/setup/fresh-repo/graders/issue-tracker-md.md` also depend on it. Options:
    - Keep `triage`, and fold the tracker section into `workspace.md` (one config file).
      **Recommend this** if Peter still triages incoming issues.
    - Retire `triage` as well, and delete the file, its writer, its test and its grader.
11. **The `researcher` agent on other hosts.** Claude Code supports custom agent
    definitions with a tool allowlist. On hosts that do not, the general-purpose fallback
    relies on the brief's "do not start other agents" line.
12. **The `SessionStart` hook.** `hooks/` is a vendored folder (a `take` from agent-skills),
    and agent-skills' own `session-start.sh` is deliberately not wired on Claude Code.
    Check how `sync` treats a brain-owned `hooks/hooks.json` before adding it.
13. **`brain status` on hosts other than Claude Code.** Settled 2026-10-29 (see Decisions):
    a status command on every host runs the same script; reading the files by hand is the
    fallback only, when the script cannot run.
14. **The anti-rationalization rules** ("even a 1% chance a skill applies"). They come from
    superpowers' style. On a host that routes skills natively they may cause too many skill
    loads. Keep, soften, or drop.
15. **Existing repos.** When `setup-brain` finds a hand-written `AGENTS.md` like the current
    one, how much should it offer to remove: only exact overlaps, or every section the
    protocol covers?
16. **Source cache defaults.** On by default, or opt-in like upstream? The maximum age
    (recommend 7 days)? Recommend on by default, since the hardened version is safe to
    leave on and saves a manual step.
17. **Research recheck.** Build `brain research recheck` (validators on `RES` findings) now,
    or later?
18. **Brain in a shared team repo.** Added by Peter on 2026-10-29; not decided now. When
    teammates do not use brain and the repo already has its own ADR folder, spec format or
    docs layout, should brain write into the team's conventions instead of its own?

---

## Changes to brain

### Vendored files

`brain-wrap.md` says brain never edits a vendored file. **Peter reports that practice has
drifted.** One likely cause: `bun run check` does not run `bun run sync -- --check`, so
drift from `upstream.lock.json` goes unnoticed.

Files this work touches that sit under a `take` entry in `upstream.json`:

| File | Needed change | Options |
|---|---|---|
| `skills/idea-refine/` (+ `scripts/idea-refine.sh`) | Its output path `docs/ideas/[idea-name].md` conflicts with `IDEA-NNN-<slug>.md` | Steer it from interview-me (the skill already allows "a location of their choosing"); or seed it |
| `skills/context-engineering/` | None; interview-me only loads it | Leave |
| `skills/documentation-and-adrs/` | Uses an `ADR-001` template in `docs/decisions/` | Leave; domain-modeling is the writer on the interview path |
| `agents/code-reviewer.md` | One hard-coded spec or tasks path | Leave and rely on workspace.md; or seed it |

For each, the agent checks `upstream.lock.json` and the current state of the file, then
asks Peter: **seed it** (`bun run sync -- --seed`, brain owns it, `sync --report` tracks
upstream changes) or **edit in place** and update the lock. It also asks whether to add
`sync --check` to `bun run check`.

### Brain-owned files to change

Seeded or brain's own, so they can be edited:

- **Commands:** `commands/build.toml`, `commands/planning.toml`, `commands/spec.toml`, and
  `.claude/commands/build.md`, `plan.md`, `spec.md`.
- **Skills that hard-code paths:**
  - `spec-driven-development` (7 references)
  - `planning-and-task-breakdown` (11)
  - `incremental-implementation` (2)
  - `code-review-and-quality` (3)
  - `test-driven-development` (1)
  - `triage` (1)
  - `using-brain` (3)
- **Rewritten:** `interview-me` (the merged skill above).
- **Retired:** `wayfinder` (open question 5).
- **domain-modeling:** `GLOSSARY.md` and `GLOSSARY-FORMAT.md` (see Glossary rename), and
  the DEC format replacing `0001-<slug>.md`.
- **setup-brain:** writes `docs/agents/workspace.md`. Stops writing
  `docs/agents/issue-tracker.md`, or folds it into `workspace.md` (open question 10). The
  "Wayfinding operations" sections in `issue-tracker-local.md`, `-github.md` and
  `-gitlab.md` go away.
- **New agent:** `agents/researcher.md`, after checking how `sync` treats a brain-owned
  file in the vendored `agents/` folder.
- **Other:** `AGENTS.md`; the evals `evals/lifecycle/build-clean-context/` and
  `evals/lifecycle/plan-three-questions/`, which assert the old paths.
- **New scripts:** `scripts/new-doc/`, a workspace check, and templates for IDEA, DEC, RES
  and spec.

### Glossary rename: `CONTEXT.md` to `GLOSSARY.md`

Brain's glossary moves from `CONTEXT.md` to `GLOSSARY.md`, and the multi-context map moves
from `CONTEXT-MAP.md` to `GLOSSARY-MAP.md`. Matt made the same rename upstream in
mattpocock/skills PR #1120. His changelog tells users to `git mv` an existing `CONTEXT.md`,
because his skills now look only for `GLOSSARY.md`. Following him keeps one name across
both packs.

**Where `CONTEXT.md` appears in brain today:** 40 files, outside history.

| Group | Files |
|---|---|
| Commands | `.claude/commands/{build,plan,review,spec,test}.md`; `commands/{build,planning,review,spec,test}.toml` |
| Plain talk | `plain-talk/PLAIN-TALK.md` and `AGENTS-block.md` (the sources); `output-styles/talk-plain.md`, `rules/talk-plain.md` and `GEMINI.md` (rendered from them) |
| Skills | `code-review-and-quality`, `debugging-and-error-recovery`, `domain-modeling` (and its `CONTEXT-FORMAT.md`), `incremental-implementation`, `interview-me`, `planning-and-task-breakdown`, `setup-brain` (and its `domain.md` template), `spec-driven-development`, `test-driven-development`, `triage`, `using-brain`, `wait-what`, `wayfinder` (being retired) |
| Vendored | `skills/codebase-design/DESIGN-IT-TWICE.md` (a `take` from Matt's pack) |
| Repo docs | `AGENTS.md`, `README.md`, `.codex-plugin/plugin.json` |
| Brain's own specs | `spec/CAPABILITY-MAP.md`, `SPEC-lifecycle.md`, `SPEC-plain-talk.md`, `SPEC-question.md`, `SPEC-setup.md` |
| History | `docs/intent/brain-wrap.md`; files under `tasks/done/` and `docs/research/` |

**How each group changes:**

- **Brain-owned skills and commands:** rename every read and write to `GLOSSARY.md` and
  `GLOSSARY-MAP.md`. In `domain-modeling`, `CONTEXT-FORMAT.md` becomes `GLOSSARY-FORMAT.md`.
- **Plain talk:** edit the two sources, then re-render with `bun run plain-talk:render`.
  Never edit the rendered files by hand.
- **Vendored `codebase-design`:** do not edit it. Bumping Matt's pin past PR #1120 brings
  the new name. The bump brings his other changes too, so review it with `sync --report`.
- **Brain's own specs and `AGENTS.md`:** update them, because they describe the current
  contract.
- **History:** leave `tasks/done/` and `docs/research/` as written; they record what was
  true then. `brain-wrap.md` gets one amendment line ("Glossary renamed to `GLOSSARY.md` on
  <date>, see DEC-NNN") rather than a rewrite. A historical mention of `CONTEXT.md` is
  fine, as long as nearby text makes the switch clear.

**Repos that already have a `CONTEXT.md`:**

- `setup-brain` finds `CONTEXT.md` or `CONTEXT-MAP.md`, offers `git mv` to the new name
  (Matt's approach), and updates `docs/agents/domain.md`. It never renames without a yes.
- For one release (amended: until 0.11.0, see Decisions), a skill that finds no `GLOSSARY.md` but finds `CONTEXT.md` reads it,
  and tells the user once: "This repo still uses `CONTEXT.md`; run setup-brain to rename it
  to `GLOSSARY.md`." The fallback is removed in the release after.

**Guard:** `bun run lifecycle:check` fails on any `CONTEXT.md` or `CONTEXT-MAP.md` in a
brain-owned file, except history, the fallback code, and text that describes the rename.

### `using-brain`

`using-brain` is seeded (brain owns it), so it can be edited. Several of the decisions above
contradict it as written. One rule decides what moves out: **the always-on protocol owns how
a session runs; `using-brain` owns routing and the operating behaviors.** Neither repeats the
other; the protocol points to `using-brain` for routing. agent-skills warns against
preloading the router as always-on text on hosts that route skills natively, so
`using-brain` stays a skill.

| Section | Today | Change |
|---|---|---|
| `description` | Names "the triage and wayfinder on-ramps" | Drop wayfinder. Name the stateful interview, resuming work, and setup-brain as the precondition. |
| Precondition | setup-brain "writes the plain-talk block and the domain docs layout" | It writes `workspace.md`, `capabilities.md`, `domain.md` and the `STATUS.md` seed, plus the Codex protocol block. `setup-brain --check` reports drift. |
| Discovery tree: top | Starts at "first brain skill in this repo?" | Add "Starting or resuming a session?": the protocol's session start, `brain status`. |
| Discovery tree: define | interview-me for "don't know what you want"; wayfinder for "too big for one session" | One branch: interview-me, always stateful, for both. idea-refine stays for "have a concept, need variants", and inside an interview it resolves `ideate` rows. |
| Discovery tree: research | source-driven-development only under "implementing code" | Also the research sub-agent's method for research rows, run by the `researcher` agent. |
| Discovery tree: decisions | "Writing docs/ADRs?" leads to documentation-and-adrs | "Recording a decision?" leads to a `DEC` file through `new-doc` (domain-modeling writes it in an interview). documentation-and-adrs stays for READMEs and API docs. |
| Discovery tree: on-ramps | triage and wayfinder | wayfinder goes. triage stays only if open question 10 keeps it. |
| "The interview" | Stateful in a repo; writes `CONTEXT.md`, ADRs and `docs/intent/` | Rewrite: terms go to `GLOSSARY.md` (replacing `CONTEXT.md`), decisions to `DEC` files; the map in `docs/ideas/IDEA-NNN-<slug>.md`; decide, research and do rows; re-map after every row; single writer; a session ends between rows; resume from the idea's status. With no repo, the map lives in the conversation, and the agent says so. |
| "The prototype detour" | handoff out, prototype, handoff back | A prototype is a row in the map; its pick becomes a `DEC` linking the branch. handoff is needed only when the prototype lives in another directory or harness. |
| "The on-ramps" | A wayfinder paragraph | Delete it. |
| "The vocabulary layer" | `CONTEXT.md` | `GLOSSARY.md`, which replaces `CONTEXT.md` (see Glossary rename). |
| Phase Boundaries | "Keep define through plan in one unbroken window" | Replace: **the files carry the work, not the window.** The map is current after every row, and spec-driven-development writes the spec from the map and the `DEC` and `RES` files. So a session may end between rows or after any completed task, when the context budget is low (context-engineering). The five-move tree stays for build phases. Update `references/brain/phase-boundaries.md` to match. |
| Core Operating Behaviors | Six behaviors | Add **record as you go**: write a `DEC` the moment the user decides, a finding the moment it is confirmed, and the row update right after. Never batch them to the end of a session. |
| Skill Rules | Rule 1: "check for an applicable skill"; rule 4: "when in doubt, start with a spec" | If open question 14 keeps the "even a 1% chance" rule, it lives in rule 1 here, not in the protocol. Rule 4: when what is wanted is unclear, start with interview-me; when it is clear, start with the spec. |
| Lifecycle Sequence | `SPEC.md or spec/`, `tasks/plan.md`; "keep 1 to 4 in one unbroken window"; documentation-and-adrs at step 14 for decisions | New paths: `specs/SPEC-NNN-<slug>/spec.md` and `tasks/`. Drop the window note. Decisions are recorded from step 1 onward. |
| Commands table | Six stages | Add a `status` command (Claude Code `/brain:status`, Gemini `/status`, the skill by name elsewhere). It also answers open question 13: on hosts without a hook, `brain status` is a command the user or the agent runs. |
| Quick Reference | wayfinder row; setup-brain "plain-talk block and domain docs layout"; domain-modeling "record an ADR" | Drop wayfinder. Update setup-brain, interview-me ("stateful map across sessions"), source-driven-development (adds research rows), domain-modeling ("glossary terms and `DEC` files") and documentation-and-adrs ("docs; decisions go to `DEC` files"). |

**One structural improvement.** The skill lists most skills three times: the discovery
tree, the lifecycle sequence and the quick reference. Every rename touches all three, which
is how wayfinder ended up in four places. Keep the tree and the quick reference, fold the
lifecycle sequence into one line per stage, and extend `bun run lifecycle:check` to fail
when `using-brain` names a skill that does not exist or misses one that does.

### Suggested slice order

1. `docs/agents/workspace.md` and the four templates.
2. `brain new-doc`, with a test that starts parallel claims and asserts unique numbers.
3. The workspace check, wired into `bun run check`.
4. Glossary rename (see its section): brain-owned files, plain-talk sources and re-render,
   `setup-brain`'s `git mv` offer, the one-release fallback, the `lifecycle:check` guard,
   and the `brain-wrap.md` amendment. Then `domain-modeling`'s DEC format.
5. The `researcher` agent and the research brief.
6. `interview-me` rewrite: always stateful, chart, loop, re-map, single writer, session
   boundary, resume, delegating research.
7. Retire `wayfinder`; update `setup-brain`; remove or fold `issue-tracker.md`.
8. Path changes across commands, lifecycle skills, `triage`, `AGENTS.md`; the `using-brain`
   changes in its table above, the `status` command, and the `lifecycle:check` extension.
9. The brain protocol: `protocol/PROTOCOL.md`, rendered by the plain-talk pipeline to all
   four hosts; the Claude Code `SessionStart` hook.
10. `brain status`.
11. `setup-brain` install flow: `capabilities.md` detection, `STATUS.md` seed, the Codex
    block extended with the protocol, the overlap report for an existing `AGENTS.md`,
    `--check`, and the migrate mode for repos on brain 0.8 (open question 6). The check
    slice (3) needs the migrate mode's frontmatter step for brain's seven `DEC`/`RES`
    files, so planning orders that step first.
12. Evals, including one that installs brain in a fresh repo and resumes a session from
    `brain status` alone.
13. Source cache: `scripts/sdd-cache/` in Bun with the hardening table above, its tests,
    and its entry in the plugin's hook config.
14. Vendored files, per Peter's answers.
15. Optional, separate PR: migrate brain's own history.
16. Optional: `brain research recheck`.

---

## Prior art

| Source | What it contributed |
|---|---|
| addyosmani/agent-skills | The lifecycle; `interview-me`, `idea-refine`, `context-engineering`'s restartable session boundaries |
| mattpocock/skills (`wayfinder`, `grilling`, `research`, `ask-matt/PHASE-BOUNDARIES.md`) | The map as an index, fog of war, frontier, facts vs decisions, phase-boundary tree |
| github/spec-kit | Per-feature folder holding spec, plan, research and tasks; `--timestamp` against number clashes |
| Kiro | `.kiro/specs/<feature>/` with requirements, design, tasks |
| Fission-AI/OpenSpec | `changes/<change>/`; experimental `initiatives/<slug>/` with direction, questions, decisions |
| BMAD-METHOD | `<initiative>/` folders with typed documents |
| obra/superpowers | Dated files by type: `docs/superpowers/specs/`, `plans/`; a plugin `SessionStart` hook that carries its rules into every session |
| rjmurillo/ai-agents `naming-conventions.md` | Type-prefixed IDs and numbering rules; a warning about unenforced rules |
| MADR | One template for any decision |
| acmelabs-15/skills `docs/` | PLAN as a stateful dependency graph; session provenance; one plan producing many specs |
| `docs/intent/brain-wrap.md` | The Decision / Answer / Evidence table and the Superseded section |
