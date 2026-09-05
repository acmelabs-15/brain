---
package: rjm
path: .agents/architecture/ADR-087-held-out-validated-improvement.md
type: agent
bytes: 57524
unit: inv-rjm-37
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-087-held-out-validated-improvement.md

## Purpose — required, verbatim
> "An improvement claim about an authored artifact, made by a loop that reads its own evaluation results, MUST be validated against a group whose number of consultations is bounded and counted by a mechanism the loop cannot move through its own arguments." — .agents/architecture/ADR-087-held-out-validated-improvement.md:133-136

## Design intent — required
When an author or autonomous agent iteratively modifies an artifact (prompt, rule, agent, or hook) guided by full-set evaluation feedback, the artifact progressively overfits the visible test cases rather than generalizing to unseen tasks. ADR-087 establishes a disciplined, tamper-evident evaluation protocol that partitions the task universe into optimize, selection, and optional test groups before any edits begin. By enforcing an unmoveable consultation budget against the selection group, requiring zero pass-to-fail regressions, and preventing budget resets through sorted task-digest keying and corpus verification, ADR-087 ensures that reported iteration gains represent genuine performance improvements rather than benchmark gaming or selection noise.

## Phase — required
none

## Inputs — required
- Evaluation task set partitioned before edits into optimize (`opt`), selection (`sel`), and optional test (`test`) groups via `--test-ratio` and seed (.agents/architecture/ADR-087-held-out-validated-improvement.md:152-156).
- Tamper-evident split commitment file (`split.json`) carrying a fingerprint over the seed, full task-id set, and group ratios, along with a pinned corpus identity (.agents/architecture/ADR-087-held-out-validated-improvement.md:165-167,280-282).
- Candidate and baseline evaluation results files (`base.json` and `cand.json`) produced by `extract`, providing task-id-to-pass boolean mappings and extraction-provenance envelopes (.agents/architecture/ADR-087-held-out-validated-improvement.md:280-282,391-392,601-605).
- Budget limits and statistical thresholds: `--max-consultations` (pinned upon first decision) and optional `--max-p` significance bar (.agents/architecture/ADR-087-held-out-validated-improvement.md:188,442-443,452-453).
- State ledger located under `$EVAL_LEDGER_DIR` or user state directory, keyed by the digest of sorted held-out task IDs (.agents/architecture/ADR-087-held-out-validated-improvement.md:196-198,237).

## Outputs — required
- Split files (`split.json`) output by `split`, publishing `opt` IDs and recording split fingerprints and corpus pins (.agents/architecture/ADR-087-held-out-validated-improvement.md:190,377).
- Persistent ledger files tracking cumulative consultations and caps keyed by sorted held-out task ID digests under `$EVAL_LEDGER_DIR` (.agents/architecture/ADR-087-held-out-validated-improvement.md:196-198,237).
- Exclusive file locks around the ledger keyed by held-out task groups (.agents/architecture/ADR-087-held-out-validated-improvement.md:249-251,517-518).
- Gate comparison decisions (`ACCEPT` or `REJECT`) and decision payloads containing baseline and candidate scores, discordant pair counts (fail-to-pass vs. pass-to-fail), exact McNemar p-values, and verification flags (`corpus_verified`, `corpus_pinned`) (.agents/architecture/ADR-087-held-out-validated-improvement.md:267-269,290,326-327,411-412).
- Zero-cost refusal verdicts prior to ledger charging for budget exhaustion, split drift, corpus disagreement, or invalid `--max-p` parameters (.agents/architecture/ADR-087-held-out-validated-improvement.md:244-245,282-284,304-310).

