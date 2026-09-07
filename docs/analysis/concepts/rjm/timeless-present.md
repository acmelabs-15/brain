---
package: rjm
name: TIMELESS PRESENT
slug: timeless-present
kind: pattern
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

# TIMELESS PRESENT

## Definition — verbatim
> "Write in TIMELESS PRESENT -- describe what the code IS, not what" — .claude/skills/planner/scripts/planner.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 110 | defined here | Documentation standard specifying that comments must describe what code is rather than what was changed. |

## Consumes
Inline source code comments, documentation snippets, and plan diffs.

## Produces
Comments explaining active invariants, concurrency mechanics, and rationale in the present tense.

## When applied
Applied when drafting code snippets during planning and when writing code during milestone execution.

## Sub-concepts
none

## Part of
comment_hygiene_verification, planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
An authoring standard requiring code comments to be written in the present tense, explaining what the code does and why it exists rather than recording historical modifications or changelog notes.
