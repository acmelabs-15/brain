---
package: matt
name: Inline vs. callout
slug: inline-vs-callout
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Inline vs. callout

## Definition — verbatim
> "- **Inline vs. callout.** Tips, warnings, and asides go in callouts (`> [!TIP]`, `> [!NOTE]`), but only if they'd genuinely derail the main argument inline. Otherwise leave them inline." — skills/in-progress/writing-shape/SKILL.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-shape/SKILL.md | 64 | defined here | Format tradeoff guideline directing when to extract tips, warnings, or asides into callout blocks versus leaving them inline. |

## Consumes
An aside, warning, tip, or note emerging in the narrative draft.

## Produces
A deliberate formatting choice rendering secondary material either as an isolated callout box or integrated directly into inline prose.

## When applied
When an author or agent considers adding supplementary warnings or explanatory asides.

## Sub-concepts
none

## Part of
format-arguments-to-actually-have

## Implementation status
clean

## Design notes
Inline vs. callout prevents callout box overuse by enforcing a strict threshold: callouts are reserved only for supplementary information that would genuinely disrupt or derail the main linear argument if kept inline.
