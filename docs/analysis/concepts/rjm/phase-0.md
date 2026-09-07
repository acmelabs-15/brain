---
package: rjm
name: Phase 0
slug: phase-0
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 0

## Definition — verbatim
> "| **Phase 0** | Related work research | Search issues/PRs for context |" — .claude/skills/adr-review/SKILL.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 94 | defined here | Process table entry defining Phase 0 as related work research searching issues and PRs for historical context. |
| scripts/validation/check_skill_memory_references.py | 4 | used here | Cites an incident where pr-comment-responder skill opened with a blocking Phase 0 step that failed to resolve a memory reference. |

## Consumes
Issue trackers, git logs, pull request history, and repository memory stores.

## Produces
Historical context, related prior art, and background problem evidence.

## When applied
At the start of the ADR review process or initial workflow step before independent analysis begins.

## Sub-concepts
none

## Part of
multi-agent-debate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The preliminary research phase in rjm workflows dedicated to uncovering historical context, past discussions, and existing issue/PR artifacts to prevent redundant proposals and ensure decisions account for prior work.
