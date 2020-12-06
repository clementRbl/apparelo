<script>
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<style lang="scss">
  .content {
    padding-top: 13rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
  }

  .container {
    width: 80%;
    max-width: 1100px;
    background-color: white;
    padding: 3vh 3vh 10vh 3vh;
    border-radius: 1rem;
    margin-bottom: 10rem;
    box-shadow: 0px 0px 10px 5px;

    p {
      font-size: 1.3rem;
    }
    h4 {
      font-size: x-large;
      &:nth-child(1) {
        margin-top: 2rem;
      }
      margin-top: 6rem;
      line-height: 3rem;
    }

    h5 {
      margin-top: 2rem;
      margin-bottom: 2rem;

      font-weight: 700;

      margin-left: 2rem;
    }
    h6 {
      margin-left: 4rem;
      margin-top: 2rem;
      font-size: 1.8rem;
      &.subtitle {
        font-size: 1.5rem;
        margin-left: 6rem;
      }
    }

    ol,
    ul {
      margin-left: 4rem;
      color: rgb(105, 105, 105);
      font-size: 1.3rem;
    }

    span {
      &.label {
        text-decoration: underline;
      }
    }
    strong {
      font-weight: 400;

      &.italic {
        font-style: italic;
      }
    }
  }
</style>

<!-- <svelte:window bind:scrollY={y} /> -->

