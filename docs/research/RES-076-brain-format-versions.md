---
id: RES-076
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-015#25
date: 2026-11-21
---
# RES-076: Where each Brain version keeps the views' fields

## Question
For each Brain version, in which places do ideas, specs, plans, task blocks and records keep each field the views show, so the mod can look in each place in turn?

## Answer
Sufficient answer: (1) the released Brain versions that wrote a different file format, with dates and the source that shows each; (2) for each format, a table per item kind that gives where each field lives; (3) for each field, the fallback order newest first, and how the mod tells which format a file uses; (4) what an older format cannot give, so the view shows it as missing; (5) what Brain's own code already detects or reads for older formats. The answer names contrary evidence and unknowns.

Capability check: this run loaded brain:source-driven-development. The sources are the repo's own code, templates, skills, fixtures, records and git history at the release tags, read with file reads and read-only git commands (`git show <tag>:<path>`, `git diff <tag> <tag>`, `git log --follow`). No web source was needed. RES-073 gives the current format (0.13.0, layout 2) and its parsers; this record does not repeat it.

### 1. Formats by Brain version

| Format | Versions, tag dates | What changed for the views |
|---|---|---|
| Layout 1, ADRs in `docs/adr/` | 0.2.0 to 0.5.0, 2026-09-19 | First release. Specs, plans, task blocks, intent docs, one-pagers and tracker maps as below. ADRs are `docs/adr/0001-<slug>.md` |
| Layout 1, ADRs in `docs/decisions/` | 0.6.0 to 0.9.0, 2026-10-19 to 2026-10-29 | ADR folder moves to `docs/decisions/`. Nothing else the views show changes |
| Layout 2, first form | 0.10.0 and 0.11.0, 2026-10-29 | The workspace: IDEA, DEC, RES files and spec folders with frontmatter, map and plan tables, task blocks. Default specs folder `docs/specs/`. RES has no `outcome` |
| Layout 2, `specs/` default | 0.12.0 and 0.12.1, 2026-10-29 and 2026-10-30 | Default specs folder `specs/`. A repo keeps the folder that its `workspace.md` names; 0.12.1 keeps `docs/specs/` when it already holds a spec |
| Layout 2, research outcomes | 0.13.0, 2026-11-05 | RES gains `outcome:`, `## Answer` and `## Next action`. The `docs/STATUS.md` note stops being live state |
| Migrated files | Any repo migrated by setup-brain 0.10.0 or later | A layout-1 body, byte for byte, under layout-2 frontmatter that carries `migrated: 0.8` |

Inside layout 1, the formats did not change from 0.2.0 to 0.9.0: the diff between the tags changes words only (`CONTEXT.md` to `GLOSSARY.md`, `docs/adr/` to `docs/decisions/`). Inside layout 2, the spec, plan, todo and DEC templates and the two row tables did not change from 0.10.0 to 0.13.0. No release came before 0.2.0, and no format change came after 0.13.0 up to HEAD `dfcab49b`.

### 2. Where each field lives

Layout 2 below means 0.10.0 to 0.13.0; RES-073 gives its parsers. "Layout 1" means 0.2.0 to 0.9.0.

**Idea, or its layout-1 predecessors**

| Field | Layout 2 idea | Migrated idea (former intent doc) | Layout 1 intent doc | Layout 1 one-pager (idea-refine) | Layout 1 wayfinder map, local tracker |
|---|---|---|---|---|---|
| Path | `<paths.ideas>/IDEA-NNN-<slug>.md` | `<paths.ideas>/IDEA-NNN-<name>.md` | `docs/intent/<topic>.md` | `docs/ideas/<idea-name>.md`, no number | `.scratch/<effort>/map.md` |
| ID | `id:` and file name | `id:` and file name | None; file name only | None; file name only | None; folder name only |
| Title | H1 after `# IDEA-NNN: ` | H1 after `# Intent: ` | H1 after `# Intent: ` | H1 `# <Idea Name>` | Not stated (UNVERIFIED) |
| Status | `status:` | None, by design | None; prose "Confirmed by <name> on <date>" or "Draft" | None | None |
| Result | `result:` | None | None | None | None |
| Intent | `## Intent`, lines `- Outcome:` to `- Out of scope:` | Body lines `- **Outcome:**` or `- Outcome:` | Same as migrated | Nearest: `## Problem Statement`; `## Not Doing (and Why)` for Out of scope | None |
| Destination | `## Destination` | None | None | Nearest: Problem Statement, Recommended Direction, MVP Scope | `## Destination` |
| Rows | `## Map` table | None | None | Nearest: `## Key Assumptions to Validate` checkboxes and `## Open Questions` bullets | One file per row: `.scratch/<effort>/issues/NN-<slug>.md` with `Type:`, `Status:` (`claimed`, `resolved`, else open) and `## Question` |
| Blocking edges | Blocked by column | None | None | None | `Blocked by: NN, NN` line in the row file |
| Row result | Result column (DEC or RES ID) | None | None | None | `## Answer` in the row file; one line per closed row in `## Decisions so far` |
| Fog, out of scope | `## Not yet specified`, `## Out of scope` | None | Intent line "Out of scope" | `## Not Doing (and Why)` | `## Not yet specified`, `## Out of scope` |

