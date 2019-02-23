+++
categories = ["Go"]
date = "2014-04-02"
description = ""
featured = "pic02.jpg"
featuredalt = ""
featuredpath = "date"
linktitle = ""
slug = "Introduction aux modeles Hugo"
title = "Introduction aux modèles (Hu)go"
type = ["posts","post"]
[ author ]
  name = "Michael Henderson"
+++

Hugo utilise l'excellente librairie [go][] [html/template][gohtmltemplate] pour
son moteur de modèles. c'est un moteur extrêmement léger qui offre un très petit
nombre de fonctions logiques. À notre expérience, c'est juste ce qu'il faut pour
créer un bon site web statique. Si vous avez déjà utilisé d'autre moteurs de
modèles pour différents langages ou frameworks, vous allez retrouver beaucoup de
similitudes avec les modèles go.

Ce document est une introduction sur l'utilisation de Go templates. La
[documentation go][gohtmltemplate] fourni plus de détails.

## Introduction aux modèles Go

Go templates fournit un langage de modèles très simple. Il adhère à la
conviction que les modèles ou les vues doivent avoir une logique des plus
élémentaires. L'une des conséquences de cette simplicité est que les modèles
seront plus rapides a être analysés.

Une caractéristique unique de Go templates est qu'il est conscient du contenu.
Les variables et le contenu va être nettoyé suivant le contexte d'utilisation.
Plus de détails sont disponibles dans la [documentation go][gohtmltemplate].

## Syntaxe basique

Les modèles en langage Go sont des fichiers HTML avec l'ajout de variables et
fonctions.

**Les variables Go et les fonctions sont accessibles avec {{ }}**


Accès à une variable prédéfinie "foo":

    {{ foo }}

**Les paramètres sont séparés par des espaces**

Appel de la fonction add avec 1 et 2 en argument**

    {{ add 1 2 }}

**Les méthodes et les champs sont accessibles par un point**

Accès au paramètre de la page "bar"

    {{ .Params.bar }}

**Les parenthèses peuvent être utilisées pour grouper des éléments ensemble**
```
{{ if or (isset .Params "alt") (isset .Params "caption") }} Caption {{ end }}
```

## Variables

Chaque modèle go a une structure (objet) mis à sa disposition. Avec Hugo, à
chaque modèle est passé soit une page, soit une structure de nœud, suivant quel
type de page vous rendez. Plus de détails sont disponibles sur la page des
[variables](/layout/variables).

Une variable est accessible par son nom.

    <title>{{ .Title }}</title>

Les variables peuvent également être définies et appelées.

    {{ $address := "123 Main St."}}
    {{ $address }}


## Functions

Go templace est livré avec quelques fonctions qui fournissent des
fonctionnalités basiques. Le système de Go template fourni également un
mécanisme permettant aux applications d'étendre les fonctions disponible. Les
[fonctions de modèle Hugo](/layout/functions) fourni quelques fonctionnalités
supplémentaires que nous espérons qu'elles seront utiles pour vos sites web.
Les functions sont appelées en utilisant leur nom suivi par les paramètres
requis séparés par des espaces. Des fonctions de modèles ne peuvent pas être
ajoutées sans recompiler Hugo.

**Exemple:**

    {{ add 1 2 }}

## Inclusions

Lorsque vous incluez un autre modèle, vous devez y passer les données qu'il sera
en mesure d'accèder. Pour passer le contexte actuel, pensez à ajouter un point.
La localisation du modèle sera toujours à partir du répertoire /layout/ dans
Hugo.

**Exemple:**

    {{ template "chrome/header.html" . }}


## Logique

Go templates fourni les itérations et la logique conditionnèle des plus basique.

### Itération

Comme en go, les modèles go utilisent fortement *range* pour itérer dans une
map, un array ou un slice. Les exemples suivant montre différentes façons
d'utiliser *range*

**Exemple 1: En utilisant le context**

    {{ range array }}
        {{ . }}
    {{ end }}

**Exemple 2: En déclarant un nom de variable**

    {{range $element := array}}
        {{ $element }}
    {{ end }}

**Exemple 2: En déclarant un nom de varialbe pour la clé et la valeur**

    {{range $index, $element := array}}
        {{ $index }}
        {{ $element }}
    {{ end }}

### Conditions

*If*, *else*, *with*, *or*, *&*, *and* fournissent la base pour la logique
conditionnelle avec Go templates. Comme *range*, chaque déclaration est fermé
avec `end`.

Go templates considère les valeurs suivante comme *false* :

* false
* 0
* tout array, slice, map ou chaine d'une longueur de zéro

**Exemple 1: If**

    {{ if isset .Params "title" }}<h4>{{ index .Params "title" }}</h4>{{ end }}

**Exemple 2: If -> Else**

    {{ if isset .Params "alt" }}
        {{ index .Params "alt" }}
    {{else}}
        {{ index .Params "caption" }}
    {{ end }}

**Exemple 3: And & Or**
```
{{ if and (or (isset .Params "title") (isset .Params "caption"))
    (isset .Params "attr")}}
```
**Exemple 4: With**

Une manière alternative d'écrire un "if" et de référencer cette même valeur est
d'utiliser "with". Cela permet de remplacer le contexte `.` par cet valeur et
saute le bloc si la variable est absente.

Le premier exemple peut être simplifié à ceci :

    {{ with .Params.title }}<h4>{{ . }}</h4>{{ end }}

**Exemple 5: If -> Else If**

    {{ if isset .Params "alt" }}
        {{ index .Params "alt" }}
    {{ else if isset .Params "caption" }}
        {{ index .Params "caption" }}
    {{ end }}

## *Pipes*

