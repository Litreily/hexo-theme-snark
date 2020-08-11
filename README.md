# hexo-theme-snark

An hexo theme with lofter style, it's very simple and cool!

## Features

- Baidu Analytics
- Code Highlight (Use Google Prettify)
- Comment System (Only Valine as for now)
- General pages
  - Archives
  - Categories
  - Tags
- Copyright Notice
- Fancybox image viewer
- Fontawesome v4.7.0 icons
- Local Search
- Suitable for screens of different sizes

## Installation

``` sh
git clone https://github.com/litreily/hexo-theme-snark.git themes/snark
npm install hexo-renderer-pug --save
npm install hexo-renderer-sass --save
```

then disable default highlight in blog/_config.yml

``` yml
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```

### Add General Pages

For beginner of `hexo`, you may need to know how to create general pages like `archives`, `categories`, `tags` and so on. If you already know that, please skip this step.

For `linux`/`Mac` user or `windows` user with `wsl`, you can `cd` to blog root path and run below commands.

```bash
for page in about archives categories tags
do
    [ ! -d source/$page ] && {
        mkdir source/$page
        echo -e '---\nlayout: page\ntitle: '$page'\n---\n' > source/$page/index.md
    }
done
```

running result as below (hidden something not related).

```bash
$ tree -L 2 source
source
├── _posts
├── about
│   └── index.md
├── archives
│   └── index.md
├── categories
│   └── index.md
├── index.md
└── tags
    └── index.md
```

For other `windows` user, you need to create new folder under `blog` path with `cmd` or explorer.

```cmd
cd source
mkdir about archives categories tags
```

Then create `index.md` for each pages, for examples, create file `source/archives/index.md` and write below info into it.

```md
---
layout: page
title: archives
---
```

the `title` should changed to others like `categories`, `about` and `tags`. 

### Optional

You may need install some hexo plugins as below

- `npm install hexo-generator-feed --save` for RSS
- `npm install hexo-generator-search --save` for local search
- `npm install hexo-generator-sitemap --save` for sitemap

You can add your customized css to `source/css/customize.scss`, then it will be load to `head` of blog

### Comment System

- [Valine](https://valine.js.org/) please modify valine parameters in `_config.xml`
