# Spec: workspace

Module `workspace` of `CAPABILITY-MAP.md`. Depends on `upstream-sync`, `plain-talk`, `setup`
and `lifecycle`: it changes files those modules own.
Status: approved by Peter on 2026-10-29.

Source of every decision: `docs/intent/workspace-and-stateful-interview.md`. Its intent was
confirmed by Peter on 2026-10-29, and its Decisions table records each answer. This spec
agrees with that table row for row; a later decision changes both in the same commit.

## Objective

brain's define phase keeps its state on disk, in one workspace layout that a repo gets from
`/setup-brain`.

- `interview-me` absorbs `wayfinder`. It is always stateful: it keeps its design tree as a
  map in `docs/ideas/IDEA-NNN-<slug>.md`, across as many sessions as the work needs.
- Every user decision lands in a `DEC` file, every fact in a `RES` file. Each spec lives in
  `docs/specs/SPEC-NNN-<slug>/`.
- One CLI, `brain`, creates every numbered document (`brain new-doc`), checks the workspace
  (`brain check`) and reports the state (`brain status`).
- The session rules ship with the plugin as an always-on protocol, so a repo needs only
  `/setup-brain`, not a hand-written brain section in its `AGENTS.md`.
- brain's glossary moves from `CONTEXT.md` to `GLOSSARY.md`, and `wayfinder` and `triage`
  are removed.

User: Peter first, on Claude Code, Codex CLI, Gemini CLI and Antigravity CLI. Then anyone who
installs brain.

Why now: agent-skills' define phase writes files only when a skill ends, so a long interview
loses its progress between sessions. `wayfinder` keeps state, but it sizes one decision to a
session and keeps the map on an issue tracker.

## Scope by area

Each area's detail lives in the intent doc; this spec does not repeat it.

| Area | What changes | Intent doc section |
|---|---|---|
| Layout and formats | `docs/decisions`, `docs/research`, `docs/ideas`, `docs/specs/SPEC-NNN-<slug>/`; IDEA, DEC, RES, spec, plan and todo templates; IDs in every H1 | Layout; File formats; Decisions rows for questions 2, 3, 4 |
| `brain` CLI | `new-doc` with claims in git's common folder; `check`; `status` (read-only, five lines, `--json`) | Numbering and the new-doc helper; Checks; rows "Running brain's scripts", question 13 |
| interview-me | Rewritten: always stateful, chart, loop, re-map after every row, single writer, session boundary, resume, finding the active effort, delegating research | The stateful interview; Delegating research |
| Research | Researcher agent (Claude only); the brief; `references/brain/agent-brief.md`; the optional validator field | Delegating research; rows for questions 10, 11, 17 |
| Retirements | `wayfinder` and `triage` removed, with guards and a breaking changeset | Rows for questions 5, 10 |
| Vendored files | idea-refine seeded and changed; documentation-and-adrs left, with the new-doc rule and an eval; Matt's pin to `d81f3a1` | Vendored files; rows for question 8 |
| domain-modeling | `GLOSSARY.md`, `GLOSSARY-FORMAT.md`, `DEC-FORMAT.md`; every decision recorded | Glossary rename; row for question 9 |
| Glossary rename | `CONTEXT.md` to `GLOSSARY.md` across brain-owned files; the plain-talk sources re-rendered; the fallback until 0.11.0; the guard; one amendment line in `brain-wrap.md` | Glossary rename |
| Lifecycle skills and commands | Paths read from `workspace.md`; `/build` from a spec folder; `using-brain` per its table, with the 1% rule; `phase-boundaries.md` | `using-brain`; Brain-owned files to change; rows for questions 3, 14 |
| Protocol | `protocol/PROTOCOL.md`, rendered to Gemini, Antigravity and Codex; the Claude-only `SessionStart` hook | Installing brain in a repo; row for question 12 |
| setup-brain | Bun check; `workspace.md`, `capabilities.md`, `STATUS.md` seed; overlap report; `--check`; migrate mode; no tracker | Installing brain in a repo; rows for questions 6, 9, 10, 15 |
| Gate | `bun run check` runs `workspace:check` and `sync --check`; new `lifecycle:check` guards | Checks; rows for questions 5, 8, 11, 12 |
| brain's glossary | A new `GLOSSARY.md` for brain itself, written with domain-modeling in the glossary-rename slice | Peter, spec review 2026-10-29 |
| Parallel work | `brain plan` (waves, critical path, shared files, overlapping phases); checkpoint rows checked by `brain check`; a "Parallel waves" section in every plan from `brain plan`; `max_parallel`; `/build auto`, incremental-implementation and interview-me's research rows run the frontier in parallel, with two evals | Decisions rows from "Parallel work is part of brain" to "Parallel-build evals" (Peter, 2026-10-29) |

