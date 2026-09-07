---
package: rjm
name: two-tailed
slug: two-tailed
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# two-tailed

## Definition — verbatim
> "null. **Read it two-tailed.** The doctrine predicted the opposite direction," — .claude/skills/context-optimizer/references/rule-audit-instrument.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 51 | defined here | Mandates two-tailed significance testing (p ≈ 0.070 for 7/8 runs) to prevent post-hoc one-tailed selection after observing data direction. |

## Consumes
Directional sign counts from multi-seed evaluation trials.

## Produces
Unbiased two-sided p-value calculations under a binomial fair-coin null hypothesis.

## When applied
Applied unconditionally when evaluating statistical significance in prompt rule audit decisions.

## Sub-concepts
none

## Part of
- sign-test
- registered-decision-rule

## Implementation status
clean

## Design notes
In rjm's evaluation methodology, `two-tailed` testing is a mandatory discipline that prevents p-hacking. Because theoretical doctrines often predict performance improvements in one direction but empirical tests may reveal the reverse, evaluating two-tailed ensures that significance thresholds are not halved post-hoc after seeing which way the data broke.
