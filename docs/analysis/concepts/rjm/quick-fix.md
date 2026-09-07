---
package: rjm
name: Quick Fix
slug: quick-fix
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick Fix

## Definition — verbatim
> "Quick Fix: implementer → qa" — .claude/agents/AGENTS.md:230-231

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 230 | defined here | Defines the minimal two-agent standard workflow for rapid bug fixes. |
| .github/scripts/invoke_pr_comment_processing.py | 244 | used here | Classifies PR comments as quick-fix actions requiring targeted implementation. |
| src/claude/AGENTS.md | 230 | defined here | Canonical source definition of the quick fix workflow sequence. |

## Consumes
Localized bug reports, simple PR comments, or minor test failure diagnostics.

## Produces
Targeted code corrections verified by QA test execution.

## When applied
Applied for small, low-risk defects that do not require full architectural review or multi-stage milestone planning.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Quick Fix is rjm's streamlined two-stage workflow pattern pairing the implementer and qa agents directly. It bypasses the overhead of heavy planning and architectural governance for minor, well-understood defects while preserving mandatory testing verification before completion.