## Invokes — required
- doc ADR-057 — .agents/architecture/ADR-087-held-out-validated-improvement.md:39
- doc ADR-058 — .agents/architecture/ADR-087-held-out-validated-improvement.md:40
- doc ADR-010 — .agents/architecture/ADR-087-held-out-validated-improvement.md:81
- doc ADR-022 — .agents/architecture/ADR-087-held-out-validated-improvement.md:107
- doc ADR-088 — .agents/architecture/ADR-087-held-out-validated-improvement.md:948
- script scripts/eval/_optimizer_core.py — .agents/architecture/ADR-087-held-out-validated-improvement.md:774
- script scripts/eval/_optimizer_adapters.py — .agents/architecture/ADR-087-held-out-validated-improvement.md:776
- script scripts/eval/optimize-artifact.py — .agents/architecture/ADR-087-held-out-validated-improvement.md:778
- script scripts/eval/README.md — .agents/architecture/ADR-087-held-out-validated-improvement.md:643
- reference .claude/skills/software-engineering-library/references/working-with-legacy-code.md — .agents/architecture/ADR-087-held-out-validated-improvement.md:950

## Invoked by — required
- doc ADR-087 — .agents/architecture/README.md:181
- script ADR-087 — scripts/eval/README.md:562
- script ADR-087 — scripts/eval/_optimizer_adapters.py:476
- script ADR-087 — scripts/eval/optimize-artifact.py:2498
- reference ADR-087 — .claude/skills/context-optimizer/references/rule-audit-procedure.md:229

## Concepts named — required, verbatim
- `Held-Out Validation for Iterated Improvement Claims` — .agents/architecture/ADR-087-held-out-validated-improvement.md:12 — defined here
- `pre-registered withholding` — .agents/architecture/ADR-087-held-out-validated-improvement.md:59 — defined here
- `SkillOpt-gated` — .agents/architecture/ADR-087-held-out-validated-improvement.md:73 — used here
- `evaluator-optimizer loop` — .agents/architecture/ADR-087-held-out-validated-improvement.md:81 — used here
- `rubric score` — .agents/architecture/ADR-087-held-out-validated-improvement.md:82 — used here
- `Decision Requirement 1` — .agents/architecture/ADR-087-held-out-validated-improvement.md:146 — defined here
- `Decision Requirement 5` — .agents/architecture/ADR-087-held-out-validated-improvement.md:213 — defined here
- `Open Requirements` — .agents/architecture/ADR-087-held-out-validated-improvement.md:561 — defined here
- `decision group` — .agents/architecture/ADR-087-held-out-validated-improvement.md:150 — defined here
- `optimize group` — .agents/architecture/ADR-087-held-out-validated-improvement.md:152 — defined here
- `selection group` — .agents/architecture/ADR-087-held-out-validated-improvement.md:152 — defined here
- `test group` — .agents/architecture/ADR-087-held-out-validated-improvement.md:153 — defined here
- `accept decision` — .agents/architecture/ADR-087-held-out-validated-improvement.md:154 — defined here
- `tamper-evident` — .agents/architecture/ADR-087-held-out-validated-improvement.md:163 — defined here
- `selection event` — .agents/architecture/ADR-087-held-out-validated-improvement.md:175 — defined here
- `consultation budget` — .agents/architecture/ADR-087-held-out-validated-improvement.md:547 — defined here
- `discordant pairs` — .agents/architecture/ADR-087-held-out-validated-improvement.md:267 — defined here
- `fail-to-pass` — .agents/architecture/ADR-087-held-out-validated-improvement.md:267 — defined here
- `pass-to-fail` — .agents/architecture/ADR-087-held-out-validated-improvement.md:268 — defined here
- `declared corpora` — .agents/architecture/ADR-087-held-out-validated-improvement.md:278 — defined here
- `strip bypass` — .agents/architecture/ADR-087-held-out-validated-improvement.md:284-285 — defined here
- `corpus_verified` — .agents/architecture/ADR-087-held-out-validated-improvement.md:290 — defined here
- `null control` — .agents/architecture/ADR-087-held-out-validated-improvement.md:297 — used here
- `preflight` — .agents/architecture/ADR-087-held-out-validated-improvement.md:310 — defined here
- `results envelope` — .agents/architecture/ADR-087-held-out-validated-improvement.md:313 — defined here
- `corpus_pinned` — .agents/architecture/ADR-087-held-out-validated-improvement.md:326 — defined here
- `digest scrubber` — .agents/architecture/ADR-087-held-out-validated-improvement.md:340 — defined here
- `authenticated provenance` — .agents/architecture/ADR-087-held-out-validated-improvement.md:358 — used here
- `reusable holdout` — .agents/architecture/ADR-087-held-out-validated-improvement.md:407 — used here
- `McNemar's exact test` — .agents/architecture/ADR-087-held-out-validated-improvement.md:441 — used here
- `Bonferroni` — .agents/architecture/ADR-087-held-out-validated-improvement.md:453 — used here
- `degradation clause` — .agents/architecture/ADR-087-held-out-validated-improvement.md:513 — used here
- `boolean seam` — .agents/architecture/ADR-087-held-out-validated-improvement.md:550 — defined here
- `Open Requirement 1` — .agents/architecture/ADR-087-held-out-validated-improvement.md:566 — defined here
- `Open Requirement 12` — .agents/architecture/ADR-087-held-out-validated-improvement.md:893 — defined here
- `trusted controller` — .agents/architecture/ADR-087-held-out-validated-improvement.md:573 — defined here
- `extraction-provenance envelope` — .agents/architecture/ADR-087-held-out-validated-improvement.md:602 — defined here
- `rule_results_multi` — .agents/architecture/ADR-087-held-out-validated-improvement.md:635 — used here
- `Thresholdout` — .agents/architecture/ADR-087-held-out-validated-improvement.md:672 — used here
- `SparseValidate` — .agents/architecture/ADR-087-held-out-validated-improvement.md:733 — used here
- `Cross-validation` — .agents/architecture/ADR-087-held-out-validated-improvement.md:749 — used here
- `Statistical significance` — .agents/architecture/ADR-087-held-out-validated-improvement.md:765 — used here
- `GitHub Models` — .agents/architecture/ADR-087-held-out-validated-improvement.md:805 — used here
- `evaluator-optimizer pattern` — .agents/architecture/ADR-087-held-out-validated-improvement.md:923 — used here
- `SkillOpt` — .agents/architecture/ADR-087-held-out-validated-improvement.md:940 — used here

