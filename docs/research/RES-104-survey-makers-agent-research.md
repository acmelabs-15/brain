---
id: RES-104
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-017#02
date: 2026-11-21
---
# RES-104: Survey: the model makers' guidance on research by agents

## Question
Survey, area 1 of 5: what do the model makers publish on how to run research with agents, for the nine survey questions?

## Answer
This is a map of 15 maker sources and 1 borderline source. It is not a design recommendation.

Words: "lead" is the agent that plans and merges. "Sub-agent" is an agent that the lead starts. "Effort level" is the makers' setting for how much a model thinks. It is not the glossary term "Effort".

### The map

"n.s." means not stated in the source.

| Source | 1 Size | 2 Stages | 3 Briefs | 4 Evidence | 5 The human | 6 The loop | 7 Past work | 8 Model and effort | 9 Limits |
|---|---|---|---|---|---|---|---|---|---|
| S1 Anthropic, multi-agent research system (2025-06) | 1 agent for a fact; 2-4 sub-agents for a comparison; 10+ for complex work | Plan, parallel search, lead merges and decides, citation pass, report | Objective, output format, tools and sources, task boundaries | Separate citation agent; source-quality rules in prompts | Gets the report; no approval step stated | Lead adds sub-agents or changes strategy | Plan saved to memory in one run; earlier runs n.s. | Opus 4 lead, Sonnet 4 sub-agents; extended thinking | About 15x chat tokens; lead cannot steer sub-agents during a run |
| S2 Anthropic cookbook, research prompts | 1, 2-3, 3-5 or 5-10 sub-agents by complexity; maximum 20 | Classify query, plan, delegate in parallel, merge, lead writes report | One objective, format, context, key questions, sources, definition of a reliable source, tools, scope | Sub-agent flags weak sources and conflicts; citation only where the source directly supports the claim | No questions to the user | Stop at diminishing returns; sub-agent runs an observe-orient-decide-act loop | n.s. | n.s. | Cap of 20 tool calls and about 100 sources per sub-agent; the prompt's own numbers conflict |
| S3 Anthropic, Building effective agents (2024-12) | Simplest solution first; no numbers | Patterns only: orchestrator-workers, evaluator-optimizer | n.s. | Evaluator decides if more searches are necessary | Stops at checkpoints or blockers | Evaluator feedback loop; maximum iterations | n.s. | n.s. | Higher cost; compounding errors |
| S4 Anthropic, Claude Code docs and blog: sub-agents, agent teams | Sub-agents for self-contained work; teams of 3-5; 5-6 tasks per teammate | n.s. | Fresh context; lead writes the message; rules must be restated; scope and return format | Teammates challenge findings; competing hypotheses; fresh reviewer | Monitors, steers, can message any teammate | Human redirects or replaces a teammate | n.s. | Sub-agent inherits the parent model; Haiku to cut cost | Teams are experimental; tokens scale per teammate; results fill the lead's context |
| S5 Anthropic, Building multi-agent systems (2026-01) | Only for context protection, parallel work or specialization | n.s. | Split by context; verifier gets artifact, criteria, tools | Dedicated verifier sub-agent | n.s. | n.s. | n.s. | n.s. | 3-10x tokens; total time often longer; verifier stops too early |
| S6 Anthropic, Effective context engineering (2025-09) | Sub-agents where parallel exploration pays | n.s. | n.s.; sub-agent returns 1,000-2,000 tokens | n.s. | n.s. | n.s. | Notes file outside the context, read again after a reset | n.s. | Runtime exploration is slower; dead ends waste context |
| S7 Anthropic, prompting guides (current) | Delegate for parallel or isolated work; else work directly | n.s. | Tool description tells the model how to brief | Success criteria; verify across multiple sources; competing hypotheses; confidence levels | n.s. | Self-critique of approach and plan | Research notes file or hypothesis tree | High effort for research; low for fast sub-agents; top model as orchestrator | Models delegate too much; old "delegate" instructions add cost |
| S8 OpenAI, deep research: launch post, API cookbooks, current web search guide | One model run; small agents only for intake | Clarify, rewrite prompt, research, report | Rewritten prompt: all user details, no invented details, format, sources to prefer | Inline citations with text span; prefer primary sources | Answers clarifying questions before the run (ChatGPT); API asks none | Inside the model; n.s. outside | n.s. | Small model for intake; research model or reasoning model at high effort | Hallucination; weak confidence calibration; rumor against authority; cookbooks archived |
| S9 OpenAI, A practical guide to building agents | One agent first; split on complex logic or tool overlap | n.s. | n.s. | n.s. | Takes over at failure limits or high-risk actions | Run until an exit condition; maximum turns | n.s. | Most capable model first, then try smaller models | More agents add complexity and overhead |
| S10 OpenAI, Codex sub-agents docs | Sub-agents only on request (local clients); thread cap | n.s. | n.s.; sub-agent returns a summary | n.s. | Asks for sub-agents; approves on the parent session | Parent routes follow-up instructions | n.s. | Standard model for planning agents; small model for narrow work; high effort for reviewers | More tokens; parallel writes conflict |
| S11 Google, Gemini Deep Research API docs | One managed agent; two tiers | Plan, search, read, iterate, output | Prompt gives context, format and a rule for missing data | Cited report; user reviews citations | Optional plan review and approval before research; follow-ups after | Internal iteration; follow-up on the same interaction | Follow-up reuses the previous interaction; else n.s. | Deep Research or Deep Research Max by depth | Maximum 60 minutes; about $1-7 per task; prompt injection |
| S12 Google Research, scaling agent systems (2026-01) | By task shape: parallel work gains, sequential work loses | n.s. | n.s. | An orchestrator contains errors: 4.4x against 17.2x | n.s. | n.s. | n.s. | n.s. | Multi-agent lost 39-70% on a sequential task |
| S13 Google Research, AI co-scientist (2025-02) | Fixed set of specialized agents under a supervisor | Goal, plan, generate, reflect, rank, evolve, meta-review | n.s. | Debate, self-critique, ranking tournament, web search | Gives the goal, seed ideas and feedback | Continuous refinement as compute scales | n.s. | Gemini 2.0 | Rating is not ground truth; fact checks need work |
| S14 Google Research, test-time diffusion deep researcher (2025-09) | Fixed pipeline of components | Plan, draft, search questions, answers, revise draft, report | The draft steers the next search question | LLM judge scores variants; retrieval verifies draft content | n.s. | Revise until maximum iterations or agent decision | n.s. | Gemini 2.5 Pro | Cost and latency not reported |
| S15 Mistral, Deep Research docs | n.s. | Clarify if broad, plan, search, report | n.s. | Inline citations and a list of all sources | Edits and starts the plan | n.s. | n.s. | n.s. | Legacy feature |
| S16 Microsoft staff blog (borderline, not official guidance) | Lead plus 3 sub-researchers | n.s. in text | n.s. | Credibility critic, reflection critic, citation agent | n.s. | No stop rule stated | n.s. | o3 and GPT-4.1, not assigned | About $1.3 and 7 minutes per sample run |

