---
package: rjm
name: comment-analyzer
slug: comment-analyzer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# comment-analyzer

## Definition — verbatim
> "Use this agent when you need to analyze code comments for accuracy, completeness, and long-term maintainability." — .claude/agents/comment-analyzer.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/comment-analyzer.md | 2 | defines | Agent frontmatter declaration defining the comment-analyzer role and capabilities. |
| .claude/skills/doc-accuracy/SKILL.md | 54 | used here | Referenced as an advisory, single-file comment evaluation agent. |
| docs/agent-catalog.md | 21 | used here | Catalog entry describing the agent's role, token footprint, and invocation triggers. |

## Consumes
Code files, inline comments, docstrings, and pull request diffs.

## Produces
Structured comment evaluation reports classifying comments into Preserve, Update, or Remove buckets.

## When applied
Triggered during pull requests touching comments, docstring reviews, or technical debt remediation passes.

## Sub-concepts
triage-categories, preserve, update, remove, precedence

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A support agent tasked with auditing code comments against implementation code, identifying comment rot, and providing actionable triage recommendations.
