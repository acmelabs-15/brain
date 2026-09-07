---
package: rjm
name: Step-Back
slug: step-back
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

# Step-Back

## Definition — verbatim
> "Step-Back Prompting is a modification of CoT where the LLM is first asked a generic, high-level question about relevant concepts or facts before delving into reasoning." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:342

## Also called — verbatim
> "### Step-Back Prompting" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:338

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 338 | defined here | Defined as a reasoning technique that prompts high-level principles before specific problem solving. |

## Consumes
Problem inquiry requiring domain-specific principles or conceptual background.

## Produces
High-level domain principles and facts, followed by principle-grounded step-by-step reasoning.

## When applied
When tasks require domain knowledge that direct prompting fails to elicit or where models skip governing principles.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Step-Back Prompting decouples the retrieval of governing domain concepts from the application of reasoning to a specific problem. By asking a generic, high-level question first, it primes the model with necessary background facts and physical or mathematical laws, preventing flawed or ungrounded derivation.