### Where the sources agree
- Start with one agent. Add agents only when the work splits into independent parts (S3, S5, S7, S9, S12).
- A lead plans and merges. Sub-agents work in separate contexts and return short summaries (S1, S2, S4, S6, S10).
- A brief must be explicit: objective, output format, sources and boundaries (S1, S2, S4). OpenAI applies the same rule to the prompt for its research model (S8).
- A plan comes before the search (S1, S2, S11, S13, S14, S15).
- Many agents cost several times more tokens (S1, S4, S5, S10).
- A run needs a stop rule: diminishing returns plus a hard limit (S2, S3, S9, S11, S14).
- Primary sources are better than aggregators (S1, S2, S8).

### Where the sources disagree
- The human gate. The Anthropic lead prompt forbids questions to the user (S2). ChatGPT asks clarifying questions first, but the OpenAI API asks none (S8). Gemini and Mistral show a plan that the human edits or approves (S11, S15).
- Who checks the result. The Anthropic research system relies on the lead and a citation pass (S1). Later Anthropic texts add a dedicated verifier or teammates that try to disprove each other (S4, S5). Google builds critic and judge loops into the run (S13, S14).
- One agent or many for research. Anthropic reports a 90.2% gain from many agents on its internal evaluation (S1). OpenAI describes deep research as one model with tools (S8). Google's study finds a gain of 80.9% on a parallel task and a loss of 39-70% on a sequential task (S12).
- The numbers. S1 names 10 or more sub-agents for complex work. S2 names 5-10 with a default of 3. S4 names 3-5 teammates. Token multiples are 15x against chat (S1) and 3-10x against one agent (S5); the baselines differ.
- The model split. Anthropic's 2025 system uses a strong lead and cheaper sub-agents (S1). Claude Code sub-agents inherit the parent model by default (S4). OpenAI says to start with the most capable model everywhere, then try smaller models (S9).
- Speed. One Anthropic article says the benefit of parallel work is thoroughness, not speed, and that total time is often longer (S5). An Anthropic blog says three parallel sub-agents generally finish sooner (S4).

