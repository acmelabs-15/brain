# Capability Map: brain

Approved by Peter on 2026-09-19. Module ids are fixed. Each module has its own
spec, `SPEC-<module id>.md`, written and built in the order below.

| Module id | Responsibility | Depends on |
|---|---|---|
| upstream-sync | The SHA pin file, the Bun sync script, the drift check and the provenance record for agent-skills, mattpocock/skills and ask-user-question | — |
| host-manifests | The four host manifests, one version script, one install page per host | — |
| plain-talk | One source text rendered into the Claude output style, the Gemini context file and the AGENTS.md block, paired with wait-what | host-manifests |
| setup | brain's own per-repo setup skill: writes the AGENTS.md block, sets the CONTEXT.md layout | plain-talk |
| lifecycle | brain's own stage skills that compose addy's skills, matt's improvements, domain-modeling and ask-user-question | upstream-sync, setup |
| evals | Routing and plain-talk evals in CI | plain-talk, lifecycle |
| question | The rewrite of ask-user-question from the 24 artifact files in Peter's repo: a short description, evidence per rule, honest host limits, brain's rules folded in (added 2026-09-19) | — |

Build order: upstream-sync and host-manifests → plain-talk → setup → lifecycle and question, either order → evals

Sources: `docs/intent/brain-wrap.md`, `docs/research/RES-001-wrap-layout.md`.
