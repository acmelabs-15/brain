---
package: rjm
name: Open question
slug: open-question
kind: checklist
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Open question

## Definition — verbatim
> "- `Open question`: unresolved or missing evidence that materially affects the recommendation." — .claude/skills/world-model-diagnostic/SKILL.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 54 | defined here | Obligatory diagnostic category isolating critical missing or ambiguous evidence that impacts recommendations. |

## Consumes
Unresolved information gaps, ambiguous answers, and missing telemetry records.

## Produces
Enumerated critical questions requiring empirical resolution before finalizing architectural recommendations.

## When applied
Identified under Non-Negotiable Rule 2 during diagnostic intake and boundary auditing.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A diagnostic output classification in rjm dedicated to exposing unresolved uncertainties and evidentiary gaps. Tracking open questions prevents false precision in architectural recommendations and outlines the exact investigations needed to unblock implementation.