## Delivery

- The glossary rename, with Matt's pin bump, lands first, as its own small PR from the plan's
  first slice, so later diffs carry no rename noise.
- The rest of the work stays on `feat/workspace-layout`.
- The source cache is a separate module on its own branch (`SPEC-source-cache.md`).
- Every push and pull request waits for Peter's yes.

## Decided details

The Scope table points to the intent doc. These decided details are named here as well,
because the success criteria test them.

- **brain's glossary.** `GLOSSARY.md` at brain's root, written with domain-modeling. It
  defines the terms this design introduces: idea, effort, destination, map, row, decide /
  research / do rows, frontier, fog, claim, decision record (DEC), research record (RES),
  workspace, protocol. Like every glossary, it holds no implementation detail.
- **`workspace.md`.** It records `layout: 2` and every folder path (decisions, research, ideas,
  specs), with this design's paths as defaults. new-doc, check, status and setup-brain's
  `--check` read them; none hard-codes a path. It also states two rules: `brain <cmd>` (as in
  Commands) and "every numbered file (IDEA, SPEC, DEC, RES) is created only through
  `brain new-doc`". The protocol states the second rule too.
- **Claims.** new-doc claims under `$(git rev-parse --git-common-dir)/brain/ids/<TYPE>/`;
  outside a git repo, under a folder in the user's cache directory.
- **Migrated files.** `from` is required for new `DEC` and `RES` files. A file the migrate
  mode gave frontmatter carries `migrated: 0.8` instead; `brain check` accepts a missing `from`
  only with that marker. `evidence` is optional for all files. A migrated file needs only its
  identity field (`id`, or `spec` in a spec folder); every other field is optional and is
  checked when present, and its body is not checked. The migration fills a DEC's `decided`
  and a RES's `date` (the date only) from the file's first git commit; every other unknown
  field stays absent. When a decisions listing exists (this build adds none), a migrated
  decision without a `kind` appears
  in its own "migrated, not classified" group.
- **Unclassified decisions.** `brain check` prints one informational line, not a failure, when
  migrated decisions have no `kind`: "3 migrated decisions have no kind: DEC-001, DEC-002,
  DEC-005".
- **Sub-agent result files.** A sub-agent writes its result to a file named after its task,
  task ID first (`T10-result.md`), never a name that starts with report, summary, findings or
  analysis, which Claude Code refuses for a sub-agent. A task sub-agent replies with that path
  plus one line: pass or fail, the commit SHA, any question. `workspace.md` states the naming
  rule.
- **Specs produced.** An idea file holds no list of its specs. `brain status` shows each idea's
  specs, computed from every `spec.md`'s `sources:` list.
- **`brain status` output.** Five lines by default: phase, last completed step, next step,
  red items, decisions waiting on the user. `docs/STATUS.md`, the handoff note the agent
  rewrites at task end, feeds the next-step and waiting lines when it names them. `--json`
  carries the same data plus the full `STATUS.md` text, and the `SessionStart` hook injects
  the five lines and that text. On a 0.8-layout repo it reports "run setup-brain to migrate".
  On Claude Code, `/brain:status` is the `status` skill, since a plugin skill is a slash
  command there.
- **Plan and todo.** `/build` hands a sub-agent its task's block from `todo.md`. The sub-agent
  ticks only its own block's acceptance boxes and commits its code; the main session then
  updates the row in `plan.md`.
