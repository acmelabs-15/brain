---
package: rjm
name: No behavior change for callers
slug: no-behavior-change-for-callers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# No behavior change for callers

## Definition — verbatim
> "5. **No behavior change for callers.** Migration is name-preserving. Callers" — .agents/architecture/ADR-063-memory-skill-decomposition.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 126 | defined here | Codified as an architectural invariant ensuring skill refactoring preserves existing invocation contracts without breaking callers. |

## Consumes
Existing caller invocation contracts and interface definitions.

## Produces
Refactored internal module implementations that maintain 100% backward compatibility for existing consumers.

## When applied
Mandated during all structural refactorings and internal skill decompositions.

## Sub-concepts
thin-router

## Part of
refactoring-discipline

## Implementation status
defects: missing-path, doc-drift

## Design notes
No behavior change for callers is a fundamental backward-compatibility constraint in rjm. It requires that major architectural reorganizations—such as decomposing monolithic skills into sub-skills—must not break existing client workflows. By retaining legacy identifiers as routing facades, existing scripts, commands, and subagents continue executing without disruption, allowing migrations to proceed incrementally without cross-cutting lockstep changes.
