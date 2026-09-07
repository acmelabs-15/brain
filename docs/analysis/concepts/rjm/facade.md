---
package: rjm
name: Facade
slug: facade
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

# Facade

## Definition — verbatim
> "Simplifies access. The CVA boundary becomes the facade interface." — .claude/skills/cva-analysis/references/gof-pattern-selection.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 173 | used here | Listed among intentional GoF patterns for implementer design. |
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 20 | used here | Pattern mapping recommendation for complex subsystems behind a CVA boundary. |

## Consumes
A complex subsystem with multiple interacting components.

## Produces
A unified, simplified high-level interface encapsulating subsystem complexity.

## When applied
When client code needs straightforward access to a subsystem without coupling to internal classes.

## Sub-concepts
none

## Part of
gof-wisdom

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Facade encapsulates internal subsystem complexity behind a clean boundary in rjm. In CVA analysis, it serves as the public gateway to varied implementations, reducing cognitive load and preventing client code from tightly coupling to subsystem details.
