---
type: regex
target: trace
pattern: '^(?:(?![^\n]*"name": ?"Bash"[^\n]*?"command": ?"(?:[^"\\\n]|\\.)*?\bgit\b(?:[^"\\\n;&|]|\\[^n])*?\b(?:merge(?!-base)|cherry-pick)\b)[^\n]*\n)*?(?:(?=[^\n]*"name": ?"Agent")(?=[^\n]*capitalize\.test\.ts)(?=[^\n]*"isolation": ?"worktree")|(?![^\n]*"name": ?"Bash"[^\n]*?"command": ?"(?:[^"\\\n]|\\.)*?\bgit\b(?:[^"\\\n;&|]|\\[^n])*?\b(?:merge(?!-base)|cherry-pick)\b)(?=[^\n]*"name": ?"Bash")(?=[^\n]*?"command": ?"(?:[^"\\\n]|\\.)*?\bgit worktree add\b(?:[^"\\\n;&|]|\\[^n])*?\bfeat/text-tools\b)[^\n]*\n(?:(?![^\n]*"name": ?"Bash"[^\n]*?"command": ?"(?:[^"\\\n]|\\.)*?\bgit\b(?:[^"\\\n;&|]|\\[^n])*?\b(?:merge(?!-base)|cherry-pick)\b)[^\n]*\n)*?(?=[^\n]*"name": ?"Agent")(?=[^\n]*capitalize\.test\.ts)(?=[^\n]*worktrees/T03\b))(?=[^\n]*?"id": ?"(toolu_\w+)")(?![\s\S]*?\n(?=[^\n]*"tool_use_id": ?"\1")(?=[^\n]*(?:Cannot create agent worktree|"is_error": ?true)))'
---

Task 03 starts in a worktree based on the head of `feat/text-tools`, before the main session merges any task. A start is an Agent call whose brief holds the task's block from `todo.md`. Its verification line names a test file that no other scaffold file names. The worktree is one of these:

- `"isolation": "worktree"` on the call itself.
- The worktree fallback: an earlier Bash call runs `git worktree add` with `feat/text-tools` as its start point, and the brief names the path `worktrees/T03`. One command can make one worktree or all of them. The CI run of 2026-10-30 made the five in one loop: `git worktree add -b build/T$n .claude/worktrees/T$n feat/text-tools`.

A refused call is no start. `claude plugin eval` answers an Agent call with isolation "Cannot create agent worktree: worktree isolation is unavailable in this session". So the result with the call's `tool_use_id` must not be that refusal or another error. That result can come lines after the call: in the CI run (2.1.314), system lines and the sub-agents' own lines came between.

With no flags, `^` is the start of the trace. The pattern reads whole lines up to the start, past no Bash call that runs `git merge` or `git cherry-pick`. A build that waits for one task before it starts the next merges first, so its later starts come after a merge. The pattern reads each command as a JSON string, so a quoted argument before `git merge` does not hide the merge.
