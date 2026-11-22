---
id: RES-075
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-015#18 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
date: 2026-11-20
---
# RES-075: What git gives the views per item

## Question
What can git give a view per item: the changes to an idea, spec, row or record in the current session, and the item's history; how does the mod know where the session started; and what does it cost in a repo of this size?

## Answer
Sufficient answer: (1) for each kind (idea, spec folder, decision record, research record), the git commands that give its uncommitted changes, its commits since a start point, and its full history, with renames and a spec folder of several files; (2) whether one row's history can be found, by `git log -L` on a line range or by a row-by-row diff of the table, with its limits when rows move or the table changes form; (3) what a session start point can be (HEAD at start, a time, the reflog), how a mod records it, and what happens on resume, clear, compact and in another worktree; (4) the measured time of each command in this repo for an idea, a spec folder and a row, with the commit and file counts, and when a cache is needed; (5) edge cases: a file not yet committed, a deleted or superseded record, a branch switch, a detached HEAD, a repo with no git. It names contrary evidence and unknowns.

Capability check: this run loaded brain:source-driven-development. WebFetch answered for git-scm.com (git-log, git-diff, git-blame, git-status, gitrevisions, git-stash, documented at 2.53 to 2.56) and for code.claude.com (mods reference, create, overview, hooks, commands, interactive mode). `gh api` answered for the source of Claude Code's built-in diff mod. Firecrawl was not needed. Local git is 2.54.0 (Apple Git-157). The mod type declarations are the `claude-code/index.d.ts` that Claude Code 2.1.330 wrote into a teammate's scratch mod. All git commands in the project worktree were read-only. The tests that needed commits ran in a throwaway repo in the session scratchpad, outside the project.

### (1) Commands for each kind
`<base>` is the session's start point from part (3). Prefix every command with `git --no-optional-locks`, so a background read takes no index lock that the agent's own git commands can trip on.

| Kind | Changes now, not committed | Commits since the start | Full history |
|---|---|---|---|
| Idea, decision record, research record (one file) | `status --porcelain=v2 --untracked-files=all -- <file>`; `diff <base> -- <file>`; for an untracked file, `diff --no-index /dev/null <file>` | `log <S>..HEAD -- <file>` | `log --follow --name-status -- <file>` |
| Spec (a folder of `spec.md`, `tasks/plan.md`, `tasks/todo.md`) | The same status and diff, with the folder as the pathspec | `log <S>..HEAD -- <folder>` | `log --follow` on each of the three files, merged by commit; or one `log -M --name-status` that walks the `R` lines. `log -- <folder>` alone stops at the folder's creation |
| Row (map or plan) | Parse the table in `show <base>:<file>` and in the working file, and compare rows by number | The same parse over each commit in `<S>..HEAD` | See part (2) |

A spec folder needs the per-file walk in this repo. `git log -- specs/SPEC-009-workspace` gives 4 commits, because the 2026-10-29 migration moved the files in from `spec/` and `tasks/`. `--follow` on `spec.md` gives 20 commits. A one-call `log -M` over only the new folders finds 0 renames, because the old paths are outside the pathspec; with the old paths added, it finds 39.

Contrary evidence: `--follow` can carry a file into unrelated history. `--follow` on SPEC-009's `tasks/todo.md` gives 146 commits, because the root `tasks/todo.md` held other modules' plans (upstream-sync first) before the migration moved it. A view that shows full history must show where a path changed, so the reader sees the jump.

### (2) History of one row
Both methods were tested on real rows and on a throwaway map with a status change, a moved row, a padded table and a Notes table whose first row also starts with `| 01 |`.

| Method | Gives | Fails when |
|---|---|---|
| `git log -L <n>,<n>:<file>` | Each commit that touched the line, with its patch. It follows a file rename: SPEC-009's Objective lines show commits made under `spec/SPEC-workspace.md`. | A regex address takes the first match in the file, so `/^\| 01 \|/` hit IDEA-004's Notes table, not its map. A padded or reformatted table makes the row look new in that commit, and older commits then show whole-table hunks. A moved row shows the whole hunk. A row split into another file stops at the split: IDEA-013's rows start at commit `dfcab49b`, and `blame -C -C -C` finds no source. The start revision must hold the path, so an untracked or deleted file fails with exit 128. Line numbers are HEAD's, not the working file's. No `--stat`. |
| Parse the table at each revision: `log --follow --name-only`, one `cat-file --batch` for every revision, then rows keyed by number | Clean row events: added, a cell change (status, Blocked by, Result), gone. A move and padding give no event. The working file is the last state, so an uncommitted change shows too. | A row split into another file stops at the split, as above. `--follow` jumps into an old file's history, as in part (1). A renamed or added column needs the parser to map columns by header. A renumbered row looks gone and added, but Brain's rules never reuse a row number. |