### Evidence against popular claims
- "More agents give better results." An early Anthropic version started 50 sub-agents for simple queries (S1). Independent agents with no orchestrator amplified errors 17.2x (S12). Current Anthropic guides tell users to remove old instructions that push delegation (S7).
- "A check by a second agent is sufficient." A verifier can run a few checks and declare success too early (S5). The co-scientist's rating is not based on independent ground truth (S13).
- "A deep research report is reliable." OpenAI states that its tool can hallucinate, confuses rumor with authority, and conveys uncertainty poorly (S8).
- No source gives a minimum number of sources per claim. No source gives a rule to look at earlier research before a new run.

### Worth a deep run
1. S1 and S2 together. They are the only maker source with a full procedure, numbers and the real prompts. A deep run can extract the rules for size, briefs, stop conditions and source quality, and can resolve the conflicting numbers.
2. The check step: S5 (verifier), S4 (competing hypotheses), S12 (error amplification), S13 and S14 (critic loops). These sources answer the gap "no step that checks results" in different ways. The S12 paper needs a read in its latest version.
3. The human gate: S8 (clarify and rewrite prompts), S11 (plan approval), S15 (plan edit). The OpenAI prompts are published in full and are short.
4. Model and effort level: S7, S4 and S10. This guidance is current, changes with each model release, and reverses some 2025 advice.
5. Past work and memory: S6 and the research notes pattern in S7. The topic is thin in every source, so a deep run must also look outside the makers.

### What I could not reach
- The OpenAI deep research guide. Its URL now redirects to a page with the title "Web search". That page does not contain the phrase "deep research". Both deep research cookbooks are marked archived.
- UNVERIFIED: Google's "deep-search" sample for its Agent Development Kit. A search result describes a planner, researcher, critic and composer with plan approval by the human. The repository paths that I tried returned 404.
- UNVERIFIED: a "capability saturation" threshold in the S12 paper. The blog post that I read does not state it. I did not read the arXiv paper.
- xAI, Meta, Amazon, Cohere and DeepSeek. Two generic searches found no primary guidance. This does not prove that none exists.
- Google's consumer blog on Gemini Deep Research, and the last 15,000 characters of the Claude Code sub-agents page.
- Method limit: the fetch tool returns a summary made by a small model for most pages. I read raw text only for the agent teams page, the two Anthropic prompting guides and the OpenAI guide PDF. A deep run must read the raw pages before it relies on a quote.

## Findings

