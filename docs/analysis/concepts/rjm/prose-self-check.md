---
package: rjm
name: prose-self-check
slug: prose-self-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
  - {path: .claude/skills/prose-self-check/scripts/burstiness.py, sha256: c6c1c60b5f3e1cdf84bf8d1c3615c8ab4a6d7334a8ba082e1d73db85a5096b06}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prose-self-check

## Definition — verbatim
> "Pre-emit AI-vernacular self-check an agent runs on its OWN prose" — .claude/skills/prose-self-check/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 41 | used here | Required pre-emission check on analyst research prose and investigation findings. |
| .claude/agents/explainer.md | 14 | defined here | Mandated quality gate before emitting documentation, PRDs, or architectural explainers. |
| .claude/agents/retrospective.md | 33 | used here | Quality gate executed before finalizing sprint and milestone retrospectives. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 61 | used here | Invoked to check methodology writeups and research notes for AI tells. |
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 9 | used here | Script reference aligning fence repair with prose check pipelines. |
| .claude/skills/prose-self-check/scripts/burstiness.py | 2 | used here | Module docstring describing sentence-length variance scoring for prose quality. |
| .claude/skills/prose-self-check/scripts/prose_lint.py | 19 | used here | Core linting script checking text against reader-trust AI tell layers. |
| .claude/skills/prose-self-check/SKILL.md | 2 | defined here | Frontmatter skill identifier defining prose self-check capabilities. |
| .claude/skills/prose-self-check/SKILL.md | 13 | defined here | Main skill heading introducing four-layer reader-trust audit process. |
| .claude/skills/spec-generator/SKILL.md | 17 | used here | Pre-emission check for generated specification documents and requirement definitions. |
| scripts/validation/skill_contract_test_baseline.txt | 11 | defined here | Baseline validation list registering prose-self-check skill contract. |
| src/claude/analyst.md | 41 | used here | Source copy requiring prose self-check before releasing analytical reports. |
| templates/agents/analyst.shared.md | 56 | used here | Shared analyst template specifying mandatory prose self-check execution. |
| templates/agents/explainer.shared.md | 20 | defined here | Explainer template section defining prose audit expectations. |
| templates/agents/explainer.shared.md | 22 | used here | Explainer template instruction invoking prose self-check on documentation. |

## Consumes
Uncommitted human-facing prose artifacts, ADR narratives, retrospective summaries, or PR descriptions.

## Produces
Burstiness metrics, detected AI-vernacular violations, and recommended prose edits.

## When applied
Executed immediately prior to committing or emitting prose artifacts to ensure natural, credible writing.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path

## Design notes
prose-self-check is an automated pre-emission quality gate that evaluates an agent's own generated prose across four structural and lexical layers. By prioritizing sentence burstiness and structural variety over simple keyword blacklists, it eliminates telltale AI writing patterns from documentation.
