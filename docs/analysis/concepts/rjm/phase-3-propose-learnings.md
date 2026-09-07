---
package: rjm
name: Phase 3: Propose Learnings
slug: phase-3-propose-learnings
kind: phase
package_phase: rjm:reflect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
  - {path: .claude/skills/reflect/references/phase3-4-propose-persist.md, sha256: c797e32ff834c793ed982059ea1368cf993481ebc2d25bf44165df0fed6a4ccc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 3: Propose Learnings

## Definition — verbatim
> "## Phase 3: Propose Learnings" — .claude/skills/reflect/references/phase3-4-propose-persist.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase3-4-propose-persist.md | 7 | defined here | Detailed reference section defining proposal display format, color coding, and user response handling. |
| .claude/skills/reflect/SKILL.md | 82 | defined here | Workflow phase presenting confidence-labeled learning findings to the user for approval. |

## Consumes
Classified learning signals from Phase 2 tagged with confidence levels ([HIGH], [MED], [LOW]) and source quotes.

## Produces
Formatted terminal proposal block and user approval verdict (`Y`, `n`, or `edit`).

## When applied
Applied during the reflect workflow after conversation analysis identifies learning signals meeting confidence thresholds.

## Sub-concepts
color-key, user-response-handling

## Part of
reflect-skill

## Implementation status
defects: missing-path

## Design notes
Phase 3 of the reflect skill provides an essential interactive confirmation gate between automated learning detection and persistent memory modification. By presenting distilled findings in an accessible, confidence-tagged display before applying changes, it prevents unvetted or hallucinated observations from degrading long-term memory.
