---
package: matt
name: workflows/*.md
slug: workflows-md
kind: name-only
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# workflows/*.md

## Definition — verbatim
(used, not defined)
> "- `workflows/*.md`: one spec per workflow." — skills/in-progress/loop-me/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 31 | defined here | Workspace directory path pattern storing individual workflow specification files. |

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
A filesystem directory path pattern indicating where loop-me saves individual workflow markdown specifications, representing an on-disk storage convention rather than a software development lifecycle concept.
