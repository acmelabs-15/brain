---
package: rjm
path: .claude/skills/git-advanced-workflows/SKILL.md
type: skill
bytes: 6463
unit: inv-rjm-121
in_scope_via: docs/skill-reference.md
aliases: []
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/git-advanced-workflows/SKILL.md

## Purpose — required, verbatim
> "Advanced Git techniques for clean history, effective collaboration, and confident recovery." — .claude/skills/git-advanced-workflows/SKILL.md:10

## Design intent — required
Provides procedural, command-level operational guidance for executing advanced, potentially destructive Git workflows—specifically interactive rebasing (history cleanup, autosquash, commit splitting), multi-release cherry-picking, binary bug isolation via automated bisect, worktree isolation for concurrent development, and reflog-based disaster recovery. Crucially prevents data loss and collaboration friction by requiring pre-operation safety branches (`backup-<timestamp>`), enforcing non-destructive remote push discipline (`--force-with-lease`), documenting the move-safe Python venv interpreter trap in worktrees with automated repair tooling (`scripts/maintenance/repair_worktree_venv.py`), and contrasting rebase vs merge decisions. Without this skill, developers and autonomous agents risk destructive history overwrites, orphaned worktree disk consumption, broken venv shebangs when moving worktrees, unrecoverable rebase mistakes, and lost commit histories across multi-branch environments.

## Phase — required
cross-phase

## Inputs — required
- User intent / trigger phrases: `rebase my branch`, `cherry-pick a commit`, `find the breaking commit`, `recover lost commits`, `use git worktrees` (.claude/skills/git-advanced-workflows/SKILL.md:14-20)
- Repository working tree state and history via `git status`, `git log --oneline -10`, and `git worktree list` (.claude/skills/git-advanced-workflows/SKILL.md:27, 151, 154)
- Git commit hashes, branch names, release tags, and automated bisect test scripts (e.g. `./test.sh`) (.claude/skills/git-advanced-workflows/SKILL.md:37, 69, 89, 98)
- Worktree paths and `.venv` launcher scripts (.claude/skills/git-advanced-workflows/SKILL.md:105, 112-115)

## Outputs — required
- Safety backup branches (e.g. `backup-<timestamp>`) (.claude/skills/git-advanced-workflows/SKILL.md:28)
- Restructured, cleaned, or split git commit history (.claude/skills/git-advanced-workflows/SKILL.md:38-60)
- Cherry-picked commits on release branches (.claude/skills/git-advanced-workflows/SKILL.md:69-72)
- Identification of bug-introducing commits via `git bisect` (.claude/skills/git-advanced-workflows/SKILL.md:86-100)
- Created, pruned, or removed git worktrees (e.g. `~/worktrees/myapp-hotfix`) (.claude/skills/git-advanced-workflows/SKILL.md:105-109)
- Repaired worktree virtual environments via `scripts/maintenance/repair_worktree_venv.py` (.claude/skills/git-advanced-workflows/SKILL.md:115)
- Recovered commits or branches restored from reflog (e.g. `recovery`, `recovered`) (.claude/skills/git-advanced-workflows/SKILL.md:128, 146)

