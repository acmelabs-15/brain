---
package: matt
name: commits
slug: commits
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# commits

## Definition — verbatim
(used, not defined)

> "Do not duplicate content already captured in other artifacts (specs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead." — skills/productivity/handoff/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/claude-handoff/SKILL.md | 14 | used here | Named as existing version control artifacts that should be cited by commit hash rather than duplicated into handoff summaries. |
| skills/productivity/handoff/SKILL.md | 12 | used here | Named as existing version control artifacts that should be cited by commit hash rather than duplicated into handoff documents. |

## Consumes
Staged repository file modifications, author information, and commit messages.

## Produces
Git commit objects permanently recording snapshots of repository state in version control history.

## When applied
Referenced in handoff instructions to direct agents to cite commit hashes or links rather than inlining commit histories into context.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Plural reference to Git commit objects. In Matt's development workflows, commits represent canonical snapshots in version control history that should be cited by hash or URL during handoffs rather than described redundantly in conversational context.