A wayfinder map on GitHub or GitLab issues is not a file. It gives the views nothing.

**Spec**

| Field | Layout 2 spec | Migrated spec | Layout 1 spec |
|---|---|---|---|
| Path | `<paths.specs>/SPEC-NNN-<slug>/spec.md` | Same | `SPEC.md`, `spec/SPEC.md` or `spec/SPEC-<module>.md` |
| ID | `spec:` and folder name | `spec:` and folder name | None; module ID in the file name |
| Title | H1 after `# SPEC-NNN: ` | H1 after `# Spec: ` | H1 after `# Spec: ` |
| State | None stored; worked out from plan rows (DEC-035) | None stored; prose line `Status: ...` near the top, often stale | Same as migrated |
| Objective, Success Criteria | `## Objective`, `## Success Criteria` | Same headings | Same headings |
| `sources:` | `sources:` | None; prose "Module `<id>` of `CAPABILITY-MAP.md`" | Same as migrated |
| Module dependencies | None | The capability map's DEC: table `Module id`, `Responsibility`, `Depends on`; prose "Depends on `<id>`" in the spec | `spec/CAPABILITY-MAP.md`, same table |

**Plan and its rows**

| Field | Layout 2 plan | Layout 1, planning skill template | Layout 1, as this repo wrote it |
|---|---|---|---|
| Path | `<spec folder>/tasks/plan.md` | `tasks/plan.md` at the root; migration moves it into the spec folder | Same; this repo also archived plans as `tasks/done/<module>/plan.md` |
| Title | H1 after `# SPEC-NNN plan: ` | H1 after `# Implementation Plan: ` | H1 after `# Plan: ` |
| Rows | Table `# \| Task \| Type \| Status \| Blocked by \| Result` | `## Task List`: lines `- [ ] Task N: <title>` under `### Phase N: <name>` | Table `# \| Component \| Depends on \| Risk` (SPEC-001 to 008); table `Phase \| Tasks \| What it delivers \| Depends on` (SPEC-009) |
| Row number | `NN`, cited `SPEC-NNN#NN` | `Task N` | `#` cell `N`, or `TNN` in the todo file |
| Type | Type column | Task line, or `### Checkpoint:` heading | Tasks only; checkpoints sit in prose |
| Status | Status column | Checkbox `[x]` or `[ ]`: done or not done | None in the plan; the todo checkbox |
| Blocked by | Blocked by column | In the todo block: `**Dependencies:** Task 1` or `None` | `Depends on` cell: `—`, `1`, `1 to 4`; in the SPEC-009 todo, `- Depends: T03` |
| Result | Result column: commit SHA, then the check and its outcome | None | None; a prose line such as "Done 2026-09-19." |
| Decisions | `## Decisions`, lines `- DEC-NNN: <title>` | `## Architecture Decisions`, bullets that name a file path from before the migration | Prose |
| Waves | `## Parallel waves` from `brain plan` | None | SPEC-009 only: a hand table `Wave \| Tasks` |

**Task block**

| Field | Layout 2 block | Layout 1, planning skill template | Layout 1, inline form (spec skill Phase 3; this repo) |
|---|---|---|---|
| Path | `<spec folder>/tasks/todo.md` | `tasks/todo.md` | `tasks/todo.md` |
| Heading | `## Task NN: <title>`, `## Checkpoint NN: <title>` | `## Task N: <title>`, `## Checkpoint: After Tasks 1-3` | Checkbox line `- [x] Task N: <title>` or `- [x] TNN: <title>` |
| Description | `**Description:**` | `**Description:**` | None |
| Acceptance | `**Acceptance criteria:**` checkboxes | Same | Sub-line `- Acceptance: ...` |
| Verification | `**Verification:**` checkboxes | Same | Sub-line `- Verify: ...` |
| Files | `**Files likely touched:**` list | Same | Sub-line `- Files: a, b` |
| Scope | `**Scope:**` XS, S, M or L | `**Estimated scope:**` Small, Medium or Large | `Scope: S` inside the `- Depends:` line (SPEC-009) |
| Dependencies | None; the plan holds them | `**Dependencies:**` | `- Depends:` (SPEC-009) |

**Checkpoint and phase**

| Format | Checkpoint | Phase |
|---|---|---|
| Layout 2 | A plan row with Type `checkpoint`; block `## Checkpoint NN:` with checkboxes | The rows in the checkpoint's Blocked by |
| Layout 1 template | `### Checkpoint: <name>` with checkboxes in the plan; `## Checkpoint: After Tasks 1-3` in the todo | The tasks under `### Phase N: <name>` |
| This repo, SPEC-001 to 008 | Bullets `- After N: <check>` under `## Verification checkpoints` | None named |
| This repo, SPEC-009 | `### Checkpoint: phase N` with checkboxes in the todo | Tasks under `## Phase N: <name>` in the todo; the plan's Phase table |

**Decision record, or its layout-1 predecessors**

