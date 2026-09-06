---
package: rjm
path: scripts/eval/_optimizer_core.py
type: script
bytes: 37545
unit: inv-rjm-220
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_optimizer_core.py

## Purpose — required, verbatim
> "Held-out-gated artifact optimization primitives (Issue #3422)." — scripts/eval/_optimizer_core.py:2

## Design intent — required
Provides pure, deterministic, I/O-free computational primitives for held-out-gated prompt and artifact optimization (based on SkillOpt, Yang et al., arXiv:2605.23904). Standard eval workflows risk overfitting the test set when authors iteratively inspect failures and revise prompts against the same scenarios. `_optimizer_core.py` partitions tasks into optimization (`opt`), held-out gating (`sel`), and untouched evaluation (`test`) sets with cryptographic SHA-256 fingerprinting to prevent eval laundering. It enforces bounded edit budgets (cosine decay), atomic document patching (insert_after, replace, delete, append) that preserves protected fences (`SLOW_UPDATE_START`/`SLOW_UPDATE_END`), exact one-sided McNemar significance testing with Bonferroni correction across repeated consultations, and rejection caching (`buffer_contains`) to prevent retrying known failed patches. Without it, automated prompt optimization loops lack statistical rigor, overfit evaluation scenarios, degrade held-out validity through repeated testing, and risk corrupting protected sections of artifacts.

## Phase — required
none

## Inputs — required
- Sequence of string task IDs to partition into opt/sel/test splits (`split_tasks`) — scripts/eval/_optimizer_core.py:220
- Random seed string and decimal ratios (`sel_ratio`, `test_ratio`, `min_sel`) for deterministic task hashing — scripts/eval/_optimizer_core.py:222-225
- String document to patch, sequence of `Patch` objects, and integer budget limit — scripts/eval/_optimizer_core.py:487
- Step index and total steps for cosine decay patch budget calculation — scripts/eval/_optimizer_core.py:348
- `ScoreEvidence` instances containing score value and extraction provenance mapping — scripts/eval/_optimizer_core.py:148-153, 680-681
- Paired boolean evaluation outcomes mapping task ID to pass/fail status — scripts/eval/_optimizer_core.py:545-547, 598
- Consultation counts, fingerprint strings, discordant regression counts, and p-value bars — scripts/eval/_optimizer_core.py:683-690
- Sequence of rejected edit mappings for buffer cache queries — scripts/eval/_optimizer_core.py:885-889

## Outputs — required
- `TaskSplit` dataclass containing `opt`, `sel`, and `test` task ID tuples and split fingerprint — scripts/eval/_optimizer_core.py:132-145, 315
- `GateResult` dataclass containing `decision`, `reason`, candidate/incumbent scores, and consultation counts — scripts/eval/_optimizer_core.py:156-171, 789-796
- Modified document string with validated sequential patches applied — scripts/eval/_optimizer_core.py:541
- Tuple `(b, c, p)` of fail-to-pass count, pass-to-fail count, and one-sided exact McNemar p-value — scripts/eval/_optimizer_core.py:548, 595
- Float passing score ratio across unique task IDs — scripts/eval/_optimizer_core.py:624
- String SHA-256 fingerprint hashes for split configuration and patch sets — scripts/eval/_optimizer_core.py:345, 881
- Integer maximum edit budget under cosine decay — scripts/eval/_optimizer_core.py:371
- Refusal reason string or None from gate pre-checks — scripts/eval/_optimizer_core.py:657, 663, 668
- Boolean membership indicator for rejected patch buffer — scripts/eval/_optimizer_core.py:907-908

## Invokes — required
none

## Invoked by — required
- script _optimizer_core — scripts/eval/optimize-artifact.py:87
- script _optimizer_core — scripts/eval/_optimizer_adapters.py:3
- doc README.md — scripts/eval/README.md:99

