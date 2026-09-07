---
package: rjm
name: Progress Visualization
slug: progress-visualization
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Progress Visualization

## Definition — verbatim
> "ASCII-based progress display." — .claude/skills/skillforge/references/script-patterns-catalog.md:492

## Also called — verbatim
> "### Pattern 8: Progress Visualization" — .claude/skills/skillforge/references/script-patterns-catalog.md:490

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 490 | defined here | Defines helper functions for rendering ASCII progress bars, status icons, and hierarchical trees. |

## Consumes
Task completion ratios (`current`, `total`), step status strings, and hierarchical node lists.

## Produces
Formatted ASCII progress bars, status indicator icons (`[x]`, `[>]`, `[!]`), and directory tree strings.

## When applied
When scripts display progress for multi-step processes or render hierarchy structures to stdout/stderr.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Standardizes zero-dependency ASCII visualization utilities (progress bars, status icons, tree formatting) to provide legible execution feedback in CLI terminals and LLM context streams.
