---
package: matt
name: Readline
slug: readline
kind: reference
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Readline

## Definition — verbatim
(used, not defined)

> "because the prompt uses <code class=\"ah-code-inline\">read -r</code> rather than Readline" — external/wizard.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 49 | used here | Cited in an upstream bug explanation regarding arrow key handling in bash prompts. |

## Consumes
Terminal keystrokes and line-editing commands.

## Produces
Line-editing behavior, cursor navigation, and history management in CLI applications.

## When applied
Contrasted against primitive bash `read` commands in interactive terminal prompts.

## Sub-concepts
none

## Part of
wizard

## Implementation status
defects: script-bug (Arrow keys in an ask prompt insert escape codes instead of moving cursor due to lack of Readline integration)

## Design notes
GNU Readline is the standard library providing line-editing and history navigation for interactive Unix shells. In Matt's wizard documentation, Readline is referenced to explain a known terminal bug where arrow keys output escape characters because raw `read -r` is used instead of a Readline wrapper.
