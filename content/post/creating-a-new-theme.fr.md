+++
categories = ["Hugo"]
date = "2014-09-28"
description = "Apprenez comment créer un thème Hugo"
featured = "pic01.jpg"
featuredalt = ""
featuredpath = "date"
linktitle = ""
title = "Création d'un nouveau thème"
slug = "Creation d'un nouveau theme"
type = "post"
+++

## Introduction

Ce tutoriel vous montrera comment créer un thème simple pour Hugo. Je suppose que vous êtes familier avec HTML, la ligne de commande bash, et que vous êtes à l'aise avec Markdown pour formater le contenu. Je vais expliquer comment Hugo utilise des modèles et comment vous pouvez organiser vos modèles pour créer un thème. Je ne couvrirai pas l'utilisation de CSS pour styliser votre thème.

Nous allons commencer par créer un nouveau site avec un modèle très basique. Ensuite, nous ajouterons quelques pages et des publications. Avec de petites variations, vous pourrez créer de nombreux types de sites web.

Dans ce tutoriel, les commandes que vous entrez commenceront par l'invite "$". La sortie suivra. Les lignes qui commencent par "#" sont des commentaires que j'ai ajoutés pour expliquer un point. Lorsque je montre les mises à jour d'un fichier, le ":wq" sur la dernière ligne signifie qu'il faut sauvegarder le fichier.

Voici un exemple :

```
## Ceci est un commentaire
$ echo ceci est une commande
ceci est une commande

## édition d'un fichier
$vi foo.md
+++
date = "2014-09-28"
title = "Création d'un nouveau thème"
+++

Contenu du fichier
:wq

## L'afficher
$ cat foo.md
+++
date = "2014-09-28"
title = "Création d'un nouveau thème"
+++

Contenu du fichier
$
```


## Quelques définitions

Il y a quelques concepts que vous devez comprendre avant de créer un thème.

### Skins

Les skins sont les fichiers responsables de l'apparence de votre site. C'est le CSS qui contrôle les couleurs et les polices, c'est le Javascript qui détermine les actions et les réactions. Ce sont aussi les règles que Hugo utilise pour transformer votre contenu en HTML que le site montrera aux visiteurs.

Vous avez deux façons de créer un skin. Le moyen le plus simple est de le créer dans le répertoire ```layouts/```. Si vous le faites, vous n'avez pas à vous soucier de configurer Hugo pour le reconnaître. Le premier endroit où Hugo recherchera pour les règles et les fichiers se trouve dans le répertoire ```layouts/``` afin de trouver toujours le skin.

Votre deuxième choix est de le créer dans un sous-répertoire du répertoire ```themes/```. Si vous le faites, vous devez toujours indiquer à Hugo où chercher le skin. C'est un travail supplémentaire, cependant, alors, pourquoi s'embêter avec ça?

La différence entre la création d'un skin dans ```layouts/``` et la création dans ```themes/``` est très subtile. Un skin dans ```layouts/``` ne peut pas être personnalisé sans mettre à jour les modèles et les fichiers statiques sur lesquels il est construit. Un skin créé dans ```themes/```, d'autre part, peut être et facilite son utilisation par d'autres personnes.

Le reste de ce tutoriel appellera un skin créé dans le répertoire ``` thèmes/ ```, un thème.

Notez que vous pouvez utiliser ce tutoriel pour créer un skin dans le répertoire ```layouts/``` si vous le souhaitez. La principale différence sera que vous n'aurez pas besoin de mettre à jour le fichier de configuration du site pour utiliser un thème.

### La page d'accueil

La page d'accueil, ou la page de destination, est la première page que beaucoup de visiteurs d'un site voient. C'est le fichier index.html dans le répertoire racine du site Web. Puisque Hugo écrit des fichiers dans le répertoire public/, notre page d'accueil est public/index.html.

### Fichier de configuration du site

Lorsque Hugo s'exécute, il recherche un fichier de configuration qui contient des paramètres qui remplacent les valeurs par défaut pour l'ensemble du site. Le fichier peut utiliser TOML, YAML ou JSON. Je préfère utiliser TOML pour mes fichiers de configuration. Si vous préférez utiliser JSON ou YAML, vous devrez traduire mes exemples. Vous devrez également modifier le nom du fichier puisque Hugo utilise l'extension pour déterminer comment le traiter.

Hugo traduit les fichiers Markdown en HTML. Par défaut, Hugo s'attend à trouver des fichiers Markdown dans votre répertoire ```content/``` and les modèles dans le répertoire ```themes/```. Il créera les fichiers HTML dans votre répertoire ```public/```. Vous pouvez le modifier en spécifiant d'autres emplacements dans le fichier de configuration.

### Le contenu

Le contenu est stocké dans des fichiers texte contenant deux sections. La première section est la "section liminaire", qui contient les méta-informations sur le contenu. La deuxième section contient le Markdown qui sera converti en HTML.

#### Section liminaire

La section liminaire est une information sur le contenu. Comme le fichier de configuration, il peut être écrit en TOML, YAML ou JSON. Contrairement au fichier de configuration, Hugo n'utilise pas l'extension du fichier pour connaître le format. Il recherche des marqueurs pour signaler le type. TOML est entouré de "`+++`", YAML par "`---`", et JSON est enfermé dans des accolades. Je préfère utiliser TOML, donc vous devrez traduire mes exemples si vous préférez YAML ou JSON.

L'information dans la section liminaire est transmise au modèle avant que le contenu ne soit rendu en HTML.

#### Markdown

Le contenu est écrit dans Markdown qui facilite la création du contenu. Hugo exécute le contenu via un moteur Markdown pour créer le code HTML qui sera écrit dans le fichier de sortie.

### Modèles

Hugo utilise des modèles pour rendre le contenu en HTML. Les modèles sont un pont entre le contenu et la présentation. Les règles du modèle définissent quel contenu est publié, où il est publié et comment il sera rendu au fichier HTML. Le modèle guide la présentation en spécifiant le style à utiliser.

Il existe trois types de modèles: simple, liste et partiel. Chaque type prend un peu de contenu comme entrée et le transforme en fonction des commandes du modèle.

Hugo utilise sa connaissance du contenu pour trouver le modèle a utiliser pour rendre le contenu. S'il ne peut pas trouver un modèle qui correspond exactement au contenu, il changera de niveau et recherchera à partir de là. Il continuera à le faire jusqu'à ce qu'il trouve un modèle correspondant ou ne dispose plus de modèles à essayer. S'il ne peut pas trouver un modèle, il utilisera le modèle par défaut pour le site.

