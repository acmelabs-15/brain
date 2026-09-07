---
package: matt
name: Triage labels
slug: triage-labels
kind: artifact
package_phase: matt:Setup
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
  - {path: skills/engineering/setup-matt-pocock-skills/triage-labels.md, sha256: 4f53c9b40ce2651e3611aa090eaedbd6dbc9b71ef8c5f7e65eac0d8263190d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Triage labels

## Definition — verbatim
> "The skills speak in terms of five canonical triage roles. This file maps those roles to the actual label strings used in this repo's issue tracker." — skills/engineering/setup-matt-pocock-skills/triage-labels.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/setup-matt-pocock-skills.md | 35 | defined here | Recommends configuring the five canonical triage label strings if the triage skill is installed. |
| external/setup-matt-pocock-skills.md | 37 | defined here | Defines the triage labels configuration decision in the external setup documentation. |
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 12 | used here | Lists triage labels as one of three primary configuration areas to scaffold during repo setup. |
| skills/engineering/setup-matt-pocock-skills/triage-labels.md | 1 | defined here | Heading for the template mapping canonical triage roles to repository-specific issue tracker labels. |

## Consumes
The repository's issue tracker configuration and existing issue label taxonomy.

## Produces
A repo-specific configuration file (`docs/agents/triage-labels.md`) mapping five canonical triage roles to active label strings.

## When applied
During repository onboarding via `setup-matt-pocock-skills`, specifically when the `triage` skill is active.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
defects: doc-drift (docs/engineering/setup-matt-pocock-skills.md:67 generates mapping table in `triage-labels.md` without creating corresponding label entities in GitHub/GitLab, causing issue creation to fail if labels are missing)

## Design notes
Triage labels establish a translation layer between the fixed vocabulary assumed by Matt's engineering skills (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`) and whatever issue label strings a particular repository actually uses. By capturing this mapping in a version-controlled Markdown file (`docs/agents/triage-labels.md`) rather than global user settings, any agent running in the repository can consistently interpret and apply triage labels according to team conventions.
