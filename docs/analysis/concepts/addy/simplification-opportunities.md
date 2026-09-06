---
package: addy
name: simplification opportunities
slug: simplification-opportunities
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
memo_inputs:
  - {path: commands/code-simplify.toml, sha256: 640cdd34c26a04cabe6d3ea64ba5aad91bb68b16c8f7619a9e5fae6fe0a37ec8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# simplification opportunities

## Definition — verbatim
> "4. Scan for simplification opportunities:" — commands/code-simplify.toml:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/code-simplify.toml | 11 | defines | Categorizes complexity patterns to target for refactoring, including deep nesting, long functions, nested ternaries, and dead code. |

## Consumes
Target codebase or recently modified scope under review.

## Produces
Identified refactoring opportunities matched to specific simplification patterns.

## When applied
During step 4 of `/code-simplify` before applying incremental refactorings.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
Simplification opportunities provide an explicit catalog of code complexity smells paired with prescriptive remedies (such as replacing deep nesting with guard clauses, splitting long functions by responsibility, and flattening nested ternaries into switches). This prevents vague aesthetic rewrites and focuses the agent on high-impact clarity improvements.
