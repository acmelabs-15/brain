---
package: rjm
name: markdown-autofix
slug: markdown-autofix
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

# markdown-autofix

## Definition — verbatim
(used, not defined)

> "The Lefthook job itself is scoped to staged .md files (`lefthook.yml` `markdown-autofix`/`markdown-check`, `glob: \"**/*.md\"` against `{staged_files}`)" — .claude/skills/ai-agents-debugging-playbook/SKILL.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 48 | used here | Cites markdown-autofix as a scoped Lefthook job running markdown formatting strictly against staged markdown files. |

## Consumes
Staged markdown files ({staged_files}).

## Produces
Automatically formatted markdown files obeying repository markdownlint rules.

## When applied
Triggered as a pre-commit hook in Lefthook against staged markdown files.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path, unfailable-gate

## Design notes
A pre-commit formatting job in Lefthook that automatically fixes markdown formatting violations. To prevent repository-wide churn and out-of-scope diffs (a failure mode identified in PR #908 where unscoped formatting modified 95 files), markdown-autofix is strictly scoped to staged markdown files.
