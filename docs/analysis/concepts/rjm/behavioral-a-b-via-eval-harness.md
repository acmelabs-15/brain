---
package: rjm
name: Behavioral A/B via Eval Harness
slug: behavioral-a-b-via-eval-harness
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Behavioral A/B via Eval Harness

## Definition — verbatim
> "| You changed a prompt, rule, or agent and claim it behaves better | 3. Behavioral A/B via eval harness | `benchmark-models` for cross-model comparison |" — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 19 | defines | Section heading introducing Recipe 3 worked examples and evaluation scenario definitions under tests/evals/. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 31 | defines | Recipe selector entry for validating proposed prompt, rule, or agent improvements against baseline eval suites. |

## Consumes
Prompt or agent diffs, evaluation scenario datasets (tests/evals/*.json), and pre-registered numeric predictions.

## Produces
Before-and-after behavioral comparison metrics, pass-rate deltas, and regression verdicts.

## When applied
Whenever a contributor modifies an LLM prompt, agent definition, or system instruction claiming behavioral improvement.

## Sub-concepts
none

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
Recipe 3 of the empirical probe toolkit. It operationalizes ADR-057's prompt behavioral evaluation gate by requiring pre-registered numeric predictions, dry-run input validation, and headless multi-run execution across standard test scenarios before any prompt modification can be merged.