| Field | Layout 2 DEC | Migrated DEC | Layout 1 ADR (domain-modeling) | Layout 1 ADR (documentation-and-adrs template) | Layout 1 hand DEC, no frontmatter |
|---|---|---|---|---|---|
| Path | `<paths.decisions>/DEC-NNN-<slug>.md` | Same | `docs/adr/0001-<slug>.md` (0.2.0 to 0.5.0), `docs/decisions/0001-<slug>.md` (0.6.0 to 0.9.0) | `docs/decisions/`; file name follows the repo | `docs/decisions/DEC-NNN-<slug>.md` |
| ID | `id:` | `id:` | Number in the file name | H1 `ADR-NNN` | File name and H1 |
| Title | H1 after `# DEC-NNN: ` | H1 `# <title>` (former ADR), `# Capability Map: <name>` (former map), or after `# DEC-NNN: ` (former hand DEC) | H1 `# <title>` | H1 after `# ADR-NNN: ` | H1 after `# DEC-NNN: ` |
| Status | `status:` | None; a hand edit can add it later | Optional `status` frontmatter | `## Status` section | None |
| Kind | `kind:` | `kind: architecture` for a former ADR; else none | None | None | None |
| Date | `decided: YYYY-MM-DD by <name>` | `decided: YYYY-MM-DD`, from the first commit | None; git only | `## Date` section | Prose "Decided <date> by <name>." |
| `from:`, `evidence:` | Frontmatter | None | None | None | None |

**Research record**

| Field | 0.13.0 RES | 0.10.0 to 0.12.1 RES | Migrated RES | Layout 1 hand RES, no frontmatter |
|---|---|---|---|---|
| Path | `<paths.research>/RES-NNN-<slug>.md` | Same | Same | `docs/research/RES-NNN-<slug>.md` |
| ID, title | `id:`; H1 after `# RES-NNN: ` | Same | Same | File name; H1 after `# RES-NNN: ` |
| Status | `status:` | `status:` | Prose line `Status: ...` under the H1 | Same as migrated |
| Outcome | `outcome:` | None | None | None |
| Date | `date:` | `date:` | `date:` from the first commit; prose `Date:` | Prose `Date:` |
| Sections | Question, Answer, Findings, Follow-ups, Next action | Question, Findings, Follow-ups | Free form; Question and Findings in the fixture | Same as migrated |
| `from:`, `evidence:` | Frontmatter | Frontmatter | None | None |

No Brain skill from 0.2.0 to 0.9.0 wrote a DEC or RES file. Those files came by hand. Wayfinder's research row put its findings on a throwaway branch and in a tracker comment, not in the main tree.

**Folders**

| Format | Where the mod finds each folder |
|---|---|
| Layout 2 | `paths:` in `docs/agents/workspace.md`; when absent, `docs/ideas`, `docs/decisions`, `docs/research`, and `specs` (0.12.0 and later) or `docs/specs` (0.10.0 and 0.11.0) |
| Layout 1 | `SPEC.md`, `spec/`, `tasks/`, `docs/intent/`, `docs/ideas/`, `docs/adr/` or `docs/decisions/`, `.scratch/` |

### 3. How the mod tells the format, and the fallback order

Detection, in this order:

1. Read `layout:` in `docs/agents/workspace.md`. `layout: 2` means layout 2, with folders from `paths:`. A number above 2 is a format newer than this record; show its files as unknown. Brain's setup writer refuses such a layout too.
2. With no `workspace.md`, look for the layout-1 markers that `findOldLayout` lists: `CONTEXT.md`, `CONTEXT-MAP.md`, `SPEC.md`, a Markdown file in `spec/`, `tasks/plan.md`, `tasks/todo.md`, a Markdown file in `docs/intent/`, and the two tracker files. Any marker means layout 1. No marker means layout 2 with the default folders; look for specs in `specs/`, then `docs/specs/`.
3. For each file in a layout-2 folder, read its frontmatter. `migrated:` present means a layout-1 body. No `migrated:` means a layout-2 body. A DEC or RES file with no frontmatter is a layout-1 hand record that the migration skipped or has not reached. A migrated file can gain fields later by hand, such as `status:` on DEC-002, so read every frontmatter field first, on every file.
4. For a plan, find the first table whose header matches the layout-2 columns exactly. Else try, in order: `## Task List` with checkbox lines; a table with `Component` and `Depends on`; a table with `Phase` and `Tasks`.
5. For a todo, a heading `## Task NN:` or `## Checkpoint NN:` (two digits) means layout-2 blocks. `## Task N:` with `**Dependencies:**` means the layout-1 template. Checkbox lines `- [x] Task N:` or `- [x] TNN:` mean the inline form.
6. For a RES, `outcome:` or `## Answer` means the 0.13.0 form.

Fallback order for each field, newest place first. The last column is when the view shows the field as missing.

