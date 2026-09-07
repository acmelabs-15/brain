---
package: rjm
name: The Everything-Is-Critical Problem
slug: the-everything-is-critical-problem
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Everything-Is-Critical Problem

## Definition — verbatim
> "When everything is critical, nothing is. Reserve high-emphasis markers for genuinely exceptional cases:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1541

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1529 | defined here | Defined as an anti-pattern of overusing emphasis markers until the model desensitizes and ignores priorities. |
| .claude/skills/prompt-engineer/references/workflow.md | 306 | used here | Audited in Phase 4 prompt optimization checks to eliminate overuse of emphasis. |

## Consumes
System prompts with repeated `CRITICAL:` or capitalized emphasis markers.

## Produces
Prompt desensitization where all directives receive equal, unweighted attention.

## When applied
> "Re-consult the reference's Anti-Patterns section. Verify the optimized prompt doesn't exhibit:" — .claude/skills/prompt-engineer/references/workflow.md:303

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Everything-Is-Critical Problem arises when prompt authors label multiple routine instructions as "CRITICAL", diluting the behavioral impact of emphasis markers. When models observe high-emphasis labels on ordinary formatting rules, they stop prioritizing safety-critical rules. rjm resolves this through a structured Emphasis Hierarchy.