### S1. Anthropic, "How we built our multi-agent research system" (engineering post, 2025-06-13)
- The lead agent's prompt sets effort tiers: simple fact-finding uses 1 agent with 3-10 tool calls, direct comparisons use 2-4 sub-agents with 10-15 calls each, and complex research uses more than 10 sub-agents. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- Early versions started 50 sub-agents for simple queries; the tiers were added to stop this. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- A run has these stages: the lead plans and saves the plan to memory, sub-agents search in parallel, the lead merges results and decides if more research is necessary, a citation agent attaches citations, and the result goes to the user. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- Each sub-agent needs "an objective, an output format, guidance on the tools and sources to use, and clear task boundaries"; short briefs caused duplicate work and gaps. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- A separate citation agent processes the documents and the report to find the specific location for each citation. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- Human testers found that agents chose SEO-optimized content farms over authoritative sources; source-quality rules were added to the prompts. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- When results are not enough, the lead creates more sub-agents or refines its strategy; otherwise it exits the loop. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- The lead saves its plan to memory because context past 200,000 tokens is truncated; sub-agents can write outputs to external storage and return short references. The post does not describe a look at research from earlier runs. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- The lead is Claude Opus 4 and the sub-agents are Claude Sonnet 4; this setup beat single-agent Claude Opus 4 by 90.2% on an internal research evaluation. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- The lead uses extended thinking to plan; sub-agents use interleaved thinking after tool results to evaluate quality and refine the next query. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- Agents use about 4x the tokens of chat, and multi-agent systems about 15x; token use explained about 80% of performance variance on the BrowseComp benchmark. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- The post names poor fits: tasks where all agents need the same context or have many dependencies between agents, and most coding tasks. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- Execution is synchronous: the lead cannot steer sub-agents, sub-agents cannot coordinate, and the system waits for the slowest sub-agent. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.
- Evaluation starts with about 20 representative queries, uses an LLM judge with a 0.0-1.0 score and a pass or fail grade, and keeps manual testing. Source: https://www.anthropic.com/engineering/multi-agent-research-system, checked 2026-11-21.

### S2. Anthropic cookbook, research lead, sub-agent and citation prompts
- The lead prompt classifies each query as depth-first, breadth-first or straightforward before it plans. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md, checked 2026-11-21.
- The lead prompt sets sub-agent counts: 1 for a simple query, 2-3 for standard, 3-5 for medium, 5-10 for high complexity, a default of 3, and "Never create more than 20 subagents unless strictly necessary". Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md, checked 2026-11-21.
- A sub-agent brief must hold one core objective, the output format, background context, key questions, sources to use, a definition of a reliable source for the task, the tools, and scope limits "to prevent research drift". Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md, checked 2026-11-21.
- The lead writes the final report itself: "NEVER create a subagent to generate the final report". Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md, checked 2026-11-21.
- The lead stops when more research has diminishing returns and a good answer is possible. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md, checked 2026-11-21.
- The lead prompt forbids questions to the user: "No clarifications will be given, therefore use your best judgment". Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md, checked 2026-11-21.
- The lead prompt does not mention memory or earlier research. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md, checked 2026-11-21.
- The sub-agent prompt sets a budget by difficulty (under 5 tool calls for simple tasks, about 10 for hard tasks, up to 15 for multi-part tasks) and an absolute limit of 20 tool calls and about 100 sources. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md, checked 2026-11-21.
- The sub-agent prompt's numbers conflict: one section says to avoid more than ten tool calls, the budget permits 15, and the limit is 20. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md, checked 2026-11-21.
- The sub-agent runs an observe, orient, decide, act loop and stops when it finds no new relevant information. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md, checked 2026-11-21.
- The sub-agent must flag speculation, marketing language, news aggregators, unnamed sources and cherry-picked data, and must report unresolved conflicts between sources to the lead. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md, checked 2026-11-21.
- The citation prompt must not change the report text, and adds a citation only "where the source documents directly support claims in the text". Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/citations_agent.md, checked 2026-11-21.
- The citation prompt says "Not every statement needs a citation"; it cites key facts and substantive claims, not common knowledge. Source: https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/citations_agent.md, checked 2026-11-21.

### S3. Anthropic, "Building effective agents" (engineering post, 2024-12-19)
- The post recommends "finding the simplest solution possible, and only increasing complexity when needed". Source: https://www.anthropic.com/engineering/building-effective-agents, checked 2026-11-21.
- The orchestrator-workers workflow fits tasks where the subtasks cannot be predicted; the post gives multi-source search as an example. Source: https://www.anthropic.com/engineering/building-effective-agents, checked 2026-11-21.
- The evaluator-optimizer workflow fits "complex search tasks that require multiple rounds of searching and analysis"; the evaluator decides if more searches are necessary. Source: https://www.anthropic.com/engineering/building-effective-agents, checked 2026-11-21.
- Agents can stop for human feedback at checkpoints or blockers, and a maximum number of iterations is a common stop condition. Source: https://www.anthropic.com/engineering/building-effective-agents, checked 2026-11-21.
- The post states that agent autonomy means higher costs and compounding errors. Source: https://www.anthropic.com/engineering/building-effective-agents, checked 2026-11-21.