Veuillez noter que vous pouvez utiliser la section liminaire pour influencer le choix de modèles de Hugo.

#### Modèle simple

Un modèle simple est utilisé pour rendre un seul contenu. Par exemple, un article ou une publication serait un seul élément de contenu et utiliserait un modèle simple.

#### Modèle de liste

Un modèle de liste rend un groupe de contenu connexe. Cela pourrait être un résumé des publications récentes ou de tous les articles d'une catégorie. Les modèles de liste peuvent contenir plusieurs groupes.

Le modèle de la page d'accueil est un type spécial de modèle de liste. Hugo suppose que la page d'accueil de votre site servira de portail pour le reste du contenu sur le site.

#### Modèle partiel

Un modèle partiel est un modèle qui peut être inclus dans d'autres modèles. Les modèles partiels doivent être appelés en utilisant la commande de modèle "partial". Ils sont très utiles pour utiliser des comportement commun. Par exemple, votre site peut avoir une bannière que toutes les pages utilisent. Au lieu de copier le texte de la bannière dans chaque modèle simple et de liste, vous pouvez créer une partie avec la bannière. De cette façon, si vous décidez de modifier la bannière, il vous suffit de changer le modèle partiel.

## Créer un nouveau site

Utilisons Hugo pour créer un nouveau site Web. Je suis un utilisateur Mac, alors je vais créer le mien dans mon répertoire personnel, dans le dossier Sites. Si vous utilisez Linux, vous devrez d'abord créer le dossier.

La commande "new site" créera un squelette d'un site. Il vous donnera la structure de répertoire de base et un fichier de configuration utilisable.

```
$ hugo new site ~/Sites/zafta
$ cd ~/Sites/zafta
$ ls -l
total 8
drwxr-xr-x  7 quoha  staff  238 Sep 29 16:49 .
drwxr-xr-x  3 quoha  staff  102 Sep 29 16:49 ..
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 archetypes
-rw-r--r--  1 quoha  staff   82 Sep 29 16:49 config.toml
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 content
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 layouts
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 static
$
```

Consultez le répertoire content/ pour confirmer qu'il est vide.

Les autres répertoires (archetypes/, layouts/ et static/) sont utilisés lors de la personnalisation d'un thème. C'est un sujet pour un tutoriel différent, alors ignorez-les pour l'instant.

### Générer le HTML pour le nouveau site

Éxécuter la commande `hugo` sans options permet de lire tout le contenu disponible et de générer les fichiers HTML. Il copiera également tous les fichiers statiques (tout ce qui n'est pas du contenu). Comme nous avons un site vide, il ne fera pas grand chose, mais il le fera très rapidement.

```
$ hugo --verbose
INFO: 2014/09/29 Using config file: config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
WARN: 2014/09/29 Unable to locate layout: [index.html _default/list.html
                                            _default/single.html]
WARN: 2014/09/29 Unable to locate layout: [404.html]
0 draft content
0 future content
0 pages created
0 tags created
0 categories created
in 2 ms
$
```

Le drapeau "`--verbose` "donne des informations supplémentaires qui seront utiles lorsque nous créerons le modèle. Chaque ligne de sortie qui commence par "INFO:" ou "WARN:" est présente car nous avons utilisé ce drapeau. Les lignes qui commencent par "WARN:" sont des messages d'avertissement. Nous les examinerons plus tard.

Nous pouvons vérifier que la commande a fonctionné en regardant de nouveau le répertoire.

```
$ ls -l
total 8
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 archetypes
-rw-r--r--  1 quoha  staff   82 Sep 29 16:49 config.toml
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 content
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 layouts
drwxr-xr-x  4 quoha  staff  136 Sep 29 17:02 public
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 static
$
```

Voyez-vous ce nouveau répertoire public/ ? Hugo y a placé tout le contenu généré. Lorsque vous êtes prêt à publier votre site Web, c'est l'endroit idéal pour commencer. Pour l'instant, nous allons simplement confirmer que nous avons ce que nous attendons pour un site sans contenu.

```
$ ls -l public
total 16
-rw-r--r--  1 quoha  staff  416 Sep 29 17:02 index.xml
-rw-r--r--  1 quoha  staff  262 Sep 29 17:02 sitemap.xml
$
```

Hugo a créé deux fichiers XML, ce qui est standard, mais il n'y a pas de fichiers HTML.


### Tester le nouveau site

Vérifiez que vous pouvez exécuter le serveur Web intégré. Cela réduira considérablement votre cycle de développement si vous le faites. Commencez en exécutant la commande "server". Si vous réussissez, vous verrez une sortie similaire à la suivante:

```
$ hugo server --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
WARN: 2014/09/29 Unable to locate layout: [index.html _default/list.html
                                            _default/single.html]
WARN: 2014/09/29 Unable to locate layout: [404.html]
0 draft content
0 future content
0 pages created
0 tags created
0 categories created
in 2 ms
Serving pages from /Users/quoha/Sites/zafta/public
Web Server is available at http://localhost:1313
Press Ctrl+C to stop
```

Connectez-vous à l'URL répertorié (c'est sur la ligne qui commence par "Web Server"). Si tout fonctionne correctement, vous devriez obtenir une page qui montre ce qui suit:

```
index.xml
sitemap.xml
```

C'est une liste de votre répertoire public/. Hugo n'a pas créé une page d'accueil car notre site n'a aucun contenu. Quand il n'y a pas de fichier index.html dans un répertoire, le serveur répertorie les fichiers dans le répertoire, ce que vous devriez voir dans votre navigateur.

Revenons encore à ces avertissements.

```
WARN: 2014/09/29 Unable to locate layout: [index.html _default/list.html
                                            _default/single.html]
WARN: 2014/09/29 Unable to locate layout: [404.html]
```

Ce deuxième avertissement est plus facile à expliquer. Nous n'avons pas créé un modèle à utiliser pour générer des "erreurs de page non trouvées". Le message 404 est un sujet pour un tutoriel distinct.

À propos du premier avertissement. C'est pour la page d'accueil. Vous pouvez le dire parce que la première mise en page qu'il recherchait était "index.html". Cela n'est utilisé que par la page d'accueil.

J'aime que le drapeau verbose demande à Hugo de lister les fichiers qu'il recherche. Pour la page d'accueil, ce sont index.html, _default/list.html et _default/single.html. Il y a des règles que nous aborderons plus loin qui expliquent les noms et les chemins. Pour l'instant, n'oubliez pas que Hugo n'a pas pu trouver un modèle pour la page d'accueil et il vous l'a dit.

