---
package: rjm
name: UNKNOWN handling
slug: unknown-handling
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UNKNOWN handling

## Definition — verbatim
(used, not defined)

> "## UNKNOWN handling" — .claude/skills/review/SKILL.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 111 | defined here | Section heading establishing rules for marking review axes UNKNOWN upon crashes or parse failures without masking real findings. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
UNKNOWN handling is a markdown section heading in review/SKILL.md prescribing fallback rules for indeterminate review results rather than an independent lifecycle concept.
