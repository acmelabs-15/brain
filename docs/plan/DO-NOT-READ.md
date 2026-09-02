# DO-NOT-READ — The fence

The agent reads this at every session start and treats everything here as forbidden. If the agent encounters something that is not a permitted input (METHOD.md §2) and is not covered here, it stops and asks rather than reading.

## The one rule

**The `v2` branch is the only branch. Nothing from any other ref, worktree, or checkout is an input.**

This working tree is a git worktree at `/Users/peterkloss/Dev/ACMElabs/brain-v2`, checked out to `v2`. The repository has other refs — `main` and `lifecycle` — and another worktree at `/Users/peterkloss/Dev/ACMElabs/brain`. For this project, none of them exist. Never read from them, locally or via the remote.

Forbidden commands and actions include but are not limited to:

```
git checkout main | lifecycle | <any other ref>
git switch <any other ref>
git show <ref>:<path>                git log <ref> / git log --all
git diff <ref>                       git diff v2..<ref>
git reflog                           git cherry-pick / git merge from any ref
git fetch origin main | lifecycle    reading any path under /Users/peterkloss/Dev/ACMElabs/brain/
```

Listing names (`git branch`, `git worktree list`) is fine. Reading content from them is not.

## The second rule

**Git history is not an input.** This branch carries commits from before this project began. Whatever they contain, they are not inputs. The working tree is the only readable state; git is for committing forward, never reading backward. The boundary is this project's first commit (message beginning `lifecycle synthesis:`). Forbidden: `git show <commit>:<path>`, `git log -p`, `git diff <commit>`, or any unbounded `git log` that crosses the boundary. Reading between project-made commits is permitted only where METHOD.md explicitly calls for it (§11 step 2). What changed in this project is read from `STATE.md` and the session handoffs.

Also forbidden: any file outside this worktree except the pinned clones under `sources/` — notes, exports, cached plugin installs, marketplace caches, other checkouts of this or any related repository.

## Permitted despite looking related

Nothing yet. This branch has no pre-existing skills, commands, or agents. If Peter adds something to the branch that the agent should read as a convention or exemplar, it is listed here.

```
# (none)
```

## Confirmation

- [x] `v2` branch contains only the empty plugin scaffold and this kit — confirmed by Peter, 2026-09-02
- [x] No related caches, installed copies, or external notes are inputs — confirmed by Peter, 2026-09-02
- [x] The harness's automatic memory and cross-session context features are disabled for this project — confirmed by Peter, 2026-09-02
- [x] Re-checked by Peter before Session 1: Peter on 2026-09-02
