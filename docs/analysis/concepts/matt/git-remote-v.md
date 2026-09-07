---
package: matt
name: git remote -v
slug: git-remote-v
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/SKILL.md, sha256: 2bcd89e97777cdb705914424e39c97d5db524c8eb4eafac8120778a07774f0ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git remote -v

## Definition — verbatim
(used, not defined)

> "`git remote -v` and `.git/config`: is this a GitHub repo? Which one?" — skills/engineering/setup-matt-pocock-skills/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/SKILL.md | 23 | used here | Executed during repository setup exploration to detect remote repository hosting. |

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
defects: missing-path, other

## Design notes
A Git CLI command invoked during initial repository setup exploration to inspect remote URLs and determine the hosting platform, representing command-line tooling rather than a development lifecycle concept.
