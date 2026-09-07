---
package: rjm
name: RULE 0
slug: rule-0
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RULE 0

## Definition — verbatim
> "**Each memory MUST satisfy (RULE 0)**:" — .claude/skills/research-and-incorporate/references/workflow.md:356

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 447 | used here | Quality reviewer checklist item enforcing production reliability through open questions during plan review. |
| .claude/skills/research-and-incorporate/references/workflow.md | 356 | defined here | Mandatory foundational constraint requiring atomic memories to be atomic, constrained, actionable, and linked. |

## Consumes
Candidate artifacts, such as memory representations or proposed plan elements, requiring verification against baseline operational standards.

## Produces
Pass or fail verification determining whether items satisfy foundational reliability and structure criteria.

## When applied
Applied during plan quality review (production reliability check) and during research memory integration.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
RULE 0 represents a foundational, non-negotiable quality gate across rjm workflows, enforcing core invariants such as production reliability during plan review and atomicity/actionability constraints during memory synthesis.
