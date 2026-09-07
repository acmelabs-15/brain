---
package: rjm
name: ValidationResult Class
slug: validationresult-class
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

# ValidationResult Class

## Definition — verbatim
> "Specialized result for validation scripts with check tracking." — .claude/skills/skillforge/references/script-patterns-catalog.md:76

## Also called — verbatim
> "class ValidationResult:" — .claude/skills/skillforge/references/script-patterns-catalog.md:83

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 74 | defines | Defines the ValidationResult class pattern for multi-check tracking with pass/warn/fail recording. |

## Consumes
Named validation checks, boolean test conditions, and error/warning messages.

## Produces
Aggregated validation reports, check summaries (`summary`), and boolean validity status (`is_valid`).

## When applied
In validation scripts that evaluate multiple criteria against artifacts or directory structures.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Provides structured, granular tracking for multi-assertion validation scripts, distinguishing hard errors from non-blocking warnings while generating formatted text and JSON reports.
