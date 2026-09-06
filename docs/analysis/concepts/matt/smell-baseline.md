---
package: matt
name: smell baseline
slug: smell-baseline
kind: checklist
package_phase: matt:code-review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# smell baseline

## Definition — verbatim
> "The **smell baseline** is the floor underneath it, twelve Fowler code smells from _Refactoring_ ch.3: Mysterious Name, Duplicated Code, Feature Envy, Data Clumps, Primitive Obsession, Repeated Switches, Shotgun Surgery, Divergent Change, Speculative Generality, Message Chains, Middle Man, Refused Bequest." — docs/engineering/code-review.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 40 | defined here | Two-axes comparison table row showing the Standards axis reads documented standards plus the smell baseline. |
| external/code-review.md | 44 | defined here | External catalog documentation detailing the smell baseline heuristics. |
| skills/engineering/code-review/SKILL.md | 38 | defined here | Review instructions directing the Standards sub-agent to evaluate the diff against the twelve-smell baseline. |

## Consumes
The diff between HEAD and the fixed point when repository-specific standards are silent or incomplete.

## Produces
Labelled heuristic findings ("possible Feature Envy") paired with concrete refactoring moves.

## When applied
During the Standards axis of /code-review, serving as a baseline code quality floor.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (evaluations produce non-deterministic findings across repeated runs with no convergence guarantee)

## Design notes
A standardized quality floor in matt's code review framework based on twelve classic Fowler code smells from Refactoring chapter 3. When a repository does not provide custom coding standards, or to complement existing conventions, the smell baseline provides a shared vocabulary of heuristics stated as what-it-is to how-to-fix transformations, preventing subjective or unstructured agent critique.
