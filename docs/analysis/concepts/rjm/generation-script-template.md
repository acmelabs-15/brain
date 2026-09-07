---
package: rjm
name: Generation Script Template
slug: generation-script-template
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

# Generation Script Template

## Definition — verbatim
> "generate_<artifact>.py - Generate <artifact> from <input>" — .claude/skills/skillforge/references/script-patterns-catalog.md:743

## Also called — verbatim
> "### Generation Script Template" — .claude/skills/skillforge/references/script-patterns-catalog.md:738

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 738 | defined here | Provides starter code for generating target artifacts from templates and input specifications. |

## Consumes
Input specification file paths, destination output paths, and `string.Template` definitions.

## Produces
Generated artifact files on disk, exiting with code 0 on success or 1 on failure.

## When applied
When authoring scaffolding or file-generation scripts that populate boilerplate from input specs.

## Sub-concepts
none

## Part of
category-templates

## Implementation status
clean

## Design notes
Scaffolds deterministic file generation using Python's standard library `string.Template`, automatically handling parent directory creation and output existence verification.
