---
package: rjm
name: McNemar's exact test
slug: mcnemar-s-exact-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# McNemar's exact test

## Definition — verbatim
(used, not defined)

> "(McNemar's exact test on the discordant counts) is reported on every compared" — .agents/architecture/ADR-087-held-out-validated-improvement.md:441

## Also called — verbatim
`mcnemar_exact` — scripts/eval/_optimizer_core.py:544

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 441 | used here | Non-parametric statistical test applied to discordant pair counts to determine significance of improvement. |

## Consumes
Discordant pair counts (fail-to-pass and pass-to-fail) on held-out evaluation tasks.

## Produces
Exact binomial p-value for paired binary outcomes.

## When applied
Calculated for every comparison in `optimize-artifact.py gate` and tested against `--max-p`.

## Sub-concepts
discordant-pairs

## Part of
accept-decision

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The non-parametric statistical hypothesis test used by ADR-087 to evaluate paired binary evaluation outcomes. By computing exact binomial probabilities on discordant pairs rather than relying on asymptotic approximations, it provides valid p-values even on small held-out validation sets.