- **Researcher.** `claude/agents/researcher.md` holds only its tool policy
  (`disallowedTools: Agent`) and one line: "Follow the research brief you are given." The
  research protocol lives only in the brief.
- **Research brief.** It fills a finding's optional validator when `brain sdd-cache lookup
  <url>` returns one, and leaves it out otherwise, including when the source cache is not
  installed.
- **domain-modeling.** The line "a repo that already keeps its ADRs in another folder keeps
  using that folder" goes.
- **Overlap report.** The `AGENTS.md` change is its own commit.
- **Matt's pin.** The bump to `d81f3a1` is its own commit. After it, `bun run sync -- --report`
  is compared with brain's own rename of the seeded domain-modeling and wait-what, and
  anything brain's rename missed is fixed.
- **Changeset.** One changeset marked breaking, a minor bump under 0.x (0.8.0 to 0.9.0):
  "wayfinder is removed. Its job moved into interview-me, which now keeps a multi-session map
  in docs/ideas/. Maps on an issue tracker are not migrated." and "triage is removed; re-seed
  it from mattpocock/skills if you need it."

- **Parallel work.** `brain plan` is read-only and prints, from a plan's rows and todo blocks,
  the waves (each the frontier once the waves above it are done), the critical path, the
  files more than one task in a wave touches, and which phases overlap. A checkpoint row's
  phase is its blockers; it blocks every later task that depends on a task in its phase, and
  nothing else, and `brain check` validates that. planning-and-task-breakdown writes the
  "Parallel waves" section from `brain plan` and rewrites it whenever an edge changes;
  `brain check` fails when it is missing or stale. `/build auto` and incremental-implementation
  start every task on the frontier at once, up to `max_parallel` (default 8,
  `BRAIN_MAX_PARALLEL` overrides), and state a reason before starting fewer; the critical path
  goes first when the cap bites. Each task runs in a worktree from the feature branch's head,
  install first; the main session merges one at a time, runs the gate after each merge, is the
  only writer of plan rows and todo ticks, and tells an in-flight task to rebase when a merge
  changes what it depends on. interview-me starts every research row on the frontier at once,
  up to the cap; on Claude Code with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` research rows may
  run as an agent team, while the build stays on worktree sub-agents.

## Tech Stack

- Bun 1.4.x (1.4.4 installed), TypeScript checked by `tsc --noEmit`, `bun:test`.
- Oxlint 1.83.0 and Oxfmt 0.68.0 over `scripts/` (DEC-001).
- Frontmatter is parsed with Bun's built-in `Bun.YAML.parse`. No new dependency.
- No Node runtime, no Python, no new bash. The vendored bash under `hooks/` stays as it is.

## Commands

```
bun run check                 # the gate; gains `bun run workspace:check` and `bun run sync -- --check`
bun test scripts/workspace    # the new module's tests
bun run new-doc DEC <slug>    # brain's own repo: maps to `bun scripts/brain.ts new-doc`
bun run workspace:check       # brain's own repo: `bun scripts/brain.ts check`
bun run status                # brain's own repo: `bun scripts/brain.ts status`
bun run plain-talk:render     # renders plain talk and the protocol to every host
bun run lifecycle:check       # skill references, plus the new guards
bun run validate              # the host validators
```

In a user repo, skills and briefs write `brain <cmd>`. `docs/agents/workspace.md` defines it
once: "`brain <cmd>` means running `scripts/brain.ts` from the brain plugin with bun." Claude
Code does not set `${CLAUDE_PLUGIN_ROOT}` for Bash commands; it fills it in only inside skill,
command and agent text. So on Claude Code the session-start hook names the resolved path, each
brain skill writes `${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts` in its own text, and a sub-agent
brief carries the resolved path; on the other hosts, resolve the plugin folder as setup-brain
does.

Brain's `package.json` maps `bun run new-doc` and `bun run status` to the CLI. `check` is
already the name of brain's gate, so the gate runs `brain check` as one of its steps, through
`bun run workspace:check`.

## Project Structure