## Structure
- # ADR-087: Held-Out Validation for Iterated Improvement Claims — .agents/architecture/ADR-087-held-out-validated-improvement.md:12
- ## Status — .agents/architecture/ADR-087-held-out-validated-improvement.md:14
- ## Date — .agents/architecture/ADR-087-held-out-validated-improvement.md:28
- ## Context — .agents/architecture/ADR-087-held-out-validated-improvement.md:32
- ### What the existing ADRs do and do not cover — .agents/architecture/ADR-087-held-out-validated-improvement.md:79
- ### Why this is not solved by discipline — .agents/architecture/ADR-087-held-out-validated-improvement.md:116
- ## Decision — .agents/architecture/ADR-087-held-out-validated-improvement.md:131
- ### 1. The decision group is fixed before the first edit — .agents/architecture/ADR-087-held-out-validated-improvement.md:150
- ### 2. The split is tamper-evident — .agents/architecture/ADR-087-held-out-validated-improvement.md:163
- ### 3. Repeated decisions against one held-out group are budgeted — .agents/architecture/ADR-087-held-out-validated-improvement.md:173
- ### 4. No pass-to-fail transition is accepted on an aggregate gain — .agents/architecture/ADR-087-held-out-validated-improvement.md:265
- ### 5. A comparison whose declared corpora disagree is refused — .agents/architecture/ADR-087-held-out-validated-improvement.md:278
- ### What the mechanism protects against, and what it does not — .agents/architecture/ADR-087-held-out-validated-improvement.md:372
- ### What this does not require — .agents/architecture/ADR-087-held-out-validated-improvement.md:438
- ## Consequences — .agents/architecture/ADR-087-held-out-validated-improvement.md:483
- ### Positive — .agents/architecture/ADR-087-held-out-validated-improvement.md:485
- ### Negative — .agents/architecture/ADR-087-held-out-validated-improvement.md:520
- ### Neutral — .agents/architecture/ADR-087-held-out-validated-improvement.md:556
- ## Open Requirements — .agents/architecture/ADR-087-held-out-validated-improvement.md:561
- ## Alternatives Considered — .agents/architecture/ADR-087-held-out-validated-improvement.md:717
- ## Implementation — .agents/architecture/ADR-087-held-out-validated-improvement.md:770
- ## Validation Status — .agents/architecture/ADR-087-held-out-validated-improvement.md:786
- ### What the live rule run falsified — .agents/architecture/ADR-087-held-out-validated-improvement.md:814
- ### A retracted agent-path claim, and the guard it produced — .agents/architecture/ADR-087-held-out-validated-improvement.md:855
- ### What follows for anyone running this loop — .agents/architecture/ADR-087-held-out-validated-improvement.md:902
- ## References — .agents/architecture/ADR-087-held-out-validated-improvement.md:921
- ## Amendment 2026-07-27 — .agents/architecture/ADR-087-held-out-validated-improvement.md:946

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-087-held-out-validated-improvement.md:39 · Evaluator scripts eval-prompt-change.py and eval-rule-activation.py are referenced as bare filenames without their actual scripts/eval/ directory prefix.
- missing-path · .agents/architecture/ADR-087-held-out-validated-improvement.md:40 · Evaluator script eval-agent-vs-baseline.py is referenced as a bare filename without its actual scripts/eval/ directory prefix.
- missing-path · .agents/architecture/ADR-087-held-out-validated-improvement.md:64 · Aggregator module _report_aggregator.py is cited without its actual scripts/eval/ directory prefix.
- missing-path · .agents/architecture/ADR-087-held-out-validated-improvement.md:70 · CLI script optimize-artifact.py is cited as a bare filename without its scripts/eval/ directory prefix.
- missing-path · .agents/architecture/ADR-087-held-out-validated-improvement.md:818 · Referenced rule file .claude/rules/working-with-legacy-code.md does not exist at cited path (moved to .claude/skills/software-engineering-library/references/working-with-legacy-code.md per ADR-088 amendment at line 948; annotated inline with orphan-ref-ignore).
- doc-drift · .agents/architecture/ADR-087-held-out-validated-improvement.md:9 · Frontmatter records implemented: false despite the Implementation section at lines 770-780 stating the core mechanism shipped in PR #3430.
- internal-contradiction · .agents/architecture/ADR-087-held-out-validated-improvement.md:39 · Context table lists Prompt evaluation under eval-prompt-change.py, but Consequences lines 510-512 concedes no prompt adapter exists yet and prompt work goes through the rule adapter or not at all.

## Observations
- Extraordinary standard of adversarial transparency: meticulously records 17 review rounds and multiple explicit falsifications, including withdrawing claims that outcomes were withheld, that ADR-057 allowed human overrides, or that an earlier agent run was a valid null control.
- Clear distinction between cooperative optimization discipline and adversarial security boundaries: held-out budgeting prevents accidental overfitting by cooperating optimizers, but cannot prevent intentional cheating when the optimizer has local filesystem write access to task definitions and result files.
- Rigorous justification for Bonferroni multi-comparison correction: explains that Bonferroni bounds the family error rate under arbitrary dependence between sequential evaluations of the same held-out selection group, whereas sharper corrections assume independence that does not hold.
- Empirical quantification of LLM judge noise: measures a 0.49-point variance across runs of identical rule text under an LLM judge, demonstrating that single-sample strict improvements cannot distinguish true enhancements from judge variance without repeated sampling or a null control.

## Context cost
57524 bytes, ~14400 tokens.
