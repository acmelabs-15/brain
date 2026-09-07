---
package: rjm
name: CVE
slug: cve
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CVE

## Definition — verbatim
(used, not defined)

> "Every finding must include specific CWE/CVE references, file locations, and line numbers" — .claude/agents/security.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 72 | used here | Cited as a required identifier taxonomy (alongside CWE) for evidence-based vulnerability findings. |

## Consumes
Identified publicly disclosed vulnerabilities or upstream dependency advisories.

## Produces
Canonical Common Vulnerabilities and Exposures identifiers (e.g. CVE-YYYY-NNNNN) indexing security issues.

## When applied
Applied when referencing known third-party dependency vulnerabilities or published security exploits.

## Sub-concepts
none

## Part of
- evidence-based-threat-assessment

## Implementation status
clean

## Design notes
In rjm, CVE (Common Vulnerabilities and Exposures) represents the standard external vulnerability identifier required in security assessments. By mandating CVE citations in dependency audits and threat reviews, rjm ensures security findings link directly to public disclosure catalogs and verifiable advisory databases.
