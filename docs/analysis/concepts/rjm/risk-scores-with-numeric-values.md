---
package: rjm
name: Risk Scores with Numeric Values
slug: risk-scores-with-numeric-values
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Risk Scores with Numeric Values

## Definition — verbatim
> "Use explicit scoring (e.g., \"Risk Score: 7/10\" or \"CVSS: 8.1\") for all vulnerability assessments" — .claude/agents/security.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 71 | defined here | Core security standard requiring explicit numeric scoring (e.g., 7/10 or CVSS: 8.1) for all vulnerability assessments. |
| templates/agents/security.shared.md | 46 | defined here | Defined in the shared security agent template establishing numeric risk scoring standards. |

## Consumes
Vulnerability findings, threat model reasoning, and exploitability evidence.

## Produces
Quantitative numeric scores (such as CVSS base scores or 1-10 risk ratings) attached to every vulnerability report.

## When applied
Applied to every vulnerability assessment before a security finding can be recorded or communicated.

## Sub-concepts
- cvss

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
Risk Scores with Numeric Values enforces quantitative rigor on security reviews in rjm. By prohibiting vague qualitative labels ("pretty risky", "concerning") and mandating explicit numeric scores (e.g. 7/10 or CVSS 8.1), it eliminates ambiguity in triage and ensures downstream decision-makers receive actionable, calibrated risk data.
