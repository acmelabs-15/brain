---
package: rjm
name: Instructive Tag Naming
slug: instructive-tag-naming
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Instructive Tag Naming

## Definition — verbatim
> "Make the tag name _itself_ the instruction. This creates scannable structure that works even when the model doesn't read every word." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:878

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 876 | defined here | Defined as an XML structure pattern where the tag name itself functions as the instruction to communicate intent structurally. |

## Consumes
XML output specifications and prompt instructions.

## Produces
Self-documenting XML tag names (such as `<security_vulnerabilities_found>`).

## When applied
> "In long prompts, models may skim. Instructive tag names communicate intent at the structural level, not just the content level." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:906

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Instructive Tag Naming embeds semantic instructions directly into XML tag names (e.g., `<security_vulnerabilities_found>` rather than `<findings>`). This ensures the structural container itself conveys the required output, maintaining compliance even when surrounding instructions are skimmed.
