---
package: rjm
name: CISA KEV
slug: cisa-kev
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CISA KEV

## Definition — verbatim
(used, not defined)

> "| Critical | CVE with CVSS >= 9.0, or known-exploited (CISA KEV) | Block release; fix immediately |" — .claude/agents/dependency-auditor.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 90 | used here | Cited as an authoritative criterion elevating vulnerabilities to Critical release-blocking severity. |

## Consumes
Vulnerability CVE identifiers identified during dependency scanning.

## Produces
Binary classification of vulnerabilities as known-exploited, triggering immediate release blockage.

## When applied
During Step 3 (Classify) of the dependency audit process when evaluating severity.

## Sub-concepts
none

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
The Cybersecurity and Infrastructure Security Agency Known Exploited Vulnerabilities catalog. In rjm's dependency auditing pipeline, any CVE listed in CISA KEV is automatically classified as Critical severity regardless of its base CVSS score, triggering an immediate release block and required remediation.
