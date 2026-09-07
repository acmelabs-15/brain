---
package: matt
name: AI-navigability
slug: ai-navigability
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI-navigability

## Definition — verbatim
(used, not defined)

> "Surface architectural friction and propose **deepening opportunities**: refactors that turn shallow modules into deep ones. The aim is testability and AI-navigability." — skills/engineering/improve-codebase-architecture/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/SKILL.md | 9 | used here | Stated as a primary motivation alongside testability for converting shallow abstractions into deep modules. |

## Consumes
Codebase layout and modular boundaries.

## Produces
High-locality module structures that reduce cognitive hopping and context fragmentation for coding agents.

## When applied
Evaluated during architectural scans when agents encounter friction navigating across multiple thin wrapper files.

## Sub-concepts
none

## Part of
improve-codebase-architecture

## Implementation status
clean

## Design notes
A design quality attribute in Matt's framework representing how effectively an AI coding agent can understand, navigate, and modify a codebase without having to open and synthesize dozens of shallow, pass-through files to trace a single domain workflow.
