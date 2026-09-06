---
package: addy
name: Localize
slug: localize
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Localize

## Definition — verbatim
> "Narrow down WHERE the failure happens:" — skills/debugging-and-error-recovery/SKILL.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 87 | defined here | Step 2 of the Triage Checklist narrowing down the architectural layer where the failure originates. |

## Consumes
Reproduced failure cases, stack traces, system logs, component boundaries, and git history.

## Produces
Identification of the specific subsystem layer (UI, API, database, build tooling, external service, test) or commit responsible for the failure.

## When applied
Applied after reproducing the failure, before attempting to reduce code or implement a fix.

## Sub-concepts
bisection

## Part of
the-triage-checklist, debugging-and-error-recovery

## Implementation status
clean

## Design notes
The localization technique narrows the problem search space to a specific layer of the system hierarchy or a specific regression commit. This eliminates aimless code examination across multiple subsystems by isolating the boundary where expected and actual state diverge.
