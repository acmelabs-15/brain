---
package: rjm
path: .agents/architecture/ADR-095-scoped-re-review-axes.md
type: agent
bytes: 7277
unit: inv-rjm-40
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-095-scoped-re-review-axes.md, sha256: 40d36bdf11f4993ff9f64ee8ca2f0b202d8dc35248577176d5885a1953917e57}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-095-scoped-re-review-axes.md

## Purpose — required, verbatim
> "Rejected. Recorded so the proposal is findable and does not return." — .agents/architecture/ADR-095-scoped-re-review-axes.md:16

## Design intent — required
Architecture decision record explicitly rejecting a proposed `/review --axes=<list>` flag that would have scoped subsequent review rounds to only re-run axes that flagged in earlier rounds. Documents the architectural failure modes identified during multi-agent adversarial critique: past-finding scoping selects against new defects introduced by fixes (demonstrated empirically on PR #5059 where a bug introduced by an earlier fix was caught by four un-flagged axes), the cost justification was retroactively projected onto PRs that predated the review marker mechanism, the validator changes targeted generated mirrors rather than canonical source files, and contributor-mode `/ship` would not have enforced marker absence. Serves as permanent negative documentation and precedents the repository convention of recording rejected proposals with full rationale to prevent resurrecting flawed designs.

## Phase — required
cross-phase

## Inputs — required
- "A `/review --axes=<comma-separated-list>` flag." — .agents/architecture/ADR-095-scoped-re-review-axes.md:25
- "`.agents/analysis/009-phase1-agent-comment-baseline.md:163` reports 182" — .agents/architecture/ADR-095-scoped-re-review-axes.md:51
- "On PR #5059 the full review fan-out caught a defect nothing else did." — .agents/architecture/ADR-095-scoped-re-review-axes.md:85
- "`.agents/critique/ADR-095-debate-log.md`. Six roles, one round, no consensus:" — .agents/architecture/ADR-095-scoped-re-review-axes.md:119

## Outputs — required
- "Rejected. Recorded so the proposal is findable and does not return." — .agents/architecture/ADR-095-scoped-re-review-axes.md:16
- "Drafted as ADR-094 and renumbered on merge" — .agents/architecture/ADR-095-scoped-re-review-axes.md:18
- "PR #5010 merged to `main` at `458028d2b` as \"feat(review): select axes by change" — .agents/architecture/ADR-095-scoped-re-review-axes.md:101

## Invokes — required
- doc ADR-094 — .agents/architecture/ADR-095-scoped-re-review-axes.md:18
- doc .agents/critique/ADR-095-debate-log.md — .agents/architecture/ADR-095-scoped-re-review-axes.md:21
- doc .agents/analysis/009-phase1-agent-comment-baseline.md — .agents/architecture/ADR-095-scoped-re-review-axes.md:51
- script .claude/skills/review/scripts/validate_review_marker.py — .agents/architecture/ADR-095-scoped-re-review-axes.md:58
- script scripts/validation/validate_review_marker.py — .agents/architecture/ADR-095-scoped-re-review-axes.md:59
- script scripts/sync_plugin_lib.py — .agents/architecture/ADR-095-scoped-re-review-axes.md:60
- script tests/validation/test_review_marker_packaging.py — .agents/architecture/ADR-095-scoped-re-review-axes.md:61
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-095-scoped-re-review-axes.md:64
- script scripts/validation/checks_coverage.py — .agents/architecture/ADR-095-scoped-re-review-axes.md:65

## Invoked by — required
- doc ADR-095 — .agents/architecture/README.md:219
- agent ADR-095 — .agents/architecture/ADR-039-agent-model-cost-optimization.md:49
- agent ADR-095 — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:26
- script ADR-095 — build/scripts/generate_adr_index.py:494
- doc ADR-095 — .agents/critique/ADR-095-debate-log.md:3

Concepts named:
- `spec-compliance` — .agents/architecture/ADR-095-scoped-re-review-axes.md:26 — used here
- `Reviewed-By` — .agents/architecture/ADR-095-scoped-re-review-axes.md:27 — used here
- `re-review multiplier` — .agents/architecture/ADR-095-scoped-re-review-axes.md:33 — defined here
- `SHA-bound marker` — .agents/architecture/ADR-095-scoped-re-review-axes.md:41 — used here
- `pr-autofix` — .agents/architecture/ADR-095-scoped-re-review-axes.md:86 — used here
- `change risk` — .agents/architecture/ADR-095-scoped-re-review-axes.md:102 — defined here
- `subset marker` — .agents/architecture/ADR-095-scoped-re-review-axes.md:130 — defined here

## Structure
- # ADR-095: Scoped re-review runs only the axes that flagged (rejected)
- ## Status
- ## What was proposed
- ## Why it was rejected
- ## The counter-evidence that made finding 5 concrete
- ## What addresses the real need instead
- ## Debate
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-095-scoped-re-review-axes.md:128 · Cites that four existing review markers name a `code-review` axis for which no `references/code-review.md` exists on disk.

## Observations
- Establishes the repository convention for recording rejected architecture proposals: maintaining an ADR record with `status: rejected` and complete rationale to ensure negative knowledge is indexed and prevent resurrected proposals.
- Documents an ADR numbering collision resolution where a branch drafted ADR-094 concurrently with another accepted ADR-094, resolved on merge by renumbering the rejected record to ADR-095 and moving its debate log.
- Presents a critical architectural insight backed by empirical evidence (PR #5059): scoping re-review runs to previously flagged axes is structurally flawed because follow-up fixes introduce new defects in code that did not exist during the initial round, evading detection unless un-flagged axes re-evaluate the change.
- Highlights a live vulnerability in `validate_review_marker.py`, which parses the commit trailer axis list without verifying membership or completeness against the canonical 15-axis set.

## Context cost
7277 bytes, approximately 1800 tokens.
