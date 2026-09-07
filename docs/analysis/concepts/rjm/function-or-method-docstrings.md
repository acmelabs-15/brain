---
package: rjm
name: Function or Method Docstrings
slug: function-or-method-docstrings
kind: pattern
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

# Function or Method Docstrings

## Definition — verbatim
> "Every public function or method gets a docstring with: purpose, parameters, return value, and raised errors." — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md | 12 | defined here | Section prescribing mandatory docstring components for public functions across languages. |

## Consumes
Public function declarations, parameter types, return contracts, and potential error states.

## Produces
Standardized docstring blocks detailing purpose, parameters, returns, and thrown exceptions.

## When applied
Mandatory for every public function, method, and exported API symbol.

## Sub-concepts
language-agnostic-shape

## Part of
code-comment-standards

## Implementation status
clean

## Design notes
Function or Method Docstrings enforces complete documentation for all public symbols. By requiring four explicit sections—purpose (in imperative mood), parameter definitions, return contracts, and raised exceptions—it ensures callers understand interface contracts without needing to inspect implementation details.
