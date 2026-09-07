---
package: rjm
name: Data Flow
slug: data-flow
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Data Flow

## Definition — verbatim
> "A typical request flows as follows:" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 42 | defined here | Step-by-step numbered sequence tracing a typical request through system components. |

## Consumes
Client request interactions, inter-component protocols, and persistent storage mutations.

## Produces
Numbered chronological sequence describing end-to-end request processing.

## When applied
Applied in architecture documentation to explain how components interact at runtime.

## Sub-concepts
request-lifecycle, sequence-trace

## Part of
architecture

## Implementation status
clean

## Design notes
Data Flow models the end-to-end traversal of a typical transaction or request across system components. By capturing step-by-step hops from client ingestion through authentication, intermediate processing, storage writes, and response delivery, it bridges static component definitions and dynamic runtime behavior.
