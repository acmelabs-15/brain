---
package: rjm
name: Error Handling
slug: error-handling
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
  - {path: .claude/skills/github-url-intercept/references/patterns.md, sha256: 06b2c777aaf19693918da842130ca7682818a4b8a38fb1f6fe69fb651a601752}
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Error Handling

## Definition — verbatim
> "## Error Handling" — .claude/agents/security/references/powershell-security-checklist.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/powershell-security-checklist.md | 129 | defined here | Checklist section mandating strict error handling and fail-fast configurations in PowerShell. |
| .claude/skills/github-url-intercept/references/patterns.md | 175 | defined here | Section heading outlining common error conditions and recovery patterns during URL interception. |
| .claude/skills/planner/scripts/executor.py | 257 | defined here | Prompt template tag instructing agents on error classification and milestone execution failure handling. |
| .claude/skills/review/references/qa.md | 126 | defined here | Critical review gate section specifying mandatory failure conditions for improper error handling in code PRs. |
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 24 | defined here | Skill synthesis quality rubric criterion evaluating graceful failures and actionable error messages. |

## Consumes
execution-exceptions, process-failures

## Produces
actionable-diagnostics, fail-fast-termination

## When applied
> "**FAIL if ANY of these are true**:" — .claude/skills/review/references/qa.md:128

## Sub-concepts
set-strictmode, erroractionpreference

## Part of
powershell-security-review, qa-review-checklist, skillforge-quality-rubric

## Implementation status
defects: orphan, doc-drift, other, missing-path, internal-contradiction, exit-code-mismatch

## Design notes
A comprehensive reliability and security discipline requiring operations to fail fast, classify errors, surface actionable diagnostics without leaking sensitive data, and reject silent failures. In rjm, it spans script execution flags, agent execution loops, and automated QA gates to guarantee observable and recoverable behavior across the entire lifecycle.
