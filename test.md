# Partie 1: Questions Théoriques (Toutes ressources sont autorisées sauf l'utilisation d'LLMs. ex: ChatGPT, Bard, etc.)

NB: Les réponses doivent être courtes et concises.


## HTML

1. **Expliquez la différence entre les balises `<div>` et `<section>` en HTML5.**  
    _Réponse :_ différence indexage seo, section est plus précis que div dans la sémantique seo, fonctionnellement elles sont identiques

2. **Quelle est la différence entre les balises `<head>` et `<body>` dans un document HTML ?**  
    _Réponse :_ le head comprends les balises méta et liens vers les scripts et autres fichiers sources, le body est le container principale des balises html

3. **À quoi sert la balise `<meta charset="UTF-8">` dans l'en-tête d'un document HTML ?**  
    _Réponse :_ elle permet au DOCTYPE de lire le les char encodés en UTF-8 

4. **Expliquez la différence entre les balises `<ul>` et `<ol>` en HTML.**  
    _Réponse :_liste non ordonnées vs liste ordonnées

5. **Comment peut-on créer un lien vers une autre page web en HTML ?**  
    _Réponse :_ <a href="lien">Mon lien </a>

## CSS

6. **Qu'est-ce que le "box model" en CSS et quelles sont ses composantes ?**  
    _Réponse :_Le box model consiste pour chaque élément CSS en un boîte constitué du contenu, du padding, de la borders et la margin de cette éléments

7. **Quelle est la différence entre `margin` et `padding` en CSS ?**  
    _Réponse :_ margin représente l'espace situé en dehors de l'élement, le padding à l'intérieur de l'élément. Attention le margin verticale ne s'additionne pas mais prends la valeur de l'élement avec la plus grosse margin verticale alors que le padding verticale lui s'additionne

8. **Quelle propriété CSS permet de changer la couleur du texte ?**  
    _Réponse :_color

9. **Comment centrer un élément horizontalement en CSS avec la propriété `margin` ?**  
    _Réponse :_margin 0 auto

10. **Comment change-t-on la taille d'un texte en CSS ?**  
     _Réponse :_ font-size

11. **À quoi sert la propriété `background-color` en CSS ?**  
     _Réponse :_ change la couleur du background

12. **Expliquez comment fonctionne `display: flex` et citez deux propriétés associées.**  
     _Réponse :_ display flex permet une gestion flexible des enfants du container sur lequel elle est appliqués, pour centrer sur l'axe principale les enfants du container ont peut utiliser justify-content: center, pour les centrer sur l'axe secondaire align-items: center

## JavaScript

13. **Comment déclare-t-on une variable en JavaScript ?**  
     _Réponse :_ let a = 2

14. **Quelle est la différence entre `let` et `const` pour déclarer des variables ?**  
     _Réponse :_ let permet de changer une valeur primitive, alors que const elle empêche une valeur primitive de changer

     let permet de changer la référence vers une valeur de référence, const empêche de changer ce vers quoi pointe la reference

15. **Quelle est la différence entre `=`, `==` et `===` en JavaScript ?**  
     _Réponse :_ = assignation
                 == égalité avec coercion forcés
                 === égalité stricte sans coercion

16. **Comment faire une condition "si...sinon" en JavaScript ?**  
     _Réponse :_
     if (isDeadOfBoredom) {
        alert("He will jump throught the windows")
     } else if (isMiddlyHappyToJustMashHisKeyboard) {
        console.log("view this as a typing exercise")
     } else {
        console.log("i lack inspiration here")
     }

17. **Qu'est-ce qu'une fonction en JavaScript et comment la déclarer ?**  
     _Réponse :_ une fonction en javascript est un bloc de code qui encapsule un scope locale, est exécuté sur la call stack et permet d'encapsuler des blocs de codes en général dans le but de ne pas se répéter 

18. **Comment accéder à un élément HTML depuis JavaScript ?**  
     _Réponse :_ à travers la DOM API (ex: document.querySelector(""))

19. **Quelle méthode utilise-t-on pour ajouter un événement à un bouton en JavaScript ?**  
     _Réponse :_ button_element.addEventListener("submit", () => {})

20. **Comment créer un tableau en JavaScript ?**  
     _Réponse :_ const array = []

21. **Quelle est la différence entre `innerText` et `innerHTML` en JavaScript ?**  
     _Réponse :_ innerText modifie le contenu du text de javascript tout en demande un reflow et repaint, innerHTML permet d'insérer des éléments HTML directement mais est très vulnérable au XSS

22. **Comment changer le style CSS d'un élément avec JavaScript ?**  
     _Réponse :_ en accédant à la propriété element.style (ex: element.style.color)

23. **Qu'est-ce qu'un commentaire en code et comment l'écrire en HTML, CSS et JavaScript ?**  
     _Réponse :_ un commentaire est un bloc de code qui est ignorée par le compileur / interpréteur 
     html : <!-- -->
     css: /* */
     js: //

24. **Comment utiliser `console.log()` et à quoi sert cette fonction ?**  
     _Réponse :_  console.log() permet de logger dans la console du browser

25. **Comment parcourir un tableau en JavaScript ? Citez deux méthodes différentes.**  
     _Réponse :_  const array = [1, 2, 3];

     array.forEach((item) => console.log(item))
     array.map((item) => item * 2)

26. **Qu'est-ce qu'un événement en JavaScript ? Donnez un exemple d'utilisation.**  
     _Réponse :_
     Un évenement javascript l'écoute via un script JavaScript d'un élément HTML et de l'appel d'une fonction quand cette élément change

     element.addEventListener("keydown", () => {
        console.log("une clef a était pressé")
     })

27. **Comment sélectionner un élément HTML par son ID en JavaScript ?**  
     _Réponse :_ document.getElementById("element-id")

28. **Qu'est-ce qu'un objet en JavaScript et comment accéder à ses propriétés ?**  
     _Réponse :_
     un object est une structure de données qui stocke des variables en paires clef-valeur, certains de ces valeurs peuvent être des définitions de fonctions dans ce cas on appelle donc ces propriétés (propriété paires de clef valeurs) des méthodes

29. **Pourquoi est-il important de valider les données d'un formulaire avant de les traiter ?**  
     _Réponse :_
        Il ne faut jamais faire confiance à l'utilisateur, il peut avoir oublié de rentrer des données ou entrer des données malveillantes (Cross-site scripting etc)
