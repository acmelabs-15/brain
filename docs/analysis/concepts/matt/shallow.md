---
package: matt
name: Shallow
slug: shallow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Shallow

## Definition — verbatim
> "**Shallow**: the interface is nearly as complex as the implementation." — docs/engineering/codebase-design.md:31

## Also called — verbatim
shallow module

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 31 | defined here | Defined in the glossary table as an interface nearly as complex as its implementation. |
| skills/engineering/codebase-design/SKILL.md | 20 | defined here | Defined in SKILL.md glossary as an anti-pattern to avoid when designing modules. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Mandated as an exact architectural term in architecture review reports. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 30 | used here | Used to identify refactoring candidates during codebase architectural scans. |

## Consumes
Wide interface exposing underlying implementation details.

## Produces
Low leverage for callers and leaky abstractions that hinder testing and maintenance.

## When applied
Detected during architectural audits to flag candidates for module deepening.

## Sub-concepts
none

## Part of
depth

## Implementation status
clean

## Design notes
Architectural anti-pattern where a module's interface is nearly as complex as its underlying implementation. Shallow modules impose cognitive load without providing leverage, making testing brittle and leaking details across callers.
