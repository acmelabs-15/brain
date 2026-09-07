---
package: rjm
name: Law of Demeter
slug: law-of-demeter
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Law of Demeter

## Definition — verbatim
> "Does new code reach through one object to manipulate another's internals (Law of Demeter)?" — .claude/skills/review/references/code-quality.md:67

## Also called — verbatim
> "### Getter Chains (Law of Demeter violations)" — .claude/skills/analyze/references/design-tell-dont-ask.md:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 178 | used here | Cited as diagnostic root cause when code is difficult to test or exhibits tight coupling. |
| .claude/skills/analyze/references/design-tell-dont-ask.md | 54 | defined here | Section heading identifying getter chains as Law of Demeter violations. |
| .claude/skills/review/references/code-quality.md | 67 | used here | Review checklist item evaluating whether PR code reaches through objects to manipulate internals. |
| .claude/skills/software-engineering-library/references/refactoring.md | 68 | used here | Refactoring smell analysis linking message chains to Law of Demeter violations. |
| templates/agents/implementer.shared.md | 186 | used here | Testability diagnostic warning that hard-to-test code often stems from Law of Demeter violations. |

## Consumes
Object collaboration networks and method call graphs.

## Produces
Encapsulated message passing adhering to the principle of least knowledge ("tell, don't ask").

## When applied
When designing object interactions, evaluating testability, or reviewing PR diffs for train wrecks and getter chains.

## Sub-concepts
none

## Part of
code-quality-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift, other

## Design notes
Law of Demeter enforces strict encapsulation boundaries by forbidding objects from navigating object graphs to manipulate remote internals in rjm. By promoting "tell, don't ask" interactions, it prevents brittle coupling chains and ensures high testability.
