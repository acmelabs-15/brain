---
package: rjm
name: always-on rule surface
slug: always-on-rule-surface
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# always-on rule surface

## Definition — verbatim
> "- Restore the failing book reference to the always-on rule surface, or" — scripts/eval/software_engineering_library_activation_ci.py:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 151 | used here | Restoration target listed in issue template for failing progressive disclosure rules. |
| scripts/eval/software_engineering_library_activation_gate.py | 40 | used here | Policy destination restoring failing references to global agent context. |

## Consumes
Rule definitions in `.claude/rules/*.md`.

## Produces
Global instructions injected unconditionally into agent context.

## When applied
Governs always-active rules as opposed to on-demand progressive disclosure skills.

## Sub-concepts
none

## Part of
model-context-doctrine

## Implementation status
clean

## Design notes
The architectural tier of rules in rjm that load unconditionally into every agent conversation, contrasted with progressively disclosed reference documentation to conserve prompt context.
