---
package: rjm
name: four-backtick fence
slug: four-backtick-fence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# four-backtick fence

## Definition — verbatim
> "- **A four-backtick fence was miscounted and refused.** The fence matcher took" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 235 | defined here | Documents the parser failure mode where four-backtick code blocks emitted by judges were truncated by three-backtick matchers. |

## Consumes
Raw markdown code fences wrapping LLM judge responses.

## Produces
Correctly delimited and unwrapped verdict JSON payloads matching opener fence width.

## When applied
Applied in output unwrapping logic when judges format JSON payloads containing nested three-backtick examples.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The `four-backtick fence` is a formatting pattern in rjm evaluation forensics representing markdown blocks delimited by four backticks (` ```` `). When LLM judges quote inner triple-backtick blocks in reasoning text, they correctly use outer four-backtick delimiters; parser matchers that rigidly expect three backticks truncate these payloads prematurely.
