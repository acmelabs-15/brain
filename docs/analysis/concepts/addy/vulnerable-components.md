---
package: addy
name: Vulnerable Components
slug: vulnerable-components
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Vulnerable Components

## Definition — verbatim
(used, not defined)
> "| 6 | Vulnerable Components | The ecosystem's dependency audit (`npm audit`, `pip-audit`, ...), keep deps updated, minimal deps |" — references/security-checklist.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 184 | references | Listed as OWASP #6 risk mitigated by ecosystem dependency audits, updates, and minimal dependency footprints. |

## Consumes
Direct and transitive project dependencies, lockfiles, and vulnerability advisory databases.

## Produces
Regular dependency vulnerability audit reports and reachability triage assessments.

## When applied
During regular maintenance, before releases, and within automated CI build pipelines.

## Sub-concepts
dependency-security

## Part of
owasp-top-10-quick-reference, security-checklist

## Implementation status
clean

## Design notes
Vulnerable Components (OWASP A06) refers to risks introduced by incorporating third-party libraries and frameworks with known security vulnerabilities. Addy addresses this threat by integrating package manager audit tooling into CI, keeping dependencies updated, pruning unnecessary packages, and triaging vulnerabilities for actual code reachability.
