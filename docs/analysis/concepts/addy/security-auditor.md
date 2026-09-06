---
package: addy
name: security-auditor
slug: security-auditor
kind: role
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/ship.toml, sha256: 7018889ee96cd5e198fee199fdf7bc8a5af6fa5e57d575d74a6d94837dd7a101}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: commands/ship.toml, sha256: a067c5c4ea484609ceb530b908c7fb707f184abae839826012ddca653517c1c5}
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# security-auditor

## Definition — verbatim
> "Security engineer focused on vulnerability detection, threat modeling, and secure coding practices." — agents/security-auditor.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/ship.toml | 15 | references | Specialist persona tool dispatched concurrently during pre-launch review |
| agents/security-auditor.md | 6 | defines | Title and role definition for Security Engineer persona |
| commands/ship.toml | 15 | references | Specialist persona tool dispatched concurrently during pre-launch review |
| docs/agents.md | 8 | defines | Agent roster entry documenting Security Engineer role and OWASP audit focus |
| README.md | 294 | applies | Catalog table listing security-auditor persona and responsibilities |

## Consumes
Code diff, dependency manifests, configuration files, authentication routes, and data flows.

## Produces
Security audit report detailing practical vulnerabilities, threat models, risk severity ratings, and mitigations.

## When applied
Invoked for dedicated security reviews or dispatched in parallel via `/ship` pre-launch orchestration.

## Sub-concepts
owasp-top-10

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
`security-auditor` is an autonomous specialist subagent acting as an experienced Security Engineer. It audits changes for exploitable vulnerabilities, OWASP Top 10 flaws, authentication/authorization bypasses, secrets exposure, and dependency CVEs, delivering objective risk assessments and actionable hardening advice.
