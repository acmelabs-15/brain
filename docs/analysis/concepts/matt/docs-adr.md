---
package: matt
name: docs/adr/
slug: docs-adr
kind: name-only
package_phase: matt:domain-modeling
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# docs/adr/

## Definition — verbatim
> "ADRs live in `docs/adr/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc." — skills/engineering/domain-modeling/ADR-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/domain-modeling.md | 35 | used here | Documented as the directory lazily created when the first ADR clears the bar. |
| external/grill-with-docs.md | 33 | used here | Documented as the landing path for architectural decisions created during grilling sessions. |
| skills/engineering/domain-modeling/ADR-FORMAT.md | 3 | defined here | Canonical format specification designating docs/adr/ as the sequential home for ADR documents. |
| skills/engineering/domain-modeling/SKILL.md | 40 | used here | Instructs the agent to lazily create docs/adr/ when the first qualifying decision arises. |
| skills/engineering/setup-matt-pocock-skills/domain.md | 9 | used here | Read-list prerequisite instructing agents to review existing ADRs before codebase exploration. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 26 | used here | Inspection target during repository onboarding to discover existing architectural decisions. |

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
clean

## Design notes
`docs/adr/` is the standard directory path where architectural decision records are sequentially stored, cataloged as `kind: name-only` per D-023 rather than an active lifecycle concept.
