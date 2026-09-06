---
package: matt
name: progressive disclosure
slug: progressive-disclosure
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# progressive disclosure

## Definition — verbatim
> "**Progressive disclosure** is the move down the ladder (out of the main file and behind a pointer) so the top stays legible." — skills/productivity/writing-for-agents/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 76 | used here | Cited in issue #303 as a proposed technique for organizing internal code within deep modules. |
| docs/productivity/writing-for-agents.md | 27 | defined here | Defined as an authoring lever for navigating the information hierarchy from in-file steps to disclosed references. |
| external/codebase-design.md | 58 | used here | Mentioned as an unmerged proposal for structuring module internals behind public interfaces. |
| external/writing-for-agents.md | 41 | defined here | Defined on external documentation as moving reference material behind pointers to keep primary steps legible. |
| skills/productivity/writing-for-agents/SKILL.md | 39 | defined here | Primary definition of moving non-essential reference material out of main skill files behind context pointers. |

## Consumes
Detailed reference material, branch-specific instructions, and secondary documentation.

## Produces
Lean, readable primary instruction files with context pointers linking to disclosed reference files.

## When applied
When authoring or refactoring skills and agent documents where in-file reference risks bloating the main sequence.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
The core architectural discipline of Matt's documentation approach: keep primary files focused on ordered steps and high-priority rules, moving detailed, branch-specific, or voluminous references into separate files accessed only via context pointers when needed.
