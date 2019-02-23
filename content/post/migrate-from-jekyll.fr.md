+++
categories = ["Hugo", "Jekyll"]
date = "2014-03-10"
description = ""
featured = ""
featuredalt = ""
featuredpath = ""
linktitle = ""
slug = "Migrer vers Hugo depuis Jekyll"
title = "Migrer vers Hugo depuis Jekyll"
type = ["posts","post"]
[ author ]
  name = "Hugo Authors"
+++

## Déplacez le contenu statique vers `static`
Jekyll a une règle comme quoi tout répertoire qui ne commence pas par `_` sera
copié tel-quel dans le répertoire `_site`. Hugo garde tout le contenu statique
dans le répertoire `static`. Vous devez donc déplacer tout ce type de contenu
là-dedans. Avec Jekylll, l'arborescence ressemblant à ceci :

    ▾ <root>/
        ▾ images/
            logo.png
<!--more-->
doit devenir

    ▾ <root>/
        ▾ static/
            ▾ images/
                logo.png

En outre, vous allez devoir déplacer tous les fichiers présents à la racine vers
le répertoire `static`.

## Créez votre configuration Hugo
Hugo peut lire votre fichier de configuration au format JSON, YAML et TOML. Hugo
supporte également les paramètres de configuration. Plus d'informations sur la
[documentation de configuration Hugo](/overview/configuration/)

## Définiez votre répertoire de publication sur `_site`
La valeur par défaut pour Jekyll est d'utiliser le répertoire `_site` pour
publier le contenu. Pour Hugo, le répertoire de publication est `public`. Si,
comme moi, vous avez [lié `_site` vers un sous-module git sur la branche
`gh-pages`](http://blog.blindgaenger.net/generate_github_pages_in_a_submodule.ht
ml), vous allez vouloir avoir quelques alternatives :

1. Changez votre lien du sous-module `gh-pages` pour pointer sur public au lieu
de `_site` (recommendé).

        git submodule deinit _site
        git rm _site
        git submodule add -b gh-pages
            git@github.com:your-username/your-repo.git public

2. Ou modifiez la configuration de Hugo pour utiliser le répertoire `_site` au
lieu de `public`.

        {
            ..
            "publishdir": "_site",
            ..
        }

