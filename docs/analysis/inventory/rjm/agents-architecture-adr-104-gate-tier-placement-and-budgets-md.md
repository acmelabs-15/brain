---
package: rjm
path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md
type: agent
bytes: 33548
unit: inv-rjm-49
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md

## Purpose — required, verbatim
> "Three local gate tiers exist. No record states what any of them may cost." — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:35
(no explicit purpose statement; establishes ten placement rules and budget bounds across pre-commit, pre-push, and CI gate tiers)

## Design intent — required
Establishes objective placement rules, latency targets (pre-commit: 60s, pre-push: 300s, CI: job timeouts), and declared worst-case budgets across three verification gate tiers (pre-commit, pre-push, CI) to prevent local hook latency from accreting and exceeding container reclamation timeouts. Replaces expensive whole-suite pytest runs in pre-push with a fast collection stand-in (`_full_suite_stand_in`) on non-Python changes, introduces container-aware subprocess deadlines (150s child clamp, 165s watchdog), and ratchets worst-case declared hook durations against base-ref configuration to prevent local gates from blocking commits and outliving execution environments.

## Phase — required
cross-phase

## Inputs — required
- `.agents/critique/ADR-104-debate-log.md` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:18
- "Measured 2026-08-25, 4-CPU remote container, full clone," — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:53
- `.serena/memories/ci/ci-pre-push-wall-clock-is-python-tests.md` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:71
- `lefthook.yml` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:92

## Outputs — required
- "Three tiers, each with a stated job." — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:103
- Ten placement rules governing check assignment to pre-commit, pre-push, and CI tiers (.agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:225-306)
- Declared worst-case budget constraints and container clamps:
  `declared sum, workstation 3450s 57.5 min (was 4170s)` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:186
  `largest single child, container 150s 2.5 min (was 1800s)` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:187
- Routing whole-suite fallback through collection stand-in (`_full_suite_stand_in`) with a 300s budget (.agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:347-352)

## Invokes — required
- doc ADR-086 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:36
- doc ADR-049 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:37
- doc ADR-071 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:37
- doc ADR-054 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:41
- doc ADR-073 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:20
- doc ADR-090 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:557
- doc ADR-101 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:591
- script git_hook_policy.py — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:428
- script select_tests.py — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:87
- doc session-logs.md — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:558
- doc ci-scripts.md — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:23
- config lefthook.yml — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:92

## Invoked by — required
- doc ADR-104 — .agents/architecture/README.md:189
- script ADR-104 — scripts/validation/git_hook_policy.py:568

## Concepts named — required, verbatim
- `Gate Tier Placement` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:13 — defined here
- `pre-commit` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:36 — used here
- `pre-push` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:38 — used here
- `Lefthook` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:37 — used here
- `pre-PR validation runner` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:37 — used here
- `fast-stage gate` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:60 — used here
- `mutation harness` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:63 — used here
- `dorny/paths-filter` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:99 — used here
- `declared worst case` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:271 — defined here
- `ratchet` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:125 — defined here
- `base-ref comparison` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:131 — defined here
- `headroom` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:169 — defined here
- `watchdog` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:166 — defined here
- `subprocess clamp` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:196 — defined here
- `Generated Artifact Staleness gate` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:215 — used here
- `whole-suite collection` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:250 — defined here
- `merge queue` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:475 — used here
- `ruleset_required_contexts` — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:480 — used here

## Structure
- # ADR-104: Gate Tier Placement — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:13
- ## Status — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:15
- ## Date — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:29
- ## Context — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:33
- ### What that cost — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:51
- ### The failure this produced — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:76
- ### The asymmetry that made it avoidable — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:85
- ## Decision — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:101
- ### Tier definitions — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:106
- ### Placement rules — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:223
- ### Rejected: deferral by scheduler claim — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:317
- ### What ships with this record — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:345
- ### Measured in-hook, first real push of this branch — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:358
- ## Known non-conformances — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:386
- ## Prior Art Investigation — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:423
- ### What Currently Exists — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:425
- ### Historical Rationale — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:436
- ### Why Change Now — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:442
- ## Rationale — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:455
- ### Alternatives Considered — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:457
- ### Trade-offs — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:468
- ## Consequences — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:484
- ### Positive — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:486
- ### Negative — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:500
- ### Neutral — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:527
- ## Re-evaluation Triggers — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:538
- ## Impact on Dependent Components — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:549
- ## Implementation Notes — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:560
- ## Related Decisions — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:582
- ## References — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:596

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:418 — ADR-054 sets an enforced 900s budget for `security-scan` that directly contradicts ADR-104's 300s pre-push target.
- doc-drift — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:558 — `.claude/rules/session-logs.md` MUST-2 describes the episode ratchet as running inside `python-tests`, which is now only true on the opt-in executing path.

## Observations
Exemplary architectural decision record demonstrating empirical measurement and boundary enforcement. It documents how uncontrolled accumulation of local pre-push checks caused 11-minute push latencies that exceeded remote container timeouts and caused container reclaims. Solved via a 10-rule placement methodology, pytest collection fallback (reducing run time from 498s to 15s), container deadline clamps, and base-ref budget ratchets.

## Context cost
33548 bytes, approximately 8400 tokens.
