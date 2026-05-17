# Gemini CLI Project Context: UI/UX Pro Max Skill

## Project Overview
This directory contains the `ui-ux-pro-max` skill for Gemini CLI, a comprehensive design intelligence tool and searchable database. It provides high-quality UI/UX recommendations, color palettes, typography, and implementation guidelines across various technology stacks.

The project is structured as a Python-based search engine utilizing BM25 for indexing and retrieving design-related information from a collection of CSV datasets.

### Main Technologies
- **Python 3**: Core logic and search engine.
- **BM25 (Best Matching 25)**: Ranking function used for keyword-based search.
- **CSV**: Data storage for design guidelines, styles, and stacks.
- **Markdown**: Output format for design systems and persistence.

## Directory Structure
- `.gemini/skills/ui-ux-pro-max/`: Root of the skill.
  - `SKILL.md`: Detailed documentation on how to use the skill and its workflow.
  - `scripts/`: Python implementation logic.
    - `search.py`: CLI entry point for searches and design system generation.
    - `core.py`: Search engine core (BM25 implementation).
    - `design_system.py`: Logic for generating and persisting design systems.
  - `data/`: CSV datasets for various domains (styles, colors, ux, etc.).
    - `stacks/`: Technology-specific implementation guidelines (e.g., `react.csv`, `html-tailwind.csv`).

## Key Commands

### Prerequisites
Ensure Python 3 is installed:
```bash
python3 --version
```

### Searching the Database
Search a specific domain (e.g., `ux`, `style`, `color`):
```bash
python3 .gemini/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
```

### Generating a Design System
This is the recommended starting point for any UI/UX task:
```bash
python3 .gemini/skills/ui-ux-pro-max/scripts/search.py "<product_type> <keywords>" --design-system
```

### Persisting a Design System (Master + Overrides Pattern)
To save recommendations for consistent usage across sessions:
```bash
python3 .gemini/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```
- Creates `design-system/[project]/MASTER.md` as the source of truth.
- Use `--page "name"` to create specific overrides in `design-system/[project]/pages/name.md`.

### Stack-Specific Guidelines
Get implementation best practices for a specific framework (default is `html-tailwind`):
```bash
python3 .gemini/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack <stack_name>
```
Available stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`.

## Development & Contribution Guidelines

### Data Management
- Design data is stored in `.gemini/skills/ui-ux-pro-max/data/*.csv`.
- To update recommendations, edit the relevant CSV files.
- Ensure consistent column structures when adding new datasets.

### Coding Standards
- **Python**: Follow PEP 8 guidelines.
- **UI/UX Excellence**: Always prioritize SVG icons over emojis, ensure stable hover states, and maintain high contrast in both light and dark modes as outlined in `SKILL.md`.

### Adding New Stacks
- Add a new CSV file in `.gemini/skills/ui-ux-pro-max/data/stacks/`.
- Update `AVAILABLE_STACKS` in `core.py` to include the new stack.
