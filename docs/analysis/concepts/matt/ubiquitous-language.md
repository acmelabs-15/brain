---
package: matt
name: ubiquitous language
slug: ubiquitous-language
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: skills/productivity/wait-what/SKILL.md, sha256: e3f44e3ccbc0e7b62f20ba70b295fc9c9f4aa3f96c77168faee1c71bacbf4215}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ubiquitous language

## Definition — verbatim
> "builds and sharpens a project's **ubiquitous language** while you are designing: challenging a term that conflicts with the glossary, forcing a precise word where you used a vague one, and stress-testing a relationship with a concrete scenario until the boundaries are exact." — docs/engineering/domain-modeling.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Documents broadening the domain-modeling trigger away from narrow ubiquitous language phrasing. |
| CHANGELOG.md | 76 | used here | Highlights domain-modeling features for building and sharpening a project's ubiquitous language. |
| docs/engineering/domain-modeling.md | 3 | defined here | Defines ubiquitous language as the domain vocabulary built and sharpened during conversational design. |
| docs/engineering/domain-modeling.md | 60 | used here | Contrasts lean ubiquitous language glossary terms in CONTEXT.md against high-barrier ADRs. |
| docs/productivity/wait-what.md | 23 | used here | Explains that ubiquitous language provides the nouns for Plain English communication recovery. |
| external/ask-matt.md | 59 | used here | References ubiquitous language development through domain modeling in the skill catalog. |
| external/domain-modeling.md | 25 | defined here | Describes domain-modeling building and sharpening ubiquitous language while designing. |
| external/domain-modeling.md | 51 | used here | Details maintaining an active ubiquitous language glossary with forbidden synonym tracking. |
| external/wait-what.md | 35 | used here | Notes that wait-what draws domain nouns from the ubiquitous language in CONTEXT.md. |
| README.md | 107 | used here | Summarizes domain-modeling as building and sharpening ubiquitous language while designing. |
| skills/productivity/wait-what/SKILL.md | 7 | used here | Instructs the model to use the ubiquitous language from CONTEXT.md when re-pitching messages. |

## Consumes
Domain concepts, terminology conflicts, and system boundaries discussed during engineering workflows.

## Produces
A canonical glossary of terms with explicit definitions and avoided synonyms in CONTEXT.md.

## When applied
During conversational design whenever conflicting terms arise, boundaries are tested, or new concepts are introduced.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
defects: missing-path, other (runaway artifact bloat where models turn CONTEXT.md into a running spec instead of a lean ubiquitous language dictionary)

## Design notes
Ubiquitous language in Matt's toolkit represents the shared domain vocabulary continuously sharpened and enforced across code, prompts, and conversation. It is maintained actively through `domain-modeling`, where terms are written inline into `CONTEXT.md` as soon as they are resolved, ensuring models and humans share identical conceptual boundaries without semantic drift.
