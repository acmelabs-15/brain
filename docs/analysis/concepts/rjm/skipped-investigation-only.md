---
package: rjm
name: SKIPPED: investigation-only
slug: skipped-investigation-only
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKIPPED: investigation-only

## Definition — verbatim
> "No code/config changes at all" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 56 | defined here | Formulated as the explicit evidence marker permitting research sessions to pass pre-commit validation. |
| .claude/skills/ai-agents-config-catalog/SKILL.md | 100 | used here | Listed in the QA skip catalog with allowlist boundaries and CI backstop validation rules. |
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 124 | defined here | Codified in QA evidence semantics as valid strictly when staged files match the investigation allowlist. |
| CONTRIBUTING.md | 712 | defined here | Documented in contributor guidelines as the required evidence string for research/analysis sessions. |

## Consumes
Staged changes confined strictly to recognized investigation directories (e.g. `.agents/analysis/`, `.agents/sessions/`, `.serena/memories/`).

## Produces
Validated QA skip evidence enabling session validation scripts to pass without an associated QA review artifact.

## When applied
Used in sessions producing research notes, architectural assessments, or retrospectives where no production code or configs are modified.

## Sub-concepts
none

## Part of
qa-validation

## Implementation status
defects: orphan, missing-path, doc-drift, internal-contradiction

## Design notes
`SKIPPED: investigation-only` is an evidence marker in rjm that allows research and spike sessions to commit without running QA validation or producing QA reports. Codified in ADR-034, it is paired with executable allowlist enforcement (`scripts/modules/investigation_allowlist.py`) to prevent developers and agents from using investigation mode to sneak unvalidated code into the repository.
