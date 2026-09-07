---
package: rjm
name: Insecure Design
slug: insecure-design
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

# Insecure Design

## Definition — verbatim
> "| A04 | Insecure Design | Missing security controls in design phase |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 18 | defined here | Cataloged in OWASP Top 10 reference table as vulnerability category A04 representing architectural omissions. |

## Consumes
System architecture designs, functional specifications, and business workflows.

## Produces
Architectural threat models, trust boundary definitions, and pre-implementation defensive requirements.

## When applied
Evaluated during architecture review and Phase 2 threat modeling to catch missing security controls prior to implementation.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
Insecure Design (OWASP A04) represents foundational flaws where security controls were omitted during architecture and specification, driving the necessity of rjm's threat-modeling skill during design phases.
