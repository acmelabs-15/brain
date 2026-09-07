---
package: rjm
name: "regulatory changes"
slug: regulatory-changes
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py, sha256: f8f1d7b0e29c9d8ce64daf97e8f81f34057384309203ba9ef1eecbb73eda1afb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# regulatory changes

## Definition — verbatim
> "Regulatory changes affect decision" — .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py | 119 | used here | Reassessment trigger rule monitoring shifts in compliance, legal, or data governance mandates. |

## Consumes
Legal audit findings, new statutory regulations (e.g. GDPR, HIPAA, AI Act), and data residency requirements.

## Produces
Mandatory decision reassessment trigger when regulatory shifts invalidate existing architecture or vendor compliance.

## When applied
Checked whenever legal or industry compliance frameworks impose new operational constraints.

## Sub-concepts
none

## Part of
reassessment-plan

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
A compliance-driven governance gate in rjm's reassessment playbook that fires when legal, security, or regulatory changes alter the viability of an outsourced SaaS solution or demand stricter data sovereignty controls that necessitate an in-house build.
