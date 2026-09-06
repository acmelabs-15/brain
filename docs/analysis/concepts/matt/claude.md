---
package: matt
name: .claude
slug: claude
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gitignore, sha256: a7e7370254fc919ab78ddf61e0e3763b80ea7ade18863c6650c329da44b8ec7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude

## Definition — verbatim
(used, not defined)
> ".claude" — .gitignore:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gitignore | 2 | used here | Ignores local Claude Code configuration and runtime directory from version control. |

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
Local configuration directory path ignored in `.gitignore` rather than an engineering lifecycle concept.
