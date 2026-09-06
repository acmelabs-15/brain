---
package: matt
name: DESIGN-IT-TWICE.md
slug: design-it-twice-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# DESIGN-IT-TWICE.md

## Definition — verbatim
(used, not defined)

> "[DESIGN-IT-TWICE.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/DESIGN-IT-TWICE.md) spins up parallel [sub-agents](https://www.aihero.dev/ai-coding-dictionary/subagent) to produce three or more radically different interfaces for the same module, then compares them on depth, locality and seam placement." — docs/engineering/codebase-design.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 46 | defined here | Cited as a supporting reference file detailing multi-agent parallel interface exploration. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug (runaway agent loops when invoked without driver stopping rules, issue #449), other (harness lock-in to Claude Code Agent tool, issue #564)

## Design notes
DESIGN-IT-TWICE.md is a supporting reference file name within the codebase-design skill rather than a distinct lifecycle concept.
