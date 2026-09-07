---
package: rjm
name: tool invocation layer
slug: tool-invocation-layer
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tool invocation layer

## Definition — verbatim
(used, not defined)

> "Gates operate at the **tool invocation layer**, blocking high-stakes actions until validation prerequisites are met." — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 69 | defined here | Identifies the interception boundary where routing-level enforcement gates block high-stakes actions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
routing-level-enforcement-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural abstraction layer describing the runtime point of interception between agent requests and tool execution rather than a distinct development lifecycle concept.
