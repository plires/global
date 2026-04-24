# Skill Registry — jglobal

Generated: 2026-04-20

## User Skills

| Skill | Trigger |
|-------|---------|
| branch-pr | When creating a pull request, opening a PR, or preparing changes for review |
| go-testing | When writing Go tests, using teatest, or adding test coverage |
| issue-creation | When creating a GitHub issue, reporting a bug, or requesting a feature |
| judgment-day | Parallel adversarial review — when code review or quality check is needed |
| n8n-code-javascript | Writing JavaScript in n8n Code nodes |
| n8n-code-python | Writing Python in n8n Code nodes |
| n8n-expression-syntax | Writing/fixing n8n expressions with {{}} syntax |
| n8n-mcp-tools-expert | Using n8n-mcp MCP tools — consult before any n8n-mcp tool call |
| n8n-node-configuration | Configuring n8n node parameters and operations |
| n8n-validation-expert | Interpreting n8n validation errors and warnings |
| n8n-workflow-patterns | Designing n8n workflow architecture and patterns |
| skill-creator | Creating new AI agent skills |

## Project Conventions

No project-level CLAUDE.md or agents.md found.

## Compact Rules

### branch-pr
- Always create an issue before creating a PR (issue-first enforcement)
- PR title: imperative mood, under 70 chars
- PR body: Summary (bullets) + Test plan (checklist) + Claude Code attribution

### issue-creation
- Issue-first: create issues before PRs, never reference non-existent issues
- Use labels: bug, enhancement, question, documentation

### judgment-day
- Launch two independent blind judge sub-agents simultaneously
- Synthesize findings after both return — do NOT let one influence the other

## Stack Context (jglobal)

- **React 19 + Vite 6 (SWC)** — JSX only, no TypeScript
- **Path alias**: `@` → `src/`
- **Styling**: Bootstrap 5 + per-component CSS files
- **State**: Context API
- **Routing**: React Router DOM 7
- **No test runner** — Strict TDD Mode unavailable
