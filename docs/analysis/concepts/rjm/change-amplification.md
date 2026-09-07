---
package: rjm
name: Change amplification
slug: change-amplification
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Change amplification

## Definition — verbatim
> "**Change amplification**: a single conceptual change forces edits in many places. Look for the duplicated decision and hide it in one module." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 26 | defined here | Defined in symptoms of complexity as the phenomenon where a single conceptual change forces edits in many places. |

## Consumes
none

## Produces
none

## When applied
Monitored during code reviews and refactoring passes to detect duplicated decisions and information leakage.

## Sub-concepts
none

## Part of
complexity

## Implementation status
clean

## Design notes
A prominent symptom of complexity in rjm indicating that a design decision has leaked across multiple components, requiring widespread, error-prone edits whenever the underlying behavior is adjusted.
