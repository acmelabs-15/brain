---
package: rjm
name: Adapter
slug: adapter
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Adapter

## Definition — verbatim
> "Preserves existing interface while conforming to new abstraction." — .claude/skills/cva-analysis/references/gof-pattern-selection.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 173 | used here | Listed among intentional GoF patterns for implementer design. |
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 19 | used here | Decision table recommendation when an existing interface must match a new abstraction. |

## Consumes
An existing incompatible interface and a target abstraction interface.

## Produces
An adapter class translating calls from the target interface to the adaptee.

## When applied
When an existing interface must match a new abstraction without modifying the legacy component.

## Sub-concepts
none

## Part of
gof-wisdom

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Adapter provides structural compatibility between mismatched abstractions in rjm. By wrapping existing components to conform to new interfaces without rewriting legacy code, it preserves stability while supporting evolutionary design.
