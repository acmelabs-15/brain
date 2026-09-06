---
package: matt
name: CONTEXT-MAP.md
slug: context-map-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/wait-what-context-map.md, sha256: 6a01f1b4b3686179ceca13206e1bf3cb3cc8e1413ba71a47b15ab780ffd04e2a}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: skills/engineering/domain-modeling/CONTEXT-FORMAT.md, sha256: 17ab16ce783e4d2801ee52fd9acdf550cbf44de65ae76797a93943bbedf22a13}
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
  - {path: skills/productivity/wait-what/SKILL.md, sha256: e3f44e3ccbc0e7b62f20ba70b295fc9c9f4aa3f96c77168faee1c71bacbf4215}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CONTEXT-MAP.md

## Definition — verbatim
> "A `CONTEXT-MAP.md` at the repo root lists the contexts, where they live, and how they relate to each other" — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/wait-what-context-map.md | 5 | defined here | Changeset noting wait-what follows CONTEXT-MAP.md when multiple contexts are indexed. |
| docs/engineering/domain-modeling.md | 26 | used here | Documents that in multi-context repos, resolved terms route to per-context files mapped by CONTEXT-MAP.md. |
| docs/engineering/grill-with-docs.md | 25 | used here | Notes that glossary terms route to specific context files when CONTEXT-MAP.md is present at the root. |
| docs/productivity/wait-what.md | 25 | used here | Explains that wait-what routes vocabulary queries using CONTEXT-MAP.md in multi-context setups. |
| external/domain-modeling.md | 34 | used here | External documentation describing CONTEXT-MAP.md usage for multi-context repositories. |
| external/grill-with-docs.md | 33 | used here | External article noting that CONTEXT-MAP.md at repo root designates multi-context repositories. |
| external/setup-matt-pocock-skills.md | 37 | defined here | Lists setup skill decision offering multi-context CONTEXT-MAP.md when monorepo signals are detected. |
| external/wait-what.md | 36 | used here | External documentation noting fallback behavior when CONTEXT-MAP.md is absent. |
| skills/engineering/domain-modeling/CONTEXT-FORMAT.md | 36 | defined here | Formally defines CONTEXT-MAP.md format and schema for multiple contexts at repo root. |
| skills/engineering/domain-modeling/SKILL.md | 28 | used here | Illustrates directory structure of a multi-context repository with CONTEXT-MAP.md at root. |
| skills/engineering/setup-matt-pocock-skills/domain.md | 8 | used here | Directs agents to read root CONTEXT-MAP.md before exploring multi-context repositories. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 25 | used here | Instructs setup skill to detect existing CONTEXT-MAP.md at repo root during exploration. |
| skills/productivity/wait-what/SKILL.md | 7 | used here | Prompts agent to follow CONTEXT-MAP.md to the right context-specific glossary if repo has multiple contexts. |

## Consumes
Identification of multiple bounded contexts, sub-projects, or monorepo packages.

## Produces
A markdown index artifact at repo root listing all domain contexts, their file paths, and their relationships.

## When applied
Used in multi-context or monorepo codebases when a single global root `CONTEXT.md` is insufficient or ambiguous.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
defects: doc-drift, orphan

## Design notes
`CONTEXT-MAP.md` is an architectural artifact placed at the repository root to index multiple bounded contexts across large codebases or monorepos. Rather than forcing all domain terminology into a single monolithic `CONTEXT.md`, `CONTEXT-MAP.md` maps each sub-domain to its corresponding local `CONTEXT.md` and `docs/adr/` directory. Downstream skills such as `wait-what`, `domain-modeling`, and `grill-with-docs` consult this map to resolve terms against the specific context of the file or feature being modified.