### S4. Anthropic, Claude Code docs and blog: sub-agents and agent teams
- A sub-agent starts with a fresh context and does not see the conversation history; the lead composes a delegation message, and a rule that must reach the sub-agent must be restated in it. Source: https://code.claude.com/docs/en/sub-agents, checked 2026-11-21.
- The docs recommend sub-agents for self-contained work with verbose output, and the main conversation for work that needs frequent back-and-forth. Source: https://code.claude.com/docs/en/sub-agents, checked 2026-11-21.
- The docs warn that many sub-agents with detailed results can consume significant context of the main conversation. Source: https://code.claude.com/docs/en/sub-agents, checked 2026-11-21.
- A sub-agent runs on the model of the parent conversation by default; the docs suggest lower-cost models such as Haiku to control cost. Source: https://code.claude.com/docs/en/sub-agents, checked 2026-11-21.
- By default a session permits 20 sub-agents at the same time, and a sub-agent can start its own sub-agents up to three layers below the main conversation. Source: https://code.claude.com/docs/en/sub-agents, checked 2026-11-21.
- Agent teams fit "research and review" where teammates "share and challenge each other's findings"; sub-agents fit focused tasks where only the result matters. Source: https://code.claude.com/docs/en/agent-teams, checked 2026-11-21.
- The docs recommend 3-5 teammates for most workflows and 5-6 tasks per teammate, and say "Three focused teammates often outperform five scattered ones". Source: https://code.claude.com/docs/en/agent-teams, checked 2026-11-21.
- The docs describe a competing-hypotheses pattern: teammates try to disprove each other, because sequential investigation anchors on the first theory. Source: https://code.claude.com/docs/en/agent-teams, checked 2026-11-21.
- A teammate gets the project context and the spawn prompt from the lead, but not the lead's conversation history; the docs tell the user to put task details in the spawn prompt. Source: https://code.claude.com/docs/en/agent-teams, checked 2026-11-21.
- The docs tell the human to check progress, redirect approaches that do not work, and not let a team run unattended for too long. Source: https://code.claude.com/docs/en/agent-teams, checked 2026-11-21.
- Agent teams are experimental, use significantly more tokens than one session, and token use scales with the number of teammates. Source: https://code.claude.com/docs/en/agent-teams, checked 2026-11-21.
- An Anthropic blog post names signals for sub-agents: ten or more files to explore, or three or more independent pieces of work. Source: https://claude.com/blog/subagents-in-claude-code, checked 2026-11-21.
- The same post recommends a fresh sub-agent that "does not see our previous discussion" for unbiased review, and a clear scope and return format in each brief. Source: https://claude.com/blog/subagents-in-claude-code, checked 2026-11-21.
- The same post says three parallel sub-agents "generally finish the task in less time", and that a single session is cleaner for sequential, dependent work. Source: https://claude.com/blog/subagents-in-claude-code, checked 2026-11-21.

### S5. Anthropic, "Building multi-agent systems: When and how to use them" (article, 2026-01-23)
- The article says to start with the simplest approach; outside three cases, "the coordination costs typically exceed the benefits". Source: https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them, checked 2026-11-21.
- The three cases are context protection, parallelization and specialization. Source: https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them, checked 2026-11-21.
- The article states that "multi-agent implementations typically use 3-10x more tokens than single-agent approaches for equivalent tasks". Source: https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them, checked 2026-11-21.
- The article states that "The primary benefit of parallelization is thoroughness, not speed", and that multi-agent systems often take longer in total. Source: https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them, checked 2026-11-21.
- The article says to split work by context, not by type of work: "Work should only be split when context can be truly isolated". Source: https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them, checked 2026-11-21.
- The article describes a verification sub-agent that gets the artifact, clear success criteria and tools, and needs no knowledge of how the artifact was made. Source: https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them, checked 2026-11-21.
- The article names a failure of the verifier, "early victory": it runs a few checks and declares success; the fix is concrete criteria, negative tests and explicit instructions. Source: https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them, checked 2026-11-21.

