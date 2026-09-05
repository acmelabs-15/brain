---
unit: inv-rjm-39
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-39

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-090-pr-branch-holder-lease.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-091-post-merge-version-bot.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-090-pr-branch-holder-lease-md.md` (9161 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-091-post-merge-version-bot-md.md` (9815 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-39 covers two closely sequenced architecture decision records addressing multi-agent and CI automation bottlenecks in pull request workflows:
  1. ADR-090 (`.agents/architecture/ADR-090-pr-branch-holder-lease.md`, 20,947 bytes, 294 lines):
     - Amends ADR-076 (PR comment lease for `pr-autofix`) for issue #3413.
     - Problem: Same-user agents and CI workflows sharing a GitHub author account could overwrite each other's branches or renew each other's advisory leases (demonstrated in PR #3405 incident window).
     - Solution: Establishes a fail-closed, PR-comment-backed holder lease keyed by `(repository, pr_number, branch)` with holder identity defined as a `(verified_actor, holder_id)` tuple.
     - Fallback identity order: `--lease-holder` argument -> harness session env (`AI_AGENT_SESSION_ID`, `COPILOT_SESSION_ID`) -> GitHub Actions run identity (`GITHUB_RUN_ID` + `GITHUB_RUN_ATTEMPT` + `GITHUB_JOB`). Generated one-shot IDs are explicitly prohibited from acquiring or verifying enforced leases.
     - 30-minute TTL with mandatory renewal every 5 minutes during long commands (tests, hooks).
     - Strict exit code taxonomy: 0 (proceed), 1 (foreign live holder skip), 2 (usage/config error), 3 (store failure fail-closed), 4 (auth failure fail-closed).
     - Backward compatibility: Reads ADR-076 v1 markers (`<!-- PR-AUTOFIX-LEASE -->`) during rollout and treats active v1 leases as foreign holders.
     - Preserves exact-SHA push verification as the ultimate safety boundary before branch transport.
     - Direct relationships: invokes ADR-076, ADR-035, ADR-042; invoked by `.agents/architecture/README.md`; affects `.github/scripts/safe_push_pr_branch.py`, `.claude/skills/github/scripts/pr/pr_autofix_lease.py`, `.github/workflows/pr-maintenance.yml`, and `.claude/commands/pr-autofix.md`.
  2. ADR-091 (`.agents/architecture/ADR-091-post-merge-version-bot.md`, 15,709 bytes, 286 lines):
     - Accepted on 2026-07-31 for issue #4080; supersedes ADR-079; superseded on 2026-08-01 by ADR-092.
     - Problem: 11 of 24 dirty open PRs conflicted on nothing but the scalar `version` field in parity manifests (`.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json`), and 2 on committed quality baselines (`taste_count_baseline.txt`, `ruff_count_baseline.txt`), creating O(N^2) serialization overhead.
     - Solution proposed/accepted in ADR-091: Post-merge GitHub Actions bot that owns scalar version bumps and baseline ratcheting on push to `main` with `[skip ci]`. Inverts the PR-time gate so PRs touching version fields fail.
     - Mechanism failure and supersession: As documented in ADR-091 Status and ADR-092, the post-merge bot failed upon landing in commit `edecb8e85` due to 4 silent failure modes:
       a. The bot tore `main` on its own merge commit (packaged plugin source changed under unchanged version).
       b. The bot never ran because its squashed merge message quoted its commit template containing `[skip ci]`.
       c. The bot could not have pushed even if run because GitHub ruleset 11104075 only allows bypass for `RepositoryRole id=5` (and `github-actions[bot]` is not one, failing with GH013).
       d. Manual repair was blocked because both manifests were marked `bot_managed`.
     - PR #4179 deleted the workflow, and `tests/ci/test_no_push_bot.py` was introduced as a regression test ensuring `post-merge-version-bump.yml` does not exist and no workflow bare-pushes from `github-actions[bot]`.
     - ADR-092 completely superseded ADR-091 by omitting the `version` field from manifests entirely so Claude Code derives freshness from the git commit SHA.
     - Direct relationships: supersedes ADR-079; superseded by ADR-092; invoked by `.agents/architecture/README.md`, ADR-079, ADR-092; invokes `validate_plugin_version_bump.py`, `check_plugin_manifest_parity.py`, `taste_count_ratchet.py`, `ruff_count_ratchet.py`, ADR-006, ADR-072.
- Duplication ledger:
  - Neither file in inv-rjm-39 appears in `docs/analysis/manifest/rjm-duplicates.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,100 tokens (36,656 bytes across 2 files); approximate tokens of output written: ~5,800 tokens (18,976 bytes across 2 cards, ~4,000 bytes for unit report).
