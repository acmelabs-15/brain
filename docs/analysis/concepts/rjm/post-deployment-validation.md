---
package: rjm
name: "Post-Deployment Validation"
slug: post-deployment-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-Deployment Validation

## Definition — verbatim
> "### Post-Deployment Validation" — .agents/architecture/ADR-041-codeql-integration.md:346

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-041-codeql-integration.md | 346 | defined here | Section heading defining the 6-month evaluation criteria and ROI review gate. |

## Consumes
Usage logs, bug discovery metrics, developer feedback, and maintenance overhead reports.

## Produces
A formal determination whether to promote, maintain, or deprecate a deployed architectural capability.

## When applied
Scheduled at fixed milestones following deployment (e.g. 6 months post-deployment) before permanent adoption.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
defects: doc-drift, missing-path

## Design notes
A governance gate requiring deployed architectural mechanisms to be reviewed after a fixed period against concrete adoption and return-on-investment criteria, preventing unused tooling from accumulating as maintenance debt.
