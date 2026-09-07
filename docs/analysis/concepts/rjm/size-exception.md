---
package: rjm
name: size-exception
slug: size-exception
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: .claude/skills/skillforge/scripts/frontmatter.py, sha256: ec8b87b73f02570615731d4d085f799e9206c2b0da9a7b6be8a297019b74120f}
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# size-exception

## Definition — verbatim
> "To declare a justified exception, add `size-exception: true` to frontmatter:" — .claude/skills/CLAUDE.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 91 | defined here | Cataloged as a frontmatter escape hatch exempting SKILL.md files from the 500-line blocking gate in skill_size.py. |
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 32 | used here | Documented under skill size limits as an escape hatch requiring documented justification. |
| .claude/skills/CLAUDE.md | 85 | defined here | Defines the standard YAML frontmatter syntax for declaring a justified size exception. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 242 | used here | Parses and asserts the presence of size-exception: true in skill frontmatter. |
| .claude/skills/skillforge/scripts/frontmatter.py | 17 | used here | Implements has_size_exception() helper to check whether frontmatter declares a size exception. |
| scripts/validation/command_size.py | 7 | used here | Docstring notes that slash commands with irreducible content may declare a size-exception in frontmatter. |
| scripts/validation/skill_size.py | 13 | defined here | Module docstring documents the frontmatter exception mechanism for exceeding skill size limits. |

## Consumes
A skill or command file that inherently exceeds the standard line ceiling due to complex embedded logic.

## Produces
YAML frontmatter exemption bypassing mechanical file size blocking gates.

## When applied
Declared as size-exception: true in YAML frontmatter accompanied by a prose justification comment.

## Sub-concepts
none

## Part of
skill-size

## Implementation status
defects: unfailable-gate, other, missing-path, cross-file-contradiction, doc-drift

## Design notes
A formal frontmatter escape hatch in rjm allowing complex skills and commands to exceed standard line limits when decomposition into references/ is infeasible. To guard against abuse, validators require explicit justification comments, limit parsing to the top 20 lines of frontmatter, and emit prominent notices during validation runs so reviewers can challenge unjustified size creep.
