---
package: rjm
name: Confidence Scoring
slug: confidence-scoring
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Confidence Scoring

## Definition — verbatim
> "## Confidence Scoring" — .claude/agents/merge-resolver.md:237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 237 | defined here | Section heading defining High, Medium, and Low confidence criteria and associated actions. |
| templates/agents/merge-resolver.shared.md | 125 | defined here | Section heading defining confidence scoring tiers across shared templates. |

## Consumes
Conflict classification, intent analysis results, and scope of concurrent changes.

## Produces
Confidence rating (High, Medium, Low) that determines whether a conflict is resolved automatically, resolved with rationale, or flagged for human review.

## When applied
Assigned to every resolved conflict during resolution planning and report generation.

## Sub-concepts
none

## Part of
merge-conflict-resolution-specialist

## Implementation status
defects: doc-drift

## Design notes
Calibrates autonomy during merge resolution by categorizing decisions into High, Medium, and Low confidence tiers. While High confidence conflicts (patterns, single-side changes) resolve automatically and Medium confidence conflicts proceed with logged rationale, Low confidence conflicts (unclear intent across identical logic) are explicitly flagged for human review to avoid silent regressions.
