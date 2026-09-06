---
package: addy
name: PERF.md
slug: perf-md
kind: artifact
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-reference-links-test.js, sha256: b2d8b5530e182b377d710fa3c207f272b0b234307fe603643cd0d9dc384d1b99}
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PERF.md

## Definition — verbatim
> "A section in the PR description or a `PERF.md` in the repo both work. What matters is that the next person (or the next agent) reads it before proposing an experiment, and doesn't re-run one that already failed." — skills/performance-optimization/SKILL.md:401

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-reference-links-test.js | 126 | references | Test fixture string demonstrating non-reference files that the validator should ignore. |
| scripts/validate-reference-links.js | 25 | references | Comment noting PERF.md as a legitimate prospective project artifact that must not fail reference linting. |
| skills/performance-optimization/SKILL.md | 401 | defines | Defined as an in-repo optimization ledger recording baseline metrics, results, and verdicts for kept and reverted changes. |

## Consumes
Performance optimization hypotheses, baseline metrics, post-change benchmarks, keep/revert verdicts, and root-cause explanations.

## Produces
Persistent historical ledger of performance experiments preventing future engineers and agents from repeating discarded optimizations.

## When applied
Maintained and updated during performance profiling and optimization cycles in the Review phase.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
defects: other

## Design notes
Repository-level optimization ledger artifact documenting performance experiments, baseline-to-result deltas, and keep/revert verdicts so that failed or ineffective ideas remain durably recorded and are not repeated by future agents.
