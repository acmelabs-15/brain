---
package: matt
name: falsifiable
slug: falsifiable
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# falsifiable

## Definition — verbatim
> "Each hypothesis must be **falsifiable**: state the prediction it makes." — skills/engineering/diagnosing-bugs/SKILL.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/SKILL.md | 92 | defined here | Defined as the mandatory property of debugging hypotheses in Phase 3. |

## Consumes
Bug observations, minimized repro, and candidate explanations of root causes.

## Produces
An explicit prediction stating what change will eliminate the bug or what change will worsen it.

## When applied
During Phase 3 (Hypothesise) of diagnosing bugs when formulating candidate explanations.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
A strict quality standard for debugging hypotheses requiring each hypothesis to formulate an explicit testable prediction. Without falsifiability, hypotheses degenerate into vague intuition that cannot be systematically verified or eliminated.
