# Mohamed Waseem Portfolio Website

This is a static HTML/CSS/JavaScript portfolio website. It is ready to upload to GitHub Pages.

## Folder structure

```
waseem_portfolio_updated/
├── index.html
├── style.css
├── script.js
├── resume.pdf
├── images/
│   ├── profile-placeholder.svg
│   ├── ambathale-training.jpg
│   ├── divor-training.svg
│   ├── hydroponic-dashboard.jpg
│   ├── hydroponic-architecture.jpg
│   ├── armyworm-project.jpg
│   └── future-project.svg
└── docs/
    ├── Ambathale_Industrial_Training_Report.pdf
    ├── Armyworm_Pest_Detection_Project_Report.pdf
    ├── Hydroponic_Cultivation_System_Project_Report.pdf
    └── Divor_Industrial_Training_Report_ADD_LATER.txt
```

## How to add your profile image

1. Put your photo inside the `images` folder.
2. Rename it as `profile.jpg`.
3. In `index.html`, replace:

```html
<img src="images/profile-placeholder.svg" alt="Profile placeholder for Mohamed Waseem" />
```

with:

```html
<img src="images/profile.jpg" alt="Mohamed Waseem profile photo" />
```

## How to upload to GitHub

1. Open your GitHub repository.
2. Upload all files and folders from inside this portfolio folder.
3. Your repo should contain `index.html` in the main/root area.
4. Go to Settings -> Pages.
5. Select branch `main` and folder `/root`.
6. Save and wait a few minutes.

## How to add a new project

1. Copy one full `<article class="project-card card"> ... </article>` section from `index.html`.
2. Paste it inside the `project-grid` section.
3. Change the project title, image, description, tools, report link and GitHub link.
4. Add the project report PDF inside the `docs` folder.
5. Add the project image inside the `images` folder.

## Divor training report note

The portfolio includes the Divor training details in the webpage. The full Divor training PDF should be added later as:

```
docs/Divor_Industrial_Training_Report.pdf
```

Then update the Divor training link in `index.html`.