### S6. Anthropic, "Effective context engineering for AI agents" (engineering post, 2025-09-29)
- Each sub-agent "returns only a condensed, distilled summary of its work (often 1,000-2,000 tokens)" while the main agent keeps the plan. Source: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents, checked 2026-11-21.
- The post says sub-agents fit complex research and analysis where "parallel exploration pays dividends". Source: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents, checked 2026-11-21.
- The post describes structured note-taking: the agent writes notes outside the context window, such as a NOTES.md file, and reads them again after a context reset. Source: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents, checked 2026-11-21.
- The post states the cost of retrieval at run time: it is slower than pre-computed data, and an agent with poor guidance can waste context on dead ends. Source: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents, checked 2026-11-21.

### S7. Anthropic, prompting guides for current models
- For research, the guide says to define success criteria and to "verify information across multiple sources"; it gives no number of sources. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices, checked 2026-11-21.
- For complex research, the sample prompt asks for several competing hypotheses, confidence levels in progress notes, regular self-critique of the approach and plan, and a hypothesis tree or research notes file. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices, checked 2026-11-21.
- The guide warns that current models can start sub-agents where a direct approach is sufficient, and gives a prompt that limits delegation to parallel work, isolated context or independent workstreams. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices, checked 2026-11-21.
- The guide for Claude Fable 5.2 says the high effort level suits research and long unattended runs, and the low effort level suits high-volume work such as fast sub-agents. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2, checked 2026-11-21.
- The same guide reports good results with Claude Fable 5.2 as planner and orchestrator for other models, and says sub-agents can be a large part of the session cost. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2, checked 2026-11-21.
- The same guide says a sub-agent tool description must state the cost of a sub-agent, when delegation is worth it, and how to brief a sub-agent. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2, checked 2026-11-21.
- The same guide says to review and remove standing instructions that tell the model to delegate, when the model delegates too much. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2, checked 2026-11-21.
- The same guide says that at the two highest effort levels the model used sub-agents to review its own work in a coding product. Source: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2, checked 2026-11-21.

### S8. OpenAI, deep research: launch post, API cookbooks and current web search guide
- The launch post describes deep research as one model that plans and runs a multi-step path with browser and Python tools, for 5 to 30 minutes. Source: https://openai.com/index/introducing-deep-research/, checked 2026-11-21.
- The launch post states limits: the tool can hallucinate, "may struggle with distinguishing authoritative information from rumors", and shows weak confidence calibration. Source: https://openai.com/index/introducing-deep-research/, checked 2026-11-21.
- The launch post says the tool is very compute intensive, and that results improve when the model browses and thinks more. Source: https://openai.com/index/introducing-deep-research/, checked 2026-11-21.
- The API cookbook says the research model "will not ask for additional context or fill in missing information"; the developer must add clarifying questions or a prompt rewrite before the run. Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api, checked 2026-11-21.
- The cookbook uses a small model (gpt-4.1) for the clarifying and rewriting steps. Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api, checked 2026-11-21.
- The clarifying prompt asks for the 3-6 questions that most reduce ambiguity, and forbids invented preferences. Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api, checked 2026-11-21.
- The rewriting prompt asks for maximum specificity, no unwarranted assumptions, the output format, and primary sources such as the original paper or the official site. Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api, checked 2026-11-21.
- Citations come back as annotations with a start and end index, a title and a URL; each intermediate step (reasoning, search call, code call) can be inspected in the response. Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api, checked 2026-11-21.
- A second cookbook builds a four-agent pipeline: a triage agent, a clarifying agent, an instruction agent and a research agent; the two intake agents use gpt-4o-mini. Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api_agents, checked 2026-11-21.
- The second cookbook says not to use deep research for "trivial fact lookups, simple Q&A, or short-form chat". Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api_agents, checked 2026-11-21.
- Both cookbooks carry the notice that the recipe "is archived and may reference outdated models or APIs". Source: https://developers.openai.com/cookbook/examples/deep_research_api/introduction_to_deep_research_api, checked 2026-11-21.
- The old deep research guide URL now redirects to a page with the title "Web search"; that page recommends a reasoning model with the web search tool, high or xhigh reasoning and background mode for multi-step research. Source: https://developers.openai.com/api/docs/guides/deep-research, checked 2026-11-21.
- The web search page says to show inline citations as clickable links, and offers a separate list of all sources that the model consulted. Source: https://developers.openai.com/api/docs/guides/deep-research, checked 2026-11-21.

