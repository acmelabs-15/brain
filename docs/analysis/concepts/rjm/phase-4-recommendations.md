---
package: rjm
name: Phase 4: Recommendations
slug: phase-4-recommendations
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4: Recommendations

## Definition — verbatim
> "### Phase 4: Recommendations" — templates/agents/quality-auditor.shared.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/quality-auditor.shared.md | 80 | defined here | Final phase of the quality auditor process, prioritizing interventions for low-scoring domains. |

## Consumes
Domain audit reports, gap classifications by severity, and scores for low-performing (D/F) domains.

## Produces
Prioritized list of concrete remediation actions targeting critical and significant domain gaps.

## When applied
Executed at the conclusion of the audit process to recommend specific improvements.

## Sub-concepts
none

## Part of
quality-auditor

## Implementation status
defects: missing-path

## Design notes
The recommendations phase prioritizes actionable engineering remedies for domains with failing or borderline grades, guiding targeted remediation rather than generic cleanup.