À ce stade, vous avez une installation de travail et un site sur lequel nous pouvons développer. Tout ce qui reste, c'est d'ajouter du contenu et un thème pour l'afficher.

## Créer un nouveau thème

Hugo ne fournit pas de thème par défaut. Il y a quelques-uns disponibles (j'ai compté une douzaine lorsque j'ai installé Hugo pour la première fois) et Hugo contient une commande pour créer de nouveaux thèmes.

Nous allons créer un nouveau thème appelé "zafta". Étant donné que le but de ce didacticiel est de vous montrer comment remplir les fichiers pour extraire votre contenu, le thème ne contiendra aucun CSS. En d'autres termes, moche mais fonctionnel.

Tous les thèmes utilisent des philosophies différentes sur le contenu et la mise en page. Les philosophies fortes permettent de créer un thème facilement, mais différentes philosophies rendrons l'utilisation du thème plus difficile. Par exemple, Zafta utilise "post" au lieu de "blog". Lorsque vous construisez un thème, envisagez d'utiliser les termes que d'autres thèmes utilisent.


### Créer un squelette

Utilisez la commande "new" de Hugo pour créer le squelette d'un thème. Cela crée la structure du répertoire et place les fichiers vides à remplir.

```
$ hugo new theme zafta

$ ls -l
total 8
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 archetypes
-rw-r--r--  1 quoha  staff   82 Sep 29 16:49 config.toml
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 content
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 layouts
drwxr-xr-x  4 quoha  staff  136 Sep 29 17:02 public
drwxr-xr-x  2 quoha  staff   68 Sep 29 16:49 static
drwxr-xr-x  3 quoha  staff  102 Sep 29 17:31 themes

$ find themes -type f | xargs ls -l
-rw-r--r--  1 quoha  staff  1081 Sep 29 17:31 themes/zafta/LICENSE.md
-rw-r--r--  1 quoha  staff     0 Sep 29 17:31 themes/zafta/archetypes/default.md
-rw-r--r--  1 quoha  staff     0 Sep 29 17:31 themes/zafta/layouts/_default/
                                                list.html
-rw-r--r--  1 quoha  staff     0 Sep 29 17:31 themes/zafta/layouts/_default/
                                                single.html
-rw-r--r--  1 quoha  staff     0 Sep 29 17:31 themes/zafta/layouts/index.html
-rw-r--r--  1 quoha  staff     0 Sep 29 17:31 themes/zafta/layouts/partials/
                                                footer.html
-rw-r--r--  1 quoha  staff     0 Sep 29 17:31 themes/zafta/layouts/partials/
                                                header.html
-rw-r--r--  1 quoha  staff    93 Sep 29 17:31 themes/zafta/theme.toml
$
```

Le squelette comprend des modèles (les fichiers se terminant par .html), un fichier de licence, une description de votre thème (le fichier theme.toml) et un archétype vide.

Prenez une minute pour remplir les fichiers theme.toml et LICENSE.md. Ils sont facultatifs, mais si vous allez distribuer votre thème, il dit au monde qui féliciter (ou blâmer). Il est également agréable de déclarer la licence afin que les gens sachent comment ils peuvent utiliser le thème.

```
$ vi themes/zafta/theme.toml
author = "michael d henderson"
description = "Un thème minimal fonctionnel"
license = "MIT"
name = "zafta"
source_repo = ""
tags = ["tags", "categories"]
:wq

## éditez également themes/zafta/LICENSE.md et changez
## l'emplacement où il est écrit "YOUR_NAME_HERE"
```

Notez que les fichiers du squelette du thème sont vides. Ne vous inquiètez pas, nous allons remédier à cela rapidement.

```
$ find themes/zafta -name '*.html' | xargs ls -l
-rw-r--r--  1 quoha  staff  0 Sep 29 17:31 themes/zafta/layouts/_default/
                                            list.html
-rw-r--r--  1 quoha  staff  0 Sep 29 17:31 themes/zafta/layouts/_default/
                                            single.html
-rw-r--r--  1 quoha  staff  0 Sep 29 17:31 themes/zafta/layouts/
                                            index.html
-rw-r--r--  1 quoha  staff  0 Sep 29 17:31 themes/zafta/layouts/partials/
                                            footer.html
-rw-r--r--  1 quoha  staff  0 Sep 29 17:31 themes/zafta/layouts/partials/
                                            header.html
$
```



### Mettre à jour le fichier de configuration pour utiliser notre thème

Maintenant que nous avons un thème sur lequel travailler, il est judicieux d'ajouter le nom du thème au fichier de configuration. Ceci est facultatif, car vous pouvez toujours ajouter "-t zafta" à toutes vos commandes. J'aime mettre le fichier de configuration car j'aime les lignes de commande plus courtes. Si vous ne le placez pas dans le fichier de configuration ou ne le spécifiez pas sur la ligne de commande, vous n'utiliserez pas le modèle que vous attendez.

Modifiez le fichier pour ajouter le thème, ajoutez un titre pour le site et spécifiez que tout notre contenu utilisera le format TOML.

```
$ vi config.toml
theme = "zafta"
baseurl = ""
languageCode = "en-us"
title = "zafta - totally refreshing"
MetaDataFormat = "toml"
:wq

$
```

### Générer le site

Maintenant que nous avons un thème vide, générez le site à nouveau.

```
$ hugo --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/themes/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
0 pages created
0 tags created
0 categories created
in 2 ms
$
```

Avez-vous remarqué que la sortie est différente? Le message d'avertissement pour la page d'accueil a disparu et nous avons une ligne d'information supplémentaire indiquant que Hugo est en train de se synchroniser avec le répertoire du thème.

Vérifions le répertoire public/ pour voir ce que Hugo a généré.

```
$ ls -l public
total 16
drwxr-xr-x  2 quoha  staff   68 Sep 29 17:56 css
-rw-r--r--  1 quoha  staff    0 Sep 29 17:56 index.html
-rw-r--r--  1 quoha  staff  407 Sep 29 17:56 index.xml
drwxr-xr-x  2 quoha  staff   68 Sep 29 17:56 js
-rw-r--r--  1 quoha  staff  243 Sep 29 17:56 sitemap.xml
$
```

Notez quatre choses:

