# Project docs conventions

Where the skills in `~/.claude/skills` save what they produce, how to set a project's convention up
so they inherit it, and what a new project needs on day one. Reached from `~/CLAUDE.md`.

---

## Where skills save what they produce

Ten skills produce a written artifact, and their defaults used to contradict each other — the
collection was split on ADRs alone (`documentation-and-adrs` said `docs/decisions/`,
`domain-modeling` and `improve-codebase-architecture` said `docs/adr/`). Since 2026-08-30 the
installed copies of those skills defer to the project's convention and keep `docs/adr/` only as the
default for a repo with none (`~/.claude/skills/LOCAL-CHANGES.md`). The default is still never the
answer on its own.

**The precedence rule, in order:**

1. **The project's own convention wins.** If the repo has a `CLAUDE.md`/`AGENTS.md` describing
   where docs live, a populated `docs/` tree, or a README in a docs subdirectory holding its rules
   and template — follow it exactly, including the filename pattern and any index that must be
   updated. A skill's default never overrides a documented project convention.
2. **Match what's already there.** No written rule, but the repo already has `docs/decisions/` or
   `ANA-007-…md`? Continue the existing directory, numbering sequence, and filename pattern. Do not
   restart numbering at 001 or introduce a second scheme alongside the first.
3. **Only then** fall back to the skill's default below — and say where you put it.

**Skill defaults (fallback only):**

| Skill | Writes | Default location |
| --- | --- | --- |
| `documentation-and-adrs` | an ADR | `docs/decisions/NNNN-title.md` |
| `domain-modeling` | ADRs, the glossary | the project's ADR directory (`docs/adr/` only with no convention), `CONTEXT.md` at the repo root |
| `research` | findings, source-cited | *unspecified* — "where the repo already keeps such notes" |
| `idea-refine` | a one-pager | `docs/ideas/<idea-name>.md`, **only on confirmation** |
| `interview-me` | captured intent | `docs/intent/<topic>.md`, **only on confirmation** |
| `planning-and-task-breakdown` | plan + task list | `tasks/plan.md`, `tasks/todo.md` |
| `spec-driven-development` | a spec | `docs/`, `specs/`, or `.scratch/` |
| `to-tickets` | one file per ticket | `.scratch/<feature-slug>/issues/<NN>-<slug>.md` |
| `triage` | prior rejections | `.out-of-scope/*.md` |
| `improve-codebase-architecture` | an HTML report | the OS temp dir — **never the repo** |

Three of these need active handling:

- **`research` names no location.** In a repo with a docs convention, tell the research agent
  where to save before dispatching it — it runs in the background and cannot ask.
- **`idea-refine` and `interview-me` save only on confirmation.** Ask; don't write unprompted.
- **`improve-codebase-architecture` writes to `$TMPDIR` deliberately** so nothing lands in the
  repo. Leave it there.

**Reconcile the ADR split per repo.** Pick `docs/decisions/` or `docs/adr/` based on what the repo
already uses, and don't create the second one. If neither exists, `documentation-and-adrs` is the
more thorough skill — follow its `docs/decisions/` and its rule to continue any existing numbering.

### Setting a project's convention up

Writing the convention down beats repeating it: once the project states it, every skill inherits it
through rule 1 and none of this needs restating per invocation. The layout below is proven in
practice and maps onto the skills without adapting either.

**A directory per kind of thing, split by what the document *is*:**

| Directory | Holds | Produced with |
| --- | --- | --- |
| `docs/plan/` | `PRD-NNN` — what we're building and why, at product level; its `## Plans` table lists every plan implementing it. `PLAN-NNN` — one per piece of work larger than a small fix; each **part** carries `> Status: planned \| in progress (session SES-NNN) \| done (session SES-NNN, sha)` | `spec-driven-development`, `planning-and-task-breakdown`, `idea-refine` |
| `docs/decisions/` | `ADR-NNN` — one decision per file, with the alternatives rejected and why | `documentation-and-adrs`, `grill-with-docs` |
| `docs/analysis/` | `ANA-NNN` — what was *found out*, against primary sources or empirically | `research` |

The split is what makes it work: **requirements** (what we must do) stay separate from **decisions**
(what we chose, with alternatives) and from **findings** (what is true). Each cites the others
rather than restating them — a plan cites decisions, a decision cites the analysis that informed it.
That is exactly the boundary the skills already draw, which is why they slot in without adaptation.

