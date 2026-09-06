---
package: addy
name: "Ship Decision: GO | NO-GO"
slug: ship-decision-go-no-go
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Ship Decision: GO | NO-GO

## Definition — verbatim
> "## Ship Decision: GO | NO-GO" — commands/ship.toml:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 43 | defines | Terminal verdict section defined in Phase C of Gemini CLI ship command. |
| commands/ship.toml | 43 | defines | Terminal verdict document defined in Phase C of the /ship command workflow. |

## Consumes
Reports from parallel specialist personas (code-reviewer, security-auditor, test-engineer) and direct verifications

## Produces
A definitive launch decision document containing blockers, recommended fixes, acknowledged risks, and a rollback plan

## When applied
Produced during Phase C of the `/ship` workflow once all specialist reports have been synthesized in the main context.

## Sub-concepts
rollback-plan

## Part of
shipping-and-launch

## Implementation status
clean

## Design notes
The Ship Decision: GO | NO-GO serves as the authoritative quality gate for production releases in addy. It prevents unverified releases by consolidating findings across multiple independent review axes into a single unambiguous verdict that requires a mandatory rollback plan before proceeding.