The parse method fits rows better. Row numbers are never reused, so a row number is a stable key in one file. Brain's parsers already read the table (RES-073). Its cost is one `log` and one `cat-file` per file, about 28 to 31 ms in the throwaway repo.

Contrary evidence: in this repo a row's committed history is thin. Across all refs, only 9 commits changed a table row in `docs/ideas` or `specs`. Rows change in the working tree during a session, and reach git in a few large commits. Main also mixes merge commits (30) with squash commits such as `dfcab49b`, so a squashed branch's own steps are not on main; they stay only while a branch ref such as `remotes/origin/docs/split-ideas` keeps them.

### (3) The session start point
| Option | How the mod gets it | On resume | Limits |
|---|---|---|---|
| Start time T | `$.session.usage().startedAt`: the launch, or for a resumed session its first launch; `/clear` restarts it | Correct with no stored state | Says when, not which commit or which content |
| HEAD at start, S | `git rev-parse HEAD` in `session.start`, kept in `$.store` under the session's id | Stored value, or recompute it as `HEAD@{T}` from the reflog | A diff against S counts dirt left from before the session as session change |
| `HEAD@{T}` | `git rev-parse 'HEAD@{<T>}'` | Works while the reflog reaches T | The worktree's own HEAD reflog starts when the worktree is made; this one starts at 17:32:01, and an earlier T returns the oldest entry with a warning |
| Dirty paths at start, plus file times | `git status` once at start; then a path counts as earlier work only if it was dirty then and its file time is before T | Needs the stored set, else every dirty file counts as session work | File level only. This is what Claude Code's built-in diff mod does |
| Content snapshot X | `git stash create` (a commit object and no ref; tracked files only), or a copy of the workspace text (690,691 bytes in 70 files here) in the plugin's data folder | Stored value only | `stash create` writes objects into `.git`, and it misses untracked files. Whether DEC-026 allows either write is open |

In the throwaway test, the diff against S listed a file that was dirty before the start, and the diff against X did not. `HEAD@{T}` returned S. `log --since=T` and `S..HEAD` gave the same session commit.

Events and what each does to the start point:
- Startup, `--resume`, `--continue`, `--fork-session`: `session.start` fires once per process (RES-040). Record S and the dirty set if absent for this session's id.
- `/clear`: `session.end` with reason `clear`, a new session id, no `session.start`; `startedAt` restarts. Record a new start. The built-in diff mod hooks `command.run` for `clear` and `resume` and reads `startedAt` again.
- `/compact`: same conversation, `classic.SessionStart` with source `compact`. Keep the start. UNVERIFIED: that `startedAt` does not move on compaction; the declarations name only `/clear`.
- In-session `/resume` and `/branch`: `session.end` with reason `resume`, another session id, no `session.start`. Look up that id's stored start, else recompute from `startedAt` and the reflog.
- A reload of the mod: `session.start` fires again. Keep the stored start; never overwrite it.
- Another worktree: each worktree has its own HEAD, index and HEAD reflog, so the start belongs to one worktree. `$.session.repo().root` returns the main working tree's root for a worktree, which is the wrong folder for git. Use the session's cwd, or `$.vcs.detect({ path: cwd }).root`, as the built-in diff mod does. A move into another worktree changes `$.session.root()`; key the start by session id and worktree root.

### (4) Cost in this repo, 2026-11-20
Repo: 312 commits from HEAD (136 on the first-parent line, 30 merges), 1,081 commits on all refs, 577 tracked files, 62 tracked workspace files and 8 untracked ones, a 79 MB pack. Each command below is one process, with wall times from repeated runs.