```
GLOSSARY.md                           brain's own glossary (domain-modeling)
scripts/brain.ts                      CLI entry: new-doc | check | status
scripts/workspace/                    layout config, frontmatter, map parser, new-doc, check, status
scripts/workspace/templates/          IDEA.md, DEC.md, RES.md, spec.md, plan.md, todo.md
scripts/workspace/__tests__/          CLI-seam tests
scripts/workspace/__tests__/fixtures/ shared repos: idea mid-define, spec mid-build, no work, 0.8 layout
scripts/hooks/claude-code.json        the Claude-only hook file, named in .claude-plugin/plugin.json
scripts/hooks/session-start.ts        injects the protocol and `brain status --json` output
protocol/PROTOCOL.md                  the brain protocol, one source text
claude/agents/researcher.md           Claude-only researcher, listed in .claude-plugin/plugin.json
references/brain/agent-brief.md       moved from skills/triage/AGENT-BRIEF.md
skills/status/SKILL.md                the status entry point (/brain:status on Claude Code)
commands/status.toml                  Gemini /status
skills/setup-brain/                   templates: workspace.md, capabilities.md, STATUS.md seed, domain.md
docs/specs/                           created by the history slice only; brain's own work stays in spec/ until then
```

Removed: `skills/wayfinder/`, `skills/triage/`, `skills/setup-brain/issue-tracker-*.md`,
`skills/setup-brain/triage-labels.md`, `skills/idea-refine/scripts/idea-refine.sh` (after
idea-refine is seeded).

Choices taken by the build agent, each cheap to change: the folder names above; one `status`
skill instead of a Claude command, because Claude Code shows a plugin skill as
`/brain:status` and a command of the same name would collide; plan rows use the map's
statuses (`open`, `in-progress`, `resolved`, `superseded by NN`), so one parser reads both.

## Code Style

Follow `scripts/setup/write.ts`: small exported functions, `Bun.file` and `Bun.write`, a
change list instead of silent writes, `import.meta.main` for the CLI part.

```ts
/** Write `next` to `full` unless it already holds it. `path` is how the change is reported. */
async function put(input: SetupInput, path: string, full: string, next: string): Promise<Change> {
  const current = await readIfPresent(full);
  if (current === next) {
    return { path, action: "unchanged" };
  }
  if (!input.dryRun) {
    await mkdir(full.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(full, next);
  }
  return { path, action: current === null ? "created" : "updated" };
}
```

- One comment line above an exported function, saying what it does.
- Exit codes: 0 clean, 1 a finding or a failed action, 2 bad usage (as `scripts/sync/sync.ts`).
- Skill text follows writing-for-agents and talk-plain; every question goes through
  ask-user-question.

## Testing Strategy

Seams, confirmed by Peter on 2026-10-29:

| Seam | Covers | Kind |
|---|---|---|
| CLI: spawn `bun scripts/brain.ts` on a temp git repo; assert exit code, output, files | new-doc, check, status | new |
| Render: `scripts/plain-talk/__tests__/render.test.ts` | the protocol's per-host outputs | existing |
| Lifecycle: `scripts/lifecycle/__tests__/check-refs.test.ts` | the new guards | existing |
| Setup writer: `scripts/setup/__tests__/write.test.ts`, temp-dir repos | install and migrate modes | existing |
| Sync: `scripts/sync/__tests__/apply.test.ts` | a brain-owned file in `agents/` and `hooks/` survives a sync | existing |
| Evals: `evals/` | skill behaviour | existing |

- Shared fixture folders build the temp repos: an idea mid-define with a known frontier, a
  spec mid-build, no active work, a 0.8-layout repo. check, status and migrate reuse them.
- The parallel-claim test starts about 20 `brain new-doc` processes at once, repeats the run
  several times, and asserts every number is unique and no number is skipped without a
  failed claim.
- New eval cases, each within SPEC-evals' limit of three model runs per arm:
  `setup/fresh-repo-resume` (install, then a new session reports phase and next step from
  `brain status` alone), `lifecycle/interview-resume` (resume from the idea file alone),
  `lifecycle/adr-is-dec`, `lifecycle/skill-not-skipped`, `lifecycle/no-overload`,
  `setup/migrate-08`. `lifecycle/build-clean-context` and `lifecycle/plan-three-questions`
  move to the new paths; `setup/fresh-repo` and `setup/second-run` lose the tracker files.
