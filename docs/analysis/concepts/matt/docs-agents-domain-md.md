---
package: matt
name: docs/agents/domain.md
slug: docs-agents-domain-md
kind: name-only
package_phase: matt:domain-modeling
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# docs/agents/domain.md

## Definition — verbatim
(used, not defined)

> "There is <a href=\"https://github.com/mattpocock/skills/issues/717\" rel=\"noopener noreferrer\" target=\"_blank\" class=\"ah-prose-a\">an open request</a> to fix this; until then, the workaround is to put the instruction in your own <code class=\"ah-code-inline\">docs/agents/domain.md</code>, which the skills already read." — external/domain-modeling.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/domain-modeling.md | 45 | used here | Recommended repo-local documentation path for storing custom domain-modeling instructions that agent skills automatically consume. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
defects: missing-path, doc-drift (external doc claims skills already read docs/agents/domain.md, but path is not referenced in domain-modeling/SKILL.md)

## Design notes
`docs/agents/domain.md` is a file path representing repository-specific agent guidance for domain modeling conventions, cataloged as `kind: name-only` per D-023 rather than an active lifecycle concept.
