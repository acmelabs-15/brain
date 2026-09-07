---
package: rjm
name: visual card format
slug: visual-card-format
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# visual card format

## Definition — verbatim
(used, not defined)

> "- [ ] Phase 2 plan used visual card format with BEFORE/AFTER" — .claude/skills/prompt-engineer/SKILL.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 140 | used here | Verified in the completion checkpoint as the mandatory presentation format displaying BEFORE/AFTER diffs for prompt changes. |

## Consumes
Detailed prompt change proposals, including scope, diagnostic findings, and applied techniques.

## Produces
Visual card representation showing side-by-side or before-and-after prompt transformations.

## When applied
Applied during Phase 2 planning and verified at the completion checkpoint before finalizing prompt optimizations.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, the visual card format provides an explicit BEFORE/AFTER comparative layout for proposed prompt changes, enabling transparent human-in-the-loop review and preventing unexpected instruction side effects.
