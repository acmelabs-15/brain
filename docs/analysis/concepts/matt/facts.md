---
package: matt
name: facts
slug: facts
kind: technique
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# facts

## Definition — verbatim
> "Finding _facts_ is your job, never the user's. When a frontier question needs a fact from the environment (filesystem, tools, etc.), dispatch a sub-agent to find it; don't ask the user for anything you could look up yourself." — skills/productivity/grilling/SKILL.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grilling.md | 35 | defined here | Explains the fundamental split between facts (gathered autonomously by the agent) and decisions (reserved for the user). |
| skills/productivity/grilling/SKILL.md | 26 | defined here | Instructs the model to autonomously investigate environment facts via sub-agents rather than burdening the user. |

## Consumes
Environmental state, filesystems, tools, and code repositories.

## Produces
Verified empirical information answering open prerequisite questions on the design tree.

## When applied
Whenever an open question in an interview can be settled by inspecting the codebase or running tools.

## Sub-concepts
none

## Part of
grilling

## Implementation status
defects: orphan, doc-drift, other

## Design notes
In Matt's grilling methodology, facts are empirical truths discoverable from the project environment. Agents are strictly forbidden from interrogating the user for information they can verify themselves; instead, they dispatch background subagents to locate facts, preserving human cognitive bandwidth solely for subjective decisions.