## Concepts named — required, verbatim
- `SkillOpt` — scripts/eval/_optimizer_core.py:16 — used here
- `TaskSplit.fingerprint` — scripts/eval/_optimizer_core.py:25 — defined here
- `gate` — scripts/eval/_optimizer_core.py:68 — defined here
- `FENCE_START` — scripts/eval/_optimizer_core.py:77 — defined here
- `FENCE_END` — scripts/eval/_optimizer_core.py:78 — defined here
- `SplitTooSmallError` — scripts/eval/_optimizer_core.py:89 — defined here
- `BudgetExceededError` — scripts/eval/_optimizer_core.py:93 — defined here
- `AnchorNotFoundError` — scripts/eval/_optimizer_core.py:97 — defined here
- `AmbiguousAnchorError` — scripts/eval/_optimizer_core.py:101 — defined here
- `ProtectedSectionError` — scripts/eval/_optimizer_core.py:105 — defined here
- `PatchShapeError` — scripts/eval/_optimizer_core.py:109 — defined here
- `MissingResultError` — scripts/eval/_optimizer_core.py:113 — defined here
- `Patch` — scripts/eval/_optimizer_core.py:118 — defined here
- `TaskSplit` — scripts/eval/_optimizer_core.py:132 — defined here
- `ScoreEvidence` — scripts/eval/_optimizer_core.py:148 — defined here
- `GateResult` — scripts/eval/_optimizer_core.py:156 — defined here
- `split_tasks` — scripts/eval/_optimizer_core.py:219 — defined here
- `split_fingerprint` — scripts/eval/_optimizer_core.py:318 — defined here
- `edit_budget` — scripts/eval/_optimizer_core.py:348 — defined here
- `apply_patches` — scripts/eval/_optimizer_core.py:487 — defined here
- `mcnemar_exact` — scripts/eval/_optimizer_core.py:544 — defined here
- `score` — scripts/eval/_optimizer_core.py:598 — defined here
- `guard_refusal` — scripts/eval/_optimizer_core.py:627 — defined here
- `ADR-057` — scripts/eval/_optimizer_core.py:703 — used here
- `Bonferroni` — scripts/eval/_optimizer_core.py:729 — used here
- `patch_fingerprint` — scripts/eval/_optimizer_core.py:841 — defined here
- `buffer_contains` — scripts/eval/_optimizer_core.py:884 — defined here

## Structure
- Why this exists — scripts/eval/_optimizer_core.py:8

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_optimizer_core.py`, language: Python, lines: 909
- documented invocation: none (pure computational library module without standalone CLI parser; imported by `scripts/eval/optimize-artifact.py:87`)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_optimizer_core.py`, stdout: (empty), **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: library module with no `sys.exit()` or `exit()` invocations; exits 0 upon direct execution
- for validators/gates: pure gating library; `gate()` returns `GateResult(decision="ACCEPT"|"REJECT")` rather than exiting; running module directly exits 0
- does the output match what the documentation claims? yes, loads and executes without error or side effects

## Defects — required
none

## Observations
- Protects slow-update fences: `_protected_indices` identifies lines between `<!-- SLOW_UPDATE_START -->` and `<!-- SLOW_UPDATE_END -->`, raising `ProtectedSectionError` if any patch anchors within or introduces smuggled fence markers (scripts/eval/_optimizer_core.py:77-78, 400-430, 459-474, 525-530).
- Employs exact McNemar test (`mcnemar_exact`) with Bonferroni multiple-testing correction across consultation budgets to eliminate asymptotic bias on small held-out evaluation sets (scripts/eval/_optimizer_core.py:544-595, 722-734).
- Subnormal float protection: handles float underflow in McNemar tail computation by returning `math.nextafter(0.0, 1.0)` instead of 0.0, preventing strict `--max-p 0` thresholds from erroneously passing (scripts/eval/_optimizer_core.py:585-594).
- Rejection caching: `patch_fingerprint` generates order-sensitive and whitespace-normalized SHA-256 hashes of patch sequences, allowing `buffer_contains` to discard previously rejected proposals (scripts/eval/_optimizer_core.py:841-909).

## Context cost
37545 bytes. Approximately 9386 tokens.
