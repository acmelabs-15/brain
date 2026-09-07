---
package: rjm
name: Target Recon
slug: target-recon
kind: phase
package_phase: rjm:coordinator
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Target Recon

## Definition — verbatim
> "Before you classify or route, establish the target repository's stack." — .claude/agents/orchestrator.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 35 | defined here | Pre-triage protocol establishing the target repository's technology stack before routing. |
| src/claude/orchestrator.md | 35 | defined here | Architectural directive to inspect target signals before classification. |
| templates/agents/orchestrator.shared.md | 40 | defined here | Initial discovery step preventing false assumptions about repository language or framework. |

## Consumes
Repository manifests, configuration files, file extensions, and build system descriptors.

## Produces
Verified target repository technology stack profile and architectural context.

## When applied
Executed as the immediate first action before triage or delegation begins.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Target Recon is the discovery phase performed by orchestrator before any task triage. It prevents the orchestrator from mistakenly assuming that the target project shares the host system's stack (e.g. Python vs TypeScript), ensuring downstream specialists receive correct technology framing.
