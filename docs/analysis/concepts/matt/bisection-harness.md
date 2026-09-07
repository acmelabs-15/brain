---
package: matt
name: bisection harness
slug: bisection-harness
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

# bisection harness

## Definition — verbatim
> "If the bug appeared between two known states (commit, dataset, version), automate \"boot at state X, check, repeat\" so you can `git bisect run` it." — skills/engineering/diagnosing-bugs/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 41 | used here | Eighth rung on the feedback loop ladder, designed to feed into `git bisect run`. |
| skills/engineering/diagnosing-bugs/SKILL.md | 33 | defined here | Defines automated bisection looping across commits, datasets, or versions. |

## Consumes
Two known historical boundaries (good and bad states) and an automated pass/fail test command.

## Produces
Binary exit codes (0 for good, non-zero for bad) enabling automated bisection across revisions.

## When applied
When isolating regressions introduced across historical commits, data migrations, or version upgrades.

## Sub-concepts
git-bisect-run

## Part of
diagnosing-bugs, phase-1

## Implementation status
clean

## Design notes
An automated script harness that tests a checkout state and returns a clean exit code for `git bisect run`. In Matt's methodology, constructing this harness turns historical regression isolation into purely mechanical execution.
