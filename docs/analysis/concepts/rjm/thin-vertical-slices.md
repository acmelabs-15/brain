---
package: rjm
name: thin vertical slices
slug: thin-vertical-slices
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# thin vertical slices

## Definition — verbatim
> "description: Build incrementally. Implement changes in thin vertical slices with TDD and atomic commits. Run after /plan." — .claude/commands/build.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 2 | used here | Stated in command description as the core implementation strategy for incremental delivery. |

## Consumes
Decomposed tasks from `/plan` with explicit acceptance criteria.

## Produces
End-to-end implemented functional units committed atomically with co-located tests.

## When applied
During the `/build` phase when translating plan tasks into code changes.

## Sub-concepts
none

## Part of
build-command

## Implementation status
clean

## Design notes
Thin vertical slices mandate that engineering changes span the complete execution stack in small, fully functional, independently verifiable increments rather than large horizontal layers. In rjm's incremental lifecycle, this structure prevents deferred integration risks, isolates regressions to atomic commits, and guarantees each slice satisfies its specific acceptance criteria before moving forward.
