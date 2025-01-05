# Système de gestion de l'apprentissage

Version: Automne 2024 (1.1.2)  
Si vous trouvez des incohérences ou vous avez des questions, créez un [Issue](https://github.com/profcfuhrmanets/log210-enonce-lab1/issues).

## Table des matières

Utilisez le menu intégré dans GitHub pour accéder à la table des matières (en haut, à droite de ce fichier).

## Introduction

Le laboratoire consiste à analyser, concevoir, implémenter et tester une solution pour satisfaire les besoins en ce qui concerne une application cliente.

Le document que vous lisez est l'énoncé du laboratoire. Il contient des informations sur le contexte du projet, les objectifs, les livrables, les modalités d'évaluation, etc.

## Objectifs

Les objectifs du laboratoire suivent la méthodologie du cours et sont les suivants :

1. Analyser les exigences du client et les transformer en artefacts UML (modèle du domaine, diagrammes de séquence système, contrats d'opération, etc.).
2. Concevoir une solution logicielle en utilisant les artefacts UML.
3. Implémenter les cas d'utilisation de la solution.
4. Tester les modules et les cas d'utilisation de la solution.
5. Appliquer un processus itératif pour construire et améliorer la solution.

Notez que les objectifs sont les mêmes pour chaque itération, mais les artefacts et les cas d'utilisation à réaliser évoluent.

Le travail réalisé dans le laboratoire 0 suit les mêmes objectifs pour un problème plus simple.
Vous commencez le laboratoire 1 (ce projet) avec le même squelette (gabarit) que le laboratoire 0, avec les exemples d'artefacts à réaliser dans le laboratoire 1.

## Résumé du projet

### Vue d'ensemble

Ce projet consiste à développer un système de gestion de l'apprentissage (SGA) dont les fonctionnalités peuvent être comparables à la solution Moodle. Cette solution doit permettre aux enseignants de gérer les activités pédagogiques en ligne. Le projet se déroule sur 3 itérations et met l'accent sur l'application des principes de génie logiciel.

### Technologies utilisées

* [Node.js](https://nodejs.org/fr) et [TypeScript](https://www.typescriptlang.org/) pour le backend
* [PUG](https://pugjs.org/api/getting-started.html) pour les interfaces utilisateur
* [Jest](https://jestjs.io/) pour les tests unitaires
* [Git/GitHub](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop) pour la gestion de versions du projet
* [Markdown](https://www.markdownguide.org/) pour la rédaction des rapports
* [PlantUML](https://plantuml.com/) pour les diagrammes UML et l'[extension pour Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)

### Technologies interdites

Pour vous concentrer sur des aspects essentiels de la conception (comme la séparation des couches présentation et domaine, les modèles de 
domaine complexes, etc.) et pour éviter que les laboratoires soient trop chronophages, **les technologies/solutions suivantes sont interdites :**

* Cadre d'application d'interface utilisateur : Vue.js, React, Angular, etc.
* Base de données : SQL, NoSQL, etc.

> **Attention** : Il n'est pas recommandé d'abandonner PUG pour faire du HTML ou du Ajax, car cela peut vous faire perdre du temps sur des aspects "Web" qui ne sont pas nécessaires dans la solution.
PUG simplifie la complexité des pages HTML et le squelette (lab0) montre comment l'utiliser.
Si vous avez du mal avec PUG, regardez les exemples dans le squelette et les ressources en ligne et demandez de l'aide d'une personne ressource.

### Livrables par itérations

À chaque itération, vous devez livrer les artefacts suivants :

1. **Plan d'itération** : document qui décrit les objectifs de l'itération, les cas d'utilisation à réaliser, les artefacts UML à produire, les tests à réaliser, etc. ([Gabarit de plan d'itération][gabarit-plan-iteration])
2. **Rapport** : document qui contient les artefacts UML produits, les tests réalisés, les difficultés rencontrées, etc. ([Gabarit de rapport][gabarit-rapport])
3. **Implémentation** : code source de la solution, tests unitaires, etc. ([Directives d'implémentation](#directives-dimplémentation-recommandations))
4. **Démonstration** : présentation du fonctionnement technique de votre solution au chargé de laboratoire. ([Déroulement des corrections interactives](#déroulement-des-corrections-interactives))
5. **Évaluation** : Une mise à jour de votre plan d'itération afin de présenter son évaluation, les points forts et les points à améliorer. ([Compléter la section Évaluation](#compléter-la-section-évaluation))

Il est important de respecter les dates de remises pour chaque livrable. Par exemple, le plan d'itération doit être remis avant la démonstration pour montrer la correspondance entre la conception et la solution.
Les dates sont indiquées dans la section [Dates clés et remises](#dates-clés-et-remises).

## Travail d'équipe

Ce texte est normalement un extrait du plan de cours :

> Chaque membre d'équipe est responsable de la totalité du travail réalisé et remis par son équipe. Toutefois, les membres de l'équipe ayant réalisé un travail peuvent décider de ne pas mettre sur le rapport le nom d'un ou de plusieurs autres membres qui n'ont pas fait une contribution (conception et codage) significative à l'itération. **À la remise de l'évaluation du plan d'itération**, un courriel doit être envoyé en copie conforme à tous les membres de l'équipe, aux auxiliaires d'enseignement ainsi qu'à l'enseignant pour indiquer les raisons du retrait du nom. Un membre de l'équipe dont son nom n'est pas sur un travail de laboratoire reçoit une note de «0» pour le travail.

## Plan d'itération

Un plan d'itération doit être fait au début de chaque itération, suivant les conseils dans le [gabarit de plan d'itération][gabarit-plan-iteration].

#### Pour planifier vos itérations

* [Comment planifier une itération selon le processus unifié][comment-planifier-iteration]

* [Comment estimer la taille d'une itération][comment-estimer-taille]

### Compléter la section Évaluation

Après l'évaluation de votre itération, vous devez compléter la section **Évaluation** de votre plan d'itération. Cette section doit contenir les points forts et les points à améliorer pour chaque artefact et cas d'utilisation réalisé.

## Déclaration de mission de projet

À la première séance du laboratoire 1, chaque équipe doit rédiger et signer une déclaration de mission de projet.
La déclaration permet de communiquer les attentes des membres de l'équipe envers les autres membres de l'équipe sur ces aspects du travail d'équipe :

- Qualité du travail. Ex.:
	- Qualité du logiciel, du code et du rapport (contenu et langue)
	- Respect des échéances
	- Note visée par l'équipe (ex. 90 % ou 110 % - il y a normalement un investissement du temps associé à la note ; chaque membre n'a pas la même capacité à investir du temps dans le projet)
- Collaboration. Ex.:
	- Charge de travail visée
	- Aller chercher de l'aide lorsque nécessaire
	- Aider les membres qui en ont besoin
- Communication. Ex.:
	- Présence aux laboratoires et aux réunions ou périodes de travail à l'extérieur du cours
	- Transparence des membres dans les réponses
	- Délais de réponse appropriés
	- Communiquer les problèmes aux autres membres de l'équipe

La déclaration est concise : au maximum une page. 
La participation de chaque membre de l'équipe est requise pour rédiger et approuver le contenu de la déclaration.
Sans cette contribution, celle-ci perd de son utilité.

Lors d'un conflit, l'équipe doit revenir sur la déclaration et évaluer ce qui ne fonctionne pas au besoin.
Par la suite, elle propose une solution pour résoudre le conflit et éviter qu'il ne se reproduise aux itérations suivantes.

Vous devez rédiger la déclaration dans le [fichier suivant][mission-projet]. Ce fichier contient un exemple de déclaration de mission de projet pour vous aider à démarrer.
**La déclaration n'est pas notée, mais le plan d'itération de l'itération sans déclaration sera considéré en retard si votre dépôt ne contient pas une déclaration signée.**


## Documents de référence

### Exigences du client

Le [document des exigences (besoins) du client][projet-exigences] contient les besoins du client pour le système de gestion de l'apprentissage.
Il détaille les fonctionnalités attendues, les acteurs, les cas d'utilisation, etc.

Pour réaliser ce projet, vous aurez à sélectionner les cas d'utilisation à réaliser pour chaque itération. Vous devez vous concentrer sur les cas d'utilisation qui permettent de réaliser les fonctionnalités essentielles du système. Attention, certains cas d'utilisation dépendant d'autres cas d'utilisation. Vous devez les réaliser dans l'ordre pour éviter des difficultés.

### Cahier technique

Un [cahier technique][cahier-technique] est disponible pour vous aider à démarrer le projet. Il contient des informations sur l'architecture du système, les technologies utilisées, un diagramme de déploiement et des informations sur le système de gestion des bordereaux des étudiants (SGB).

### Système de gestion des bordereaux des étudiants (SGB)

Le système de gestion des bordereaux des étudiants (SGB) est un système externe utilisé par votre application pour récupérer les informations sur les enseignants, les cours, les étudiants ainsi que sauvegarder les notes obtenues par les étudiants lors de la réalisation d'un questionnaire ou la correction d'un devoir.  **Vous n'avez pas à modifier ce système.**

Veuillez noter que l'implémentation proposée de ce système n'a aucun mécanisme de persistance des données.

Le [cahier technique][cahier-technique] présente le MDD du SGB.

Lisez le [README.md du SGB][projet-sgb] pour savoir comment consulter la documentation de son API.

## Déroulement des corrections interactives

Les corrections interactives à chaque itération se déroulent selon le processus suivant.
Les auxiliaires d'enseignement veillent au bon déroulement de la correction, mais ce sont les étudiants qui doivent prendre l'initiative de suivre ces étapes à la lettre.

### Démonstration

L'objectif de cette partie est de montrer le fonctionnement de l'application au client et de documenter sa rétroaction dans la section **Évaluation** du plan d'itération.
Dans le plan d'itération, vous identifiez des critères d'évaluation.
Ces critères d'évaluation seront considérés lors de la démonstration.
La démonstration se déroule selon les étapes suivantes :

![Diagramme d'activités pour le processus de démonstration](README/activite-demonstration.svg "Diagramme d'activités pour le processus de démonstration")

#### Évaluation de la conception et des tests

L'objectif de cette partie et de montrer que l'application est conforme aux principes vus en classe et à la conception des étudiants. Elle suit les étapes suivantes :

![DSS pour le processus d'évaluation de la conception](README/activite-evaluation-implementation.svg)

* Vérifier la correspondance du code avec la RDCU
    1. une méthode avec le même nom est présente dans un routeur. Elle doit :
        1. commencer par `/api/v1`
        2. utiliser le verbe REST approprié
        3. extraire, convertir et vérifier la présence des paramètres de la requête HTTP
        4. faire un seul appel à la méthode du contrôleur et retourner sa réponse en format JSON avec le code HTTP approprié
        5. intercepter et traiter les erreurs adéquatement
        6. :warning: [Cette méthode ne doit pas retourner une vue](https://github.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/wiki/Vue-sans-route-d'API-(endpoint)). Pour ce faire, il faut faire une autre route qui appelle l'opération système.
    2. une méthode avec la même signature est présente dans un contrôleur.
       1. l'opération du contrôleur ne doit pas utiliser d'objets comme paramètres (exception : [le réusinage «Introduce Parameter Object»](https://refactoring.com/catalog/introduceParameterObject.html)).
       2. le retour d'opération correspond à une valeur primitive
* exécuter les tests
  1. des tests pour vérifier le scénario principal, les scénarios alternatifs et la gestion des erreurs de l'opération système sont présents. Ils doivent :
        1. être exécutés pour montrer leur fonctionnement
        2. appeler la route appropriée
        3. vérifier son code HTTP
        4. vérifier chacun des champs de la réponse
  1. des **tests supplémentaires** selon le cas d'utilisation. Le test doit avoir un nom correspondant à son contexte, p. ex. `CU02d-t1` pour le premier test du cas d'utilisation **CU02d**.

## Processus d'évaluation des laboratoires

Le travail de laboratoire sera évalué en deux volets, soit la partie **rapport et planification** et la partie **implémentation**.

Voir la grille de correction pour plus de détails.

| Évaluation               | Itération 1 | Itération 2 | Itération 3 |    Total    |
| :----------------------- | :---------: | :---------: | :---------: | :---------: |
| Rapport et planification |      a      |      b      |      c      | (a + b + c) |
| Implémentation           |      -      |      -      |      d      |      d      |

### Rapport et planification

Les critères d'évaluation de chaque itération (a, b, c) sont documentés dans la section [modalités d'évaluation](#modalités-dévaluation).

## Déroulement des itérations et implémentation

Voici quelques conseils par rapport à la planification et le déroulement des itérations selon la théorie du cours (chapitre 2 du livre obligatoire):

- La rédaction du plan d'itération ne devrait pas prendre plus d'une heure.
- La réalisation des MDD, DSS et contrats devrait prendre 1 à 2 heures.
- La réalisation des RDCU devrait prendre environ une demi-journée.
- Le codage (implémentation et tests) n'est pas insignifiant et prend tout le temps qui reste.
- À la mi-itération, si les objectifs semblent trop ambitieux, vous devez réduire le nombre d'objectifs. Une démonstration partielle vaut beaucoup plus qu'aucune démonstration.
- La démonstration doit se faire en moins de 10 minutes.
- La rédaction de l'évaluation de l'itération ne devrait pas prendre plus d'une heure.

Vous recevrez une rétroaction vers la fin de chaque itération, selon le processus itératif et évolutif. Notez que seulement l'évaluation (d) de la dernière itération comptera pour la note de l'implémentation. De cette manière, on peut réduire les conséquences négatives des erreurs de planification et des difficultés avec la maîtrise des nouvelles technologies qui sont normales au début du projet.

Le calcul de la note d'implémentation pour cette évaluation est le suivant :

> ![d = (Sommation (Points)/NbPoints)](https://latex.codecogs.com/png.image?%5Cdpi%7B200%7D%20%5Cbg_white%20%5Cinline%20d=%5Cfrac%7B%5Csum%20Points%7D%7BNbPoints%7D)

Le nombre de points minimal requis pour une note de 100 % correspond au tableau suivant :
|Nombre d'étudiants| NbPoints| Évolution minimum<br>Itération #1 | Évolution minimum<br>Itération #2| Évolution minimum<br>Itération #3|
|---:|---:|----:|--:|--:|
|2| **5.50**|1.50|1.50|2.00|
|3| **8.25**|2.25|2.25|3.00|
|4|**11.00**|3.00|3.00|4.00|
|5|**13.75**|3.75|3.75|5.00|
|6|**16.50**|4.50|4.50|6.00|

Chaque itération nécessite un avancement (**évolution**) sur le plan des exigences par une **valeur minimale**.

Les points associés à chaque exigence sont définis dans la [grille de correction][grille-implementation]

Cet avancement (**évolution**) est prévu dans les objectifs du plan d'itération et sera évalué lors de la démonstration.

Vous pouvez implémenter plus de points pour compenser les pertes durant la correction, mais pour les valeurs de *d* dépassant 100&nbsp; %, le maximum est 110&nbsp; %.

Si une équipe ne réussit pas à répondre adéquatement à une exigence (fonctionnalité, tests, correspondance aux artefacts), cette dernière ne sera pas utilisée dans le calcul.

### Dates clés et remises

Toutes les remises se font directement dans le répertoire Github de votre équipe, sur la branche principale («main» ou «master»). Marquez le commit correspondant à votre remise à l'aide d'un tag nommé «iteration-i», où i est le numéro de l'itération (p. ex. iteration-1). Assurez-vous que votre rapport est au format PDF.

Notez que le calendrier des séances est différent pour chaque groupe-cours, mais les dates de remises suivent cette planification. Le rapport doit être prêt pour la démo afin de montrer la correspondance entre la conception et la solution.

| Itération | Plan d'itération              | Vérification conception[^1]        | Démo/Rapport    |Plan d'itération section évaluation[^2] |
| --------: | :---------------------------- | :--------------------------------- |:--------------  | -------------------------------------- |
|         1 | Fin journée séance 3 du labo  | Début séance 4                     | Début séance 5  | Fin journée séance 5 du labo           |     
|         2 | Fin journée séance 6 du labo  | Début séance 7                     | Début séance 8  | Fin journée séance 8 du labo           |
|         3 | Fin journée séance 9 du labo  | Début séance 10                    | Début séance 12 | Fin journée séance 12 du labo          |

### Gantt des séances et remises

[![Visualisation Gantt des séances et remises][gantt_seances]][gantt_seances_puml]

[^1]: Vous devez avoir commencé les modèles UML (MDD, RDCU, etc.).  
<!-- L'actualisation du plan d'itération (évaluation) est essentielle pour le BCAPG, car on mesure la partie "évaluation" des rapports -->
[^2]: le Plan d'itération doit être actualisé après l'évaluation.  

### Processus de remise

Toutes les remises se font directement sur GitHub.
Vous devez mettre vos sources à jour dans la branche master (main), et ensuite vous générez un tag correspondant à votre remise.
Voir le tableau suivant pour savoir quel tag générer selon votre remise.

Prenez note que tous les rapports en format Markdown doivent aussi être remis en format PDF.

| Itération |Plan d'itération  | Vérification conception | Rapport           |Plan d'itération section évaluation|
| --------: | :----------------| :---------------------- |:----------------- |:----------------------------------|
|         1 |git tag plan1     | (pendant la démo)       | git tag rapport1  | git tag plan1evaluation           |
|         2 |git tag plan2     | (pendant la démo)       | git tag rapport2  | git tag plan2evaluation           |
|         3 |git tag plan3     | (pendant la démo)       | git tag rapport3  | git tag plan3evaluation           |

### Correction interactive du [rapport][gabarit-rapport] de l'itération 1

À la deuxième semaine de l'itération 1, vous devrez présenter les artefacts, l'implémentation et les tests des CU01a et CU01b à votre auxiliaire d'enseignement. Vous recevrez des commentaires pour vous aider avant la remise de votre premier rapport et de votre première démo. Cette activité est informelle, mais votre participation est notée et obligatoire.


## Modalités d'évaluation

Toutes les grilles d'évaluation se trouvent dans [un chiffrier][grille-globale] Excel :

* [Pointage de tous les artefacts][grille-artefacts]
* [Plan d'itération][grille-plan-iteration]
* [Rapport][grille-rapport]
* [Implémentation][grille-implementation]

Vous pouvez faire une copie du tableur des grilles (pour les calculs hypothétiques) à partir de [ce lien][grille-globale].

## Directives d'implémentation (recommandations)

Voici quelques directives qui ont fait leurs preuves lorsque les étudiants les respectent.
Voir les [notes de cours][NotesDeCours] pour plus de détails.

> Il n'est pas nécessaire d'installer chaque extension mentionnée ici.

- Réalisez un diagramme de classe avant de commencer votre implémentation.
- Débutez votre implémentation par la classe ayant le moins de dépendances vers d'autres classes.
- Utilisez TDD comme processus d'implémentation.
- Assurez-vous d'avoir une très bonne couverture de test (mais une couverture de 100 % ne veut pas dire qu'il n'y a pas de bogues!).
- Terminez votre implémentation d'un cas d'utilisation par la classe contrôleur et ensuite par la classe route.
- Assurez-vous d'utiliser une classe de route pour chaque contrôleur pour maximiser la cohésion.
- Utilisez les billets (*issues*) de GitHub pour faire le suivie des tâches à réaliser.
  - Il faut que chaque membre de l'équipe puisse identifier les tâches qu'il a à faire, et ce en tout temps.  
  - L'extension «GitHub Pull Requests and Issues» dans Visual Studio Code peut faciliter le travail.
- Utilisez des outils pour mesurer la qualité du code.
  - L'extension «Tech Debt Metrics» dans Visual Studio Code
  - L'extension «SonarLint» dans Visual Studio Code

## Conclusion

Vous ne devez implémenter que les cas d'utilisation que vous aurez spécifiés dans les objectifs de votre plan d'itération, mais vous pouvez utiliser le document d'exigences complet pour trouver l'information nécessaire à la réalisation de vos cas d'utilisation.

Assurez-vous que votre implémentation respecte la séparation des couches de présentation et domaine.

Prenez note que nous sommes ouverts à toutes suggestions permettant d'apporter des améliorations au laboratoire. Nous analyserons chacune de vos suggestions.

Merci de votre participation et bon laboratoire.

## Accès rapides

Ici vous trouverez des liens rapides vers les documents et éléments importants de l'énoncé.

### Théorie

- [Notes de cours de LOG210][NotesDeCours]

### Projet

- [Document d'exigences du client][projet-exigences]
- [Cahier technique][cahier-technique]
- [Squelette de démarrage du projet][projet-squelette]
- [Code source du SGB][projet-sgb]

### Gabarits

- [Gabarit de plan d'itération][gabarit-plan-iteration]
- [Gabarit de rapport][gabarit-rapport]
- [Déclaration de mission de projet][mission-projet]

### Grilles de correction

- [Pointage de tous les artefacts][grille-artefacts]
- [Plan d'itération][grille-plan-iteration]
- [Rapport][grille-rapport]
- [Implémentation][grille-implementation]

<!-- Définition de tous les liens multiréférencés afin de n'avoir qu'une seule information à mettre à jour ("single source of truth"). -->
<!-- Théorie -->
[NotesDeCours]: http://tiny.cc/log210ndc

<!-- Projet -->
[projet-exigences]: README-exigences-client.md
[cahier-technique]: README-cahier-technique.md
[projet-squelette]: https://github.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/tree/master/docs/Squelette.md
[projet-sgb]: https://github.com/profcfuhrmanets/log210-systeme-gestion-bordereau-node-express-ts

<!-- Gabarits -->
[gabarit-rapport]: rapports/RAPPORT-iteration-i.md
[gabarit-plan-iteration]: rapports/plan-iteration-gabarit.md
[mission-projet]: rapports/mission-projet.md

<!-- Séances -->
[gantt_seances]: https://www.plantuml.com/plantuml/svg/bPNVQjim5CRlzHJdBZSBdPt_K4RPohh1sCOAWn5wSMAVfAAov4d7sRBH1zYZv3doObCSftOYKrDo8IdAz_s-dC_WAyTeUOMQMLmwtYXw8yhJjSILnGp-2fOPAQd9Rp_vvPrHnW9Rr2v7Ivh5UwCv_FPHCBe7BzfVVyQCu0EfDR5CiA6mb9QdM_c788f5hppiSy32g5IynUJXnff2fuVVtrWY_OEKChyQQHQg80_Cf2B7HbD5RLpMZ6cJ8HcLJ0BAfWRKCH_zv_AYcj6zJ0cMnl32_1Oz-A8X8uO9fBXna9l2Wa982xlR4k1IQlXP42ZoOKm2paY6N1KEbD4hM4jNU21b-x7r-_2HTrkBB8s62FfzCR_TRL4d18CxG0TpvrU5ZXsCIfwOVrMe8Ut9Xl0ExZ7FIJj0BYKz1wJJscnOcGrFpG1r2kL34IY_UtUvbCc1a1ZlahV2XbvoyAXnemetwi0Ddt3NksrcBhvvOsCvO8ngHlZtNu6Zf8os-xT6LRJFP7H4dGqzFXdwk0e-xWX-T6jh8puZZuCs9XLbqa4PTxKHmYOjRKmhtBG3Dsbl8s1CNzv6QD7Unk2aZLaLVDOHVFfC6uCpyYne8tfTOVpcUSwiguyGvpt3GgBeI8mwY5uUn8sFuhXB7BKN6eQCNzvecqTLgRZoI_bU-Gy0.svg
[gantt_seances_puml]: https://www.plantuml.com/plantuml/uml/bPNVQjim5CRlzHJdBZSBdPt_K4RPohh1sCOAWn5wSMAVfAAov4d7sRBH1zYZv3doObCSftOYKrDo8IdAz_s-dC_WAyTeUOMQMLmwtYXw8yhJjSILnGp-2fOPAQd9Rp_vvPrHnW9Rr2v7Ivh5UwCv_FPHCBe7BzfVVyQCu0EfDR5CiA6mb9QdM_c788f5hppiSy32g5IynUJXnff2fuVVtrWY_OEKChyQQHQg80_Cf2B7HbD5RLpMZ6cJ8HcLJ0BAfWRKCH_zv_AYcj6zJ0cMnl32_1Oz-A8X8uO9fBXna9l2Wa982xlR4k1IQlXP42ZoOKm2paY6N1KEbD4hM4jNU21b-x7r-_2HTrkBB8s62FfzCR_TRL4d18CxG0TpvrU5ZXsCIfwOVrMe8Ut9Xl0ExZ7FIJj0BYKz1wJJscnOcGrFpG1r2kL34IY_UtUvbCc1a1ZlahV2XbvoyAXnemetwi0Ddt3NksrcBhvvOsCvO8ngHlZtNu6Zf8os-xT6LRJFP7H4dGqzFXdwk0e-xWX-T6jh8puZZuCs9XLbqa4PTxKHmYOjRKmhtBG3Dsbl8s1CNzv6QD7Unk2aZLaLVDOHVFfC6uCpyYne8tfTOVpcUSwiguyGvpt3GgBeI8mwY5uUn8sFuhXB7BKN6eQCNzvecqTLgRZoI_bU-Gy0

<!-- Grille de correction -->
[grille-globale]: https://etsmtl365-my.sharepoint.com/:x:/g/personal/christopher_fuhrman_etsmtl_ca/ER8QtojugPlEqBHCMKvfZRoBylJoKju3HFK6jL_fDVz86w?e=vhI1bG
[grille-artefacts]: https://etsmtl365-my.sharepoint.com/personal/christopher_fuhrman_etsmtl_ca/_layouts/15/Doc.aspx?sourcedoc={88b6101f-80ee-44f9-a811-c230abdf651a}&action=embedview&wdAllowInteractivity=False&ActiveCell='Equipe'!A1&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True
[grille-plan-iteration]: https://etsmtl365-my.sharepoint.com/personal/christopher_fuhrman_etsmtl_ca/_layouts/15/Doc.aspx?sourcedoc={88b6101f-80ee-44f9-a811-c230abdf651a}&action=embedview&wdAllowInteractivity=False&ActiveCell='Plan1'!A1&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True
[grille-rapport]: https://etsmtl365-my.sharepoint.com/personal/christopher_fuhrman_etsmtl_ca/_layouts/15/Doc.aspx?sourcedoc={88b6101f-80ee-44f9-a811-c230abdf651a}&action=embedview&wdAllowInteractivity=False&ActiveCell='Rapport1'!A1&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True
[grille-implementation]: https://etsmtl365-my.sharepoint.com/personal/christopher_fuhrman_etsmtl_ca/_layouts/15/Doc.aspx?sourcedoc={88b6101f-80ee-44f9-a811-c230abdf651a}&action=embedview&wdAllowInteractivity=False&ActiveCell='Implémentation'!A3&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True
[comment-planifier-iteration]: https://etsmtl365-my.sharepoint.com/:w:/g/personal/christopher_fuhrman_etsmtl_ca/EWVA3MlzFHdElIMlduUvg6oBSAlrgHO7hjM2J93D1LGPSg?e=kCbXch
[comment-estimer-taille]: https://etsmtl365-my.sharepoint.com/:w:/g/personal/christopher_fuhrman_etsmtl_ca/EaEe2fDK94RAkfWthKX1pr4B7KBgbD9BW4UMrzwtQzOrkg?e=XMf4IK
