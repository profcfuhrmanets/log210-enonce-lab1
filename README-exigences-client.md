# Éxigences SGA

Version: Automne 2021 (1.0.0)  
Si vous trouvez des incohérences ou vous avez des questions, utilisez les [Issues](https://github.com/profcfuhrmanets/log210-enonce-lab1/issues).

- [README.md](./README.md)
- [Grille de pointage des exigences](./README-grille-pointage.md)

## Introduction

Dans cette étude de cas, il est proposé de réaliser un système de gestion de l'apprentissage (SGA) qui ressemble à Moodle utilisé dans une université. La réalisation est principalement l'application dorsale (back-end), mais il faudra avoir une application frontale (front-end) minimaliste, p. ex. des pages web statiques (ou avec un peu de JavaScript), pour démontrer les fonctionnalités.

## Survol des fonctionnalités

![Cas d'utilisations SGA](./README-exigences-client/DiagCasUtilisation.svg)

## Parties prenantes et intérêts

- **Enseignant:** Il est employé de l'université et il est responsable d'enseigner un groupe-cours d'un cours offert par l'université. S'il décide d'utiliser le SGA pour son groupe-cours (c'est facultatif, il peut y avoir des groupes-cours de cours où l'enseignant n'utilise pas SGA), alors il veut un moyen de gérer toutes les facettes de l'application d'apprentissage.

- **Étudiant:** Il est inscrit à l'université. Il veut un moyen de remettre des devoirs et réaliser des jeux-questionnaires pour les groupes-cours dans lesquels il est inscrit.

## Cas d'utilisation

Vous devez vous assurer d'implémenter une mécanique de gestion des états permettant de s'assurer que les opérations système sont appelées dans un ordre cohérent avec le cas d'utilisation. Toute séquence d'utilisation autre que la séquence normale devrait automatiquement générer une erreur.  Nous couvrirons cette mécanique lors du cours sur les diagrammes d'états.

### CU01a - Ajouter cours

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié. SGA transfère l'information à SGB pour l'authentification. SGB retourne un jeton que SGA retourne à l'utilisateur. L'utilisateur doit nécessairement utiliser ce jeton pour faire ses requêtes à SGA..

**Garanties en cas de succès (postconditions):**

- Un nouveau cours est créé.
- L'enseignant est associé au cours
- Les étudiants inscrits dans le groupe-cours(SGB) sont associés au cours

**Scénario principal (succès):**

1. L'enseignant demande de créer un nouveau cours.
1. Le système affiche la liste des groupes-cours qu'enseigne l'enseignant (l'information provient du SGB).
1. L'enseignant choisit un groupe-cours dans la liste.
1. Le système affiche l'information du cours et affiche la liste des étudiants inscrits dans le groupe-cours correspondant (l'information provient du SGB).

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;3a. Un cours correspondant au groupe-cours sélectionné existe déjà.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Le système signale l'erreur et rejette la saisie.

### CU01b - Récupérer cours

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Aucun

**Scénario principal (succès):**

1. L'enseignant demande la liste de ses cours.
1. Le système affiche la liste de ses cours.
1. L'enseignant demande les détails d'un cours.
1. Le système affiche l'information du cours et affiche la liste des étudiants inscrits.

### CU01c - Retirer cours

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Le cours n'existe plus dans le système SGA

**Scénario principal (succès):**

1. L'enseignant demande la liste de ses cours.
1. Le système affiche la liste de ses cours.
1. L'enseignant demande les détails d'un cours.
1. Le système affiche l'information du cours et affiche la liste des étudiants inscrits.
1. L'enseignant demande de supprimer le cours.
1. Le système demande une confirmation pour supprimer le cours.
1. L'enseignant confirme.
1. Le système supprime le cours et affiche la nouvelle liste de cours.

---

### CU02a - Ajouter question

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Une nouvelle question a été créée dans la banque pour le cours.

**Scénario principal (succès):**

1. L'enseignant commence la création de questions
1. Le système affiche les cours actifs de l'enseignant
1. L'enseignant sélectionne un cours
1. Le système affiche toutes les questions associées au cours.
1. L'enseignant ajoute une question de type vrai-faux en spécifiant une ou plusieurs catégories non hiérarchiques (“tags”), un nom (court) de la question, l'énoncé (le texte) de la question, la vérité (vrai ou faux) de l'énoncé, un texte de rétroaction pour la bonne réponse et un texte de rétroaction pour la mauvaise réponse.

*L'enseignant répète l'étape 5 jusqu'à ce qu'il n'ait plus de questions à ajouter au cours.*

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;5a. L'enseignant ajoute un autre type de question (défini par S4)

&nbsp;&nbsp;&nbsp;5b. Le nom de la question n'est pas unique.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Le Système signale l'erreur et rejette la saisie.

### CU02b - Récupérer question

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Aucun

**Scénario principal (succès):**

1. L'enseignant commence la récupération de questions
1. Le système affiche toutes les questions de l'enseignant
1. L'enseignant sélectionne une question
1. Le système affiche les détails de la question

*On répète les étapes 3 et 4 tant que l'enseignant n'a pas terminé.*

### CU02c - Modifier question

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- La question a été modifiée dans la banque pour le cours.

**Scénario principal (succès):**

1. L'enseignant commence la modification d'une question
1. Le système affiche les valeurs actuelles de la question à modifier.
1. L'enseignant effectue les modifications de la question et les sauvegarde.
1. Le système affiche la question modifiée.

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;3a. Le nom (modifié) de la question n'est pas unique.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Le Système signale l'erreur et rejette la saisie.

### CU02d - Supprimer question

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Une question a été supprimée de la banque pour le cours.

**Scénario principal (succès):**

1. L'enseignant commence la suppression d'une question
1. Le système affiche les valeurs actuelles de la question à supprimer.
1. L'enseignant confirme la suppression de la question

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;2a. Le système affiche la liste des questionnaires utilisant cette question et désactive la possibilité de suppression tant que la question est utilisée dans un questionnaire.

---

### CU03a - Ajouter devoir

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un nouveau devoir est créé et associé à un cours

**Scénario principal (succès):**

1. L'enseignant commence la création d'un devoir
1. Le système affiche les cours de l'enseignant ainsi que le nombre de devoirs associés à chaque cours
1. L'enseignant sélectionne un cours
1. Le système affiche tous les devoirs associés au cours.
1. L'enseignant crée un nouveau devoir avec une description et un nom, une note maximale, une date de début, une date de fin et un état visible ou non.
1. Le système confirme l'ajout du devoir et affiche tous les devoirs associés au cours.

*On répète les étapes 5-6 tant qu'il y a un devoir à ajouter.*

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;5a. La date de début est après la date de fin.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Le Système signale l'erreur et rejette la saisie.

### CU03b - Récupérer devoir

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Aucune

**Scénario principal (succès):**

1. L'enseignant commence la récupération d'un devoir
1. Le système affiche les cours de l'enseignant ainsi que le nombre de devoirs associés à chaque cours
1. L'enseignant sélectionne un cours
1. Le système affiche tous les devoirs associés au cours.
1. L'enseignant sélectionne un devoir
1. Le système affiche le détail du devoir
1. Le système affiche la liste des étudiants ayant fait le devoir ainsi que la note leur étant associée.

*On répète les étapes 5 à 7 tant que l'enseignant n'a pas terminé.*

*On répète les étapes 3 à 7 tant que l'enseignant n'a pas terminé.*

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;7a. Le système affiche les étudiants par ordre alphabétique.

&nbsp;&nbsp;&nbsp;7b. Le système affiche les étudiants par ordre croissant de la note.

### CU03c - Modifier devoir

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un devoir est modifié

**Scénario principal (succès):**

1. L'enseignant commence la modification d'un devoir
1. Le système affiche les valeurs actuelles du devoir à modifier.
1. L'enseignant effectue les modifications du devoir et les sauvegarde.
1. Le système affiche tout le devoir modifié

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;1a. Un devoir ne peut pas être modifié si des étudiants ont déjà commencé à réaliser celui-ci.

### CU03d - Supprimer devoir

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un devoir a été supprimé pour le cours.

**Scénario principal (succès):**

1. L'enseignant commence la suppression d'un devoir
1. Le système affiche les valeurs du devoir à supprimer.
1. L'enseignant confirme la suppression du devoir

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;2a. Le système désactive la possibilité de suppression tant que le devoir a été utilisé par des étudiants.

---

### CU04 - Corriger devoir

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Les devoirs associés au cours ont été corrigés
- Les notes des devoirs ont été transmises au système de gestion des bordereaux (SGB).

**Scénario principal (succès):**

1. L'enseignant commence la correction de devoir
1. Le système affiche les cours actifs de l'enseignant ainsi que le nombre de devoirs à corriger pour chaque cours
1. L'enseignant sélectionne un cours
1. Le système affiche tous les devoirs à corriger pour le cours.
1. L'enseignant télécharge (“download”) le devoir de l'étudiant et le corrige.
1. L'enseignant téléverse (“upload”) la version corrigée du devoir.
1. L'enseignant indique la note du devoir.

*L'enseignant répète les étapes 5 à 7 jusqu'à ce qu'il n'ait plus de devoirs à corriger.*

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;5-6-7a. L'enseignant téléverse tous les devoirs corrigés ainsi que les fichiers avec l'extension “.note” pour associer la note au devoir corrigé. Un fichier “.note” par devoir (facultatif)

---

### CU05a - Ajouter questionnaire

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un nouveau questionnaire a été créé et associé à un cours
- Des questions ont étés associées au questionnaire

**Scénario principal (succès):**

1. L'enseignant commence la création d'un questionnaire
1. Le système affiche les cours de l'enseignant ainsi que le nombre de questionnaires associés à chaque cours
1. L'enseignant sélectionne un cours
1. Le système affiche tous les questionnaires associés au cours.
1. L'enseignant crée un nouveau questionnaire avec une description et un état pour indiquer si le questionnaire est actif
1. Le système confirme la création du questionnaire
1. Le système affiche la liste de catégories non hiérarchiques de questions
1. L'enseignant sélectionne la catégorie non hiérarchique de question
1. Le système affiche les questions correspondant à la catégorie non hiérarchique ainsi que le nombre de questionnaires auxquels ces questions ont déjà été ajoutées.
1. L'enseignant sélectionne une ou plusieurs questions et les ajoute au questionnaire.

*On répète les étapes 7 à 10 tant que l'enseignant n'a pas terminé l'ajout de questions.*

**Extensions (ou scénarios alternatifs):**

Sans objet.

### CU05b - Afficher questionnaire

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.
- Il existe un cours, un questionnaire, etc.

**Garanties en cas de succès (postconditions):**

- Aucune

**Scénario principal (succès):**

1. L'enseignant commence la gestion des questionnaires
1. Le système affiche les cours de l'enseignant ainsi que le nombre de questionnaires associés à chaque cours
1. L'enseignant sélectionne un cours
1. Le système affiche tous les questionnaires associés au cours.
1. L'enseignant sélectionne un questionnaire
1. Le système affiche les détails du questionnaire avec une description et un état pour indiquer si le questionnaire est actif
1. Le système affiche la liste des étudiants ayant réalisé le questionnaire ainsi que la note qu'ils ont obtenue.

*On répète les étapes 5 à 7 tant que l'enseignant n'a pas terminé.*

*On répète les étapes 3 à 7 tant que l'enseignant n'a pas terminé.*

**Extensions (ou scénarios alternatifs):**

Sans objet.

### CU05c - Modifier questionnaire

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.
- Il existe un cours, un questionnaire, etc.

**Garanties en cas de succès (postconditions):**

- Un questionnaire a été modifié
- Les questions associées au questionnaire ont été modifiées

**Scénario principal (succès):**

1. L'enseignant commence la modification d'un questionnaire
1. Le système affiche la liste de questions associées au questionnaire
1. L'enseignant modifie la description et/ou l'état du questionnaire
1. L'enseignant modifie les questions associées au questionnaire
1. Le système confirme la modification du questionnaire

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;3a. 4a. L'enseignant ajoute une question au questionnaire.

&nbsp;&nbsp;&nbsp;4b. L'enseignant supprime une question du questionnaire.

### CU05d - Supprimer questionnaire

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.
- Il existe un cours, un questionnaire, etc.

**Garanties en cas de succès (postconditions):**

- Un questionnaire associé à un cours est supprimé

**Scénario principal (succès):**

1. L'enseignant commence la suppression d'un questionnaire
1. Le système affiche les détails du questionnaire avec une description et un état pour indiquer si le questionnaire est actif
1. L'enseignant supprime le questionnaire

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;1a. Le système désactive la possibilité de suppression du questionnaire aussitôt qu'un étudiant a réalisé celui-ci dans le cadre du cours.

---

### CU06 - Corriger questionnaire (correction manuelle)

Il s'agit des questionnaires ayant des questions (ex. réponse longue) qui doivent être corrigées par un enseignant.

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.
- Il existe un cours, des questionnaires passés par étudiant avec questions nécessitant une correction manuelle.

**Garanties en cas de succès (postconditions):**

- Les questionnaires associés au cours ont été corrigés
- Les notes des questionnaires corrigés ont été transmises au système de gestion des bordereaux (SGB).

**Scénario principal (succès):**

1. L'enseignant commence la correction de questionnaire
2. Le système affiche les cours actifs de l'enseignant ainsi que le nombre de questionnaires à corriger pour chaque cours
3. L'enseignant sélectionne un cours
4. Le système affiche tous les questionnaires à corriger pour le cours.
5. L'enseignant choisit un questionnaire à corriger.
6. Le système affiche les questions du questionnaire ayant besoin de correction manuelle.
7. L'enseignant fait une correction manuelle à une question décidant les points à accorder à la réponse.
8. L'enseignant indique qu'il a terminé sa correction manuelle du questionnaire.
9. Le système calcule la note du questionnaire.

*L'enseignant répète les étapes 6 à 7 jusqu'à ce qu'il n'ait plus de questions à corriger ou qu'il ne souhaite plus corriger.*

*L'enseignant répète les étapes 5 à 9 jusqu'à ce qu'il n'ait plus de questionnaires à corriger ou qu'il ne souhaite plus corriger.*

---

### CU07 - Remettre devoir

**Acteur principal:**  Étudiant

**Préconditions:**

- L'étudiant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un devoir remis est associé à un étudiant

**Scénario principal (succès):**

1. L'étudiant sélectionne un cours parmi la liste des cours auxquels il est inscrit
1. Le système affiche les devoirs à remettre
1. L'étudiant sélectionne un devoir
1. Le système affiche les détails du devoir
1. L'étudiant téléverse (upload) son devoir
1. Le système confirme la réception du devoir

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;3a. Un devoir ne peut être sélectionné si la date actuelle n'est pas à l'intérieur de la plage d'ouverture du devoir ou si celui-ci est inactif.

---

### CU08 - Passer questionnaire

**Acteur principal:**  Étudiant

**Préconditions:**

- L'étudiant est authentifié.

**Garanties en cas de succès (postconditions):**

- Une association entre l'étudiant et le questionnaire a été créée
- Le résultat est sauvegardé dans le système de gestion des bordereaux

**Scénario principal (succès):**

1. L'étudiant sélectionne un cours parmi les cours auxquels il est inscrit
1. Le système affiche les questionnaires déjà complétés avec les notes reçues.
1. Le système affiche les questionnaires à compléter
1. L'étudiant sélectionne un questionnaire à compléter
1. Le système affiche une question
1. L'étudiant répond à la question

*On répète les étapes 5 à 6 tant que toutes les questions n'ont pas été complétées.*

7. Le système affiche la note obtenue et le texte de rétroaction (bonne ou mauvaise réponse) pour chaque question ainsi que la note résultante en pourcentage

*On répète les étapes 2 à 7 tant que l'étudiant n'a pas terminé.*

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;7a. Le questionnaire a des questions nécessitant une correction manuelle. Le système informe l'étudiant que sa note sera déterminée plus tard après une correction manuelle.

## Spécifications supplémentaires (FURPS+)

Rappel de l'acronyme FURPS+:

- **F**unctionality: Fonctionnalité courante dans beaucoup de cas d'utilisation (la sécurité est considérée comme des Fonctionnalités dans FURPS)
- **U**sability (Aptitude à l'utilisation): L'interface humain-machine est-elle conviviale? Combien de clics pour réaliser chaque cas d'utilisation?
- **R**eliability (Fiabilité): Définir ce qui se passe lors d'une panne de système externe? Reprise?
- **P**erformance: Combien d'utilisateurs en même temps?
- **S**upportability (Possibilités de prise en charge): Rajout facile de nouveaux types de questions?
- **+** le reste… Licences du code source? Contraintes avec l'utilisation de SGB (système externe)? OpenSource? Politiques de confidentialité?

### Fonctionnalités

En dehors des cas d'utilisation (les fonctionnalités principales), il y a les exigences suivantes:

#### F1 - Journalisation et traitement d'erreurs

Toutes les erreurs doivent être journalisées en mémoire persistante.

**Note:** Larman F30.3/A35.3 propose plusieurs patrons pour aider avec cette exigence.

#### F2 - Sécurité

Toute utilisation implique une authentification avec le Système d'authentification (SSO).

Vous devez remplacer la mécanique d'authentification actuelle par une authentification par Intergiciel de type JWT (Json Web Token)

Référence: https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node

### Aptitude à l'utilisation (Usability)

#### U1 - Facteurs humains

Le client doit voir les informations (surtout les questions) clairement sur plusieurs formats d'écran: téléphone, tablette et écran PC.
Alors, les pages web doivent supporter des appareils avec une taille d'écran de 320 par 568 pixels jusqu'à 1920 par 1080 pixels et le texte doit être lisible à une distance de 25 cm.
Il ne doit y avoir aucun défilement horizontal sur la page ou ses éléments.

- Utilisez les outils de développement du navigateur pour simuler des appareils de différentes tailles d'écran.
- Les PUG du squelette intégrent déjà la technologie Bootstrap, ce qui facilite la mise en page pour les écrans à tailles différentes.
- Une conception modulaire de vos PUG (layout) facilitera la réalisation de cette exigence.

### Fiabilité (Reliability)

#### R1 – Tolérer panne temporaire de SGB

En cas d'indisponibilité du système de gestion des bordereaux (SGB), il faut une solution de recouvrement lors de la sauvegarde de notes.
P. ex. une mise en place de stockage temporaire permettant de sauvegarder quand-même les résultats de la correction d'un devoir ou d'un questionnaire.
Lorsque le SGB est à nouveau disponible, les notes locales doivent y être transférées.

Pour faire R1, il faut avoir déjà réalisé au moins un des cas d'utilisation **Corriger devoir**, **Passer questionnaire** et **Corriger questionnaire**.
Vous devez montrer que:

- plusieurs exécutions du cas d'utilisation où une note est générée tolèrent la panne de SGB (vous arrêtez SGB temporairement)
- le recouvrement se fait automatiquement, sans que les étapes des cas d'utilisation soit modifiées (il est correct d'informer l'utilisateur par contre qu'il y a eu une panne mais que sa note sera transférée lorsque le système est de nouveau disponible)
- finalement les notes générées se rendent à SGB une fois qu'il est redémarré

**Note:** Larman propose une solution élégante avec plusieurs patrons de conception pour réaliser cette exigence. Voir le chapitre F30/A35.

### Performance

#### P1 – Performance (2 points)

Les étudiants supportent mal l'attente.
L'un des goulots d'étranglement possibles est la récupération des informations de SGB.
Vous devez utiliser un cache mémoire pour éviter l'accès à SGB au niveau de l'authentification et des requètes d'information subséquentes.
Notre objectif sera donc que le délai séparant la demande de la réponse soit inférieur à 30ms dans 90% des cas.

**Note:** pour démontrer que vous avez réalisé cette exigence, il faudra mesurer le temps d'exécution des différentes requètes et montrer avec des chiffres à l'appuie l'avantage d'utiliser le cache mémoire. Voir le chapitre F30/A35.

Voici quelques outils pour mesurer la performance

- `ab` - Apache HTTP server benchmarking tool
- `curl`

Exemple:

```
curl -w %{time_total} http://localhost:3200/api/v3/course/all
0,002213 secondes
```

### Possibilités de prise en charge (Supportability)

Ces exigences doivent être implémentées durant **au moins deux itérations** pour obtenir vos points.

#### S1 - Contrainte de développement: environnement de test

Les décisionnaires de SGA insistent pour des technologies de test, qui, selon eux, fourniront à long terme la robustesse du code.

**Note:** pour réaliser cette exigence, il faudra automatiser les tests de l'ensemble des opérations système de chaque cas d'utilisation et s'assurer que les contrats sont respectés. Les tests devront être séparés en suites pour chaque cas d'utilisation.

#### S2 - Contrainte de développement: environnement d'intégration continue

Les décisionnaires de SGA insistent pour des technologies d'intégration continue avec GitHub.

**Note:** pour réaliser cette exigence il faudra utiliser travis-ci.org et GitHub avec les badges, comme dans les squelettes.

#### S3 - Contrainte de développement: gestion sémantique de version

Les décisionnaires de SGA insistent pour une gestion sémantique de version pour le logiciel. Vous devez avoir rempli les exigences pendant au moins deux itérations.

**Note:** pour réaliser cette exigence il faudra comprendre https://linuxfr.org/news/gestion-semantique-de-version et https://docs.npmjs.com/about-semantic-versioning

#### S4 - Contrainte d'implémentation: banque de questions en format GIFT

Pour simplifier la rédaction et le partage des questions, le format GIFT doit être utilisé pour importer les questions.

**Note:** pour réaliser cette exigence vous pouvez utiliser [ce projet](https://github.com/fuhrmanator/GIFT-grammar-PEG.js).

## Glossaire

SGA - Système de gestion de l'apprentissage

SGB - Système externe de gestion des bordereaux

GIFT - PEG grammar to support GIFT (quiz) format

Tag - Catégorie non hiérarchique

## Modèle de données des questions Moodle

Le modèle suivant existe pour expliquer les différents types de questions dans Moodle. Vous pouvez vous en inspirer pour votre analyse dans ce projet.

**Note:** un modèle du domaine (MDD) devrait être limité à la portée de votre logiciel. L'exemple ci-dessous est hors de portée pour la plupart des exigences au sujet des questions. C'est plus un modèle de données qu'un modèle du domaine.

![Questions](http://www.plantuml.com/plantuml/img/bLNVRzem47xtNt7YgPq6j7j4wjI8WlemqZ6GDgchAfCSYLN7PhOZHYV-zvsJ469e7_eIAVxkntVVtTctrd7Zoa8o-oBKXXjUW7KxYVGr8Zb1LZnvoOmkLPfegGqumvKb29LZkKWH2dIvJctzWyN6xUYeMA6np0b7KUzqmOM2Yplk-2NCT8eIrXHffdLAyBmKh_2dHEk4LXOkVis-NR94SckXvx4US0jp-CVsXzCnTvXfiwkGCI6WU84mWYN-TMHsi8krwjyBDDmakKYu_Aq2p_Y-yWN7ipZqvojIWYSEMXerkyejcbTUtPJGylU_TFf397c3PAY8WPmYfbxABjWMD2kb4nk9uroB18Dii_4SW8nHfMrgOHTvkLvBJ2dQIck9N37GIkuU54RARj54KkfjW1zb2RFLzask2C1d47QiZS74TUFpoZ0eRdqigYd8q-rTzw3VXzwdNXLn13d5_jgcNveIfrpQiCxbT1wMkJztw51TJgEQg0UxB3Te4XhDdoYotDCNYZgEvYskJ6c7vEcSBbZe9rHA0-FG0ajg9HGI5HnaWulhgwkRvl0pkxeHglcvP4GUV4p6V3K76RxqAhQj3CS-S4TpgRAmtoSolDdhVH02q-zSrB8igW4v36Cxdcth3bqAcaHEfprQvDguMkw0tI9wjqiTbyRKKt7rFbHhyR7c-5HTakU359S56h_NzJQVCJirwv2BAtBlqb6XIwlZ6pJZW6Lypd9YBQ_lcybx32kJ3hj9z84btBD9G67IeH00qR7DNbewwLVmsCT7gLLc-qvtK8bhrvHrVsR494b5y-u59CcM6knE9RdHIhmYR8NBuV4nTsup6WvJdTX1KTts0sso8QfXVVS_qrt_J4z1mTtJ4ri-t3sC84fJA8Irj1ZzhJPfvscWn8L_FVoYrUaPkwKlFLZ_0G00)
