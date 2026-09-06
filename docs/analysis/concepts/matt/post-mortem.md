---
package: matt
name: post-mortem
slug: post-mortem
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# post-mortem

## Definition — verbatim
(used, not defined)
> "That absence is itself the finding, and it is what routes the post-mortem to <code class="ah-code-inline">improve-codebase-architecture</code>." — external/diagnosing-bugs.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/user-invoked-skill-invocation.md | 8 | used here | Describes the earlier Phase 6 post-mortem hand-off to improve-codebase-architecture that was removed to maintain unattended execution. |
| external/diagnosing-bugs.md | 50 | used here | Details routing from diagnosing-bugs to improve-codebase-architecture when test seams are missing. |

## Consumes
A diagnosed bug, root-cause evidence, and documented findings regarding architectural seams.

## Produces
Architectural improvement recommendations or hand-off context to structural refactoring flows.

## When applied
Following diagnosis or resolution of complex bugs, particularly when missing architectural seams prevent proper regression testing.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
defects: doc-drift, orphan

## Design notes
In `matt:engineering`, a post-mortem captures systemic architectural lessons from difficult bugs. In earlier iterations of `diagnosing-bugs`, Phase 6 incorporated a post-mortem step that handed off findings directly to `improve-codebase-architecture` whenever the lack of a proper test seam was identified. Because `improve-codebase-architecture` is an interactive user-invoked skill, this autonomous hand-off violated invocation invariants during unattended debugging sessions and was subsequently removed in favor of a clean, checklist-only Phase 6.
