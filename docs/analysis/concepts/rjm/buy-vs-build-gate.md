---
package: rjm
name: Buy-vs-build gate
slug: buy-vs-build-gate
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Buy-vs-build gate

## Definition — verbatim
> "4a. **Buy-vs-build gate (BLOCKING for new capabilities)**: If the PRD proposes a new capability classified as Context" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 192 | defined here | Evaluates core-vs-context classification and existing tools to produce a build/buy/partner/defer decision before artifact generation. |

## Consumes
PRD capability description, Wardley/Moore core-vs-context classifications, and evaluations of existing market tools.

## Produces
Buy-vs-build decision section in the PRD; halts specification if recommendation is buy, partner, or defer.

## When applied
Applied at Step 4a whenever a new capability classified as context or new module/scanner/pipeline component is proposed.

## Sub-concepts
none

## Part of
step-4-provenance-and-dependency-gates

## Implementation status
defects: missing-path, doc-drift

## Design notes
A blocking governance gate designed to stop "action-matching" and prevent engineers from wasting hours reimplementing undifferentiated support capabilities (context) that already exist as mature tools or SaaS offerings.
