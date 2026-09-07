---
package: matt
name: differential loop
slug: differential-loop
kind: technique
package_phase: matt:diagnosing-bugs
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# differential loop

## Definition — verbatim
> "Run the same input through old-version vs new-version (or two configs) and diff outputs." — skills/engineering/diagnosing-bugs/SKILL.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 42 | used here | Ninth rung on the feedback loop ladder, diffing outputs between old and new versions on identical input. |
| skills/engineering/diagnosing-bugs/SKILL.md | 34 | defined here | Defines differential execution against two versions or configurations. |

## Consumes
A single input stream and two versions or configurations of the target software.

## Produces
A diff of runtime outputs highlighting behavioral divergences between implementations.

## When applied
When investigating regressions or refactorings where expected absolute behavior is unstated but divergence from a prior known-good version indicates error.

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-1

## Implementation status
clean

## Design notes
Differential testing provides an automated oracle by comparing a candidate version against a trusted baseline. In Matt's debugging ladder, it provides a deterministic signal even when explicit assertion specs are lacking.