- A function seam for the map-row parser comes later, only if its edge cases grow large.

## Boundaries

- **Always:** a failing test first, then the code, then `bun run check` green, then one
  commit per slice with files staged by name. Put each user decision through
  ask-user-question, one per call, and record it in the intent doc's Decisions table. Edit
  `plain-talk/PLAIN-TALK.md` or `protocol/PROTOCOL.md` and re-render; never a rendered file.
- **Ask first:** before any edit to a file under a `take` entry in `upstream.json` (seed it or
  edit it in place); before any push or pull request; before the history slice (moving
  `spec/` and `tasks/done/`); before any change to a repo's `AGENTS.md`; before adding a
  dependency.
- **Never:** edit the vendored bash in `hooks/`; ship `hooks/hooks.json` or a root
  `hooks.json`; let setup-brain write a repo's `CLAUDE.md` or `GEMINI.md`; rewrite the
  bodies of `tasks/done/` or `docs/research/` files; delete a file in a user repo without
  the user's yes.

## User Stories

1. As a user, I want `interview-me` to write its map from the first question, so that I can leave at any row and lose nothing.
2. As a user, I want a new session to resume an interview from the idea file alone, so that I never re-answer a settled question.
3. As a user, I want each decision I make to become a `DEC` file at the moment I make it, so that the reason survives the session.
4. As a user, I want each map row to link to the `DEC` or `RES` file that resolved it, so that the map stays an index and never grows into a store.
5. As a user, I want the frontier computed from the map, so that the next question always has its prerequisites settled.
6. As a user, I want research rows to run in sub-agents in parallel, so that the interview does not wait on lookups.
7. As a user, I want the map re-mapped and written after every resolved row, so that a crash loses at most one row.
8. As a user, I want only the main session to write the idea file, so that parallel sub-agents never corrupt the map.
9. As a user, I want a session to end only between rows, when the context runs low, so that no row is half-resolved.
10. As a user, I want `ideate` rows resolved by idea-refine into a `DEC` with the variations as considered options, so that divergent thinking is kept.
11. As a user, I want a standalone `/idea-refine` run to save an IDEA file that interview-me can resume, so that a one-pager becomes the start of a map.
12. As a research sub-agent, I want to claim my own `RES` number through `brain new-doc`, so that my file's existence proves I started.
13. As a research sub-agent, I want a brief that names the skill I load and the file I write, so that I need nothing from the parent's conversation.
14. As a delegating agent, I want the sub-agent to reply with the file path only, so that the file stays the primary source.
15. As a user on Claude Code, I want the researcher agent to lack the Agent tool, so that research never starts nested agents.
16. As a user on another host, I want the general-purpose agent with the same brief, so that research still runs there.
17. As an agent, I want `brain new-doc` to claim numbers atomically, so that 20 parallel claims never collide.
18. As an agent working in a git worktree, I want claims kept in git's common folder, so that worktrees on one machine never reuse a number.
19. As a maintainer, I want `brain check` to fail on a bad name, a duplicate number, bad frontmatter, an unlinked resolved row, a dangling blocked-by, a missing spec source, a dangling superseded-by, or a wrong H1 or `spec:` field, so that the rules are enforced, not just written.
20. As a maintainer, I want `bun run check` to run the workspace check on brain itself, so that brain follows its own layout.
21. As a maintainer, I want `bun run check` to run `sync --check`, so that an edit to a vendored file fails before commit.
22. As a user, I want a fixed file copied from another spec caught by its old ID, so that a spec folder never carries another spec's plan.
23. As a user, I want `/build` to run from `docs/specs/SPEC-NNN-<slug>/`, so that several efforts can live side by side.
24. As a user, I want `plan.md` to hold the only status and `todo.md` the task blocks, so that status never disagrees with itself.
25. As a user, I want the main session to update the plan row after a sub-agent reports, so that the plan has one writer.
26. As a user, I want every H1 to start with an ID, so that titles stay unique across the repo.
27. As a user, I want `brain status` to print phase, last step, next step, red items and decisions waiting on me in five lines, so that I know where I am at a glance.
28. As a user on Claude Code, I want the protocol and `brain status` injected at session start, clear and compact, so that a session knows its state before my first word.
29. As a user on Gemini, Codex or Antigravity, I want a status command that runs the same script, so that every host reports the same state.
30. As a user, I want `brain status` to be read-only, so that asking for the state never changes it.
31. As a user, I want the protocol carried by the plugin on every host, so that my repo's `AGENTS.md` holds only stack, commands and boundaries.
32. As a user, I want `/setup-brain` to write `workspace.md`, `capabilities.md`, `domain.md` and a `STATUS.md` seed, so that a fresh repo is ready in one run.
33. As a user, I want setup-brain to propose library skills, servers and toolchain checks from my repo's files, so that `capabilities.md` starts correct.
34. As a user, I want setup-brain to check for bun first, so that I learn early that brain needs it.
35. As a user with a hand-written `AGENTS.md`, I want setup-brain to show each covered section beside its replacement and let me pick what to remove, so that I keep control of my file.
36. As a user, I want orphan lines kept in my `AGENTS.md`, so that nothing without a new home is deleted.
37. As a user in a shared repo, I want setup-brain to recommend report-only, so that teammates without brain keep their rules.
38. As a user on brain 0.8, I want a migrate mode that moves my files with `git mv` and only adds frontmatter, so that my history stays intact.
39. As a user, I want the migrate mode to ask what a script cannot decide, one question per call, so that plans and ideas land in the right place.
40. As a user, I want the migrate mode to offer to move an existing ADR folder into `docs/decisions/` as `DEC` files, so that decisions live in one place.
41. As a user, I want a skill that finds no `workspace.md` to tell me once to run setup-brain, so that an old repo still works and I learn the fix.
42. As a user, I want every folder path read from `workspace.md` with defaults, so that a team's own folder can be honoured later by one setting.
43. As a user, I want the glossary named `GLOSSARY.md`, as Matt's skills now expect, so that both packs share one name.
44. As a user with a `CONTEXT.md`, I want setup-brain to offer `git mv` to `GLOSSARY.md`, so that my glossary keeps its history.
45. As a user, I want skills to read `CONTEXT.md` until 0.11.0 when `GLOSSARY.md` is absent, so that the rename does not break my repo mid-work.
46. As a maintainer, I want `lifecycle:check` to fail on a stray `CONTEXT.md` (the old name of `GLOSSARY.md`), wayfinder or triage mention, so that removed names do not creep back.
47. As a maintainer, I want `lifecycle:check` to fail on `hooks/hooks.json` or a root `hooks.json`, so that an upstream bump cannot make Codex or Gemini load hooks.
48. As a maintainer, I want `lifecycle:check` to fail when the Claude manifest's agent list misses an `agents/*.md` file, so that a new upstream agent fails loudly.
49. As a maintainer, I want `lifecycle:check` to fail when `using-brain` names a missing skill or misses an existing one, so that the router never drifts.
50. As a user, I want an ADR request to produce a `DEC` file with `kind: architecture`, so that documentation-and-adrs and the workspace agree.
51. As a user, I want the 1% rule in `using-brain`, measured by two evals, so that skills load when they should and only then.
52. As a user, I want a breaking changeset that says wayfinder and triage are gone and why, so that an upgrade does not surprise me.
53. As a maintainer, I want Matt's pin bumped to `d81f3a1` in its own commit, so that the rename from upstream is reviewable alone.
54. As an agent working on brain, I want brain's own `GLOSSARY.md` to define idea, map, row, frontier and the other new terms, so that every skill and reply uses one word per concept.
55. As a user, I want `brain status` to show which specs each idea produced, so that the idea file never holds a hand-kept list that drifts.
56. As a user, I want `brain plan` to print the waves, the critical path and the files tasks in a wave share, so that I see what can run at once without working it out by hand.
57. As a user, I want `brain check` to catch a checkpoint row that blocks too much or too little, so that a phase review never holds back unrelated work.
58. As a user, I want every plan's "Parallel waves" section written from `brain plan` and checked for staleness, so that it never drifts from the edges.
59. As a user, I want `/build auto` to start every task on the frontier at once, up to my `max_parallel`, so that a build finishes as early as its critical path allows.
60. As a user, I want a stated reason whenever fewer tasks start than could, so that "to be safe" never silently slows a build.
61. As a user, I want each parallel task in a worktree from my feature branch's head, so that no task builds on `main` by mistake.
62. As a user, I want interview-me to start all research rows on the frontier at once, so that an interview waits for the slowest lookup only.

