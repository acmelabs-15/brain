---
package: rjm
name: Evidence Labels
slug: evidence-labels
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evidence Labels

## Definition — verbatim
> "Every score in the scorecard MUST cite one of these labels:" — .claude/skills/dx-review/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 41 | defines | Defined as the mandatory tri-state evidence classification taxonomy (TESTED, PARTIAL, INFERRED). |

## Consumes
Audit interaction logs, execution traces, static file reads, and web fetch responses.

## Produces
Standardized categorization of audit evidence quality across all scorecard dimension rows.

## When applied
Required for every individual dimension rating in a dx-review scorecard.

## Sub-concepts
tested, partial, inferred

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The three-tier taxonomy (TESTED, PARTIAL, INFERRED) used in rjm's dx-review skill to make evidentiary rigor explicit. It ensures that consumers of the scorecard know precisely whether a score reflects observed execution or static inspection.
