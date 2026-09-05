---
package: rjm
path: .agents/architecture/ADR-090-pr-branch-holder-lease.md
type: agent
bytes: 20947
unit: inv-rjm-39
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-090-pr-branch-holder-lease.md

## Purpose — required, verbatim
> "Proposed. This ADR amends ADR-076 for issue #3413. It records the decision before implementation because the change controls who may mutate a PR branch." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:16

## Design intent — required
Provides concurrency control for multi-agent workflows mutating pull request branches by establishing a fail-closed, PR-comment-backed holder lease. Solves the race condition where multiple autonomous agents or CI workflows sharing the same GitHub author account (or same-user tokens) overwrite each other's work or renew each other's advisory leases (as occurred in PR #3405). Without it, same-author concurrent agents lack branch ownership isolation, leading to lost commits, uncoordinated branch mutation, and wasted pre-push test cycles.

## Phase — required
none

## Inputs — required
GitHub PR issue comments (latest 100 comments), GitHub API for actor authentication and maintain/admin permission verification, caller identity sources (`--lease-holder` CLI flag, environment session IDs like `AI_AGENT_SESSION_ID` or `COPILOT_SESSION_ID`, or GitHub Actions run identity `GITHUB_RUN_ID`/`GITHUB_RUN_ATTEMPT`/`GITHUB_JOB`), repository ref state (remote branch HEAD SHA), and prior ADR-076 v1 lease markers (`<!-- PR-AUTOFIX-LEASE -->`).

## Outputs — required
v2 PR comment lease markers (`<!-- PR-BRANCH-HOLDER-LEASE -->` with operations `claim`, `override`, or `release`) posted to GitHub issue comments; standardized process exit codes (0 for success/proceed, 1 for foreign live holder skip, 2 for configuration/usage error, 3 for store read/write failure, 4 for auth/permission failure); machine-readable reason strings (`lease_held`, `lease_malformed`, `lease_store_unavailable`); structured lease audit events emitted to agent session logs or workflow logs.

## Invokes — required
- doc ADR-076 — .agents/architecture/ADR-090-pr-branch-holder-lease.md:28
- doc ADR-035 — .agents/architecture/ADR-090-pr-branch-holder-lease.md:280
- doc ADR-042 — .agents/architecture/ADR-090-pr-branch-holder-lease.md:281
- doc .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md — .agents/architecture/ADR-090-pr-branch-holder-lease.md:289
- script .github/scripts/safe_push_pr_branch.py — .agents/architecture/ADR-090-pr-branch-holder-lease.md:290
- config .github/workflows/pr-maintenance.yml — .agents/architecture/ADR-090-pr-branch-holder-lease.md:291
- script .claude/skills/github/scripts/pr/pr_autofix_lease.py — .agents/architecture/ADR-090-pr-branch-holder-lease.md:292
- command .claude/commands/pr-autofix.md — .agents/architecture/ADR-090-pr-branch-holder-lease.md:293

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:184

## Concepts named — required, verbatim
- `PR Branch Holder Lease` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:12 — defined here
- `ADR review` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:18 — used here
- `fail-closed` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34 — defined here
- `holder lease` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34 — defined here
- `holder id` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34 — defined here
- `verified GitHub actor` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34 — defined here
- `Self-renewal` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34 — defined here
- `Branch mutation enforcement` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:39 — defined here
- `lease timeout` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:40 — defined here
- `Manual override` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:42 — defined here
- `Holder identity fallback order` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:45 — defined here
- `push verification` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:47 — used here
- `orphan leases` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:53 — defined here
- `safe_push_pr_branch.py` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:57 — used here
- `pr-autofix` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:61 — used here
- `PR maintenance workflow` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:62 — used here
- `lease TTL` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:69 — defined here
- `pre-push hook` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:69 — used here
- `pre-push gate` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:79 — used here
- `Lease schema` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:83 — defined here
- `PR comment store` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:121 — defined here
- `release tombstone` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:128 — defined here
- `Override authorization` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:140 — defined here
- `exact-SHA push verification` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:144 — used here
- `Consistency model` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:146 — defined here
- `idempotent readers` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:148 — defined here
- `Exit behavior` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:160 — defined here
- `Rollback and Kill Criteria` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:265 — defined here

## Structure
- `# ADR-090: PR Branch Holder Lease` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:12
- `## Status` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:14
- `## Date` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:20
- `## Context` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:24
- `## Decision` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:32
- `### Holder identity fallback order` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:45
- `### Expiry and renewal` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:67
- `### Lease schema` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:83
- `### Comment ordering and rollout` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:119
- `### Override authorization` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:140
- `### Consistency model` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:146
- `### Exit behavior` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:160
- `## Prior Art Investigation (Required when changing existing systems)` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:174
- `### What Currently Exists` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:176
- `### Historical Rationale` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:182
- `### Why Change Now` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:188
- `## Rationale` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:194
- `### Alternatives Considered` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:196
- `### Trade-offs` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:207
- `## Consequences` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:213
- `### Positive` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:215
- `### Negative` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:223
- `### Neutral` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:232
- `## Impact on Dependent Components` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:238
- `## Implementation Notes` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:250
- `## Rollback and Kill Criteria` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:265
- `## Related Decisions` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:278
- `## References` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:287

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Solves multi-agent concurrency over shared GitHub user accounts by decoupling identity into a `(verified_actor, holder_id)` tuple.
- Fail-closed lease policy for branch mutation distinguishes logic skip (exit 1), usage errors (exit 2), store outages (exit 3), and authentication failures (exit 4), while preserving exact-SHA push verification as the ultimate safety boundary.
- Non-transactional PR comment store is handled via monotonically increasing issue comment IDs and idempotent readers.
- Outlines backward-compatible coexistence with ADR-076 v1 lease markers (`<!-- PR-AUTOFIX-LEASE -->`).

## Context cost
20947 bytes, ~5200 tokens.
