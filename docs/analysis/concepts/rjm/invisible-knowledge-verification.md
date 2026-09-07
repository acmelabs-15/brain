---
package: rjm
name: invisible_knowledge_verification
slug: invisible-knowledge-verification
kind: checklist
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

# invisible_knowledge_verification

## Definition — verbatim
> "This section sources README.md content. Skip if trivial." — .claude/skills/planner/scripts/planner.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 68 | defined here | Checklist verifying component relationships, data flow, invariants, and tradeoffs for README documentation. |

## Consumes
Component interaction models, data flow pipelines, module organization rationales, system invariants, and architectural tradeoffs.

## Produces
Verified Invisible Knowledge section in the plan that provides foundational material for project README documentation.

## When applied
Applied during final plan verification before writing the plan file to disk.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A planning checklist that surfaces implicit architectural context—such as component diagrams, data flows, invariants, and tradeoffs—ensuring that non-obvious system context is preserved for project documentation.
