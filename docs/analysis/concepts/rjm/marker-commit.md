---
package: rjm
name: marker commit
slug: marker-commit
kind: artifact
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# marker commit

## Definition — verbatim
> "marker commit M on top whose trailer names X (``M``'s parent). M adds no code." — .claude/skills/review/scripts/validate_review_marker.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 80 | used here | Verified in pre-flight check 3 (`mode=owner`) to ensure an empty marker commit binds the reviewed tip commit. |
| .claude/skills/review/scripts/validate_review_marker.py | 24 | defined here | Defined in docstring as an empty commit whose trailer binds parent commit X to prove review freshness. |
| .claude/skills/review/SKILL.md | 169 | defined here | Process step 7 instructing `/review` to write an empty marker commit containing the Reviewed-By trailer on a PASS verdict. |

## Consumes
A PASS review verdict across all required axes for the current commit HEAD.

## Produces
An empty Git commit (`git commit --allow-empty`) containing the `Reviewed-By:` trailer naming its parent commit.

## When applied
Created by `/review` when all review axes pass; inspected by `validate_review_marker.py` during `/ship`.

## Sub-concepts
reviewed-by

## Part of
reviewed-on-this-sha, review, ship

## Implementation status
defects: missing-path, doc-drift

## Design notes
Because Git commit hashes cover commit messages and metadata, a commit cannot contain its own hash without creating a circular dependency. The marker commit elegantly bypasses this limitation by creating an empty commit directly on top of reviewed commit X whose message carries `Reviewed-By: /review@... on <SHA_OF_X>`. If subsequent commits are added to the branch, HEAD moves past the marker, immediately and automatically invalidating review proof without external state.
