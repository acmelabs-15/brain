# Artifact mode — interrogating a plan, spec, design or decision

## Contents
- The design tree and the frontier
- One question at a time, in dependency order
- Facts are yours, never the user's
- Done

## The design tree and the frontier

Map the artifact as a **design tree**: every decision branches into the decisions that hang off it. The **frontier** is every decision whose prerequisites are already settled — the questions you can ask *now* without guessing at answers you haven't heard.

## One question at a time, in dependency order

Work the frontier one question at a time — each through `brain:ask-user-question`, your recommended answer as the marked option with its reasoning in that option's description. Each answer reshapes the tree: settled decisions push the frontier outward. Recompute before the next question; a question whose answer depends on one still open waits its turn.

## Facts are yours, never the user's

When a frontier question needs a fact from the environment (filesystem, tools, docs), dispatch a subagent to find it; only the questions downstream of that fact wait for the report — keep asking the rest of the frontier, one at a time. Never ask the user for anything you could look up.

## Done

The session is done when the frontier is empty — every branch visited, nothing silently assumed — and the user explicitly confirms shared understanding. Do not act on the artifact before that confirmation. When `domain-modeling` was engaged (recording mode), the terms and decisions are already in `CONTEXT.md` and the ADRs.

## Mode checks

- [ ] The frontier was worked in dependency order and recomputed after each answer
- [ ] Facts came from subagents, never from the user
- [ ] No question was asked while its prerequisite was still open
- [ ] The user confirmed shared understanding explicitly before anything acted on the artifact
