---
package: addy
name: pre-launch checklist
slug: pre-launch-checklist
kind: checklist
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# pre-launch checklist

## Definition — verbatim
> "## The Pre-Launch Checklist" — skills/shipping-and-launch/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/shipping-and-launch.json | 6 | used here | Trigger prompt evaluating skill activation for pre-launch verification. |
| skills/shipping-and-launch/SKILL.md | 20 | defined here | Main checklist section covering code quality, testing, monitoring, and rollback readiness. |

## Consumes
Release candidate status, CI test results, monitoring configuration, and rollback documentation.

## Produces
Item-by-item verification audit identifying passing criteria, acknowledged risks, and blockers.

## When applied
Executed prior to approving deployment to production for any release candidate.

## Sub-concepts
blockers, acknowledged-risks

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
The `pre-launch checklist` provides a structured, multi-dimensional verification protocol covering test passage, migration safety, monitoring readiness, and rollback paths. It prevents deployment omissions by ensuring that operational prerequisites are systematically verified rather than assumed. Without a pre-launch checklist, teams frequently deploy code that passes unit tests but lacks production telemetry or database rollback scripts.
