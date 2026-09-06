---
package: matt
name: glossary
slug: glossary
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: skills/engineering/grill-with-docs/SKILL.md, sha256: 7de372c13488f1ee96cc11cd8907b56b6809cc93eef776eeddd37de6b6cbe3fe}
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# glossary

## Definition — verbatim
(used, not defined)

> "description: A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go." — skills/engineering/grill-with-docs/SKILL.md:3

## Also called — verbatim
`ubiquitous language` — docs/engineering/domain-modeling.md:3
`CONTEXT.md` — skills/engineering/setup-matt-pocock-skills/domain.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 3 | used here | Referenced as the canonical dictionary that domain-modeling sharpens while resolving terms. |
| external/domain-modeling.md | 25 | used here | Described in external documentation as the project vocabulary repository challenged during design. |
| external/grill-with-docs.md | 39 | used here | Highlighted as the primary output artifact of grill-with-docs, capturing agreed domain language. |
| skills/engineering/grill-with-docs/SKILL.md | 3 | used here | Named in skill description as one of the persistent artifacts created during interview sessions. |
| skills/engineering/setup-matt-pocock-skills/domain.md | 43 | used here | Referenced in domain documentation instructions directing agents to adhere to defined terms and avoid synonyms. |

## Consumes
Domain discussions, business entity naming debates, and clarifying answers during grilling sessions.

## Produces
A markdown glossary (`CONTEXT.md`) containing concise definitions and avoided synonyms for project-specific terms.

## When applied
Continuously updated inline whenever a domain term is settled, and read by skills when exploring codebases.

## Sub-concepts
avoid

## Part of
domain-modeling, grill-with-docs

## Implementation status
defects: other (runaway artifact bloat where CONTEXT.md turns into a running spec in docs/engineering/domain-modeling.md:44-45; missing docs/agents/domain.md path in setup-matt-pocock-skills/domain.md:3)

## Design notes
The single source of domain vocabulary in a repository, conventionally stored in `CONTEXT.md`. It strictly contains concise definitions of what terms are and lists avoided synonyms, avoiding implementation details, specs, or scratch pads.
