---
package: matt
name: Deep
slug: deep
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Deep

## Definition — verbatim
> "**Deep**: a lot of behaviour behind a small interface." — docs/engineering/codebase-design.md:31

## Also called — verbatim
deep module

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 31 | defined here | Defined in the glossary table as a module with a lot of behavior behind a small interface. |
| skills/engineering/codebase-design/SKILL.md | 20 | defined here | Defined in SKILL.md glossary as large behavior sitting behind a small interface. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Listed among mandatory exact terms for reporting module architecture. |

## Consumes
Small interface and comprehensive internal implementation.

## Produces
High leverage for callers and localized maintenance for authors.

## When applied
Targeted when designing modules, placing seams, and refactoring architecture.

## Sub-concepts
none

## Part of
depth

## Implementation status
clean

## Design notes
The ideal architectural state where a module encapsulates substantial implementation complexity and capability behind a small, simple, and stable interface.
