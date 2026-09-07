---
package: rjm
name: Code Comment Standards
slug: code-comment-standards
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md, sha256: 25940bcf531f8689e2245518804e86b4e50e3dc33aeda22c146e256483b3a834}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Code Comment Standards

## Definition — verbatim
> "Comments record the things the code itself cannot say. Names, types, and structure carry the rest." — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md | 1 | defined here | Title heading for the guide standardizing docstrings, why-not-what comments, and annotations. |

## Consumes
Source code, function signatures, complex algorithms, and architectural rationales.

## Produces
Standardized in-code documentation patterns across functions, docstrings, annotations, and deprecations.

## When applied
Applied during code authoring and code review across all languages in the codebase.

## Sub-concepts
principles, function-or-method-docstrings, why-not-what-comments, language-agnostic-shape

## Part of
codebase-documenter

## Implementation status
clean

## Design notes
Code Comment Standards defines repository-wide policies governing when, where, and how source code should be annotated. It establishes the core principle that comments should explain intent and rationale ("why") rather than restating code mechanics ("what"), standardizing docstrings, complex logic explanations, TODO items, and deprecation notices across programming languages.
