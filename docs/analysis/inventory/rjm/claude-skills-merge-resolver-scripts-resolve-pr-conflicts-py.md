---
package: rjm
path: .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py
type: script
bytes: 28752
unit: inv-rjm-125
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py, sha256: 863a932e455ed708b80aa96aea74f1a3fb16ee2903dfc65669b78709d1a09bac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py

## Purpose — required, verbatim
> "Resolve merge conflicts for a PR branch with auto-resolution support." — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:2

## Design intent — required
Automated pull request merge conflict resolution script extracted from `Invoke-PRMaintenance` to support the `merge-resolver` skill. It provides robust auto-resolution for known safe file patterns (session artifacts, templates, lock files, agent definitions) by accepting base branch versions (`--theirs`), specialized version-aware resolution for Claude plugin manifests (`plugin.json`), and strict security sanitization for branch names and worktree paths (preventing command injection and directory traversal per ADR-015). It supports both GitHub Actions runner environments (in-place merge) and local developer environments (isolated git worktrees), validating resolutions before pushing cleanly.

## Phase — required
cross-phase

## Inputs — required
- CLI options: `--owner` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:729, `--repo` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:730, `--pr-number` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:732, `--branch-name` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:738, `--target-branch` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:743, `--worktree-base-path` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:748, `--dry-run` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:753
- Environment variables: `COPILOT_PLUGIN_ROOT` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:129, `CLAUDE_PLUGIN_ROOT` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:130, `GITHUB_WORKSPACE` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:131, `GITHUB_ACTIONS` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:326
- Git remote configuration: `origin` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:304
- Plugin manifest: `plugin.json` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:50
- Git index conflict stages: `show` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:394, 395
- Git conflict status: `diff` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:533

## Outputs — required
- Staged git commits: `commit` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:556
- Pushed git branch updates: `push` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:562
- Execution summary report in JSON format: `files_resolved` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:495, `files_blocked` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:496

## Invokes — required
- script .claude/lib/github_core/api.py — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:42

## Invoked by — required
- skill merge-resolver — .claude/skills/merge-resolver/SKILL.md:23
- agent merge-resolver — .claude/agents/merge-resolver.md:229

## Concepts named — required, verbatim
- `Invoke-PRMaintenance` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:4 — used here
- `ADR-015` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:7 — used here
- `ADR-035` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:12 — used here
- `ADR-092` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:339 — used here
- `AUTO_RESOLVABLE_PATTERNS` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:216 — defined here
- `is_safe_branch_name` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:252 — defined here
- `get_safe_worktree_path` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:269 — defined here
- `is_github_runner` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:324 — defined here
- `is_auto_resolvable` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:329 — defined here
- `is_plugin_manifest` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:349 — defined here
- `resolve_plugin_manifest_conflict` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:377 — defined here
- `resolve_conflicts_runner` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:486 — defined here
- `resolve_conflicts_worktree` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:572 — defined here
- `resolve_pr_conflicts` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:686 — defined here

## Structure
- def _core_import_error — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:54
- def _is_own_plugin — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:85
- def _lib_dir_candidates — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:103
- def _resolve_lib_dir — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:143
- def is_safe_branch_name — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:252
- def get_safe_worktree_path — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:269
- def get_repo_info — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:295
- def is_github_runner — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:324
- def is_auto_resolvable — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:329
- def is_plugin_manifest — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:349
- def _parse_plain_semver — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:354
- def _write_manifest_resolution — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:362
- def resolve_plugin_manifest_conflict — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:377
- def _resolve_conflicted_file — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:429
- def _run_git — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:460
- def resolve_conflicts_runner — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:486
- def resolve_conflicts_worktree — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:572
- def resolve_pr_conflicts — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:686
- def build_parser — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:725
- def main — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:760

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py`, python, 790 lines
- documented invocation (verbatim, path:line):
  > "python3 .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py \" — .claude/skills/merge-resolver/SKILL.md:23
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py --pr-number 123 --branch-name "fix/test" --dry-run`
  Stdout: `{"success": true, "message": "[DryRun] Would create worktree at /Users/peterkloss/Dev/ACMElabs/brain-pr-123 and resolve conflicts for PR #123", "files_resolved": [], "files_blocked": []}`
  Exit code: `0`
- documented exit codes (verbatim) vs. actual exit paths in code:
  Documented in `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:12-17`:
  > "0 - Success: No conflicts or conflicts auto-resolved" — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:13
  > "1 - Error: Conflicts could not be auto-resolved or resolution failed" — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:14
  > "2 - Config error (no candidate plugin lib directory carries github_core)" — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:15
  > "3 - External error (git command failure)" — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:16
  Actual exit paths in code:
  - Exit 0: `return 0 if result["success"] else 1` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:785
  - Exit 1: `return 1` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:772
  - Exit 2: `sys.exit(2)` — .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:204
  - Exit 3: Not directly raised via sys.exit in resolve_pr_conflicts.py; git failures in subfunctions set result success to False, resulting in exit 1 from main().
- for validators/gates: not a validator/gate (action script with dry-run mode)
- does the output match what the documentation claims: yes, dry-run produces documented JSON structure with success, message, files_resolved, files_blocked

## Defects — required
- `exit-code-mismatch` · .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:16 · Docstring documents exit code 3 for external error (git command failure), but git command failures set `result["success"] = False` which causes `main()` to return 1 (line 785); `sys.exit(3)` is never called.
- `doc-drift` · .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py:554 · Commit message hardcodes `auto-resolve HANDOFF.md conflicts` even when resolving other files (lines 554, 654).

## Observations
- Implements comprehensive security hardening per ADR-015: rejects branch names with shell metacharacters, control characters, git special chars, and leading hyphens (`is_safe_branch_name`), and ensures worktree paths cannot escape base directory (`get_safe_worktree_path`).
- Specialized version resolution for plugin manifests (`resolve_plugin_manifest_conflict`) per ADR-092: intelligently drops `version` if either side omits it, or computes `max(ours, theirs) + 1` patch bump if both have plain semver.
- Multi-candidate library resolution (`_resolve_lib_dir`) checks `COPILOT_PLUGIN_ROOT`, `CLAUDE_PLUGIN_ROOT`, `GITHUB_WORKSPACE`, and local parents with strict integrity checks (`_is_own_plugin` manifest verification and isolated subprocess import probe) to prevent foreign code execution.

## Context cost
28,752 bytes. Approximately 7,200 tokens.
