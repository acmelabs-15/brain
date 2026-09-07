---
package: rjm
name: Git merge driver
slug: git-merge-driver
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Git merge driver

## Definition — verbatim
(used, not defined)

> "A merge driver that resolves a version-only `plugin.json` conflict to one patch above the higher side would mechanize the existing #2543 rule inside the PR branch" — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:106

## Also called — verbatim
"Custom merge driver" — .agents/architecture/ADR-091-post-merge-version-bot.md:226

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 106 | used here | Evaluated custom driver for automated three-way resolution of `plugin.json` version conflicts. |

## Consumes
Git attributes configuration (`.gitattributes`) and local driver scripts.

## Produces
Automated three-way merge resolution for `plugin.json` version conflicts.

## When applied
Invoked by git when performing merges or rebases involving conflicting version lines.

## Sub-concepts
none

## Part of
git-tooling

## Implementation status
clean

## Design notes
A Git merge driver automates conflict resolution by calculating a new patch version during rebase or merge operations. While it avoids tearing `main`, it was not adopted because git merge drivers require clone-local configuration rather than repository-enforced policy and present reliability risks across bot and CI merges.
