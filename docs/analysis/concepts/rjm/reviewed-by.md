---
package: rjm
name: Reviewed-By
slug: reviewed-by
kind: artifact
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
  - {path: scripts/validation/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reviewed-By

## Definition — verbatim
> "MARKER_TRAILER_KEY = \"Reviewed-By\"" — .claude/skills/review/scripts/validate_review_marker.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 109 | used here | Parsed in pre-flight check 3 to extract the trailer value `Reviewed-By: /review@<axes> on <sha>`. |
| .claude/skills/review/scripts/validate_review_marker.py | 54 | defined here | Constant defining the trailer key searched in commit messages to validate review attestations. |
| .claude/skills/review/SKILL.md | 63 | used here | Script table entry documenting `validate_review_marker.py` validating the SHA-bound `Reviewed-By:` marker required by `/ship`. |
| scripts/validation/validate_review_marker.py | 2 | used here | Docstring describing validation of the SHA-bound `Reviewed-By: /review@...` marker covering a commit. |

## Consumes
Completed review axes, reviewed commit SHA, and git commit history.

## Produces
A standardized Git commit trailer formatted as `Reviewed-By: /review@<axes> on <sha>`.

## When applied
Injected into the commit message of marker commits by `/review` upon passing review; parsed by validation scripts.

## Sub-concepts
none

## Part of
marker-commit, reviewed-on-this-sha

## Implementation status
defects: missing-path, doc-drift

## Design notes
`Reviewed-By` is the canonical Git trailer key used across rjm tooling to encode structured review attestations. By embedding the exact review axes that were executed and the target commit SHA directly into the commit metadata, it enables automated release pipelines to verify that quality, security, and architectural standards were satisfied without querying external databases.
