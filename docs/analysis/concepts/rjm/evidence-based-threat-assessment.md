---
package: rjm
name: Evidence-Based Threat Assessment
slug: evidence-based-threat-assessment
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

# Evidence-Based Threat Assessment

## Definition — verbatim
> "Every finding must include specific CWE/CVE references, file locations, and line numbers" — .claude/agents/security.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 72 | defined here | Core security standard mandating specific CWE/CVE references, file locations, and line numbers for every finding. |
| templates/agents/security.shared.md | 47 | defined here | Defined in the shared security agent template to enforce concrete evidence citations in security reports. |

## Consumes
Vulnerability scan outputs, security diff reviews, and threat modeling notes.

## Produces
Falsifiable security findings backed by explicit CWE/CVE identifiers and verified source file line citations.

## When applied
Mandatory gate applied to every finding produced by the Security Agent before inclusion in review reports.

## Sub-concepts
- cve

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
Evidence-Based Threat Assessment enforces rjm's broader epistemic standards within security workflows. By requiring every reported vulnerability to cite exact file paths, line numbers, and formal CWE/CVE taxonomy identifiers, it prevents hallucinatory or speculative security warnings and ensures findings can be independently reproduced and verified.
