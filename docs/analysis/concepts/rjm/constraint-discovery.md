---
package: rjm
name: CONSTRAINT DISCOVERY
slug: constraint-discovery
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

# CONSTRAINT DISCOVERY

## Definition — verbatim
> "Features incompatible with discovered constraints are blocking issues." — .claude/skills/planner/scripts/planner.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 189 | defined here | Systematic examination of build files, manifests, and lock files to identify compatibility constraints. |

## Consumes
Project configuration files (build files, manifests, lock files), organizational parameters, and external service specs.

## Produces
Extracted version and compatibility constraints recorded in the plan's Constraints & Assumptions section.

## When applied
Conducted in Step 1 of planning before committing to any architectural approach.

## Sub-concepts
none

## Part of
step-1-checklist, planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A discovery technique requiring the planning agent to locate configuration manifests and lock files to extract hard platform and dependency constraints, treating any proposed feature incompatible with them as a blocking issue.
