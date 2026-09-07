---
package: rjm
name: Format Strictness
slug: format-strictness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Format Strictness

## Definition — verbatim
> "| **Output** | Format Strictness | Exact format required | Forbidden Phrases | n/a | Minimal | "ONLY return X" compliance |" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:31

## Also called — verbatim
`Output Format Strictness` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:921

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 16 | used here | Cited in the technique selection guide as a compatible technique stacking with Iterative Critique. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 31 | defined here | Summarized in the selection guide as an output control technique ensuring compliance with exact format requirements. |

## Consumes
Target output schema or downstream parser constraints requiring strict format compliance.

## Produces
Pure, unadorned output strictly matching the required syntax without conversational pleasantries or markdown fences.

## When applied
Applied when downstream systems or automated tools parse model responses and conversational preambles or code fences cause failures.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
Format Strictness is an output control technique that prevents models from including conversational filler, pleasantries, or unintended markdown fences. By using explicit negative constraints ("ONLY return X", forbidden phrases) and schema boundaries, it guarantees machine-parseable outputs for downstream tools.