| Field | Places, newest first | Missing when |
|---|---|---|
| Idea ID | `id:`; file name `IDEA-NNN-` | Intent doc, one-pager, wayfinder map: show the file or folder name, no ID |
| Idea title | H1 after `# IDEA-NNN: `; H1 after `# Intent: `; any first H1; file name | Never |
| Idea status | `status:` | Migrated idea, intent doc, one-pager, map |
| Idea result | `result:` | Every layout-1 form and every migrated idea |
| Intent | `## Intent` lines; body lines `- **Outcome:**` or `- Outcome:`; one-pager Problem Statement for Outcome and Not Doing for Out of scope | One-pager lines other than those two; wayfinder map |
| Destination | `## Destination` in the idea; `## Destination` in `.scratch/<effort>/map.md`; one-pager Problem Statement, Recommended Direction, MVP Scope | Intent doc and migrated idea |
| Idea rows | `## Map` table; `.scratch/<effort>/issues/NN-*.md`; one-pager assumptions and open questions, as rows with no status or edges | Intent doc, migrated idea, tracker on GitHub or GitLab |
| Row Blocked by | Blocked by column; `Blocked by:` line in the row file | One-pager items |
| Row result | Result column; `## Answer` in the row file; the line in `## Decisions so far` | One-pager items |
| Spec ID | `spec:`; folder name `SPEC-NNN-` | Unmigrated layout 1: show the module ID |
| Spec title | H1 after `# SPEC-NNN: `; H1 after `# Spec: `; file name | Never |
| Spec state | Plan rows (DEC-035); `migrated:` means the Migrated column (DEC-036); the prose `Status:` line as text only | A layout-1 spec has no state that rows give |
| Objective, Success Criteria | `## Objective`, `## Success Criteria` in every format | A spec that lacks the heading |
| `sources:` | `sources:` | Every migrated or layout-1 spec; prose names only the capability map |
| Plan rows | Layout-2 table; Task List checkbox lines; Component table; todo checkbox lines | A spec with no `tasks/` folder, such as SPEC-007 |
| Row status | Status column; plan Task List checkbox; todo checkbox | A Component row whose todo line cannot be matched |
| Row type | Type column; `### Checkpoint` and `## Checkpoint` headings, and `After N` bullets, as checkpoints | Never: a layout-1 row is a task unless a checkpoint heading names it |
| Row Blocked by | Blocked by column; `**Dependencies:**`; `Depends on` cell; `- Depends:` | Inline todo lines without `Depends`; prose values that do not parse to row numbers |
| Plan row result | Result column | Every layout-1 plan; the item's git history (DEC-045) is the only trace |
| Phase | Checkpoint rows and their Blocked by; `### Phase N:` in the plan; `## Phase N:` in the todo | SPEC-001 to 008 |
| Waves | `## Parallel waves`, or computed from layout-2 edges; computed from layout-1 edges when every edge parses | Any layout-1 plan with an edge that does not parse |
| Task block parts | Bold labels under `## Task NN:`; bold labels under `## Task N:`; sub-lines `Acceptance`, `Verify`, `Files` | Description in the inline form |
| DEC status | `status:`; `## Status` section; ADR `status` frontmatter | Migrated DEC without a later edit; hand DEC |
| DEC kind | `kind:` | Migrated decision that was not an ADR; every layout-1 form (Brain's check reports these as unclassified) |
| DEC date | `decided:`; `## Date`; prose "Decided ..." | Layout-1 ADR before migration: git only |
| RES status, outcome | `status:` and `outcome:`; `status:` alone; prose `Status:` line | Outcome before 0.13.0 |
| Links to DEC and RES | Map row Result, `result:`, `sources:`, plan `## Decisions`, records' `from:`; in layout-1 bodies, file paths and IDs in prose, mapped to new paths through the renames in the commit "chore: migrate to the brain workspace layout" | Wayfinder research findings; links on a GitHub or GitLab tracker |
| Folders | `paths:` in `workspace.md`; defaults `specs/`, then `docs/specs/`; layout-1 places | Never |

### 4. What an older format cannot give

- A layout-1 idea (intent doc, one-pager or map) has no ID number, no status and no result.
- An intent doc and a migrated idea have no Destination, no rows, no blocking edges and no links to records.
- A one-pager has rows only as plain lists: no row status, no edges, no result.
- A spec from layout 1 has no `sources:`, so no link to its idea, and no stored state. Its prose `Status:` line is often stale: SPEC-001 says "draft for review", but its plan says "Done 2026-09-19".
- A layout-1 plan has no Result per row, so no commit SHA and no verification result. It has no Type or Status column; status is only a ticked or open checkbox. Its edges are prose that a reader must parse; its checkpoints have no edges; it has no waves.
- A layout-1 decision has no `from:`, no `evidence:` and usually no status or kind. A layout-1 research record has no `from:`, no `outcome`, and its status is prose.
- A RES from 0.10.0 to 0.12.1 has no `outcome`, `## Answer` or `## Next action`.
- Records that a layout-1 body names by path keep the path from before the migration, such as `docs/decisions/0001-keep-the-ledger-in-postgres.md` or `spec/SPEC-evals.md`. The mod can map such a path to its new file only through the migration commit's renames.
- A wayfinder map on GitHub or GitLab, and wayfinder research findings, are not files in the repo.

### 5. What Brain's code already detects or reads

- `scripts/workspace/old-layout.ts` detects layout 1: the marker list (`findOldLayout`), the ADR name `0001-<slug>.md` (`adrName`), the ADR folders of other tools (`findAdrFolders`), the recorded layout (`recordedLayout`, `currentLayout = 2`), and DEC or RES files without frontmatter (`findToMigrate`).
- setup-brain's migrate mode (`scripts/setup/migrate.ts`) classifies files only: a capability map by its H1, a spec by its name or H1, the spec a plan belongs to, the intent docs the user picks, and the first-commit date. It writes frontmatter only and parses no layout-1 body.
- `brain status` prints one layout-1 line when `workspace.md` is absent and a marker exists, and gives a migrated file no rows.
- `brain check` skips the H1 and row checks of a migrated file, lets a migrated spec lack its plan and todo, and reports a migrated decision without `kind` as information only.
- No Brain code reads a layout-1 body. `readRows` needs the exact layout-2 header, and the task block parser needs a two-digit `## Task NN:`. No code reads checkbox lines, `Depends on` cells, `**Dependencies:**`, intent lines, the prose `Status:` line, or `.scratch/` files.
- The fixture `scripts/workspace/__tests__/fixtures/layout-0.8/` holds one example of each layout-1 file in the template shapes: capability map, two module specs, plan with phases, todo with `**Dependencies:**`, intent docs, an ADR, a hand DEC, a hand RES and the local tracker file. It has no `.scratch/` map and no file in the inline todo form.

### Contrary evidence and unknowns

- Layout-1 plans and todos follow no fixed format. The skills gave templates as examples, and this repo's own plans use other shapes (Component table, inline todo lines, SPEC-009's phase table). RES-037 found hand-grown files in six earlier projects. The readers above cover the shapes seen here; other repos can hold other shapes.
- Some files no Brain version wrote: `docs/design/`, `docs/research/NN-<slug>.md`, `docs/agents/workflow.md` and `tasks/done/` (RES-037). Whether the mod reads them is a design choice, not a format fact.
- This repo still holds two unpicked intent docs in `docs/intent/` and one plan in `tasks/done/context-scope/` next to its layout-2 workspace. So layout-1 files can remain in a layout-2 repo.
- The vendored documentation-and-adrs skill still gives an ADR template with `# ADR-001:`, `## Status` and `## Date`, and no file name, in every version. No repo example was seen. UNVERIFIED that any repo holds such files.
- The local tracker doc does not say where a wayfinder row file keeps its title. UNVERIFIED.
- The `docs/STATUS.md` note that setup-brain 0.10.0 to 0.12.1 seeded holds free text and no field the views show.
- Unknown: what a layout above 2 will hold.