1. Hugo a créé une page d'accueil. C'est le fichier public/index.html.
2. Hugo a créé un répertoire css/.
3. Hugo a créé un répertoire js/.
4. Hugo a affirmé avoir créé 0 pages. Il a créé un fichier et copié sur des fichiers statiques, mais n'a pas créé de pages. C'est parce qu'il considère une «page» comme un fichier créé directement à partir d'un fichier de contenu. Il ne compte pas les choses comme les fichiers index.html qu'il crée automatiquement.

#### La page d'accueil

Hugo prend en charge plusieurs types de modèles différents. La page d'accueil est spéciale car elle possède son propre type de modèle et son propre fichier modèle. Le fichier, layouts/index.html, sert à générer le HTML pour la page d'accueil. La documentation de Hugo indique que c'est le seul modèle requis, mais cela dépend. Le message d'avertissement d'Hugo montre qu'il recherche trois modèles différents:

```
WARN: 2014/09/29 Unable to locate layout: [index.html _default/list.html
                                            _default/single.html]
```

S'il ne trouve aucun de ces derniers, il saute complètement la création de la page d'accueil. Nous avons remarqué que lorsque nous avons construit le site sans avoir un thème installé.

Lorsque Hugo a créé notre thème, il a créé un modèle de page d'accueil vide. Maintenant, lorsque nous construisons le site, Hugo trouve le modèle et l'utilise pour générer le HTML pour la page d'accueil. Comme le fichier modèle est vide, le fichier HTML est également vide. Si le modèle avait eu des règles, Hugo les aurait utilisé pour générer la page d'accueil.

```
$ find . -name index.html | xargs ls -l
-rw-r--r--  1 quoha  staff  0 Sep 29 20:21 ./public/index.html
-rw-r--r--  1 quoha  staff  0 Sep 29 17:31 ./themes/zafta/layouts/index.html
$
```

#### La magie du statique

Hugo fait deux choses lors de la génération du site. Il utilise des modèles pour transformer le contenu en HTML et copie des fichiers statiques dans le site. Contrairement au contenu, les fichiers statiques ne sont pas transformés. Ils sont copiés exactement comme ils sont.

Hugo suppose que votre site utilisera à la fois CSS et JavaScript, de sorte qu'il crée des répertoires sur votre thème pour les retenir. Rappelez-vous les philosophies ? Eh bien, la philosophie de Hugo est que vous allez stocker votre CSS dans un répertoire nommé css/ et votre JavaScript dans un répertoire nommé js/. Si vous n'aimez pas cela, vous pouvez modifier les noms de répertoire dans votre répertoire de thème ou même les supprimer complètement. Hugo est assez agréable pour offrir son avis, puis bien se comporter si vous êtes en désaccord.

```
$ find themes/zafta -type d | xargs ls -ld
drwxr-xr-x  7 quoha  staff  238 Sep 29 17:38 themes/zafta
drwxr-xr-x  3 quoha  staff  102 Sep 29 17:31 themes/zafta/archetypes
drwxr-xr-x  5 quoha  staff  170 Sep 29 17:31 themes/zafta/layouts
drwxr-xr-x  4 quoha  staff  136 Sep 29 17:31 themes/zafta/layouts/_default
drwxr-xr-x  4 quoha  staff  136 Sep 29 17:31 themes/zafta/layouts/partials
drwxr-xr-x  4 quoha  staff  136 Sep 29 17:31 themes/zafta/static
drwxr-xr-x  2 quoha  staff   68 Sep 29 17:31 themes/zafta/static/css
drwxr-xr-x  2 quoha  staff   68 Sep 29 17:31 themes/zafta/static/js
$
```

## Le cycle de développement d'un site

Lorsque vous travaillez sur un thème, vous modifiez le répertoire du thème, reconstruisez le site et vérifiez vos modifications dans le navigateur. Hugo rend cela très simple:

1. Purgez le répertoire public/.
2. Exécutez le serveur Web intégré en mode surveillance.
3. Ouvrez votre site dans un navigateur.
4. Mettre à jour le thème.
5. Regardez la fenêtre de votre navigateur pour voir les changements.
6. Revenez à l'étape 4.

Je vais vous donner un conseil: ne jamais travailler sur un thème sur un site en production. Toujours travailler sur une copie de votre site. Effectuez des modifications sur votre thème, testez-les, puis copiez-les sur votre site. Pour plus de sécurité, utilisez un outil comme Git pour garder un historique de révision de votre contenu et de votre thème. Croyez-moi quand je dis qu'il est trop facile de perdre vos changements.

Consultez le site Hugo principal pour obtenir de l'information sur l'utilisation de Git avec Hugo.

### Purger le répertoire public/

Lors de la génération du site, Hugo va créer de nouveaux fichiers et mettre à jour les existants dans le répertoire ```public /```. Il ne supprimera pas les fichiers qui ne sont plus utilisés. Par exemple, les fichiers créés dans le mauvais répertoire ou avec le mauvais titre resteront. Si vous les laissez, vous pourriez les confondre plus tard. Je recommande de nettoyer votre site avant de le générer.

Remarque: Si vous utilisez un SSD, vous devez ignorer cela. L'agitation sur un SSD peut être coûteuse.

### L'option watch de Hugo

L'option "`--watch`" de Hugo va surveiller les changements dans le répertoire content/ et les répertoire de vos thème afin de regénérer le site automatiquement.

### Rchargement en direct

Le serveur web intégré de Hugo supporte les rechargements en direct. Lorsque qu'une page est sauvegardée sur le serveur, le navigateur est amené à rafraîchir la page. Habituellement, cela se produit avant que vous puissiez dire "Woah, c'est incroyable."


### Commandes de développement

Utilisez les commandes suivantes comme base de votre workflow.

```
## Purger les anciens fichiers. Hugo recréera le répertoire public.
##
$ rm -rf public
##
## Lancer Hugo en mode de surveillance
##
$ hugo server --watch --verbose
```

L'exemple de sortie suivant montre que Hugo detecte une modification sur le modèle de la page d'accueil. Après l'avoir générée, le serveur web va automatiquement recharger la page. Je l'ai dit précédement, c'est incroyable.

```
$ rm -rf public
$ hugo server --watch --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/themes/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
0 pages created
0 tags created
0 categories created
in 2 ms
Watching for changes in /Users/quoha/Sites/zafta/content
Serving pages from /Users/quoha/Sites/zafta/public
Web Server is available at http://localhost:1313
Press Ctrl+C to stop
INFO: 2014/09/29 File System Event: ["/Users/quoha/Sites/zafta/themes/zafta/
                                        layouts/index.html": MODIFY|ATTRIB]
Change detected, rebuilding site

WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
0 pages created
0 tags created
0 categories created
in 1 ms
```

