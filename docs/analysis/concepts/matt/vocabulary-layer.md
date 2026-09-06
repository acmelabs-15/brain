---
package: matt
name: vocabulary layer
slug: vocabulary-layer
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# vocabulary layer

## Definition — verbatim
> "`codebase-design` is a **reach-for-it-anytime standalone**, and the vocabulary layer underneath the engineering skills rather than a step in any chain." — docs/engineering/codebase-design.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 88 | defined here | Defined as the foundational layer of shared terms (for module shape) sitting underneath driver skills. |
| docs/engineering/domain-modeling.md | 86 | defined here | Defined alongside codebase-design as the two vocabulary references under everything else (domain-modeling for problem domain, codebase-design for module shape). |
| external/ask-matt.md | 39 | defined here | Characterized in the router documentation as the underlying reference tier pulled in when words rather than processes are the issue. |

## Consumes
Domain concepts, module interfaces, and architectural boundaries.

## Produces
Consistent ubiquitous language (`CONTEXT.md`) and structural design vocabulary (modules, interfaces, seams).

## When applied
When conversations, design debates, or implementations require precise naming of domain terms or interface boundaries.

## Sub-concepts
codebase-design, domain-modeling

## Part of
none

## Implementation status
defects: missing-path (missing docs/agents/domain.md in domain-modeling:50), other (automatic invocation failure where models load grilling and skip domain-modeling in domain-modeling:9-10; runaway artifact bloat in CONTEXT.md in domain-modeling:44-45; harness lock-in on Agent tool in codebase-design:72)

## Design notes
The structural architectural layer in Matt's lifecycle comprising two model-invoked reference skills (`codebase-design` for code architecture and `domain-modeling` for ubiquitous business language). Unlike driver skills, the vocabulary layer does not direct an execution flow; it establishes the stable vocabulary on which all driver skills operate.