## Out of scope

- The source cache: its own module, `SPEC-source-cache.md`, and its own branch.
- `brain research recheck`; only the optional validator field in `RES` findings is in scope.
- Hooks on Codex, Gemini CLI and Antigravity; a per-host researcher agent.
- Syncing maps to an issue tracker; migrating repos other than brain; editing addy's or
  Matt's upstream repos.
- Writing into a team's own conventions (open question 18).
- Matt's later lines on `main` (#1341, #1184); they wait for their own bump.

## Prior-art tests

- `scripts/setup/__tests__/write.test.ts`: temp-dir repos, dry run, change lists.
- `scripts/sync/__tests__/apply.test.ts` and `check.test.ts`: tree fixtures and the lock.
- `scripts/plain-talk/__tests__/render.test.ts`: templates rendered and compared.
- `scripts/lifecycle/__tests__/check-refs.test.ts`: findings per kind.
- `scripts/sync/__tests__/sync.test.ts`: the spawn style for a CLI.
- `evals/setup/fresh-repo/`, `evals/lifecycle/spec-underspecified/`: eval layout and graders.

## Success Criteria

Each item names how it is verified.

1. `brain new-doc IDEA|DEC|RES|SPEC <slug>` creates the next free number from its template
   and prints the path. SPEC creates `spec.md`, `tasks/plan.md` and `tasks/todo.md`, each
   with `spec:` frontmatter and an H1 that starts with the spec's ID. Test: CLI seam, one
   case per type.
