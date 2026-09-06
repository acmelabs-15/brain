---
package: matt
name: productivity
slug: productivity
kind: phase
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# productivity

## Definition — verbatim
> "- `productivity/`: daily non-code workflow tools" — CLAUDE.md:4

## Also called — verbatim
`Productivity` — skills/productivity/README.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/plugin.json | 19 | used here | Discovery keyword in plugin manifest describing productivity features. |
| CLAUDE.md | 4 | defined here | Defines the productivity bucket for daily non-code workflow tools. |
| skills/productivity/README.md | 1 | defined here | Header of the README describing non-code general workflow skills. |

## Consumes
Conversation context, developer prompts, architectural plans, and teaching materials.

## Produces
Handoff summaries, interactive interviews, plain-English explanations, and questionnaires.

## When applied
Applied for daily non-code workflow tasks such as concept alignment, session handoffs, communication repair, and learning.

## Sub-concepts
none

## Part of
mattpocock-skills

## Implementation status
clean

## Design notes
`productivity` represents one of the two core promoted buckets and lifecycle divisions in `mattpocock-skills`. Grouping daily non-code workflow capabilities (`grill-me`, `handoff`, `teach`, `to-questionnaire`, `wait-what`, and `writing-for-agents`), skills in `skills/productivity/` ship with the Claude Code plugin and are documented under `docs/productivity/`.
