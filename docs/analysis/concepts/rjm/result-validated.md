---
package: rjm
name: RESULT: VALIDATED
slug: result-validated
kind: artifact
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RESULT: VALIDATED

## Definition — verbatim
> "Emit the ship report with `RESULT: VALIDATED` and the recorded `/review` attestation." — .claude/commands/ship.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 122 | defined here | Terminal outcome emitted in the ship report when validating changes in `mode=contributor`. |

## Consumes
Passing pre-flight checks and `/review` axis execution on a colleague's PR branch.

## Produces
An advisory ship report concluding with `RESULT: VALIDATED` and the recorded review attestation.

## When applied
Emitted at the end of `/ship` execution when operating in contributor mode.

## Sub-concepts
none

## Part of
mode-contributor, ship

## Implementation status
clean

## Design notes
`RESULT: VALIDATED` is the terminal verdict produced by `/ship` when operating in contributor mode. It confirms that the contributor's code satisfies all quality, security, and testing requirements while deliberately avoiding git push or merge actions that belong solely to the PR owner.
