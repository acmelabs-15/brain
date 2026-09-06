---
package: addy
name: Context-Aware Loading
slug: context-aware-loading
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Context-Aware Loading

## Definition — verbatim
(used, not defined)

> "### Context-Aware Loading" — docs/getting-started.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 67 | used here | Section heading advising against loading all skills simultaneously to conserve context budget. |

## Consumes
Current active task type or development phase.

## Produces
Lean agent context populated only with skills relevant to the immediate objective.

## When applied
Throughout development sessions when selecting which skills to activate or inject.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Context-Aware Loading prevents context window exhaustion and prompt dilution by restricting loaded skill instructions to those required for the current task (e.g. UI engineering during frontend work, debugging during error recovery), preserving model reasoning capacity.
