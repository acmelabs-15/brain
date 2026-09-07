---
package: rjm
name: Pattern-Oriented
slug: pattern-oriented
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pattern-Oriented

## Definition — verbatim
> "| **Pattern-Oriented** | Pattern is obvious | Start with the pattern; relate it in context |" — .claude/agents/implementer.md:280

## Also called — verbatim
> "| **Pattern-Oriented** | Pattern is obvious | Start with the pattern; relate it in context |" — templates/agents/implementer.shared.md:288

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 280 | defined here | Table row defining pattern-oriented design when the target pattern is obvious. |
| templates/agents/implementer.shared.md | 288 | defined here | Table row specifying pattern-oriented design guidance in shared templates. |

## Consumes
Clear domain problems matching known architectural or design pattern signatures.

## Produces
An intentional pattern implementation adapted to the specific codebase context.

## When applied
When a problem clearly matches an established design pattern (e.g. Strategy, Adapter, Factory) and its application is obvious.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Pattern-Oriented design provides a top-down architectural path in rjm when a problem matches an established pattern. Unlike emergent discovery, it adopts the proven pattern directly while tailoring it to the specific constraints and conventions of the surrounding codebase.
