Projet : Algorithmes de tri
  
Algorithmes de tri
1. Introduction
Des fois, un développeur est amené à manipuler des tableaux avec énormément de data à l'intérieur. Pour gagner du temps de traitement par la suite, il est beaucoup plus confortable de travailler avec des tableaux triés par ordre croissant.

C'est pourquoi aujourd'hui et demain, tu vas implémenter des algorithmes de tri connus, et calculer leur complexité algorithmique, pour savoir s'ils sont plus ou moins efficaces et coûteux en ressource.

Il existe de nombreux facteurs qui peuvent être pris en compte pour tester l'efficacité d'un algorithme (déclaration de variables, appels système...). Mais dans ce projet, pour rester assez simple, ce sera seulement le nombre de comparaisons entre 2 éléments qui sera pris en compte. Car, pour qu'un algorithme de tri soit efficace, on lui demande d'effectuer le moins de comparaisons possible entre ses différents éléments à trier.

2. Le projet
D'abord, il faut que ton programme soit capable de gérer une liste qu'on peut moduler facilement. C'est-à-dire qu'elle devra être donnée en argument au programme.

Afin de rendre le programme le plus modulable possible, il faudra qu'il puisse lire un fichier en paramètre et utiliser les nombres qui sont à l'intérieur :

Exemple de contenu du fichier list.txt :

48 -2 6 12 0 -4
Il faudra donc lancer ton programme de la manière suivante :

$ node monProgramme.js list.txt
⚠️ Attention à bien gérer les différents cas d'erreurs dans les arguments. Par exemple un fichier qui n'existe pas, un fichier vide, un mot au lieu d'un nombre... Dans ce cas, tu devras console.error() l'erreur pour en informer l'utilisateur.

Voici les différents algorithmes de tri à implémenter :

Tri à bulle
Tri par insertion
Tri par sélection
Tri rapide (tri pivot), attention, ici on prendra le premier nombre du tableau comme pivot.
Essaie d'en faire un maximum, et assure-toi bien de tester chaque tri avec différentes configurations de tableaux (par exemple avec un tableau déjà trié) et d'afficher ton tableau pour voir s'il est bien trié à la fin.

Le tri rapide devra utiliser la récursivité.

Pour comprendre comment fonctionne chaque algorithme, il existe de nombreuses explications sur internet détaillant étape par étape comment les implémenter. Ne te limite pas au pseudo-code de Wikipédia !

3. Rendu attendu
Un fichier qui affiche en sortie dans la console le nombre de comparaisons pour les différents algos de tri implémentés. Tu trouveras quelques exemples ci-dessous.

Je te conseille d'utiliser une class, c'est plus pratique d'avoir des attributs pour pouvoir compter le nombre de comparaisons.

⚠️ Il se peut que le nombre de comparaisons de ton programme ne soit pas exactement le même que celui de l'exemple. Ce n'est pas grave, l'important c'est que ton tableau soit bien trié avec le bon algo, essaie tout de même d'avoir un nombre de comparaisons cohérent.

$ cat list.txt
48 -2 6 12 0 -4

$ node monProgramme.js list.txt
Tri à bulle: 15 comparaisons - [-4, -2, 0, 6, 12, 48]
Tri par insertion: 11 comparaisons - [-4, -2, 0, 6, 12, 48]
Tri par sélection: 15 comparaisons - [-4, -2, 0, 6, 12, 48]
Tri rapide: 11 comparaisons - [-4, -2, 0, 6, 12, 48]
$ cat list.txt
8763 -133 246 -714 42 42 2339 -42 1506 651 -321

$ node monProgramme.js list.txt
Tri à bulle: 55 comparaisons - [-714, -321, -133, -42, 42, 42, 246, 651, 1506, 2339, 8763]
Tri par insertion: 29 comparaisons - [-714, -321, -133, -42, 42, 42, 246, 651, 1506, 2339, 8763]
Tri par sélection: 55 comparaisons - [-714, -321, -133, -42, 42, 42, 246, 651, 1506, 2339, 8763]
Tri rapide: 31 comparaisons - [-714, -321, -133, -42, 42, 42, 246, 651, 1506, 2339, 8763]

Projet : Algorithmes de tri, suite
  
Algorithmes de tri, suite
Tu vas continuer à faire des algos de tri.

1. Introduction
Hier, tu as pu implémenter 4 algorithmes de tri très efficaces (tri à bulle, tri par sélection, tri par insertion et tri rapide).

Aujourd'hui, nous allons voir les plus complexes et les plus optimaux !

2. Le projet
Aujourd'hui, les instructions sont les mêmes qu'hier sauf que les algorithmes à implémenter seront plus complexes...

Voici la liste des algorithmes connus :



Tu devras implémenter le tri fusion ainsi que deux autres de ton choix dans la liste (mention spéciale pour le Smoothsort et le Timsort) et afficher leur nombre de comparaisons effectuées.

Je te conseille maintenant de tester tes algorithmes avec plusieurs tableaux : un tableau déjà trié, un tableau très petit (3 nombres) et un tableau très grand (100 nombres). Tu devrais pouvoir constater des résultats cohérents avec les complexités indiquées dans le tableau ci-dessus.

3. Rendu attendu
Un fichier JS que l'on peut exécuter en lui donnant un fichier en paramètre qui contient une liste de nombres. Il affichera dans la console le nom de l'algorithme utilisé, suivi du nombre de comparaisons effectuées puis du tableau final en sortie de ton algorithme !

Je te conseille d'utiliser une class, c'est plus pratique d'avoir des attributs pour pouvoir compter le nombre de comparaisons.

$ cat list.txt
48 -2 6 12 0 -4

$ node monProgramme.js list.txt
Tri fusion: X comparaisons - [-4, -2, 0, 6, 12, 48]
Tri (choix 1): X comparaisons - [-4, -2, 0, 6, 12, 48]
Tri (choix 2): X comparaisons - [-4, -2, 0, 6, 12, 48]

Projet : Algorithmes, encore
  
Algorithmes, encore
Tu vas faire des algorithmes concrets en essayant d'optimiser des parcours de listes.

1. Introduction
Tu viens de passer deux jours à faire des algorithmes abstraits qui permettent de trier des listes. C'est cool, mais à quoi cela sert, étant donné que sort existe déjà dans les fonctions de base de tous les langages ? Eh bien, nous allons te demander de réaliser des algorithmes optimisés pour des besoins précis d'entreprises.

Dans ce projet, nous allons te proposer deux sujets, trois niveaux de difficulté pour chaque sujet. Les deux premiers niveaux de difficulté feront office de mise en bouche, puis le dernier te demandera de sortir papiers, crayons, et de réfléchir à la façon dont tu vas affronter le problème.

Ce sont des sujets que l'on peut retrouver typiquement en test technique dans les entreprises les plus prestigieuses de la Tech. Si tu les réussis, tu peux commencer à postuler à Google, Facebook, Netflix. La classe, non ?

2. Le projet
Ces exercices sont une sélection (adaptée à ton niveau) d'exercices choisis parmi les milliers que proposent Daily Coding Problem, un excellent site pour s'entraîner quotidiennement sur des exercices d'ingénierie informatique.

2.1. Sujet 1
Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

2.2. Sujet 2
Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

2.3. Exercices
Voici les 6 exercices.

2.3.1. Exercice 1
Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

2.3.2. Exercice 2
Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

2.3.3. Exercice 3
Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

2.3.4. Exercice 4
Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

2.3.5. Exercice 5
Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?

2.3.6. Exercice 6
Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?

3. Rendu attendu
6 programmes, contenant tes magnifiques algorithmes codés avec amour.