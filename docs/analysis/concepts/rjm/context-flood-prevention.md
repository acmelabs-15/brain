---
package: rjm
name: Context flood prevention
slug: context-flood-prevention
kind: technique
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Context flood prevention

## Definition — verbatim
> "- [Context Budget Management](references/context-budget-management.md) - Context flood prevention, Think in Code principle, hook architecture for session continuity" — .claude/skills/analyze/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 72 | used here | Context budget management technique preventing token saturation via state truncation and selective inspection. |

## Consumes
Large output buffers, verbose command outputs, and multi-file exploration results.

## Produces
Truncated previews, summary representations, and deferred file reading strategies that keep agent context manageable.

## When applied
Applied throughout multi-step analysis sessions, specifically in state formatting and subagent exploration.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`Context flood prevention` encompasses runtime techniques (such as `analyze.py`'s 600-character thought preview truncation and Explore subagent delegation) designed to keep token consumption within sustainable budgets during extended sessions.
