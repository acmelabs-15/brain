---
package: rjm
name: SKIPPED: docs-only
slug: skipped-docs-only
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

# SKIPPED: docs-only

## Definition — verbatim
> "Strictly editorial doc edits: no code, config, tests, workflows, or code blocks changed" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 56 | used here | Referenced as the precedent evidence pattern allowing documentation changes to skip QA. |
| .claude/skills/ai-agents-config-catalog/SKILL.md | 101 | used here | Listed in the QA skip verdicts catalog with enforcement rules and eligibility test script pointers. |
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 123 | defined here | Tabulated in QA evidence semantics as permissible solely when all changes are strictly editorial markdown. |
| CONTRIBUTING.md | 711 | defined here | Documented in contributor guidelines as the exact evidence value required for docs-only QA exemptions. |

## Consumes
Staged git changes consisting strictly of markdown documentation files without code, tests, or workflows.

## Produces
Validated QA exemption evidence allowing pre-commit session validators to pass without a QA report.

## When applied
Recorded in session logs and PR metadata when changes are purely editorial documentation edits.

## Sub-concepts
none

## Part of
qa-validation

## Implementation status
defects: orphan, missing-path, doc-drift, internal-contradiction

## Design notes
`SKIPPED: docs-only` is a standardized evidence string in rjm that allows commits to bypass mandatory QA validation when all staged files are markdown documentation. Enforced by `scripts/validate_session_json.py` and pre-commit hooks, it ensures that non-code editorial work does not incur unnecessary test execution while strictly rejecting commits that mix docs with code.