A fourth kind, `docs/sessions/` (`SES-NNN`, one per stream of work toward one Goal), is the
**session log** the `session` plugin keeps: the plan's part status line names the session serving
it, the session's `Plan:` line points back, and the PRD's Plans table names the plan — so "work on
PLAN-NNN" is enough for a conversation that starts from nothing — `/brain:plan PLAN-NNN` is the way
in (`planning-and-task-breakdown` § Continuing a plan), and the session skill is the record only. A
**session** carries `in progress | done`, the same words as a plan and a plan part. `session init` (the plugin's
tool) scaffolds `docs/sessions/README.md` and nothing else: the PLAN and PRD shapes are the plan
skills' (`planning-and-task-breakdown`, `spec-driven-development`), and `CONTEXT.md` is
`domain-modeling`'s — the record's own words are defined in the plugin (brain ADR-004), and the
session skill reads a repo's `CONTEXT-MAP.md` and `CONTEXT.md` to write its entries in that repo's
words.

Two `Status:` vocabularies exist and belong to different artefacts; keep them apart. A **plan part**
carries `planned | in progress (session SES-NNN) | done (session SES-NNN, sha)` — the session log's
words, read by the `session` plugin. A **ticket** (`to-tickets`, `issue-tracker.md`) carries the
triage roles `needs-triage | needs-info | ready-for-agent | ready-for-human | wontfix` — who acts
next, not how far the work is. An ADR carries `Accepted | Superseded | Deprecated`. A status word
from one artefact on another is a defect, not a synonym.

Where a plan lives is decided once per repo: a repo with `docs/plan/` keeps `PLAN-NNN-<feature>.md`
there and passes that path to `/build`; `tasks/plan.md` plus `tasks/todo.md` is the fallback for a
repo with no `docs/` convention, and `/build auto` looks there only. The six skill and command
files that name `tasks/plan.md` are stating that fallback, not a second convention.

**Name every file `<TYPE>-<NNN>-<kebab-title>.md`**, numbered sequentially, never renumbered. A
stable topic in the name, not a date.

**Give each directory a `README.md`** carrying three things: its **rules**, an **index table** of
what's in it, and the **template** for a new entry. The README is the pointer rule 1 fires on, so
it does the work that would otherwise be re-explained every session.

**Name the skill in the README.** A line like *"Produced with the `documentation-and-adrs` skill,
template below"* — or for a background agent, *"the `research` skill; tell it to save here"* —
closes the loop, so the convention and the skill each know about the other.

**Root `CLAUDE.md` gets a rehydrate section**: the order to read things in at session start, and
what to extract from each. Keep it under ~200 lines; it loads every turn.

**Nested `CLAUDE.md` only where a directory has something unwritten.** They load lazily when files
in that directory are read, and are concatenated after the root rather than replacing it. Write one
only when at least one holds:

- an unwritten convention the code does not confess
- a gotcha that has actually bitten someone there
- a branching pointer (which template, ADR, or driver applies to which task)
- a blast radius that needs framing before the first edit

A file at `src/` covers everything beneath it, so weak directories fold into their parent instead of
getting their own. Nested files never restate the root or each other. For facts that belong to a
*file type* rather than a directory, `.claude/rules/*.md` with a `paths:` glob list loads on any
matching file, at any depth.

Adopt this incrementally — a directory and its README when the second artifact of that kind
appears, not scaffolded up front for a project that has one ADR.

**Templates already live in the skills — use those, don't rewrite them.** `documentation-and-adrs`
carries the ADR template, `domain-modeling` has `ADR-FORMAT.md` and `CONTEXT-FORMAT.md`,
`spec-driven-development` the spec, `planning-and-task-breakdown` the task shape, `to-tickets` the
ticket, `triage` the agent brief. Copy from the skill, then keep the project's filled-in copy in the
directory README so the next run matches it.

Two templates nothing provides, needed by the layout above:

**Directory README** — the file rule 1 fires on. One per docs subdirectory:

```markdown
# <Name> — <what this directory holds, in four or five words>

<One paragraph: what belongs here, and the line separating it from its siblings —
what we decided vs. what we found out vs. what we must build.>

## Index

| Doc | What it covers | Status |
| --- | --- | --- |
| [<TYPE>-001-<slug>.md](<TYPE>-001-<slug>.md) | <the question it answers, or the decision it records> | current |

## Rules

- **One <thing> per file**, `<TYPE>-NNN-<kebab-title>.md`, numbered sequentially, never renumbered.
- **<The invariant that matters here>** — e.g. decisions are settled, supersede rather than edit;
  findings cite a primary source per claim.
- **Produced with** the `<skill-name>` skill (template below).

## Template

<the filled-in shape a new entry copies>
```

