---
package: rjm
name: EVENT=
slug: event
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EVENT=

## Definition — verbatim
(used, not defined)

> "The push guards used to emit `EVENT=` telemetry lines" — .claude/skills/ai-agents-research-methodology/SKILL.md:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 169 | used here | Describes the standard machine-parseable stderr prefix emitted by push guards for telemetry analysis. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented

## Design notes
`EVENT=` is a machine-parseable line prefix format used in stderr telemetry streams rather than an independent lifecycle concept. In rjm's historical push-guard framework (retired under ADR-084), prefixing structured JSON events with `EVENT=` allowed downstream classifiers to parse guard intercepts and evaluate rule maturity without interfering with regular console output.
