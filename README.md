# hexo-theme-snark

An hexo theme with lofter style

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