**Analysis note** — `research` cites its sources but templates nothing, so give the agent this shape
when you dispatch it:

```markdown
# <Topic> — analysis

> **Analysis** · YYYY-MM-DD · status: current | superseded by <link>

## Question

<what this set out to establish, in one or two lines>

## Findings

- **<Claim>** — <what is true, stated plainly.> [source](<url-or-path>)

## Refuted

- **<Plausible belief that turned out false>** — <what is actually the case.> [source](<url>)

## Unverifiable

- **<What could not be established>** — <what was tried, and the ceiling hit.>

## Consequences

<the ADR this forced, the requirement it changed, or the work it unblocks — as links>
```

The `Refuted` and `Unverifiable` sections earn their place: without them the same wrong belief comes
back three sessions later and gets re-researched. A claim with no source is marked *unverified*
rather than dropped.

### The shared files, and what they mean

Locations are in the table above; these carry rules beyond their path.

- **`CONTEXT.md`** — the domain glossary, at the repo root. A glossary and *nothing else*: no
  implementation details, no specs, no scratch notes. `domain-modeling` owns it and updates it
  inline as terms resolve; `diagnosing-bugs`, `triage`, `to-spec`, `to-tickets`, and
  `improve-codebase-architecture` all read it for vocabulary. `CONTEXT-MAP.md` appears only in
  multi-context repos, pointing at each context's own `CONTEXT.md`.
- **ADRs** — `domain-modeling` offers one only when all three hold: hard to reverse, surprising
  without context, and the result of a genuine trade-off. Miss any one and skip it. Respect
  existing ADRs rather than re-litigating them; `improve-codebase-architecture` may flag a
  candidate that contradicts one, but only when the friction is real enough to warrant reopening
  it.
- **Create lazily.** Every one of these is made when there is first something to put in it, never
  scaffolded ahead of need.

---

## Starting a new project

The skills cover *what goes in* a rules file well — `context-engineering` has a `CLAUDE.md`
template, `spec-driven-development` has one for the spec. What neither states is the **order**, and
that order matters, because most of what a project needs cannot honestly be written on day one.

**Write it in this order, and let each thing wait for the work that earns it:**

1. **A minimal root `CLAUDE.md`, immediately.** Only what is already true and cannot be found by
   looking: the one-line description of what this is, the tech stack, the real commands (build,
   test, lint, dev, typecheck), and the boundaries — the never-do rules and the ask-first rules.
   Ten minutes here saves hours. `/init` drafts one from the codebase; `context-engineering` has
   the template. Either way, cut what the environment already states — a command that is one
   `package.json` lookup away is a cache that will go stale.
2. **`README.md`** for humans. Different audience, different file — don't merge them.
3. **The spec, before the code**, if the project is more than a spike: `spec-driven-development`.
   For a vague idea, `idea-refine` or `grilling` first.
4. **Everything else lazily**, when the thing it holds first exists.

**What waits, and for what:**

| Create | When |
| --- | --- |
| `CONTEXT.md` | the first domain term is worth pinning down — not before; an invented glossary is worse than none |
| `docs/decisions/` + its README | the first decision meets all three ADR tests |
| `docs/analysis/` + its README | the second finding worth keeping (the first can live in the PR) |
| `docs/plan/` | the first piece of work too big for one sitting |
| a nested `CLAUDE.md` | that directory has something unwritten — the four criteria above |
| `tasks/`, `.scratch/` | the skill that owns them runs |

**Do not scaffold empty directories.** An empty `docs/decisions/` with a README and no ADRs is
sediment: it costs context, implies a convention nobody has tested, and invites filler. Every skill
here creates its files lazily; a new project should too.

**Write the boundaries down first, not the conventions.** On day one you know what must never
happen (secrets in tracked files, a dependency added without asking) far more reliably than you know
your own conventions — those emerge from code that exists. Record the boundaries immediately, let
the conventions accrete, and add each one the moment you catch yourself explaining it twice.

**The honest minimum for a brand-new repo** is a root `CLAUDE.md` and a `README.md`. Everything in
the previous section is what a project grows into, not what it starts with.
