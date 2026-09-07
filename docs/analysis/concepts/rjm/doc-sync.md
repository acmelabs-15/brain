---
package: rjm
name: doc-sync
slug: doc-sync
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# doc-sync

## Definition — verbatim
(used, not defined)

> "No scripts, purely manual LLM workflow" — .claude/skills/doc-accuracy/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 53 | applies | Cited as a replaced legacy skill lacking automation and relying entirely on manual LLM workflows. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 53 | references | Tracked in KNOWN_RETIRED_KEBAB_SKILLS to flag deprecated skill references across documentation. |

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
defects: doc-drift

## Design notes
doc-sync is the name of an obsolete manual documentation synchronization skill superseded by the doc-accuracy automated pipeline rather than an active lifecycle concept.