## Mettre à jour le modèle de la page d'accueil

La page d'accueil est l'une des quelques pages spéciales que Hugo crée automatiquement. Comme mentionné précédemment, il recherche l'un des trois fichiers dans le répertoire de mise en page (layout/) du thème:

1. index.html
2. _default/list.html
3. _default/single.html

Nous pourrions mettre à jour l'un des modèles par défaut, mais une bonne décision de conception est de mettre à jour le modèle le plus spécifique disponible. Ce n'est pas une règle difficile et rapide (en fait, nous ne la respecterons pas plusieurs fois dans ce tutoriel), mais c'est une bonne généralisation.

### Créer une page d'accueil statique

À l'heure actuelle, cette page est vide car nous n'avons aucun contenu et nous n'avons aucune logique dans le modèle. Changeons cela en ajoutant du texte au modèle.
```
$ vi themes/zafta/layouts/index.html
<!DOCTYPE html>
<html>
<body>
  <p>hugo dit bonjour!</p>
</body>
</html>
:wq

$
```

Générez le site web et vérifiez les résultats.

```
$ hugo --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/themes/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
0 pages created
0 tags created
0 categories created
in 2 ms

$ find public -type f -name '*.html' | xargs ls -l
-rw-r--r--  1 quoha  staff  78 Sep 29 21:26 public/index.html

$ cat public/index.html
<!DOCTYPE html>
<html>
<body>
  <p>hugo dit bonjour!</p>
</html>
```

#### Rechargement en direct

Note: Si vous avez lancé le serveur avec l'option `--watch`, vous verrez un contenu différent dans le fichier :

```
$ cat public/index.html
<!DOCTYPE html>
<html>
<body>
  <p>hugo dit bonjour!</p>
<script>document.write('<script src="http://'
        + (location.host || 'localhost').split(':')[0]
    + ':1313/livereload.js?mindelay=10"></'
        + 'script>')</script></body>
</html>
```

Lorsque vous utilisez `--watch`, le script de rechargement automatique est ajouté par Hugo. Renseignez-vous dans la documentation avec les termes *live reload* pour voir qu'est-ce qu'il fait et comment le désactiver.

### Créer une page d'accueil "dynamique"

"Une page d'accueil dynamique ?" Hugo est un générateur de site statique, cela paraît étrange à dire. Je veux dire que la page d'accueil reflète le contenu du site chaque fois que Hugo le regénère. Nous allons utiliser l'itération dans le modèle pour faire cela.

#### Créer un nouvel article

Maintenant que nous avons la page d'accueil générée avec un contenu statique, ajoutons du contenu au site. Nous allons lister ces articles sur la page d'accueil et sur leurs propre page également.

Hugo a une commande pour générer un squelette d'article, comme il le fait pour les sites et les thèmes.

```
$ hugo --verbose new post/permier.md
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 attempting to create  post/premier.md of post
INFO: 2014/09/29 curpath: /Users/quoha/Sites/zafta/themes/zafta/archetypes/
                            default.md
ERROR: 2014/09/29 Unable to Cast <nil> to map[string]interface{}

$
```

C'est pas bon, n'est-ce pas ?

La commande "new" utilise un archétype pour créer le fichier de l'article. Hugo crée un fichier d'archétype vide par défault, mais cela provoque une erreur lorsqu'il y a un thème. Pour moi, la solution était de créer un fichier d'archétype spécifiquement pour le type article.

```
$ vi themes/zafta/archetypes/post.md
+++
Description = ""
Tags = []
Categories = []
+++
:wq

$ find themes/zafta/archetypes -type f | xargs ls -l
-rw-r--r--  1 quoha  staff   0 Sep 29 21:53 themes/zafta/archetypes/default.md
-rw-r--r--  1 quoha  staff  51 Sep 29 21:54 themes/zafta/archetypes/post.md

$ hugo --verbose new post/premier.md
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 attempting to create  post/premier.md of post
INFO: 2014/09/29 curpath: /Users/quoha/Sites/zafta/themes/zafta/archetypes/
                            post.md
INFO: 2014/09/29 creating /Users/quoha/Sites/zafta/content/post/premier.md
/Users/quoha/Sites/zafta/content/post/premier.md created

$ hugo --verbose new post/second.md
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 attempting to create  post/second.md of post
INFO: 2014/09/29 curpath: /Users/quoha/Sites/zafta/themes/zafta/archetypes/
                            post.md
INFO: 2014/09/29 creating /Users/quoha/Sites/zafta/content/post/second.md
/Users/quoha/Sites/zafta/content/post/second.md created

$ ls -l content/post
total 16
-rw-r--r--  1 quoha  staff  104 Sep 29 21:54 premier.md
-rw-r--r--  1 quoha  staff  105 Sep 29 21:57 second.md

$ cat content/post/premier.md
+++
Categories = []
Description = ""
Tags = []
date = "2014-09-29T21:54:53-05:00"
title = "premier"

+++
Mon permier article

$ cat content/post/second.md
+++
Categories = []
Description = ""
Tags = []
date = "2014-09-29T21:57:09-05:00"
title = "second"

+++
Mon second article

$
```

Générez le site web et vérifiez le résultat.

```
$ rm -rf public
$ hugo --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/themes/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 found taxonomies: map[string]string{"category":"categories",
                                                    "tag":"tags"}
WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
2 pages created
0 tags created
0 categories created
in 4 ms
$
```

La sortie annonce qu'il a créé 2 pages. Ce sont nos nouveaux articles:

```
$ find public -type f -name '*.html' | xargs ls -l
-rw-r--r--  1 quoha  staff  78 Sep 29 22:13 public/index.html
-rw-r--r--  1 quoha  staff   0 Sep 29 22:13 public/post/premier/index.html
-rw-r--r--  1 quoha  staff   0 Sep 29 22:13 public/post/index.html
-rw-r--r--  1 quoha  staff   0 Sep 29 22:13 public/post/second/index.html
$
```
Les nouveaux fichiers sont vides parce que les modèles utilisé pour générer le contenu sont vides. La page d'accueil n'affiche pas non plus le nouveau contenu. Nous devons modifier les modèles pour ajouter les articles.

### Modèles de liste et simples

