---
package: rjm
name: Quantified Impact Statements
slug: quantified-impact-statements
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

# Quantified Impact Statements

## Definition — verbatim
> "Replace \"high impact\" with measurable data (e.g., \"affects 3 API endpoints handling 50K requests/day\")" — .claude/agents/security.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 73 | defined here | Core security standard requiring measurable data (e.g., affected endpoint counts and traffic volumes) instead of vague severity claims. |
| templates/agents/security.shared.md | 48 | defined here | Defined in the shared security agent template to enforce quantified impact analysis. |

## Consumes
Exploit scenarios, system architecture diagrams, API registries, and traffic telemetry.

## Produces
Measurable impact assertions documenting specific blast radius, endpoint counts, and request volumes.

## When applied
Applied whenever the Security Agent documents the consequence of an identified vulnerability.

## Sub-concepts
none

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
Quantified Impact Statements forces security agents in rjm to ground consequence claims in measurable system reality. By prohibiting generic phrases like "high impact" and demanding concrete numbers (such as the number of endpoints exposed or request volume affected), it prevents subjective threat inflation and informs accurate risk triage.
