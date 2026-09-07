---
package: rjm
name: confident incorrectness
slug: confident-incorrectness
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# confident incorrectness

## Definition — verbatim
> "Statements of the form "I recall that X has Y" or "X probably has a regex like Y" with no level-1 lookup are the **confident incorrectness** anti-pattern." — .claude/agents/implementer.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 57 | defined here | Identifies the anti-pattern of asserting ungrounded claims with confident delivery instead of performing level-1 lookups. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 207 | used here | Warns against confident incorrectness in documentation records and historical memory extraction. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 112 | used here | Notes that empirical probes are designed to dismantle confident incorrectness through objective measurements. |
| templates/agents/implementer.shared.md | 66 | defined here | Shared implementer template defining the confident incorrectness anti-pattern and its failure modes. |

## Consumes
Recollected assumptions, speculative claims, and ungrounded statements.

## Produces
Bug reports against speculative agent statements, forcing replacement with Level 1 tool lookups or explicit admissions of uncertainty.

## When applied
Actively monitored during code generation, architectural analysis, and adversarial reviews.

## Sub-concepts
none

## Part of
evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Confident incorrectness is identified as a dangerous failure mode in LLM development where agents assert flawed assumptions with persuasive rhetoric. RJM categorizes confident incorrectness as an explicit bug, mandating that agents say 'I don't know' or execute a tool verification rather than delivering speculative guesses.
