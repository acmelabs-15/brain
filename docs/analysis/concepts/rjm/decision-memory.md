---
package: rjm
name: decision memory
slug: decision-memory
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# decision memory

## Definition — verbatim
> "6. Record the result in a decision memory: `.serena/memories/decision-<slug>.md` with Question, Conventional answer (docs, cited), First-principles position (measured), Evidence, Decision." — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 51 | defines | Specifies recording probe results in structured decision memory files under .serena/memories/. |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 277 | references | Risk mitigation row instructing contributors to record negative results and rejected fixes in decision memory. |

## Consumes
Measured probe evidence, comparison with official documentation, and architectural rationale.

## Produces
Durable markdown record in .serena/memories/decision-<slug>.md capturing verified technical facts.

## When applied
Following the completion of an empirical probe or investigation of undocumented tool behavior.

## Sub-concepts
none

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A structured documentation artifact used to capture empirical findings where measured reality conflicts with conventional or documented expectations. By detailing the question, the conventional belief, the measured reality, and the resulting decision, it prevents future contributors from repeating debunked assumptions.
