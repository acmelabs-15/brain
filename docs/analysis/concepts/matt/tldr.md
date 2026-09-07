---
package: matt
name: /tldr
slug: tldr
kind: technique
package_phase: matt:Productivity Skills
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /tldr

## Definition — verbatim
(used, not defined)

> "Every popular fix for verbosity names the <em class=\"ah-prose-em\">output</em>: <code class=\"ah-code-inline\">/tldr</code>, <code class=\"ah-code-inline\">/no-fluff</code>, <code class=\"ah-code-inline\">/talk-normal</code>." — external/wait-what.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wait-what.md | 32 | used here | Cited as an output-focused brevity command that causes agents to over-correct into an unhelpful caveman register. |

## Consumes
Verbose model output requiring summarization.

## Produces
A clipped summary that often omits essential context without improving comprehension.

## When applied
Cited as an external pattern contrasted against listener-focused commands like `/wait-what`.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented

## Design notes
`/tldr` is analyzed in Matt's design as an anti-pattern for conversational repair. Because it instructs the model to compress output rather than address comprehension failure, it causes the model to delete necessary context and drop into an uninformative register.
