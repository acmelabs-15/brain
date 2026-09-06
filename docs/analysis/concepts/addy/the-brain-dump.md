---
package: addy
name: The Brain Dump
slug: the-brain-dump
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Brain Dump

## Definition — verbatim
> "At session start, provide everything the agent needs in a structured block:" — skills/context-engineering/SKILL.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 123 | defined here | Context packing strategy delivering all necessary task inputs in a single upfront block |

## Consumes
Project context, relevant spec excerpts, key constraints, file lists, pattern examples, and known gotchas.

## Produces
A structured initialization context payload preventing early hallucination and orientation errors.

## When applied
Used at the start of a session or when initiating major feature work with an agent.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
An upfront context packing strategy that aggregates all critical task context (project stack, spec excerpts, constraints, relevant files, pattern pointers, and known gotchas) into a structured markdown block at session start, ensuring the agent is fully grounded before beginning work.
