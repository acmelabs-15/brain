---
package: addy
name: compulsory deprecation
slug: compulsory-deprecation
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

# compulsory deprecation

## Definition — verbatim
> "| **Compulsory** | Old system has security issues, blocks progress, or maintenance cost is unsustainable | Hard deadline. Old system will be removed by date X. Provide migration tooling. |" — skills/deprecation-and-migration/SKILL.md:63
> "Compulsory deprecation requires providing migration tooling, documentation, and support — you can't just announce a deadline." — skills/deprecation-and-migration/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 65 | defines | Defined as forced deprecation with hard deadlines when maintenance cost or security risks demand it. |

## Consumes
Legacy system with severe security vulnerabilities, unsustainable maintenance costs, or progress-blocking architectural debt.

## Produces
Mandatory removal deadline, dedicated migration tooling, automated migration scripts, and proactive consumer migration support.

## When applied
Applied when an old system poses critical security risks, blocks core architectural evolution, or incurs unsustainable maintenance overhead.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A mandatory deprecation pattern enforcing a firm removal deadline and requiring infrastructure owners to provide migration tooling, comprehensive documentation, and active support to ensure all consumers migrate before the cutoff.
