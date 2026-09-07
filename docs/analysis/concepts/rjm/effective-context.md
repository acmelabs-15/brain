---
package: rjm
name: effective context
slug: effective-context
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# effective context

## Definition — verbatim
> "The **effective context on a `.py` edit is 98,396 bytes" — .claude/skills/context-optimizer/references/model-context-doctrine.md:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 179 | defined here | Defined as the total prompt volume consumed during a specific file edit, combining always-on rules and path-scoped rules. |

## Consumes
Always-on rule corpus plus path-scoped rule files triggered by specific file extensions.

## Produces
Total active instruction prompt payload delivered to the model during a specific edit session.

## When applied
Applied when assessing token costs and prompt volume for a specific file edit (e.g. editing `.py` files).

## Sub-concepts
none

## Part of
model-context-doctrine

## Implementation status
clean

## Design notes
The composite token payload active during a concrete editing action, calculated as the baseline always-on corpus plus whatever path-scoped rules are triggered by the target file type.
