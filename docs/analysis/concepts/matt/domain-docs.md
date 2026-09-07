---
package: matt
name: Domain docs
slug: domain-docs
kind: artifact
package_phase: matt:Setup
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Domain docs

## Definition — verbatim
> "How the engineering skills should consume this repo's domain documentation when exploring the codebase." — skills/engineering/setup-matt-pocock-skills/domain.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/setup-matt-pocock-skills.md | 36 | defined here | Recommends configuring single-context or multi-context domain documentation layout during repo setup. |
| external/setup-matt-pocock-skills.md | 37 | defined here | External guide outlining domain documentation configuration decisions (single vs multi-context). |
| skills/engineering/setup-matt-pocock-skills/domain.md | 1 | defined here | Title of the domain documentation consumption guide scaffolded into host repositories. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 13 | used here | Lists domain docs as one of three primary areas configured by setup-matt-pocock-skills. |

## Consumes
The repository's architectural structure, identifying whether it operates as a single-context project or a multi-context monorepo.

## Produces
Scaffolded domain configuration guidelines (`docs/agents/domain.md`) directing downstream skills to read `CONTEXT.md`, `CONTEXT-MAP.md`, and `docs/adr/`.

## When applied
Configured during `setup-matt-pocock-skills`; consulted by engineering skills whenever exploring unfamiliar parts of the codebase.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
defects: missing-path (skills/engineering/setup-matt-pocock-skills/domain.md:3 references docs/agents/domain.md which is not present in source repo root and must be instantiated by setup-matt-pocock-skills)

## Design notes
Domain docs configure how coding agents discover and respect architectural boundaries, ubiquitous language, and prior decisions across a repository. The configuration instructs agents to read `CONTEXT.md` (or navigate via `CONTEXT-MAP.md` in monorepos) and relevant ADRs under `docs/adr/` before initiating work. Crucially, the guidance codifies silent degradation: if domain docs do not yet exist, agents proceed silently without nagging the user or demanding premature documentation upfront.
