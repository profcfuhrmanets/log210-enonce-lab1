# Étude de cas: système de gestion de l'apprentissage

- [README.md](./README.md)
- [Grille de pointage des exigences](./README-grille-pointage.md)

## Introduction

Dans cette étude de cas, il est proposé de réaliser un système de gestion de l'apprentissage (SGA) qui ressemble à Moodle utilisé dans une université. La réalisation est principalement l'application dorsale (back-end), mais il faudra avoir une application frontale (front-end) minimaliste, p. ex. des pages web statiques (ou avec un peu de JavaScript), pour démontrer les fonctionnalités.

## Survol des fonctionnalités

![DCU](http://www.plantuml.com/plantuml/img/PLB1JYCn3BtdAw9UobQg16M12q8Kg2fkrLRSvX8ICqJCEAtZh1QX_O3za-Kx-cDuF5CLnCcEtykp_PBhp8wuj8tXo0tOk-XgScqBDa2stcKRneLZ4xFZcD3abuWR9moR-LNucIbwlNz07fr_gIaL33urYIoJmomG89i6djXoiXJhPxOX4dZLxQB3MXH7w-LyPD_CqUt3yKc5ozqx0LNeKw7ymyf0jLVix81j2-HE1Pte3QJjYR9ctrbxmam9Fm-40BzJt3S9PdnqtsuISGVjthc4w91xD8BUlQXmvNB-De9oDblbd5Vu2rfW9jXtK9Y2mgSLtYOIDmu3AEo3-Ml6phFuDvg7Dc8Kgnr3eL67pys0BJ13h556q_fgNz_z6oRMykApmPUNohcwifF9UdapcLIuVisy-w-lNc7ThzBzW0eV4mKWSEMF2cNf1PpDoawdtKlqKSmUajcGX3xA6kDvbuXZYowAAnfb_K7AJaklyENy5PPRdu-YUWqOvDTz0000)

## Parties prenantes et intérêts

- **Enseignant:** Il est employé de l'université et il est responsable d'enseigner un groupe-cours d'un cours offert par l'université. S'il décide d'utiliser le SGA pour son groupe-cours (c'est facultatif, il peut y avoir des groupes-cours de cours où l'enseignant n'utilise pas SGA), alors il veut un moyen de gérer toutes les facettes de l'application d'apprentissage.

- **Étudiant:** Il est inscrit à l'université. Il veut un moyen de remettre des devoirs et réaliser des jeux-questionnaires pour les groupes-cours dans lesquels il est inscrit.

# Cas d'utilisation

Vous devez vous assurer d'implémenter une mécanique de gestion des états permettant de s'assurer que les opérations système sont appelées dans un ordre cohérent avec le cas d'utilisation. Toute séquence d'utilisation autre que la séquence normale devrait automatiquement générer une erreur.  Nous couvrirons cette mécanique lors du cours sur les diagrammes d'états.

---

## CU01 - Ajouter un groupe-cours (1 point)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié. SGA transfère l'information à SGB pour l'authentification. SGB retourne un jeton (token) que SGA retourne à l'usager. L'usager doit nécessairement utiliser ce jeton pour faire ses requêtes à SGA.

**Garanties en cas de succès (postconditions):**

- Un nouveau grouper-cours est créé.
- L'enseignant est associé au groupe-cours
- Les étudiants inscrits dans le groupe-cours(SGB) sont associés au cours

**Scénario principal (succès):**

1. L'enseignant demande de créer un nouveau cours.
1. Le système affiche la liste des groupes-cours qu'enseigne l'enseignant (l'information provient du SGB).
1. L'enseignant choisit un groupe-cours dans la liste (groupe-cours non créé sur SGA).
1. Le système affiche l'information du cours et affiche la liste des étudiants inscrits dans le groupe-cours correspondant (l'information provient du SGB).

**Extensions (ou scénarios alternatifs):**

---

## CU02 - Afficher groupe-cours (1 point)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'étudiant est authentifié.

**Garanties en cas de succès (postconditions):**

- Aucun

**Scénario principal (succès):**

1. L'enseignant demande la liste de ses cours.
2. Le système affiche la liste de ses cours.
3. L'enseignant demande les détails d'un cours.
4. Le système affiche l'information du cours et affiche la liste des étudiants inscrits.

**Extensions (ou scénarios alternatifs):**

5.a Le système envoie un courriel à l'étudiant pour confirmer son abandon.

---

## CU03 - Créer question (2 points)

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
**Points supplémentaires**
| Exigence |Points|
|----------|:----:|
|support question type choix multiple |0,5|
|support question type mise en correspondance |0,5|
|support question type réponse courte |0,5|
|support question type numérique| 0,5|
|support question type choix essai |0,5|

---

## CU04 - Modifier question (1 point)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Aucun

**Scénario principal (succès):**

1. L'enseignant commence la modification de questions
2. Le système affiche toutes les questions de l'enseignant
3. L'enseignant sélectionne une question
4. Le système affiche les détails de la question
5. L'enseignant modifier la question
6. Le système sauvegarde les modifications

*On répète les étapes 2 à 4 tant que l'enseignant n'a pas terminé.*

---

## CU05 - Supprimer question (1 point)

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

## CU06 - Ajouter questionnaire (2 points)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un nouveau questionnaire a été créé et associé à un cours
- Des questions ont été associées au questionnaire

**Scénario principal (succès):**

1. L'enseignant commence la création d'un questionnaire
1. Le système affiche les cours de l'enseignant ainsi que le nombre de questionnaires associés à chaque cours
1. L'enseignant sélectionne un cours
1. Le système affiche tous les questionnaires associés au cours.
1. L'enseignant crée un nouveau questionnaire avec une date de début, une date de fin, une description et un état pour indiquer si le questionnaire est actif
1. Le système confirme la création du questionnaire
1. Le système affiche la liste de catégories non hiérarchiques de questions
1. L'enseignant sélectionne la catégorie non hiérarchique de question
1. Le système affiche les questions correspondant à la catégorie non hiérarchique ainsi que le nombre de questionnaires auxquels ces questions ont déjà été ajoutées.
1. L'enseignant sélectionne une ou plusieurs questions et les ajoute au questionnaire.

*On répète les étapes 7 à 10 tant que l'enseignant n'a pas terminé l'ajout de questions.*

**Extensions (ou scénarios alternatifs):**

Sans objet.

**Points supplémentaires**

| Exigence |Points|
|----------|:----:|
|support question type choix multiple |0,5|
|support question type mise en correspondance |0,5|
|support question type réponse courte |0,5|
|support question type numérique |0,5|
|support question type choix essai |0,5|

---

## CU07 - Afficher questionnaire (1 point)

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

---

## CU08 - Modifier questionnaire (1 point)

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

---

## CU09 - Supprimer questionnaire (1 point)

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

## CU10 - Passer questionnaire (2 points)

**Acteur principal:**  Étudiant

**Préconditions:**

- L'étudiant est authentifié.

**Garanties en cas de succès (postconditions):**

- Une association entre l'étudiant et le questionnaire a été créée
- Le résultat est sauvegardé dans le système de gestion des bordereaux

**Scénario principal (succès):**

1. L'étudiant sélectionne un cours parmi les cours auxquels il est inscrit
2. Le système affiche les questionnaires déjà complétés avec les notes reçues.
3. Le système affiche les questionnaires à compléter
4. L'étudiant sélectionne un questionnaire à compléter
5. Le système affiche une question
6. L'étudiant répond à la question

*On répète les étapes 5 à 6 tant que toutes les questions n'ont pas été complétées.*

7. Le système affiche la note obtenue et le texte de rétroaction (bonne ou mauvaise réponse) pour chaque question ainsi que la note résultante en pourcentage

*On répète les étapes 2 à 7 tant que l'étudiant n'a pas terminé.*

**Extensions (ou scénarios alternatifs):**

Sans objet.

---

## CU11 - Ajouter devoir (2 points)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un nouveau devoir est créé et associé à un cours

**Scénario principal (succès):**

1. L'enseignant commence la création d'un devoir
2. Le système affiche les cours de l'enseignant ainsi que le nombre de devoirs associés à chaque cours
3. L'enseignant sélectionne un cours
4. Le système affiche tous les devoirs associés au cours.
5. L'enseignant crée un nouveau devoir avec une description et un nom, une note maximale, une date de début, une date de fin et un état visible ou non.
6. L'enseignant téléverse un fichier PDF correspondant au devoir à réaliser.
7. Le système confirme l'ajout du devoir
8. Le système affiche tous les devoirs associés au cours.

*On répète les étapes 5-7 tant qu'il y a un devoir à ajouter.*

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;5a. La date de début est après la date de fin.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Le Système signale l'erreur et rejette la saisie.

---

## CU12 - Afficher devoir (1)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Aucune

**Scénario principal (succès):**

1. L'enseignant commence la visualisation des devoirs
2. Le système affiche les cours de l'enseignant ainsi que le nombre de devoirs associés à chaque cours
3. L'enseignant sélectionne un cours
4. Le système affiche tous les devoirs associés au cours.
5. L'enseignant sélectionne un devoir
6. Le système affiche le détail du devoir
7. Le système affiche la liste des étudiants de chaque groupe cours ayant fait le devoir ainsi que la note leur étant associée.

*On répète les étapes 5 à 7 tant que l'enseignant n'a pas terminé.*

*On répète les étapes 3 à 7 tant que l'enseignant n'a pas terminé.*

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;7a. Le système affiche les étudiants par ordre alphabétique.

&nbsp;&nbsp;&nbsp;7b. Le système affiche les étudiants par ordre croissant de la note.

---

## CU13 - Modifier devoir (1 point)

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

---

## CU014 - Supprimer devoir (1 point)

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

## CU15 - Remettre devoir (1 point)

**Acteur principal:**  Étudiant

**Préconditions:**

- L'étudiant est authentifié.

**Garanties en cas de succès (postconditions):**

- Un devoir remis est associé à un étudiant

**Scénario principal (succès):**

1. L'étudiant sélectionne un cours dans la liste des cours auxquels il est inscrit
1. Le système affiche les devoirs à remettre
1. L'étudiant sélectionne un devoir
1. Le système affiche les détails du devoir
1. L'étudiant téléverse (upload) son devoir
1. Le système confirme la réception du devoir

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;3a. Un devoir ne peut être sélectionné si la date actuelle n'est pas à l'intérieur de la plage d'ouverture du devoir ou si celui-ci est inactif.

---

## CU16 - Corriger devoirs (1 point)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'enseignant est authentifié.

**Garanties en cas de succès (postconditions):**

- Les devoirs associés au cours ont été corrigés
- Les notes des devoirs ont été transmises au système de gestion des bordereaux (SGB).

**Scénario principal (succès):**

1. L'enseignant commence la correction de devoir
1. Le système affiche les cours actifs de l'enseignant ainsi que le nombre de devoirs à corriger pour chaque cours
1. L'enseignant sélectionne un groupe-cours
1. Le système affiche tous les devoirs à corriger pour le groupe-cours.
1. L'enseignant télécharge (“download”) tous les devoirs des étudiants
1. L'enseignant téléverse (“upload”) tous les devoirs corrigés.
1. Le système affiche tous les devoirs corrigés pour le groupe-cours.
1. L'enseignant indique la note de chaque devoir.

**Extensions (ou scénarios alternatifs):**

&nbsp;&nbsp;&nbsp;6a. L'enseignant téléverse tous les devoirs corrigés ainsi que les fichiers avec l'extension “.note” pour associer la note au devoir corrigé. Un fichier “.note” par devoir

---

## CU17 - Création des équipes (2 points)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'acteur est authentifié.

**Garanties en cas de succès (postconditions):**

- Les équipes sont générées pour un devoir

**Scénario principal (succès):**

1. L'acteur sélectionne le menu de création des équipes.
2. Le système affiche la liste des cours.
3. L'enseignant sélectionne le cours
4. Le système affiche la liste des devoirs
5. L'enseignant spécifie le nombre d'étudiants par équipe.
6. Le système génère les équipes pour chaque groupe cours.
7. L'enseignant confirme la création des équipes
8. Le système envoie un courriel à chaque étudiant pour lui indiquer les coordonnées de chacun des membres de l'équipe et lui donne un URL pour récupérer le fichier du devoir.

**Extensions (ou scénarios alternatifs):**
CU15 et CU16 seront impactés par ce cas d'utilisation.  On veut faire une seule correction du devoir en équipe et mettre une seule note qui sera distribuée à toute l'équipe.

---

## CU18 - Téléchargement des calendriers

**Acteur principal:**  Étudiant et Enseignant

**Préconditions:**

- L'acteur est authentifié.

**Garanties en cas de succès (postconditions):**

- Le calendrier des séances est généré en format PDF.<sup>1</sup> (1 point)
- Le calendrier des réservations est généré en format PDF. (si CU19 est fait) (1 point)
- Le calendrier des devoirs et/ou questionnaires est généré en format PDF (si CU06 et CU11 sont faits. ) (1 point)

**Scénario principal (succès):**

1. L'acteur sélectionne le menu calendrier des séances.
2. Le système affiche les choix de calendriers (séances, réservations, devoirs et questionnaires)
3. Le système affiche les choix de format.
4. L'acteur sélectionne le(s) calendrier(s) et le format
5. Le système génère et télécharge le(s) fichier(s) sur l'ordinateur de l'acteur

**Extensions (ou scénarios alternatifs):**

3.a Format ICS (1 point pour tous les calendriers)
Note 1. Utiliser le PDF suivant pour les dates de chaque séance. https://www.etsmtl.ca/docs/etudes/calendrier-universitaire/documents/calendrier-seances-2021 (1 point supplémentaire si vous décortiquez ce PDF pour en extraire l'information automatiquement)

---

## CU19 - Réserver un local (2 points)

**Acteur principal:**  Étudiant et Enseignant

**Préconditions:**

- L'acteur est authentifié.

**Garanties en cas de succès (postconditions):**

- La réservation du local est confirmée

**Scénario principal (succès):**

1. L'acteur sélectionne le menu de réservation de local
2. Le système affiche la liste des réservations actuelle de l'acteur ainsi que la liste des locaux incluant les périodes disponibles par tranche de 30 minutes
3. L'acteur sélectionne la période qu'il veut réserver
4. Le système réserve la période et affiche toutes les réservations de l'acteur.
**Extensions (ou scénarios alternatifs):**

2.a La liste contient un bouton par réservation pour pouvoir annuler celle-ci.

---

## CU20 - Consulter mes notes (1 point)

**Acteur principal:**  Étudiant

**Préconditions:**

- L'acteur est authentifié.

**Garanties en cas de succès (postconditions):**

- Les notes de l'étudiant sont affichées pour tous ses devoirs et questionnaires.

**Scénario principal (succès):**

1. L'étudiant sélectionne le menu d'affichage des notes
2. Le système affiche tous les groupes cours ainsi que les travaux réalisés avec la note de chacun.  
3. Le système affiche la note totale de chaque groupe cours.

**Extensions (ou scénarios alternatifs):**

---

## CU21 - Exporter les notes des étudiants (2 points)

**Acteur principal:**  Enseignant

**Préconditions:**

- L'acteur est authentifié.

**Garanties en cas de succès (postconditions):**

- Un fichier Excel est exporté et contient les notes de tous les étudiants.

**Scénario principal (succès):**

1. L'enseignant sélectionne le menu d'exportation des notes
2. Le système affiche la liste des groupes-cours de l'enseignant.
3. L'enseignant sélectionne un groupe-cours.
4. Le système génère le fichier et exporte celui-ci et affiche une confirmation

Les étapes 2 à 4 sont répétées tant que l'enseignant n'a pas terminé.

**Extensions (ou scénarios alternatifs):**
2.a Un marqueur est utilisé pour indiquer les groupes-cours qui viennent juste d'être téléchargés pour éviter de télécharger plusieurs copies du même groupe cours.

---

# Spécifications supplémentaires (FURPS+)

Rappel de l'acronyme FURPS+:

- **F**unctionality: Fonctionnalité courante dans beaucoup de cas d'utilisation (la sécurité est considérée comme des Fonctionnalités dans FURPS)
- **U**sability: Convivialité? Combien de clics pour réaliser chaque cas d'utilisation?
- **R**eliability: Fiabilité? Définir ce qui se passe lors d'une panne de système externe? Reprise?
- **P**erformance: Combien d'utilisateurs en même temps?
- **S**upportability: Rajout facile de nouveaux types de questions, internationalisation (i18n) facile des textes dans l'interface?
- **+** le reste… Licences du code source? OpenSource? Politiques de confidentialité?

## Fonctionnalité

En dehors des cas d'utilisation (les fonctionnalités principales), il y a les exigences suivantes:

---

### F1 - Journalisation et traitement d'erreurs (1 point)

Toutes les erreurs doivent être journalisées en mémoire persistante.

**Note:** Larman F30.3/A35.3 propose plusieurs patrons pour aider avec cette exigence.

---

### F2 - Sécurité (1 point)

Toute utilisation implique une authentification avec le Système d'authentification (SSO).

Vous devez remplacer la mécanique d'authentification actuelle par une authentification par Intergiciel de type JWT (Json Web Token)

Référence: https://nozzlegear.com/blog/implementing-a-jwt-auth-system-with-typescript-and-node

---

## Convivialité

### U1 - Facteurs humains (0.25 point)

Le client doit voir les informations (surtout les questions) clairement sur plusieurs formats d'écran: téléphone, tablette et écran PC. Alors, les pages web doivent supporter des appareils avec une taille d'écran de 320 par 568 pixels jusqu'à 1920 par 1080 pixels et le texte doit être lisible à une distance de 25 cm. Il ne doit y avoir aucun défilement horizontal sur la page ou ses éléments.

**Note:** vous pouvez utiliser les outils de développement du navigateur pour simuler des appareils de différentes tailles d'écran.

## Fiabilité (Reliability)

### R1 – Robustesse (2 points)

En cas d'indisponibilité du système connecté (SGB - système de gestion des bordereaux ), il faut une solution de recouvrement. P. ex. un stockage temporaire qui permet de sauvegarder quand même les résultats de la correction d'un devoir. Lorsque le SGB est à nouveau disponible, les notes locales doivent y être transférées.

**Note:** Larman propose des solutions avec plusieurs patrons de conception pour réaliser cette exigence. Voir le chapitre F30/A35.

<!-- on met 2 espaces à la fin de markdown pour avoir un <br/> -->
R1 s'applique uniquement à l'exigence CU16-Corriger devoir pour les scénarios suivants:  
&nbsp;&nbsp;&nbsp;&nbsp;- L'enseignant téléverse (“upload”) la version corrigée du devoir.  
&nbsp;&nbsp;&nbsp;- L'enseignant indique la note du devoir.

## Performance

### P1 – Performance (2 points)

Les étudiants supportent mal l'attente. L'un des goulets d'étranglement possibles est la récupération des informations de SGB.  Vous devez utiliser un cache mémoire pour éviter l'accès à SGB au niveau de l'authentification et des requêtes d'information subséquentes. Notre objectif sera donc que le délai séparant la demande de la réponse soit inférieur à 50ms dans 90% des cas.

**Note:** pour démontrer que vous avez réalisé cette exigence, il faudra mesurer le temps d'exécution des différentes requêtes et montrer avec des chiffres à l'appuie l'avantage d'utiliser le cache mémoire. Voir le chapitre F30/A35.

## Support

Ces exigences doivent être implémentées durant **au moins deux itérations** pour obtenir vos points.

### S1 - Contrainte de développement: environnement de test

Les décisionnaires de SGA insistent pour des technologies de test, qui, selon eux, fourniront à long terme la robustesse du code.

**Note:** pour réaliser cette exigence, il faudra automatiser les tests de l'ensemble des opérations système de chaque cas d'utilisation et s'assurer que les contrats sont respectés. Les tests devront être séparés en suites pour chaque cas d'utilisation.

**Note:** voir le README.md pour le pointage associé aux tests.

### S2 - Contrainte de développement: environnement d'intégration continue (1 point)

Les décisionnaires de SGA insistent pour des technologies d'intégration continue avec GitHub.

**Note:** pour réaliser cette exigence il faudra utiliser travis-ci.org et GitHub avec les badges, comme dans les squelettes.

### S3 - Contrainte de développement: gestion sémantique de version (1 point)

Les décisionnaires de SGA insistent pour une gestion sémantique de version pour le logiciel. Vous devez avoir rempli les exigences pendant au moins deux itérations.

**Note:** pour réaliser cette exigence il faudra comprendre https://linuxfr.org/news/gestion-semantique-de-version et https://docs.npmjs.com/about-semantic-versioning

### S4 - Contrainte d'implémentation: banque de questions en format GIFT (1 point)

Pour simplifier la rédaction et le partage des questions, le format GIFT doit être utilisé pour importer les questions.

**Note:** pour réaliser cette exigence vous pouvez utiliser [ce projet](https://github.com/fuhrmanator/GIFT-grammar-PEG.js).

# Glossaire

SGA - Système de gestion de l'apprentissage

SGB - Système externe de gestion des bordereaux

GIFT - PEG grammar to support GIFT (quiz) format

Tag - Catégorie non hiérarchique

Devoir - Document PDF à téléchargé, a compléter et remettre

Question - Question à répondre en ligne

# Modèle de données des questions Moodle

Le modèle suivant existe pour expliquer les différents types de questions dans Moodle. Vous pouvez vous en inspirer pour votre analyse dans ce projet.

**Note:** un modèle du domaine (MDD) devrait être limité à la portée de votre logiciel. L'exemple ci-dessous est hors de portée pour la plupart des exigences au sujet des questions. C'est plus un modèle de données qu'un modèle du domaine.

![Questions](http://www.plantuml.com/plantuml/img/bLNVRzem47xtNt7YgPq6j7j4wjI8WlemqZ6GDgchAfCSYLN7PhOZHYV-zvsJ469e7_eIAVxkntVVtTctrd7Zoa8o-oBKXXjUW7KxYVGr8Zb1LZnvoOmkLPfegGqumvKb29LZkKWH2dIvJctzWyN6xUYeMA6np0b7KUzqmOM2Yplk-2NCT8eIrXHffdLAyBmKh_2dHEk4LXOkVis-NR94SckXvx4US0jp-CVsXzCnTvXfiwkGCI6WU84mWYN-TMHsi8krwjyBDDmakKYu_Aq2p_Y-yWN7ipZqvojIWYSEMXerkyejcbTUtPJGylU_TFf397c3PAY8WPmYfbxABjWMD2kb4nk9uroB18Dii_4SW8nHfMrgOHTvkLvBJ2dQIck9N37GIkuU54RARj54KkfjW1zb2RFLzask2C1d47QiZS74TUFpoZ0eRdqigYd8q-rTzw3VXzwdNXLn13d5_jgcNveIfrpQiCxbT1wMkJztw51TJgEQg0UxB3Te4XhDdoYotDCNYZgEvYskJ6c7vEcSBbZe9rHA0-FG0ajg9HGI5HnaWulhgwkRvl0pkxeHglcvP4GUV4p6V3K76RxqAhQj3CS-S4TpgRAmtoSolDdhVH02q-zSrB8igW4v36Cxdcth3bqAcaHEfprQvDguMkw0tI9wjqiTbyRKKt7rFbHhyR7c-5HTakU359S56h_NzJQVCJirwv2BAtBlqb6XIwlZ6pJZW6Lypd9YBQ_lcybx32kJ3hj9z84btBD9G67IeH00qR7DNbewwLVmsCT7gLLc-qvtK8bhrvHrVsR494b5y-u59CcM6knE9RdHIhmYR8NBuV4nTsup6WvJdTX1KTts0sso8QfXVVS_qrt_J4z1mTtJ4ri-t3sC84fJA8Irj1ZzhJPfvscWn8L_FVoYrUaPkwKlFLZ_0G00)

# Idées d'évolution pour les prochaines sessions

N'hésitez pas à faire des propositions.

1. En tant qu'enseignant, je veux réutiliser les questions d'une banque de questions dans plusieurs cours, pour éviter de copier les questions sur la matière qui est commune.
1. OAuth de G suite avec etsmtl.net
1. L'enseignant veut informer les étudiants des derniers développements par un forum de nouvelles
1. En tant qu'enseignant, je veux ajouter un étudiant pour qu'il soit enseignant (c.-à-d. chargé de laboratoire)

~~1. En tant qu'enseignant, je veux proposer des devoirs réalisés en équipe, puisque le travail en équipe est souhaité pour des raisons pédagogiques.~~
~~2. Gestion des rôles (étudiant, enseignant, etc.)~~
~~3. En tant qu'étudiant, je veux consulter toutes mes notes (note globale et par cours aussi)~~
~~4. Avoir une date limite pour les questionnaires~~
~~5. En tant qu'étudiant, je veux avoir une vue globale de mes devoirs et mes questionnaires à réaliser grâce à un calendrier (pour tous les cours et pour chaque cours)~~
~~8. Une route (en JSON) qui indique la santé de l'application. (c.-à-d. Si le SGB est disponible ou non pour l'équipe de DevOps, et toute autre dépendance du système)~~
