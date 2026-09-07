---
package: matt
name: standalone
slug: standalone
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# standalone

## Definition — verbatim
> "<code class=\"ah-code-inline\">diagnosing-bugs</code> is a reach-for-it-anytime standalone. You drop into it when something is broken and drop out when the fix and its regression test are in; it holds no state and needs no prior setup." — external/diagnosing-bugs.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 77 | defined here | Defines diagnosing-bugs as a reach-for-it-anytime standalone requiring no prior setup or state. |
| external/resolving-merge-conflicts.md | 51 | defined here | Defines resolving-merge-conflicts as a reach-for-it-anytime standalone with no dependencies on other skills. |
| external/to-questionnaire.md | 73 | defined here | Defines to-questionnaire as a reach-for-it-anytime standalone reached when planning stalls on external decisions. |
| external/wizard.md | 53 | defined here | Defines wizard as a standalone utility invoked whenever manual setup procedures arise, rather than a rigid chain step. |

## Consumes
An ad-hoc trigger condition (a bug, a merge conflict, missing knowledge from another person, or a manual setup procedure).

## Produces
Resolution of the specific operational obstacle without establishing persistent workflow state.

## When applied
Whenever the triggering condition occurs during development, independent of linear phase progression.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Standalone skills form a distinct structural class in Matt Pocock's skill ecosystem. Unlike sequential, phase-bound workflows in the main pipeline (such as the idea-to-spec progression), a standalone skill holds no state, requires no prior setup, and can be invoked at any point when its specific triggering condition is met.
