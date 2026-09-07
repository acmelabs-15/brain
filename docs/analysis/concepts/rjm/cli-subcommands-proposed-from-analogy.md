---
package: rjm
name: CLI subcommands proposed from analogy
slug: cli-subcommands-proposed-from-analogy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CLI subcommands proposed from analogy

## Definition — verbatim
> "two hallucinated install commands cost user trust in the #2290 session" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 72 | defined here | Settled battle banning hallucinated CLI subcommands inferred from analogy and mandating empirical verification via --help. |

## Consumes
CLI tooling interactions, command syntax proposals.

## Produces
Empirically verified command invocations confirmed via `--help` or manual inspection.

## When applied
Whenever an agent or developer invokes or recommends external CLI commands (e.g., Copilot CLI, npm, git).

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
Bans the practice of guessing or inferring CLI subcommands and options based on analogies with other tools. Stemming from issue #2290 where agents hallucinated non-existent installation commands, this policy mandates running `--help` or verifying documentation empirically. It preserves user trust and prevents runtime errors caused by fabricated command syntax.
