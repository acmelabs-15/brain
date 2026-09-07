---
package: rjm
name: Naive Reader
slug: naive-reader
kind: role
package_phase: rjm:review
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

# Naive Reader

## Definition — verbatim
> "| **Naive Reader** | Comprehension by someone new to the domain | Unexplained terms, missing context a newcomer needs, undefined acronyms used before they are spelled out. |" — .claude/agents/critic.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 66 | defines | Persona table row evaluating document comprehension for newcomers. |
| templates/agents/critic.shared.md | 70 | defines | Shared template persona table row checking for missing context and unexplained terminology. |

## Consumes
Written technical documents, plans, and specifications.

## Produces
Critique findings flagging jargon, unexplained acronyms, and missing contextual background.

## When applied
Applied during persona evaluation of written prose artifacts.

## Sub-concepts
none

## Part of
persona-evaluation

## Implementation status
defects: missing-path

## Design notes
A review persona evaluating documentation from the viewpoint of a newcomer, ensuring technical prose does not rely on unspoken tribal knowledge.
