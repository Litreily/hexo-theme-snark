# hexo-theme-snark

An hexo theme with lofter style, it's very simple and cool!

## Features

- Code Highlight (Use Google Prettify)
- Comment System (Only Valine as for now)
- Common pages
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

### Optional

You may need install some hexo plugins as below

- `npm install hexo-generator-feed --save` for RSS
- `npm install hexo-generator-search --save` for local search
- `npm install hexo-generator-sitemap --save` for sitemap

You can add your customized css to `source/css/customize.scss`, then it will be load to `head` of blog

### Comment System

- [Valine](https://valine.js.org/) please modify valine parameters in `_config.xml`
