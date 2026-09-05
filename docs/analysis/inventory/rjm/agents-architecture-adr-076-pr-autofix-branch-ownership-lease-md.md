---
package: rjm
path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md
type: agent
bytes: 54740
unit: inv-rjm-31
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md

## Purpose — required, verbatim
> "Adopt a **PR-comment-backed, advisory, fail-open branch-ownership lease** that `pr-autofix` (local) and remote review/autofix routines acquire before committing fix work to a shared PR branch, and release when done. The lease coordinates; the existing Force-Push Safety SHA gate continues to enforce. The lease never replaces the SHA gate and never relaxes it." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:55

## Design intent — required
ADR-076 establishes an advisory, fail-open, PR-comment-backed branch-ownership lease protocol for coordinating automated fix loops (`pr-autofix`, remote CI routines, CodeRabbit) operating on the same PR branch. Prior to this decision, the only mechanism preventing collisions was the post-hoc Force-Push Safety SHA gate, which blocked overwrites at push time but failed to prevent concurrent loops from wasting computation on duplicate or conflicting fixes (as evidenced by incident #2611). ADR-076 introduces a lightweight, human-visible coordination lease (15-minute TTL, latest-marker-wins, verified-author renewal, reader-clock MAX_TTL enforcement) that allows a second loop to detect an active holder and skip or wait before doing fix work, while keeping the SHA gate as the authoritative safety backstop. Without it, concurrent or overlapping autofix routines repeatedly incur wasted LLM cycles and manual merge conflict resolution.

## Phase — required
none

## Inputs — required
Issue #2615 backlog evaluation and incident evidence from PR #2611 (collision during uncoordinated autofix); issue auto-PRD (#2615 comment 2026-06-16); standard 6-agent adr-review debate results (`.agents/critique/ADR-076-debate-log.md`); PR timeline comments and head SHA fetched via GitHub REST API; and issue #5165 incident report (unbounded renew loop on merged PR #5078) for the 2026-08-19 amendment.

## Outputs — required
Architecture decision record defining the PR-comment branch-ownership lease protocol; contract specification for Phase 1 lease helpers (`acquire_lease`, `release_lease`, and tombstoning); hidden-marker comment schema (`<!-- PR-AUTOFIX-LEASE -->`); and amendment specifications for PR-closed checks returning `SKIP`/`pr-closed` on lease renewal.

## Invokes — required
- doc ADR-035 — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:222
- doc ADR-066 — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:223
- doc ADR-009 — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:224
- doc ADR-014 — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:225
- script check_pr_live_state.py — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:232
- command pr-autofix.md — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:233
- doc autonomous-pr-monitor.md — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:234
- reference release-it.md — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:244
- doc ADR-090 — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:319

## Invoked by — required
- doc ADR-076 — .agents/architecture/README.md:139
- agent ADR-076 — .agents/architecture/ADR-090-pr-branch-holder-lease.md:16

## Concepts named — required, verbatim
- `PR-Autofix Branch-Ownership Lease` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:12 — defined here
- `adr-review debate` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:18 — used here
- `pr-autofix` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:26 — used here
- `Force-Push Safety SHA gate` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:28 — used here
- `verdict-gate pattern` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:43 — used here
- `lease` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:47 — defined here
- `PR-comment-backed, advisory, fail-open branch-ownership lease` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:55 — defined here
- `Lease storage` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:59 — defined here
- `PR-AUTOFIX-LEASE` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:64 — defined here
- `latest marker comment wins` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:72 — defined here
- `tombstone` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:72 — defined here
- `Lease TTL` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:76 — defined here
- `Concurrency semantics` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:82 — defined here
- `mutual exclusion` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:84 — used here
- `acquire_lease` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:86 — defined here
- `MAX_TTL` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:89 — defined here
- `SKIP` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:90 — used here
- `self-renewal` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:91 — defined here
- `ACT` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:91 — used here
- `Fail open` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:93 — defined here
- `Push-time guard` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:95 — defined here
- `release_lease` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:100 — defined here
- `atomic CAS` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:102 — used here
- `kill criterion` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:122 — defined here
- `GO/NO-GO` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:122 — defined here
- `lease_collision_blocked` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:218 — defined here
- `RENEW_SKIP_MARGIN` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:256 — used here
- `noop fast path` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:256 — used here
- `RENEW_FAILOPEN_LIVENESS_MARGIN` — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:266 — used here

## Structure
- Frontmatter metadata (id, status, date, decision-makers, supersedes, superseded-by, explainer, implemented) — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:1-10
- # ADR-076: PR-Autofix Branch-Ownership Lease — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:12
- ## Status — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:14
- ## Date — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:20
- ## Context — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:24
- ### What a lease must and must not do — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:47
- ## Decision — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:53
- ### 1. Lease storage: a marker comment on the PR — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:59
- ### 2. Lease TTL: short, fixed, self-expiring — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:76
- ### 3. Concurrency semantics: read-check-write with a SHA freshness guard, fail-open — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:82
- ### 4. Owner and session identity — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:104
- ### 5. Scope: a phased, reversible rollout; only the protocol is committed here — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:110
- ## Prior Art Investigation (Required when changing existing systems) — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:124
- ### What Currently Exists — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:126
- ### Historical Rationale — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:134
- ### Why Change Now — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:140
- ## Rationale — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:146
- ### Alternatives Considered — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:148
- ### Trade-offs — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:159
- ## Consequences — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:163
- ### Positive — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:165
- ### Negative — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:173
- ### Neutral — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:181
- ## Security — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:186
- ## Impact on Dependent Components — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:198
- ## Implementation Notes — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:210
- ## Related Decisions — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:220
- ## References — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:230
- ## Amendment 2026-07-27 — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:240
- ## Amendment 2026-08-19: PR-closed check on the renew path (revised after adr-review round 1) — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:246
- ### Context — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:253
- ### Decision — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:264
- ### Fail-open vs fail-closed for the widened read — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:274
- ### Alternatives Considered — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:280
- ### Security — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:290
- ### Impact on Dependent Components — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:296
- ### Consequences — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:306
- ### Related Decisions — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:314

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:106 · cites `new_session_log.py` for local session ID creation, but the script was deleted under issue #5138 (session-init deletion).
- missing-path · .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:204 · references `scripts/pr_autofix_lease.py`, but the script was implemented at `.claude/skills/github/scripts/pr/pr_autofix_lease.py`.
- missing-path · .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:236 · references `.claude/rules/release-it.md`, which does not exist at that path (relocated to `.claude/skills/software-engineering-library/references/release-it.md` per ADR-088 as acknowledged in Amendment 2026-07-27).
- doc-drift · .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:9 · frontmatter specifies `implemented: false`, contradicting line 18 ("Phase-1 tooling (`pr_autofix_lease.py`) ships with this acceptance under #2615") and shipped code in `.claude/skills/github/scripts/pr/pr_autofix_lease.py`.
- internal-contradiction · .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:93 · Decision part 3 step 6 specifies fail-open behavior ("return ACT with reason `lease-store-unavailable`"), which is superseded by issue #4966 fail-closed narrowing as documented in Amendment 2026-08-19 (lines 250-251).

## Observations
- Directly operationalized in `.claude/skills/github/scripts/pr/pr_autofix_lease.py` and tested comprehensively across 80+ tests in `tests/test_pr_autofix_lease.py`.
- Exhibits strong defense-in-depth design: lease coordination is advisory and fails open/closed on specific failure boundaries, while the Force-Push Safety SHA gate remains the sole hard, non-negotiable repository protection.
- Thorough security modeling incorporating CWE-78 (strict key format), CWE-345 (verified GitHub user login authentication for renewal rather than forgeable body strings), CWE-400 (DoS mitigation by bounding timeline reads to latest 100 comments), and CWE-367 (reader-clock MAX_TTL enforcement defeating far-future lease forgeries).

## Context cost
54740 bytes, ~13700 tokens.
