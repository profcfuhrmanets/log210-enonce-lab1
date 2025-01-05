# Cahier technique du projet

## Table des matières

Utilisez le menu intégré dans GitHub pour accéder à la table des matières (en haut, à droite de ce fichier).

## Introduction

Ce guide technique est conçu pour accompagner les équipes de développement dans la réalisation du Système de Gestion de l'Apprentissage (SGA). Il fournit toutes les informations techniques nécessaires pour configurer l'environnement de développement, comprendre l'architecture du système, et suivre les bonnes pratiques de développement établies pour ce projet.

## Application frontale 

Vous devez implémenter une interface utilisateur minimaliste dans un navigateur pour la réalisation de chacun des cas d'utilisation.

Le but du laboratoire étant d'appliquer la méthodologie d'analyse et de conception enseignée dans LOG210, le squelette a un mécanisme simple pour faire l'application frontale.
Il s'agit des gabarits de pages générées avec PUG. 

Afin de se concentrer sur les objectifs du cours, il n'est pas permis d'utiliser des frameworks frontend complexes (React, Angular, etc.)

## Persistance minimaliste des données
Les technologies de bases de données ne sont pas autorisées pour la solution. Vous verrez éventuellement ces éléments plus en profondeur dans d'autres cours spécialisés.

## Squelette pour commencer le SGA

Le [squelette][projet-squelette] de démarrage de projet pour Node.js est le point de départ pour votre solution.
Vous l'avez utilisé dans le lab 0.

> **Note** : Si vous n'avez pas terminé le lab 0, vous devez le terminer avant de commencer le lab 1. Une personne n'ayant pas complété le lab 0 peut être exclue d'une équipe.

## Modèle du domaine (MDD) du SGB

SGB est une application ayant son propre modèle du domaine (comprenant les concepts comme l'université, les cours, les groupes-cours, les étudiants, les évaluations. Bien que votre application SGA ne traite que l'aspect pédagogique en ligne, votre analyse du SGA doit comprendre les classes conceptuelles du SGB.

Il est important de bien comprendre ce modèle pour réaliser les cas d'utilisation du SGA. C'est à vous de déterminer le MDD pour la section SGA.

[Fichier source en PlantUML](https://raw.github.com/profcfuhrmanets/log210-enonce-lab1/main/modeles/mdd_sgb_sga.puml)

![Modèle du domaine pour SGB avec liens au MDD du SGA](https://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.github.com/profcfuhrmanets/log210-enonce-lab1/main/modeles/mdd_sgb_sga.puml)

## Système de gestion des bordereaux des étudiants (SGB)

Lisez le [README.md du SGB][projet-sgb] pour savoir comment consulter la documentation de son API.


## Diagramme de déploiement

Le diagramme de déploiement ci-dessous illustre l'architecture du système et les différents composants qui le composent.
Nous cherchons à simplifier les aspects techniques qui ne sont pas le sujet principal du cours : cadres d'application frontale, services REST, utilisation de bases de données, etc.

![Diagramme de déploiement](README/deploiement.svg)


## Architecture de la solution

Il faut que la solution respecte la séparation des couches présentation et domaine.
Les opérations système doivent être le mécanisme pour traverser ces deux couches (pas de logique applicative dans la couche de présentation). 
Pour vérifier cet aspect, la figure suivante est utile :

![La figure F16.24 adaptée pour le contexte web](README/figureF16.24-web.svg "figure-f16.24-web")

Notez que la logique du routeur (web) est simple :

* décortiquer l'argument de la requête (p. ex. `nom`) et
* appeler une opération système, p. ex. `demarrerJeu(nom)`, qui est une méthode définie dans une classe (le contrôleur GRASP) dans la couche domaine.

[Cette petite présentation](https://log210-cfuhrman.github.io/log210-valider-architecture-couches/#/) vous donne d'autres astuces pour valider votre solution sur le plan de la séparation des couches.

### Couche Présentation

* Utilise PUG pour les vues
* Routes Express pour gérer les requêtes HTTP
* Format des réponses API : JSON

### Couche Domaine

* Contient la logique métier
* Modèles du domaine
* Contrôleurs GRASP
* Indépendante de la présentation

## Conventions de code

### TypeScript

* Utiliser des interfaces pour définir les structures de données
* Éviter `any`
* Documenter les méthodes publiques avec [JSDoc](https://jsdoc.app/)

### Tests

* Utiliser la méthode TDD (Test-Driven Development) pour écrire des tests unitaires
* Utiliser [Jest](https://jestjs.io/) pour les tests unitaires
* Nommer les tests de manière descriptive. Chaque test doit avoir un nom correspondant à son contexte (Ex: `CU02d-t1` pour le premier test du cas d'utilisation **CU02d**).
* Écrire des tests pour vérifier le scénario principal des cas d'utilisation
* Écrire des tests pour vérifier les scénarios alternatifs des cas d'utilisation
* Écrire des tests pour les cas d'erreur  
* Écrire des tests pour les cas limites

### Git

* Message de commit en français
* Une branche par fonctionnalité
* Nommer les branches : `feature/nom-feature`
* Faire des commits atomiques, c'est-à-dire un commit par changement logique
* Faire des pull requests pour fusionner les branches

## FAQ

### Comment tester l'API sans interface?

Vous pouvez utiliser un outil comme [Postman](https://www.postman.com/) pour tester l'API sans interface.



<!-- Projet -->
[projet-sgb]: https://github.com/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts