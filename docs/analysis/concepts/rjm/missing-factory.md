---
package: rjm
name: Missing Factory
slug: missing-factory
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Missing Factory

## Definition — verbatim
> "| Missing Factory | Column items created inline | Extract Factory to separate use from creation |" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 61 | defined here | Listed in Common Mistakes as creating column items inline instead of using a dedicated Factory. |

## Consumes
CVA column family designs and code review observations where client classes directly instantiate dependencies.

## Produces
Refactoring recommendations extracting a Factory or Abstract Factory to decouple creation from usage.

## When applied
When reviewing code where components of a polymorphic family are constructed inline by client classes.

## Sub-concepts
none

## Part of
gof-pattern-selection-from-cva-results

## Implementation status
defects: missing-path

## Design notes
An architectural defect identified in rjm's CVA framework where developers instantiate related object families directly inside consumer code rather than through a dedicated Factory, violating the Separate Use from Creation rule and hardcoding concrete dependencies into client logic.
