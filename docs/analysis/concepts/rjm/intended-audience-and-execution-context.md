---
package: rjm
name: intended audience and execution context
slug: intended-audience-and-execution-context
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# intended audience and execution context

## Definition — verbatim
> "Establish a hierarchical script organization based on **intended audience and execution context**:" — .agents/architecture/ADR-019-script-organization.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-019-script-organization.md | 35 | defined here | Core classification principle establishing script directory layout across developer, CI, build, skill, and test locations. |

## Consumes
Repository script inventory and invocation requirements across developers, CI workflows, and AI agents.

## Produces
Hierarchical directory structure (`scripts/`, `.github/scripts/`, `build/scripts/`, `.claude/skills/*/scripts/`, `tests/`) and distinct naming conventions.

## When applied
Applied when authoring, organizing, or refactoring repository scripts to assign them to their proper execution domain.

## Sub-concepts
validation-scripts, detection-scripts, utility-scripts, installation-scripts, workflow-modules, ci-helpers, report-generators, developer-facing-wrappers, ci-only-scripts

## Part of
none

## Implementation status
clean

## Design notes
Architectural organization pattern that partitions scripts according to who executes them (human developers, automated CI, build runners, or AI agents) and the runtime environment they expect, preventing execution environment mismatches and unmaintainable script sprawl.
