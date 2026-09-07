---
package: rjm
name: Guard telemetry and maturity tiers
slug: guard-telemetry-and-maturity-tiers
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Guard telemetry and maturity tiers

## Definition — verbatim
> "### Guard telemetry and maturity tiers (retired)" — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 83 | defined here | Documented as a retired diagnostic instrument and maturity classification tier system deleted in issue #5154. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
not-implemented

## Design notes
A diagnostic and maturity classification framework in rjm that previously organized push guards into maturity tiers (T0 to T3) based on structured EVENT telemetry emitted to stderr. It was completely retired and deleted in issue #5154, removing push_guard_base.py and guard-maturity in favor of direct exit codes and focused diagnostic scripts.