<div class="content">
  <div class="container">
    <h4>Mentions légales :</h4>
    <p>
      Le site internet www.apparelo.com est édité par la société APPARELO,
      société par actions simplifiée, au capital de 15.000 €, immatriculée au
      RCS de Grenoble, sous le n°838846988, dont le siège social est sis 9 RUE
      CADET, 75009 PARIS
    </p>
    <p>
      <span class="label">N° de TVA intracommunautaire</span>
      : FR39838846988
    </p>
    <p><span class="label">Email</span> : contact@apparelo.com</p>
    <p><span class="label">Numéro de téléphone</span> : (+33) 07.67.87.43.34</p>
    <p><span class="label">Président</span> : Abdenour BENSOUNA</p>

    <p>
      <span class="label">Directeur de publication</span>
      : Abdenour BENSOUNA, Directeur général de APPARELO
    </p>
    <p>
      <span class="label">Hébergeur</span>
      : ROCKET STUDIO, société par action simplifiée au capital de 50.000 euros,
      immatriculée au RCS de Paris sous le n°87914705600011, dont le siège
      social est sis 31 rue Poissonnière, 75002 Paris, joignable par e-mail à
      l'adresse
      <email>hello@rocketstud.io</email>
    </p>

    <h4>Préambule :</h4>
    <p>
      La société APPARELO est propriétaire du site internet www.apparelo.com
      (ci-après, la
      <strong class="italic">« Plateforme APPARELO »</strong>
      ).
    </p>
    <p>
      Les présentes Conditions générales de vente et d’utilisation (les
      <strong class="italic">« Conditions générales »</strong>
      ) ont pour objet de définir les conditions d’utilisation de la Plateforme
      APPARELO et de souscription aux services qui y sont proposés.
    </p>
    <p>
      L’accès, la consultation et l’utilisation de la Plateforme APPARELO valent
      acceptation sans réserve des présentes Conditions générales, dont les
      usagers déclarent avoir eu connaissance.
    </p>
    <p>
      La société APPARELO se réserve le droit de les mettre à jour et de les
      modifier à tout moment. La version applicable est celle en vigueur à la
      date d’utilisation de la plateforme.
    </p>
  </div>

  <div class="container">
    <h4>Article 1 : Description Générale</h4>
    <div class="article1">
      <p>
        La Plateforme APPARELO est un outil numérique permettant de mettre en
        contact des particuliers (les
        <strong class="italic">« Utilisateurs »</strong>
        ) avec des professionnels de la restauration, désireux de recruter du
        personnel pour des missions spécifiques et temporaires (les
        <strong class="italic">« Partenaires »</strong>
        ).
      </p>
      <p>
        La Plateforme APPARELO est une simple interface de mise en relation, et
        ne revêt en aucun cas la qualité d’employeur, d’agent ou de mandataire
        des Utilisateurs ou des Partenaires.
      </p>
    </div>
    <h4>Article 2 : Fonctionnement de la plateforme Apparelo</h4>
    <div class="article2">
      <h5>2.1. Inscription de l’Utilisateur</h5>

      <h6>2.1.1. Création d’un compte</h6>
      <p>
        La Plateforme APPARELO est librement accessible aux Utilisateurs,
        personnes physiques âgées de plus de 18 ans, disposant d’une pleine
        capacité juridique pour s’engager au titre des présentes.
      </p>
      <p>
        Pour accéder aux services de la Plateforme APPARELO, l’Utilisateur doit
        créer un compte individuel, protégé par un identifiant (adresse email
        valide) et un mot de passe de son choix. La création et l’utilisation de
        ce compte sont placées sous l’entière responsabilité de l’Utilisateur,
        suivant modalités prévues à l’article 4 des présentes.
      </p>
      <p>
        L’Utilisateur est tenu de remplir un formulaire d’inscription en ligne,
        en renseignant ses noms, prénoms, date de naissance et et ses
        coordonnées.
      </p>
      <p>
        Ces informations sont transmises à la société APPARELO après validation
        par l’Utilisateur et acceptation expresse des présentes Conditions
        générales.
      </p>
      <p>
        Dès réception d’un courriel de confirmation d’inscription, l’Utilisateur
        procède à la création de son profil, visible uniquement par les
        Prestataires et contenant notamment les informations suivantes : région
        souhaitée, durée de la prestation, montant de la rémunération souhaitée,
        formation, diplômes et expériences antérieures.
      </p>

      <h6 class="subtitle">
        2.1.1.1 Gratuité des services pour les Utilisateurs
      </h6>
      <p>
        L’accès à la Plateforme APPARELO et l’utilisation de ses services sont
        gratuits pour les Utilisateurs. Les Utilisateurs peuvent ainsi créer
        leur compte, compléter leur profil et entrer en contact avec les
        Partenaires, sans aucune contrepartie financière.
      </p>

      <h5>2.2. Inscription du Partenaire</h5>
      <p>
        Pour accéder aux services de la Plateforme APPARELO, le Partenaire doit
        créer un compte individuel, protégé par un identifiant et un mot de
        passe de son choix. La création et l’utilisation de ce compte sont
        placées sous son entière responsabilité, en application de l’article 5
        des présentes.
      </p>
      <p>
        Le Partenaire est tenu de remplir un formulaire d’inscription en ligne,
        transmis à la société APPARELO, après validation par le Partenaire et
        acceptation expresse des présentes Conditions générales.
      </p>
      <p>
        Dès réception d’un courriel de confirmation d’inscription, le Partenaire
        peut procéder à la création de son profil, et à l’édition d’offres
        d’emploi.
      </p>

      <h6>2.2.1. Modalités financières</h6>
      <p>
        Le Prestataire peut procéder gratuitement à la création de son compte et
        au dépôt de ses annonces d’emploi, dans la limite de 3 par mois (
        <strong class="italic">« Formule Essentiel »</strong>
        ).
      </p>
      <p>
        L’accès aux autres services proposés par la Plateforme APPARELO,
        notamment la consultation des profils des Utilisateurs et la mise en
        contact avec les Utilisateurs, est soumis à la souscription d’un
        abonnement d’une durée déterminée de 12 mois (
        <strong class="italic">« Abonnement Premium»</strong>
        ), suivant les modalités tarifaires et financières annexées aux
        présentes (
        <strong class="italic">Annexe 1 – Modalités tarifaires et financières</strong>
        ).
      </p>
      <h5>2.3. Mise en relation</h5>
      <p>
        Seuls les Utilisateurs et les Prestataires dont l’inscription a été
        validée par la société APPARELO ont un droit d’accès à la plateforme et
        à ses services. La date d’envoi du courriel de confirmation
        d’inscription ou le cas échéant, de confirmation d’Abonnement par la
        société APPARELO constitue la date de conclusion du contrat au sens des
        présentes (
        <strong class="italic">« Date de conclusion du contrat »</strong>
        ).
      </p>
      <p>
        La Plateforme APPARELO est une plateforme d’assistance à la recherche
        d’emploi et uniquement d’assistance. Elle n’est en aucun cas tenue d’une
        quelconque obligation de résultat quant à la conclusion d’un contrat
        entre les Utilisateurs et les Partenaires.
      </p>
      <p>
        En fonction des critères de recherche saisis, elle propose le profil de
        l'Utilisateur à une sélection de Partenaires, qui sont libres d’accepter
        ou de refuser les offres reçues par l’intermédiaire de la Plateforme
        APPARELO.
      </p>
      <p>
        En cas d'acceptation d'une offre par un Partenaire, la société APPARELO
        est tenue d'en informer l'Utilisateur par courrier électronique, via son
        site internet, dans les plus brefs délais.
      </p>
      <p>
        La formation du contrat entre l’Utilisateur et le Partenaire, quelque
        soit sa nature, et la négociation de ses dispositions relève de leur
        entière responsabilité, comme détaillé à l’article 3 des présentes.
      </p>
      <p>
        La société APPARELO pourra recueillir un exemplaire de ce contrat, étant
        souligné que les conditions contractuelles ne sont en aucune façon
        négociées sur la Plateforme APPARELO, qui ne peut engager sa
        responsabilité de ce chef, n’ayant pas la qualité d’employeur, d’agent
        ou de mandataire dans la relation contractuelle créée.
      </p>
      <p>
        L’Utilisateur réalise sa mission auprès du Partenaire, sous son entière
        responsabilité. La Plateforme APPARELO ne sera en aucun cas responsable
        des défauts d’exécution contractuelle qui pourraient être imputés à
        l’Utilisateur ou au Partenaire.
      </p>
      <p>
        L’Utilisateur et le Partenaire engageront ainsi leur responsabilité pour
        toutes les conséquences dommageables résultant des actions, omissions,
        fautes, erreurs, défaillances et négligences qu'ils commettraient au
        titre de chaque contrat. En aucun cas, ils ne sauraient imputer ou
        transférer toute ou partie de cette responsabilité à la Plateforme
        APPARELO.
      </p>

      <h5>2.4. Evaluation</h5>
      <p>
        Le Partenaire est invité à déposer une évaluation de l’Utilisateur, au
        terme de sa mission.
      </p>
      <p>
        Le Partenaire s'engage à ce que les avis soient fondés sur des faits
        vérifiables et soient diffusés uniquement aux fins d'appréciation de la
        qualité du service fourni par l’Utilisateur inscrit sur la Plateforme
        APPARELO.
      </p>
      <p>
        Ainsi, le Partenaire peut former une réclamation sur la qualité de la
        prestation de l’Utilisateur, laquelle est communiquée à la société
        APPARELO, qui en informe sans délai l’Utilisateur afin qu'il puisse
        faire valoir sa position au titre d’un droit de réponse.
      </p>
      <p>
        La société APPARELO se réserve le droit de refuser de publier toute
        évaluation ou commentaire :
      </p>
      <ol class="ordered_list">
        <li>
          susceptible de porter atteinte de quelque manière que ce soit à la
          réputation, à la vie privée, ou à l'image d’un Utilisateur ou d’un
          tiers ;
        </li>
        <li>
          susceptible de porter atteinte à l'ordre public ou aux bonnes mœurs ;
        </li>
        <li>susceptible d’être dénigrant, diffamatoire ou discriminatoire</li>
      </ol>

      <p>
        Les évaluations seront mises en ligne et conservées pendant un délai
        maximum de 2 ans. Les évaluations ne peuvent être modifiées par
        l’Utilisateur ou supprimées de son profil, sauf demande expresse et
        motivée, acceptée par la société APPARELO.
      </p>
    </div>

    <h4>Article 3 : Obligations et Responsabilités de l'Utilisateur</h4>
    <div class="article3">
      <h5>3.1. Services proposés</h5>
      <p>
        La Plateforme APPARELO héberge les demandes et offres d’emploi générées
        par les Utilisateurs et les Partenaires.
      </p>

      <p>
        Par l'intermédiaire de son compte, l'Utilisateur a la possibilité de :
      </p>

      <ol class="ordered_list">
        <li>soumettre sa candidature auprès des Partenaires ;</li>
        <li>
          bénéficier d'un outil de communication avec les Partenaires qui auront
          contracté avec lui ;
        </li>
        <li>
          consulter le listing des Partenaires dont il a pu bénéficier des
          services, avec accès à leurs coordonnées.
        </li>
      </ol>

      <p>
        La société APPARELO fera ses meilleurs efforts pour transmettre les
        candidatures des Utilisateurs aux Partenaires répondant à leurs
        critères.
      </p>
      <p>
        Lorsque le Partenaire notifie son acceptation d'une candidature, la
        Plateforme APPARELO s'engage à en informer l'Utilisateur dans les
        meilleurs délais.
      </p>

      <p>
        La société APPARELO s'engage à fournir ses services de mise en relation
        avec diligence et selon les règles de l'art, étant précisé qu'il pèse
        sur la société APPARELO une obligation de moyens, à l'exclusion de toute
        obligation de résultat quant à la conclusion d’un contrat, ce que les
        Utilisateurs et les Partenaires reconnaissent et acceptent expressément.
      </p>

      <h5>3.2. Accessibilité de la Plateforme</h5>
      <p>
        La société APPARELO s’efforce de rendre ses services accessibles 24
        heures/24 et 7 jours/7. La société APPARELO se réserve le droit, sans
        préavis ni indemnité, de fermer ou restreindre temporairement l’accès à
        ses services, aux fins d’effectuer toute opération de maintenance ou de
        mise à jour.
      </p>
      <p>
        Afin d’assurer le bon fonctionnement de ses services, la société
        APPARELO se réserve le droit de modifier la structure, le format et le
        contenu de sa plateforme et de ses services.
      </p>

      <h5>3.3. Limitation de responsabilité</h5>
      <p>
        Les Utilisateurs et les Partenaires sont des parties indépendantes,
        chacune agissant en son nom personnel et pour son propre compte.
      </p>
      <p>
        La société APPARELO ne procède à aucune vérification quelconque quant à
        l’exactitude et à la véracité des informations communiquées par les
        Utilisateurs et les Partenaires, ce qu’ils reconnaissent expressément.
      </p>
      <p>
        A ce titre, la société APPARELO ne procède à aucune vérification quant à
        la régularité de leur situation administrative, fiscale ou pénale, et ne
        peut à ce titre garantir aux Partenaires que les Utilisateurs disposent
        des documents administratifs et sociaux nécessaires leur permettant
        d'exercer une activité salariée ou non salariée en France. La
        responsabilité de la société APPARELO ne pourra être engagée de ce chef.
      </p>
      <p>
        La société APPARELO ne conclut aucun contrat au nom et/ou pour le compte
        d’un Partenaire ou d’un Utilisateur, ces derniers contractant
        directement entre eux et en dehors de la Plateforme APPARELO.
      </p>
      <p>
        En conséquence, la société APPARELO ne peut en aucun cas être considérée
        comme employé, employeur, agent ou mandant d’un Utilisateur ou d’un
        Partenaire.
      </p>
      <p>
        N’étant pas partie aux contrats qui seraient conclus entre les
        Partenaires et les Utilisateurs, la société APPARELO ne saurait en aucun
        cas voir sa responsabilité engagée en cas de difficultés pouvant
        intervenir lors de la conclusion ou de l'exécution de ces contrats, ni
        être partie à quelque litige que ce soit entre les Utilisateurs et les
        Partenaires, à raison de garanties, déclarations ou obligations
        quelconques auxquelles les Utilisateurs et les Partenaires seraient
        tenus.
      </p>
      <p>
        Plus généralement, la société APPARELO ne pourra être tenu responsable
        d'un préjudice survenu à l'occasion de l’exécution de ces contrats,
        quelque soit sa nature (personnel, physique, matériel, moral ou autre).
        Aucune réclamation ne sera acceptée à ce titre.
      </p>
    </div>

    <h4>Article 4 : Obligations et Responsabilités de l'Utilisateur</h4>
    <div class="article4">
      <p>
        L'Utilisateur atteste être une personne physique, disposant de la pleine
        capacité juridique pour s'engager au titre des présentes et pour
        contracter les services d'un Partenaire.
      </p>
      <p>
        L’Utilisateur garantit que les informations communiquées à la société
        APPARELO sont exactes, sincères et exhaustives et s’engage à les mettre
        à jour sans délai en cas de changement de situation.
      </p>
      <p>
        Le compte de l’Utilisateur est strictement personnel. L’identifiant et
        le mot de passe doivent être gardés strictement confidentiels par
        l’Utilisateur et sont placés sous son entière responsabilité. Toute
        action effectuée depuis le compte de l’Utilisateur est réputée émaner de
        sa personne. Si l’Utilisateur a connaissance d'une utilisation non
        autorisée de son identifiant, de son mot de passe ou de son compte, il
        lui appartient d'en informer immédiatement la société APPARELO en
        écrivant à l'adresse suivante : contact@apparelo.fr
      </p>
      <p>
        Le compte de l’Utilisateur n'est aucunement transférable. Chaque
        Utilisateur doit s'inscrire avec un seul et unique compte. Il n'est pas
        autorisé de créer plusieurs profils. Le cas échéant, la société APPARELO
        se réserve le droit, sans avoir à fournir de motifs, de supprimer les
        profils additionnels et de bloquer l'accès au site aux Utilisateurs
        ayant créé plusieurs comptes.
      </p>
      <p>
        II est interdit à toute personne morale, et à toute personne physique
        agissant pour le compte d'une personne morale, de s'inscrire sur la
        Plateforme en tant qu'Utilisateur, sans l’autorisation écrite préalable
        de la société APPARELO. La société APPARELO se réserve le droit
        d'exclure tout Utilisateur inscrit sur la Plateforme et d'initier toute
        action en justice si elle s’estime victime d'un préjudice quelconque à
        raison de tels agissements, et en particulier en cas d'utilisation à des
        fins commerciales ou de prospection de sa banque de données.
      </p>
      <p>
        L’Utilisateur est seul responsable de sa situation, qui doit être en
        conformité avec les obligations légales, règlementaires,
        administratives, sociales, et fiscales auxquelles il est assujetti,
        outre le paiement des cotisations, taxes et impositions de toutes
        natures qui lui incombent.
      </p>
      <p>
        En particulier, il devra s’assurer qu’il a effectué toutes les démarches
        administratives et sociales nécessaires à l’exercice de son activité.
        Dans le cas où l’Utilisateur dépend d’une législation étrangère, il
        devra veiller, de la même manière, à être en conformité avec les
        obligations spécifiques auxquelles il est soumis.
      </p>
      <p>
        La Plateforme APPARELO est une simple interface de mise en relation, et
        ne revêt en aucun cas la qualité d’employeur, d’agent ou de mandataire
        des Utilisateurs ou des Partenaires.
      </p>
    </div>

    <h4>Article 5 : Obligations et Responsabilités des Partenaires</h4>
    <div class="article5">
      <p>
        Le Partenaire, agissant en tant qu’entreprise indépendante, déclare sans
        exception ni réserve être à jour de ses obligations administratives,
        sociales et fiscales.
      </p>
      <p>
        Le Partenaire déclare également que tous ses salariés sont en situation
        régulière au regard de la réglementation sur le travail des étrangers.
        Il s'engage en outre à respecter la réglementation sur le travail
        dissimulé.
      </p>
      <p>
        Le Partenaire reconnaît expressément qu’il est le seul responsable des
        informations transmises à l'Utilisateur par l'intermédiaire de la
        Plateforme APPARELO. Le Partenaire s’engage à fournir des informations
        exactes, complètes et actualisées et à ne pas usurper l’identité ou la
        qualité de tout tiers.
      </p>
      <p>
        Dans l'hypothèse où les informations transmises seraient erronées ou
        incomplètes, le Partenaire en supportera toutes les conséquences.
      </p>
      <p>
        Toute information incorrecte engage la responsabilité, y compris pénale
        du Partenaire, qui déclare faire application de la réglementation du
        travail en vigueur.
      </p>
      <p>
        Le Partenaire s’engage à faire preuve, dans l'exécution des contrats, de
        toute la diligence et de toute l'attention d'un professionnel averti. Il
        est responsable de la sécurité de son personnel et de la prévention des
        accidents du travail.
      </p>
      <p>
        Il assume seul, les pouvoirs de direction de sa mission et de son
        personnel qu'il a librement choisi.
      </p>
      <p>
        En conséquence, le Partenaire est seul responsable des dommages causés à
        l’Utilisateur et à autrui à l'occasion de l'exécution de ses
        obligations.
      </p>
    </div>

    <h4>Article 6 : Droit de Rétractation et de Résiliation</h4>
    <div class="article6">
      <h5>6.1. Droit de rétraction</h5>
      <p>
        Conformément aux art. L.221-18 et suivants du Code de la consommation,
        l'Utilisateur et le Prestataire sont en droit de se rétracter, dans un
        délai de 14 jours à compter de la Date de conclusion du contrat.
      </p>
      <p>
        L’Utilisateur ou le Partenaire doit notifier sa décision de rétractation
        au moyen d’une déclaration dénuée d’ambigüité, par email à l’adresse
        suivante : contact@apparelo.com, ou par courrier recommandé avec accusé
        de réception à l’adresse suivante : APPARELO, 9 RUE CADET 375009CPARIS
      </p>
      <h5>6.2. Droit de résiliation</h5>
      <h6>6.2.1. Résiliation à l’initiative de l’Utilisateur</h6>
      <p>
        L’Utilisateur est engagé au titre des présentes pour une durée
        indéterminée et peut mettre fin au contrat à tout moment, par lettre
        recommandée avec accusé de réception, avec un préavis de 8 jours.
      </p>
      <h6>6.2.2. Résiliation à l’initiative du Partenaire</h6>
      <p>
        Le Partenaire ayant souscrit à la Formule Essentiel est engagé au titre
        des présentes pour une durée indéterminée et peut mettre fin au contrat
        à tout moment, par lettre recommandée avec accusé de réception, avec un
        préavis de 8 jours.
      </p>
      <p>
        Le Partenaire ayant souscrit à un Abonnement Premium est engagé au titre
        des présentes pour une durée indéterminée de 1, 6 ou 12 mois, à compter
        de la Date de conclusion du contrat et peut y mettre fin à l’expiration
        de ce délai de 1, 6 ou 12 mois, par lettre recommandée avec accusé de
        réception, avec un préavis d’un mois.
      </p>
      <h6>6.2.3. Résiliation en cas de manquement</h6>
      <p>
        En cas de manquement à l'une des dispositions des présentes Conditions
        Générales, ou plus généralement, d'infraction aux lois et règlements par
        l'Utilisateur ou le Partenaire, la société APPARELO se réserve le droit,
        après mise en demeure notifiée par lettre recommandée et demeurée
        infructueuse dans un délai de 7 jours, de :
      </p>
      <ul>
        <li>
          suspendre, supprimer ou empêcher l'accès à ses services à l’auteur du
          manquement ou de l’infraction ;
        </li>
        <li>
          supprimer tout contenu en lien avec le manquement ou l'infraction
          considéré(e), en totalité ou en partie ;
        </li>
        <li>
          prendre toutes les mesures appropriées et engager toute action en
          justice ;
        </li>
        <li>
          avertir le cas échéant les autorités compétentes, coopérer avec elles
          et leur fournir toutes les informations utiles à la recherche et à la
          répression d'activités illégales ou illicites.
        </li>
      </ul>
    </div>

    <h4>Article 7 : Force Majeure</h4>
    <div class="article7">
      <p>
        Aucune responsabilité ne pourra être recherchée en cas d’inexécution des
        présentes pour cas de force majeure au sens de l’article 1218 et suivant
        du Code civil.
      </p>
    </div>

    <h4>Article 8 : Propriété Intellectuelle</h4>
    <div class="article8">
      <p>
        L’ensemble des éléments présents sur la Plateforme APPARELO, en
        particulier, les programmes informatiques, les textes, les images, les
        vidéos, les photographies, les marques, les logos, les noms de domaine,
        relèvent de la propriété exclusive de la société APPARELO ou de ses
        partenaires, à l’exclusion des contenus publiés par les Utilisateurs ou
        les Partenaires.
      </p>
      <p>
        L’extraction, la reproduction ou la représentation, intégrale ou
        partielle, de la Plateforme APPARELO ou d’un des éléments qui la
        composent est formellement interdite.
      </p>
    </div>

    <h4>Article 9 : Protection des données personnelles</h4>
    <div class="article9">
      <p>
        Les présentes Conditions Générales sont établies conformément aux
        dispositions légales relatives à l’informatique, aux fichiers et aux
        libertés et, notamment, au Règlement Général européen sur la Protection
        des Données (RGPD) du 27 avril 2016.
      </p>
      <p>
        Elles s’appliquent à toutes les données à caractère personnel traitées
        par la société APPARELO agissant en qualité de responsable de
        traitement.
      </p>

      <h5>9.1. Définition</h5>

      <p>
        Une donnée à caractère personnel consiste en toute information se
        rapportant à une personne physique identifiée ou identifiable.(Les
        Données à caractère personnel).
      </p>

      <h5>9.2. Base juridique des traitements</h5>
      <ul>
        <li>
          <strong>Contrat :</strong>
          La Société APPARELO traite la plupart des données à caractère
          personnel dans le cadre du contrat de service conclu lors de l’
          inscription des Utilisateurs et des Partenaires sur le site internet
          de la société APPARELO via l’acceptation des Conditions Générales de
          Vente et d’Utilisation ; Ainsi, toutes les données à caractère
          personnel communiquées lors de la création et la gestion du profil de
          l’Utilisateur ou du Partenaire ainsi que les données nécessaires à la
          création, au suivi et à la facturation, les échanges avec le service
          support ou dans le cadre de la messagerie sécurisée et les
          communications adressées, en lien avec les services proposés par la
          Société APPARELO ou au suivi du compte de l’Utilisateur ou du
          Partenaire, sont traitées dans ce cadre légal.
        </li>
        <li>
          <strong>Intérêt légitime:</strong>
          certaines données sont traitées sur la base de l’intérêt légitime de
          la Société APPARELO à des fins de gestion et sécurisation des accès au
          site internet de la Société APPARELO, de lutte contre la fraude et de
          justification de la comptabilité (édition des factures).
        </li>
        <li>
          <strong>Consentement:</strong>
          La société APPARELO est susceptible de recueillir le consentement
          préalable de l’Utilisateur ou du Partenaire concernant le traitement
          de certaines données, lorsqu’il souhaite recevoir des offres
          commerciales/la newsletter.
        </li>
        <li>
          <strong>Obligations légales:</strong>
          certaines données sont traitées en raison des obligations légales qui
          sont imposées dans le cadre de la gestion des paiements réalisés via
          la plateforme et notamment de la lutte contre le terrorisme et le
          blanchiment d’argent.
        </li>
      </ul>

      <h5>9.3. Données personnelles collectées</h5>
      <p>
        Des données à caractère personnel sont renseignées par les Utilisateurs
        et les Partenaires lors de la création de leur compte et de leur profil,
        ainsi qu’à l’occasion de la mise à jour de ceux-ci.
      </p>
      <p>
        Toutes les données concernant les Utilisateurs et les Partenaires sont
        collectées directement auprès d’eux.
      </p>
      <p>
        La Société APPARELO les informe de la collecte du caractère obligatoire
        ou non de la donnée à caractère personnel.
      </p>
      <p>
        Les Utilisateurs font ainsi état de leurs noms, prénoms, date de
        naissance et adresse électronique au moment de l’ouverture de leur
        compte, puis sont invités à compléter leur profil, sur lequel ils
        peuvent faire figurer leur adresse, leur numéro de téléphone, ainsi que
        leurs expériences professionnelles passées, catégorie professionnelle,
        compétences, certifications, formations, préférences de mission,
        intégration des réseaux sociaux, prétentions salariales, . informations
        sur les missions réalisées (Commentaires,avis).
      </p>
      <p>
        La Plateforme APPARELO ne recueille ni ne collecte aucune donnée
        financière concernant les Utilisateurs, pour qui les services sont
        gratuits, conformément à l’article 2.1 des présentes.
      </p>
      <p>
        Les Partenaires renseignent quant à eux leur dénomination sociale ainsi
        que leur adresse électronique, avant de compléter leur profil, lequel
        peut faire apparaître les noms et coordonnées des personnes en charge du
        recrutement et des interlocuteurs des Utilisateurs,.le secteur
        d’activité, le nombre d’employés, le logo de l’entreprise, la structure
        juridique, les avis et commentaires.
      </p>
      <p>
        La Plateforme APPARELO ne recueille ni ne collecte aucune donnée
        financière concernant les Partenaires souscrivant à la Formule
        Essentiel, laquelle est gratuite, conformément à l’article 2.2 des
        présentes. Seules sont recueillies les données financières relatives au
        compte bancaire ou à la carte de crédit des Partenaires ayant souscrit à
        la Formule Premium, les coordonnées de facturation, le contact de
        comptabilité et sont conservées durant le temps strictement nécessaire à
        la transaction.
      </p>
      <p>
        Les informations suivantes générées par l’utilisation de la plateforme
        font l’objet de traitements :
      </p>
      <ul>
        <li>
          Données de navigation
          <ul>
            <li>Cookies et adresse IP</li>
          </ul>
        </li>
        <li>
          Informations relatives aux transactions
          <ul>
            <li>Détails des transactions</li>
          </ul>
        </li>
        <li>Recommandations externes</li>
        <li>
          Données relatives à l’utilisation de la messagerie sécurisée
          <ul>
            <li>Identifiants des utilisateurs</li>
            <li>Date et heure d’envoi</li>
            <li>Contenu</li>
          </ul>
        </li>
        <li>statistiques d’utilisation de la messagerie sécurisée;</li>
        <li>
          statistiques sur les évaluations de fin de mission (commentaires
          laissés par les Utilisateurs et les Partenaires notes moyennes);
        </li>
        <li>données de connexion et de navigation des utilisateurs,</li>
        <li>
          données statistiques sur l’utilisation du moteur de recherche et du
          formulaire de contact;
        </li>
        <li>statistiques d’utilisation des différents modules du Site</li>
        <li>
          Les statistiques portent également sur des données commerciales telles
          que le nombre de missions réalisées.
        </li>
      </ul>

      <p>
        La Société APPARELO ne traite pas de catégories particulières de données
        (données sensibles) telles que les données qui révèlent l'origine
        raciale ou ethnique, les opinions politiques, les convictions
        religieuses ou philosophiques ou l'appartenance syndicale, des données
        génétiques, des données biométriques, des données concernant la santé ou
        des données concernant la vie sexuelle ou l'orientation sexuelle des
        personnes.
      </p>
      <h5>9.4. Finalités de la collecte des données personnelles</h5>
      <p>
        La finalité de ce traitementdes traitements est d’assurer une mise en
        relation optimale des Utilisateurs et des Partenaires, qui constitue
        l’objet même de la Plateforme APPARELO.
      </p>
      <p>
        Il est indiqué, très précisément dans le registre des activités de
        traitement de la société APPARELO, la finalité précise de chacun des
        traitements de données à caractère personnel
      </p>

      <p>En particulier, ces données sont destinées à :</p>
      <ul>
        <li>
          La création et la gestion du compte de l’utilisateur ou du Partenaire,
        </li>
        <li>
          L’utilisation des services du site,
          <ul>
            <li>
              l’optimisation du référencement dans le moteur de recherche,
            </li>
            <li>S’assurer que les missions proposées soient pertinentes,</li>
            <li>
              Permettre la communication entre Utilisateurs et Partenaires par
              la mise à disposition d’une messagerie instantanée sécurisée,
            </li>
            <li>
              Effectuer un suivi personnalisé pour n’ adresser que des
              communications pertinentes, adaptées aux besoins des Utilisateurs
              et des Partenaires et directement en lien avec les services du
              site,
            </li>
          </ul>
        </li>
        <li>
          La gestion des flux financiers intervenant via la plateforme et
          notamment, la facturation des missions et des paiements ainsi que,
          conformément à la loi, la lutte contre le terrorisme et le blanchiment
          d’argent,
        </li>
        <li>statistiques de suivi de l’audience des pages ,</li>
        <li>Garantir la qualité des profils, lutter contre la fraude,</li>
        <li>
          Communiquer avec les Utilisateurs et les Partenaires : informations
          recueillies pour communiquer au sujet des produits, des services, des
          promotions, des études, des enquêtes, des actualités, des mises à jour
          et des événements.
        </li>
      </ul>

      <h5>9.5. Registre des activités de traitement</h5>
      <p>
        Conformément au Règlement nᵒ 2016/679, dit règlement général sur la
        protection des données (« RGPD »), les informations recueillies sont
        enregistrées dans le Registre de traitement des Données à caractère
        personnel par la société APPARELO, prise en la personne de son
        Président, Responsable du traitement. A ce titre, le Responsable du
        traitement prend toutes les précautions nécessaires aux fins de
        préserver la sécurité des Données à caractère personnel.
      </p>
      <p>
        Le Registre de traitement des Données à caractère personnel comprend,
        pour chaque activité de traitement :
      </p>
      <ul>
        <li>le nom et les coordonnées du responsable du traitement,</li>
        <li>la base juridique du traitement,</li>
        <li>
          les finalités du traitement et/ou l’objectif en vue duquel les données
          personnelles sont collectées,
        </li>
        <li>les catégories de personnes concernées,</li>
        <li>les catégories de données personnelles,</li>
        <li>
          les catégories de destinataires auxquels les données personnelles ont
          été ou seront communiquées,
        </li>
        <li>
          les éventuels transferts de données personnelles vers un pays tiers ou
          à une organisation internationale et, dans certains cas très
          particuliers, les garanties prévues pour ces transferts,
        </li>
        <li>
          les délais prévus pour l'effacement des différentes catégories de
          données, c’est-à-dire la durée de conservation, ou à défaut les
          critères permettant de la déterminer,
        </li>
        <li>
          une description générale des mesures de sécurité techniques et
          organisationnelles qui ont été mises en œuvre.
        </li>
      </ul>

      <h5>9.6. Partage des données personnelles</h5>
      <p>
        La Société APPARELO est susceptible de partager les données personnelles
        notamment pour les raisons suivantes :
      </p>
      <ul>
        <li>Mise en relation des Utilisateurs et des Partenaires ;</li>
        <li>
          respecter une obligation légale, réglementaire ou conventionnelle, par
          exemple prévenir la commission d’une infraction ou d’un délit ;
        </li>
        <li>
          gérer un contentieux ou agir pour la défense des droits de la société
          APPARELO.
        </li>
      </ul>
      <p>
        La société APPARELO est susceptible de partager les données personnelles
        avec :
      </p>
      <ul>
        <li>
          des sous-traitants, des mandataires, des prestataires de services, qui
          travaillent pour la société APPARELO (en ce compris leurs salariés et
          leurs dirigeants) ;
        </li>
        <li>
          les conseils, avocats, commissaires aux comptes de la société APPARELO
          ;
        </li>
        <li>
          des établissements financiers, des autorités fiscales, des
          associations professionnelles et des agences de recouvrement des
          créances ;
        </li>
        <li>
          des autorités administratives indépendantes ou des organismes de
          résolution des litiges et afin de se conformer à leurs demandes ;
        </li>
        <li>
          le gouvernement français, les autorités/juridictions judiciaires ou
          administratives.
        </li>
      </ul>
      <p>
        Il est à noter que les données anonymes peuvent être partagées librement
        puisqu’il ne s’agit pas de données personnelles.
      </p>
      <p>
        La Société APPARELO ne revend pas les informations ou documents confiés
        par les Utilisateurs et Prestataires et ne divulgue pas les données à
        caractère personnel en dehors des situations décrites dans les présentes
        Conditions Générales.
      </p>

      <h5>9.7. Durée de conservation des données à caractère personnel</h5>
      <p>
        La durée de conservation des Données à caractère personnel dépend, sauf
        si un texte juridique impose une durée précise, de la nature des données
        et des objectifs poursuivis.
      </p>
      <p>
        Certaines données peuvent être conservées pour la durée correspondant à
        la prescription applicable s’agissant de la gestion de réclamations
        et/ou contentieux ainsi que pour répondre aux obligations légales ou
        réglementaires ou encore pour répondre à des demandes d’autorités
        habilitées.
      </p>
      <p>
        En cas de désactivation du compte de l’Utilisateur ou du Partenaire pour
        quelque motif que ce soit, le contenu et les Ddonnées à caractère
        personnel transmises sont supprimées de la Plateforme APPARELO dans un
        délai de 15 jours. Toutefois, APPARELO conservera ces données après la
        fermeture du compte, dans un délai maximal de 2 ans, pour remplir ses
        obligations légales (y compris les demandes des autorités), respecter
        les exigences règlementaires, résoudre les litiges, maintenir la
        sécurité, empêcher les fraudes et les abus.
      </p>
      <p>
        Au-delà de la durée nécessaire au traitement des Données à caractère
        personnel, ces données sont détruites en toute sécurité ou sont rendues
        totalement anonymes.
      </p>
      <p>
        Il est indiqué, très précisément, dans les registres des activités de
        traitement, la durée de conservation de chacun des traitements de
        données personnelles du Groupe ou, lorsque ce n’est pas possible, les
        critères permettant de déterminer cette durée.
      </p>

      <h5>
        9.8. Droits des personnes dont les données personnelles sont traitées et
        modalités d’exercice
      </h5>
      <p>
        Les droits suivants peuvent être exercés par les personnes sur les
        données personnelles les concernant :
      </p>
      <ul>
        <li>
          <strong>un droit d’accès :</strong>
          le droit d’obtenir des informations sur les données détenues et sur
          les traitements mis en œuvre ;
        </li>
        <li>
          <strong>un droit de rectification :</strong>
          le droit de modifier ou corriger les données inexactes ou incomplètes
          ;
        </li>
        <li>
          <strong>un droit d’opposition :</strong>
          le droit de s’opposer au traitement de données personnelles, dans
          certaines circonstances. A noter que le Groupe est susceptible de
          continuer à traiter les données personnelles s’il a une raison
          légitime de le faire ;
        </li>
        <li>
          <strong>un droit à l’effacement :</strong>
          le droit de demander la suppression des données personnelles dans
          certaines circonstances (notamment lorsque ces données ne sont plus
          nécessaires au regard des finalités pour lesquelles elles ont été
          traitées). A noter que plusieurs raisons légitimes peuvent imposer de
          conserver des données comme, par exemple, le respect d’une obligation
          légale ou la nécessité d’exercer ou de défendre les droits du Groupe
          en justice ;
        </li>
        <li>
          <strong>un droit à la limitation :</strong>
          le droit de demander de limiter le traitement des données dans
          certaines circonstances (notamment lorsque l’exactitude des données
          est contestée). A noter qu’en cas de limitation du traitement, le
          Groupe peut toujours utiliser ces données avec le consentement de la
          personne ou, dans certains cas, comme, par exemple, pour l’exercice ou
          la défense de ses droits en justice
        </li>
      </ul>

      <p>
        Conformément à la règlementation en vigueur, les Utilisateurs et les
        Partenaires bénéficient d’un droit d’accès, de modification et de
        suppression des données personnellesà caractère personnel les
        concernant, sur simple demande auprès du Responsable du traitement, par
        email à l’adresse contact@apparelo.com ou par courrier à son attention,
        à l’adresse suivante : APPARELO, 940 Route de Bachat Bouloud 38410
        CHAMROUSSE.
      </p>
      <p>
        Si l’Utilisateur ou le Partenaire estime, après avoir contacté la
        société WORKNGOO que ses droits « Informatique et Libertés » ne sont pas
        respectés, il pourra adresser une réclamation à la CNIL. (3 Place de
        Fontenoy - TSA 80715 - 75334 Paris - Cedex 07).
      </p>

      <h5>9.9. Confidentialité et sécurité des données personnelles</h5>
      <p>
        La Société APPARELO met en œuvre des mesures techniques et
        organisationnelles afin de protéger les Données à caractère personnel :
        elle impose à son personnel et tous les tiers travaillant pour lui de
        respecter des normes strictes en matière de sécurité et de protection de
        l’information.
      </p>
      <p>
        Les serveurs sur lesquels les données sont conservées et ceux des
        prestataires utilisés pour échanger et stocker ces données sont
        localisés en Europe.
      </p>
      <p>
        Les mesures techniques et organisationnelles appropriées sont mises en
        oeuvreœuvre afin de garantir la sécurité, la confidentialité,
        l'intégrité, la disponibilité et la résilience constantes du système
        d’information de la société APPARELO et protéger les données à caractère
        personnel contre la destruction, la perte, l'altération, la divulgation
        non autorisée ou l'accès non autorisé.
      </p>
      <ul>
        <li>
          La plupart des services sont chiffrés à l’aide de la technologie SSL;
        </li>
        <li>L’adresse email est vérifiée lors de la création du compte;</li>
        <li>
          L’accès aux données personnelles est strictement réservé aux salariés
          et prestataires de la Société APPARELO ayant besoin d'en connaitre.
          Ces personnes sont soumises à de strictes obligations de
          confidentialité et sont susceptibles de faire l’objet de sanctions
          disciplinaires pouvant aller jusqu’au licenciement en cas de
          manquement à ces obligations;
        </li>
      </ul>
      <p>
        En cas de violation de données à caractère personnel concernant, la
        Société APPARELO s’engage à :
      </p>
      <ul>
        <li>
          notifier la violation à la CNIL dans les meilleurs délais et, si
          possible, 72 heures au plus tard après en avoir pris connaissance, à
          moins que la violation en question ne soit pas susceptible d’engendrer
          un risque pour les droits et libertés ;
        </li>
        <li>
          notifier à la personne concernée la violation dans les meilleurs
          délais si celle-ci est susceptible d’engendrer un risque élevé pour
          ses droits et libertés sauf si l’information n’est pas nécessaire
        </li>
      </ul>
    </div>

    <h4>Article 10 : Liens Hypertextes et Cookies</h4>
    <div class="article10">
      <p>
        La Société APPARELO utilise des cookies d’authentification, cookies de
        sécurité et cookies relatifs à l’intégrité du site, cookies de
        localisation, cookies liés à la fonctionnalité du site et services, des
        cookies d’analyses et de recherche et des cookies pour diffuser des
        messages publicitaires.
      </p>
      <p>
        Les Utilisateurs et les Partenaires disposent toutefois de la
        possibilité de s’opposer à l'utilisation des cookies en configurant leur
        logiciel de navigation.
      </p>
      <p>
        La société APPARELO et décline toute responsabilité quant aux liens
        hypertextes pouvant apparaître sur la Plateforme APPARELO et sur
        lesquels elle n’exerce aucun contrôle.
      </p>
    </div>

    <h4>Article 11 : Intégralité</h4>
    <div class="article11">
      <p>
        Dans l'hypothèse où l'une des dispositions des présentes Conditions
        générales serait déclarée nulle ou caduque, par un changement de
        législation ou une décision de justice, cela ne saurait en aucun cas
        affecter la validité et le respect des autres dispositions des
        présentes.
      </p>
    </div>

    <h4>Article 12 : Droit applicable et Règlement des différends</h4>
    <div class="article12">
      <p>
        Les présentes Conditions générales sont régies par la loi française.
      </p>
      <p>
        Tout litige relatif à leur conclusion, leur interprétation ou leur
        exécution relève de la compétence exclusive des Tribunaux de Paris.
      </p>
    </div>
  </div>

  <div class="container">
    <h4>Annexe 1 : Modalités Tarifaires Financières</h4>
    <h5>A. Prix et Paiement</h5>
    <div class="annexe1">
      <p>Le prix s’entend en euros et hors taxes.</p>
      <p>
        Le prix des abonnements est mentionné dans l’onglet « Tarifs &
        abonnements »
      </p>
      <p>Le paiement s’effectue par paiement sécurisé en ligne</p>
      <p>
        En cas de retard de paiement, seront exigibles, conformément à l’article
        L441-6 du Code de commerce, une indemnité calculée sur la base de dix
        fois le taux de l’intérêt légal en vigueur ainsi qu’une indemnité pour
        frais de recouvrement de 40 (quarante) euros.
      </p>
    </div>
    <h4>Annexe 2 : Offres d'emploi Pôle Emploi</h4>
    <div class="annexe2">
      <p>
        Les offres d'emploi accessibles via le site « Apparelo » sont fournies
        par l'API Offres d'emploi de Pôle Emploi, et sont repérées par le logo
        de Pôle Emploi.
      </p>
    </div>
  </div>
</div>
