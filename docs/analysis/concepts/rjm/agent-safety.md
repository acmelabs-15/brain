---
package: rjm
name: agent-safety
slug: agent-safety
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent-safety

## Definition — verbatim
> "name: agent-safety" — .claude/skills/review/references/agent-safety.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 2 | defined here | Frontmatter name declaration defining the agent-safety review task specification. |
| .claude/skills/review/SKILL.md | 29 | used here | Listed as one of the 11 Stage-2 canonical review axes evaluated during multi-axis PR reviews. |

## Consumes
Pull request diffs modifying agent prompts, templates, skills, or lifecycle hooks.

## Produces
Structured review findings and verdicts (PASS, WARN, CRITICAL_FAIL) assessing autonomous execution risk.

## When applied
Applied when a pull request modifies agent prompts, skills, or hooks that alter autonomous agent behaviors.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
`agent-safety` is a Stage-2 canonical review role and axis tasked with identifying risks where code changes alter agent autonomy, tool access permissions, guardrails, or prompt behavioral boundaries.
