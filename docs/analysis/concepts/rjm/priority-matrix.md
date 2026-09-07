---
package: rjm
name: Priority Matrix
slug: priority-matrix
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Priority Matrix

## Definition — verbatim
> "### Priority Matrix" — .claude/agents/roadmap.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 52 | defined here | Defined as a priority classification matrix combining KANO categories with RICE score thresholds (P0-P3). |
| templates/agents/roadmap.shared.md | 58 | defined here | Defined in the shared roadmap template to map features to scheduling actions. |

## Consumes
KANO feature classifications and numerical RICE scores.

## Produces
Explicit priority rankings (P0, P1, P2, P3) mapped to delivery timelines (current milestone, next milestone, backlog, icebox).

## When applied
Applied after completing RICE scoring and KANO classification to assign definitive milestone commitments.

## Sub-concepts
none

## Part of
- roadmap

## Implementation status
defects: doc-drift

## Design notes
The Priority Matrix bridges quantitative RICE scoring and qualitative KANO classifications in rjm. By establishing explicit composite thresholds (such as requiring P0 to be both a KANO Must-Have and possess a RICE score exceeding 100), it prevents arbitrary scheduling debates and mechanically maps work items to discrete milestone horizons.