2. Twenty parallel `brain new-doc` processes, run several times, yield unique numbers with no
   gap except a failed claim. Test: CLI seam.
3. `brain check` exits 1 with one finding line for each rule in the intent doc's Checks
   section (a bad name, a duplicate number, frontmatter that does not match its template, a
   resolved row with no existing `DEC` or `RES` link, a blocked-by that names no row in the
   same map, a spec `sources:` entry that does not exist, a superseded-by with no target),
   plus a wrong H1 prefix, a `spec:` field that does not match its folder, and a malformed
   `RES` finding. It exits 0 on the clean fixtures. Test: one fixture per rule.
4. `bun run check` runs `workspace:check` and `sync --check`, and is green on brain. Brain's
   seven `DEC` and `RES` files gain frontmatter through the migrate mode (`migrated: 0.8` in
   place of `from`), with their bodies
   byte-identical below the frontmatter.
5. `brain status` prints the five-line report and `--json` for each fixture, shows the specs
   each idea produced, reports "run setup-brain to migrate" on the 0.8-layout fixture, and
   leaves the tree unchanged. Test: CLI seam, tree hashed before and after.
6. The `SessionStart` hook's output is valid JSON whose `additionalContext` holds the protocol,
   the five-line report and the `STATUS.md` text, under 10,000 characters. Test: spawn the
   hook script on the fixtures.
7. `bun run plain-talk:render -- --check` is green, with the protocol rendered into
   `GEMINI.md`, `rules/` and the Codex block.
8. Glossary rename: no brain-owned file outside history, the fallback (until 0.11.0) and
   rename-describing text names `CONTEXT.md` or `CONTEXT-MAP.md` (the names before `GLOSSARY.md`); `lifecycle:check` fails on
   one. Matt's pin is `d81f3a1`, `sync --check` is clean, and `brain-wrap.md` has one
   amendment line. Test: lifecycle seam.
9. brain's `GLOSSARY.md` exists, follows `GLOSSARY-FORMAT.md`, and defines idea, effort,
   destination, map, row, decide / research / do rows, frontier, fog, claim, decision record
   (DEC), research record (RES), workspace and protocol. Test: a lifecycle check that every
   listed term has an entry.
