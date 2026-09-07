---
package: rjm
name: Vulnerable Components
slug: vulnerable-components
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Vulnerable Components

## Definition — verbatim
> "| A06 | Vulnerable Components | Using libraries with known vulnerabilities |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 20 | defined here | Cataloged in OWASP Top 10 reference table as vulnerability category A06 focusing on third-party dependency risks. |

## Consumes
Project dependency manifests, lockfiles, and software bill of materials (SBOM).

## Produces
Automated dependency audits, vulnerability scan alerts, and package update recommendations.

## When applied
During dependency auditing and supply chain review in threat modeling and pipeline execution.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
Vulnerable Components (OWASP A06) addresses security risks originating from third-party libraries and frameworks with known CVEs, mitigated in rjm through dependency-auditor checks and continuous vulnerability scanning.
