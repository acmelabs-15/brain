---
package: matt
name: resolving-merge-conflicts
slug: resolving-merge-conflicts
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
  - {path: skills/engineering/resolving-merge-conflicts/agents/openai.yaml, sha256: a1f4f96838f2ed6282eb28abbbf99029cb8fadce552baf53da90a025b8bffddf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolving-merge-conflicts

## Definition — verbatim
> "`resolving-merge-conflicts` works through an in-progress git merge or rebase, hunk by hunk, then runs the project's own checks and finishes the operation with a commit." — docs/engineering/resolving-merge-conflicts.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/resolving-merge-conflicts.md | 3 | defined here | Defines the operational scope and intent-preservation strategy for resolving in-progress merge and rebase conflicts. |
| external/ask-matt.md | 47 | used here | Cited as an example of an engineering skill that was shipped long before the router named it. |
| external/resolving-merge-conflicts.md | 25 | defined here | Defines the technique in the external guide as working through conflicts hunk by hunk and finishing with a commit. |
| external/resolving-merge-conflicts.md | 28 | used here | Explains invocation triggers via `/resolving-merge-conflicts` or automatic agent dispatch. |
| skills/engineering/resolving-merge-conflicts/agents/openai.yaml | 2 | used here | Identifies the skill display name in the OpenAI agent specification interface. |
| skills/engineering/resolving-merge-conflicts/SKILL.md | 2 | defined here | Declares the skill name and description for resolving in-progress merge/rebase conflicts. |

## Consumes
An in-progress git merge or rebase with conflict markers in the working tree, plus primary sources (commit messages, PRs, issue tickets).

## Produces
Resolved conflict hunks preserved according to primary source intent, clean automated check passes, and a completed merge/rebase commit.

## When applied
When git stops on conflict markers during a merge or rebase; triggered via `/resolving-merge-conflicts` or automated agent invocation.

## Sub-concepts
automated-checks

## Part of
none

## Implementation status
clean

## Design notes
`resolving-merge-conflicts` approaches git conflict resolution as an intent-reconciliation problem rather than a syntactic text-editing task. It forbids blind resolution flags like `--ours` or `--theirs` and disallows `--abort`, insisting that the agent inspect primary sources (commit messages, PR discussions, and issue trackers) on both sides of each hunk. By requiring that the repository's native automated checks (typecheck, tests, format) run before committing, it prevents the introduction of code that looks syntactically harmonious but breaks runtime contracts.