Avec Hugo, nous avons trois principaux types de modèles. Il y a le modèle de page d'accueil que nous avons édité précédement. Il est utilisé seulement pour la page d'accueil. Nous avons également le modèles simple qui sont utilisés pour générer du contenu simple. Et nous avons les modèles de liste qui sont utilisés pour grouper plusieurs contenus.


D'une manière générale, les modèles de liste sont nommés "list.html" et les modèles simples sont nommés "single.html".

### Ajouter du contenu sur la page d'accueil

La page d'accueil contiendra une liste d'articles. Modifions son modèle pour ajouter les articles que nous venons de créer. La logique dans le modèle s'éxecutera chaque fois que nous génèrerons notre site.

```
$ vi themes/zafta/layouts/index.html
<!DOCTYPE html>
<html>
<body>
  {{ range first 10 .Data.Pages }}
    <h1>{{ .Title }}</h1>
  {{ end }}
</body>
</html>
:wq

$
```

Hugo utilise le moteur de modèle de Go. Ce moteur analyse les fichiers de modèle pour y trouver des commandes qui sont spécifiées entre "{{" et "}}". Dans notre modèle, les commandes sont:

1. range
2. .Title
3. end

La commande "range" est un itérateur. Nous allons l'utiliser pour parcourir les dix premières pages. Chaque fichier HTML que Hugo crée est traité comme une page. Donc, boucler autour de la liste des pages examinera chaque fichier qui a été crée.

La commande ".Title" affiche la valeur de la variable "title". Hugo la récupère depuis la section liminaire dans la fichier Markdown.

La commande "end" signale la fin de l'itération. Le moteur retourne en haut de l'itération lorsque qu'il trouve "end". Tout ce qui est entre "range" et "end" est évalué chaque fois que le moteur passe par l'itération. Dans ce fichier, cela va afficher le titre des dix premières pages dans la sortie comme titre de niveau 1.

Il est utile de se rappeler de quelques variables, comme .Data, sont créées avant tout fichier de sortie. Hugo charge tout les fichiers de contenu dans la variable et donne une chance au modèle de procèder avant de créer les fichiers HTML.

Générez le site web et vérifiez le résultat.

```
$ rm -rf public
$ hugo --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/themes/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 found taxonomies: map[string]string{"tag":"tags",
                                                    "category":"categories"}
WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
2 pages created
0 tags created
0 categories created
in 4 ms
$ find public -type f -name '*.html' | xargs ls -l
-rw-r--r--  1 quoha  staff  94 Sep 29 22:23 public/index.html
-rw-r--r--  1 quoha  staff   0 Sep 29 22:23 public/post/premier/index.html
-rw-r--r--  1 quoha  staff   0 Sep 29 22:23 public/post/index.html
-rw-r--r--  1 quoha  staff   0 Sep 29 22:23 public/post/second/index.html
$ cat public/index.html
<!DOCTYPE html>
<html>
<body>

    <h1>second</h1>

    <h1>premier</h1>

</body>
</html>
$
```

Félicitation, la page d'accueil affiche le titre des deux articles. Les articles eux-même sont toujours vide, mais prenez un moment pour apprécier ce que nous avons effectué. Votre modèle génère maintenant des sorties dynamiquement. Croyez-le ou non, en insérant la commande "range" à l'intérieur de ces accolades, vous avez appris tout ce que vous devez savoir pour créer un thème. Tout ce qu'il reste vraiment est de comprendre quel modèle va être utilisé pour générer chaque fichier de contenu et de devenir familier avec les commandes du moteur de modèles.

Et, si c'est entièrement vrai, ce tutoriel devrai être plus court. Il y a quelques choses à savoir qui rendrons la création de nouveaux thèmes plus facile. Ne vous inquiétez pas, ca va bien se passer.

### Ajouter du contenu à l'article

