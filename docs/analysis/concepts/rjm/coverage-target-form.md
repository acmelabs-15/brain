---
package: rjm
name: Coverage target form
slug: coverage-target-form
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Coverage target form

## Definition — verbatim
> "Use the module-name form (`--cov=wait_for_unresolved_zero`), never the file-path form." — .claude/skills/ai-agents-validation-and-qa/SKILL.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 111 | defined here | Defined as mandating module-name syntax over file paths for pytest-cov targets to avoid import failures on Python 3.14. |

## Consumes
Pytest command-line options and coverage target specifications.

## Produces
Reliable pytest-cov module measurement without "Module never imported" warnings.

## When applied
Applied when authoring pytest coverage commands in scripts and CI workflow files.

## Sub-concepts
none

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A packaging and testing rule mandating module-name syntax rather than file paths for pytest-cov targets. As discovered in Issue #2063 with pytest-cov 7.x on Python 3.14, using file paths causes pytest-cov to misidentify modules as never imported, falsely reporting 0% coverage.
