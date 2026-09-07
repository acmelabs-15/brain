---
package: rjm
name: markdown-check
slug: markdown-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# markdown-check

## Definition — verbatim
(used, not defined)

> "The Lefthook job itself is scoped to staged .md files (`lefthook.yml` `markdown-autofix`/`markdown-check`, `glob: \"**/*.md\"` against `{staged_files}`)" — .claude/skills/ai-agents-debugging-playbook/SKILL.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 48 | used here | Cites markdown-check as a scoped Lefthook job verifying that staged markdown files pass lint checks. |

## Consumes
Staged markdown files.

## Produces
Pass/fail lint verification verdict blocking commits containing unfixable markdown errors.

## When applied
Executed during pre-commit validation to ensure all staged markdown conforms to lint rules.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path, unfailable-gate

## Design notes
A verification gate in Lefthook that checks staged markdown files for syntax and style compliance. Working in tandem with markdown-autofix, it ensures that remaining unfixable lint errors block the commit while restricting its inspection scope exclusively to changed files.
