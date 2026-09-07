---
package: rjm
name: REVIEW PHASE
slug: review-phase
kind: phase
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REVIEW PHASE

## Definition — verbatim
> "REVIEW PHASE: Orchestrates TW scrub and QR validation before execution." — .claude/skills/planner/scripts/planner.py:6

## Also called — verbatim
"REVIEW PHASE (steps 1-2)" — .claude/skills/planner/SKILL.md:112

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 6 | defined here | Defined in docstring as pre-execution review workflow orchestrating TW scrub and QR validation. |
| .claude/skills/planner/SKILL.md | 112 | defined here | Outlined as the verification phase between plan drafting and execution in the process overview. |

## Consumes
Draft implementation plan document.

## Produces
Scrubbed plan diff snippets, timeless present comments, validated risk anchors, and quality review verdicts.

## When applied
Mandatory phase enforced immediately after drafting a plan and before launching the execution workflow.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A mandatory verification phase bridging planning and execution, delegating the draft plan to `@agent-technical-writer` for comment hygiene and `@agent-quality-reviewer` for architectural risk analysis before implementation is permitted.
