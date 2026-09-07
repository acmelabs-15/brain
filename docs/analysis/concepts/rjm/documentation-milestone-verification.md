---
package: rjm
name: documentation_milestone_verification
slug: documentation-milestone-verification
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

# documentation_milestone_verification

## Definition — verbatim
> "- Does a Documentation milestone exist?" — .claude/skills/planner/scripts/planner.py:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 101 | defined here | Checklist ensuring documentation milestones exist and format CLAUDE.md and README.md properly. |

## Consumes
Draft milestone lists, `CLAUDE.md` tabular index conventions, and plan Invisible Knowledge sections.

## Produces
Verified documentation milestone scheduling index updates and architectural documentation.

## When applied
Applied during final plan verification before writing plan output.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A planning checklist gate that ensures an explicit documentation milestone is scheduled for updating `CLAUDE.md` tabular indexes and populating `README.md` whenever architectural complexity warrants.
