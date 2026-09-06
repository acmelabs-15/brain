---
package: rjm
path: .claude/skills/cva-analysis/references/matrix-building-examples.md
type: reference
bytes: 12550
unit: inv-rjm-110
in_scope_via: .claude/skills/cva-analysis/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/references/matrix-building-examples.md

## Purpose — required, verbatim
> "Complete worked examples of CVA analysis for common .NET scenarios." — .claude/skills/cva-analysis/references/matrix-building-examples.md:3

## Design intent — required
Comprehensive reference providing end-to-end worked examples of Commonality Variability Analysis (CVA) applied to real-world software architecture scenarios with a .NET focus. It demonstrates how to execute the four-phase CVA workflow across multiple domains: Payment Processing (yielding Abstract Factory over coherent operation families), ASP.NET Middleware Pipeline (yielding Abstract Factory per deployment environment), and Dependency Injection Lifetime Scopes (yielding Strategy pattern across Transient, Scoped, and Singleton lifetimes). Crucially, it includes counter-examples of when NOT to abstract (single use case YAGNI with an ADR stub) and edge cases such as total variability requiring scope reconsideration. Without this reference, architects and engineers would have theoretical guidance without concrete, practical templates showing how matrix analysis translates to production C# code.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference pattern-mapping-guide.md — .claude/skills/cva-analysis/references/matrix-building-examples.md:394
- reference multidimensional-cva.md — .claude/skills/cva-analysis/references/matrix-building-examples.md:395
- reference coplien-multi-paradigm-design.md — .claude/skills/cva-analysis/references/matrix-building-examples.md:396

## Invoked by — required
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:404
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:413

## Concepts named — required, verbatim
- `CVA Matrix Building Examples (.NET Focus)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:1 — defined here
- `Abstract Factory` — .claude/skills/cva-analysis/references/matrix-building-examples.md:5 — used here
- `Strategy` — .claude/skills/cva-analysis/references/matrix-building-examples.md:126 — used here
- `Transient` — .claude/skills/cva-analysis/references/matrix-building-examples.md:201 — used here
- `Scoped` — .claude/skills/cva-analysis/references/matrix-building-examples.md:201 — used here
- `Singleton` — .claude/skills/cva-analysis/references/matrix-building-examples.md:201 — used here
- `YAGNI Examples` — .claude/skills/cva-analysis/references/matrix-building-examples.md:312 — defined here
- `Single Payment Method (No Variability)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:314 — defined here
- `All Variability (Reconsider Scope)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:364 — defined here
- `Reassessment Triggers` — .claude/skills/cva-analysis/references/matrix-building-examples.md:380 — defined here

## Structure
- `# CVA Matrix Building Examples (.NET Focus)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:1
- `## Example 1: Payment Processing (Abstract Factory)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:5
- `### Phase 1: Identify Commonalities` — .claude/skills/cva-analysis/references/matrix-building-examples.md:7
- `### Phase 2: Identify Variabilities` — .claude/skills/cva-analysis/references/matrix-building-examples.md:22
- `### Phase 3: CVA Matrix` — .claude/skills/cva-analysis/references/matrix-building-examples.md:30
- `### Phase 4: Pattern Recommendation` — .claude/skills/cva-analysis/references/matrix-building-examples.md:45
- `## Example 2: ASP.NET Middleware Pipeline (Abstract Factory)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:130
- `### CVA Matrix` — .claude/skills/cva-analysis/references/matrix-building-examples.md:132
- `## Example 3: Dependency Injection Lifetime Scopes (Strategy)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:197
- `### CVA Matrix` — .claude/skills/cva-analysis/references/matrix-building-examples.md:199
- `## When NOT to Abstract (YAGNI Examples)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:312
- `### Example: Single Payment Method (No Variability)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:314
- `## Edge Case: All Variability (Reconsider Scope)` — .claude/skills/cva-analysis/references/matrix-building-examples.md:364
- `## Reassessment Triggers` — .claude/skills/cva-analysis/references/matrix-building-examples.md:380
- `## Further Reading` — .claude/skills/cva-analysis/references/matrix-building-examples.md:392

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides full C# implementation listings showing how Abstract Factory and Strategy integrate into .NET dependency injection service collections (`services.AddScoped`).
- Documents an ADR stub for the negative case (no abstraction) citing the CLAUDE.md design principle that premature abstraction is worse than no abstraction (line 356).
- Defines 5 explicit reassessment triggers (3+ new use cases, architectural shift, performance overhead, team feedback, quarterly review) for re-evaluating abstraction choices.

## Context cost
12550 bytes (~3138 tokens) standalone; loads 3 internal references (28774 bytes total, ~7194 tokens).
