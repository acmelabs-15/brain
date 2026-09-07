---
package: matt
name: Contexts
slug: contexts
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/domain-modeling/CONTEXT-FORMAT.md, sha256: 17ab16ce783e4d2801ee52fd9acdf550cbf44de65ae76797a93943bbedf22a13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Contexts

## Definition — verbatim
> "## Contexts" — skills/engineering/domain-modeling/CONTEXT-FORMAT.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/domain-modeling/CONTEXT-FORMAT.md | 41 | defined here | Section heading in CONTEXT-MAP.md listing all bounded contexts and links to their CONTEXT.md files. |

## Consumes
List of bounded contexts with concise descriptions and file paths.

## Produces
A markdown list in `CONTEXT-MAP.md` linking each context to its localized `CONTEXT.md`.

## When applied
When authoring or updating `CONTEXT-MAP.md` in a multi-context repository.

## Sub-concepts
none

## Part of
context-map

## Implementation status
clean

## Design notes
The dedicated list section within `CONTEXT-MAP.md` that itemizes all bounded contexts in the project, providing a brief description of each context's purpose and linking to its local `CONTEXT.md`.