### S9. OpenAI, "A practical guide to building agents" (PDF guide)
- The guide states that "Our general recommendation is to maximize a single agent's capabilities first". Source: https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf, checked 2026-11-21.
- The guide gives two reasons to split into several agents: prompts with many conditional branches, and tools that overlap. Source: https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf, checked 2026-11-21.
- The guide names two multi-agent patterns: a manager that calls specialized agents as tools, and peers that hand off to each other. Source: https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf, checked 2026-11-21.
- The guide says to build the prototype "with the most capable model for every task to establish a performance baseline", then to try smaller models. Source: https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf, checked 2026-11-21.
- The guide names two triggers for human intervention: failure thresholds and high-risk actions. Source: https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf, checked 2026-11-21.
- The guide lists common exit conditions for a run: tool calls, a structured output, errors, or a maximum number of turns. Source: https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf, checked 2026-11-21.

### S10. OpenAI, Codex sub-agents docs
- Local Codex clients start sub-agents only when the user asks or when instructions in AGENTS.md or a skill request it. Source: https://learn.chatgpt.com/docs/agent-configuration/subagents.md, checked 2026-11-21.
- The docs give two reasons for sub-agents: noisy output buries useful information, and "performance degrades as the chat fills up with less relevant details". Source: https://learn.chatgpt.com/docs/agent-configuration/subagents.md, checked 2026-11-21.
- The docs say sub-agents fit read-heavy work such as exploration, tests, triage and summaries, and that parallel writes can conflict. Source: https://learn.chatgpt.com/docs/agent-configuration/subagents.md, checked 2026-11-21.
- The docs recommend a standard model for agents that plan and check their work, a small model for "fast, narrowly scoped agents", and high reasoning effort for reviewer agents. Source: https://learn.chatgpt.com/docs/agent-configuration/subagents.md, checked 2026-11-21.
- The docs state that "subagent workflows consume more tokens than comparable single-agent runs". Source: https://learn.chatgpt.com/docs/agent-configuration/subagents.md, checked 2026-11-21.

### S11. Google, Gemini Deep Research API docs
- The docs offer two agents: Deep Research for speed, and Deep Research Max for maximum comprehensiveness. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- With collaborative planning on, the agent returns a proposed plan first; the user reviews, changes or approves it over several turns before research starts. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- After a run, the user can ask follow-up questions on the same interaction without a new run. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- The docs recommend that the user review the citations to verify the sources. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- The docs recommend a prompt rule for missing data: "explicitly state they are projections or unavailable rather than estimating". Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- The docs state a maximum research time of 60 minutes, and that most tasks complete within 20 minutes. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- The docs estimate about $1 to $3 per task for Deep Research and about $3 to $7 for Deep Research Max. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- The docs warn about hidden instructions in files and web pages, and about sensitive internal data when the agent can also browse the web. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.
- The docs say Deep Research fits analyst work such as literature reviews and due diligence, and standard models fit chat and extraction. Source: https://aistudio.google.com/docs/deep-research, checked 2026-11-21.

### S12. Google Research, "Towards a science of scaling agent systems" (blog post, 2026-01-28)
- The study evaluated 180 agent configurations: five architectures, three model families (OpenAI, Google, Anthropic) and four benchmarks. Source: https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/, checked 2026-11-21.
- On a parallel task (Finance-Agent), centralized coordination improved performance by 80.9% over one agent. Source: https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/, checked 2026-11-21.
- On a sequential task (PlanCraft), each multi-agent variant decreased performance by 39-70%. Source: https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/, checked 2026-11-21.
- Independent agents amplified errors 17.2x; a central orchestrator held this to 4.4x because it checks results before they spread. Source: https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/, checked 2026-11-21.
- The coordination overhead grows as a task needs more tools. Source: https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/, checked 2026-11-21.
- A model built on task properties such as tool count and decomposability picked the best architecture for 87% of unseen configurations. Source: https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/, checked 2026-11-21.

