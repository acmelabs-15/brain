---
package: rjm
name: Payload casing contract
slug: payload-casing-contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md, sha256: 56a5414b5d3dd24132335dade19bf3a3294921a141558e38b8c1069f345a6e82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Payload casing contract

## Definition — verbatim
(used, not defined)

> "| Payload casing contract, CLI 1.0.58 |" — .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/provenance.md | 13 | defined here | Documented in the provenance table citing issue #2290 for Copilot CLI 1.0.58 hook payload casing standards. |

## Consumes
JSON payload structures emitted by Copilot CLI lifecycle events.

## Produces
Robust deserialization handlers accepting camelCase properties such as `toolArgs`.

## When applied
Applied in hook handlers and JSON parsers processing CLI event inputs.

## Sub-concepts
none

## Part of
ai-agents-empirical-probe-toolkit

## Implementation status
defects: doc-drift

## Design notes
An interface contract resolving property casing incompatibilities in Copilot CLI hook payloads (issue #2290). It mandates that scripts handle camelCase attributes (like `toolArgs`) to prevent runtime deserialization failures during tool execution.
