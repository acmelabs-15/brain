---
package: rjm
name: canonical source
slug: canonical-source
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# canonical source

## Definition — verbatim
> "A "canonical source" is the single tree you are allowed to edit; everything generated from it is read-only output." — .claude/skills/ai-agents-change-control/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 15 | defined here | Core definition establishing canonical sources as the sole editable origin for generated output trees. |

## Consumes
Author-maintained templates, skill markdown files, and source code.

## Produces
Mechanically generated output trees via automated generation scripts.

## When applied
Applied whenever planning edits to files that have downstream generated mirrors.

## Sub-concepts
generated-trees

## Part of
change-control

## Implementation status
clean

## Design notes
Canonical source is the foundational architectural concept distinguishing authoritative editable trees from read-only generated trees, ensuring that all changes originate from a single source of truth.
