---
package: addy
name: The Selective Include
slug: the-selective-include
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

# The Selective Include

## Definition — verbatim
> "Only include what's relevant to the current task:" — skills/context-engineering/SKILL.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 137 | defined here | Context packing strategy restricting context strictly to the files and constraints of the immediate task |

## Consumes
The specific task description, target files to modify, specific pattern to emulate, and immediate constraints.

## Produces
A minimal, highly focused context payload (<2,000 lines) preventing context flooding.

## When applied
Applied per task during active development sessions.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
A task-level context packing strategy that limits loaded materials strictly to what is necessary for the immediate change (task prompt, affected files, pattern reference, and narrow constraint). This prevents attention degradation caused by context flooding and keeps token usage focused.
