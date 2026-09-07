---
package: rjm
name: Generic field governance
slug: generic-field-governance
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Generic field governance

## Definition — verbatim
> "**Generic field governance.** A generic `copilotExclude` field on a dispatch-group shim entry is allowed only when all of the following hold, not merely a boolean flip:" — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:483-485

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 483 | defined here | Defined as the 9-rule governance protocol regulating temporary cross-harness exclusion flags in dispatch group configurations. |

## Consumes
Dispatch group definitions, architectural decisions, issue tracking metadata, and harness exclusion proposals.

## Produces
Strict governance audits ensuring cross-harness exclusion fields document rationale, residual risks, unaffected harness behaviors, and cleanup obligations.

## When applied
Applied whenever introducing or evaluating cross-platform exclusion properties in hook dispatch group configuration files.

## Sub-concepts
none

## Part of
cross-harness-permission-surface-asymmetry

## Implementation status
defects: missing-path, doc-drift

## Design notes
Generic field governance is a 9-item governance checklist in rjm establishing standards for cross-harness exclusion flags. It prevents unmanaged divergence across agent platforms by mandating strict boolean typing, issue attribution, explicit residual risk documentation, and cleanup requirements for all temporary exclusion fields.
