---
package: matt
name: fragment
slug: fragment
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-fragments/SKILL.md, sha256: 298b0edd23df229183630de592ed8aa4289233560f2040691f6eb77caeaad4ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fragment

## Definition — verbatim
> "Run a grilling session that produces fragments, interviewing the user relentlessly about whatever they want to write about." — skills/in-progress/writing-fragments/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-fragments/SKILL.md | 9 | defined here | Defined as raw pieces of writing generated from interviewing the author during an exploratory grilling session. |

## Consumes
Author dialogue, reactions, vignettes, punchlines, and observations elicited through conversational questioning.

## Produces
Discrete text entries separated by horizontal rules inside an unstructured exploratory markdown document.

## When applied
During the explore phase as ideas emerge from either participant in the conversation.

## Sub-concepts
none

## Part of
writing-fragments

## Implementation status
clean

## Design notes
A fragment is any piece of writing that might survive into a finished article. Fragments are deliberately heterogeneous—ranging from one-line punchlines and code snippets to vignettes, complaints, and leading words—and are saved without requiring self-contained arguments or predefined terms.
