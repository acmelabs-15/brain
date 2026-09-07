---
package: rjm
name: Visual Card Layout
slug: visual-card-layout
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Visual Card Layout

## Definition — verbatim
> "### 2.3 Present the Plan for User Approval (Visual Card Layout)" — .claude/skills/prompt-engineer/references/workflow.md:109
> "Present each proposed change as a visually distinct "card" using ASCII box drawing." — .claude/skills/prompt-engineer/references/workflow.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 109 | defined here | Defined as an ASCII box drawing layout presenting proposed prompt changes for human review and upfront sign-off. |

## Consumes
Planned prompt modifications, problematic source quotes, runtime failure descriptions, and pattern trigger justifications.

## Produces
Standardized, highly scannable visual proposal cards displaying scope, problem, technique attribution, and BEFORE/AFTER diffs.

## When applied
During Phase 2 (Plan with Visual Cards) prior to executing any modifications in Phase 3.

## Sub-concepts
card-template

## Part of
full-process

## Implementation status
clean

## Design notes
Visual Card Layout provides a high-scannability interface for human-in-the-loop prompt governance. By formatting each proposed modification into an ASCII box card detailing scope, problem evidence, research attribution, and BEFORE/AFTER text, it enables users to review and approve prompt revisions quickly and with full visibility.