Nous travaillons avec des articles, qui sont stockés dans le répertoire content/post/. Cela signifie que leur section est "post" (et si nous n'avons rien fait de travers, leur type est également "post").

Hugo utilise la section et le type pour définir le modèle pour chaque partie du contenu. Hugo va d'abord chercher un modèle qui correspond à la section ou au type. S'il n'arrive pas à en trouver un, il va alors chercher dans le répertoire _default/. Il y a quelques cas que nous allons couvrir lorsque nous travaillerons avec les catégories et les tags, mais pour le moment, nous supposerons que Hugo va essayer post/single.html, puis _default/single.html.

Maintenant que nous connaissons la règle de rechercher, regardons ce qui est mis à notre disposition actuellement:

```
$ find themes/zafta -name single.html | xargs ls -l
-rw-r--r--  1 quoha  staff  132 Sep 29 17:31 themes/zafta/layouts/_default/
                                                single.html
```
Nous pourrions créer un nouveau modèle, post/single.html, ou modifier le modèle par défaut. Comme nous n'utilisons actuellement aucun autre type de contenu, commençons par mettre à jour le modèle par défaut.

Sovenez-vous, tout contenu pour lequel nous n'avons pas créé de modèle utilisera ce modèle. Cela peut être bien ou mauvais. Mauvais parce que je sais que nous allons ajouter d'autres types de contenu et nous allons devoir annuler certaines des modifications que nous avons effectuées. Mais c'est bien parce que nous allons pouvoir voir directement les résultats. C'est également bien de démarrer ici car nous pouvons commencer à faire la mise en place basique du site. Comme nous ajouterons plus de contenu, nous remanierons ce fichier et déplacerons la logique ailleur. Hugo fait cela plutôt bien, donc nous accepterons le coût et procèderons.


#### Mise à jour du modèle

```
$ vi themes/zafta/layouts/_default/single.html
<!DOCTYPE html>
<html>
<head>
  <title>{{ .Title }}</title>
</head>
<body>
  <h1>{{ .Title }}</h1>
  {{ .Content }}
</body>
</html>
:wq

$
```

Générez le site web et vérifiez le résultat.

```
$ rm -rf public
$ hugo --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/themes/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 found taxonomies: map[string]string{"tag":"tags",
                                                    "category":"categories"}
WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
2 pages created
0 tags created
0 categories created
in 4 ms

$ find public -type f -name '*.html' | xargs ls -l
-rw-r--r--  1 quoha  staff   94 Sep 29 22:40 public/index.html
-rw-r--r--  1 quoha  staff  125 Sep 29 22:40 public/post/premier/index.html
-rw-r--r--  1 quoha  staff    0 Sep 29 22:40 public/post/index.html
-rw-r--r--  1 quoha  staff  128 Sep 29 22:40 public/post/second/index.html

$ cat public/post/premier/index.html
<!DOCTYPE html>
<html>
<head>
  <title>premier</title>
</head>
<body>
  <h1>premier</h1>
  <p>Mon premier article</p>

</body>
</html>

$ cat public/post/second/index.html
<!DOCTYPE html>
<html>
<head>
  <title>second</title>
</head>
<body>
  <h1>second</h1>
  <p>Mon second article</p>

</body>
</html>
$
```

Notez que les articles ont maintenant un contenu. Vous pouvez aller sur localhost:1313/post/premier pour vérifier.

### Lier du contenu

Les articles sont sur la page d'accueil. Ajoutons un lien d'ici vers l'article. Comme cela se trouve sur la page d'accueil, nous allons mettre à jour le modèle.

```
$ vi themes/zafta/layouts/index.html
<!DOCTYPE html>
<html>
<body>
  {{ range first 10 .Data.Pages }}
    <h1><a href="{{ .Permalink }}">{{ .Title }}</a></h1>
  {{ end }}
</body>
</html>
```

Générez le site web et vérifiez le résultat.

```
$ rm -rf public
$ hugo --verbose
INFO: 2014/09/29 Using config file: /Users/quoha/Sites/zafta/config.toml
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/themes/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 syncing from /Users/quoha/Sites/zafta/static/ to
    /Users/quoha/Sites/zafta/public/
INFO: 2014/09/29 found taxonomies: map[string]string{"tag":"tags",
                                                    "category":"categories"}
WARN: 2014/09/29 Unable to locate layout: [404.html theme/404.html]
0 draft content
0 future content
2 pages created
0 tags created
0 categories created
in 4 ms

$ find public -type f -name '*.html' | xargs ls -l
-rw-r--r--  1 quoha  staff  149 Sep 29 22:44 public/index.html
-rw-r--r--  1 quoha  staff  125 Sep 29 22:44 public/post/premier/index.html
-rw-r--r--  1 quoha  staff    0 Sep 29 22:44 public/post/index.html
-rw-r--r--  1 quoha  staff  128 Sep 29 22:44 public/post/second/index.html

$ cat public/index.html
<!DOCTYPE html>
<html>
<body>

    <h1><a href="/post/second/">second</a></h1>

    <h1><a href="/post/premier/">premier</a></h1>

</body>
</html>

$
```

### Créer une liste d'articles

Nous avons les articles affichés sur la page d'accueil et sur leur propre page. Nous avons également un fichier public/post/index.html qui est vide. Faisons en sorte qu'il liste tous les articles (pas seulement les dix premiers).

Nous devons décider quel modèle mettre à jour. Nous allons faire une liste, donc, cela doit être un modèle de liste. Regardons quels modèles de liste sont disponibles.

```
$ find themes/zafta -name list.html | xargs ls -l
-rw-r--r--  1 quoha  staff  0 Sep 29 17:31 themes/zafta/layouts/_default/
                                            list.html
```

Comme pour l'article seul, nous devons décider d'éditer _default/list.html ou de créer post/list.html. Nous n'avons toujours pas plusieurs types de contenu, alors restons cohérant et éditons le modèle de liste par défaut.

## Création d'une page de haut niveau

Ajoutons une page "à propos" et affichons la au plus haut niveau (à l'opposé d'un sous-niveau comme nous avons fait pour les articles).

La valeur par défaut de Hugo consiste à utiliser la structure du répertoire content/ pour guider l'emplacement du HTML généré dans le répertoire public/. Vérifions cela en créant une page "à propos" (about dans l'exemple) au plus haut niveau:

```
$ vi content/about.md
+++
title = "about"
description = "about this site"
date = "2014-09-27"
slug = "about time"
+++

## about us

i'm speechless
:wq
```

Générez le site web et vérifiez le résultat.

```
$ find public -name '*.html' | xargs ls -l
-rw-rw-r--  1 mdhender  staff   334 Sep 27 15:08 public/about-time/index.html
-rw-rw-r--  1 mdhender  staff   527 Sep 27 15:08 public/index.html
-rw-rw-r--  1 mdhender  staff   358 Sep 27 15:08 public/post/premier-post/
                                                    index.html
-rw-rw-r--  1 mdhender  staff     0 Sep 27 15:08 public/post/index.html
-rw-rw-r--  1 mdhender  staff   342 Sep 27 15:08 public/post/second-post/
                                                    index.html
```

Notez que la page n'a pas été crée au plus haut niveau. Ça a créé un sous répertoire nommé 'about-time'. Ce nom vient de notre slug. Hugo va l'utiliser pour nommer les contenu générés.

Autre chose : regardez la page d'accueil.

```
$ cat public/index.html
<!DOCTYPE html>
<html>
<body>
    <h1><a href="http://localhost:1313/post/theme/">
        creating a new theme</a></h1>
    <h1><a href="http://localhost:1313/about-time/">about</a></h1>
    <h1><a href="http://localhost:1313/post/second-post/">second</a></h1>
    <h1><a href="http://localhost:1313/post/premier-post/">first</a></h1>
<script>document.write('<script src="http://'
        + (location.host || 'localhost').split(':')[0]
		+ ':1313/livereload.js?mindelay=10"></'
        + 'script>')</script></body>
</html>
```

Notez que le liens vers "about" est listé avec les articles. Ce n'était l'effet désire, corrigeons donc cela d'abord.

```
$ vi themes/zafta/layouts/index.html
<!DOCTYPE html>
<html>
<body>
  <h1>articles</h1>
  {{ range first 10 .Data.Pages }}
    {{ if eq .Type "post"}}
      <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    {{ end }}
  {{ end }}

  <h1>pages</h1>
  {{ range .Data.Pages }}
    {{ if eq .Type "page" }}
      <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    {{ end }}
  {{ end }}
</body>
</html>
:wq
```

Générez le site web et vérifiez le résultat. La page d'accueil a deux sections, articles et pages, et chaque section contient le bon ensemble de lien

Mais la page "à propos" est toujours rendue dans about-time/index.html.

```
$ find public -name '*.html' | xargs ls -l
-rw-rw-r--  1 mdhender  staff    334 Sep 27 15:33 public/about-time/index.html
-rw-rw-r--  1 mdhender  staff    645 Sep 27 15:33 public/index.html
-rw-rw-r--  1 mdhender  staff    358 Sep 27 15:33 public/post/premier-post/
                                                    index.html
-rw-rw-r--  1 mdhender  staff      0 Sep 27 15:33 public/post/index.html
-rw-rw-r--  1 mdhender  staff    342 Sep 27 15:33 public/post/second-post/
                                                    index.html
```

