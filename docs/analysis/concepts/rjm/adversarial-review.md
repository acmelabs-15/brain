---
package: rjm
name: adversarial review
slug: adversarial-review
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# adversarial review

## Definition — verbatim
> "## Step 5. Adversarial review" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:512

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 13 | used here | Cited as the method used across 20+ rounds to uncover parser defects. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 512 | defined here | Step 5 of the rule audit procedure using an independent model to challenge changes. |

## Consumes
Architectural changes, rule modifications, benchmark evidence, evaluation results.

## Produces
Targeted critiques, falsification attempts, and identified regression vectors.

## When applied
Executed during Step 5 of rule auditing by deploying a different model family to actively attack proposed claims.

## Sub-concepts
none

## Part of
rule-audit-procedure

## Implementation status
defects: doc-drift

## Design notes
A verification technique where an alternative model family is prompted with explicit permission to reject and attack proposed conclusions, countering the tendency of LLMs to rubber-stamp proposals.
