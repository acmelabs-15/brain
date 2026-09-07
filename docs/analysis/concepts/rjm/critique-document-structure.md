---
package: rjm
name: Critique Document Structure
slug: critique-document-structure
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critique Document Structure

## Definition — verbatim
> "## Critique Document Structure" — .claude/agents/critic.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 158 | defined here | Section heading defining the standard output file path convention and markdown template structure for plan reviews. |
| templates/agents/critic.shared.md | 162 | defined here | Section heading defining the critique markdown document schema across shared platforms. |

## Consumes
Plan files, design specifications, and architecture proposals evaluated across the six critic review axes.

## Produces
Standardized critique markdown documents saved to `.agents/critique/[NNN]-[plan-name]-critique-[YYYY-MM-DD].md`.

## When applied
When the critic completes its evaluation of a plan artifact and structures its findings, axis scores, and verdicts for persistence.

## Sub-concepts
none

## Part of
critic

## Implementation status
defects: missing-path

## Design notes
Standardizes the report structure and storage location for adversarial plan reviews in rjm. By mandating a uniform document structure (.agents/critique/[NNN]-[plan-name]-critique-[YYYY-MM-DD].md) with fixed sections (Verdict, Summary, Scores by Axis, Reasoning, Critical Findings, Approval Conditions, Recommendation), it ensures predictable parsing by orchestrators and human reviewers.
