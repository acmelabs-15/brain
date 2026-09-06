---
package: matt
name: PR
slug: pr
kind: artifact
package_phase: matt:implement
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PR

## Definition — verbatim
> "The goal is a PR which implements the entire spec on a single branch." — skills/in-progress/implement-spec/SKILL.md:9

## Also called — verbatim
`pull request` — docs/engineering/implement.md:59

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Explains that implement-spec drives tickets to a single pull request. |
| docs/engineering/code-review.md | 9 | used here | Mentions reviewing a PR as a primary trigger for invoking code-review. |
| docs/engineering/diagnosing-bugs.md | 86 | used here | States that PR messages should identify which bug hypothesis was confirmed. |
| external/resolving-merge-conflicts.md | 26 | used here | Discusses resolving merge conflicts across active PRs. |
| skills/in-progress/implement-spec/SKILL.md | 9 | defined here | Defines the end goal of implement-spec as a PR implementing the whole spec. |
| skills/in-progress/README.md | 17 | used here | Notes that implement-spec lands results as a single PR. |

## Consumes
Feature branch commits, ticket implementations, and code review verdicts.

## Produces
A GitHub Pull Request proposal containing the consolidated implementation ready for review and merge.

## When applied
When changes on a feature branch are ready for collaborative review, automated code review, and integration into the main branch.

## Sub-concepts
pr-branch

## Part of
implement-spec, code-review

## Implementation status
clean

## Design notes
The delivery mechanism for completed code changes. While Matt's standard single-ticket workflow commits directly to the current working branch, workflows like `implement-spec` and collaborative team practices coalesce multiple ticket implementations into a single cohesive PR that cleanly resolves the parent specification.
