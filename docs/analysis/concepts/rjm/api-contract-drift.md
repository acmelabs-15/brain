---
package: rjm
name: api-contract-drift
slug: api-contract-drift
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# api-contract-drift

## Definition — verbatim
(used, not defined)

> "| `api-contract-drift` | Go API response vs TypeScript interface mismatches |" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 48 | used here | Listed in the static analysis drift detection table as the tool identifying mismatches between Go API responses and TypeScript interfaces. |

## Consumes
Go backend API response models and TypeScript client interface types.

## Produces
Contract divergence reports and mismatch error diagnostics.

## When applied
Applied during build verification or pre-push gates to catch cross-stack contract drift.

## Sub-concepts
none

## Part of
drift-detection-via-static-analysis

## Implementation status
clean

## Design notes
A static analysis verification tool in rjm that prevents integration bugs by verifying structural alignment between Go server responses and TypeScript frontend type definitions.
