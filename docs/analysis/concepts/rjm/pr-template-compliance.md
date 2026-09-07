---
package: rjm
name: PR Template Compliance
slug: pr-template-compliance
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/validate-pr-description.md, sha256: a77b04b081da3955117fae000dcf4f7db5ce391b2d050bd272e2b50e777ee9f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PR Template Compliance

## Definition — verbatim
> "Check that required sections are populated:" — .claude/commands/validate-pr-description.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/validate-pr-description.md | 33 | defined here | Third validation criterion checking that PR descriptions populate Summary, Changes, and Type of Change sections. |

## Consumes
Pull request description markdown body, repository pull request template schema.

## Produces
Compliance validation report confirming presence and population of required template sections (Summary, Changes, Type of Change).

## When applied
Checked during pre-submission PR validation in `/validate-pr-description` and `/ship`.

## Sub-concepts
none

## Part of
validate-pr-description

## Implementation status
defects: doc-drift, other

## Design notes
PR Template Compliance ensures pull request descriptions provide structured, standardized context before review. By verifying that Summary, Changes, and Type of Change sections are non-empty and properly populated, it prevents undocumented pull requests from entering review queues and wasting reviewer attention.
