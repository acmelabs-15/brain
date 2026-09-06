---
package: matt
name: domain-modeling
slug: domain-modeling
kind: technique
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/grill-with-docs/SKILL.md, sha256: 7de372c13488f1ee96cc11cd8907b56b6809cc93eef776eeddd37de6b6cbe3fe}
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# domain-modeling

## Definition — verbatim
> "`domain-modeling` builds and sharpens a project's **ubiquitous language** while you are designing: challenging a term that conflicts with the glossary, forcing a precise word where you used a vague one, and stress-testing a relationship with a concrete scenario until the boundaries are exact." — docs/engineering/domain-modeling.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 20 | used here | Cites domain-modeling in multi-skill invocation instructions and active domain work. |
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Documents changes improving domain-modeling triggers for CONTEXT.md and ADRs. |
| .changeset/skill-tool-invocation-terminology.md | 8 | used here | Cites domain-modeling in multi-skill invocation instructions and active domain work. |
| .claude-plugin/plugin.json | 18 | used here | Registers domain-modeling as an engineering capability in plugin metadata. |
| docs/engineering/domain-modeling.md | 3 | defined here | Defines domain-modeling as the active discipline that builds and sharpens a project's ubiquitous language. |
| docs/engineering/grill-with-docs.md | 27 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during grill-with-docs. |
| docs/engineering/improve-codebase-architecture.md | 101 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during improve-codebase-architecture. |
| docs/productivity/grilling.md | 70 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during grilling. |
| docs/productivity/wait-what.md | 36 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during wait-what. |
| external/domain-modeling.md | 25 | defined here | Defines domain-modeling as the active discipline that builds and sharpens a project's ubiquitous language. |
| external/domain-modeling.md | 28 | used here | Details the active execution and CONTEXT.md authoring rules of domain-modeling. |
| external/grill-with-docs.md | 34 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during grill-with-docs. |
| external/grilling.md | 56 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during grilling. |
| external/improve-codebase-architecture.md | 77 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during improve-codebase-architecture. |
| external/setup-matt-pocock-skills.md | 70 | used here | Prepares domain modeling guidelines and lazy scaffolding of CONTEXT.md. |
| external/triage.md | 73 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during triage. |
| external/wait-what.md | 45 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during wait-what. |
| external/wayfinder.md | 47 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during wayfinder. |
| skills/engineering/grill-with-docs/SKILL.md | 7 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during SKILL. |
| skills/engineering/setup-matt-pocock-skills/domain.md | 11 | used here | Prepares domain modeling guidelines and lazy scaffolding of CONTEXT.md. |
| skills/engineering/triage/SKILL.md | 76 | used here | Integrates domain-modeling to ensure consistent vocabulary and record architectural decisions during SKILL. |

## Consumes
Domain discussions, ambiguous concepts, and architectural decisions.

## Produces
Canonical definitions in CONTEXT.md and architectural decision records in docs/adr/.

## When applied
Invoked when discussing codebase terminology, writing or editing CONTEXT.md, or recording ADRs.

## Sub-concepts
ADRs, CONTEXT.md

## Part of
grill-with-docs, improve-codebase-architecture

## Implementation status
defects: missing-path, other, internal-contradiction, doc-drift, orphan

## Design notes
The active domain-driven design discipline in matt's ecosystem. Rather than passively reading existing documentation, it actively interrupts design conversations to challenge imprecise terms, enforce ubiquitous language, and record definitions in CONTEXT.md and ADRs at the moment they resolve.