Sachant que Hugo utilise le slug pour générer les noms des fichiers, la solution la plus simple serait de changer le slug. Utilisons la manière forte et changeons le lien permanent dans la configuration.

```
$ vi config.toml
[permalinks]
	page = "/:title/"
	about = "/:filename/"
```

Générez le site web et vérifiez que cela ne fonctionne pas. Hugo laisse le slug ou l'URL outrepasser l'option des liens permanents dans le fichier de configuration. Commentez le slug dans content/about.md, puis générez le site web pour qu'elle soit générée au bon endroit.

## Partager des modèles

Si vous avez suivi, vous avez sûrement remarqué que les articles ont un titre dans le navigateur et pas la page d'accueil. C'est parce que nous n'avons pas mis de titre dans le modèle de la page d'accueil (layout/index.html). C'est quelque chose de facile, mais utilisons une option différente.

Nous pouvons placer les parties communes dans un modèle partagé qui sera stocké dans le répertoire themes/zafta/layouts/partials/.

### Création du modèle partiel de l'entête et du pied de page

Avec Hugo, un modèle partiel est un modèle embelli. Normalement, un modèle fait référence à un chemin spécifique. Les modèles partiels sont différents. Hugo les recherche le long d'un chemin de recherche défini. Cela permet aux utilisateurs finaux de remplacer plus facilement la présentation du thème.

```
$ vi themes/zafta/layouts/partials/header.html
<!DOCTYPE html>
<html>
<head>
	<title>{{ .Title }}</title>
</head>
<body>
:wq

$ vi themes/zafta/layouts/partials/footer.html
</body>
</html>
:wq
```
### Modification du modèle de page d'accueil pour utiliser les modèles partiels

La différence notable entre un appel d'un modèle et celui d'un modèle partiel est le manque de chemin:

```
{{ template "theme/partials/header.html" . }}
```
versus
```
{{ partial "header.html" . }}
```

Les deux passent dans le contexte.

Changeons le modèle de la page d'accueil pour utiliser ces nouveaux modèles partiels.

```
$ vi themes/zafta/layouts/index.html
{{ partial "header.html" . }}

  <h1>articles</h1>
  {{ range first 10 .Data.Pages }}
    {{ if eq .Type "post"}}
      <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    {{ end }}
  {{ end }}

  <h1>pages</h1>
  {{ range .Data.Pages }}
    {{ if or (eq .Type "page") (eq .Type "about") }}
      <h2><a href="{{ .Permalink }}">{{ .Type }} -
        {{ .Title }} - {{ .RelPermalink }}</a></h2>
    {{ end }}
  {{ end }}

{{ partial "footer.html" . }}
:wq
```

Générez le site web et vérifiez le résultat. Le titre sur la page d'accueil est maintenant "your title here", qui de la variable "title" dans la fichier config.toml.

### Modification du modèle simple par défaut pour utiliser les modèles partiels

```
$ vi themes/zafta/layouts/_default/single.html
{{ partial "header.html" . }}

  <h1>{{ .Title }}</h1>
  {{ .Content }}

{{ partial "footer.html" . }}
:wq
```

Générez le site web et vérifiez le résultat. Le titre sur les articles et la page "a propos" devrait tout les deux refléter la valeur présente dans le fichier markdown.

## Ajouter la "Date de publication" des articles

Il est commun de voir la date à laquelle un article a été écrit ou publié, donc ajoutons cela. La section liminaire de notre article possède une variable nommée "date". C'est généralement la date de la création du contenu, mais supposons que c'est la valeur que nous souhaitons afficher.

### Ajouter la "Date de publication" au modèle

Nous allons commencer par modifier le modèle utilisé pour rendre les articles. Le code du modèle ressemblera à cela:

```
{{ .Date.Format "Mon, Jan 2, 2006" }}
```

Les articles utilisent le modèle simple par défaut, donc nous modifierons ce fichier.

```
$ vi themes/zafta/layouts/_default/single.html
{{ partial "header.html" . }}

  <h1>{{ .Title }}</h1>
  <h2>{{ .Date.Format "Mon, Jan 2, 2006" }}</h2>
  {{ .Content }}

{{ partial "footer.html" . }}
:wq
```

Générez le site web et vérifiez le résultat. Les articles ont maintenant la date affiché. Mais il y a un problème, la page "a propos" a également la date d'affichée.

Comme d'habiture, il y a différent moyens d'afficher la date seulement sur les articles. Nous pourrions utiliser un "if" comme nous l'avons fait sur la page d'accueil. Une autre méthode serait de créer un modèle séparer pour les articles.

La solution du "if" fonctionne pour les site n'ayant que quelques types de contenu. Il s'harmonise avec le principe du "code pour aujourd'hui", aussi.

Admettons que nous avons rendu notre site tellement complexe que nous estimons qu'il faut créer un nouveau type de modèle. En langage Hugo, nous allons créer un modèle de section.

Restaurons le modèle simple par défaut avant d'oublier.

```
$ mkdir themes/zafta/layouts/post
$ vi themes/zafta/layouts/_default/single.html
{{ partial "header.html" . }}

  <h1>{{ .Title }}</h1>
  {{ .Content }}

{{ partial "footer.html" . }}
:wq
```

Maintenant, nous allons modifier le modèle simple des articles. Si vous vous souvenez des règles d'Hugo, le moteur de modèles va utiliser cette version à la place de celle par défaut.

```
$ vi themes/zafta/layouts/post/single.html
{{ partial "header.html" . }}

  <h1>{{ .Title }}</h1>
  <h2>{{ .Date.Format "Mon, Jan 2, 2006" }}</h2>
  {{ .Content }}

{{ partial "footer.html" . }}
:wq

```

Notez que nous retirons la logique de la date dans le modèle par défaut et que nous la plaçons dans le modèle des articles. Générez le site web et vérifiez le résultat. Les articles ont leur dates et la page "a propos" non.

### Ne répètez pas cela vous-même

DRY (Don't Repeat Yourself) est un bon objectif de conception et Hugo fait du bon boulot pour supporter cette idée. Une partie de l'art du bon modèle est de savoir quand il faut ajouter un nouveau modèle ou quand il faut modifier un existant. Avant de saisir complétement ce principe, faites vous à l'idée que vous allez devoir faire de la refactorisation. Hugo rend cela facile et rapide, il est donc préférable de diviser un modèle.
