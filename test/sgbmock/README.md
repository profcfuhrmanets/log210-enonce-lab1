# SgbMock

La classe SgbMock permet de remplacer les appels au système externe SGB lorsque vous réalisez vos tests.  L'objectif est de rendre vos tests indépendants de tout système externe.

Le répertoire contient un sous-répertoire data qui correspond exactement aux donnes de SGB.

Le répertoire contient aussi plusieurs fichiers de test permettant de tester toutes les routes du serveur SGB pour s'assurer que le Mock remplace bien celle-ci.

Prenez note que c'est la première version de SgbMock et que celui-ci nécessitera possiblement quelques ajustements.

Vous aurez a tester des routes qui ne sont pas encore mocké alors vous avez le droit de modifier tous les fichiers de ce répertoire sauf les fichiers dans le sous-répertoire data.

## glossaire
SGB - Système de gestion des bordereaux

