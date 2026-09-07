---
package: rjm
name: Phase 1: Assessment
slug: phase-1-assessment
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Assessment

## Definition — verbatim
> "Phase 1: Assessment        (script-only, <30s)  -> assessment.json" — .claude/skills/doc-accuracy/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 67 | defined here | First deterministic scanning phase enumerating docs and source symbols and producing assessment.json. |

## Consumes
Target repository documentation files and codebase source tree.

## Produces
assessment.json mapping documentation files to implementation symbols.

## When applied
Executed as the initial step of doc-accuracy verification before claim extraction.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Phase 1: Assessment is the initial deterministic reconnaissance phase of doc-accuracy scanning. It enumerates all documentation files and source files, extracts public symbol definitions across supported languages, and maps documentation files to source implementation files in under 30 seconds without model calls.
