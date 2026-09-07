---
package: rjm
name: unterminated fence
slug: unterminated-fence
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# unterminated fence

## Definition — verbatim
> "whose unterminated fence hid most of its prose must not read as clean." — .claude/skills/prose-self-check/scripts/prose_lint.py:27

## Also called — verbatim
- `unterminated_fence` — .claude/skills/prose-self-check/scripts/prose_lint.py:49
- `unterminated_fence` — .claude/skills/prose-self-check/SKILL.md:194

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 27 | used here | Explains in module docstring that a document with an unclosed fence must not read as clean. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 49 | defined here | Constant identifier defining the high-severity finding kind for unclosed code fences. |
| .claude/skills/prose-self-check/SKILL.md | 194 | defined here | Defines the high-severity finding emitted when a code fence fails to close before end of document. |

## Consumes
Inspected markdown file text and code fence line coverage measurements.

## Produces
High-severity finding triggering process exit code 1 to halt execution when unclosed fences mask text.

## When applied
Evaluated during document scanning in `prose_lint.py` when an opened code block never terminates.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: script-bug, doc-drift, other, missing-path

## Design notes
In prose-self-check, unterminated fence is a high-severity fail-closed gate that prevents documents with unclosed code fences from passing lint checks by ensuring masked prose lines cannot deceptively appear clean.
