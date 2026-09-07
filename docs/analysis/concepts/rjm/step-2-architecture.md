---
package: rjm
name: step_2_architecture
slug: step-2-architecture
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step_2_architecture

## Definition — verbatim
> "Capture in ASCII diagrams:" — .claude/skills/planner/scripts/planner.py:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 249 | defined here | Directs creation of ASCII component relationship and data flow diagrams for Invisible Knowledge. |

## Consumes
Chosen system architecture, component boundaries, and data paths.

## Produces
ASCII diagrams depicting component relationships and data flows destined for Invisible Knowledge and README documentation.

## When applied
Executed in Step 2 of planning once the implementation approach is selected.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
An architectural capture directive mandating plaintext ASCII diagrams for component hierarchies and data flows, creating self-contained visual representations for project documentation.
