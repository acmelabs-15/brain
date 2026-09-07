---
package: rjm
name: Output Format Strictness
slug: output-format-strictness
kind: technique
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

# Output Format Strictness

## Definition — verbatim
> "When you need a specific output format, leave no room for interpretation." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:923

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 921 | defined here | Defined as an output control technique using directive language to guarantee schema compliance. |

## Consumes
Target output schema or formatting constraint.

## Produces
Strictly formatted responses stripped of conversational preamble, politeness markers, or explanatory text.

## When applied
When downstream tools, CLI commands, or programmatic parsers depend on exact output format compliance.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Output Format Strictness enforces machine-readable output formatting by using unambiguous directive phrasing ("ONLY return the prefix", "No explanations") rather than polite suggestions ("Please"). Eliminating polite language signals non-negotiable compliance and prevents models from emitting conversational boilerplate.
