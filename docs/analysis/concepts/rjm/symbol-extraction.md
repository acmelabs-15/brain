---
package: rjm
name: Symbol Extraction
slug: symbol-extraction
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Symbol Extraction

## Definition — verbatim
> "1. **Symbol Extraction**" — .claude/skills/code-qualities-assessment/SKILL.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 82 | defined here | First step of code-qualities-assessment workflow detecting language and extracting classes/methods. |

## Consumes
Target source code files in supported programming languages (.py, .ts, .js, .cs, .java, .go).

## Produces
Identified class, method, and function symbols, definition counts, and language metadata.

## When applied
Executed as step 1 of the automated code qualities assessment process before quality scoring.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
defects: doc-drift, missing-path

## Design notes
`Symbol Extraction` is the foundational parsing step in rjm's code qualities assessment pipeline. It analyzes source files to identify languages and extract structural software symbols—classes, interfaces, functions, and import declarations—either via external symbol tools like Serena or using inlined regex patterns. Without symbol extraction, downstream quality scorers cannot evaluate cohesion (definitions per LOC), coupling (external imports and dependencies), or encapsulation (public vs private members).