### S13. Google Research, "Accelerating scientific breakthroughs with an AI co-scientist" (blog post, 2025-02-19)
- The system uses specialized agents (Generation, Reflection, Ranking, Evolution, Proximity, Meta-review) under a Supervisor agent that assigns work and allocates resources. Source: https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/, checked 2026-11-21.
- The system parses the research goal into a research plan configuration before the agents start. Source: https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/, checked 2026-11-21.
- Hypotheses are generated by debate, criticized by a reflection agent, compared in ranking tournaments and then refined. Source: https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/, checked 2026-11-21.
- The scientist gives the goal, can give seed ideas, and gives feedback in natural language. Source: https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/, checked 2026-11-21.
- The post states that the tournament rating "is not based on an independent ground truth", and lists literature review, factuality checking and cross-checks with external tools as areas to improve. Source: https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/, checked 2026-11-21.
- The system is built on Gemini 2.0. Source: https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/, checked 2026-11-21.

### S14. Google Research, "Deep researcher with test-time diffusion" (blog post, 2025-09-19)
- The agent has three stages: research plan, iterative search with a question sub-agent and an answer sub-agent, and final report. Source: https://research.google/blog/deep-researcher-with-test-time-diffusion/, checked 2026-11-21.
- The agent writes a draft report first; the draft steers the next search questions, and new answers revise the draft or verify its content. Source: https://research.google/blog/deep-researcher-with-test-time-diffusion/, checked 2026-11-21.
- Each stage makes several answer variants; an LLM judge scores them and gives feedback, the variants are revised, then merged. Source: https://research.google/blog/deep-researcher-with-test-time-diffusion/, checked 2026-11-21.
- The revision loop stops at a maximum number of iterations or when the agent decides that no more revision is necessary. Source: https://research.google/blog/deep-researcher-with-test-time-diffusion/, checked 2026-11-21.
- The post reports a 74.5% win rate against OpenAI's deep research on a long-form report benchmark; it reports no token cost or absolute latency. Source: https://research.google/blog/deep-researcher-with-test-time-diffusion/, checked 2026-11-21.
- The agent uses Gemini 2.5 Pro as its base model. Source: https://research.google/blog/deep-researcher-with-test-time-diffusion/, checked 2026-11-21.

### S15. Mistral, Deep Research docs
- The page marks Deep Research as a legacy feature that is being removed from the Chat tab. Source: https://docs.mistral.ai/le-chat/research-analysis/deep-research, checked 2026-11-21.
- The tool asks for more context when the query is too broad, then proposes a step-by-step plan before it searches. Source: https://docs.mistral.ai/le-chat/research-analysis/deep-research, checked 2026-11-21.
- The user can add, remove or reorder plan steps, and then starts the research. Source: https://docs.mistral.ai/le-chat/research-analysis/deep-research, checked 2026-11-21.
- The report has inline citations and a separate list of every source used. Source: https://docs.mistral.ai/le-chat/research-analysis/deep-research, checked 2026-11-21.

### S16. Microsoft staff blog on a deep research agent (borderline: Microsoft Tech Community, 2025-07-21, not official guidance)
- The design has a lead researcher that plans and merges, three sub-researchers with different temperature settings, a credibility critic, a report writer, a reflection critic and a citation agent. Source: https://techcommunity.microsoft.com/blog/azure-ai-services-blog/-/4435256, checked 2026-11-21.
- The post gives no stop rule and no method for the credibility check. Source: https://techcommunity.microsoft.com/blog/azure-ai-services-blog/-/4435256, checked 2026-11-21.
- A sample run took about seven minutes and cost about $1.3; the post suggests fewer parallel sub-researchers to cut cost. Source: https://techcommunity.microsoft.com/blog/azure-ai-services-blog/-/4435256, checked 2026-11-21.

## Follow-ups
- Which check step do the sources support best for a research run: a verifier with a fresh context, agents that try to disprove each other, or a citation pass?
- No maker source gives a minimum number of sources per claim. Do the other survey areas give one?
- No maker source gives a rule to look at earlier research first. Do the other survey areas give one?
- Do the 2025 numbers for sub-agent counts and the model split hold for current models? The current prompting guides reverse some of that advice.
- Where does the human gate go: before the run (questions or plan approval), after the run (result review), or both?
- The glossary term "Effort" clashes with the makers' term "effort level". Which word does the research skill use for the model setting?

## Next action
None.
