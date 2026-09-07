---
package: rjm
name: what framework applies
slug: what-framework-applies
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# what framework applies

## Definition — verbatim
> "| `what framework applies` | Walk the decision tree below |" — .claude/skills/business-strategy/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 35 | defined here | User trigger phrase routing general operational inquiries to the appropriate business reference. |

## Consumes
Operational descriptions of business bottlenecks, stage constraints, and team challenges.

## Produces
Direct mapping to exactly one of 14 reference skills suited to the dominant symptom.

## When applied
Invoked when a founder recognizes an operational challenge but lacks familiarity with strategic literature.

## Sub-concepts
none

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
what framework applies is an intent trigger that directs users through the business-strategy routing decision tree. In rjm, it protects agent context windows by mapping general founder questions directly to a single curated reference instead of loading multiple reference files simultaneously.