## Invokes — required
- script scripts/maintenance/repair_worktree_venv.py — .claude/skills/git-advanced-workflows/SKILL.md:115

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `rebasing` — .claude/skills/git-advanced-workflows/SKILL.md:4 — used here
- `cherry-picking` — .claude/skills/git-advanced-workflows/SKILL.md:4 — used here
- `bisect` — .claude/skills/git-advanced-workflows/SKILL.md:4 — used here
- `worktrees` — .claude/skills/git-advanced-workflows/SKILL.md:4 — used here
- `reflog` — .claude/skills/git-advanced-workflows/SKILL.md:4 — used here
- `feature branches` — .claude/skills/git-advanced-workflows/SKILL.md:4 — used here
- `Interactive or standard rebase` — .claude/skills/git-advanced-workflows/SKILL.md:16 — used here
- `Git bisect workflow` — .claude/skills/git-advanced-workflows/SKILL.md:18 — defined here
- `Phase 1: Assess the Situation` — .claude/skills/git-advanced-workflows/SKILL.md:24 — defined here
- `safety branch` — .claude/skills/git-advanced-workflows/SKILL.md:28 — defined here
- `Phase 2: Execute the Workflow` — .claude/skills/git-advanced-workflows/SKILL.md:32 — defined here
- `Feature Branch` — .claude/skills/git-advanced-workflows/SKILL.md:34 — used here
- `Rebase operations` — .claude/skills/git-advanced-workflows/SKILL.md:43 — defined here
- `pick` — .claude/skills/git-advanced-workflows/SKILL.md:43 — used here
- `reword` — .claude/skills/git-advanced-workflows/SKILL.md:43 — used here
- `edit` — .claude/skills/git-advanced-workflows/SKILL.md:43 — used here
- `squash` — .claude/skills/git-advanced-workflows/SKILL.md:43 — used here
- `fixup` — .claude/skills/git-advanced-workflows/SKILL.md:43 — used here
- `drop` — .claude/skills/git-advanced-workflows/SKILL.md:43 — used here
- `Autosquash pattern` — .claude/skills/git-advanced-workflows/SKILL.md:45 — defined here
- `Split a commit` — .claude/skills/git-advanced-workflows/SKILL.md:52 — defined here
- `Hotfix` — .claude/skills/git-advanced-workflows/SKILL.md:62 — used here
- `Partial cherry-pick` — .claude/skills/git-advanced-workflows/SKILL.md:76 — defined here
- `Bisect` — .claude/skills/git-advanced-workflows/SKILL.md:84 — used here
- `Automated bisect` — .claude/skills/git-advanced-workflows/SKILL.md:94 — defined here
- `Multi-Branch Development` — .claude/skills/git-advanced-workflows/SKILL.md:102 — defined here
- `Move-safe caveat` — .claude/skills/git-advanced-workflows/SKILL.md:112 — defined here
- `Recovery` — .claude/skills/git-advanced-workflows/SKILL.md:123 — defined here
- `Abort operations in progress` — .claude/skills/git-advanced-workflows/SKILL.md:131 — defined here
- `Phase 3: Verify and Clean Up` — .claude/skills/git-advanced-workflows/SKILL.md:149 — defined here
- `Decision Guide` — .claude/skills/git-advanced-workflows/SKILL.md:156 — defined here
- `Rebase vs Merge` — .claude/skills/git-advanced-workflows/SKILL.md:158 — defined here
- `linear history` — .claude/skills/git-advanced-workflows/SKILL.md:164 — used here
- `Anti-Patterns` — .claude/skills/git-advanced-workflows/SKILL.md:166 — defined here
- `Rebasing shared branches` — .claude/skills/git-advanced-workflows/SKILL.md:170 — defined here
- `--force-with-lease` — .claude/skills/git-advanced-workflows/SKILL.md:171 — used here
- `Bisecting on dirty working tree` — .claude/skills/git-advanced-workflows/SKILL.md:172 — defined here
- `Orphaned worktrees` — .claude/skills/git-advanced-workflows/SKILL.md:173 — defined here
- `No backup before complex rebase` — .claude/skills/git-advanced-workflows/SKILL.md:174 — defined here
- `Verification` — .claude/skills/git-advanced-workflows/SKILL.md:176 — defined here