10. Retirements: `skills/wayfinder` and `skills/triage` are gone, with their seed and lock
    entries; `lifecycle:check` fails on a stray mention outside `CHANGELOG.md` and history; the
    breaking changeset carries both texts. Test: lifecycle seam; `bun run changeset status`.
11. Guards: `lifecycle:check` fails on `hooks/hooks.json` or a root `hooks.json`, on a Claude
    manifest agent list that misses an `agents/*.md` file, and on a `using-brain` that names a
    missing skill or misses one. Test: lifecycle seam.
12. The setup writer's migrate mode, run on the 0.8-layout fixture, produces a repo that passes
    `brain check`. It moves only with `git mv`, deletes nothing without a yes, adds
    frontmatter without changing a body, and writes one commit; `workspace.md` records
    `layout: 2`. Test: setup writer seam.
13. On the `resume/AGENTS.md` fixture (copy at `ac74fb5`), the overlap report keeps "Write all
    tooling in Bun and TypeScript" and the orphan lines, `capabilities.md` holds the
    `@acmelabs/design-system` skills, the `acme-design-system` docs server and the
    `bun --version` 1.4.4 check, and the `AGENTS.md` change is its own commit. Test: setup
    writer seam.
14. A brain-owned file in `agents/` and in `hooks/` survives `bun run sync`. Test: sync seam.
15. These eval cases pass in CI, per SPEC-evals:
    - `lifecycle/interview-resume`: a new session, given only the idea file, takes the next
      frontier row and asks no settled question.
    - `lifecycle/build-clean-context`, moved: `/build` runs a task from
      `docs/specs/SPEC-001-<slug>/` with its block from `todo.md`.
    - `setup/fresh-repo-resume`: after `/setup-brain` in a fresh repo, a new session reports
      its phase and next step, and the repo's `AGENTS.md` holds no brain text.
    - `setup/migrate-08`, `lifecycle/adr-is-dec`, `lifecycle/skill-not-skipped`,
      `lifecycle/no-overload`; and `lifecycle/plan-three-questions`, `setup/fresh-repo` and
      `setup/second-run`, updated.
16. `bun run validate` is green on all four host manifests.
17. `brain plan` prints the waves, the critical path, each wave's shared files and the overlapping phases for the fixtures (linear, wide, with checkpoints), with `--json`, exits 1 on a cycle, and changes no file. Test: CLI seam.
18. `brain check` flags a checkpoint row that misses a dependent task or blocks an unrelated one, and a plan whose "Parallel waves" section is missing or stale. Test: CLI seam, one fixture per finding.
19. `max_parallel` comes from `workspace.md` (default 8), `BRAIN_MAX_PARALLEL` overrides it, and a value below 1 is rejected. Test: CLI seam.
20. Eval `lifecycle/build-parallel` passes in CI: with a frontier five tasks wide, `/build auto` starts five sub-agents, each worktree based on the branch head, and never fewer without a stated reason.
21. Eval `lifecycle/interview-parallel-research` passes in CI: with three research rows on the frontier, interview-me starts all three at once.

### Intent success, line by line

| Intent success line | Criteria |
|---|---|
| A new session resumes an interview from the idea file alone | 15 (`lifecycle/interview-resume`); 5 |
| Every resolved map row links to a `DEC` or `RES` file | 3 |
| Parallel research sub-agents never collide on a document number | 2 |
| `bun run check` fails on a bad name, a duplicate number, a resolved row with no link, or a spec source that does not exist | 3, 4 |
| `/build` runs from `specs/SPEC-NNN-<slug>/` (`docs/specs/` since question 2) | 15 (`lifecycle/build-clean-context`); 1 |
| After `/setup-brain` in a fresh repo, a new session reports its phase and next step with no brain text in the repo's `AGENTS.md` | 15 (`setup/fresh-repo-resume`); 6, 7 |
| Outcome addition: the glossary rename | 8, 9 |
| Outcome addition: the source cache | `SPEC-source-cache.md` |

## Open Questions

- Open question 18 in the intent doc (brain in a shared team repo) is not part of this build.
