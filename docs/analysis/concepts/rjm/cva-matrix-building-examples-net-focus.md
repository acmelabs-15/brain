---
package: rjm
name: CVA Matrix Building Examples (.NET Focus)
slug: cva-matrix-building-examples-net-focus
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CVA Matrix Building Examples (.NET Focus)

## Definition — verbatim
> "# CVA Matrix Building Examples (.NET Focus)" — .claude/skills/cva-analysis/references/matrix-building-examples.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 1 | defined here | Document title and reference providing worked CVA matrix examples for .NET architectures. |

## Consumes
Domain use cases (payment processing, ASP.NET middleware pipelines, DI lifetime scopes, YAGNI boundaries).

## Produces
Comprehensive worked CVA matrices, pattern selections, concrete C# code implementations, and ADR templates.

## When applied
Referenced during CVA analysis when working in .NET environments or requiring concrete guidance on Abstract Factory, Strategy, and YAGNI boundaries.

## Sub-concepts
transient, scoped, yagni-examples, single-payment-method-no-variability, all-variability-reconsider-scope

## Part of
cva-analysis

## Implementation status
clean

## Design notes
A comprehensive practical reference document in rjm demonstrating the full CVA lifecycle for enterprise .NET applications, linking matrix analysis to idiomatic C# patterns (such as DI service collections and middleware delegates) while establishing strict YAGNI thresholds for when not to abstract.
