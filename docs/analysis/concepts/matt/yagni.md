---
package: matt
name: YAGNI
slug: yagni
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# YAGNI

## Definition — verbatim
(used, not defined)

> "**Scope before you scan: YAGNI.** Deepening a module pays off by making future changes to it easier, so put extra weight on the parts of the codebase that have recently changed. Decide *where* to look before you look:" — skills/engineering/improve-codebase-architecture/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/SKILL.md | 20 | used here | Invoked as an architectural scoping rule ("Scope before you scan: YAGNI") prioritizing actively changing git hotspots over dormant code. |

## Consumes
Recent git commit history (`git log --oneline`) and identified churn hotspots.

## Produces
A focused exploration scope that prevents speculative refactoring of stable, untouched code.

## When applied
Enforced during the initial exploration phase of architectural reviews before scanning begins.

## Sub-concepts
none

## Part of
improve-codebase-architecture

## Implementation status
clean

## Design notes
The "You Aren't Gonna Need It" principle applied to architectural reviews, dictating that deepening efforts must concentrate on active areas of the codebase where modular improvements pay off in future changes, avoiding speculative refactoring of dormant files.