## Convertir un thème Jekyll pour Hugo
C'est la majeure partie du travail. La documentation est votre ami.
Vous devriez vous référer à [la documentation des thèmes de Jekyll]
(http://jekyllrb.com/docs/templates/) si vous devez vous rafraîchir la mémoire
sur la façon dont vous avez construit votre blog et [les thèmes de Hugo]
(/layout/templates/) pour apprendre la manière de faire sur Hugo.

Pour vous donner un point de référence, la conversion du thème pour
[heyitsalex.net](http://heyitsalex.net/) ne m'a pris que quelques heures.

## Convertir les extensions Jekyll vers des shortcodes Hugo
Jekyll support les [extensions](http://jekyllrb.com/docs/plugins/); Hugo lui a
les [shortcodes](/doc/shortcodes/). C'est assez banal les porter.

### Implémentation
Comme exemple, j'utilise une extension pour avoir un [`image_tag`](https://githu
b.com/alexandre-normand/alexandre-normand/blob/74bb12036a71334fdb7dba84e073382fc
06908ec/_plugins/image_tag.rb) presonnalisé pour générer les images avec une
légende sur Jekyll. J'ai vu que Hugo implémente un shortcode qui fait exactement
la même chose.

Extension Jekyll :
```
module Jekyll
  class ImageTag < Liquid::Tag
    @url = nil
    @caption = nil
    @class = nil
    @link = nil
    // Patterns
    IMAGE_URL_WITH_CLASS_AND_CAPTION =
    IMAGE_URL_WITH_CLASS_AND_CAPTION_AND_LINK =
        /(\w+)(\s+)((https?:\/\/|\/)(\S+))(\s+)"(.*?)"(\s+)->
        ((https?:\/\/|\/)(\S+))(\s*)/i
    IMAGE_URL_WITH_CAPTION = /((https?:\/\/|\/)(\S+))(\s+)"(.*?)"/i
    IMAGE_URL_WITH_CLASS = /(\w+)(\s+)((https?:\/\/|\/)(\S+))/i
    IMAGE_URL = /((https?:\/\/|\/)(\S+))/i
    def initialize(tag_name, markup, tokens)
      super
      if markup =~ IMAGE_URL_WITH_CLASS_AND_CAPTION_AND_LINK
        @class   = $1
        @url     = $3
        @caption = $7
        @link = $9
      elsif markup =~ IMAGE_URL_WITH_CLASS_AND_CAPTION
        @class   = $1
        @url     = $3
        @caption = $7
      elsif markup =~ IMAGE_URL_WITH_CAPTION
        @url     = $1
        @caption = $5
      elsif markup =~ IMAGE_URL_WITH_CLASS
        @class = $1
        @url   = $3
      elsif markup =~ IMAGE_URL
        @url = $1
      end
    end
    def render(context)
      if @class
        source = "<figure class='#{@class}'>"
      else
        source = "<figure>"
      end
      if @link
        source += "<a href=\"#{@link}\">"
      end
      source += "<img src=\"#{@url}\">"
      if @link
        source += "</a>"
      end
      source += "<figcaption>#{@caption}</figcaption>" if @caption
      source += "</figure>"
      source
    end
  end
end
Liquid::Template.register_tag('image', Jekyll::ImageTag)
```

Écrite en tant que shortcode Hugo:
```
<!-- image -->
<figure {{ with .Get "class" }}class="{{.}}"{{ end }}>
    {{ with .Get "link"}}<a href="{{.}}">{{ end }}
        <img src="{{ .Get "src" }}"
            {{ if or (.Get "alt") (.Get "caption") }}
                alt="{{ with .Get "alt"}}
                        {{.}}
                     {{else}}
                        {{ .Get "caption" }}
                     {{ end }}"
               {{ end }} />
    {{ if .Get "link"}}</a>{{ end }}
    {{ if or (or (.Get "title") (.Get "caption")) (.Get "attr")}}
    <figcaption>{{ if isset .Params "title" }}
        {{ .Get "title" }}{{ end }}
        {{ if or (.Get "caption") (.Get "attr")}}<p>
        {{ .Get "caption" }}
        {{ with .Get "attrlink"}}<a href="{{.}}"> {{ end }}
            {{ .Get "attr" }}
        {{ if .Get "attrlink"}}</a> {{ end }}
        </p> {{ end }}
    </figcaption>
    {{ end }}
</figure>
<!-- image -->
```

### Utilisation
J'ai simplement changé :
```
{% image
    full http://farm5.staticflickr.com/4136/4829260124_57712e570a_o_d.jpg
    "One of my favorite touristy-type photos. I secretly waited for the
    good light while we were "having fun" and took this. Only regret: a
    stupid pole in the top-left corner of the frame I had to clumsily get
    rid of at post-processing."
    ->http://www.flickr.com/photos/alexnormand/4829260124/in/
        set-72157624547713078/ %}
```

pour cela (cet exemple utilise une version légèrement étendue nommée `fig`,
différente de la `figure` intégrée) :

```
{{%/* fig class="full"
    src="http://farm5.staticflickr.com/4136/4829260124_57712e570a_o_d.jpg"
    title="One of my favorite touristy-type photos. I secretly waited for the
    good light while we were having fun and took this. Only regret: a stupid
    pole in the top-left corner of the frame I had to clumsily get rid of at
    post-processing."
    link="http://www.flickr.com/photos/alexnormand/4829260124/in/
            set-72157624547713078/" */%}}
```
Comme bonus, les paramètres nommés des shortcodes sont plus lisibles.

## Touches finales
### Corriger le contenu
Suivant le nombre de modifications que vous avez effectué sur chaque articles
avec Jekyll, cette étape requierra plus ou moins d'efforts. Il n'y a pas de
règles rigoureuses ici, si ce n'est que `hugo server --watch` est votre ami.
Testez vos modifications et corrigez les erreurs au besoin.

### Nettoyez le tout
Vous voudrez sûrement supprimer votre configuration Jekyll maintenant que tout
est fini. Exact, pensez à supprimer tout ce qui est inutilisé.

## Un exemple pratique
[Hey, it's Alex](http://heyitsalex.net/) a été migré de Jekyll vers Hugo en
moins de temps qu'une journée père enfant. Vous pouvez trouver toutes les
modification en regardant ce [diff](https://github.com/alexandre-normand/alexand
re-normand/compare/869d69435bd2665c3fbf5b5c78d4c22759d7613a...b7f6605b1265e83b4b
81495423294208cc74d610).
