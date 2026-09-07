---
package: matt
name: sessions
slug: sessions
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sessions

## Definition — verbatim
(used, not defined)

> "`teach` turns the directory you run it in into a standing teaching workspace and teaches you one topic across many [sessions](https://www.aihero.dev/ai-coding-dictionary/session), in short self-contained HTML lessons." — docs/productivity/teach.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/resolving-merge-conflicts.md | 35 | used here | Highlights that sibling sessions in parallel worktrees should resolve their own merges to preserve intent. |
| docs/productivity/teach.md | 3 | used here | Explains that teach structures long-term learning across multiple self-contained interaction sessions. |
| external/resolving-merge-conflicts.md | 39 | used here | Discusses intent preservation when merging branches generated across parallel agent sessions. |
| external/teach.md | 25 | used here | Details how cumulative learning sessions build up durable artifacts without relying on in-session memory. |

## Consumes
User goals, task instructions, and persisted workspace/repository files.

## Produces
Stateful learning progress files, code changes, or branch histories created across separate interaction runs.

## When applied
Whenever engineering tasks or learning curriculums span multiple sequential or parallel conversational agent runs.

## Sub-concepts
none

## Part of
none

## Implementation status
clean in concept definition; associated with defects in teach implementation: script-bug (browser opening bugs on non-Mac platforms in teach/SKILL.md:46)

## Design notes
`sessions` captures the plural usage of session in Matt's toolkit, emphasizing workflows that span multiple execution boundaries. In `teach`, multi-session learning is coordinated by writing durable markdown files (`RESOURCES.md`, `LESSONS.md`) to disk so subsequent sessions pick up state without relying on evanescent conversational memory. In parallel development, sibling sessions operating in separate git worktrees are encouraged to perform their own branch reconciliations because the authoring session retains the design rationale that generic merge agents lack.
