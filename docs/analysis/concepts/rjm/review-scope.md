---
package: rjm
name: Review Scope
slug: review-scope
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Review Scope

## Definition — verbatim
> "Review an explicit diff, pull request, or named set of files when one is given." — .claude/agents/code-reviewer.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 42 | defined here | Scope boundary rules defining target diffs, pull requests, or named file sets for code review. |
| templates/agents/code-reviewer.shared.md | 52 | defined here | Scope boundary rules defining target diffs, pull requests, or named file sets for code review. |

## Consumes
Explicit diff, pull request number, or specified list of files to inspect.

## Produces
Bounded review target that restricts analysis to modified files while avoiding unsolicited commentary on pre-existing code.

## When applied
Evaluated at the start of a code review invocation to determine target changes.

## Sub-concepts
none

## Part of
code-reviewer

## Implementation status
clean

## Design notes
Review Scope bounds code evaluation to explicit diffs, pull requests, or specified file sets, defaulting to working-tree changes against HEAD when scope is omitted. It prevents code reviewers from expanding inspection to untouched legacy files or raising speculative objections outside the change set, preserving reviewer focus on introduced modifications.
