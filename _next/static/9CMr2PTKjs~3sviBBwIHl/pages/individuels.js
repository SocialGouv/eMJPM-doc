(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,n){var a,t,m=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(a===setTimeout)return setTimeout(e,0);if((a===r||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(n){try{return a.call(null,e,0)}catch(n){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:r}catch(e){a=r}try{t="function"==typeof clearTimeout?clearTimeout:o}catch(e){t=o}}();var c,l=[],i=!1,p=-1;function u(){i&&c&&(i=!1,c.length?l=c.concat(l):p=-1,l.length&&g())}function g(){if(!i){var e=s(u);i=!0;for(var n=l.length;n;){for(c=l,l=[];++p<n;)c&&c[p].run();p=-1,n=l.length}c=null,i=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function d(e,n){this.fun=e,this.array=n}function M(){}m.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)n[a-1]=arguments[a];l.push(new d(e,n)),1!==l.length||i||s(g)},d.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=M,m.addListener=M,m.once=M,m.off=M,m.removeListener=M,m.removeAllListeners=M,m.emit=M,m.prependListener=M,m.prependOnceListener=M,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},217:function(e,n,a){__NEXT_REGISTER_PAGE("/individuels",function(){return e.exports=a(218),{page:e.exports.default}})},218:function(e,n,a){"use strict";a.r(n),function(e){a.d(n,"default",function(){return p});var t=a(0),m=a.n(t),r=a(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,n){return!n||"object"!==o(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var p=function(n){function a(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(n=c(this,l(a).call(this,e))).layout=void 0,n}var t,o,p;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(a,m.a.Component),t=a,(o=[{key:"render",value:function(){var n=this.props.components,a=void 0===n?{}:n;return m.a.createElement(r.MDXTag,{name:"wrapper",components:a},m.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"guide-dutilisation-pour-les-mjpm-individuels"}},"Guide d'utilisation pour les MJPM Individuels"),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"../"}},"< Revenir à l'accueil")),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"sommaire"}},"Sommaire"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#sinscrire"}},"S'inscrire"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#se-connecter--se-d%C3%A9connecter"}},"Se connecter / se déconnecter")),m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#se-connecter"}},"Se connecter")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#se-deconnecter"}},"Se deconnecter")))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#premi%C3%A8re-connexion"}},"Première connexion"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#mettre-%C3%A0-jour-mes-informations"}},"Mettre à jour mes informations")),m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#modifiez-vos-informations-personnelles"}},"Modifiez vos informations personnelles")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#modifier-le-ou-les-ti-sur-lesquels-vous-%C3%AAtes-agr%C3%A9%C3%A9"}},"Modifier le ou les TI sur le(s)quel(s) vous êtes agréé")))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#enregistrer-mes-mesures--rajouter-une-nouvelle-mesure"}},"Enregistrer mes mesures / rajouter une nouvelle mesure")),m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#enregistrer-mes-mesures"}},"Enregistrer mes mesures")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#rajouter-une-nouvelle-mesure"}},"Rajouter une nouvelle mesure")))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#modifier-une-mesure-en-cours"}},"Modifier une mesure en cours"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#mettre-fin-%C3%A0-une-mesure-en-cours"}},"Mettre fin à une mesure en cours"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#consulter-et-valider-une-mesure-en-attente"}},"Consulter et valider une mesure en attente"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#consulter-etou-r%C3%A9activer-une-mesure-%C3%A9teinte"}},"Consulter et/ou réactiver une mesure éteinte")),m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#consulter-une-mesure-%C3%A9teinte"}},"Consulter une mesure éteinte")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"#r%C3%A9activer-une-mesure-%C3%A9teinte"}},"Réactiver une mesure éteinte")))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#voir-la-g%C3%A9olocalisation-de-mes-mesures"}},"Voir la géolocalisation de mes mesures"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#nous-contacter"}},"Nous contacter")))),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"sinscrire"}},"S'inscrire"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Pour vous créer un compte:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Allez sur le site ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://emjpm.num.social.gouv.fr/inscription/"}},"https://emjpm.num.social.gouv.fr/inscription/"))),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/Inscription.png",alt:"comment s'inscrire etape 1"}})),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Sélectionnez les tribunaux où vous êtes agréé."),m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Ex : Hauts-de-France")),m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"Tribunal d'Instance de Calais"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Puis dans la section “ Vous êtes un mandataire :” cochez la case “Individuel”.")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Remplissez ensuite les champs demandés concernant vos informations personnelles."),m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Identifiant désiré"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Mot de passe désiré"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Nom, prénom, adresse, numéro de téléphone, adresse email"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Une fois toutes les informations rentrées et vérifiées, cliquez sur “Créer mon compte”."))),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:"),"\nVotre mot de passe doit être composé de 10 caractères minimum.\nLes champs possédant une astérisque sont obligatoires."),m.a.createElement("p",{align:"center"},m.a.createElement("img",{src:(e.env.BASE_HREF||"")+"/static/images/individuels/Inscription2.png",alt:"comment s'inscrire etape 2",style:{width:"50%"}})),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"se-connecter--se-déconnecter"}},"Se connecter / se déconnecter"),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"se-connecter"}},"Se connecter"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Pour vous connecter:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Allez sur le site ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://emjpm.beta.gouv.fr/"}},"emjpm.beta.gouv.fr")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Puis cliquez sur "',m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://emjpm.num.social.gouv.fr/"}},"se connecter"),"\" en haut à droite de l'écran.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/seconnecter1.png",alt:'comment se connecter etape 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Une fois sur la page de connexion:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Indiquez votre identifiant ainsi que votre mot de passe."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Cliquez sur le bouton "Me connecter".')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:"),"\nPrenez garde à bien respecter les espaces, les minuscules et majuscules de votre identifiant et de votre mot de passe."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/seconnecter2.png",alt:'comment se connecter etape 2" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"se-deconnecter"}},"Se deconnecter"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Cliquez sur le bouton “Se déconnecter” situé en haut à droite de l'écran.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/sedeconnecter.png",alt:'comment se deconnecter" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"première-connexion"}},"Première connexion"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Pour simplifier vos échanges avec les juges, nous vous invitons, dès votre première connexion à :"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Compléter et mettre à jour la section “Mes informations”.",m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Mes coordonnées"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le nombre de mesures souhaitées"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Si je dispose d'un secrétariat"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Compléter le ou les Tribunaux d'Instance sur le(s)quels vous êtes agréé dans la section “Mes informations”."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Saisir vos mesures en cours dans la section “Mesures en cours”.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:")," Les informations et coordonnées enregistrées seront accessibles aux magistrats et doivent être actualisées régulièrement en fonction des changements, des ouvertures et des fermetures des mesures suivies. Les champs possédant une astérisque sont obligatoires."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"1ere étape : complétez vos informations")),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Cliquez sur l\'onglet "Mes informations".'),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Puis cliquez sur le bouton "Modifier mon profil" en bas de l\'écran pour ajouter vos informations.')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettreajourmesinfos1.png",alt:'comment mettre a jour mes informations 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Dans la fenêtre qui apparaît:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Complétez vos informations.",m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Nom, prénom, genre"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Adresse, téléphone, email"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le nombre de mesures souhaitées"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le cas échéant, le nombre d'ETP de secrétariat"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Puis cliquez sur le bouton "Valider".')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:")," Les champs possédant une astérisque sont obligatoires."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettreajourmesinfos2.png",alt:'comment mettre a jour mes informations 2" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"2eme étape : complétez le ou les TI sur le(s)quel(s) vous êtes agréé")),m.a.createElement(r.MDXTag,{name:"p",components:a},'Dans l\'onglet "Mes informations" :'),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Dans le champs “Tribunaux d'Instance ou je suis agrée”, saisissez les premières lettres du Tribunal d'Instance."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Puis sélectionnez le Tribunal d'Instance dans la liste des TI proposés."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Répétez l'opération si vous êtes agréé dans plusieurs TI."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Pour supprimer un TI, cliquez sur le signe “-” situé à côté du nom du TI.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettreajourmesinfos3.png",alt:'comment mettre a jour mes informations 3" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"3eme étape : Saisissez vos mesures en cours")),m.a.createElement(r.MDXTag,{name:"p",components:a},"Dès votre première connexion, nous vous invitons à enregistrer ",m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"toutes vos mesures en cours"),". Rassurez vous, cette étape n'est à faire qu'une fois. Par la suite, vous n'aurez plus qu'à saisir vos nouvelles mesures."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Pour saisir vos mesures en cours, suivez les indications listées dans la section Enregistrer mes mesures / rajouter une nouvelle mesure."),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"mettre-à-jour-mes-informations"}},"Mettre à jour mes informations"),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention :")," Les informations et coordonnées enregistrées seront accessibles aux magistrats et doivent être actualisées régulièrement en fonction des changements, des ouvertures et fermetures des mesures suivies."),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"modifiez-vos-informations-personnelles"}},"Modifiez vos informations personnelles"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Cliquez sur l\'onglet "Mes informations".'),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Cliquez sur le bouton "Modifier mon profil" en bas de l\'écran.')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettreajourmesinfos1.png",alt:'comment mettre a jour mes informations 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Dans la fenêtre qui apparaît:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Changez les informations souhaitées.",m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Nom, prénom, genre"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Adresse, téléphone, email"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le nombre de mesures souhaité"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le cas échéant, le nombre d'ETP de secrétariat"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Puis cliquez sur le bouton "Valider".')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettreajourmesinfos2.png",alt:'comment mettre a jour mes informations 2" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"modifier-le-ou-les-ti-sur-lesquels-vous-êtes-agréé"}},"Modifier le ou les TI sur le(s)quel(s) vous êtes agréé"),m.a.createElement(r.MDXTag,{name:"p",components:a},'Dans l\'onglet "Mes informations" :'),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Dans le champs “Tribunaux d'Instance ou je suis agrée”, saisissez les premières lettres du Tribunal d'Instance."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Puis sélectionnez le Tribunal d'Instance dans la liste des TI proposés."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Répétez l'opération si vous êtes agréé dans plusieurs TI."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Pour supprimer un TI, cliquez sur le signe “-” situé à côté du nom du TI.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettreajourmesinfos3.png",alt:'comment mettre a jour mes informations 3" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"enregistrer-mes-mesures--rajouter-une-nouvelle-mesure"}},"Enregistrer mes mesures / rajouter une nouvelle mesure"),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"enregistrer-mes-mesures"}},"Enregistrer mes mesures"),m.a.createElement(r.MDXTag,{name:"p",components:a},'Dans l\'onglet "Mesures en cours" :'),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Cliquez sur le bouton "Créer une nouvelle mesure" à gauche de l\'écran.')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/enregistrermesmesures1.png",alt:'comment enregistrer mes mesures 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Complétez pour chaque mesure :",m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"La date de décision de la mesure"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le type de mesure"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le code postal et la commune de lieu de vie du majeur"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le genre du majeur"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"L'année de naissance du majeur"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Précisez si le majeur vit à domicile ou en établissement.\nSi le majeur vit en établissement, merci de préciser le nom de l'établissement.\nSaisissez les premières lettres du nom de l'établissement, des propositions apparaîtront, puis cliquez sur le nom de l'établissement."))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Validez la mesure en cliquant sur le bouton "Enregistrer la mesure".'),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Si vous ne désirez pas enregistrer la mesure, cliquez sur le bouton “ Annuler”.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/enregistrermesmesures2.png",alt:'comment enregistrer mes mesures 2" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"La mesure nouvellement saisie apparaît alors dans le tableau listant les mesures en cours."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Le nombre de mesures en cours affiché dans l'onglet situé en haut à gauche de l'écran est automatiquement actualisé."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:")," Réitérer l'opération plusieurs fois afin de rentrer l'ensemble de vos mesure en cours."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/enregistrermesmesures3.png",alt:'comment enregistrer mes mesures 3" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"rajouter-une-nouvelle-mesure"}},"Rajouter une nouvelle mesure"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Le procédé est exactement le même que celui listé ci-dessus pour enregistrer une mesure."),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"modifier-une-mesure-en-cours"}},"Modifier une mesure en cours"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Si vous devez modifier une mesure (par exemple, changement de lieu de vie du majeur ou de la nature de la mesure) :"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Cliquez sur l\'onglet "Mesures en cours".'),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Puis cliquez sur le bouton « Modifier » correspondant à la mesure concernée.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/modifierunemesure1.png",alt:'comment modifier une mesure 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Dans la fenêtre qui apparaît:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Modifiez les données souhaitées.",m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Date d'ouverture de la mesure"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Type de mesure"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Résidence du majeur à protéger"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Genre"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Année de naissance du majeur à protéger"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Puis cliquez sur le bouton "Valider".')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:")," Les champs possédant une astérisque sont obligatoires."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/modifierunemesure2.png",alt:'comment modifier une mesure 2" width="50%" /'}})," >"),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"mettre-fin-à-une-mesure-en-cours"}},"Mettre fin à une mesure en cours"),m.a.createElement(r.MDXTag,{name:"p",components:a},'Dans l\'onglet "Mesures en cours" :'),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Cliquez sur le bouton « Mettre fin au mandat » de la mesure concernée.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettrefinaumesure1.png",alt:'comment mettre fin au mesures 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Dans la fenêtre qui apparaît:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Rentrez la date de fin de mandat."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Puis cliquez sur “Eteindre la mesure”.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettrefinaumesure2.png",alt:'comment mettre fin au mesures 2" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},'La mesure apparaît alors dans l\'onglet "Mesures éteintes".'),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:"),' Vous avez toujours la possibilité de réactiver une mesure éteinte par erreur en cliquant sur le bouton "Réactiver la mesure" qui se situe dans l\'onglet “Mesures éteintes”.'),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettrefinaumesure3.png",alt:'comment mettre fin au mesures 3" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"consulter-et-valider-une-mesure-en-attente"}},"Consulter et valider une mesure en attente"),m.a.createElement(r.MDXTag,{name:"p",components:a},'Lorsque le juge prend la décision de vous assigner une mesure, celle-ci apparaît dans l\'onglet "Mesure en attente".'),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/consulteretvaliderunemesure1.png",alt:'comment consulter et valider une mesure 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Les informations suivantes sont listées au sujet de la mesure en attente :"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Date de demande"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Tribunal d'Instance de provenance"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le type de mesure"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le genre du majeur à protéger"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"La date de naissance du majeur à protéger"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Cliquez sur le bouton “Valider” une fois le document (papier) reçu afin de transformer cette mesure en attente en mesure en cours.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/consulteretvaliderunemesure2.png",alt:'comment consulter et valider une mesure 2" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"La mesure nouvellement attribuée apparaît alors dans l'onglet “Mesures en cours”, et se rajoute au tableau listant l'ensemble des mesures en cours ."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Le nombre de mesures en cours affiché dans l'onglet situé en haut à gauche de l'écran est également automatiquement actualisé."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/consulteretvaliderunemesure3.png",alt:'comment consulter et valider une mesure 3" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Attention:")," Les juges ayant accès au nombres de mesures en attentes attribuées, merci de bien vouloir valider très régulièrement vos mesures en attentes une fois le document reçu afin de les basculer en mesures en cours."),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"consulter-etou-réactiver-une-mesure-éteinte"}},"Consulter et/ou réactiver une mesure éteinte"),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"consulter-une-mesure-éteinte"}},"Consulter une mesure éteinte"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Vous trouverez dans l'onglet “Mesures éteintes” la liste de l'ensemble de vos mesures éteintes.\nLes informations suivantes sont listées :"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Date de décision"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Résidence du majeur"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Type de mesure"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le genre du majeur"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"La date de naissance du majeur"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"La date d'extinction de la mesure")),m.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"réactiver-une-mesure-éteinte"}},"Réactiver une mesure éteinte"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Dans l'onglet “Mesures éteintes”"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},'Cliquez sur le bouton "Réactiver la mesure".')),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/mettrefinaumesure3.png",alt:'comment mettre fin au mesures 3" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"La mesure nouvellement réactivée apparaît alors dans l'onglet “Mesures en cours”, et se rajoute au tableau listant l'ensemble des mesures en cours."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Le nombre de mesures en cours affiché dans l'onglet situé en haut à gauche de l'écran est également automatiquement actualisé."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/consulteretvaliderunemesure3.png",alt:'comment consulter et valider une mesure 3" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"voir-la-géolocalisation-de-mes-mesures"}},"Voir la géolocalisation de mes mesures"),m.a.createElement(r.MDXTag,{name:"p",components:a},"L'onglet « Vue carte » permet de géolocaliser les mesures en cours."),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/geolocalisation1.png",alt:'comment geolocaliser 1" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"p",components:a},"Cette carte est accessible aux magistrats et offre la possibilité de rationaliser les déplacements."),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Lorsque vous cliquez sur l'indicateur bleu de localisation géographique, la liste des mesures en cours situées à cet endroit apparaît. Les informations suivantes s'affichent :",m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Le type de mesure"),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"La date de naissance du majeur"))),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Cliquez sur les symboles “+” ou/et “-” situés à gauche de l'écran afin de zoomer ou dézoomer sur la carte.")),m.a.createElement(r.MDXTag,{name:"p",components:a},m.a.createElement(r.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://socialgouv.github.io/eMJPM-doc/static/images/individuels/geolocalisation2.png",alt:'comment geolocaliser 2" width="50%"'}})),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"nous-contacter"}},"Nous contacter"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Si vous avez la moindre difficulté pour utiliser e-MJPM, ou si vous souhaitez nous faire part de vos remarques, vous pouvez nous contacter à ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"mailto:contact@emjpm.beta.gouv.fr"}},"contact@emjpm.beta.gouv.fr"),"."))}}])&&s(t.prototype,o),p&&s(t,p),a}()}.call(this,a(150))}},[[217,1,0]]]);