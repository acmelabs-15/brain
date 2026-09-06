---
package: addy
name: Context starvation
slug: context-starvation
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Context starvation

## Definition — verbatim
> "| Context starvation | Agent invents APIs, ignores conventions | Load rules file + relevant source files before each task |" — skills/context-engineering/SKILL.md:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 257 | defined here | Listed in the Anti-Patterns table as an operational failure mode where agents lack necessary context. |

## Consumes
Tasks initiated without adequate rules files, specs, or relevant source files.

## Produces
Hallucinated APIs, ignored conventions, and incorrect code implementations.

## When applied
Identified as an anti-pattern when an agent operates with insufficient context; remedied by loading rules files and relevant source files before each task.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
An operational anti-pattern where an agent receives too little project context, causing it to guess APIs, invent non-existent packages, or ignore established conventions. Remedied by systematically feeding rules files and existing implementation examples.
