---
package: rjm
name: SHA-bound PASS marker
slug: sha-bound-pass-marker
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SHA-bound PASS marker

## Definition — verbatim
> "## Write the SHA-bound PASS marker (Issue #1938)" — .claude/skills/review/SKILL.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 151 | defined here | Heading and specification for writing a gitignored review pass marker bound to the reviewed commit SHA. |

## Consumes
A PASS final review verdict or an acknowledged WARN verdict evaluated against the current Git HEAD commit.

## Produces
The .claude/review-pass.json marker file binding the verified commit SHA and review metadata.

## When applied
Written upon achieving a PASS review verdict on HEAD before invoking /ship.

## Sub-concepts
none

## Part of
review-gate

## Implementation status
defects: missing-path, doc-drift

## Design notes
The SHA-bound PASS marker provides cryptographic proof to the subsequent ship phase that the working tree at the exact target commit was reviewed and approved, preventing unreviewed changes from being deployed.
