---
package: matt
name: implementation issue
slug: implementation-issue
kind: artifact
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# implementation issue

## Definition — verbatim
> "The <strong class=\"ah-prose-strong\">answer</strong> (the verdict plus the question it settled) is captured durably: a commit message, an ADR, the implementation issue. That is what the main branch keeps, folded into the real code." — external/prototype.md:40

## Also called — verbatim
`originating issue` — external/implement.md:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 40 | used here | Work-tracking issue identified as a durable destination for recording settled design verdicts and context pointers to prototype branches. |

## Consumes
Prototype verdicts, architectural decisions, and links to unmerged exploratory branches.

## Produces
A traceable issue ticket specifying implementation scope and linking to background prototype evidence.

## When applied
When recording the conclusions of an exploratory prototype and transitioning from design shaping to production implementation.

## Sub-concepts
context-pointer

## Part of
the-prototype-skill

## Implementation status
defects: orphan (external/prototype.md:1)

## Design notes
The tracker ticket governing the production implementation of a feature. It serves as the primary integration anchor between shaping and implementation, housing the settled architectural verdict and holding context pointers back to exploratory prototype branches.
