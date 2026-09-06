---
package: addy
name: The Churn Rule
slug: the-churn-rule
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Churn Rule

## Definition — verbatim
> "**The Churn Rule:** If you own the infrastructure being deprecated, you are responsible for migrating your users — or providing backward-compatible updates that require no migration. Don't announce deprecation and leave users to figure it out." — skills/deprecation-and-migration/SKILL.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 106 | defines | Stated as a core responsibility rule for infrastructure owners during incremental migration. |

## Consumes
Deprecated infrastructure, shared platform services, libraries, and downstream consumer dependencies.

## Produces
Backward-compatible updates, automated migration tooling, or direct migration pull requests authored by the infrastructure team.

## When applied
Applied when deprecating shared infrastructure, frameworks, or APIs used across multiple teams or services.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
An organizational and engineering discipline placing the migration burden squarely on the owners of deprecated infrastructure rather than imposing churn on downstream consumers. Owners must either migrate user code themselves or maintain seamless backward compatibility.