| Command | Wall time |
|---|---|
| `status --porcelain=v2 --untracked-files=all` over the 4 workspace folders | 13 to 18 ms |
| The same over the whole repo | 20 to 24 ms |
| `diff HEAD --numstat` over the workspace folders | 14 to 15 ms |
| `diff --no-index /dev/null <untracked idea>` | 12 ms |
| Idea history, `log --follow --name-status` (IDEA-001) | 23 to 39 ms; 17 ms without `--follow` |
| Decision history with `--follow` (DEC-004, 11 commits) | 21 to 24 ms |
| Spec folder: `log -- <folder>`, then `--follow` on spec.md, plan.md, todo.md | 16 to 17, 26 to 28, 31 to 32, 33 to 35 ms |
| Row: `log -L` for one row, or for all 23 rows of IDEA-001 | 16 to 18 ms |
| `cat-file --batch` for 4 revisions of IDEA-001 | 26 ms |
| `rev-parse 'HEAD@{<time>}'` | 13 ms |
| One `log -M --name-status` over all of HEAD's history | 27 to 36 ms; 155 to 186 ms with `--all` |

The process start is most of each figure. A detail view needs about 3 to 6 commands, so about 60 to 150 ms if they run one after another, less in parallel. No cache is needed for one detail view at this size. A cache becomes useful in three cases: row history for every row of every map at once; a refresh on every tool call; or a repo with much longer history. History is fixed for a given HEAD, so the HEAD commit is a natural cache key.

UNVERIFIED: the extra time that `$.process.run` adds per call inside a mod. No mod ran in this research.

### (5) Edge cases
- A file not yet committed: `git diff HEAD` prints nothing and exits 0, `git log` prints nothing, and `log -L` fails with exit 128. Use the `?` line from `status`, and `diff --no-index /dev/null <file>` for its lines. Today 8 of the 70 workspace files are untracked, IDEA-015 among them.
- A deleted record: none in this repo's history. In the throwaway repo, `log --follow -- <path>` listed the delete and the add, and `log -L` worked only from the parent of the deleting commit.
- A superseded record stays in place, so git shows only a change to its text. DEC-002 has `status: superseded`, and SPEC-005 states it in body prose. The views get "superseded" from the parser, not from git.
- A split idea: the new file's history starts at the split commit (IDEA-013 at `dfcab49b`). Git does not link it back to IDEA-004.
- A branch switch: after a switch to an older branch, `S..HEAD` was empty, and the diff against X counted the switch as change. Record the branch at start and compare it on each read.
- A detached HEAD: history, `S..HEAD` and `HEAD@{T}` work. `rev-parse --abbrev-ref HEAD` prints `HEAD`, and `symbolic-ref -q HEAD` exits 1.
- No git: git exits 128 with "not a git repository". `$.session.repo()` returns null and `$.vcs.detect` returns null, so the mod can skip all git parts.
- `$.vcs.diff` does not serve git yet, so the mod runs git through `$.process.run`, which runs git with repo hooks off.

Prior art: Claude Code's `/diff` comes from the built-in mod `cc-plugin-diff`. Its session mode compares the working tree with HEAD, not with HEAD at start, and tags a file as earlier work when it was dirty at the first read and its file time is before `startedAt`. Its per-turn views come from Claude's file edits, not git. So the host already shows session changes per file; the views add the change per idea, spec, record and row.

Unknowns:
- UNVERIFIED: `$.session.id()` is the same after `claude --resume`. The fallback above does not need it.
- Not tested: a renamed column in a map or plan header.
- Not measured: a repo much larger than this one.

