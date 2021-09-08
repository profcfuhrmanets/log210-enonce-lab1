# [Plan d'itération](#commentPlanifier "Comment planifier?") - 2

> Note: Texte en bloc comme ceci indique des directives aux auteurs

## Étapes jalons

> Dates clés montrant les échéances, comme date de début et de fin; étapes intermédiaires; points de synchronisation avec d'autres équipes; démonstrations; et ainsi de suite pour l'itération.

| Étape jalon          | Date       |
| :------------------- | :--------- |
| Début de l'itération | 2019/05/02 |
| Démo (séance 5)      | 2019/05/16 |
| Fin de l'itération   | 2019/05/16 |

## Objectifs clés

> Afficher les objectifs clés pour l'itération, généralement un à cinq.

- Résoudre les problèmes de la dernière itération soulevés par le chargé de laboratoire.
- Présenter une démonstration technique des CU06 et CU07 avec tests.

## Affectations d'éléments de travail

> Cette partie fait référence aux éléments de travail à compléter dans cette itération.

Les éléments de travail suivants seront abordés dans cette itération:

| Nom / Description                | Priorité | [Taille estimée (points)](#commentEstimer "Comment estimer?") | Assigné à (nom) | Documents de référence |
| -------------------------------- | -------: | --------------------------: | --------------- | ---------------------- |
| CU06                             | 1        | 4                           | (tous)          | Exigences pour le lab  |
|   CU06 - conception                |          |                             | Jacques-Éric    |                        |
|   CU06 - test et implémentation     |          |                             | Hélène          |                        |
|   CU06 - mise à jour modèles |          |                             | Pierre          |                        |
| CU07                             | 1        | 2                           | (tous)          | Exigences pour le lab  |
| CU07 - conception                |          |                             | Jérémie         |                        |
| CU07 - test et implémentation     |          |                             | Hélène          |                        |
| CU07 - mise à jour modèles |          |                             | Pierre          |                        |

## Problèmes

> Afficher tous les problèmes à résoudre lors de l'itération. Mettre à jour le statut lorsque de nouvelles questions sont présentées au cours des réunions.
> Si vous n'avez pas de problème, écrivez-le. Sinon, c'est comme si vous n'aviez pas fait la section.

| Problème                                                                                             | Notes |
| ---------------------------------------------------------------------------------------------------- | ----- |
| L'Équipe ne comprend pas bien les "router handlers" dans Express                                     |       |
| ~~Jacques-Éric n'a pas pu installer VSCode sur sa machine~~                                   |       |
| Jacques-Éric a écrasé le code de plusieurs coéquipiers. | Jacques-Éric va suivre un tutoriel sur git pour mieux comprendre les conflits et pour utiliser les branches. |
| Hélène part pour un match de Volleyball lors de la 3e semaine et ne sera pas disponible pour la démo |       |

## Critères d'évaluation

> Une brève description de la façon d'évaluer si les objectifs (définis plus haut) de haut niveau ont été atteints.
> Vos critères d'évaluation doivent être objectifs (aucun membre de l'équipe ne peut avoir une opinion divergente) et quantifiables (sauf pour ceux évalués par le chargé de laboratoire).

- 97% des cas de test passent.
- Démonstration des fonctionnalités CU06 et CU07 pas à pas avec le chargé de laboratoire a reçu une réponse favorable.

## Évaluation

> Utiliser cette section pour la saisie et la communication des résultats et les actions des évaluations, qui sont généralement faites à la fin de chaque itération. Si vous ne le faites pas, l'équipe ne peut pas être en mesure d'améliorer la façon dont ils développent des logiciels.
> **Note:** cette section n'est pas complétée avant l'évaluation faite par le chargé de lab lors de la démo en lab.

<!-- GitHub ne supporte pas les tables sans entête: https://stackoverflow.com/a/17543474/1168342 -->
| Résumé | |
| ------------------------------------- | ------------------------------------------------------------------------ |
| Cible d'évaluation                    | Itération <!-- *Cela pourrait être toute l'itération ou simplement un composant spécifique* -->                            |
| Date d'évaluation  |   2019/05/16 |
| Participants       | **Coéquipiers** : Jérémie, Jacques-Éric, Pierre (Hélène avait une absence justifiée),<br> **Chargé de laboratoire** : Jonathan Mayhem |
| État du projet     | 🟢 <!-- 🔴🟠🟢 *Rouge, Orange, ou Vert.* --> |

### Évaluation par rapport aux objectifs

> Documentez si vous avez abordé les objectifs précisés dans le plan d'itération. *(on reprend les objectifs)*

- Résoudre les problèmes de la dernière itération soulevés par le chargé de laboratoire.
    > La rétroaction du chargé de laboratoire a été positive. Bon travail l'équipe!
- Présenter une démonstration technique.
    > Le CU06 a été convaincant pour le chargé de laboratoire, mais il a trouvé que les tests pour le CU07 n'étaient pas assez étoffés. On doit corriger ça à la prochaine itération si on veut que le CU07 compte pour l'implémentation finale.

### Éléments de travail: prévus vs réalisés

> Résumez si tous les éléments de travail prévus dans l'itération ont été abordés, et des éléments de travail qui ont été reportés ou ajoutés.

Tous les éléments ont été complétés, mais il faut étoffer les tests du CU07:

> CU07 - test et implémentation assignés à Hélène

### Évaluation par rapport aux résultats selon les critères d'évaluation

> Documentez si vous avez satisfait les critères d'évaluation précisés dans le plan d'itération. Cela pourrait inclure des informations telles que «&nbsp;Démo pour le département X a été bien accueilli, avec quelques préoccupations soulevées autour de la convivialité&nbsp;», ou «&nbsp;495 cas de tests ont été automatisés avec un taux de réussite de 98&nbsp;%. 9 cas de test ont été reportés parce que les éléments de travail correspondants ont été reportés.&nbsp;»

La solution a répondu à tous les critères, mais attention: il faut rajouter des cas de tests.

## Autres préoccupations et écarts

> Documentez d'autres domaines qui ont été évalués, tels que la finance ou un type de programme, ainsi que la rétroaction des intervenants qui n'a pas été saisie ailleurs

Nous avons discuté avec plusieurs professeurs pour comprendre le flux de travail de construction des devoirs à faire en ligne (CU06).

## Évaluation du travail d'équipe

> Évaluez la contribution de chaque membre de l’équipe au projet durant l’itération. Pour vous aider, utilisez gitinspector (voir les notes du cours). Toutefois, tenez aussi compte des éléments qui ne peuvent être évalués par l’outil (apprentissage, connaissances préalables, etc.)

Selon les statistiques générées par `gitinspector` Pierre et Jérémie font 90 % de la programmation et les deux autres membres doivent contribuer plus.

Nous devons trouver un autre moyen de faire les commits (peut-être avec des branches et PR), car il y avait trop de merges difficiles de la documentation.

---

<a name="commentPlanifier">Comment planifier une itération selon le
    processus unifié :</a>
    <https://docs.google.com/a/etsmtl.net/document/d/1xeCCdR4-sTznTPaSKYIl4l_bQi-gE5stPWSA5VArRlY/edit?usp=sharing>

<a name="commentEstimer">Comment estimer la taille :</a>
    <https://docs.google.com/a/etsmtl.net/document/d/1bDy0chpWQbK9bZ82zdsBweuAgNYni3T2k79xihr6CuU/edit?usp=sharing>
