---
package: rjm
name: Naming Conventions
slug: naming-conventions
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Naming Conventions

## Definition — verbatim
> "### 2. Naming Conventions" — .claude/skills/taste-lints/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 64 | defined here | Section heading detailing intent-based method naming conventions across conditions, data access, actions, and transforms. |
| .claude/skills/taste-lints/SKILL.md | 14 | used here | Quoted from OpenAI Harness Engineering as an enforced static quality check with agent-readable error messages. |
| .claude/skills/taste-lints/SKILL.md | 49 | defined here | Section heading defining language-specific casing and prefix rules for scripts, skills, functions, and constants. |
| scripts/AGENTS.md | 74 | defined here | Section heading detailing script, function, variable, and parameter naming rules. |

## Consumes
File names, directory paths, function signatures, variables, parameters, and constants under development.

## Produces
Uniform identifier casing (snake_case, kebab-case, PascalCase, UPPER_CASE), predictable file routes, and self-documenting codebases.

## When applied
Applied during file authoring, pre-commit taste lints, code review, and automated PR quality gates.

## Sub-concepts
none

## Part of
programming-by-intention

## Implementation status
defects: missing-path, doc-drift, other, orphan

## Design notes
Naming Conventions in rjm serve as both an intent-revealing design discipline and a statically enforced taste invariant. By establishing clear standards across languages and file types (e.g., snake_case for Python, kebab-case for skill directories and YAML, PascalCase for classes), the system ensures codebase predictability and enables autonomous agents to parse and navigate project assets reliably.
