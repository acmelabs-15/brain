---
package: rjm
name: software-engineering-library
slug: software-engineering-library
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# software-engineering-library

## Definition — verbatim
> "name: software-engineering-library" — .claude/skills/software-engineering-library/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 119 | used here | Routing target invoked when book-depth conditions are encountered in deep analysis. |
| .claude/skills/software-engineering-library/SKILL.md | 2 | defined here | Declares skill name routing design tasks to on-demand book references. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 138 | used here | Grounding source for domain ontology prompts in Step 1. |
| scripts/eval/software_engineering_library_activation_ci.py | 2 | used here | CI wrapper script testing software engineering library activation. |
| scripts/eval/software_engineering_library_activation_gate.py | 2 | used here | Persistent state gate measuring activation reachability for moved references. |

## Consumes
Discovered code risks, architectural challenges, and book-depth conditions.

## Produces
Targeted, on-demand reference material from established engineering texts without polluting turn-by-turn context.

## When applied
Invoked on demand when specific architectural, design, or legacy code patterns require specialized depth.

## Sub-concepts
working-with-legacy-code, book-depth-conditions

## Part of
none

## Implementation status
clean

## Design notes
`software-engineering-library` implements progressive disclosure of engineering knowledge, indexing classic book references and serving them only when concrete code symptoms demand them.
