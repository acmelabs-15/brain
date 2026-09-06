---
package: matt
name: fixed point
slug: fixed-point
kind: reference
package_phase: matt:code-review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fixed point

## Definition — verbatim
> "`code-review` reviews the diff between `HEAD` and a fixed point you name (a commit, a branch, a tag, `main`, `HEAD~5`) along two axes." — docs/engineering/code-review.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 3 | defined here | Canonical definition establishing code review comparison against a named fixed point. |
| docs/engineering/implement.md | 65 | used here | Describes verifying implementation changes against the branch fixed point during close-out review. |
| external/code-review.md | 30 | used here | External catalog documentation detailing fixed point diff pinning. |
| external/implement.md | 56 | used here | External guide discussing close-out review against the originating fixed point. |
| skills/engineering/code-review/SKILL.md | 17 | defined here | Process step instructing the agent to pin and validate the fixed point ref before review. |

## Consumes
A valid git revision reference (commit SHA, branch name, tag, or merge base expression).

## Produces
A validated base reference used to compute `git diff <fixed-point>...HEAD`.

## When applied
At the start of code review to establish the exact scope of code changes being evaluated.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (git diff evaluates only committed changes from merge base, ignoring unstaged and staged changes in working tree)

## Design notes
A mandatory baseline reference point in matt's code review workflow. By requiring the user or invoking workflow to pin an explicit fixed point before spawning parallel review sub-agents, code-review guarantees that the diff is verifiable and non-empty, preventing hallucinations or failed reviews caused by ambiguous git comparison targets.
