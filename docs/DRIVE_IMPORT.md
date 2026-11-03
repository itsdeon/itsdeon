# Drive portfolio import

Matched portfolio material imported into this repository. Native Google documents are preserved as readable text; HIAI's Markdown is preserved as Markdown. Embedded code blocks were extracted without changing their implementation. Original project descriptions are historical documentation, not verification of features, deployments, or completeness.

## Project inventory

| Folder | Available material | Status |
| --- | --- | --- |
| [stem-arcade-quest](../projects/stem-arcade-quest) | Project document and extracted code scaffold | Unvalidated partial scaffold |
| [youth-stem-symposium-labs](../projects/youth-stem-symposium-labs) | Project document and extracted code scaffold | Unvalidated partial scaffold |
| [arcade-sports-physics-suite](../projects/arcade-sports-physics-suite) | Project document | Documentation; implementation pending |
| [brain3-agent-architecture](../projects/brain3-agent-architecture) | Project document | Documentation; implementation pending |
| [HIAI](../projects/HIAI) | Project document | Documentation; implementation pending |
| [codemender-lab](../projects/codemender-lab) | Project document | Documentation; implementation pending |

## Scaffold limitations

- STEM Arcade Quest: the setup kit lists a Vite config but does not supply its contents. Its checkpoint method is not called in the recovered game loop; the strict TypeScript configuration may reject unused members. It is not a verified playable build.
- Youth STEM labs: four React components and package metadata were recovered. App.tsx, main.tsx, index.html, and tsconfig.json contents are missing from the source document.
- The recovered deployment workflow is nested inside the STEM scaffold as reference material; it is not activated for this portfolio repository. Its npm ci step requires a lockfile that was not present.
- ADK-v1 and HIAI packaging specifications reference Mac-local workspaces; those references do not include the underlying implementation files.
- Other projects mentioned in the profile (including media-splitter, Gapp, PromptDJ, GovMap, Music Playlist Generator, and Multi-Speaker Podcast) have references in the imported documents; their standalone source files were not located in the matching Drive searches.

## Source documents

- stem-arcade-quest: https://drive.google.com/file/d/1p9XxKKyZyAn7udj_yQw4Ntoy0xLvzos1hyVZrpRvQYg/view
- youth-stem-symposium-labs: https://drive.google.com/file/d/1ma5D-j_viyYooJBonyQr2-a4q_ulh_Wb7SIs-UNtr70/view
- arcade-sports-physics-suite: https://drive.google.com/file/d/1oa51kXUlcgGP0wLnfwjsinhgtN4CZer_2sqMH6vA3ns/view
- brain3-agent-architecture: https://drive.google.com/file/d/1PpRHbdKiTy5JWj2bqmTGdAiR-qIN0b4wogxjGZlu1XU/view
- HIAI: https://drive.google.com/file/d/1CoxbSIiX4dNF89-Pm6UyHSHF_AmB6fcD/view
- codemender-lab: https://drive.google.com/file/d/1H23GC-X-Z3B25rPluLA2FpCECkdAhfrsRqX7jBX4EO8/view
- blueprint: https://drive.google.com/file/d/1RbNLazWMs-31B8DUw8dZcN7YcO3mOTS8jcr2camS8bY/view
- setup: https://drive.google.com/file/d/13ihmlD7zfNaJP2QU6qwHrRwOto2Opwp0yc4B9E-hpeI/view

The original Drive documents remain unchanged. Links in archived documents may point to private Drive/AI Studio resources or proposed standalone repositories. Use the current profile README and project folders for browsing the material included here.
