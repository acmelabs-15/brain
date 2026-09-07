---
package: rjm
name: Progressive Disclosure
slug: progressive-disclosure
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/codebase-documenter/references/documentation_guidelines.md, sha256: d9e4cd99dbc46630afb6fb6909561ebf5ee715e677b8a537225ad58d01a17016}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/changelog.md, sha256: a4efff27d10d1dd1c5f0a82b98808f6204659a295f2edd5e119d04021799ae42}
  - {path: .claude/skills/skillforge/references/modularity-guidelines.md, sha256: 5c151e7d32f6e7bfc22aa372e53f9a57af5d71069dbbf201e89eb90522632518}
  - {path: .claude/skills/skillforge/scripts/skill_modularity_audit.py, sha256: 55ccc09bdac6caa91ec34111cd8faa6ffddafc52b0684f831ba21993eeab07f9}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Progressive Disclosure

## Definition — verbatim
> "Documentation follows progressive disclosure. The reader starts with what they need now and drills down only if they need more." — .claude/skills/codebase-documenter/references/documentation_guidelines.md:15

## Also called — verbatim
> "**Progressive Disclosure**:" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:215

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 215 | defined here | Mandated for skill authoring to keep SKILL.md under 500 lines by offloading detail to references/. |
| .claude/skills/business-strategy/SKILL.md | 57 | used here | Applied to organize business strategy execution steps into progressive disclosure stages. |
| .claude/skills/CLAUDE.md | 69 | used here | Specified as a repository rule requiring SKILL.md files to stay under 500 lines using progressive disclosure. |
| .claude/skills/codebase-documenter/references/documentation_guidelines.md | 15 | defined here | Core documentation principle stating readers start with immediate needs and drill down only as needed. |
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 31 | used here | Context doctrine rule establishing that task procedures should load on demand rather than consume baseline context. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 157 | used here | Applied in rule audit decision matrix to prevent always-on rule bloat. |
| .claude/skills/context-optimizer/SKILL.md | 111 | used here | Applied as the routing criteria for software engineering practices (SOLID, Clean Code). |
| .claude/skills/skillforge/references/changelog.md | 38 | used here | Recorded in SkillForge changelog as an architectural structure update. |
| .claude/skills/skillforge/references/modularity-guidelines.md | 47 | used here | Modularity guideline recommending scripts/, references/, and templates/ to keep main prompts focused. |
| .claude/skills/skillforge/scripts/skill_modularity_audit.py | 19 | used here | Scored in skill modularity audit rewarding skills that offload content into subdirectories. |
| .claude/skills/skillforge/SKILL.md | 248 | used here | Contrasted against always-on context to minimize passive token expenditure across requests. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 34 | used here | Documented refactoring pattern moving deep-dive content from SKILL.md into references/. |
| .claude/skills/slashcommandcreator/SKILL.md | 221 | used here | Explains that command bodies represent progressive disclosure billed only upon explicit invocation. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 840 | used here | Remediation message directing developers to refactor oversized skills using progressive disclosure. |
| .claude/skills/taste-lints/SKILL.md | 65 | used here | Documented rule stating skills exceeding 500 lines require progressive disclosure refactoring. |
| docs/SKILL-AUTHORING.md | 78 | used here | Authoring guideline instructing developers to use progressive disclosure file structures. |
| scripts/eval/software_engineering_library_activation_gate.py | 5 | used here | Evaluates rule activation performance across the progressive disclosure route. |
| scripts/validation/skill_size.py | 6 | used here | Validator enforcing line count ceilings and requiring progressive disclosure for large skills. |

## Consumes
Complex domain knowledge, deep documentation, reference specifications, or large prompt bodies.

## Produces
Focused top-level prompt entry points linked to modular auxiliary files in `references/`, `scripts/`, or `templates/`.

## When applied
Whenever a skill, document, or command approaches context limits (such as the 500-line ceiling) or contains specialized instructions needed only conditionally.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Progressive disclosure is the primary context optimization pattern in rjm. By keeping top-level router prompts and SKILL.md files concise while storing detailed procedures in subdirectories, it prevents prompt bloat, keeps baseline token usage low, and loads detailed instructions into context only when specifically invoked by the task.