L'un des composants le plus puissant de Go templates est la capacité d'empiler
les action l'une après l'autre. Cela est fait en utilisant les *pipes*.
Empruntés aux *pipes* unix, le concept est simple. Chaque sortie de *pipeline*
devient l'entrée du *pipe* suivant.

À cause de la syntaxe très simple de Go templates, le *pipe* est essentiel pour
être capable d'enchainer les appels de fonctions. Une limitation des *pipes*
est qu'il ne peuvent fonctionner seulement avec une seule valeur et cette valeur
devient le dernier paramètre du prochain *pipeline*.

Quelques exemples simple devrait vous aider à comprendre comment utiliser les
*pipes*.

**Exemple 1 :**

    {{ if eq 1 1 }} Same {{ end }}

est identique à

    {{ eq 1 1 | if }} Same {{ end }}


Il semble étrange de placer le *if* à la fin, mais il fournit une bonne
illustration de la façon d'utiliser les tuyaux.

**Exemple 2 :**

    {{ index .Params "disqus_url" | html }}

Accès au paramètre de page nommé "disqus_url" et échappement du HTML

**Exemple 3 :**
```
{{ if or (or (isset .Params "title") (isset .Params "caption"))
    (isset .Params "attr")}}
Stuff Here
{{ end }}
```
Peut être réécrit en

```
{{  isset .Params "caption" | or isset .Params "title" |
    or isset .Params "attr" | if }}
Stuff Here
{{ end }}
```

## Contexte (alias. le point)

Le concept le plus facilement négligé pour comprendre les modèles go est que
{{ . }} fait toujours référence au contexte actuel. Dans le plus haut niveau de
votre modèle, ce sera l'ensemble des données mis à votre disposition. Dans une
itération, ce sera la valeur de l'élément actuel. Enfin, dans une boucle, le
contexte change. . ne fera plus référence aux données disponibles dans la page
entière. Si vous avez besoin y d'accèder depuis l'intérieur d'une boucle, il est
judicieux d'y définir comme variable au lieu de dépendre du contexte.

**Exemple:**
```
{{ $title := .Site.Title }}
{{ range .Params.tags }}
<li> <a href="{{ $baseurl }}/tags/{{ . | urlize }}">
    {{ . }}</a> - {{ $title }} </li>
{{ end }}
```

Notez que, une fois que nous sommes entrés dans la boucle, la valeur de
{{ . }} a changée. Nous avons défini une variable en dehors de la boucle, afin
d'y avoir accès dans la boucle.

# Les Paramètres d'Hugo

Hugo fournit l'option de passer des valeurs au modèle depuis la configuration du
site, ou depuis les métadonnées de chaque partie du contenu. Vous pouvez définir
n'importe quelle valeur de n'importe quel type (supporté par votre section
liminaire / format de configuration) et les utiliser comme vous le souhaitez
dans votre modèle.

## Utiliser les paramètres de contenu (page)

Dans chaque partie du contenu, vous pouvez fournir des variables pour être
utilisées par le modèle. Cela se passe dans la
[section liminaire](/content/front-matter).

Un exemple de cela est utilisé par ce site de documentation. La plupart des
pages bénéficient de la présentation de la table des matières. Quelques fois,
la table des matières n'a pas beaucoup de sens. Nous avons défini une variable
dans notre section liminaire de quelques pages pour désactiver la table des
matières.

Ceci est un exemple de section liminaire :

```
---
title: "Permalinks"
date: "2013-11-18"
aliases:
  - "/doc/permalinks/"
groups: ["extras"]
groups_weight: 30
notoc: true
---
```

Ceci est le code correspondant dans le modèle :

      {{ if not .Params.notoc }}
        <div id="toc" class="well col-md-4 col-sm-6">
        {{ .TableOfContents }}
        </div>
      {{ end }}



## Utiliser les paramètres de site (config)

Dans votre configuration de plus haut niveau (ex `config.yaml`), vous pouvez
définir des paramètres de site, dont les valeurs vous seront accessibles.

Pour les instances, vous pourriez délarer :

```yaml
params:
  CopyrightHTML: "Copyright &#xA9; 2013 John Doe. All Rights Reserved."
  TwitterUser: "spf13"
  SidebarRecentLimit: 5
```

Avec un pied de page, vous devriez déclarer un `<footer>` qui est affiché
seulement si le paramètre `CopyrightHTML` est déclaré, et si il l'est, vous
devriez le déclarer comme HTML-safe, afin d'éviter d'échapper les entités HTML.
Cela vous permettra de le modifier facilement dans votre configuration au lieu
de le chercher dans votre modèle.

```
{{if .Site.Params.CopyrightHTML}}<footer>
<div class="text-center">{{.Site.Params.CopyrightHTML | safeHtml}}</div>
</footer>{{end}}
```
Une alternative au "if" et d'appeler la même valeur est d'utiliser "with". Cela
modifiera le contexte et passera le bloc si la variable est absente :

```
{{with .Site.Params.TwitterUser}}<span class="twitter">
<a href="https://twitter.com/{{.}}" rel="author">
<img src="/images/twitter.png" width="48" height="48" title="Twitter: {{.}}"
 alt="Twitter"></a>
</span>{{end}}
```

Enfin, si vous souhaitez extraire des "constantes magiques" de vos mises en
page, vous pouvez le faire comme dans l'exemple suivant :

```
<nav class="recent">
  <h1>Recent Posts</h1>
  <ul>{{range first .Site.Params.SidebarRecentLimit .Site.Recent}}
    <li><a href="{{.RelPermalink}}">{{.Title}}</a></li>
  {{end}}</ul>
</nav>
```


[go]: <http://golang.org/>
[gohtmltemplate]: <http://golang.org/pkg/html/template/>
