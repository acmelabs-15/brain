---
package: matt
name: The prototype is a primary source
slug: the-prototype-is-a-primary-source
kind: pattern
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

# The prototype is a primary source

## Definition — verbatim
> "The <strong class=\"ah-prose-strong\">prototype</strong> is the runnable evidence the answer came from, and it is not deleted. It doesn&#x27;t belong in main either: there is nothing there to maintain and it rots fast. So it is committed to a throwaway <code class=\"ah-code-inline\">prototype/&lt;name&gt;</code> branch out of main, never merged, with a <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/context-pointer\">context pointer</a> to that branch left on the implementation issue." — external/prototype.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 38 | defined here | Heading and core policy establishing that completed prototypes are preserved on dedicated branches rather than discarded. |

## Consumes
A completed prototype exploration and its corresponding design verdict.

## Produces
An unmerged Git branch (`prototype/<name>`) preserving runnable prototype code, referenced by a context pointer on the tracking issue.

## When applied
When archiving a completed prototype whose design question has been resolved.

## Sub-concepts
context-pointer, throwaway branch

## Part of
the-prototype-skill

## Implementation status
defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:44 documents evolution away from deleting prototypes to treating them as durable primary sources)

## Design notes
An evidence preservation discipline that keeps runnable prototype code on dedicated, unmerged Git branches with issue tracker pointers. This avoids polluting main with disposable code while preserving the primary evidentiary basis of design decisions for future sessions.