## Findings
- Brain's release tags and their commit dates are v0.2.0 to v0.5.0 on 2026-09-19, v0.6.0 on 2026-10-19, v0.7.0 and v0.8.0 on 2026-10-28, v0.9.0 to v0.12.0 on 2026-10-29, v0.12.1 on 2026-10-30, and v0.13.0 on 2026-11-05. Source: `git log --no-walk=sorted --format='%h %ad %D' --date=short` over the tags, checked 2026-11-21.
- 0.2.0 is the first release. Source: CHANGELOG.md:137, checked 2026-11-21.
- 0.6.0 moved the ADR folder from `docs/adr/` to `docs/decisions/`. Source: CHANGELOG.md:105, checked 2026-11-21.
- At 0.2.0, domain-modeling wrote ADRs as `docs/adr/0001-slug.md`; at 0.9.0 it wrote them in `docs/decisions/`, with the H1 `# {Short title of the decision}` and an optional `status` frontmatter. Source: `git show v0.2.0:skills/domain-modeling/ADR-FORMAT.md` line 3; `git show v0.9.0:skills/domain-modeling/ADR-FORMAT.md` lines 3, 9-13 and 21, checked 2026-11-21.
- Between v0.2.0 and v0.9.0, the skills that write specs, plans, intent docs, maps and ADRs changed only the glossary file name and the ADR folder. Source: `git diff v0.2.0 v0.9.0` over spec-driven-development, planning-and-task-breakdown, interview-me, wayfinder, ADR-FORMAT.md and incremental-implementation, checked 2026-11-21.
- 0.10.0 moved specs, plans and task lists into `docs/specs/SPEC-NNN-<slug>/`, and defines layout 1 as Brain 0.9 and earlier. Source: CHANGELOG.md:49, checked 2026-11-21.
- 0.10.0 replaced `0001-<slug>.md` ADRs with `DEC-NNN-<slug>.md` decision records. Source: CHANGELOG.md:45, checked 2026-11-21.
- 0.10.0 removed wayfinder, whose maps on an issue tracker are not migrated. Source: CHANGELOG.md:47, checked 2026-11-21.
- 0.10.0's migrate mode turns picked intent docs into ideas, moves specs and the plan, turns the capability map into a decision record, and records `layout: 2`. Source: CHANGELOG.md:67-71, checked 2026-11-21.
- 0.12.0 made `specs/` the default spec folder, and a repo with a `workspace.md` keeps the folder it names. Source: CHANGELOG.md:33, checked 2026-11-21.
- 0.12.1 keeps `docs/specs/` on a first install when that folder already holds a spec, as `brain new-doc SPEC` wrote it on 0.10.0 and 0.11.0 without a `workspace.md`. Source: CHANGELOG.md:27, checked 2026-11-21.
- 0.13.0 added research outcomes answered, partial and blocked, and retired the status note as live state. Source: CHANGELOG.md:13-17, checked 2026-11-21.
- From v0.10.0 to v0.13.0, the only template changes are an IDEA Notes comment and the RES comment, `## Answer` and `## Next action`; the schema adds only RES `outcome`, a resolved-outcome rule and a CRLF-tolerant frontmatter reader. Source: `git diff v0.10.0 v0.13.0 -- scripts/workspace/templates/ scripts/workspace/schema.ts`, checked 2026-11-21.
- From v0.10.0 to v0.13.0, `map.ts` adds only a superseded-by cycle check, and `config.ts` changes the default specs folder from `docs/specs` to `specs`. Source: `git diff v0.10.0 v0.13.0 -- scripts/workspace/map.ts scripts/workspace/config.ts`, checked 2026-11-21.
- No commit after v0.13.0 up to HEAD changes the workspace code or the skills that write the formats. Source: `git log v0.13.0..HEAD` over scripts/workspace, setup-brain, interview-me, planning-and-task-breakdown, spec-driven-development and idea-refine, checked 2026-11-21.
- The 0.10.0 workspace template records `layout: 2`, `paths:` for decisions, research, ideas and `docs/specs`, and the IDEA, DEC, RES and spec folder names. Source: `git show v0.10.0:skills/setup-brain/workspace.md` lines 1-9 and the Files table, checked 2026-11-21.
- The 0.10.0 idea template has `status`, `result`, `## Intent` with six `- <Name>:` lines, `## Destination`, `## Map` with the six-column table, `## Not yet specified` and `## Out of scope`. Source: `git show v0.10.0:scripts/workspace/templates/IDEA.md`, checked 2026-11-21.
- The 0.10.0 plan template has the H1 `# {{spec}} plan:`, `## Decisions`, the table `# | Task | Type | Status | Blocked by | Result` and `## Parallel waves`; the todo template has `## Task 01:` and `## Checkpoint 02:` blocks with Description, Acceptance criteria, Verification, Files likely touched and Scope. Source: `git show v0.10.0:scripts/workspace/templates/plan.md` and `todo.md`, checked 2026-11-21.
- The current RES template has `## Question`, `## Answer`, `## Findings`, `## Follow-ups` and `## Next action`. Source: scripts/workspace/templates/RES.md:12-25, checked 2026-11-21.
- At 0.9.0, a spec is `SPEC.md` at the root, or under `spec/`, and a module spec is `spec/SPEC-<module-id>.md`. Source: `git show v0.9.0:skills/spec-driven-development/SKILL.md` lines 68 and 190, checked 2026-11-21.
- At 0.9.0, the spec template opens `# Spec: [Project/Feature Name]` and holds `## Objective` and `## Success Criteria`. Source: `git show v0.9.0:skills/spec-driven-development/SKILL.md` lines 148-183, checked 2026-11-21.
- At 0.9.0, the capability map is `# Capability Map:` with the table `Module id | Responsibility | Depends on`. Source: `git show v0.9.0:skills/spec-driven-development/SKILL.md` line 50, checked 2026-11-21.
- At 0.9.0, the spec skill's inline task form is `- [ ] Task: [Description]` with sub-lines `Acceptance`, `Verify` and `Files`. Source: `git show v0.9.0:skills/spec-driven-development/SKILL.md` lines 237-240, checked 2026-11-21.
- At 0.9.0, the plan template is `# Implementation Plan:` with `## Architecture Decisions` and a Task List of `### Phase N:` headings, `- [ ] Task N:` lines and `### Checkpoint:` headings. Source: `git show v0.9.0:skills/planning-and-task-breakdown/SKILL.md` lines 199-214, checked 2026-11-21.
- At 0.9.0, a task block is `## Task [N]:` with `**Dependencies:**` and `**Estimated scope:**`, and a checkpoint is `## Checkpoint: After Tasks 1-3`. Source: `git show v0.9.0:skills/planning-and-task-breakdown/SKILL.md` lines 97-132, checked 2026-11-21.
- At 0.9.0, the task list could go to an external tracker instead of `tasks/todo.md`. Source: `git show v0.9.0:skills/planning-and-task-breakdown/SKILL.md` lines 191-192, checked 2026-11-21.
- From 0.2.0 to 0.9.0, interview-me offered to save the confirmed intent to `docs/intent/<topic>.md`, and its restate has the lines Outcome, User, Why now, Success, Constraint and Out of scope. Source: `git show v0.2.0:skills/interview-me/SKILL.md` line 136; `git show v0.9.0:skills/interview-me/SKILL.md` lines 101 and 136, checked 2026-11-21.
- At 0.9.0, idea-refine saved a one-pager to `docs/ideas/[idea-name].md` with Problem Statement, Recommended Direction, Key Assumptions to Validate, MVP Scope, Not Doing (and Why) and Open Questions. Source: `git show v0.9.0:skills/idea-refine/SKILL.md` lines 32 and 115-140, checked 2026-11-21.
- The current idea-refine maps a one-pager into an idea: Problem Statement, Recommended Direction and MVP Scope to Destination; assumptions and open questions to rows; Not Doing to Out of scope. Source: skills/idea-refine/SKILL.md:172-178, checked 2026-11-21.
- At 0.9.0, a wayfinder map is an issue labelled `wayfinder:map` with `## Destination`, `## Notes`, `## Decisions so far`, `## Not yet specified` and `## Out of scope`; a row is a child issue with `## Question` and a `wayfinder:<type>` label. Source: `git show v0.9.0:skills/wayfinder/SKILL.md` lines 28-72, checked 2026-11-21.
- At 0.9.0, a wayfinder research row wrote its findings on a throwaway `research/<name>` branch and in a tracker comment. Source: `git show v0.9.0:skills/wayfinder/SKILL.md` line 83, checked 2026-11-21.
- On the local tracker, a map is `.scratch/<effort>/map.md`, and a row is `.scratch/<effort>/issues/NN-<slug>.md` with `Type:`, `Status:` (`claimed` or `resolved`), `Blocked by: NN, NN` and `## Answer`. Source: `git show v0.9.0:skills/setup-brain/issue-tracker-local.md`, section "Wayfinding operations"; scripts/workspace/__tests__/fixtures/layout-0.8/docs/agents/issue-tracker.md:28-35, checked 2026-11-21.
- On GitHub, a map and its rows are issues, with native dependencies or a `Blocked by: #<n>` line. Source: `git show v0.9.0:skills/setup-brain/issue-tracker-github.md`, section "Wayfinding operations", checked 2026-11-21.
- setup-brain 0.9.0 recommended the local tracker unless a remote points at GitHub or GitLab. Source: `git show v0.9.0:skills/setup-brain/SKILL.md`, step 3, checked 2026-11-21.
- At 0.9.0, no skill names `docs/research`, a `RES-` ID or a `DEC-` ID. Source: `git grep` at v0.9.0 over skills, references, commands, agents and hooks, checked 2026-11-21.
- The vendored documentation-and-adrs skill gives an ADR template with `# ADR-001:`, `## Status` and `## Date`, in `docs/decisions/`, and tells the agent to match a repo's own naming. Source: skills/documentation-and-adrs/SKILL.md:40-60; upstream.lock.json:139, checked 2026-11-21.
- The migration gives a migrated file only its ID, `migrated: 0.8`, the first-commit date in a DEC or RES, and `kind: architecture` in a former ADR; no byte below the frontmatter changes. Source: scripts/setup/migrate.ts:11-16, checked 2026-11-21.
- A migrated idea gets its ID and `migrated: 0.8` only, with no status. Source: scripts/setup/migrate.ts:37-40 and 638, checked 2026-11-21.
- A migrated spec, plan and todo get `spec:` and `migrated: 0.8`. Source: scripts/setup/migrate.ts:371, checked 2026-11-21.
- The migration finds the capability map by an H1 that opens with "Capability Map", and a spec by the name `SPEC.md` or `SPEC-<module>.md`; the slug comes from the module ID or the H1 after "Spec:". Source: scripts/setup/migrate.ts:292-305, checked 2026-11-21.
- The migration moves one `tasks/plan.md` and `tasks/todo.md` into the folder of one spec, which the user names when there are several. Source: scripts/setup/migrate.ts:346-369, checked 2026-11-21.
- The migration's commit title is "chore: migrate to the brain workspace layout". Source: scripts/setup/migrate.ts:125, checked 2026-11-21.
- A migrated file needs only the field that names it, and its body is not checked. Source: scripts/workspace/schema.ts:7-12, checked 2026-11-21.
- A migrated decision's `decided` may be a date without "by <name>". Source: scripts/workspace/schema.ts:157-165, checked 2026-11-21.
- `findOldLayout` looks for `CONTEXT.md`, `CONTEXT-MAP.md`, `SPEC.md`, `spec/*.md`, `tasks/plan.md`, `tasks/todo.md`, `docs/intent/*.md` and the two tracker files. Source: scripts/workspace/old-layout.ts:53-72, checked 2026-11-21.
- `old-layout.ts` also finds ADR names `0001-<slug>.md`, ADR folders of other tools, the recorded layout, and DEC or RES files without frontmatter. Source: scripts/workspace/old-layout.ts:44-47, 75-80, 99-113 and 126-149, checked 2026-11-21.
- `brain status` prints one layout-1 line when `workspace.md` is absent and a marker exists. Source: scripts/workspace/status.ts:286-292, checked 2026-11-21.
- `brain status` gives a migrated file no rows. Source: scripts/workspace/status.ts:93-100, checked 2026-11-21.
- `brain check` skips the H1 and row checks of a migrated file, lets a migrated spec lack its plan and todo, and lists migrated decisions without `kind`. Source: scripts/workspace/check.ts:7-9, 127-150 and 456-462, checked 2026-11-21.
- The setup writer refuses a `workspace.md` whose layout is newer than 2. Source: scripts/setup/write.ts:180-185, checked 2026-11-21.
- The task block parser reads only headings `## Task NN:` or `## Checkpoint NN:` with two digits. Source: scripts/workspace/plan.ts:47, checked 2026-11-21.
- The layout-0.8 fixture holds a template-shaped plan with `### Phase` headings and checkboxes, and a todo with `## Task N:` blocks, `**Dependencies:**` and `## Checkpoint: After Tasks 1-2`. Source: scripts/workspace/__tests__/fixtures/layout-0.8/tasks/plan.md:12-27; tasks/todo.md:3-39, checked 2026-11-21.
- The fixture's intent docs open `# Intent:` with a "Confirmed by" or "Draft" line and `- **Outcome:**` lines. Source: scripts/workspace/__tests__/fixtures/layout-0.8/docs/intent/billing.md:1-10; usage-alerts.md:3, checked 2026-11-21.
- The fixture's hand RES has the prose line `Date: 2026-08-20. Status: evidence gathered.`, and its hand DEC has the prose line `Decided 2026-08-14 by Sam.` in its body. Source: scripts/workspace/__tests__/fixtures/layout-0.8/docs/research/RES-001-payment-provider-retries.md:3; docs/decisions/DEC-001-bill-by-calendar-month.md:3, checked 2026-11-21.
- The fixture's layout-1 plan names decisions by their pre-migration paths, such as `docs/decisions/0001-keep-the-ledger-in-postgres.md`. Source: scripts/workspace/__tests__/fixtures/layout-0.8/tasks/plan.md:9-10, checked 2026-11-21.
- This repo's migrated plans SPEC-001 to SPEC-008 open `# Plan: <module>` with the table `# | Component | Depends on | Risk` and checkpoints as `- After N:` bullets. Source: specs/SPEC-001-evals/tasks/plan.md:5, 11 and 21-25, checked 2026-11-21.
- This repo's migrated todos SPEC-001 to SPEC-008 hold checkbox lines `- [x] Task N: <title>` with sub-lines Acceptance, Verify and Files. Source: specs/SPEC-001-evals/tasks/todo.md:7-10, checked 2026-11-21.
- SPEC-009's migrated plan has the table `Phase | Tasks | What it delivers | Depends on` and a hand-made waves table; its todo has `## Phase N:` headings, `- [x] TNN:` lines with `- Depends:` and `### Checkpoint: phase N`. Source: specs/SPEC-009-workspace/tasks/plan.md:27 and 58-61; specs/SPEC-009-workspace/tasks/todo.md:12-18 and 55, checked 2026-11-21.
- This repo's plans were archived as `tasks/done/<module>/plan.md` and moved into spec folders by hand. Source: `git log --follow` on specs/SPEC-001-evals/tasks/plan.md, commit ac7be413, checked 2026-11-21.
- A layout-1 spec's prose status can be stale: SPEC-001 says "Status: draft for review", while its plan says "Done 2026-09-19". Source: specs/SPEC-001-evals/spec.md:8; specs/SPEC-001-evals/tasks/plan.md:31, checked 2026-11-21.
- A migrated former capability map keeps the H1 `# Capability Map: brain`, without its DEC ID. Source: docs/decisions/DEC-004-capability-map-brain.md:6, checked 2026-11-21.
- A migrated decision can gain a field later by hand: DEC-002 carries `status: superseded by DEC-006` beside `migrated: 0.8`. Source: docs/decisions/DEC-002-ask-user-question-upstream.md:3-4, checked 2026-11-21.
- This repo's migrated research records keep the prose line "Date: ... Status: ...". Source: docs/research/RES-001-wrap-layout.md:8, checked 2026-11-21.
- This repo still holds `docs/intent/brain-wrap.md`, `docs/intent/workspace-and-stateful-interview.md` and `tasks/done/context-scope/` beside its layout-2 workspace. Source: `ls docs/intent`; `find tasks -type f`, checked 2026-11-21.
- This repo's `workspace.md` records `layout: 2` with `specs: specs`. Source: docs/agents/workspace.md:1-9, checked 2026-11-21.
- In six earlier projects, layout-1 repos held files no migration step covers, such as `docs/design`, `.scratch` and `tasks/done`, and open checkboxes in old todo files. Source: docs/research/RES-037-flow-statement.md:747-760, checked 2026-11-21.
- `.scratch/<effort>/map.md` held wayfinder's map in repos on a local tracker, and git tracked it there. Source: docs/research/RES-024-state-file-origins.md:138, checked 2026-11-21.
- The glossary defines layout 1 as the files of Brain 0.9 and earlier, and marks "old layout" and "0.8 layout" as words to avoid. Source: GLOSSARY.md:102-104, checked 2026-11-21.

## Follow-ups
- The glossary has no word for a migrated file, an intent doc, a one-pager or a task block. The domain-modeling skill can decide whether the views and their spec need these words.

## Next action
None.
