---
package: rjm
name: headroom
slug: headroom
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# headroom

## Definition — verbatim
> "15s of headroom so an inner deadline fires first and the reader gets the specific message" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:169-170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 169 | defined here | Explains the necessity of buffer duration between inner execution timeouts and outer process watchdogs. |

## Consumes
Inner subprocess timeout definitions and outer harness timeout configurations.

## Produces
Guaranteed diagnostic visibility by ensuring inner errors trigger meaningful messages before outer harness kills occur.

## When applied
Applied when configuring tiered process timeouts, wrapper runners, and container execution deadlines.

## Sub-concepts
none

## Part of
gate-tier-placement

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Headroom is a deliberate safety interval enforced between nested timeout limits (such as a 150s child process clamp and a 165s process watchdog). In rjm's architecture (ADR-104 and ADR-086), maintaining adequate headroom ensures that inner tasks time out first with actionable diagnostic errors, preventing opaque outer kills and container teardowns from destroying forensic evidence.
