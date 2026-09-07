---
package: rjm
name: isolation_required
slug: isolation-required
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# isolation_required

## Definition — verbatim
(used, not defined)

> "isolation_required: true" — .claude/agents/implementer.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 8 | defined here | Frontmatter attribute declaring that the implementer agent requires an isolated execution environment. |
| templates/agents/implementer.shared.md | 5 | defined here | Shared frontmatter attribute declaring execution isolation requirements. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
isolation_required is a boolean metadata configuration field in agent frontmatter indicating whether the agent requires an isolated execution environment, classified as kind: name-only per D-023.
