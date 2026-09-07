---
package: rjm
name: Rumsfeld Matrix
slug: rumsfeld-matrix
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rumsfeld Matrix

## Definition — verbatim
> "Structure research around known/unknown knowledge gaps" — .claude/agents/analyst.md:237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 237 | used here | Listed in decision frameworks table for structuring research around known and unknown knowledge gaps. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 76 | defined here | Cited in complexity cross-reference table as a Tier 3 senior decision-making framework. |
| src/claude/analyst.md | 237 | used here | Source copy listing Rumsfeld Matrix under analyst decision frameworks. |
| templates/agents/analyst.shared.md | 228 | used here | Shared analyst template incorporating Rumsfeld Matrix into framework catalog. |

## Consumes
Problem statements, risk assessments, and investigative scopes.

## Produces
A four-quadrant categorization of knowledge (known knowns, known unknowns, unknown knowns, unknown unknowns).

## When applied
Applied during problem framing and investigation planning when confronting significant technical ambiguity.

## Sub-concepts
none

## Part of
investigation-methodology

## Implementation status
defects: missing-path

## Design notes
Rumsfeld Matrix is an epistemological analysis technique used in rjm to explicitly map certainty and ambiguity. By distinguishing what is known from what is unknown or unverified, it directs investigative effort toward dangerous blind spots before architectural commitments are made.
