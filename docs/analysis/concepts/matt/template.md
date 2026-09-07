---
package: matt
name: template
slug: template
kind: template
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# template

## Definition — verbatim
> "The [template](https://github.com/mattpocock/skills/blob/main/skills/engineering/wizard/template.sh) ships the whole experience: progress with time remaining, confirmation gates, cross-platform URL opening including WSL, hidden entry for secrets, idempotent `.env` upserts, `gh secret` / `gh variable` writes, and a closing summary of everything it had to skip." — docs/engineering/wizard.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 44 | used here | Cites template.sh as providing the standardized UX and helper library for interactive wizards. |

## Consumes
The reusable skills/engineering/wizard/template.sh base script.

## Produces
A standardized shell environment providing fixed helper functions for wizard generation.

## When applied
Applied as the boilerplate foundation whenever authoring a new wizard.

## Sub-concepts
STAGES, set_secret, ask

## Part of
wizard

## Implementation status
clean

## Design notes
The wizard `template` solves terminal user experience and cross-platform edge cases once and for all. By freezing the helper library above the `STAGES` marker, it ensures that every generated wizard shares identical progress indicators, confirmation gates, and credential masking without burdening the authoring agent with repetitive terminal UI programming.
