---
package: rjm
name: Skip / Ask First
slug: skip-ask-first
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skip / Ask First

## Definition — verbatim
(used, not defined)

> "- Generated files, vendored dependencies, lockfiles." — .claude/agents/code-reviewer.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 99 | defined here | Guidelines defining files to automatically skip and situations requiring prior user clarification. |
| .claude/agents/code-simplifier.md | 88 | defined here | Triage rules specifying generated/vendored files to skip and when to ask before simplifying. |
| .claude/agents/comment-analyzer.md | 81 | defined here | Filtering rules specifying when to skip comments and when to ask for clarification. |
| templates/agents/code-reviewer.shared.md | 109 | defined here | Shared template section defining skip and ask-first boundaries for code reviewers. |
| templates/agents/code-simplifier.shared.md | 97 | defined here | Shared template section defining skip and ask-first boundaries for code simplifiers. |
| templates/agents/comment-analyzer.shared.md | 92 | defined here | Shared template section defining skip and ask-first boundaries for comment analyzers. |

## Consumes
Target file lists, code diffs, and ambiguous repository conventions.

## Produces
Exclusions for non-actionable files and explicit clarification requests for ambiguous patterns.

## When applied
Applied during file triage and convention discovery across code analysis agents.

## Sub-concepts
none

## Part of
code-reviewer, code-simplifier, comment-analyzer

## Implementation status
clean

## Design notes
Skip / Ask First provides pragmatic filtering boundaries for code analysis agents. It instructs agents to automatically skip generated files, vendored dependencies, lockfiles, and untargeted pre-existing code, while mandating that they ask the user or orchestrator when conventions are genuinely ambiguous rather than guessing and reporting false defects.
