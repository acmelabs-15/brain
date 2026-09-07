---
package: rjm
name: Ignoring empty cells
slug: ignoring-empty-cells
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Ignoring empty cells

## Definition — verbatim
> "- **Ignoring empty cells**: Empty cells in the CVA matrix are questions, not" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 65 | defined here | Listed in Common Mistakes as treating empty CVA matrix cells as mere gaps rather than questions revealing missing requirements or invalid combinations. |

## Consumes
CVA matrix drafts with empty or sparse intersection cells between commonalities and variabilities.

## Produces
Clarifying domain questions, missing requirement discoveries, or explicit combination constraints (such as Abstract Factory boundaries).

## When applied
When auditing a CVA matrix during analysis to ensure sparse cells are interrogated rather than ignored.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: missing-path

## Design notes
An analysis anti-pattern in Coplien's CVA methodology where practitioners overlook empty matrix cells; in multi-paradigm design, an empty cell is not a harmless void but a critical question indicating either an overlooked requirement or an invalid combination that requires architectural constraint enforcement.
