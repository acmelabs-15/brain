---
name: domain-modeling
description: Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a GLOSSARY.md, or recording or editing a decision record.
---

# Domain Modeling

Actively build and sharpen the project's domain model as you design. This is the *active* discipline: challenging terms, inventing edge-case scenarios, and writing the glossary and decision records down the moment they crystallise. (Merely *reading* `GLOSSARY.md` for vocabulary is not this skill: that's a one-line habit any skill can do. This skill is for when you're changing the model, not just consuming it.)

## File structure

Most repos have a single context:

```
/
├── GLOSSARY.md
├── docs/
│   └── decisions/
│       ├── DEC-001-event-sourced-orders.md
│       └── DEC-002-postgres-for-write-model.md
└── src/
```

If a `GLOSSARY-MAP.md` exists at the root, the repo has multiple contexts. The map points to where each one lives:

```
/
├── GLOSSARY-MAP.md
├── docs/
│   └── decisions/                    ← every decision record, whatever context it touches
└── src/
    ├── ordering/
    │   └── GLOSSARY.md
    └── billing/
        └── GLOSSARY.md
```

Decision records are repo-wide: they live in the workspace's decisions folder (`paths.decisions` in `docs/agents/workspace.md`, `docs/decisions/` by default), numbered across the whole repo. With no `docs/agents/workspace.md`, `brain new-doc` uses the default folders; tell the user once to run setup-brain.

Create files lazily: only when you have something to write. If no `GLOSSARY.md` exists, create one when the first term is resolved. `brain new-doc` creates the decisions folder with the first decision record.

## During the session

### Challenge against the glossary

When the user uses a term that conflicts with the existing language in `GLOSSARY.md`, call it out immediately. "Your glossary defines 'cancellation' as X, but you seem to mean Y. Which is it?"

### Sharpen fuzzy language

When the user uses vague or overloaded terms, propose a precise canonical term. "You're saying 'account': do you mean the Customer or the User? Those are different things."

### Discuss concrete scenarios

When domain relationships are being discussed, stress-test them with specific scenarios. Invent scenarios that probe edge cases and force the user to be precise about the boundaries between concepts.

### Cross-reference with code

When the user states how something works, check whether the code agrees. If you find a contradiction, surface it: "Your code cancels entire Orders, but you just said partial cancellation is possible. Which is right?"

### Update GLOSSARY.md inline

When a term is resolved, update `GLOSSARY.md` right there. Don't batch these up: capture them as they happen. Use the format in [GLOSSARY-FORMAT.md](./GLOSSARY-FORMAT.md).

`GLOSSARY.md` should be totally devoid of implementation details. Do not treat `GLOSSARY.md` as a spec, a scratch pad, or a repository for implementation decisions. It is a glossary and nothing else.

### Record every decision

When the user makes a decision, record it the moment it is made, small or large:

1. Run `brain new-doc DEC <slug> --title "<the decision, in a few words>"`. It claims the next number, writes the decision record from its template with the title in its H1, and prints the path. On Claude Code, `brain` is `bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts"`; on other hosts, `docs/agents/workspace.md` says how to run it.
2. Fill the record in the format in [DEC-FORMAT.md](./DEC-FORMAT.md). The three tests there (`hard-to-reverse`, `surprising`, `real-trade-off`) set its kind: all three true is `kind: architecture`, an ADR; any one false is `kind: decision`.
3. Run `brain check`. The record is done when every `<...>` placeholder is replaced and `brain check` reports no finding for it.

A request for an ADR is a request for a decision record of the architecture kind: the same three steps.

A choice you make on your own, cheap to reverse and with no effect on what gets built, gets no record. State it in chat, with its reason in one line.
