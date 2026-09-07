---
package: rjm
name: size-exception rationale
slug: size-exception-rationale
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# size-exception rationale

## Definition — verbatim
> "size-exception rationale" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 189 | defined here | Keyword identifier matched in HTML comment bodies to discover structured size exception justifications. |

## Consumes
Context-heavy documentation or memory files exceeding established line count limits.

## Produces
A structured HTML comment block detailing exception rationale and verifiable evidence.

## When applied
Required when a memory or documentation file legitimately exceeds default line or token thresholds.

## Sub-concepts
size-exception-fields, preserved-invariant, behavioral-tests, review-trigger

## Part of
skill-passive-context-compliance-validator

## Implementation status
defects: doc-drift

## Design notes
A structured documentation exception technique in rjm allowing files to exceed standard passive context size ceilings provided they embed an explicit HTML comment justifying the exception and proving test coverage and re-review conditions.