## Structure
- `# Git Advanced Workflows` — .claude/skills/git-advanced-workflows/SKILL.md:8
- `## Triggers` — .claude/skills/git-advanced-workflows/SKILL.md:12
- `## Process` — .claude/skills/git-advanced-workflows/SKILL.md:22
- `### Phase 1: Assess the Situation` — .claude/skills/git-advanced-workflows/SKILL.md:24
- `### Phase 2: Execute the Workflow` — .claude/skills/git-advanced-workflows/SKILL.md:32
- `#### Rebase: Clean Up Feature Branch Before PR` — .claude/skills/git-advanced-workflows/SKILL.md:34
- `#### Cherry-Pick: Apply Hotfix to Multiple Releases` — .claude/skills/git-advanced-workflows/SKILL.md:62
- `#### Bisect: Find Bug Introduction` — .claude/skills/git-advanced-workflows/SKILL.md:84
- `#### Worktree: Multi-Branch Development` — .claude/skills/git-advanced-workflows/SKILL.md:102
- `#### Recovery: Undo Mistakes with Reflog` — .claude/skills/git-advanced-workflows/SKILL.md:123
- `### Phase 3: Verify and Clean Up` — .claude/skills/git-advanced-workflows/SKILL.md:149
- `## Decision Guide` — .claude/skills/git-advanced-workflows/SKILL.md:156
- `### Rebase vs Merge` — .claude/skills/git-advanced-workflows/SKILL.md:158
- `## Anti-Patterns` — .claude/skills/git-advanced-workflows/SKILL.md:166
- `## Verification` — .claude/skills/git-advanced-workflows/SKILL.md:176

## Scripts — required if type is script or the skill ships scripts
The skill does not ship any bundled scripts in its directory (`.claude/skills/git-advanced-workflows/` contains only `SKILL.md`). However, it references an external repository maintenance script:
- path: `scripts/maintenance/repair_worktree_venv.py`, language: Python, lines: 327
- documented invocation:
  > "Run `scripts/maintenance/repair_worktree_venv.py` with `uv run python` (or run `uv sync --frozen --extra dev --reinstall`) to rewrite them, and prefer `uv run python -m pytest` for move-safe validation." — .claude/skills/git-advanced-workflows/SKILL.md:114-117
- **executed:** yes
- actual command run: `python3 scripts/maintenance/repair_worktree_venv.py --check`
- stdout: `venv repair: OK, all launcher shebangs point inside /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv.`
- **actual exit code:** 0
- documented exit codes vs actual exit paths in code:
  In `scripts/maintenance/repair_worktree_venv.py`:
  - `return 0` at line 322 / `sys.exit(main())` at line 326: clean exit (no stale shebangs or default-mode repair cleared them)
  - `return 1` at line 316: stale shebangs found in `--check` mode
  - `return 2` at line 293: configuration error (not inside a git worktree or git unavailable)
  - `return 3` at line 305 and line 321: external error (`uv sync` failed or external repair did not take effect)
  Exit codes follow ADR-035 standard defined in script docstring (lines 30-36). `SKILL.md` does not document exit codes.
- for validators/gates: can it exit non-zero? Yes, exits 1 on stale shebangs in `--check` mode, 2 on git configuration error, 3 on external repair failure. Does it fail on the source repo's default branch? No, exits 0.
- does output match what documentation claims: Yes, verifies launcher shebangs point inside the repository venv without error.

## Defects — required
- orphan · .claude/skills/git-advanced-workflows/SKILL.md:1 · Skill is not invoked or referenced by any lifecycle command (/spec, /plan, /build, /test, /ship) or agent; it is referenced only as a passive guidance document in docs/skill-reference.md:192 and validation baselines.

## Observations
- Documents a critical operational caveat for Python virtual environments in git worktrees: moving a worktree invalidates absolute-path shebangs in `.venv/bin/*` / `.venv/Scripts/*`, requiring launcher recreation via `uv sync --frozen --extra dev --reinstall` or `scripts/maintenance/repair_worktree_venv.py`.
- Strongly reinforces safe remote collaborative history practices by mandating `--force-with-lease` over raw `--force` and requiring pre-flight backup branches (`git branch backup-$(date +%s)`).
- Identified in repository evaluation triage (`evals/skill-triage.md:114`) as a "Guidance document (passive context territory)" rather than an active automated agent workflow.

## Context cost
6463 bytes (~1615 tokens) for `SKILL.md`. The skill carries no bundled references or local scripts. If the referenced external maintenance script `scripts/maintenance/repair_worktree_venv.py` (12725 bytes, ~3180 tokens) is included, total context cost is 19188 bytes (~4795 tokens).
