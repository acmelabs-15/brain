---
unit: inv-addy-17
phase: 1
package: addy
session: 014
subagent_returned: complete
---

# Unit inv-addy-17

## Files assigned
- [x] `external/git-workflow-and-versioning.md` (26,317 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-git-workflow-and-versioning-md.md` (17,944 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-17.md` (4,124 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Ship Phase Alignment vs Cross-Cutting Execution (inv-addy-17 vs inv-addy-28 / shipping-and-launch)**:
  `external/git-workflow-and-versioning.md:5, 12` categorizes `git-workflow-and-versioning` under the `Ship phase`, aligning with `CLAUDE.md:26`, `README.md:371`, and `skills/using-agent-skills/SKILL.md:187`. However, the page itself explicitly defines the triggering condition as "Making any code change (always)." at `external/git-workflow-and-versioning.md:5`. In practice, git commit hygiene, branch isolation, and save points are cross-cutting habits that operate throughout Plan, Build, and Verify, rather than a step executed solely at the end of the lifecycle during final release.
- **Command Binding Drift (/ship badge vs shipping-and-launch)**:
  The external documentation page displays `Command /ship` in its sidebar badge (`external/git-workflow-and-versioning.md:12`). However, `/ship` (`commands/ship.toml:1-72`, `.claude/commands/ship.md:1-72`) specifically invokes `shipping-and-launch` ("Invoke the shipping-and-launch skill.") to run a parallel fan-out across three reviewer personas (`code-reviewer`, `security-auditor`, `test-engineer`) and synthesize a go/no-go launch decision with a rollback plan. The command neither executes nor mentions `git-workflow-and-versioning`. The repository provides no dedicated `/git` or `/commit` slash command.
- **Implicit Lifecycle Mapping Gap in AGENTS.md**:
  `sources/addy/AGENTS.md:45` specifies `SHIP → shipping-and-launch` in its implicit command mapping table for OpenCode, completely omitting `git-workflow-and-versioning` from the lifecycle sequence.
- **Skill Anatomy Template vs Implementation Reality**:
  The external page asserts a standardized 6-section skill anatomy template ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"). However, the underlying repository skill `skills/git-workflow-and-versioning/SKILL.md` contains no section titled `Process`, providing instead 9 detailed workflow and domain sections: `Core Principles` (trunk-based development, commit early/often, atomic commits, descriptive messages, separate concerns, change sizing), `Branching Strategy`, `Working with Worktrees`, `The Save Point Pattern`, `Change Summaries`, `Pre-Commit Hygiene`, `Handling Generated Files`, `Using Git for Debugging`, and `Release & Versioning`. Additionally, the rationalizations section is titled `## Common Rationalizations` (line 313) rather than `Rationalizations`.
- **Worktrees for Concurrent AI Coding**:
  `skills/git-workflow-and-versioning/SKILL.md:147-171` provides concrete guidance on using `git worktree` to allow parallel agents to operate in isolated directory checkouts without colliding on branches or lockfiles.
- **Vercel Skills CLI Distribution**:
  The landing page emphasizes modular adoption via `npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning` or full-pack installation (`npx skills add addyosmani/agent-skills`), making the skill available to non-Claude Code agent environments (Cursor, Codex, Antigravity).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,579 tokens (26,317 bytes across 1 file).
- Approximate tokens of output written: ~4,400 tokens across 1 inventory card and 1 unit report.
