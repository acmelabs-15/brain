---
package: matt
name: tight feedback loop
slug: tight-feedback-loop
kind: technique
package_phase: matt:diagnose
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tight feedback loop

## Definition — verbatim
> "It refuses to theorise until it has a **tight feedback loop** (one command that already goes red on *this* bug), then fixes with a regression test." — skills/engineering/ask-matt/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/ask-matt/SKILL.md | 42 | defined here | Identifies the prerequisite single-command reproducing failure loop required by /diagnosing-bugs before theorizing. |

## Consumes
A reported bug, error log, failing behavior, or reproducible issue.

## Produces
A single executable command that deterministically fails on the bug.

## When applied
At the beginning of `/diagnosing-bugs` before attempting any root-cause analysis, hypothesis generation, or code modifications.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
A diagnostic technique enforcing empirical grounding in bug resolution. The agent is explicitly prohibited from speculating or theorizing about bug causes until it establishes a single, fast, deterministic command that reproduces the failure (goes red). This prevents speculative rabbit holes and provides the verification harness for the eventual regression test.
