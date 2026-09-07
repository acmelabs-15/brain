---
package: matt
name: wait
slug: wait
kind: technique
package_phase: matt:Productivity Skills
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# wait

## Definition — verbatim
> "The leading word is <strong class=\"ah-prose-strong\">wait</strong>. &quot;Be concise&quot; is an instruction about the agent&#x27;s output, and the model obeys it by clipping words and losing you further. <strong class=\"ah-prose-strong\">Wait</strong> is about <em class=\"ah-prose-em\">your</em> state. It says comprehension failed here. An agent that hears &quot;be brief&quot; writes telegrams. An agent that hears &quot;wait, you lost me&quot; backs up and explains." — external/wait-what.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wait-what.md | 31 | defined here | Highlights the single leading word of the skill that communicates user state rather than imposing output-length constraints. |

## Consumes
A breakdown in listener comprehension during an agent session.

## Produces
An agent pause and cognitive recalibration that backs up to re-explain foundational premises.

## When applied
Reached for the moment the user realizes they are skimming or confused by an agent's technical output.

## Sub-concepts
none

## Part of
wait-what

## Implementation status
clean

## Design notes
In Matt's prompt design, "wait" is a targeted communicative trigger. Unlike output directives ("be brief", "be concise") that prompt the model to discard explanatory context, "wait" signals listener confusion, causing the agent to step backward, diagnose what went unexplained, and bridge the gap.
