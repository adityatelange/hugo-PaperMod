+++
categories = ["Hugo"]
date = "2014-04-02"
description = ""
featured = "pic03.jpg"
featuredalt = "Pic 3"
featuredpath = "date"
linktitle = ""
slug = "Debuter avec Hugo"
title = "Débuter avec Hugo"
type = "post"
[ author ]
  name = "Hugo Authors"
+++

## Étape 1. Installer Hugo

Allez sur la page de téléchargements de
[hugo](https://github.com/spf13/hugo/releases) et téléchargez la version
appropriée à votre système d'exploitation et votre architecture.

Sauvegardez le fichier téléchargé à un endroit précis, afin de l'utiliser dans
l'étape suivante.

Des informations plus complètes sont disponibles sur la page
[installing hugo](/overview/installing/)
<!--more-->

## Étape 2. Compilez la documentation

Hugo possède son propre site d'exemple qui se trouve être également le site que
vous lisez actuellement.

Suivez les instructions suivante :

 1. Clonez le [dépôt de hugo](http://github.com/spf13/hugo)
 2. Allez dans ce dépôt
 3. Lancez Hugo en mode serveur et compilez la documentation
 4. Ouvrez votre navigateur sur http://localhost:1313

Voici les commandes génériques correspondantes :

    git clone https://github.com/spf13/hugo
    cd hugo
    /chemin/ou/vous/avez/installe/hugo server --source=./docs
    > 29 pages created
    > 0 tags index created
    > in 27 ms
    > Web Server is available at http://localhost:1313
    > Press ctrl+c to stop

Lorsque vous avez cela, continuez le reste de ce guide sur votre version locale.

## Étape 3. Changer le site de documentation

Arrêtez le processus de Hugo en pressant ctrl+c.

Maintenant, nous allons relancer hugo, mais cette fois avec Hugo en mode de
surveillance.

    /chemin/vers/hugo/de/l-etape/1/hugo server --source=./docs --watch
    > 29 pages created
    > 0 tags index created
    > in 27 ms
    > Web Server is available at http://localhost:1313
    > Watching for changes in /Users/spf13/Code/hugo/docs/content
    > Press ctrl+c to stop

Ouvrez votre [éditeur favori](https://vim.spf13.com) et changer l'une des
sources des pages de contenu.
Open your [favorite editor](http://vim.spf13.com) and change one of the source
content pages. Que diriez-vous de modifier ce fichier pour *résoudre une faute
de typo*.

Les fichiers de contenu peuvent être trouvés dans `docs/content/`. Sauf
indication contraire, les fichiers sont situés au même emplacement relatif que
l'URL, dans notre cas `docs/content/overview/quickstart.md`.

Modifiez et sauvegardez ce fichier. Notez ce qu'il se passe dans le terminal.

    > Change detected, rebuilding site

    > 29 pages created
    > 0 tags index created
    > in 26 ms

Rechargez la page dans votre navigateur et voyez que le problème de typo est
maintenant résolu.

Notez à quel point cela a été rapide. Essayez de recharger le site avant qu'il
soit fini de compiler.
Notice how quick that was. Try to refresh the site before it's finished
building. Je paris que vous n'y arrivez pas.
Le fait d'avoir des réactions presque instantanées vous permet d'avoir votre
créativité fluide sans avoir à attendre de longues compilations.

## Step 4. Amusez-vous

Le meilleur moyen d'apprendre quelque chose est de s'amuser avec.
