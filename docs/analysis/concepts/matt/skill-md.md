---
package: matt
name: SKILL.md
slug: skill-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: .changeset/grilling-remove-em-dashes.md, sha256: 149094700d65fd5a4660e710603a70d65e24a3e12b755ffb54b51eaf0534303f}
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: scripts/link-skills.sh, sha256: f1ffdc620769e7703d4d6365b05b981e01175bfabd92e0f8e17b05301805cabe}
  - {path: scripts/list-skills.sh, sha256: 9968c1b679e2a08a8e3204f6e72afeea3b51df50299faec12a4c8eed6bcf2f6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SKILL.md

## Definition — verbatim
(used, not defined)

> "Every `SKILL.md` in this repo is a skill." — .agents/invocation.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 3 | used here | States that every SKILL.md file in the repository constitutes a skill. |
| .changeset/grilling-remove-em-dashes.md | 5 | used here | Lists SKILL.md among files modified for em-dash removals. |
| .changeset/remove-em-dashes-repo-wide.md | 5 | used here | Lists SKILL.md among files modified for repository-wide em-dash removals. |
| docs/productivity/teach.md | 38 | used here | Refers to SKILL.md as the skill specification format. |
| external/grill-with-docs.md | 34 | used here | Mentions SKILL.md in external skill documentation. |
| external/implement.md | 31 | used here | Mentions SKILL.md in external skill documentation. |
| scripts/link-skills.sh | 25 | used here | Finds all SKILL.md files to discover skills to symlink. |
| scripts/list-skills.sh | 7 | used here | Finds all SKILL.md files to list all skills in the repository. |

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
SKILL.md is the canonical file name for skill definition files across the repository rather than an operational lifecycle concept.
