---
package: rjm
name: Survivorship Bias
slug: survivorship-bias
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Survivorship Bias

## Definition — verbatim
> "Survivorship bias occurs when we draw conclusions from winners while ignoring the losers who used the same strategy." — .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 286 | uses | Cited in ADR requirements as a bias to acknowledge when choosing security as the first eval target. |
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 77 | uses | Cross-referenced as a related critical thinking model for evaluating claims. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 80 | uses | Cross-referenced as a related model for testing evidence validity. |
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 7 | defines | Defines the core mental model and provides verification checklists for decision reviews. |
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 90 | uses | Cited as a cognitive bias prevented by pre-committing evaluation metrics. |
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 76 | uses | Cross-referenced under related mental models for extreme outcome domains. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 88 | uses | Cross-referenced under related models for systems and feedback analysis. |
| .claude/skills/decision-critic/SKILL.md | 105 | uses | Listed in references section as an essential mental model for decision review. |
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 67 | uses | Cited under related mental models for understanding decision boundaries. |
| .claude/skills/review/references/decision-rigor.md | 53 | uses | Required reference and focus area during code and architectural review. |

## Consumes
Decision evidence base, historical success and failure records.

## Produces
Contrarian challenges, verification checklist results, identified data gaps.

## When applied
During decomposition and challenge steps of decision review, requirements interviews, and PR reviews.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A mental model from critical thinking used across decision criticism, requirement interviews, and PR reviews to identify when conclusions are drawn only from successful cases while ignoring hidden failures.
