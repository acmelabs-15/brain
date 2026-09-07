---
package: rjm
name: Intent Analysis
slug: intent-analysis
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Intent Analysis

## Definition — verbatim
> "### Phase 3: Intent Analysis" — .claude/agents/merge-resolver.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 120 | defined here | Phase 3 of the resolution workflow specifying line-level git blame analysis and priority classification. |

## Consumes
Git blame output on base and head branches, commit messages, and diff hunks for manual conflicts.

## Produces
Change classification ranked by priority hierarchy: 1. Security patch, 2. Bugfix, 3. Breaking change, 4. Change with tests, 5. Recent change, 6. Style/formatting.

## When applied
Applied during manual conflict resolution to determine semantic precedence between conflicting lines of code.

## Sub-concepts
none

## Part of
resolution-workflow

## Implementation status
defects: doc-drift

## Design notes
Phase 3 of the merge resolution workflow. Rather than making lexical or arbitrary choices between conflicting hunks, Intent Analysis investigates commit messages and line histories to categorize intent (security fixes, bug fixes, features, style changes), allowing high-priority modifications (like security patches) to always take precedence.
