---
package: rjm
name: Threat-Model Reasoning Protocol
slug: threat-model-reasoning-protocol
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Threat-Model Reasoning Protocol

## Definition — verbatim
> "Before scoring any risk or assigning a severity, reason step-by-step through the threat model. Work through these three questions in order, and write the answers into the finding:" — .claude/agents/security.md:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 203 | defined here | Mandatory three-question reasoning protocol required before scoring any risk or assigning severity. |
| .claude/skills/security-review/SKILL.md | 116 | defined here | Defined in security-review skill as the reasoning procedure answering actor, surface, and consequence. |
| templates/agents/security.shared.md | 174 | defined here | Defined in the shared security agent template for structured threat reasoning. |

## Consumes
Code diffs, architecture specs, potential attack paths, and vulnerability hypotheses.

## Produces
Step-by-step answers defining the specific threat actor, the exact attack surface, and the concrete exploit consequence.

## When applied
Mandatory reasoning gate applied before calculating CVSS or assigning severity levels to findings.

## Sub-concepts
none

## Part of
- security-agent
- security-review

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Threat-Model Reasoning Protocol enforces structured causal analysis in rjm security reviews. By requiring agents to sequentially identify the threat actor, pinpoint the exact attack surface, and detail the concrete consequences before assigning risk scores or severity ratings, it prevents reflexive or exaggerated scoring and guarantees every finding represents a grounded attack path.
