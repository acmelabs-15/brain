---
package: rjm
name: Reversibility assessment
slug: reversibility-assessment
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
  - {path: .claude/skills/adr-review/references/artifacts.md, sha256: 82daf59b64761376f05dd9a47a02294f060cf150675f6c926722ee1d7c300c65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reversibility assessment

## Definition — verbatim
> "Every architectural decision MUST include a reversibility assessment. This addresses agency/legacy risk by ensuring decisions can be unwound if needed." — .claude/agents/architect.md:358

## Also called — verbatim
"Reversibility Assessment" — .claude/agents/architect.md:356

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 115 | used here | Required as a P1 change for ADR-023 revision. |
| .claude/agents/architect.md | 356 | defined here | Mandatory ADR section defined in the Architect agent specification to mitigate legacy risk. |
| .claude/skills/adr-review/references/agent-prompts.md | 52 | used here | Included in the architect review checklist for ADR structural compliance. |
| .claude/skills/adr-review/references/artifacts.md | 90 | defined here | Documented as a required ADR template component per architect.md. |

## Consumes
Proposed architectural decision, technology dependencies, migration path, and coupling analysis.

## Produces
Documented unwinding strategy, reversibility rating, and rollback contingency plan.

## When applied
Mandatory for every architecture decision record evaluated during the review phase.

## Sub-concepts
none

## Part of
madr-4-0

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
A reversibility assessment is a mandatory architectural evaluation requirement in rjm designed to mitigate legacy and agency risk. By requiring decision authors to explicitly detail how a chosen technical path can be unwound, abandoned, or replaced if assumptions fail, it prevents lock-in to unworkable architectures.
