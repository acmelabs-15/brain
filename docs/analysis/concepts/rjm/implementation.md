---
package: rjm
name: Implementation
slug: implementation
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Implementation

## Definition — verbatim
> "### Phase 4: Implementation" — .claude/skills/slashcommandcreator/SKILL.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 42 | used here | Perspective answering "How is it coded?" mapped to CVA matrix cells representing concrete classes. |
| .claude/skills/slashcommandcreator/SKILL.md | 118 | defined here | Defines Phase 4 of slash command creation where the implementer agent generates script templates and command bodies. |
| .github/scripts/invoke_pr_comment_processing.py | 7 | used here | Listed in docstring as a comment triage category requiring human attention. |

## Consumes
Approved specifications, consensus validation reports, architecture designs, command templates.

## Produces
Production source code, slash command markdown definitions, test suites, executable automation scripts.

## When applied
Triggered when moving from specification/planning into active development, or when answering "How is it coded?" in CVA analysis.

## Sub-concepts
none

## Part of
slashcommandcreator, three-perspectives

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, orphan, script-bug

## Design notes
Serves as both an operational development phase and a foundational architectural perspective in rjm: as Phase 4 of skill and command authoring where verified designs are turned into concrete code, and as Fowler's lowest perspective in CVA where interface abstractions are realized by specific classes.
