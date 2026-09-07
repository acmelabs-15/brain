---
package: rjm
name: Script Template
slug: script-template
kind: template
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script Template

## Definition — verbatim
> "Full starter template" — .claude/skills/skillforge/references/script-patterns-catalog.md:831

## Also called — verbatim
> "- [Script Template](../assets/templates/script-template.py) - Full starter template" — .claude/skills/skillforge/references/script-patterns-catalog.md:831

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 831 | used here | Referenced link to the comprehensive starter Python script template in skillforge assets. |

## Consumes
Target skill requirements and scripting patterns.

## Produces
A full starter Python script implementation located at `../assets/templates/script-template.py`.

## When applied
When authoring new scripts for skills, providing an end-to-end starting point with all standard patterns.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
A comprehensive starter Python script template asset providing complete reference implementations of result dataclasses, multi-check validation, CLI parsing, and error handling for skill authors.
