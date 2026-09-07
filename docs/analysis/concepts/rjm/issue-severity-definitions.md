---
package: rjm
name: Issue Severity Definitions
slug: issue-severity-definitions
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Issue Severity Definitions

## Definition — verbatim
> "### Issue Severity Definitions" — .claude/skills/skillforge/references/synthesis-protocol.md:315

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 315 | defined here | Reference table defining Critical, Major, and Minor issue severities and their impact on approval. |

## Consumes
Identified defects, quality gaps, or guideline violations from panel evaluations.

## Produces
Severity categorizations determining whether changes are required (Critical: automatic rejection, Major: >=2 causes rejection, Minor: non-blocking).

## When applied
Applied during individual evaluation and consensus aggregation to categorize review issues.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A standardized severity rubric classifying review issues into Critical, Major, and Minor tiers to provide consistent criteria for gating approval and prioritizing fixes.
