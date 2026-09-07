---
package: rjm
name: Pre-work
slug: pre-work
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-work

## Definition — verbatim
(used, not defined)

> "Session initialization | Pre-work | Tool output (Serena calls) | ✅ BLOCKING gate exists" — .agents/analysis/002-project-constraints-consolidation.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 107 | used here | Classified as the initial session lifecycle phase covering session initialization and constraint verification. |

## Consumes
Handoff files, issue descriptions, and repository configuration.

## Produces
Activated memory environment, initialized project context, and confirmed constraints.

## When applied
At the start of every session before moving into pre-implementation or task planning.

## Sub-concepts
constraint-validation, phase-1-5

## Part of
session-protocol

## Implementation status
defects: missing-path

## Design notes
Pre-work is the initial phase in rjm's session lifecycle during which environment setup, memory activation, and constraint discovery occur. It ensures that an agent is fully grounded in persistent context and authoritative repo policies before any analysis or implementation steps commence.
