---
package: rjm
name: CVSS
slug: cvss
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CVSS

## Definition — verbatim
(used, not defined)

> "Use explicit scoring (e.g., \"Risk Score: 7/10\" or \"CVSS: 8.1\") for all vulnerability assessments" — .claude/agents/security.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 71 | used here | Cited as an approved standard for numeric scoring of vulnerabilities in security agent reviews. |
| .claude/skills/security-review/SKILL.md | 131 | used here | Cited as an approved numeric scoring metric assigned after completing threat-model reasoning questions. |

## Consumes
Evaluated threat actor access, attack complexity, privileges required, and impact scope.

## Produces
A standardized Common Vulnerability Scoring System numeric rating (0.0 to 10.0).

## When applied
Applied during security review to quantify vulnerability severity following threat modeling.

## Sub-concepts
none

## Part of
- risk-scores-with-numeric-values
- security-review

## Implementation status
clean

## Design notes
In rjm, CVSS (Common Vulnerability Scoring System) serves as an industry-standard numeric metric for quantifying security vulnerabilities. Referenced alongside generic risk scores, it grounds agent severity evaluations in established vulnerability scoring conventions, preventing arbitrary or idiosyncratic risk ratings.