## Findings
- Capability check: brain:source-driven-development loaded; WebFetch read git-scm.com and code.claude.com pages; `gh api` read github.com/anthropics/claude-code; local git is 2.54.0 (Apple Git-157) and Claude Code is 2.1.330. Source: this run's tool calls and `git --version`, `claude --version`, checked 2026-11-20.
- `git log -L<start>,<end>:<file>` traces a line range, takes no pathspec, walks from one revision only, needs the range to exist in that revision, implies `--patch`, and supports `--name-status` but no `--stat`. Source: https://git-scm.com/docs/git-log, checked 2026-11-20.
- `--follow` continues a file's history beyond renames and works for a single file only. Source: https://git-scm.com/docs/git-log, checked 2026-11-20.
- `git diff [<commit>] -- <path>` compares the working tree with a commit, and `--no-index` compares two paths on the filesystem. Source: https://git-scm.com/docs/git-diff, checked 2026-11-20.
- Rename detection's default similarity index is 50%, and `diff.renames` defaults to true for `git diff` and `git log`. Source: https://git-scm.com/docs/git-diff, checked 2026-11-20.
- `git status` writes the refreshed index by default, the write's lock can make other processes fail, and background scripts should use `git --no-optional-locks status`. Source: https://git-scm.com/docs/git-status#_background_refresh, checked 2026-11-20.
- In `--porcelain=v2`, an untracked file is a line `? <path>`. Source: https://git-scm.com/docs/git-status, checked 2026-11-20.
- `<refname>@{<date>}` gives a local ref's value at a past time and needs the ref's log in `$GIT_DIR/logs/<ref>`. Source: https://git-scm.com/docs/gitrevisions, checked 2026-11-20.
- `git stash create` makes a stash commit object without storing it in any ref, and takes no untracked-file option. Source: https://git-scm.com/docs/git-stash, checked 2026-11-20.
- `git blame -C` given three times looks for lines copied from other files in any commit. Source: https://git-scm.com/docs/git-blame, checked 2026-11-20.
- `session.start` fires once per loaded mod before the first prompt and after a reload, not after `/clear`, `/resume` or `/branch`; `session.end` fires on those with reason `clear` or `resume`. Source: https://code.claude.com/docs/en/plugins/mods/reference#session, checked 2026-11-20.
- `$.session` offers `cwd`, `root`, `id`, `repo`, `usage` and `info`; `$.store` is a key-value store that every session on the machine shares; `$.process` offers `run` and `spawn`. Source: https://code.claude.com/docs/en/plugins/mods/reference#mods-api-methods, checked 2026-11-20.
- `$.process.run` times out after 30 seconds by default and keeps 4 MiB of each output stream; `$.store` holds 4 MiB of JSON in all. Source: https://code.claude.com/docs/en/plugins/mods/reference#limits, checked 2026-11-20.
- `$.session.usage().startedAt` is the session's launch, or a resumed session's first launch; `/clear` restarts it; it is the line the engine's diff panel draws between this session's edits and earlier ones. Source: claude-code/index.d.ts written by Claude Code 2.1.330, lines 15626-15630, checked 2026-11-20.
- On `/clear` the process goes on under a new session id and no `session.start` fires; after a resume it also goes on under another id. Source: claude-code/index.d.ts written by Claude Code 2.1.330, lines 14727-14733, checked 2026-11-20.
- `$.session.id()` returns the transcript file's name. Source: claude-code/index.d.ts written by Claude Code 2.1.330, line 3363, checked 2026-11-20.
- `$.session.root()` moves with `/cd`, a host's directory change or a worktree move. Source: claude-code/index.d.ts written by Claude Code 2.1.330, lines 3345-3351, checked 2026-11-20.
- `$.session.repo().root` is the main working tree's root for a worktree. Source: claude-code/index.d.ts written by Claude Code 2.1.330, lines 15360-15364, checked 2026-11-20.
- `$.process.run` runs a command by argument vector with no shell, and runs git with repo hooks off. Source: claude-code/index.d.ts written by Claude Code 2.1.330, lines 4292-4307, checked 2026-11-20.
- `$.store` is kept between sessions and hot reloads in a JSON file under the user's Claude Code folder; `$.state` survives a hot reload and is not the place to persist. Source: claude-code/index.d.ts written by Claude Code 2.1.330, lines 4116-4152, checked 2026-11-20.
- `$.vcs.detect` returns the working copy's root, main root, revision and branch, or null outside one; for git, `vcs.diff` answers `{ unknown: null }` because git is not served there yet. Source: claude-code/index.d.ts written by Claude Code 2.1.330, lines 4450-4475, 5559-5564 and 20586-20620, checked 2026-11-20.
- `/diff` comes from the built-in mod `cc-plugin-diff`; its panel collapses changes from before this session into one line, cycles between this session's changes, uncommitted changes and changes since the branch left the default branch, and takes per-turn views from Claude's file edits, not git. Source: https://code.claude.com/docs/en/interactive-mode#review-changes-with-/diff, https://code.claude.com/docs/en/plugins/mods/overview#mods-built-into-claude-code, checked 2026-11-20.
- The built-in diff mod sets its session start from `$.session.usage().startedAt`, pins git to the working copy root from `$.vcs.detect`, and reads `startedAt` again after the `clear` and `resume` commands. Source: https://github.com/anthropics/claude-code/blob/main/mods/diff/hooks/register.ts lines 937-940 and 1262-1289, commit 11fd18fc, checked 2026-11-20.
- The built-in diff mod's session mode diffs the working tree against HEAD and tags a file as before the session only when its file time is earlier than the start and it was dirty in the first `git --no-optional-locks status`. Source: https://github.com/anthropics/claude-code/blob/main/mods/diff/hooks/git/tiers/working-tree-tier.ts, https://github.com/anthropics/claude-code/blob/main/mods/diff/hooks/git/probes/tag-pre-session.ts, https://github.com/anthropics/claude-code/blob/main/mods/diff/hooks/git/probes/datings-of/datings-of.ts, https://github.com/anthropics/claude-code/blob/main/mods/diff/hooks/git/probes/dirty-paths-of/dirty-paths-of.ts, commit 11fd18fc, checked 2026-11-20.
- `classic.SessionStart` fires on startup, clear, compact, resume, fork, `/branch`, `--continue` and in-session `/resume`, while `session.start` fires once per process. Source: docs/research/RES-040-ui-ask-opening-question.md:21-22, checked 2026-11-20.
- Row numbers are two digits, local to the idea, and never reused. Source: skills/interview-me/SKILL.md:52, checked 2026-11-20.
- The repo has 312 commits from HEAD, 136 on the first-parent line, 30 merges, 1,081 commits on all refs, 577 tracked files and a 79.23 MiB pack. Source: output of `git rev-list --count HEAD`, `git rev-list --count --all`, `git log --merges`, `git ls-files`, `git count-objects -vH` in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.
- The workspace folders hold 70 Markdown files of 690,691 bytes, 62 of them tracked. Source: `find` and `wc -c` over docs/ideas, docs/decisions, docs/research and specs, and `git ls-files` over them, in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.
- `git log -- specs/SPEC-009-workspace` gives 4 commits, while `--follow` gives 20 for spec.md, 33 for tasks/plan.md and 146 for tasks/todo.md. Source: output of those commands in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.
- The migration commit `f6f785d3` renamed `spec/SPEC-workspace.md`, `tasks/plan.md` and `tasks/todo.md` into `specs/SPEC-009-workspace/`. Source: output of `git show --stat -M f6f785d3`, checked 2026-11-20.
- The root `tasks/todo.md` held upstream-sync's tasks first and the workspace module's tasks later, so `--follow` on SPEC-009's todo.md reaches commits about upstream-sync. Source: output of `git log --follow -- specs/SPEC-009-workspace/tasks/todo.md` and `git show fa268bdc:tasks/todo.md`, checked 2026-11-20.
- A `log -M --name-status` limited to docs/ideas, docs/decisions, docs/research and specs finds 0 renames; with spec, tasks and CAPABILITY-MAP.md added it finds 39. Source: output of those commands in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.
- DEC-004's history with `--follow` reaches its start as CAPABILITY-MAP.md at the repo root in `c9b16072`. Source: output of `git log --follow --name-status -- docs/decisions/DEC-004-capability-map-brain.md`, checked 2026-11-20.
- With `--first-parent`, DEC-004's history shows the two merge commits of pull requests 26 and 22 in place of the branch commits. Source: output of `git log --first-parent -- docs/decisions/DEC-004-capability-map-brain.md`, checked 2026-11-20.
- `git log -L` on the line of IDEA-001 row 20 returns commit `3f12c837`, which added the row. Source: output of `git log -L '/^| 20 |/,+1:docs/ideas/IDEA-001-review-follow-ups.md'`, checked 2026-11-20.
- `git log -L` on SPEC-009's Objective lines returns `0fc76129` and `fa268bdc`, both made under the old path, so `-L` follows the rename. Source: output of `git log -L '/^## Objective/,+3:specs/SPEC-009-workspace/spec.md'`, checked 2026-11-20.
- IDEA-004 has a Notes table and a map table whose first rows both start with `| 01 |`. Source: docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:32 and :59, checked 2026-11-20.
- IDEA-013's row 01 history starts at the split commit `dfcab49b`, and `git blame -C -C -C` attributes the line to that commit and file. Source: output of `git log -L` and `git blame -C -C -C --line-porcelain` on docs/ideas/IDEA-013-session-start-prompt-via-mod.md, checked 2026-11-20.
- Across all refs, 9 commits changed a table row in docs/ideas or specs. Source: output of `git log --all -G '^\| [0-9][0-9] \|' -- docs/ideas specs`, checked 2026-11-20.
- `dfcab49b` has one parent, so pull request 30 was squashed, while pull requests 22 to 29 are merge commits. Source: output of `git rev-list --parents -n 1 dfcab49b` and `git log --first-parent`, checked 2026-11-20.
- In the throwaway repo, after a padding-only reformat, `git log -L` on row 02 showed the row as a new line with an empty old range, and older commits as whole-table hunks. Source: local test in a throwaway repo in the session scratchpad, checked 2026-11-20.
- In the throwaway repo, `git log -L` with the address `/^| 01 |/` matched the Notes table's row, not the map row. Source: local test in a throwaway repo in the session scratchpad, checked 2026-11-20.
- In the throwaway repo, the parse method over `log --follow --name-only` and one `cat-file --batch` reported row 02's status change, row 05's add and row 04's session change, and nothing for the move or the padding, in 28.5 to 30.7 ms for 4 to 5 commits. Source: local test with a Bun script in the session scratchpad, checked 2026-11-20.
- In the throwaway repo, the diff against HEAD at start listed a file that was dirty before the start, the diff against a `git stash create` snapshot did not, `HEAD@{<start time>}` returned the start commit, and `git stash create` added no ref and no stash entry. Source: local test in a throwaway repo in the session scratchpad, checked 2026-11-20.
- In the throwaway repo, after a switch to an older branch `S..HEAD` was empty and the diff against the snapshot listed the switch's changes; on a detached HEAD, `rev-parse --abbrev-ref HEAD` printed `HEAD` and `symbolic-ref -q HEAD` exited 1. Source: local test in a throwaway repo in the session scratchpad, checked 2026-11-20.
- In the throwaway repo, `log --follow` on a deleted file listed the delete and the add, and `log -L` on it failed with "There is no path ... in the commit" until it started from the parent commit. Source: local test in a throwaway repo in the session scratchpad, checked 2026-11-20.
- For the untracked IDEA-015, `git diff HEAD` printed nothing with exit 0, `git log --follow` printed nothing with exit 0, `git log -L` failed with exit 128, and `git diff --no-index --numstat /dev/null` gave 121 added lines. Source: output of those commands in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.
- In a folder outside any repo, `git rev-parse --is-inside-work-tree` fails with "not a git repository" and exit 128. Source: local test in the session scratchpad, checked 2026-11-20.
- This worktree's HEAD reflog is its own file under `.git/worktrees/brain-views-mod/logs/HEAD` and starts at 17:32:01 on 2026-11-20; a lookup before that time returned `dfcab49b` with the warning "log for 'HEAD' only goes back to". Source: output of `git reflog show HEAD`, `git rev-parse --git-dir` and `git rev-parse 'HEAD@{2026-11-20 12:00:00}'`, checked 2026-11-20.
- DEC-002 carries `status: superseded`, and SPEC-005 states its supersession in body prose. Source: docs/decisions/DEC-002-ask-user-question-upstream.md frontmatter, specs/SPEC-005-question/spec.md:8, checked 2026-11-20.
- Wall times in this worktree: workspace `status` 13 to 18 ms; whole-repo `status` 20 to 24 ms; workspace `diff HEAD --numstat` 14 to 15 ms; `diff --no-index` 12 ms; IDEA-001 `log --follow` 23 to 39 ms and 17 ms without it; DEC-004 `log --follow` 21 to 24 ms; SPEC-009 folder log 16 to 17 ms and per-file `--follow` 26 to 35 ms; `log -L` 16 to 18 ms; `cat-file --batch` of 4 revisions 26 ms; `rev-parse HEAD@{time}` 13 ms; whole-history `log -M --name-status` 27 to 36 ms, and 155 to 186 ms with `--all`. Source: zsh `time` around each command in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.

## Follow-ups
- Does DEC-026's "show only" allow the mod to write its own start snapshot, as git objects from `git stash create` or as a copy of the workspace text in the plugin's data folder? Without one, the session change of a file that was dirty before the start includes the earlier edits.
- Do the views show session changes per file at all, given that `/diff` already does, or only per idea, spec, record and row?

## Next action
None.
