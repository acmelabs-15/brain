---
package: addy
name: Doubt theater
slug: doubt-theater
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Doubt theater

## Definition — verbatim
> "- **Doubt theater (checkable signal)**: across 2 or more cycles where the reviewer surfaced substantive findings, zero findings were classified as actionable. You are validating, not doubting. Stop and escalate." — skills/doubt-driven-development/SKILL.md:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 215 | defined here | Checkable anti-pattern signal detecting superficial review cycles where findings are systematically dismissed |

## Consumes
Audit of classification history across multiple doubt cycles.

## Produces
Escalation signal to the user stopping the loop.

## When applied
Detected during review reconciliation when an agent completes 2 or more doubt cycles with substantive reviewer findings but takes zero actionable fixes.

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
An anti-pattern and concrete detection heuristic in Doubt-Driven Development preventing agents from executing superficial "review rituals" without genuine critical scrutiny. When an agent habitually classifies all critique as noise or trade-offs, doubt theater halts execution and forces user escalation.
