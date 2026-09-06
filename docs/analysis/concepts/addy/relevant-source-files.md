---
package: addy
name: Relevant Source Files
slug: relevant-source-files
kind: artifact
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

# Relevant Source Files

## Definition — verbatim
> "Before editing a file, read it. Before implementing a pattern, find an existing example in the codebase." — skills/context-engineering/SKILL.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 30 | defined here | Level 3 of the context hierarchy, loaded per task |

## Consumes
Target source code files, related test files, existing pattern examples, and type definitions.

## Produces
Accurate, ground-truth context about project APIs and conventions before code is written.

## When applied
Loaded per task prior to making modifications to the codebase.

## Sub-concepts
trust-levels

## Part of
the-context-hierarchy, context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
The third tier of the Context Hierarchy, representing the specific code files, tests, types, and exemplar implementations required for the current task. Context engineering emphasizes reading actual files before editing and finding established codebase patterns to eliminate hallucinated methods and style discrepancies.
