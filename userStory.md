# 📖 User Stories — Scalar MVP

> **Projet :** Scalar — Plateforme d'apprentissage du développement informatique  
> **Version :** MVP v1.0  
> **Date :** 2026-05-28  
> **Méthodologie :** Agile — MoSCoW (Must / Should / Could / Won't)

---

## 🧮 Comment lire les priorités

Chaque User Story porte **deux notes complémentaires** (échelle Fibonacci : 1, 2, 3, 5, 8, 13) :

| Métrique | Question posée | Sens |
|----------|----------------|------|
| **Valeur métier** (Importance) | « Est-ce le cœur de valeur du produit ? » | Plus c'est haut, plus c'est essentiel à l'identité du MVP |
| **Story Points** (Effort) | « Est-ce coûteux à développer ? » | Plus c'est haut, plus c'est long/complexe |

> ⚠️ **Important — ne pas confondre deux choses :**
> - **Valeur métier = importance produit.** Le cœur de Scalar, c'est la boucle d'apprentissage différenciante : **test de niveau adaptatif → parcours généré par l'IA → cours → exercices en sandbox Docker**. C'est *ça* qui vaut 13. L'inscription/login, bien que **nécessaire**, n'est qu'une **fondation technique** (commodité) : elle est notée plus bas car elle ne porte pas la valeur du produit.
> - **Ordre de réalisation ≠ importance.** Certaines US à faible valeur (l'auth) doivent quand même être construites tôt car d'autres en dépendent techniquement. La [section dédiée](#-ordre-de-priorité-le-plus-important-dabord) classe par **importance** ; le [découpage en sprints](#-suggestion-de-découpage-en-sprints-mvp) gère, lui, les dépendances.
>
> **WSJF** = `Valeur métier ÷ Story Points` : repère les « quick wins » (forte valeur, faible coût).

**Catégories utilisées :**
- 🎯 **Cœur MVP** — la valeur différenciante, raison d'être du produit
- 💰 **Modèle économique** — ce qui génère / prépare le revenu
- 🔧 **Fondation** — prérequis technique nécessaire mais sans valeur produit propre
- 📈 **Engagement / Confort** — rétention et confort utilisateur
- 🛠️ **Admin** — outillage interne

---

## 👤 Personas

| Persona | Description |
|---------|-------------|
| **Visiteur** | Utilisateur non inscrit qui découvre la plateforme |
| **Apprenant Free** | Utilisateur inscrit sur le plan gratuit |
| **Apprenant Premium** | Utilisateur abonné (Stripe) avec accès complet |
| **Administrateur** | Gestionnaire de la plateforme |

---

## 🗂️ Epics

| ID | Epic | Priorité |
|----|------|----------|
| E1 | Authentification & Profil | 🔴 Must Have |
| E2 | Test de niveau | 🔴 Must Have |
| E3 | Parcours personnalisé (IA) | 🔴 Must Have |
| E4 | Cours & Apprentissage | 🔴 Must Have |
| E5 | Exercices & Sandbox Docker | 🔴 Must Have |
| E6 | Modèle Freemium | 🔴 Must Have |
| E7 | Abonnement Premium (Stripe) | 🟠 Should Have |
| E8 | Progression & Gamification | 🟠 Should Have |
| E9 | Administration | 🟡 Could Have |

---

## E1 — Authentification & Profil 🔴

### US-01 — Inscription d'un nouvel utilisateur
> **En tant que** visiteur,  
> **je veux** créer un compte avec mon email et un mot de passe,  
> **afin de** accéder aux fonctionnalités de la plateforme.

**Critères d'acceptation :**
- [ ] Un formulaire d'inscription est accessible depuis la page d'accueil
- [ ] Les champs obligatoires sont : prénom, nom, email, mot de passe, confirmation du mot de passe
- [ ] L'email doit être unique (message d'erreur si déjà utilisé)
- [ ] Le mot de passe doit contenir au minimum 8 caractères
- [ ] Un email de confirmation est envoyé après inscription
- [ ] L'utilisateur est redirigé vers le test de niveau après confirmation

**Priorité :** 🔴 Must Have | **Catégorie :** 🔧 Fondation | **Valeur métier :** 5 | **Story Points :** 3

---

### US-02 — Connexion à son compte
> **En tant que** utilisateur inscrit,  
> **je veux** me connecter avec mon email et mot de passe,  
> **afin de** retrouver mon espace personnel et ma progression.

**Critères d'acceptation :**
- [ ] Un formulaire de connexion est accessible depuis la page d'accueil
- [ ] Un message d'erreur explicite s'affiche si les identifiants sont incorrects
- [ ] L'utilisateur reste connecté entre les sessions (token JWT persistant)
- [ ] Un lien "mot de passe oublié" est disponible
- [ ] L'utilisateur est redirigé vers son tableau de bord après connexion

**Priorité :** 🔴 Must Have | **Catégorie :** 🔧 Fondation | **Valeur métier :** 5 | **Story Points :** 2

---

### US-03 — Réinitialisation du mot de passe
> **En tant que** utilisateur inscrit,  
> **je veux** recevoir un lien de réinitialisation par email,  
> **afin de** récupérer l'accès à mon compte si j'ai oublié mon mot de passe.

**Critères d'acceptation :**
- [ ] Un formulaire "mot de passe oublié" est accessible depuis la page de connexion
- [ ] Un email contenant un lien de réinitialisation est envoyé dans les 2 minutes
- [ ] Le lien est valide pendant 1 heure et à usage unique
- [ ] Le nouveau mot de passe doit respecter les règles de sécurité

**Priorité :** 🔴 Must Have | **Catégorie :** 🔧 Fondation | **Valeur métier :** 2 | **Story Points :** 2

---

### US-04 — Consultation et modification du profil
> **En tant que** apprenant (free ou premium),  
> **je veux** consulter et modifier mes informations de profil,  
> **afin de** garder mes informations à jour et voir mon statut d'abonnement.

**Critères d'acceptation :**
- [ ] La page profil affiche : nom, prénom, email, date d'inscription, plan actuel
- [ ] L'utilisateur peut modifier son prénom, nom et mot de passe
- [ ] Le statut d'abonnement (Free / Premium) est clairement affiché
- [ ] Les modifications sont sauvegardées avec un message de confirmation

**Priorité :** 🟠 Should Have | **Catégorie :** 📈 Confort | **Valeur métier :** 2 | **Story Points :** 3

---

## E2 — Test de niveau 🔴

### US-05 — Passer le test de niveau initial
> **En tant que** apprenant nouvellement inscrit,  
> **je veux** passer un test de niveau adaptatif,  
> **afin que** l'IA génère un parcours correspondant à mes connaissances réelles.

**Critères d'acceptation :**
- [ ] Le test est proposé automatiquement après la première connexion
- [ ] L'utilisateur choisit le langage ou la matière à évaluer (ex : Python, JavaScript, bases web)
- [ ] Le test contient entre 10 et 20 questions de difficulté progressive
- [ ] Le test s'adapte en temps réel selon les bonnes/mauvaises réponses (adaptatif)
- [ ] Un score et un niveau sont calculés à la fin (ex : Débutant / Intermédiaire / Avancé)
- [ ] L'utilisateur peut refaire le test après 30 jours

**Priorité :** 🔴 Must Have | **Catégorie :** 🎯 Cœur MVP | **Valeur métier :** 13 | **Story Points :** 8

---

### US-06 — Affichage des résultats du test de niveau
> **En tant que** apprenant,  
> **je veux** voir un résumé de mes résultats au test de niveau,  
> **afin de** comprendre mes forces et lacunes avant de démarrer mon parcours.

**Critères d'acceptation :**
- [ ] Un récapitulatif des résultats s'affiche immédiatement après le test
- [ ] Le niveau global est indiqué clairement (ex : "Niveau intermédiaire en JavaScript")
- [ ] Les domaines maîtrisés et les lacunes identifiées sont listés
- [ ] Un bouton "Générer mon parcours" est disponible
- [ ] Les résultats sont accessibles depuis le profil utilisateur

**Priorité :** 🔴 Must Have | **Catégorie :** 🎯 Cœur MVP | **Valeur métier :** 5 | **Story Points :** 3

---

## E3 — Parcours personnalisé (IA) 🔴

### US-07 — Génération automatique d'un parcours par l'IA
> **En tant que** apprenant,  
> **je veux** que l'IA génère un parcours de cours personnalisé basé sur mon niveau,  
> **afin d'** apprendre de façon progressive et adaptée à mes lacunes réelles.

**Critères d'acceptation :**
- [ ] Le parcours est généré automatiquement après le test de niveau (via API Claude/GPT)
- [ ] Le parcours contient des modules ordonnés par difficulté croissante
- [ ] Chaque module contient : un objectif, des cours, des exercices pratiques
- [ ] Le parcours tient compte des lacunes identifiées au test
- [ ] La génération prend moins de 10 secondes (avec indicateur de chargement)
- [ ] Le parcours est sauvegardé et accessible à chaque connexion

**Priorité :** 🔴 Must Have | **Catégorie :** 🎯 Cœur MVP | **Valeur métier :** 13 | **Story Points :** 13

---

### US-08 — Navigation dans son parcours personnalisé
> **En tant que** apprenant,  
> **je veux** visualiser mon parcours sous forme de tableau de bord,  
> **afin de** savoir où j'en suis et quelle est la prochaine étape.

**Critères d'acceptation :**
- [ ] Un tableau de bord affiche l'ensemble des modules du parcours
- [ ] L'état de chaque module est visible : Non commencé / En cours / Terminé
- [ ] Le prochain module recommandé est mis en évidence
- [ ] La progression globale (ex : 3/10 modules complétés) est affichée
- [ ] Les modules verrouillés (plan premium) sont identifiés clairement

**Priorité :** 🔴 Must Have | **Catégorie :** 🎯 Cœur MVP | **Valeur métier :** 8 | **Story Points :** 5

---

## E4 — Cours & Apprentissage 🔴

### US-09 — Lire un cours
> **En tant que** apprenant,  
> **je veux** lire le contenu d'un cours de mon parcours,  
> **afin d'** acquérir les connaissances théoriques nécessaires avant les exercices.

**Critères d'acceptation :**
- [ ] Le contenu du cours est affiché avec mise en forme lisible (titres, paragraphes, listes)
- [ ] Les blocs de code sont affichés avec coloration syntaxique
- [ ] Un indicateur de progression (ex : "5 min de lecture") est visible
- [ ] Des boutons "Précédent" / "Suivant" permettent de naviguer entre les sections
- [ ] Le cours est marqué comme "lu" après avoir atteint la fin

**Priorité :** 🔴 Must Have | **Catégorie :** 🎯 Cœur MVP | **Valeur métier :** 13 | **Story Points :** 5

---

### US-10 — Explorer les cours d'essai sans inscription
> **En tant que** visiteur non inscrit,  
> **je veux** accéder à des cours d'essai sans créer de compte,  
> **afin d'** évaluer la qualité du contenu avant de m'inscrire.

**Critères d'acceptation :**
- [ ] Une sélection de cours d'introduction est accessible sans connexion
- [ ] Un message invitant à s'inscrire s'affiche après quelques sections
- [ ] Le contenu est identique à celui vu par un utilisateur inscrit
- [ ] Un CTA "Créer un compte gratuit" est visible tout au long de la lecture

**Priorité :** 🔴 Must Have | **Catégorie :** 💰 Modèle économique | **Valeur métier :** 5 | **Story Points :** 3

---

## E5 — Exercices & Sandbox Docker 🔴

### US-11 — Résoudre un exercice de code
> **En tant que** apprenant,  
> **je veux** écrire et soumettre du code directement dans l'interface,  
> **afin de** pratiquer ce que j'ai appris dans le cours.

**Critères d'acceptation :**
- [ ] Un éditeur de code intégré est disponible sur la page exercice (avec coloration syntaxique)
- [ ] L'énoncé de l'exercice, les instructions et les tests attendus sont affichés
- [ ] Un bouton "Exécuter" lance le code dans la sandbox Docker
- [ ] Le résultat (sortie console, erreurs) s'affiche en moins de 5 secondes
- [ ] Les cas de test passés/échoués sont listés avec des indicateurs visuels (✅/❌)

**Priorité :** 🔴 Must Have | **Catégorie :** 🎯 Cœur MVP | **Valeur métier :** 13 | **Story Points :** 13

---

### US-12 — Recevoir la validation de son code par la sandbox
> **En tant que** apprenant,  
> **je veux** savoir si mon code est correct ou non,  
> **afin de** valider mes acquis de façon objective.

**Critères d'acceptation :**
- [ ] La sandbox exécute le code dans un conteneur Docker isolé
- [ ] Un résultat "Succès" ou "Échec" est retourné avec le détail des tests
- [ ] En cas d'échec, les erreurs sont affichées de manière claire
- [ ] En cas de succès, l'exercice est marqué comme complété dans la progression
- [ ] L'exécution est limitée à 10 secondes pour éviter les boucles infinies
- [ ] Aucun accès réseau n'est possible depuis la sandbox (sécurité)

**Priorité :** 🔴 Must Have | **Catégorie :** 🎯 Cœur MVP | **Valeur métier :** 8 | **Story Points :** 8

---

### US-13 — Obtenir un feedback IA sur son code soumis
> **En tant que** apprenant premium,  
> **je veux** recevoir un feedback détaillé de l'IA sur mon code,  
> **afin d'** apprendre des bonnes pratiques au-delà de la simple validation.

**Critères d'acceptation :**
- [ ] Après soumission, un feedback IA est généré (via API Claude/GPT)
- [ ] Le feedback commente la qualité du code, les bonnes pratiques et les améliorations possibles
- [ ] Le feedback est affiché dans un panneau latéral ou en dessous de l'éditeur
- [ ] Cette fonctionnalité est réservée aux abonnés Premium (badge + CTA d'upsell pour les Free)

**Priorité :** 🟠 Should Have | **Catégorie :** 📈 Engagement | **Valeur métier :** 5 | **Story Points :** 8

---

## E6 — Modèle Freemium 🔴

### US-14 — Accès aux premiers modules gratuitement
> **En tant que** apprenant sur le plan gratuit,  
> **je veux** avoir accès aux premiers modules de chaque parcours sans payer,  
> **afin de** tester la plateforme avant de m'abonner.

**Critères d'acceptation :**
- [ ] Les 2 premiers modules de chaque parcours sont accessibles sans abonnement
- [ ] Les modules suivants sont verrouillés avec un cadenas visible
- [ ] Un message expliquant l'avantage Premium est affiché sur les contenus verrouillés
- [ ] La limite de contenu gratuit est clairement indiquée dans l'interface

**Priorité :** 🔴 Must Have | **Catégorie :** 💰 Modèle économique | **Valeur métier :** 8 | **Story Points :** 5

---

### US-15 — Affichage du contenu verrouillé avec incitation à l'abonnement
> **En tant que** apprenant sur le plan gratuit,  
> **je veux** voir quel contenu est disponible avec l'abonnement,  
> **afin de** décider si l'abonnement vaut l'investissement.

**Critères d'acceptation :**
- [ ] Les modules premium sont visibles mais non accessibles (avec un aperçu flou)
- [ ] Un CTA "Passer Premium" est affiché sur les contenus verrouillés
- [ ] La liste des avantages Premium est présentée (accès illimité, feedback IA, certifications)
- [ ] Le prix de l'abonnement est visible directement depuis le contenu verrouillé

**Priorité :** 🔴 Must Have | **Catégorie :** 💰 Modèle économique | **Valeur métier :** 5 | **Story Points :** 3

---

## E7 — Abonnement Premium (Stripe) 🟠

### US-16 — Souscrire à un abonnement Premium
> **En tant que** apprenant sur le plan gratuit,  
> **je veux** m'abonner au plan Premium via Stripe,  
> **afin d'** accéder à l'intégralité du contenu et des fonctionnalités avancées.

**Critères d'acceptation :**
- [ ] Une page d'abonnement présente les offres (mensuel / annuel) avec les prix
- [ ] Le paiement est traité via Stripe Checkout (sécurisé, conforme PCI)
- [ ] Le statut Premium est activé immédiatement après paiement confirmé
- [ ] Un email de confirmation est envoyé après souscription
- [ ] En cas d'échec du paiement, un message d'erreur explicite est affiché

**Priorité :** 🟠 Should Have | **Catégorie :** 💰 Modèle économique | **Valeur métier :** 8 | **Story Points :** 8

---

### US-17 — Gérer son abonnement (renouvellement / résiliation)
> **En tant que** apprenant Premium,  
> **je veux** gérer mon abonnement depuis mon espace personnel,  
> **afin de** contrôler mes dépenses et résilier si nécessaire.

**Critères d'acceptation :**
- [ ] La page profil affiche la date de renouvellement et le montant prélevé
- [ ] Un bouton "Gérer mon abonnement" redirige vers le portail Stripe
- [ ] L'utilisateur peut résilier son abonnement sans contacter le support
- [ ] Après résiliation, l'accès Premium reste actif jusqu'à la fin de la période payée
- [ ] Un email de confirmation est envoyé en cas de résiliation

**Priorité :** 🟠 Should Have | **Catégorie :** 💰 Modèle économique | **Valeur métier :** 3 | **Story Points :** 5

---

## E8 — Progression & Gamification 🟠

### US-18 — Suivre sa progression globale
> **En tant que** apprenant,  
> **je veux** visualiser ma progression sur l'ensemble de mon parcours,  
> **afin de** rester motivé et savoir ce qu'il me reste à accomplir.

**Critères d'acceptation :**
- [ ] Le tableau de bord affiche un pourcentage de complétion du parcours
- [ ] Les modules terminés sont distincts des modules en cours et non commencés
- [ ] Le nombre d'exercices réussis / tentés est affiché
- [ ] Le temps total passé sur la plateforme est visible (optionnel MVP)

**Priorité :** 🟠 Should Have | **Catégorie :** 📈 Engagement | **Valeur métier :** 5 | **Story Points :** 5

---

### US-19 — Obtenir une certification à la fin d'un parcours
> **En tant que** apprenant Premium,  
> **je veux** obtenir une certification téléchargeable à la fin d'un parcours,  
> **afin de** valoriser mes compétences acquises.

**Critères d'acceptation :**
- [ ] Une certification est débloquée après la complétion de 100% des modules d'un parcours
- [ ] La certification est téléchargeable au format PDF
- [ ] Elle contient : nom de l'utilisateur, intitulé du parcours, date d'obtention, score moyen
- [ ] Cette fonctionnalité est réservée aux abonnés Premium

**Priorité :** 🟠 Should Have | **Catégorie :** 📈 Engagement | **Valeur métier :** 3 | **Story Points :** 8

---

## E9 — Administration 🟡

### US-20 — Gérer les utilisateurs
> **En tant que** administrateur,  
> **je veux** consulter et gérer la liste des utilisateurs inscrits,  
> **afin de** superviser la plateforme et intervenir en cas de problème.

**Critères d'acceptation :**
- [ ] Une interface d'administration sécurisée (accès restreint aux admins) est disponible
- [ ] La liste des utilisateurs est consultable avec filtres (plan, date inscription, activité)
- [ ] L'administrateur peut désactiver / réactiver un compte utilisateur
- [ ] L'administrateur peut voir l'abonnement actif et l'historique de paiement d'un utilisateur

**Priorité :** 🟡 Could Have | **Catégorie :** 🛠️ Admin | **Valeur métier :** 3 | **Story Points :** 8

---

### US-21 — Modérer le contenu généré par l'IA
> **En tant que** administrateur,  
> **je veux** consulter et corriger les cours et exercices générés par l'IA,  
> **afin de** garantir la qualité pédagogique du contenu.

**Critères d'acceptation :**
- [ ] Un back-office liste tous les contenus générés par l'IA (cours, exercices)
- [ ] L'administrateur peut modifier ou supprimer un contenu inapproprié
- [ ] Un flag "À vérifier" peut être posé sur un contenu signalé par un utilisateur
- [ ] Les modifications sont tracées (auteur, date, ancienne / nouvelle valeur)

**Priorité :** 🟡 Could Have | **Catégorie :** 🛠️ Admin | **Valeur métier :** 3 | **Story Points :** 8

---

### US-22 — Consulter les métriques de la plateforme
> **En tant que** administrateur,  
> **je veux** accéder à un tableau de bord de métriques,  
> **afin de** mesurer la croissance et l'engagement des utilisateurs.

**Critères d'acceptation :**
- [ ] Le dashboard affiche : nombre d'inscrits, taux de conversion Free → Premium, cours complétés
- [ ] Les métriques sont filtrables par période (7j, 30j, 90j)
- [ ] Un graphique d'évolution du nombre d'inscrits dans le temps est disponible
- [ ] Les revenus Stripe du mois en cours sont affichés

**Priorité :** 🟡 Could Have | **Catégorie :** 🛠️ Admin | **Valeur métier :** 2 | **Story Points :** 5

---

## 📊 Récapitulatif du Backlog MVP

| ID | User Story | Catégorie | Priorité | Valeur métier | Points | WSJF |
|----|-----------|-----------|----------|:---:|:---:|:---:|
| US-05 | Test de niveau initial | 🎯 Cœur MVP | 🔴 Must | 13 | 8 | 1.63 |
| US-07 | Génération parcours par IA | 🎯 Cœur MVP | 🔴 Must | 13 | 13 | 1.00 |
| US-09 | Lire un cours | 🎯 Cœur MVP | 🔴 Must | 13 | 5 | 2.60 |
| US-11 | Résoudre un exercice | 🎯 Cœur MVP | 🔴 Must | 13 | 13 | 1.00 |
| US-08 | Navigation dans le parcours | 🎯 Cœur MVP | 🔴 Must | 8 | 5 | 1.60 |
| US-12 | Validation sandbox Docker | 🎯 Cœur MVP | 🔴 Must | 8 | 8 | 1.00 |
| US-06 | Résultats du test de niveau | 🎯 Cœur MVP | 🔴 Must | 5 | 3 | 1.67 |
| US-14 | Accès gratuit aux premiers modules | 💰 Éco | 🔴 Must | 8 | 5 | 1.60 |
| US-16 | Souscription Premium Stripe | 💰 Éco | 🟠 Should | 8 | 8 | 1.00 |
| US-10 | Cours d'essai sans inscription | 💰 Éco | 🔴 Must | 5 | 3 | 1.67 |
| US-15 | Affichage contenu verrouillé | 💰 Éco | 🔴 Must | 5 | 3 | 1.67 |
| US-17 | Gestion abonnement | 💰 Éco | 🟠 Should | 3 | 5 | 0.60 |
| US-01 | Inscription | 🔧 Fondation | 🔴 Must | 5 | 3 | 1.67 |
| US-02 | Connexion | 🔧 Fondation | 🔴 Must | 5 | 2 | 2.50 |
| US-03 | Réinitialisation mot de passe | 🔧 Fondation | 🔴 Must | 2 | 2 | 1.00 |
| US-04 | Consultation/modification profil | 📈 Confort | 🟠 Should | 2 | 3 | 0.67 |
| US-18 | Suivi progression | 📈 Engagement | 🟠 Should | 5 | 5 | 1.00 |
| US-13 | Feedback IA sur le code | 📈 Engagement | 🟠 Should | 5 | 8 | 0.63 |
| US-19 | Certification fin de parcours | 📈 Engagement | 🟠 Should | 3 | 8 | 0.38 |
| US-20 | Gestion utilisateurs (admin) | 🛠️ Admin | 🟡 Could | 3 | 8 | 0.38 |
| US-21 | Modération contenu IA (admin) | 🛠️ Admin | 🟡 Could | 3 | 8 | 0.38 |
| US-22 | Métriques plateforme (admin) | 🛠️ Admin | 🟡 Could | 2 | 5 | 0.40 |

**Total Must Have :** 73 points  
**Total Should Have :** 37 points  
**Total Could Have :** 21 points  
**Total général :** 131 points

---

## 🎯 Ordre de priorité — le plus important d'abord

Classement par **Valeur métier décroissante** (le cœur du produit d'abord). À valeur égale, on départage par l'effort croissant (WSJF) et la logique métier.

| Rang | ID | User Story | Catégorie | Valeur | Points | WSJF |
|:---:|----|-----------|-----------|:---:|:---:|:---:|
| 1 | US-09 | Lire un cours | 🎯 Cœur MVP | 13 | 5 | 2.60 |
| 2 | US-05 | Test de niveau initial | 🎯 Cœur MVP | 13 | 8 | 1.63 |
| 3 | US-07 | Génération parcours par IA | 🎯 Cœur MVP | 13 | 13 | 1.00 |
| 4 | US-11 | Résoudre un exercice | 🎯 Cœur MVP | 13 | 13 | 1.00 |
| 5 | US-08 | Navigation dans le parcours | 🎯 Cœur MVP | 8 | 5 | 1.60 |
| 6 | US-14 | Accès gratuit aux premiers modules | 💰 Éco | 8 | 5 | 1.60 |
| 7 | US-12 | Validation sandbox Docker | 🎯 Cœur MVP | 8 | 8 | 1.00 |
| 8 | US-16 | Souscription Premium Stripe | 💰 Éco | 8 | 8 | 1.00 |
| 9 | US-02 | Connexion | 🔧 Fondation | 5 | 2 | 2.50 |
| 10 | US-06 | Résultats du test de niveau | 🎯 Cœur MVP | 5 | 3 | 1.67 |
| 11 | US-10 | Cours d'essai sans inscription | 💰 Éco | 5 | 3 | 1.67 |
| 12 | US-15 | Affichage contenu verrouillé | 💰 Éco | 5 | 3 | 1.67 |
| 13 | US-01 | Inscription | 🔧 Fondation | 5 | 3 | 1.67 |
| 14 | US-18 | Suivi progression | 📈 Engagement | 5 | 5 | 1.00 |
| 15 | US-13 | Feedback IA sur le code | 📈 Engagement | 5 | 8 | 0.63 |
| 16 | US-17 | Gestion abonnement | 💰 Éco | 3 | 5 | 0.60 |
| 17 | US-19 | Certification fin de parcours | 📈 Engagement | 3 | 8 | 0.38 |
| 18 | US-20 | Gestion utilisateurs (admin) | 🛠️ Admin | 3 | 8 | 0.38 |
| 19 | US-21 | Modération contenu IA (admin) | 🛠️ Admin | 3 | 8 | 0.38 |
| 20 | US-03 | Réinitialisation mot de passe | 🔧 Fondation | 2 | 2 | 1.00 |
| 21 | US-04 | Consultation/modification profil | 📈 Confort | 2 | 3 | 0.67 |
| 22 | US-22 | Métriques plateforme (admin) | 🛠️ Admin | 2 | 5 | 0.40 |

> 💡 **À retenir :** le **cœur de valeur du MVP** (rangs 1 à 8 : test → parcours IA → cours → exercices → sandbox, + freemium) est ce qui rend Scalar utile et différenciant. L'**auth (US-01/US-02)** est nécessaire mais c'est une **fondation** : on la construit tôt par dépendance, pas parce qu'elle est « importante » en soi.

---

## 🚀 Suggestion de découpage en Sprints (MVP)

> ⚠️ **L'ordre des sprints ≠ l'ordre d'importance.** Les sprints respectent les **dépendances techniques** : l'auth (fondation, faible valeur) doit exister avant qu'on puisse livrer le cœur de valeur, on la fait donc en premier mais en version minimale, pour attaquer le cœur MVP au plus vite.

| Sprint | Durée | US incluses | Objectif |
|--------|-------|------------|---------|
| Sprint 1 | 2 sem | US-01, 02, 10 | 🔧 Fondation minimale (auth) + 💰 vitrine visiteur |
| Sprint 2 | 2 sem | US-05, 06, 07, 08 | 🎯 **Cœur MVP** — test de niveau + génération parcours IA |
| Sprint 3 | 2 sem | US-09, 11, 12 | 🎯 **Cœur MVP** — cours + exercices sandbox |
| Sprint 4 | 2 sem | US-14, 15, 16, 17 | 💰 Freemium + Stripe |
| Sprint 5 | 2 sem | US-03, 04, 13, 18, 19 | 📈 Confort + feedback IA + progression + certif |
| Sprint 6 | 2 sem | US-20, 21, 22 | 🛠️ Back-office admin |

---

*Le projet Scalar — ESGI Projet Annuel*
